n.d(t, { q: () => _ }), n(266796);
var r = n(200651);
n(192379);
var i = n(704215),
    l = n(481060),
    o = n(906732),
    a = n(963249),
    s = n(286961),
    c = n(644916),
    u = n(243778),
    d = n(921944),
    E = n(131715);
let _ = (e) => {
    let { dismissibleContent: t, noticeType: n } = e,
        { analyticsLocations: _ } = (0, o.ZP)(),
        I = (0, s.Z)();
    return (0, r.jsx)(u.Xf, {
        contentType: t,
        latestVersion: (0, c.t)(t),
        groupName: d.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: o } = e;
            if (t === i.z.GIFTING_PROMOTION_REMINDER) {
                let e = null == I ? void 0 : I.reminderNagbar;
                return (0, r.jsxs)(l.qXd, {
                    color: l.DM8.PREMIUM_TIER_2,
                    children: [
                        (0, r.jsx)(l.RyX, {
                            onClick: () => o(d.L.USER_DISMISS),
                            noticeType: n
                        }),
                        (0, r.jsx)(l.OgN, {
                            size: 'custom',
                            width: 20,
                            height: 20,
                            color: 'currentColor',
                            className: E.giftIcon
                        }),
                        null == e ? void 0 : e.description(),
                        (0, r.jsx)(l.NoS, {
                            onClick: () => {
                                (0, a.Z)({
                                    isGift: !0,
                                    initialPlanId: null,
                                    analyticsLocations: _,
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
