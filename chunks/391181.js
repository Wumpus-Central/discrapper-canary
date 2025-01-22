e.d(n, {
    Z: function () {
        return S;
    },
    m: function () {
        return g;
    }
});
var i = e(200651);
e(192379);
var r = e(120356),
    l = e.n(r),
    u = e(481060),
    o = e(239091),
    a = e(166081),
    s = e(937615),
    c = e(942833),
    d = e(48691),
    f = e(231338),
    _ = e(388032),
    E = e(24753);
function p(t) {
    let { showEditProduct: n, showUnpublishProduct: e, showCopyLink: r, showTestDownload: l, showDeleteProduct: o, showReportProduct: a, onEditProduct: s, onUnpublishProduct: c, onDeleteProduct: d, onCopyLink: f, onTestDownload: p, onReportProduct: g, closePopout: S, onSelect: m } = t;
    return (0, i.jsx)('div', {
        className: E.menuContainer,
        children: (0, i.jsxs)(u.Menu, {
            navId: 'guild-product-context',
            onClose: S,
            'aria-label': _.intl.string(_.t.Z146dH),
            onSelect: m,
            children: [
                (0, i.jsxs)(u.MenuGroup, {
                    children: [
                        n &&
                            (0, i.jsx)(u.MenuItem, {
                                id: 'guild-product-edit',
                                label: _.intl.string(_.t.EEfce3),
                                action: s
                            }),
                        r &&
                            (0, i.jsx)(u.MenuItem, {
                                id: 'guild-product-copy-link',
                                label: _.intl.string(_.t.XR26ur),
                                icon: u.LinkIcon,
                                action: f
                            }),
                        l &&
                            (0, i.jsx)(u.MenuItem, {
                                id: 'guild-product-test-download',
                                label: _.intl.string(_.t.aXoI6e),
                                icon: u.DownloadIcon,
                                action: p
                            })
                    ]
                }),
                (0, i.jsxs)(u.MenuGroup, {
                    children: [
                        e &&
                            (0, i.jsx)(u.MenuItem, {
                                id: 'guild-product-unpublish',
                                label: _.intl.string(_.t.QrkMlJ),
                                action: c
                            }),
                        o &&
                            (0, i.jsx)(u.MenuItem, {
                                id: 'guild-product-delete',
                                label: _.intl.string(_.t.zWjqvL),
                                color: 'danger',
                                action: d
                            })
                    ]
                }),
                (0, i.jsx)(u.MenuGroup, {
                    children:
                        a &&
                        (0, i.jsx)(u.MenuItem, {
                            id: 'guild-product-report',
                            label: _.intl.string(_.t['6yUzvL']),
                            color: 'danger',
                            action: g
                        })
                })
            ]
        })
    });
}
function g(t) {
    let { product: n, guildId: e, showEditProduct: r, showUnpublishProduct: l, showTestDownload: o, showCopyLink: a, showDeleteProduct: s, showReportProduct: c, onEditProduct: d, onUnpublishProduct: f, onDeleteProduct: g, onCopyProductLink: S, onTestDownload: m, onReportProduct: C } = t;
    return (0, i.jsx)('div', {
        onClick: (t) => {
            t.stopPropagation();
        },
        children: (0, i.jsx)(u.Popout, {
            position: 'right',
            align: 'top',
            spacing: -8,
            animation: u.Popout.Animation.FADE,
            renderPopout: (t) =>
                (0, i.jsx)(p, {
                    ...t,
                    guildId: e,
                    productId: n.id,
                    showEditProduct: r,
                    showUnpublishProduct: l,
                    showCopyLink: a,
                    showTestDownload: o,
                    showReportProduct: c,
                    showDeleteProduct: s,
                    onEditProduct: d,
                    onUnpublishProduct: f,
                    onDeleteProduct: g,
                    onCopyLink: S,
                    onTestDownload: m,
                    onReportProduct: C
                }),
            children: (t, e) => {
                let { isShown: r } = e;
                return (0, i.jsx)(u.Clickable, {
                    ...t,
                    'aria-label': _.intl.formatToPlainString(_.t.RtqjeH, { productName: n.name }),
                    'aria-haspopup': 'listbox',
                    'aria-expanded': r,
                    className: E.productActionMenuButton,
                    children: (0, i.jsx)(u.MoreVerticalIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: E.productActionMenuIcon,
                        'aria-hidden': !0
                    })
                });
            }
        })
    });
}
function S(t) {
    let { product: n, guildId: e, onEditProduct: r, onUnpublishProduct: S, onDeleteProduct: m, onCopyProductLink: C, onTestDownload: I, disabled: T = !1 } = t,
        h = (0, a.U)(n, 600),
        v = null !== n.price_tier ? (0, s.T4)(n.price_tier, f.pK.USD) : void 0,
        N = (0, c.C)(n);
    return (0, i.jsxs)(u.ClickableContainer, {
        tag: 'article',
        className: l()(E.productCardClickable, E.productCard, { [E.disabled]: T }),
        onClick: T ? void 0 : r,
        onContextMenu: function (t) {
            (0, o.jW)(t, () =>
                Promise.resolve((t) =>
                    (0, i.jsx)(p, {
                        ...t,
                        closePopout: o.Zy,
                        guildId: e,
                        productId: n.id,
                        showEditProduct: !0,
                        showUnpublishProduct: n.published,
                        showCopyLink: n.published,
                        showTestDownload: null != n.attachments,
                        showDeleteProduct: !0,
                        showReportProduct: !1,
                        onEditProduct: r,
                        onUnpublishProduct: S,
                        onDeleteProduct: m,
                        onCopyLink: C,
                        onTestDownload: I,
                        onReportProduct: () => {}
                    })
                )
            );
        },
        'aria-label': _.intl.formatToPlainString(_.t['X/yAKi'], { productName: n.name }),
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: h,
                className: E.productThumbnail
            }),
            (0, i.jsxs)('div', {
                className: E.productInfo,
                children: [
                    (0, i.jsxs)('div', {
                        className: E.productInfoContent,
                        children: [
                            (0, i.jsx)(u.Heading, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: E.productName,
                                children: n.name
                            }),
                            (0, i.jsx)(u.Spacer, { size: 8 }),
                            (0, i.jsxs)('div', {
                                className: E.productDetails,
                                children: [
                                    (0, i.jsx)(u.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-secondary',
                                        children: v
                                    }),
                                    null != N
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)('div', { className: E.dotSeparator }),
                                                  (0, i.jsx)(u.Text, {
                                                      variant: 'text-md/normal',
                                                      color: 'header-secondary',
                                                      children: N
                                                  })
                                              ]
                                          })
                                        : null
                                ]
                            }),
                            (0, i.jsx)(u.Spacer, { size: 16 }),
                            n.published ? (0, i.jsx)(d.t, {}) : (0, i.jsx)(d.b, {})
                        ]
                    }),
                    !T &&
                        (0, i.jsx)(g, {
                            product: n,
                            guildId: e,
                            showEditProduct: !0,
                            showUnpublishProduct: n.published,
                            showCopyLink: n.published,
                            showTestDownload: null != n.attachments,
                            showDeleteProduct: !0,
                            showReportProduct: !1,
                            onEditProduct: r,
                            onUnpublishProduct: S,
                            onDeleteProduct: m,
                            onCopyProductLink: C,
                            onTestDownload: I,
                            onReportProduct: () => {}
                        })
                ]
            })
        ]
    });
}
