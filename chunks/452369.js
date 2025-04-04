n.d(t, { Z: () => g }), n(47120);
var r = n(442837),
    i = n(570140),
    o = n(699516),
    a = n(979651),
    s = n(414509);
let l = {},
    c = {},
    u = new Set();
function d() {
    (l = {}), (c = {});
}
function f() {
    d();
    let e = a.Z.getAllVoiceStates(),
        t = !1;
    for (let n of Object.values(e)) for (let e of Object.values(n)) null != e.channelId && (t = h(e.channelId, e.userId) || t);
    return t;
}
function _(e) {
    let { relationship: t } = e,
        n = a.Z.getVoiceStateForUser(t.id);
    return null != n && null != n.channelId && h(n.channelId, t.id);
}
function p(e) {
    let { voiceStates: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            if (null != e.oldChannelId) {
                var t, r;
                null != l[e.oldChannelId] && (null == (t = l[e.oldChannelId]) || t.delete(e.userId), (n = !0)), null != c[e.oldChannelId] && (null == (r = c[e.oldChannelId]) || r.delete(e.userId), (n = !0));
            }
            null != e.channelId && (n = h(e.channelId, e.userId) || n);
        }),
        n
    );
}
function h(e, t) {
    let n = !1,
        r = !1,
        i = new Set(l[e]),
        a = o.Z.isBlocked(t);
    a && !i.has(t) ? (i.add(t), (r = !0), (n = !0)) : a || (n = i.delete(t)), 0 === i.size && n ? delete l[e] : n && (l[e] = i);
    let u = new Set(c[e]),
        d = o.Z.isIgnored(t);
    return d && !u.has(t) ? (u.add(t), (r = !0), (n = !0)) : d || (n = u.delete(t)), 0 === u.size && n ? delete c[e] : n && (c[e] = u), r && s.Z.handleBlockedOrIgnoredUserVoiceChannelJoin(e, t), n;
}
class m extends r.ZP.Store {
    initialize() {
        this.waitFor(o.Z, a.Z);
    }
    getBlockedUsersForVoiceChannel(e) {
        var t;
        return null != (t = l[e]) ? t : u;
    }
    getIgnoredUsersForVoiceChannel(e) {
        var t;
        return null != (t = c[e]) ? t : u;
    }
}
let g = new m(i.Z, {
    CONNECTION_OPEN: d,
    LOGOUT: d,
    OVERLAY_INITIALIZE: f,
    VOICE_STATE_UPDATES: p,
    RELATIONSHIP_ADD: _,
    RELATIONSHIP_REMOVE: _,
    RELATIONSHIP_UPDATE: _
});
