"use strict";
n.d(t, { $: () => j, D: () => H });
var i = n(627968),
    r = n(64700),
    s = n(989349),
    a = n.n(s),
    o = n(554146),
    l = n(503698),
    u = n.n(l),
    c = n(17928),
    d = n(417098),
    _ = n(736653),
    h = n(573648),
    f = n(793574),
    p = n(688810),
    E = n(429913),
    m = n(826673),
    g = n(780964),
    A = n(766075),
    I = n(30370),
    T = n(46225),
    S = n(652215),
    y = n(49999),
    N = n(230451),
    v = n(375708),
    C = n(448759);
let R = (e) => {
    let { markAsDismissed: t, applicationName: n } = e,
        s = [S.fg2.LEAGUE_OF_LEGENDS, S.fg2.RIOT_GAMES],
        a = (0, c.bG)([I.A], () => I.A.getAccounts().find((e) => s.includes(e.type))?.type),
        l = (0, _.Ay)(),
        R = null != a ? h.A.get(a) : null,
        O = R?.replacedBy,
        b = (0, E.h)(O);
    n = n ?? b?.name;
    let { startAuthorization: D, canStartAuthorization: L, hasAlreadyLinked: w, fetched: M } = (0, T.RD)(b),
        { analyticsLocations: P } = (0, p.Ay)(f.A.NOTICE);
    if (
        (r.useEffect(() => {
            w && M && ((0, m.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE), t(y.i.INDIRECT_ACTION));
        }, [w, M, t]),
        null == b || !L || !M || w)
    )
        return null;
    let x = h.A.get(S.fg2.RIOT_GAMES);
    return (0, i.jsxs)(d.$T, {
        color: d.Hv.WARNING,
        children: [
            (0, i.jsx)(d.PM, {
                noticeType: S.kqX.RIOT_MIGRATION,
                onClick: () => {
                    (0, m.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE), t(y.i.USER_DISMISS);
                },
            }),
            (0, i.jsx)("img", {
                src: "light" === l ? x?.icon.blackSVG : x?.icon.whiteSVG,
                alt: v.intl.string(N.default["1S6oAo"]),
                className: u()(C.tV, C._R),
            }),
            v.intl.format(N.default.YnnXb6, { connectionName: R?.name, applicationName: n }),
            (0, i.jsx)(d.Z_, {
                onClick: () => {
                    (0, m.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_DISABLE),
                        t(y.i.TAKE_ACTION),
                        (0, A.openUserSettings)(g.X.CONNECTIONS_PANEL),
                        setTimeout(() => D({ analyticsLocations: P }), 0);
                },
                className: C.HE,
                noticeType: S.kqX.RIOT_MIGRATION,
                children: v.intl.string(N.default.ZeOhh9),
            }),
            (0, i.jsx)(d.zr, {
                onClick: () => {
                    t(y.i.USER_DISMISS);
                },
                className: C.wX,
                children: v.intl.string(N.default["MVB/Ab"]),
            }),
        ],
    });
};
var O = n(380786),
    b = n(601623),
    D = n(496431),
    L = n(532794),
    w = n(174459),
    M = n(422936),
    P = n(635995),
    x = n(99462),
    k = n(788868);
let U = function (e) {
    let { dismissCurrentNotice: t, subscriptionTier: n } = e,
        { analyticsLocations: r } = (0, p.Ay)(f.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE),
        s = (0, M.O)(),
        a = (0, D.A)(null != s && null != s.expiresAt ? s.expiresAt.getTime() : 0);
    return null == s ||
        s.discount?.planIds.some((e) => k.hd[e].skuId !== n) ||
        null == s.expiresAt ||
        Object.values(a).every((e) => 0 === e)
        ? null
        : (0, i.jsxs)(P.T0, {
              onClick: () => {
                  t(), w.default.track(S.HAw.APP_NOTICE_CLOSED, { notice_type: S.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING });
              },
              children: [
                  (0, i.jsx)(P.In, { children: (0, x.rn)(a, Number(s.discount.amount)) }),
                  (0, i.jsx)(P.fY, {
                      onClick: () => {
                          (0, L.A)({
                              subscriptionTier: n,
                              analyticsLocations: r,
                              analyticsObject: {
                                  page: S.liQ.IN_APP,
                                  section: S.JJy.NOTIFICATION_BAR,
                                  object: S.ZSU.BUTTON_CTA,
                              },
                          });
                      },
                      text: v.intl.string(v.t.zLXssK),
                  }),
              ],
          });
};
var G = n(745299),
    F = n(354670),
    V = n(428262),
    B = n(595529);
function H(e) {
    switch (e) {
        case S.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
            let t = F.A.getAlmostExpiringTrialOffersForReminder([k.pe.TIER_2]);
            return { cooldownDurationMs: (0, V.e1)(t[0]) };
        case S.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let n = F.A.getAlmostExpiringDiscountOffersForReminder([k.pe.TIER_2]);
            return { cooldownDurationMs: (0, V.e1)(n[0]) };
        case S.kqX.RIOT_MIGRATION:
        case S.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return { cooldownDurationMs: 6048e5 };
        default:
            return { cooldownDurationMs: 1 / 0 };
    }
}
let j = (e) => {
    let { dismissibleContent: t, noticeType: n } = e,
        s = r.useMemo(() => H(n), [n]),
        l = a()().add(5, "days").toDate(),
        [u, c] = (0, B.Bo)(t, s, y.m.NOTICE_BAR);
    if (null == u) return null;
    switch (u) {
        case o.M.NAGBAR_NOTICE_OFFER_EXPIRING:
            if (n === S.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
                return (0, i.jsx)(G.A, {
                    dismissCurrentNotice: () => {
                        c(y.i.USER_DISMISS), (0, b.w)(l);
                    },
                    subscriptionTier: k.pe.TIER_2,
                });
            if (n === S.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
                return (0, i.jsx)(U, {
                    dismissCurrentNotice: () => {
                        c(y.i.USER_DISMISS), (0, b.w)(l);
                    },
                    subscriptionTier: k.pe.TIER_2,
                });
            break;
        case o.M.RIOT_CONNECTION_DEPRECATION:
            return (0, i.jsx)(R, { markAsDismissed: c, applicationName: v.intl.string(N.default["1S6oAo"]) });
        case o.M.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return (0, i.jsx)(O.A, { markAsDismissed: () => c(y.i.USER_DISMISS) });
    }
};
