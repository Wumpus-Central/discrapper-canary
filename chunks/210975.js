n.d(t, {
    m$: () => m,
    wV: () => c,
    zU: () => d
});
var l = n(442837),
    i = n(569545),
    r = n(314897),
    a = n(19780),
    s = n(98369),
    o = n(277642),
    u = n(441894);
function c(e) {
    let { userId: t, channelId: n, location: i } = e,
        o = (0, u.J)({
            channelId: n,
            location: i
        });
    return (0, l.e7)([s.Z, r.default, a.Z], () => null != t && o && a.Z.isUserConnected(t) && r.default.getId() !== t && s.Z.isUserVerified(t), [o, t]);
}
function d(e) {
    let { streamKey: t, channelId: n, location: a } = e,
        c = (0, u.J)({
            channelId: n,
            location: a
        }),
        d = (0, o.t)(t);
    return (0, l.e7)(
        [s.Z, r.default],
        () => {
            if (!c || d || null == t) return !1;
            let e = r.default.getId(),
                { ownerId: n } = (0, i.my)(t);
            return n !== e && s.Z.isStreamVerified(t);
        },
        [d, c, t]
    );
}
function m(e) {
    let { channelId: t, location: n } = e,
        i = (0, u.J)({
            channelId: t,
            location: n
        }),
        r = (0, o.r)();
    return (0, l.e7)([s.Z], () => !!i && !r && s.Z.isCallVerified(), [r, i]);
}
