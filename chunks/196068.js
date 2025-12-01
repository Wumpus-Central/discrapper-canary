n.d(t, { c: () => v });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(704215),
    s = n(481060),
    l = n(163684),
    c = n(518638),
    u = n(748770),
    d = n(313789),
    f = n(518596),
    p = n(594174),
    _ = n(626135),
    m = n(74538),
    h = n(243778),
    g = n(921944),
    E = n(981631),
    b = n(474936),
    y = n(388032),
    O = n(961987);
let v = (e) => {
    let { dismissibleContent: t } = e,
        n = (0, c.a0)(),
        v = (0, a.e7)([p.default], () => m.ZP.isPremiumExactly(p.default.getCurrentUser(), b.PremiumTypes.TIER_2)),
        { enabled: S } = l.g.useExperiment(
            { location: "OutboundPromotionNotice" },
            {
                autoTrackExposure: !1,
                disable: v,
            },
        ),
        I = i.useCallback(() => {
            _.default.track(E.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED),
                (0, f.openUserSettings)(d.n.GIFT_PANEL, { section: E.oAB.INVENTORY }),
                u.ZP.dismissOutboundPromotionNotice();
        }, []);
    if (null == n) return null;
    let T = (e) =>
        (0, r.jsxs)(s.qXd, {
            color: s.DM8.PREMIUM_TIER_2,
            children: [
                (0, r.jsx)(s.RyX, {
                    noticeType: E.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        u.ZP.dismissOutboundPromotionNotice(), null !== e && e(g.L.USER_DISMISS);
                    },
                }),
                (0, r.jsx)(s.SrA, {
                    size: "md",
                    color: "currentColor",
                    className: O.premiumIcon,
                }),
                S ? y.intl.string(y.t["5JMiOo"]) : y.intl.string(y.t["Pzh+G2"]),
                (0, r.jsx)(s.NoS, {
                    noticeType: E.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        I(), null !== e && e(g.L.TAKE_ACTION);
                    },
                    children: y.intl.string(y.t.jVcuVY),
                }),
            ],
        });
    return (0, r.jsx)(h.O1, {
        contentType: t,
        newSnowflakeId: n,
        timeRecurringConfig: { cooldownDurationMs: 0 },
        groupName: g.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            if (t === o.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return T(n);
        },
    });
};
