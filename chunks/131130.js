n.d(t, { q: () => _ }), n(953529);
var r = n(54381);
n(473749);
var i = n(704215),
    a = n(481060),
    o = n(906732),
    s = n(963249),
    l = n(347896),
    c = n(644916),
    u = n(243778),
    d = n(921944),
    f = n(627881);
let _ = (e) => {
    let { dismissibleContent: t, noticeType: n } = e,
        { analyticsLocations: _ } = (0, o.ZP)(),
        p = (0, l.Z)();
    return (0, r.jsx)(u.Xf, {
        contentType: t,
        latestVersion: (0, c.t)(t),
        groupName: d.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: o } = e;
            if (t === i.z.GIFTING_PROMOTION_REMINDER) {
                let e = null == p ? void 0 : p.reminderNagbar;
                return (0, r.jsxs)(a.qXd, {
                    color: a.DM8.PREMIUM_TIER_2,
                    children: [
                        (0, r.jsx)(a.RyX, {
                            onClick: () => o(d.L.USER_DISMISS),
                            noticeType: n,
                        }),
                        (0, r.jsx)(a.OgN, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                            className: f.giftIcon,
                        }),
                        null == e ? void 0 : e.description(),
                        (0, r.jsx)(a.NoS, {
                            onClick: () => {
                                (0, s.Z)({
                                    isGift: !0,
                                    initialPlanId: null,
                                    analyticsLocations: _,
                                    analyticsLocation: null == e ? void 0 : e.analyticsLocation,
                                    analyticsObject: { page: null == e ? void 0 : e.analyticsPage },
                                });
                            },
                            noticeType: n,
                            children: null == e ? void 0 : e.cta(),
                        }),
                    ],
                });
            }
        },
    });
};
