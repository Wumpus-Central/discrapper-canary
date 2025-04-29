n.d(t, { C: () => p });
var r = n(200651),
    i = n(120356),
    o = n.n(i),
    a = n(979554),
    s = n(442837),
    l = n(481060),
    c = n(597688),
    u = n(473608),
    d = n(585871),
    f = n(774056);
let _ = (e) => {
        let { sku: t } = e,
            n = (0, s.e7)([c.Z], () => c.Z.getProduct(t.id));
        return (0, r.jsxs)('div', {
            className: f.collectiblePreview,
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
            className: o()(d.row, i),
            children: [
                (0, r.jsx)('div', {
                    className: d.rowLabel,
                    children: (0, r.jsx)(_, { sku: t })
                }),
                (0, r.jsx)('div', {
                    className: d.rowAmount,
                    children: n
                })
            ]
        });
    };
