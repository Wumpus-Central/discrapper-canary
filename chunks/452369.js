n.d(t, { Z: () => E }), n(47120);
var i = n(442837),
    r = n(570140),
    a = n(699516),
    s = n(979651),
    o = n(414509),
    l = n(807031);
let u = {},
    c = {},
    d = new Set();
function f() {
    (u = {}), (c = {});
}
function _() {
    f();
    let e = s.Z.getAllVoiceStates(),
        t = !1;
    for (let n of Object.values(e)) for (let e of Object.values(n)) null != e.channelId && (t = m(e.channelId, e.userId) || t);
    return t;
}
function p(e) {
    let { relationship: t } = e,
        n = s.Z.getVoiceStateForUser(t.id);
    return null != n && null != n.channelId && m(n.channelId, t.id);
}
function h(e) {
    let { voiceStates: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            if (null != e.oldChannelId) {
                var t, i;
                null != u[e.oldChannelId] && (null === (t = u[e.oldChannelId]) || void 0 === t || t.delete(e.userId), (n = !0)), null != c[e.oldChannelId] && (null === (i = c[e.oldChannelId]) || void 0 === i || i.delete(e.userId), (n = !0));
            }
            null != e.channelId && (n = m(e.channelId, e.userId) || n);
        }),
        n
    );
}
function m(e, t) {
    let n = !1,
        i = !1,
        r = new Set(u[e]),
        s = a.Z.isBlocked(t);
    s && !r.has(t) ? (r.add(t), (i = !0), (n = !0)) : s || (n = r.delete(t)), 0 === r.size && n ? delete u[e] : n && (u[e] = r);
    let l = new Set(c[e]),
        d = a.Z.isIgnored(t);
    return d && !l.has(t) ? (l.add(t), (i = !0), (n = !0)) : d || (n = l.delete(t)), 0 === l.size && n ? delete c[e] : n && (c[e] = l), i && o.Z.handleBlockedOrIgnoredUserVoiceChannelJoin(e, t), n;
}
class g extends i.ZP.Store {
    initialize() {
        this.waitFor(a.Z, s.Z);
    }
    getBlockedUsersForVoiceChannel(e) {
        var t;
        return (0, l.wC)({ location: 'VoiceChannelBlockedUserStore_getBlockedUsersForVoiceChannel' }) && null !== (t = u[e]) && void 0 !== t ? t : d;
    }
    getIgnoredUsersForVoiceChannel(e) {
        var t;
        return (0, l.wC)({ location: 'VoiceChannelBlockedUserStore_getIgnoredUsersForVoiceChannel' }) && null !== (t = c[e]) && void 0 !== t ? t : d;
    }
}
let E = new g(r.Z, {
    CONNECTION_OPEN: f,
    LOGOUT: f,
    OVERLAY_INITIALIZE: _,
    VOICE_STATE_UPDATES: h,
    RELATIONSHIP_ADD: p,
    RELATIONSHIP_REMOVE: p,
    RELATIONSHIP_UPDATE: p
});
