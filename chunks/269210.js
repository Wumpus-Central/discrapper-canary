n.d(t, {
    Gm: () => O,
    Uj: () => b,
    ZI: () => f
}),
    n(266796);
var r = n(200651);
n(192379);
var l = n(557533),
    i = n.n(l),
    o = n(928873),
    a = n(368072),
    u = n(777207),
    s = n(692547),
    c = n(330711),
    d = n(812743),
    p = n(820468);
let f = 5;
function b(e) {
    let { description: t, imgSrc: n, renderPurchaseButton: l, onPurchase: b, title: O, onDetails: m, benefitItems: y, benefitsSummary: v, subtitle: g, maxBenefits: h = f } = e;
    return (0, r.jsx)(o.tE, {
        children: (0, r.jsxs)('div', {
            className: i()(d.container, p.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != m ? m() : null != b && b();
            },
            children: [
                (0, r.jsx)('div', {
                    className: d.card,
                    children: (0, r.jsxs)('div', {
                        className: d.body,
                        children: [
                            (0, r.jsx)(u.x, {
                                tag: 'div',
                                variant: 'heading-lg/semibold',
                                children: O
                            }),
                            (0, r.jsx)('div', {
                                className: d.image,
                                children:
                                    null != n
                                        ? (0, r.jsx)('img', {
                                              src: n.toString(),
                                              alt: ''
                                          })
                                        : (0, r.jsx)(a.V, {
                                              color: s.Z.colors.ICON_PRIMARY,
                                              size: 'custom',
                                              height: 48,
                                              width: 48
                                          })
                            }),
                            null != l
                                ? l({
                                      className: d.purchaseBtn,
                                      onClick: (e) => {
                                          e.stopPropagation(), null == b || b();
                                      }
                                  })
                                : null,
                            g,
                            null != t &&
                                '' !== t &&
                                (0, r.jsx)(u.x, {
                                    className: d.description,
                                    color: 'text-normal',
                                    variant: 'text-sm/medium',
                                    children: t
                                })
                        ]
                    })
                }),
                null != v &&
                    (0, r.jsx)('div', {
                        className: d.benefitsSummary,
                        children: (0, r.jsx)(u.x, {
                            color: 'interactive-normal',
                            variant: 'text-sm/medium',
                            children: c.Z.Messages.STOREFRONT_BENEFITS_SUMMARY.format({ count: v })
                        })
                    }),
                null != y &&
                    y.length > 0 &&
                    (0, r.jsx)('div', {
                        className: d.benefits,
                        children: (0, r.jsx)('div', {
                            className: d.benefitsContainer,
                            children: (0, r.jsxs)('div', {
                                className: d.benefitsList,
                                children: [
                                    (0, r.jsx)(u.x, {
                                        color: 'header-secondary',
                                        variant: 'eyebrow',
                                        children: c.Z.Messages.STOREFRONT_BENEFITS_TITLE
                                    }),
                                    y.length > h
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  y.slice(0, h),
                                                  (0, r.jsx)(u.x, {
                                                      variant: 'text-md/semibold',
                                                      color: 'text-secondary',
                                                      children: c.Z.Messages.STOREFRONT_MORE_BENEFITS.format({ count: y.length - h })
                                                  })
                                              ]
                                          })
                                        : y
                                ]
                            })
                        })
                    })
            ]
        })
    });
}
function O(e) {
    let { icon: t, header: n, description: l } = e;
    return (0, r.jsxs)('div', {
        className: d.cardBenefit,
        children: [
            (0, r.jsx)('div', {
                className: d.cardBenefitIcon,
                children: t
            }),
            (0, r.jsxs)('div', {
                children: [
                    null != n &&
                        (0, r.jsx)(u.x, {
                            variant: 'text-md/semibold',
                            color: 'header-primary',
                            children: n
                        }),
                    (0, r.jsx)(u.x, {
                        variant: 'text-sm/normal',
                        children: l
                    })
                ]
            })
        ]
    });
}
