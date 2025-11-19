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
    let { user: t, guildId: n, size: d, avatarDecorationOverride: f, onlyAnimateOnHoverOrFocus: _ = !1 } = e,
        [p, h] = r.useState(!1),
        { canAnimate: m } = (0, a.j)(p, _),
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
                    canAnimate: m,
                    size: d,
                }),
            [f, E, m, d],
        );
    return {
        avatarPlaceholderSrc: u,
        avatarDecorationSrc: b,
        isAvatarDecorationAnimating: m,
        eventHandlers: {
            onMouseEnter: r.useCallback(() => h(!0), []),
            onMouseLeave: r.useCallback(() => h(!1), []),
        },
    };
};
