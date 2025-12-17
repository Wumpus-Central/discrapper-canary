t.d(e, { default: () => E });
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
    b = t(594174),
    g = t(111361),
    x = t(784238),
    v = t(553896),
    T = t(848572),
    h = t(787528),
    N = t(474936),
    j = t(981631),
    p = t(388032),
    B = t(802557);
let E = (a) => {
    var e, t;
    let { transitionState: d, onClose: E, displayProfile: S } = a,
        { analyticsLocations: I } = (0, o.ZP)(c.Z.TIERED_TENURE_BADGES_MODAL),
        L = (0, u.Dt)(),
        _ = Object.values(N.vK),
        A = (0, T.SI)(null == S ? void 0 : S.userId),
        D = (0, T.Rw)(),
        R = b.default.getCurrentUser(),
        f =
            null != (t = (0, T.a1)(null != (e = null == S ? void 0 : S.userId) ? e : null == R ? void 0 : R.id))
                ? t
                : new Date(),
        k = (0, g.yd)(null == R ? void 0 : R.premiumType, N.PremiumTypes.TIER_2),
        P = _.map((a) => {
            let { id: e, nameUnformatted: t, tenureReqNumMonths: d } = a,
                l = p.intl.string(t),
                r = (0, h.J)(e),
                c = (0, v.q)(e, d),
                o = null == S,
                u = o && (null == D ? void 0 : D.id) === e,
                m = !o && (null == A ? void 0 : A.id) === e,
                b = u && (null == D ? void 0 : D.status) === T.Vq.EARNED,
                g = u && (null == D ? void 0 : D.status) === T.Vq.UPCOMING,
                x = m || b;
            return (0, n.jsxs)(
                "div",
                {
                    className: i()(B.badge, { [B.earnedBadge]: x || g }),
                    children: [
                        (0, n.jsx)("img", {
                            src: r,
                            alt: l,
                            className: B.badgeImage,
                        }),
                        (0, n.jsxs)("div", {
                            className: B.badgeText,
                            children: [
                                (0, n.jsx)(s.xvT, {
                                    variant: "text-md/semibold",
                                    className: B.badgeName,
                                    children: l,
                                }),
                                (0, n.jsx)(s.xvT, {
                                    variant: "text-xs/normal",
                                    children: c,
                                }),
                                x &&
                                    (0, n.jsx)(s.xvT, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        className: B.earnedBadgeSubSince,
                                        children: p.intl.formatToPlainString(p.t.Hu4jfi, { date: f }),
                                    }),
                                g &&
                                    (0, n.jsx)(s.xvT, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        className: B.earnedBadgeSubSince,
                                        children: p.intl.formatToPlainString(p.t.PPL1Il, {
                                            days: null == D ? void 0 : D.daysLeft,
                                        }),
                                    }),
                            ],
                        }),
                    ],
                },
                e,
            );
        }),
        y = () => {
            (0, m.uL)(j.Z5c.APPLICATION_STORE, {
                source: c.Z.TIERED_TENURE_BADGES_MODAL,
                sourceLocationStack: I,
            }),
                null == E || E();
        };
    return (0, n.jsxs)(r.Y0X, {
        "data-migration-pending": !0,
        transitionState: d,
        "aria-labelledby": L,
        className: i()(B.container, "theme-dark"),
        parentComponent: "EvolvingTenureBadgeModal",
        children: [
            (0, n.jsx)(r.olH, {
                "data-migration-pending": !0,
                onClick: E,
                className: B.closeButton,
            }),
            (0, n.jsx)(r.hzk, {
                "data-migration-pending": !0,
                className: B.content,
                children: k
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(s.xvT, {
                                  variant: "display-md",
                                  className: B.header,
                                  children: p.intl.string(p.t.Og62j7),
                              }),
                              (0, n.jsx)(s.xvT, {
                                  variant: "text-md/medium",
                                  className: B.subHeader,
                                  children: p.intl.string(p.t.IdAP91),
                              }),
                              (0, n.jsx)("div", {
                                  className: B.badgeList,
                                  children: P,
                              }),
                              null != S &&
                                  S.userId !== (null == R ? void 0 : R.id) &&
                                  (0, n.jsx)(r.gtL, {
                                      "data-migration-pending": !0,
                                      className: B.learnMoreButton,
                                      onClick: y,
                                      children: p.intl.string(p.t.hvVgAZ),
                                  }),
                          ],
                      })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(s.xvT, {
                                  variant: "display-md",
                                  className: B.header,
                                  children: p.intl.string(p.t.RtGeFS),
                              }),
                              (0, n.jsx)(s.xvT, {
                                  variant: "text-md/medium",
                                  className: B.subHeader,
                                  children: p.intl.format(p.t.ffatnT, { onClick: y }),
                              }),
                              (0, n.jsx)("div", {
                                  className: B.badgeList,
                                  children: P,
                              }),
                              (0, n.jsx)(x.Z, {
                                  className: B.subscribeButton,
                                  premiumModalAnalyticsLocation: { page: j.ZY5.TIERED_TENURE_BADGES_MODAL },
                                  textOptions: { subscribeText: p.intl.string(p.t.JST6jl) },
                                  subscriptionTier: N.Si.TIER_2,
                                  showGradient: !0,
                                  color: l.Tt.BRAND,
                              }),
                          ],
                      }),
            }),
        ],
    });
};
