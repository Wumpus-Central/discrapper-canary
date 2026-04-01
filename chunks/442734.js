n.d(t, { e: () => _ });
var i = n(627968),
    a = n(827734),
    r = n(397927),
    l = n(998304),
    s = n(890687),
    o = n(545986),
    d = n(652215),
    c = n(985018),
    u = n(404777);
function _(e) {
    let { onClick: t, questId: n, canUseQuestOrbMultiplier: _ } = e,
        m = (0, s.ZP)(n),
        h = (0, r.rdh)(a.A.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START, d.NJ8.DARK).hex(),
        p = (0, r.rdh)(a.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, d.NJ8.DARK).hex(),
        g = (0, r.rdh)(a.A.colors.BACKGROUND_BASE_LOWEST, d.NJ8.DARK).hex(),
        A = (0, l.cb)(h, 0.5),
        x = (0, l.cb)(p, 0.5);
    if (null == m) return null;
    let f = _
        ? c.intl.formatToPlainString(c.t.l2UfLG, { bonusOrbMultiplier: m })
        : c.intl.formatToPlainString(c.t["G+mKoo"], { bonusOrbMultiplier: m });
    return (0, i.jsx)(r.DUT, {
        onClick: () => {
            (0, o.gC)(m, _), t?.();
        },
        "aria-label": f,
        children: (0, i.jsxs)("div", {
            className: u.I,
            style: {
                "--custom-pill-gradient-start": A,
                "--custom-pill-gradient-end": x,
                "--custom-pill-base-color": g,
            },
            children: [
                (0, i.jsx)(r.tvc, { size: "xs", color: "white" }),
                (0, i.jsx)(r.Text, { variant: "text-xs/semibold", color: "always-white", children: f }),
            ],
        }),
    });
}
