"use strict";
n.d(t, { A: () => h });
var r = n(311907),
    i = n(73153),
    s = n(994500),
    a = n(977997),
    o = n(158160);
let l = {},
    u = {},
    d = new Set();
function c() {
    (l = {}), (u = {});
}
function _(e) {
    let { relationship: t } = e,
        n = a.A.getVoiceStateForUser(t.id);
    return null != n && null != n.channelId && f(n.channelId, t.id);
}
function f(e, t) {
    let n = !1,
        r = !1,
        i = new Set(l[e]),
        a = s.A.isBlocked(t);
    a && !i.has(t) ? (i.add(t), (r = !0), (n = !0)) : a || (n = i.delete(t)),
        0 === i.size && n ? delete l[e] : n && (l[e] = i);
    let d = new Set(u[e]),
        c = s.A.isIgnored(t);
    return (
        c && !d.has(t) ? (d.add(t), (r = !0), (n = !0)) : c || (n = d.delete(t)),
        0 === d.size && n ? delete u[e] : n && (u[e] = d),
        r && o.Ay.handleBlockedOrIgnoredUserVoiceChannelJoin(e, t),
        n
    );
}
class E extends r.Ay.Store {
    initialize() {
        this.waitFor(s.A, a.A);
    }
    getBlockedUsersForVoiceChannel(e) {
        return l[e] ?? d;
    }
    getIgnoredUsersForVoiceChannel(e) {
        return u[e] ?? d;
    }
}
let h = new E(i.h, {
    CONNECTION_OPEN: c,
    LOGOUT: c,
    OVERLAY_INITIALIZE: function () {
        c();
        let e = a.A.getAllVoiceStates(),
            t = !1;
        for (let n of Object.values(e))
            for (let e of Object.values(n)) null != e.channelId && (t = f(e.channelId, e.userId) || t);
        return t;
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = !1;
        return (
            t.forEach((e) => {
                null != e.oldChannelId &&
                    (null != l[e.oldChannelId] && (l[e.oldChannelId]?.delete(e.userId), (n = !0)),
                    null != u[e.oldChannelId] && (u[e.oldChannelId]?.delete(e.userId), (n = !0))),
                    null != e.channelId && (n = f(e.channelId, e.userId) || n);
            }),
            n
        );
    },
    RELATIONSHIP_ADD: _,
    RELATIONSHIP_REMOVE: _,
    RELATIONSHIP_UPDATE: _,
});
