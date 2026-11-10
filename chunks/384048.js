var i = t(477900);
t(582128);
var n = t(503698),
    e = t.n(n),
    l = t(935462),
    r = t(862482),
    d = t(834730),
    c = t(930861),
    o = t(793574),
    m = t(688810),
    u = t(915089),
    x = t(976860),
    E = t(287809),
    h = t(396375),
    g = t(270060),
    N = t(764231),
    j = t(105909),
    p = t(627380),
    v = t(208223),
    A = t(682901),
    T = t(652215),
    b = t(792996),
    I = t(860688);
t.d(
    s,
    {},
    {
        default: function (a) {
            let { transitionState: s, onClose: t, displayProfile: n } = a,
                { analyticsLocations: _ } = (0, m.Ay)(o.A.TIERED_TENURE_BADGES_MODAL),
                D = (0, u.GV)(),
                y = Object.values(A.VD),
                C = (0, j.p3)(n?.userId),
                R = (0, j.$F)(),
                S = (0, p.t)(),
                f = E.default.getCurrentUser(),
                k = (0, j.rG)(n?.userId ?? f?.id) ?? new Date(),
                L = (0, g.h)(),
                O = y.map((a) => {
                    let { id: s, nameUnformatted: t, tenureReqNumMonths: l } = a,
                        r = b.intl.string(t),
                        c = (0, v.I)(s).standard,
                        o = (0, N.T)(s, l),
                        m = null == n,
                        u = m && R?.id === s,
                        x = !m && C?.id === s,
                        E = u && (R?.status === j.Wo.EARNED || R?.status === j.Wo.WITHHELD),
                        h = u && R?.status === j.Wo.UPCOMING,
                        g = x || E;
                    return (0, i.jsxs)(
                        "div",
                        {
                            className: e()(I.qS, { [I.Ny]: g || h }),
                            children: [
                                (0, i.jsx)("img", { src: c, alt: r, className: I.pq }),
                                (0, i.jsxs)("div", {
                                    className: I.Vv,
                                    children: [
                                        (0, i.jsx)(d.E, { variant: "body-md/semibold", className: I.Vd, children: r }),
                                        (0, i.jsx)(d.E, { variant: "body-xs/normal", children: o }),
                                        g &&
                                            (0, i.jsx)(d.E, {
                                                variant: "body-xs/normal",
                                                color: "text-muted",
                                                className: I.h8,
                                                children: b.intl.formatToPlainString(b.t.Hu4jfi, { date: k }),
                                            }),
                                        h &&
                                            null != S &&
                                            (0, i.jsx)(d.E, {
                                                variant: "body-xs/normal",
                                                color: "text-muted",
                                                className: I.h8,
                                                children: b.intl.formatToPlainString(b.t.PPL1Il, { days: S.days }),
                                            }),
                                    ],
                                }),
                            ],
                        },
                        s,
                    );
                });
            function G() {
                ((0, x.pX)(T.BVt.APPLICATION_STORE, { source: o.A.TIERED_TENURE_BADGES_MODAL, sourceLocationStack: _ }),
                    t?.());
            }
            return (0, i.jsxs)(l.EO, {
                "data-migration-pending": !0,
                transitionState: s,
                "aria-labelledby": D,
                className: e()(I.kL, "theme-dark"),
                parentComponent: "EvolvingTenureBadgeModal",
                children: [
                    (0, i.jsx)(l.s_, { "data-migration-pending": !0, onClick: t, className: I.b }),
                    (0, i.jsx)(l.$m, {
                        "data-migration-pending": !0,
                        className: I.Qs,
                        children: L
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(d.E, {
                                          variant: "display-md",
                                          className: I.wx,
                                          children: b.intl.string(b.t.Og62j7),
                                      }),
                                      (0, i.jsx)(d.E, {
                                          variant: "body-md/medium",
                                          className: I.uI,
                                          children: b.intl.string(b.t.IdAP91),
                                      }),
                                      (0, i.jsx)("div", { className: I.C_, children: O }),
                                      null != n &&
                                          n.userId !== f?.id &&
                                          (0, i.jsx)(c.wL, {
                                              "data-migration-pending": !0,
                                              className: I.AJ,
                                              onClick: G,
                                              children: b.intl.string(b.t.hvVgAZ),
                                          }),
                                  ],
                              })
                            : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(d.E, {
                                          variant: "display-md",
                                          className: I.wx,
                                          children: b.intl.string(b.t.RtGeFS),
                                      }),
                                      (0, i.jsx)(d.E, {
                                          variant: "body-md/medium",
                                          className: I.uI,
                                          children: b.intl.format(b.t.ffatnT, { onClick: G }),
                                      }),
                                      (0, i.jsx)("div", { className: I.C_, children: O }),
                                      (0, i.jsx)(h.A, {
                                          className: I.xF,
                                          premiumModalAnalyticsLocation: { page: T.liQ.TIERED_TENURE_BADGES_MODAL },
                                          textOptions: { subscribeText: b.intl.string(b.t.JST6jl) },
                                          subscriptionTier: A.pe.TIER_2,
                                          showGradient: !0,
                                          color: r.XD.BRAND,
                                      }),
                                  ],
                              }),
                    }),
                ],
            });
        },
    },
);
