"use strict";
n.d(t, { k: () => L, p: () => D });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(612324),
    o = n(834730),
    d = n(219869),
    c = n(340351),
    u = n(939249),
    _ = n(285796),
    E = n(452027),
    A = n(862301),
    h = n(187322),
    I = n(15626),
    f = n(661531),
    p = n(504345),
    T = n(990078),
    m = n(823607),
    g = n(511274),
    S = n(375708),
    N = n(609413);
function C(e, t) {
    let n = r.useContext(p.cK);
    return (
        r.useEffect(() => {
            n.setHasValue?.((null != t && "" !== t) || (null != e && "" !== e)), n.setIsFocused?.(!1);
        }, []),
        r.useEffect(() => {
            null != e && "" !== e && n.setHasValue?.(!0);
        }, [n, e]),
        n
    );
}
function R(e) {
    let { accessory: t, inputSize: n, disabled: r } = e;
    if ("string" == typeof t)
        return (0, i.jsx)(o.E, {
            variant: "text-md/normal",
            color: "input-placeholder-text-default",
            className: N.leadingText,
            children: t,
        });
    if ("icon" in t) {
        let { tooltip: e, ...a } = t,
            s = (0, i.jsx)(d.T, { ...a, size: "md" === n ? "sm" : "xs", variant: "input-accessory" });
        return null != e ? (0, i.jsx)(T.m, { asContainer: !0, text: e, shouldShow: !r, children: s }) : s;
    }
    if ("button" in t) return (0, i.jsx)("div", { className: N.icon, children: t.button });
    if ("type" in t)
        switch (t.type) {
            case "tags": {
                let { type: e, ...n } = t;
                return (0, i.jsx)(c.C, { ...n, layout: "inline" });
            }
            case "image":
                return (0, i.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: N.image });
            default:
                return null;
        }
    return (0, i.jsx)("div", {
        className: N.icon,
        children: (0, i.jsx)(t, { size: "md" === n ? "xs" : "xxs", color: f.A.colors.ICON_STRONG }),
    });
}
function O(e) {
    let { inputSize: t, onClick: n } = e;
    return (0, i.jsx)(u.D, {
        className: N.clearButton,
        onClick: n,
        "aria-label": S.intl.string(S.t.VkKicb),
        children: (0, i.jsx)(_.a, { size: "md" === t ? "xs" : "xxs", color: "currentColor" }),
    });
}
function L(e) {
    let {
            disabled: t = !1,
            editable: n,
            inputRef: a,
            focusProps: o,
            name: d = "",
            type: c = "text",
            placeholder: u = "",
            maxLength: _,
            value: I,
            defaultValue: f,
            minLength: p,
            error: T,
            defaultDirty: S = !1,
            leading: L,
            trailing: y,
            validateOn: v = "change",
            size: b = "md",
            fullWidth: M = !1,
            clearable: P = !1,
            showCharacterCount: U = !1,
            ...w
        } = e,
        { fieldProps: G } = (0, E.n)(w),
        x = (0, g.Y)({ validateOn: v, error: T, value: I, minLength: p, maxLength: _, defaultDirty: S }),
        { setShouldValidate: k } = x,
        F = C(I, f),
        V = "object" == typeof L && "type" in L && "tags" === L.type,
        B = r.useRef(null),
        H = (0, l.A)(B, a),
        j = r.useRef(null),
        W = w.readOnly;
    null == W && !1 === n && (W = !0);
    let Y = null;
    ("boolean" == typeof P ? P && null != I && "" !== I && !W : P.show)
        ? (Y = (0, i.jsx)(O, {
              inputSize: b,
              onClick: function (e) {
                  null != w.onClear ? w.onClear(e) : w.onChange?.("", d),
                      requestAnimationFrame(() => {
                          B.current?.focus();
                      });
              },
          }))
        : null != y && (Y = (0, i.jsx)(R, { accessory: y, inputSize: b }));
    let K = null;
    null != L && (K = (0, i.jsx)(R, { accessory: L, inputSize: b }));
    let $ = U ? (0, i.jsx)(m.n, { value: I, maxLength: _ }) : null;
    return (0, i.jsx)(E.D, {
        ...G,
        errorMessage: x.hasError ? (x.errorMessage ?? void 0) : void 0,
        trailingAuxiliaryContent: $,
        children: (0, i.jsxs)(A.F, {
            ref: j,
            disabled: t,
            validation: x,
            fullWidth: M,
            readOnly: W,
            className: s()(N.container, N[b], {
                [N.hasLeading]: null != K,
                [N.hasTrailing]: null != Y,
                [N.hasTags]: V,
            }),
            children: [
                K,
                (0, i.jsx)(h.vN, {
                    ringTarget: j,
                    ...o,
                    children: (0, i.jsx)(D, {
                        name: d,
                        className: N.input,
                        disabled: t,
                        readOnly: W,
                        "aria-required": G.required,
                        type: c,
                        placeholder: u,
                        maxLength: _,
                        minLength: p,
                        value: I,
                        defaultValue: f,
                        "data-mana-component": "text-input",
                        ...w,
                        onChange: function (e) {
                            let t = e.currentTarget.value;
                            w.onChange?.(t, d), k(!0), F.setHasValue?.("" !== t);
                        },
                        onBlur: (e) => {
                            w.onBlur?.(e), F.setIsFocused?.(!1);
                        },
                        onFocus: (e) => {
                            w.onFocus?.(e), F.setIsFocused?.(!0);
                        },
                        ref: H,
                    }),
                }),
                Y,
            ],
        }),
    });
}
function D(e) {
    let { value: t, defaultValue: n, "aria-labelledby": a, ...s } = e,
        l = C(t, n),
        o = r.useContext(I._);
    return (0, i.jsx)("input", {
        ...s,
        value: t,
        defaultValue: n,
        id: o?.controlId,
        "aria-labelledby": a ?? l.titleId,
        "aria-describedby": o?.describedById,
        "aria-errormessage": o?.errorMessageId,
        "aria-invalid": o?.errorMessageId != null,
    });
}
