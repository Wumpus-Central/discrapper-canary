n.d(t, { C: () => p });
var r = n(200651),
    i = n(120356),
    o = n.n(i),
    a = n(979554),
    s = n(442837),
    l = n(481060),
    c = n(597688),
    u = n(473608),
    d = n(774056),
    f = n(822988);
let _ = (e) => {
        let { sku: t } = e,
            n = (0, s.e7)([c.Z], () => c.Z.getProduct(t.id));
        return (0, r.jsxs)('div', {
            className: d.collectiblePreview,
            children: [
                null != n && n.type !== a.Z.BUNDLE
                    ? (0, r.jsx)(u.O, {
                          sku: t,
                          fallbackLabel: null
                      })
                    : null,
                (0, r.jsx)(l.Text, {
                    variant: 'text-md/medium',
                    children: t.name
                })
            ]
        });
    },
    p = (e) => {
        let { sku: t, value: n, className: i } = e;
        return (0, r.jsxs)('div', {
            className: o()(f.row, i),
            children: [
                (0, r.jsx)('div', {
                    className: f.rowLabel,
                    children: (0, r.jsx)(_, { sku: t })
                }),
                (0, r.jsx)('div', {
                    className: f.rowAmount,
                    children: n
                })
            ]
        });
    };
