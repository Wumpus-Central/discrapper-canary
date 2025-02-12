n.d(t, {
    Z: () => v,
    m: () => C
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    s = n(481060),
    a = n(239091),
    o = n(166081),
    d = n(937615),
    u = n(942833),
    c = n(48691),
    h = n(231338),
    g = n(388032),
    p = n(312658);
function f(e) {
    let { showEditProduct: t, showUnpublishProduct: n, showCopyLink: l, showTestDownload: r, showDeleteProduct: a, showReportProduct: o, onEditProduct: d, onUnpublishProduct: u, onDeleteProduct: c, onCopyLink: h, onTestDownload: f, onReportProduct: C, closePopout: v, onSelect: E } = e;
    return (0, i.jsx)('div', {
        className: p.menuContainer,
        children: (0, i.jsxs)(s.v2r, {
            navId: 'guild-product-context',
            onClose: v,
            'aria-label': g.intl.string(g.t.Z146dH),
            onSelect: E,
            children: [
                (0, i.jsxs)(s.kSQ, {
                    children: [
                        t &&
                            (0, i.jsx)(s.sNh, {
                                id: 'guild-product-edit',
                                label: g.intl.string(g.t.EEfce3),
                                action: d
                            }),
                        l &&
                            (0, i.jsx)(s.sNh, {
                                id: 'guild-product-copy-link',
                                label: g.intl.string(g.t.XR26ur),
                                icon: s.xPt,
                                action: h
                            }),
                        r &&
                            (0, i.jsx)(s.sNh, {
                                id: 'guild-product-test-download',
                                label: g.intl.string(g.t.aXoI6e),
                                icon: s._8t,
                                action: f
                            })
                    ]
                }),
                (0, i.jsxs)(s.kSQ, {
                    children: [
                        n &&
                            (0, i.jsx)(s.sNh, {
                                id: 'guild-product-unpublish',
                                label: g.intl.string(g.t.QrkMlJ),
                                action: u
                            }),
                        a &&
                            (0, i.jsx)(s.sNh, {
                                id: 'guild-product-delete',
                                label: g.intl.string(g.t.zWjqvL),
                                color: 'danger',
                                action: c
                            })
                    ]
                }),
                (0, i.jsx)(s.kSQ, {
                    children:
                        o &&
                        (0, i.jsx)(s.sNh, {
                            id: 'guild-product-report',
                            label: g.intl.string(g.t['6yUzvL']),
                            color: 'danger',
                            action: C
                        })
                })
            ]
        })
    });
}
function C(e) {
    let { product: t, guildId: n, showEditProduct: l, showUnpublishProduct: r, showTestDownload: a, showCopyLink: o, showDeleteProduct: d, showReportProduct: u, onEditProduct: c, onUnpublishProduct: h, onDeleteProduct: C, onCopyProductLink: v, onTestDownload: E, onReportProduct: m } = e;
    return (0, i.jsx)('div', {
        onClick: (e) => {
            e.stopPropagation();
        },
        children: (0, i.jsx)(s.yRy, {
            position: 'right',
            align: 'top',
            spacing: -8,
            animation: s.yRy.Animation.FADE,
            renderPopout: (e) =>
                (0, i.jsx)(f, {
                    ...e,
                    guildId: n,
                    productId: t.id,
                    showEditProduct: l,
                    showUnpublishProduct: r,
                    showCopyLink: o,
                    showTestDownload: a,
                    showReportProduct: u,
                    showDeleteProduct: d,
                    onEditProduct: c,
                    onUnpublishProduct: h,
                    onDeleteProduct: C,
                    onCopyLink: v,
                    onTestDownload: E,
                    onReportProduct: m
                }),
            children: (e, n) => {
                let { isShown: l } = n;
                return (0, i.jsx)(s.P3F, {
                    ...e,
                    'aria-label': g.intl.formatToPlainString(g.t.RtqjeH, { productName: t.name }),
                    'aria-haspopup': 'listbox',
                    'aria-expanded': l,
                    className: p.productActionMenuButton,
                    children: (0, i.jsx)(s.Huf, {
                        size: 'md',
                        color: 'currentColor',
                        className: p.productActionMenuIcon,
                        'aria-hidden': !0
                    })
                });
            }
        })
    });
}
function v(e) {
    let { product: t, guildId: n, onEditProduct: l, onUnpublishProduct: v, onDeleteProduct: E, onCopyProductLink: m, onTestDownload: _, disabled: I = !1 } = e,
        S = (0, o.U)(t, 600),
        T = null !== t.price_tier ? (0, d.T4)(t.price_tier, h.pK.USD) : void 0,
        N = (0, u.C)(t);
    return (0, i.jsxs)(s.kL8, {
        tag: 'article',
        className: r()(p.productCardClickable, p.productCard, { [p.disabled]: I }),
        onClick: I ? void 0 : l,
        onContextMenu: function (e) {
            (0, a.jW)(e, () =>
                Promise.resolve((e) =>
                    (0, i.jsx)(f, {
                        ...e,
                        closePopout: a.Zy,
                        guildId: n,
                        productId: t.id,
                        showEditProduct: !0,
                        showUnpublishProduct: t.published,
                        showCopyLink: t.published,
                        showTestDownload: null != t.attachments,
                        showDeleteProduct: !0,
                        showReportProduct: !1,
                        onEditProduct: l,
                        onUnpublishProduct: v,
                        onDeleteProduct: E,
                        onCopyLink: m,
                        onTestDownload: _,
                        onReportProduct: () => {}
                    })
                )
            );
        },
        'aria-label': g.intl.formatToPlainString(g.t['X/yAKi'], { productName: t.name }),
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: S,
                className: p.productThumbnail
            }),
            (0, i.jsxs)('div', {
                className: p.productInfo,
                children: [
                    (0, i.jsxs)('div', {
                        className: p.productInfoContent,
                        children: [
                            (0, i.jsx)(s.X6q, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: p.productName,
                                children: t.name
                            }),
                            (0, i.jsx)(s.LZC, { size: 8 }),
                            (0, i.jsxs)('div', {
                                className: p.productDetails,
                                children: [
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-secondary',
                                        children: T
                                    }),
                                    null != N
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)('div', { className: p.dotSeparator }),
                                                  (0, i.jsx)(s.Text, {
                                                      variant: 'text-md/normal',
                                                      color: 'header-secondary',
                                                      children: N
                                                  })
                                              ]
                                          })
                                        : null
                                ]
                            }),
                            (0, i.jsx)(s.LZC, { size: 16 }),
                            t.published ? (0, i.jsx)(c.t, {}) : (0, i.jsx)(c.b, {})
                        ]
                    }),
                    !I &&
                        (0, i.jsx)(C, {
                            product: t,
                            guildId: n,
                            showEditProduct: !0,
                            showUnpublishProduct: t.published,
                            showCopyLink: t.published,
                            showTestDownload: null != t.attachments,
                            showDeleteProduct: !0,
                            showReportProduct: !1,
                            onEditProduct: l,
                            onUnpublishProduct: v,
                            onDeleteProduct: E,
                            onCopyProductLink: m,
                            onTestDownload: _,
                            onReportProduct: () => {}
                        })
                ]
            })
        ]
    });
}
