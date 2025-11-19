n.d(t, {
    Z: () => I,
    m: () => v,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(239091),
    c = n(166081),
    u = n(937615),
    d = n(942833),
    f = n(48691),
    _ = n(231338),
    p = n(388032),
    h = n(892717);
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
        showDeleteProduct: o,
        showReportProduct: l,
        onEditProduct: c,
        onUnpublishProduct: u,
        onDeleteProduct: d,
        onCopyLink: f,
        onTestDownload: _,
        onReportProduct: m,
        closePopout: g,
        onSelect: E,
    } = e;
    return (0, r.jsx)("div", {
        className: h.menuContainer,
        children: (0, r.jsxs)(s.v2r, {
            navId: "guild-product-context",
            onClose: g,
            "aria-label": p.intl.string(p.t.Z146dM),
            onSelect: E,
            children: [
                (0, r.jsxs)(s.kSQ, {
                    children: [
                        t &&
                            (0, r.jsx)(s.sNh, {
                                id: "guild-product-edit",
                                label: p.intl.string(p.t.EEfce4),
                                action: c,
                            }),
                        i &&
                            (0, r.jsx)(s.sNh, {
                                id: "guild-product-copy-link",
                                label: p.intl.string(p.t.XR26uj),
                                icon: s.xPt,
                                action: f,
                            }),
                        a &&
                            (0, r.jsx)(s.sNh, {
                                id: "guild-product-test-download",
                                label: p.intl.string(p.t.aXoI6U),
                                icon: s._8t,
                                action: _,
                            }),
                    ],
                }),
                (0, r.jsxs)(s.kSQ, {
                    children: [
                        n &&
                            (0, r.jsx)(s.sNh, {
                                id: "guild-product-unpublish",
                                label: p.intl.string(p.t.QrkMlN),
                                action: u,
                            }),
                        o &&
                            (0, r.jsx)(s.sNh, {
                                id: "guild-product-delete",
                                label: p.intl.string(p.t.zWjqvB),
                                color: "danger",
                                action: d,
                            }),
                    ],
                }),
                (0, r.jsx)(s.kSQ, {
                    children:
                        l &&
                        (0, r.jsx)(s.sNh, {
                            id: "guild-product-report",
                            label: p.intl.string(p.t["6yUzvG"]),
                            color: "danger",
                            action: m,
                        }),
                }),
            ],
        }),
    });
}
function v(e) {
    let {
            product: t,
            guildId: n,
            showEditProduct: a,
            showUnpublishProduct: o,
            showTestDownload: l,
            showCopyLink: c,
            showDeleteProduct: u,
            showReportProduct: d,
            onEditProduct: f,
            onUnpublishProduct: _,
            onDeleteProduct: m,
            onCopyProductLink: E,
            onTestDownload: y,
            onReportProduct: v,
        } = e,
        I = i.useRef(null),
        T = (e) => {
            e.stopPropagation();
        };
    return (0, r.jsx)("div", {
        onClick: T,
        children: (0, r.jsx)(s.yRy, {
            targetElementRef: I,
            position: "right",
            align: "top",
            spacing: -8,
            animation: s.yRy.Animation.FADE,
            renderPopout: (e) =>
                (0, r.jsx)(
                    O,
                    b(g({}, e), {
                        guildId: n,
                        productId: t.id,
                        showEditProduct: a,
                        showUnpublishProduct: o,
                        showCopyLink: c,
                        showTestDownload: l,
                        showReportProduct: d,
                        showDeleteProduct: u,
                        onEditProduct: f,
                        onUnpublishProduct: _,
                        onDeleteProduct: m,
                        onCopyLink: E,
                        onTestDownload: y,
                        onReportProduct: v,
                    }),
                ),
            children: (e, n) => {
                let { isShown: i } = n;
                return (0, r.jsx)(
                    s.P3F,
                    b(g({}, e), {
                        innerRef: I,
                        "aria-label": p.intl.formatToPlainString(p.t.RtqjeB, { productName: t.name }),
                        "aria-haspopup": "listbox",
                        "aria-expanded": i,
                        className: h.productActionMenuButton,
                        children: (0, r.jsx)(s.Huf, {
                            size: "md",
                            color: "currentColor",
                            className: h.productActionMenuIcon,
                            "aria-hidden": !0,
                        }),
                    }),
                );
            },
        }),
    });
}
function I(e) {
    let {
            product: t,
            guildId: n,
            onEditProduct: i,
            onUnpublishProduct: a,
            onDeleteProduct: m,
            onCopyProductLink: E,
            onTestDownload: I,
            disabled: T = !1,
        } = e,
        S = (0, c.U)(t, y),
        A = null !== t.price_tier ? (0, u.T4)(t.price_tier, _.pK.USD) : void 0,
        C = (0, d.C)(t);
    function N(e) {
        (0, l.jW)(e, () =>
            Promise.resolve((e) =>
                (0, r.jsx)(
                    O,
                    b(g({}, e), {
                        closePopout: l.Zy,
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
                        onTestDownload: I,
                        onReportProduct: () => {},
                    }),
                ),
            ),
        );
    }
    return (0, r.jsxs)(s.kL8, {
        tag: "article",
        className: o()(h.productCardClickable, h.productCard, { [h.disabled]: T }),
        onClick: T ? void 0 : i,
        onContextMenu: N,
        "aria-label": p.intl.formatToPlainString(p.t["X/yAKs"], { productName: t.name }),
        children: [
            (0, r.jsx)("img", {
                alt: "",
                src: S,
                className: h.productThumbnail,
            }),
            (0, r.jsxs)("div", {
                className: h.productInfo,
                children: [
                    (0, r.jsxs)("div", {
                        className: h.productInfoContent,
                        children: [
                            (0, r.jsx)(s.Heading, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                className: h.productName,
                                children: t.name,
                            }),
                            (0, r.jsx)(s.LZC, { size: 8 }),
                            (0, r.jsxs)("div", {
                                className: h.productDetails,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        color: "header-secondary",
                                        children: A,
                                    }),
                                    null != C
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)("div", { className: h.dotSeparator }),
                                                  (0, r.jsx)(s.Text, {
                                                      variant: "text-md/normal",
                                                      color: "header-secondary",
                                                      children: C,
                                                  }),
                                              ],
                                          })
                                        : null,
                                ],
                            }),
                            (0, r.jsx)(s.LZC, { size: 16 }),
                            t.published ? (0, r.jsx)(f.t, {}) : (0, r.jsx)(f.b, {}),
                        ],
                    }),
                    !T &&
                        (0, r.jsx)(v, {
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
                            onTestDownload: I,
                            onReportProduct: () => {},
                        }),
                ],
            }),
        ],
    });
}
