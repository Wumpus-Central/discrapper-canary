n.d(t, { c: () => g });
var r = n(200651),
    i = n(192379),
    l = n(793030),
    o = n(442837),
    a = n(704215),
    s = n(481060),
    c = n(230711),
    u = n(2052),
    d = n(906732),
    E = n(963249),
    _ = n(450839),
    O = n(163684),
    I = n(518638),
    T = n(748770),
    N = n(594174),
    S = n(626135),
    p = n(74538),
    R = n(243778),
    A = n(921944),
    f = n(981631),
    P = n(474936),
    C = n(388032),
    D = n(134772);
let g = (e) => {
    let { dismissibleContent: t } = e,
        n = (0, I.a0)(),
        g = (0, o.e7)([N.default], () => p.ZP.isPremiumExactly(N.default.getCurrentUser(), P.p9.TIER_2)),
        { enabled: y, getNitroCTA: m } = O.g.useExperiment(
            { location: 'OutboundPromotionNotice' },
            {
                autoTrackExposure: !1,
                disable: g
            }
        ),
        { enabled: h } = _.ru.useExperiment({ location: 'OutboundPromotionNotice' }, { autoTrackExposure: !1 }),
        { location: b } = (0, u.O)(),
        { analyticsLocations: U } = (0, d.ZP)(),
        M = i.useCallback(() => {
            var e, t;
            (0, E.Z)({
                subscriptionTier: p.ZP.getSkuIdForPremiumType(P.p9.TIER_2),
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
                    })({}, b)),
                    (t = t =
                        {
                            object: f.qAy.BUTTON_CTA,
                            objectType: f.Qqv.TIER_2
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
        }, [U, b]),
        Z = i.useCallback(() => {
            c.Z.open(f.oAB.INVENTORY), T.ZP.dismissOutboundPromotionNotice();
        }, []),
        L = i.useCallback(() => {
            S.default.track(f.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), m ? M() : Z();
        }, [m, M, Z]);
    if (null == n) return null;
    let v = (e) =>
        (0, r.jsxs)(s.qXd, {
            color: s.DM8.PREMIUM_TIER_2,
            children: [
                (0, r.jsx)(s.RyX, {
                    noticeType: f.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        T.ZP.dismissOutboundPromotionNotice(), null !== e && e(A.L.USER_DISMISS);
                    }
                }),
                (0, r.jsx)(s.SrA, {
                    size: 'md',
                    color: 'currentColor',
                    className: D.premiumIcon
                }),
                y
                    ? m
                        ? (0, r.jsxs)(l.xv, {
                              variant: 'text-sm/normal',
                              className: D.text,
                              children: [C.intl.string(C.t['5JMiOj']), ' ', C.intl.format(C.t.fjSvsL, { onClick: Z })]
                          })
                        : C.intl.string(C.t['5JMiOj'])
                    : C.intl.string(C.t['Pzh+Gx']),
                (0, r.jsx)(s.NoS, {
                    noticeType: f.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        L(), null !== e && e(A.L.TAKE_ACTION);
                    },
                    children: m ? C.intl.string(C.t.pj0XBA) : C.intl.string(C.t.jVcuVV)
                })
            ]
        });
    return h
        ? (0, r.jsx)(R.O1, {
              contentType: t,
              newSnowflakeId: n,
              timeRecurringConfig: { cooldownDurationMs: 0 },
              groupName: A.R.NOTICE_BAR,
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: n } = e;
                  if (t === a.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return v(n);
              }
          })
        : v(null);
};
