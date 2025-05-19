n.d(t, { Z: () => E });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(230711),
    o = n(985754),
    a = n(91802),
    c = n(222727),
    s = n(981631),
    u = n(921944),
    d = n(388032),
    _ = n(226293);
let E = (e) => {
    let { notice: t, noticeType: n, dismissCurrentNotice: E } = e,
        I = (null == t ? void 0 : t.metadata.premiumSubscription) != null,
        O = (0, a.n)();
    if (((0, c.U)(s.jXE.NOTIFICATION_BAR, null == O ? void 0 : O.countryCode), null == O)) return null;
    let T = O.countryCode,
        p = O.currency,
        N = O.paymentSourceTypes.length > 0;
    return (0, r.jsxs)(i.qXd, {
        color: I ? i.DM8.BRAND : i.DM8.PREMIUM_TIER_2,
        children: [
            (0, r.jsx)(i.RyX, {
                onClick: () => E(u.L.UNKNOWN),
                noticeType: n
            }),
            !I &&
                (0, r.jsx)(i.SrA, {
                    size: 'md',
                    color: 'currentColor',
                    className: _.premiumIcon
                }),
            (0, o.Gv)(T, p, N, I),
            (0, r.jsx)(i.NoS, {
                onClick: () => {
                    E(u.L.UNKNOWN), l.Z.open(s.oAB.PREMIUM);
                },
                noticeType: n,
                children: d.intl.string(d.t.hvVgAQ)
            })
        ]
    });
};
