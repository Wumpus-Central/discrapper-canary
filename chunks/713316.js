n.d(t, { w: () => _ });
var i = n(200651);
n(192379);
var r = n(512722),
    a = n.n(r),
    s = n(481060),
    o = n(563132),
    l = n(698708),
    u = n(844068),
    c = n(614277),
    d = n(388032),
    f = n(786698);
function _(e) {
    let { handleClose: t } = e,
        { skusById: n, selectedSkuId: r, application: _ } = (0, o.JL)();
    a()(null != r, 'Expected selectedSkuId'), a()(null != _, 'Expected application');
    let p = n[r];
    a()(null != p, 'Expected sku');
    let h = d.intl.formatToPlainString(d.t.wK0IbG, {
        applicationName: _.name,
        itemName: p.name
    });
    return (0, i.jsxs)(c.C3, {
        children: [
            (0, i.jsx)(u.Z, {}),
            (0, i.jsx)(l.Z, {}),
            (0, i.jsxs)('div', {
                className: f.confirmation,
                children: [
                    (0, i.jsx)(s.X6q, {
                        variant: 'heading-xxl/bold',
                        className: f.confirmationHeader,
                        children: 'Success!'
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: h
                    }),
                    (0, i.jsx)('div', { className: f.divider }),
                    (0, i.jsx)(s.zxk, {
                        onClick: t,
                        children: d.intl.string(d.t.cpT0Cg)
                    })
                ]
            })
        ]
    });
}
