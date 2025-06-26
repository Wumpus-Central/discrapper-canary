n.d(t, { c: () => f });
var r = n(255367),
    i = n(73800),
    l = n(793030),
    o = n(442837),
    a = n(704215),
    s = n(481060),
    c = n(230711),
    u = n(2052),
    E = n(906732),
    d = n(963249),
    _ = n(163684),
    O = n(518638),
    I = n(748770),
    T = n(594174),
    N = n(626135),
    S = n(74538),
    p = n(243778),
    R = n(921944),
    A = n(981631),
    P = n(474936),
    C = n(388032),
    D = n(134772);
let f = (e) => {
    let { dismissibleContent: t } = e,
        n = (0, O.a0)(),
        f = (0, o.e7)([T.default], () => S.ZP.isPremiumExactly(T.default.getCurrentUser(), P.p9.TIER_2)),
        { enabled: m, getNitroCTA: y } = _.g.useExperiment(
            { location: 'OutboundPromotionNotice' },
            {
                autoTrackExposure: !1,
                disable: f
            }
        ),
        { location: g } = (0, u.O)(),
        { analyticsLocations: h } = (0, E.ZP)(),
        U = i.useCallback(() => {
            var e, t;
            (0, d.Z)({
                subscriptionTier: S.ZP.getSkuIdForPremiumType(P.p9.TIER_2),
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
                    })({}, g)),
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
        }, [h, g]),
        b = i.useCallback(() => {
            c.Z.open(A.oAB.INVENTORY), I.ZP.dismissOutboundPromotionNotice();
        }, []),
        M = i.useCallback(() => {
            N.default.track(A.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), y ? U() : b();
        }, [y, U, b]);
    if (null == n) return null;
    let k = (e) =>
        (0, r.jsxs)(s.qXd, {
            color: s.DM8.PREMIUM_TIER_2,
            children: [
                (0, r.jsx)(s.RyX, {
                    noticeType: A.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        I.ZP.dismissOutboundPromotionNotice(), null !== e && e(R.L.USER_DISMISS);
                    }
                }),
                (0, r.jsx)(s.SrA, {
                    size: 'md',
                    color: 'currentColor',
                    className: D.premiumIcon
                }),
                m
                    ? y
                        ? (0, r.jsxs)(l.xv, {
                              variant: 'text-sm/normal',
                              className: D.text,
                              children: [C.intl.string(C.t['5JMiOj']), ' ', C.intl.format(C.t.fjSvsL, { onClick: b })]
                          })
                        : C.intl.string(C.t['5JMiOj'])
                    : C.intl.string(C.t['Pzh+Gx']),
                (0, r.jsx)(s.NoS, {
                    noticeType: A.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        M(), null !== e && e(R.L.TAKE_ACTION);
                    },
                    children: y ? C.intl.string(C.t.pj0XBA) : C.intl.string(C.t.jVcuVV)
                })
            ]
        });
    return (0, r.jsx)(p.O1, {
        contentType: t,
        newSnowflakeId: n,
        timeRecurringConfig: { cooldownDurationMs: 0 },
        groupName: R.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            if (t === a.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return k(n);
        }
    });
};
