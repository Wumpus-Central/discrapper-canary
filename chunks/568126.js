n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var r = n(442837),
    s = n(481060),
    l = n(706454),
    a = n(78839),
    o = n(985754),
    c = n(222727),
    d = n(474494),
    u = n(981631),
    m = n(599944);
let p = function (e) {
    let { localizedPricingPromo: t } = e,
        n = t.countryCode,
        p = (0, r.e7)([l.default], () => l.default.locale);
    (0, c.U)(u.jXE.SETTINGS_PREMIUM_BANNER, n);
    let g = (0, r.e7)([a.ZP], () => a.ZP.getPremiumTypeSubscription()),
        { localizedPricingBannerBody: h } = (0, o.vB)({
            localizedPricingPromo: t,
            subscription: g,
            forceSingleLine: !0,
            userLocale: p
        });
    return (0, i.jsxs)('div', {
        className: m.bannerContainer,
        children: [
            (0, i.jsx)(d.Z, {
                className: m.badge,
                countryCode: n
            }),
            (0, i.jsx)('div', {
                className: m.bannerBodyContainer,
                children: (0, i.jsx)(s.Text, {
                    color: 'none',
                    variant: 'text-md/normal',
                    className: m.bannerBody,
                    children: h
                })
            })
        ]
    });
};
