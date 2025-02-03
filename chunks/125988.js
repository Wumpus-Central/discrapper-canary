n.d(t, { Z: () => f }), n(47120);
var i = n(192379),
    r = n(442837),
    a = n(812457),
    s = n(369111),
    o = n(271383),
    l = n(594174),
    u = n(768581),
    c = n(676742),
    d = n(660097);
let f = (e) => {
    var t;
    let { user: n, guildId: f, size: _, onlyAnimateOnHover: p = !1, showPending: h = !1, showTryItOut: m = !1, avatarDecorationOverride: g } = e,
        [E, v] = i.useState(!1),
        { canAnimate: y } = (0, a.j)(E, p),
        I = (0, r.e7)([o.ZP], () => (null != f && null != n ? o.ZP.getMember(f, n.id) : null)),
        [b, T] = (0, r.Wu)([l.default], () => {
            var e;
            return [null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.id, l.default.getUser(null == n ? void 0 : n.id)];
        }),
        S = null == I ? (null == T ? void 0 : T.avatarDecoration) : null === I.avatarDecoration ? null : null !== (t = I.avatarDecoration) && void 0 !== t ? t : null == T ? void 0 : T.avatarDecoration,
        { pendingAvatarDecoration: A } = (0, s.Z)({
            isTryItOut: m,
            guildId: f
        }),
        N = h && void 0 !== A && void 0 !== b && b === (null == n ? void 0 : n.id),
        C = null != f && null === A,
        R = (0, c.Z)(N ? (C ? (null == T ? void 0 : T.avatarDecoration) : null != A ? A : S) : null != S ? S : null == T ? void 0 : T.avatarDecoration),
        O = i.useMemo(
            () =>
                (0, u.NZ)({
                    avatarDecoration: void 0 !== g ? g : R,
                    canAnimate: y,
                    size: _
                }),
            [R, y, _, g]
        );
    return {
        avatarPlaceholderSrc: d,
        avatarDecorationSrc: O,
        isAvatarDecorationAnimating: y,
        eventHandlers: {
            onMouseEnter: i.useCallback(() => v(!0), []),
            onMouseLeave: i.useCallback(() => v(!1), [])
        }
    };
};
