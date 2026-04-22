n.d(t, { A: () => p });
var a = n(64700),
    r = n(311907),
    l = n(919395),
    i = n(696451),
    o = n(486020),
    s = n(338932),
    c = n(940622),
    u = n(601255),
    d = n(476324);
let p = (e) => {
    let { user: t, guildId: n, size: p, avatarDecorationOverride: A, onlyAnimateOnHoverOrFocus: g = !1 } = e,
        [_, v] = a.useState(!1),
        { canAnimate: f } = (0, s.T)(_, g),
        m = (0, r.bG)([i.Ay], () => (null != n && null != t ? i.Ay.getMember(n, t.id) : null)),
        E = (0, u.A)((0, l.lw)({ userValue: t?.avatarDecoration, guildValue: m?.avatarDecoration, guildId: n })),
        b = (0, c.VU)(),
        R = a.useMemo(
            () =>
                null != b && "" !== b
                    ? b
                    : (0, o.F_)({ avatarDecoration: void 0 !== A ? A : E, canAnimate: f, size: p }),
            [b, A, E, f, p],
        );
    return {
        avatarPlaceholderSrc: d,
        avatarDecorationSrc: R,
        isAvatarDecorationAnimating: f,
        eventHandlers: { onMouseEnter: a.useCallback(() => v(!0), []), onMouseLeave: a.useCallback(() => v(!1), []) },
    };
};
