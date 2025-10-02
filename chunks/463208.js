n.d(t, {
    I: () => C,
    o: () => A,
}),
    n(953529);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(15127),
    c = n(681715),
    u = n(159691),
    d = n(481060),
    f = n(841878),
    _ = n(74655),
    p = n(897037),
    h = n(388032),
    m = n(693697);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function I(e, t) {
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
function T(e) {
    let { accessory: t, inputSize: n, disabled: i } = e;
    if ("string" == typeof t)
        return (0, r.jsx)(d.Text, {
            variant: "text-md/normal",
            color: "input-placeholder-text",
            className: m.leadingText,
            children: t,
        });
    if ("icon" in t) {
        let { tooltip: e } = t,
            a = O(t, ["tooltip"]),
            o = "md" === n ? "sm" : "xs",
            s = (0, r.jsx)(
                u.HLj,
                y(E({}, a), {
                    size: o,
                    variant: "input-accessory",
                }),
            );
        return null != e
            ? (0, r.jsx)(c.u, {
                  asContainer: !0,
                  text: e,
                  shouldShow: !i,
                  children: s,
              })
            : s;
    }
    if ("button" in t)
        return (0, r.jsx)("div", {
            className: m.icon,
            children: t.button,
        });
    if ("type" in t && "tags" === t.type) {
        let { type: e } = t,
            n = O(t, ["type"]);
        return (0, r.jsx)(s.QSK, y(E({}, n), { layout: "inline" }));
    }
    if ("type" in t && "image" === t.type)
        return (0, r.jsx)("img", {
            "aria-hidden": !0,
            alt: "",
            src: t.src,
            className: m.image,
        });
    let a = t,
        o = "md" === n ? "xs" : "xxs";
    return (0, r.jsx)("div", {
        className: m.icon,
        children: (0, r.jsx)(a, {
            size: o,
            color: d.TVs.colors.ICON_PRIMARY,
        }),
    });
}
function S(e) {
    let { inputSize: t, onClick: n } = e,
        i = "md" === t ? "xs" : "xxs";
    return (0, r.jsx)(d.P3F, {
        className: m.clearButton,
        onClick: n,
        "aria-label": h.intl.string(h.t.VkKicX),
        children: (0, r.jsx)(d.k$p, {
            size: i,
            color: "currentColor",
        }),
    });
}
function A(e) {
    var t;
    let {
            disabled: n = !1,
            editable: a,
            inputRef: l,
            focusProps: c,
            name: u = "",
            type: d = "text",
            placeholder: h = "",
            maxLength: g,
            value: b,
            defaultValue: v,
            minLength: A,
            error: N,
            defaultDirty: R = !1,
            leading: P,
            trailing: w,
            validateOn: D = "change",
            size: L = "md",
            fullWidth: x = !1,
            clearable: j = !1,
            helperText: M,
            showCharacterCount: k = !1,
            successMessage: U,
            label: G,
            description: B,
            hideLabel: Z,
            required: F,
            id: V,
        } = e,
        H = O(e, [
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
            "label",
            "description",
            "hideLabel",
            "required",
            "id",
        ]),
        Y = (0, p.m)({
            validateOn: D,
            error: N,
            value: b,
            minLength: A,
            maxLength: g,
            defaultDirty: R,
        }),
        { setShouldValidate: W } = Y,
        K = I(b, v),
        z = "object" == typeof P && "type" in P && "tags" === P.type,
        q = (e) => {
            var t, n;
            let r = e.currentTarget.value;
            null == (t = H.onChange) || t.call(H, r, u), W(!0), null == (n = K.setHasValue) || n.call(K, "" !== r);
        },
        X = (e) => {
            var t, n;
            null == (t = H.onFocus) || t.call(H, e), null == (n = K.setIsFocused) || n.call(K, !0);
        },
        Q = (e) => {
            var t, n;
            null == (t = H.onBlur) || t.call(H, e), null == (n = K.setIsFocused) || n.call(K, !1);
        },
        J = (e) => {
            if (null != H.onClear) H.onClear(e);
            else {
                var t;
                null == (t = H.onChange) || t.call(H, "", u);
            }
        },
        $ = i.useRef(null),
        ee = H.readOnly;
    null == ee && !1 === a && (ee = !0);
    let et = null;
    ("boolean" == typeof j ? j && null != b && "" !== b && !ee : j.show)
        ? (et = (0, r.jsx)(S, {
              inputSize: L,
              onClick: J,
          }))
        : null != w &&
          (et = (0, r.jsx)(T, {
              accessory: w,
              inputSize: L,
          }));
    let en = null;
    null != P &&
        (en = (0, r.jsx)(T, {
            accessory: P,
            inputSize: L,
        }));
    let er = k
        ? (0, r.jsx)(f.H, {
              value: b,
              maxLength: g,
          })
        : null;
    return (0, r.jsx)(s.NIc, {
        id: V,
        label: G,
        required: F,
        description: B,
        hideLabel: Z,
        helperText: M,
        errorMessage: Y.hasError && null != (t = Y.errorMessage) ? t : void 0,
        successMessage: U,
        trailingContent: er,
        children: (0, r.jsxs)(_.U, {
            ref: $,
            disabled: n,
            validation: Y,
            fullWidth: x,
            readOnly: ee,
            className: o()(m.container, m[L], {
                [m.hasLeading]: null != en,
                [m.hasTrailing]: null != et,
                [m.hasTags]: z,
            }),
            children: [
                en,
                (0, r.jsx)(
                    s.tEY,
                    y(E({ ringTarget: $ }, c), {
                        children: (0, r.jsx)(
                            C,
                            y(
                                E(
                                    {
                                        name: u,
                                        className: m.input,
                                        disabled: n,
                                        readOnly: ee,
                                        "aria-required": F,
                                        type: d,
                                        placeholder: h,
                                        maxLength: g,
                                        minLength: A,
                                        value: b,
                                        defaultValue: v,
                                    },
                                    H,
                                ),
                                {
                                    onChange: q,
                                    onBlur: Q,
                                    onFocus: X,
                                    ref: l,
                                },
                            ),
                        ),
                    }),
                ),
                et,
            ],
        }),
    });
}
function C(e) {
    var { value: t, defaultValue: n, "aria-labelledby": a } = e,
        o = O(e, ["value", "defaultValue", "aria-labelledby"]);
    let l = I(t, n),
        c = i.useContext(s.UgQ);
    return (0, r.jsx)(
        "input",
        y(E({}, o), {
            value: t,
            defaultValue: n,
            id: null == c ? void 0 : c.controlId,
            "aria-labelledby": null != a ? a : l.titleId,
            "aria-describedby": null == c ? void 0 : c.describedById,
            "aria-errormessage": null == c ? void 0 : c.errorMessageId,
            "aria-invalid": (null == c ? void 0 : c.errorMessageId) != null,
        }),
    );
}
