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
    E = n(163684),
    O = n(518638),
    I = n(748770),
    T = n(594174),
    p = n(626135),
    S = n(74538),
    N = n(243778),
    f = n(921944),
    A = n(981631),
    m = n(474936),
    R = n(388032),
    g = n(134772);
let P = (e) => {
    let { dismissibleContent: t } = e,
        n = (0, O.a0)(),
        P = (0, o.e7)([T.default], () => S.ZP.isPremiumExactly(T.default.getCurrentUser(), m.p9.TIER_2)),
        { enabled: C, getNitroCTA: y } = E.g.useExperiment(
            { location: 'OutboundPromotionNotice' },
            {
                autoTrackExposure: !1,
                disable: P
            }
        ),
        { location: b } = (0, u.O)(),
        { analyticsLocations: D } = (0, d.ZP)(),
        h = i.useCallback(() => {
            var e, t;
            (0, _.Z)({
                subscriptionTier: S.ZP.getSkuIdForPremiumType(m.p9.TIER_2),
                analyticsLocations: D,
                analyticsObject:
                    ((e = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    ((r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r));
                                }));
                        }
                        return e;
                    })({}, b)),
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
        }, [D, b]),
        U = i.useCallback(() => {
            (s.Z.open(A.oAB.INVENTORY), I.ZP.dismissOutboundPromotionNotice());
        }, []),
        M = i.useCallback(() => {
            (p.default.track(A.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), y ? h() : U());
        }, [y, h, U]);
    if (null == n) return null;
    let v = (e) =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.PREMIUM_TIER_2,
            children: [
                (0, r.jsx)(c.RyX, {
                    noticeType: A.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        (I.ZP.dismissOutboundPromotionNotice(), null !== e && e(f.L.USER_DISMISS));
                    }
                }),
                (0, r.jsx)(c.SrA, {
                    size: 'md',
                    color: 'currentColor',
                    className: g.premiumIcon
                }),
                C
                    ? y
                        ? (0, r.jsxs)(l.xv, {
                              variant: 'text-sm/normal',
                              className: g.text,
                              children: [R.intl.string(R.t['5JMiOj']), ' ', R.intl.format(R.t.fjSvsL, { onClick: U })]
                          })
                        : R.intl.string(R.t['5JMiOj'])
                    : R.intl.string(R.t['Pzh+Gx']),
                (0, r.jsx)(c.NoS, {
                    noticeType: A.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        (M(), null !== e && e(f.L.TAKE_ACTION));
                    },
                    children: y ? R.intl.string(R.t.pj0XBA) : R.intl.string(R.t.jVcuVV)
                })
            ]
        });
    return (0, r.jsx)(N.O1, {
        contentType: t,
        newSnowflakeId: n,
        timeRecurringConfig: { cooldownDurationMs: 0 },
        groupName: f.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            if (t === a.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return v(n);
        }
    });
};
