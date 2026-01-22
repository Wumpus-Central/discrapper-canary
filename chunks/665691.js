n.d(t, {
    DY: () => d,
    UF: () => u,
    bG: () => f,
});
var r = n(311907),
    l = n(652896),
    i = n(961350),
    a = n(383501),
    s = n(707890),
    o = n(83942),
    c = n(259374);

function u(e) {
    let { userId: t, channelId: n } = e,
        l = (0, c.k)({
            channelId: n,
        });
    return (0, r.bG)(
        [s.A, i.default, a.A],
        () => null != t && l && a.A.isUserConnected(t) && i.default.getId() !== t && s.A.isUserVerified(t),
        [l, t],
    );
}

function d(e) {
    let { streamKey: t, channelId: n } = e,
        a = (0, c.k)({
            channelId: n,
        }),
        u = (0, o.w)(t);
    return (0, r.bG)([s.A, i.default], () => {
        if (!a || u || null == t) return !1;
        let e = i.default.getId(),
            { ownerId: n } = (0, l.Iy)(t);
        return n !== e && s.A.isStreamVerified(t);
    }, [u, a, t]);
}

function f(e) {
    let { channelId: t } = e,
        n = (0, c.k)({
            channelId: t,
        }),
        l = (0, o.c)();
    return (0, r.bG)([s.A], () => !!n && !l && s.A.isCallVerified(), [l, n]);
}
