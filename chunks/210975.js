n.d(t, {
    m$: function () {
        return f;
    },
    wV: function () {
        return c;
    },
    zU: function () {
        return d;
    }
});
var r = n(442837),
    l = n(569545),
    i = n(314897),
    u = n(19780),
    s = n(98369),
    o = n(277642),
    a = n(441894);
function c(e) {
    let { userId: t, channelId: n, location: l } = e,
        o = (0, a.J)({
            channelId: n,
            location: l
        });
    return (0, r.e7)([s.Z, i.default, u.Z], () => null != t && o && u.Z.isUserConnected(t) && i.default.getId() !== t && s.Z.isUserVerified(t), [o, t]);
}
function d(e) {
    let { streamKey: t, channelId: n, location: u } = e,
        c = (0, a.J)({
            channelId: n,
            location: u
        }),
        d = (0, o.t)(t);
    return (0, r.e7)(
        [s.Z, i.default],
        () => {
            if (!c || d || null == t) return !1;
            let e = i.default.getId(),
                { ownerId: n } = (0, l.my)(t);
            return n !== e && s.Z.isStreamVerified(t);
        },
        [d, c, t]
    );
}
function f(e) {
    let { channelId: t, location: n } = e,
        l = (0, a.J)({
            channelId: t,
            location: n
        }),
        i = (0, o.r)();
    return (0, r.e7)([s.Z], () => !!l && !i && s.Z.isCallVerified(), [i, l]);
}
