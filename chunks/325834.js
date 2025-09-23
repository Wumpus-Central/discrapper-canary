r.d(t, { r: () => m });
var n = r(951288),
    l = r(647438),
    i = r(120356),
    a = r.n(i),
    o = r(91192),
    s = r(536895),
    c = r(481060),
    u = r(209613),
    d = r(429368),
    p = r(724994),
    f = r(578976),
    b = r(388032),
    h = r(253887);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function v(e, t) {
    if (null == e) return {};
    var r,
        n,
        l = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = {},
                i = Object.keys(e);
            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++)
            (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    }
    return l;
}
let y = (e) => {
        let {
                variantGroupProduct: t,
                variant: r,
                variantIndex: i,
                totalVariants: u,
                selectedVariantIndex: y,
                onEnter: m,
                onLeave: j,
            } = e,
            { isPurchased: P } = (0, p.L)(r),
            _ = (0, o.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(i)),
            { onFocus: E } = _,
            x = v(_, ["onFocus"]),
            C = l.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, d.$)(t, i), E();
                },
                [E, t, i],
            ),
            S = (0, f.SQ)(r);
        return (0, n.jsx)(c.ua7, {
            text: b.intl.string(b.t["6cfuDg"]),
            "aria-label": !1,
            shouldShow: P,
            children: (e) =>
                (0, n.jsx)(
                    c.P3F,
                    O(g({}, x), {
                        tag: "li",
                        onMouseEnter: () => {
                            var t;
                            m(), null == (t = e.onMouseEnter) || t.call(e);
                        },
                        onMouseLeave: () => {
                            var t;
                            j(), null == (t = e.onMouseLeave) || t.call(e);
                        },
                        onFocus: () => {
                            var t;
                            m(), null == (t = e.onMouseEnter) || t.call(e);
                        },
                        onBlur: () => {
                            var t;
                            j(), null == (t = e.onMouseLeave) || t.call(e);
                        },
                        onClick: C,
                        onKeyDown: (e) => {
                            e.key === s.R8.ENTER && C(e);
                        },
                        className: h.thumbnailVariant,
                        children: (0, n.jsxs)("div", {
                            className: a()(h.thumbnailImage, { [h.selected]: i === y }),
                            style: { zIndex: u - i },
                            children: [
                                null != S &&
                                    "" !== S &&
                                    (0, n.jsx)("img", {
                                        src: S,
                                        alt: r.variantLabel,
                                        className: h.thumbnailImg,
                                        onError: (e) => {
                                            e.target.style.display = "none";
                                        },
                                    }),
                                P
                                    ? (0, n.jsx)("div", {
                                          className: h.purchasedIndicator,
                                          children: (0, n.jsx)(c.kSu, { color: "var(--text-primary)" }),
                                      })
                                    : null,
                            ],
                        }),
                    }),
                ),
        });
    },
    m = (e) => {
        var t, r;
        let {
                variantGroupProduct: l,
                className: i,
                previewingVariantIndexProps: d,
                setIsHoveringOnSwitch: p,
                selectedVariantIndex: f,
            } = e,
            b = d.previewingVariantIndex,
            m = null == (t = l.variants) ? void 0 : t[f],
            j = null !== b ? (null == (r = l.variants) ? void 0 : r[b]) : void 0,
            P = (0, u.Z)("shop-variants-group-".concat(l.storeListingId), s.hy.HORIZONTAL);
        if (null == m) return null;
        let _ = null != j ? j.variantLabel : null == m ? void 0 : m.variantLabel;
        return (0, n.jsx)(o.bG, {
            navigator: P,
            children: (0, n.jsx)(o.SJ, {
                children: (e) => {
                    var { ref: t } = e,
                        r = v(e, ["ref"]);
                    return (0, n.jsxs)(
                        "div",
                        O(g({ ref: t }, r), {
                            className: a()(h.variantsPanel, i, {}),
                            onMouseEnter: () => (null == p ? void 0 : p(!0)),
                            onMouseLeave: () => (null == p ? void 0 : p(!1)),
                            children: [
                                null != l.variants &&
                                    l.variants.length > 0 &&
                                    (0, n.jsx)("ol", {
                                        className: h.variantsList,
                                        children: l.variants.map((e, t) =>
                                            (0, n.jsx)(
                                                y,
                                                {
                                                    variantGroupProduct: l,
                                                    variant: e,
                                                    variantIndex: t,
                                                    selectedVariantIndex: f,
                                                    totalVariants: l.variants.length,
                                                    onEnter: () => d.handleEntering(t),
                                                    onLeave: d.handleLeaving,
                                                },
                                                t,
                                            ),
                                        ),
                                    }),
                                (0, n.jsx)(c.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-secondary",
                                    className: h.variantLabel,
                                    children: _,
                                }),
                            ],
                        }),
                    );
                },
            }),
        });
    };
