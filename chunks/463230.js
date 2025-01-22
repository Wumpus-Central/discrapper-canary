var i = n(200651);
n(192379);
var r = n(481060),
    l = n(230711),
    a = n(985754),
    o = n(91802),
    s = n(222727),
    c = n(981631),
    u = n(921944),
    d = n(388032),
    m = n(230278);
t.Z = (e) => {
    let { notice: t, noticeType: n, dismissCurrentNotice: h } = e,
        f = (null == t ? void 0 : t.metadata.premiumSubscription) != null,
        p = (0, o.n)();
    if (((0, s.U)(c.jXE.NOTIFICATION_BAR, null == p ? void 0 : p.countryCode), null == p)) return null;
    let _ = p.countryCode,
        g = p.currency,
        E = p.paymentSourceTypes.length > 0;
    return (0, i.jsxs)(r.Notice, {
        color: f ? r.NoticeColors.BRAND : r.NoticeColors.PREMIUM_TIER_2,
        children: [
            (0, i.jsx)(r.NoticeCloseButton, {
                onClick: () => h(u.L.UNKNOWN),
                noticeType: n
            }),
            !f &&
                (0, i.jsx)(r.NitroWheelIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: m.premiumIcon
                }),
            (0, a.Gv)(_, g, E, f),
            (0, i.jsx)(r.PrimaryCTANoticeButton, {
                onClick: () => {
                    h(u.L.UNKNOWN), l.Z.open(c.oAB.PREMIUM);
                },
                noticeType: n,
                children: d.intl.string(d.t.hvVgAQ)
            })
        ]
    });
};
