"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366);
let s = {},
    a = {},
    o = new Set();
class l extends i.Ay.Store {
    static displayName = "GuildOnboardingMemberActionStore";
    getCompletedActions(e) {
        return null == e ? null : a[e];
    }
    hasCompletedActionForChannel(e, t) {
        let n = this.getCompletedActions(e);
        return null != n && null != n[t];
    }
    getState(e) {
        return null == e ? {} : { completedActions: a[e], loading: o.has(e) };
    }
}
let d = new l(r.h, {
    GUILD_NEW_MEMBER_ACTIONS_FETCH_START: function (e) {
        let { guildId: t } = e;
        o.add(t);
    },
    GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS: function (e) {
        let { memberActions: t, guildId: n } = e;
        if (null == t) {
            a[n] = s;
            return;
        }
        (a[n] = t), o.delete(n);
    },
    GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL: function (e) {
        let { guildId: t } = e;
        o.delete(t);
    },
    GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS: function (e) {
        let { guildId: t } = e;
        if (null == a[t]) return !1;
        delete a[t];
    },
    COMPLETE_NEW_MEMBER_ACTION: function (e) {
        let { guildId: t, channelId: n } = e;
        a = { ...a, [t]: { ...a[t], [n]: !0 } };
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        if (null == a[t.id]) return !1;
        delete a[t.id];
    },
});
