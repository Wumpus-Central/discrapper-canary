n.d(e, {
    Z: function () {
        return S;
    },
    m: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    o = n(481060),
    u = n(239091),
    a = n(166081),
    s = n(937615),
    c = n(942833),
    d = n(48691),
    f = n(231338),
    _ = n(388032),
    E = n(24753);
function p(t) {
    let { showEditProduct: e, showUnpublishProduct: n, showCopyLink: r, showTestDownload: l, showDeleteProduct: u, showReportProduct: a, onEditProduct: s, onUnpublishProduct: c, onDeleteProduct: d, onCopyLink: f, onTestDownload: p, onReportProduct: g, closePopout: S, onSelect: m } = t;
    return (0, i.jsx)('div', {
        className: E.menuContainer,
        children: (0, i.jsxs)(o.Menu, {
            navId: 'guild-product-context',
            onClose: S,
            'aria-label': _.intl.string(_.t.Z146dH),
            onSelect: m,
            children: [
                (0, i.jsxs)(o.MenuGroup, {
                    children: [
                        e &&
                            (0, i.jsx)(o.MenuItem, {
                                id: 'guild-product-edit',
                                label: _.intl.string(_.t.EEfce3),
                                action: s
                            }),
                        r &&
                            (0, i.jsx)(o.MenuItem, {
                                id: 'guild-product-copy-link',
                                label: _.intl.string(_.t.XR26ur),
                                icon: o.LinkIcon,
                                action: f
                            }),
                        l &&
                            (0, i.jsx)(o.MenuItem, {
                                id: 'guild-product-test-download',
                                label: _.intl.string(_.t.aXoI6e),
                                icon: o.DownloadIcon,
                                action: p
                            })
                    ]
                }),
                (0, i.jsxs)(o.MenuGroup, {
                    children: [
                        n &&
                            (0, i.jsx)(o.MenuItem, {
                                id: 'guild-product-unpublish',
                                label: _.intl.string(_.t.QrkMlJ),
                                action: c
                            }),
                        u &&
                            (0, i.jsx)(o.MenuItem, {
                                id: 'guild-product-delete',
                                label: _.intl.string(_.t.zWjqvL),
                                color: 'danger',
                                action: d
                            })
                    ]
                }),
                (0, i.jsx)(o.MenuGroup, {
                    children:
                        a &&
                        (0, i.jsx)(o.MenuItem, {
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
    let { product: e, guildId: n, showEditProduct: r, showUnpublishProduct: l, showTestDownload: u, showCopyLink: a, showDeleteProduct: s, showReportProduct: c, onEditProduct: d, onUnpublishProduct: f, onDeleteProduct: g, onCopyProductLink: S, onTestDownload: m, onReportProduct: I } = t;
    return (0, i.jsx)('div', {
        onClick: (t) => {
            t.stopPropagation();
        },
        children: (0, i.jsx)(o.Popout, {
            position: 'right',
            align: 'top',
            spacing: -8,
            animation: o.Popout.Animation.FADE,
            renderPopout: (t) =>
                (0, i.jsx)(p, {
                    ...t,
                    guildId: n,
                    productId: e.id,
                    showEditProduct: r,
                    showUnpublishProduct: l,
                    showCopyLink: a,
                    showTestDownload: u,
                    showReportProduct: c,
                    showDeleteProduct: s,
                    onEditProduct: d,
                    onUnpublishProduct: f,
                    onDeleteProduct: g,
                    onCopyLink: S,
                    onTestDownload: m,
                    onReportProduct: I
                }),
            children: (t, n) => {
                let { isShown: r } = n;
                return (0, i.jsx)(o.Clickable, {
                    ...t,
                    'aria-label': _.intl.formatToPlainString(_.t.RtqjeH, { productName: e.name }),
                    'aria-haspopup': 'listbox',
                    'aria-expanded': r,
                    className: E.productActionMenuButton,
                    children: (0, i.jsx)(o.MoreVerticalIcon, {
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
    let { product: e, guildId: n, onEditProduct: r, onUnpublishProduct: S, onDeleteProduct: m, onCopyProductLink: I, onTestDownload: h, disabled: C = !1 } = t,
        T = (0, a.U)(e, 600),
        v = null !== e.price_tier ? (0, s.T4)(e.price_tier, f.pK.USD) : void 0,
        N = (0, c.C)(e);
    return (0, i.jsxs)(o.ClickableContainer, {
        tag: 'article',
        className: l()(E.productCardClickable, E.productCard, { [E.disabled]: C }),
        onClick: C ? void 0 : r,
        onContextMenu: function (t) {
            (0, u.jW)(t, () =>
                Promise.resolve((t) =>
                    (0, i.jsx)(p, {
                        ...t,
                        closePopout: u.Zy,
                        guildId: n,
                        productId: e.id,
                        showEditProduct: !0,
                        showUnpublishProduct: e.published,
                        showCopyLink: e.published,
                        showTestDownload: null != e.attachments,
                        showDeleteProduct: !0,
                        showReportProduct: !1,
                        onEditProduct: r,
                        onUnpublishProduct: S,
                        onDeleteProduct: m,
                        onCopyLink: I,
                        onTestDownload: h,
                        onReportProduct: () => {}
                    })
                )
            );
        },
        'aria-label': _.intl.formatToPlainString(_.t['X/yAKi'], { productName: e.name }),
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: T,
                className: E.productThumbnail
            }),
            (0, i.jsxs)('div', {
                className: E.productInfo,
                children: [
                    (0, i.jsxs)('div', {
                        className: E.productInfoContent,
                        children: [
                            (0, i.jsx)(o.Heading, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: E.productName,
                                children: e.name
                            }),
                            (0, i.jsx)(o.Spacer, { size: 8 }),
                            (0, i.jsxs)('div', {
                                className: E.productDetails,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-secondary',
                                        children: v
                                    }),
                                    null != N
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)('div', { className: E.dotSeparator }),
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
                            (0, i.jsx)(o.Spacer, { size: 16 }),
                            e.published ? (0, i.jsx)(d.t, {}) : (0, i.jsx)(d.b, {})
                        ]
                    }),
                    !C &&
                        (0, i.jsx)(g, {
                            product: e,
                            guildId: n,
                            showEditProduct: !0,
                            showUnpublishProduct: e.published,
                            showCopyLink: e.published,
                            showTestDownload: null != e.attachments,
                            showDeleteProduct: !0,
                            showReportProduct: !1,
                            onEditProduct: r,
                            onUnpublishProduct: S,
                            onDeleteProduct: m,
                            onCopyProductLink: I,
                            onTestDownload: h,
                            onReportProduct: () => {}
                        })
                ]
            })
        ]
    });
}
