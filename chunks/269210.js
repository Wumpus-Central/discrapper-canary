n.d(t, {
    Gm: () => v,
    Uj: () => b,
    ZI: () => f
}),
    n(266796);
var i = n(200651);
n(192379);
var l = n(557533),
    r = n.n(l),
    o = n(489948),
    a = n(368072),
    u = n(777207),
    s = n(692547),
    c = n(330711),
    d = n(911022),
    p = n(775600);
let f = 5;
function b(e) {
    let { description: t, imgSrc: n, renderPurchaseButton: l, onPurchase: b, title: v, onDetails: O, benefitItems: m, benefitsSummary: y, subtitle: g, maxBenefits: h = f } = e;
    return (0, i.jsx)(o.tE, {
        children: (0, i.jsxs)('div', {
            className: r()(d.container, p.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != O ? O() : null != b && b();
            },
            children: [
                (0, i.jsx)('div', {
                    className: d.card,
                    children: (0, i.jsxs)('div', {
                        className: d.body,
                        children: [
                            (0, i.jsx)(u.x, {
                                tag: 'div',
                                variant: 'heading-lg/semibold',
                                children: v
                            }),
                            (0, i.jsx)('div', {
                                className: d.image,
                                children:
                                    null != n
                                        ? (0, i.jsx)('img', {
                                              src: n.toString(),
                                              alt: ''
                                          })
                                        : (0, i.jsx)(a.V, {
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
                                (0, i.jsx)(u.x, {
                                    className: d.description,
                                    color: 'text-normal',
                                    variant: 'text-sm/medium',
                                    children: t
                                })
                        ]
                    })
                }),
                null != y &&
                    (0, i.jsx)('div', {
                        className: d.benefitsSummary,
                        children: (0, i.jsx)(u.x, {
                            color: 'interactive-normal',
                            variant: 'text-sm/medium',
                            children: c.Z.Messages.STOREFRONT_BENEFITS_SUMMARY.format({ count: y })
                        })
                    }),
                null != m &&
                    m.length > 0 &&
                    (0, i.jsx)('div', {
                        className: d.benefits,
                        children: (0, i.jsx)('div', {
                            className: d.benefitsContainer,
                            children: (0, i.jsxs)('div', {
                                className: d.benefitsList,
                                children: [
                                    (0, i.jsx)(u.x, {
                                        color: 'header-secondary',
                                        variant: 'eyebrow',
                                        children: c.Z.Messages.STOREFRONT_BENEFITS_TITLE
                                    }),
                                    m.length > h
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  m.slice(0, h),
                                                  (0, i.jsx)(u.x, {
                                                      variant: 'text-md/semibold',
                                                      color: 'text-secondary',
                                                      children: c.Z.Messages.STOREFRONT_MORE_BENEFITS.format({ count: m.length - h })
                                                  })
                                              ]
                                          })
                                        : m
                                ]
                            })
                        })
                    })
            ]
        })
    });
}
function v(e) {
    let { icon: t, header: n, description: l } = e;
    return (0, i.jsxs)('div', {
        className: d.cardBenefit,
        children: [
            (0, i.jsx)('div', {
                className: d.cardBenefitIcon,
                children: t
            }),
            (0, i.jsxs)('div', {
                children: [
                    null != n &&
                        (0, i.jsx)(u.x, {
                            variant: 'text-md/semibold',
                            color: 'header-primary',
                            children: n
                        }),
                    (0, i.jsx)(u.x, {
                        variant: 'text-sm/normal',
                        children: l
                    })
                ]
            })
        ]
    });
}
