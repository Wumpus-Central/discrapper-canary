n.d(t, { Z: () => _ });
var r = n(73800),
    i = n(399606),
    a = n(311395),
    o = n(778825),
    s = n(150039),
    l = n(271383),
    c = n(25990),
    u = n(594174),
    d = n(350327);
function _(e) {
    let { isTryItOut: t, analyticsLocations: n, guildId: _ } = e,
        f = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        p = (0, i.e7)([l.ZP], () => (null != _ && null != f ? l.ZP.getMember(_, f.id) : null)),
        h = null != p ? p.avatarDecoration : null == f ? void 0 : f.avatarDecoration,
        m = (0, a.Z)(n),
        {
            pendingAvatar: g,
            pendingAvatarDecoration: E,
            pendingErrors: b
        } = (0, i.cj)([c.Z, o.Z], () => ({
            pendingAvatar: t ? c.Z.getTryItOutAvatar() : null != _ ? o.Z.getPendingAvatar() : c.Z.getPendingAvatar(),
            pendingAvatarDecoration: t ? c.Z.getTryItOutAvatarDecoration() : null != _ ? o.Z.getPendingAvatarDecoration() : c.Z.getPendingAvatarDecoration(),
            pendingErrors: null != _ ? o.Z.getErrors().avatarDecoration : c.Z.getErrors().avatarDecoration
        })),
        y = (0, r.useCallback)((e) => (0, s.Jw)(e, null == f ? void 0 : f.avatar), [null == f ? void 0 : f.avatar]),
        O = (0, r.useCallback)(
            (e) => {
                ((0, s.PO)(_, e), null != e && m(e));
            },
            [m, _]
        );
    return {
        pendingAvatar: g,
        pendingAvatarDecoration: E,
        setPendingAvatar: t ? d.c_ : y,
        setPendingAvatarDecoration: t ? d.Xz : O,
        savedAvatarDecoration: h,
        pendingErrors: b
    };
}
