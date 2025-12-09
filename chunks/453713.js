n.d(t, { P: () => y });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(404759),
    s = n.n(o),
    c = n(91192),
    u = n(536895),
    d = n(866442),
    m = n(28664),
    f = n(481060),
    p = n(209613),
    v = n(429368),
    g = n(724994),
    h = n(388032),
    b = n(270132);
function x(e) {
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
function P(e, t) {
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
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++)
            (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let O = s()((e) => {
        let t = !1;
        if (null != e && (0, d.FX)(e)) {
            let n = (0, d._i)(e);
            null != n && (t = 0.3 >= (0, d.Bd)(n));
        }
        return t ? f.TVs.unsafe_rawColors.PRIMARY_700.css : f.TVs.unsafe_rawColors.PRIMARY_200.css;
    }),
    _ = (e) => {
        let {
                variantGroupProduct: t,
                variant: n,
                variantIndex: l,
                totalVariants: o,
                selectedVariantIndex: s,
                onEnter: d,
                onLeave: p,
                minimal: _,
            } = e,
            { isPurchased: y } = (0, g.L)(n),
            C = (0, c.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(l)),
            { onFocus: I } = C,
            w = j(C, ["onFocus"]),
            S = i.useCallback(
                (e) => {
                    e.preventDefault(), e.stopPropagation(), (0, v.$)(t, l), I();
                },
                [I, t, l],
            );
        return (0, r.jsx)(m.u, {
            text: h.intl.string(h.t["6cfuDj"]),
            "aria-label": !1,
            shouldShow: !_ && y,
            asContainer: !0,
            children: (0, r.jsx)(
                f.P3F,
                P(x({}, w), {
                    tag: "li",
                    onMouseEnter: () => {
                        d();
                    },
                    onMouseLeave: () => {
                        p();
                    },
                    onFocus: () => {
                        d();
                    },
                    onBlur: () => {
                        p();
                    },
                    onClick: S,
                    onKeyDown: (e) => {
                        e.key === u.R8.ENTER && S(e);
                    },
                    className: b.colorVariant,
                    children: (0, r.jsx)("div", {
                        className: a()(b.colorSwatch, {
                            [b.open]: !_,
                            [b.selected]: l === s,
                        }),
                        style: {
                            backgroundColor: n.variantValue,
                            zIndex: o - l,
                        },
                        children: y
                            ? (0, r.jsx)(f.kSu, {
                                  className: b.purchasedIndicator,
                                  color: O(n.variantValue),
                              })
                            : null,
                    }),
                }),
            ),
        });
    },
    y = (e) => {
        var t, n;
        let {
                variantGroupProduct: i,
                className: l,
                previewingVariantIndexProps: o,
                setIsHoveringOnSwitch: s,
                minimal: d,
                selectedVariantIndex: m,
                alternativeBackgroundColor: v,
            } = e,
            g = o.previewingVariantIndex,
            O = null == (t = i.variants) ? void 0 : t[m],
            y = null !== g ? (null == (n = i.variants) ? void 0 : n[g]) : void 0,
            C = (0, p.Z)("shop-variants-group-".concat(i.storeListingId), u.hy.HORIZONTAL);
        if (null == O) return null;
        let I = null != y ? y.variantLabel : null == O ? void 0 : O.variantLabel;
        return (0, r.jsx)(c.bG, {
            navigator: C,
            children: (0, r.jsx)(c.SJ, {
                children: (e) => {
                    var t,
                        { ref: n } = e,
                        c = j(e, ["ref"]);
                    return (0, r.jsxs)(
                        "div",
                        P(x({ ref: n }, c), {
                            className: a()(b.variantsPanel, l, {
                                [b.minimalState]: d,
                                [b.alternativeColor]: v,
                            }),
                            onMouseEnter: () => (null == s ? void 0 : s(!0)),
                            onMouseLeave: () => (null == s ? void 0 : s(!1)),
                            children: [
                                (0, r.jsx)("ol", {
                                    className: b.variantsList,
                                    children:
                                        null == (t = i.variants)
                                            ? void 0
                                            : t.map((e, t) => {
                                                  var n, l;
                                                  return (0, r.jsx)(
                                                      _,
                                                      {
                                                          variantGroupProduct: i,
                                                          variant: e,
                                                          variantIndex: t,
                                                          selectedVariantIndex: m,
                                                          totalVariants:
                                                              null != (l = null == (n = i.variants) ? void 0 : n.length)
                                                                  ? l
                                                                  : 0,
                                                          onEnter: () => o.handleEntering(t),
                                                          onLeave: o.handleLeaving,
                                                          minimal: d,
                                                      },
                                                      t,
                                                  );
                                              }),
                                }),
                                (0, r.jsx)(f.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: b.variantLabel,
                                    children: d ? h.intl.string(h.t.wbgaj6) : I,
                                }),
                            ],
                        }),
                    );
                },
            }),
        });
    };
