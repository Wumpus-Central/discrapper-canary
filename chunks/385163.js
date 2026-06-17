"use strict";
n.d(t, { $: () => K, D: () => W });
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
    S = n(228366),
    y = n(46225),
    C = n(652215),
    N = n(49999),
    v = n(566707),
    R = n(375708),
    O = n(846775);
let b = (e) => {
    let { markAsDismissed: t, applicationName: s } = e,
        a = [C.fg2.LEAGUE_OF_LEGENDS, C.fg2.RIOT_GAMES],
        l = (0, c.bG)([T.A], () => T.A.getAccounts().find((e) => a.includes(e.type))?.type),
        b = (0, p.Ay)(),
        D = null != l ? E.A.get(l) : null,
        L = D?.replacedBy,
        w = (0, A.h)(L);
    s = s ?? w?.name;
    let { startAuthorization: M, canStartAuthorization: P, hasAlreadyLinked: x, fetched: k } = (0, y.RD)(w),
        { analyticsLocations: U } = (0, g.Ay)(m.A.NOTICE);
    if (
        (r.useEffect(() => {
            x &&
                k &&
                (null != L && S.h.dispatch({ type: "ACCOUNT_LINK_AUTHORIZATION_COMPLETED", applicationId: L }),
                (0, I.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE),
                t(N.i.INDIRECT_ACTION));
        }, [x, k, t, L]),
        null == w || !P || !k || x)
    )
        return null;
    let G = E.A.get(C.fg2.RIOT_GAMES);
    return (0, i.jsxs)(_.$T, {
        color: _.Hv.WARNING,
        children: [
            (0, i.jsx)(_.PM, {
                noticeType: C.kqX.RIOT_MIGRATION,
                onClick: () => {
                    (0, I.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE), t(N.i.USER_DISMISS);
                },
            }),
            (0, i.jsx)("img", {
                src: "light" === b ? G?.icon.blackSVG : G?.icon.whiteSVG,
                alt: R.intl.string(v.default["1S6oAo"]),
                className: u()(O.tV, O._R),
            }),
            R.intl.format(v.default.DfSSdL, {
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
                    var e;
                    M({ analyticsLocations: U }),
                        (e = w.id),
                        S.h.dispatch({
                            type: "ACCOUNT_LINK_AUTHORIZATION_STARTED",
                            applicationId: e,
                            accountLinkCallbacks: {},
                            claimIncentivizedAccountLinkingRewardCallbacks: {
                                onSuccess: () =>
                                    (0, d.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e("428"), n.e("89387")]).then(
                                            n.bind(n, 494886),
                                        );
                                        return (t) => (0, i.jsx)(e, { ...t });
                                    }),
                            },
                        });
                },
                className: O.HE,
                noticeType: C.kqX.RIOT_MIGRATION,
                children: R.intl.string(v.default.ZeOhh9),
            }),
            (0, i.jsx)(_.zr, {
                onClick: () => {
                    t(N.i.USER_DISMISS);
                },
                className: O.wX,
                children: R.intl.string(v.default["MVB/Ab"]),
            }),
        ],
    });
};
var D = n(380786),
    L = n(988672),
    w = n(496431),
    M = n(532794),
    P = n(174459),
    x = n(422936),
    k = n(410516),
    U = n(635995),
    G = n(99462),
    F = n(788868);
let V = function (e) {
    let { dismissCurrentNotice: t, subscriptionTier: n } = e,
        { analyticsLocations: r } = (0, g.Ay)(m.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE),
        s = (0, x.O)(),
        a = (0, w.A)(null != s && null != s.expiresAt ? s.expiresAt.getTime() : 0);
    return null == s ||
        s.discount?.planIds.some((e) => F.hd[e].skuId !== n) ||
        !s.hasAcknowledged() ||
        Object.values(a).every((e) => 0 === e)
        ? null
        : (0, i.jsxs)(U.T0, {
              onClick: () => {
                  t(), P.default.track(C.HAw.APP_NOTICE_CLOSED, { notice_type: C.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING });
              },
              children: [
                  (0, i.jsx)(U.In, { children: (0, G.rn)(a, Number(s.discount.amount), (0, k.hm)(s)) }),
                  (0, i.jsx)(U.fY, {
                      onClick: () => {
                          (0, M.A)({
                              subscriptionTier: n,
                              analyticsLocations: r,
                              analyticsObject: {
                                  page: C.liQ.IN_APP,
                                  section: C.JJy.NOTIFICATION_BAR,
                                  object: C.ZSU.BUTTON_CTA,
                              },
                          });
                      },
                      text: R.intl.string(R.t.zLXssK),
                  }),
              ],
          });
};
var B = n(745299),
    j = n(354670),
    H = n(428262),
    Y = n(595529);
function W(e) {
    switch (e) {
        case C.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
            let t = j.A.getAlmostExpiringTrialOffersForReminder([F.pe.TIER_2]);
            return { cooldownDurationMs: (0, H.e1)(t[0]) };
        case C.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let n = j.A.getAlmostExpiringDiscountOffersForReminder([F.pe.TIER_2]);
            return { cooldownDurationMs: (0, H.e1)(n[0]) };
        case C.kqX.RIOT_MIGRATION:
        case C.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return { cooldownDurationMs: 6048e5 };
        default:
            return { cooldownDurationMs: 1 / 0 };
    }
}
let K = (e) => {
    let { dismissibleContent: t, noticeType: n } = e,
        s = r.useMemo(() => W(n), [n]),
        l = a()().add(5, "days").toDate(),
        [u, c] = (0, Y.Bo)(t, s, N.m.NOTICE_BAR);
    if (null == u) return null;
    switch (u) {
        case o.M.NAGBAR_NOTICE_OFFER_EXPIRING:
            if (n === C.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
                return (0, i.jsx)(B.A, {
                    dismissCurrentNotice: () => {
                        c(N.i.USER_DISMISS), (0, L.w)(l);
                    },
                    subscriptionTier: F.pe.TIER_2,
                });
            if (n === C.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
                return (0, i.jsx)(V, {
                    dismissCurrentNotice: () => {
                        c(N.i.USER_DISMISS), (0, L.w)(l);
                    },
                    subscriptionTier: F.pe.TIER_2,
                });
            break;
        case o.M.RIOT_CONNECTION_DEPRECATION:
            return (0, i.jsx)(b, { markAsDismissed: c, applicationName: R.intl.string(v.default["1S6oAo"]) });
        case o.M.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return (0, i.jsx)(D.A, { markAsDismissed: () => c(N.i.USER_DISMISS) });
    }
};
