"use strict";
n.d(t, { CH: () => m, av: () => A, cy: () => g, jA: () => I });
var r = n(686956),
    i = n(956793),
    s = n(401843),
    a = n(389234),
    o = n(854492),
    l = n(616356),
    u = n(734057),
    c = n(71393),
    d = n(576705),
    _ = n(309010),
    f = n(993838),
    p = n(943525),
    h = n(233993),
    E = n(766219);
function m(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return new Promise(async (i) => {
        let s = u.A.getChannel(t);
        if (null != s) return g(s, n), i(s);
        await (0, o.A)([e]),
            await r.A.joinGuild(e, { lurker: !0 }),
            c.A.addConditionalChangeListener(() => {
                let e = u.A.getChannel(t);
                return null == e || (g(e), E.A.initialize(), i(e), !1);
            });
    });
}
function g(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = _.A.getVoiceChannelId();
    if (
        (!n && ((t = r), !d.A.can(h.Gk, e) || (f.j6(e.id) && t !== e.id && (f.W0(e, () => A(e, !0)), 1)))) ||
        (p.A.initialize(), i.default.selectVoiceChannel(e.id), (r = _.A.getVoiceChannelId()) !== e.id)
    )
        return !1;
    let a = l.A.getAllApplicationStreamsForChannel(e.id);
    return a.length > 0 && (0, s.A9)(a[0], { noFocus: !1 }), !0;
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = _.A.getVoiceChannelId();
    (!r && i !== e.id && (0, a.H)(e) && f.E9(e, () => A(e, t, n, !0))) || (g(e, t) && I(e, i));
}
function I(e, t) {
    f.jA(e, t);
}
