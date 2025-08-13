n.d(t, { o: () => I });
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(84735),
    l = n(15127),
    c = n(481060),
    u = n(557818),
    d = n(897037),
    f = n(388032),
    _ = n(837408);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function y(e, t) {
    let n = i.useContext(l.q3);
    return (
        i.useEffect(() => {
            var r, i;
            null == (r = n.setHasValue) || r.call(n, (null != t && "" !== t) || (null != e && "" !== e)),
                null == (i = n.setIsFocused) || i.call(n, !1);
        }, []),
        i.useEffect(() => {
            if (null != e && "" !== e) {
                var t;
                null == (t = n.setHasValue) || t.call(n, !0);
            }
        }, [n, e]),
        n
    );
}
function O(e) {
    let { accessory: t, inputSize: n } = e;
    if ("string" == typeof t)
        return (0, r.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "input-placeholder-text",
            className: _.leadingText,
            children: t,
        });
    let i = "md" === n ? "sm" : "xs";
    if ("icon" in t) {
        let { icon: e, onClick: n, "aria-label": o } = t;
        return (0, r.jsx)(c.P3F, {
            className: _.iconButton,
            onClick: n,
            "aria-label": o,
            children: (0, r.jsx)(e, {
                size: i,
                color: "currentColor",
            }),
        });
    }
    let o = t;
    return (0, r.jsx)("div", {
        className: _.icon,
        children: (0, r.jsx)(o, {
            size: i,
            color: c.TVs.colors.ICON_PRIMARY,
        }),
    });
}
function v(e) {
    let { inputSize: t, onClick: n } = e,
        i = "md" === t ? "xs" : "xxs";
    return (0, r.jsx)(c.P3F, {
        className: _.clearButton,
        onClick: n,
        "aria-label": f.intl.string(f.t.VkKicX),
        children: (0, r.jsx)(c.k$p, {
            size: i,
            color: "currentColor",
        }),
    });
}
function I(e) {
    var t, n;
    let {
            disabled: o = !1,
            editable: l,
            inputRef: c,
            focusProps: f,
            name: p = "",
            type: m = "text",
            placeholder: b = "",
            maxLength: I,
            value: T,
            defaultValue: S,
            minLength: A,
            error: N,
            defaultDirty: C = !1,
            leading: R,
            trailing: P,
            validateOn: w = "change",
            size: D = "md",
            fullWidth: L = !1,
            clearable: x = !1,
            helperText: M,
            showCharacterCount: j = !1,
            successMessage: k,
        } = e,
        U = E(e, [
            "disabled",
            "editable",
            "inputRef",
            "focusProps",
            "name",
            "type",
            "placeholder",
            "maxLength",
            "value",
            "defaultValue",
            "minLength",
            "error",
            "defaultDirty",
            "leading",
            "trailing",
            "validateOn",
            "size",
            "fullWidth",
            "clearable",
            "helperText",
            "showCharacterCount",
            "successMessage",
        ]),
        G = y(T, S),
        B = (0, d.m)({
            validateOn: w,
            error: N,
            value: T,
            minLength: A,
            maxLength: I,
            defaultDirty: C,
        }),
        { setShouldValidate: Z } = B,
        F = (e) => {
            var t, n;
            let r = e.currentTarget.value;
            null == (t = U.onChange) || t.call(U, r, p), Z(!0), null == (n = G.setHasValue) || n.call(G, "" !== r);
        },
        V = (e) => {
            var t, n;
            null == (t = U.onFocus) || t.call(U, e), null == (n = G.setIsFocused) || n.call(G, !0);
        },
        H = (e) => {
            var t, n;
            null == (t = U.onBlur) || t.call(U, e), null == (n = G.setIsFocused) || n.call(G, !1);
        },
        Y = () => {
            var e;
            null == (e = U.onChange) || e.call(U, "", p);
        },
        W = i.useRef(null),
        K = U.readOnly;
    null == K && !1 === l && (K = !0);
    let z = null;
    x && null != T && "" !== T && !K
        ? (z = (0, r.jsx)(v, {
              inputSize: D,
              onClick: Y,
          }))
        : null != P &&
          (z = (0, r.jsx)(O, {
              accessory: P,
              inputSize: D,
          }));
    let q = null;
    return (
        null != R &&
            (q = (0, r.jsx)(O, {
                accessory: R,
                inputSize: D,
            })),
        (0, r.jsxs)(u.J, {
            disabled: o,
            validation: B,
            fullWidth: L,
            readOnly: K,
            helperText: M,
            successMessage: k,
            characterCount: j ? (null != (t = null == T ? void 0 : T.length) ? t : 0) : void 0,
            characterCountMaxLength: I,
            className: a()(_.container, _[D], {
                [_.leading]: null != q,
                [_.trailing]: null != z,
            }),
            children: [
                q,
                (0, r.jsx)(
                    s.t,
                    g(h({ ringTarget: W }, f), {
                        children: (0, r.jsx)(
                            "input",
                            g(
                                h(
                                    {
                                        name: p,
                                        className: _.input,
                                        disabled: o,
                                        readOnly: K,
                                        type: m,
                                        placeholder: b,
                                        maxLength: I,
                                        minLength: A,
                                        value: T,
                                        defaultValue: S,
                                    },
                                    U,
                                ),
                                {
                                    "aria-labelledby": null != (n = U["aria-labelledby"]) ? n : G.titleId,
                                    onChange: F,
                                    onBlur: H,
                                    onFocus: V,
                                    ref: c,
                                },
                            ),
                        ),
                    }),
                ),
                z,
            ],
        })
    );
}
