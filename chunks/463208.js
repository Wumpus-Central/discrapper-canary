n.d(t, {
    I: () => S,
    o: () => T,
});
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(692547),
    c = n(15127),
    u = n(681715),
    d = n(841878),
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function O(e, t) {
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
function v(e) {
    let { accessory: t, inputSize: n, disabled: i } = e;
    if ("string" == typeof t)
        return (0, r.jsx)(s.xvT, {
            variant: "text-md/normal",
            color: "input-placeholder-text",
            className: p.leadingText,
            children: t,
        });
    if ("icon" in t) {
        let { tooltip: e } = t,
            a = b(t, ["tooltip"]),
            o = "md" === n ? "sm" : "xs",
            l = (0, r.jsx)(
                s.HLj,
                E(m({}, a), {
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
            className: p.icon,
            children: t.button,
        });
    if ("type" in t && "tags" === t.type) {
        let { type: e } = t,
            n = b(t, ["type"]);
        return (0, r.jsx)(s.QSK, E(m({}, n), { layout: "inline" }));
    }
    if ("type" in t && "image" === t.type)
        return (0, r.jsx)("img", {
            "aria-hidden": !0,
            alt: "",
            src: t.src,
            className: p.image,
        });
    let a = t,
        o = "md" === n ? "xs" : "xxs";
    return (0, r.jsx)("div", {
        className: p.icon,
        children: (0, r.jsx)(a, {
            size: o,
            color: l.Z.colors.ICON_PRIMARY,
        }),
    });
}
function I(e) {
    let { inputSize: t, onClick: n } = e,
        i = "md" === t ? "xs" : "xxs";
    return (0, r.jsx)(s.P3F, {
        className: p.clearButton,
        onClick: n,
        "aria-label": _.intl.string(_.t.VkKicb),
        children: (0, r.jsx)(s.k$p, {
            size: i,
            color: "currentColor",
        }),
    });
}
function T(e) {
    var t;
    let {
            disabled: n = !1,
            editable: a,
            inputRef: l,
            focusProps: c,
            name: u = "",
            type: _ = "text",
            placeholder: h = "",
            maxLength: g,
            value: y,
            defaultValue: T,
            minLength: A,
            error: C,
            defaultDirty: N = !1,
            leading: R,
            trailing: P,
            validateOn: w = "change",
            size: D = "md",
            fullWidth: x = !1,
            clearable: L = !1,
            showCharacterCount: M = !1,
        } = e,
        j = b(e, [
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
            "showCharacterCount",
        ]),
        { fieldProps: k } = (0, s.XF_)(j),
        U = (0, f.m)({
            validateOn: w,
            error: C,
            value: y,
            minLength: A,
            maxLength: g,
            defaultDirty: N,
        }),
        { setShouldValidate: G } = U,
        B = O(y, T),
        Z = "object" == typeof R && "type" in R && "tags" === R.type,
        F = (e) => {
            var t, n;
            let r = e.currentTarget.value;
            null == (t = j.onChange) || t.call(j, r, u), G(!0), null == (n = B.setHasValue) || n.call(B, "" !== r);
        },
        V = (e) => {
            var t, n;
            null == (t = j.onFocus) || t.call(j, e), null == (n = B.setIsFocused) || n.call(B, !0);
        },
        H = (e) => {
            var t, n;
            null == (t = j.onBlur) || t.call(j, e), null == (n = B.setIsFocused) || n.call(B, !1);
        },
        Y = (e) => {
            if (null != j.onClear) j.onClear(e);
            else {
                var t;
                null == (t = j.onChange) || t.call(j, "", u);
            }
        },
        W = i.useRef(null),
        K = j.readOnly;
    null == K && !1 === a && (K = !0);
    let z = null;
    ("boolean" == typeof L ? L && null != y && "" !== y && !K : L.show)
        ? (z = (0, r.jsx)(I, {
              inputSize: D,
              onClick: Y,
          }))
        : null != P &&
          (z = (0, r.jsx)(v, {
              accessory: P,
              inputSize: D,
          }));
    let q = null;
    null != R &&
        (q = (0, r.jsx)(v, {
            accessory: R,
            inputSize: D,
        }));
    let X = M
        ? (0, r.jsx)(d.H, {
              value: y,
              maxLength: g,
          })
        : null;
    return (0, r.jsx)(
        s.gNt,
        E(m({}, k), {
            errorMessage: U.hasError && null != (t = U.errorMessage) ? t : void 0,
            trailingContent: X,
            children: (0, r.jsxs)(s.UPk, {
                ref: W,
                disabled: n,
                validation: U,
                fullWidth: x,
                readOnly: K,
                className: o()(p.container, p[D], {
                    [p.hasLeading]: null != q,
                    [p.hasTrailing]: null != z,
                    [p.hasTags]: Z,
                }),
                children: [
                    q,
                    (0, r.jsx)(
                        s.tEY,
                        E(m({ ringTarget: W }, c), {
                            children: (0, r.jsx)(
                                S,
                                E(
                                    m(
                                        {
                                            name: u,
                                            className: p.input,
                                            disabled: n,
                                            readOnly: K,
                                            "aria-required": k.required,
                                            type: _,
                                            placeholder: h,
                                            maxLength: g,
                                            minLength: A,
                                            value: y,
                                            defaultValue: T,
                                            "data-mana-component": "text-input",
                                        },
                                        j,
                                    ),
                                    {
                                        onChange: F,
                                        onBlur: H,
                                        onFocus: V,
                                        ref: l,
                                    },
                                ),
                            ),
                        }),
                    ),
                    z,
                ],
            }),
        }),
    );
}
function S(e) {
    var { value: t, defaultValue: n, "aria-labelledby": a } = e,
        o = b(e, ["value", "defaultValue", "aria-labelledby"]);
    let l = O(t, n),
        c = i.useContext(s.zbb);
    return (0, r.jsx)(
        "input",
        E(m({}, o), {
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
