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
    let { user: n, guildId: f, size: p, onlyAnimateOnHover: _ = !1, showPending: h = !1, showTryItOut: m = !1, avatarDecorationOverride: g } = e,
        [E, v] = r.useState(!1),
        { canAnimate: b } = (0, o.j)(E, _),
        y = (0, i.e7)([s.ZP], () => (null != f && null != n ? s.ZP.getMember(f, n.id) : null)),
        [O, S] = (0, i.Wu)([l.default], () => {
            var e;
            return [null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.id, l.default.getUser(null == n ? void 0 : n.id)];
        }),
        I = null == y ? (null == S ? void 0 : S.avatarDecoration) : null === y.avatarDecoration ? null : null !== (t = y.avatarDecoration) && void 0 !== t ? t : null == S ? void 0 : S.avatarDecoration,
        { pendingAvatarDecoration: T } = (0, a.Z)({
            isTryItOut: m,
            guildId: f
        }),
        N = h && void 0 !== T && void 0 !== O && O === (null == n ? void 0 : n.id),
        A = null != f && null === T,
        C = (0, u.Z)(N ? (A ? (null == S ? void 0 : S.avatarDecoration) : null != T ? T : I) : null != I ? I : null == S ? void 0 : S.avatarDecoration),
        R = r.useMemo(
            () =>
                (0, c.NZ)({
                    avatarDecoration: void 0 !== g ? g : C,
                    canAnimate: b,
                    size: p
                }),
            [C, b, p, g]
        );
    return {
        avatarPlaceholderSrc: d,
        avatarDecorationSrc: R,
        isAvatarDecorationAnimating: b,
        eventHandlers: {
            onMouseEnter: r.useCallback(() => v(!0), []),
            onMouseLeave: r.useCallback(() => v(!1), [])
        }
    };
};
