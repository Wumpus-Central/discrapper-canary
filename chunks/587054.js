n.d(t, { $: () => W, D: () => Y });
var i = n(627968),
    l = n(64700),
    r = n(989349),
    s = n.n(r),
    a = n(554146),
    o = n(503698),
    E = n.n(o),
    c = n(17928);
if (21552 == n.j) var u = n(192308);
if (21552 == n.j) var _ = n(417098);
if (21552 == n.j) var A = n(318254);
if (21552 == n.j) var d = n(661531);
var T = n(736653),
    I = n(573648),
    N = n(793574),
    R = n(688810),
    S = n(429913),
    O = n(826673),
    C = n(30370),
    D = n(151073),
    P = n(281020),
    M = n(206828),
    p = n(652215),
    m = n(49999),
    f = n(230451),
    U = n(375708),
    g = n(448759);
let h =
    21552 == n.j
        ? function (e) {
              let { markAsDismissed: t, applicationName: r } = e,
                  s = [p.fg2.LEAGUE_OF_LEGENDS, p.fg2.RIOT_GAMES],
                  o = (0, c.bG)([C.A], () => C.A.getAccounts().find((e) => s.includes(e.type))?.type),
                  h = (0, T.Ay)(),
                  k = null != o ? I.A.get(o) : null,
                  y = k?.replacedBy,
                  L = (0, S.h)(y);
              r = r ?? L?.name;
              let { startAuthorization: x, canStartAuthorization: G, hasAlreadyLinked: j, fetched: q } = (0, M.RD)(L),
                  { analyticsLocations: v } = (0, R.Ay)(N.A.NOTICE);
              if (
                  (l.useEffect(() => {
                      j &&
                          q &&
                          (null != y && (0, P.M)(y),
                          (0, O.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_DISABLE),
                          t(m.i.INDIRECT_ACTION));
                  }, [j, q, t, y]),
                  null == L || !G || !q || j)
              )
                  return null;
              let X = () => {
                      (0, D.RI)({
                          applicationId: L.id,
                          onSuccess: () => {
                              (0, u.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([n.e("50163"), n.e("89387")]).then(
                                      n.bind(n, 494886),
                                  );
                                  return (t) => (0, i.jsx)(e, { ...t });
                              });
                          },
                      });
                  },
                  b = I.A.get(p.fg2.RIOT_GAMES);
              return (0, i.jsxs)(_.$T, {
                  color: _.Hv.WARNING,
                  children: [
                      (0, i.jsx)(_.PM, {
                          noticeType: p.kqX.RIOT_MIGRATION,
                          onClick: () => {
                              (0, O.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_DISABLE), t(m.i.USER_DISMISS);
                          },
                      }),
                      (0, i.jsx)("img", {
                          src: "light" === h ? b?.icon.blackSVG : b?.icon.whiteSVG,
                          alt: U.intl.string(f.default["1S6oAo"]),
                          className: E()(g.tV, g._R),
                      }),
                      U.intl.format(f.default.DfSSdL, {
                          connectionName: k?.name,
                          applicationName: r,
                          orbsIconHook: () =>
                              (0, i.jsx)(A.C, {
                                  size: "xs",
                                  style: { verticalAlign: "-0.22em" },
                                  color: d.A.colors.NOTICE_TEXT_WARNING,
                              }),
                          orbCount: 200,
                      }),
                      (0, i.jsx)(_.Z_, {
                          onClick: () => {
                              x({ analyticsLocations: v, onSuccess: X });
                          },
                          className: g.HE,
                          noticeType: p.kqX.RIOT_MIGRATION,
                          children: U.intl.string(f.default.ZeOhh9),
                      }),
                      (0, i.jsx)(_.zr, {
                          onClick: () => {
                              t(m.i.USER_DISMISS);
                          },
                          className: g.wX,
                          children: U.intl.string(f.default["MVB/Ab"]),
                      }),
                  ],
              });
          }
        : null;
var k = n(380786),
    y = n(408346),
    L = n(496431),
    x = n(532794),
    G = n(174459),
    j = n(422936),
    q = n(410516),
    v = n(635995),
    X = n(99462),
    b = n(202541);
let B =
    21552 == n.j
        ? function (e) {
              let { dismissCurrentNotice: t, subscriptionTier: n } = e,
                  { analyticsLocations: l } = (0, R.Ay)(N.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE),
                  r = (0, j.O)(),
                  s = (0, L.A)(null != r && null != r.expiresAt ? r.expiresAt.getTime() : 0);
              return null == r ||
                  r.discount?.planIds.some((e) => b.hd[e].skuId !== n) ||
                  !r.hasAcknowledged() ||
                  Object.values(s).every((e) => 0 === e)
                  ? null
                  : (0, i.jsxs)(v.T0, {
                        onClick: () => {
                            t(),
                                G.default.track(p.HAw.APP_NOTICE_CLOSED, {
                                    notice_type: p.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
                                });
                        },
                        children: [
                            (0, i.jsx)(v.In, { children: (0, X.rn)(s, Number(r.discount.amount), (0, q.hm)(r)) }),
                            (0, i.jsx)(v.fY, {
                                onClick: function () {
                                    (0, x.A)({
                                        subscriptionTier: n,
                                        analyticsLocations: l,
                                        analyticsObject: {
                                            page: p.liQ.IN_APP,
                                            section: p.JJy.NOTIFICATION_BAR,
                                            object: p.ZSU.BUTTON_CTA,
                                        },
                                    });
                                },
                                text: U.intl.string(U.t.zLXssK),
                            }),
                        ],
                    });
          }
        : null;
var F = n(745299),
    V = n(354670),
    w = n(428262),
    H = n(595529);
function Y(e) {
    switch (e) {
        case p.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
            let t = V.A.getAlmostExpiringTrialOffersForReminder([b.pe.TIER_2]);
            return { cooldownDurationMs: (0, w.e1)(t[0]) };
        case p.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let n = V.A.getAlmostExpiringDiscountOffersForReminder([b.pe.TIER_2]);
            return { cooldownDurationMs: (0, w.e1)(n[0]) };
        case p.kqX.RIOT_MIGRATION:
        case p.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return { cooldownDurationMs: 6048e5 };
        default:
            return { cooldownDurationMs: 1 / 0 };
    }
}
function W(e) {
    let { dismissibleContent: t, noticeType: n } = e,
        r = l.useMemo(() => Y(n), [n]),
        o = s()().add(5, "days").toDate(),
        [E, c] = (0, H.Bo)(t, r, m.m.NOTICE_BAR);
    if (null == E) return null;
    switch (E) {
        case a.M.NAGBAR_NOTICE_OFFER_EXPIRING:
            if (n === p.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
                return (0, i.jsx)(F.A, {
                    dismissCurrentNotice: () => {
                        c(m.i.USER_DISMISS), (0, y.w)(o);
                    },
                    subscriptionTier: b.pe.TIER_2,
                });
            if (n === p.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
                return (0, i.jsx)(B, {
                    dismissCurrentNotice: () => {
                        c(m.i.USER_DISMISS), (0, y.w)(o);
                    },
                    subscriptionTier: b.pe.TIER_2,
                });
            break;
        case a.M.RIOT_CONNECTION_DEPRECATION:
            return (0, i.jsx)(h, { markAsDismissed: c, applicationName: U.intl.string(f.default["1S6oAo"]) });
        case a.M.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return (0, i.jsx)(k.A, { markAsDismissed: () => c(m.i.USER_DISMISS) });
    }
}
