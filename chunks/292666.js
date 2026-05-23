"use strict";
n.d(t, { k: () => O, p: () => R });
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
    f = n(452027),
    h = n(862301),
    p = n(187322),
    E = n(15626),
    m = n(661531),
    g = n(504345),
    A = n(990078),
    I = n(823607),
    T = n(511274),
    S = n(375708),
    N = n(311109);
function y(e, t) {
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
function C(e) {
    let { accessory: t, inputSize: n, disabled: r } = e;
    if ("string" == typeof t)
        return (0, i.jsx)(l.E, {
            variant: "text-md/normal",
            color: "input-placeholder-text-default",
            className: N.leadingText,
            children: t,
        });
    if ("icon" in t) {
        let { tooltip: e, ...s } = t,
            a = (0, i.jsx)(u.T, { ...s, size: "md" === n ? "sm" : "xs", variant: "input-accessory" });
        return null != e ? (0, i.jsx)(A.m, { asContainer: !0, text: e, shouldShow: !r, children: a }) : a;
    }
    if ("button" in t) return (0, i.jsx)("div", { className: N.icon, children: t.button });
    if ("type" in t && "tags" === t.type) {
        let { type: e, ...n } = t;
        return (0, i.jsx)(c.C, { ...n, layout: "inline" });
    }
    return "type" in t && "image" === t.type
        ? (0, i.jsx)("img", { "aria-hidden": !0, alt: "", src: t.src, className: N.image })
        : (0, i.jsx)("div", {
              className: N.icon,
              children: (0, i.jsx)(t, { size: "md" === n ? "xs" : "xxs", color: m.A.colors.ICON_STRONG }),
          });
}
function v(e) {
    let { inputSize: t, onClick: n } = e;
    return (0, i.jsx)(d.D, {
        className: N.clearButton,
        onClick: n,
        "aria-label": S.intl.string(S.t.VkKicb),
        children: (0, i.jsx)(_.a, { size: "md" === t ? "xs" : "xxs", color: "currentColor" }),
    });
}
function O(e) {
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
            leading: O,
            trailing: b,
            validateOn: D = "change",
            size: L = "md",
            fullWidth: w = !1,
            clearable: M = !1,
            showCharacterCount: P = !1,
            ...x
        } = e,
        { fieldProps: U } = (0, f.n)(x),
        k = (0, T.Y)({ validateOn: D, error: A, value: E, minLength: g, maxLength: _, defaultDirty: S }),
        { setShouldValidate: G } = k,
        F = y(E, m),
        V = "object" == typeof O && "type" in O && "tags" === O.type,
        B = r.useRef(null),
        H = (0, o.A)(B, s),
        j = r.useRef(null),
        Y = x.readOnly;
    null == Y && !1 === n && (Y = !0);
    let W = null;
    ("boolean" == typeof M ? M && null != E && "" !== E && !Y : M.show)
        ? (W = (0, i.jsx)(v, {
              inputSize: L,
              onClick: (e) => {
                  null != x.onClear ? x.onClear(e) : x.onChange?.("", u),
                      requestAnimationFrame(() => {
                          B.current?.focus();
                      });
              },
          }))
        : null != b && (W = (0, i.jsx)(C, { accessory: b, inputSize: L }));
    let K = null;
    null != O && (K = (0, i.jsx)(C, { accessory: O, inputSize: L }));
    let z = P ? (0, i.jsx)(I.n, { value: E, maxLength: _ }) : null;
    return (0, i.jsx)(f.D, {
        ...U,
        errorMessage: k.hasError ? (k.errorMessage ?? void 0) : void 0,
        trailingAuxiliaryContent: z,
        children: (0, i.jsxs)(h.F, {
            ref: j,
            disabled: t,
            validation: k,
            fullWidth: w,
            readOnly: Y,
            className: a()(N.container, N[L], {
                [N.hasLeading]: null != K,
                [N.hasTrailing]: null != W,
                [N.hasTags]: V,
            }),
            children: [
                K,
                (0, i.jsx)(p.vN, {
                    ringTarget: j,
                    ...l,
                    children: (0, i.jsx)(R, {
                        name: u,
                        className: N.input,
                        disabled: t,
                        readOnly: Y,
                        "aria-required": U.required,
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
function R(e) {
    let { value: t, defaultValue: n, "aria-labelledby": s, ...a } = e,
        o = y(t, n),
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
