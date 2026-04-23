n.d(t, { $: () => F, D: () => V });
var i = n(627968),
    l = n(64700),
    r = n(989349),
    s = n.n(r),
    a = n(554146),
    E = n(503698),
    o = n.n(E),
    _ = n(17928);
if (21552 == n.j) var c = n(417098);
var A = n(736653),
    I = n(573648),
    u = n(793574),
    T = n(688810),
    d = n(429913),
    N = n(826673),
    R = n(780964),
    O = n(858897),
    P = n(30370),
    S = n(46225),
    C = n(652215),
    D = n(49999),
    M = n(452832),
    m = n(985018),
    p = n(448759);
let U =
    21552 == n.j
        ? (e) => {
              let { markAsDismissed: t, applicationName: n } = e,
                  r = [C.fg2.LEAGUE_OF_LEGENDS, C.fg2.RIOT_GAMES],
                  s = (0, _.bG)([P.A], () => P.A.getAccounts().find((e) => r.includes(e.type))?.type),
                  E = (0, A.Ay)(),
                  U = null != s ? I.A.get(s) : null,
                  g = U?.replacedBy,
                  k = (0, d.h)(g);
              n = n ?? k?.name;
              let { startAuthorization: f, canStartAuthorization: y, hasAlreadyLinked: h, fetched: x } = (0, S.RD)(k),
                  { analyticsLocations: L } = (0, T.Ay)(u.A.NOTICE);
              if (
                  (l.useEffect(() => {
                      h && x && ((0, N.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_DISABLE), t(D.i.INDIRECT_ACTION));
                  }, [h, x, t]),
                  null == k || !y || !x || h)
              )
                  return null;
              let G = I.A.get(C.fg2.RIOT_GAMES);
              return (0, i.jsxs)(c.$T, {
                  color: c.Hv.WARNING,
                  children: [
                      (0, i.jsx)(c.PM, {
                          noticeType: C.kqX.RIOT_MIGRATION,
                          onClick: () => {
                              (0, N.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_DISABLE), t(D.i.USER_DISMISS);
                          },
                      }),
                      (0, i.jsx)("img", {
                          src: "light" === E ? G?.icon.blackSVG : G?.icon.whiteSVG,
                          alt: m.intl.string(M.default["1S6oAo"]),
                          className: o()(p.tV, p._R),
                      }),
                      m.intl.format(M.default.YnnXb6, { connectionName: U?.name, applicationName: n }),
                      (0, i.jsx)(c.Z_, {
                          onClick: () => {
                              (0, N.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_DISABLE),
                                  t(D.i.TAKE_ACTION),
                                  (0, O.openUserSettings)(R.X.CONNECTIONS_PANEL),
                                  setTimeout(() => f({ analyticsLocations: L }), 0);
                          },
                          className: p.HE,
                          noticeType: C.kqX.RIOT_MIGRATION,
                          children: m.intl.string(M.default.ZeOhh9),
                      }),
                      (0, i.jsx)(c.zr, {
                          onClick: () => {
                              t(D.i.USER_DISMISS);
                          },
                          className: p.wX,
                          children: m.intl.string(M.default["MVB/Ab"]),
                      }),
                  ],
              });
          }
        : null;
var g = n(380786),
    k = n(601623),
    f = n(496431),
    y = n(532794),
    h = n(954571),
    x = n(422936),
    L = n(635995),
    G = n(915516),
    j = n(788868);
let X =
    21552 == n.j
        ? function (e) {
              let { dismissCurrentNotice: t, subscriptionTier: n } = e,
                  { analyticsLocations: l } = (0, T.Ay)(u.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE),
                  r = (0, x.O)(),
                  s = (0, f.A)(null != r && null != r.expires_at ? Date.parse(r.expires_at) : 0);
              return null == r ||
                  r.discount?.plan_ids.some((e) => j.hd[e].skuId !== n) ||
                  null == r.expires_at ||
                  Object.values(s).every((e) => 0 === e)
                  ? null
                  : (0, i.jsxs)(L.T0, {
                        onClick: () => {
                            t(),
                                h.default.track(C.HAw.APP_NOTICE_CLOSED, {
                                    notice_type: C.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
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
                                            page: C.liQ.IN_APP,
                                            section: C.JJy.NOTIFICATION_BAR,
                                            object: C.ZSU.BUTTON_CTA,
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
    b = n(927578),
    B = n(160761);
function V(e) {
    switch (e) {
        case C.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
            let t = v.A.getAlmostExpiringTrialOffersForReminder([j.pe.TIER_2]);
            return { cooldownDurationMs: (0, b.e1)(t[0]) };
        case C.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let n = v.A.getAlmostExpiringDiscountOffersForReminder([j.pe.TIER_2]);
            return { cooldownDurationMs: (0, b.e1)(n[0]) };
        case C.kqX.RIOT_MIGRATION:
        case C.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return { cooldownDurationMs: 6048e5 };
        default:
            return { cooldownDurationMs: 1 / 0 };
    }
}
let F = (e) => {
    let { dismissibleContent: t, noticeType: n } = e,
        r = l.useMemo(() => V(n), [n]),
        E = s()().add(5, "days").toDate(),
        [o, _] = (0, B.Bo)(t, r, D.m.NOTICE_BAR);
    if (null == o) return null;
    switch (o) {
        case a.M.NAGBAR_NOTICE_OFFER_EXPIRING:
            if (n === C.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
                return (0, i.jsx)(q.A, {
                    dismissCurrentNotice: () => {
                        _(D.i.USER_DISMISS), (0, k.w)(E);
                    },
                    subscriptionTier: j.pe.TIER_2,
                });
            if (n === C.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
                return (0, i.jsx)(X, {
                    dismissCurrentNotice: () => {
                        _(D.i.USER_DISMISS), (0, k.w)(E);
                    },
                    subscriptionTier: j.pe.TIER_2,
                });
            break;
        case a.M.RIOT_CONNECTION_DEPRECATION:
            return (0, i.jsx)(U, { markAsDismissed: _, applicationName: m.intl.string(M.default["1S6oAo"]) });
        case a.M.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return (0, i.jsx)(g.A, { markAsDismissed: () => _(D.i.USER_DISMISS) });
    }
};
