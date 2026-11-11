var l = n(582128),
    i = n(855986),
    s = n(919395),
    r = n(696451),
    a = n(486020),
    o = n(338932),
    u = n(940622),
    c = n(601255),
    d = n(476324);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { user: t, guildId: n, size: h, avatarDecorationOverride: m, onlyAnimateOnHoverOrFocus: g = !1 } = e,
                [f, p] = l.useState(!1),
                { canAnimate: E } = (0, o.T)(f, g),
                A = (0, i.bG)([r.Ay], () => (null != n && null != t ? r.Ay.getMember(n, t.id) : null)),
                _ = (0, c.A)(
                    (0, s.lw)({ userValue: t?.avatarDecoration, guildValue: A?.avatarDecoration, guildId: n }),
                ),
                x = (0, u.VU)(),
                j = l.useMemo(
                    () =>
                        null != x && "" !== x
                            ? x
                            : (0, a.F_)({ avatarDecoration: void 0 !== m ? m : _, canAnimate: E, size: h }),
                    [x, m, _, E, h],
                );
            return {
                avatarPlaceholderSrc: d,
                avatarDecorationSrc: j,
                isAvatarDecorationAnimating: E,
                eventHandlers: {
                    onMouseEnter: l.useCallback(() => p(!0), []),
                    onMouseLeave: l.useCallback(() => p(!1), []),
                },
            };
        },
    },
);
