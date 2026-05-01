"use strict";
n.d(t, { z: () => Q, T: () => J });
var i = n(627968),
    r = n(64700),
    s = n(460890),
    a = n(503698),
    o = n.n(a),
    l = n(825913),
    u = n(162376),
    c = n(461212),
    d = n(129844),
    _ = n(123375),
    f = n(357710),
    h = n(193523);
let p = new WeakMap();
var E = n(290424),
    m = n(297987),
    g = n(985620),
    A = n(318473),
    I = n(693321),
    T = n(986960),
    S = n(744493),
    N = n(402112),
    y = n(702992),
    C = n(775133),
    v = n(877247),
    O = n(96441),
    R = n(498430),
    b = n(967158),
    D = n(126031),
    L = n(533715),
    w = n(561514),
    M = n(339241),
    P = n(492313);
let x = Math.round(1e10 * Math.random()),
    U = 0,
    k = (0, r.createContext)(null),
    G = (0, r.createContext)(null),
    F = (0, r.createContext)(null),
    V = (0, r.forwardRef)(function (e, t) {
        var n, i;
        [e, t] = (0, l.JT)(e, t, k);
        let { validationBehavior: s } = (0, l.CC)(c.c) || {},
            a = null != (i = null != (n = e.validationBehavior) ? n : s) ? i : "native",
            o = (function (e) {
                var t, n;
                let i = (0, r.useMemo)(() => e.name || `radio-group-${x}-${++U}`, [e.name]),
                    [s, a] = (0, P.P)(e.value, null != (t = e.defaultValue) ? t : null, e.onChange),
                    [o] = (0, r.useState)(s),
                    [l, u] = (0, r.useState)(null),
                    c = (0, M.KZ)({ ...e, value: s }),
                    d = c.displayValidation.isInvalid;
                return {
                    ...c,
                    name: i,
                    selectedValue: s,
                    defaultSelectedValue: void 0 !== e.value ? o : null != (n = e.defaultValue) ? n : null,
                    setSelectedValue: (t) => {
                        e.isReadOnly || e.isDisabled || (a(t), c.commitValidation());
                    },
                    lastFocusedValue: l,
                    setLastFocusedValue: u,
                    isDisabled: e.isDisabled || !1,
                    isReadOnly: e.isReadOnly || !1,
                    isRequired: e.isRequired || !1,
                    validationState: e.validationState || (d ? "invalid" : null),
                    isInvalid: d,
                };
            })({ ...e, validationBehavior: a }),
            [_, y] = (0, l._E)(!e["aria-label"] && !e["aria-labelledby"]),
            {
                radioGroupProps: C,
                labelProps: v,
                descriptionProps: O,
                errorMessageProps: R,
                ...b
            } = (function (e, t) {
                let {
                        name: n,
                        form: i,
                        isReadOnly: r,
                        isRequired: s,
                        isDisabled: a,
                        orientation: o = "vertical",
                        validationBehavior: l = "aria",
                    } = e,
                    { direction: u } = (0, N.Y)(),
                    { isInvalid: c, validationErrors: d, validationDetails: _ } = t.displayValidation,
                    {
                        labelProps: f,
                        fieldProps: h,
                        descriptionProps: y,
                        errorMessageProps: C,
                    } = (0, T.M)({
                        ...e,
                        labelElementType: "span",
                        isInvalid: t.isInvalid,
                        errorMessage: e.errorMessage || d,
                    }),
                    v = (0, E.$)(e, { labelable: !0 }),
                    { focusWithinProps: O } = (0, S.R)({
                        onBlurWithin(n) {
                            var i;
                            null == (i = e.onBlur) || i.call(e, n), t.selectedValue || t.setLastFocusedValue(null);
                        },
                        onFocusWithin: e.onFocus,
                        onFocusWithinChange: e.onFocusChange,
                    }),
                    R = (0, g.Bi)(n);
                return (
                    p.set(t, { name: R, form: i, descriptionId: y.id, errorMessageId: C.id, validationBehavior: l }),
                    {
                        radioGroupProps: (0, A.v)(v, {
                            role: "radiogroup",
                            onKeyDown: (e) => {
                                let n, i;
                                switch (e.key) {
                                    case "ArrowRight":
                                        n = "rtl" === u && "vertical" !== o ? "prev" : "next";
                                        break;
                                    case "ArrowLeft":
                                        n = "rtl" === u && "vertical" !== o ? "next" : "prev";
                                        break;
                                    case "ArrowDown":
                                        n = "next";
                                        break;
                                    case "ArrowUp":
                                        n = "prev";
                                        break;
                                    default:
                                        return;
                                }
                                e.preventDefault();
                                let r = (0, I.N$)(e.currentTarget, {
                                    from: e.target,
                                    accept: (e) => e instanceof (0, m.mD)(e).HTMLInputElement && "radio" === e.type,
                                });
                                "next" === n
                                    ? (i = r.nextNode()) || ((r.currentNode = e.currentTarget), (i = r.firstChild()))
                                    : (i = r.previousNode()) ||
                                      ((r.currentNode = e.currentTarget), (i = r.lastChild())),
                                    i && (i.focus(), t.setSelectedValue(i.value));
                            },
                            "aria-invalid": t.isInvalid || void 0,
                            "aria-errormessage": e["aria-errormessage"],
                            "aria-readonly": r || void 0,
                            "aria-required": s || void 0,
                            "aria-disabled": a || void 0,
                            "aria-orientation": o,
                            ...h,
                            ...O,
                        }),
                        labelProps: f,
                        descriptionProps: y,
                        errorMessageProps: C,
                        isInvalid: c,
                        validationErrors: d,
                        validationDetails: _,
                    }
                );
            })({ ...e, label: y, validationBehavior: a }, o),
            D = (0, l.Sl)({
                ...e,
                values: {
                    orientation: e.orientation || "vertical",
                    isDisabled: o.isDisabled,
                    isReadOnly: o.isReadOnly,
                    isRequired: o.isRequired,
                    isInvalid: o.isInvalid,
                    state: o,
                },
                defaultClassName: "react-aria-RadioGroup",
            }),
            L = (0, E.$)(e, { global: !0 });
        return r.createElement(
            "div",
            {
                ...(0, A.v)(L, D, C),
                ref: t,
                slot: e.slot || void 0,
                "data-orientation": e.orientation || "vertical",
                "data-invalid": o.isInvalid || void 0,
                "data-disabled": o.isDisabled || void 0,
                "data-readonly": o.isReadOnly || void 0,
                "data-required": o.isRequired || void 0,
            },
            r.createElement(
                l.Kq,
                {
                    values: [
                        [F, o],
                        [d.I, { ...v, ref: _, elementType: "span" }],
                        [h.h, { slots: { description: O, errorMessage: R } }],
                        [u.C, b],
                    ],
                },
                r.createElement(f.D, null, D.children),
            ),
        );
    }),
    B = (0, r.forwardRef)(function (e, t) {
        let { inputRef: n = null, ...i } = e;
        [e, t] = (0, l.JT)(i, t, G);
        let s = r.useContext(F),
            a = (0, L.U)((0, r.useMemo)(() => (0, w.P)(n, void 0 !== e.inputRef ? e.inputRef : null), [n, e.inputRef])),
            {
                labelProps: o,
                inputProps: u,
                isSelected: c,
                isDisabled: d,
                isPressed: f,
            } = (function (e, t, n) {
                let {
                        value: i,
                        children: s,
                        "aria-label": a,
                        "aria-labelledby": o,
                        onPressStart: l,
                        onPressEnd: u,
                        onPressChange: c,
                        onPress: d,
                        onPressUp: _,
                        onClick: f,
                    } = e,
                    h = e.isDisabled || t.isDisabled,
                    m = t.selectedValue === i,
                    { pressProps: g, isPressed: I } = (0, C.d)({
                        onPressStart: l,
                        onPressEnd: u,
                        onPressChange: c,
                        onPress: d,
                        onPressUp: _,
                        onClick: f,
                        isDisabled: h,
                    }),
                    { pressProps: T, isPressed: S } = (0, C.d)({
                        onPressStart: l,
                        onPressEnd: u,
                        onPressChange: c,
                        onPressUp: _,
                        onClick: f,
                        isDisabled: h,
                        onPress(e) {
                            var r;
                            null == d || d(e), t.setSelectedValue(i), null == (r = n.current) || r.focus();
                        },
                    }),
                    { focusableProps: N } = (0, v.Wc)((0, A.v)(e, { onFocus: () => t.setLastFocusedValue(i) }), n),
                    R = (0, A.v)(g, N),
                    b = (0, E.$)(e, { labelable: !0 }),
                    D = -1;
                null != t.selectedValue
                    ? t.selectedValue === i && (D = 0)
                    : (t.lastFocusedValue === i || null == t.lastFocusedValue) && (D = 0),
                    h && (D = void 0);
                let { name: L, form: w, descriptionId: M, errorMessageId: P, validationBehavior: x } = p.get(t);
                return (
                    (0, y.F)(n, t.defaultSelectedValue, t.setSelectedValue),
                    (0, O.X)({ validationBehavior: x }, t, n),
                    {
                        labelProps: (0, A.v)(
                            T,
                            (0, r.useMemo)(
                                () => ({ onClick: (e) => e.preventDefault(), onMouseDown: (e) => e.preventDefault() }),
                                [],
                            ),
                        ),
                        inputProps: (0, A.v)(b, {
                            ...R,
                            type: "radio",
                            name: L,
                            form: w,
                            tabIndex: D,
                            disabled: h,
                            required: t.isRequired && "native" === x,
                            checked: m,
                            value: i,
                            onChange: (e) => {
                                e.stopPropagation(), t.setSelectedValue(i);
                            },
                            "aria-describedby":
                                [e["aria-describedby"], t.isInvalid ? P : null, M].filter(Boolean).join(" ") || void 0,
                        }),
                        isDisabled: h,
                        isSelected: m,
                        isPressed: I || S,
                    }
                );
            })({ ...(0, l.SK)(e), children: "function" == typeof e.children || e.children }, s, a),
            { isFocused: h, isFocusVisible: m, focusProps: g } = (0, R.o)(),
            I = d || s.isReadOnly,
            { hoverProps: T, isHovered: S } = (0, b.M)({ ...e, isDisabled: I }),
            N = (0, l.Sl)({
                ...e,
                defaultClassName: "react-aria-Radio",
                values: {
                    isSelected: c,
                    isPressed: f,
                    isHovered: S,
                    isFocused: h,
                    isFocusVisible: m,
                    isDisabled: d,
                    isReadOnly: s.isReadOnly,
                    isInvalid: s.isInvalid,
                    isRequired: s.isRequired,
                },
            }),
            M = (0, E.$)(e, { global: !0 });
        return (
            delete M.id,
            delete M.onClick,
            r.createElement(
                "label",
                {
                    ...(0, A.v)(M, o, T, N),
                    ref: t,
                    "data-selected": c || void 0,
                    "data-pressed": f || void 0,
                    "data-hovered": S || void 0,
                    "data-focused": h || void 0,
                    "data-focus-visible": m || void 0,
                    "data-disabled": d || void 0,
                    "data-readonly": s.isReadOnly || void 0,
                    "data-invalid": s.isInvalid || void 0,
                    "data-required": s.isRequired || void 0,
                },
                r.createElement(D.s, { elementType: "span" }, r.createElement("input", { ...(0, A.v)(u, g), ref: a })),
                r.createElement(_.r.Provider, { value: { isSelected: c } }, N.children),
            )
        );
    });
