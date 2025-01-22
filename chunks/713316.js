r.d(n, {
    w: function () {
        return h;
    }
});
var i = r(200651);
r(192379);
var a = r(512722),
    o = r.n(a),
    s = r(481060),
    l = r(563132),
    u = r(698708),
    c = r(844068),
    d = r(614277),
    f = r(388032),
    p = r(786698);
function h(e) {
    let { handleClose: n } = e,
        { skusById: r, selectedSkuId: a, application: h } = (0, l.usePaymentContext)();
    o()(null != a, 'Expected selectedSkuId'), o()(null != h, 'Expected application');
    let _ = r[a];
    o()(null != _, 'Expected sku');
    let m = f.intl.formatToPlainString(f.t.wK0IbG, {
        applicationName: h.name,
        itemName: _.name
    });
    return (0, i.jsxs)(d.C3, {
        children: [
            (0, i.jsx)(c.Z, {}),
            (0, i.jsx)(u.Z, {}),
            (0, i.jsxs)('div', {
                className: p.confirmation,
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: 'heading-xxl/bold',
                        className: p.confirmationHeader,
                        children: 'Success!'
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: m
                    }),
                    (0, i.jsx)('div', { className: p.divider }),
                    (0, i.jsx)(s.Button, {
                        onClick: n,
                        children: f.intl.string(f.t.cpT0Cg)
                    })
                ]
            })
        ]
    });
}
