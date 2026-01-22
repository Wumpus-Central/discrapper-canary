n.d(t, {
    A: () => d,
}),
    n(896048);
var r = n(64700),
    i = n(311907),
    a = n(338932),
    s = n(919395),
    o = n(696451),
    l = n(486020),
    c = n(325445),
    u = n(476324);
let d = (e) => {
    let { user: t, guildId: n, size: d, avatarDecorationOverride: f, onlyAnimateOnHoverOrFocus: p = !1 } = e,
        [_, h] = r.useState(!1),
        { canAnimate: m } = (0, a.T)(_, p),
        g = (0, i.bG)([o.Ay], () => (null != n && null != t ? o.Ay.getMember(n, t.id) : null)),
        E = (0, c.A)(
            (0, s.lw)({
                userValue: null == t ? void 0 : t.avatarDecoration,
                guildValue: null == g ? void 0 : g.avatarDecoration,
                guildId: n,
            }),
        ),
        b = r.useMemo(
            () =>
                (0, l.F_)({
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
