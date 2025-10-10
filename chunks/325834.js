n.d(t, { r: () => v });
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    o = n(91192),
    s = n(536895),
    c = n(28664),
    u = n(481060),
    d = n(209613),
    p = n(429368),
    f = n(724994),
    b = n(578976),
    y = n(388032),
    m = n(233971);
function O(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++)
            (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
let h = (e) => {
        let {
                variantGroupProduct: t,
                variant: n,
                variantIndex: i,
                totalVariants: d,
                selectedVariantIndex: h,
                onEnter: v,
                onLeave: x,
            } = e,
            { isPurchased: E } = (0, f.L)(n),
            P = (0, o.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(i)),
            { onFocus: _ } = P,
            C = j(P, ["onFocus"]),
            S = l.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, p.$)(t, i), _();
                },
                [_, t, i],
            ),
            A = (0, b.SQ)(n);
        return (0, r.jsx)(c.u, {
            asContainer: !0,
            text: y.intl.string(y.t["6cfuDg"]),
            "aria-label": !1,
            shouldShow: E,
            children: (0, r.jsx)(
                u.P3F,
                g(O({}, C), {
                    tag: "li",
                    onMouseEnter: () => {
                        v();
                    },
                    onMouseLeave: () => {
                        x();
                    },
                    onFocus: () => {
                        v();
                    },
                    onBlur: () => {
                        x();
                    },
                    onClick: S,
                    onKeyDown: (e) => {
                        e.key === s.R8.ENTER && S(e);
                    },
                    className: m.thumbnailVariant,
                    children: (0, r.jsxs)("div", {
                        className: a()(m.thumbnailImage, { [m.selected]: i === h }),
                        style: { zIndex: d - i },
                        children: [
                            null != A &&
                                "" !== A &&
                                (0, r.jsx)("img", {
                                    src: A,
                                    alt: n.variantLabel,
                                    className: m.thumbnailImg,
                                    onError: (e) => {
                                        e.target.style.display = "none";
                                    },
                                }),
                            E
                                ? (0, r.jsx)("div", {
                                      className: m.purchasedIndicator,
                                      children: (0, r.jsx)(u.kSu, { color: "var(--text-primary)" }),
                                  })
                                : null,
                        ],
                    }),
                }),
            ),
        });
    },
    v = (e) => {
        var t, n;
        let {
                variantGroupProduct: l,
                className: i,
                previewingVariantIndexProps: c,
                setIsHoveringOnSwitch: p,
                selectedVariantIndex: f,
            } = e,
            b = c.previewingVariantIndex,
            y = null == (t = l.variants) ? void 0 : t[f],
            v = null !== b ? (null == (n = l.variants) ? void 0 : n[b]) : void 0,
            x = (0, d.Z)("shop-variants-group-".concat(l.storeListingId), s.hy.HORIZONTAL);
        if (null == y) return null;
        let E = null != v ? v.variantLabel : null == y ? void 0 : y.variantLabel;
        return (0, r.jsx)(o.bG, {
            navigator: x,
            children: (0, r.jsx)(o.SJ, {
                children: (e) => {
                    var { ref: t } = e,
                        n = j(e, ["ref"]);
                    return (0, r.jsxs)(
                        "div",
                        g(O({ ref: t }, n), {
                            className: a()(m.variantsPanel, i, {}),
                            onMouseEnter: () => (null == p ? void 0 : p(!0)),
                            onMouseLeave: () => (null == p ? void 0 : p(!1)),
                            children: [
                                null != l.variants &&
                                    l.variants.length > 0 &&
                                    (0, r.jsx)("ol", {
                                        className: m.variantsList,
                                        children: l.variants.map((e, t) =>
                                            (0, r.jsx)(
                                                h,
                                                {
                                                    variantGroupProduct: l,
                                                    variant: e,
                                                    variantIndex: t,
                                                    selectedVariantIndex: f,
                                                    totalVariants: l.variants.length,
                                                    onEnter: () => c.handleEntering(t),
                                                    onLeave: c.handleLeaving,
                                                },
                                                t,
                                            ),
                                        ),
                                    }),
                                (0, r.jsx)(u.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-secondary",
                                    className: m.variantLabel,
                                    children: E,
                                }),
                            ],
                        }),
                    );
                },
            }),
        });
    };
