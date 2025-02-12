e.d(t, {
    Gm: () => m,
    Uj: () => v,
    ZI: () => f
});
var l = e(200651);
e(192379);
var i = e(557533),
    a = e.n(i),
    r = e(489948),
    s = e(368072),
    u = e(777207),
    o = e(692547),
    d = e(330711),
    c = e(293962),
    p = e(802415);
let f = 5;
function v(n) {
    let { description: t, imgSrc: e, renderPurchaseButton: i, onPurchase: v, title: m, onDetails: I, benefitItems: h, benefitsSummary: S, subtitle: Z, maxBenefits: g = f } = n;
    return (0, l.jsx)(r.tE, {
        children: (0, l.jsxs)('div', {
            className: a()(c.container, p.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != I ? I() : null != v && v();
            },
            children: [
                (0, l.jsx)('div', {
                    className: c.card,
                    children: (0, l.jsxs)('div', {
                        className: c.body,
                        children: [
                            (0, l.jsx)(u.x, {
                                tag: 'div',
                                variant: 'heading-lg/semibold',
                                children: m
                            }),
                            (0, l.jsx)('div', {
                                className: c.image,
                                children:
                                    null != e
                                        ? (0, l.jsx)('img', {
                                              src: e.toString(),
                                              alt: ''
                                          })
                                        : (0, l.jsx)(s.V, {
                                              color: o.Z.colors.ICON_PRIMARY,
                                              size: 'custom',
                                              height: 48,
                                              width: 48
                                          })
                            }),
                            null != i
                                ? i({
                                      className: c.purchaseBtn,
                                      onClick: (n) => {
                                          n.stopPropagation(), null == v || v();
                                      }
                                  })
                                : null,
                            Z,
                            null != t &&
                                '' !== t &&
                                (0, l.jsx)(u.x, {
                                    className: c.description,
                                    color: 'text-normal',
                                    variant: 'text-sm/medium',
                                    children: t
                                })
                        ]
                    })
                }),
                null != S &&
                    (0, l.jsx)('div', {
                        className: c.benefitsSummary,
                        children: (0, l.jsx)(u.x, {
                            color: 'interactive-normal',
                            variant: 'text-sm/medium',
                            children: d.Z.Messages.STOREFRONT_BENEFITS_SUMMARY.format({ count: S })
                        })
                    }),
                null != h &&
                    h.length > 0 &&
                    (0, l.jsx)('div', {
                        className: c.benefits,
                        children: (0, l.jsx)('div', {
                            className: c.benefitsContainer,
                            children: (0, l.jsxs)('div', {
                                className: c.benefitsList,
                                children: [
                                    (0, l.jsx)(u.x, {
                                        color: 'header-secondary',
                                        variant: 'eyebrow',
                                        children: d.Z.Messages.STOREFRONT_BENEFITS_TITLE
                                    }),
                                    h.length > g
                                        ? (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  h.slice(0, g),
                                                  (0, l.jsx)(u.x, {
                                                      variant: 'text-md/semibold',
                                                      color: 'text-secondary',
                                                      children: d.Z.Messages.STOREFRONT_MORE_BENEFITS.format({ count: h.length - g })
                                                  })
                                              ]
                                          })
                                        : h
                                ]
                            })
                        })
                    })
            ]
        })
    });
}
function m(n) {
    let { icon: t, header: e, description: i } = n;
    return (0, l.jsxs)('div', {
        className: c.cardBenefit,
        children: [
            (0, l.jsx)('div', {
                className: c.cardBenefitIcon,
                children: t
            }),
            (0, l.jsxs)('div', {
                children: [
                    null != e &&
                        (0, l.jsx)(u.x, {
                            variant: 'text-md/semibold',
                            color: 'header-primary',
                            children: e
                        }),
                    (0, l.jsx)(u.x, {
                        variant: 'text-sm/normal',
                        children: i
                    })
                ]
            })
        ]
    });
}
