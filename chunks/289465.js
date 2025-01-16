n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(481060),
    o = n(195356);
function s(e) {
    let { bar: t, children: n, className: l, inModal: s, title: d } = e;
    return (0, i.jsxs)(a.Card, {
        editable: !0,
        className: r()(o.card, l, { [o.inModal]: s }),
        children: [
            (0, i.jsxs)('div', {
                className: r()(o.cardHeader, { [o.inModal]: s }),
                children: [
                    (0, i.jsx)(a.Text, {
                        variant: 'text-xs/semibold',
                        className: o.title,
                        children: d
                    }),
                    (0, i.jsx)('div', { children: t })
                ]
            }),
            s ? (0, i.jsx)(a.FormDivider, {}) : null,
            n
        ]
    });
}
