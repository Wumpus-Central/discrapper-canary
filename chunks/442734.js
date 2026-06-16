n.d(e, { e: () => _ });
var s = n(627968),
    i = n(661531),
    a = n(602853),
    l = n(939249),
    o = n(834730),
    r = n(403581),
    u = n(998304),
    c = n(347135),
    C = n(576761),
    E = n(617986),
    d = n(652215),
    A = n(375708),
    T = n(900601);
function _(t) {
    let { onClick: e, questId: n, orbMultiplierEligibility: _ } = t,
        x = (0, c.ZP)(n),
        I = (0, a.r)(i.A.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START, d.NJ8.DARK).hex(),
        L = (0, a.r)(i.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, d.NJ8.DARK).hex(),
        O = (0, a.r)(i.A.colors.BACKGROUND_BASE_LOWEST, d.NJ8.DARK).hex(),
        g = (0, a.r)(i.A.colors.BACKGROUND_BRAND).hex(),
        f = (0, u.cb)(I, 0.5),
        h = (0, u.cb)(L, 0.5),
        N = _ === C.MA.CREPE,
        R = (0, C.B9)(_);
    if (null == x) return null;
    let y = R
            ? A.intl.formatToPlainString(A.t.l2UfLG, { bonusOrbMultiplier: x })
            : A.intl.formatToPlainString(A.t["G+mKoo"], { bonusOrbMultiplier: x }),
        S = () => {
            (0, E.gC)(x, _), e?.();
        };
    return N
        ? (0, s.jsx)(l.D, {
              onClick: S,
              "aria-label": y,
              children: (0, s.jsx)("div", {
                  className: T._,
                  style: { "--custom-pill-crepe-bg": g },
                  children: (0, s.jsx)(o.E, { variant: "text-xs/semibold", color: "always-white", children: y }),
              }),
          })
        : (0, s.jsx)(l.D, {
              onClick: S,
              "aria-label": y,
              children: (0, s.jsxs)("div", {
                  className: T.I,
                  style: {
                      "--custom-pill-gradient-start": f,
                      "--custom-pill-gradient-end": h,
                      "--custom-pill-base-color": O,
                  },
                  children: [
                      (0, s.jsx)(r.t, { size: "xs", color: "white" }),
                      (0, s.jsx)(o.E, { variant: "text-xs/semibold", color: "always-white", children: y }),
                  ],
              }),
          });
}
