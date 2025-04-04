n.d(t, { Z: () => f }), n(47120);
var r = n(192379),
    i = n(442837),
    o = n(812457),
    a = n(369111),
    s = n(271383),
    l = n(594174),
    c = n(768581),
    u = n(676742),
    d = n(660097);
let f = (e) => {
    var t;
    let { user: n, guildId: f, size: _, onlyAnimateOnHover: p = !1, showPending: h = !1, showTryItOut: m = !1, avatarDecorationOverride: g } = e,
        [E, b] = r.useState(!1),
        { canAnimate: y } = (0, o.j)(E, p),
        v = (0, i.e7)([s.ZP], () => (null != f && null != n ? s.ZP.getMember(f, n.id) : null)),
        [O, I] = (0, i.Wu)([l.default], () => {
            var e;
            return [null == (e = l.default.getCurrentUser()) ? void 0 : e.id, l.default.getUser(null == n ? void 0 : n.id)];
        }),
        S = null == v ? (null == I ? void 0 : I.avatarDecoration) : null === v.avatarDecoration ? null : null != (t = v.avatarDecoration) ? t : null == I ? void 0 : I.avatarDecoration,
        { pendingAvatarDecoration: T } = (0, a.Z)({
            isTryItOut: m,
            guildId: f
        }),
        N = h && void 0 !== T && void 0 !== O && O === (null == n ? void 0 : n.id),
        A = null != f && null === T,
        C = (0, u.Z)(N ? (A ? (null == I ? void 0 : I.avatarDecoration) : null != T ? T : S) : null != S ? S : null == I ? void 0 : I.avatarDecoration),
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
