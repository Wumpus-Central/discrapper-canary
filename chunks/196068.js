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
    I = n(163684),
    O = n(518638),
    T = n(748770),
    p = n(594174),
    N = n(626135),
    S = n(74538),
    A = n(243778),
    f = n(921944),
    R = n(981631),
    m = n(474936),
    C = n(388032),
    g = n(134772);
let P = (e) => {
    let { dismissibleContent: t } = e,
        n = (0, O.a0)(),
        P = (0, o.e7)([p.default], () => S.ZP.isPremiumExactly(p.default.getCurrentUser(), m.p9.TIER_2)),
        { enabled: y, getNitroCTA: D } = I.g.useExperiment(
            { location: 'OutboundPromotionNotice' },
            {
                autoTrackExposure: !1,
                disable: P
            }
        ),
        { enabled: b } = E.ru.useExperiment({ location: 'OutboundPromotionNotice' }, { autoTrackExposure: !1 }),
        { location: h } = (0, u.O)(),
        { analyticsLocations: U } = (0, d.ZP)(),
        M = i.useCallback(() => {
            var e, t;
            (0, _.Z)({
                subscriptionTier: S.ZP.getSkuIdForPremiumType(m.p9.TIER_2),
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
                    })({}, h)),
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
        }, [U, h]),
        k = i.useCallback(() => {
            s.Z.open(R.oAB.INVENTORY), T.ZP.dismissOutboundPromotionNotice();
        }, []),
        v = i.useCallback(() => {
            N.default.track(R.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), D ? M() : k();
        }, [D, M, k]);
    if (null == n) return null;
    let L = (e) =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.PREMIUM_TIER_2,
            children: [
                (0, r.jsx)(c.RyX, {
                    noticeType: R.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        T.ZP.dismissOutboundPromotionNotice(), null !== e && e(f.L.USER_DISMISS);
                    }
                }),
                (0, r.jsx)(c.SrA, {
                    size: 'md',
                    color: 'currentColor',
                    className: g.premiumIcon
                }),
                y
                    ? D
                        ? (0, r.jsxs)(l.xv, {
                              variant: 'text-sm/normal',
                              className: g.text,
                              children: [C.intl.string(C.t['5JMiOj']), ' ', C.intl.format(C.t.fjSvsL, { onClick: k })]
                          })
                        : C.intl.string(C.t['5JMiOj'])
                    : C.intl.string(C.t['Pzh+Gx']),
                (0, r.jsx)(c.NoS, {
                    noticeType: R.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        v(), null !== e && e(f.L.TAKE_ACTION);
                    },
                    children: D ? C.intl.string(C.t.pj0XBA) : C.intl.string(C.t.jVcuVV)
                })
            ]
        });
    return b
        ? (0, r.jsx)(A.O1, {
              contentType: t,
              newSnowflakeId: n,
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
