n.d(t, { w: () => p });
var r = n(255367);
n(73800);
var i = n(512722),
    a = n.n(i),
    o = n(680018),
    s = n(481060),
    l = n(563132),
    c = n(698708),
    u = n(844068),
    d = n(27034),
    _ = n(388032),
    f = n(419667);
function p(e) {
    let { handleClose: t } = e,
        { skusById: n, selectedSkuId: i, application: p } = (0, l.JL)();
    (a()(null != i, 'Expected selectedSkuId'), a()(null != p, 'Expected application'));
    let h = n[i];
    a()(null != h, 'Expected sku');
    let m = _.intl.formatToPlainString(_.t.wK0IbG, {
        applicationName: p.name,
        itemName: h.name
    });
    return (0, r.jsxs)(d.C3, {
        children: [
            (0, r.jsx)(u.Z, {}),
            (0, r.jsx)(c.Z, {}),
            (0, r.jsxs)('div', {
                className: f.confirmation,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'heading-xxl/bold',
                        className: f.confirmationHeader,
                        children: 'Success!'
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: m
                    }),
                    (0, r.jsx)('div', { className: f.divider }),
                    (0, r.jsx)(o.z, {
                        onClick: t,
                        text: _.intl.string(_.t.cpT0Cg),
                        fullWidth: !0
                    })
                ]
            })
        ]
    });
}
