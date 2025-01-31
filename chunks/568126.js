n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var s = n(442837),
    r = n(481060),
    l = n(706454),
    a = n(78839),
    o = n(985754),
    c = n(222727),
    d = n(474494),
    u = n(981631),
    m = n(455427);
let h = function (e) {
    let { localizedPricingPromo: t } = e,
        n = t.countryCode,
        h = (0, s.e7)([l.default], () => l.default.locale);
    (0, c.U)(u.jXE.SETTINGS_PREMIUM_BANNER, n);
    let g = (0, s.e7)([a.ZP], () => a.ZP.getPremiumTypeSubscription()),
        { localizedPricingBannerBody: _ } = (0, o.vB)({
            localizedPricingPromo: t,
            subscription: g,
            forceSingleLine: !0,
            userLocale: h
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
                children: (0, i.jsx)(r.Text, {
                    color: 'none',
                    variant: 'text-md/normal',
                    className: m.bannerBody,
                    children: _
                })
            })
        ]
    });
};
