n.d(t, { $: () => w, D: () => F });
var i = n(627968),
    l = n(64700),
    r = n(989349),
    s = n.n(r),
    a = n(554146),
    E = n(503698),
    o = n.n(E),
    c = n(17928);
if (21552 == n.j) var _ = n(417098);
var u = n(736653),
    A = n(573648),
    T = n(793574),
    d = n(688810),
    I = n(429913),
    N = n(826673),
    R = n(780964),
    S = n(858897),
    O = n(30370),
    C = n(46225),
    P = n(652215),
    D = n(49999),
    M = n(452832),
    p = n(375708),
    m = n(448759);
let U =
    21552 == n.j
        ? (e) => {
              let { markAsDismissed: t, applicationName: n } = e,
                  r = [P.fg2.LEAGUE_OF_LEGENDS, P.fg2.RIOT_GAMES],
                  s = (0, c.bG)([O.A], () => O.A.getAccounts().find((e) => r.includes(e.type))?.type),
                  E = (0, u.Ay)(),
                  U = null != s ? A.A.get(s) : null,
                  h = U?.replacedBy,
                  f = (0, I.h)(h);
              n = n ?? f?.name;
              let { startAuthorization: g, canStartAuthorization: k, hasAlreadyLinked: y, fetched: L } = (0, C.RD)(f),
                  { analyticsLocations: x } = (0, d.Ay)(T.A.NOTICE);
              if (
                  (l.useEffect(() => {
                      y && L && ((0, N.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_DISABLE), t(D.i.INDIRECT_ACTION));
                  }, [y, L, t]),
                  null == f || !k || !L || y)
              )
                  return null;
              let G = A.A.get(P.fg2.RIOT_GAMES);
              return (0, i.jsxs)(_.$T, {
                  color: _.Hv.WARNING,
                  children: [
                      (0, i.jsx)(_.PM, {
                          noticeType: P.kqX.RIOT_MIGRATION,
                          onClick: () => {
                              (0, N.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_DISABLE), t(D.i.USER_DISMISS);
                          },
                      }),
                      (0, i.jsx)("img", {
                          src: "light" === E ? G?.icon.blackSVG : G?.icon.whiteSVG,
                          alt: p.intl.string(M.default["1S6oAo"]),
                          className: o()(m.tV, m._R),
                      }),
                      p.intl.format(M.default.YnnXb6, { connectionName: U?.name, applicationName: n }),
                      (0, i.jsx)(_.Z_, {
                          onClick: () => {
                              (0, N.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_DISABLE),
                                  t(D.i.TAKE_ACTION),
                                  (0, S.openUserSettings)(R.X.CONNECTIONS_PANEL),
                                  setTimeout(() => g({ analyticsLocations: x }), 0);
                          },
                          className: m.HE,
                          noticeType: P.kqX.RIOT_MIGRATION,
                          children: p.intl.string(M.default.ZeOhh9),
                      }),
                      (0, i.jsx)(_.zr, {
                          onClick: () => {
                              t(D.i.USER_DISMISS);
                          },
                          className: m.wX,
                          children: p.intl.string(M.default["MVB/Ab"]),
                      }),
                  ],
              });
          }
        : null;
var h = n(380786),
    f = n(601623),
    g = n(496431),
    k = n(532794),
    y = n(174459),
    L = n(422936),
    x = n(635995),
    G = n(915516),
    j = n(788868);
let q =
    21552 == n.j
        ? function (e) {
              let { dismissCurrentNotice: t, subscriptionTier: n } = e,
                  { analyticsLocations: l } = (0, d.Ay)(T.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE),
                  r = (0, L.O)(),
                  s = (0, g.A)(null != r && null != r.expires_at ? Date.parse(r.expires_at) : 0);
              return null == r ||
                  r.discount?.plan_ids.some((e) => j.hd[e].skuId !== n) ||
                  null == r.expires_at ||
                  Object.values(s).every((e) => 0 === e)
                  ? null
                  : (0, i.jsxs)(x.T0, {
                        onClick: () => {
                            t(),
                                y.default.track(P.HAw.APP_NOTICE_CLOSED, {
                                    notice_type: P.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
                                });
                        },
                        children: [
                            (0, i.jsx)(x.In, { children: (0, G.rn)(s, Number(r.discount.amount)) }),
                            (0, i.jsx)(x.fY, {
                                onClick: () => {
                                    (0, k.A)({
                                        subscriptionTier: n,
                                        analyticsLocations: l,
                                        analyticsObject: {
                                            page: P.liQ.IN_APP,
                                            section: P.JJy.NOTIFICATION_BAR,
                                            object: P.ZSU.BUTTON_CTA,
                                        },
                                    });
                                },
                                text: p.intl.string(p.t.zLXssK),
                            }),
                        ],
                    });
          }
        : null;
var v = n(745299),
    X = n(354670),
    b = n(927578),
    B = n(595529);
function F(e) {
    switch (e) {
        case P.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
            let t = X.A.getAlmostExpiringTrialOffersForReminder([j.pe.TIER_2]);
            return { cooldownDurationMs: (0, b.e1)(t[0]) };
        case P.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let n = X.A.getAlmostExpiringDiscountOffersForReminder([j.pe.TIER_2]);
            return { cooldownDurationMs: (0, b.e1)(n[0]) };
        case P.kqX.RIOT_MIGRATION:
        case P.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return { cooldownDurationMs: 6048e5 };
        default:
            return { cooldownDurationMs: 1 / 0 };
    }
}
let w = (e) => {
    let { dismissibleContent: t, noticeType: n } = e,
        r = l.useMemo(() => F(n), [n]),
        E = s()().add(5, "days").toDate(),
        [o, c] = (0, B.Bo)(t, r, D.m.NOTICE_BAR);
    if (null == o) return null;
    switch (o) {
        case a.M.NAGBAR_NOTICE_OFFER_EXPIRING:
            if (n === P.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
                return (0, i.jsx)(v.A, {
                    dismissCurrentNotice: () => {
                        c(D.i.USER_DISMISS), (0, f.w)(E);
                    },
                    subscriptionTier: j.pe.TIER_2,
                });
            if (n === P.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
                return (0, i.jsx)(q, {
                    dismissCurrentNotice: () => {
                        c(D.i.USER_DISMISS), (0, f.w)(E);
                    },
                    subscriptionTier: j.pe.TIER_2,
                });
            break;
        case a.M.RIOT_CONNECTION_DEPRECATION:
            return (0, i.jsx)(U, { markAsDismissed: c, applicationName: p.intl.string(M.default["1S6oAo"]) });
        case a.M.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return (0, i.jsx)(h.A, { markAsDismissed: () => c(D.i.USER_DISMISS) });
    }
};
