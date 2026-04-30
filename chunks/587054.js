n.d(t, { $: () => F, D: () => V });
var i = n(627968),
    l = n(64700),
    r = n(989349),
    s = n.n(r),
    a = n(554146),
    E = n(503698),
    _ = n.n(E),
    o = n(17928);
if (21552 == n.j) var A = n(417098);
var c = n(736653),
    T = n(573648),
    I = n(793574),
    N = n(688810),
    u = n(429913),
    R = n(826673),
    d = n(780964),
    O = n(858897),
    P = n(30370),
    C = n(46225),
    S = n(652215),
    M = n(49999),
    D = n(452832),
    m = n(985018),
    p = n(448759);
let U =
    21552 == n.j
        ? (e) => {
              let { markAsDismissed: t, applicationName: n } = e,
                  r = [S.fg2.LEAGUE_OF_LEGENDS, S.fg2.RIOT_GAMES],
                  s = (0, o.bG)([P.A], () => P.A.getAccounts().find((e) => r.includes(e.type))?.type),
                  E = (0, c.Ay)(),
                  U = null != s ? T.A.get(s) : null,
                  k = U?.replacedBy,
                  g = (0, u.h)(k);
              n = n ?? g?.name;
              let { startAuthorization: f, canStartAuthorization: y, hasAlreadyLinked: x, fetched: h } = (0, C.RD)(g),
                  { analyticsLocations: L } = (0, N.Ay)(I.A.NOTICE);
              if (
                  (l.useEffect(() => {
                      x && h && ((0, R.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_DISABLE), t(M.i.INDIRECT_ACTION));
                  }, [x, h, t]),
                  null == g || !y || !h || x)
              )
                  return null;
              let G = T.A.get(S.fg2.RIOT_GAMES);
              return (0, i.jsxs)(A.$T, {
                  color: A.Hv.WARNING,
                  children: [
                      (0, i.jsx)(A.PM, {
                          noticeType: S.kqX.RIOT_MIGRATION,
                          onClick: () => {
                              (0, R.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_DISABLE), t(M.i.USER_DISMISS);
                          },
                      }),
                      (0, i.jsx)("img", {
                          src: "light" === E ? G?.icon.blackSVG : G?.icon.whiteSVG,
                          alt: m.intl.string(D.default["1S6oAo"]),
                          className: _()(p.tV, p._R),
                      }),
                      m.intl.format(D.default.YnnXb6, { connectionName: U?.name, applicationName: n }),
                      (0, i.jsx)(A.Z_, {
                          onClick: () => {
                              (0, R.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_DISABLE),
                                  t(M.i.TAKE_ACTION),
                                  (0, O.openUserSettings)(d.X.CONNECTIONS_PANEL),
                                  setTimeout(() => f({ analyticsLocations: L }), 0);
                          },
                          className: p.HE,
                          noticeType: S.kqX.RIOT_MIGRATION,
                          children: m.intl.string(D.default.ZeOhh9),
                      }),
                      (0, i.jsx)(A.zr, {
                          onClick: () => {
                              t(M.i.USER_DISMISS);
                          },
                          className: p.wX,
                          children: m.intl.string(D.default["MVB/Ab"]),
                      }),
                  ],
              });
          }
        : null;
var k = n(380786),
    g = n(601623),
    f = n(496431),
    y = n(532794),
    x = n(954571),
    h = n(422936),
    L = n(635995),
    G = n(915516),
    j = n(788868);
let X =
    21552 == n.j
        ? function (e) {
              let { dismissCurrentNotice: t, subscriptionTier: n } = e,
                  { analyticsLocations: l } = (0, N.Ay)(I.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE),
                  r = (0, h.O)(),
                  s = (0, f.A)(null != r && null != r.expires_at ? Date.parse(r.expires_at) : 0);
              return null == r ||
                  r.discount?.plan_ids.some((e) => j.hd[e].skuId !== n) ||
                  null == r.expires_at ||
                  Object.values(s).every((e) => 0 === e)
                  ? null
                  : (0, i.jsxs)(L.T0, {
                        onClick: () => {
                            t(),
                                x.default.track(S.HAw.APP_NOTICE_CLOSED, {
                                    notice_type: S.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
                                });
                        },
                        children: [
                            (0, i.jsx)(L.In, { children: (0, G.rn)(s, Number(r.discount.amount)) }),
                            (0, i.jsx)(L.fY, {
                                onClick: () => {
                                    (0, y.A)({
                                        subscriptionTier: n,
                                        analyticsLocations: l,
                                        analyticsObject: {
                                            page: S.liQ.IN_APP,
                                            section: S.JJy.NOTIFICATION_BAR,
                                            object: S.ZSU.BUTTON_CTA,
                                        },
                                    });
                                },
                                text: m.intl.string(m.t.zLXssK),
                            }),
                        ],
                    });
          }
        : null;
var q = n(745299),
    v = n(354670),
    B = n(927578),
    b = n(160761);
function V(e) {
    switch (e) {
        case S.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
            let t = v.A.getAlmostExpiringTrialOffersForReminder([j.pe.TIER_2]);
            return { cooldownDurationMs: (0, B.e1)(t[0]) };
        case S.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let n = v.A.getAlmostExpiringDiscountOffersForReminder([j.pe.TIER_2]);
            return { cooldownDurationMs: (0, B.e1)(n[0]) };
        case S.kqX.RIOT_MIGRATION:
        case S.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return { cooldownDurationMs: 6048e5 };
        default:
            return { cooldownDurationMs: 1 / 0 };
    }
}
let F = (e) => {
    let { dismissibleContent: t, noticeType: n } = e,
        r = l.useMemo(() => V(n), [n]),
        E = s()().add(5, "days").toDate(),
        [_, o] = (0, b.Bo)(t, r, M.m.NOTICE_BAR);
    if (null == _) return null;
    switch (_) {
        case a.M.NAGBAR_NOTICE_OFFER_EXPIRING:
            if (n === S.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
                return (0, i.jsx)(q.A, {
                    dismissCurrentNotice: () => {
                        o(M.i.USER_DISMISS), (0, g.w)(E);
                    },
                    subscriptionTier: j.pe.TIER_2,
                });
            if (n === S.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
                return (0, i.jsx)(X, {
                    dismissCurrentNotice: () => {
                        o(M.i.USER_DISMISS), (0, g.w)(E);
                    },
                    subscriptionTier: j.pe.TIER_2,
                });
            break;
        case a.M.RIOT_CONNECTION_DEPRECATION:
            return (0, i.jsx)(U, { markAsDismissed: o, applicationName: m.intl.string(D.default["1S6oAo"]) });
        case a.M.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return (0, i.jsx)(k.A, { markAsDismissed: () => o(M.i.USER_DISMISS) });
    }
};
