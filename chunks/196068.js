n.d(t, { c: () => R });
var r = n(255367),
    i = n(73800),
    l = n(793030),
    a = n(442837),
    o = n(704215),
    s = n(481060),
    c = n(230711),
    u = n(2052),
    d = n(906732),
    _ = n(963249),
    E = n(163684),
    p = n(518638),
    O = n(748770),
    S = n(594174),
    I = n(626135),
    f = n(74538),
    h = n(243778),
    T = n(921944),
    m = n(981631),
    g = n(474936),
    N = n(388032),
    y = n(134772);
let R = (e) => {
    let { dismissibleContent: t } = e,
        n = (0, p.a0)(),
        R = (0, a.e7)([S.default], () => f.ZP.isPremiumExactly(S.default.getCurrentUser(), g.p9.TIER_2)),
        { enabled: A, getNitroCTA: b } = E.g.useExperiment(
            { location: 'OutboundPromotionNotice' },
            {
                autoTrackExposure: !1,
                disable: R
            }
        ),
        { location: C } = (0, u.O)(),
        { analyticsLocations: P } = (0, d.ZP)(),
        D = i.useCallback(() => {
            var e, t;
            (0, _.Z)({
                subscriptionTier: f.ZP.getSkuIdForPremiumType(g.p9.TIER_2),
                analyticsLocations: P,
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
                    })({}, C)),
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
        }, [P, C]),
        M = i.useCallback(() => {
            (c.Z.open(m.oAB.INVENTORY), O.ZP.dismissOutboundPromotionNotice());
        }, []),
        j = i.useCallback(() => {
            (I.default.track(m.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), b ? D() : M());
        }, [b, D, M]);
    if (null == n) return null;
    let x = (e) =>
        (0, r.jsxs)(s.qXd, {
            color: s.DM8.PREMIUM_TIER_2,
            children: [
                (0, r.jsx)(s.RyX, {
                    noticeType: m.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        (O.ZP.dismissOutboundPromotionNotice(), null !== e && e(T.L.USER_DISMISS));
                    }
                }),
                (0, r.jsx)(s.SrA, {
                    size: 'md',
                    color: 'currentColor',
                    className: y.premiumIcon
                }),
                A
                    ? b
                        ? (0, r.jsxs)(l.xv, {
                              variant: 'text-sm/normal',
                              className: y.text,
                              children: [N.intl.string(N.t['5JMiOj']), ' ', N.intl.format(N.t.fjSvsL, { onClick: M })]
                          })
                        : N.intl.string(N.t['5JMiOj'])
                    : N.intl.string(N.t['Pzh+Gx']),
                (0, r.jsx)(s.NoS, {
                    noticeType: m.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        (j(), null !== e && e(T.L.TAKE_ACTION));
                    },
                    children: b ? N.intl.string(N.t.pj0XBA) : N.intl.string(N.t.jVcuVV)
                })
            ]
        });
    return (0, r.jsx)(h.O1, {
        contentType: t,
        newSnowflakeId: n,
        timeRecurringConfig: { cooldownDurationMs: 0 },
        groupName: T.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            if (t === o.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return x(n);
        }
    });
};
