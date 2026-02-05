"use strict";
n.d(t, { CH: () => E, av: () => I, cy: () => A, jA: () => T });
var r = n(686956),
    i = n(956793),
    a = n(401843),
    s = n(389234),
    o = n(854492),
    l = n(616356),
    u = n(734057),
    c = n(71393),
    d = n(576705),
    _ = n(309010),
    f = n(993838),
    p = n(943525),
    h = n(233993),
    m = n(766219);
function g(e, t) {
    return !!d.A.can(h.Gk, e) && (!f.j6(e.id) || t === e.id || (f.W0(e, () => I(e, !0)), !1));
}
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return new Promise(async (i) => {
        let a = u.A.getChannel(t);
        if (null != a) return A(a, n), i(a);
        await (0, o.A)([e]),
            await r.A.joinGuild(e, { lurker: !0 }),
            c.A.addConditionalChangeListener(() => {
                let e = u.A.getChannel(t);
                return null == e || (A(e), m.A.initialize(), i(e), !1);
            });
    });
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = _.A.getVoiceChannelId();
    if (
        (!t && !g(e, n)) ||
        (p.A.initialize(), i.default.selectVoiceChannel(e.id), (n = _.A.getVoiceChannelId()) !== e.id)
    )
        return !1;
    let r = l.A.getAllApplicationStreamsForChannel(e.id);
    return r.length > 0 && (0, a.A9)(r[0], { noFocus: !1 }), !0;
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = _.A.getVoiceChannelId();
    (!r && i !== e.id && (0, s.H)(e) && f.E9(e, () => I(e, t, n, !0))) || (A(e, t) && T(e, i));
}
function T(e, t) {
    f.jA(e, t);
}
