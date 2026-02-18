r.d(t, { A: () => v, L: () => R });
var n = r(627968),
    a = r(64700),
    l = r(503698),
    s = r.n(l),
    i = r(311907),
    d = r(230109),
    u = r(732955),
    o = r(688810),
    c = r(895944),
    m = r(649032),
    p = r(954571),
    h = r(570627),
    g = r(128620),
    x = r(652215),
    b = r(49370),
    f = r(985018),
    _ = r(609195);
let R = "orbs",
    v = (e) => {
        let { className: t, location: r } = e,
            l = h.m.useConfig({ location: "PremiumTenureRewardsOrbsSection" }).enabled,
            { analyticsLocations: v } = (0, o.Ay)(r),
            N = a.useRef(null),
            A = a.useRef(!1),
            E = (0, i.bG)([c.A], () => c.A.getRewardForProgram(m.W.NITRO));
        return (0, i.bG)([c.A], () => c.A.passesGeneralUIInvariant(m.W.NITRO))
            ? (0, n.jsx)(o.f5, {
                  value: v,
                  children: (0, n.jsx)(d.L, {
                      innerRef: N,
                      onChange: (e) => {
                          e &&
                              !A.current &&
                              ((A.current = !0),
                              p.default.track(x.HAw.PREMIUM_TENURE_REWARDS_ORBS_SECTION_IMPRESSION, {
                                  program_state: E?.program_current_state,
                              }));
                      },
                      threshold: 0.5,
                      children: (0, n.jsxs)("div", {
                          ref: N,
                          id: R,
                          className: s()(_.uW, _.Uv, _.qr, t, { [_.J4]: l }),
                          children: [
                              (0, n.jsx)(u.DZT, {
                                  variant: l ? "display-sm" : "heading-xxl/extrabold",
                                  className: _.R_,
                                  style: { textAlign: "start" },
                                  children: f.intl.string(b.default.EdGvBM),
                              }),
                              (0, n.jsx)(u.EYj, {
                                  variant: "text-lg/normal",
                                  className: s()(_.VA, _.dO),
                                  children: f.intl.string(b.default["2KoHRF"]),
                              }),
                              (0, n.jsx)(g.A, {}),
                          ],
                      }),
                  }),
              })
            : null;
    };
