n.d(t, { q: () => _ });
var i = n(200651);
n(192379);
var l = n(704215),
    r = n(481060),
    a = n(906732),
    s = n(963249),
    o = n(286961),
    c = n(644916),
    u = n(243778),
    E = n(921944),
    d = n(230278);
let _ = (e) => {
    let { dismissibleContent: t, noticeType: n } = e,
        { analyticsLocations: _ } = (0, a.ZP)(),
        I = (0, o.Z)();
    return (0, i.jsx)(u.Xf, {
        contentType: t,
        latestVersion: (0, c.t)(t),
        groupName: E.R.NOTICE_BAR,
        bypassAutoDismiss: !0,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: a } = e;
            if (t === l.z.GIFTING_PROMOTION_REMINDER) {
                let e = null == I ? void 0 : I.reminderNagbar;
                return (0, i.jsxs)(r.qXd, {
                    color: r.DM8.PREMIUM_TIER_2,
                    children: [
                        (0, i.jsx)(r.RyX, {
                            onClick: () => a(E.L.USER_DISMISS),
                            noticeType: n
                        }),
                        (0, i.jsx)(r.OgN, {
                            size: 'custom',
                            width: 20,
                            height: 20,
                            color: 'currentColor',
                            className: d.giftIcon
                        }),
                        null == e ? void 0 : e.description(),
                        (0, i.jsx)(r.NoS, {
                            onClick: () => {
                                (0, s.Z)({
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
