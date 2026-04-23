n.d(t, { A: () => f });
var l = n(735438),
    i = n.n(l),
    r = n(562465),
    s = n(73153),
    a = n(439372),
    u = n(723176),
    o = n(626584),
    d = n(142120);
n(95701);
var c = n(961350),
    h = n(734057),
    g = n(946132),
    m = n(937136),
    I = n(652215);
let E = new o.A("MessagePreviewManager");
class A extends a.A {
    remote = new Map();
    remoteTicking = !1;
    tickQueued = !1;
    localFetching = new Set();
    actions = {
        CONNECTION_OPEN_SUPPLEMENTAL: () => this.handleConnectionOpenSupplemental(),
        CONNECTION_RESUMED: () => this.handleConnectionResumed(),
        GUILD_CREATE: (e) => this.handleGuildCreate(e),
        GUILD_DELETE: (e) => this.handleGuildDelete(e),
        LOAD_MESSAGES_SUCCESS: (e) => this.handleMessagesLoaded(e),
        LOCAL_MESSAGES_LOADED: (e) => this.handleMessagesLoaded(e),
        LOGOUT: () => this.handleLogout(),
        MESSAGE_CREATE: (e) => this.handleMessageCreate(e),
        MESSAGE_DELETE: (e) => this.handleMessageDelete(e),
        MESSAGE_UPDATE: (e) => this.handleMessageUpdate(e),
        THREAD_LIST_SYNC: (e) => this.handleThreadListSync(e),
    };
    addWant(e) {
        h.A.getBasicChannel(e);
    }
    remoteTick = i().debounce(
        (() => {
            var e = this;
            return async function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                if (!d.A.isConnected()) {
                    e.tickQueued = !0;
                    return;
                }
                if (!e.remoteTicking && !(t > 5)) {
                    e.tickQueued = !1;
                    try {
                        for (let [t, n] of ((e.remoteTicking = !0), e.remote))
                            await (null == t ? e.fetchDms(n) : e.fetchGuilds(t, n));
                        e.cleanup(), (e.remoteTicking = !1);
                    } catch (n) {
                        E.log(`couldn't fetch message previews (attempt: ${t}, error: ${n})`),
                            (e.remoteTicking = !1),
                            e.remoteTick(t + 1);
                    }
                }
            };
        })(),
        100,
    );
    async fetchLocal(e) {
        if (!(!g.A.isLocalFetchNeeded(e) || this.localFetching.has(e)))
            try {
                E.verbose(`fetching local previews (via: database, guild_id: ${e})`), this.localFetching.add(e);
                let t = c.default.getId(),
                    n = await u.A.messages()?.getMostRecents(e);
                null != n &&
                    t === c.default.getId() &&
                    s.h.dispatch({
                        type: "MESSAGE_PREVIEWS_LOCALLY_LOADED",
                        guildId: e,
                        messages: n.map((e) => {
                            let [t, n] = e;
                            return [t, n.message];
                        }),
                    });
            } catch (e) {
                E.log(`couldn't fetch local previews (error: ${e})`);
            } finally {
                this.localFetching.delete(e);
            }
    }
    fetchGuilds(e, t) {
        let n = t.nextWants(1e3);
        return 0 === n.length
            ? Promise.resolve()
            : t.try(
                  n,
                  () => (
                      E.verbose(`fetching guild previews (via: gateway, guild_id: ${e}, channel_ids: ${n.join(", ")})`),
                      d.A.getSocket().requestLastMessages(e, n),
                      Promise.resolve()
                  ),
              );
    }
    fetchDms(e) {
        let t = e.nextWants(30);
        return 0 === t.length
            ? Promise.resolve()
            : e.try(t, async () => {
                  E.verbose(`fetching dm previews (via: http, channel_ids: ${t.join(", ")})`);
                  let e = (
                      await r.Bo.post({ url: I.Rsh.MESSAGE_PREVIEWS, body: { channel_ids: t }, rejectWithError: !1 })
                  ).body;
                  s.h.dispatch({ type: "MESSAGE_PREVIEWS_LOADED", guildId: null, messages: e });
              });
    }
    syncChannel(e, t) {
        let n = this.remote.get(e);
        null != n && g.A.isLatest(e, t) && n.removeWant(t);
    }
    getOrCreate(e) {
        return this.remote.has(e) || this.remote.set(e, new m.p()), this.remote.get(e);
    }
    cleanup() {
        for (let [e, t] of this.remote) t.empty() && this.remote.delete(e);
    }
    handleConnectionOpenSupplemental() {
        this.handleConnectionResumed(!1);
    }
    handleConnectionResumed() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        this.tickQueued && !this.remoteTicking
            ? (this.remoteTick(), this.remoteTick.flush())
            : e && (this.localFetching.clear(), this.remote.clear(), (this.remoteTicking = !1));
    }
    handleGuildCreate(e) {
        this.remote.delete(e.guild.id);
    }
    handleGuildDelete(e) {
        this.remote.delete(e.guild.id);
    }
    handleLogout() {
        this.localFetching.clear(), this.remote.clear(), (this.remoteTicking = !1);
    }
    handleMessageCreate(e) {
        this.syncChannel(e.guildId ?? null, e.channelId);
    }
    handleMessageDelete(e) {
        this.syncChannel(e.guildId ?? null, e.channelId);
    }
    handleMessageUpdate(e) {
        null != e.message.channel_id && this.syncChannel(e.guildId ?? null, e.message.channel_id);
    }
    handleMessagesLoaded(e) {
        let t = h.A.getBasicChannel(e.channelId),
            n = t?.guild_id ?? null;
        if (null != t) for (let t of e.messages ?? []) this.syncChannel(n, t.channel_id);
    }
    handleThreadListSync(e) {
        let t = this.remote.get(e.guildId);
        if (null != t) for (let n of e.mostRecentMessages ?? []) t.removeWant(n.channel_id);
    }
}
let f = new A();
