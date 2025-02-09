n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(481060),
    s = n(313201),
    o = n(240657),
    c = n(765400),
    d = n(916001),
    u = n(388032),
    m = n(537153);
function _(e) {
    let { hidePurchaseToUnlockBadge: t, showDraftBadge: n, className: l, children: s } = e;
    return (0, i.jsxs)('div', {
        className: a()(m.productThumbnailContainer, l),
        children: [
            s,
            !t &&
                (0, i.jsxs)('div', {
                    className: m.purchaseToUnlockBadge,
                    children: [
                        (0, i.jsx)(r.mBM, {
                            size: 'xs',
                            className: m.lockIcon,
                            color: 'currentColor',
                            'aria-hidden': !0
                        }),
                        (0, i.jsx)(r.Text, {
                            variant: 'text-sm/normal',
                            color: 'always-white',
                            className: m.__invalid_unlockText,
                            children: u.intl.string(u.t.YmIiSU)
                        })
                    ]
                }),
            n &&
                (0, i.jsx)('div', {
                    className: m.draftBadge,
                    children: (0, i.jsx)(c.v, {})
                })
        ]
    });
}
function h(e) {
    let { onShowFullDescription: t, variant: n } = e,
        l = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(r.Text, {
                    variant: n,
                    color: null != t ? 'text-link' : 'interactive-hover',
                    children: u.intl.string(u.t['5fmYjY'])
                }),
                (0, i.jsx)(r.ZSh, {
                    size: 'xs',
                    color: 'currentColor',
                    className: m.arrowIcon
                })
            ]
        });
    return null == t
        ? (0, i.jsx)('div', {
              className: m.showMoreButton,
              children: l
          })
        : (0, i.jsx)(r.P3F, {
              className: a()(m.showMoreButton, m.hasAction),
              onClick: (e) => {
                  e.stopPropagation(), null != t && t();
              },
              children: l
          });
}
function p(e) {
    let { imageUrl: t, name: n, description: l, formattedPrice: c, role: p, ctaComponent: g, shouldShowFullDescriptionButton: f = !0, onShowFullDescription: x, productType: C, onTapCard: v, actionMenu: E, showOpaqueBackground: I = !1, hideRoleTag: N = !1, lineClamp: S = 1, cardWidth: T = 332, cardHeight: b, thumbnailHeight: A = 187, descriptionTextVariant: j = 'text-sm/normal', isDraft: y = !1 } = e,
        Z = (0, s.hQ)(),
        R = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(_, {
                    showDraftBadge: y,
                    hidePurchaseToUnlockBadge: !0,
                    children: (0, i.jsx)('img', {
                        alt: '',
                        src: t,
                        className: m.productThumbnail,
                        style: { height: A }
                    })
                }),
                (0, i.jsxs)('div', {
                    className: m.productDetails,
                    children: [
                        (0, i.jsxs)('div', {
                            className: m.productDetailContent,
                            children: [
                                (0, i.jsx)(r.X6q, {
                                    variant: 'text-md/medium',
                                    color: 'header-primary',
                                    className: m.productName,
                                    id: Z,
                                    children: n
                                }),
                                (0, i.jsx)(r.Rny, {
                                    children: (0, i.jsx)(o.Z, {
                                        variant: j,
                                        color: 'text-muted',
                                        lineClamp: S,
                                        text: l
                                    })
                                }),
                                f &&
                                    (0, i.jsx)(h, {
                                        onShowFullDescription: x,
                                        variant: j
                                    }),
                                N || null == p || '' === p.name
                                    ? null
                                    : (0, i.jsxs)(i.Fragment, {
                                          children: [(0, i.jsx)(r.LZC, { size: 16 }), (0, i.jsx)(d.Z, { role: p })]
                                      })
                            ]
                        }),
                        E
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: m.purchaseDetails,
                    children: [
                        (0, i.jsx)(r.Text, {
                            variant: 'text-md/medium',
                            color: 'interactive-active',
                            className: m.__invalid_productPrice,
                            children: null != c ? c : u.intl.string(u.t['4uLhAg'])
                        }),
                        (0, i.jsx)(r.Text, {
                            variant: 'text-xxs/normal',
                            color: 'text-normal',
                            className: m.__invalid_productType,
                            children: C
                        }),
                        (0, i.jsx)('div', {
                            className: m.productActionButton,
                            onClick: (e) => {
                                e.stopPropagation();
                            },
                            children: g
                        })
                    ]
                })
            ]
        });
    return null == v
        ? (0, i.jsx)('article', {
              className: a()(m.productCard, I ? m.opaqueBackground : m.solidBackground),
              'aria-labelledby': Z,
              children: R
          })
        : (0, i.jsx)('div', {
              style: {
                  width: T,
                  height: b
              },
              children: (0, i.jsx)(r.kL8, {
                  tag: 'article',
                  'aria-label': u.intl.formatToPlainString(u.t['e+TmJS'], { productName: n }),
                  className: a()(m.productCard, I ? m.opaqueBackground : m.solidBackground, m.cardClickableContainer),
                  onClick: v,
                  children: R
              })
          });
}
