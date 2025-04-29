n.d(t, {
    Y: () => l,
    w: () => s
});
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(388032),
    a = n(258501),
    s = (function (e) {
        return (e.SELECT_PAYMENT_METHOD = 'SELECT_PAYMENT_METHOD'), (e.ADD_NEW_PAYMENT_METHOD = 'ADD_NEW_PAYMENT_METHOD'), e;
    })({});
function l(e) {
    let { paymentRestrictionBannerType: t } = e,
        n = '';
    if (!t) return null;
    switch (t) {
        case 'SELECT_PAYMENT_METHOD':
            n = o.intl.string(o.t.Tdb5qa);
            break;
        case 'ADD_NEW_PAYMENT_METHOD':
            n = o.intl.string(o.t['6d44Fx']);
    }
    return (0, r.jsxs)('div', {
        className: a.paymentRestrictionBannerContainer,
        children: [
            (0, r.jsxs)('div', {
                className: a.appsIconContainer,
                children: [
                    (0, r.jsx)(i.jje, {
                        size: 'md',
                        color: 'white',
                        className: a.icon
                    }),
                    (0, r.jsx)(i.jje, {
                        size: 'md',
                        color: 'currentColor',
                        className: a.iconDark
                    })
                ]
            }),
            (0, r.jsx)(i.Text, {
                variant: 'text-sm/normal',
                children: n
            }),
            (0, r.jsx)('div', { className: a.paymentRestrictionBannerBackgroundImage })
        ]
    });
}
