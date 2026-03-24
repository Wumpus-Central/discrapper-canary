a.d(t, { A: () => _, L: () => h });
var n = a(627968),
    r = a(64700),
    s = a(503698),
    l = a.n(s),
    i = a(230109),
    d = a(732955),
    o = a(688810),
    c = a(320118),
    u = a(954571),
    m = a(128620),
    p = a(652215),
    f = a(49370),
    b = a(985018),
    A = a(609195);
let h = "orbs",
    _ = (e) => {
        let { className: t, location: a } = e,
            { analyticsLocations: s } = (0, o.Ay)(a),
            _ = r.useRef(null),
            g = r.useRef(!1),
            { passesGeneralUIInvariant: R, programReward: x } = (0, c.F)({
                location: "PremiumTenureRewardsOrbsSection",
            });
        return R
            ? (0, n.jsx)(o.f5, {
                  value: s,
                  children: (0, n.jsx)(i.L, {
                      innerRef: _,
                      onChange: (e) => {
                          e &&
                              !g.current &&
                              ((g.current = !0),
                              u.default.track(p.HAw.PREMIUM_TENURE_REWARDS_ORBS_SECTION_IMPRESSION, {
                                  program_state: x?.program_current_state,
                              }));
                      },
                      threshold: 0.5,
                      children: (0, n.jsxs)("div", {
                          ref: _,
                          id: h,
                          className: l()(A.uW, A.Uv, A.qr, t),
                          children: [
                              (0, n.jsx)(d.DZT, {
                                  variant: "display-sm",
                                  className: A.R_,
                                  style: { textAlign: "start" },
                                  children: b.intl.string(f.default.EdGvBM),
                              }),
                              (0, n.jsx)(d.EYj, {
                                  variant: "text-md/medium",
                                  className: l()(A.VA, A.dO),
                                  children: b.intl.string(f.default["2KoHRF"]),
                              }),
                              (0, n.jsx)(m.A, {}),
                          ],
                      }),
                  }),
              })
            : null;
    };
