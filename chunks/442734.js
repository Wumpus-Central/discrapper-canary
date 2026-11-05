var s = n(477900),
    i = n(646514),
    o = n(602853),
    r = n(939249),
    a = n(834730),
    l = n(403581),
    c = n(998304),
    u = n(61387),
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
            let { onClick: e, questId: n, orbMultiplierEligibility: I } = t,
                f = (0, u.ZP)(n),
                T = (0, o.r)(i.A.colors.EXPRESSIVE_GRADIENT_NITRO_PINK_START, E.NJ8.DARK).hex(),
                O = (0, o.r)(i.A.colors.EXPRESSIVE_GRADIENT_TENURE_BADGE_DIAMOND_END, E.NJ8.DARK).hex(),
                L = (0, o.r)(i.A.colors.BACKGROUND_BASE_LOWEST, E.NJ8.DARK).hex(),
                y = (0, o.r)(i.A.colors.BACKGROUND_BRAND).hex(),
                g = (0, c.cb)(T, 0.5),
                m = (0, c.cb)(O, 0.5),
                N = I === C.MA.XBOX_GAME_PASS,
                S = (0, C.B9)(I);
            if (null == f) return null;
            let _ = S
                ? x.intl.formatToPlainString(x.t.l2UfLG, { bonusOrbMultiplier: f })
                : x.intl.formatToPlainString(x.t["G+mKoo"], { bonusOrbMultiplier: f });
            function Q() {
                null != f && ((0, d.gC)(f, I), e?.());
            }
            return N
                ? (0, s.jsx)(r.D, {
                      onClick: Q,
                      "aria-label": _,
                      children: (0, s.jsx)("div", {
                          className: A._,
                          style: { "--custom-pill-crepe-bg": y },
                          children: (0, s.jsx)(a.E, {
                              variant: "body-xs/semibold",
                              color: "text-overlay-light",
                              children: _,
                          }),
                      }),
                  })
                : (0, s.jsx)(r.D, {
                      onClick: Q,
                      "aria-label": _,
                      children: (0, s.jsxs)("div", {
                          className: A.I,
                          style: {
                              "--custom-pill-gradient-start": g,
                              "--custom-pill-gradient-end": m,
                              "--custom-pill-base-color": L,
                          },
                          children: [
                              (0, s.jsx)(l.NitroWheelIcon, { size: "xs", color: "white" }),
                              (0, s.jsx)(a.E, {
                                  variant: "body-xs/semibold",
                                  color: "text-overlay-light",
                                  children: _,
                              }),
                          ],
                      }),
                  });
        },
    },
);
