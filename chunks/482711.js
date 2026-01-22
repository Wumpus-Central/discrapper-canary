n.d(t, {
    A: () => v,
    i: () => A,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(442433),
    c = n(492749),
    u = n(580630),
    d = n(571654),
    f = n(415295),
    p = n(818348),
    _ = n(985018),
    h = n(304203);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = 600;
function O(e) {
    let {
        showEditProduct: t,
        showUnpublishProduct: n,
        showCopyLink: i,
        showTestDownload: a,
        showDeleteProduct: s,
        showReportProduct: l,
        onEditProduct: c,
        onUnpublishProduct: u,
        onDeleteProduct: d,
        onCopyLink: f,
        onTestDownload: p,
        onReportProduct: m,
        closePopout: g,
        onSelect: E,
    } = e;
    return (0, r.jsx)("div", {
        className: h.li,
        children: (0, r.jsxs)(o.W1t, {
            navId: "guild-product-context",
            onClose: g,
            "aria-label": _.intl.string(_.t.Z146dM),
            onSelect: E,
            children: [
                (0, r.jsxs)(o.rXV, {
                    children: [
                        t &&
                            (0, r.jsx)(o.Drp, {
                                id: "guild-product-edit",
                                label: _.intl.string(_.t.EEfce4),
                                action: c,
                            }),
                        i &&
                            (0, r.jsx)(o.Drp, {
                                id: "guild-product-copy-link",
                                label: _.intl.string(_.t.XR26uj),
                                icon: o.qYV,
                                action: f,
                            }),
                        a &&
                            (0, r.jsx)(o.Drp, {
                                id: "guild-product-test-download",
                                label: _.intl.string(_.t.aXoI6U),
                                icon: o.s3U,
                                action: p,
                            }),
                    ],
                }),
                (0, r.jsxs)(o.rXV, {
                    children: [
                        n &&
                            (0, r.jsx)(o.Drp, {
                                id: "guild-product-unpublish",
                                label: _.intl.string(_.t.QrkMlN),
                                action: u,
                            }),
                        s &&
                            (0, r.jsx)(o.Drp, {
                                id: "guild-product-delete",
                                label: _.intl.string(_.t.zWjqvB),
                                color: "danger",
                                action: d,
                            }),
                    ],
                }),
                (0, r.jsx)(o.rXV, {
                    children:
                        l &&
                        (0, r.jsx)(o.Drp, {
                            id: "guild-product-report",
                            label: _.intl.string(_.t["6yUzvG"]),
                            color: "danger",
                            action: m,
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
            showUnpublishProduct: s,
            showTestDownload: l,
            showCopyLink: c,
            showDeleteProduct: u,
            showReportProduct: d,
            onEditProduct: f,
            onUnpublishProduct: p,
            onDeleteProduct: m,
            onCopyProductLink: E,
            onTestDownload: y,
            onReportProduct: A,
        } = e,
        v = i.useRef(null),
        S = (e) => {
            e.stopPropagation();
        };
    return (0, r.jsx)("div", {
        onClick: S,
        children: (0, r.jsx)(o.YNO, {
            targetElementRef: v,
            position: "right",
            align: "top",
            spacing: -8,
            animation: o.YNO.Animation.FADE,
            renderPopout: (e) =>
                (0, r.jsx)(
                    O,
                    b(g({}, e), {
                        guildId: n,
                        productId: t.id,
                        showEditProduct: a,
                        showUnpublishProduct: s,
                        showCopyLink: c,
                        showTestDownload: l,
                        showReportProduct: d,
                        showDeleteProduct: u,
                        onEditProduct: f,
                        onUnpublishProduct: p,
                        onDeleteProduct: m,
                        onCopyLink: E,
                        onTestDownload: y,
                        onReportProduct: A,
                    }),
                ),
            children: (e, n) => {
                let { isShown: i } = n;
                return (0, r.jsx)(
                    o.DUT,
                    b(g({}, e), {
                        innerRef: v,
                        "aria-label": _.intl.formatToPlainString(_.t.RtqjeB, { productName: t.name }),
                        "aria-haspopup": "listbox",
                        "aria-expanded": i,
                        className: h.hC,
                        children: (0, r.jsx)(o.FHP, {
                            size: "md",
                            color: "currentColor",
                            className: h.Su,
                            "aria-hidden": !0,
                        }),
                    }),
                );
            },
        }),
    });
}
function v(e) {
    let {
            product: t,
            guildId: n,
            onEditProduct: i,
            onUnpublishProduct: a,
            onDeleteProduct: m,
            onCopyProductLink: E,
            onTestDownload: v,
            disabled: S = !1,
        } = e,
        I = (0, c.R)(t, y),
        T = null !== t.price_tier ? (0, u.$g)(t.price_tier, p.Yr.USD) : void 0,
        C = (0, d.z)(t);
    function N(e) {
        (0, l.L3)(e, () =>
            Promise.resolve((e) =>
                (0, r.jsx)(
                    O,
                    b(g({}, e), {
                        closePopout: l.Z_,
                        guildId: n,
                        productId: t.id,
                        showEditProduct: !0,
                        showUnpublishProduct: t.published,
                        showCopyLink: t.published,
                        showTestDownload: null != t.attachments,
                        showDeleteProduct: !0,
                        showReportProduct: !1,
                        onEditProduct: i,
                        onUnpublishProduct: a,
                        onDeleteProduct: m,
                        onCopyLink: E,
                        onTestDownload: v,
                        onReportProduct: () => {},
                    }),
                ),
            ),
        );
    }
    return (0, r.jsxs)(o.sqX, {
        tag: "article",
        className: s()(h.gc, h.Um, { [h.r9]: S }),
        onClick: S ? void 0 : i,
        onContextMenu: N,
        "aria-label": _.intl.formatToPlainString(_.t["X/yAKs"], { productName: t.name }),
        children: [
            (0, r.jsx)("img", {
                alt: "",
                src: I,
                className: h.K_,
            }),
            (0, r.jsxs)("div", {
                className: h.aG,
                children: [
                    (0, r.jsxs)("div", {
                        className: h.jb,
                        children: [
                            (0, r.jsx)(o.Heading, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                className: h.tZ,
                                children: t.name,
                            }),
                            (0, r.jsx)(o.hKd, { size: 8 }),
                            (0, r.jsxs)("div", {
                                className: h.MS,
                                children: [
                                    (0, r.jsx)(o.Text, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: T,
                                    }),
                                    null != C
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)("div", { className: h.zk }),
                                                  (0, r.jsx)(o.Text, {
                                                      variant: "text-md/normal",
                                                      color: "text-default",
                                                      children: C,
                                                  }),
                                              ],
                                          })
                                        : null,
                                ],
                            }),
                            (0, r.jsx)(o.hKd, { size: 16 }),
                            t.published ? (0, r.jsx)(f.S, {}) : (0, r.jsx)(f.$, {}),
                        ],
                    }),
                    !S &&
                        (0, r.jsx)(A, {
                            product: t,
                            guildId: n,
                            showEditProduct: !0,
                            showUnpublishProduct: t.published,
                            showCopyLink: t.published,
                            showTestDownload: null != t.attachments,
                            showDeleteProduct: !0,
                            showReportProduct: !1,
                            onEditProduct: i,
                            onUnpublishProduct: a,
                            onDeleteProduct: m,
                            onCopyProductLink: E,
                            onTestDownload: v,
                            onReportProduct: () => {},
                        }),
                ],
            }),
        ],
    });
}
