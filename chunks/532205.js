n.d(t, { $: () => K, D: () => Y });
var i = n(477900),
    l = n(582128),
    r = n(536637),
    s = n.n(r),
    a = n(554146),
    E = n(573648),
    o = n(503698),
    c = n.n(o),
    _ = n(17928);
if (221552 == n.j) var u = n(192308);
if (221552 == n.j) var A = n(417098);
if (221552 == n.j) var T = n(318254);
if (221552 == n.j) var I = n(661531);
var d = n(736653),
    N = n(793574),
    R = n(688810),
    O = n(429913),
    S = n(30370),
    C = n(772680),
    D = n(281020),
    P = n(206828),
    M = n(49999),
    m = n(211180),
    p = n(375708),
    f = n(971656);
let U =
    221552 == n.j
        ? function (e) {
              let {
                      markAsDismissed: t,
                      recurringDismiss: r,
                      platformTypes: s,
                      platformIconOverride: a,
                      noticeType: o,
                  } = e,
                  U = (0, _.bG)([S.A], () => S.A.getAccounts().find((e) => s.includes(e.type))?.type),
                  g = (0, d.Ay)(),
                  h = null != U ? E.A.get(U) : null,
                  k = h?.migrationData?.replacedBy,
                  y = (0, O.h)(k),
                  L = y?.name,
                  { startAuthorization: x, canStartAuthorization: G, hasAlreadyLinked: j, fetched: q } = (0, P.RD)(y),
                  { analyticsLocations: v } = (0, R.Ay)(N.A.NOTICE),
                  X = null == a ? h : a;
              if (
                  (l.useEffect(() => {
                      j && q && (null != k && (0, D.M8)(k), t(M.i.INDIRECT_ACTION));
                  }, [j, q, t, k]),
                  null == y || !G || !q || j)
              )
                  return null;
              function B() {
                  null != y &&
                      (0, C.RI)({
                          applicationId: y.id,
                          onSuccess: () => {
                              (0, u.openModalLazy)(async () => {
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
                          noticeType: o,
                          onClick: () => {
                              t(M.i.USER_DISMISS);
                          },
                      }),
                      (0, i.jsx)("img", {
                          src: "light" === g ? X?.icon.blackSVG : X?.icon.whiteSVG,
                          alt: L,
                          className: c()(f.tV, f.Y5),
                      }),
                      p.intl.format(m.default.qV9zT6, {
                          connectionName: h?.name,
                          orbsIconHook: () =>
                              (0, i.jsx)(T.C, {
                                  size: "xs",
                                  style: { verticalAlign: "-0.22em" },
                                  color: I.A.colors.NOTICE_TEXT_WARNING,
                              }),
                          orbCount: 200,
                      }),
                      (0, i.jsx)(A.Z_, {
                          onClick: function () {
                              x({ analyticsLocations: v, onSuccess: B });
                          },
                          className: f.NS,
                          noticeType: o,
                          children: p.intl.string(m.default.ZeOhh9),
                      }),
                      (0, i.jsx)(A.zr, {
                          onClick: () => r(M.i.USER_DISMISS),
                          className: f.go,
                          children: p.intl.string(m.default["8qJAeT"]),
                      }),
                  ],
              });
          }
        : null;
var g = n(521790),
    h = n(16432),
    k = n(496431),
    y = n(75678),
    L = n(174459),
    x = n(724651),
    G = n(511484),
    j = n(635995),
    q = n(99462),
    v = n(202541),
    X = n(652215);
let B =
    221552 == n.j
        ? function (e) {
              let { dismissCurrentNotice: t, subscriptionTier: n } = e,
                  { analyticsLocations: l } = (0, R.Ay)(N.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE),
                  r = (0, x.O)(),
                  s = (0, k.A)(null != r && null != r.expiresAt ? r.expiresAt.getTime() : 0);
              return null == r ||
                  r.discount?.planIds.some((e) => v.hd[e].skuId !== n) ||
                  !r.hasAcknowledged() ||
                  Object.values(s).every((e) => 0 === e)
                  ? null
                  : (0, i.jsxs)(j.T0, {
                        onClick: () => {
                            (t(),
                                L.default.track(X.HAw.APP_NOTICE_CLOSED, {
                                    notice_type: X.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
                                }));
                        },
                        children: [
                            (0, i.jsx)(j.In, { children: (0, q.rn)(s, Number(r.discount.amount), (0, G.hm)(r)) }),
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
                                text: p.intl.string(p.t.zLXssK),
                            }),
                        ],
                    });
          }
        : null;
