"use strict";
n.d(t, { A: () => _ });
var r = n(64700),
    i = n(311907),
    s = n(338932),
    a = n(940622),
    o = n(919395),
    l = n(696451),
    u = n(486020),
    c = n(325445),
    d = n(476324);
let _ = (e) => {
    let { user: t, guildId: n, size: _, avatarDecorationOverride: f, onlyAnimateOnHoverOrFocus: p = !1 } = e,
        [h, m] = r.useState(!1),
        { canAnimate: E } = (0, s.T)(h, p),
        g = (0, i.bG)([l.Ay], () => (null != n && null != t ? l.Ay.getMember(n, t.id) : null)),
        A = (0, c.A)((0, o.lw)({ userValue: t?.avatarDecoration, guildValue: g?.avatarDecoration, guildId: n })),
        I = (0, a.VU)(),
        T = r.useMemo(
            () =>
                null != I && "" !== I
                    ? I
                    : (0, u.F_)({ avatarDecoration: void 0 !== f ? f : A, canAnimate: E, size: _ }),
            [I, f, A, E, _],
        );
    return {
        avatarPlaceholderSrc: d,
        avatarDecorationSrc: T,
        isAvatarDecorationAnimating: E,
        eventHandlers: { onMouseEnter: r.useCallback(() => m(!0), []), onMouseLeave: r.useCallback(() => m(!1), []) },
    };
};
