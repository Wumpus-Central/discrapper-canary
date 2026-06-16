"use strict";
n.d(t, { Sc: () => D, $Q: () => b });
var i = n(257537),
    r = n(825913),
    s = n(162376),
    a = n(461212),
    o = n(129844),
    l = n(193523);
let u = new WeakMap();
var c = n(290424),
    d = n(318473),
    _ = n(447432),
    h = n(744493),
    f = n(64700),
    p = n(339241),
    E = n(96441),
    m = n(775133),
    g = n(757260);
function A(e, t, n) {
    let i = (0, p.KZ)({ ...e, value: t.isSelected }),
        { isInvalid: r, validationErrors: s, validationDetails: a } = i.displayValidation,
        {
            labelProps: o,
            inputProps: l,
            isSelected: u,
            isPressed: c,
            isDisabled: _,
            isReadOnly: h,
        } = (0, g.e)({ ...e, isInvalid: r }, t, n);
    (0, E.X)(e, i, n);
    let { isIndeterminate: A, isRequired: I, validationBehavior: T = "aria" } = e;
    (0, f.useEffect)(() => {
        n.current && (n.current.indeterminate = !!A);
    });
    let { pressProps: S } = (0, m.d)({
        isDisabled: _ || h,
        onPress() {
            let { [p.Lf]: t } = e,
                { commitValidation: n } = t || i;
            n();
        },
    });
    return {
        labelProps: (0, d.v)(
            o,
            S,
            (0, f.useMemo)(() => ({ onMouseDown: (e) => e.preventDefault() }), []),
        ),
        inputProps: { ...l, checked: u, "aria-required": (I && "aria" === T) || void 0, required: I && "native" === T },
        isSelected: u,
        isPressed: c,
        isDisabled: _,
        isReadOnly: h,
        isInvalid: r,
        validationErrors: s,
        validationDetails: a,
    };
}
var I = n(823807),
    T = n(498430),
    S = n(967158),
    y = n(126031),
    C = n(492313),
    N = n(533715),
    v = n(561514);
