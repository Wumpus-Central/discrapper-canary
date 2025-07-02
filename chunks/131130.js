(n.d(t, { q: () => E }), n(953529));
var i = n(255367);
n(73800);
var r = n(704215),
    l = n(481060),
    o = n(906732),
    s = n(963249),
    a = n(286961),
    c = n(644916),
    d = n(243778),
    u = n(921944),
    _ = n(131715);
let E = (e) => {
    let { dismissibleContent: t, noticeType: n } = e,
        { analyticsLocations: E } = (0, o.ZP)(),
        h = (0, a.Z)();
    return (0, i.jsx)(d.Xf, {
        contentType: t,
        latestVersion: (0, c.t)(t),
        groupName: u.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: o } = e;
            if (t === r.z.GIFTING_PROMOTION_REMINDER) {
                let e = null == h ? void 0 : h.reminderNagbar;
                return (0, i.jsxs)(l.qXd, {
                    color: l.DM8.PREMIUM_TIER_2,
                    children: [
                        (0, i.jsx)(l.RyX, {
                            onClick: () => o(u.L.USER_DISMISS),
                            noticeType: n
                        }),
                        (0, i.jsx)(l.OgN, {
                            size: 'custom',
                            width: 20,
                            height: 20,
                            color: 'currentColor',
                            className: _.giftIcon
                        }),
                        null == e ? void 0 : e.description(),
                        (0, i.jsx)(l.NoS, {
                            onClick: () => {
                                (0, s.Z)({
                                    isGift: !0,
                                    initialPlanId: null,
                                    analyticsLocations: E,
                                    analyticsLocation: null == e ? void 0 : e.analyticsLocation,
                                    analyticsObject: { page: null == e ? void 0 : e.analyticsPage }
                                });
                            },
                            noticeType: n,
                            children: null == e ? void 0 : e.cta()
                        })
                    ]
                });
            }
        }
    });
};
