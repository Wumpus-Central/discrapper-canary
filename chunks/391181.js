n.d(t, {
    Z: () => y,
    m: () => E
});
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(239091),
    c = n(166081),
    u = n(937615),
    d = n(942833),
    p = n(48691),
    m = n(231338),
    f = n(388032),
    _ = n(306846);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function g(e, t) {
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
function b(e) {
    let { showEditProduct: t, showUnpublishProduct: n, showCopyLink: i, showTestDownload: l, showDeleteProduct: a, showReportProduct: s, onEditProduct: c, onUnpublishProduct: u, onDeleteProduct: d, onCopyLink: p, onTestDownload: m, onReportProduct: h, closePopout: g, onSelect: b } = e;
    return (0, r.jsx)('div', {
        className: _.menuContainer,
        children: (0, r.jsxs)(o.v2r, {
            navId: 'guild-product-context',
            onClose: g,
            'aria-label': f.intl.string(f.t.Z146dH),
            onSelect: b,
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
                                action: m
                            })
                    ]
                }),
                (0, r.jsxs)(o.kSQ, {
                    children: [
                        n &&
                            (0, r.jsx)(o.sNh, {
                                id: 'guild-product-unpublish',
                                label: f.intl.string(f.t.QrkMlJ),
                                action: u
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
                        s &&
                        (0, r.jsx)(o.sNh, {
                            id: 'guild-product-report',
                            label: f.intl.string(f.t['6yUzvL']),
                            color: 'danger',
                            action: h
                        })
                })
            ]
        })
    });
}
function E(e) {
    let { product: t, guildId: n, showEditProduct: l, showUnpublishProduct: a, showTestDownload: s, showCopyLink: c, showDeleteProduct: u, showReportProduct: d, onEditProduct: p, onUnpublishProduct: m, onDeleteProduct: E, onCopyProductLink: y, onTestDownload: C, onReportProduct: x } = e,
        v = i.useRef(null);
    return (0, r.jsx)('div', {
        onClick: (e) => {
            e.stopPropagation();
        },
        children: (0, r.jsx)(o.yRy, {
            targetElementRef: v,
            position: 'right',
            align: 'top',
            spacing: -8,
            animation: o.yRy.Animation.FADE,
            renderPopout: (e) =>
                (0, r.jsx)(
                    b,
                    g(h({}, e), {
                        guildId: n,
                        productId: t.id,
                        showEditProduct: l,
                        showUnpublishProduct: a,
                        showCopyLink: c,
                        showTestDownload: s,
                        showReportProduct: d,
                        showDeleteProduct: u,
                        onEditProduct: p,
                        onUnpublishProduct: m,
                        onDeleteProduct: E,
                        onCopyLink: y,
                        onTestDownload: C,
                        onReportProduct: x
                    })
                ),
            children: (e, n) => {
                let { isShown: i } = n;
                return (0, r.jsx)(
                    o.P3F,
                    g(h({}, e), {
                        innerRef: v,
                        'aria-label': f.intl.formatToPlainString(f.t.RtqjeH, { productName: t.name }),
                        'aria-haspopup': 'listbox',
                        'aria-expanded': i,
                        className: _.productActionMenuButton,
                        children: (0, r.jsx)(o.Huf, {
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
function y(e) {
    let { product: t, guildId: n, onEditProduct: i, onUnpublishProduct: l, onDeleteProduct: y, onCopyProductLink: C, onTestDownload: x, disabled: v = !1 } = e,
        O = (0, c.U)(t, 600),
        j = null !== t.price_tier ? (0, u.T4)(t.price_tier, m.pK.USD) : void 0,
        I = (0, d.C)(t);
    return (0, r.jsxs)(o.kL8, {
        tag: 'article',
        className: a()(_.productCardClickable, _.productCard, { [_.disabled]: v }),
        onClick: v ? void 0 : i,
        onContextMenu: function (e) {
            (0, s.jW)(e, () =>
                Promise.resolve((e) =>
                    (0, r.jsx)(
                        b,
                        g(h({}, e), {
                            closePopout: s.Zy,
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
                            onDeleteProduct: y,
                            onCopyLink: C,
                            onTestDownload: x,
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
                src: O,
                className: _.productThumbnail
            }),
            (0, r.jsxs)('div', {
                className: _.productInfo,
                children: [
                    (0, r.jsxs)('div', {
                        className: _.productInfoContent,
                        children: [
                            (0, r.jsx)(o.X6q, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: _.productName,
                                children: t.name
                            }),
                            (0, r.jsx)(o.LZC, { size: 8 }),
                            (0, r.jsxs)('div', {
                                className: _.productDetails,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-secondary',
                                        children: j
                                    }),
                                    null != I
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)('div', { className: _.dotSeparator }),
                                                  (0, r.jsx)(o.Text, {
                                                      variant: 'text-md/normal',
                                                      color: 'header-secondary',
                                                      children: I
                                                  })
                                              ]
                                          })
                                        : null
                                ]
                            }),
                            (0, r.jsx)(o.LZC, { size: 16 }),
                            t.published ? (0, r.jsx)(p.t, {}) : (0, r.jsx)(p.b, {})
                        ]
                    }),
                    !v &&
                        (0, r.jsx)(E, {
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
                            onDeleteProduct: y,
                            onCopyProductLink: C,
                            onTestDownload: x,
                            onReportProduct: () => {}
                        })
                ]
            })
        ]
    });
}
