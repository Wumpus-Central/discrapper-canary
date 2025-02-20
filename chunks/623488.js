r.d(t, { Z: () => p }), r(266796);
var A = r(200651);
r(192379);
var n = r(120356),
    o = r.n(n),
    a = r(481060),
    l = r(313201),
    i = r(240657),
    s = r(765400),
    c = r(916001),
    d = r(388032),
    u = r(266229);
function f(e) {
    let { hidePurchaseToUnlockBadge: t, showDraftBadge: r, className: n, children: l } = e;
    return (0, A.jsxs)('div', {
        className: o()(u.productThumbnailContainer, n),
        children: [
            l,
            !t &&
                (0, A.jsxs)('div', {
                    className: u.purchaseToUnlockBadge,
                    children: [
                        (0, A.jsx)(a.mBM, {
                            size: 'xs',
                            className: u.lockIcon,
                            color: 'currentColor',
                            'aria-hidden': !0
                        }),
                        (0, A.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            color: 'always-white',
                            className: u.__invalid_unlockText,
                            children: d.NW.string(d.t.YmIiSU)
                        })
                    ]
                }),
            r &&
                (0, A.jsx)('div', {
                    className: u.draftBadge,
                    children: (0, A.jsx)(s.v, {})
                })
        ]
    });
}
function g(e) {
    let { onShowFullDescription: t, variant: r } = e,
        n = (0, A.jsxs)(A.Fragment, {
            children: [
                (0, A.jsx)(a.Text, {
                    variant: r,
                    color: null != t ? 'text-link' : 'interactive-hover',
                    children: d.NW.string(d.t['5fmYjY'])
                }),
                (0, A.jsx)(a.ZSh, {
                    size: 'xs',
                    color: 'currentColor',
                    className: u.arrowIcon
                })
            ]
        });
    return null == t
        ? (0, A.jsx)('div', {
              className: u.showMoreButton,
              children: n
          })
        : (0, A.jsx)(a.P3F, {
              className: o()(u.showMoreButton, u.hasAction),
              onClick: (e) => {
                  e.stopPropagation(), null != t && t();
              },
              children: n
          });
}
function p(e) {
    let { imageUrl: t, name: r, description: n, formattedPrice: s, role: p, ctaComponent: m, shouldShowFullDescriptionButton: h = !0, onShowFullDescription: b, productType: v, onTapCard: C, actionMenu: q, showOpaqueBackground: x = !1, hideRoleTag: j = !1, lineClamp: N = 1, cardWidth: O = 332, cardHeight: U, thumbnailHeight: P = 187, descriptionTextVariant: V = 'text-sm/normal', isDraft: y = !1 } = e,
        W = (0, l.hQ)(),
        I = (0, A.jsxs)(A.Fragment, {
            children: [
                (0, A.jsx)(f, {
                    showDraftBadge: y,
                    hidePurchaseToUnlockBadge: !0,
                    children: (0, A.jsx)('img', {
                        alt: '',
                        src: t,
                        className: u.productThumbnail,
                        style: { height: P }
                    })
                }),
                (0, A.jsxs)('div', {
                    className: u.productDetails,
                    children: [
                        (0, A.jsxs)('div', {
                            className: u.productDetailContent,
                            children: [
                                (0, A.jsx)(a.X6q, {
                                    variant: 'text-md/medium',
                                    color: 'header-primary',
                                    className: u.productName,
                                    id: W,
                                    children: r
                                }),
                                (0, A.jsx)(a.Rny, {
                                    children: (0, A.jsx)(i.Z, {
                                        variant: V,
                                        color: 'text-muted',
                                        lineClamp: N,
                                        text: n
                                    })
                                }),
                                h &&
                                    (0, A.jsx)(g, {
                                        onShowFullDescription: b,
                                        variant: V
                                    }),
                                j || null == p || '' === p.name
                                    ? null
                                    : (0, A.jsxs)(A.Fragment, {
                                          children: [(0, A.jsx)(a.LZC, { size: 16 }), (0, A.jsx)(c.Z, { role: p })]
                                      })
                            ]
                        }),
                        q
                    ]
                }),
                (0, A.jsxs)('div', {
                    className: u.purchaseDetails,
                    children: [
                        (0, A.jsx)(a.Text, {
                            variant: 'text-md/medium',
                            color: 'interactive-active',
                            className: u.__invalid_productPrice,
                            children: null != s ? s : d.NW.string(d.t['4uLhAg'])
                        }),
                        (0, A.jsx)(a.Text, {
                            variant: 'text-xxs/normal',
                            color: 'text-normal',
                            className: u.__invalid_productType,
                            children: v
                        }),
                        (0, A.jsx)('div', {
                            className: u.productActionButton,
                            onClick: (e) => {
                                e.stopPropagation();
                            },
                            children: m
                        })
                    ]
                })
            ]
        });
    return null == C
        ? (0, A.jsx)('article', {
              className: o()(u.productCard, x ? u.opaqueBackground : u.solidBackground),
              'aria-labelledby': W,
              children: I
          })
        : (0, A.jsx)('div', {
              style: {
                  width: O,
                  height: U
              },
              children: (0, A.jsx)(a.kL8, {
                  tag: 'article',
                  'aria-label': d.NW.formatToPlainString(d.t['e+TmJS'], { productName: r }),
                  className: o()(u.productCard, x ? u.opaqueBackground : u.solidBackground, u.cardClickableContainer),
                  onClick: C,
                  children: I
              })
          });
}
