t.d(e, { default: () => b });
var i = t(627968);
t(64700);
var s = t(503698),
    l = t.n(s),
    n = t(158954),
    d = t(421380),
    r = t(397927),
    c = t(793574),
    m = t(688810),
    o = t(915089),
    u = t(976860),
    x = t(287809),
    j = t(474090),
    v = t(396375),
    E = t(764231),
    p = t(112848),
    h = t(149757),
    _ = t(788868),
    N = t(652215),
    f = t(985018),
    g = t(830786);
let b = (a) => {
    var e, t;
    let { transitionState: s, onClose: b, displayProfile: T } = a,
        { analyticsLocations: A } = (0, m.Ay)(c.A.TIERED_TENURE_BADGES_MODAL),
        I = (0, o.GV)(),
        C = Object.values(_.VD),
        D = (0, p.p3)(null == T ? void 0 : T.userId),
        y = (0, p.$F)(),
        R = x.default.getCurrentUser(),
        S =
            null != (e = (0, p.rG)(null != (t = null == T ? void 0 : T.userId) ? t : null == R ? void 0 : R.id))
                ? e
                : new Date(),
        k = (0, j.CC)(null == R ? void 0 : R.premiumType, _.PremiumTypes.TIER_2),
        L = C.map((a) => {
            let { id: e, nameUnformatted: t, tenureReqNumMonths: s } = a,
                d = f.intl.string(t),
                r = (0, h.I)(e),
                c = (0, E.T)(e, s),
                m = null == T,
                o = m && (null == y ? void 0 : y.id) === e,
                u = !m && (null == D ? void 0 : D.id) === e,
                x = o && (null == y ? void 0 : y.status) === p.Wo.EARNED,
                j = o && (null == y ? void 0 : y.status) === p.Wo.UPCOMING,
                v = u || x;
            return (0, i.jsxs)(
                "div",
                {
                    className: l()(g.qS, { [g.Ny]: v || j }),
                    children: [
                        (0, i.jsx)("img", {
                            src: r,
                            alt: d,
                            className: g.pq,
                        }),
                        (0, i.jsxs)("div", {
                            className: g.Vv,
                            children: [
                                (0, i.jsx)(n.EYj, {
                                    variant: "text-md/semibold",
                                    className: g.Vd,
                                    children: d,
                                }),
                                (0, i.jsx)(n.EYj, {
                                    variant: "text-xs/normal",
                                    children: c,
                                }),
                                v &&
                                    (0, i.jsx)(n.EYj, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        className: g.h8,
                                        children: f.intl.formatToPlainString(f.t.Hu4jfi, { date: S }),
                                    }),
                                j &&
                                    (0, i.jsx)(n.EYj, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        className: g.h8,
                                        children: f.intl.formatToPlainString(f.t.PPL1Il, {
                                            days: null == y ? void 0 : y.daysLeft,
                                        }),
                                    }),
                            ],
                        }),
                    ],
                },
                e,
            );
        }),
        O = () => {
            (0, u.pX)(N.BVt.APPLICATION_STORE, {
                source: c.A.TIERED_TENURE_BADGES_MODAL,
                sourceLocationStack: A,
            }),
                null == b || b();
        };
    return (0, i.jsxs)(r.EOs, {
        "data-migration-pending": !0,
        transitionState: s,
        "aria-labelledby": I,
        className: l()(g.kL, "theme-dark"),
        parentComponent: "EvolvingTenureBadgeModal",
        children: [
            (0, i.jsx)(r.s_y, {
                "data-migration-pending": !0,
                onClick: b,
                className: g.b,
            }),
            (0, i.jsx)(r.$mQ, {
                "data-migration-pending": !0,
                className: g.Qs,
                children: k
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(n.EYj, {
                                  variant: "display-md",
                                  className: g.wx,
                                  children: f.intl.string(f.t.Og62j7),
                              }),
                              (0, i.jsx)(n.EYj, {
                                  variant: "text-md/medium",
                                  className: g.uI,
                                  children: f.intl.string(f.t.IdAP91),
                              }),
                              (0, i.jsx)("div", {
                                  className: g.C_,
                                  children: L,
                              }),
                              null != T &&
                                  T.userId !== (null == R ? void 0 : R.id) &&
                                  (0, i.jsx)(r.wLn, {
                                      "data-migration-pending": !0,
                                      className: g.AJ,
                                      onClick: O,
                                      children: f.intl.string(f.t.hvVgAZ),
                                  }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(n.EYj, {
                                  variant: "display-md",
                                  className: g.wx,
                                  children: f.intl.string(f.t.RtGeFS),
                              }),
                              (0, i.jsx)(n.EYj, {
                                  variant: "text-md/medium",
                                  className: g.uI,
                                  children: f.intl.format(f.t.ffatnT, { onClick: O }),
                              }),
                              (0, i.jsx)("div", {
                                  className: g.C_,
                                  children: L,
                              }),
                              (0, i.jsx)(v.A, {
                                  className: g.xF,
                                  premiumModalAnalyticsLocation: { page: N.liQ.TIERED_TENURE_BADGES_MODAL },
                                  textOptions: { subscribeText: f.intl.string(f.t.JST6jl) },
                                  subscriptionTier: _.pe.TIER_2,
                                  showGradient: !0,
                                  color: d.XD.BRAND,
                              }),
                          ],
                      }),
            }),
        ],
    });
};
