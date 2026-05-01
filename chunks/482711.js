n.d(t, { A: () => b, i: () => S });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(550079),
    o = n(477782),
    d = n(22231),
    c = n(173936),
    u = n(32880),
    m = n(922016),
    h = n(939249),
    g = n(530005),
    A = n(890856),
    p = n(534514),
    x = n(696986),
    f = n(834730),
    C = n(442433),
    E = n(628677),
    v = n(580630),
    I = n(571654),
    _ = n(415295),
    j = n(818348),
    N = n(985018),
    T = n(559046);
function y(e) {
    let {
        showEditProduct: t,
        showUnpublishProduct: n,
        showCopyLink: l,
        showTestDownload: s,
        showDeleteProduct: a,
        showReportProduct: m,
        onEditProduct: h,
        onUnpublishProduct: g,
        onDeleteProduct: A,
        onCopyLink: p,
        onTestDownload: x,
        onReportProduct: f,
        closePopout: C,
        onSelect: E,
    } = e;
    return (0, i.jsx)("div", {
        className: T.li,
        children: (0, i.jsxs)(r.W, {
            "data-menu-migrated": !0,
            navId: "guild-product-context",
            onClose: C,
            "aria-label": N.intl.string(N.t.Z146dM),
            onSelect: E,
            children: [
                (0, i.jsxs)(o.rX, {
                    children: [
                        t &&
                            (0, i.jsx)(o.Dr, {
                                id: "guild-product-edit",
                                label: N.intl.string(N.t.EEfce4),
                                icon: d.R,
                                leadingAccessory: { type: "icon", icon: d.R },
                                action: h,
                            }),
                        l &&
                            (0, i.jsx)(o.Dr, {
                                id: "guild-product-copy-link",
                                label: N.intl.string(N.t.XR26uj),
                                icon: c.q,
                                leadingAccessory: { type: "icon", icon: c.q },
                                action: p,
                            }),
                        s &&
                            (0, i.jsx)(o.Dr, {
                                id: "guild-product-test-download",
                                label: N.intl.string(N.t.aXoI6U),
                                icon: u.s,
                                leadingAccessory: { type: "icon", icon: u.s },
                                action: x,
                            }),
                    ],
                }),
                (0, i.jsxs)(o.rX, {
                    children: [
                        n &&
                            (0, i.jsx)(o.Dr, {
                                id: "guild-product-unpublish",
                                label: N.intl.string(N.t.QrkMlN),
                                action: g,
                            }),
                        a &&
                            (0, i.jsx)(o.Dr, {
                                id: "guild-product-delete",
                                label: N.intl.string(N.t.zWjqvB),
                                color: "danger",
                                action: A,
                            }),
                    ],
                }),
                (0, i.jsx)(o.rX, {
                    children:
                        m &&
                        (0, i.jsx)(o.Dr, {
                            id: "guild-product-report",
                            label: N.intl.string(N.t["6yUzvG"]),
                            color: "danger",
                            action: f,
                        }),
                }),
            ],
        }),
    });
}
function S(e) {
    let {
            product: t,
            guildId: n,
            showEditProduct: s,
            showUnpublishProduct: a,
            showTestDownload: r,
            showCopyLink: o,
            showDeleteProduct: d,
            showReportProduct: c,
            onEditProduct: u,
            onUnpublishProduct: A,
            onDeleteProduct: p,
            onCopyProductLink: x,
            onTestDownload: f,
            onReportProduct: C,
        } = e,
        E = l.useRef(null);
    return (0, i.jsx)("div", {
        onClick: (e) => {
            e.stopPropagation();
        },
        children: (0, i.jsx)(m.Y, {
            targetElementRef: E,
            position: "right",
            align: "top",
            spacing: -8,
            animation: m.Y.Animation.FADE,
            renderPopout: (e) =>
                (0, i.jsx)(y, {
                    ...e,
                    guildId: n,
                    productId: t.id,
                    showEditProduct: s,
                    showUnpublishProduct: a,
                    showCopyLink: o,
                    showTestDownload: r,
                    showReportProduct: c,
                    showDeleteProduct: d,
                    onEditProduct: u,
                    onUnpublishProduct: A,
                    onDeleteProduct: p,
                    onCopyLink: x,
                    onTestDownload: f,
                    onReportProduct: C,
                }),
            children: (e, n) => {
                let { isShown: l } = n;
                return (0, i.jsx)(h.D, {
                    ...e,
                    innerRef: E,
                    "aria-label": N.intl.formatToPlainString(N.t.RtqjeB, { productName: t.name }),
                    "aria-haspopup": "listbox",
                    "aria-expanded": l,
                    className: T.hC,
                    children: (0, i.jsx)(g.F, {
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
function b(e) {
    let {
            product: t,
            guildId: n,
            onEditProduct: l,
            onUnpublishProduct: s,
            onDeleteProduct: r,
            onCopyProductLink: o,
            onTestDownload: d,
            disabled: c = !1,
        } = e,
        u = (0, E.R)(t, 600),
        m = null !== t.price_tier ? (0, v.$g)(t.price_tier, j.Yr.USD) : void 0,
        h = (0, I.z)(t);
    return (0, i.jsxs)(A.s, {
        tag: "article",
        className: a()(T.gc, T.Um, { [T.r9]: c }),
        onClick: c ? void 0 : l,
        onContextMenu: function (e) {
            (0, C.L3)(e, () =>
                Promise.resolve((e) =>
                    (0, i.jsx)(y, {
                        ...e,
                        closePopout: C.Z_,
                        guildId: n,
                        productId: t.id,
                        showEditProduct: !0,
                        showUnpublishProduct: t.published,
                        showCopyLink: t.published,
                        showTestDownload: null != t.attachments,
                        showDeleteProduct: !0,
                        showReportProduct: !1,
                        onEditProduct: l,
                        onUnpublishProduct: s,
                        onDeleteProduct: r,
                        onCopyLink: o,
                        onTestDownload: d,
                        onReportProduct: () => {},
                    }),
                ),
            );
        },
        "aria-label": N.intl.formatToPlainString(N.t["X/yAKs"], { productName: t.name }),
        children: [
            (0, i.jsx)("img", { alt: "", src: u, className: T.K_ }),
            (0, i.jsxs)("div", {
                className: T.aG,
                children: [
                    (0, i.jsxs)("div", {
                        className: T.jb,
                        children: [
                            (0, i.jsx)(p.D, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: T.tZ,
                                children: t.name,
                            }),
                            (0, i.jsx)(x.h, { size: 8 }),
                            (0, i.jsxs)("div", {
                                className: T.MS,
                                children: [
                                    (0, i.jsx)(f.E, { variant: "text-md/normal", color: "text-default", children: m }),
                                    null != h
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("div", { className: T.zk }),
                                                  (0, i.jsx)(f.E, {
                                                      variant: "text-md/normal",
                                                      color: "text-default",
                                                      children: h,
                                                  }),
                                              ],
                                          })
                                        : null,
                                ],
                            }),
                            (0, i.jsx)(x.h, { size: 16 }),
                            t.published ? (0, i.jsx)(_.S, {}) : (0, i.jsx)(_.$, {}),
                        ],
                    }),
                    !c &&
                        (0, i.jsx)(S, {
                            product: t,
                            guildId: n,
                            showEditProduct: !0,
                            showUnpublishProduct: t.published,
                            showCopyLink: t.published,
                            showTestDownload: null != t.attachments,
                            showDeleteProduct: !0,
                            showReportProduct: !1,
                            onEditProduct: l,
                            onUnpublishProduct: s,
                            onDeleteProduct: r,
                            onCopyProductLink: o,
                            onTestDownload: d,
                            onReportProduct: () => {},
                        }),
                ],
            }),
        ],
    });
}
