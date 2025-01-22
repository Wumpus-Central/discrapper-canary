r.d(n, {
    C: function () {
        return _;
    }
});
var i = r(200651),
    a = r(120356),
    o = r.n(a),
    s = r(979554),
    l = r(442837),
    u = r(481060),
    c = r(597688),
    d = r(473608),
    f = r(698700),
    p = r(719953);
let h = (e) => {
        let { sku: n } = e,
            r = (0, l.e7)([c.Z], () => c.Z.getProduct(n.id));
        return (0, i.jsxs)('div', {
            className: f.collectiblePreview,
            children: [
                null != r && r.type !== s.Z.BUNDLE
                    ? (0, i.jsx)(d.O, {
                          sku: n,
                          fallbackLabel: null
                      })
                    : null,
                (0, i.jsx)(u.Text, {
                    variant: 'text-md/medium',
                    children: n.name
                })
            ]
        });
    },
    _ = (e) => {
        let { sku: n, value: r, className: a } = e;
        return (0, i.jsxs)('div', {
            className: o()(p.row, a),
            children: [
                (0, i.jsx)('div', {
                    className: p.rowLabel,
                    children: (0, i.jsx)(h, { sku: n })
                }),
                (0, i.jsx)('div', {
                    className: p.rowAmount,
                    children: r
                })
            ]
        });
    };
