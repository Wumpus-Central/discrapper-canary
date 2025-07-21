(n.d(e, {
    Gm: () => O,
    Uj: () => S,
    ZI: () => f
}),
    n(953529));
var i = n(255367);
n(73800);
var r = n(120356),
    l = n.n(r),
    o = n(708816),
    a = n(368072),
    u = n(777207),
    s = n(692547),
    c = n(330711),
    d = n(812743),
    p = n(820468);
let f = 5;
function S(t) {
    let { description: e, imgSrc: n, renderPurchaseButton: r, onPurchase: S, title: O, onDetails: I, benefitItems: b, benefitsSummary: g, subtitle: _, maxBenefits: y = f } = t;
    return (0, i.jsx)(o.tE, {
        children: (0, i.jsxs)('div', {
            className: l()(d.container, p.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != I ? I() : null != S && S();
            },
            onKeyUp: (t) => {
                'Enter' === t.key && (t.stopPropagation(), t.preventDefault(), null != I ? I() : null != S && S());
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
                                children: O
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
                            null != r
                                ? r({
                                      onClick: (t) => {
                                          (t.stopPropagation(), null == S || S());
                                      }
                                  })
                                : null,
                            _,
                            null != e &&
                                '' !== e &&
                                (0, i.jsx)(u.x, {
                                    className: d.description,
                                    color: 'text-default',
                                    variant: 'text-sm/medium',
                                    children: e
                                })
                        ]
                    })
                }),
                null != g &&
                    (0, i.jsx)('div', {
                        className: d.benefitsSummary,
                        children: (0, i.jsx)(u.x, {
                            color: 'interactive-normal',
                            variant: 'text-sm/medium',
                            children: c.Z.Messages.STOREFRONT_BENEFITS_SUMMARY.format({ count: g })
                        })
                    }),
                null != b &&
                    b.length > 0 &&
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
                                    b.length > y
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  b.slice(0, y),
                                                  (0, i.jsx)(u.x, {
                                                      variant: 'text-md/semibold',
                                                      color: 'text-secondary',
                                                      children: c.Z.Messages.STOREFRONT_MORE_BENEFITS.format({ count: b.length - y })
                                                  })
                                              ]
                                          })
                                        : b
                                ]
                            })
                        })
                    })
            ]
        })
    });
}
function O(t) {
    let { icon: e, header: n, description: r } = t;
    return (0, i.jsxs)('div', {
        className: d.cardBenefit,
        children: [
            (0, i.jsx)('div', {
                className: d.cardBenefitIcon,
                children: e
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
                        children: r
                    })
                ]
            })
        ]
    });
}
