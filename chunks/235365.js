s.d(t, { A: () => f, L: () => g });
var n = s(627968),
    a = s(64700),
    r = s(503698),
    l = s.n(r),
    i = s(230109),
    d = s(534514),
    o = s(834730),
    c = s(688810),
    u = s(320118),
    h = s(954571),
    m = s(128620),
    x = s(652215),
    C = s(490285),
    _ = s(985018),
    p = s(102338);
let g = "orbs",
    f = (e) => {
        let { className: t, location: s } = e,
            { analyticsLocations: r } = (0, c.Ay)(s),
            f = a.useRef(null),
            R = a.useRef(!1),
            { passesGeneralUIInvariant: b, programReward: v } = (0, u.F)({
                location: "PremiumTenureRewardsOrbsSection",
            });
        return b
            ? (0, n.jsx)(c.f5, {
                  value: r,
                  children: (0, n.jsx)(i.L, {
                      innerRef: f,
                      onChange: (e) => {
                          e &&
                              !R.current &&
                              ((R.current = !0),
                              h.default.track(x.HAw.PREMIUM_TENURE_REWARDS_ORBS_SECTION_IMPRESSION, {
                                  program_state: v?.program_current_state,
                              }));
                      },
                      threshold: 0.5,
                      children: (0, n.jsxs)("div", {
                          ref: f,
                          id: g,
                          className: l()(p.uW, p.Uv, p.qr, t),
                          children: [
                              (0, n.jsx)(d.D, {
                                  variant: "display-sm",
                                  className: p.R_,
                                  style: { textAlign: "start" },
                                  children: _.intl.string(C.default.EdGvBM),
                              }),
                              (0, n.jsx)(o.E, {
                                  variant: "text-md/medium",
                                  className: l()(p.VA, p.dO),
                                  children: _.intl.string(C.default["2KoHRF"]),
                              }),
                              (0, n.jsx)(m.A, {}),
                          ],
                      }),
                  }),
              })
            : null;
    };
