var s = n(477900),
    i = n(646514),
    r = n(602853),
    o = n(939249),
    a = n(834730),
    l = n(403581),
    u = n(998304),
    c = n(61387),
    C = n(576761),
    d = n(321538),
    E = n(652215),
    x = n(792996),
    A = n(502838);
n.d(
    e,
    {},
    {
        e: function (t) {
            let { onClick: e, questId: n, orbMultiplierEligibility: f } = t,
                I = (0, c.ZP)(n),
                T = (0, r.r)(i.A.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START, E.NJ8.DARK).hex(),
                O = (0, r.r)(i.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, E.NJ8.DARK).hex(),
                y = (0, r.r)(i.A.colors.BACKGROUND_BASE_LOWEST, E.NJ8.DARK).hex(),
                L = (0, r.r)(i.A.colors.BACKGROUND_BRAND).hex(),
                g = (0, u.cb)(T, 0.5),
                N = (0, u.cb)(O, 0.5),
                _ = f === C.MA.XBOX_GAME_PASS,
                m = (0, C.B9)(f);
            if (null == I) return null;
            let S = m
                ? x.intl.formatToPlainString(x.t.l2UfLG, { bonusOrbMultiplier: I })
                : x.intl.formatToPlainString(x.t["G+mKoo"], { bonusOrbMultiplier: I });
            function Q() {
                null != I && ((0, d.gC)(I, f), e?.());
            }
            return _
                ? (0, s.jsx)(o.D, {
                      onClick: Q,
                      "aria-label": S,
                      children: (0, s.jsx)("div", {
                          className: A._,
                          style: { "--custom-pill-crepe-bg": L },
                          children: (0, s.jsx)(a.E, {
                              variant: "body-xs/semibold",
                              color: "text-overlay-light",
                              children: S,
                          }),
                      }),
                  })
                : (0, s.jsx)(o.D, {
                      onClick: Q,
                      "aria-label": S,
                      children: (0, s.jsxs)("div", {
                          className: A.I,
                          style: {
                              "--custom-pill-gradient-start": g,
                              "--custom-pill-gradient-end": N,
                              "--custom-pill-base-color": y,
                          },
                          children: [
                              (0, s.jsx)(l.t, { size: "xs", color: "white" }),
                              (0, s.jsx)(a.E, {
                                  variant: "body-xs/semibold",
                                  color: "text-overlay-light",
                                  children: S,
                              }),
                          ],
                      }),
                  });
        },
    },
);
