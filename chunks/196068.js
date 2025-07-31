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
    h = n(963249),
    _ = n(163684),
    E = n(518638),
    p = n(748770),
    I = n(594174),
    g = n(626135),
    f = n(74538),
    C = n(243778),
    O = n(921944),
    T = n(981631),
    S = n(474936),
    m = n(388032),
    N = n(134772);
let R = (e) => {
    let { dismissibleContent: t } = e,
        n = (0, E.a0)(),
        R = (0, o.e7)([I.default], () => f.ZP.isPremiumExactly(I.default.getCurrentUser(), S.p9.TIER_2)),
        { enabled: A, getNitroCTA: y } = _.g.useExperiment(
            { location: 'OutboundPromotionNotice' },
            {
                autoTrackExposure: !1,
                disable: R
            }
        ),
        { location: b } = (0, d.O)(),
        { analyticsLocations: P } = (0, u.ZP)(),
        D = r.useCallback(() => {
            var e, t;
            (0, h.Z)({
                subscriptionTier: f.ZP.getSkuIdForPremiumType(S.p9.TIER_2),
                analyticsLocations: P,
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
                    })({}, b)),
                    (t = t =
                        {
                            object: T.qAy.BUTTON_CTA,
                            objectType: T.Qqv.TIER_2
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
        }, [P, b]),
        v = r.useCallback(() => {
            (c.Z.open(T.oAB.INVENTORY), p.ZP.dismissOutboundPromotionNotice());
        }, []),
        M = r.useCallback(() => {
            (g.default.track(T.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), y ? D() : v());
        }, [y, D, v]);
    if (null == n) return null;
    let k = (e) =>
        (0, i.jsxs)(a.qXd, {
            color: a.DM8.PREMIUM_TIER_2,
            children: [
                (0, i.jsx)(a.RyX, {
                    noticeType: T.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        (p.ZP.dismissOutboundPromotionNotice(), null !== e && e(O.L.USER_DISMISS));
                    }
                }),
                (0, i.jsx)(a.SrA, {
                    size: 'md',
                    color: 'currentColor',
                    className: N.premiumIcon
                }),
                A
                    ? y
                        ? (0, i.jsxs)(l.xv, {
                              variant: 'text-sm/normal',
                              className: N.text,
                              children: [m.intl.string(m.t['5JMiOj']), ' ', m.intl.format(m.t.fjSvsL, { onClick: v })]
                          })
                        : m.intl.string(m.t['5JMiOj'])
                    : m.intl.string(m.t['Pzh+Gx']),
                (0, i.jsx)(a.NoS, {
                    noticeType: T.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        (M(), null !== e && e(O.L.TAKE_ACTION));
                    },
                    children: y ? m.intl.string(m.t.pj0XBA) : m.intl.string(m.t.jVcuVV)
                })
            ]
        });
    return (0, i.jsx)(C.O1, {
        contentType: t,
        newSnowflakeId: n,
        timeRecurringConfig: { cooldownDurationMs: 0 },
        groupName: O.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            if (t === s.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return k(n);
        }
    });
};
