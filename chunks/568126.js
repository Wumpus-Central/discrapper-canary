var i = n(200651);
n(192379);
var r = n(442837),
    s = n(481060),
    a = n(706454),
    l = n(78839),
    o = n(985754),
    c = n(222727),
    d = n(474494),
    u = n(981631),
    m = n(455427);
t.Z = function (e) {
    let { localizedPricingPromo: t } = e,
        n = t.countryCode,
        g = (0, r.e7)([a.default], () => a.default.locale);
    (0, c.U)(u.jXE.SETTINGS_PREMIUM_BANNER, n);
    let h = (0, r.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
        { localizedPricingBannerBody: p } = (0, o.vB)({
            localizedPricingPromo: t,
            subscription: h,
            forceSingleLine: !0,
            userLocale: g
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
                    children: p
                })
            })
        ]
    });
};
