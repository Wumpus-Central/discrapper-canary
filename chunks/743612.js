var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    a = n(481060),
    l = n(506829);
t.Z = (e) => {
    var t, n, s, o;
    let { title: c, shouldShowElement: d, cardVariantStyleInfo: u, description: m, titleClassName: g = '', subtitle: h = '', subtitleClassName: p } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(a.Heading, {
                variant: 'heading-xl/extrabold',
                className: r()(l.cardHeading, g),
                children: c
            }),
            '' !== h &&
                (null == d || d(null == u ? void 0 : u.subtitle)) &&
                (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)('div', {
                        className: p,
                        children: [
                            (0, i.jsx)(a.Text, {
                                variant: null !== (s = null == u ? void 0 : null === (t = u.subtitle) || void 0 === t ? void 0 : t.textVariant) && void 0 !== s ? s : 'text-sm/normal',
                                children: h
                            }),
                            null != m &&
                                (0, i.jsx)(a.Text, {
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
