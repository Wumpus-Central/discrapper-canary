n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(793030),
    a = n(442837),
    o = n(481060),
    s = n(230711),
    c = n(2052),
    u = n(906732),
    d = n(963249),
    m = n(594174),
    h = n(626135),
    f = n(74538),
    p = n(163684),
    _ = n(748770),
    g = n(474936),
    E = n(981631),
    C = n(388032),
    I = n(614990);
function x() {
    let e = (0, a.e7)([m.default], () => f.ZP.isPremiumExactly(m.default.getCurrentUser(), g.p9.TIER_2)),
        { enabled: t, getNitroCTA: n } = p.g.useExperiment(
            { location: 'OutboundPromotionNotice' },
            {
                autoTrackExposure: !1,
                disable: e
            }
        ),
        { location: x } = (0, c.O)(),
        { analyticsLocations: N } = (0, u.ZP)(),
        v = r.useCallback(() => {
            (0, d.Z)({
                subscriptionTier: f.ZP.getSkuIdForPremiumType(g.p9.TIER_2),
                analyticsLocations: N,
                analyticsObject: {
                    ...x,
                    object: E.qAy.BUTTON_CTA,
                    objectType: E.Qqv.TIER_2
                }
            });
        }, [N, x]),
        T = r.useCallback(() => {
            s.Z.open(E.oAB.INVENTORY), _.ZP.dismissOutboundPromotionNotice();
        }, []),
        S = r.useCallback(() => {
            h.default.track(E.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), n ? v() : T();
        }, [n, v, T]);
    return (0, i.jsxs)(o.Notice, {
        color: o.NoticeColors.PREMIUM_TIER_2,
        children: [
            (0, i.jsx)(o.NoticeCloseButton, {
                noticeType: E.kVF.OUTBOUND_PROMOTION,
                onClick: () => {
                    _.ZP.dismissOutboundPromotionNotice();
                }
            }),
            (0, i.jsx)(o.NitroWheelIcon, {
                size: 'md',
                color: 'currentColor',
                className: I.premiumIcon
            }),
            t
                ? n
                    ? (0, i.jsxs)(l.xv, {
                          variant: 'text-sm/normal',
                          className: I.text,
                          children: [C.intl.string(C.t['5JMiOj']), ' ', C.intl.format(C.t.fjSvsL, { onClick: T })]
                      })
                    : C.intl.string(C.t['B3a/cH'])
                : C.intl.string(C.t['Pzh+Gx']),
            (0, i.jsx)(o.PrimaryCTANoticeButton, {
                noticeType: E.kVF.OUTBOUND_PROMOTION,
                onClick: S,
                children: n ? C.intl.string(C.t.pj0XBA) : C.intl.string(C.t.jVcuVV)
            })
        ]
    });
}
