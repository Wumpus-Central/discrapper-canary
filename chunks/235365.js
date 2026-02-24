r.d(t, { A: () => N, L: () => _ });
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
    h = r(128620),
    p = r(652215),
    x = r(723468),
    f = r(985018),
    g = r(204593);
let _ = "orbs",
    N = (e) => {
        let { className: t, location: r } = e,
            l = m.m.useConfig({ location: "PremiumTenureRewardsOrbsSection" }).enabled,
            { analyticsLocations: N } = (0, u.Ay)(r),
            b = a.useRef(null),
            v = a.useRef(!1),
            { passesGeneralUIInvariant: R, programReward: E } = (0, o.F)({
                location: "PremiumTenureRewardsOrbsSection",
            });
        return R
            ? (0, n.jsx)(u.f5, {
                  value: N,
                  children: (0, n.jsx)(i.L, {
                      innerRef: b,
                      onChange: (e) => {
                          e &&
                              !v.current &&
                              ((v.current = !0),
                              c.default.track(p.HAw.PREMIUM_TENURE_REWARDS_ORBS_SECTION_IMPRESSION, {
                                  program_state: E?.program_current_state,
                              }));
                      },
                      threshold: 0.5,
                      children: (0, n.jsxs)("div", {
                          ref: b,
                          id: _,
                          className: s()(g.uW, g.Uv, g.qr, t, { [g.J4]: l }),
                          children: [
                              (0, n.jsx)(d.DZT, {
                                  variant: l ? "display-sm" : "heading-xxl/extrabold",
                                  className: g.R_,
                                  style: { textAlign: "start" },
                                  children: f.intl.string(x.default.EdGvBM),
                              }),
                              (0, n.jsx)(d.EYj, {
                                  variant: l ? "text-md/medium" : "text-lg/normal",
                                  className: s()(g.VA, g.dO),
                                  children: f.intl.string(x.default["2KoHRF"]),
                              }),
                              (0, n.jsx)(h.A, {}),
                          ],
                      }),
                  }),
              })
            : null;
    };
