n.d(t, { $: () => Y, D: () => V });
var i = n(627968),
    l = n(64700),
    r = n(989349),
    s = n.n(r),
    a = n(554146),
    E = n(503698),
    o = n.n(E),
    c = n(17928);
if (21552 == n.j) var _ = n(192308);
if (21552 == n.j) var u = n(417098);
if (21552 == n.j) var A = n(318254);
if (21552 == n.j) var T = n(661531);
var d = n(736653),
    I = n(573648),
    N = n(793574),
    R = n(688810),
    S = n(429913),
    O = n(826673),
    C = n(30370),
    P = n(228366),
    D = n(46225),
    M = n(652215),
    p = n(49999),
    m = n(230451),
    h = n(375708),
    U = n(448759);
let g =
    21552 == n.j
        ? (e) => {
              let { markAsDismissed: t, applicationName: r } = e,
                  s = [M.fg2.LEAGUE_OF_LEGENDS, M.fg2.RIOT_GAMES],
                  E = (0, c.bG)([C.A], () => C.A.getAccounts().find((e) => s.includes(e.type))?.type),
                  g = (0, d.Ay)(),
                  f = null != E ? I.A.get(E) : null,
                  k = f?.replacedBy,
                  y = (0, S.h)(k);
              r = r ?? y?.name;
              let { startAuthorization: L, canStartAuthorization: x, hasAlreadyLinked: G, fetched: j } = (0, D.RD)(y),
                  { analyticsLocations: q } = (0, R.Ay)(N.A.NOTICE);
              if (
                  (l.useEffect(() => {
                      G &&
                          j &&
                          (null != k &&
                              P.h.dispatch({ type: "ACCOUNT_LINK_AUTHORIZATION_COMPLETED", applicationId: k }),
                          (0, O.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_DISABLE),
                          t(p.i.INDIRECT_ACTION));
                  }, [G, j, t, k]),
                  null == y || !x || !j || G)
              )
                  return null;
              let v = I.A.get(M.fg2.RIOT_GAMES);
              return (0, i.jsxs)(u.$T, {
                  color: u.Hv.WARNING,
                  children: [
                      (0, i.jsx)(u.PM, {
                          noticeType: M.kqX.RIOT_MIGRATION,
                          onClick: () => {
                              (0, O.Dr)(a.M.RIOT_CONNECTION_DEPRECATION_DISABLE), t(p.i.USER_DISMISS);
                          },
                      }),
                      (0, i.jsx)("img", {
                          src: "light" === g ? v?.icon.blackSVG : v?.icon.whiteSVG,
                          alt: h.intl.string(m.default["1S6oAo"]),
                          className: o()(U.tV, U._R),
                      }),
                      h.intl.format(m.default.DfSSdL, {
                          connectionName: f?.name,
                          applicationName: r,
                          orbsIconHook: () =>
                              (0, i.jsx)(A.C, {
                                  size: "xs",
                                  style: { verticalAlign: "-0.22em" },
                                  color: T.A.colors.NOTICE_TEXT_WARNING,
                              }),
                          orbCount: 200,
                      }),
                      (0, i.jsx)(u.Z_, {
                          onClick: () => {
                              var e;
                              L({ analyticsLocations: q }),
                                  (e = y.id),
                                  P.h.dispatch({
                                      type: "ACCOUNT_LINK_AUTHORIZATION_STARTED",
                                      applicationId: e,
                                      accountLinkCallbacks: {},
                                      claimIncentivizedAccountLinkingRewardCallbacks: {
                                          onSuccess: () =>
                                              (0, _.openModalLazy)(async () => {
                                                  let { default: e } = await Promise.all([
                                                      n.e("50163"),
                                                      n.e("89387"),
                                                  ]).then(n.bind(n, 494886));
                                                  return (t) => (0, i.jsx)(e, { ...t });
                                              }),
                                      },
                                  });
                          },
                          className: U.HE,
                          noticeType: M.kqX.RIOT_MIGRATION,
                          children: h.intl.string(m.default.ZeOhh9),
                      }),
                      (0, i.jsx)(u.zr, {
                          onClick: () => {
                              t(p.i.USER_DISMISS);
                          },
                          className: U.wX,
                          children: h.intl.string(m.default["MVB/Ab"]),
                      }),
                  ],
              });
          }
        : null;
