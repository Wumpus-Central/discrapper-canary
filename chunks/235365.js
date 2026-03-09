n.d(t, { A: () => E, L: () => A });
var r = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    i = n(230109),
    d = n(732955),
    u = n(688810),
    o = n(320118),
    c = n(954571),
    m = n(570627),
    _ = n(128620),
    R = n(652215),
    h = n(49370),
    p = n(985018),
    x = n(609195);
let A = "orbs",
    E = (e) => {
        let { className: t, location: n } = e,
            s = m.m.useConfig({ location: "PremiumTenureRewardsOrbsSection" }).enabled,
            { analyticsLocations: E } = (0, u.Ay)(n),
            f = a.useRef(null),
            N = a.useRef(!1),
            { passesGeneralUIInvariant: C, programReward: g } = (0, o.F)({
                location: "PremiumTenureRewardsOrbsSection",
            });
        return C
            ? (0, r.jsx)(u.f5, {
                  value: E,
                  children: (0, r.jsx)(i.L, {
                      innerRef: f,
                      onChange: (e) => {
                          e &&
                              !N.current &&
                              ((N.current = !0),
                              c.default.track(R.HAw.PREMIUM_TENURE_REWARDS_ORBS_SECTION_IMPRESSION, {
                                  program_state: g?.program_current_state,
                              }));
                      },
                      threshold: 0.5,
                      children: (0, r.jsxs)("div", {
                          ref: f,
                          id: A,
                          className: l()(x.uW, x.Uv, x.qr, t, { [x.J4]: s }),
                          children: [
                              (0, r.jsx)(d.DZT, {
                                  variant: s ? "display-sm" : "heading-xxl/extrabold",
                                  className: x.R_,
                                  style: { textAlign: "start" },
                                  children: p.intl.string(h.default.EdGvBM),
                              }),
                              (0, r.jsx)(d.EYj, {
                                  variant: s ? "text-md/medium" : "text-lg/normal",
                                  className: l()(x.VA, x.dO),
                                  children: p.intl.string(h.default["2KoHRF"]),
                              }),
                              (0, r.jsx)(_.A, {}),
                          ],
                      }),
                  }),
              })
            : null;
    };
