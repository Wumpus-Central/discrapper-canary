n.d(t, {
    Z: function () {
        return p;
    }
});
var A = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    l = n(481060),
    i = n(313201),
    o = n(240657),
    s = n(765400),
    d = n(916001),
    c = n(388032),
    u = n(921701);
function g(e) {
    let { hidePurchaseToUnlockBadge: t, showDraftBadge: n, className: r, children: i } = e;
    return (0, A.jsxs)('div', {
        className: a()(u.productThumbnailContainer, r),
        children: [
            i,
            !t &&
                (0, A.jsxs)('div', {
                    className: u.purchaseToUnlockBadge,
                    children: [
                        (0, A.jsx)(l.LockIcon, {
                            size: 'xs',
                            className: u.lockIcon,
                            color: 'currentColor',
                            'aria-hidden': !0
                        }),
                        (0, A.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            color: 'always-white',
                            className: u.__invalid_unlockText,
                            children: c.intl.string(c.t.YmIiSU)
                        })
                    ]
                }),
            n &&
                (0, A.jsx)('div', {
                    className: u.draftBadge,
                    children: (0, A.jsx)(s.v, {})
                })
        ]
    });
}
function h(e) {
    let { onShowFullDescription: t, variant: n } = e,
        r = (0, A.jsxs)(A.Fragment, {
            children: [
                (0, A.jsx)(l.Text, {
                    variant: n,
                    color: null != t ? 'text-link' : 'interactive-hover',
                    children: c.intl.string(c.t['5fmYjY'])
                }),
                (0, A.jsx)(l.ArrowSmallRightIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: u.arrowIcon
                })
            ]
        });
    return null == t
        ? (0, A.jsx)('div', {
              className: u.showMoreButton,
              children: r
          })
        : (0, A.jsx)(l.Clickable, {
              className: a()(u.showMoreButton, u.hasAction),
              onClick: (e) => {
                  e.stopPropagation(), null != t && t();
              },
              children: r
          });
}
function p(e) {
    let { imageUrl: t, name: n, description: r, formattedPrice: s, role: p, ctaComponent: m, shouldShowFullDescriptionButton: f = !0, onShowFullDescription: v, productType: C, onTapCard: q, actionMenu: x, showOpaqueBackground: b = !1, hideRoleTag: U = !1, lineClamp: V = 1, cardWidth: j = 332, cardHeight: I, thumbnailHeight: N = 187, descriptionTextVariant: T = 'text-sm/normal', isDraft: F = !1 } = e,
        P = (0, i.hQ)(),
        K = (0, A.jsxs)(A.Fragment, {
            children: [
                (0, A.jsx)(g, {
                    showDraftBadge: F,
                    hidePurchaseToUnlockBadge: !0,
                    children: (0, A.jsx)('img', {
                        alt: '',
                        src: t,
                        className: u.productThumbnail,
                        style: { height: N }
                    })
                }),
                (0, A.jsxs)('div', {
                    className: u.productDetails,
                    children: [
                        (0, A.jsxs)('div', {
                            className: u.productDetailContent,
                            children: [
                                (0, A.jsx)(l.Heading, {
                                    variant: 'text-md/medium',
                                    color: 'header-primary',
                                    className: u.productName,
                                    id: P,
                                    children: n
                                }),
                                (0, A.jsx)(l.FocusBlock, {
                                    children: (0, A.jsx)(o.Z, {
                                        variant: T,
                                        color: 'text-muted',
                                        lineClamp: V,
                                        text: r
                                    })
                                }),
                                f &&
                                    (0, A.jsx)(h, {
                                        onShowFullDescription: v,
                                        variant: T
                                    }),
                                U || null == p || '' === p.name
                                    ? null
                                    : (0, A.jsxs)(A.Fragment, {
                                          children: [(0, A.jsx)(l.Spacer, { size: 16 }), (0, A.jsx)(d.Z, { role: p })]
                                      })
                            ]
                        }),
                        x
                    ]
                }),
                (0, A.jsxs)('div', {
                    className: u.purchaseDetails,
                    children: [
                        (0, A.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            color: 'interactive-active',
                            className: u.__invalid_productPrice,
                            children: null != s ? s : c.intl.string(c.t['4uLhAg'])
                        }),
                        (0, A.jsx)(l.Text, {
                            variant: 'text-xxs/normal',
                            color: 'text-normal',
                            className: u.__invalid_productType,
                            children: C
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
    return null == q
        ? (0, A.jsx)('article', {
              className: a()(u.productCard, b ? u.opaqueBackground : u.solidBackground),
              'aria-labelledby': P,
              children: K
          })
        : (0, A.jsx)('div', {
              style: {
                  width: j,
                  height: I
              },
              children: (0, A.jsx)(l.ClickableContainer, {
                  tag: 'article',
                  'aria-label': c.intl.formatToPlainString(c.t['e+TmJS'], { productName: n }),
                  className: a()(u.productCard, b ? u.opaqueBackground : u.solidBackground, u.cardClickableContainer),
                  onClick: q,
                  children: K
              })
          });
}
