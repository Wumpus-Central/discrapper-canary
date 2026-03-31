n.d(t, { DY: () => u, UF: () => d, bG: () => h });
var i = n(311907),
    l = n(652896),
    s = n(961350),
    a = n(383501),
    r = n(707890),
    o = n(83942),
    c = n(259374);
function d(e) {
    let { userId: t, channelId: n } = e,
        l = (0, c.k)({ channelId: n });
    return (0, i.bG)(
        [r.A, s.default, a.A],
        () => null != t && l && a.A.isUserConnected(t) && s.default.getId() !== t && r.A.isUserVerified(t),
        [l, t],
    );
}
function u(e) {
    let { streamKey: t, channelId: n } = e,
        a = (0, c.k)({ channelId: n }),
        d = (0, o.w)(t);
    return (0, i.bG)([r.A, s.default], () => {
        if (!a || d || null == t) return !1;
        let e = s.default.getId(),
            { ownerId: n } = (0, l.Iy)(t);
        return n !== e && r.A.isStreamVerified(t);
    }, [d, a, t]);
}
function h(e) {
    let { channelId: t } = e,
        n = (0, c.k)({ channelId: t }),
        l = (0, o.c)();
    return (0, i.bG)([r.A], () => !!n && !l && r.A.isCallVerified(), [l, n]);
}
