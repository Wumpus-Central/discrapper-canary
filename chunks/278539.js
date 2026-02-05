"use strict";
n.d(t, { A: () => d });
var r = n(64700),
    i = n(311907),
    a = n(338932),
    s = n(919395),
    o = n(696451),
    l = n(486020),
    u = n(325445),
    c = n(476324);
let d = (e) => {
    let { user: t, guildId: n, size: d, avatarDecorationOverride: _, onlyAnimateOnHoverOrFocus: f = !1 } = e,
        [p, h] = r.useState(!1),
        { canAnimate: m } = (0, a.T)(p, f),
        g = (0, i.bG)([o.Ay], () => (null != n && null != t ? o.Ay.getMember(n, t.id) : null)),
        E = (0, u.A)((0, s.lw)({ userValue: t?.avatarDecoration, guildValue: g?.avatarDecoration, guildId: n })),
        A = r.useMemo(
            () => (0, l.F_)({ avatarDecoration: void 0 !== _ ? _ : E, canAnimate: m, size: d }),
            [_, E, m, d],
        );
    return {
        avatarPlaceholderSrc: c,
        avatarDecorationSrc: A,
        isAvatarDecorationAnimating: m,
        eventHandlers: { onMouseEnter: r.useCallback(() => h(!0), []), onMouseLeave: r.useCallback(() => h(!1), []) },
    };
};
