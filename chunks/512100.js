t.d(n, { u: () => c }), t(953529);
var l = t(200651);
t(192379);
var r = t(409794),
    a = t(777207),
    o = t(541822),
    i = t(330711),
    s = t(845533);
function c(e) {
    let { benefits: n, description: t, imgSrc: c, title: d, tag: u, FallbackIcon: x } = e,
        m = null != c ? { '--custom-background-url': 'url('.concat(c.toString(), ')') } : void 0;
    return (0, l.jsx)('div', {
        className: s.container,
        children: (0, l.jsx)(o.Z, {
            className: s.scroller,
            children: (0, l.jsxs)('div', {
                className: s.scrollContent,
                children: [
                    (0, l.jsxs)('div', {
                        className: s.header,
                        children: [
                            (0, l.jsx)('div', {
                                className: s.headerBackground,
                                style: m
                            }),
                            (0, l.jsx)('div', {
                                className: s.headerImage,
                                children:
                                    null != c
                                        ? (0, l.jsx)('img', {
                                              src: c.toString(),
                                              alt: ''
                                          })
                                        : (0, l.jsx)(x, {
                                              size: 'custom',
                                              color: 'var(--text-muted)',
                                              height: 96,
                                              width: 96
                                          })
                            })
                        ]
                    }),
                    (0, l.jsxs)('div', {
                        className: s.content,
                        children: [
                            (0, l.jsxs)('div', {
                                className: s.details,
                                children: [
                                    null != u && (0, l.jsx)('div', { children: u }),
                                    (0, l.jsx)(r.X, {
                                        color: 'header-primary',
                                        variant: 'heading-xl/semibold',
                                        children: d
                                    }),
                                    null != t &&
                                        '' !== t &&
                                        (0, l.jsx)(a.x, {
                                            color: 'text-normal',
                                            variant: 'text-md/normal',
                                            className: s.description,
                                            children: t
                                        })
                                ]
                            }),
                            null != n &&
                                (0, l.jsxs)('div', {
                                    className: s.benefits,
                                    children: [
                                        (0, l.jsx)(a.x, {
                                            color: 'header-secondary',
                                            variant: 'eyebrow',
                                            children: i.Z.Messages.STOREFRONT_BENEFITS_TITLE
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
