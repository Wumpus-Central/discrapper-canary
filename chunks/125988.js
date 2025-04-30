n.d(t, { Z: () => f }), n(388685);
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
        [v, I] = (0, i.Wu)([l.default], () => {
            var e;
            return [null == (e = l.default.getCurrentUser()) ? void 0 : e.id, l.default.getUser(null == n ? void 0 : n.id)];
        }),
        S = null == O ? (null == I ? void 0 : I.avatarDecoration) : null === O.avatarDecoration ? null : null != (t = O.avatarDecoration) ? t : null == I ? void 0 : I.avatarDecoration,
        { pendingAvatarDecoration: T } = (0, o.Z)({
            isTryItOut: m,
            guildId: f
        }),
        A = h && void 0 !== T && void 0 !== v && v === (null == n ? void 0 : n.id),
        N = null != f && null === T,
        C = (0, u.Z)(A ? (N ? (null == I ? void 0 : I.avatarDecoration) : null != T ? T : S) : null != S ? S : null == I ? void 0 : I.avatarDecoration),
        R = r.useMemo(
            () =>
                (0, c.NZ)({
                    avatarDecoration: void 0 !== g ? g : C,
                    canAnimate: y,
                    size: _
                }),
            [C, y, _, g]
        );
    return {
        avatarPlaceholderSrc: d,
        avatarDecorationSrc: R,
        isAvatarDecorationAnimating: y,
        eventHandlers: {
            onMouseEnter: r.useCallback(() => b(!0), []),
            onMouseLeave: r.useCallback(() => b(!1), [])
        }
    };
};
