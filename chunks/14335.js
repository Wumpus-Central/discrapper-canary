n.d(t, { D: () => g });
var r = n(200651),
    i = n(192379),
    l = n(793030),
    o = n(442837),
    a = n(704215),
    s = n(481060),
    c = n(230711),
    u = n(2052),
    E = n(906732),
    d = n(243778),
    _ = n(963249),
    I = n(594174),
    N = n(626135),
    O = n(74538),
    T = n(450839),
    S = n(163684),
    p = n(518638),
    R = n(748770),
    A = n(474936),
    P = n(981631),
    f = n(921944),
    C = n(388032),
    D = n(301307);
let g = () => {
    let e = (0, p.a0)(),
        t = (0, o.e7)([I.default], () => O.ZP.isPremiumExactly(I.default.getCurrentUser(), A.p9.TIER_2)),
        { enabled: n, getNitroCTA: g } = S.g.useExperiment(
            { location: 'OutboundPromotionNotice' },
            {
                autoTrackExposure: !1,
                disable: t
            }
        ),
        { enabled: m } = T.ru.useExperiment({ location: 'OutboundPromotionNotice' }, { autoTrackExposure: !1 }),
        { location: y } = (0, u.O)(),
        { analyticsLocations: h } = (0, E.ZP)(),
        U = i.useCallback(() => {
            var e, t;
            (0, _.Z)({
                subscriptionTier: O.ZP.getSkuIdForPremiumType(A.p9.TIER_2),
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
                            object: P.qAy.BUTTON_CTA,
                            objectType: P.Qqv.TIER_2
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
        b = i.useCallback(() => {
            c.Z.open(P.oAB.INVENTORY), R.ZP.dismissOutboundPromotionNotice();
        }, []),
        M = i.useCallback(() => {
            N.default.track(P.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), g ? U() : b();
        }, [g, U, b]);
    if (null == e) return null;
    let L = (e) =>
        (0, r.jsxs)(s.qXd, {
            color: s.DM8.PREMIUM_TIER_2,
            children: [
                (0, r.jsx)(s.RyX, {
                    noticeType: P.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        R.ZP.dismissOutboundPromotionNotice(), null !== e && e(f.L.USER_DISMISS);
                    }
                }),
                (0, r.jsx)(s.SrA, {
                    size: 'md',
                    color: 'currentColor',
                    className: D.premiumIcon
                }),
                n
                    ? g
                        ? (0, r.jsxs)(l.xv, {
                              variant: 'text-sm/normal',
                              className: D.text,
                              children: [C.NW.string(C.t['5JMiOj']), ' ', C.NW.format(C.t.fjSvsL, { onClick: b })]
                          })
                        : C.NW.string(C.t['B3a/cH'])
                    : C.NW.string(C.t['Pzh+Gx']),
                (0, r.jsx)(s.NoS, {
                    noticeType: P.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        M(), null !== e && e(f.L.TAKE_ACTION);
                    },
                    children: g ? C.NW.string(C.t.pj0XBA) : C.NW.string(C.t.jVcuVV)
                })
            ]
        });
    return m
        ? (0, r.jsx)(d.O1, {
              contentType: a.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR,
              newSnowflakeId: e,
              timeRecurringConfig: { cooldownDurationMs: 0 },
              groupName: f.R.NOTICE_BAR,
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: n } = e;
                  if (t === a.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return L(n);
              }
          })
        : L(null);
};
