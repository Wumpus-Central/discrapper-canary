"use strict";
n.d(t, { $: () => $, D: () => K });
var i = n(627968),
    r = n(64700),
    s = n(989349),
    a = n.n(s),
    o = n(554146),
    l = n(503698),
    u = n.n(l),
    d = n(17928),
    c = n(192308),
    _ = n(417098),
    h = n(318254),
    f = n(661531),
    E = n(736653),
    p = n(573648),
    m = n(793574),
    g = n(688810),
    A = n(429913),
    I = n(826673),
    T = n(30370),
    S = n(772680),
    N = n(281020),
    C = n(206828),
    y = n(652215),
    v = n(49999),
    R = n(230451),
    O = n(375708),
    b = n(448759);
let L = function (e) {
    let { markAsDismissed: t, applicationName: s } = e,
        a = [y.fg2.LEAGUE_OF_LEGENDS, y.fg2.RIOT_GAMES],
        l = (0, d.bG)([T.A], () => T.A.getAccounts().find((e) => a.includes(e.type))?.type),
        L = (0, E.Ay)(),
        D = null != l ? p.A.get(l) : null,
        P = D?.replacedBy,
        w = (0, A.h)(P);
    s = s ?? w?.name;
    let { startAuthorization: M, canStartAuthorization: x, hasAlreadyLinked: U, fetched: k } = (0, C.RD)(w),
        { analyticsLocations: G } = (0, g.Ay)(m.A.NOTICE);
    if (
        (r.useEffect(() => {
            U &&
                k &&
                (null != P && (0, N.M8)(P), (0, I.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE), t(v.i.INDIRECT_ACTION));
        }, [U, k, t, P]),
        null == w || !x || !k || U)
    )
        return null;
    let V = () => {
            (0, S.RI)({
                applicationId: w.id,
                onSuccess: () => {
                    (0, c.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("50163"), n.e("89387")]).then(n.bind(n, 494886));
                        return (t) => (0, i.jsx)(e, { ...t });
                    });
                },
            });
        },
        F = p.A.get(y.fg2.RIOT_GAMES);
    return (0, i.jsxs)(_.$T, {
        color: _.Hv.WARNING,
        children: [
            (0, i.jsx)(_.PM, {
                noticeType: y.kqX.RIOT_MIGRATION,
                onClick: () => {
                    (0, I.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE), t(v.i.USER_DISMISS);
                },
            }),
            (0, i.jsx)("img", {
                src: "light" === L ? F?.icon.blackSVG : F?.icon.whiteSVG,
                alt: O.intl.string(R.default["1S6oAo"]),
                className: u()(b.tV, b._R),
            }),
            O.intl.format(R.default.DfSSdL, {
                connectionName: D?.name,
                applicationName: s,
                orbsIconHook: () =>
                    (0, i.jsx)(h.C, {
                        size: "xs",
                        style: { verticalAlign: "-0.22em" },
                        color: f.A.colors.NOTICE_TEXT_WARNING,
                    }),
                orbCount: 200,
            }),
            (0, i.jsx)(_.Z_, {
                onClick: () => {
                    M({ analyticsLocations: G, onSuccess: V });
                },
                className: b.HE,
                noticeType: y.kqX.RIOT_MIGRATION,
                children: O.intl.string(R.default.ZeOhh9),
            }),
            (0, i.jsx)(_.zr, {
                onClick: () => {
                    t(v.i.USER_DISMISS);
                },
                className: b.wX,
                children: O.intl.string(R.default["MVB/Ab"]),
            }),
        ],
    });
};
var D = n(380786),
    P = n(408346),
    w = n(496431),
    M = n(532794),
    x = n(174459),
    U = n(422936),
    k = n(410516),
    G = n(635995),
    V = n(99462),
    F = n(202541);
let B = function (e) {
    let { dismissCurrentNotice: t, subscriptionTier: n } = e,
        { analyticsLocations: r } = (0, g.Ay)(m.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE),
        s = (0, U.O)(),
        a = (0, w.A)(null != s && null != s.expiresAt ? s.expiresAt.getTime() : 0);
    return null == s ||
        s.discount?.planIds.some((e) => F.hd[e].skuId !== n) ||
        !s.hasAcknowledged() ||
        Object.values(a).every((e) => 0 === e)
        ? null
        : (0, i.jsxs)(G.T0, {
              onClick: () => {
                  t(), x.default.track(y.HAw.APP_NOTICE_CLOSED, { notice_type: y.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING });
              },
              children: [
                  (0, i.jsx)(G.In, { children: (0, V.rn)(a, Number(s.discount.amount), (0, k.hm)(s)) }),
                  (0, i.jsx)(G.fY, {
                      onClick: function () {
                          (0, M.A)({
                              subscriptionTier: n,
                              analyticsLocations: r,
                              analyticsObject: {
                                  page: y.liQ.IN_APP,
                                  section: y.JJy.NOTIFICATION_BAR,
                                  object: y.ZSU.BUTTON_CTA,
                              },
                          });
                      },
                      text: O.intl.string(O.t.zLXssK),
                  }),
              ],
          });
};
var j = n(745299),
    H = n(354670),
    W = n(428262),
    Y = n(595529);
function K(e) {
    switch (e) {
        case y.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
            let t = H.A.getAlmostExpiringTrialOffersForReminder([F.pe.TIER_2]);
            return { cooldownDurationMs: (0, W.e1)(t[0]) };
        case y.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let n = H.A.getAlmostExpiringDiscountOffersForReminder([F.pe.TIER_2]);
            return { cooldownDurationMs: (0, W.e1)(n[0]) };
        case y.kqX.RIOT_MIGRATION:
        case y.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return { cooldownDurationMs: 6048e5 };
        default:
            return { cooldownDurationMs: 1 / 0 };
    }
}
function $(e) {
    let { dismissibleContent: t, noticeType: n } = e,
        s = r.useMemo(() => K(n), [n]),
        l = a()().add(5, "days").toDate(),
        [u, d] = (0, Y.Bo)(t, s, v.m.NOTICE_BAR);
    if (null == u) return null;
    switch (u) {
        case o.M.NAGBAR_NOTICE_OFFER_EXPIRING:
            if (n === y.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
                return (0, i.jsx)(j.A, {
                    dismissCurrentNotice: () => {
                        d(v.i.USER_DISMISS), (0, P.w)(l);
                    },
                    subscriptionTier: F.pe.TIER_2,
                });
            if (n === y.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
                return (0, i.jsx)(B, {
                    dismissCurrentNotice: () => {
                        d(v.i.USER_DISMISS), (0, P.w)(l);
                    },
                    subscriptionTier: F.pe.TIER_2,
                });
            break;
        case o.M.RIOT_CONNECTION_DEPRECATION:
            return (0, i.jsx)(L, { markAsDismissed: d, applicationName: O.intl.string(R.default["1S6oAo"]) });
        case o.M.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return (0, i.jsx)(D.A, { markAsDismissed: () => d(v.i.USER_DISMISS) });
    }
}
