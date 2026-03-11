a.d(t, { A: () => g, L: () => h });
var n = a(627968),
    r = a(64700),
    s = a(503698),
    l = a.n(s),
    i = a(230109),
    d = a(732955),
    o = a(688810),
    c = a(320118),
    u = a(954571),
    m = a(570627),
    p = a(128620),
    f = a(652215),
    b = a(723468),
    A = a(985018),
    _ = a(204593);
let h = "orbs",
    g = (e) => {
        let { className: t, location: a } = e,
            s = m.m.useConfig({ location: "PremiumTenureRewardsOrbsSection" }).enabled,
            { analyticsLocations: g } = (0, o.Ay)(a),
            R = r.useRef(null),
            x = r.useRef(!1),
            { passesGeneralUIInvariant: E, programReward: C } = (0, c.F)({
                location: "PremiumTenureRewardsOrbsSection",
            });
        return E
            ? (0, n.jsx)(o.f5, {
                  value: g,
                  children: (0, n.jsx)(i.L, {
                      innerRef: R,
                      onChange: (e) => {
                          e &&
                              !x.current &&
                              ((x.current = !0),
                              u.default.track(f.HAw.PREMIUM_TENURE_REWARDS_ORBS_SECTION_IMPRESSION, {
                                  program_state: C?.program_current_state,
                              }));
                      },
                      threshold: 0.5,
                      children: (0, n.jsxs)("div", {
                          ref: R,
                          id: h,
                          className: l()(_.uW, _.Uv, _.qr, t, { [_.J4]: s }),
                          children: [
                              (0, n.jsx)(d.DZT, {
                                  variant: s ? "display-sm" : "heading-xxl/extrabold",
                                  className: _.R_,
                                  style: { textAlign: "start" },
                                  children: A.intl.string(b.default.EdGvBM),
                              }),
                              (0, n.jsx)(d.EYj, {
                                  variant: s ? "text-md/medium" : "text-lg/normal",
                                  className: l()(_.VA, _.dO),
                                  children: A.intl.string(b.default["2KoHRF"]),
                              }),
                              (0, n.jsx)(p.A, {}),
                          ],
                      }),
                  }),
              })
            : null;
    };
