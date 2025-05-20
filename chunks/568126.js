n.d(t, { Z: () => m });
var i = n(255367);
n(73800);
var r = n(442837),
    s = n(481060),
    l = n(706454),
    a = n(78839),
    o = n(985754),
    c = n(222727),
    d = n(474494),
    u = n(981631),
    g = n(599944);
let m = function (e) {
    let { localizedPricingPromo: t } = e,
        n = t.countryCode,
        m = (0, r.e7)([l.default], () => l.default.locale);
    (0, c.U)(u.jXE.SETTINGS_PREMIUM_BANNER, n);
    let p = (0, r.e7)([a.ZP], () => a.ZP.getPremiumTypeSubscription()),
        { localizedPricingBannerBody: h } = (0, o.vB)({
            localizedPricingPromo: t,
            subscription: p,
            forceSingleLine: !0,
            userLocale: m
        });
    return (0, i.jsxs)('div', {
        className: g.bannerContainer,
        children: [
            (0, i.jsx)(d.Z, {
                className: g.badge,
                countryCode: n
            }),
            (0, i.jsx)('div', {
                className: g.bannerBodyContainer,
                children: (0, i.jsx)(s.Text, {
                    color: 'none',
                    variant: 'text-md/normal',
                    className: g.bannerBody,
                    children: h
                })
            })
        ]
    });
};
