n.d(t, { c: () => v });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(704215),
    s = n(481060),
    l = n(163684),
    c = n(518638),
    u = n(748770),
    d = n(313789),
    f = n(518596),
    _ = n(594174),
    p = n(626135),
    h = n(74538),
    m = n(243778),
    g = n(921944),
    E = n(981631),
    b = n(474936),
    y = n(388032),
    O = n(93128);
let v = (e) => {
    let { dismissibleContent: t } = e,
        n = (0, c.a0)(),
        v = (0, a.e7)([_.default], () => h.ZP.isPremiumExactly(_.default.getCurrentUser(), b.PremiumTypes.TIER_2)),
        { enabled: I } = l.g.useExperiment(
            { location: "OutboundPromotionNotice" },
            {
                autoTrackExposure: !1,
                disable: v,
            },
        ),
        T = i.useCallback(() => {
            p.default.track(E.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED),
                (0, f.openUserSettings)(d.n.GIFT_PANEL, { section: E.oAB.INVENTORY }),
                u.ZP.dismissOutboundPromotionNotice();
        }, []);
    if (null == n) return null;
    let S = (e) =>
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
                I ? y.intl.string(y.t["5JMiOo"]) : y.intl.string(y.t["Pzh+G2"]),
                (0, r.jsx)(s.NoS, {
                    noticeType: E.kVF.OUTBOUND_PROMOTION,
                    onClick: () => {
                        T(), null !== e && e(g.L.TAKE_ACTION);
                    },
                    children: y.intl.string(y.t.jVcuVY),
                }),
            ],
        });
    return (0, r.jsx)(m.O1, {
        contentType: t,
        newSnowflakeId: n,
        timeRecurringConfig: { cooldownDurationMs: 0 },
        groupName: g.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            if (t === o.z.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR) return S(n);
        },
    });
};
