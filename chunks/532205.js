n.d(t, { $: () => K, D: () => W });
var i = n(627968),
    l = n(64700),
    r = n(989349),
    s = n.n(r),
    a = n(554146),
    o = n(573648),
    E = n(503698),
    c = n.n(E),
    u = n(17928);
if (21552 == n.j) var _ = n(192308);
if (21552 == n.j) var A = n(417098);
if (21552 == n.j) var d = n(318254);
if (21552 == n.j) var T = n(661531);
var I = n(736653),
    N = n(793574),
    R = n(688810),
    S = n(429913),
    O = n(30370),
    C = n(772680),
    D = n(281020),
    P = n(206828),
    M = n(49999),
    p = n(566707),
    m = n(375708),
    f = n(846775);
let g =
    21552 == n.j
        ? function (e) {
              let {
                      markAsDismissed: t,
                      recurringDismiss: r,
                      applicationName: s,
                      platformTypes: a,
                      platformIconOverride: E,
                      noticeType: g,
                  } = e,
                  U = (0, u.bG)([O.A], () => O.A.getAccounts().find((e) => a.includes(e.type))?.type),
                  h = (0, I.Ay)(),
                  k = null != U ? o.A.get(U) : null,
                  y = k?.migrationData?.replacedBy,
                  L = (0, S.h)(y);
              s = s ?? L?.name;
              let { startAuthorization: x, canStartAuthorization: G, hasAlreadyLinked: j, fetched: q } = (0, P.RD)(L),
                  { analyticsLocations: v } = (0, R.Ay)(N.A.NOTICE),
                  X = null == E ? k : E;
              if (
                  (l.useEffect(() => {
                      j && q && (null != y && (0, D.M8)(y), t(M.i.INDIRECT_ACTION));
                  }, [j, q, t, y]),
                  null == L || !G || !q || j)
              )
                  return null;
              let b = () => {
                  (0, C.RI)({
                      applicationId: L.id,
                      onSuccess: () => {
                          (0, _.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([n.e("428"), n.e("89387")]).then(
                                  n.bind(n, 494886),
                              );
                              return (t) => (0, i.jsx)(e, { ...t });
                          });
                      },
                  });
              };
              return (0, i.jsxs)(A.$T, {
                  color: A.Hv.WARNING,
                  children: [
                      (0, i.jsx)(A.PM, {
                          noticeType: g,
                          onClick: () => {
                              t(M.i.USER_DISMISS);
                          },
                      }),
                      (0, i.jsx)("img", {
                          src: "light" === h ? X?.icon.blackSVG : X?.icon.whiteSVG,
                          alt: s,
                          className: c()(f.tV, f._R),
                      }),
                      m.intl.format(p.default.DfSSdL, {
                          connectionName: k?.name,
                          applicationName: s,
                          orbsIconHook: () =>
                              (0, i.jsx)(d.C, {
                                  size: "xs",
                                  style: { verticalAlign: "-0.22em" },
                                  color: T.A.colors.NOTICE_TEXT_WARNING,
                              }),
                          orbCount: 200,
                      }),
                      (0, i.jsx)(A.Z_, {
                          onClick: () => {
                              x({ analyticsLocations: v, onSuccess: b });
                          },
                          className: f.HE,
                          noticeType: g,
                          children: m.intl.string(p.default.ZeOhh9),
                      }),
                      (0, i.jsx)(A.zr, {
                          onClick: () => r(M.i.USER_DISMISS),
                          className: f.wX,
                          children: m.intl.string(p.default["MVB/Ab"]),
                      }),
                  ],
              });
          }
        : null;
var U = n(521790),
    h = n(408346),
    k = n(496431),
    y = n(532794),
    L = n(174459),
    x = n(422936),
    G = n(410516),
    j = n(635995),
    q = n(99462),
    v = n(202541),
    X = n(652215);
let b =
    21552 == n.j
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
                            t(),
                                L.default.track(X.HAw.APP_NOTICE_CLOSED, {
                                    notice_type: X.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
                                });
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
                                text: m.intl.string(m.t.zLXssK),
                            }),
                        ],
                    });
          }
        : null;
var B = n(745299),
    F = n(354670),
    V = n(428262),
    w = n(826673),
    H = n(595529),
    Y = n(942370);
function W(e) {
    switch (e) {
        case X.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
            let t = F.A.getAlmostExpiringTrialOffersForReminder([v.pe.TIER_2]);
            return { cooldownDurationMs: (0, V.e1)(t[0]) };
        case X.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let n = F.A.getAlmostExpiringDiscountOffersForReminder([v.pe.TIER_2]);
            return { cooldownDurationMs: (0, V.e1)(n[0]) };
        case X.kqX.RIOT_MIGRATION:
        case X.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return { cooldownDurationMs: 6048e5 };
        default:
            return { cooldownDurationMs: 1 / 0 };
    }
}
function K(e) {
    let { dismissibleContent: t, noticeType: n } = e,
        r = l.useMemo(() => W(n), [n]),
        E = s()().add(5, "days").toDate(),
        [c, u] = (0, H.Bo)(t, r, M.m.NOTICE_BAR);
    if (null == c) return null;
    switch (c) {
        case a.M.NAGBAR_NOTICE_OFFER_EXPIRING:
            if (n === X.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
                return (0, i.jsx)(B.A, {
                    dismissCurrentNotice: () => {
                        u(M.i.USER_DISMISS), (0, h.w)(E);
                    },
                    subscriptionTier: v.pe.TIER_2,
                });
            if (n === X.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
                return (0, i.jsx)(b, {
                    dismissCurrentNotice: () => {
                        u(M.i.USER_DISMISS), (0, h.w)(E);
                    },
                    subscriptionTier: v.pe.TIER_2,
                });
            break;
        case a.M.RIOT_CONNECTION_DEPRECATION:
            return (0, i.jsx)(g, {
                noticeType: X.kqX.RIOT_MIGRATION,
                markAsDismissed: (e) => {
                    (0, w.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_DISABLE), u(e);
                },
                recurringDismiss: (e) => {
                    u(e);
                },
                applicationName: m.intl.string(p.default["1S6oAo"]),
                platformTypes: [X.fg2.LEAGUE_OF_LEGENDS, X.fg2.RIOT_GAMES],
                platformIconOverride: o.A.get(X.fg2.RIOT_GAMES),
            });
        case a.M.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return (0, i.jsx)(U.A, {
                markAsDismissed: () => u(M.i.USER_DISMISS),
                deprecationDate: Y.af,
                platformType: X.fg2.RIOT_GAMES,
            });
    }
}
