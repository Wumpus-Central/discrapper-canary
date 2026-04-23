"use strict";
n.d(t, { A: () => _ });
var r = n(64700),
    i = n(311907),
    s = n(919395),
    a = n(696451),
    o = n(486020),
    l = n(338932),
    u = n(940622),
    c = n(601255),
    d = n(476324);
let _ = (e) => {
    let { user: t, guildId: n, size: _, avatarDecorationOverride: f, onlyAnimateOnHoverOrFocus: p = !1 } = e,
        [h, E] = r.useState(!1),
        { canAnimate: m } = (0, l.T)(h, p),
        g = (0, i.bG)([a.Ay], () => (null != n && null != t ? a.Ay.getMember(n, t.id) : null)),
        A = (0, c.A)((0, s.lw)({ userValue: t?.avatarDecoration, guildValue: g?.avatarDecoration, guildId: n })),
        I = (0, u.VU)(),
        T = r.useMemo(
            () =>
                null != I && "" !== I
                    ? I
                    : (0, o.F_)({ avatarDecoration: void 0 !== f ? f : A, canAnimate: m, size: _ }),
            [I, f, A, m, _],
        );
    return {
        avatarPlaceholderSrc: d,
        avatarDecorationSrc: T,
        isAvatarDecorationAnimating: m,
        eventHandlers: { onMouseEnter: r.useCallback(() => E(!0), []), onMouseLeave: r.useCallback(() => E(!1), []) },
    };
};
