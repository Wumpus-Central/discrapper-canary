n.d(t, { $: () => W, D: () => Y });
var i = n(477900),
    l = n(582128),
    r = n(989349),
    s = n.n(r),
    a = n(554146),
    E = n(573648),
    o = n(503698),
    c = n.n(o),
    u = n(17928);
if (21552 == n.j) var _ = n(192308);
if (21552 == n.j) var A = n(417098);
if (21552 == n.j) var T = n(318254);
if (21552 == n.j) var d = n(661531);
var I = n(736653),
    N = n(793574),
    R = n(688810),
    S = n(429913),
    O = n(30370),
    C = n(772680),
    D = n(281020),
    m = n(206828),
    p = n(49999),
    P = n(230451),
    M = n(375708),
    f = n(789167);
let g =
    21552 == n.j
        ? function (e) {
              let {
                      markAsDismissed: t,
                      recurringDismiss: r,
                      applicationName: s,
                      platformTypes: a,
                      platformIconOverride: o,
                      noticeType: g,
                  } = e,
                  h = (0, u.bG)([O.A], () => O.A.getAccounts().find((e) => a.includes(e.type))?.type),
                  U = (0, I.Ay)(),
                  y = null != h ? E.A.get(h) : null,
                  L = y?.migrationData?.replacedBy,
                  k = (0, S.h)(L);
              s = s ?? k?.name;
              let { startAuthorization: x, canStartAuthorization: G, hasAlreadyLinked: v, fetched: j } = (0, m.RD)(k),
                  { analyticsLocations: q } = (0, R.Ay)(N.A.NOTICE),
                  X = null == o ? y : o;
              if (
                  (l.useEffect(() => {
                      v && j && (null != L && (0, D.M8)(L), t(p.i.INDIRECT_ACTION));
                  }, [v, j, t, L]),
                  null == k || !G || !j || v)
              )
                  return null;
              function b() {
                  null != k &&
                      (0, C.RI)({
                          applicationId: k.id,
                          onSuccess: () => {
                              (0, _.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([n.e("50163"), n.e("89387")]).then(
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
                          noticeType: g,
                          onClick: () => {
                              t(p.i.USER_DISMISS);
                          },
                      }),
                      (0, i.jsx)("img", {
                          src: "light" === U ? X?.icon.blackSVG : X?.icon.whiteSVG,
                          alt: s,
                          className: c()(f.tV, f.Y5),
                      }),
                      M.intl.format(P.default.DfSSdL, {
                          connectionName: y?.name,
                          applicationName: s,
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
                          className: f.NS,
                          noticeType: g,
                          children: M.intl.string(P.default.ZeOhh9),
                      }),
                      (0, i.jsx)(A.zr, {
                          onClick: () => r(p.i.USER_DISMISS),
                          className: f.go,
                          children: M.intl.string(P.default["8qJAeT"]),
                      }),
                  ],
              });
          }
        : null;
var h = n(521790),
    U = n(256106),
    y = n(496431),
    L = n(532794),
    k = n(174459),
    x = n(422936),
    G = n(410516),
    v = n(635995),
    j = n(99462),
    q = n(202541),
    X = n(652215);
let b =
    21552 == n.j
        ? function (e) {
              let { dismissCurrentNotice: t, subscriptionTier: n } = e,
                  { analyticsLocations: l } = (0, R.Ay)(N.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE),
                  r = (0, x.O)(),
                  s = (0, y.A)(null != r && null != r.expiresAt ? r.expiresAt.getTime() : 0);
              return null == r ||
                  r.discount?.planIds.some((e) => q.hd[e].skuId !== n) ||
                  !r.hasAcknowledged() ||
                  Object.values(s).every((e) => 0 === e)
                  ? null
                  : (0, i.jsxs)(v.T0, {
                        onClick: () => {
                            t(),
                                k.default.track(X.HAw.APP_NOTICE_CLOSED, {
                                    notice_type: X.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
                                });
                        },
                        children: [
                            (0, i.jsx)(v.In, { children: (0, j.rn)(s, Number(r.discount.amount), (0, G.hm)(r)) }),
                            (0, i.jsx)(v.fY, {
                                onClick: function () {
                                    (0, L.A)({
                                        subscriptionTier: n,
                                        analyticsLocations: l,
                                        analyticsObject: {
                                            page: X.liQ.IN_APP,
                                            section: X.JJy.NOTIFICATION_BAR,
                                            object: X.ZSU.BUTTON_CTA,
                                        },
                                    });
                                },
                                text: M.intl.string(M.t.zLXssK),
                            }),
                        ],
                    });
          }
        : null;
var B = n(745299),
    w = n(354670),
    F = n(428262),
    H = n(826673),
    V = n(595529),
    K = n(942370);
function Y(e) {
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
function W(e) {
    let { dismissibleContent: t, noticeType: n } = e,
        r = l.useMemo(() => Y(n), [n]),
        o = s()().add(5, "days").toDate(),
        [c, u] = (0, V.Bo)(t, r, p.m.NOTICE_BAR);
    if (null == c) return null;
    switch (c) {
        case a.M.NAGBAR_NOTICE_OFFER_EXPIRING:
            if (n === X.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
                return (0, i.jsx)(B.A, {
                    dismissCurrentNotice: () => {
                        u(p.i.USER_DISMISS), (0, U.w)(o);
                    },
                    subscriptionTier: q.pe.TIER_2,
                });
            if (n === X.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
                return (0, i.jsx)(b, {
                    dismissCurrentNotice: () => {
                        u(p.i.USER_DISMISS), (0, U.w)(o);
                    },
                    subscriptionTier: q.pe.TIER_2,
                });
            break;
        case a.M.RIOT_CONNECTION_DEPRECATION:
            return (0, i.jsx)(g, {
                noticeType: X.kqX.RIOT_MIGRATION,
                markAsDismissed: (e) => {
                    (0, H.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_DISABLE), u(e);
                },
                recurringDismiss: (e) => {
                    u(e);
                },
                applicationName: M.intl.string(P.default["1S6oAo"]),
                platformTypes: [X.fg2.LEAGUE_OF_LEGENDS, X.fg2.RIOT_GAMES],
                platformIconOverride: E.A.get(X.fg2.RIOT_GAMES),
            });
        case a.M.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return (0, i.jsx)(h.Ay, {
                noticeType: X.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
                markAsDismissed: (e) => {
                    (0, H.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE), u(e);
                },
                recurringDismiss: (e) => {
                    u(e);
                },
                deprecationDate: K.af,
                platformType: X.fg2.RIOT_GAMES,
            });
        case a.M.BATTLENET_CONNECTION_DEPRECATION:
            return (0, i.jsx)(g, {
                noticeType: X.kqX.BATTLENET_MIGRATION,
                markAsDismissed: (e) => {
                    (0, H.Dr)(a.M.BATTLENET_CONNECTION_DEPRECATION_DISABLE), u(e);
                },
                recurringDismiss: (e) => {
                    u(e);
                },
                platformTypes: [X.fg2.BATTLENET],
                platformIconOverride: E.A.get(X.fg2.BATTLENET),
            });
        case a.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES:
            return (0, i.jsx)(h.Ay, {
                noticeType: X.kqX.BATTLENET_LINKED_ROLE_DEPRECATION,
                markAsDismissed: (e) => {
                    (0, H.Dr)(a.M.BATTLENET_CONNECTION_DEPRECATION_LINKED_ROLES_DISABLE), u(e);
                },
                recurringDismiss: (e) => {
                    u(e);
                },
                deprecationDate: K.NX,
                platformType: X.fg2.BATTLENET,
            });
    }
}
