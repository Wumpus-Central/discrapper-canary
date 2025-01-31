n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(481060),
    s = n(195356);
function o(e) {
    let { bar: t, children: n, className: l, inModal: o, title: d } = e;
    return (0, i.jsxs)(r.Zbd, {
        editable: !0,
        className: a()(s.card, l, { [s.inModal]: o }),
        children: [
            (0, i.jsxs)('div', {
                className: a()(s.cardHeader, { [s.inModal]: o }),
                children: [
                    (0, i.jsx)(r.Text, {
                        variant: 'text-xs/semibold',
                        className: s.title,
                        children: d
                    }),
                    (0, i.jsx)('div', { children: t })
                ]
            }),
            o ? (0, i.jsx)(r.$i$, {}) : null,
            n
        ]
    });
}
