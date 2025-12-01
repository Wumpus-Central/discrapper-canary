n.d(t, {
    m$: () => f,
    wV: () => u,
    zU: () => d,
});
var r = n(442837),
    i = n(569545),
    l = n(314897),
    o = n(19780),
    a = n(98369),
    s = n(277642),
    c = n(441894);
function u(e) {
    let { userId: t, channelId: n } = e,
        i = (0, c.J)({ channelId: n });
    return (0, r.e7)(
        [a.Z, l.default, o.Z],
        () => null != t && i && o.Z.isUserConnected(t) && l.default.getId() !== t && a.Z.isUserVerified(t),
        [i, t],
    );
}
function d(e) {
    let { streamKey: t, channelId: n } = e,
        o = (0, c.J)({ channelId: n }),
        u = (0, s.t)(t);
    return (0, r.e7)([a.Z, l.default], () => {
        if (!o || u || null == t) return !1;
        let e = l.default.getId(),
            { ownerId: n } = (0, i.my)(t);
        return n !== e && a.Z.isStreamVerified(t);
    }, [u, o, t]);
}
function f(e) {
    let { channelId: t } = e,
        n = (0, c.J)({ channelId: t }),
        i = (0, s.r)();
    return (0, r.e7)([a.Z], () => !!n && !i && a.Z.isCallVerified(), [i, n]);
}
