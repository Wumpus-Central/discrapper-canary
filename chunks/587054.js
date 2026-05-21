n.d(t, { $: () => w, D: () => B });
var i = n(627968),
    l = n(64700),
    r = n(989349),
    s = n.n(r),
    a = n(554146),
    c = n(503698),
    o = n.n(c),
    d = n(17928);
if (21552 == n.j) var u = n(417098);
var E = n(736653),
    A = n(573648),
    _ = n(793574),
    T = n(688810),
    I = n(429913),
    N = n(826673),
    R = n(780964),
    m = n(766075),
    C = n(30370),
    p = n(46225),
    S = n(652215),
    O = n(49999),
    g = n(230451),
    h = n(375708),
    f = n(448759);
let P =
    21552 == n.j
        ? (e) => {
              let { markAsDismissed: t, applicationName: n } = e,
                  r = [S.fg2.LEAGUE_OF_LEGENDS, S.fg2.RIOT_GAMES],
                  s = (0, d.bG)([C.A], () => C.A.getAccounts().find((e) => r.includes(e.type))?.type),
                  c = (0, E.Ay)(),
                  P = null != s ? A.A.get(s) : null,
                  M = P?.replacedBy,
                  D = (0, I.h)(M);
              n = n ?? D?.name;
              let { startAuthorization: x, canStartAuthorization: U, hasAlreadyLinked: y, fetched: j } = (0, p.RD)(D),
                  { analyticsLocations: L } = (0, T.Ay)(_.A.NOTICE);
              if (
                  (l.useEffect(() => {
                      y && j && ((0, N.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_DISABLE), t(O.i.INDIRECT_ACTION));
                  }, [y, j, t]),
                  null == D || !U || !j || y)
              )
                  return null;
              let k = A.A.get(S.fg2.RIOT_GAMES);
              return (0, i.jsxs)(u.$T, {
                  color: u.Hv.WARNING,
                  children: [
                      (0, i.jsx)(u.PM, {
                          noticeType: S.kqX.RIOT_MIGRATION,
                          onClick: () => {
                              (0, N.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_DISABLE), t(O.i.USER_DISMISS);
                          },
                      }),
                      (0, i.jsx)("img", {
                          src: "light" === c ? k?.icon.blackSVG : k?.icon.whiteSVG,
                          alt: h.intl.string(g.default["1S6oAo"]),
                          className: o()(f.tV, f._R),
                      }),
                      h.intl.format(g.default.YnnXb6, { connectionName: P?.name, applicationName: n }),
                      (0, i.jsx)(u.Z_, {
                          onClick: () => {
                              (0, N.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_DISABLE),
                                  t(O.i.TAKE_ACTION),
                                  (0, m.openUserSettings)(R.X.CONNECTIONS_PANEL),
                                  setTimeout(() => x({ analyticsLocations: L }), 0);
                          },
                          className: f.HE,
                          noticeType: S.kqX.RIOT_MIGRATION,
                          children: h.intl.string(g.default.ZeOhh9),
                      }),
                      (0, i.jsx)(u.zr, {
                          onClick: () => {
                              t(O.i.USER_DISMISS);
                          },
                          className: f.wX,
                          children: h.intl.string(g.default["MVB/Ab"]),
                      }),
                  ],
              });
          }
        : null;
var M = n(380786),
    D = n(601623),
    x = n(496431),
    U = n(532794),
    y = n(174459),
    j = n(422936),
    L = n(635995),
    k = n(99462),
    v = n(788868);
let b =
    21552 == n.j
        ? function (e) {
              let { dismissCurrentNotice: t, subscriptionTier: n } = e,
                  { analyticsLocations: l } = (0, T.Ay)(_.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE),
                  r = (0, j.O)(),
                  s = (0, x.A)(null != r && null != r.expiresAt ? r.expiresAt.getTime() : 0);
              return null == r ||
                  r.discount?.planIds.some((e) => v.hd[e].skuId !== n) ||
                  null == r.expiresAt ||
                  Object.values(s).every((e) => 0 === e)
                  ? null
                  : (0, i.jsxs)(L.T0, {
                        onClick: () => {
                            t(),
                                y.default.track(S.HAw.APP_NOTICE_CLOSED, {
                                    notice_type: S.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
                                });
                        },
                        children: [
                            (0, i.jsx)(L.In, { children: (0, k.rn)(s, Number(r.discount.amount)) }),
                            (0, i.jsx)(L.fY, {
                                onClick: () => {
                                    (0, U.A)({
                                        subscriptionTier: n,
                                        analyticsLocations: l,
                                        analyticsObject: {
                                            page: S.liQ.IN_APP,
                                            section: S.JJy.NOTIFICATION_BAR,
                                            object: S.ZSU.BUTTON_CTA,
                                        },
                                    });
                                },
                                text: h.intl.string(h.t.zLXssK),
                            }),
                        ],
                    });
          }
        : null;
var G = n(745299),
    X = n(354670),
    q = n(428262),
    F = n(595529);
function B(e) {
    switch (e) {
        case S.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
            let t = X.A.getAlmostExpiringTrialOffersForReminder([v.pe.TIER_2]);
            return { cooldownDurationMs: (0, q.e1)(t[0]) };
        case S.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let n = X.A.getAlmostExpiringDiscountOffersForReminder([v.pe.TIER_2]);
            return { cooldownDurationMs: (0, q.e1)(n[0]) };
        case S.kqX.RIOT_MIGRATION:
        case S.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return { cooldownDurationMs: 6048e5 };
        default:
            return { cooldownDurationMs: 1 / 0 };
    }
}
let w = (e) => {
    let { dismissibleContent: t, noticeType: n } = e,
        r = l.useMemo(() => B(n), [n]),
        c = s()().add(5, "days").toDate(),
        [o, d] = (0, F.Bo)(t, r, O.m.NOTICE_BAR);
    if (null == o) return null;
    switch (o) {
        case a.M.NAGBAR_NOTICE_OFFER_EXPIRING:
            if (n === S.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
                return (0, i.jsx)(G.A, {
                    dismissCurrentNotice: () => {
                        d(O.i.USER_DISMISS), (0, D.w)(c);
                    },
                    subscriptionTier: v.pe.TIER_2,
                });
            if (n === S.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
                return (0, i.jsx)(b, {
                    dismissCurrentNotice: () => {
                        d(O.i.USER_DISMISS), (0, D.w)(c);
                    },
                    subscriptionTier: v.pe.TIER_2,
                });
            break;
        case a.M.RIOT_CONNECTION_DEPRECATION:
            return (0, i.jsx)(P, { markAsDismissed: d, applicationName: h.intl.string(g.default["1S6oAo"]) });
        case a.M.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return (0, i.jsx)(M.A, { markAsDismissed: () => d(O.i.USER_DISMISS) });
    }
};
