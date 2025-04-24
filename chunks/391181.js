n.d(t, {
    Z: () => g,
    m: () => T
});
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    a = n(239091),
    u = n(166081),
    c = n(937615),
    s = n(942833),
    d = n(48691),
    p = n(231338),
    f = n(388032),
    E = n(306846);
function O(e) {
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
function S(e, t) {
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
function _(e) {
    let { showEditProduct: t, showUnpublishProduct: n, showCopyLink: i, showTestDownload: l, showDeleteProduct: a, showReportProduct: u, onEditProduct: c, onUnpublishProduct: s, onDeleteProduct: d, onCopyLink: p, onTestDownload: O, onReportProduct: S, closePopout: _, onSelect: T } = e;
    return (0, r.jsx)('div', {
        className: E.menuContainer,
        children: (0, r.jsxs)(o.v2r, {
            navId: 'guild-product-context',
            onClose: _,
            'aria-label': f.intl.string(f.t.Z146dH),
            onSelect: T,
            children: [
                (0, r.jsxs)(o.kSQ, {
                    children: [
                        t &&
                            (0, r.jsx)(o.sNh, {
                                id: 'guild-product-edit',
                                label: f.intl.string(f.t.EEfce3),
                                action: c
                            }),
                        i &&
                            (0, r.jsx)(o.sNh, {
                                id: 'guild-product-copy-link',
                                label: f.intl.string(f.t.XR26ur),
                                icon: o.xPt,
                                action: p
                            }),
                        l &&
                            (0, r.jsx)(o.sNh, {
                                id: 'guild-product-test-download',
                                label: f.intl.string(f.t.aXoI6e),
                                icon: o._8t,
                                action: O
                            })
                    ]
                }),
                (0, r.jsxs)(o.kSQ, {
                    children: [
                        n &&
                            (0, r.jsx)(o.sNh, {
                                id: 'guild-product-unpublish',
                                label: f.intl.string(f.t.QrkMlJ),
                                action: s
                            }),
                        a &&
                            (0, r.jsx)(o.sNh, {
                                id: 'guild-product-delete',
                                label: f.intl.string(f.t.zWjqvL),
                                color: 'danger',
                                action: d
                            })
                    ]
                }),
                (0, r.jsx)(o.kSQ, {
                    children:
                        u &&
                        (0, r.jsx)(o.sNh, {
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
function T(e) {
    let { product: t, guildId: n, showEditProduct: i, showUnpublishProduct: l, showTestDownload: a, showCopyLink: u, showDeleteProduct: c, showReportProduct: s, onEditProduct: d, onUnpublishProduct: p, onDeleteProduct: T, onCopyProductLink: g, onTestDownload: I, onReportProduct: b } = e;
    return (0, r.jsx)('div', {
        onClick: (e) => {
            e.stopPropagation();
        },
        children: (0, r.jsx)(o.yRy, {
            position: 'right',
            align: 'top',
            spacing: -8,
            animation: o.yRy.Animation.FADE,
            renderPopout: (e) =>
                (0, r.jsx)(
                    _,
                    S(O({}, e), {
                        guildId: n,
                        productId: t.id,
                        showEditProduct: i,
                        showUnpublishProduct: l,
                        showCopyLink: u,
                        showTestDownload: a,
                        showReportProduct: s,
                        showDeleteProduct: c,
                        onEditProduct: d,
                        onUnpublishProduct: p,
                        onDeleteProduct: T,
                        onCopyLink: g,
                        onTestDownload: I,
                        onReportProduct: b
                    })
                ),
            children: (e, n) => {
                let { isShown: i } = n;
                return (0, r.jsx)(
                    o.P3F,
                    S(O({}, e), {
                        'aria-label': f.intl.formatToPlainString(f.t.RtqjeH, { productName: t.name }),
                        'aria-haspopup': 'listbox',
                        'aria-expanded': i,
                        className: E.productActionMenuButton,
                        children: (0, r.jsx)(o.Huf, {
                            size: 'md',
                            color: 'currentColor',
                            className: E.productActionMenuIcon,
                            'aria-hidden': !0
                        })
                    })
                );
            }
        })
    });
}
function g(e) {
    let { product: t, guildId: n, onEditProduct: i, onUnpublishProduct: g, onDeleteProduct: I, onCopyProductLink: b, onTestDownload: h, disabled: y = !1 } = e,
        C = (0, u.U)(t, 600),
        N = null !== t.price_tier ? (0, c.T4)(t.price_tier, p.pK.USD) : void 0,
        P = (0, s.C)(t);
    return (0, r.jsxs)(o.kL8, {
        tag: 'article',
        className: l()(E.productCardClickable, E.productCard, { [E.disabled]: y }),
        onClick: y ? void 0 : i,
        onContextMenu: function (e) {
            (0, a.jW)(e, () =>
                Promise.resolve((e) =>
                    (0, r.jsx)(
                        _,
                        S(O({}, e), {
                            closePopout: a.Zy,
                            guildId: n,
                            productId: t.id,
                            showEditProduct: !0,
                            showUnpublishProduct: t.published,
                            showCopyLink: t.published,
                            showTestDownload: null != t.attachments,
                            showDeleteProduct: !0,
                            showReportProduct: !1,
                            onEditProduct: i,
                            onUnpublishProduct: g,
                            onDeleteProduct: I,
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
                src: C,
                className: E.productThumbnail
            }),
            (0, r.jsxs)('div', {
                className: E.productInfo,
                children: [
                    (0, r.jsxs)('div', {
                        className: E.productInfoContent,
                        children: [
                            (0, r.jsx)(o.X6q, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: E.productName,
                                children: t.name
                            }),
                            (0, r.jsx)(o.LZC, { size: 8 }),
                            (0, r.jsxs)('div', {
                                className: E.productDetails,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-secondary',
                                        children: N
                                    }),
                                    null != P
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)('div', { className: E.dotSeparator }),
                                                  (0, r.jsx)(o.Text, {
                                                      variant: 'text-md/normal',
                                                      color: 'header-secondary',
                                                      children: P
                                                  })
                                              ]
                                          })
                                        : null
                                ]
                            }),
                            (0, r.jsx)(o.LZC, { size: 16 }),
                            t.published ? (0, r.jsx)(d.t, {}) : (0, r.jsx)(d.b, {})
                        ]
                    }),
                    !y &&
                        (0, r.jsx)(T, {
                            product: t,
                            guildId: n,
                            showEditProduct: !0,
                            showUnpublishProduct: t.published,
                            showCopyLink: t.published,
                            showTestDownload: null != t.attachments,
                            showDeleteProduct: !0,
                            showReportProduct: !1,
                            onEditProduct: i,
                            onUnpublishProduct: g,
                            onDeleteProduct: I,
                            onCopyProductLink: b,
                            onTestDownload: h,
                            onReportProduct: () => {}
                        })
                ]
            })
        ]
    });
}
