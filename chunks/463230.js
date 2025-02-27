n.d(t, { Z: () => E });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(230711),
    o = n(985754),
    s = n(91802),
    a = n(222727),
    c = n(981631),
    u = n(921944),
    d = n(388032),
    _ = n(24060);
let E = (e) => {
    let { notice: t, noticeType: n, dismissCurrentNotice: E } = e,
        p = (null == t ? void 0 : t.metadata.premiumSubscription) != null,
        m = (0, s.n)();
    if (((0, a.U)(c.jXE.NOTIFICATION_BAR, null == m ? void 0 : m.countryCode), null == m)) return null;
    let h = m.countryCode,
        f = m.currency,
        g = m.paymentSourceTypes.length > 0;
    return (0, r.jsxs)(i.qXd, {
        color: p ? i.DM8.BRAND : i.DM8.PREMIUM_TIER_2,
        children: [
            (0, r.jsx)(i.RyX, {
                onClick: () => E(u.L.UNKNOWN),
                noticeType: n
            }),
            !p &&
                (0, r.jsx)(i.SrA, {
                    size: 'md',
                    color: 'currentColor',
                    className: _.premiumIcon
                }),
            (0, o.Gv)(h, f, g, p),
            (0, r.jsx)(i.NoS, {
                onClick: () => {
                    E(u.L.UNKNOWN), l.Z.open(c.oAB.PREMIUM);
                },
                noticeType: n,
                children: d.NW.string(d.t.hvVgAQ)
            })
        ]
    });
};
