n.d(t, {
    Z: function () {
        return E;
    },
    m: function () {
        return p;
    }
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
    g = n(24753);
function C(e) {
    let { showEditProduct: t, showUnpublishProduct: n, showCopyLink: r, showTestDownload: l, showDeleteProduct: s, showReportProduct: a, onEditProduct: u, onUnpublishProduct: d, onDeleteProduct: c, onCopyLink: h, onTestDownload: C, onReportProduct: p, closePopout: E, onSelect: _ } = e;
    return (0, i.jsx)('div', {
        className: g.menuContainer,
        children: (0, i.jsxs)(o.Menu, {
            navId: 'guild-product-context',
            onClose: E,
            'aria-label': f.intl.string(f.t.Z146dH),
            onSelect: _,
            children: [
                (0, i.jsxs)(o.MenuGroup, {
                    children: [
                        t &&
                            (0, i.jsx)(o.MenuItem, {
                                id: 'guild-product-edit',
                                label: f.intl.string(f.t.EEfce3),
                                action: u
                            }),
                        r &&
                            (0, i.jsx)(o.MenuItem, {
                                id: 'guild-product-copy-link',
                                label: f.intl.string(f.t.XR26ur),
                                icon: o.LinkIcon,
                                action: h
                            }),
                        l &&
                            (0, i.jsx)(o.MenuItem, {
                                id: 'guild-product-test-download',
                                label: f.intl.string(f.t.aXoI6e),
                                icon: o.DownloadIcon,
                                action: C
                            })
                    ]
                }),
                (0, i.jsxs)(o.MenuGroup, {
                    children: [
                        n &&
                            (0, i.jsx)(o.MenuItem, {
                                id: 'guild-product-unpublish',
                                label: f.intl.string(f.t.QrkMlJ),
                                action: d
                            }),
                        s &&
                            (0, i.jsx)(o.MenuItem, {
                                id: 'guild-product-delete',
                                label: f.intl.string(f.t.zWjqvL),
                                color: 'danger',
                                action: c
                            })
                    ]
                }),
                (0, i.jsx)(o.MenuGroup, {
                    children:
                        a &&
                        (0, i.jsx)(o.MenuItem, {
                            id: 'guild-product-report',
                            label: f.intl.string(f.t['6yUzvL']),
                            color: 'danger',
                            action: p
                        })
                })
            ]
        })
    });
}
function p(e) {
    let { product: t, guildId: n, showEditProduct: r, showUnpublishProduct: l, showTestDownload: s, showCopyLink: a, showDeleteProduct: u, showReportProduct: d, onEditProduct: c, onUnpublishProduct: h, onDeleteProduct: p, onCopyProductLink: E, onTestDownload: _, onReportProduct: I } = e;
    return (0, i.jsx)('div', {
        onClick: (e) => {
            e.stopPropagation();
        },
        children: (0, i.jsx)(o.Popout, {
            position: 'right',
            align: 'top',
            spacing: -8,
            animation: o.Popout.Animation.FADE,
            renderPopout: (e) =>
                (0, i.jsx)(C, {
                    ...e,
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
                    onDeleteProduct: p,
                    onCopyLink: E,
                    onTestDownload: _,
                    onReportProduct: I
                }),
            children: (e, n) => {
                let { isShown: r } = n;
                return (0, i.jsx)(o.Clickable, {
                    ...e,
                    'aria-label': f.intl.formatToPlainString(f.t.RtqjeH, { productName: t.name }),
                    'aria-haspopup': 'listbox',
                    'aria-expanded': r,
                    className: g.productActionMenuButton,
                    children: (0, i.jsx)(o.MoreVerticalIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: g.productActionMenuIcon,
                        'aria-hidden': !0
                    })
                });
            }
        })
    });
}
function E(e) {
    let { product: t, guildId: n, onEditProduct: r, onUnpublishProduct: E, onDeleteProduct: _, onCopyProductLink: I, onTestDownload: S, disabled: v = !1 } = e,
        m = (0, a.U)(t, 600),
        T = null !== t.price_tier ? (0, u.T4)(t.price_tier, h.pK.USD) : void 0,
        N = (0, d.C)(t);
    return (0, i.jsxs)(o.ClickableContainer, {
        tag: 'article',
        className: l()(g.productCardClickable, g.productCard, { [g.disabled]: v }),
        onClick: v ? void 0 : r,
        onContextMenu: function (e) {
            (0, s.jW)(e, () =>
                Promise.resolve((e) =>
                    (0, i.jsx)(C, {
                        ...e,
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
                        onUnpublishProduct: E,
                        onDeleteProduct: _,
                        onCopyLink: I,
                        onTestDownload: S,
                        onReportProduct: () => {}
                    })
                )
            );
        },
        'aria-label': f.intl.formatToPlainString(f.t['X/yAKi'], { productName: t.name }),
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: m,
                className: g.productThumbnail
            }),
            (0, i.jsxs)('div', {
                className: g.productInfo,
                children: [
                    (0, i.jsxs)('div', {
                        className: g.productInfoContent,
                        children: [
                            (0, i.jsx)(o.Heading, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                className: g.productName,
                                children: t.name
                            }),
                            (0, i.jsx)(o.Spacer, { size: 8 }),
                            (0, i.jsxs)('div', {
                                className: g.productDetails,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-secondary',
                                        children: T
                                    }),
                                    null != N
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)('div', { className: g.dotSeparator }),
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
                            t.published ? (0, i.jsx)(c.t, {}) : (0, i.jsx)(c.b, {})
                        ]
                    }),
                    !v &&
                        (0, i.jsx)(p, {
                            product: t,
                            guildId: n,
                            showEditProduct: !0,
                            showUnpublishProduct: t.published,
                            showCopyLink: t.published,
                            showTestDownload: null != t.attachments,
                            showDeleteProduct: !0,
                            showReportProduct: !1,
                            onEditProduct: r,
                            onUnpublishProduct: E,
                            onDeleteProduct: _,
                            onCopyProductLink: I,
                            onTestDownload: S,
                            onReportProduct: () => {}
                        })
                ]
            })
        ]
    });
}
