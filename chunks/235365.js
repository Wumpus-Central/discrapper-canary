n.d(t, { A: () => g, L: () => _ });
var r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    i = n(230109),
    d = n(732955),
    o = n(688810),
    c = n(320118),
    u = n(954571),
    m = n(128620),
    h = n(652215),
    x = n(188875),
    C = n(985018),
    p = n(18738);
let _ = "orbs",
    g = (e) => {
        let { className: t, location: n } = e,
            { analyticsLocations: s } = (0, o.Ay)(n),
            g = l.useRef(null),
            f = l.useRef(!1),
            { passesGeneralUIInvariant: b, programReward: R } = (0, c.F)({
                location: "PremiumTenureRewardsOrbsSection",
            });
        return b
            ? (0, r.jsx)(o.f5, {
                  value: s,
                  children: (0, r.jsx)(i.L, {
                      innerRef: g,
                      onChange: (e) => {
                          e &&
                              !f.current &&
                              ((f.current = !0),
                              u.default.track(h.HAw.PREMIUM_TENURE_REWARDS_ORBS_SECTION_IMPRESSION, {
                                  program_state: R?.program_current_state,
                              }));
                      },
                      threshold: 0.5,
                      children: (0, r.jsxs)("div", {
                          ref: g,
                          id: _,
                          className: a()(p.uW, p.Uv, p.qr, t),
                          children: [
                              (0, r.jsx)(d.DZT, {
                                  variant: "display-sm",
                                  className: p.R_,
                                  style: { textAlign: "start" },
                                  children: C.intl.string(x.default.EdGvBM),
                              }),
                              (0, r.jsx)(d.EYj, {
                                  variant: "text-md/medium",
                                  className: a()(p.VA, p.dO),
                                  children: C.intl.string(x.default["2KoHRF"]),
                              }),
                              (0, r.jsx)(m.A, {}),
                          ],
                      }),
                  }),
              })
            : null;
    };
