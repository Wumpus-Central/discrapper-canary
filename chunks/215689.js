var l = n(582128),
    i = n(855986),
    s = n(919395),
    r = n(696451),
    a = n(486020),
    o = n(338932),
    c = n(940622),
    u = n(601255),
    d = n(476324);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { user: t, guildId: n, size: h, avatarDecorationOverride: m, onlyAnimateOnHoverOrFocus: g = !1 } = e,
                [f, p] = l.useState(!1),
                { canAnimate: A } = (0, o.T)(f, g),
                E = (0, i.bG)([r.Ay], () => (null != n && null != t ? r.Ay.getMember(n, t.id) : null)),
                x = (0, u.A)(
                    (0, s.lw)({ userValue: t?.avatarDecoration, guildValue: E?.avatarDecoration, guildId: n }),
                ),
                _ = (0, c.VU)(),
                j = l.useMemo(
                    () =>
                        null != _ && "" !== _
                            ? _
                            : (0, a.F_)({ avatarDecoration: void 0 !== m ? m : x, canAnimate: A, size: h }),
                    [_, m, x, A, h],
                );
            return {
                avatarPlaceholderSrc: d,
                avatarDecorationSrc: j,
                isAvatarDecorationAnimating: A,
                eventHandlers: {
                    onMouseEnter: l.useCallback(() => p(!0), []),
                    onMouseLeave: l.useCallback(() => p(!1), []),
                },
            };
        },
    },
);
