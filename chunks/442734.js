n.d(e, { e: () => f });
var s = n(477900),
    i = n(661531),
    r = n(602853),
    a = n(939249),
    o = n(834730),
    l = n(403581),
    u = n(998304),
    c = n(77870),
    C = n(576761),
    d = n(617986),
    E = n(652215),
    x = n(105292),
    A = n(502838);
function f(t) {
    let { onClick: e, questId: n, orbMultiplierEligibility: f } = t,
        I = (0, c.ZP)(n),
        T = (0, r.r)(i.A.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START, E.NJ8.DARK).hex(),
        O = (0, r.r)(i.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, E.NJ8.DARK).hex(),
        L = (0, r.r)(i.A.colors.BACKGROUND_BASE_LOWEST, E.NJ8.DARK).hex(),
        g = (0, r.r)(i.A.colors.BACKGROUND_BRAND).hex(),
        y = (0, u.cb)(T, 0.5),
        N = (0, u.cb)(O, 0.5),
        _ = f === C.MA.XBOX_GAME_PASS,
        S = (0, C.B9)(f);
    if (null == I) return null;
    let m = S
        ? x.intl.formatToPlainString(x.t.l2UfLG, { bonusOrbMultiplier: I })
        : x.intl.formatToPlainString(x.t["G+mKoo"], { bonusOrbMultiplier: I });
    function Q() {
        null != I && ((0, d.gC)(I, f), e?.());
    }
    return _
        ? (0, s.jsx)(a.D, {
              onClick: Q,
              "aria-label": m,
              children: (0, s.jsx)("div", {
                  className: A._,
                  style: { "--custom-pill-crepe-bg": g },
                  children: (0, s.jsx)(o.E, { variant: "text-xs/semibold", color: "text-overlay-light", children: m }),
              }),
          })
        : (0, s.jsx)(a.D, {
              onClick: Q,
              "aria-label": m,
              children: (0, s.jsxs)("div", {
                  className: A.I,
                  style: {
                      "--custom-pill-gradient-start": y,
                      "--custom-pill-gradient-end": N,
                      "--custom-pill-base-color": L,
                  },
                  children: [
                      (0, s.jsx)(l.t, { size: "xs", color: "white" }),
                      (0, s.jsx)(o.E, { variant: "text-xs/semibold", color: "text-overlay-light", children: m }),
                  ],
              }),
          });
}
