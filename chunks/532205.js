"use strict";
n.d(t, { $: () => $, D: () => K });
var i = n(477900),
    r = n(582128),
    a = n(989349),
    s = n.n(a),
    l = n(554146),
    o = n(573648),
    d = n(503698),
    c = n.n(d),
    u = n(17928),
    _ = n(192308),
    E = n(417098),
    A = n(318254),
    h = n(661531),
    I = n(736653),
    f = n(793574),
    p = n(688810),
    T = n(429913),
    m = n(30370),
    g = n(772680),
    S = n(281020),
    N = n(206828),
    C = n(49999),
    O = n(230451),
    R = n(375708),
    L = n(789167);
let D = function (e) {
    let { markAsDismissed: t, recurringDismiss: a, platformTypes: s, platformIconOverride: l, noticeType: d } = e,
        D = (0, u.bG)([m.A], () => m.A.getAccounts().find((e) => s.includes(e.type))?.type),
        y = (0, I.Ay)(),
        v = null != D ? o.A.get(D) : null,
        b = v?.migrationData?.replacedBy,
        M = (0, T.h)(b),
        P = M?.name,
        { startAuthorization: U, canStartAuthorization: w, hasAlreadyLinked: G, fetched: x } = (0, N.RD)(M),
        { analyticsLocations: k } = (0, p.Ay)(f.A.NOTICE),
        F = null == l ? v : l;
    if (
        (r.useEffect(() => {
            G && x && (null != b && (0, S.M8)(b), t(C.i.INDIRECT_ACTION));
        }, [G, x, t, b]),
        null == M || !w || !x || G)
    )
        return null;
    function V() {
        null != M &&
            (0, g.RI)({
                applicationId: M.id,
                onSuccess: () => {
                    (0, _.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("50163"), n.e("89387")]).then(n.bind(n, 494886));
                        return (t) => (0, i.jsx)(e, { ...t });
                    });
                },
            });
    }
    return (0, i.jsxs)(E.$T, {
        color: E.Hv.WARNING,
        children: [
            (0, i.jsx)(E.PM, {
                noticeType: d,
                onClick: () => {
                    t(C.i.USER_DISMISS);
                },
            }),
            (0, i.jsx)("img", {
                src: "light" === y ? F?.icon.blackSVG : F?.icon.whiteSVG,
                alt: P,
                className: c()(L.tV, L.Y5),
            }),
            R.intl.format(O.default.qV9zT6, {
                connectionName: v?.name,
                orbsIconHook: () =>
                    (0, i.jsx)(A.C, {
                        size: "xs",
                        style: { verticalAlign: "-0.22em" },
                        color: h.A.colors.NOTICE_TEXT_WARNING,
                    }),
                orbCount: 200,
            }),
            (0, i.jsx)(E.Z_, {
                onClick: function () {
                    U({ analyticsLocations: k, onSuccess: V });
                },
                className: L.NS,
                noticeType: d,
                children: R.intl.string(O.default.ZeOhh9),
            }),
            (0, i.jsx)(E.zr, {
                onClick: () => a(C.i.USER_DISMISS),
                className: L.go,
                children: R.intl.string(O.default["8qJAeT"]),
            }),
        ],
    });
};
var y = n(521790),
    v = n(256106),
    b = n(496431),
    M = n(532794),
    P = n(174459),
    U = n(724651),
    w = n(410516),
    G = n(635995),
    x = n(99462),
    k = n(202541),
    F = n(652215);
let V = function (e) {
    let { dismissCurrentNotice: t, subscriptionTier: n } = e,
        { analyticsLocations: r } = (0, p.Ay)(f.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE),
        a = (0, U.O)(),
        s = (0, b.A)(null != a && null != a.expiresAt ? a.expiresAt.getTime() : 0);
    return null == a ||
        a.discount?.planIds.some((e) => k.hd[e].skuId !== n) ||
        !a.hasAcknowledged() ||
        Object.values(s).every((e) => 0 === e)
        ? null
        : (0, i.jsxs)(G.T0, {
              onClick: () => {
                  t(), P.default.track(F.HAw.APP_NOTICE_CLOSED, { notice_type: F.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING });
              },
              children: [
                  (0, i.jsx)(G.In, { children: (0, x.rn)(s, Number(a.discount.amount), (0, w.hm)(a)) }),
                  (0, i.jsx)(G.fY, {
                      onClick: function () {
                          (0, M.A)({
                              subscriptionTier: n,
                              analyticsLocations: r,
                              analyticsObject: {
                                  page: F.liQ.IN_APP,
                                  section: F.JJy.NOTIFICATION_BAR,
                                  object: F.ZSU.BUTTON_CTA,
                              },
                          });
                      },
                      text: R.intl.string(R.t.zLXssK),
                  }),
              ],
          });
};
var B = n(745299),
    H = n(354670),
    j = n(428262),
    W = n(826673),
    Y = n(595529);
