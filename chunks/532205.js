"use strict";
n.d(t, { $: () => z, D: () => $ });
var i = n(627968),
    r = n(64700),
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
    R = n(566707),
    O = n(375708),
    L = n(846775);
let D = function (e) {
    let {
            markAsDismissed: t,
            recurringDismiss: a,
            applicationName: s,
            platformTypes: l,
            platformIconOverride: d,
            noticeType: D,
        } = e,
        y = (0, u.bG)([m.A], () => m.A.getAccounts().find((e) => l.includes(e.type))?.type),
        v = (0, I.Ay)(),
        b = null != y ? o.A.get(y) : null,
        M = b?.migrationData?.replacedBy,
        P = (0, T.h)(M);
    s = s ?? P?.name;
    let { startAuthorization: U, canStartAuthorization: w, hasAlreadyLinked: G, fetched: x } = (0, N.RD)(P),
        { analyticsLocations: k } = (0, p.Ay)(f.A.NOTICE),
        F = null == d ? b : d;
    if (
        (r.useEffect(() => {
            G && x && (null != M && (0, S.M8)(M), t(C.i.INDIRECT_ACTION));
        }, [G, x, t, M]),
        null == P || !w || !x || G)
    )
        return null;
    let V = () => {
        (0, g.RI)({
            applicationId: P.id,
            onSuccess: () => {
                (0, _.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("428"), n.e("89387")]).then(n.bind(n, 494886));
                    return (t) => (0, i.jsx)(e, { ...t });
                });
            },
        });
    };
    return (0, i.jsxs)(E.$T, {
        color: E.Hv.WARNING,
        children: [
            (0, i.jsx)(E.PM, {
                noticeType: D,
                onClick: () => {
                    t(C.i.USER_DISMISS);
                },
            }),
            (0, i.jsx)("img", {
                src: "light" === v ? F?.icon.blackSVG : F?.icon.whiteSVG,
                alt: s,
                className: c()(L.tV, L._R),
            }),
            O.intl.format(R.default.DfSSdL, {
                connectionName: b?.name,
                applicationName: s,
                orbsIconHook: () =>
                    (0, i.jsx)(A.C, {
                        size: "xs",
                        style: { verticalAlign: "-0.22em" },
                        color: h.A.colors.NOTICE_TEXT_WARNING,
                    }),
                orbCount: 200,
            }),
            (0, i.jsx)(E.Z_, {
                onClick: () => {
                    U({ analyticsLocations: k, onSuccess: V });
                },
                className: L.HE,
                noticeType: D,
                children: O.intl.string(R.default.ZeOhh9),
            }),
            (0, i.jsx)(E.zr, {
                onClick: () => a(C.i.USER_DISMISS),
                className: L.wX,
                children: O.intl.string(R.default["MVB/Ab"]),
            }),
        ],
    });
};
var y = n(521790),
    v = n(408346),
    b = n(496431),
    M = n(532794),
    P = n(174459),
    U = n(422936),
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
                      text: O.intl.string(O.t.zLXssK),
                  }),
              ],
          });
};
var B = n(745299),
    H = n(354670),
    j = n(428262),
    W = n(826673),
    Y = n(595529),
    K = n(942370);
function $(e) {
    switch (e) {
        case F.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
            let t = H.A.getAlmostExpiringTrialOffersForReminder([k.pe.TIER_2]);
            return { cooldownDurationMs: (0, j.e1)(t[0]) };
        case F.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let n = H.A.getAlmostExpiringDiscountOffersForReminder([k.pe.TIER_2]);
            return { cooldownDurationMs: (0, j.e1)(n[0]) };
        case F.kqX.RIOT_MIGRATION:
        case F.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return { cooldownDurationMs: 6048e5 };
        default:
            return { cooldownDurationMs: 1 / 0 };
    }
}
function z(e) {
    let { dismissibleContent: t, noticeType: n } = e,
        a = r.useMemo(() => $(n), [n]),
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
                applicationName: O.intl.string(R.default["1S6oAo"]),
                platformTypes: [F.fg2.LEAGUE_OF_LEGENDS, F.fg2.RIOT_GAMES],
                platformIconOverride: o.A.get(F.fg2.RIOT_GAMES),
            });
        case l.M.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return (0, i.jsx)(y.A, {
                markAsDismissed: () => u(C.i.USER_DISMISS),
                deprecationDate: K.af,
                platformType: F.fg2.RIOT_GAMES,
            });
    }
}
