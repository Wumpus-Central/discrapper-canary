n.d(t, { Z: () => O });
var i = n(200651),
    l = n(192379),
    r = n(793030),
    a = n(442837),
    s = n(481060),
    o = n(230711),
    c = n(2052),
    u = n(906732),
    E = n(963249),
    d = n(594174),
    _ = n(626135),
    I = n(74538),
    T = n(163684),
    N = n(748770),
    A = n(474936),
    S = n(981631),
    R = n(388032),
    C = n(638098);
function O() {
    let e = (0, a.e7)([d.default], () => I.ZP.isPremiumExactly(d.default.getCurrentUser(), A.p9.TIER_2)),
        { enabled: t, getNitroCTA: n } = T.g.useExperiment(
            { location: 'OutboundPromotionNotice' },
            {
                autoTrackExposure: !1,
                disable: e
            }
        ),
        { location: O } = (0, c.O)(),
        { analyticsLocations: P } = (0, u.ZP)(),
        D = l.useCallback(() => {
            (0, E.Z)({
                subscriptionTier: I.ZP.getSkuIdForPremiumType(A.p9.TIER_2),
                analyticsLocations: P,
                analyticsObject: {
                    ...O,
                    object: S.qAy.BUTTON_CTA,
                    objectType: S.Qqv.TIER_2
                }
            });
        }, [P, O]),
        m = l.useCallback(() => {
            o.Z.open(S.oAB.INVENTORY), N.ZP.dismissOutboundPromotionNotice();
        }, []),
        p = l.useCallback(() => {
            _.default.track(S.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), n ? D() : m();
        }, [n, D, m]);
    return (0, i.jsxs)(s.qXd, {
        color: s.DM8.PREMIUM_TIER_2,
        children: [
            (0, i.jsx)(s.RyX, {
                noticeType: S.kVF.OUTBOUND_PROMOTION,
                onClick: () => {
                    N.ZP.dismissOutboundPromotionNotice();
                }
            }),
            (0, i.jsx)(s.SrA, {
                size: 'md',
                color: 'currentColor',
                className: C.premiumIcon
            }),
            t
                ? n
                    ? (0, i.jsxs)(r.xv, {
                          variant: 'text-sm/normal',
                          className: C.text,
                          children: [R.intl.string(R.t['5JMiOj']), ' ', R.intl.format(R.t.fjSvsL, { onClick: m })]
                      })
                    : R.intl.string(R.t['B3a/cH'])
                : R.intl.string(R.t['Pzh+Gx']),
            (0, i.jsx)(s.NoS, {
                noticeType: S.kVF.OUTBOUND_PROMOTION,
                onClick: p,
                children: n ? R.intl.string(R.t.pj0XBA) : R.intl.string(R.t.jVcuVV)
            })
        ]
    });
}
