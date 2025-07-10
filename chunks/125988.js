(n.d(t, { Z: () => f }), n(388685));
var r = n(73800),
    i = n(442837),
    a = n(812457),
    o = n(369111),
    s = n(271383),
    l = n(594174),
    c = n(768581),
    u = n(676742),
    d = n(660097);
let f = (e) => {
    var t;
    let { user: n, guildId: f, size: _, onlyAnimateOnHover: p = !1, showPending: h = !1, showTryItOut: m = !1, avatarDecorationOverride: g } = e,
        [E, b] = r.useState(!1),
        { canAnimate: y } = (0, a.j)(E, p),
        O = (0, i.e7)([s.ZP], () => (null != f && null != n ? s.ZP.getMember(f, n.id) : null)),
        v = (0, i.e7)([l.default], () => {
            var e;
            return null == (e = l.default.getCurrentUser()) ? void 0 : e.id;
        }),
        I = null == O ? (null == n ? void 0 : n.avatarDecoration) : null === O.avatarDecoration ? null : null != (t = O.avatarDecoration) ? t : null == n ? void 0 : n.avatarDecoration,
        { pendingAvatarDecoration: T } = (0, o.Z)({
            isTryItOut: m,
            guildId: f
        }),
        S = h && void 0 !== T && void 0 !== v && v === (null == n ? void 0 : n.id),
        A = null != f && null === T,
        N = (0, u.Z)(S ? (A ? (null == n ? void 0 : n.avatarDecoration) : null != T ? T : I) : null != I ? I : null == n ? void 0 : n.avatarDecoration),
        C = r.useMemo(
            () =>
                (0, c.NZ)({
                    avatarDecoration: void 0 !== g ? g : N,
                    canAnimate: y,
                    size: _
                }),
            [N, y, _, g]
        );
    return {
        avatarPlaceholderSrc: d,
        avatarDecorationSrc: C,
        isAvatarDecorationAnimating: y,
        eventHandlers: {
            onMouseEnter: r.useCallback(() => b(!0), []),
            onMouseLeave: r.useCallback(() => b(!1), [])
        }
    };
};
