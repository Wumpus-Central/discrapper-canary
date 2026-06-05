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
    d = n(417098),
    _ = n(318254),
    h = n(661531),
    f = n(736653),
    p = n(573648),
    E = n(793574),
    m = n(688810),
    g = n(429913),
    A = n(826673),
    I = n(780964),
    T = n(766075),
    S = n(30370),
    y = n(46225),
    N = n(652215),
    v = n(49999),
    C = n(230451),
    R = n(375708),
    O = n(448759);
let b = (e) => {
    let { markAsDismissed: t, applicationName: n } = e,
        s = [N.fg2.LEAGUE_OF_LEGENDS, N.fg2.RIOT_GAMES],
        a = (0, c.bG)([S.A], () => S.A.getAccounts().find((e) => s.includes(e.type))?.type),
        l = (0, f.Ay)(),
        b = null != a ? p.A.get(a) : null,
        D = b?.replacedBy,
        L = (0, g.h)(D);
    n = n ?? L?.name;
    let { startAuthorization: w, canStartAuthorization: M, hasAlreadyLinked: P, fetched: x } = (0, y.RD)(L),
        { analyticsLocations: k } = (0, m.Ay)(E.A.NOTICE);
    if (
        (r.useEffect(() => {
            P && x && ((0, A.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE), t(v.i.INDIRECT_ACTION));
        }, [P, x, t]),
        null == L || !M || !x || P)
    )
        return null;
    let U = p.A.get(N.fg2.RIOT_GAMES);
    return (0, i.jsxs)(d.$T, {
        color: d.Hv.WARNING,
        children: [
            (0, i.jsx)(d.PM, {
                noticeType: N.kqX.RIOT_MIGRATION,
                onClick: () => {
                    (0, A.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE), t(v.i.USER_DISMISS);
                },
            }),
            (0, i.jsx)("img", {
                src: "light" === l ? U?.icon.blackSVG : U?.icon.whiteSVG,
                alt: R.intl.string(C.default["1S6oAo"]),
                className: u()(O.tV, O._R),
            }),
            R.intl.format(C.default.DfSSdL, {
                connectionName: b?.name,
                applicationName: n,
                orbsIconHook: () =>
                    (0, i.jsx)(_.C, {
                        size: "xs",
                        style: { verticalAlign: "-0.22em" },
                        color: h.A.colors.NOTICE_TEXT_WARNING,
                    }),
                orbCount: 200,
            }),
            (0, i.jsx)(d.Z_, {
                onClick: () => {
                    (0, A.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE),
                        t(v.i.TAKE_ACTION),
                        (0, T.openUserSettings)(I.X.CONNECTIONS_PANEL),
                        setTimeout(() => w({ analyticsLocations: k }), 0);
                },
                className: O.HE,
                noticeType: N.kqX.RIOT_MIGRATION,
                children: R.intl.string(C.default.ZeOhh9),
            }),
            (0, i.jsx)(d.zr, {
                onClick: () => {
                    t(v.i.USER_DISMISS);
                },
                className: O.wX,
                children: R.intl.string(C.default["MVB/Ab"]),
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
        { analyticsLocations: r } = (0, m.Ay)(E.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE),
        s = (0, x.O)(),
        a = (0, w.A)(null != s && null != s.expiresAt ? s.expiresAt.getTime() : 0);
    return null == s ||
        s.discount?.planIds.some((e) => F.hd[e].skuId !== n) ||
        null == s.expiresAt ||
        Object.values(a).every((e) => 0 === e)
        ? null
        : (0, i.jsxs)(U.T0, {
              onClick: () => {
                  t(), P.default.track(N.HAw.APP_NOTICE_CLOSED, { notice_type: N.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING });
              },
              children: [
                  (0, i.jsx)(U.In, { children: (0, G.rn)(a, Number(s.discount.amount), (0, k.hm)(s)) }),
                  (0, i.jsx)(U.fY, {
                      onClick: () => {
                          (0, M.A)({
                              subscriptionTier: n,
                              analyticsLocations: r,
                              analyticsObject: {
                                  page: N.liQ.IN_APP,
                                  section: N.JJy.NOTIFICATION_BAR,
                                  object: N.ZSU.BUTTON_CTA,
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
    Y = n(595529);
function W(e) {
    switch (e) {
        case N.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
            let t = H.A.getAlmostExpiringTrialOffersForReminder([F.pe.TIER_2]);
            return { cooldownDurationMs: (0, j.e1)(t[0]) };
        case N.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let n = H.A.getAlmostExpiringDiscountOffersForReminder([F.pe.TIER_2]);
            return { cooldownDurationMs: (0, j.e1)(n[0]) };
        case N.kqX.RIOT_MIGRATION:
        case N.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return { cooldownDurationMs: 6048e5 };
        default:
            return { cooldownDurationMs: 1 / 0 };
    }
}
let K = (e) => {
    let { dismissibleContent: t, noticeType: n } = e,
        s = r.useMemo(() => W(n), [n]),
        l = a()().add(5, "days").toDate(),
        [u, c] = (0, Y.Bo)(t, s, v.m.NOTICE_BAR);
    if (null == u) return null;
    switch (u) {
        case o.M.NAGBAR_NOTICE_OFFER_EXPIRING:
            if (n === N.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
                return (0, i.jsx)(B.A, {
                    dismissCurrentNotice: () => {
                        c(v.i.USER_DISMISS), (0, L.w)(l);
                    },
                    subscriptionTier: F.pe.TIER_2,
                });
            if (n === N.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
                return (0, i.jsx)(V, {
                    dismissCurrentNotice: () => {
                        c(v.i.USER_DISMISS), (0, L.w)(l);
                    },
                    subscriptionTier: F.pe.TIER_2,
                });
            break;
        case o.M.RIOT_CONNECTION_DEPRECATION:
            return (0, i.jsx)(b, { markAsDismissed: c, applicationName: R.intl.string(C.default["1S6oAo"]) });
        case o.M.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return (0, i.jsx)(D.A, { markAsDismissed: () => c(v.i.USER_DISMISS) });
    }
};
