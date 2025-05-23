n.d(t, { c: () => P });
var r = n(255367),
    i = n(73800),
    l = n(793030),
    o = n(442837),
    a = n(704215),
    c = n(481060),
    s = n(230711),
    u = n(2052),
    d = n(906732),
    _ = n(963249),
    E = n(450839),
    O = n(163684),
    I = n(518638),
    p = n(748770),
    T = n(594174),
    S = n(626135),
    N = n(74538),
    f = n(243778),
    m = n(921944),
    A = n(981631),
    R = n(474936),
    g = n(388032),
    C = n(343759);
let P = (e) => {
    let { dismissibleContent: t } = e,
        n = (0, I.a0)(),
        P = (0, o.e7)([T.default], () => N.ZP.isPremiumExactly(T.default.getCurrentUser(), R.p9.TIER_2)),
        { enabled: y, getNitroCTA: b } = O.g.useExperiment(
            { location: 'OutboundPromotionNotice' },
            {
                autoTrackExposure: !1,
                disable: P
            }
        ),
        { enabled: h } = E.ru.useExperiment({ location: 'OutboundPromotionNotice' }, { autoTrackExposure: !1 }),
        { location: D } = (0, u.O)(),
        { analyticsLocations: U } = (0, d.ZP)(),
        M = i.useCallback(() => {
            var e, t;
            (0, _.Z)({
                subscriptionTier: N.ZP.getSkuIdForPremiumType(R.p9.TIER_2),
                analyticsLocations: U,
                analyticsObject:
                    ((e = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, D)),
                    (t = t =
                        {
                            object: A.qAy.BUTTON_CTA,
                            objectType: A.Qqv.TIER_2
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(t)).forEach(function (n) {
                              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                          }),
                    e)
            });
        }, [U, D]),
        v = i.useCallback(() => {
            s.Z.open(A.oAB.INVENTORY), p.ZP.dismissOutboundPromotionNotice();
        }, []),
        k = i.useCallback(() => {
            S.default.track(A.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), b ? M() : v();
        }, [b, M, v]);
    if (null == n) return null;
    let L = (e) =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.PREMIUM_TIER_2,
            children: [
                (0, r.jsx)(c.RyX, {
                    noticeType: A.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        p.ZP.dismissOutboundPromotionNotice(), null !== e && e(m.L.USER_DISMISS);
                    }
                }),
                (0, r.jsx)(c.SrA, {
                    size: 'md',
                    color: 'currentColor',
                    className: C.premiumIcon
                }),
                y
                    ? b
                        ? (0, r.jsxs)(l.xv, {
                              variant: 'text-sm/normal',
                              className: C.text,
                              children: [g.intl.string(g.t['5JMiOj']), ' ', g.intl.format(g.t.fjSvsL, { onClick: v })]
                          })
                        : g.intl.string(g.t['5JMiOj'])
                    : g.intl.string(g.t['Pzh+Gx']),
                (0, r.jsx)(c.NoS, {
                    noticeType: A.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        k(), null !== e && e(m.L.TAKE_ACTION);
                    },
                    children: b ? g.intl.string(g.t.pj0XBA) : g.intl.string(g.t.jVcuVV)
                })
            ]
        });
    return h
        ? (0, r.jsx)(f.O1, {
              contentType: t,
              newSnowflakeId: n,
              timeRecurringConfig: { cooldownDurationMs: 0 },
              groupName: m.R.NOTICE_BAR,
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: n } = e;
                  if (t === a.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return L(n);
              }
          })
        : L(null);
};
