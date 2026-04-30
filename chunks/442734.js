"use strict";
n.d(t, { e: () => p });
var i = n(627968),
    r = n(661531),
    s = n(602853),
    a = n(939249),
    o = n(403581),
    l = n(834730),
    u = n(998304),
    c = n(31587),
    d = n(617986),
    _ = n(652215),
    f = n(375708),
    h = n(900601);
function p(e) {
    let { onClick: t, questId: n, canUseQuestOrbMultiplier: p } = e,
        E = (0, c.ZP)(n),
        m = (0, s.r)(r.A.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START, _.NJ8.DARK).hex(),
        g = (0, s.r)(r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, _.NJ8.DARK).hex(),
        A = (0, s.r)(r.A.colors.BACKGROUND_BASE_LOWEST, _.NJ8.DARK).hex(),
        I = (0, u.cb)(m, 0.5),
        T = (0, u.cb)(g, 0.5);
    if (null == E) return null;
    let S = p
        ? f.intl.formatToPlainString(f.t.l2UfLG, { bonusOrbMultiplier: E })
        : f.intl.formatToPlainString(f.t["G+mKoo"], { bonusOrbMultiplier: E });
    return (0, i.jsx)(a.D, {
        onClick: () => {
            (0, d.gC)(E, p), t?.();
        },
        "aria-label": S,
        children: (0, i.jsxs)("div", {
            className: h.I,
            style: {
                "--custom-pill-gradient-start": I,
                "--custom-pill-gradient-end": T,
                "--custom-pill-base-color": A,
            },
            children: [
                (0, i.jsx)(o.t, { size: "xs", color: "white" }),
                (0, i.jsx)(l.E, { variant: "text-xs/semibold", color: "always-white", children: S }),
            ],
        }),
    });
}
