n.d(t, { A: () => h });
var i = n(582128),
    l = n(17928),
    s = n(919395),
    r = n(696451),
    a = n(486020),
    o = n(338932),
    c = n(940622),
    u = n(601255),
    d = n(476324);
let h = function (e) {
    let { user: t, guildId: n, size: h, avatarDecorationOverride: m, onlyAnimateOnHoverOrFocus: g = !1 } = e,
        [f, p] = i.useState(!1),
        { canAnimate: x } = (0, o.T)(f, g),
        A = (0, l.bG)([r.Ay], () => (null != n && null != t ? r.Ay.getMember(n, t.id) : null)),
        E = (0, u.A)((0, s.lw)({ userValue: t?.avatarDecoration, guildValue: A?.avatarDecoration, guildId: n })),
        _ = (0, c.VU)(),
        j = i.useMemo(
            () =>
                null != _ && "" !== _
                    ? _
                    : (0, a.F_)({ avatarDecoration: void 0 !== m ? m : E, canAnimate: x, size: h }),
            [_, m, E, x, h],
        );
    return {
        avatarPlaceholderSrc: d,
        avatarDecorationSrc: j,
        isAvatarDecorationAnimating: x,
        eventHandlers: { onMouseEnter: i.useCallback(() => p(!0), []), onMouseLeave: i.useCallback(() => p(!1), []) },
    };
};
