"use strict";
n.d(t, { A: () => f });
var r = n(439372),
    i = n(967198),
    a = n(698441),
    s = n(496092);
let o = {},
    l = new Set(),
    u = new Set(),
    c = 18e5,
    d = async (e) => {
        if (!(0 === a.Ay.getGuildScheduledEventsForGuild(e).length || l.has(e)) && !u.has(e))
            try {
                l.add(e), await s.A.getGuildEventsForCurrentUser(e), u.add(e);
            } catch (t) {
                l.delete(e);
            }
    };
class _ extends r.A {
    actions = {
        POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
        GUILD_DELETE: (e) => this.handleGuildDelete(e),
        GUILD_UNAVAILABLE: (e) => this.handleGuildUnavailable(e),
        INVITE_RESOLVE_SUCCESS: (e) => this.handleInviteResolveSuccess(e),
        CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
    };
    async getGuildEventUserCounts(e, t, n) {
        let r = n.filter((n) => null == o[`${e}-${t}-${n}`] || Date.now() - o[`${e}-${t}-${n}`] > c);
        if (!(Date.now() - o[`${e}-${t}`] < c) || 0 !== r.length) {
            (o[`${e}-${t}`] = Date.now()), r.forEach((n) => (o[`${e}-${t}-${n}`] = Date.now()));
            try {
                await s.A.fetchGuildEventUserCounts(e, t, r);
            } catch (e) {}
        }
    }
    getGuildEventUsers(e, t, n) {
        return s.A.fetchUsersForGuildEvent(e, t, n);
    }
    getGuildEventsForCurrentUser(e) {
        return d(e);
    }
    async handleConnectionOpen() {
        l.clear(), u.clear(), (o = {}), i.A.getLastSelectedGuildId();
    }
    handleGuildUnavailable(e) {
        let { guildId: t } = e;
        l.delete(t), u.delete(t), delete o[t];
    }
    handleGuildDelete(e) {
        let { guild: t } = e,
            n = t.id;
        l.delete(n), u.delete(n), delete o[n];
    }
    handleInviteResolveSuccess(e) {
        let { invite: t } = e,
            n = t.guild_scheduled_event,
            r = t.guild?.id;
        null != n && null != r && d(r);
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
let f = new _();
