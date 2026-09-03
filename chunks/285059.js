n.d(t, { A: () => _ });
var i = n(439372),
    r = n(967198),
    a = n(698441),
    s = n(496092);
let l = {},
    o = new Set(),
    d = new Set();
async function c(e) {
    if (!(0 === a.Ay.getGuildScheduledEventsForGuild(e).length || o.has(e)) && !d.has(e))
        try {
            o.add(e), await s.default.getGuildEventsForCurrentUser(e), d.add(e);
        } catch (t) {
            o.delete(e);
        }
}
class u extends i.A {
    actions = {
        POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
        GUILD_DELETE: (e) => this.handleGuildDelete(e),
        GUILD_UNAVAILABLE: (e) => this.handleGuildUnavailable(e),
        INVITE_RESOLVE_SUCCESS: (e) => this.handleInviteResolveSuccess(e),
        CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
    };
    async getGuildEventUserCounts(e, t, n) {
        let i = n.filter((n) => null == l[`${e}-${t}-${n}`] || Date.now() - l[`${e}-${t}-${n}`] > 18e5);
        if (!(Date.now() - l[`${e}-${t}`] < 18e5) || 0 !== i.length) {
            (l[`${e}-${t}`] = Date.now()), i.forEach((n) => (l[`${e}-${t}-${n}`] = Date.now()));
            try {
                await s.default.fetchGuildEventUserCounts(e, t, i);
            } catch (e) {}
        }
    }
    getGuildEventUsers(e, t, n) {
        return s.default.fetchUsersForGuildEvent(e, t, n);
    }
    getGuildEventsForCurrentUser(e) {
        return c(e);
    }
    async handleConnectionOpen() {
        o.clear(), d.clear(), (l = {}), r.A.getLastSelectedGuildId();
    }
    handleGuildUnavailable(e) {
        let { guildId: t } = e;
        o.delete(t), d.delete(t), delete l[t];
    }
    handleGuildDelete(e) {
        let { guild: t } = e,
            n = t.id;
        o.delete(n), d.delete(n), delete l[n];
    }
    handleInviteResolveSuccess(e) {
        let { invite: t } = e,
            n = t.guild_scheduled_event,
            i = t.guild?.id;
        null != n && null != i && c(i);
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
let _ = new u();
