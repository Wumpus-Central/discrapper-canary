n.d(t, {
    m$: () => f,
    wV: () => u,
    zU: () => d,
});
var r = n(442837),
    i = n(569545),
    l = n(314897),
    a = n(19780),
    o = n(98369),
    s = n(277642),
    c = n(441894);
function u(e) {
    let { userId: t, channelId: n } = e,
        i = (0, c.J)({ channelId: n });
    return (0, r.e7)(
        [o.Z, l.default, a.Z],
        () => null != t && i && a.Z.isUserConnected(t) && l.default.getId() !== t && o.Z.isUserVerified(t),
        [i, t],
    );
}
function d(e) {
    let { streamKey: t, channelId: n } = e,
        a = (0, c.J)({ channelId: n }),
        u = (0, s.t)(t);
    return (0, r.e7)([o.Z, l.default], () => {
        if (!a || u || null == t) return !1;
        let e = l.default.getId(),
            { ownerId: n } = (0, i.my)(t);
        return n !== e && o.Z.isStreamVerified(t);
    }, [u, a, t]);
}
function f(e) {
    let { channelId: t } = e,
        n = (0, c.J)({ channelId: t }),
        i = (0, s.r)();
    return (0, r.e7)([o.Z], () => !!n && !i && o.Z.isCallVerified(), [i, n]);
}
