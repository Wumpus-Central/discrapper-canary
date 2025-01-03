e.d(t, {
    Gm: function () {
        return v;
    },
    Uj: function () {
        return m;
    },
    ZI: function () {
        return p;
    }
});
var i = e(200651);
e(192379);
var l = e(557533),
    r = e.n(l),
    u = e(489948),
    a = e(368072),
    o = e(777207),
    s = e(692547),
    c = e(330711),
    d = e(789864),
    f = e(717729);
let p = 5;
function m(n) {
    let { description: t, imgSrc: e, renderPurchaseButton: l, onPurchase: m, title: v, onDetails: I, benefitItems: S, benefitsSummary: h, subtitle: g, maxBenefits: Z = p } = n;
    return (0, i.jsx)(u.tE, {
        children: (0, i.jsxs)('div', {
            className: r()(d.container, f.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != I ? I() : null != m && m();
            },
            children: [
                (0, i.jsx)('div', {
                    className: d.card,
                    children: (0, i.jsxs)('div', {
                        className: d.body,
                        children: [
                            (0, i.jsx)(o.x, {
                                tag: 'div',
                                variant: 'heading-lg/semibold',
                                children: v
                            }),
                            (0, i.jsx)('div', {
                                className: d.image,
                                children:
                                    null != e
                                        ? (0, i.jsx)('img', {
                                              src: e.toString(),
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
                                      onClick: (n) => {
                                          n.stopPropagation(), null == m || m();
                                      }
                                  })
                                : null,
                            g,
                            null != t &&
                                '' !== t &&
                                (0, i.jsx)(o.x, {
                                    className: d.description,
                                    color: 'text-normal',
                                    variant: 'text-sm/medium',
                                    children: t
                                })
                        ]
                    })
                }),
                null != h &&
                    (0, i.jsx)('div', {
                        className: d.benefitsSummary,
                        children: (0, i.jsx)(o.x, {
                            color: 'interactive-normal',
                            variant: 'text-sm/medium',
                            children: c.Z.Messages.STOREFRONT_BENEFITS_SUMMARY.format({ count: h })
                        })
                    }),
                null != S &&
                    S.length > 0 &&
                    (0, i.jsx)('div', {
                        className: d.benefits,
                        children: (0, i.jsx)('div', {
                            className: d.benefitsContainer,
                            children: (0, i.jsxs)('div', {
                                className: d.benefitsList,
                                children: [
                                    (0, i.jsx)(o.x, {
                                        color: 'header-secondary',
                                        variant: 'eyebrow',
                                        children: c.Z.Messages.STOREFRONT_BENEFITS_TITLE
                                    }),
                                    S.length > Z
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  S.slice(0, Z),
                                                  (0, i.jsx)(o.x, {
                                                      variant: 'text-md/semibold',
                                                      color: 'text-secondary',
                                                      children: c.Z.Messages.STOREFRONT_MORE_BENEFITS.format({ count: S.length - Z })
                                                  })
                                              ]
                                          })
                                        : S
                                ]
                            })
                        })
                    })
            ]
        })
    });
}
function v(n) {
    let { icon: t, header: e, description: l } = n;
    return (0, i.jsxs)('div', {
        className: d.cardBenefit,
        children: [
            (0, i.jsx)('div', {
                className: d.cardBenefitIcon,
                children: t
            }),
            (0, i.jsxs)('div', {
                children: [
                    null != e &&
                        (0, i.jsx)(o.x, {
                            variant: 'text-md/semibold',
                            color: 'header-primary',
                            children: e
                        }),
                    (0, i.jsx)(o.x, {
                        variant: 'text-sm/normal',
                        children: l
                    })
                ]
            })
        ]
    });
}
