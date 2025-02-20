r.d(t, {
    m$: () => f,
    wV: () => c,
    zU: () => d
});
var n = r(442837),
    l = r(569545),
    i = r(314897),
    u = r(19780),
    s = r(98369),
    a = r(277642),
    o = r(441894);
function c(e) {
    let { userId: t, channelId: r, location: l } = e,
        a = (0, o.J)({
            channelId: r,
            location: l
        });
    return (0, n.e7)([s.Z, i.default, u.Z], () => null != t && a && u.Z.isUserConnected(t) && i.default.getId() !== t && s.Z.isUserVerified(t), [a, t]);
}
function d(e) {
    let { streamKey: t, channelId: r, location: u } = e,
        c = (0, o.J)({
            channelId: r,
            location: u
        }),
        d = (0, a.t)(t);
    return (0, n.e7)(
        [s.Z, i.default],
        () => {
            if (!c || d || null == t) return !1;
            let e = i.default.getId(),
                { ownerId: r } = (0, l.my)(t);
            return r !== e && s.Z.isStreamVerified(t);
        },
        [d, c, t]
    );
}
function f(e) {
    let { channelId: t, location: r } = e,
        l = (0, o.J)({
            channelId: t,
            location: r
        }),
        i = (0, a.r)();
    return (0, n.e7)([s.Z], () => !!l && !i && s.Z.isCallVerified(), [i, l]);
}