var f = n(380786),
    k = n(988672),
    y = n(496431),
    L = n(532794),
    x = n(174459),
    G = n(422936),
    j = n(410516),
    q = n(635995),
    v = n(99462),
    X = n(788868);
let b =
    21552 == n.j
        ? function (e) {
              let { dismissCurrentNotice: t, subscriptionTier: n } = e,
                  { analyticsLocations: l } = (0, R.Ay)(N.A.PREMIUM_TIER_2_DISCOUNT_ENDING_NOTICE),
                  r = (0, G.O)(),
                  s = (0, y.A)(null != r && null != r.expiresAt ? r.expiresAt.getTime() : 0);
              return null == r ||
                  r.discount?.planIds.some((e) => X.hd[e].skuId !== n) ||
                  !r.hasAcknowledged() ||
                  Object.values(s).every((e) => 0 === e)
                  ? null
                  : (0, i.jsxs)(q.T0, {
                        onClick: () => {
                            t(),
                                x.default.track(M.HAw.APP_NOTICE_CLOSED, {
                                    notice_type: M.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING,
                                });
                        },
                        children: [
                            (0, i.jsx)(q.In, { children: (0, v.rn)(s, Number(r.discount.amount), (0, j.hm)(r)) }),
                            (0, i.jsx)(q.fY, {
                                onClick: () => {
                                    (0, L.A)({
                                        subscriptionTier: n,
                                        analyticsLocations: l,
                                        analyticsObject: {
                                            page: M.liQ.IN_APP,
                                            section: M.JJy.NOTIFICATION_BAR,
                                            object: M.ZSU.BUTTON_CTA,
                                        },
                                    });
                                },
                                text: h.intl.string(h.t.zLXssK),
                            }),
                        ],
                    });
          }
        : null;
var B = n(745299),
    F = n(354670),
    w = n(428262),
    H = n(595529);
function V(e) {
    switch (e) {
        case M.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
            let t = F.A.getAlmostExpiringTrialOffersForReminder([X.pe.TIER_2]);
            return { cooldownDurationMs: (0, w.e1)(t[0]) };
        case M.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let n = F.A.getAlmostExpiringDiscountOffersForReminder([X.pe.TIER_2]);
            return { cooldownDurationMs: (0, w.e1)(n[0]) };
        case M.kqX.RIOT_MIGRATION:
        case M.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return { cooldownDurationMs: 6048e5 };
        default:
            return { cooldownDurationMs: 1 / 0 };
    }
}
let Y = (e) => {
    let { dismissibleContent: t, noticeType: n } = e,
        r = l.useMemo(() => V(n), [n]),
        E = s()().add(5, "days").toDate(),
        [o, c] = (0, H.Bo)(t, r, p.m.NOTICE_BAR);
    if (null == o) return null;
    switch (o) {
        case a.M.NAGBAR_NOTICE_OFFER_EXPIRING:
            if (n === M.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
                return (0, i.jsx)(B.A, {
                    dismissCurrentNotice: () => {
                        c(p.i.USER_DISMISS), (0, k.w)(E);
                    },
                    subscriptionTier: X.pe.TIER_2,
                });
            if (n === M.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
                return (0, i.jsx)(b, {
                    dismissCurrentNotice: () => {
                        c(p.i.USER_DISMISS), (0, k.w)(E);
                    },
                    subscriptionTier: X.pe.TIER_2,
                });
            break;
        case a.M.RIOT_CONNECTION_DEPRECATION:
            return (0, i.jsx)(g, { markAsDismissed: c, applicationName: h.intl.string(m.default["1S6oAo"]) });
        case a.M.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return (0, i.jsx)(f.A, { markAsDismissed: () => c(p.i.USER_DISMISS) });
    }
};
