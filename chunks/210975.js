n.d(t, {
    m$: () => f,
    wV: () => c,
    zU: () => d
});
var r = n(442837),
    l = n(569545),
    i = n(314897),
    a = n(19780),
    u = n(98369),
    o = n(277642),
    s = n(441894);
function c(e) {
    let { userId: t, channelId: n } = e,
        l = (0, s.J)({ channelId: n });
    return (0, r.e7)([u.Z, i.default, a.Z], () => null != t && l && a.Z.isUserConnected(t) && i.default.getId() !== t && u.Z.isUserVerified(t), [l, t]);
}
function d(e) {
    let { streamKey: t, channelId: n } = e,
        a = (0, s.J)({ channelId: n }),
        c = (0, o.t)(t);
    return (0, r.e7)(
        [u.Z, i.default],
        () => {
            if (!a || c || null == t) return !1;
            let e = i.default.getId(),
                { ownerId: n } = (0, l.my)(t);
            return n !== e && u.Z.isStreamVerified(t);
        },
        [c, a, t]
    );
}
function f(e) {
    let { channelId: t } = e,
        n = (0, s.J)({ channelId: t }),
        l = (0, o.r)();
    return (0, r.e7)([u.Z], () => !!n && !l && u.Z.isCallVerified(), [l, n]);
}
