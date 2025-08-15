n.d(t, { default: () => O });
var r = n(951288);
n(647438);
var l = n(120356),
    a = n.n(l),
    i = n(793030),
    u = n(755721),
    d = n(481060),
    s = n(100527),
    c = n(906732),
    o = n(313201),
    m = n(703656),
    g = n(594174),
    b = n(111361),
    f = n(784238),
    p = n(553896),
    v = n(848572),
    _ = n(787528),
    E = n(474936),
    N = n(981631),
    x = n(388032),
    T = n(397206);
let O = (e) => {
    var t, n;
    let { transitionState: l, onClose: O, displayProfile: j } = e,
        { analyticsLocations: h } = (0, c.ZP)(s.Z.TIERED_TENURE_BADGES_MODAL),
        S = (0, o.Dt)(),
        M = Object.values(E.vK),
        P = (0, v.SI)(null == j ? void 0 : j.userId),
        U = (0, v.Rw)(),
        R = g.default.getCurrentUser(),
        y =
            null != (n = (0, v.a1)(null != (t = null == j ? void 0 : j.userId) ? t : null == R ? void 0 : R.id))
                ? n
                : new Date(),
        I = (0, b.yd)(null == R ? void 0 : R.premiumType, E.p9.TIER_2),
        B = M.map((e) => {
            let { id: t, nameUnformatted: n, tenureReqNumMonths: l } = e,
                u = x.intl.string(n),
                d = (0, _.J)(t),
                s = (0, p.q)(t, l),
                c = null == j,
                o = c && (null == U ? void 0 : U.id) === t,
                m = !c && (null == P ? void 0 : P.id) === t,
                g = o && (null == U ? void 0 : U.status) === v.Vq.EARNED,
                b = o && (null == U ? void 0 : U.status) === v.Vq.UPCOMING,
                f = m || g;
            return (0, r.jsxs)(
                "div",
                {
                    className: a()(T.badge, { [T.earnedBadge]: f || b }),
                    children: [
                        (0, r.jsx)("img", {
                            src: d,
                            alt: u,
                            className: T.badgeImage,
                        }),
                        (0, r.jsxs)("div", {
                            className: T.badgeText,
                            children: [
                                (0, r.jsx)(i.xv, {
                                    variant: "text-md/semibold",
                                    className: T.badgeName,
                                    children: u,
                                }),
                                (0, r.jsx)(i.xv, {
                                    variant: "text-xs/normal",
                                    children: s,
                                }),
                                f &&
                                    (0, r.jsx)(i.xv, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        className: T.earnedBadgeSubSince,
                                        children: x.intl.formatToPlainString(x.t.Hu4jfn, { date: y }),
                                    }),
                                b &&
                                    (0, r.jsx)(i.xv, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        className: T.earnedBadgeSubSince,
                                        children: x.intl.formatToPlainString(x.t.PPL1Ii, {
                                            days: null == U ? void 0 : U.daysLeft,
                                        }),
                                    }),
                            ],
                        }),
                    ],
                },
                t,
            );
        }),
        D = () => {
            (0, m.uL)(N.Z5c.APPLICATION_STORE, {
                source: s.Z.TIERED_TENURE_BADGES_MODAL,
                sourceLocationStack: h,
            }),
                null == O || O();
        };
    return (0, r.jsxs)(d.Y0X, {
        "data-migration-pending": !0,
        transitionState: l,
        "aria-labelledby": S,
        className: a()(T.container, "theme-dark"),
        parentComponent: "EvolvingTenureBadgeModal",
        children: [
            (0, r.jsx)(d.olH, {
                "data-migration-pending": !0,
                onClick: O,
                className: T.closeButton,
            }),
            (0, r.jsx)(d.hzk, {
                "data-migration-pending": !0,
                className: T.content,
                children: I
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(i.xv, {
                                  variant: "display-md",
                                  className: T.header,
                                  children: x.intl.string(x.t.Og62j4),
                              }),
                              (0, r.jsx)(i.xv, {
                                  variant: "text-md/medium",
                                  className: T.subHeader,
                                  children: x.intl.string(x.t["IdAP9/"]),
                              }),
                              (0, r.jsx)("div", {
                                  className: T.badgeList,
                                  children: B,
                              }),
                              null != j &&
                                  j.userId !== (null == R ? void 0 : R.id) &&
                                  (0, r.jsx)(d.gtL, {
                                      "data-migration-pending": !0,
                                      className: T.learnMoreButton,
                                      onClick: D,
                                      children: x.intl.string(x.t.hvVgAQ),
                                  }),
                          ],
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(i.xv, {
                                  variant: "display-md",
                                  className: T.header,
                                  children: x.intl.string(x.t.RtGeFR),
                              }),
                              (0, r.jsx)(i.xv, {
                                  variant: "text-md/medium",
                                  className: T.subHeader,
                                  children: x.intl.format(x.t.ffatnZ, { onClick: D }),
                              }),
                              (0, r.jsx)("div", {
                                  className: T.badgeList,
                                  children: B,
                              }),
                              (0, r.jsx)(f.Z, {
                                  className: T.subscribeButton,
                                  premiumModalAnalyticsLocation: { page: N.ZY5.TIERED_TENURE_BADGES_MODAL },
                                  textOptions: { subscribeText: x.intl.string(x.t.JST6jo) },
                                  subscriptionTier: E.Si.TIER_2,
                                  showGradient: !0,
                                  color: u.Tt.BRAND,
                              }),
                          ],
                      }),
            }),
        ],
    });
};
