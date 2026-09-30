n.d(t, { $: () => Y, D: () => K });
var i = n(477900),
    l = n(582128),
    r = n(536637),
    s = n.n(r),
    a = n(554146),
    o = n(573648),
    c = n(503698),
    E = n.n(c),
    u = n(17928);
if (221552 == n.j) var d = n(192308);
if (221552 == n.j) var _ = n(417098);
if (221552 == n.j) var A = n(318254);
if (221552 == n.j) var T = n(661531);
var I = n(736653),
    N = n(793574),
    R = n(688810),
    C = n(429913),
    O = n(30370),
    m = n(772680),
    S = n(281020),
    f = n(206828),
    p = n(49999),
    D = n(121286),
    g = n(375708),
    P = n(971656);
let h =
    221552 == n.j
        ? function (e) {
              let {
                      markAsDismissed: t,
                      recurringDismiss: r,
                      platformTypes: s,
                      platformIconOverride: a,
                      noticeType: c,
                  } = e,
                  h = (0, u.bG)([O.A], () => O.A.getAccounts().find((e) => s.includes(e.type))?.type),
                  M = (0, I.Ay)(),
                  U = null != h ? o.A.get(h) : null,
                  y = U?.migrationData?.replacedBy,
                  L = (0, C.h)(y),
                  x = L?.name,
                  { startAuthorization: k, canStartAuthorization: v, hasAlreadyLinked: j, fetched: G } = (0, f.RD)(L),
                  { analyticsLocations: b } = (0, R.Ay)(N.A.NOTICE),
                  q = null == a ? U : a;
              if (
                  (l.useEffect(() => {
                      j && G && (null != y && (0, S.M8)(y), t(p.i.INDIRECT_ACTION));
                  }, [j, G, t, y]),
                  null == L || !v || !G || j)
              )
                  return null;
              function B() {
                  null != L &&
                      (0, m.RI)({
                          applicationId: L.id,
                          onSuccess: () => {
                              (0, d.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([n.e("826001"), n.e("289387")]).then(
                                      n.bind(n, 494886),
                                  );
                                  return (t) => (0, i.jsx)(e, { ...t });
                              });
                          },
                      });
              }
              return (0, i.jsxs)(_.$T, {
                  color: _.Hv.WARNING,
                  children: [
                      (0, i.jsx)(_.PM, {
                          noticeType: c,
                          onClick: () => {
                              t(p.i.USER_DISMISS);
                          },
                      }),
                      (0, i.jsx)("img", {
                          src: "light" === M ? q?.icon.blackSVG : q?.icon.whiteSVG,
                          alt: x,
                          className: E()(P.tV, P.Y5),
                      }),
                      g.intl.format(D.default.qV9zT6, {
                          connectionName: U?.name,
                          orbsIconHook: () =>
                              (0, i.jsx)(A.C, {
                                  size: "xs",
                                  style: { verticalAlign: "-0.22em" },
                                  color: T.A.colors.NOTICE_TEXT_WARNING,
                              }),
                          orbCount: 200,
                      }),
                      (0, i.jsx)(_.Z_, {
                          onClick: function () {
                              k({ analyticsLocations: b, onSuccess: B });
                          },
                          className: P.NS,
                          noticeType: c,
                          children: g.intl.string(D.default.ZeOhh9),
                      }),
                      (0, i.jsx)(_.zr, {
                          onClick: () => r(p.i.USER_DISMISS),
                          className: P.go,
                          children: g.intl.string(D.default["8qJAeT"]),
                      }),
                  ],
              });
          }
        : null;
var M = n(521790),
    U = n(16432),
    y = n(496431),
    L = n(75678),
    x = n(174459),
    k = n(724651),
    v = n(511484),
    j = n(635995),
    G = n(99462),
    b = n(202541),
    q = n(652215);
