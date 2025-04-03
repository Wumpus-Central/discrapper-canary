n.d(t, { Z: () => _ });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(230711),
    o = n(985754),
    a = n(91802),
    s = n(222727),
    c = n(981631),
    u = n(921944),
    d = n(388032),
    E = n(131715);
let _ = (e) => {
    let { notice: t, noticeType: n, dismissCurrentNotice: _ } = e,
        I = (null == t ? void 0 : t.metadata.premiumSubscription) != null,
        N = (0, a.n)();
    if (((0, s.U)(c.jXE.NOTIFICATION_BAR, null == N ? void 0 : N.countryCode), null == N)) return null;
    let O = N.countryCode,
        T = N.currency,
        S = N.paymentSourceTypes.length > 0;
    return (0, r.jsxs)(i.qXd, {
        color: I ? i.DM8.BRAND : i.DM8.PREMIUM_TIER_2,
        children: [
            (0, r.jsx)(i.RyX, {
                onClick: () => _(u.L.UNKNOWN),
                noticeType: n
            }),
            !I &&
                (0, r.jsx)(i.SrA, {
                    size: 'md',
                    color: 'currentColor',
                    className: E.premiumIcon
                }),
            (0, o.Gv)(O, T, S, I),
            (0, r.jsx)(i.NoS, {
                onClick: () => {
                    _(u.L.UNKNOWN), l.Z.open(c.oAB.PREMIUM);
                },
                noticeType: n,
                children: d.NW.string(d.t.hvVgAQ)
            })
        ]
    });
};
