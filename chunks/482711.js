n.d(t, { A: () => j, i: () => N });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(861672),
    o = n(477782),
    d = n(22231),
    c = n(173936),
    u = n(32880),
    m = n(265872),
    _ = n(939249),
    h = n(530005),
    p = n(890856),
    g = n(534514),
    A = n(696986),
    f = n(834730),
    x = n(442433),
    C = n(492749),
    E = n(580630),
    I = n(571654),
    v = n(415295),
    b = n(818348),
    T = n(985018),
    S = n(559046);
function y(e) {
    let {
        showEditProduct: t,
        showUnpublishProduct: n,
        showCopyLink: l,
        showTestDownload: a,
        showDeleteProduct: s,
        showReportProduct: m,
        onEditProduct: _,
        onUnpublishProduct: h,
        onDeleteProduct: p,
        onCopyLink: g,
        onTestDownload: A,
        onReportProduct: f,
        closePopout: x,
        onSelect: C,
    } = e;
    return (0, i.jsx)("div", {
        className: S.li,
        children: (0, i.jsxs)(r.W, {
            "data-menu-migrated": !0,
            navId: "guild-product-context",
            onClose: x,
            "aria-label": T.intl.string(T.t.Z146dM),
            onSelect: C,
            children: [
                (0, i.jsxs)(o.rX, {
                    children: [
                        t &&
                            (0, i.jsx)(o.Dr, {
                                id: "guild-product-edit",
                                label: T.intl.string(T.t.EEfce4),
                                icon: d.R,
                                leadingAccessory: { type: "icon", icon: d.R },
                                action: _,
                            }),
                        l &&
                            (0, i.jsx)(o.Dr, {
                                id: "guild-product-copy-link",
                                label: T.intl.string(T.t.XR26uj),
                                icon: c.q,
                                leadingAccessory: { type: "icon", icon: c.q },
                                action: g,
                            }),
                        a &&
                            (0, i.jsx)(o.Dr, {
                                id: "guild-product-test-download",
                                label: T.intl.string(T.t.aXoI6U),
                                icon: u.s,
                                leadingAccessory: { type: "icon", icon: u.s },
                                action: A,
                            }),
                    ],
                }),
                (0, i.jsxs)(o.rX, {
                    children: [
                        n &&
                            (0, i.jsx)(o.Dr, {
                                id: "guild-product-unpublish",
                                label: T.intl.string(T.t.QrkMlN),
                                action: h,
                            }),
                        s &&
                            (0, i.jsx)(o.Dr, {
                                id: "guild-product-delete",
                                label: T.intl.string(T.t.zWjqvB),
                                color: "danger",
                                action: p,
                            }),
                    ],
                }),
                (0, i.jsx)(o.rX, {
                    children:
                        m &&
                        (0, i.jsx)(o.Dr, {
                            id: "guild-product-report",
                            label: T.intl.string(T.t["6yUzvG"]),
                            color: "danger",
                            action: f,
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
            showUnpublishProduct: s,
            showTestDownload: r,
            showCopyLink: o,
            showDeleteProduct: d,
            showReportProduct: c,
            onEditProduct: u,
            onUnpublishProduct: p,
            onDeleteProduct: g,
            onCopyProductLink: A,
            onTestDownload: f,
            onReportProduct: x,
        } = e,
        C = l.useRef(null);
    return (0, i.jsx)("div", {
        onClick: (e) => {
            e.stopPropagation();
        },
        children: (0, i.jsx)(m.Y, {
            targetElementRef: C,
            position: "right",
            align: "top",
            spacing: -8,
            animation: m.Y.Animation.FADE,
            renderPopout: (e) =>
                (0, i.jsx)(y, {
                    ...e,
                    guildId: n,
                    productId: t.id,
                    showEditProduct: a,
                    showUnpublishProduct: s,
                    showCopyLink: o,
                    showTestDownload: r,
                    showReportProduct: c,
                    showDeleteProduct: d,
                    onEditProduct: u,
                    onUnpublishProduct: p,
                    onDeleteProduct: g,
                    onCopyLink: A,
                    onTestDownload: f,
                    onReportProduct: x,
                }),
            children: (e, n) => {
                let { isShown: l } = n;
                return (0, i.jsx)(_.D, {
                    ...e,
                    innerRef: C,
                    "aria-label": T.intl.formatToPlainString(T.t.RtqjeB, { productName: t.name }),
                    "aria-haspopup": "listbox",
                    "aria-expanded": l,
                    className: S.hC,
                    children: (0, i.jsx)(h.F, {
                        size: "md",
                        color: "currentColor",
                        className: S.Su,
                        "aria-hidden": !0,
                    }),
                });
            },
        }),
    });
}
function j(e) {
    let {
            product: t,
            guildId: n,
            onEditProduct: l,
            onUnpublishProduct: a,
            onDeleteProduct: r,
            onCopyProductLink: o,
            onTestDownload: d,
            disabled: c = !1,
        } = e,
        u = (0, C.R)(t, 600),
        m = null !== t.price_tier ? (0, E.$g)(t.price_tier, b.Yr.USD) : void 0,
        _ = (0, I.z)(t);
    return (0, i.jsxs)(p.s, {
        tag: "article",
        className: s()(S.gc, S.Um, { [S.r9]: c }),
        onClick: c ? void 0 : l,
        onContextMenu: function (e) {
            (0, x.L3)(e, () =>
                Promise.resolve((e) =>
                    (0, i.jsx)(y, {
                        ...e,
                        closePopout: x.Z_,
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
                        onDeleteProduct: r,
                        onCopyLink: o,
                        onTestDownload: d,
                        onReportProduct: () => {},
                    }),
                ),
            );
        },
        "aria-label": T.intl.formatToPlainString(T.t["X/yAKs"], { productName: t.name }),
        children: [
            (0, i.jsx)("img", { alt: "", src: u, className: S.K_ }),
            (0, i.jsxs)("div", {
                className: S.aG,
                children: [
                    (0, i.jsxs)("div", {
                        className: S.jb,
                        children: [
                            (0, i.jsx)(g.D, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: S.tZ,
                                children: t.name,
                            }),
                            (0, i.jsx)(A.h, { size: 8 }),
                            (0, i.jsxs)("div", {
                                className: S.MS,
                                children: [
                                    (0, i.jsx)(f.E, { variant: "text-md/normal", color: "text-default", children: m }),
                                    null != _
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("div", { className: S.zk }),
                                                  (0, i.jsx)(f.E, {
                                                      variant: "text-md/normal",
                                                      color: "text-default",
                                                      children: _,
                                                  }),
                                              ],
                                          })
                                        : null,
                                ],
                            }),
                            (0, i.jsx)(A.h, { size: 16 }),
                            t.published ? (0, i.jsx)(v.S, {}) : (0, i.jsx)(v.$, {}),
                        ],
                    }),
                    !c &&
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
