n.d(t, { Z: () => f });
var i = n(192379),
    r = n(399606),
    a = n(311395),
    s = n(778825),
    o = n(150039),
    l = n(271383),
    u = n(25990),
    c = n(594174),
    d = n(350327);
function f(e) {
    let { isTryItOut: t, analyticsLocations: n, guildId: f } = e,
        _ = (0, r.e7)([c.default], () => c.default.getCurrentUser()),
        p = (0, r.e7)([l.ZP], () => (null != f && null != _ ? l.ZP.getMember(f, _.id) : null)),
        h = null != p ? p.avatarDecoration : null == _ ? void 0 : _.avatarDecoration,
        m = (0, a.Z)(n),
        {
            pendingAvatar: g,
            pendingAvatarDecoration: E,
            pendingErrors: v
        } = (0, r.cj)([u.Z, s.Z], () => ({
            pendingAvatar: t ? u.Z.getTryItOutAvatar() : null != f ? s.Z.getPendingAvatar() : u.Z.getPendingAvatar(),
            pendingAvatarDecoration: t ? u.Z.getTryItOutAvatarDecoration() : null != f ? s.Z.getPendingAvatarDecoration() : u.Z.getPendingAvatarDecoration(),
            pendingErrors: null != f ? s.Z.getErrors().avatarDecoration : u.Z.getErrors().avatarDecoration
        })),
        y = (0, i.useCallback)((e) => (0, o.Jw)(e, null == _ ? void 0 : _.avatar), [null == _ ? void 0 : _.avatar]),
        I = (0, i.useCallback)(
            (e) => {
                (0, o.PO)(f, e), null != e && m(e);
            },
            [m, f]
        );
    return {
        pendingAvatar: g,
        pendingAvatarDecoration: E,
        setPendingAvatar: t ? d.c_ : y,
        setPendingAvatarDecoration: t ? d.Xz : I,
        savedAvatarDecoration: h,
        pendingErrors: v
    };
}
