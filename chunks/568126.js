n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    a = n(706454),
    l = n(78839),
    o = n(985754),
    c = n(222727),
    d = n(474494),
    u = n(981631),
    m = n(599944);
let g = function (e) {
    let { localizedPricingPromo: t } = e,
        n = t.countryCode,
        g = (0, i.e7)([a.default], () => a.default.locale);
    (0, c.U)(u.jXE.SETTINGS_PREMIUM_BANNER, n);
    let p = (0, i.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
        { localizedPricingBannerBody: h } = (0, o.vB)({
            localizedPricingPromo: t,
            subscription: p,
            forceSingleLine: !0,
            userLocale: g
        });
    return (0, r.jsxs)('div', {
        className: m.bannerContainer,
        children: [
            (0, r.jsx)(d.Z, {
                className: m.badge,
                countryCode: n
            }),
            (0, r.jsx)('div', {
                className: m.bannerBodyContainer,
                children: (0, r.jsx)(s.Text, {
                    color: 'none',
                    variant: 'text-md/normal',
                    className: m.bannerBody,
                    children: h
                })
            })
        ]
    });
};
