t.d(n, { u: () => c }), t(953529);
var r = t(200651);
t(192379);
var l = t(409794),
    a = t(777207),
    o = t(541822),
    s = t(330711),
    i = t(845533);
function c(e) {
    let { benefits: n, description: t, imgSrc: c, title: d, tag: u, FallbackIcon: x } = e,
        m = null != c ? { '--custom-background-url': 'url('.concat(c.toString(), ')') } : void 0;
    return (0, r.jsx)('div', {
        className: i.container,
        children: (0, r.jsx)(o.Z, {
            className: i.scroller,
            children: (0, r.jsxs)('div', {
                className: i.scrollContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: i.header,
                        children: [
                            (0, r.jsx)('div', {
                                className: i.headerBackground,
                                style: m
                            }),
                            (0, r.jsx)('div', {
                                className: i.headerImage,
                                children:
                                    null != c
                                        ? (0, r.jsx)('img', {
                                              src: c.toString(),
                                              alt: ''
                                          })
                                        : (0, r.jsx)(x, {
                                              size: 'custom',
                                              color: 'var(--text-muted)',
                                              height: 96,
                                              width: 96
                                          })
                            })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: i.content,
                        children: [
                            (0, r.jsxs)('div', {
                                className: i.details,
                                children: [
                                    null != u && (0, r.jsx)('div', { children: u }),
                                    (0, r.jsx)(l.X, {
                                        color: 'header-primary',
                                        variant: 'heading-xl/semibold',
                                        children: d
                                    }),
                                    null != t &&
                                        '' !== t &&
                                        (0, r.jsx)(a.x, {
                                            color: 'text-normal',
                                            variant: 'text-md/normal',
                                            className: i.description,
                                            children: t
                                        })
                                ]
                            }),
                            null != n &&
                                (0, r.jsxs)('div', {
                                    className: i.benefits,
                                    children: [
                                        (0, r.jsx)(a.x, {
                                            color: 'header-secondary',
                                            variant: 'eyebrow',
                                            children: s.Z.Messages.STOREFRONT_BENEFITS_TITLE
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
