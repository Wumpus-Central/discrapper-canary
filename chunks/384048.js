n.d(t, { default: () => M });
var r = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    i = n(158954),
    s = n(421380),
    u = n(397927),
    d = n(793574),
    c = n(688810),
    m = n(915089),
    o = n(976860),
    E = n(287809),
    _ = n(474090),
    p = n(396375),
    N = n(764231),
    x = n(112848),
    T = n(627380),
    g = n(149757),
    A = n(788868),
    h = n(652215),
    f = n(985018),
    b = n(830786);
let M = (e) => {
    let { transitionState: t, onClose: n, displayProfile: a } = e,
        { analyticsLocations: M } = (0, c.Ay)(d.A.TIERED_TENURE_BADGES_MODAL),
        R = (0, m.GV)(),
        j = Object.values(A.VD),
        v = (0, x.p3)(a?.userId),
        I = (0, x.$F)(),
        U = (0, T.t)(),
        P = E.default.getCurrentUser(),
        S = (0, x.rG)(a?.userId ?? P?.id) ?? new Date(),
        O = (0, _.CC)(P?.premiumType, A.PremiumTypes.TIER_2),
        D = j.map((e) => {
            let { id: t, nameUnformatted: n, tenureReqNumMonths: s } = e,
                u = f.intl.string(n),
                d = (0, g.I)(t).standard,
                c = (0, N.T)(t, s),
                m = null == a,
                o = m && I?.id === t,
                E = !m && v?.id === t,
                _ = o && I?.status === x.Wo.EARNED,
                p = o && I?.status === x.Wo.UPCOMING,
                T = E || _;
            return (0, r.jsxs)(
                "div",
                {
                    className: l()(b.qS, { [b.Ny]: T || p }),
                    children: [
                        (0, r.jsx)("img", { src: d, alt: u, className: b.pq }),
                        (0, r.jsxs)("div", {
                            className: b.Vv,
                            children: [
                                (0, r.jsx)(i.EYj, { variant: "text-md/semibold", className: b.Vd, children: u }),
                                (0, r.jsx)(i.EYj, { variant: "text-xs/normal", children: c }),
                                T &&
                                    (0, r.jsx)(i.EYj, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        className: b.h8,
                                        children: f.intl.formatToPlainString(f.t.Hu4jfi, { date: S }),
                                    }),
                                p &&
                                    null != U &&
                                    (0, r.jsx)(i.EYj, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        className: b.h8,
                                        children: f.intl.formatToPlainString(f.t.PPL1Il, { days: U.days }),
                                    }),
                            ],
                        }),
                    ],
                },
                t,
            );
        }),
        y = () => {
            (0, o.pX)(h.BVt.APPLICATION_STORE, { source: d.A.TIERED_TENURE_BADGES_MODAL, sourceLocationStack: M }),
                n?.();
        };
    return (0, r.jsxs)(u.EOs, {
        "data-migration-pending": !0,
        transitionState: t,
        "aria-labelledby": R,
        className: l()(b.kL, "theme-dark"),
        parentComponent: "EvolvingTenureBadgeModal",
        children: [
            (0, r.jsx)(u.s_y, { "data-migration-pending": !0, onClick: n, className: b.b }),
            (0, r.jsx)(u.$mQ, {
                "data-migration-pending": !0,
                className: b.Qs,
                children: O
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(i.EYj, {
                                  variant: "display-md",
                                  className: b.wx,
                                  children: f.intl.string(f.t.Og62j7),
                              }),
                              (0, r.jsx)(i.EYj, {
                                  variant: "text-md/medium",
                                  className: b.uI,
                                  children: f.intl.string(f.t.IdAP91),
                              }),
                              (0, r.jsx)("div", { className: b.C_, children: D }),
                              null != a &&
                                  a.userId !== P?.id &&
                                  (0, r.jsx)(u.wLn, {
                                      "data-migration-pending": !0,
                                      className: b.AJ,
                                      onClick: y,
                                      children: f.intl.string(f.t.hvVgAZ),
                                  }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(i.EYj, {
                                  variant: "display-md",
                                  className: b.wx,
                                  children: f.intl.string(f.t.RtGeFS),
                              }),
                              (0, r.jsx)(i.EYj, {
                                  variant: "text-md/medium",
                                  className: b.uI,
                                  children: f.intl.format(f.t.ffatnT, { onClick: y }),
                              }),
                              (0, r.jsx)("div", { className: b.C_, children: D }),
                              (0, r.jsx)(p.A, {
                                  className: b.xF,
                                  premiumModalAnalyticsLocation: { page: h.liQ.TIERED_TENURE_BADGES_MODAL },
                                  textOptions: { subscribeText: f.intl.string(f.t.JST6jl) },
                                  subscriptionTier: A.pe.TIER_2,
                                  showGradient: !0,
                                  color: s.XD.BRAND,
                              }),
                          ],
                      }),
            }),
        ],
    });
};
