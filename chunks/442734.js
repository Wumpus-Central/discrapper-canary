n.d(t, { e: () => p });
var i = n(627968),
    l = n(827734),
    a = n(602853),
    s = n(939249),
    r = n(403581),
    o = n(834730),
    d = n(998304),
    c = n(890687),
    u = n(545986),
    m = n(652215),
    _ = n(985018),
    h = n(900601);
function p(e) {
    let { onClick: t, questId: n, canUseQuestOrbMultiplier: p } = e,
        g = (0, c.ZP)(n),
        A = (0, a.r)(l.A.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START, m.NJ8.DARK).hex(),
        f = (0, a.r)(l.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, m.NJ8.DARK).hex(),
        x = (0, a.r)(l.A.colors.BACKGROUND_BASE_LOWEST, m.NJ8.DARK).hex(),
        C = (0, d.cb)(A, 0.5),
        E = (0, d.cb)(f, 0.5);
    if (null == g) return null;
    let I = p
        ? _.intl.formatToPlainString(_.t.l2UfLG, { bonusOrbMultiplier: g })
        : _.intl.formatToPlainString(_.t["G+mKoo"], { bonusOrbMultiplier: g });
    return (0, i.jsx)(s.D, {
        onClick: () => {
            (0, u.gC)(g, p), t?.();
        },
        "aria-label": I,
        children: (0, i.jsxs)("div", {
            className: h.I,
            style: {
                "--custom-pill-gradient-start": C,
                "--custom-pill-gradient-end": E,
                "--custom-pill-base-color": x,
            },
            children: [
                (0, i.jsx)(r.t, { size: "xs", color: "white" }),
                (0, i.jsx)(o.E, { variant: "text-xs/semibold", color: "always-white", children: I }),
            ],
        }),
    });
}
