"use strict";
n.d(t, { e: () => E });
var i = n(627968),
    r = n(661531),
    s = n(602853),
    a = n(939249),
    o = n(834730),
    l = n(403581),
    u = n(998304),
    c = n(31587),
    d = n(576761),
    _ = n(617986),
    f = n(652215),
    h = n(375708),
    p = n(900601);
function E(e) {
    let { onClick: t, questId: n, orbMultiplierEligibility: E } = e,
        m = (0, c.ZP)(n),
        g = (0, s.r)(r.A.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START, f.NJ8.DARK).hex(),
        A = (0, s.r)(r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, f.NJ8.DARK).hex(),
        I = (0, s.r)(r.A.colors.BACKGROUND_BASE_LOWEST, f.NJ8.DARK).hex(),
        T = (0, s.r)(r.A.colors.BACKGROUND_BRAND).hex(),
        S = (0, u.cb)(g, 0.5),
        N = (0, u.cb)(A, 0.5),
        y = E === d.MA.CREPE,
        C = (0, d.B9)(E);
    if (null == m) return null;
    let v = C
            ? h.intl.formatToPlainString(h.t.l2UfLG, { bonusOrbMultiplier: m })
            : h.intl.formatToPlainString(h.t["G+mKoo"], { bonusOrbMultiplier: m }),
        O = () => {
            (0, _.gC)(m, E), t?.();
        };
    return y
        ? (0, i.jsx)(a.D, {
              onClick: O,
              "aria-label": v,
              children: (0, i.jsx)("div", {
                  className: p._,
                  style: { "--custom-pill-crepe-bg": T },
                  children: (0, i.jsx)(o.E, { variant: "text-xs/semibold", color: "always-white", children: v }),
              }),
          })
        : (0, i.jsx)(a.D, {
              onClick: O,
              "aria-label": v,
              children: (0, i.jsxs)("div", {
                  className: p.I,
                  style: {
                      "--custom-pill-gradient-start": S,
                      "--custom-pill-gradient-end": N,
                      "--custom-pill-base-color": I,
                  },
                  children: [
                      (0, i.jsx)(l.t, { size: "xs", color: "white" }),
                      (0, i.jsx)(o.E, { variant: "text-xs/semibold", color: "always-white", children: v }),
                  ],
              }),
          });
}
