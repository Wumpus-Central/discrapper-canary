n.d(t, {
    w: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var o = n(512722),
    a = n.n(o),
    r = n(481060),
    c = n(563132),
    d = n(698708),
    s = n(844068),
    l = n(614277),
    f = n(388032),
    u = n(786698);
function p(e) {
    let { handleClose: t } = e,
        { skusById: n, selectedSkuId: o, application: p } = (0, c.usePaymentContext)();
    a()(null != o, 'Expected selectedSkuId'), a()(null != p, 'Expected application');
    let _ = n[o];
    a()(null != _, 'Expected sku');
    let b = f.intl.formatToPlainString(f.t.wK0IbG, {
        applicationName: p.name,
        itemName: _.name
    });
    return (0, i.jsxs)(l.C3, {
        children: [
            (0, i.jsx)(s.Z, {}),
            (0, i.jsx)(d.Z, {}),
            (0, i.jsxs)('div', {
                className: u.confirmation,
                children: [
                    (0, i.jsx)(r.Heading, {
                        variant: 'heading-xxl/bold',
                        className: u.confirmationHeader,
                        children: 'Success!'
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        children: b
                    }),
                    (0, i.jsx)('div', { className: u.divider }),
                    (0, i.jsx)(r.Button, {
                        onClick: t,
                        children: f.intl.string(f.t.cpT0Cg)
                    })
                ]
            })
        ]
    });
}
