n.d(t, { $: () => Y, D: () => K });
var i = n(477900),
    l = n(582128),
    r = n(536637),
    s = n.n(r),
    a = n(554146),
    o = n(573648),
    E = n(503698),
    c = n.n(E),
    u = n(17928);
if (221552 == n.j) var _ = n(192308);
if (221552 == n.j) var A = n(417098);
if (221552 == n.j) var T = n(318254);
if (221552 == n.j) var d = n(661531);
var I = n(736653),
    N = n(793574),
    R = n(688810),
    C = n(429913),
    O = n(30370),
    S = n(772680),
    D = n(281020),
    m = n(206828),
    P = n(49999),
    p = n(211180),
    f = n(375708),
    M = n(971656);
let g =
    221552 == n.j
        ? function (e) {
              let {
                      markAsDismissed: t,
                      recurringDismiss: r,
                      platformTypes: s,
                      platformIconOverride: a,
                      noticeType: E,
                  } = e,
                  g = (0, u.bG)([O.A], () => O.A.getAccounts().find((e) => s.includes(e.type))?.type),
                  h = (0, I.Ay)(),
                  U = null != g ? o.A.get(g) : null,
                  L = U?.migrationData?.replacedBy,
                  y = (0, C.h)(L),
                  k = y?.name,
                  { startAuthorization: x, canStartAuthorization: G, hasAlreadyLinked: j, fetched: v } = (0, m.RD)(y),
                  { analyticsLocations: q } = (0, R.Ay)(N.A.NOTICE),
                  X = null == a ? U : a;
              if (
                  (l.useEffect(() => {
                      j && v && (null != L && (0, D.M8)(L), t(P.i.INDIRECT_ACTION));
                  }, [j, v, t, L]),
                  null == y || !G || !v || j)
              )
                  return null;
              function b() {
                  null != y &&
                      (0, S.RI)({
                          applicationId: y.id,
                          onSuccess: () => {
                              (0, _.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([n.e("102807"), n.e("289387")]).then(
                                      n.bind(n, 494886),
                                  );
                                  return (t) => (0, i.jsx)(e, { ...t });
                              });
                          },
                      });
              }
              return (0, i.jsxs)(A.$T, {
                  color: A.Hv.WARNING,
                  children: [
                      (0, i.jsx)(A.PM, {
                          noticeType: E,
                          onClick: () => {
                              t(P.i.USER_DISMISS);
                          },
                      }),
                      (0, i.jsx)("img", {
                          src: "light" === h ? X?.icon.blackSVG : X?.icon.whiteSVG,
                          alt: k,
                          className: c()(M.tV, M.Y5),
                      }),
                      f.intl.format(p.default.qV9zT6, {
                          connectionName: U?.name,
                          orbsIconHook: () =>
                              (0, i.jsx)(T.C, {
                                  size: "xs",
                                  style: { verticalAlign: "-0.22em" },
                                  color: d.A.colors.NOTICE_TEXT_WARNING,
                              }),
                          orbCount: 200,
                      }),
                      (0, i.jsx)(A.Z_, {
                          onClick: function () {
                              x({ analyticsLocations: q, onSuccess: b });
                          },
                          className: M.NS,
                          noticeType: E,
                          children: f.intl.string(p.default.ZeOhh9),
                      }),
                      (0, i.jsx)(A.zr, {
                          onClick: () => r(P.i.USER_DISMISS),
                          className: M.go,
                          children: f.intl.string(p.default["8qJAeT"]),
                      }),
                  ],
              });
          }
        : null;
var h = n(521790),
    U = n(894591),
    L = n(496431),
    y = n(75678),
    k = n(174459),
    x = n(724651),
    G = n(511484),
    j = n(635995),
    v = n(99462),
    q = n(202541),
    X = n(652215);
