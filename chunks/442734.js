"use strict";
n.d(t, { e: () => E });
var i = n(627968),
    r = n(661531),
    s = n(602853),
    a = n(939249),
    o = n(834730),
    l = n(403581),
    u = n(998304),
    c = n(347135),
    d = n(576761),
    _ = n(617986),
    h = n(652215),
    f = n(375708),
    p = n(900601);
function E(e) {
    let { onClick: t, questId: n, orbMultiplierEligibility: E } = e,
        m = (0, c.ZP)(n),
        g = (0, s.r)(r.A.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START, h.NJ8.DARK).hex(),
        A = (0, s.r)(r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, h.NJ8.DARK).hex(),
        I = (0, s.r)(r.A.colors.BACKGROUND_BASE_LOWEST, h.NJ8.DARK).hex(),
        T = (0, s.r)(r.A.colors.BACKGROUND_BRAND).hex(),
        S = (0, u.cb)(g, 0.5),
        y = (0, u.cb)(A, 0.5),
        N = E === d.MA.CREPE,
        v = (0, d.B9)(E);
    if (null == m) return null;
    let C = v
            ? f.intl.formatToPlainString(f.t.l2UfLG, { bonusOrbMultiplier: m })
            : f.intl.formatToPlainString(f.t["G+mKoo"], { bonusOrbMultiplier: m }),
        R = () => {
            (0, _.gC)(m, E), t?.();
        };
    return N
        ? (0, i.jsx)(a.D, {
              onClick: R,
              "aria-label": C,
              children: (0, i.jsx)("div", {
                  className: p._,
                  style: { "--custom-pill-crepe-bg": T },
                  children: (0, i.jsx)(o.E, { variant: "text-xs/semibold", color: "always-white", children: C }),
              }),
          })
        : (0, i.jsx)(a.D, {
              onClick: R,
              "aria-label": C,
              children: (0, i.jsxs)("div", {
                  className: p.I,
                  style: {
                      "--custom-pill-gradient-start": S,
                      "--custom-pill-gradient-end": y,
                      "--custom-pill-base-color": I,
                  },
                  children: [
                      (0, i.jsx)(l.t, { size: "xs", color: "white" }),
                      (0, i.jsx)(o.E, { variant: "text-xs/semibold", color: "always-white", children: C }),
                  ],
              }),
          });
}
