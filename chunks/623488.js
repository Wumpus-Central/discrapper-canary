r.d(t, { Z: () => p }), r(266796);
var n = r(200651);
r(192379);
var A = r(120356),
    a = r.n(A),
    o = r(481060),
    l = r(313201),
    i = r(240657),
    s = r(765400),
    c = r(916001),
    d = r(388032),
    u = r(940792);
function g(e) {
    let { hidePurchaseToUnlockBadge: t, showDraftBadge: r, className: A, children: l } = e;
    return (0, n.jsxs)('div', {
        className: a()(u.productThumbnailContainer, A),
        children: [
            l,
            !t &&
                (0, n.jsxs)('div', {
                    className: u.purchaseToUnlockBadge,
                    children: [
                        (0, n.jsx)(o.mBM, {
                            size: 'xs',
                            className: u.lockIcon,
                            color: 'currentColor',
                            'aria-hidden': !0
                        }),
                        (0, n.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            color: 'always-white',
                            className: u.__invalid_unlockText,
                            children: d.NW.string(d.t.YmIiSU)
                        })
                    ]
                }),
            r &&
                (0, n.jsx)('div', {
                    className: u.draftBadge,
                    children: (0, n.jsx)(s.v, {})
                })
        ]
    });
}
function f(e) {
    let { onShowFullDescription: t, variant: r } = e,
        A = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(o.Text, {
                    variant: r,
                    color: null != t ? 'text-link' : 'interactive-hover',
                    children: d.NW.string(d.t['5fmYjY'])
                }),
                (0, n.jsx)(o.ZSh, {
                    size: 'xs',
                    color: 'currentColor',
                    className: u.arrowIcon
                })
            ]
        });
    return null == t
        ? (0, n.jsx)('div', {
              className: u.showMoreButton,
              children: A
          })
        : (0, n.jsx)(o.P3F, {
              className: a()(u.showMoreButton, u.hasAction),
              onClick: (e) => {
                  e.stopPropagation(), null != t && t();
              },
              children: A
          });
}
function p(e) {
    let { imageUrl: t, name: r, description: A, formattedPrice: s, role: p, ctaComponent: h, shouldShowFullDescriptionButton: m = !0, onShowFullDescription: b, productType: v, onTapCard: C, actionMenu: q, showOpaqueBackground: x = !1, hideRoleTag: j = !1, lineClamp: N = 1, cardWidth: O = 332, cardHeight: U, thumbnailHeight: P = 187, descriptionTextVariant: y = 'text-sm/normal', isDraft: V = !1 } = e,
        W = (0, l.hQ)(),
        I = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(g, {
                    showDraftBadge: V,
                    hidePurchaseToUnlockBadge: !0,
                    children: (0, n.jsx)('img', {
                        alt: '',
                        src: t,
                        className: u.productThumbnail,
                        style: { height: P }
                    })
                }),
                (0, n.jsxs)('div', {
                    className: u.productDetails,
                    children: [
                        (0, n.jsxs)('div', {
                            className: u.productDetailContent,
                            children: [
                                (0, n.jsx)(o.X6q, {
                                    variant: 'text-md/medium',
                                    color: 'header-primary',
                                    className: u.productName,
                                    id: W,
                                    children: r
                                }),
                                (0, n.jsx)(o.Rny, {
                                    children: (0, n.jsx)(i.Z, {
                                        variant: y,
                                        color: 'text-muted',
                                        lineClamp: N,
                                        text: A
                                    })
                                }),
                                m &&
                                    (0, n.jsx)(f, {
                                        onShowFullDescription: b,
                                        variant: y
                                    }),
                                j || null == p || '' === p.name
                                    ? null
                                    : (0, n.jsxs)(n.Fragment, {
                                          children: [(0, n.jsx)(o.LZC, { size: 16 }), (0, n.jsx)(c.Z, { role: p })]
                                      })
                            ]
                        }),
                        q
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: u.purchaseDetails,
                    children: [
                        (0, n.jsx)(o.Text, {
                            variant: 'text-md/medium',
                            color: 'interactive-active',
                            className: u.__invalid_productPrice,
                            children: null != s ? s : d.NW.string(d.t['4uLhAg'])
                        }),
                        (0, n.jsx)(o.Text, {
                            variant: 'text-xxs/normal',
                            color: 'text-normal',
                            className: u.__invalid_productType,
                            children: v
                        }),
                        (0, n.jsx)('div', {
                            className: u.productActionButton,
                            onClick: (e) => {
                                e.stopPropagation();
                            },
                            children: h
                        })
                    ]
                })
            ]
        });
    return null == C
        ? (0, n.jsx)('article', {
              className: a()(u.productCard, x ? u.opaqueBackground : u.solidBackground),
              'aria-labelledby': W,
              children: I
          })
        : (0, n.jsx)('div', {
              style: {
                  width: O,
                  height: U
              },
              children: (0, n.jsx)(o.kL8, {
                  tag: 'article',
                  'aria-label': d.NW.formatToPlainString(d.t['e+TmJS'], { productName: r }),
                  className: a()(u.productCard, x ? u.opaqueBackground : u.solidBackground, u.cardClickableContainer),
                  onClick: C,
                  children: I
              })
          });
}
