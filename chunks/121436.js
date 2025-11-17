t.d(a, { default: () => B });
var n = t(54381);
t(473749);
var d = t(120356),
    i = t.n(d),
    s = t(793030),
    l = t(755721),
    r = t(481060),
    c = t(100527),
    o = t(906732),
    u = t(313201),
    m = t(703656),
    g = t(594174),
    x = t(111361),
    b = t(784238),
    v = t(553896),
    T = t(848572),
    h = t(787528),
    _ = t(474936),
    N = t(981631),
    j = t(388032),
    p = t(397206);
let B = (e) => {
    var a, t;
    let { transitionState: d, onClose: B, displayProfile: E } = e,
        { analyticsLocations: S } = (0, o.ZP)(c.Z.TIERED_TENURE_BADGES_MODAL),
        I = (0, u.Dt)(),
        L = Object.values(_.vK),
        A = (0, T.SI)(null == E ? void 0 : E.userId),
        D = (0, T.Rw)(),
        R = g.default.getCurrentUser(),
        f =
            null != (t = (0, T.a1)(null != (a = null == E ? void 0 : E.userId) ? a : null == R ? void 0 : R.id))
                ? t
                : new Date(),
        k = (0, x.yd)(null == R ? void 0 : R.premiumType, _.PremiumTypes.TIER_2),
        P = L.map((e) => {
            let { id: a, nameUnformatted: t, tenureReqNumMonths: d } = e,
                l = j.intl.string(t),
                r = (0, h.J)(a),
                c = (0, v.q)(a, d),
                o = null == E,
                u = o && (null == D ? void 0 : D.id) === a,
                m = !o && (null == A ? void 0 : A.id) === a,
                g = u && (null == D ? void 0 : D.status) === T.Vq.EARNED,
                x = u && (null == D ? void 0 : D.status) === T.Vq.UPCOMING,
                b = m || g;
            return (0, n.jsxs)(
                "div",
                {
                    className: i()(p.badge, { [p.earnedBadge]: b || x }),
                    children: [
                        (0, n.jsx)("img", {
                            src: r,
                            alt: l,
                            className: p.badgeImage,
                        }),
                        (0, n.jsxs)("div", {
                            className: p.badgeText,
                            children: [
                                (0, n.jsx)(s.xvT, {
                                    variant: "text-md/semibold",
                                    className: p.badgeName,
                                    children: l,
                                }),
                                (0, n.jsx)(s.xvT, {
                                    variant: "text-xs/normal",
                                    children: c,
                                }),
                                b &&
                                    (0, n.jsx)(s.xvT, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        className: p.earnedBadgeSubSince,
                                        children: j.intl.formatToPlainString(j.t.Hu4jfi, { date: f }),
                                    }),
                                x &&
                                    (0, n.jsx)(s.xvT, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        className: p.earnedBadgeSubSince,
                                        children: j.intl.formatToPlainString(j.t.PPL1Il, {
                                            days: null == D ? void 0 : D.daysLeft,
                                        }),
                                    }),
                            ],
                        }),
                    ],
                },
                a,
            );
        }),
        y = () => {
            (0, m.uL)(N.Z5c.APPLICATION_STORE, {
                source: c.Z.TIERED_TENURE_BADGES_MODAL,
                sourceLocationStack: S,
            }),
                null == B || B();
        };
    return (0, n.jsxs)(r.Y0X, {
        "data-migration-pending": !0,
        transitionState: d,
        "aria-labelledby": I,
        className: i()(p.container, "theme-dark"),
        parentComponent: "EvolvingTenureBadgeModal",
        children: [
            (0, n.jsx)(r.olH, {
                "data-migration-pending": !0,
                onClick: B,
                className: p.closeButton,
            }),
            (0, n.jsx)(r.hzk, {
                "data-migration-pending": !0,
                className: p.content,
                children: k
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(s.xvT, {
                                  variant: "display-md",
                                  className: p.header,
                                  children: j.intl.string(j.t.Og62j7),
                              }),
                              (0, n.jsx)(s.xvT, {
                                  variant: "text-md/medium",
                                  className: p.subHeader,
                                  children: j.intl.string(j.t.IdAP91),
                              }),
                              (0, n.jsx)("div", {
                                  className: p.badgeList,
                                  children: P,
                              }),
                              null != E &&
                                  E.userId !== (null == R ? void 0 : R.id) &&
                                  (0, n.jsx)(r.gtL, {
                                      "data-migration-pending": !0,
                                      className: p.learnMoreButton,
                                      onClick: y,
                                      children: j.intl.string(j.t.hvVgAZ),
                                  }),
                          ],
                      })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(s.xvT, {
                                  variant: "display-md",
                                  className: p.header,
                                  children: j.intl.string(j.t.RtGeFS),
                              }),
                              (0, n.jsx)(s.xvT, {
                                  variant: "text-md/medium",
                                  className: p.subHeader,
                                  children: j.intl.format(j.t.ffatnT, { onClick: y }),
                              }),
                              (0, n.jsx)("div", {
                                  className: p.badgeList,
                                  children: P,
                              }),
                              (0, n.jsx)(b.Z, {
                                  className: p.subscribeButton,
                                  premiumModalAnalyticsLocation: { page: N.ZY5.TIERED_TENURE_BADGES_MODAL },
                                  textOptions: { subscribeText: j.intl.string(j.t.JST6jl) },
                                  subscriptionTier: _.Si.TIER_2,
                                  showGradient: !0,
                                  color: l.Tt.BRAND,
                              }),
                          ],
                      }),
            }),
        ],
    });
};
