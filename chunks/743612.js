n.d(t, { Z: () => l }), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    o = n(596470);
let l = (e) => {
    var t, n, i, l;
    let { title: c, shouldShowElement: d, cardVariantStyleInfo: u, description: m, titleClassName: g = '', subtitle: p = '', subtitleClassName: h } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.X6q, {
                variant: 'heading-xl/extrabold',
                className: s()(o.cardHeading, g),
                children: c
            }),
            '' !== p &&
                (null == d || d(null == u ? void 0 : u.subtitle)) &&
                (0, r.jsxs)('div', {
                    className: h,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: null !== (i = null == u ? void 0 : null === (t = u.subtitle) || void 0 === t ? void 0 : t.textVariant) && void 0 !== i ? i : 'text-sm/normal',
                            children: p
                        }),
                        null != m &&
                            (0, r.jsx)(a.Text, {
                                variant: null !== (l = null == u ? void 0 : null === (n = u.description) || void 0 === n ? void 0 : n.textVariant) && void 0 !== l ? l : 'text-sm/normal',
                                children: (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)('br', {}), m]
                                })
                            })
                    ]
                })
        ]
    });
};
