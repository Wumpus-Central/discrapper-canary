r.d(t, { A: () => x, L: () => E });
var n = r(627968),
    a = r(64700),
    l = r(503698),
    s = r.n(l),
    i = r(230109),
    d = r(732955),
    u = r(688810),
    o = r(320118),
    c = r(954571),
    m = r(570627),
    _ = r(128620),
    R = r(652215),
    p = r(49370),
    h = r(985018),
    A = r(609195);
let E = "orbs",
    x = (e) => {
        let { className: t, location: r } = e,
            l = m.m.useConfig({ location: "PremiumTenureRewardsOrbsSection" }).enabled,
            { analyticsLocations: x } = (0, u.Ay)(r),
            N = a.useRef(null),
            C = a.useRef(!1),
            { passesGeneralUIInvariant: f, programReward: g } = (0, o.F)({
                location: "PremiumTenureRewardsOrbsSection",
            });
        return f
            ? (0, n.jsx)(u.f5, {
                  value: x,
                  children: (0, n.jsx)(i.L, {
                      innerRef: N,
                      onChange: (e) => {
                          e &&
                              !C.current &&
                              ((C.current = !0),
                              c.default.track(R.HAw.PREMIUM_TENURE_REWARDS_ORBS_SECTION_IMPRESSION, {
                                  program_state: g?.program_current_state,
                              }));
                      },
                      threshold: 0.5,
                      children: (0, n.jsxs)("div", {
                          ref: N,
                          id: E,
                          className: s()(A.uW, A.Uv, A.qr, t, { [A.J4]: l }),
                          children: [
                              (0, n.jsx)(d.DZT, {
                                  variant: l ? "display-sm" : "heading-xxl/extrabold",
                                  className: A.R_,
                                  style: { textAlign: "start" },
                                  children: h.intl.string(p.default.EdGvBM),
                              }),
                              (0, n.jsx)(d.EYj, {
                                  variant: l ? "text-md/medium" : "text-lg/normal",
                                  className: s()(A.VA, A.dO),
                                  children: h.intl.string(p.default["2KoHRF"]),
                              }),
                              (0, n.jsx)(_.A, {}),
                          ],
                      }),
                  }),
              })
            : null;
    };
