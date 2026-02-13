"use strict";
n.d(t, { A: () => T, L: () => I });
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
    h = n(128620),
    p = n(652215),
    g = n(49370),
    E = n(985018),
    A = n(609195);
let I = "orbs",
    T = (e) => {
        let { className: t, location: n } = e,
            { analyticsLocations: a } = (0, c.Ay)(n),
            T = i.useRef(null),
            y = i.useRef(!1),
            S = (0, o.bG)([d.A], () => d.A.getRewardForProgram(_.W.NITRO));
        return (0, o.bG)([d.A], () => d.A.passesGeneralUIInvariant(_.W.NITRO))
            ? (0, r.jsx)(c.f5, {
                  value: a,
                  children: (0, r.jsx)(l.L, {
                      innerRef: T,
                      onChange: (e) => {
                          e &&
                              !y.current &&
                              ((y.current = !0),
                              f.default.track(p.HAw.PREMIUM_TENURE_REWARDS_ORBS_SECTION_IMPRESSION, {
                                  program_state: S?.program_current_state,
                              }));
                      },
                      threshold: 0.5,
                      children: (0, r.jsxs)("div", {
                          ref: T,
                          id: I,
                          className: s()(A.uW, A.Uv, A.qr, t),
                          children: [
                              (0, r.jsx)(u.DZT, {
                                  variant: "heading-xxl/extrabold",
                                  className: A.R_,
                                  style: { textAlign: "start" },
                                  children: E.intl.string(g.default.EdGvBM),
                              }),
                              (0, r.jsx)(u.EYj, {
                                  variant: "text-lg/normal",
                                  className: s()(A.VA, A.dO),
                                  children: E.intl.string(g.default["2KoHRF"]),
                              }),
                              (0, r.jsx)(h.A, {}),
                          ],
                      }),
                  }),
              })
            : null;
    };
