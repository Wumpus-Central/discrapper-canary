n.d(e, { e: () => I });
var s = n(477900),
    i = n(661531),
    o = n(602853),
    r = n(939249),
    a = n(834730),
    l = n(403581),
    u = n(998304),
    c = n(309593),
    C = n(576761),
    d = n(617986),
    E = n(652215),
    x = n(375708),
    A = n(502838);
function I(t) {
    let { onClick: e, questId: n, orbMultiplierEligibility: I } = t,
        T = (0, c.ZP)(n),
        f = (0, o.r)(i.A.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START, E.NJ8.DARK).hex(),
        O = (0, o.r)(i.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, E.NJ8.DARK).hex(),
        _ = (0, o.r)(i.A.colors.BACKGROUND_BASE_LOWEST, E.NJ8.DARK).hex(),
        L = (0, o.r)(i.A.colors.BACKGROUND_BRAND).hex(),
        y = (0, u.cb)(f, 0.5),
        N = (0, u.cb)(O, 0.5),
        g = I === C.MA.CREPE,
        S = (0, C.B9)(I);
    if (null == T) return null;
    let m = S
        ? x.intl.formatToPlainString(x.t.l2UfLG, { bonusOrbMultiplier: T })
        : x.intl.formatToPlainString(x.t["G+mKoo"], { bonusOrbMultiplier: T });
    function Q() {
        null != T && ((0, d.gC)(T, I), e?.());
    }
    return g
        ? (0, s.jsx)(r.D, {
              onClick: Q,
              "aria-label": m,
              children: (0, s.jsx)("div", {
                  className: A._,
                  style: { "--custom-pill-crepe-bg": L },
                  children: (0, s.jsx)(a.E, { variant: "text-xs/semibold", color: "text-overlay-light", children: m }),
              }),
          })
        : (0, s.jsx)(r.D, {
              onClick: Q,
              "aria-label": m,
              children: (0, s.jsxs)("div", {
                  className: A.I,
                  style: {
                      "--custom-pill-gradient-start": y,
                      "--custom-pill-gradient-end": N,
                      "--custom-pill-base-color": _,
                  },
                  children: [
                      (0, s.jsx)(l.t, { size: "xs", color: "white" }),
                      (0, s.jsx)(a.E, { variant: "text-xs/semibold", color: "text-overlay-light", children: m }),
                  ],
              }),
          });
}
