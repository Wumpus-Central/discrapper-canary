s.d(t, { default: () => D });
var e = s(627968);
s(64700);
var i = s(503698),
    n = s.n(i),
    l = s(834730),
    r = s(862482),
    d = s(935462),
    c = s(930861),
    m = s(793574),
    o = s(688810),
    x = s(915089),
    u = s(976860),
    E = s(287809),
    h = s(474090),
    p = s(396375),
    g = s(764231),
    N = s(878784),
    j = s(627380),
    T = s(425713),
    v = s(788868),
    A = s(652215),
    _ = s(375708),
    I = s(651535);
let D = function (a) {
    let { transitionState: t, onClose: s, displayProfile: i } = a,
        { analyticsLocations: D } = (0, o.Ay)(m.A.TIERED_TENURE_BADGES_MODAL),
        C = (0, x.GV)(),
        R = Object.values(v.VD),
        S = (0, N.p3)(i?.userId),
        b = (0, N.$F)(),
        f = (0, j.t)(),
        k = E.default.getCurrentUser(),
        y = (0, N.rG)(i?.userId ?? k?.id) ?? new Date(),
        O = (0, h.CC)(k?.premiumType, v.PremiumTypes.TIER_2),
        L = R.map((a) => {
            let { id: t, nameUnformatted: s, tenureReqNumMonths: r } = a,
                d = _.intl.string(s),
                c = (0, T.I)(t).standard,
                m = (0, g.T)(t, r),
                o = null == i,
                x = o && b?.id === t,
                u = !o && S?.id === t,
                E = x && b?.status === N.Wo.EARNED,
                h = x && b?.status === N.Wo.UPCOMING,
                p = u || E;
            return (0, e.jsxs)(
                "div",
                {
                    className: n()(I.qS, { [I.Ny]: p || h }),
                    children: [
                        (0, e.jsx)("img", { src: c, alt: d, className: I.pq }),
                        (0, e.jsxs)("div", {
                            className: I.Vv,
                            children: [
                                (0, e.jsx)(l.E, { variant: "text-md/semibold", className: I.Vd, children: d }),
                                (0, e.jsx)(l.E, { variant: "text-xs/normal", children: m }),
                                p &&
                                    (0, e.jsx)(l.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        className: I.h8,
                                        children: _.intl.formatToPlainString(_.t.Hu4jfi, { date: y }),
                                    }),
                                h &&
                                    null != f &&
                                    (0, e.jsx)(l.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        className: I.h8,
                                        children: _.intl.formatToPlainString(_.t.PPL1Il, { days: f.days }),
                                    }),
                            ],
                        }),
                    ],
                },
                t,
            );
        });
    function P() {
        (0, u.pX)(A.BVt.APPLICATION_STORE, { source: m.A.TIERED_TENURE_BADGES_MODAL, sourceLocationStack: D }), s?.();
    }
    return (0, e.jsxs)(d.EO, {
        "data-migration-pending": !0,
        transitionState: t,
        "aria-labelledby": C,
        className: n()(I.kL, "theme-dark"),
        parentComponent: "EvolvingTenureBadgeModal",
        children: [
            (0, e.jsx)(d.s_, { "data-migration-pending": !0, onClick: s, className: I.b }),
            (0, e.jsx)(d.$m, {
                "data-migration-pending": !0,
                className: I.Qs,
                children: O
                    ? (0, e.jsxs)(e.Fragment, {
                          children: [
                              (0, e.jsx)(l.E, {
                                  variant: "display-md",
                                  className: I.wx,
                                  children: _.intl.string(_.t.Og62j7),
                              }),
                              (0, e.jsx)(l.E, {
                                  variant: "text-md/medium",
                                  className: I.uI,
                                  children: _.intl.string(_.t.IdAP91),
                              }),
                              (0, e.jsx)("div", { className: I.C_, children: L }),
                              null != i &&
                                  i.userId !== k?.id &&
                                  (0, e.jsx)(c.wL, {
                                      "data-migration-pending": !0,
                                      className: I.AJ,
                                      onClick: P,
                                      children: _.intl.string(_.t.hvVgAZ),
                                  }),
                          ],
                      })
                    : (0, e.jsxs)(e.Fragment, {
                          children: [
                              (0, e.jsx)(l.E, {
                                  variant: "display-md",
                                  className: I.wx,
                                  children: _.intl.string(_.t.RtGeFS),
                              }),
                              (0, e.jsx)(l.E, {
                                  variant: "text-md/medium",
                                  className: I.uI,
                                  children: _.intl.format(_.t.ffatnT, { onClick: P }),
                              }),
                              (0, e.jsx)("div", { className: I.C_, children: L }),
                              (0, e.jsx)(p.A, {
                                  className: I.xF,
                                  premiumModalAnalyticsLocation: { page: A.liQ.TIERED_TENURE_BADGES_MODAL },
                                  textOptions: { subscribeText: _.intl.string(_.t.JST6jl) },
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
