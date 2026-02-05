t.d(e, { default: () => M });
var s = t(627968);
t(64700);
var i = t(503698),
    n = t.n(i),
    r = t(158954),
    d = t(421380),
    l = t(397927),
    c = t(793574),
    o = t(688810),
    _ = t(915089),
    m = t(976860),
    E = t(287809),
    u = t(474090),
    N = t(396375),
    x = t(764231),
    T = t(112848),
    g = t(149757),
    A = t(788868),
    h = t(652215),
    j = t(985018),
    p = t(830786);
let M = (a) => {
    let { transitionState: e, onClose: t, displayProfile: i } = a,
        { analyticsLocations: M } = (0, o.Ay)(c.A.TIERED_TENURE_BADGES_MODAL),
        R = (0, _.GV)(),
        I = Object.values(A.VD),
        v = (0, T.p3)(i?.userId),
        b = (0, T.$F)(),
        O = E.default.getCurrentUser(),
        U = (0, T.rG)(i?.userId ?? O?.id) ?? new Date(),
        D = (0, u.CC)(O?.premiumType, A.PremiumTypes.TIER_2),
        P = I.map((a) => {
            let { id: e, nameUnformatted: t, tenureReqNumMonths: d } = a,
                l = j.intl.string(t),
                c = (0, g.I)(e),
                o = (0, x.T)(e, d),
                _ = null == i,
                m = _ && b?.id === e,
                E = !_ && v?.id === e,
                u = m && b?.status === T.Wo.EARNED,
                N = m && b?.status === T.Wo.UPCOMING,
                A = E || u;
            return (0, s.jsxs)(
                "div",
                {
                    className: n()(p.qS, { [p.Ny]: A || N }),
                    children: [
                        (0, s.jsx)("img", { src: c, alt: l, className: p.pq }),
                        (0, s.jsxs)("div", {
                            className: p.Vv,
                            children: [
                                (0, s.jsx)(r.EYj, { variant: "text-md/semibold", className: p.Vd, children: l }),
                                (0, s.jsx)(r.EYj, { variant: "text-xs/normal", children: o }),
                                A &&
                                    (0, s.jsx)(r.EYj, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        className: p.h8,
                                        children: j.intl.formatToPlainString(j.t.Hu4jfi, { date: U }),
                                    }),
                                N &&
                                    (0, s.jsx)(r.EYj, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        className: p.h8,
                                        children: j.intl.formatToPlainString(j.t.PPL1Il, { days: b?.daysLeft }),
                                    }),
                            ],
                        }),
                    ],
                },
                e,
            );
        }),
        S = () => {
            (0, m.pX)(h.BVt.APPLICATION_STORE, { source: c.A.TIERED_TENURE_BADGES_MODAL, sourceLocationStack: M }),
                t?.();
        };
    return (0, s.jsxs)(l.EOs, {
        "data-migration-pending": !0,
        transitionState: e,
        "aria-labelledby": R,
        className: n()(p.kL, "theme-dark"),
        parentComponent: "EvolvingTenureBadgeModal",
        children: [
            (0, s.jsx)(l.s_y, { "data-migration-pending": !0, onClick: t, className: p.b }),
            (0, s.jsx)(l.$mQ, {
                "data-migration-pending": !0,
                className: p.Qs,
                children: D
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(r.EYj, {
                                  variant: "display-md",
                                  className: p.wx,
                                  children: j.intl.string(j.t.Og62j7),
                              }),
                              (0, s.jsx)(r.EYj, {
                                  variant: "text-md/medium",
                                  className: p.uI,
                                  children: j.intl.string(j.t.IdAP91),
                              }),
                              (0, s.jsx)("div", { className: p.C_, children: P }),
                              null != i &&
                                  i.userId !== O?.id &&
                                  (0, s.jsx)(l.wLn, {
                                      "data-migration-pending": !0,
                                      className: p.AJ,
                                      onClick: S,
                                      children: j.intl.string(j.t.hvVgAZ),
                                  }),
                          ],
                      })
                    : (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(r.EYj, {
                                  variant: "display-md",
                                  className: p.wx,
                                  children: j.intl.string(j.t.RtGeFS),
                              }),
                              (0, s.jsx)(r.EYj, {
                                  variant: "text-md/medium",
                                  className: p.uI,
                                  children: j.intl.format(j.t.ffatnT, { onClick: S }),
                              }),
                              (0, s.jsx)("div", { className: p.C_, children: P }),
                              (0, s.jsx)(N.A, {
                                  className: p.xF,
                                  premiumModalAnalyticsLocation: { page: h.liQ.TIERED_TENURE_BADGES_MODAL },
                                  textOptions: { subscribeText: j.intl.string(j.t.JST6jl) },
                                  subscriptionTier: A.pe.TIER_2,
                                  showGradient: !0,
                                  color: d.XD.BRAND,
                              }),
                          ],
                      }),
            }),
        ],
    });
};
