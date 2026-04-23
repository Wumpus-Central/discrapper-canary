n.d(t, { A: () => c });
var i = n(439372),
    r = n(967198),
    a = n(698441),
    s = n(496092);
let _ = {},
    l = new Set(),
    o = new Set(),
    E = async (e) => {
        if (!(0 === a.Ay.getGuildScheduledEventsForGuild(e).length || l.has(e)) && !o.has(e))
            try {
                l.add(e), await s.A.getGuildEventsForCurrentUser(e), o.add(e);
            } catch (t) {
                l.delete(e);
            }
    };
class d extends i.A {
    actions = {
        POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
        GUILD_DELETE: (e) => this.handleGuildDelete(e),
        GUILD_UNAVAILABLE: (e) => this.handleGuildUnavailable(e),
        INVITE_RESOLVE_SUCCESS: (e) => this.handleInviteResolveSuccess(e),
        CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
    };
    async getGuildEventUserCounts(e, t, n) {
        let i = n.filter((n) => null == _[`${e}-${t}-${n}`] || Date.now() - _[`${e}-${t}-${n}`] > 18e5);
        if (!(Date.now() - _[`${e}-${t}`] < 18e5) || 0 !== i.length) {
            (_[`${e}-${t}`] = Date.now()), i.forEach((n) => (_[`${e}-${t}-${n}`] = Date.now()));
            try {
                await s.A.fetchGuildEventUserCounts(e, t, i);
            } catch (e) {}
        }
    }
    getGuildEventUsers(e, t, n) {
        return s.A.fetchUsersForGuildEvent(e, t, n);
    }
    getGuildEventsForCurrentUser(e) {
        return E(e);
    }
    async handleConnectionOpen() {
        l.clear(), o.clear(), (_ = {}), r.A.getLastSelectedGuildId();
    }
    handleGuildUnavailable(e) {
        let { guildId: t } = e;
        l.delete(t), o.delete(t), delete _[t];
    }
    handleGuildDelete(e) {
        let { guild: t } = e,
            n = t.id;
        l.delete(n), o.delete(n), delete _[n];
    }
    handleInviteResolveSuccess(e) {
        let { invite: t } = e,
            n = t.guild_scheduled_event,
            i = t.guild?.id;
        null != n && null != i && E(i);
    }
    async handleChannelSelect(e) {
        let { guildId: t } = e;
        if (null != t)
            for (let e of a.Ay.getGuildScheduledEventsForGuild(t))
                try {
                    await this.getGuildEventUserCounts(t, e.id, []);
                } finally {
                    await new Promise((e) => setTimeout(e, 200 * Math.random() + 50));
                }
    }
}
let c = new d();
