"use strict";
n.d(t, { A: () => y, L: () => T });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(230109),
    u = n(732955),
    c = n(688810),
    d = n(895944),
    _ = n(649032),
    f = n(954571),
    h = n(570627),
    p = n(128620),
    g = n(652215),
    E = n(49370),
    A = n(985018),
    I = n(609195);
let T = "orbs",
    y = (e) => {
        let { className: t, location: n } = e,
            a = h.m.useConfig({ location: "PremiumTenureRewardsOrbsSection" }).enabled,
            { analyticsLocations: y } = (0, c.Ay)(n),
            S = i.useRef(null),
            v = i.useRef(!1),
            C = (0, o.bG)([d.A], () => d.A.getRewardForProgram(_.W.NITRO));
        return (0, o.bG)([d.A], () => d.A.passesGeneralUIInvariant(_.W.NITRO))
            ? (0, r.jsx)(c.f5, {
                  value: y,
                  children: (0, r.jsx)(l.L, {
                      innerRef: S,
                      onChange: (e) => {
                          e &&
                              !v.current &&
                              ((v.current = !0),
                              f.default.track(g.HAw.PREMIUM_TENURE_REWARDS_ORBS_SECTION_IMPRESSION, {
                                  program_state: C?.program_current_state,
                              }));
                      },
                      threshold: 0.5,
                      children: (0, r.jsxs)("div", {
                          ref: S,
                          id: T,
                          className: s()(I.uW, I.Uv, I.qr, t, { [I.J4]: a }),
                          children: [
                              (0, r.jsx)(u.DZT, {
                                  variant: a ? "display-sm" : "heading-xxl/extrabold",
                                  className: I.R_,
                                  style: { textAlign: "start" },
                                  children: A.intl.string(E.default.EdGvBM),
                              }),
                              (0, r.jsx)(u.EYj, {
                                  variant: "text-lg/normal",
                                  className: s()(I.VA, I.dO),
                                  children: A.intl.string(E.default["2KoHRF"]),
                              }),
                              (0, r.jsx)(p.A, {}),
                          ],
                      }),
                  }),
              })
            : null;
    };
