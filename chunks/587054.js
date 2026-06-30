"use strict";
n.d(t, { $: () => $, D: () => K });
var i = n(627968),
    r = n(64700),
    s = n(989349),
    a = n.n(s),
    o = n(554146),
    l = n(503698),
    u = n.n(l),
    c = n(17928),
    d = n(192308),
    _ = n(417098),
    h = n(318254),
    f = n(661531),
    p = n(736653),
    E = n(573648),
    m = n(793574),
    g = n(688810),
    A = n(429913),
    I = n(826673),
    T = n(30370),
    S = n(151073),
    y = n(281020),
    C = n(206828),
    N = n(652215),
    v = n(49999),
    R = n(230451),
    O = n(375708),
    b = n(448759);
let D = function (e) {
    let { markAsDismissed: t, applicationName: s } = e,
        a = [N.fg2.LEAGUE_OF_LEGENDS, N.fg2.RIOT_GAMES],
        l = (0, c.bG)([T.A], () => T.A.getAccounts().find((e) => a.includes(e.type))?.type),
        D = (0, p.Ay)(),
        L = null != l ? E.A.get(l) : null,
        w = L?.replacedBy,
        M = (0, A.h)(w);
    s = s ?? M?.name;
    let { startAuthorization: P, canStartAuthorization: x, hasAlreadyLinked: k, fetched: U } = (0, C.RD)(M),
        { analyticsLocations: G } = (0, g.Ay)(m.A.NOTICE);
    if (
        (r.useEffect(() => {
            k &&
                U &&
                (null != w && (0, y.M)(w), (0, I.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE), t(v.i.INDIRECT_ACTION));
        }, [k, U, t, w]),
        null == M || !x || !U || k)
    )
        return null;
    let F = () => {
            (0, S.RI)({
                applicationId: M.id,
                onSuccess: () => {
                    (0, d.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("50163"), n.e("89387")]).then(n.bind(n, 494886));
                        return (t) => (0, i.jsx)(e, { ...t });
                    });
                },
            });
        },
        V = E.A.get(N.fg2.RIOT_GAMES);
    return (0, i.jsxs)(_.$T, {
        color: _.Hv.WARNING,
        children: [
            (0, i.jsx)(_.PM, {
                noticeType: N.kqX.RIOT_MIGRATION,
                onClick: () => {
                    (0, I.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE), t(v.i.USER_DISMISS);
                },
            }),
            (0, i.jsx)("img", {
                src: "light" === D ? V?.icon.blackSVG : V?.icon.whiteSVG,
                alt: O.intl.string(R.default["1S6oAo"]),
                className: u()(b.tV, b._R),
            }),
            O.intl.format(R.default.DfSSdL, {
                connectionName: L?.name,
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
                    P({ analyticsLocations: G, onSuccess: F });
                },
                className: b.HE,
                noticeType: N.kqX.RIOT_MIGRATION,
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
var L = n(380786),
    w = n(408346),
    M = n(496431),
    P = n(532794),
    x = n(174459),
    k = n(422936),
    U = n(410516),
    G = n(635995),
    F = n(99462),
    V = n(788868);
let B = function (e) {
    let { dismissCurrentNotice: t, subscriptionTier: n } = e,
        { analyticsLocations: r } = (0, g.Ay)(m.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE),
        s = (0, k.O)(),
        a = (0, M.A)(null != s && null != s.expiresAt ? s.expiresAt.getTime() : 0);
    return null == s ||
        s.discount?.planIds.some((e) => V.hd[e].skuId !== n) ||
        !s.hasAcknowledged() ||
        Object.values(a).every((e) => 0 === e)
        ? null
        : (0, i.jsxs)(G.T0, {
              onClick: () => {
                  t(), x.default.track(N.HAw.APP_NOTICE_CLOSED, { notice_type: N.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING });
              },
              children: [
                  (0, i.jsx)(G.In, { children: (0, F.rn)(a, Number(s.discount.amount), (0, U.hm)(s)) }),
                  (0, i.jsx)(G.fY, {
                      onClick: function () {
                          (0, P.A)({
                              subscriptionTier: n,
                              analyticsLocations: r,
                              analyticsObject: {
                                  page: N.liQ.IN_APP,
                                  section: N.JJy.NOTIFICATION_BAR,
                                  object: N.ZSU.BUTTON_CTA,
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
    Y = n(428262),
    W = n(595529);
function K(e) {
    switch (e) {
        case N.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
            let t = H.A.getAlmostExpiringTrialOffersForReminder([V.pe.TIER_2]);
            return { cooldownDurationMs: (0, Y.e1)(t[0]) };
        case N.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let n = H.A.getAlmostExpiringDiscountOffersForReminder([V.pe.TIER_2]);
            return { cooldownDurationMs: (0, Y.e1)(n[0]) };
        case N.kqX.RIOT_MIGRATION:
        case N.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return { cooldownDurationMs: 6048e5 };
        default:
            return { cooldownDurationMs: 1 / 0 };
    }
}
function $(e) {
    let { dismissibleContent: t, noticeType: n } = e,
        s = r.useMemo(() => K(n), [n]),
        l = a()().add(5, "days").toDate(),
        [u, c] = (0, W.Bo)(t, s, v.m.NOTICE_BAR);
    if (null == u) return null;
    switch (u) {
        case o.M.NAGBAR_NOTICE_OFFER_EXPIRING:
            if (n === N.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
                return (0, i.jsx)(j.A, {
                    dismissCurrentNotice: () => {
                        c(v.i.USER_DISMISS), (0, w.w)(l);
                    },
                    subscriptionTier: V.pe.TIER_2,
                });
            if (n === N.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
                return (0, i.jsx)(B, {
                    dismissCurrentNotice: () => {
                        c(v.i.USER_DISMISS), (0, w.w)(l);
                    },
                    subscriptionTier: V.pe.TIER_2,
                });
            break;
        case o.M.RIOT_CONNECTION_DEPRECATION:
            return (0, i.jsx)(D, { markAsDismissed: c, applicationName: O.intl.string(R.default["1S6oAo"]) });
        case o.M.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return (0, i.jsx)(L.A, { markAsDismissed: () => c(v.i.USER_DISMISS) });
    }
}
