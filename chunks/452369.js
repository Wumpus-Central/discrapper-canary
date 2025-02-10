n.d(t, { Z: () => g }), n(47120);
var i = n(442837),
    r = n(570140),
    a = n(699516),
    s = n(979651),
    o = n(414509);
let l = {},
    u = {},
    c = new Set();
function d() {
    (l = {}), (u = {});
}
function f() {
    d();
    let e = s.Z.getAllVoiceStates(),
        t = !1;
    for (let n of Object.values(e)) for (let e of Object.values(n)) null != e.channelId && (t = h(e.channelId, e.userId) || t);
    return t;
}
function _(e) {
    let { relationship: t } = e,
        n = s.Z.getVoiceStateForUser(t.id);
    return null != n && null != n.channelId && h(n.channelId, t.id);
}
function p(e) {
    let { voiceStates: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            if (null != e.oldChannelId) {
                var t, i;
                null != l[e.oldChannelId] && (null === (t = l[e.oldChannelId]) || void 0 === t || t.delete(e.userId), (n = !0)), null != u[e.oldChannelId] && (null === (i = u[e.oldChannelId]) || void 0 === i || i.delete(e.userId), (n = !0));
            }
            null != e.channelId && (n = h(e.channelId, e.userId) || n);
        }),
        n
    );
}
function h(e, t) {
    let n = !1,
        i = !1,
        r = new Set(l[e]),
        s = a.Z.isBlocked(t);
    s && !r.has(t) ? (r.add(t), (i = !0), (n = !0)) : s || (n = r.delete(t)), 0 === r.size && n ? delete l[e] : n && (l[e] = r);
    let c = new Set(u[e]),
        d = a.Z.isIgnored(t);
    return d && !c.has(t) ? (c.add(t), (i = !0), (n = !0)) : d || (n = c.delete(t)), 0 === c.size && n ? delete u[e] : n && (u[e] = c), i && o.Z.handleBlockedOrIgnoredUserVoiceChannelJoin(e, t), n;
}
class m extends i.ZP.Store {
    initialize() {
        this.waitFor(a.Z, s.Z);
    }
    getBlockedUsersForVoiceChannel(e) {
        var t;
        return null !== (t = l[e]) && void 0 !== t ? t : c;
    }
    getIgnoredUsersForVoiceChannel(e) {
        var t;
        return null !== (t = u[e]) && void 0 !== t ? t : c;
    }
}
let g = new m(r.Z, {
    CONNECTION_OPEN: d,
    LOGOUT: d,
    OVERLAY_INITIALIZE: f,
    VOICE_STATE_UPDATES: p,
    RELATIONSHIP_ADD: _,
    RELATIONSHIP_REMOVE: _,
    RELATIONSHIP_UPDATE: _
});
