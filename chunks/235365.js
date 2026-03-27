a.d(t, { A: () => h, L: () => g });
var r = a(627968),
    n = a(64700),
    i = a(503698),
    s = a.n(i),
    l = a(230109),
    d = a(732955),
    o = a(688810),
    c = a(320118),
    u = a(954571),
    _ = a(128620),
    m = a(652215),
    p = a(723468),
    b = a(985018),
    f = a(577057);
let g = "orbs",
    h = (e) => {
        let { className: t, location: a } = e,
            { analyticsLocations: i } = (0, o.Ay)(a),
            h = n.useRef(null),
            A = n.useRef(!1),
            { passesGeneralUIInvariant: x, programReward: R } = (0, c.F)({
                location: "PremiumTenureRewardsOrbsSection",
            });
        return x
            ? (0, r.jsx)(o.f5, {
                  value: i,
                  children: (0, r.jsx)(l.L, {
                      innerRef: h,
                      onChange: (e) => {
                          e &&
                              !A.current &&
                              ((A.current = !0),
                              u.default.track(m.HAw.PREMIUM_TENURE_REWARDS_ORBS_SECTION_IMPRESSION, {
                                  program_state: R?.program_current_state,
                              }));
                      },
                      threshold: 0.5,
                      children: (0, r.jsxs)("div", {
                          ref: h,
                          id: g,
                          className: s()(f.uW, f.Uv, f.qr, t),
                          children: [
                              (0, r.jsx)(d.DZT, {
                                  variant: "display-sm",
                                  className: f.R_,
                                  style: { textAlign: "start" },
                                  children: b.intl.string(p.default.EdGvBM),
                              }),
                              (0, r.jsx)(d.EYj, {
                                  variant: "text-md/medium",
                                  className: s()(f.VA, f.dO),
                                  children: b.intl.string(p.default["2KoHRF"]),
                              }),
                              (0, r.jsx)(_.A, {}),
                          ],
                      }),
                  }),
              })
            : null;
    };
