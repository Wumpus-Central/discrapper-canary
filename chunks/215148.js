n.d(t, { C: () => p });
var i = n(200651),
    r = n(120356),
    a = n.n(r),
    s = n(979554),
    o = n(442837),
    l = n(481060),
    u = n(597688),
    c = n(473608),
    d = n(587422),
    f = n(778168);
let _ = (e) => {
        let { sku: t } = e,
            n = (0, o.e7)([u.Z], () => u.Z.getProduct(t.id));
        return (0, i.jsxs)('div', {
            className: d.collectiblePreview,
            children: [
                null != n && n.type !== s.Z.BUNDLE
                    ? (0, i.jsx)(c.O, {
                          sku: t,
                          fallbackLabel: null
                      })
                    : null,
                (0, i.jsx)(l.Text, {
                    variant: 'text-md/medium',
                    children: t.name
                })
            ]
        });
    },
    p = (e) => {
        let { sku: t, value: n, className: r } = e;
        return (0, i.jsxs)('div', {
            className: a()(f.row, r),
            children: [
                (0, i.jsx)('div', {
                    className: f.rowLabel,
                    children: (0, i.jsx)(_, { sku: t })
                }),
                (0, i.jsx)('div', {
                    className: f.rowAmount,
                    children: n
                })
            ]
        });
    };
