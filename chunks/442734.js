n.d(t, { e: () => f });
var l = n(627968),
    s = n(661531),
    i = n(602853),
    a = n(939249),
    r = n(403581),
    o = n(834730),
    c = n(998304),
    u = n(890687),
    d = n(545986),
    h = n(652215),
    m = n(985018),
    p = n(900601);
function f(e) {
    let { onClick: t, questId: n, canUseQuestOrbMultiplier: f } = e,
        g = (0, u.ZP)(n),
        A = (0, i.r)(s.A.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START, h.NJ8.DARK).hex(),
        x = (0, i.r)(s.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, h.NJ8.DARK).hex(),
        C = (0, i.r)(s.A.colors.BACKGROUND_BASE_LOWEST, h.NJ8.DARK).hex(),
        E = (0, c.cb)(A, 0.5),
        v = (0, c.cb)(x, 0.5);
    if (null == g) return null;
    let T = f
        ? m.intl.formatToPlainString(m.t.l2UfLG, { bonusOrbMultiplier: g })
        : m.intl.formatToPlainString(m.t["G+mKoo"], { bonusOrbMultiplier: g });
    return (0, l.jsx)(a.D, {
        onClick: () => {
            (0, d.gC)(g, f), t?.();
        },
        "aria-label": T,
        children: (0, l.jsxs)("div", {
            className: p.I,
            style: {
                "--custom-pill-gradient-start": E,
                "--custom-pill-gradient-end": v,
                "--custom-pill-base-color": C,
            },
            children: [
                (0, l.jsx)(r.t, { size: "xs", color: "white" }),
                (0, l.jsx)(o.E, { variant: "text-xs/semibold", color: "always-white", children: T }),
            ],
        }),
    });
}
