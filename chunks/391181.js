n.d(t, {
    Z: () => T,
    m: () => g
});
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    u = n(239091),
    c = n(166081),
    s = n(937615),
    d = n(942833),
    p = n(48691),
    E = n(231338),
    f = n(388032),
    _ = n(13531);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e) {
    let { showEditProduct: t, showUnpublishProduct: n, showCopyLink: i, showTestDownload: l, showDeleteProduct: o, showReportProduct: u, onEditProduct: c, onUnpublishProduct: s, onDeleteProduct: d, onCopyLink: p, onTestDownload: E, onReportProduct: S, closePopout: O, onSelect: I } = e;
    return (0, r.jsx)('div', {
        className: _.menuContainer,
        children: (0, r.jsxs)(a.v2r, {
            navId: 'guild-product-context',
            onClose: O,
            'aria-label': f.intl.string(f.t.Z146dH),
            onSelect: I,
            children: [
                (0, r.jsxs)(a.kSQ, {
                    children: [
                        t &&
                            (0, r.jsx)(a.sNh, {
                                id: 'guild-product-edit',
                                label: f.intl.string(f.t.EEfce3),
                                action: c
                            }),
                        i &&
                            (0, r.jsx)(a.sNh, {
                                id: 'guild-product-copy-link',
                                label: f.intl.string(f.t.XR26ur),
                                icon: a.xPt,
                                action: p
                            }),
                        l &&
                            (0, r.jsx)(a.sNh, {
                                id: 'guild-product-test-download',
                                label: f.intl.string(f.t.aXoI6e),
                                icon: a._8t,
                                action: E
                            })
                    ]
                }),
                (0, r.jsxs)(a.kSQ, {
                    children: [
                        n &&
                            (0, r.jsx)(a.sNh, {
                                id: 'guild-product-unpublish',
                                label: f.intl.string(f.t.QrkMlJ),
                                action: s
                            }),
                        o &&
                            (0, r.jsx)(a.sNh, {
                                id: 'guild-product-delete',
                                label: f.intl.string(f.t.zWjqvL),
                                color: 'danger',
                                action: d
                            })
                    ]
                }),
                (0, r.jsx)(a.kSQ, {
                    children:
                        u &&
                        (0, r.jsx)(a.sNh, {
                            id: 'guild-product-report',
                            label: f.intl.string(f.t['6yUzvL']),
                            color: 'danger',
                            action: S
                        })
                })
            ]
        })
    });
}
function g(e) {
    let { product: t, guildId: n, showEditProduct: l, showUnpublishProduct: o, showTestDownload: u, showCopyLink: c, showDeleteProduct: s, showReportProduct: d, onEditProduct: p, onUnpublishProduct: E, onDeleteProduct: g, onCopyProductLink: T, onTestDownload: b, onReportProduct: h } = e,
        C = i.useRef(null);
    return (0, r.jsx)('div', {
        onClick: (e) => {
            e.stopPropagation();
        },
        children: (0, r.jsx)(a.yRy, {
            targetElementRef: C,
            position: 'right',
            align: 'top',
            spacing: -8,
            animation: a.yRy.Animation.FADE,
            renderPopout: (e) =>
                (0, r.jsx)(
                    I,
                    O(S({}, e), {
                        guildId: n,
                        productId: t.id,
                        showEditProduct: l,
                        showUnpublishProduct: o,
                        showCopyLink: c,
                        showTestDownload: u,
                        showReportProduct: d,
                        showDeleteProduct: s,
                        onEditProduct: p,
                        onUnpublishProduct: E,
                        onDeleteProduct: g,
                        onCopyLink: T,
                        onTestDownload: b,
                        onReportProduct: h
                    })
                ),
            children: (e, n) => {
                let { isShown: i } = n;
                return (0, r.jsx)(
                    a.P3F,
                    O(S({}, e), {
                        innerRef: C,
                        'aria-label': f.intl.formatToPlainString(f.t.RtqjeH, { productName: t.name }),
                        'aria-haspopup': 'listbox',
                        'aria-expanded': i,
                        className: _.productActionMenuButton,
                        children: (0, r.jsx)(a.Huf, {
                            size: 'md',
                            color: 'currentColor',
                            className: _.productActionMenuIcon,
                            'aria-hidden': !0
                        })
                    })
                );
            }
        })
    });
}
function T(e) {
    let { product: t, guildId: n, onEditProduct: i, onUnpublishProduct: l, onDeleteProduct: T, onCopyProductLink: b, onTestDownload: h, disabled: C = !1 } = e,
        y = (0, c.U)(t, 600),
        P = null !== t.price_tier ? (0, s.T4)(t.price_tier, E.pK.USD) : void 0,
        N = (0, d.C)(t);
    return (0, r.jsxs)(a.kL8, {
        tag: 'article',
        className: o()(_.productCardClickable, _.productCard, { [_.disabled]: C }),
        onClick: C ? void 0 : i,
        onContextMenu: function (e) {
            (0, u.jW)(e, () =>
                Promise.resolve((e) =>
                    (0, r.jsx)(
                        I,
                        O(S({}, e), {
                            closePopout: u.Zy,
                            guildId: n,
                            productId: t.id,
                            showEditProduct: !0,
                            showUnpublishProduct: t.published,
                            showCopyLink: t.published,
                            showTestDownload: null != t.attachments,
                            showDeleteProduct: !0,
                            showReportProduct: !1,
                            onEditProduct: i,
                            onUnpublishProduct: l,
                            onDeleteProduct: T,
                            onCopyLink: b,
                            onTestDownload: h,
                            onReportProduct: () => {}
                        })
                    )
                )
            );
        },
        'aria-label': f.intl.formatToPlainString(f.t['X/yAKi'], { productName: t.name }),
        children: [
            (0, r.jsx)('img', {
                alt: '',
                src: y,
                className: _.productThumbnail
            }),
            (0, r.jsxs)('div', {
                className: _.productInfo,
                children: [
                    (0, r.jsxs)('div', {
                        className: _.productInfoContent,
                        children: [
                            (0, r.jsx)(a.X6q, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: _.productName,
                                children: t.name
                            }),
                            (0, r.jsx)(a.LZC, { size: 8 }),
                            (0, r.jsxs)('div', {
                                className: _.productDetails,
                                children: [
                                    (0, r.jsx)(a.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-secondary',
                                        children: P
                                    }),
                                    null != N
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)('div', { className: _.dotSeparator }),
                                                  (0, r.jsx)(a.Text, {
                                                      variant: 'text-md/normal',
                                                      color: 'header-secondary',
                                                      children: N
                                                  })
                                              ]
                                          })
                                        : null
                                ]
                            }),
                            (0, r.jsx)(a.LZC, { size: 16 }),
                            t.published ? (0, r.jsx)(p.t, {}) : (0, r.jsx)(p.b, {})
                        ]
                    }),
                    !C &&
                        (0, r.jsx)(g, {
                            product: t,
                            guildId: n,
                            showEditProduct: !0,
                            showUnpublishProduct: t.published,
                            showCopyLink: t.published,
                            showTestDownload: null != t.attachments,
                            showDeleteProduct: !0,
                            showReportProduct: !1,
                            onEditProduct: i,
                            onUnpublishProduct: l,
                            onDeleteProduct: T,
                            onCopyProductLink: b,
                            onTestDownload: h,
                            onReportProduct: () => {}
                        })
                ]
            })
        ]
    });
}
