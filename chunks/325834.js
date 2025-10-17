n.d(t, { r: () => j });
var r = n(951288),
    l = n(647438),
    a = n(120356),
    i = n.n(a),
    o = n(91192),
    s = n(536895),
    c = n(28664),
    u = n(481060),
    d = n(209613),
    p = n(429368),
    f = n(724994),
    b = n(578976),
    y = n(388032),
    O = n(233971);
function v(e) {
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
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
    }
    return l;
}
let h = (e) => {
        let {
                variantGroupProduct: t,
                variant: n,
                variantIndex: a,
                totalVariants: d,
                selectedVariantIndex: h,
                onEnter: j,
                onLeave: x,
            } = e,
            { isPurchased: P } = (0, f.L)(n),
            E = (0, o.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(a)),
            { onFocus: _ } = E,
            C = m(E, ["onFocus"]),
            S = l.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, p.$)(t, a), _();
                },
                [_, t, a],
            ),
            A = (0, b.SQ)(n);
        return (0, r.jsx)(c.u, {
            asContainer: !0,
            text: y.intl.string(y.t["6cfuDg"]),
            "aria-label": !1,
            shouldShow: P,
            children: (0, r.jsx)(
                u.P3F,
                g(v({}, C), {
                    tag: "li",
                    onMouseEnter: () => {
                        j();
                    },
                    onMouseLeave: () => {
                        x();
                    },
                    onFocus: () => {
                        j();
                    },
                    onBlur: () => {
                        x();
                    },
                    onClick: S,
                    onKeyDown: (e) => {
                        e.key === s.R8.ENTER && S(e);
                    },
                    className: O.thumbnailVariant,
                    children: (0, r.jsxs)("div", {
                        className: i()(O.thumbnailImage, { [O.selected]: a === h }),
                        style: { zIndex: d - a },
                        children: [
                            null != A &&
                                "" !== A &&
                                (0, r.jsx)("img", {
                                    src: A,
                                    alt: n.variantLabel,
                                    className: O.thumbnailImg,
                                    onError: (e) => {
                                        e.target.style.display = "none";
                                    },
                                }),
                            P
                                ? (0, r.jsx)("div", {
                                      className: O.purchasedIndicator,
                                      children: (0, r.jsx)(u.kSu, { color: "var(--text-primary)" }),
                                  })
                                : null,
                        ],
                    }),
                }),
            ),
        });
    },
    j = (e) => {
        var t, n;
        let {
                variantGroupProduct: l,
                className: a,
                previewingVariantIndexProps: c,
                setIsHoveringOnSwitch: p,
                selectedVariantIndex: f,
            } = e,
            b = c.previewingVariantIndex,
            y = null == (t = l.variants) ? void 0 : t[f],
            j = null !== b ? (null == (n = l.variants) ? void 0 : n[b]) : void 0,
            x = (0, d.Z)("shop-variants-group-".concat(l.storeListingId), s.hy.HORIZONTAL);
        if (null == y) return null;
        let P = null != j ? j.variantLabel : null == y ? void 0 : y.variantLabel;
        return (0, r.jsx)(o.bG, {
            navigator: x,
            children: (0, r.jsx)(o.SJ, {
                children: (e) => {
                    var { ref: t } = e,
                        n = m(e, ["ref"]);
                    return (0, r.jsxs)(
                        "div",
                        g(v({ ref: t }, n), {
                            className: i()(O.variantsPanel, a, {}),
                            onMouseEnter: () => (null == p ? void 0 : p(!0)),
                            onMouseLeave: () => (null == p ? void 0 : p(!1)),
                            children: [
                                null != l.variants &&
                                    l.variants.length > 0 &&
                                    (0, r.jsx)("ol", {
                                        className: O.variantsList,
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
                                    className: O.variantLabel,
                                    children: P,
                                }),
                            ],
                        }),
                    );
                },
            }),
        });
    };
