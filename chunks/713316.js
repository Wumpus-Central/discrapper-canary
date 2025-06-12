n.d(t, { w: () => f });
var r = n(255367);
n(73800);
var i = n(512722),
    a = n.n(i),
    o = n(481060),
    s = n(563132),
    l = n(698708),
    c = n(844068),
    u = n(614277),
    d = n(388032),
    _ = n(419667);
function f(e) {
    let { handleClose: t } = e,
        { skusById: n, selectedSkuId: i, application: f } = (0, s.JL)();
    a()(null != i, 'Expected selectedSkuId'), a()(null != f, 'Expected application');
    let p = n[i];
    a()(null != p, 'Expected sku');
    let h = d.intl.formatToPlainString(d.t.wK0IbG, {
        applicationName: f.name,
        itemName: p.name
    });
    return (0, r.jsxs)(u.C3, {
        children: [
            (0, r.jsx)(c.Z, {}),
            (0, r.jsx)(l.Z, {}),
            (0, r.jsxs)('div', {
                className: _.confirmation,
                children: [
                    (0, r.jsx)(o.X6q, {
                        variant: 'heading-xxl/bold',
                        className: _.confirmationHeader,
                        children: 'Success!'
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: 'text-md/normal',
                        children: h
                    }),
                    (0, r.jsx)('div', { className: _.divider }),
                    (0, r.jsx)(o.zxk, {
                        onClick: t,
                        children: d.intl.string(d.t.cpT0Cg)
                    })
                ]
            })
        ]
    });
}
