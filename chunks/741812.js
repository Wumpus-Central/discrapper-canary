n.d(t, { A: () => h });
var i = n(17928),
    r = n(228366),
    a = n(994500),
    s = n(977997),
    l = n(514581);
let o = {},
    d = {},
    c = new Set();
function u() {
    (o = {}), (d = {});
}
function _(e) {
    let { relationship: t } = e,
        n = s.A.getVoiceStateForUser(t.id);
    return null != n && null != n.channelId && E(n.channelId, t.id);
}
function E(e, t) {
    let n = !1,
        i = !1,
        r = new Set(o[e]),
        s = a.A.isBlocked(t);
    s && !r.has(t) ? (r.add(t), (i = !0), (n = !0)) : s || (n = r.delete(t)),
        0 === r.size && n ? delete o[e] : n && (o[e] = r);
    let c = new Set(d[e]),
        u = a.A.isIgnored(t);
    return (
        u && !c.has(t) ? (c.add(t), (i = !0), (n = !0)) : u || (n = c.delete(t)),
        0 === c.size && n ? delete d[e] : n && (d[e] = c),
        i && l.Ay.handleBlockedOrIgnoredUserVoiceChannelJoin(e, t),
        n
    );
}
class A extends i.Ay.Store {
    initialize() {
        this.waitFor(a.A, s.A);
    }
    getBlockedUsersForVoiceChannel(e) {
        return o[e] ?? c;
    }
    getIgnoredUsersForVoiceChannel(e) {
        return d[e] ?? c;
    }
}
let h = new A(r.h, {
    CONNECTION_OPEN: u,
    LOGOUT: u,
    OVERLAY_INITIALIZE: function () {
        u();
        let e = s.A.getAllVoiceStates(),
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
    RELATIONSHIP_ADD: _,
    RELATIONSHIP_REMOVE: _,
    RELATIONSHIP_UPDATE: _,
});
