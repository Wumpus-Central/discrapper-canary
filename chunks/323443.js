n.d(t, {
    CH: () => E,
    av: () => y,
    cy: () => b,
    jA: () => O,
});
var r = n(686956),
    i = n(956793),
    a = n(401843),
    s = n(389234),
    o = n(854492),
    l = n(616356),
    c = n(734057),
    u = n(71393),
    d = n(576705),
    f = n(309010),
    p = n(993838),
    _ = n(943525),
    h = n(233993),
    m = n(766219);

function g(e, t) {
    return !!d.A.can(h.Gk, e) && (!p.j6(e.id) || t === e.id || (p.W0(e, () => y(e, !0)), !1));
}

function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return new Promise(async (i) => {
        let a = c.A.getChannel(t);
        if (null != a) return b(a, n), i(a);
        await (0, o.A)([e]),
            await r.A.joinGuild(e, {
                lurker: !0,
            }),
            u.A.addConditionalChangeListener(() => {
                let e = c.A.getChannel(t);
                return null == e || (b(e), m.A.initialize(), i(e), !1);
            });
    });
}

function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = f.A.getVoiceChannelId();
    if (
        (!t && !g(e, n)) ||
        (_.A.initialize(), i.default.selectVoiceChannel(e.id), (n = f.A.getVoiceChannelId()) !== e.id)
    )
        return !1;
    let r = l.A.getAllApplicationStreamsForChannel(e.id);
    return (
        r.length > 0 &&
            (0, a.A9)(r[0], {
                noFocus: !1,
            }),
        !0
    );
}

function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = f.A.getVoiceChannelId();
    (!r && i !== e.id && (0, s.H)(e) && p.E9(e, () => y(e, t, n, !0))) || (b(e, t) && O(e, i));
}

function O(e, t) {
    p.jA(e, t);
}
