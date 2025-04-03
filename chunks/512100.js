l.d(n, { u: () => c }), l(266796);
var t = l(200651);
l(192379);
var r = l(409794),
    s = l(777207),
    i = l(541822),
    a = l(330711),
    o = l(845533);
function c(e) {
    let { benefits: n, description: l, imgSrc: c, title: d, tag: u, FallbackIcon: m } = e,
        x = null != c ? { '--custom-background-url': 'url('.concat(c.toString(), ')') } : void 0;
    return (0, t.jsx)('div', {
        className: o.container,
        children: (0, t.jsx)(i.Z, {
            className: o.scroller,
            children: (0, t.jsxs)('div', {
                className: o.scrollContent,
                children: [
                    (0, t.jsxs)('div', {
                        className: o.header,
                        children: [
                            (0, t.jsx)('div', {
                                className: o.headerBackground,
                                style: x
                            }),
                            (0, t.jsx)('div', {
                                className: o.headerImage,
                                children:
                                    null != c
                                        ? (0, t.jsx)('img', {
                                              src: c.toString(),
                                              alt: ''
                                          })
                                        : (0, t.jsx)(m, {
                                              size: 'custom',
                                              color: 'var(--text-muted)',
                                              height: 96,
                                              width: 96
                                          })
                            })
                        ]
                    }),
                    (0, t.jsxs)('div', {
                        className: o.content,
                        children: [
                            (0, t.jsxs)('div', {
                                className: o.details,
                                children: [
                                    null != u && (0, t.jsx)('div', { children: u }),
                                    (0, t.jsx)(r.X, {
                                        color: 'header-primary',
                                        variant: 'heading-xl/semibold',
                                        children: d
                                    }),
                                    null != l &&
                                        '' !== l &&
                                        (0, t.jsx)(s.x, {
                                            color: 'text-normal',
                                            variant: 'text-md/normal',
                                            className: o.description,
                                            children: l
                                        })
                                ]
                            }),
                            null != n &&
                                (0, t.jsxs)('div', {
                                    className: o.benefits,
                                    children: [
                                        (0, t.jsx)(s.x, {
                                            color: 'header-secondary',
                                            variant: 'eyebrow',
                                            children: a.Z.Messages.STOREFRONT_BENEFITS_TITLE
                                        }),
                                        n
                                    ]
                                })
                        ]
                    })
                ]
            })
        })
    });
}
