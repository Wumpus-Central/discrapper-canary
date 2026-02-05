"use strict";
n.d(t, { A: () => g });
var r = n(311907),
    i = n(73153),
    a = n(994500),
    s = n(977997),
    o = n(158160);
let l = {},
    u = {},
    c = new Set();
function d() {
    (l = {}), (u = {});
}
function _() {
    d();
    let e = s.A.getAllVoiceStates(),
        t = !1;
    for (let n of Object.values(e))
        for (let e of Object.values(n)) null != e.channelId && (t = h(e.channelId, e.userId) || t);
    return t;
}
function f(e) {
    let { relationship: t } = e,
        n = s.A.getVoiceStateForUser(t.id);
    return null != n && null != n.channelId && h(n.channelId, t.id);
}
function p(e) {
    let { voiceStates: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            null != e.oldChannelId &&
                (null != l[e.oldChannelId] && (l[e.oldChannelId]?.delete(e.userId), (n = !0)),
                null != u[e.oldChannelId] && (u[e.oldChannelId]?.delete(e.userId), (n = !0))),
                null != e.channelId && (n = h(e.channelId, e.userId) || n);
        }),
        n
    );
}
function h(e, t) {
    let n = !1,
        r = !1,
        i = new Set(l[e]),
        s = a.A.isBlocked(t);
    s && !i.has(t) ? (i.add(t), (r = !0), (n = !0)) : s || (n = i.delete(t)),
        0 === i.size && n ? delete l[e] : n && (l[e] = i);
    let c = new Set(u[e]),
        d = a.A.isIgnored(t);
    return (
        d && !c.has(t) ? (c.add(t), (r = !0), (n = !0)) : d || (n = c.delete(t)),
        0 === c.size && n ? delete u[e] : n && (u[e] = c),
        r && o.Ay.handleBlockedOrIgnoredUserVoiceChannelJoin(e, t),
        n
    );
}
class m extends r.Ay.Store {
    initialize() {
        this.waitFor(a.A, s.A);
    }
    getBlockedUsersForVoiceChannel(e) {
        return l[e] ?? c;
    }
    getIgnoredUsersForVoiceChannel(e) {
        return u[e] ?? c;
    }
}
let g = new m(i.h, {
    CONNECTION_OPEN: d,
    LOGOUT: d,
    OVERLAY_INITIALIZE: _,
    VOICE_STATE_UPDATES: p,
    RELATIONSHIP_ADD: f,
    RELATIONSHIP_REMOVE: f,
    RELATIONSHIP_UPDATE: f,
});
