n.d(e, { e: () => A });
var s = n(627968),
    i = n(661531),
    o = n(602853),
    r = n(939249),
    a = n(834730),
    u = n(403581),
    l = n(998304),
    c = n(573526),
    C = n(576761),
    d = n(617986),
    E = n(652215),
    x = n(375708),
    T = n(727377);
function A(t) {
    let { onClick: e, questId: n, orbMultiplierEligibility: A } = t,
        I = (0, c.ZP)(n),
        _ = (0, o.r)(i.A.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START, E.NJ8.DARK).hex(),
        f = (0, o.r)(i.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, E.NJ8.DARK).hex(),
        O = (0, o.r)(i.A.colors.BACKGROUND_BASE_LOWEST, E.NJ8.DARK).hex(),
        N = (0, o.r)(i.A.colors.BACKGROUND_BRAND).hex(),
        y = (0, l.cb)(_, 0.5),
        L = (0, l.cb)(f, 0.5),
        g = A === C.MA.CREPE,
        q = (0, C.B9)(A);
    if (null == I) return null;
    let m = q
        ? x.intl.formatToPlainString(x.t.l2UfLG, { bonusOrbMultiplier: I })
        : x.intl.formatToPlainString(x.t["G+mKoo"], { bonusOrbMultiplier: I });
    function R() {
        null != I && ((0, d.gC)(I, A), e?.());
    }
    return g
        ? (0, s.jsx)(r.D, {
              onClick: R,
              "aria-label": m,
              children: (0, s.jsx)("div", {
                  className: T._,
                  style: { "--custom-pill-crepe-bg": N },
                  children: (0, s.jsx)(a.E, { variant: "text-xs/semibold", color: "text-overlay-light", children: m }),
              }),
          })
        : (0, s.jsx)(r.D, {
              onClick: R,
              "aria-label": m,
              children: (0, s.jsxs)("div", {
                  className: T.I,
                  style: {
                      "--custom-pill-gradient-start": y,
                      "--custom-pill-gradient-end": L,
                      "--custom-pill-base-color": O,
                  },
                  children: [
                      (0, s.jsx)(u.t, { size: "xs", color: "white" }),
                      (0, s.jsx)(a.E, { variant: "text-xs/semibold", color: "text-overlay-light", children: m }),
                  ],
              }),
          });
}
