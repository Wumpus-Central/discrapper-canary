n.d(t, { o: () => N }), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(15127),
    c = n(886025),
    u = n(440562),
    d = n(681715),
    f = n(159691),
    _ = n(481060),
    p = n(841878),
    h = n(74655),
    m = n(897037),
    g = n(388032),
    E = n(430490);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function S(e, t) {
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
function A(e) {
    let { accessory: t, inputSize: n, disabled: i } = e;
    if ("string" == typeof t)
        return (0, r.jsx)(_.Text, {
            variant: "text-md/normal",
            color: "input-placeholder-text",
            className: E.leadingText,
            children: t,
        });
    if ("icon" in t) {
        let { tooltip: e } = t,
            a = I(t, ["tooltip"]),
            o = "md" === n ? "sm" : "xs",
            s = (0, r.jsx)(
                f.HLj,
                v(y({}, a), {
                    size: o,
                    variant: "input-accessory",
                }),
            );
        return null != e
            ? (0, r.jsx)(d.u, {
                  asContainer: !0,
                  text: e,
                  shouldShow: !i,
                  children: s,
              })
            : s;
    }
    if ("button" in t)
        return (0, r.jsx)("div", {
            className: E.icon,
            children: t.button,
        });
    if ("type" in t && "tags" === t.type) {
        let { type: e } = t,
            n = I(t, ["type"]);
        return (0, r.jsx)(s.QSK, v(y({}, n), { layout: "inline" }));
    }
    if ("type" in t && "image" === t.type)
        return (0, r.jsx)("img", {
            "aria-hidden": !0,
            alt: "",
            src: t.src,
            className: E.image,
        });
    let a = t,
        o = "md" === n ? "xs" : "xxs";
    return (0, r.jsx)("div", {
        className: E.icon,
        children: (0, r.jsx)(a, {
            size: o,
            color: _.TVs.colors.ICON_PRIMARY,
        }),
    });
}
function C(e) {
    let { inputSize: t, onClick: n } = e,
        i = "md" === t ? "xs" : "xxs";
    return (0, r.jsx)(_.P3F, {
        className: E.clearButton,
        onClick: n,
        "aria-label": g.intl.string(g.t.VkKicX),
        children: (0, r.jsx)(_.k$p, {
            size: i,
            color: "currentColor",
        }),
    });
}
function N(e) {
    var t;
    let {
            disabled: n = !1,
            editable: a,
            inputRef: l,
            focusProps: u,
            name: d = "",
            type: f = "text",
            placeholder: _ = "",
            maxLength: g,
            value: b,
            defaultValue: O,
            minLength: T,
            error: N,
            defaultDirty: P = !1,
            leading: w,
            trailing: D,
            validateOn: x = "change",
            size: L = "md",
            fullWidth: j = !1,
            clearable: M = !1,
            helperText: k,
            showCharacterCount: U = !1,
            successMessage: G,
            label: B,
            description: Z,
            hideLabel: F,
            required: V,
            id: H,
        } = e,
        Y = I(e, [
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
        W = (0, m.m)({
            validateOn: x,
            error: N,
            value: b,
            minLength: T,
            maxLength: g,
            defaultDirty: P,
        }),
        { setShouldValidate: K } = W,
        z = S(b, O),
        q = "object" == typeof w && "type" in w && "tags" === w.type,
        X = (e) => {
            var t, n;
            let r = e.currentTarget.value;
            null == (t = Y.onChange) || t.call(Y, r, d), K(!0), null == (n = z.setHasValue) || n.call(z, "" !== r);
        },
        Q = (e) => {
            var t, n;
            null == (t = Y.onFocus) || t.call(Y, e), null == (n = z.setIsFocused) || n.call(z, !0);
        },
        J = (e) => {
            var t, n;
            null == (t = Y.onBlur) || t.call(Y, e), null == (n = z.setIsFocused) || n.call(z, !1);
        },
        $ = (e) => {
            if (null != Y.onClear) Y.onClear(e);
            else {
                var t;
                null == (t = Y.onChange) || t.call(Y, "", d);
            }
        },
        ee = i.useRef(null),
        et = Y.readOnly;
    null == et && !1 === a && (et = !0);
    let en = null;
    ("boolean" == typeof M ? M && null != b && "" !== b && !et : M.show)
        ? (en = (0, r.jsx)(C, {
              inputSize: L,
              onClick: $,
          }))
        : null != D &&
          (en = (0, r.jsx)(A, {
              accessory: D,
              inputSize: L,
          }));
    let er = null;
    null != w &&
        (er = (0, r.jsx)(A, {
            accessory: w,
            inputSize: L,
        }));
    let ei = U
        ? (0, r.jsx)(p.H, {
              value: b,
              maxLength: g,
          })
        : null;
    return (0, r.jsx)(c.N, {
        id: H,
        label: B,
        required: V,
        description: Z,
        hideLabel: F,
        helperText: k,
        errorMessage: W.hasError && null != (t = W.errorMessage) ? t : void 0,
        successMessage: G,
        trailingContent: ei,
        children: (0, r.jsxs)(h.U, {
            ref: ee,
            disabled: n,
            validation: W,
            fullWidth: j,
            readOnly: et,
            className: o()(E.container, E[L], {
                [E.hasLeading]: null != er,
                [E.hasTrailing]: null != en,
                [E.hasTags]: q,
            }),
            children: [
                er,
                (0, r.jsx)(
                    s.tEY,
                    v(y({ ringTarget: ee }, u), {
                        children: (0, r.jsx)(
                            R,
                            v(
                                y(
                                    {
                                        name: d,
                                        className: E.input,
                                        disabled: n,
                                        readOnly: et,
                                        "aria-required": V,
                                        type: f,
                                        placeholder: _,
                                        maxLength: g,
                                        minLength: T,
                                        value: b,
                                        defaultValue: O,
                                    },
                                    Y,
                                ),
                                {
                                    onChange: X,
                                    onBlur: J,
                                    onFocus: Q,
                                    ref: l,
                                },
                            ),
                        ),
                    }),
                ),
                en,
            ],
        }),
    });
}
function R(e) {
    var { value: t, defaultValue: n, "aria-labelledby": a } = e,
        o = I(e, ["value", "defaultValue", "aria-labelledby"]);
    let s = S(t, n),
        l = i.useContext(u.U);
    return (0, r.jsx)(
        "input",
        v(y({}, o), {
            value: t,
            defaultValue: n,
            id: null == l ? void 0 : l.controlId,
            "aria-labelledby": null != a ? a : s.titleId,
            "aria-describedby": null == l ? void 0 : l.describedById,
            "aria-errormessage": null == l ? void 0 : l.errorMessageId,
            "aria-invalid": (null == l ? void 0 : l.errorMessageId) != null,
        }),
    );
}