let R = (0, f.createContext)(null),
    O = (0, f.createContext)(null),
    b = (0, f.forwardRef)(function (e, t) {
        var n, i;
        [e, t] = (0, r.JT)(e, t, R);
        let { validationBehavior: E } = (0, r.CC)(a.c) || {},
            m = null != (i = null != (n = e.validationBehavior) ? n : E) ? i : "native",
            g = (function (e = {}) {
                var t, n;
                let [i, r] = (0, C.P)(e.value, e.defaultValue || [], e.onChange),
                    [s] = (0, f.useState)(i),
                    a = !!e.isRequired && 0 === i.length,
                    o = (0, f.useRef)(new Map()),
                    l = (0, p.KZ)({ ...e, value: i }),
                    u = l.displayValidation.isInvalid;
                return {
                    ...l,
                    value: i,
                    defaultValue: null != (t = e.defaultValue) ? t : s,
                    setValue(t) {
                        e.isReadOnly || e.isDisabled || r(t);
                    },
                    isDisabled: e.isDisabled || !1,
                    isReadOnly: e.isReadOnly || !1,
                    isSelected: (e) => i.includes(e),
                    addValue(t) {
                        e.isReadOnly || e.isDisabled || i.includes(t) || r((i = i.concat(t)));
                    },
                    removeValue(t) {
                        e.isReadOnly || e.isDisabled || (i.includes(t) && r(i.filter((e) => e !== t)));
                    },
                    toggleValue(t) {
                        e.isReadOnly || e.isDisabled || (i.includes(t) ? r(i.filter((e) => e !== t)) : r(i.concat(t)));
                    },
                    setInvalid(e, t) {
                        let n = new Map(o.current);
                        t.isInvalid ? n.set(e, t) : n.delete(e),
                            (o.current = n),
                            l.updateValidation((0, p.cX)(...n.values()));
                    },
                    validationState: null != (n = e.validationState) ? n : u ? "invalid" : null,
                    isInvalid: u,
                    isRequired: a,
                };
            })({ ...e, validationBehavior: m }),
            [A, I] = (0, r._E)(!e["aria-label"] && !e["aria-labelledby"]),
            {
                groupProps: T,
                labelProps: S,
                descriptionProps: y,
                errorMessageProps: N,
                ...v
            } = (function (e, t) {
                let { isDisabled: n, name: i, form: r, validationBehavior: s = "aria" } = e,
                    { isInvalid: a, validationErrors: o, validationDetails: l } = t.displayValidation,
                    {
                        labelProps: f,
                        fieldProps: p,
                        descriptionProps: E,
                        errorMessageProps: m,
                    } = (0, _.M)({ ...e, labelElementType: "span", isInvalid: a, errorMessage: e.errorMessage || o });
                u.set(t, { name: i, form: r, descriptionId: E.id, errorMessageId: m.id, validationBehavior: s });
                let g = (0, c.$)(e, { labelable: !0 }),
                    { focusWithinProps: A } = (0, h.R)({
                        onBlurWithin: e.onBlur,
                        onFocusWithin: e.onFocus,
                        onFocusWithinChange: e.onFocusChange,
                    });
                return {
                    groupProps: (0, d.v)(g, { role: "group", "aria-disabled": n || void 0, ...p, ...A }),
                    labelProps: f,
                    descriptionProps: E,
                    errorMessageProps: m,
                    isInvalid: a,
                    validationErrors: o,
                    validationDetails: l,
                };
            })({ ...e, label: I, validationBehavior: m }, g),
            b = (0, r.Sl)({
                ...e,
                values: {
                    isDisabled: g.isDisabled,
                    isReadOnly: g.isReadOnly,
                    isRequired: e.isRequired || !1,
                    isInvalid: g.isInvalid,
                    state: g,
                },
                defaultClassName: "react-aria-CheckboxGroup",
            }),
            D = (0, c.$)(e, { global: !0 });
        return f.createElement(
            "div",
            {
                ...(0, d.v)(D, b, T),
                ref: t,
                slot: e.slot || void 0,
                "data-readonly": g.isReadOnly || void 0,
                "data-required": e.isRequired || void 0,
                "data-invalid": g.isInvalid || void 0,
                "data-disabled": e.isDisabled || void 0,
            },
            f.createElement(
                r.Kq,
                {
                    values: [
                        [O, g],
                        [o.I, { ...S, ref: A, elementType: "span" }],
                        [l.h, { slots: { description: y, errorMessage: N } }],
                        [s.C, v],
                    ],
                },
                b.children,
            ),
        );
    }),
    D = (0, f.forwardRef)(function (e, t) {
        var n, s;
        let { inputRef: o = null, ...l } = e;
        [e, t] = (0, r.JT)(l, t, i.BP);
        let { validationBehavior: _ } = (0, r.CC)(a.c) || {},
            h = null != (s = null != (n = e.validationBehavior) ? n : _) ? s : "native",
            E = (0, f.useContext)(O),
            m = (0, N.U)((0, f.useMemo)(() => (0, v.P)(o, void 0 !== e.inputRef ? e.inputRef : null), [o, e.inputRef])),
            {
                labelProps: g,
                inputProps: C,
                isSelected: R,
                isDisabled: b,
                isReadOnly: D,
                isPressed: L,
                isInvalid: w,
            } = E
                ? (function (e, t, n) {
                      var i, r;
                      let s = (0, I.H)({
                              isReadOnly: e.isReadOnly || t.isReadOnly,
                              isSelected: t.isSelected(e.value),
                              defaultSelected: t.defaultValue.includes(e.value),
                              onChange(n) {
                                  n ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(n);
                              },
                          }),
                          { name: a, form: o, descriptionId: l, errorMessageId: c, validationBehavior: d } = u.get(t);
                      d = null != (i = e.validationBehavior) ? i : d;
                      let { realtimeValidation: _ } = (0, p.KZ)({
                              ...e,
                              value: s.isSelected,
                              name: void 0,
                              validationBehavior: "aria",
                          }),
                          h = (0, f.useRef)(p.YD),
                          E = () => {
                              t.setInvalid(e.value, _.isInvalid ? _ : h.current);
                          };
                      (0, f.useEffect)(E);
                      let m = t.realtimeValidation.isInvalid ? t.realtimeValidation : _,
                          g = "native" === d ? t.displayValidation : m,
                          T = A(
                              {
                                  ...e,
                                  isReadOnly: e.isReadOnly || t.isReadOnly,
                                  isDisabled: e.isDisabled || t.isDisabled,
                                  name: e.name || a,
                                  form: e.form || o,
                                  isRequired: null != (r = e.isRequired) ? r : t.isRequired,
                                  validationBehavior: d,
                                  [p.Lf]: {
                                      realtimeValidation: m,
                                      displayValidation: g,
                                      resetValidation: t.resetValidation,
                                      commitValidation: t.commitValidation,
                                      updateValidation(e) {
                                          (h.current = e), E();
                                      },
                                  },
                              },
                              s,
                              n,
                          );
                      return {
                          ...T,
                          inputProps: {
                              ...T.inputProps,
                              "aria-describedby":
                                  [e["aria-describedby"], t.isInvalid ? c : null, l].filter(Boolean).join(" ") ||
                                  void 0,
                          },
                      };
                  })({ ...(0, r.SK)(e), value: e.value, children: "function" == typeof e.children || e.children }, E, m)
                : A(
                      {
                          ...(0, r.SK)(e),
                          children: "function" == typeof e.children || e.children,
                          validationBehavior: h,
                      },
                      (0, I.H)(e),
                      m,
                  ),
            { isFocused: M, isFocusVisible: P, focusProps: x } = (0, T.o)(),
            k = b || D,
            { hoverProps: U, isHovered: G } = (0, S.M)({ ...e, isDisabled: k }),
            F = (0, r.Sl)({
                ...e,
                defaultClassName: "react-aria-Checkbox",
                values: {
                    isSelected: R,
                    isIndeterminate: e.isIndeterminate || !1,
                    isPressed: L,
                    isHovered: G,
                    isFocused: M,
                    isFocusVisible: P,
                    isDisabled: b,
                    isReadOnly: D,
                    isInvalid: w,
                    isRequired: e.isRequired || !1,
                },
            }),
            V = (0, c.$)(e, { global: !0 });
        return (
            delete V.id,
            delete V.onClick,
            f.createElement(
                "label",
                {
                    ...(0, d.v)(V, g, U, F),
                    ref: t,
                    slot: e.slot || void 0,
                    "data-selected": R || void 0,
                    "data-indeterminate": e.isIndeterminate || void 0,
                    "data-pressed": L || void 0,
                    "data-hovered": G || void 0,
                    "data-focused": M || void 0,
                    "data-focus-visible": P || void 0,
                    "data-disabled": b || void 0,
                    "data-readonly": D || void 0,
                    "data-invalid": w || void 0,
                    "data-required": e.isRequired || void 0,
                },
                f.createElement(y.s, { elementType: "span" }, f.createElement("input", { ...(0, d.v)(C, x), ref: m })),
                F.children,
            )
        );
    });
