n.d(e, { e: () => x });
var s = n(627968),
    i = n(661531),
    a = n(602853),
    l = n(939249),
    r = n(834730),
    o = n(403581),
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
        g = (0, a.r)(i.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, E.NJ8.DARK).hex(),
        L = (0, a.r)(i.A.colors.BACKGROUND_BASE_LOWEST, E.NJ8.DARK).hex(),
        f = (0, a.r)(i.A.colors.BACKGROUND_BRAND).hex(),
        h = (0, u.cb)(_, 0.5),
        O = (0, u.cb)(g, 0.5),
        N = x === C.MA.CREPE,
        R = (0, C.B9)(x);
    if (null == I) return null;
    let y = R
            ? A.intl.formatToPlainString(A.t.l2UfLG, { bonusOrbMultiplier: I })
            : A.intl.formatToPlainString(A.t["G+mKoo"], { bonusOrbMultiplier: I }),
        p = () => {
            (0, d.gC)(I, x), e?.();
        };
    return N
        ? (0, s.jsx)(l.D, {
              onClick: p,
              "aria-label": y,
              children: (0, s.jsx)("div", {
                  className: T._,
                  style: { "--custom-pill-crepe-bg": f },
                  children: (0, s.jsx)(r.E, { variant: "text-xs/semibold", color: "always-white", children: y }),
              }),
          })
        : (0, s.jsx)(l.D, {
              onClick: p,
              "aria-label": y,
              children: (0, s.jsxs)("div", {
                  className: T.I,
                  style: {
                      "--custom-pill-gradient-start": h,
                      "--custom-pill-gradient-end": O,
                      "--custom-pill-base-color": L,
                  },
                  children: [
                      (0, s.jsx)(o.t, { size: "xs", color: "white" }),
                      (0, s.jsx)(r.E, { variant: "text-xs/semibold", color: "always-white", children: y }),
                  ],
              }),
          });
}
