n.d(t, { Z: () => s });
var i = n(255367);
n(73800);
var r = n(120356),
    l = n.n(r),
    o = n(481060),
    a = n(272997);
function s(e) {
    let { bar: t, children: n, className: r, inModal: s, title: c } = e;
    return (0, i.jsxs)(o.Zbd, {
        editable: !0,
        className: l()(a.card, r, { [a.inModal]: s }),
        children: [
            (0, i.jsxs)('div', {
                className: l()(a.cardHeader, { [a.inModal]: s }),
                children: [
                    (0, i.jsx)(o.Text, {
                        variant: 'text-sm/semibold',
                        children: c
                    }),
                    (0, i.jsx)('div', { children: t })
                ]
            }),
            s ? (0, i.jsx)(o.$i$, {}) : null,
            n
        ]
    });
}
