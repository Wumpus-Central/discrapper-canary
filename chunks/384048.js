n.d(t, { default: () => v });
var r = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    i = n(834730),
    s = n(862482),
    u = n(935462),
    d = n(930861),
    c = n(793574),
    m = n(688810),
    o = n(915089),
    E = n(976860),
    _ = n(287809),
    p = n(474090),
    N = n(396375),
    T = n(764231),
    x = n(112848),
    g = n(627380),
    A = n(149757),
    h = n(788868),
    f = n(652215),
    b = n(985018),
    M = n(651535);
let v = (e) => {
    let { transitionState: t, onClose: n, displayProfile: a } = e,
        { analyticsLocations: v } = (0, m.Ay)(c.A.TIERED_TENURE_BADGES_MODAL),
        R = (0, o.GV)(),
        I = Object.values(h.VD),
        P = (0, x.p3)(a?.userId),
        U = (0, x.$F)(),
        S = (0, g.t)(),
        j = _.default.getCurrentUser(),
        O = (0, x.rG)(a?.userId ?? j?.id) ?? new Date(),
        D = (0, p.CC)(j?.premiumType, h.PremiumTypes.TIER_2),
        y = I.map((e) => {
            let { id: t, nameUnformatted: n, tenureReqNumMonths: s } = e,
                u = b.intl.string(n),
                d = (0, A.I)(t).standard,
                c = (0, T.T)(t, s),
                m = null == a,
                o = m && U?.id === t,
                E = !m && P?.id === t,
                _ = o && U?.status === x.Wo.EARNED,
                p = o && U?.status === x.Wo.UPCOMING,
                N = E || _;
            return (0, r.jsxs)(
                "div",
                {
                    className: l()(M.qS, { [M.Ny]: N || p }),
                    children: [
                        (0, r.jsx)("img", { src: d, alt: u, className: M.pq }),
                        (0, r.jsxs)("div", {
                            className: M.Vv,
                            children: [
                                (0, r.jsx)(i.E, { variant: "text-md/semibold", className: M.Vd, children: u }),
                                (0, r.jsx)(i.E, { variant: "text-xs/normal", children: c }),
                                N &&
                                    (0, r.jsx)(i.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        className: M.h8,
                                        children: b.intl.formatToPlainString(b.t.Hu4jfi, { date: O }),
                                    }),
                                p &&
                                    null != S &&
                                    (0, r.jsx)(i.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        className: M.h8,
                                        children: b.intl.formatToPlainString(b.t.PPL1Il, { days: S.days }),
                                    }),
                            ],
                        }),
                    ],
                },
                t,
            );
        }),
        C = () => {
            (0, E.pX)(f.BVt.APPLICATION_STORE, { source: c.A.TIERED_TENURE_BADGES_MODAL, sourceLocationStack: v }),
                n?.();
        };
    return (0, r.jsxs)(u.EO, {
        "data-migration-pending": !0,
        transitionState: t,
        "aria-labelledby": R,
        className: l()(M.kL, "theme-dark"),
        parentComponent: "EvolvingTenureBadgeModal",
        children: [
            (0, r.jsx)(u.s_, { "data-migration-pending": !0, onClick: n, className: M.b }),
            (0, r.jsx)(u.$m, {
                "data-migration-pending": !0,
                className: M.Qs,
                children: D
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(i.E, {
                                  variant: "display-md",
                                  className: M.wx,
                                  children: b.intl.string(b.t.Og62j7),
                              }),
                              (0, r.jsx)(i.E, {
                                  variant: "text-md/medium",
                                  className: M.uI,
                                  children: b.intl.string(b.t.IdAP91),
                              }),
                              (0, r.jsx)("div", { className: M.C_, children: y }),
                              null != a &&
                                  a.userId !== j?.id &&
                                  (0, r.jsx)(d.wL, {
                                      "data-migration-pending": !0,
                                      className: M.AJ,
                                      onClick: C,
                                      children: b.intl.string(b.t.hvVgAZ),
                                  }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(i.E, {
                                  variant: "display-md",
                                  className: M.wx,
                                  children: b.intl.string(b.t.RtGeFS),
                              }),
                              (0, r.jsx)(i.E, {
                                  variant: "text-md/medium",
                                  className: M.uI,
                                  children: b.intl.format(b.t.ffatnT, { onClick: C }),
                              }),
                              (0, r.jsx)("div", { className: M.C_, children: y }),
                              (0, r.jsx)(N.A, {
                                  className: M.xF,
                                  premiumModalAnalyticsLocation: { page: f.liQ.TIERED_TENURE_BADGES_MODAL },
                                  textOptions: { subscribeText: b.intl.string(b.t.JST6jl) },
                                  subscriptionTier: h.pe.TIER_2,
                                  showGradient: !0,
                                  color: s.XD.BRAND,
                              }),
                          ],
                      }),
            }),
        ],
    });
};