var H = n(187322),
    j = n(452027),
    Y = n(331322),
    W = n(834730),
    K = n(162545);
function z(e) {
    let { disabled: t, isSelected: n } = e,
        [s, a] = (0, r.useState)(void 0),
        l = (0, r.useRef)(!1);
    return (
        (0, r.useEffect)(() => {
            if (!l.current) {
                l.current = !0;
                return;
            }
            a(n ? "animateIn" : "animateOut");
        }, [n]),
        (0, i.jsx)("div", {
            className: o()([K.standaloneRadioIndicator, "string" == typeof s && K[s]]),
            "data-selected": n,
            "data-disabled": t,
            children: (0, i.jsx)($, {}),
        })
    );
}
function $() {
    return (0, i.jsxs)("svg", {
        "aria-hidden": "true",
        focusable: "false",
        className: K.radioIndicator,
        width: 20,
        height: 20,
        viewBox: "0 0 40 40",
        fill: "none",
        shapeRendering: "geometricPrecision",
        children: [
            (0, i.jsx)("circle", { cx: 20, cy: 20, r: 20, className: K.outerRadioBase }),
            (0, i.jsx)("circle", { cx: 20, cy: 20, r: 20, className: K.outerRadioFill }),
            (0, i.jsx)("circle", { cx: 20, cy: 20, r: 8, className: K.innerDotRadio }),
        ],
    });
}
function q(e) {
    let { desc: t, disabled: n, leadingIcon: s, name: a, value: l, isSelected: u } = e,
        c = (0, r.useRef)(null),
        _ = (0, r.useRef)(null),
        [f, h] = (0, r.useState)(void 0),
        p = (0, r.useRef)(!1);
    return (
        (0, r.useEffect)(() => {
            if (!p.current) {
                p.current = !0;
                return;
            }
            h(u ? "animateIn" : "animateOut");
        }, [u]),
        (0, i.jsx)(H.vN, {
            focusTarget: c,
            ringTarget: c,
            within: !0,
            children: (0, i.jsxs)(B, {
                className: o()([K.radioGroupOption, "string" == typeof f && K[f]]),
                value: l,
                isDisabled: n,
                inputRef: _,
                ref: c,
                children: [
                    (0, i.jsx)($, {}),
                    (0, i.jsxs)(Y.B, {
                        gap: 4,
                        children: [
                            (0, i.jsxs)(d.J, {
                                className: K.label,
                                children: [
                                    null != s &&
                                        (0, i.jsx)(s, {
                                            className: K.radioItemIcon,
                                            size: "sm",
                                            color: "currentColor",
                                            "aria-hidden": !0,
                                            focusable: !1,
                                        }),
                                    (0, i.jsx)(W.E, { variant: "text-md/normal", children: a }),
                                ],
                            }),
                            null != t && "" !== t
                                ? (0, i.jsx)(W.E, { variant: "text-sm/normal", color: "text-subtle", children: t })
                                : null,
                        ],
                    }),
                ],
            }),
        })
    );
}
function Z(e) {
    let { onChange: t, options: n, value: r, disabled: s = !1, "aria-labelledby": a, ...o } = e,
        l =
            null != t
                ? (e) => {
                      let i = n.find((t) => String(t.value) === e);
                      null != i && t(i.value);
                  }
                : void 0;
    return (0, i.jsx)(j.D, {
        ...o,
        children: (e) =>
            (0, i.jsx)(V, {
                id: e.controlId,
                className: K.group,
                isDisabled: s,
                onChange: l,
                "aria-labelledby": a ?? e.labelId,
                "aria-describedby": e.describedById,
                "aria-errormessage": e.errorMessageId,
                "data-mana-component": "BaseRadioGroup",
                value: null != r ? String(r) : void 0,
                children: n.map((e, t) =>
                    (0, i.jsx)(
                        q,
                        { index: t, ...e, value: String(e.value), isSelected: r === e.value },
                        String(e.value),
                    ),
                ),
            }),
    });
}
var X = n(785007);
function Q(e) {
    let t = r.useContext(s.VO);
    if (t?.experiments?.enabledExperiments?.includes("mana-toggle-inputs")) return (0, i.jsx)(Z, { ...e });
    let { ...n } = e,
        a = e.options.map((e) => ({ ...e, icon: e.leadingIcon, desc: e.desc })),
        o = {
            ...n,
            options: a,
            errorMessage: e.errorMessage,
            onChange: null != e.onChange ? (t) => e.onChange(t.value) : void 0,
        };
    return (0, i.jsx)(X.$d, { ...o });
}
function J(e) {
    let { disabled: t, checked: n, radioItemIconClassName: a } = e,
        o = r.useContext(s.VO);
    return o?.experiments?.enabledExperiments?.includes("mana-toggle-inputs")
        ? (0, i.jsx)(z, { disabled: t, isSelected: n })
        : (0, i.jsx)(X.nG, { checked: n, disabled: t, radioItemIconClassName: a });
}
