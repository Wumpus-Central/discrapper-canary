n.d(t, { A: () => S, i: () => N });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(550079),
    o = n(477782),
    c = n(22231),
    d = n(173936),
    u = n(32880),
    _ = n(922016),
    m = n(939249),
    h = n(530005),
    p = n(890856),
    g = n(534514),
    f = n(696986),
    x = n(834730),
    A = n(442433),
    C = n(628677),
    v = n(580630),
    I = n(571654),
    E = n(415295),
    b = n(818348),
    y = n(985018),
    T = n(559046);
function j(e) {
    let {
        showEditProduct: t,
        showUnpublishProduct: n,
        showCopyLink: l,
        showTestDownload: a,
        showDeleteProduct: r,
        showReportProduct: _,
        onEditProduct: m,
        onUnpublishProduct: h,
        onDeleteProduct: p,
        onCopyLink: g,
        onTestDownload: f,
        onReportProduct: x,
        closePopout: A,
        onSelect: C,
    } = e;
    return (0, i.jsx)("div", {
        className: T.li,
        children: (0, i.jsxs)(s.W, {
            "data-menu-migrated": !0,
            navId: "guild-product-context",
            onClose: A,
            "aria-label": y.intl.string(y.t.Z146dM),
            onSelect: C,
            children: [
                (0, i.jsxs)(o.rX, {
                    children: [
                        t &&
                            (0, i.jsx)(o.Dr, {
                                id: "guild-product-edit",
                                label: y.intl.string(y.t.EEfce4),
                                icon: c.R,
                                leadingAccessory: { type: "icon", icon: c.R },
                                action: m,
                            }),
                        l &&
                            (0, i.jsx)(o.Dr, {
                                id: "guild-product-copy-link",
                                label: y.intl.string(y.t.XR26uj),
                                icon: d.q,
                                leadingAccessory: { type: "icon", icon: d.q },
                                action: g,
                            }),
                        a &&
                            (0, i.jsx)(o.Dr, {
                                id: "guild-product-test-download",
                                label: y.intl.string(y.t.aXoI6U),
                                icon: u.s,
                                leadingAccessory: { type: "icon", icon: u.s },
                                action: f,
                            }),
                    ],
                }),
                (0, i.jsxs)(o.rX, {
                    children: [
                        n &&
                            (0, i.jsx)(o.Dr, {
                                id: "guild-product-unpublish",
                                label: y.intl.string(y.t.QrkMlN),
                                action: h,
                            }),
                        r &&
                            (0, i.jsx)(o.Dr, {
                                id: "guild-product-delete",
                                label: y.intl.string(y.t.zWjqvB),
                                color: "danger",
                                action: p,
                            }),
                    ],
                }),
                (0, i.jsx)(o.rX, {
                    children:
                        _ &&
                        (0, i.jsx)(o.Dr, {
                            id: "guild-product-report",
                            label: y.intl.string(y.t["6yUzvG"]),
                            color: "danger",
                            action: x,
                        }),
                }),
            ],
        }),
    });
}
function N(e) {
    let {
            product: t,
            guildId: n,
            showEditProduct: a,
            showUnpublishProduct: r,
            showTestDownload: s,
            showCopyLink: o,
            showDeleteProduct: c,
            showReportProduct: d,
            onEditProduct: u,
            onUnpublishProduct: p,
            onDeleteProduct: g,
            onCopyProductLink: f,
            onTestDownload: x,
            onReportProduct: A,
        } = e,
        C = l.useRef(null);
    return (0, i.jsx)("div", {
        onClick: (e) => {
            e.stopPropagation();
        },
        children: (0, i.jsx)(_.Y, {
            targetElementRef: C,
            position: "right",
            align: "top",
            spacing: -8,
            animation: _.Y.Animation.FADE,
            renderPopout: (e) =>
                (0, i.jsx)(j, {
                    ...e,
                    guildId: n,
                    productId: t.id,
                    showEditProduct: a,
                    showUnpublishProduct: r,
                    showCopyLink: o,
                    showTestDownload: s,
                    showReportProduct: d,
                    showDeleteProduct: c,
                    onEditProduct: u,
                    onUnpublishProduct: p,
                    onDeleteProduct: g,
                    onCopyLink: f,
                    onTestDownload: x,
                    onReportProduct: A,
                }),
            children: (e, n) => {
                let { isShown: l } = n;
                return (0, i.jsx)(m.D, {
                    ...e,
                    innerRef: C,
                    "aria-label": y.intl.formatToPlainString(y.t.RtqjeB, { productName: t.name }),
                    "aria-haspopup": "listbox",
                    "aria-expanded": l,
                    className: T.hC,
                    children: (0, i.jsx)(h.F, {
                        size: "md",
                        color: "currentColor",
                        className: T.Su,
                        "aria-hidden": !0,
                    }),
                });
            },
        }),
    });
}
function S(e) {
    let {
            product: t,
            guildId: n,
            onEditProduct: l,
            onUnpublishProduct: a,
            onDeleteProduct: s,
            onCopyProductLink: o,
            onTestDownload: c,
            disabled: d = !1,
        } = e,
        u = (0, C.R)(t, 600),
        _ = null !== t.price_tier ? (0, v.$g)(t.price_tier, b.Yr.USD) : void 0,
        m = (0, I.z)(t);
    return (0, i.jsxs)(p.s, {
        tag: "article",
        className: r()(T.gc, T.Um, { [T.r9]: d }),
        onClick: d ? void 0 : l,
        onContextMenu: function (e) {
            (0, A.L3)(e, () =>
                Promise.resolve((e) =>
                    (0, i.jsx)(j, {
                        ...e,
                        closePopout: A.Z_,
                        guildId: n,
                        productId: t.id,
                        showEditProduct: !0,
                        showUnpublishProduct: t.published,
                        showCopyLink: t.published,
                        showTestDownload: null != t.attachments,
                        showDeleteProduct: !0,
                        showReportProduct: !1,
                        onEditProduct: l,
                        onUnpublishProduct: a,
                        onDeleteProduct: s,
                        onCopyLink: o,
                        onTestDownload: c,
                        onReportProduct: () => {},
                    }),
                ),
            );
        },
        "aria-label": y.intl.formatToPlainString(y.t["X/yAKs"], { productName: t.name }),
        children: [
            (0, i.jsx)("img", { alt: "", src: u, className: T.K_ }),
            (0, i.jsxs)("div", {
                className: T.aG,
                children: [
                    (0, i.jsxs)("div", {
                        className: T.jb,
                        children: [
                            (0, i.jsx)(g.D, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: T.tZ,
                                children: t.name,
                            }),
                            (0, i.jsx)(f.h, { size: 8 }),
                            (0, i.jsxs)("div", {
                                className: T.MS,
                                children: [
                                    (0, i.jsx)(x.E, { variant: "text-md/normal", color: "text-default", children: _ }),
                                    null != m
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("div", { className: T.zk }),
                                                  (0, i.jsx)(x.E, {
                                                      variant: "text-md/normal",
                                                      color: "text-default",
                                                      children: m,
                                                  }),
                                              ],
                                          })
                                        : null,
                                ],
                            }),
                            (0, i.jsx)(f.h, { size: 16 }),
                            t.published ? (0, i.jsx)(E.S, {}) : (0, i.jsx)(E.$, {}),
                        ],
                    }),
                    !d &&
                        (0, i.jsx)(N, {
                            product: t,
                            guildId: n,
                            showEditProduct: !0,
                            showUnpublishProduct: t.published,
                            showCopyLink: t.published,
                            showTestDownload: null != t.attachments,
                            showDeleteProduct: !0,
                            showReportProduct: !1,
                            onEditProduct: l,
                            onUnpublishProduct: a,
                            onDeleteProduct: s,
                            onCopyProductLink: o,
                            onTestDownload: c,
                            onReportProduct: () => {},
                        }),
                ],
            }),
        ],
    });
}
