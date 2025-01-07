var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(706454),
    l = n(78839),
    o = n(985754),
    c = n(222727),
    d = n(474494),
    u = n(981631),
    g = n(455427);
t.Z = function (e) {
    let { localizedPricingPromo: t } = e,
        n = t.countryCode,
        m = (0, r.e7)([s.default], () => s.default.locale);
    (0, c.U)(u.jXE.SETTINGS_PREMIUM_BANNER, n);
    let f = (0, r.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
        { localizedPricingBannerBody: p } = (0, o.vB)({
            localizedPricingPromo: t,
            subscription: f,
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
                children: (0, i.jsx)(a.Text, {
                    color: 'none',
                    variant: 'text-md/normal',
                    className: g.bannerBody,
                    children: p
                })
            })
        ]
    });
};
