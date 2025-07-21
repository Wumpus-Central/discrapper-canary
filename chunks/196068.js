n.d(t, { c: () => m });
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
    h = n(163684),
    E = n(518638),
    I = n(748770),
    p = n(594174),
    C = n(626135),
    O = n(74538),
    T = n(243778),
    g = n(921944),
    S = n(981631),
    f = n(474936),
    N = n(388032),
    R = n(134772);
let m = (e) => {
    let { dismissibleContent: t } = e,
        n = (0, E.a0)(),
        m = (0, o.e7)([p.default], () => O.ZP.isPremiumExactly(p.default.getCurrentUser(), f.p9.TIER_2)),
        { enabled: A, getNitroCTA: y } = h.g.useExperiment(
            { location: 'OutboundPromotionNotice' },
            {
                autoTrackExposure: !1,
                disable: m
            }
        ),
        { location: P } = (0, d.O)(),
        { analyticsLocations: b } = (0, u.ZP)(),
        D = r.useCallback(() => {
            var e, t;
            (0, _.Z)({
                subscriptionTier: O.ZP.getSkuIdForPremiumType(f.p9.TIER_2),
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
                    })({}, P)),
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
        }, [b, P]),
        v = r.useCallback(() => {
            (c.Z.open(S.oAB.INVENTORY), I.ZP.dismissOutboundPromotionNotice());
        }, []),
        U = r.useCallback(() => {
            (C.default.track(S.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), y ? D() : v());
        }, [y, D, v]);
    if (null == n) return null;
    let M = (e) =>
        (0, i.jsxs)(a.qXd, {
            color: a.DM8.PREMIUM_TIER_2,
            children: [
                (0, i.jsx)(a.RyX, {
                    noticeType: S.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        (I.ZP.dismissOutboundPromotionNotice(), null !== e && e(g.L.USER_DISMISS));
                    }
                }),
                (0, i.jsx)(a.SrA, {
                    size: 'md',
                    color: 'currentColor',
                    className: R.premiumIcon
                }),
                A
                    ? y
                        ? (0, i.jsxs)(l.xv, {
                              variant: 'text-sm/normal',
                              className: R.text,
                              children: [N.intl.string(N.t['5JMiOj']), ' ', N.intl.format(N.t.fjSvsL, { onClick: v })]
                          })
                        : N.intl.string(N.t['5JMiOj'])
                    : N.intl.string(N.t['Pzh+Gx']),
                (0, i.jsx)(a.NoS, {
                    noticeType: S.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        (U(), null !== e && e(g.L.TAKE_ACTION));
                    },
                    children: y ? N.intl.string(N.t.pj0XBA) : N.intl.string(N.t.jVcuVV)
                })
            ]
        });
    return (0, i.jsx)(T.O1, {
        contentType: t,
        newSnowflakeId: n,
        timeRecurringConfig: { cooldownDurationMs: 0 },
        groupName: g.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            if (t === s.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return M(n);
        }
    });
};
