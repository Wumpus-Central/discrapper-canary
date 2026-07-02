n.d(e, { e: () => _ });
var s = n(627968),
    i = n(661531),
    a = n(602853),
    o = n(939249),
    r = n(834730),
    l = n(403581),
    u = n(998304),
    c = n(347135),
    C = n(576761),
    E = n(617986),
    d = n(652215),
    A = n(375708),
    T = n(900601);
function _(t) {
    let { onClick: e, questId: n, orbMultiplierEligibility: _ } = t,
        I = (0, c.ZP)(n),
        x = (0, a.r)(i.A.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START, d.NJ8.DARK).hex(),
        L = (0, a.r)(i.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, d.NJ8.DARK).hex(),
        N = (0, a.r)(i.A.colors.BACKGROUND_BASE_LOWEST, d.NJ8.DARK).hex(),
        O = (0, a.r)(i.A.colors.BACKGROUND_BRAND).hex(),
        f = (0, u.cb)(x, 0.5),
        g = (0, u.cb)(L, 0.5),
        R = _ === C.MA.CREPE,
        y = (0, C.B9)(_);
    if (null == I) return null;
    let h = y
            ? A.intl.formatToPlainString(A.t.l2UfLG, { bonusOrbMultiplier: I })
            : A.intl.formatToPlainString(A.t["G+mKoo"], { bonusOrbMultiplier: I }),
        p = () => {
            (0, E.gC)(I, _), e?.();
        };
    return R
        ? (0, s.jsx)(o.D, {
              onClick: p,
              "aria-label": h,
              children: (0, s.jsx)("div", {
                  className: T._,
                  style: { "--custom-pill-crepe-bg": O },
                  children: (0, s.jsx)(r.E, { variant: "text-xs/semibold", color: "always-white", children: h }),
              }),
          })
        : (0, s.jsx)(o.D, {
              onClick: p,
              "aria-label": h,
              children: (0, s.jsxs)("div", {
                  className: T.I,
                  style: {
                      "--custom-pill-gradient-start": f,
                      "--custom-pill-gradient-end": g,
                      "--custom-pill-base-color": N,
                  },
                  children: [
                      (0, s.jsx)(l.t, { size: "xs", color: "white" }),
                      (0, s.jsx)(r.E, { variant: "text-xs/semibold", color: "always-white", children: h }),
                  ],
              }),
          });
}
