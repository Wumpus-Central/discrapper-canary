n.d(t, {
    q: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var r = n(704215),
    l = n(481060),
    a = n(906732),
    o = n(963249),
    s = n(286961),
    c = n(644916),
    d = n(243778),
    u = n(921944),
    m = n(230278);
let h = (e) => {
    let { dismissibleContent: t, noticeType: n } = e,
        { analyticsLocations: h } = (0, a.ZP)(),
        f = (0, s.Z)();
    return (0, i.jsx)(d.Xf, {
        contentType: t,
        latestVersion: (0, c.t)(t),
        groupName: u.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: a } = e;
            if (t === r.z.GIFTING_PROMOTION_REMINDER) {
                let e = null == f ? void 0 : f.reminderNagbar;
                return (0, i.jsxs)(l.Notice, {
                    color: l.NoticeColors.PREMIUM_TIER_2,
                    children: [
                        (0, i.jsx)(l.NoticeCloseButton, {
                            onClick: () => a(u.L.USER_DISMISS),
                            noticeType: n
                        }),
                        (0, i.jsx)(l.GiftIcon, {
                            size: 'custom',
                            width: 20,
                            height: 20,
                            color: 'currentColor',
                            className: m.giftIcon
                        }),
                        null == e ? void 0 : e.description(),
                        (0, i.jsx)(l.PrimaryCTANoticeButton, {
                            onClick: () => {
                                (0, o.Z)({
                                    isGift: !0,
                                    initialPlanId: null,
                                    analyticsLocations: h,
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
