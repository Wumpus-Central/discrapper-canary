r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(192379),
    a = r(399606),
    o = r(311395),
    s = r(778825),
    l = r(150039),
    u = r(271383),
    c = r(25990),
    d = r(594174),
    f = r(350327);
function p(e) {
    let { isTryItOut: n, analyticsLocations: r, guildId: p } = e,
        h = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        _ = (0, a.e7)([u.ZP], () => (null != p && null != h ? u.ZP.getMember(p, h.id) : null)),
        m = null != _ ? _.avatarDecoration : null == h ? void 0 : h.avatarDecoration,
        g = (0, o.Z)(r),
        {
            pendingAvatar: E,
            pendingAvatarDecoration: v,
            pendingErrors: y
        } = (0, a.cj)([c.Z, s.Z], () => ({
            pendingAvatar: n ? c.Z.getTryItOutAvatar() : null != p ? s.Z.getPendingAvatar() : c.Z.getPendingAvatar(),
            pendingAvatarDecoration: n ? c.Z.getTryItOutAvatarDecoration() : null != p ? s.Z.getPendingAvatarDecoration() : c.Z.getPendingAvatarDecoration(),
            pendingErrors: null != p ? s.Z.getErrors().avatarDecoration : c.Z.getErrors().avatarDecoration
        })),
        b = (0, i.useCallback)((e) => (0, l.Jw)(e, null == h ? void 0 : h.avatar), [null == h ? void 0 : h.avatar]),
        I = (0, i.useCallback)(
            (e) => {
                (0, l.PO)(p, e), null != e && g(e);
            },
            [g, p]
        );
    return {
        pendingAvatar: E,
        pendingAvatarDecoration: v,
        setPendingAvatar: n ? f.c_ : b,
        setPendingAvatarDecoration: n ? f.Xz : I,
        savedAvatarDecoration: m,
        pendingErrors: y
    };
}
