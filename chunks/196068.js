n.d(t, { c: () => O });
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(704215),
    s = n(481060),
    l = n(230711),
    c = n(163684),
    u = n(518638),
    d = n(748770),
    f = n(594174),
    _ = n(626135),
    p = n(74538),
    h = n(243778),
    m = n(921944),
    g = n(981631),
    E = n(474936),
    b = n(388032),
    y = n(134772);
let O = (e) => {
    let { dismissibleContent: t } = e,
        n = (0, u.a0)(),
        O = (0, o.e7)([f.default], () => p.ZP.isPremiumExactly(f.default.getCurrentUser(), E.p9.TIER_2)),
        { enabled: v } = c.g.useExperiment(
            { location: 'OutboundPromotionNotice' },
            {
                autoTrackExposure: !1,
                disable: O
            }
        ),
        I = i.useCallback(() => {
            (_.default.track(g.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), l.Z.open(g.oAB.INVENTORY), d.ZP.dismissOutboundPromotionNotice());
        }, []);
    if (null == n) return null;
    let T = (e) =>
        (0, r.jsxs)(s.qXd, {
            color: s.DM8.PREMIUM_TIER_2,
            children: [
                (0, r.jsx)(s.RyX, {
                    noticeType: g.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        (d.ZP.dismissOutboundPromotionNotice(), null !== e && e(m.L.USER_DISMISS));
                    }
                }),
                (0, r.jsx)(s.SrA, {
                    size: 'md',
                    color: 'currentColor',
                    className: y.premiumIcon
                }),
                v ? b.intl.string(b.t['5JMiOj']) : b.intl.string(b.t['Pzh+Gx']),
                (0, r.jsx)(s.NoS, {
                    noticeType: g.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        (I(), null !== e && e(m.L.TAKE_ACTION));
                    },
                    children: b.intl.string(b.t.jVcuVV)
                })
            ]
        });
    return (0, r.jsx)(h.O1, {
        contentType: t,
        newSnowflakeId: n,
        timeRecurringConfig: { cooldownDurationMs: 0 },
        groupName: m.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            if (t === a.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return T(n);
        }
    });
};