let b =
    221552 == n.j
        ? function (e) {
              let { dismissCurrentNotice: t, subscriptionTier: n } = e,
                  { analyticsLocations: l } = (0, R.Ay)(N.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE),
                  r = (0, x.O)(),
                  s = (0, L.A)(null != r && null != r.expiresAt ? r.expiresAt.getTime() : 0);
              return null == r ||
                  r.discount?.planIds.some((e) => q.hd[e].skuId !== n) ||
                  !r.hasAcknowledged() ||
                  Object.values(s).every((e) => 0 === e)
                  ? null
                  : (0, i.jsxs)(j.T0, {
                        onClick: () => {
                            (t(),
                                k.default.track(X.HAw.APP_NOTICE_CLOSED, {
                                    notice_type: X.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
                                }));
                        },
                        children: [
                            (0, i.jsx)(j.In, { children: (0, v.rn)(s, Number(r.discount.amount), (0, G.hm)(r)) }),
                            (0, i.jsx)(j.fY, {
                                onClick: function () {
                                    (0, y.A)({
                                        subscriptionTier: n,
                                        analyticsLocations: l,
                                        analyticsObject: {
                                            page: X.liQ.IN_APP,
                                            section: X.JJy.NOTIFICATION_BAR,
                                            object: X.ZSU.BUTTON_CTA,
                                        },
                                    });
                                },
                                text: f.intl.string(f.t.zLXssK),
                            }),
                        ],
                    });
          }
        : null;
var B = n(745299),
    w = n(354670),
    F = n(158045),
    H = n(826673),
    V = n(595529);
function K(e) {
    switch (e) {
        case X.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
            let t = w.A.getAlmostExpiringTrialOffersForReminder([q.pe.TIER_2]);
            return { cooldownDurationMs: (0, F.e1)(t[0]) };
        case X.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let n = w.A.getAlmostExpiringDiscountOffersForReminder([q.pe.TIER_2]);
            return { cooldownDurationMs: (0, F.e1)(n[0]) };
        case X.kqX.RIOT_MIGRATION:
        case X.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN:
        case X.kqX.BATTLENET_MIGRATION:
        case X.kqX.BATTLENET_LINKED_ROLE_DEPRECATION:
            return { cooldownDurationMs: 6048e5 };
        default:
            return { cooldownDurationMs: 1 / 0 };
    }
}
function Y(e) {
    let { dismissibleContent: t, noticeType: n } = e,
        r = l.useMemo(() => K(n), [n]),
        E = s()().add(5, "days").toDate(),
        [c, u] = (0, V.Bo)(t, r, P.m.NOTICE_BAR);
    if (null == c) return null;
    switch (c) {
        case a.M.NAGBAR_NOTICE_OFFER_EXPIRING:
            if (n === X.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
                return (0, i.jsx)(B.A, {
                    dismissCurrentNotice: () => {
                        (u(P.i.USER_DISMISS), (0, U.w)(E));
                    },
                    subscriptionTier: q.pe.TIER_2,
                });
            if (n === X.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
                return (0, i.jsx)(b, {
                    dismissCurrentNotice: () => {
                        (u(P.i.USER_DISMISS), (0, U.w)(E));
                    },
                    subscriptionTier: q.pe.TIER_2,
                });
            break;
        case a.M.RIOT_CONNECTION_DEPRECATION:
            return (0, i.jsx)(g, {
                noticeType: X.kqX.RIOT_MIGRATION,
                markAsDismissed: (e) => {
                    ((0, H.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_DISABLE), u(e));
                },
                recurringDismiss: (e) => {
                    u(e);
                },
                platformTypes: [X.fg2.LEAGUE_OF_LEGENDS, X.fg2.RIOT_GAMES],
                platformIconOverride: o.A.get(X.fg2.RIOT_GAMES),
            });
        case a.M.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return (0, i.jsx)(h.Ay, {
                noticeType: X.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
                markAsDismissed: (e) => {
                    ((0, H.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE), u(e));
                },
                recurringDismiss: (e) => {
                    u(e);
                },
                platformType: X.fg2.RIOT_GAMES,
            });
        case a.M.BATTLENET_CONNECTION_DEPRECATION:
            return (0, i.jsx)(g, {
                noticeType: X.kqX.BATTLENET_MIGRATION,
                markAsDismissed: (e) => {
                    ((0, H.Dr)(a.M.BATTLENET_CONNECTION_DEPRECATION_DISABLE), u(e));
                },
                recurringDismiss: (e) => {
                    u(e);
                },
                platformTypes: [X.fg2.BATTLENET],
                platformIconOverride: o.A.get(X.fg2.BATTLENET),
            });
        case a.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES:
            return (0, i.jsx)(h.Ay, {
                noticeType: X.kqX.BATTLENET_LINKED_ROLE_DEPRECATION,
                markAsDismissed: (e) => {
                    ((0, H.Dr)(a.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES_DISABLE), u(e));
                },
                recurringDismiss: (e) => {
                    u(e);
                },
                platformType: X.fg2.BATTLENET,
            });
    }
}
