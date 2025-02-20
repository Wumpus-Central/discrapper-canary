t.d(r, { u: () => c }), t(266796);
var n = t(200651);
t(192379);
var l = t(409794),
    s = t(777207),
    o = t(541822),
    a = t(330711),
    i = t(191995);
function c(e) {
    let { benefits: r, description: t, imgSrc: c, title: d, tag: u, FallbackIcon: m } = e,
        x = null != c ? { '--custom-background-url': 'url('.concat(c.toString(), ')') } : void 0;
    return (0, n.jsx)('div', {
        className: i.container,
        children: (0, n.jsx)(o.Z, {
            className: i.scroller,
            children: (0, n.jsxs)('div', {
                className: i.scrollContent,
                children: [
                    (0, n.jsxs)('div', {
                        className: i.header,
                        children: [
                            (0, n.jsx)('div', {
                                className: i.headerBackground,
                                style: x
                            }),
                            (0, n.jsx)('div', {
                                className: i.headerImage,
                                children:
                                    null != c
                                        ? (0, n.jsx)('img', {
                                              src: c.toString(),
                                              alt: ''
                                          })
                                        : (0, n.jsx)(m, {
                                              size: 'custom',
                                              color: 'var(--text-muted)',
                                              height: 96,
                                              width: 96
                                          })
                            })
                        ]
                    }),
                    (0, n.jsxs)('div', {
                        className: i.content,
                        children: [
                            (0, n.jsxs)('div', {
                                className: i.details,
                                children: [
                                    null != u && (0, n.jsx)('div', { children: u }),
                                    (0, n.jsx)(l.X, {
                                        color: 'header-primary',
                                        variant: 'heading-xl/semibold',
                                        children: d
                                    }),
                                    null != t &&
                                        '' !== t &&
                                        (0, n.jsx)(s.x, {
                                            color: 'text-normal',
                                            variant: 'text-md/normal',
                                            className: i.description,
                                            children: t
                                        })
                                ]
                            }),
                            null != r &&
                                (0, n.jsxs)('div', {
                                    className: i.benefits,
                                    children: [
                                        (0, n.jsx)(s.x, {
                                            color: 'header-secondary',
                                            variant: 'eyebrow',
                                            children: a.Z.Messages.STOREFRONT_BENEFITS_TITLE
                                        }),
                                        r
                                    ]
                                })
                        ]
                    })
                ]
            })
        })
    });
}
