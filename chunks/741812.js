n.d(t, {
    A: () => g,
}),
    n(896048);
var r = n(311907),
    i = n(73153),
    a = n(994500),
    s = n(977997),
    o = n(158160);
let l = {},
    c = {},
    u = new Set();

function d() {
    (l = {}), (c = {});
}

function f() {
    d();
    let e = s.A.getAllVoiceStates(),
        t = !1;
    for (let n of Object.values(e))
        for (let e of Object.values(n)) null != e.channelId && (t = h(e.channelId, e.userId) || t);
    return t;
}

function p(e) {
    let { relationship: t } = e,
        n = s.A.getVoiceStateForUser(t.id);
    return null != n && null != n.channelId && h(n.channelId, t.id);
}

function _(e) {
    let { voiceStates: t } = e,
        n = !1;
    return (
        t.forEach((e) => {
            if (null != e.oldChannelId) {
                var t, r;
                null != l[e.oldChannelId] && (null == (t = l[e.oldChannelId]) || t.delete(e.userId), (n = !0)),
                    null != c[e.oldChannelId] && (null == (r = c[e.oldChannelId]) || r.delete(e.userId), (n = !0));
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
        s = a.A.isBlocked(t);
    s && !i.has(t) ? (i.add(t), (r = !0), (n = !0)) : s || (n = i.delete(t)),
        0 === i.size && n ? delete l[e] : n && (l[e] = i);
    let u = new Set(c[e]),
        d = a.A.isIgnored(t);
    return (
        d && !u.has(t) ? (u.add(t), (r = !0), (n = !0)) : d || (n = u.delete(t)),
        0 === u.size && n ? delete c[e] : n && (c[e] = u),
        r && o.Ay.handleBlockedOrIgnoredUserVoiceChannelJoin(e, t),
        n
    );
}
class m extends r.Ay.Store {
    initialize() {
        this.waitFor(a.A, s.A);
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
let g = new m(i.h, {
    CONNECTION_OPEN: d,
    LOGOUT: d,
    OVERLAY_INITIALIZE: f,
    VOICE_STATE_UPDATES: _,
    RELATIONSHIP_ADD: p,
    RELATIONSHIP_REMOVE: p,
    RELATIONSHIP_UPDATE: p,
});
