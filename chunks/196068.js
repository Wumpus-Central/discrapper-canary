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
    I = n(163684),
    O = n(518638),
    N = n(748770),
    T = n(594174),
    S = n(626135),
    p = n(74538),
    A = n(243778),
    f = n(921944),
    R = n(981631),
    P = n(474936),
    C = n(388032),
    D = n(134772);
let g = (e) => {
    let { dismissibleContent: t } = e,
        n = (0, O.a0)(),
        g = (0, o.e7)([T.default], () => p.ZP.isPremiumExactly(T.default.getCurrentUser(), P.p9.TIER_2)),
        { enabled: y, getNitroCTA: m } = I.g.useExperiment(
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
                            object: R.qAy.BUTTON_CTA,
                            objectType: R.Qqv.TIER_2
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
            c.Z.open(R.oAB.INVENTORY), N.ZP.dismissOutboundPromotionNotice();
        }, []),
        L = i.useCallback(() => {
            S.default.track(R.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), m ? M() : Z();
        }, [m, M, Z]);
    if (null == n) return null;
    let v = (e) =>
        (0, r.jsxs)(s.qXd, {
            color: s.DM8.PREMIUM_TIER_2,
            children: [
                (0, r.jsx)(s.RyX, {
                    noticeType: R.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        N.ZP.dismissOutboundPromotionNotice(), null !== e && e(f.L.USER_DISMISS);
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
                              children: [C.NW.string(C.t['5JMiOj']), ' ', C.NW.format(C.t.fjSvsL, { onClick: Z })]
                          })
                        : C.NW.string(C.t['5JMiOj'])
                    : C.NW.string(C.t['Pzh+Gx']),
                (0, r.jsx)(s.NoS, {
                    noticeType: R.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        L(), null !== e && e(f.L.TAKE_ACTION);
                    },
                    children: m ? C.NW.string(C.t.pj0XBA) : C.NW.string(C.t.jVcuVV)
                })
            ]
        });
    return h
        ? (0, r.jsx)(A.O1, {
              contentType: t,
              newSnowflakeId: n,
              timeRecurringConfig: { cooldownDurationMs: 0 },
              groupName: f.R.NOTICE_BAR,
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: n } = e;
                  if (t === a.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return v(n);
              }
          })
        : v(null);
};
