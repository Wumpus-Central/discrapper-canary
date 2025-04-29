n.d(t, { Z: () => o }), n(953529);
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(344253);
let o = (e) => {
    var t, n, r, o;
    let { title: c, shouldShowElement: d, cardVariantStyleInfo: u, description: m, titleClassName: p = '', subtitle: g = '', subtitleClassName: h } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.X6q, {
                variant: 'heading-xl/extrabold',
                className: s()(a.cardHeading, p),
                children: c
            }),
            '' !== g &&
                (null == d || d(null == u ? void 0 : u.subtitle)) &&
                (0, i.jsxs)('div', {
                    className: h,
                    children: [
                        (0, i.jsx)(l.Text, {
                            variant: null != (r = null == u || null == (t = u.subtitle) ? void 0 : t.textVariant) ? r : 'text-sm/normal',
                            children: g
                        }),
                        null != m &&
                            (0, i.jsx)(l.Text, {
                                variant: null != (o = null == u || null == (n = u.description) ? void 0 : n.textVariant) ? o : 'text-sm/normal',
                                children: (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)('br', {}), m]
                                })
                            })
                    ]
                })
        ]
    });
};
