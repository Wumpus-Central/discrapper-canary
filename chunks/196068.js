n.d(t, { c: () => w });
var r = n(255367),
    i = n(73800),
    a = n(793030),
    o = n(442837),
    s = n(704215),
    l = n(481060),
    c = n(230711),
    u = n(2052),
    d = n(906732),
    f = n(963249),
    _ = n(163684),
    p = n(518638),
    h = n(748770),
    m = n(594174),
    g = n(626135),
    E = n(74538),
    b = n(243778),
    y = n(921944),
    O = n(981631),
    v = n(474936),
    I = n(388032),
    T = n(134772);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function A(e) {
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
                S(e, t, n[t]);
            }));
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let w = (e) => {
    let { dismissibleContent: t } = e,
        n = (0, p.a0)(),
        S = (0, o.e7)([m.default], () => E.ZP.isPremiumExactly(m.default.getCurrentUser(), v.p9.TIER_2)),
        { enabled: N, getNitroCTA: w } = _.g.useExperiment(
            { location: 'OutboundPromotionNotice' },
            {
                autoTrackExposure: !1,
                disable: S
            }
        ),
        { location: R } = (0, u.O)(),
        { analyticsLocations: P } = (0, d.ZP)(),
        D = i.useCallback(() => {
            (0, f.Z)({
                subscriptionTier: E.ZP.getSkuIdForPremiumType(v.p9.TIER_2),
                analyticsLocations: P,
                analyticsObject: C(A({}, R), {
                    object: O.qAy.BUTTON_CTA,
                    objectType: O.Qqv.TIER_2
                })
            });
        }, [P, R]),
        L = i.useCallback(() => {
            (c.Z.open(O.oAB.INVENTORY), h.ZP.dismissOutboundPromotionNotice());
        }, []),
        x = i.useCallback(() => {
            (g.default.track(O.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), w ? D() : L());
        }, [w, D, L]);
    if (null == n) return null;
    let k = (e) =>
        (0, r.jsxs)(l.qXd, {
            color: l.DM8.PREMIUM_TIER_2,
            children: [
                (0, r.jsx)(l.RyX, {
                    noticeType: O.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        (h.ZP.dismissOutboundPromotionNotice(), null !== e && e(y.L.USER_DISMISS));
                    }
                }),
                (0, r.jsx)(l.SrA, {
                    size: 'md',
                    color: 'currentColor',
                    className: T.premiumIcon
                }),
                N
                    ? w
                        ? (0, r.jsxs)(a.xv, {
                              variant: 'text-sm/normal',
                              className: T.text,
                              children: [I.intl.string(I.t['5JMiOj']), ' ', I.intl.format(I.t.fjSvsL, { onClick: L })]
                          })
                        : I.intl.string(I.t['5JMiOj'])
                    : I.intl.string(I.t['Pzh+Gx']),
                (0, r.jsx)(l.NoS, {
                    noticeType: O.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        (x(), null !== e && e(y.L.TAKE_ACTION));
                    },
                    children: w ? I.intl.string(I.t.pj0XBA) : I.intl.string(I.t.jVcuVV)
                })
            ]
        });
    return (0, r.jsx)(b.O1, {
        contentType: t,
        newSnowflakeId: n,
        timeRecurringConfig: { cooldownDurationMs: 0 },
        groupName: y.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            if (t === s.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return k(n);
        }
    });
};
