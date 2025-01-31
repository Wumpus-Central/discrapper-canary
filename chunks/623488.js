t.d(e, { Z: () => h });
var n = t(200651);
t(192379);
var a = t(120356),
    l = t.n(a),
    r = t(481060),
    i = t(313201),
    o = t(240657),
    s = t(765400),
    d = t(916001),
    c = t(388032),
    u = t(921701);
function g(A) {
    let { hidePurchaseToUnlockBadge: e, showDraftBadge: t, className: a, children: i } = A;
    return (0, n.jsxs)('div', {
        className: l()(u.productThumbnailContainer, a),
        children: [
            i,
            !e &&
                (0, n.jsxs)('div', {
                    className: u.purchaseToUnlockBadge,
                    children: [
                        (0, n.jsx)(r.mBM, {
                            size: 'xs',
                            className: u.lockIcon,
                            color: 'currentColor',
                            'aria-hidden': !0
                        }),
                        (0, n.jsx)(r.Text, {
                            variant: 'text-sm/normal',
                            color: 'always-white',
                            className: u.__invalid_unlockText,
                            children: c.intl.string(c.t.YmIiSU)
                        })
                    ]
                }),
            t &&
                (0, n.jsx)('div', {
                    className: u.draftBadge,
                    children: (0, n.jsx)(s.v, {})
                })
        ]
    });
}
function m(A) {
    let { onShowFullDescription: e, variant: t } = A,
        a = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(r.Text, {
                    variant: t,
                    color: null != e ? 'text-link' : 'interactive-hover',
                    children: c.intl.string(c.t['5fmYjY'])
                }),
                (0, n.jsx)(r.ZSh, {
                    size: 'xs',
                    color: 'currentColor',
                    className: u.arrowIcon
                })
            ]
        });
    return null == e
        ? (0, n.jsx)('div', {
              className: u.showMoreButton,
              children: a
          })
        : (0, n.jsx)(r.P3F, {
              className: l()(u.showMoreButton, u.hasAction),
              onClick: (A) => {
                  A.stopPropagation(), null != e && e();
              },
              children: a
          });
}
function h(A) {
    let { imageUrl: e, name: t, description: a, formattedPrice: s, role: h, ctaComponent: f, shouldShowFullDescriptionButton: C = !0, onShowFullDescription: p, productType: q, onTapCard: v, actionMenu: x, showOpaqueBackground: U = !1, hideRoleTag: b = !1, lineClamp: V = 1, cardWidth: j = 332, cardHeight: N, thumbnailHeight: I = 187, descriptionTextVariant: T = 'text-sm/normal', isDraft: F = !1 } = A,
        K = (0, i.hQ)(),
        P = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(g, {
                    showDraftBadge: F,
                    hidePurchaseToUnlockBadge: !0,
                    children: (0, n.jsx)('img', {
                        alt: '',
                        src: e,
                        className: u.productThumbnail,
                        style: { height: I }
                    })
                }),
                (0, n.jsxs)('div', {
                    className: u.productDetails,
                    children: [
                        (0, n.jsxs)('div', {
                            className: u.productDetailContent,
                            children: [
                                (0, n.jsx)(r.X6q, {
                                    variant: 'text-md/medium',
                                    color: 'header-primary',
                                    className: u.productName,
                                    id: K,
                                    children: t
                                }),
                                (0, n.jsx)(r.Rny, {
                                    children: (0, n.jsx)(o.Z, {
                                        variant: T,
                                        color: 'text-muted',
                                        lineClamp: V,
                                        text: a
                                    })
                                }),
                                C &&
                                    (0, n.jsx)(m, {
                                        onShowFullDescription: p,
                                        variant: T
                                    }),
                                b || null == h || '' === h.name
                                    ? null
                                    : (0, n.jsxs)(n.Fragment, {
                                          children: [(0, n.jsx)(r.LZC, { size: 16 }), (0, n.jsx)(d.Z, { role: h })]
                                      })
                            ]
                        }),
                        x
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: u.purchaseDetails,
                    children: [
                        (0, n.jsx)(r.Text, {
                            variant: 'text-md/medium',
                            color: 'interactive-active',
                            className: u.__invalid_productPrice,
                            children: null != s ? s : c.intl.string(c.t['4uLhAg'])
                        }),
                        (0, n.jsx)(r.Text, {
                            variant: 'text-xxs/normal',
                            color: 'text-normal',
                            className: u.__invalid_productType,
                            children: q
                        }),
                        (0, n.jsx)('div', {
                            className: u.productActionButton,
                            onClick: (A) => {
                                A.stopPropagation();
                            },
                            children: f
                        })
                    ]
                })
            ]
        });
    return null == v
        ? (0, n.jsx)('article', {
              className: l()(u.productCard, U ? u.opaqueBackground : u.solidBackground),
              'aria-labelledby': K,
              children: P
          })
        : (0, n.jsx)('div', {
              style: {
                  width: j,
                  height: N
              },
              children: (0, n.jsx)(r.kL8, {
                  tag: 'article',
                  'aria-label': c.intl.formatToPlainString(c.t['e+TmJS'], { productName: t }),
                  className: l()(u.productCard, U ? u.opaqueBackground : u.solidBackground, u.cardClickableContainer),
                  onClick: v,
                  children: P
              })
          });
}
