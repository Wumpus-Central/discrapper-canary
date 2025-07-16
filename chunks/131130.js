(n.d(t, { q: () => E }), n(953529));
var r = n(255367);
n(73800);
var i = n(704215),
    l = n(481060),
    a = n(906732),
    o = n(963249),
    c = n(286961),
    s = n(644916),
    u = n(243778),
    d = n(921944),
    _ = n(131715);
let E = (e) => {
    let { dismissibleContent: t, noticeType: n } = e,
        { analyticsLocations: E } = (0, a.ZP)(),
        I = (0, c.Z)();
    return (0, r.jsx)(u.Xf, {
        contentType: t,
        latestVersion: (0, s.t)(t),
        groupName: d.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: a } = e;
            if (t === i.z.GIFTING_PROMOTION_REMINDER) {
                let e = null == I ? void 0 : I.reminderNagbar;
                return (0, r.jsxs)(l.qXd, {
                    color: l.DM8.PREMIUM_TIER_2,
                    children: [
                        (0, r.jsx)(l.RyX, {
                            onClick: () => a(d.L.USER_DISMISS),
                            noticeType: n
                        }),
                        (0, r.jsx)(l.OgN, {
                            size: 'custom',
                            width: 20,
                            height: 20,
                            color: 'currentColor',
                            className: _.giftIcon
                        }),
                        null == e ? void 0 : e.description(),
                        (0, r.jsx)(l.NoS, {
                            onClick: () => {
                                (0, o.Z)({
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
