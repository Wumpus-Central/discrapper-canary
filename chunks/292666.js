"use strict";
n.d(t, { k: () => E, p: () => A });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(827734),
    u = n(504345),
    c = n(435371),
    d = n(823607),
    _ = n(511274),
    f = n(985018),
    p = n(100624);
function h(e, t) {
    let n = i.useContext(u.cK);
    return (
        i.useEffect(() => {
            n.setHasValue?.((null != t && "" !== t) || (null != e && "" !== e)), n.setIsFocused?.(!1);
        }, []),
        i.useEffect(() => {
            null != e && "" !== e && n.setHasValue?.(!0);
        }, [n, e]),
        n
    );
}
function m(e) {
    let { accessory: t, inputSize: n, disabled: i } = e;
    if ("string" == typeof t)
        return (0, r.jsx)(o.EYj, {
            variant: "text-md/normal",
            color: "input-placeholder-text-default",
            className: p.leadingText,
            children: t,
        });
    if ("icon" in t) {
        let { tooltip: e, ...a } = t,
            s = "md" === n ? "sm" : "xs",
            l = (0, r.jsx)(o.TVs, { ...a, size: s, variant: "input-accessory" });
        return null != e ? (0, r.jsx)(c.m_, { asContainer: !0, text: e, shouldShow: !i, children: l }) : l;
    }
    if ("button" in t) return (0, r.jsx)("div", { className: p.icon, children: t.button });
    if ("type" in t && "tags" === t.type) {
        let { type: e, ...n } = t;
        return (0, r.jsx)(o.CR_, { ...n, layout: "inline" });
    }
    if ("type" in t && "image" === t.type)
        return (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: p.image });
    let a = t,
        s = "md" === n ? "xs" : "xxs";
    return (0, r.jsx)("div", {
        className: p.icon,
        children: (0, r.jsx)(a, { size: s, color: l.A.colors.ICON_STRONG }),
    });
}
function g(e) {
    let { inputSize: t, onClick: n } = e,
        i = "md" === t ? "xs" : "xxs";
    return (0, r.jsx)(o.DUT, {
        className: p.clearButton,
        onClick: n,
        "aria-label": f.intl.string(f.t.VkKicb),
        children: (0, r.jsx)(o.aXh, { size: i, color: "currentColor" }),
    });
}
function E(e) {
    let {
            disabled: t = !1,
            editable: n,
            inputRef: a,
            focusProps: l,
            name: u = "",
            type: c = "text",
            placeholder: f = "",
            maxLength: E,
            value: I,
            defaultValue: T,
            minLength: y,
            error: S,
            defaultDirty: v = !1,
            leading: C,
            trailing: b,
            validateOn: N = "change",
            size: R = "md",
            fullWidth: O = !1,
            clearable: D = !1,
            showCharacterCount: L = !1,
            ...w
        } = e,
        { fieldProps: x } = (0, o.ndh)(w),
        P = (0, _.Y)({ validateOn: N, error: S, value: I, minLength: y, maxLength: E, defaultDirty: v }),
        { setShouldValidate: M } = P,
        k = h(I, T),
        U = "object" == typeof C && "type" in C && "tags" === C.type,
        G = (e) => {
            let t = e.currentTarget.value;
            w.onChange?.(t, u), M(!0), k.setHasValue?.("" !== t);
        },
        V = (e) => {
            w.onFocus?.(e), k.setIsFocused?.(!0);
        },
        F = (e) => {
            w.onBlur?.(e), k.setIsFocused?.(!1);
        },
        B = (e) => {
            null != w.onClear ? w.onClear(e) : w.onChange?.("", u);
        },
        j = i.useRef(null),
        H = w.readOnly;
    null == H && !1 === n && (H = !0);
    let Y = null;
    ("boolean" == typeof D ? D && null != I && "" !== I && !H : D.show)
        ? (Y = (0, r.jsx)(g, { inputSize: R, onClick: B }))
        : null != b && (Y = (0, r.jsx)(m, { accessory: b, inputSize: R }));
    let W = null;
    null != C && (W = (0, r.jsx)(m, { accessory: C, inputSize: R }));
    let K = L ? (0, r.jsx)(d.n, { value: I, maxLength: E }) : null;
    return (0, r.jsx)(o.D0$, {
        ...x,
        errorMessage: P.hasError ? (P.errorMessage ?? void 0) : void 0,
        trailingAuxiliaryContent: K,
        children: (0, r.jsxs)(o.FON, {
            ref: j,
            disabled: t,
            validation: P,
            fullWidth: O,
            readOnly: H,
            className: s()(p.container, p[R], {
                [p.hasLeading]: null != W,
                [p.hasTrailing]: null != Y,
                [p.hasTags]: U,
            }),
            children: [
                W,
                (0, r.jsx)(o.vN3, {
                    ringTarget: j,
                    ...l,
                    children: (0, r.jsx)(A, {
                        name: u,
                        className: p.input,
                        disabled: t,
                        readOnly: H,
                        "aria-required": x.required,
                        type: c,
                        placeholder: f,
                        maxLength: E,
                        minLength: y,
                        value: I,
                        defaultValue: T,
                        "data-mana-component": "text-input",
                        ...w,
                        onChange: G,
                        onBlur: F,
                        onFocus: V,
                        ref: a,
                    }),
                }),
                Y,
            ],
        }),
    });
}
function A(e) {
    let { value: t, defaultValue: n, "aria-labelledby": a, ...s } = e,
        l = h(t, n),
        u = i.useContext(o._zY);
    return (0, r.jsx)("input", {
        ...s,
        value: t,
        defaultValue: n,
        id: u?.controlId,
        "aria-labelledby": a ?? l.titleId,
        "aria-describedby": u?.describedById,
        "aria-errormessage": u?.errorMessageId,
        "aria-invalid": u?.errorMessageId != null,
    });
}
