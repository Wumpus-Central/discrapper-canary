n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    l = n(510040);
let o = (e) => {
    var t, n, r, o;
    let { title: c, shouldShowElement: d, cardVariantStyleInfo: u, description: m, titleClassName: g = '', subtitle: _ = '', subtitleClassName: p } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.X6q, {
                variant: 'heading-xl/extrabold',
                className: a()(l.cardHeading, g),
                children: c
            }),
            '' !== _ &&
                (null == d || d(null == u ? void 0 : u.subtitle)) &&
                (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)('div', {
                        className: p,
                        children: [
                            (0, i.jsx)(s.Text, {
                                variant: null !== (r = null == u ? void 0 : null === (t = u.subtitle) || void 0 === t ? void 0 : t.textVariant) && void 0 !== r ? r : 'text-sm/normal',
                                children: _
                            }),
                            null != m &&
                                (0, i.jsx)(s.Text, {
                                    variant: null !== (o = null == u ? void 0 : null === (n = u.description) || void 0 === n ? void 0 : n.textVariant) && void 0 !== o ? o : 'text-sm/normal',
                                    children: (0, i.jsxs)(i.Fragment, {
                                        children: [(0, i.jsx)('br', {}), m]
                                    })
                                })
                        ]
                    })
                })
        ]
    });
};
