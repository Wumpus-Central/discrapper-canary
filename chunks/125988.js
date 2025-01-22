var i = r(47120);
var a = r(192379),
    o = r(442837),
    s = r(812457),
    l = r(369111),
    u = r(271383),
    c = r(594174),
    d = r(768581),
    f = r(676742),
    p = r(660097);
let h = (e) => {
    var n;
    let { user: r, guildId: i, size: h, onlyAnimateOnHover: _ = !1, showPending: m = !1, showTryItOut: g = !1, avatarDecorationOverride: E } = e,
        [v, y] = a.useState(!1),
        { canAnimate: b } = (0, s.j)(v, _),
        I = (0, o.e7)([u.ZP], () => (null != i && null != r ? u.ZP.getMember(i, r.id) : null)),
        [T, S] = (0, o.Wu)([c.default], () => {
            var e;
            return [null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.id, c.default.getUser(null == r ? void 0 : r.id)];
        }),
        A = null == I ? (null == S ? void 0 : S.avatarDecoration) : null === I.avatarDecoration ? null : null !== (n = I.avatarDecoration) && void 0 !== n ? n : null == S ? void 0 : S.avatarDecoration,
        { pendingAvatarDecoration: C } = (0, l.Z)({
            isTryItOut: g,
            guildId: i
        }),
        N = m && void 0 !== C && void 0 !== T && T === (null == r ? void 0 : r.id),
        R = null != i && null === C,
        O = (0, f.Z)(N ? (R ? (null == S ? void 0 : S.avatarDecoration) : null != C ? C : A) : null != A ? A : null == S ? void 0 : S.avatarDecoration),
        D = a.useMemo(
            () =>
                (0, d.NZ)({
                    avatarDecoration: void 0 !== E ? E : O,
                    canAnimate: b,
                    size: h
                }),
            [O, b, h, E]
        ),
        L = a.useCallback(() => y(!0), []);
    return {
        avatarPlaceholderSrc: p,
        avatarDecorationSrc: D,
        isAvatarDecorationAnimating: b,
        eventHandlers: {
            onMouseEnter: L,
            onMouseLeave: a.useCallback(() => y(!1), [])
        }
    };
};
n.Z = h;
