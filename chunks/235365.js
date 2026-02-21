r.d(t, { A: () => N, L: () => v });
var n = r(627968),
    a = r(64700),
    s = r(503698),
    l = r.n(s),
    i = r(311907),
    d = r(230109),
    o = r(732955),
    u = r(688810),
    c = r(895944),
    m = r(649032),
    h = r(954571),
    p = r(570627),
    x = r(128620),
    g = r(652215),
    _ = r(49370),
    f = r(985018),
    b = r(609195);
let v = "orbs",
    N = (e) => {
        let { className: t, location: r } = e,
            s = p.m.useConfig({ location: "PremiumTenureRewardsOrbsSection" }).enabled,
            { analyticsLocations: N } = (0, u.Ay)(r),
            R = a.useRef(null),
            A = a.useRef(!1),
            E = (0, i.bG)([c.A], () => c.A.getRewardForProgram(m.W.NITRO));
        return (0, i.bG)([c.A], () => c.A.passesGeneralUIInvariant(m.W.NITRO))
            ? (0, n.jsx)(u.f5, {
                  value: N,
                  children: (0, n.jsx)(d.L, {
                      innerRef: R,
                      onChange: (e) => {
                          e &&
                              !A.current &&
                              ((A.current = !0),
                              h.default.track(g.HAw.PREMIUM_TENURE_REWARDS_ORBS_SECTION_IMPRESSION, {
                                  program_state: E?.program_current_state,
                              }));
                      },
                      threshold: 0.5,
                      children: (0, n.jsxs)("div", {
                          ref: R,
                          id: v,
                          className: l()(b.uW, b.Uv, b.qr, t, { [b.J4]: s }),
                          children: [
                              (0, n.jsx)(o.DZT, {
                                  variant: s ? "display-sm" : "heading-xxl/extrabold",
                                  className: b.R_,
                                  style: { textAlign: "start" },
                                  children: f.intl.string(_.default.EdGvBM),
                              }),
                              (0, n.jsx)(o.EYj, {
                                  variant: s ? "text-md/medium" : "text-lg/normal",
                                  className: l()(b.VA, b.dO),
                                  children: f.intl.string(_.default["2KoHRF"]),
                              }),
                              (0, n.jsx)(x.A, {}),
                          ],
                      }),
                  }),
              })
            : null;
    };
