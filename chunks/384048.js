t.d(s, { default: () => b });
var i = t(477900);
t(582128);
var e = t(503698),
    n = t.n(e),
    l = t(935462),
    r = t(862482),
    d = t(834730),
    c = t(930861),
    m = t(793574),
    o = t(688810),
    u = t(915089),
    E = t(976860),
    x = t(287809),
    h = t(474090),
    p = t(396375),
    g = t(764231),
    N = t(878784),
    j = t(627380),
    T = t(425713),
    v = t(202541),
    A = t(652215),
    I = t(105292),
    _ = t(860688);
let b = function (a) {
    let { transitionState: s, onClose: t, displayProfile: e } = a,
        { analyticsLocations: b } = (0, o.Ay)(m.A.TIERED_TENURE_BADGES_MODAL),
        y = (0, u.GV)(),
        D = Object.values(v.VD),
        C = (0, N.p3)(e?.userId),
        R = (0, N.$F)(),
        S = (0, j.t)(),
        f = x.default.getCurrentUser(),
        k = (0, N.rG)(e?.userId ?? f?.id) ?? new Date(),
        L = (0, h.CC)(f?.premiumType, v.PremiumTypes.TIER_2),
        O = D.map((a) => {
            let { id: s, nameUnformatted: t, tenureReqNumMonths: l } = a,
                r = I.intl.string(t),
                c = (0, T.I)(s).standard,
                m = (0, g.T)(s, l),
                o = null == e,
                u = o && R?.id === s,
                E = !o && C?.id === s,
                x = u && (R?.status === N.Wo.EARNED || R?.status === N.Wo.WITHHELD),
                h = u && R?.status === N.Wo.UPCOMING,
                p = E || x;
            return (0, i.jsxs)(
                "div",
                {
                    className: n()(_.qS, { [_.Ny]: p || h }),
                    children: [
                        (0, i.jsx)("img", { src: c, alt: r, className: _.pq }),
                        (0, i.jsxs)("div", {
                            className: _.Vv,
                            children: [
                                (0, i.jsx)(d.E, { variant: "body-md/semibold", className: _.Vd, children: r }),
                                (0, i.jsx)(d.E, { variant: "body-xs/normal", children: m }),
                                p &&
                                    (0, i.jsx)(d.E, {
                                        variant: "body-xs/normal",
                                        color: "text-muted",
                                        className: _.h8,
                                        children: I.intl.formatToPlainString(I.t.Hu4jfi, { date: k }),
                                    }),
                                h &&
                                    null != S &&
                                    (0, i.jsx)(d.E, {
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
        ((0, E.pX)(A.BVt.APPLICATION_STORE, { source: m.A.TIERED_TENURE_BADGES_MODAL, sourceLocationStack: b }), t?.());
    }
    return (0, i.jsxs)(l.EO, {
        "data-migration-pending": !0,
        transitionState: s,
        "aria-labelledby": y,
        className: n()(_.kL, "theme-dark"),
        parentComponent: "EvolvingTenureBadgeModal",
        children: [
            (0, i.jsx)(l.s_, { "data-migration-pending": !0, onClick: t, className: _.b }),
            (0, i.jsx)(l.$m, {
                "data-migration-pending": !0,
                className: _.Qs,
                children: L
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(d.E, {
                                  variant: "display-md",
                                  className: _.wx,
                                  children: I.intl.string(I.t.Og62j7),
                              }),
                              (0, i.jsx)(d.E, {
                                  variant: "body-md/medium",
                                  className: _.uI,
                                  children: I.intl.string(I.t.IdAP91),
                              }),
                              (0, i.jsx)("div", { className: _.C_, children: O }),
                              null != e &&
                                  e.userId !== f?.id &&
                                  (0, i.jsx)(c.wL, {
                                      "data-migration-pending": !0,
                                      className: _.AJ,
                                      onClick: P,
                                      children: I.intl.string(I.t.hvVgAZ),
                                  }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(d.E, {
                                  variant: "display-md",
                                  className: _.wx,
                                  children: I.intl.string(I.t.RtGeFS),
                              }),
                              (0, i.jsx)(d.E, {
                                  variant: "body-md/medium",
                                  className: _.uI,
                                  children: I.intl.format(I.t.ffatnT, { onClick: P }),
                              }),
                              (0, i.jsx)("div", { className: _.C_, children: O }),
                              (0, i.jsx)(p.A, {
                                  className: _.xF,
                                  premiumModalAnalyticsLocation: { page: A.liQ.TIERED_TENURE_BADGES_MODAL },
                                  textOptions: { subscribeText: I.intl.string(I.t.JST6jl) },
                                  subscriptionTier: v.pe.TIER_2,
                                  showGradient: !0,
                                  color: r.XD.BRAND,
                              }),
                          ],
                      }),
            }),
        ],
    });
};
