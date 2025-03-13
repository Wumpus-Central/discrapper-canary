n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(230711),
    l = n(985754),
    a = n(91802),
    s = n(222727),
    c = n(981631),
    u = n(921944),
    d = n(388032),
    _ = n(24060);
let p = (e) => {
    let { notice: t, noticeType: n, dismissCurrentNotice: p } = e,
        E = (null == t ? void 0 : t.metadata.premiumSubscription) != null,
        f = (0, a.n)();
    if (((0, s.U)(c.jXE.NOTIFICATION_BAR, null == f ? void 0 : f.countryCode), null == f)) return null;
    let m = f.countryCode,
        h = f.currency,
        b = f.paymentSourceTypes.length > 0;
    return (0, r.jsxs)(i.qXd, {
        color: E ? i.DM8.BRAND : i.DM8.PREMIUM_TIER_2,
        children: [
            (0, r.jsx)(i.RyX, {
                onClick: () => p(u.L.UNKNOWN),
                noticeType: n
            }),
            !E &&
                (0, r.jsx)(i.SrA, {
                    size: 'md',
                    color: 'currentColor',
                    className: _.premiumIcon
                }),
            (0, l.Gv)(m, h, b, E),
            (0, r.jsx)(i.NoS, {
                onClick: () => {
                    p(u.L.UNKNOWN), o.Z.open(c.oAB.PREMIUM);
                },
                noticeType: n,
                children: d.NW.string(d.t.hvVgAQ)
            })
        ]
    });
};
