n.d(e, { u: () => c });
var i = n(200651);
n(192379);
var s = n(409794),
    t = n(777207),
    r = n(541822),
    a = n(330711),
    o = n(189090);
function c(l) {
    let { benefits: e, description: n, imgSrc: c, title: d, tag: u, FallbackIcon: x } = l,
        m = null != c ? { '--custom-background-url': 'url('.concat(c.toString(), ')') } : void 0;
    return (0, i.jsx)('div', {
        className: o.container,
        children: (0, i.jsx)(r.Z, {
            className: o.scroller,
            children: (0, i.jsxs)('div', {
                className: o.scrollContent,
                children: [
                    (0, i.jsxs)('div', {
                        className: o.header,
                        children: [
                            (0, i.jsx)('div', {
                                className: o.headerBackground,
                                style: m
                            }),
                            (0, i.jsx)('div', {
                                className: o.headerImage,
                                children:
                                    null != c
                                        ? (0, i.jsx)('img', {
                                              src: c.toString(),
                                              alt: ''
                                          })
                                        : (0, i.jsx)(x, {
                                              size: 'custom',
                                              color: 'var(--text-muted)',
                                              height: 96,
                                              width: 96
                                          })
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: o.content,
                        children: [
                            (0, i.jsxs)('div', {
                                className: o.details,
                                children: [
                                    null != u && (0, i.jsx)('div', { children: u }),
                                    (0, i.jsx)(s.X, {
                                        color: 'header-primary',
                                        variant: 'heading-xl/semibold',
                                        children: d
                                    }),
                                    null != n &&
                                        '' !== n &&
                                        (0, i.jsx)(t.x, {
                                            color: 'text-normal',
                                            variant: 'text-md/normal',
                                            className: o.description,
                                            children: n
                                        })
                                ]
                            }),
                            null != e &&
                                (0, i.jsxs)('div', {
                                    className: o.benefits,
                                    children: [
                                        (0, i.jsx)(t.x, {
                                            color: 'header-secondary',
                                            variant: 'eyebrow',
                                            children: a.Z.Messages.STOREFRONT_BENEFITS_TITLE
                                        }),
                                        e
                                    ]
                                })
                        ]
                    })
                ]
            })
        })
    });
}
