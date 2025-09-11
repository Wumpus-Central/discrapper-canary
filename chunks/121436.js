t.d(a, { default: () => B });
var n = t(951288);
t(647438);
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
    h = t(848572),
    T = t(787528),
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
        R = (0, h.SI)(null == E ? void 0 : E.userId),
        A = (0, h.Rw)(),
        D = g.default.getCurrentUser(),
        f =
            null != (t = (0, h.a1)(null != (a = null == E ? void 0 : E.userId) ? a : null == D ? void 0 : D.id))
                ? t
                : new Date(),
        k = (0, x.yd)(null == D ? void 0 : D.premiumType, _.p9.TIER_2),
        C = L.map((e) => {
            let { id: a, nameUnformatted: t, tenureReqNumMonths: d } = e,
                l = j.intl.string(t),
                r = (0, T.J)(a),
                c = (0, v.q)(a, d),
                o = null == E,
                u = o && (null == A ? void 0 : A.id) === a,
                m = !o && (null == R ? void 0 : R.id) === a,
                g = u && (null == A ? void 0 : A.status) === h.Vq.EARNED,
                x = u && (null == A ? void 0 : A.status) === h.Vq.UPCOMING,
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
                                        children: j.intl.formatToPlainString(j.t.Hu4jfn, { date: f }),
                                    }),
                                x &&
                                    (0, n.jsx)(s.xvT, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        className: p.earnedBadgeSubSince,
                                        children: j.intl.formatToPlainString(j.t.PPL1Ii, {
                                            days: null == A ? void 0 : A.daysLeft,
                                        }),
                                    }),
                            ],
                        }),
                    ],
                },
                a,
            );
        }),
        M = () => {
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
                                  children: j.intl.string(j.t.Og62j4),
                              }),
                              (0, n.jsx)(s.xvT, {
                                  variant: "text-md/medium",
                                  className: p.subHeader,
                                  children: j.intl.string(j.t["IdAP9/"]),
                              }),
                              (0, n.jsx)("div", {
                                  className: p.badgeList,
                                  children: C,
                              }),
                              null != E &&
                                  E.userId !== (null == D ? void 0 : D.id) &&
                                  (0, n.jsx)(r.gtL, {
                                      "data-migration-pending": !0,
                                      className: p.learnMoreButton,
                                      onClick: M,
                                      children: j.intl.string(j.t.hvVgAQ),
                                  }),
                          ],
                      })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(s.xvT, {
                                  variant: "display-md",
                                  className: p.header,
                                  children: j.intl.string(j.t.RtGeFR),
                              }),
                              (0, n.jsx)(s.xvT, {
                                  variant: "text-md/medium",
                                  className: p.subHeader,
                                  children: j.intl.format(j.t.ffatnZ, { onClick: M }),
                              }),
                              (0, n.jsx)("div", {
                                  className: p.badgeList,
                                  children: C,
                              }),
                              (0, n.jsx)(b.Z, {
                                  className: p.subscribeButton,
                                  premiumModalAnalyticsLocation: { page: N.ZY5.TIERED_TENURE_BADGES_MODAL },
                                  textOptions: { subscribeText: j.intl.string(j.t.JST6jo) },
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
