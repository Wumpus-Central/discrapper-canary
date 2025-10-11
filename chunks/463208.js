n.d(t, {
    I: () => A,
    o: () => S,
}),
    n(953529);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(692547),
    c = n(15127),
    u = n(681715),
    d = n(841878),
    f = n(74655),
    _ = n(897037),
    p = n(388032),
    h = n(430490);
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
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function v(e, t) {
    let n = i.useContext(c.q3);
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
function I(e) {
    let { accessory: t, inputSize: n, disabled: i } = e;
    if ("string" == typeof t)
        return (0, r.jsx)(s.xvT, {
            variant: "text-md/normal",
            color: "input-placeholder-text",
            className: h.leadingText,
            children: t,
        });
    if ("icon" in t) {
        let { tooltip: e } = t,
            a = y(t, ["tooltip"]),
            o = "md" === n ? "sm" : "xs",
            l = (0, r.jsx)(
                s.HLj,
                b(g({}, a), {
                    size: o,
                    variant: "input-accessory",
                }),
            );
        return null != e
            ? (0, r.jsx)(u.u, {
                  asContainer: !0,
                  text: e,
                  shouldShow: !i,
                  children: l,
              })
            : l;
    }
    if ("button" in t)
        return (0, r.jsx)("div", {
            className: h.icon,
            children: t.button,
        });
    if ("type" in t && "tags" === t.type) {
        let { type: e } = t,
            n = y(t, ["type"]);
        return (0, r.jsx)(s.QSK, b(g({}, n), { layout: "inline" }));
    }
    if ("type" in t && "image" === t.type)
        return (0, r.jsx)("img", {
            "aria-hidden": !0,
            alt: "",
            src: t.src,
            className: h.image,
        });
    let a = t,
        o = "md" === n ? "xs" : "xxs";
    return (0, r.jsx)("div", {
        className: h.icon,
        children: (0, r.jsx)(a, {
            size: o,
            color: l.Z.colors.ICON_PRIMARY,
        }),
    });
}
function T(e) {
    let { inputSize: t, onClick: n } = e,
        i = "md" === t ? "xs" : "xxs";
    return (0, r.jsx)(s.P3F, {
        className: h.clearButton,
        onClick: n,
        "aria-label": p.intl.string(p.t.VkKicX),
        children: (0, r.jsx)(s.k$p, {
            size: i,
            color: "currentColor",
        }),
    });
}
function S(e) {
    var t;
    let {
            disabled: n = !1,
            editable: a,
            inputRef: l,
            focusProps: c,
            name: u = "",
            type: p = "text",
            placeholder: m = "",
            maxLength: E,
            value: O,
            defaultValue: S,
            minLength: C,
            error: N,
            defaultDirty: R = !1,
            leading: P,
            trailing: w,
            validateOn: D = "change",
            size: L = "md",
            fullWidth: x = !1,
            clearable: M = !1,
            helperText: j,
            showCharacterCount: k = !1,
            successMessage: U,
            label: G,
            description: B,
            hideLabel: Z,
            required: F,
            id: V,
        } = e,
        H = y(e, [
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
        Y = (0, _.m)({
            validateOn: D,
            error: N,
            value: O,
            minLength: C,
            maxLength: E,
            defaultDirty: R,
        }),
        { setShouldValidate: W } = Y,
        K = v(O, S),
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
    ("boolean" == typeof M ? M && null != O && "" !== O && !ee : M.show)
        ? (et = (0, r.jsx)(T, {
              inputSize: L,
              onClick: J,
          }))
        : null != w &&
          (et = (0, r.jsx)(I, {
              accessory: w,
              inputSize: L,
          }));
    let en = null;
    null != P &&
        (en = (0, r.jsx)(I, {
            accessory: P,
            inputSize: L,
        }));
    let er = k
        ? (0, r.jsx)(d.H, {
              value: O,
              maxLength: E,
          })
        : null;
    return (0, r.jsx)(s.gNt, {
        id: V,
        label: G,
        required: F,
        description: B,
        hideLabel: Z,
        helperText: j,
        errorMessage: Y.hasError && null != (t = Y.errorMessage) ? t : void 0,
        successMessage: U,
        trailingContent: er,
        children: (0, r.jsxs)(f.U, {
            ref: $,
            disabled: n,
            validation: Y,
            fullWidth: x,
            readOnly: ee,
            className: o()(h.container, h[L], {
                [h.hasLeading]: null != en,
                [h.hasTrailing]: null != et,
                [h.hasTags]: z,
            }),
            children: [
                en,
                (0, r.jsx)(
                    s.tEY,
                    b(g({ ringTarget: $ }, c), {
                        children: (0, r.jsx)(
                            A,
                            b(
                                g(
                                    {
                                        name: u,
                                        className: h.input,
                                        disabled: n,
                                        readOnly: ee,
                                        "aria-required": F,
                                        type: p,
                                        placeholder: m,
                                        maxLength: E,
                                        minLength: C,
                                        value: O,
                                        defaultValue: S,
                                        "data-mana-component": "text-input",
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
function A(e) {
    var { value: t, defaultValue: n, "aria-labelledby": a } = e,
        o = y(e, ["value", "defaultValue", "aria-labelledby"]);
    let l = v(t, n),
        c = i.useContext(s.zbb);
    return (0, r.jsx)(
        "input",
        b(g({}, o), {
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
