n.d(t, {
    Z: () => m,
    m: () => E
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    o = n(481060),
    s = n(239091),
    a = n(166081),
    u = n(937615),
    d = n(942833),
    c = n(48691),
    h = n(231338),
    f = n(388032),
    p = n(417245);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e) {
    let { showEditProduct: t, showUnpublishProduct: n, showCopyLink: r, showTestDownload: l, showDeleteProduct: s, showReportProduct: a, onEditProduct: u, onUnpublishProduct: d, onDeleteProduct: c, onCopyLink: h, onTestDownload: g, onReportProduct: v, closePopout: C, onSelect: E } = e;
    return (0, i.jsx)('div', {
        className: p.menuContainer,
        children: (0, i.jsxs)(o.v2r, {
            navId: 'guild-product-context',
            onClose: C,
            'aria-label': f.NW.string(f.t.Z146dH),
            onSelect: E,
            children: [
                (0, i.jsxs)(o.kSQ, {
                    children: [
                        t &&
                            (0, i.jsx)(o.sNh, {
                                id: 'guild-product-edit',
                                label: f.NW.string(f.t.EEfce3),
                                action: u
                            }),
                        r &&
                            (0, i.jsx)(o.sNh, {
                                id: 'guild-product-copy-link',
                                label: f.NW.string(f.t.XR26ur),
                                icon: o.xPt,
                                action: h
                            }),
                        l &&
                            (0, i.jsx)(o.sNh, {
                                id: 'guild-product-test-download',
                                label: f.NW.string(f.t.aXoI6e),
                                icon: o._8t,
                                action: g
                            })
                    ]
                }),
                (0, i.jsxs)(o.kSQ, {
                    children: [
                        n &&
                            (0, i.jsx)(o.sNh, {
                                id: 'guild-product-unpublish',
                                label: f.NW.string(f.t.QrkMlJ),
                                action: d
                            }),
                        s &&
                            (0, i.jsx)(o.sNh, {
                                id: 'guild-product-delete',
                                label: f.NW.string(f.t.zWjqvL),
                                color: 'danger',
                                action: c
                            })
                    ]
                }),
                (0, i.jsx)(o.kSQ, {
                    children:
                        a &&
                        (0, i.jsx)(o.sNh, {
                            id: 'guild-product-report',
                            label: f.NW.string(f.t['6yUzvL']),
                            color: 'danger',
                            action: v
                        })
                })
            ]
        })
    });
}
function E(e) {
    let { product: t, guildId: n, showEditProduct: r, showUnpublishProduct: l, showTestDownload: s, showCopyLink: a, showDeleteProduct: u, showReportProduct: d, onEditProduct: c, onUnpublishProduct: h, onDeleteProduct: E, onCopyProductLink: m, onTestDownload: O, onReportProduct: S } = e;
    return (0, i.jsx)('div', {
        onClick: (e) => {
            e.stopPropagation();
        },
        children: (0, i.jsx)(o.yRy, {
            position: 'right',
            align: 'top',
            spacing: -8,
            animation: o.yRy.Animation.FADE,
            renderPopout: (e) =>
                (0, i.jsx)(
                    C,
                    v(g({}, e), {
                        guildId: n,
                        productId: t.id,
                        showEditProduct: r,
                        showUnpublishProduct: l,
                        showCopyLink: a,
                        showTestDownload: s,
                        showReportProduct: d,
                        showDeleteProduct: u,
                        onEditProduct: c,
                        onUnpublishProduct: h,
                        onDeleteProduct: E,
                        onCopyLink: m,
                        onTestDownload: O,
                        onReportProduct: S
                    })
                ),
            children: (e, n) => {
                let { isShown: r } = n;
                return (0, i.jsx)(
                    o.P3F,
                    v(g({}, e), {
                        'aria-label': f.NW.formatToPlainString(f.t.RtqjeH, { productName: t.name }),
                        'aria-haspopup': 'listbox',
                        'aria-expanded': r,
                        className: p.productActionMenuButton,
                        children: (0, i.jsx)(o.Huf, {
                            size: 'md',
                            color: 'currentColor',
                            className: p.productActionMenuIcon,
                            'aria-hidden': !0
                        })
                    })
                );
            }
        })
    });
}
function m(e) {
    let { product: t, guildId: n, onEditProduct: r, onUnpublishProduct: m, onDeleteProduct: O, onCopyProductLink: S, onTestDownload: b, disabled: _ = !1 } = e,
        I = (0, a.U)(t, 600),
        y = null !== t.price_tier ? (0, u.T4)(t.price_tier, h.pK.USD) : void 0,
        N = (0, d.C)(t);
    return (0, i.jsxs)(o.kL8, {
        tag: 'article',
        className: l()(p.productCardClickable, p.productCard, { [p.disabled]: _ }),
        onClick: _ ? void 0 : r,
        onContextMenu: function (e) {
            (0, s.jW)(e, () =>
                Promise.resolve((e) =>
                    (0, i.jsx)(
                        C,
                        v(g({}, e), {
                            closePopout: s.Zy,
                            guildId: n,
                            productId: t.id,
                            showEditProduct: !0,
                            showUnpublishProduct: t.published,
                            showCopyLink: t.published,
                            showTestDownload: null != t.attachments,
                            showDeleteProduct: !0,
                            showReportProduct: !1,
                            onEditProduct: r,
                            onUnpublishProduct: m,
                            onDeleteProduct: O,
                            onCopyLink: S,
                            onTestDownload: b,
                            onReportProduct: () => {}
                        })
                    )
                )
            );
        },
        'aria-label': f.NW.formatToPlainString(f.t['X/yAKi'], { productName: t.name }),
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: I,
                className: p.productThumbnail
            }),
            (0, i.jsxs)('div', {
                className: p.productInfo,
                children: [
                    (0, i.jsxs)('div', {
                        className: p.productInfoContent,
                        children: [
                            (0, i.jsx)(o.X6q, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: p.productName,
                                children: t.name
                            }),
                            (0, i.jsx)(o.LZC, { size: 8 }),
                            (0, i.jsxs)('div', {
                                className: p.productDetails,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-secondary',
                                        children: y
                                    }),
                                    null != N
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)('div', { className: p.dotSeparator }),
                                                  (0, i.jsx)(o.Text, {
                                                      variant: 'text-md/normal',
                                                      color: 'header-secondary',
                                                      children: N
                                                  })
                                              ]
                                          })
                                        : null
                                ]
                            }),
                            (0, i.jsx)(o.LZC, { size: 16 }),
                            t.published ? (0, i.jsx)(c.t, {}) : (0, i.jsx)(c.b, {})
                        ]
                    }),
                    !_ &&
                        (0, i.jsx)(E, {
                            product: t,
                            guildId: n,
                            showEditProduct: !0,
                            showUnpublishProduct: t.published,
                            showCopyLink: t.published,
                            showTestDownload: null != t.attachments,
                            showDeleteProduct: !0,
                            showReportProduct: !1,
                            onEditProduct: r,
                            onUnpublishProduct: m,
                            onDeleteProduct: O,
                            onCopyProductLink: S,
                            onTestDownload: b,
                            onReportProduct: () => {}
                        })
                ]
            })
        ]
    });
}
