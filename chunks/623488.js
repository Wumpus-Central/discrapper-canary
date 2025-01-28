A.d(t, {
    Z: function () {
        return p;
    }
});
var n = A(200651);
A(192379);
var r = A(120356),
    a = A.n(r),
    i = A(481060),
    l = A(313201),
    o = A(240657),
    s = A(765400),
    d = A(916001),
    c = A(388032),
    u = A(921701);
function g(e) {
    let { hidePurchaseToUnlockBadge: t, showDraftBadge: A, className: r, children: l } = e;
    return (0, n.jsxs)('div', {
        className: a()(u.productThumbnailContainer, r),
        children: [
            l,
            !t &&
                (0, n.jsxs)('div', {
                    className: u.purchaseToUnlockBadge,
                    children: [
                        (0, n.jsx)(i.LockIcon, {
                            size: 'xs',
                            className: u.lockIcon,
                            color: 'currentColor',
                            'aria-hidden': !0
                        }),
                        (0, n.jsx)(i.Text, {
                            variant: 'text-sm/normal',
                            color: 'always-white',
                            className: u.__invalid_unlockText,
                            children: c.intl.string(c.t.YmIiSU)
                        })
                    ]
                }),
            A &&
                (0, n.jsx)('div', {
                    className: u.draftBadge,
                    children: (0, n.jsx)(s.v, {})
                })
        ]
    });
}
function h(e) {
    let { onShowFullDescription: t, variant: A } = e,
        r = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(i.Text, {
                    variant: A,
                    color: null != t ? 'text-link' : 'interactive-hover',
                    children: c.intl.string(c.t['5fmYjY'])
                }),
                (0, n.jsx)(i.ArrowSmallRightIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: u.arrowIcon
                })
            ]
        });
    return null == t
        ? (0, n.jsx)('div', {
              className: u.showMoreButton,
              children: r
          })
        : (0, n.jsx)(i.Clickable, {
              className: a()(u.showMoreButton, u.hasAction),
              onClick: (e) => {
                  e.stopPropagation(), null != t && t();
              },
              children: r
          });
}
function p(e) {
    let { imageUrl: t, name: A, description: r, formattedPrice: s, role: p, ctaComponent: m, shouldShowFullDescriptionButton: f = !0, onShowFullDescription: v, productType: C, onTapCard: q, actionMenu: x, showOpaqueBackground: b = !1, hideRoleTag: U = !1, lineClamp: V = 1, cardWidth: j = 332, cardHeight: I, thumbnailHeight: N = 187, descriptionTextVariant: T = 'text-sm/normal', isDraft: F = !1 } = e,
        P = (0, l.hQ)(),
        K = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(g, {
                    showDraftBadge: F,
                    hidePurchaseToUnlockBadge: !0,
                    children: (0, n.jsx)('img', {
                        alt: '',
                        src: t,
                        className: u.productThumbnail,
                        style: { height: N }
                    })
                }),
                (0, n.jsxs)('div', {
                    className: u.productDetails,
                    children: [
                        (0, n.jsxs)('div', {
                            className: u.productDetailContent,
                            children: [
                                (0, n.jsx)(i.Heading, {
                                    variant: 'text-md/medium',
                                    color: 'header-primary',
                                    className: u.productName,
                                    id: P,
                                    children: A
                                }),
                                (0, n.jsx)(i.FocusBlock, {
                                    children: (0, n.jsx)(o.Z, {
                                        variant: T,
                                        color: 'text-muted',
                                        lineClamp: V,
                                        text: r
                                    })
                                }),
                                f &&
                                    (0, n.jsx)(h, {
                                        onShowFullDescription: v,
                                        variant: T
                                    }),
                                U || null == p || '' === p.name
                                    ? null
                                    : (0, n.jsxs)(n.Fragment, {
                                          children: [(0, n.jsx)(i.Spacer, { size: 16 }), (0, n.jsx)(d.Z, { role: p })]
                                      })
                            ]
                        }),
                        x
                    ]
                }),
                (0, n.jsxs)('div', {
                    className: u.purchaseDetails,
                    children: [
                        (0, n.jsx)(i.Text, {
                            variant: 'text-md/medium',
                            color: 'interactive-active',
                            className: u.__invalid_productPrice,
                            children: null != s ? s : c.intl.string(c.t['4uLhAg'])
                        }),
                        (0, n.jsx)(i.Text, {
                            variant: 'text-xxs/normal',
                            color: 'text-normal',
                            className: u.__invalid_productType,
                            children: C
                        }),
                        (0, n.jsx)('div', {
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
    return null == q
        ? (0, n.jsx)('article', {
              className: a()(u.productCard, b ? u.opaqueBackground : u.solidBackground),
              'aria-labelledby': P,
              children: K
          })
        : (0, n.jsx)('div', {
              style: {
                  width: j,
                  height: I
              },
              children: (0, n.jsx)(i.ClickableContainer, {
                  tag: 'article',
                  'aria-label': c.intl.formatToPlainString(c.t['e+TmJS'], { productName: A }),
                  className: a()(u.productCard, b ? u.opaqueBackground : u.solidBackground, u.cardClickableContainer),
                  onClick: q,
                  children: K
              })
          });
}
