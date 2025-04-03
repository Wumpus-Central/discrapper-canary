n(47120);
var r = n(442837),
    i = n(570140),
    l = n(513418),
    a = n(710845),
    o = n(592125),
    s = n(375954),
    c = n(625236);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let d = -1 / 0,
    p = new a.Z('MessagePreviewStore');
class h extends r.ZP.Store {
    isLatest(e, t) {
        var n;
        let r = this.guilds.get(null != e ? e : null);
        return null != (n = null == r ? void 0 : r.isLatest(t, this.generation)) && n;
    }
    isLocalFetchNeeded(e) {
        var t, n;
        return null == (n = null == (t = this.guilds.get(e)) ? void 0 : t.localNeeded) || n;
    }
    message(e, t) {
        var n, r;
        return null != (r = null == (n = this.guilds.get(e)) ? void 0 : n.messageRecord(t)) ? r : null;
    }
    data(e) {
        return this.guilds.has(e) || this.guilds.set(e, new c.B()), this.guilds.get(e);
    }
    handleOneGuildCreate(e) {
        var t, n;
        let r = this.data(e.id);
        r.putMany(null != (t = e.lastMessages) ? t : [], this.generation), r.putMany(null != (n = e.threadMessages) ? n : [], this.generation), null != e.lastMessages && (r.localNeeded = !1);
    }
    handleConnectionOpen(e) {
        for (let t of ((this.generation += 1), e.guilds)) this.handleOneGuildCreate(t);
    }
    handleGuildCreate(e) {
        this.handleOneGuildCreate(e.guild);
    }
    handleGuildDelete(e) {
        this.guilds.delete(e.guild.id);
    }
    handleMessageCreate(e) {
        var t;
        if (e.optimistic || e.isPushNotification) return !1;
        this.data(null != (t = e.guildId) ? t : null).put(e.message.channel_id, e.message, this.generation);
    }
    handleMessageDelete(e) {
        var t, n;
        let r = null != (n = e.guildId) ? n : null;
        if ((null == (t = this.data(r)) ? void 0 : t.messageId(e.channelId)) === e.id) {
            let t = s.Z.getMessages(e.channelId),
                n = t.hasMoreAfter ? null : t.last();
            null != n ? this.data(r).put(e.channelId, n, this.generation) : this.data(r).delete(e.channelId);
        }
    }
    handleMessageUpdate(e) {
        var t;
        let n = null != (t = e.guildId) ? t : null,
            r = e.message.channel_id,
            i = e.message.id;
        if (null == r || null == i) return !1;
        let l = this.data(n);
        if ((null == l ? void 0 : l.messageId(r)) !== i) return !1;
        null == l || l.update(e.message);
    }
    handleThreadListSync(e) {
        var t;
        this.data(e.guildId).putMany(null != (t = e.mostRecentMessages) ? t : [], this.generation);
    }
    handleLoadMessagesSuccess(e) {
        var t, n;
        let r = o.Z.getBasicChannel(e.channelId);
        if (null == r) return !1;
        (0, l.Z)(e.messages), e.isAfter || e.isBefore || e.hasMoreAfter ? this.data(r.guild_id).putNew(e.channelId, null != (n = e.messages[0]) ? n : null, this.generation) : this.data(r.guild_id).put(e.channelId, null != (t = e.messages[0]) ? t : null, this.generation);
    }
    handleLocalMessagesLoaded(e) {
        let t = o.Z.getBasicChannel(e.channelId);
        if (null != t) {
            var n;
            (0, l.Z)(e.messages), this.data(t.guild_id).putNew(e.channelId, null != (n = e.messages[0]) ? n : null, d);
        }
    }
    handleMessagePreviewsLoaded(e) {
        p.verbose('adding remote previews (guildId: '.concat(e.guildId, ', messages: ').concat(e.messages.length, ')'));
        let t = this.data(e.guildId);
        for (let n of e.messages) t.isLatest(n.channel_id, this.generation) || t.put(n.channel_id, n, this.generation);
    }
    handleMessagePreviewsLocallyLoaded(e) {
        p.verbose('adding local previews (guildId: '.concat(e.guildId, ', messages: ').concat(e.messages.length, ')'));
        let t = this.data(e.guildId);
        for (let [n, r] of e.messages) t.has(n) || t.put(n, r, d);
        t.localNeeded = !1;
    }
    handleLogout(e) {
        this.guilds.clear();
    }
    constructor() {
        super(i.Z, {
            CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
            GUILD_CREATE: (e) => this.handleGuildCreate(e),
            GUILD_DELETE: (e) => this.handleGuildDelete(e),
            LOAD_MESSAGES_SUCCESS: (e) => this.handleLoadMessagesSuccess(e),
            LOCAL_MESSAGES_LOADED: (e) => this.handleLocalMessagesLoaded(e),
            LOGOUT: (e) => this.handleLogout(e),
            MESSAGE_CREATE: (e) => this.handleMessageCreate(e),
            MESSAGE_DELETE: (e) => this.handleMessageDelete(e),
            MESSAGE_PREVIEWS_LOADED: (e) => this.handleMessagePreviewsLoaded(e),
            MESSAGE_PREVIEWS_LOCALLY_LOADED: (e) => this.handleMessagePreviewsLocallyLoaded(e),
            MESSAGE_UPDATE: (e) => this.handleMessageUpdate(e),
            THREAD_LIST_SYNC: (e) => this.handleThreadListSync(e)
        }),
            u(this, 'guilds', new Map()),
            u(this, 'generation', 0);
    }
}
new h();
