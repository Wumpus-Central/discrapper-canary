var t = i(477900);
i(582128);
var n = i(503698),
    e = i.n(n),
    r = i(935462),
    l = i(862482),
    d = i(834730),
    c = i(930861),
    m = i(793574),
    o = i(688810),
    u = i(915089),
    E = i(976860),
    x = i(287809),
    h = i(474090),
    p = i(396375),
    g = i(764231),
    N = i(105909),
    j = i(627380),
    T = i(208223),
    v = i(682901),
    A = i(652215),
    I = i(792996),
    _ = i(860688);
i.d(
    s,
    {},
    {
        default: function (a) {
            let { transitionState: s, onClose: i, displayProfile: n } = a,
                { analyticsLocations: b } = (0, o.Ay)(m.A.TIERED_TENURE_BADGES_MODAL),
                y = (0, u.GV)(),
                D = Object.values(v.VD),
                C = (0, N.p3)(n?.userId),
                R = (0, N.$F)(),
                S = (0, j.t)(),
                f = x.default.getCurrentUser(),
                k = (0, N.rG)(n?.userId ?? f?.id) ?? new Date(),
                L = (0, h.CC)(f?.premiumType, v.PremiumTypes.TIER_2),
                O = D.map((a) => {
                    let { id: s, nameUnformatted: i, tenureReqNumMonths: r } = a,
                        l = I.intl.string(i),
                        c = (0, T.I)(s).standard,
                        m = (0, g.T)(s, r),
                        o = null == n,
                        u = o && R?.id === s,
                        E = !o && C?.id === s,
                        x = u && (R?.status === N.Wo.EARNED || R?.status === N.Wo.WITHHELD),
                        h = u && R?.status === N.Wo.UPCOMING,
                        p = E || x;
                    return (0, t.jsxs)(
                        "div",
                        {
                            className: e()(_.qS, { [_.Ny]: p || h }),
                            children: [
                                (0, t.jsx)("img", { src: c, alt: l, className: _.pq }),
                                (0, t.jsxs)("div", {
                                    className: _.Vv,
                                    children: [
                                        (0, t.jsx)(d.E, { variant: "body-md/semibold", className: _.Vd, children: l }),
                                        (0, t.jsx)(d.E, { variant: "body-xs/normal", children: m }),
                                        p &&
                                            (0, t.jsx)(d.E, {
                                                variant: "body-xs/normal",
                                                color: "text-muted",
                                                className: _.h8,
                                                children: I.intl.formatToPlainString(I.t.Hu4jfi, { date: k }),
                                            }),
                                        h &&
                                            null != S &&
                                            (0, t.jsx)(d.E, {
                                                variant: "body-xs/normal",
                                                color: "text-muted",
                                                className: _.h8,
                                                children: I.intl.formatToPlainString(I.t.PPL1Il, { days: S.days }),
                                            }),
                                    ],
                                }),
                            ],
                        },
                        s,
                    );
                });
            function P() {
                ((0, E.pX)(A.BVt.APPLICATION_STORE, { source: m.A.TIERED_TENURE_BADGES_MODAL, sourceLocationStack: b }),
                    i?.());
            }
            return (0, t.jsxs)(r.EO, {
                "data-migration-pending": !0,
                transitionState: s,
                "aria-labelledby": y,
                className: e()(_.kL, "theme-dark"),
                parentComponent: "EvolvingTenureBadgeModal",
                children: [
                    (0, t.jsx)(r.s_, { "data-migration-pending": !0, onClick: i, className: _.b }),
                    (0, t.jsx)(r.$m, {
                        "data-migration-pending": !0,
                        className: _.Qs,
                        children: L
                            ? (0, t.jsxs)(t.Fragment, {
                                  children: [
                                      (0, t.jsx)(d.E, {
                                          variant: "display-md",
                                          className: _.wx,
                                          children: I.intl.string(I.t.Og62j7),
                                      }),
                                      (0, t.jsx)(d.E, {
                                          variant: "body-md/medium",
                                          className: _.uI,
                                          children: I.intl.string(I.t.IdAP91),
                                      }),
                                      (0, t.jsx)("div", { className: _.C_, children: O }),
                                      null != n &&
                                          n.userId !== f?.id &&
                                          (0, t.jsx)(c.wL, {
                                              "data-migration-pending": !0,
                                              className: _.AJ,
                                              onClick: P,
                                              children: I.intl.string(I.t.hvVgAZ),
                                          }),
                                  ],
                              })
                            : (0, t.jsxs)(t.Fragment, {
                                  children: [
                                      (0, t.jsx)(d.E, {
                                          variant: "display-md",
                                          className: _.wx,
                                          children: I.intl.string(I.t.RtGeFS),
                                      }),
                                      (0, t.jsx)(d.E, {
                                          variant: "body-md/medium",
                                          className: _.uI,
                                          children: I.intl.format(I.t.ffatnT, { onClick: P }),
                                      }),
                                      (0, t.jsx)("div", { className: _.C_, children: O }),
                                      (0, t.jsx)(p.A, {
                                          className: _.xF,
                                          premiumModalAnalyticsLocation: { page: A.liQ.TIERED_TENURE_BADGES_MODAL },
                                          textOptions: { subscribeText: I.intl.string(I.t.JST6jl) },
                                          subscriptionTier: v.pe.TIER_2,
                                          showGradient: !0,
                                          color: l.XD.BRAND,
                                      }),
                                  ],
                              }),
                    }),
                ],
            });
        },
    },
);
