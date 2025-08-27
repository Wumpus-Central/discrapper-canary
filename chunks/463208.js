n.d(t, { o: () => T });
var r = n(951288),
    i = n(647438),
    o = n(120356),
    a = n.n(o),
    s = n(84735),
    l = n(15127),
    c = n(753450),
    u = n(481060),
    d = n(74655),
    f = n(897037),
    _ = n(388032),
    p = n(430490);
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
function m(e) {
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
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function O(e, t) {
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
function v(e) {
    let { accessory: t, inputSize: n, disabled: i } = e;
    if ("string" == typeof t)
        return (0, r.jsx)(u.Text, {
            variant: "text-md/normal",
            color: "input-placeholder-text",
            className: p.leadingText,
            children: t,
        });
    let o = "md" === n ? "sm" : "xs";
    if ("icon" in t) {
        let { icon: e, onClick: n, "aria-label": a } = t;
        return (0, r.jsx)(u.P3F, {
            className: p.iconButton,
            onClick: n,
            "aria-label": a,
            "aria-disabled": i,
            children: (0, r.jsx)(e, {
                size: o,
                color: "currentColor",
            }),
        });
    }
    if ("button" in t)
        return (0, r.jsx)("div", {
            className: p.icon,
            children: t.button,
        });
    if ("type" in t && "tags" === t.type) {
        let { type: e } = t,
            n = b(t, ["type"]);
        return (0, r.jsx)(c.Q, E(m({}, n), { layout: "inline" }));
    }
    let a = t;
    return (0, r.jsx)("div", {
        className: p.icon,
        children: (0, r.jsx)(a, {
            size: o,
            color: u.TVs.colors.ICON_PRIMARY,
        }),
    });
}
function I(e) {
    let { inputSize: t, onClick: n } = e,
        i = "md" === t ? "xs" : "xxs";
    return (0, r.jsx)(u.P3F, {
        className: p.clearButton,
        onClick: n,
        "aria-label": _.intl.string(_.t.VkKicX),
        children: (0, r.jsx)(u.k$p, {
            size: i,
            color: "currentColor",
        }),
    });
}
function T(e) {
    var t, n;
    let {
            disabled: o = !1,
            editable: l,
            inputRef: c,
            focusProps: u,
            name: _ = "",
            type: h = "text",
            placeholder: g = "",
            maxLength: y,
            value: T,
            defaultValue: S,
            minLength: A,
            error: C,
            defaultDirty: N = !1,
            leading: R,
            trailing: P,
            validateOn: w = "change",
            size: D = "md",
            fullWidth: x = !1,
            clearable: L = !1,
            helperText: j,
            showCharacterCount: M = !1,
            successMessage: k,
        } = e,
        U = b(e, [
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
        G = O(T, S),
        B = (0, f.m)({
            validateOn: w,
            error: C,
            value: T,
            minLength: A,
            maxLength: y,
            defaultDirty: N,
        }),
        { setShouldValidate: Z } = B,
        F = "object" == typeof R && "type" in R && "tags" === R.type,
        V = (e) => {
            var t, n;
            let r = e.currentTarget.value;
            null == (t = U.onChange) || t.call(U, r, _), Z(!0), null == (n = G.setHasValue) || n.call(G, "" !== r);
        },
        H = (e) => {
            var t, n;
            null == (t = U.onFocus) || t.call(U, e), null == (n = G.setIsFocused) || n.call(G, !0);
        },
        Y = (e) => {
            var t, n;
            null == (t = U.onBlur) || t.call(U, e), null == (n = G.setIsFocused) || n.call(G, !1);
        },
        W = (e) => {
            if (null != U.onClear) U.onClear(e);
            else {
                var t;
                null == (t = U.onChange) || t.call(U, "", _);
            }
        },
        K = i.useRef(null),
        z = U.readOnly;
    null == z && !1 === l && (z = !0);
    let q = null;
    ("boolean" == typeof L ? L && null != T && "" !== T && !z : L.show)
        ? (q = (0, r.jsx)(I, {
              inputSize: D,
              onClick: W,
          }))
        : null != P &&
          (q = (0, r.jsx)(v, {
              accessory: P,
              inputSize: D,
          }));
    let X = null;
    return (
        null != R &&
            (X = (0, r.jsx)(v, {
                accessory: R,
                inputSize: D,
            })),
        (0, r.jsxs)(d.U, {
            ref: K,
            disabled: o,
            validation: B,
            fullWidth: x,
            readOnly: z,
            helperText: j,
            successMessage: k,
            characterCount: M ? (null != (t = null == T ? void 0 : T.length) ? t : 0) : void 0,
            characterCountMaxLength: y,
            className: a()(p.container, p[D], {
                [p.hasLeading]: null != X,
                [p.hasTrailing]: null != q,
                [p.hasTags]: F,
            }),
            children: [
                X,
                (0, r.jsx)(
                    s.t,
                    E(m({ ringTarget: K }, u), {
                        children: (0, r.jsx)(
                            "input",
                            E(
                                m(
                                    {
                                        name: _,
                                        className: p.input,
                                        disabled: o,
                                        readOnly: z,
                                        type: h,
                                        placeholder: g,
                                        maxLength: y,
                                        minLength: A,
                                        value: T,
                                        defaultValue: S,
                                    },
                                    U,
                                ),
                                {
                                    "aria-labelledby": null != (n = U["aria-labelledby"]) ? n : G.titleId,
                                    onChange: V,
                                    onBlur: Y,
                                    onFocus: H,
                                    ref: c,
                                },
                            ),
                        ),
                    }),
                ),
                q,
            ],
        })
    );
}
