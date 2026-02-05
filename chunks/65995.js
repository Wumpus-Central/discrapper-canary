"use strict";
n.d(t, { A: () => h });
var r = n(311907),
    i = n(73153);
let a = {},
    s = {},
    o = new Set();
function l(e) {
    let { guildId: t, channelId: n } = e;
    s = { ...s, [t]: { ...s[t], [n]: !0 } };
}
function u(e) {
    let { memberActions: t, guildId: n } = e;
    if (null == t) {
        s[n] = a;
        return;
    }
    (s[n] = t), o.delete(n);
}
function c(e) {
    let { guildId: t } = e;
    o.add(t);
}
function d(e) {
    let { guildId: t } = e;
    o.delete(t);
}
function _(e) {
    let { guild: t } = e;
    if (null == s[t.id]) return !1;
    delete s[t.id];
}
function f(e) {
    let { guildId: t } = e;
    if (null == s[t]) return !1;
    delete s[t];
}
class p extends r.Ay.Store {
    static displayName = "GuildOnboardingMemberActionStore";
    getCompletedActions(e) {
        return null == e ? null : s[e];
    }
    hasCompletedActionForChannel(e, t) {
        let n = this.getCompletedActions(e);
        return null != n && null != n[t];
    }
    getState(e) {
        return null == e ? {} : { completedActions: s[e], loading: o.has(e) };
    }
}
let h = new p(i.h, {
    GUILD_NEW_MEMBER_ACTIONS_FETCH_START: c,
    GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS: u,
    GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL: d,
    GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS: f,
    COMPLETE_NEW_MEMBER_ACTION: l,
    GUILD_DELETE: _,
});
