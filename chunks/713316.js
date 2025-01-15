n.d(t, {
    w: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var r = n(512722),
    o = n.n(r),
    a = n(481060),
    l = n(563132),
    c = n(698708),
    s = n(844068),
    d = n(614277),
    u = n(388032),
    f = n(985192);
function p(e) {
    let { handleClose: t } = e,
        { skusById: n, selectedSkuId: r, application: p } = (0, l.usePaymentContext)();
    o()(null != r, 'Expected selectedSkuId'), o()(null != p, 'Expected application');
    let m = n[r];
    o()(null != m, 'Expected sku');
    let b = u.intl.formatToPlainString(u.t.wK0IbG, {
        applicationName: p.name,
        itemName: m.name
    });
    return (0, i.jsxs)(d.C3, {
        children: [
            (0, i.jsx)(s.Z, {}),
            (0, i.jsx)(c.Z, {}),
            (0, i.jsxs)('div', {
                className: f.confirmation,
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: 'heading-xxl/bold',
                        className: f.confirmationHeader,
                        children: 'Success!'
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children: b
                    }),
                    (0, i.jsx)('div', { className: f.divider }),
                    (0, i.jsx)(a.Button, {
                        onClick: t,
                        children: u.intl.string(u.t.cpT0Cg)
                    })
                ]
            })
        ]
    });
}
