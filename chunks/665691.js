r.d(t, { DY: () => c, UF: () => f, bG: () => A });
var i = r(17928),
    u = r(652896),
    n = r(495544),
    d = r(763827),
    l = r(707890),
    s = r(83942),
    a = r(259374);
function f(e) {
    let { userId: t, channelId: r } = e,
        u = (0, a.k)({ channelId: r });
    return (0, i.bG)(
        [l.A, n.default, d.A],
        () => null != t && u && d.A.isUserConnected(t) && n.default.getId() !== t && l.A.isUserVerified(t),
        [u, t],
    );
}
function c(e) {
    let { streamKey: t, channelId: r } = e,
        d = (0, a.k)({ channelId: r }),
        f = (0, s.w)(t);
    return (0, i.bG)([l.A, n.default], () => {
        if (!d || f || null == t) return !1;
        let e = n.default.getId(),
            { ownerId: r } = (0, u.Iy)(t);
        return r !== e && l.A.isStreamVerified(t);
    }, [f, d, t]);
}
function A(e) {
    let { channelId: t } = e,
        r = (0, a.k)({ channelId: t }),
        u = (0, s.c)();
    return (0, i.bG)([l.A], () => !!r && !u && l.A.isCallVerified(), [u, r]);
}
