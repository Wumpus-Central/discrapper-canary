l.d(e, {
    u: function () {
        return c;
    }
});
var t = l(200651);
l(192379);
var i = l(409794),
    o = l(777207),
    r = l(541822),
    s = l(330711),
    a = l(189090);
function c(n) {
    let { benefits: e, description: l, imgSrc: c, title: d, tag: u, FallbackIcon: m } = n,
        x = null != c ? { '--custom-background-url': 'url('.concat(c.toString(), ')') } : void 0;
    return (0, t.jsx)('div', {
        className: a.container,
        children: (0, t.jsx)(r.Z, {
            className: a.scroller,
            children: (0, t.jsxs)('div', {
                className: a.scrollContent,
                children: [
                    (0, t.jsxs)('div', {
                        className: a.header,
                        children: [
                            (0, t.jsx)('div', {
                                className: a.headerBackground,
                                style: x
                            }),
                            (0, t.jsx)('div', {
                                className: a.headerImage,
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
                        className: a.content,
                        children: [
                            (0, t.jsxs)('div', {
                                className: a.details,
                                children: [
                                    null != u && (0, t.jsx)('div', { children: u }),
                                    (0, t.jsx)(i.X, {
                                        color: 'header-primary',
                                        variant: 'heading-xl/semibold',
                                        children: d
                                    }),
                                    null != l &&
                                        '' !== l &&
                                        (0, t.jsx)(o.x, {
                                            color: 'text-normal',
                                            variant: 'text-md/normal',
                                            className: a.description,
                                            children: l
                                        })
                                ]
                            }),
                            null != e &&
                                (0, t.jsxs)('div', {
                                    className: a.benefits,
                                    children: [
                                        (0, t.jsx)(o.x, {
                                            color: 'header-secondary',
                                            variant: 'eyebrow',
                                            children: s.Z.Messages.STOREFRONT_BENEFITS_TITLE
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
