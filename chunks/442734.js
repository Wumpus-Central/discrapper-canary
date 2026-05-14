"use strict";
n.d(t, { e: () => m });
var i = n(627968),
    r = n(661531),
    s = n(602853),
    a = n(939249),
    o = n(834730),
    l = n(403581),
    u = n(998304),
    c = n(31587),
    d = n(646917),
    _ = n(576761),
    f = n(617986),
    h = n(652215),
    p = n(375708),
    E = n(900601);
function m(e) {
    let { onClick: t, questId: n, orbMultiplierEligibility: m } = e,
        g = (0, c.ZP)(n),
        A = (0, s.r)(r.A.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START, h.NJ8.DARK).hex(),
        I = (0, s.r)(r.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, h.NJ8.DARK).hex(),
        T = (0, s.r)(r.A.colors.BACKGROUND_BASE_LOWEST, h.NJ8.DARK).hex(),
        S = (0, s.r)(r.A.colors.BACKGROUND_BRAND).hex(),
        N = (0, u.cb)(A, 0.5),
        y = (0, u.cb)(I, 0.5),
        C = m === d.M.CREPE,
        v = (0, _.B9)(m);
    if (null == g) return null;
    let O = v
            ? p.intl.formatToPlainString(p.t.l2UfLG, { bonusOrbMultiplier: g })
            : p.intl.formatToPlainString(p.t["G+mKoo"], { bonusOrbMultiplier: g }),
        R = () => {
            (0, f.gC)(g, m), t?.();
        };
    return C
        ? (0, i.jsx)(a.D, {
              onClick: R,
              "aria-label": O,
              children: (0, i.jsx)("div", {
                  className: E._,
                  style: { "--custom-pill-crepe-bg": S },
                  children: (0, i.jsx)(o.E, { variant: "text-xs/semibold", color: "always-white", children: O }),
              }),
          })
        : (0, i.jsx)(a.D, {
              onClick: R,
              "aria-label": O,
              children: (0, i.jsxs)("div", {
                  className: E.I,
                  style: {
                      "--custom-pill-gradient-start": N,
                      "--custom-pill-gradient-end": y,
                      "--custom-pill-base-color": T,
                  },
                  children: [
                      (0, i.jsx)(l.t, { size: "xs", color: "white" }),
                      (0, i.jsx)(o.E, { variant: "text-xs/semibold", color: "always-white", children: O }),
                  ],
              }),
          });
}
