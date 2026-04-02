r.d(t, { A: () => g, L: () => b });
var a = r(627968),
    n = r(64700),
    i = r(503698),
    s = r.n(i),
    l = r(230109),
    o = r(732955),
    d = r(688810),
    c = r(320118),
    u = r(954571),
    m = r(128620),
    _ = r(652215),
    p = r(49370),
    f = r(985018),
    h = r(18738);
let b = "orbs",
    g = (e) => {
        let { className: t, location: r } = e,
            { analyticsLocations: i } = (0, d.Ay)(r),
            g = n.useRef(null),
            x = n.useRef(!1),
            { passesGeneralUIInvariant: C, programReward: A } = (0, c.F)({
                location: "PremiumTenureRewardsOrbsSection",
            });
        return C
            ? (0, a.jsx)(d.f5, {
                  value: i,
                  children: (0, a.jsx)(l.L, {
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
                      children: (0, a.jsxs)("div", {
                          ref: g,
                          id: b,
                          className: s()(h.uW, h.Uv, h.qr, t),
                          children: [
                              (0, a.jsx)(o.DZT, {
                                  variant: "display-sm",
                                  className: h.R_,
                                  style: { textAlign: "start" },
                                  children: f.intl.string(p.default.EdGvBM),
                              }),
                              (0, a.jsx)(o.EYj, {
                                  variant: "text-md/medium",
                                  className: s()(h.VA, h.dO),
                                  children: f.intl.string(p.default["2KoHRF"]),
                              }),
                              (0, a.jsx)(m.A, {}),
                          ],
                      }),
                  }),
              })
            : null;
    };
