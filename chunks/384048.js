n.d(t, { default: () => f });
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
    T = n(112848),
    g = n(149757),
    x = n(788868),
    A = n(652215),
    b = n(985018),
    h = n(830786);
let f = (e) => {
    let { transitionState: t, onClose: n, displayProfile: a } = e,
        { analyticsLocations: f } = (0, c.Ay)(d.A.TIERED_TENURE_BADGES_MODAL),
        j = (0, m.GV)(),
        R = Object.values(x.VD),
        M = (0, T.p3)(a?.userId),
        v = (0, T.$F)(),
        I = E.default.getCurrentUser(),
        U = (0, T.rG)(a?.userId ?? I?.id) ?? new Date(),
        S = (0, _.CC)(I?.premiumType, x.PremiumTypes.TIER_2),
        P = R.map((e) => {
            let { id: t, nameUnformatted: n, tenureReqNumMonths: s } = e,
                u = b.intl.string(n),
                d = (0, g.I)(t).standard,
                c = (0, N.T)(t, s),
                m = null == a,
                o = m && v?.id === t,
                E = !m && M?.id === t,
                _ = o && v?.status === T.Wo.EARNED,
                p = o && v?.status === T.Wo.UPCOMING,
                x = E || _;
            return (0, r.jsxs)(
                "div",
                {
                    className: l()(h.qS, { [h.Ny]: x || p }),
                    children: [
                        (0, r.jsx)("img", { src: d, alt: u, className: h.pq }),
                        (0, r.jsxs)("div", {
                            className: h.Vv,
                            children: [
                                (0, r.jsx)(i.EYj, { variant: "text-md/semibold", className: h.Vd, children: u }),
                                (0, r.jsx)(i.EYj, { variant: "text-xs/normal", children: c }),
                                x &&
                                    (0, r.jsx)(i.EYj, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        className: h.h8,
                                        children: b.intl.formatToPlainString(b.t.Hu4jfi, { date: U }),
                                    }),
                                p &&
                                    (0, r.jsx)(i.EYj, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        className: h.h8,
                                        children: b.intl.formatToPlainString(b.t.PPL1Il, { days: v?.daysLeft }),
                                    }),
                            ],
                        }),
                    ],
                },
                t,
            );
        }),
        O = () => {
            (0, o.pX)(A.BVt.APPLICATION_STORE, { source: d.A.TIERED_TENURE_BADGES_MODAL, sourceLocationStack: f }),
                n?.();
        };
    return (0, r.jsxs)(u.EOs, {
        "data-migration-pending": !0,
        transitionState: t,
        "aria-labelledby": j,
        className: l()(h.kL, "theme-dark"),
        parentComponent: "EvolvingTenureBadgeModal",
        children: [
            (0, r.jsx)(u.s_y, { "data-migration-pending": !0, onClick: n, className: h.b }),
            (0, r.jsx)(u.$mQ, {
                "data-migration-pending": !0,
                className: h.Qs,
                children: S
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(i.EYj, {
                                  variant: "display-md",
                                  className: h.wx,
                                  children: b.intl.string(b.t.Og62j7),
                              }),
                              (0, r.jsx)(i.EYj, {
                                  variant: "text-md/medium",
                                  className: h.uI,
                                  children: b.intl.string(b.t.IdAP91),
                              }),
                              (0, r.jsx)("div", { className: h.C_, children: P }),
                              null != a &&
                                  a.userId !== I?.id &&
                                  (0, r.jsx)(u.wLn, {
                                      "data-migration-pending": !0,
                                      className: h.AJ,
                                      onClick: O,
                                      children: b.intl.string(b.t.hvVgAZ),
                                  }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(i.EYj, {
                                  variant: "display-md",
                                  className: h.wx,
                                  children: b.intl.string(b.t.RtGeFS),
                              }),
                              (0, r.jsx)(i.EYj, {
                                  variant: "text-md/medium",
                                  className: h.uI,
                                  children: b.intl.format(b.t.ffatnT, { onClick: O }),
                              }),
                              (0, r.jsx)("div", { className: h.C_, children: P }),
                              (0, r.jsx)(p.A, {
                                  className: h.xF,
                                  premiumModalAnalyticsLocation: { page: A.liQ.TIERED_TENURE_BADGES_MODAL },
                                  textOptions: { subscribeText: b.intl.string(b.t.JST6jl) },
                                  subscriptionTier: x.pe.TIER_2,
                                  showGradient: !0,
                                  color: s.XD.BRAND,
                              }),
                          ],
                      }),
            }),
        ],
    });
};
