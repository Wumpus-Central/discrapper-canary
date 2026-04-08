r.d(t, { A: () => g, L: () => h });
var n = r(627968),
    a = r(64700),
    i = r(503698),
    s = r.n(i),
    l = r(230109),
    d = r(732955),
    o = r(688810),
    c = r(320118),
    u = r(954571),
    m = r(128620),
    _ = r(652215),
    p = r(49370),
    f = r(985018),
    b = r(18738);
let h = "orbs",
    g = (e) => {
        let { className: t, location: r } = e,
            { analyticsLocations: i } = (0, o.Ay)(r),
            g = a.useRef(null),
            x = a.useRef(!1),
            { passesGeneralUIInvariant: C, programReward: A } = (0, c.F)({
                location: "PremiumTenureRewardsOrbsSection",
            });
        return C
            ? (0, n.jsx)(o.f5, {
                  value: i,
                  children: (0, n.jsx)(l.L, {
                      innerRef: g,
                      onChange: (e) => {
                          e &&
                              !x.current &&
                              ((x.current = !0),
                              u.default.track(_.HAw.PREMIUM_TENURE_REWARDS_ORBS_SECTION_IMPRESSION, {
                                  program_state: A?.program_current_state,
                              }));
                      },
                      threshold: 0.5,
                      children: (0, n.jsxs)("div", {
                          ref: g,
                          id: h,
                          className: s()(b.uW, b.Uv, b.qr, t),
                          children: [
                              (0, n.jsx)(d.DZT, {
                                  variant: "display-sm",
                                  className: b.R_,
                                  style: { textAlign: "start" },
                                  children: f.intl.string(p.default.EdGvBM),
                              }),
                              (0, n.jsx)(d.EYj, {
                                  variant: "text-md/medium",
                                  className: s()(b.VA, b.dO),
                                  children: f.intl.string(p.default["2KoHRF"]),
                              }),
                              (0, n.jsx)(m.A, {}),
                          ],
                      }),
                  }),
              })
            : null;
    };
