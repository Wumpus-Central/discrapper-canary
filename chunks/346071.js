n.d(t, { n: () => s });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(388032),
    a = n(199227);
function s(e) {
    let { fractionalPremiumInfo: t } = e,
        n = t.endsAt.toDate();
    return (0, r.jsxs)('div', {
        className: a.activeFractionalPremiumBannerContainer,
        children: [
            (0, r.jsxs)('div', {
                className: a.nitroIconContainer,
                children: [
                    (0, r.jsx)(i.SrA, {
                        size: 'md',
                        color: 'white',
                        className: a.iconFractional
                    }),
                    (0, r.jsx)(i.SrA, {
                        size: 'md',
                        color: 'currentColor',
                        className: a.iconFractionalDark
                    })
                ]
            }),
            (0, r.jsx)(i.Text, {
                variant: 'text-sm/normal',
                children: o.NW.format(o.t.SAJ5Ag, { expirationDate: n })
            }),
            (0, r.jsx)('div', { className: a.activeFractionalPremiumBannerBackgroundImage })
        ]
    });
}
