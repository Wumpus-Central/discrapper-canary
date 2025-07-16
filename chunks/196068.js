n.d(t, { c: () => C });
var r = n(255367),
    i = n(73800),
    l = n(793030),
    a = n(442837),
    o = n(704215),
    c = n(481060),
    s = n(230711),
    u = n(2052),
    d = n(906732),
    _ = n(963249),
    E = n(163684),
    I = n(518638),
    O = n(748770),
    p = n(594174),
    T = n(626135),
    S = n(74538),
    N = n(243778),
    f = n(921944),
    m = n(981631),
    A = n(474936),
    g = n(388032),
    R = n(134772);
let C = (e) => {
    let { dismissibleContent: t } = e,
        n = (0, I.a0)(),
        C = (0, a.e7)([p.default], () => S.ZP.isPremiumExactly(p.default.getCurrentUser(), A.p9.TIER_2)),
        { enabled: P, getNitroCTA: y } = E.g.useExperiment(
            { location: 'OutboundPromotionNotice' },
            {
                autoTrackExposure: !1,
                disable: C
            }
        ),
        { location: b } = (0, u.O)(),
        { analyticsLocations: D } = (0, d.ZP)(),
        h = i.useCallback(() => {
            var e, t;
            (0, _.Z)({
                subscriptionTier: S.ZP.getSkuIdForPremiumType(A.p9.TIER_2),
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
                            object: m.qAy.BUTTON_CTA,
                            objectType: m.Qqv.TIER_2
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
            (s.Z.open(m.oAB.INVENTORY), O.ZP.dismissOutboundPromotionNotice());
        }, []),
        M = i.useCallback(() => {
            (T.default.track(m.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), y ? h() : U());
        }, [y, h, U]);
    if (null == n) return null;
    let v = (e) =>
        (0, r.jsxs)(c.qXd, {
            color: c.DM8.PREMIUM_TIER_2,
            children: [
                (0, r.jsx)(c.RyX, {
                    noticeType: m.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        (O.ZP.dismissOutboundPromotionNotice(), null !== e && e(f.L.USER_DISMISS));
                    }
                }),
                (0, r.jsx)(c.SrA, {
                    size: 'md',
                    color: 'currentColor',
                    className: R.premiumIcon
                }),
                P
                    ? y
                        ? (0, r.jsxs)(l.xv, {
                              variant: 'text-sm/normal',
                              className: R.text,
                              children: [g.intl.string(g.t['5JMiOj']), ' ', g.intl.format(g.t.fjSvsL, { onClick: U })]
                          })
                        : g.intl.string(g.t['5JMiOj'])
                    : g.intl.string(g.t['Pzh+Gx']),
                (0, r.jsx)(c.NoS, {
                    noticeType: m.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        (M(), null !== e && e(f.L.TAKE_ACTION));
                    },
                    children: y ? g.intl.string(g.t.pj0XBA) : g.intl.string(g.t.jVcuVV)
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
            if (t === o.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return v(n);
        }
    });
};
