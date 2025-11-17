t.d(n, { P: () => C });
var r = t(54381),
    l = t(473749),
    i = t(120356),
    a = t.n(i),
    o = t(404759),
    s = t.n(o),
    c = t(91192),
    u = t(536895),
    d = t(866442),
    v = t(28664),
    p = t(481060),
    f = t(209613),
    b = t(429368),
    g = t(724994),
    m = t(388032),
    h = t(270132);
function x(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function j(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function y(e, n) {
    if (null == e) return {};
    var t,
        r,
        l = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                l = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (l[t] = e[t]);
            return l;
        })(e, n);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++)
            (t = i[r]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t]);
    }
    return l;
}
let O = s()((e) => {
        let n = !1;
        if (null != e && (0, d.FX)(e)) {
            let t = (0, d._i)(e);
            null != t && (n = 0.3 >= (0, d.Bd)(t));
        }
        return n ? p.TVs.unsafe_rawColors.PRIMARY_700.css : p.TVs.unsafe_rawColors.PRIMARY_200.css;
    }),
    P = (e) => {
        let {
                variantGroupProduct: n,
                variant: t,
                variantIndex: i,
                totalVariants: o,
                selectedVariantIndex: s,
                onEnter: d,
                onLeave: f,
                minimal: P,
            } = e,
            { isPurchased: C } = (0, g.L)(t),
            S = (0, c.JA)("shop-variants-group-".concat(n.storeListingId, "-").concat(i)),
            { onFocus: N } = S,
            I = y(S, ["onFocus"]),
            _ = l.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, b.$)(n, i), N();
                },
                [N, n, i],
            );
        return (0, r.jsx)(v.u, {
            text: m.intl.string(m.t["6cfuDj"]),
            "aria-label": !1,
            shouldShow: !P && C,
            asContainer: !0,
            children: (0, r.jsx)(
                p.P3F,
                j(x({}, I), {
                    tag: "li",
                    onMouseEnter: () => {
                        d();
                    },
                    onMouseLeave: () => {
                        f();
                    },
                    onFocus: () => {
                        d();
                    },
                    onBlur: () => {
                        f();
                    },
                    onClick: _,
                    onKeyDown: (e) => {
                        e.key === u.R8.ENTER && _(e);
                    },
                    className: h.colorVariant,
                    children: (0, r.jsx)("div", {
                        className: a()(h.colorSwatch, {
                            [h.open]: !P,
                            [h.selected]: i === s,
                        }),
                        style: {
                            backgroundColor: t.variantValue,
                            zIndex: o - i,
                        },
                        children: C
                            ? (0, r.jsx)(p.kSu, {
                                  className: h.purchasedIndicator,
                                  color: O(t.variantValue),
                              })
                            : null,
                    }),
                }),
            ),
        });
    },
    C = (e) => {
        var n, t;
        let {
                variantGroupProduct: l,
                className: i,
                previewingVariantIndexProps: o,
                setIsHoveringOnSwitch: s,
                minimal: d,
                selectedVariantIndex: v,
                alternativeBackgroundColor: b,
            } = e,
            g = o.previewingVariantIndex,
            O = null == (n = l.variants) ? void 0 : n[v],
            C = null !== g ? (null == (t = l.variants) ? void 0 : t[g]) : void 0,
            S = (0, f.Z)("shop-variants-group-".concat(l.storeListingId), u.hy.HORIZONTAL);
        if (null == O) return null;
        let N = null != C ? C.variantLabel : null == O ? void 0 : O.variantLabel;
        return (0, r.jsx)(c.bG, {
            navigator: S,
            children: (0, r.jsx)(c.SJ, {
                children: (e) => {
                    var n,
                        { ref: t } = e,
                        c = y(e, ["ref"]);
                    return (0, r.jsxs)(
                        "div",
                        j(x({ ref: t }, c), {
                            className: a()(h.variantsPanel, i, {
                                [h.minimalState]: d,
                                [h.alternativeColor]: b,
                            }),
                            onMouseEnter: () => (null == s ? void 0 : s(!0)),
                            onMouseLeave: () => (null == s ? void 0 : s(!1)),
                            children: [
                                (0, r.jsx)("ol", {
                                    className: h.variantsList,
                                    children:
                                        null == (n = l.variants)
                                            ? void 0
                                            : n.map((e, n) => {
                                                  var t, i;
                                                  return (0, r.jsx)(
                                                      P,
                                                      {
                                                          variantGroupProduct: l,
                                                          variant: e,
                                                          variantIndex: n,
                                                          selectedVariantIndex: v,
                                                          totalVariants:
                                                              null != (i = null == (t = l.variants) ? void 0 : t.length)
                                                                  ? i
                                                                  : 0,
                                                          onEnter: () => o.handleEntering(n),
                                                          onLeave: o.handleLeaving,
                                                          minimal: d,
                                                      },
                                                      n,
                                                  );
                                              }),
                                }),
                                (0, r.jsx)(p.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-secondary",
                                    className: h.variantLabel,
                                    children: d ? m.intl.string(m.t.wbgaj6) : N,
                                }),
                            ],
                        }),
                    );
                },
            }),
        });
    };