let B =
    221552 == n.j
        ? function (e) {
              let { dismissCurrentNotice: t, subscriptionTier: n } = e,
                  { analyticsLocations: l } = (0, R.Ay)(N.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE),
                  r = (0, k.O)(),
                  s = (0, y.A)(null != r && null != r.expiresAt ? r.expiresAt.getTime() : 0);
              return null == r ||
                  r.discount?.planIds.some((e) => b.hd[e].skuId !== n) ||
                  !r.hasAcknowledged() ||
                  Object.values(s).every((e) => 0 === e)
                  ? null
                  : (0, i.jsxs)(j.T0, {
                        onClick: () => {
                            (t(),
                                x.default.track(q.HAw.APP_NOTICE_CLOSED, {
                                    notice_type: q.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
                                }));
                        },
                        children: [
                            (0, i.jsx)(j.In, { children: (0, G.rn)(s, Number(r.discount.amount), (0, v.hm)(r)) }),
                            (0, i.jsx)(j.fY, {
                                onClick: function () {
                                    (0, L.A)({
                                        subscriptionTier: n,
                                        analyticsLocations: l,
                                        analyticsObject: {
                                            page: q.liQ.IN_APP,
                                            section: q.JJy.NOTIFICATION_BAR,
                                            object: q.ZSU.BUTTON_CTA,
                                        },
                                    });
                                },
                                text: g.intl.string(g.t.zLXssK),
                            }),
                        ],
                    });
          }
        : null;
var X = n(745299),
    w = n(354670),
    F = n(158045),
    H = n(826673),
    V = n(595529);
function K(e) {
    switch (e) {
        case q.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
            let t = w.A.getAlmostExpiringTrialOffersForReminder([b.pe.TIER_2]);
            return { cooldownDurationMs: (0, F.e1)(t[0]) };
        case q.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let n = w.A.getAlmostExpiringDiscountOffersForReminder([b.pe.TIER_2]);
            return { cooldownDurationMs: (0, F.e1)(n[0]) };
        case q.kqX.RIOT_MIGRATION:
        case q.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN:
        case q.kqX.BATTLENET_MIGRATION:
        case q.kqX.BATTLENET_LINKED_ROLE_DEPRECATION:
            return { cooldownDurationMs: 6048e5 };
        default:
            return { cooldownDurationMs: 1 / 0 };
    }
}
function Y(e) {
    let { dismissibleContent: t, noticeType: n } = e,
        r = l.useMemo(() => K(n), [n]),
        c = s()().add(5, "days").toDate(),
        [E, u] = (0, V.Bo)(t, r, p.m.NOTICE_BAR);
    if (null == E) return null;
    switch (E) {
        case a.M.NAGBAR_NOTICE_OFFER_EXPIRING:
            if (n === q.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
                return (0, i.jsx)(X.A, {
                    dismissCurrentNotice: () => {
                        (u(p.i.USER_DISMISS), (0, U.w)(c));
                    },
                    subscriptionTier: b.pe.TIER_2,
                });
            if (n === q.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
                return (0, i.jsx)(B, {
                    dismissCurrentNotice: () => {
                        (u(p.i.USER_DISMISS), (0, U.w)(c));
                    },
                    subscriptionTier: b.pe.TIER_2,
                });
            break;
        case a.M.RIOT_CONNECTION_DEPRECATION:
            return (0, i.jsx)(h, {
                noticeType: q.kqX.RIOT_MIGRATION,
                markAsDismissed: (e) => {
                    ((0, H.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_DISABLE), u(e));
                },
                recurringDismiss: (e) => {
                    u(e);
                },
                platformTypes: [q.fg2.LEAGUE_OF_LEGENDS, q.fg2.RIOT_GAMES],
                platformIconOverride: o.A.get(q.fg2.RIOT_GAMES),
            });
        case a.M.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return (0, i.jsx)(M.Ay, {
                noticeType: q.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
                markAsDismissed: (e) => {
                    ((0, H.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE), u(e));
                },
                recurringDismiss: (e) => {
                    u(e);
                },
                platformType: q.fg2.RIOT_GAMES,
            });
        case a.M.BATTLENET_CONNECTION_DEPRECATION:
            return (0, i.jsx)(h, {
                noticeType: q.kqX.BATTLENET_MIGRATION,
                markAsDismissed: (e) => {
                    ((0, H.Dr)(a.M.BATTLENET_CONNECTION_DEPRECATION_DISABLE), u(e));
                },
                recurringDismiss: (e) => {
                    u(e);
                },
                platformTypes: [q.fg2.BATTLENET],
                platformIconOverride: o.A.get(q.fg2.BATTLENET),
            });
        case a.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES:
            return (0, i.jsx)(M.Ay, {
                noticeType: q.kqX.BATTLENET_LINKED_ROLE_DEPRECATION,
                markAsDismissed: (e) => {
                    ((0, H.Dr)(a.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES_DISABLE), u(e));
                },
                recurringDismiss: (e) => {
                    u(e);
                },
                platformType: q.fg2.BATTLENET,
            });
    }
}
