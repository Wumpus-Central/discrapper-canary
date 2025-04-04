n.d(t, { w: () => _ });
var r = n(200651);
n(192379);
var i = n(512722),
    o = n.n(i),
    a = n(481060),
    s = n(563132),
    l = n(698708),
    c = n(844068),
    u = n(614277),
    d = n(388032),
    f = n(419667);
function _(e) {
    let { handleClose: t } = e,
        { skusById: n, selectedSkuId: i, application: _ } = (0, s.JL)();
    o()(null != i, 'Expected selectedSkuId'), o()(null != _, 'Expected application');
    let p = n[i];
    o()(null != p, 'Expected sku');
    let h = d.NW.formatToPlainString(d.t.wK0IbG, {
        applicationName: _.name,
        itemName: p.name
    });
    return (0, r.jsxs)(u.C3, {
        children: [
            (0, r.jsx)(c.Z, {}),
            (0, r.jsx)(l.Z, {}),
            (0, r.jsxs)('div', {
                className: f.confirmation,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'heading-xxl/bold',
                        className: f.confirmationHeader,
                        children: 'Success!'
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        children: h
                    }),
                    (0, r.jsx)('div', { className: f.divider }),
                    (0, r.jsx)(a.zxk, {
                        onClick: t,
                        children: d.NW.string(d.t.cpT0Cg)
                    })
                ]
            })
        ]
    });
}
