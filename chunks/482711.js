n.d(t, { A: () => f, i: () => A });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(397927),
    o = n(442433),
    d = n(492749),
    c = n(580630),
    u = n(571654),
    m = n(415295),
    _ = n(818348),
    h = n(985018),
    p = n(304203);
function g(e) {
    let {
        showEditProduct: t,
        showUnpublishProduct: n,
        showCopyLink: l,
        showTestDownload: a,
        showDeleteProduct: r,
        showReportProduct: o,
        onEditProduct: d,
        onUnpublishProduct: c,
        onDeleteProduct: u,
        onCopyLink: m,
        onTestDownload: _,
        onReportProduct: g,
        closePopout: A,
        onSelect: f,
    } = e;
    return (0, i.jsx)("div", {
        className: p.li,
        children: (0, i.jsxs)(s.W1t, {
            "data-menu-migrated": !0,
            navId: "guild-product-context",
            onClose: A,
            "aria-label": h.intl.string(h.t.Z146dM),
            onSelect: f,
            children: [
                (0, i.jsxs)(s.rXV, {
                    children: [
                        t &&
                            (0, i.jsx)(s.Drp, {
                                id: "guild-product-edit",
                                label: h.intl.string(h.t.EEfce4),
                                icon: s.R2l,
                                leadingAccessory: { type: "icon", icon: s.R2l },
                                action: d,
                            }),
                        l &&
                            (0, i.jsx)(s.Drp, {
                                id: "guild-product-copy-link",
                                label: h.intl.string(h.t.XR26uj),
                                icon: s.qYV,
                                leadingAccessory: { type: "icon", icon: s.qYV },
                                action: m,
                            }),
                        a &&
                            (0, i.jsx)(s.Drp, {
                                id: "guild-product-test-download",
                                label: h.intl.string(h.t.aXoI6U),
                                icon: s.s3U,
                                leadingAccessory: { type: "icon", icon: s.s3U },
                                action: _,
                            }),
                    ],
                }),
                (0, i.jsxs)(s.rXV, {
                    children: [
                        n &&
                            (0, i.jsx)(s.Drp, {
                                id: "guild-product-unpublish",
                                label: h.intl.string(h.t.QrkMlN),
                                action: c,
                            }),
                        r &&
                            (0, i.jsx)(s.Drp, {
                                id: "guild-product-delete",
                                label: h.intl.string(h.t.zWjqvB),
                                color: "danger",
                                action: u,
                            }),
                    ],
                }),
                (0, i.jsx)(s.rXV, {
                    children:
                        o &&
                        (0, i.jsx)(s.Drp, {
                            id: "guild-product-report",
                            label: h.intl.string(h.t["6yUzvG"]),
                            color: "danger",
                            action: g,
                        }),
                }),
            ],
        }),
    });
}
function A(e) {
    let {
            product: t,
            guildId: n,
            showEditProduct: a,
            showUnpublishProduct: r,
            showTestDownload: o,
            showCopyLink: d,
            showDeleteProduct: c,
            showReportProduct: u,
            onEditProduct: m,
            onUnpublishProduct: _,
            onDeleteProduct: A,
            onCopyProductLink: f,
            onTestDownload: x,
            onReportProduct: E,
        } = e,
        C = l.useRef(null);
    return (0, i.jsx)("div", {
        onClick: (e) => {
            e.stopPropagation();
        },
        children: (0, i.jsx)(s.YNO, {
            targetElementRef: C,
            position: "right",
            align: "top",
            spacing: -8,
            animation: s.YNO.Animation.FADE,
            renderPopout: (e) =>
                (0, i.jsx)(g, {
                    ...e,
                    guildId: n,
                    productId: t.id,
                    showEditProduct: a,
                    showUnpublishProduct: r,
                    showCopyLink: d,
                    showTestDownload: o,
                    showReportProduct: u,
                    showDeleteProduct: c,
                    onEditProduct: m,
                    onUnpublishProduct: _,
                    onDeleteProduct: A,
                    onCopyLink: f,
                    onTestDownload: x,
                    onReportProduct: E,
                }),
            children: (e, n) => {
                let { isShown: l } = n;
                return (0, i.jsx)(s.DUT, {
                    ...e,
                    innerRef: C,
                    "aria-label": h.intl.formatToPlainString(h.t.RtqjeB, { productName: t.name }),
                    "aria-haspopup": "listbox",
                    "aria-expanded": l,
                    className: p.hC,
                    children: (0, i.jsx)(s.FHP, {
                        size: "md",
                        color: "currentColor",
                        className: p.Su,
                        "aria-hidden": !0,
                    }),
                });
            },
        }),
    });
}
function f(e) {
    let {
            product: t,
            guildId: n,
            onEditProduct: l,
            onUnpublishProduct: a,
            onDeleteProduct: f,
            onCopyProductLink: x,
            onTestDownload: E,
            disabled: C = !1,
        } = e,
        I = (0, d.R)(t, 600),
        T = null !== t.price_tier ? (0, c.$g)(t.price_tier, _.Yr.USD) : void 0,
        v = (0, u.z)(t);
    return (0, i.jsxs)(s.sqX, {
        tag: "article",
        className: r()(p.gc, p.Um, { [p.r9]: C }),
        onClick: C ? void 0 : l,
        onContextMenu: function (e) {
            (0, o.L3)(e, () =>
                Promise.resolve((e) =>
                    (0, i.jsx)(g, {
                        ...e,
                        closePopout: o.Z_,
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
                        onDeleteProduct: f,
                        onCopyLink: x,
                        onTestDownload: E,
                        onReportProduct: () => {},
                    }),
                ),
            );
        },
        "aria-label": h.intl.formatToPlainString(h.t["X/yAKs"], { productName: t.name }),
        children: [
            (0, i.jsx)("img", { alt: "", src: I, className: p.K_ }),
            (0, i.jsxs)("div", {
                className: p.aG,
                children: [
                    (0, i.jsxs)("div", {
                        className: p.jb,
                        children: [
                            (0, i.jsx)(s.Heading, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: p.tZ,
                                children: t.name,
                            }),
                            (0, i.jsx)(s.hKd, { size: 8 }),
                            (0, i.jsxs)("div", {
                                className: p.MS,
                                children: [
                                    (0, i.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: T,
                                    }),
                                    null != v
                                        ? (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)("div", { className: p.zk }),
                                                  (0, i.jsx)(s.Text, {
                                                      variant: "text-md/normal",
                                                      color: "text-default",
                                                      children: v,
                                                  }),
                                              ],
                                          })
                                        : null,
                                ],
                            }),
                            (0, i.jsx)(s.hKd, { size: 16 }),
                            t.published ? (0, i.jsx)(m.S, {}) : (0, i.jsx)(m.$, {}),
                        ],
                    }),
                    !C &&
                        (0, i.jsx)(A, {
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
                            onDeleteProduct: f,
                            onCopyProductLink: x,
                            onTestDownload: E,
                            onReportProduct: () => {},
                        }),
                ],
            }),
        ],
    });
}
