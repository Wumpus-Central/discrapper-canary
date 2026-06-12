"use strict";
n.d(t, { k: () => R, p: () => O });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(612324),
    l = n(834730),
    u = n(219869),
    c = n(528265),
    d = n(939249),
    _ = n(285796),
    h = n(452027),
    f = n(862301),
    p = n(187322),
    E = n(15626),
    m = n(661531),
    g = n(504345),
    A = n(990078),
    I = n(823607),
    T = n(511274),
    S = n(375708),
    y = n(311109);
function N(e, t) {
    let n = r.useContext(g.cK);
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
function v(e) {
    let { accessory: t, inputSize: n, disabled: r } = e;
    if ("string" == typeof t)
        return (0, i.jsx)(l.E, {
            variant: "text-md/normal",
            color: "input-placeholder-text-default",
            className: y.leadingText,
            children: t,
        });
    if ("icon" in t) {
        let { tooltip: e, ...s } = t,
            a = (0, i.jsx)(u.T, { ...s, size: "md" === n ? "sm" : "xs", variant: "input-accessory" });
        return null != e ? (0, i.jsx)(A.m, { asContainer: !0, text: e, shouldShow: !r, children: a }) : a;
    }
    if ("button" in t) return (0, i.jsx)("div", { className: y.icon, children: t.button });
    if ("type" in t && "tags" === t.type) {
        let { type: e, ...n } = t;
        return (0, i.jsx)(c.C, { ...n, layout: "inline" });
    }
    return "type" in t && "image" === t.type
        ? (0, i.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: y.image })
        : (0, i.jsx)("div", {
              className: y.icon,
              children: (0, i.jsx)(t, { size: "md" === n ? "xs" : "xxs", color: m.A.colors.ICON_STRONG }),
          });
}
function C(e) {
    let { inputSize: t, onClick: n } = e;
    return (0, i.jsx)(d.D, {
        className: y.clearButton,
        onClick: n,
        "aria-label": S.intl.string(S.t.VkKicb),
        children: (0, i.jsx)(_.a, { size: "md" === t ? "xs" : "xxs", color: "currentColor" }),
    });
}
function R(e) {
    let {
            disabled: t = !1,
            editable: n,
            inputRef: s,
            focusProps: l,
            name: u = "",
            type: c = "text",
            placeholder: d = "",
            maxLength: _,
            value: E,
            defaultValue: m,
            minLength: g,
            error: A,
            defaultDirty: S = !1,
            leading: R,
            trailing: b,
            validateOn: D = "change",
            size: L = "md",
            fullWidth: w = !1,
            clearable: M = !1,
            showCharacterCount: P = !1,
            ...x
        } = e,
        { fieldProps: k } = (0, h.n)(x),
        U = (0, T.Y)({ validateOn: D, error: A, value: E, minLength: g, maxLength: _, defaultDirty: S }),
        { setShouldValidate: G } = U,
        F = N(E, m),
        V = "object" == typeof R && "type" in R && "tags" === R.type,
        B = r.useRef(null),
        H = (0, o.A)(B, s),
        j = r.useRef(null),
        Y = x.readOnly;
    null == Y && !1 === n && (Y = !0);
    let W = null;
    ("boolean" == typeof M ? M && null != E && "" !== E && !Y : M.show)
        ? (W = (0, i.jsx)(C, {
              inputSize: L,
              onClick: (e) => {
                  null != x.onClear ? x.onClear(e) : x.onChange?.("", u),
                      requestAnimationFrame(() => {
                          B.current?.focus();
                      });
              },
          }))
        : null != b && (W = (0, i.jsx)(v, { accessory: b, inputSize: L }));
    let K = null;
    null != R && (K = (0, i.jsx)(v, { accessory: R, inputSize: L }));
    let $ = P ? (0, i.jsx)(I.n, { value: E, maxLength: _ }) : null;
    return (0, i.jsx)(h.D, {
        ...k,
        errorMessage: U.hasError ? (U.errorMessage ?? void 0) : void 0,
        trailingAuxiliaryContent: $,
        children: (0, i.jsxs)(f.F, {
            ref: j,
            disabled: t,
            validation: U,
            fullWidth: w,
            readOnly: Y,
            className: a()(y.container, y[L], {
                [y.hasLeading]: null != K,
                [y.hasTrailing]: null != W,
                [y.hasTags]: V,
            }),
            children: [
                K,
                (0, i.jsx)(p.vN, {
                    ringTarget: j,
                    ...l,
                    children: (0, i.jsx)(O, {
                        name: u,
                        className: y.input,
                        disabled: t,
                        readOnly: Y,
                        "aria-required": k.required,
                        type: c,
                        placeholder: d,
                        maxLength: _,
                        minLength: g,
                        value: E,
                        defaultValue: m,
                        "data-mana-component": "text-input",
                        ...x,
                        onChange: (e) => {
                            let t = e.currentTarget.value;
                            x.onChange?.(t, u), G(!0), F.setHasValue?.("" !== t);
                        },
                        onBlur: (e) => {
                            x.onBlur?.(e), F.setIsFocused?.(!1);
                        },
                        onFocus: (e) => {
                            x.onFocus?.(e), F.setIsFocused?.(!0);
                        },
                        ref: H,
                    }),
                }),
                W,
            ],
        }),
    });
}
function O(e) {
    let { value: t, defaultValue: n, "aria-labelledby": s, ...a } = e,
        o = N(t, n),
        l = r.useContext(E._);
    return (0, i.jsx)("input", {
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
