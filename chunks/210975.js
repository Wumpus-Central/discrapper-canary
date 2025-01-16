n.d(t, {
    m$: function () {
        return m;
    },
    wV: function () {
        return u;
    },
    zU: function () {
        return d;
    }
});
var i = n(442837),
    l = n(569545),
    a = n(314897),
    r = n(19780),
    s = n(98369),
    o = n(277642),
    c = n(441894);
function u(e) {
    let { userId: t, channelId: n, location: l } = e,
        o = (0, c.J)({
            channelId: n,
            location: l
        });
    return (0, i.e7)([s.Z, a.default, r.Z], () => null != t && o && r.Z.isUserConnected(t) && a.default.getId() !== t && s.Z.isUserVerified(t), [o, t]);
}
function d(e) {
    let { streamKey: t, channelId: n, location: r } = e,
        u = (0, c.J)({
            channelId: n,
            location: r
        }),
        d = (0, o.t)(t);
    return (0, i.e7)(
        [s.Z, a.default],
        () => {
            if (!u || d || null == t) return !1;
            let e = a.default.getId(),
                { ownerId: n } = (0, l.my)(t);
            return n !== e && s.Z.isStreamVerified(t);
        },
        [d, u, t]
    );
}
function m(e) {
    let { channelId: t, location: n } = e,
        l = (0, c.J)({
            channelId: t,
            location: n
        }),
        a = (0, o.r)();
    return (0, i.e7)([s.Z], () => !!l && !a && s.Z.isCallVerified(), [a, l]);
}
