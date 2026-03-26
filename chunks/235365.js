a.d(t, { A: () => A, L: () => g });
var n = a(627968),
    r = a(64700),
    s = a(503698),
    i = a.n(s),
    d = a(230109),
    l = a(732955),
    o = a(688810),
    c = a(320118),
    u = a(954571),
    _ = a(128620),
    m = a(652215),
    p = a(49370),
    b = a(985018),
    f = a(18738);
let g = "orbs",
    A = (e) => {
        let { className: t, location: a } = e,
            { analyticsLocations: s } = (0, o.Ay)(a),
            A = r.useRef(null),
            h = r.useRef(!1),
            { passesGeneralUIInvariant: x, programReward: R } = (0, c.F)({
                location: "PremiumTenureRewardsOrbsSection",
            });
        return x
            ? (0, n.jsx)(o.f5, {
                  value: s,
                  children: (0, n.jsx)(d.L, {
                      innerRef: A,
                      onChange: (e) => {
                          e &&
                              !h.current &&
                              ((h.current = !0),
                              u.default.track(m.HAw.PREMIUM_TENURE_REWARDS_ORBS_SECTION_IMPRESSION, {
                                  program_state: R?.program_current_state,
                              }));
                      },
                      threshold: 0.5,
                      children: (0, n.jsxs)("div", {
                          ref: A,
                          id: g,
                          className: i()(f.uW, f.Uv, f.qr, t),
                          children: [
                              (0, n.jsx)(l.DZT, {
                                  variant: "display-sm",
                                  className: f.R_,
                                  style: { textAlign: "start" },
                                  children: b.intl.string(p.default.EdGvBM),
                              }),
                              (0, n.jsx)(l.EYj, {
                                  variant: "text-md/medium",
                                  className: i()(f.VA, f.dO),
                                  children: b.intl.string(p.default["2KoHRF"]),
                              }),
                              (0, n.jsx)(_.A, {}),
                          ],
                      }),
                  }),
              })
            : null;
    };
