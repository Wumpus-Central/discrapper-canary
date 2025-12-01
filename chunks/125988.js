n.d(t, { Z: () => d }), n(388685);
var r = n(473749),
    i = n(442837),
    a = n(812457),
    o = n(150039),
    s = n(271383),
    l = n(768581),
    c = n(676742),
    u = n(660097);
let d = (e) => {
    let { user: t, guildId: n, size: d, avatarDecorationOverride: f, onlyAnimateOnHoverOrFocus: p = !1 } = e,
        [_, m] = r.useState(!1),
        { canAnimate: h } = (0, a.j)(_, p),
        g = (0, i.e7)([s.ZP], () => (null != n && null != t ? s.ZP.getMember(n, t.id) : null)),
        E = (0, c.Z)(
            (0, o.Ys)({
                userValue: null == t ? void 0 : t.avatarDecoration,
                guildValue: null == g ? void 0 : g.avatarDecoration,
                guildId: n,
            }),
        ),
        b = r.useMemo(
            () =>
                (0, l.NZ)({
                    avatarDecoration: void 0 !== f ? f : E,
                    canAnimate: h,
                    size: d,
                }),
            [f, E, h, d],
        );
    return {
        avatarPlaceholderSrc: u,
        avatarDecorationSrc: b,
        isAvatarDecorationAnimating: h,
        eventHandlers: {
            onMouseEnter: r.useCallback(() => m(!0), []),
            onMouseLeave: r.useCallback(() => m(!1), []),
        },
    };
};
