"use strict";
n.d(t, { k: () => R, p: () => v });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(834730),
    l = n(219869),
    u = n(866711),
    d = n(939249),
    c = n(285796),
    _ = n(452027),
    f = n(862301),
    E = n(187322),
    h = n(15626),
    p = n(827734),
    m = n(504345),
    g = n(990078),
    A = n(823607),
    I = n(511274),
    T = n(985018),
    S = n(311109);
function y(e, t) {
    let n = i.useContext(m.cK);
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
function N(e) {
    let { accessory: t, inputSize: n, disabled: i } = e;
    if ("string" == typeof t)
        return (0, r.jsx)(o.E, {
            variant: "text-md/normal",
            color: "input-placeholder-text-default",
            className: S.leadingText,
            children: t,
        });
    if ("icon" in t) {
        let { tooltip: e, ...s } = t,
            a = (0, r.jsx)(l.T, { ...s, size: "md" === n ? "sm" : "xs", variant: "input-accessory" });
        return null != e ? (0, r.jsx)(g.m, { asContainer: !0, text: e, shouldShow: !i, children: a }) : a;
    }
    if ("button" in t) return (0, r.jsx)("div", { className: S.icon, children: t.button });
    if ("type" in t && "tags" === t.type) {
        let { type: e, ...n } = t;
        return (0, r.jsx)(u.C, { ...n, layout: "inline" });
    }
    return "type" in t && "image" === t.type
        ? (0, r.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: S.image })
        : (0, r.jsx)("div", {
              className: S.icon,
              children: (0, r.jsx)(t, { size: "md" === n ? "xs" : "xxs", color: p.A.colors.ICON_STRONG }),
          });
}
function O(e) {
    let { inputSize: t, onClick: n } = e;
    return (0, r.jsx)(d.D, {
        className: S.clearButton,
        onClick: n,
        "aria-label": T.intl.string(T.t.VkKicb),
        children: (0, r.jsx)(c.a, { size: "md" === t ? "xs" : "xxs", color: "currentColor" }),
    });
}
function R(e) {
    let {
            disabled: t = !1,
            editable: n,
            inputRef: s,
            focusProps: o,
            name: l = "",
            type: u = "text",
            placeholder: d = "",
            maxLength: c,
            value: h,
            defaultValue: p,
            minLength: m,
            error: g,
            defaultDirty: T = !1,
            leading: R,
            trailing: C,
            validateOn: b = "change",
            size: D = "md",
            fullWidth: L = !1,
            clearable: w = !1,
            showCharacterCount: M = !1,
            ...P
        } = e,
        { fieldProps: U } = (0, _.n)(P),
        k = (0, I.Y)({ validateOn: b, error: g, value: h, minLength: m, maxLength: c, defaultDirty: T }),
        { setShouldValidate: x } = k,
        G = y(h, p),
        V = "object" == typeof R && "type" in R && "tags" === R.type,
        F = i.useRef(null),
        B = P.readOnly;
    null == B && !1 === n && (B = !0);
    let H = null;
    ("boolean" == typeof w ? w && null != h && "" !== h && !B : w.show)
        ? (H = (0, r.jsx)(O, {
              inputSize: D,
              onClick: (e) => {
                  null != P.onClear ? P.onClear(e) : P.onChange?.("", l);
              },
          }))
        : null != C && (H = (0, r.jsx)(N, { accessory: C, inputSize: D }));
    let Y = null;
    null != R && (Y = (0, r.jsx)(N, { accessory: R, inputSize: D }));
    let W = M ? (0, r.jsx)(A.n, { value: h, maxLength: c }) : null;
    return (0, r.jsx)(_.D, {
        ...U,
        errorMessage: k.hasError ? (k.errorMessage ?? void 0) : void 0,
        trailingAuxiliaryContent: W,
        children: (0, r.jsxs)(f.F, {
            ref: F,
            disabled: t,
            validation: k,
            fullWidth: L,
            readOnly: B,
            className: a()(S.container, S[D], {
                [S.hasLeading]: null != Y,
                [S.hasTrailing]: null != H,
                [S.hasTags]: V,
            }),
            children: [
                Y,
                (0, r.jsx)(E.vN, {
                    ringTarget: F,
                    ...o,
                    children: (0, r.jsx)(v, {
                        name: l,
                        className: S.input,
                        disabled: t,
                        readOnly: B,
                        "aria-required": U.required,
                        type: u,
                        placeholder: d,
                        maxLength: c,
                        minLength: m,
                        value: h,
                        defaultValue: p,
                        "data-mana-component": "text-input",
                        ...P,
                        onChange: (e) => {
                            let t = e.currentTarget.value;
                            P.onChange?.(t, l), x(!0), G.setHasValue?.("" !== t);
                        },
                        onBlur: (e) => {
                            P.onBlur?.(e), G.setIsFocused?.(!1);
                        },
                        onFocus: (e) => {
                            P.onFocus?.(e), G.setIsFocused?.(!0);
                        },
                        ref: s,
                    }),
                }),
                H,
            ],
        }),
    });
}
function v(e) {
    let { value: t, defaultValue: n, "aria-labelledby": s, ...a } = e,
        o = y(t, n),
        l = i.useContext(h._);
    return (0, r.jsx)("input", {
        ...a,
        value: t,
        defaultValue: n,
        id: l?.controlId,
        "aria-labelledby": s ?? o.titleId,
        "aria-describedby": l?.describedById,
        "aria-errormessage": l?.errorMessageId,
        "aria-invalid": l?.errorMessageId != null,
    });
}
