n.d(t, { Z: () => h }), n(953529);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    l = n(481060),
    o = n(313201),
    s = n(240657),
    c = n(765400),
    u = n(916001),
    d = n(388032),
    p = n(940792);
function m(e) {
    let { hidePurchaseToUnlockBadge: t, showDraftBadge: n, className: i, children: o } = e;
    return (0, r.jsxs)('div', {
        className: a()(p.productThumbnailContainer, i),
        children: [
            o,
            !t &&
                (0, r.jsxs)('div', {
                    className: p.purchaseToUnlockBadge,
                    children: [
                        (0, r.jsx)(l.mBM, {
                            size: 'xs',
                            className: p.lockIcon,
                            color: 'currentColor',
                            'aria-hidden': !0
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            color: 'always-white',
                            className: p.__invalid_unlockText,
                            children: d.NW.string(d.t.YmIiSU)
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
                (0, r.jsx)(l.Text, {
                    variant: n,
                    color: null != t ? 'text-link' : 'interactive-hover',
                    children: d.NW.string(d.t['5fmYjY'])
                }),
                (0, r.jsx)(l.ZSh, {
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
        : (0, r.jsx)(l.P3F, {
              className: a()(p.showMoreButton, p.hasAction),
              onClick: (e) => {
                  e.stopPropagation(), null != t && t();
              },
              children: i
          });
}
function h(e) {
    let { imageUrl: t, name: n, description: i, formattedPrice: c, role: h, ctaComponent: g, shouldShowFullDescriptionButton: _ = !0, onShowFullDescription: b, productType: x, onTapCard: y, actionMenu: E, showOpaqueBackground: v = !1, hideRoleTag: N = !1, lineClamp: O = 1, cardWidth: j = 332, cardHeight: C, thumbnailHeight: S = 187, descriptionTextVariant: I = 'text-sm/normal', isDraft: T = !1 } = e,
        P = (0, o.hQ)(),
        A = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(m, {
                    showDraftBadge: T,
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
                                (0, r.jsx)(l.X6q, {
                                    variant: 'text-md/medium',
                                    color: 'header-primary',
                                    className: p.productName,
                                    id: P,
                                    children: n
                                }),
                                (0, r.jsx)(l.Rny, {
                                    children: (0, r.jsx)(s.Z, {
                                        variant: I,
                                        color: 'text-muted',
                                        lineClamp: O,
                                        text: i
                                    })
                                }),
                                _ &&
                                    (0, r.jsx)(f, {
                                        onShowFullDescription: b,
                                        variant: I
                                    }),
                                N || null == h || '' === h.name
                                    ? null
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [(0, r.jsx)(l.LZC, { size: 16 }), (0, r.jsx)(u.Z, { role: h })]
                                      })
                            ]
                        }),
                        E
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: p.purchaseDetails,
                    children: [
                        (0, r.jsx)(l.Text, {
                            variant: 'text-md/medium',
                            color: 'interactive-active',
                            className: p.__invalid_productPrice,
                            children: null != c ? c : d.NW.string(d.t['4uLhAg'])
                        }),
                        (0, r.jsx)(l.Text, {
                            variant: 'text-xxs/normal',
                            color: 'text-normal',
                            className: p.__invalid_productType,
                            children: x
                        }),
                        (0, r.jsx)('div', {
                            className: p.productActionButton,
                            onClick: (e) => {
                                e.stopPropagation();
                            },
                            children: g
                        })
                    ]
                })
            ]
        });
    return null == y
        ? (0, r.jsx)('article', {
              className: a()(p.productCard, v ? p.opaqueBackground : p.solidBackground),
              'aria-labelledby': P,
              children: A
          })
        : (0, r.jsx)('div', {
              style: {
                  width: j,
                  height: C
              },
              children: (0, r.jsx)(l.kL8, {
                  tag: 'article',
                  'aria-label': d.NW.formatToPlainString(d.t['e+TmJS'], { productName: n }),
                  className: a()(p.productCard, v ? p.opaqueBackground : p.solidBackground, p.cardClickableContainer),
                  onClick: y,
                  children: A
              })
          });
}
