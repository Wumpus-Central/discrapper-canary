n.d(t, {
    m$: () => f,
    wV: () => c,
    zU: () => d
});
var r = n(442837),
    l = n(569545),
    i = n(314897),
    u = n(19780),
    s = n(98369),
    a = n(277642),
    o = n(441894);
function c(e) {
    let { userId: t, channelId: n } = e,
        l = (0, o.J)({ channelId: n });
    return (0, r.e7)([s.Z, i.default, u.Z], () => null != t && l && u.Z.isUserConnected(t) && i.default.getId() !== t && s.Z.isUserVerified(t), [l, t]);
}
function d(e) {
    let { streamKey: t, channelId: n } = e,
        u = (0, o.J)({ channelId: n }),
        c = (0, a.t)(t);
    return (0, r.e7)(
        [s.Z, i.default],
        () => {
            if (!u || c || null == t) return !1;
            let e = i.default.getId(),
                { ownerId: n } = (0, l.my)(t);
            return n !== e && s.Z.isStreamVerified(t);
        },
        [c, u, t]
    );
}
function f(e) {
    let { channelId: t } = e,
        n = (0, o.J)({ channelId: t }),
        l = (0, a.r)();
    return (0, r.e7)([s.Z], () => !!n && !l && s.Z.isCallVerified(), [l, n]);
}
