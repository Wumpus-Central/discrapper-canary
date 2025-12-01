n.d(t, { Z: () => d });
var r = n(473749),
    i = n(399606),
    a = n(311395),
    o = n(778825),
    s = n(150039),
    l = n(25990),
    c = n(594174),
    u = n(350327);
function d(e) {
    let { isTryItOut: t, analyticsLocations: n, guildId: d } = e,
        f = (0, i.e7)([c.default], () => c.default.getCurrentUser()),
        p = (0, a.Z)(n),
        {
            pendingAvatar: _,
            pendingAvatarDecoration: m,
            pendingErrors: h,
        } = (0, i.cj)([l.Z, o.Z], () => ({
            pendingAvatar: t ? l.Z.getTryItOutAvatar() : null != d ? o.Z.getPendingAvatar() : l.Z.getPendingAvatar(),
            pendingAvatarDecoration: t
                ? l.Z.getTryItOutAvatarDecoration()
                : null != d
                  ? o.Z.getPendingAvatarDecoration()
                  : l.Z.getPendingAvatarDecoration(),
            pendingErrors: null != d ? o.Z.getErrors().avatarDecoration : l.Z.getErrors().avatarDecoration,
        })),
        g = (0, r.useCallback)((e) => (0, s.Jw)(e, null == f ? void 0 : f.avatar), [null == f ? void 0 : f.avatar]),
        E = (0, r.useCallback)(
            (e) => {
                (0, s.PO)(e, d), null != e && p(e);
            },
            [p, d],
        );
    return {
        pendingAvatar: _,
        pendingAvatarDecoration: m,
        pendingErrors: h,
        setPendingAvatar: t ? u.c_ : g,
        setPendingAvatarDecoration: t ? u.Xz : E,
    };
}
