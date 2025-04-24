n.d(t, { c: () => m });
var r = n(200651),
    i = n(192379),
    l = n(793030),
    o = n(442837),
    a = n(704215),
    s = n(481060),
    c = n(230711),
    u = n(2052),
    E = n(906732),
    d = n(963249),
    _ = n(450839),
    I = n(163684),
    O = n(518638),
    T = n(748770),
    N = n(594174),
    S = n(626135),
    R = n(74538),
    A = n(243778),
    p = n(921944),
    P = n(981631),
    C = n(474936),
    D = n(388032),
    f = n(134772);
let m = (e) => {
    let { dismissibleContent: t } = e,
        n = (0, O.a0)(),
        m = (0, o.e7)([N.default], () => R.ZP.isPremiumExactly(N.default.getCurrentUser(), C.p9.TIER_2)),
        { enabled: g, getNitroCTA: y } = I.g.useExperiment(
            { location: 'OutboundPromotionNotice' },
            {
                autoTrackExposure: !1,
                disable: m
            }
        ),
        { enabled: U } = _.ru.useExperiment({ location: 'OutboundPromotionNotice' }, { autoTrackExposure: !1 }),
        { location: h } = (0, u.O)(),
        { analyticsLocations: b } = (0, E.ZP)(),
        M = i.useCallback(() => {
            var e, t;
            (0, d.Z)({
                subscriptionTier: R.ZP.getSkuIdForPremiumType(C.p9.TIER_2),
                analyticsLocations: b,
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
        }, [b, h]),
        k = i.useCallback(() => {
            c.Z.open(P.oAB.INVENTORY), T.ZP.dismissOutboundPromotionNotice();
        }, []),
        Z = i.useCallback(() => {
            S.default.track(P.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), y ? M() : k();
        }, [y, M, k]);
    if (null == n) return null;
    let j = (e) =>
        (0, r.jsxs)(s.qXd, {
            color: s.DM8.PREMIUM_TIER_2,
            children: [
                (0, r.jsx)(s.RyX, {
                    noticeType: P.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        T.ZP.dismissOutboundPromotionNotice(), null !== e && e(p.L.USER_DISMISS);
                    }
                }),
                (0, r.jsx)(s.SrA, {
                    size: 'md',
                    color: 'currentColor',
                    className: f.premiumIcon
                }),
                g
                    ? y
                        ? (0, r.jsxs)(l.xv, {
                              variant: 'text-sm/normal',
                              className: f.text,
                              children: [D.intl.string(D.t['5JMiOj']), ' ', D.intl.format(D.t.fjSvsL, { onClick: k })]
                          })
                        : D.intl.string(D.t['5JMiOj'])
                    : D.intl.string(D.t['Pzh+Gx']),
                (0, r.jsx)(s.NoS, {
                    noticeType: P.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        Z(), null !== e && e(p.L.TAKE_ACTION);
                    },
                    children: y ? D.intl.string(D.t.pj0XBA) : D.intl.string(D.t.jVcuVV)
                })
            ]
        });
    return U
        ? (0, r.jsx)(A.O1, {
              contentType: t,
              newSnowflakeId: n,
              timeRecurringConfig: { cooldownDurationMs: 0 },
              groupName: p.R.NOTICE_BAR,
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: n } = e;
                  if (t === a.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return j(n);
              }
          })
        : j(null);
};
