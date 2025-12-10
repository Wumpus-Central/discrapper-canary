n.d(t, {
    Z: () => S,
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
    p = n(231338),
    _ = n(388032),
    m = n(692316);
function h(e, t, n) {
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
                h(e, t, n[t]);
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
        onTestDownload: p,
        onReportProduct: h,
        closePopout: g,
        onSelect: E,
    } = e;
    return (0, r.jsx)("div", {
        className: m.menuContainer,
        children: (0, r.jsxs)(s.v2r, {
            navId: "guild-product-context",
            onClose: g,
            "aria-label": _.intl.string(_.t.Z146dM),
            onSelect: E,
            children: [
                (0, r.jsxs)(s.kSQ, {
                    children: [
                        t &&
                            (0, r.jsx)(s.sNh, {
                                id: "guild-product-edit",
                                label: _.intl.string(_.t.EEfce4),
                                action: c,
                            }),
                        i &&
                            (0, r.jsx)(s.sNh, {
                                id: "guild-product-copy-link",
                                label: _.intl.string(_.t.XR26uj),
                                icon: s.xPt,
                                action: f,
                            }),
                        a &&
                            (0, r.jsx)(s.sNh, {
                                id: "guild-product-test-download",
                                label: _.intl.string(_.t.aXoI6U),
                                icon: s._8t,
                                action: p,
                            }),
                    ],
                }),
                (0, r.jsxs)(s.kSQ, {
                    children: [
                        n &&
                            (0, r.jsx)(s.sNh, {
                                id: "guild-product-unpublish",
                                label: _.intl.string(_.t.QrkMlN),
                                action: u,
                            }),
                        o &&
                            (0, r.jsx)(s.sNh, {
                                id: "guild-product-delete",
                                label: _.intl.string(_.t.zWjqvB),
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
                            label: _.intl.string(_.t["6yUzvG"]),
                            color: "danger",
                            action: h,
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
            onUnpublishProduct: p,
            onDeleteProduct: h,
            onCopyProductLink: E,
            onTestDownload: y,
            onReportProduct: v,
        } = e,
        S = i.useRef(null),
        I = (e) => {
            e.stopPropagation();
        };
    return (0, r.jsx)("div", {
        onClick: I,
        children: (0, r.jsx)(s.yRy, {
            targetElementRef: S,
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
                        onUnpublishProduct: p,
                        onDeleteProduct: h,
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
                        innerRef: S,
                        "aria-label": _.intl.formatToPlainString(_.t.RtqjeB, { productName: t.name }),
                        "aria-haspopup": "listbox",
                        "aria-expanded": i,
                        className: m.productActionMenuButton,
                        children: (0, r.jsx)(s.Huf, {
                            size: "md",
                            color: "currentColor",
                            className: m.productActionMenuIcon,
                            "aria-hidden": !0,
                        }),
                    }),
                );
            },
        }),
    });
}
function S(e) {
    let {
            product: t,
            guildId: n,
            onEditProduct: i,
            onUnpublishProduct: a,
            onDeleteProduct: h,
            onCopyProductLink: E,
            onTestDownload: S,
            disabled: I = !1,
        } = e,
        T = (0, c.U)(t, y),
        C = null !== t.price_tier ? (0, u.T4)(t.price_tier, p.pK.USD) : void 0,
        A = (0, d.C)(t);
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
                        onDeleteProduct: h,
                        onCopyLink: E,
                        onTestDownload: S,
                        onReportProduct: () => {},
                    }),
                ),
            ),
        );
    }
    return (0, r.jsxs)(s.kL8, {
        tag: "article",
        className: o()(m.productCardClickable, m.productCard, { [m.disabled]: I }),
        onClick: I ? void 0 : i,
        onContextMenu: N,
        "aria-label": _.intl.formatToPlainString(_.t["X/yAKs"], { productName: t.name }),
        children: [
            (0, r.jsx)("img", {
                alt: "",
                src: T,
                className: m.productThumbnail,
            }),
            (0, r.jsxs)("div", {
                className: m.productInfo,
                children: [
                    (0, r.jsxs)("div", {
                        className: m.productInfoContent,
                        children: [
                            (0, r.jsx)(s.Heading, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                className: m.productName,
                                children: t.name,
                            }),
                            (0, r.jsx)(s.LZC, { size: 8 }),
                            (0, r.jsxs)("div", {
                                className: m.productDetails,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-md/normal",
                                        color: "text-default",
                                        children: C,
                                    }),
                                    null != A
                                        ? (0, r.jsxs)(r.Fragment, {
                                              children: [
                                                  (0, r.jsx)("div", { className: m.dotSeparator }),
                                                  (0, r.jsx)(s.Text, {
                                                      variant: "text-md/normal",
                                                      color: "text-default",
                                                      children: A,
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
                    !I &&
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
                            onDeleteProduct: h,
                            onCopyProductLink: E,
                            onTestDownload: S,
                            onReportProduct: () => {},
                        }),
                ],
            }),
        ],
    });
}
