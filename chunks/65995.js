"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366);
let a = {},
    s = {},
    l = new Set();
class o extends i.Ay.Store {
    static displayName = "GuildOnboardingMemberActionStore";
    getCompletedActions(e) {
        return null == e ? null : s[e];
    }
    hasCompletedActionForChannel(e, t) {
        let n = this.getCompletedActions(e);
        return null != n && null != n[t];
    }
    getState(e) {
        return null == e ? {} : { completedActions: s[e], loading: l.has(e) };
    }
}
let d = new o(r.h, {
    GUILD_NEW_MEMBER_ACTIONS_FETCH_START: function (e) {
        let { guildId: t } = e;
        l.add(t);
    },
    GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS: function (e) {
        let { memberActions: t, guildId: n } = e;
        if (null == t) {
            s[n] = a;
            return;
        }
        (s[n] = t), l.delete(n);
    },
    GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL: function (e) {
        let { guildId: t } = e;
        l.delete(t);
    },
    GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS: function (e) {
        let { guildId: t } = e;
        if (null == s[t]) return !1;
        delete s[t];
    },
    COMPLETE_NEW_MEMBER_ACTION: function (e) {
        let { guildId: t, channelId: n } = e;
        s = { ...s, [t]: { ...s[t], [n]: !0 } };
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        if (null == s[t.id]) return !1;
        delete s[t.id];
    },
});
