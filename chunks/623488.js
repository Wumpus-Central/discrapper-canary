(n.d(t, { Z: () => g }), n(953529));
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(313201),
    s = n(240657),
    c = n(765400),
    u = n(916001),
    d = n(388032),
    p = n(940792);
function m(e) {
    let { hidePurchaseToUnlockBadge: t, showDraftBadge: n, className: i, children: o } = e;
    return (0, r.jsxs)('div', {
        className: l()(p.productThumbnailContainer, i),
        children: [
            o,
            !t &&
                (0, r.jsxs)('div', {
                    className: p.purchaseToUnlockBadge,
                    children: [
                        (0, r.jsx)(a.mBM, {
                            size: 'xs',
                            className: p.lockIcon,
                            color: 'currentColor',
                            'aria-hidden': !0
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            color: 'always-white',
                            className: p.__invalid_unlockText,
                            children: d.intl.string(d.t.YmIiSU)
                        })
                    ]
                }),
            n &&
                (0, r.jsx)('div', {
                    className: p.draftBadge,
                    children: (0, r.jsx)(c.v, {})
                })
        ]
    });
}
function f(e) {
    let { onShowFullDescription: t, variant: n } = e,
        i = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.Text, {
                    variant: n,
                    color: null != t ? 'text-link' : 'interactive-hover',
                    children: d.intl.string(d.t['5fmYjY'])
                }),
                (0, r.jsx)(a.ZSh, {
                    size: 'xs',
                    color: 'currentColor',
                    className: p.arrowIcon
                })
            ]
        });
    return null == t
        ? (0, r.jsx)('div', {
              className: p.showMoreButton,
              children: i
          })
        : (0, r.jsx)(a.P3F, {
              className: l()(p.showMoreButton, p.hasAction),
              onClick: (e) => {
                  (e.stopPropagation(), null != t && t());
              },
              children: i
          });
}
function g(e) {
    let { imageUrl: t, name: n, description: i, formattedPrice: c, role: g, ctaComponent: h, shouldShowFullDescriptionButton: _ = !0, onShowFullDescription: b, productType: E, onTapCard: x, actionMenu: v, showOpaqueBackground: C = !1, hideRoleTag: y = !1, lineClamp: O = 1, cardWidth: j = 332, cardHeight: I, thumbnailHeight: S = 187, descriptionTextVariant: T = 'text-sm/normal', isDraft: N = !1 } = e,
        P = (0, o.hQ)(),
        A = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(m, {
                    showDraftBadge: N,
                    hidePurchaseToUnlockBadge: !0,
                    children: (0, r.jsx)('img', {
                        alt: '',
                        src: t,
                        className: p.productThumbnail,
                        style: { height: S }
                    })
                }),
                (0, r.jsxs)('div', {
                    className: p.productDetails,
                    children: [
                        (0, r.jsxs)('div', {
                            className: p.productDetailContent,
                            children: [
                                (0, r.jsx)(a.X6q, {
                                    variant: 'text-md/medium',
                                    color: 'header-primary',
                                    className: p.productName,
                                    id: P,
                                    children: n
                                }),
                                (0, r.jsx)(a.Rny, {
                                    children: (0, r.jsx)(s.Z, {
                                        variant: T,
                                        color: 'text-muted',
                                        lineClamp: O,
                                        text: i
                                    })
                                }),
                                _ &&
                                    (0, r.jsx)(f, {
                                        onShowFullDescription: b,
                                        variant: T
                                    }),
                                y || null == g || '' === g.name
                                    ? null
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [(0, r.jsx)(a.LZC, { size: 16 }), (0, r.jsx)(u.Z, { role: g })]
                                      })
                            ]
                        }),
                        v
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: p.purchaseDetails,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: 'text-md/medium',
                            color: 'interactive-active',
                            className: p.__invalid_productPrice,
                            children: null != c ? c : d.intl.string(d.t['4uLhAg'])
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: 'text-xxs/normal',
                            color: 'text-default',
                            className: p.__invalid_productType,
                            children: E
                        }),
                        (0, r.jsx)('div', {
                            className: p.productActionButton,
                            onClick: (e) => {
                                e.stopPropagation();
                            },
                            children: h
                        })
                    ]
                })
            ]
        });
    return null == x
        ? (0, r.jsx)('article', {
              className: l()(p.productCard, C ? p.opaqueBackground : p.solidBackground),
              'aria-labelledby': P,
              children: A
          })
        : (0, r.jsx)('div', {
              style: {
                  width: j,
                  height: I
              },
              children: (0, r.jsx)(a.kL8, {
                  tag: 'article',
                  'aria-label': d.intl.formatToPlainString(d.t['e+TmJS'], { productName: n }),
                  className: l()(p.productCard, C ? p.opaqueBackground : p.solidBackground, p.cardClickableContainer),
                  onClick: x,
                  children: A
              })
          });
}
