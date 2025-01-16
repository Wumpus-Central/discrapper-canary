t.d(n, {
    C: function () {
        return x;
    }
});
var i = t(200651),
    l = t(120356),
    r = t.n(l),
    s = t(979554),
    a = t(442837),
    c = t(481060),
    o = t(597688),
    u = t(473608),
    d = t(698700),
    m = t(719953);
let p = (e) => {
        let { sku: n } = e,
            t = (0, a.e7)([o.Z], () => o.Z.getProduct(n.id));
        return (0, i.jsxs)('div', {
            className: d.collectiblePreview,
            children: [
                null != t && t.type !== s.Z.BUNDLE
                    ? (0, i.jsx)(u.O, {
                          sku: n,
                          fallbackLabel: null
                      })
                    : null,
                (0, i.jsx)(c.Text, {
                    variant: 'text-md/medium',
                    children: n.name
                })
            ]
        });
    },
    x = (e) => {
        let { sku: n, value: t, className: l } = e;
        return (0, i.jsxs)('div', {
            className: r()(m.row, l),
            children: [
                (0, i.jsx)('div', {
                    className: m.rowLabel,
                    children: (0, i.jsx)(p, { sku: n })
                }),
                (0, i.jsx)('div', {
                    className: m.rowAmount,
                    children: t
                })
            ]
        });
    };
