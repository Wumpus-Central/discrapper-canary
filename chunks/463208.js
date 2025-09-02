n.d(t, { o: () => R }), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(84735),
    l = n(15127),
    c = n(378215),
    u = n(886025),
    d = n(440562),
    f = n(753450),
    _ = n(681715),
    p = n(481060),
    h = n(841878),
    m = n(74655),
    g = n(897037),
    E = n(388032),
    b = n(430490);
function y(e, t, n) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function A(e, t) {
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
function C(e) {
    let { accessory: t, inputSize: n, disabled: i } = e;
    if ("string" == typeof t)
        return (0, r.jsx)(p.Text, {
            variant: "text-md/normal",
            color: "input-placeholder-text",
            className: b.leadingText,
            children: t,
        });
    if ("icon" in t) {
        let { tooltip: e } = t,
            a = T(t, ["tooltip"]),
            o = "md" === n ? "sm" : "xs",
            s = (0, r.jsx)(
                c.H,
                I(O({}, a), {
                    size: o,
                    variant: "input-accessory",
                }),
            );
        return null != e
            ? (0, r.jsx)(_.u, {
                  asContainer: !0,
                  text: e,
                  shouldShow: !i,
                  children: s,
              })
            : s;
    }
    if ("button" in t)
        return (0, r.jsx)("div", {
            className: b.icon,
            children: t.button,
        });
    if ("type" in t && "tags" === t.type) {
        let { type: e } = t,
            n = T(t, ["type"]);
        return (0, r.jsx)(f.Q, I(O({}, n), { layout: "inline" }));
    }
    if ("type" in t && "image" === t.type)
        return (0, r.jsx)("img", {
            "aria-hidden": !0,
            alt: "",
            src: t.src,
            className: b.image,
        });
    let a = t,
        o = "md" === n ? "xs" : "xxs";
    return (0, r.jsx)("div", {
        className: b.icon,
        children: (0, r.jsx)(a, {
            size: o,
            color: p.TVs.colors.ICON_PRIMARY,
        }),
    });
}
function N(e) {
    let { inputSize: t, onClick: n } = e,
        i = "md" === t ? "xs" : "xxs";
    return (0, r.jsx)(p.P3F, {
        className: b.clearButton,
        onClick: n,
        "aria-label": E.intl.string(E.t.VkKicX),
        children: (0, r.jsx)(p.k$p, {
            size: i,
            color: "currentColor",
        }),
    });
}
function R(e) {
    var t;
    let {
            disabled: n = !1,
            editable: a,
            inputRef: l,
            focusProps: c,
            name: d = "",
            type: f = "text",
            placeholder: _ = "",
            maxLength: p,
            value: E,
            defaultValue: y,
            minLength: v,
            error: S,
            defaultDirty: R = !1,
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
        Y = T(e, [
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
        W = (0, g.m)({
            validateOn: x,
            error: S,
            value: E,
            minLength: v,
            maxLength: p,
            defaultDirty: R,
        }),
        { setShouldValidate: K } = W,
        z = A(E, y),
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
    ("boolean" == typeof M ? M && null != E && "" !== E && !et : M.show)
        ? (en = (0, r.jsx)(N, {
              inputSize: L,
              onClick: $,
          }))
        : null != D &&
          (en = (0, r.jsx)(C, {
              accessory: D,
              inputSize: L,
          }));
    let er = null;
    null != w &&
        (er = (0, r.jsx)(C, {
            accessory: w,
            inputSize: L,
        }));
    let ei = U
        ? (0, r.jsx)(h.H, {
              value: E,
              maxLength: p,
          })
        : null;
    return (0, r.jsx)(u.N, {
        id: H,
        label: B,
        required: V,
        description: Z,
        hideLabel: F,
        helperText: k,
        errorMessage: W.hasError && null != (t = W.errorMessage) ? t : void 0,
        successMessage: G,
        trailingContent: ei,
        children: (0, r.jsxs)(m.U, {
            ref: ee,
            disabled: n,
            validation: W,
            fullWidth: j,
            readOnly: et,
            className: o()(b.container, b[L], {
                [b.hasLeading]: null != er,
                [b.hasTrailing]: null != en,
                [b.hasTags]: q,
            }),
            children: [
                er,
                (0, r.jsx)(
                    s.t,
                    I(O({ ringTarget: ee }, c), {
                        children: (0, r.jsx)(
                            P,
                            I(
                                O(
                                    {
                                        name: d,
                                        className: b.input,
                                        disabled: n,
                                        readOnly: et,
                                        "aria-required": V,
                                        type: f,
                                        placeholder: _,
                                        maxLength: p,
                                        minLength: v,
                                        value: E,
                                        defaultValue: y,
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
function P(e) {
    var { value: t, defaultValue: n, "aria-labelledby": a } = e,
        o = T(e, ["value", "defaultValue", "aria-labelledby"]);
    let s = A(t, n),
        l = i.useContext(d.U);
    return (0, r.jsx)(
        "input",
        I(O({}, o), {
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