var b = n(745299),
    F = n(354670),
    V = n(158045),
    H = n(826673),
    w = n(595529);
function Y(e) {
    switch (e) {
        case X.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
            let t = F.A.getAlmostExpiringTrialOffersForReminder([v.pe.TIER_2]);
            return { cooldownDurationMs: (0, V.e1)(t[0]) };
        case X.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let n = F.A.getAlmostExpiringDiscountOffersForReminder([v.pe.TIER_2]);
            return { cooldownDurationMs: (0, V.e1)(n[0]) };
        case X.kqX.RIOT_MIGRATION:
        case X.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN:
        case X.kqX.BATTLENET_MIGRATION:
        case X.kqX.BATTLENET_LINKED_ROLE_DEPRECATION:
            return { cooldownDurationMs: 6048e5 };
        default:
            return { cooldownDurationMs: 1 / 0 };
    }
}
function K(e) {
    let { dismissibleContent: t, noticeType: n } = e,
        r = l.useMemo(() => Y(n), [n]),
        o = s()().add(5, "days").toDate(),
        [c, _] = (0, w.Bo)(t, r, M.m.NOTICE_BAR);
    if (null == c) return null;
    switch (c) {
        case a.M.NAGBAR_NOTICE_OFFER_EXPIRING:
            if (n === X.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
                return (0, i.jsx)(b.A, {
                    dismissCurrentNotice: () => {
                        (_(M.i.USER_DISMISS), (0, h.w)(o));
                    },
                    subscriptionTier: v.pe.TIER_2,
                });
            if (n === X.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
                return (0, i.jsx)(B, {
                    dismissCurrentNotice: () => {
                        (_(M.i.USER_DISMISS), (0, h.w)(o));
                    },
                    subscriptionTier: v.pe.TIER_2,
                });
            break;
        case a.M.RIOT_CONNECTION_DEPRECATION:
            return (0, i.jsx)(U, {
                noticeType: X.kqX.RIOT_MIGRATION,
                markAsDismissed: (e) => {
                    ((0, H.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_DISABLE), _(e));
                },
                recurringDismiss: (e) => {
                    _(e);
                },
                platformTypes: [X.fg2.LEAGUE_OF_LEGENDS, X.fg2.RIOT_GAMES],
                platformIconOverride: E.A.get(X.fg2.RIOT_GAMES),
            });
        case a.M.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return (0, i.jsx)(g.Ay, {
                noticeType: X.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
                markAsDismissed: (e) => {
                    ((0, H.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE), _(e));
                },
                recurringDismiss: (e) => {
                    _(e);
                },
                platformType: X.fg2.RIOT_GAMES,
            });
        case a.M.BATTLENET_CONNECTION_DEPRECATION:
            return (0, i.jsx)(U, {
                noticeType: X.kqX.BATTLENET_MIGRATION,
                markAsDismissed: (e) => {
                    ((0, H.Dr)(a.M.BATTLENET_CONNECTION_DEPRECATION_DISABLE), _(e));
                },
                recurringDismiss: (e) => {
                    _(e);
                },
                platformTypes: [X.fg2.BATTLENET],
                platformIconOverride: E.A.get(X.fg2.BATTLENET),
            });
        case a.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES:
            return (0, i.jsx)(g.Ay, {
                noticeType: X.kqX.BATTLENET_LINKED_ROLE_DEPRECATION,
                markAsDismissed: (e) => {
                    ((0, H.Dr)(a.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES_DISABLE), _(e));
                },
                recurringDismiss: (e) => {
                    _(e);
                },
                platformType: X.fg2.BATTLENET,
            });
    }
}
