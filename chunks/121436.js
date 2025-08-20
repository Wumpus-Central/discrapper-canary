t.d(a, { default: () => E });
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
    _ = t(787528),
    N = t(474936),
    j = t(981631),
    p = t(388032),
    B = t(397206);
let E = (e) => {
    var a, t;
    let { transitionState: d, onClose: E, displayProfile: T } = e,
        { analyticsLocations: S } = (0, o.ZP)(c.Z.TIERED_TENURE_BADGES_MODAL),
        I = (0, u.Dt)(),
        L = Object.values(N.vK),
        R = (0, h.SI)(null == T ? void 0 : T.userId),
        A = (0, h.Rw)(),
        D = g.default.getCurrentUser(),
        f =
            null != (t = (0, h.a1)(null != (a = null == T ? void 0 : T.userId) ? a : null == D ? void 0 : D.id))
                ? t
                : new Date(),
        k = (0, x.yd)(null == D ? void 0 : D.premiumType, N.p9.TIER_2),
        C = L.map((e) => {
            let { id: a, nameUnformatted: t, tenureReqNumMonths: d } = e,
                l = p.intl.string(t),
                r = (0, _.J)(a),
                c = (0, v.q)(a, d),
                o = null == T,
                u = o && (null == A ? void 0 : A.id) === a,
                m = !o && (null == R ? void 0 : R.id) === a,
                g = u && (null == A ? void 0 : A.status) === h.Vq.EARNED,
                x = u && (null == A ? void 0 : A.status) === h.Vq.UPCOMING,
                b = m || g;
            return (0, n.jsxs)(
                "div",
                {
                    className: i()(B.badge, { [B.earnedBadge]: b || x }),
                    children: [
                        (0, n.jsx)("img", {
                            src: r,
                            alt: l,
                            className: B.badgeImage,
                        }),
                        (0, n.jsxs)("div", {
                            className: B.badgeText,
                            children: [
                                (0, n.jsx)(s.xv, {
                                    variant: "text-md/semibold",
                                    className: B.badgeName,
                                    children: l,
                                }),
                                (0, n.jsx)(s.xv, {
                                    variant: "text-xs/normal",
                                    children: c,
                                }),
                                b &&
                                    (0, n.jsx)(s.xv, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        className: B.earnedBadgeSubSince,
                                        children: p.intl.formatToPlainString(p.t.Hu4jfn, { date: f }),
                                    }),
                                x &&
                                    (0, n.jsx)(s.xv, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        className: B.earnedBadgeSubSince,
                                        children: p.intl.formatToPlainString(p.t.PPL1Ii, {
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
            (0, m.uL)(j.Z5c.APPLICATION_STORE, {
                source: c.Z.TIERED_TENURE_BADGES_MODAL,
                sourceLocationStack: S,
            }),
                null == E || E();
        };
    return (0, n.jsxs)(r.Y0X, {
        "data-migration-pending": !0,
        transitionState: d,
        "aria-labelledby": I,
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
                              (0, n.jsx)(s.xv, {
                                  variant: "display-md",
                                  className: B.header,
                                  children: p.intl.string(p.t.Og62j4),
                              }),
                              (0, n.jsx)(s.xv, {
                                  variant: "text-md/medium",
                                  className: B.subHeader,
                                  children: p.intl.string(p.t["IdAP9/"]),
                              }),
                              (0, n.jsx)("div", {
                                  className: B.badgeList,
                                  children: C,
                              }),
                              null != T &&
                                  T.userId !== (null == D ? void 0 : D.id) &&
                                  (0, n.jsx)(r.gtL, {
                                      "data-migration-pending": !0,
                                      className: B.learnMoreButton,
                                      onClick: M,
                                      children: p.intl.string(p.t.hvVgAQ),
                                  }),
                          ],
                      })
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(s.xv, {
                                  variant: "display-md",
                                  className: B.header,
                                  children: p.intl.string(p.t.RtGeFR),
                              }),
                              (0, n.jsx)(s.xv, {
                                  variant: "text-md/medium",
                                  className: B.subHeader,
                                  children: p.intl.format(p.t.ffatnZ, { onClick: M }),
                              }),
                              (0, n.jsx)("div", {
                                  className: B.badgeList,
                                  children: C,
                              }),
                              (0, n.jsx)(b.Z, {
                                  className: B.subscribeButton,
                                  premiumModalAnalyticsLocation: { page: j.ZY5.TIERED_TENURE_BADGES_MODAL },
                                  textOptions: { subscribeText: p.intl.string(p.t.JST6jo) },
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