function K(e) {
    switch (e) {
        case F.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
            let t = H.A.getAlmostExpiringTrialOffersForReminder([k.pe.TIER_2]);
            return { cooldownDurationMs: (0, j.e1)(t[0]) };
        case F.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let n = H.A.getAlmostExpiringDiscountOffersForReminder([k.pe.TIER_2]);
            return { cooldownDurationMs: (0, j.e1)(n[0]) };
        case F.kqX.RIOT_MIGRATION:
        case F.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN:
        case F.kqX.BATTLENET_MIGRATION:
        case F.kqX.BATTLENET_LINKED_ROLE_DEPRECATION:
            return { cooldownDurationMs: 6048e5 };
        default:
            return { cooldownDurationMs: 1 / 0 };
    }
}
function $(e) {
    let { dismissibleContent: t, noticeType: n } = e,
        a = r.useMemo(() => K(n), [n]),
        d = s()().add(5, "days").toDate(),
        [c, u] = (0, Y.Bo)(t, a, C.m.NOTICE_BAR);
    if (null == c) return null;
    switch (c) {
        case l.M.NAGBAR_NOTICE_OFFER_EXPIRING:
            if (n === F.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
                return (0, i.jsx)(B.A, {
                    dismissCurrentNotice: () => {
                        u(C.i.USER_DISMISS), (0, v.w)(d);
                    },
                    subscriptionTier: k.pe.TIER_2,
                });
            if (n === F.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
                return (0, i.jsx)(V, {
                    dismissCurrentNotice: () => {
                        u(C.i.USER_DISMISS), (0, v.w)(d);
                    },
                    subscriptionTier: k.pe.TIER_2,
                });
            break;
        case l.M.RIOT_CONNECTION_DEPRECATION:
            return (0, i.jsx)(D, {
                noticeType: F.kqX.RIOT_MIGRATION,
                markAsDismissed: (e) => {
                    (0, W.Dr)(l.M.RIOT_CONNECTION_DEPRECATION_DISABLE), u(e);
                },
                recurringDismiss: (e) => {
                    u(e);
                },
                platformTypes: [F.fg2.LEAGUE_OF_LEGENDS, F.fg2.RIOT_GAMES],
                platformIconOverride: o.A.get(F.fg2.RIOT_GAMES),
            });
        case l.M.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return (0, i.jsx)(y.Ay, {
                noticeType: F.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
                markAsDismissed: (e) => {
                    (0, W.Dr)(l.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE), u(e);
                },
                recurringDismiss: (e) => {
                    u(e);
                },
                platformType: F.fg2.RIOT_GAMES,
            });
        case l.M.BATTLENET_CONNECTION_DEPRECATION:
            return (0, i.jsx)(D, {
                noticeType: F.kqX.BATTLENET_MIGRATION,
                markAsDismissed: (e) => {
                    (0, W.Dr)(l.M.BATTLENET_CONNECTION_DEPRECATION_DISABLE), u(e);
                },
                recurringDismiss: (e) => {
                    u(e);
                },
                platformTypes: [F.fg2.BATTLENET],
                platformIconOverride: o.A.get(F.fg2.BATTLENET),
            });
        case l.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES:
            return (0, i.jsx)(y.Ay, {
                noticeType: F.kqX.BATTLENET_LINKED_ROLE_DEPRECATION,
                markAsDismissed: (e) => {
                    (0, W.Dr)(l.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES_DISABLE), u(e);
                },
                recurringDismiss: (e) => {
                    u(e);
                },
                platformType: F.fg2.BATTLENET,
            });
    }
}
