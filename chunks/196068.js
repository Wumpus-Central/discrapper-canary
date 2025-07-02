n.d(t, { c: () => R });
var i = n(255367),
    r = n(73800),
    l = n(793030),
    o = n(442837),
    s = n(704215),
    a = n(481060),
    c = n(230711),
    d = n(2052),
    u = n(906732),
    _ = n(963249),
    E = n(163684),
    h = n(518638),
    I = n(748770),
    p = n(594174),
    C = n(626135),
    T = n(74538),
    g = n(243778),
    O = n(921944),
    S = n(981631),
    N = n(474936),
    f = n(388032),
    A = n(134772);
let R = (e) => {
    let { dismissibleContent: t } = e,
        n = (0, h.a0)(),
        R = (0, o.e7)([p.default], () => T.ZP.isPremiumExactly(p.default.getCurrentUser(), N.p9.TIER_2)),
        { enabled: m, getNitroCTA: P } = E.g.useExperiment(
            { location: 'OutboundPromotionNotice' },
            {
                autoTrackExposure: !1,
                disable: R
            }
        ),
        { location: y } = (0, d.O)(),
        { analyticsLocations: b } = (0, u.ZP)(),
        D = r.useCallback(() => {
            var e, t;
            (0, _.Z)({
                subscriptionTier: T.ZP.getSkuIdForPremiumType(N.p9.TIER_2),
                analyticsLocations: b,
                analyticsObject:
                    ((e = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    ((i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = i));
                                }));
                        }
                        return e;
                    })({}, y)),
                    (t = t =
                        {
                            object: S.qAy.BUTTON_CTA,
                            objectType: S.Qqv.TIER_2
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(t)).forEach(function (n) {
                              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                          }),
                    e)
            });
        }, [b, y]),
        v = r.useCallback(() => {
            (c.Z.open(S.oAB.INVENTORY), I.ZP.dismissOutboundPromotionNotice());
        }, []),
        U = r.useCallback(() => {
            (C.default.track(S.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), P ? D() : v());
        }, [P, D, v]);
    if (null == n) return null;
    let M = (e) =>
        (0, i.jsxs)(a.qXd, {
            color: a.DM8.PREMIUM_TIER_2,
            children: [
                (0, i.jsx)(a.RyX, {
                    noticeType: S.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        (I.ZP.dismissOutboundPromotionNotice(), null !== e && e(O.L.USER_DISMISS));
                    }
                }),
                (0, i.jsx)(a.SrA, {
                    size: 'md',
                    color: 'currentColor',
                    className: A.premiumIcon
                }),
                m
                    ? P
                        ? (0, i.jsxs)(l.xv, {
                              variant: 'text-sm/normal',
                              className: A.text,
                              children: [f.intl.string(f.t['5JMiOj']), ' ', f.intl.format(f.t.fjSvsL, { onClick: v })]
                          })
                        : f.intl.string(f.t['5JMiOj'])
                    : f.intl.string(f.t['Pzh+Gx']),
                (0, i.jsx)(a.NoS, {
                    noticeType: S.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        (U(), null !== e && e(O.L.TAKE_ACTION));
                    },
                    children: P ? f.intl.string(f.t.pj0XBA) : f.intl.string(f.t.jVcuVV)
                })
            ]
        });
    return (0, i.jsx)(g.O1, {
        contentType: t,
        newSnowflakeId: n,
        timeRecurringConfig: { cooldownDurationMs: 0 },
        groupName: O.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            if (t === s.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return M(n);
        }
    });
};
