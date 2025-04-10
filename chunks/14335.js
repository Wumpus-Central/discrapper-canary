n.d(t, { D: () => D });
var r = n(200651),
    i = n(192379),
    l = n(793030),
    o = n(442837),
    a = n(704215),
    s = n(481060),
    c = n(230711),
    u = n(2052),
    d = n(906732),
    E = n(243778),
    _ = n(963249),
    I = n(594174),
    N = n(626135),
    O = n(74538),
    T = n(450839),
    S = n(163684),
    p = n(518638),
    A = n(748770),
    f = n(474936),
    R = n(981631),
    P = n(921944),
    C = n(388032),
    g = n(301307);
let D = () => {
    let e = (0, p.a0)(),
        t = (0, o.e7)([I.default], () => O.ZP.isPremiumExactly(I.default.getCurrentUser(), f.p9.TIER_2)),
        { enabled: n, getNitroCTA: D } = S.g.useExperiment(
            { location: 'OutboundPromotionNotice' },
            {
                autoTrackExposure: !1,
                disable: t
            }
        ),
        { enabled: m } = T.ru.useExperiment({ location: 'OutboundPromotionNotice' }, { autoTrackExposure: !1 }),
        { location: y } = (0, u.O)(),
        { analyticsLocations: h } = (0, d.ZP)(),
        b = i.useCallback(() => {
            var e, t;
            (0, _.Z)({
                subscriptionTier: O.ZP.getSkuIdForPremiumType(f.p9.TIER_2),
                analyticsLocations: h,
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
                    })({}, y)),
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
        }, [h, y]),
        U = i.useCallback(() => {
            c.Z.open(R.oAB.INVENTORY), A.ZP.dismissOutboundPromotionNotice();
        }, []),
        M = i.useCallback(() => {
            N.default.track(R.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), D ? b() : U();
        }, [D, b, U]);
    if (null == e) return null;
    let L = (e) =>
        (0, r.jsxs)(s.qXd, {
            color: s.DM8.PREMIUM_TIER_2,
            children: [
                (0, r.jsx)(s.RyX, {
                    noticeType: R.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        A.ZP.dismissOutboundPromotionNotice(), null !== e && e(P.L.USER_DISMISS);
                    }
                }),
                (0, r.jsx)(s.SrA, {
                    size: 'md',
                    color: 'currentColor',
                    className: g.premiumIcon
                }),
                n
                    ? D
                        ? (0, r.jsxs)(l.xv, {
                              variant: 'text-sm/normal',
                              className: g.text,
                              children: [C.NW.string(C.t['5JMiOj']), ' ', C.NW.format(C.t.fjSvsL, { onClick: U })]
                          })
                        : C.NW.string(C.t['B3a/cH'])
                    : C.NW.string(C.t['Pzh+Gx']),
                (0, r.jsx)(s.NoS, {
                    noticeType: R.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        M(), null !== e && e(P.L.TAKE_ACTION);
                    },
                    children: D ? C.NW.string(C.t.pj0XBA) : C.NW.string(C.t.jVcuVV)
                })
            ]
        });
    return m
        ? (0, r.jsx)(E.O1, {
              contentType: a.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR,
              newSnowflakeId: e,
              timeRecurringConfig: { cooldownDurationMs: 0 },
              groupName: P.R.NOTICE_BAR,
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: n } = e;
                  if (t === a.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return L(n);
              }
          })
        : L(null);
};
