n.d(t, {
    Y: () => l,
    w: () => s
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(388032),
    o = n(258501),
    s = (function (e) {
        return (e.SELECT_PAYMENT_METHOD = 'SELECT_PAYMENT_METHOD'), (e.ADD_NEW_PAYMENT_METHOD = 'ADD_NEW_PAYMENT_METHOD'), e;
    })({});
function l(e) {
    let { paymentRestrictionBannerType: t } = e,
        n = '';
    if (!t) return null;
    switch (t) {
        case 'SELECT_PAYMENT_METHOD':
            n = a.intl.string(a.t.Tdb5qa);
            break;
        case 'ADD_NEW_PAYMENT_METHOD':
            n = a.intl.string(a.t['6d44Fx']);
    }
    return (0, r.jsxs)('div', {
        className: o.paymentRestrictionBannerContainer,
        children: [
            (0, r.jsxs)('div', {
                className: o.appsIconContainer,
                children: [
                    (0, r.jsx)(i.jje, {
                        size: 'md',
                        color: 'white',
                        className: o.icon
                    }),
                    (0, r.jsx)(i.jje, {
                        size: 'md',
                        color: 'currentColor',
                        className: o.iconDark
                    })
                ]
            }),
            (0, r.jsx)(i.Text, {
                variant: 'text-sm/normal',
                children: n
            }),
            (0, r.jsx)('div', { className: o.paymentRestrictionBannerBackgroundImage })
        ]
    });
}
