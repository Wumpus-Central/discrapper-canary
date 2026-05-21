n.d(e, { e: () => x });
var s = n(627968),
    i = n(661531),
    a = n(602853),
    o = n(939249),
    l = n(834730),
    r = n(403581),
    u = n(998304),
    c = n(31587),
    C = n(576761),
    d = n(617986),
    E = n(652215),
    A = n(375708),
    T = n(900601);
function x(t) {
    let { onClick: e, questId: n, orbMultiplierEligibility: x } = t,
        I = (0, c.ZP)(n),
        _ = (0, a.r)(i.A.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START, E.NJ8.DARK).hex(),
        h = (0, a.r)(i.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, E.NJ8.DARK).hex(),
        g = (0, a.r)(i.A.colors.BACKGROUND_BASE_LOWEST, E.NJ8.DARK).hex(),
        N = (0, a.r)(i.A.colors.BACKGROUND_BRAND).hex(),
        L = (0, u.cb)(_, 0.5),
        f = (0, u.cb)(h, 0.5),
        y = x === C.MA.CREPE,
        R = (0, C.B9)(x);
    if (null == I) return null;
    let O = R
            ? A.intl.formatToPlainString(A.t.l2UfLG, { bonusOrbMultiplier: I })
            : A.intl.formatToPlainString(A.t["G+mKoo"], { bonusOrbMultiplier: I }),
        m = () => {
            (0, d.gC)(I, x), e?.();
        };
    return y
        ? (0, s.jsx)(o.D, {
              onClick: m,
              "aria-label": O,
              children: (0, s.jsx)("div", {
                  className: T._,
                  style: { "--custom-pill-crepe-bg": N },
                  children: (0, s.jsx)(l.E, { variant: "text-xs/semibold", color: "always-white", children: O }),
              }),
          })
        : (0, s.jsx)(o.D, {
              onClick: m,
              "aria-label": O,
              children: (0, s.jsxs)("div", {
                  className: T.I,
                  style: {
                      "--custom-pill-gradient-start": L,
                      "--custom-pill-gradient-end": f,
                      "--custom-pill-base-color": g,
                  },
                  children: [
                      (0, s.jsx)(r.t, { size: "xs", color: "white" }),
                      (0, s.jsx)(l.E, { variant: "text-xs/semibold", color: "always-white", children: O }),
                  ],
              }),
          });
}
