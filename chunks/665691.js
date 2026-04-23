n.d(t, { DY: () => u, UF: () => c, bG: () => h });
var i = n(17928),
    l = n(652896),
    s = n(495544),
    r = n(763827),
    a = n(707890),
    o = n(83942),
    d = n(259374);
function c(e) {
    let { userId: t, channelId: n } = e,
        l = (0, d.k)({ channelId: n });
    return (0, i.bG)(
        [a.A, s.default, r.A],
        () => null != t && l && r.A.isUserConnected(t) && s.default.getId() !== t && a.A.isUserVerified(t),
        [l, t],
    );
}
function u(e) {
    let { streamKey: t, channelId: n } = e,
        r = (0, d.k)({ channelId: n }),
        c = (0, o.w)(t);
    return (0, i.bG)([a.A, s.default], () => {
        if (!r || c || null == t) return !1;
        let e = s.default.getId(),
            { ownerId: n } = (0, l.Iy)(t);
        return n !== e && a.A.isStreamVerified(t);
    }, [c, r, t]);
}
function h(e) {
    let { channelId: t } = e,
        n = (0, d.k)({ channelId: t }),
        l = (0, o.c)();
    return (0, i.bG)([a.A], () => !!n && !l && a.A.isCallVerified(), [l, n]);
}
