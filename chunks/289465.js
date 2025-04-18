n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    a = n(272997);
function s(e) {
    let { bar: t, children: n, className: i, inModal: s, title: c } = e;
    return (0, r.jsxs)(o.Zbd, {
        editable: !0,
        className: l()(a.card, i, { [a.inModal]: s }),
        children: [
            (0, r.jsxs)('div', {
                className: l()(a.cardHeader, { [a.inModal]: s }),
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: 'text-xs/semibold',
                        className: a.title,
                        children: c
                    }),
                    (0, r.jsx)('div', { children: t })
                ]
            }),
            s ? (0, r.jsx)(o.$i$, {}) : null,
            n
        ]
    });
}
