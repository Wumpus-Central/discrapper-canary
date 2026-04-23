n.d(t, { A: () => p });
var i = n(17928),
    r = n(228366),
    l = n(994500),
    a = n(977997),
    s = n(514581);
let o = {},
    d = {},
    u = new Set();
function c() {
    (o = {}), (d = {});
}
function h(e) {
    let { relationship: t } = e,
        n = a.A.getVoiceStateForUser(t.id);
    return null != n && null != n.channelId && E(n.channelId, t.id);
}
function E(e, t) {
    let n = !1,
        i = !1,
        r = new Set(o[e]),
        a = l.A.isBlocked(t);
    a && !r.has(t) ? (r.add(t), (i = !0), (n = !0)) : a || (n = r.delete(t)),
        0 === r.size && n ? delete o[e] : n && (o[e] = r);
    let u = new Set(d[e]),
        c = l.A.isIgnored(t);
    return (
        c && !u.has(t) ? (u.add(t), (i = !0), (n = !0)) : c || (n = u.delete(t)),
        0 === u.size && n ? delete d[e] : n && (d[e] = u),
        i && s.Ay.handleBlockedOrIgnoredUserVoiceChannelJoin(e, t),
        n
    );
}
class _ extends i.Ay.Store {
    initialize() {
        this.waitFor(l.A, a.A);
    }
    getBlockedUsersForVoiceChannel(e) {
        return o[e] ?? u;
    }
    getIgnoredUsersForVoiceChannel(e) {
        return d[e] ?? u;
    }
}
let p = new _(r.h, {
    CONNECTION_OPEN: c,
    LOGOUT: c,
    OVERLAY_INITIALIZE: function () {
        c();
        let e = a.A.getAllVoiceStates(),
            t = !1;
        for (let n of Object.values(e))
            for (let e of Object.values(n)) null != e.channelId && (t = E(e.channelId, e.userId) || t);
        return t;
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = !1;
        return (
            t.forEach((e) => {
                null != e.oldChannelId &&
                    (null != o[e.oldChannelId] && (o[e.oldChannelId]?.delete(e.userId), (n = !0)),
                    null != d[e.oldChannelId] && (d[e.oldChannelId]?.delete(e.userId), (n = !0))),
                    null != e.channelId && (n = E(e.channelId, e.userId) || n);
            }),
            n
        );
    },
    RELATIONSHIP_ADD: h,
    RELATIONSHIP_REMOVE: h,
    RELATIONSHIP_UPDATE: h,
});
