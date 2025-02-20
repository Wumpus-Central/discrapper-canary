n.d(t, { Z: () => f });
var r = n(192379),
    i = n(399606),
    o = n(311395),
    a = n(778825),
    s = n(150039),
    l = n(271383),
    c = n(25990),
    u = n(594174),
    d = n(350327);
function f(e) {
    let { isTryItOut: t, analyticsLocations: n, guildId: f } = e,
        p = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        _ = (0, i.e7)([l.ZP], () => (null != f && null != p ? l.ZP.getMember(f, p.id) : null)),
        h = null != _ ? _.avatarDecoration : null == p ? void 0 : p.avatarDecoration,
        m = (0, o.Z)(n),
        {
            pendingAvatar: g,
            pendingAvatarDecoration: E,
            pendingErrors: v
        } = (0, i.cj)([c.Z, a.Z], () => ({
            pendingAvatar: t ? c.Z.getTryItOutAvatar() : null != f ? a.Z.getPendingAvatar() : c.Z.getPendingAvatar(),
            pendingAvatarDecoration: t ? c.Z.getTryItOutAvatarDecoration() : null != f ? a.Z.getPendingAvatarDecoration() : c.Z.getPendingAvatarDecoration(),
            pendingErrors: null != f ? a.Z.getErrors().avatarDecoration : c.Z.getErrors().avatarDecoration
        })),
        b = (0, r.useCallback)((e) => (0, s.Jw)(e, null == p ? void 0 : p.avatar), [null == p ? void 0 : p.avatar]),
        y = (0, r.useCallback)(
            (e) => {
                (0, s.PO)(f, e), null != e && m(e);
            },
            [m, f]
        );
    return {
        pendingAvatar: g,
        pendingAvatarDecoration: E,
        setPendingAvatar: t ? d.c_ : b,
        setPendingAvatarDecoration: t ? d.Xz : y,
        savedAvatarDecoration: h,
        pendingErrors: v
    };
}
