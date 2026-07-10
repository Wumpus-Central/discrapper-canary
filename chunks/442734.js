n.d(e, { e: () => T });
var s = n(627968),
    i = n(661531),
    o = n(602853),
    u = n(939249),
    r = n(834730),
    a = n(403581),
    l = n(998304),
    C = n(347135),
    c = n(576761),
    E = n(617986),
    d = n(652215),
    A = n(375708),
    x = n(900601);
function T(t) {
    let { onClick: e, questId: n, orbMultiplierEligibility: T } = t,
        _ = (0, C.ZP)(n),
        I = (0, o.r)(i.A.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START, d.NJ8.DARK).hex(),
        q = (0, o.r)(i.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, d.NJ8.DARK).hex(),
        y = (0, o.r)(i.A.colors.BACKGROUND_BASE_LOWEST, d.NJ8.DARK).hex(),
        L = (0, o.r)(i.A.colors.BACKGROUND_BRAND).hex(),
        N = (0, l.cb)(I, 0.5),
        O = (0, l.cb)(q, 0.5),
        Q = T === c.MA.CREPE,
        R = (0, c.B9)(T);
    if (null == _) return null;
    let f = R
            ? A.intl.formatToPlainString(A.t.l2UfLG, { bonusOrbMultiplier: _ })
            : A.intl.formatToPlainString(A.t["G+mKoo"], { bonusOrbMultiplier: _ }),
        P = () => {
            (0, E.gC)(_, T), e?.();
        };
    return Q
        ? (0, s.jsx)(u.D, {
              onClick: P,
              "aria-label": f,
              children: (0, s.jsx)("div", {
                  className: x._,
                  style: { "--custom-pill-crepe-bg": L },
                  children: (0, s.jsx)(r.E, { variant: "text-xs/semibold", color: "text-overlay-light", children: f }),
              }),
          })
        : (0, s.jsx)(u.D, {
              onClick: P,
              "aria-label": f,
              children: (0, s.jsxs)("div", {
                  className: x.I,
                  style: {
                      "--custom-pill-gradient-start": N,
                      "--custom-pill-gradient-end": O,
                      "--custom-pill-base-color": y,
                  },
                  children: [
                      (0, s.jsx)(a.t, { size: "xs", color: "white" }),
                      (0, s.jsx)(r.E, { variant: "text-xs/semibold", color: "text-overlay-light", children: f }),
                  ],
              }),
          });
}
