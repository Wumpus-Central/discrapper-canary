n.d(t, {
    m$: () => f,
    wV: () => u,
    zU: () => d
});
var r = n(442837),
    i = n(569545),
    o = n(314897),
    a = n(19780),
    s = n(98369),
    l = n(277642),
    c = n(441894);
function u(e) {
    let { userId: t, channelId: n } = e,
        i = (0, c.J)({ channelId: n });
    return (0, r.e7)([s.Z, o.default, a.Z], () => null != t && i && a.Z.isUserConnected(t) && o.default.getId() !== t && s.Z.isUserVerified(t), [i, t]);
}
function d(e) {
    let { streamKey: t, channelId: n } = e,
        a = (0, c.J)({ channelId: n }),
        u = (0, l.t)(t);
    return (0, r.e7)(
        [s.Z, o.default],
        () => {
            if (!a || u || null == t) return !1;
            let e = o.default.getId(),
                { ownerId: n } = (0, i.my)(t);
            return n !== e && s.Z.isStreamVerified(t);
        },
        [u, a, t]
    );
}
function f(e) {
    let { channelId: t } = e,
        n = (0, c.J)({ channelId: t }),
        i = (0, l.r)();
    return (0, r.e7)([s.Z], () => !!n && !i && s.Z.isCallVerified(), [i, n]);
}
