r.d(t, { t7: () => k, BP: () => E, Sc: () => A, $Q: () => M });
var n = r(407815),
    i = r(333018),
    o = r(195438),
    a = r(154370),
    s = r(67105);
let l = new WeakMap();
var u = r(961082),
    c = r(184093),
    f = r(465878),
    d = r(761412),
    p = r(249620),
    h = r(582128);
function m(e, t, r) {
    let {
            labelProps: n,
            inputProps: i,
            descriptionProps: o,
            errorMessageProps: a,
            isSelected: s,
            isPressed: l,
            isDisabled: u,
            isReadOnly: f,
            isInvalid: d,
            validationErrors: m,
            validationDetails: v,
        } = (0, p.e)(e, t, r),
        { isIndeterminate: y } = e;
    return (
        (0, h.useEffect)(() => {
            r.current && (r.current.indeterminate = !!y);
        }),
        {
            labelProps: (0, c.v)(
                n,
                (0, h.useMemo)(() => ({ onMouseDown: (e) => e.preventDefault() }), []),
            ),
            inputProps: i,
            descriptionProps: o,
            errorMessageProps: a,
            isSelected: s,
            isPressed: l,
            isDisabled: u,
            isReadOnly: f,
            isInvalid: d,
            validationErrors: m,
            validationDetails: v,
        }
    );
}
var v = r(572313),
    y = r(837190),
    g = r(526739),
    b = r(814204),
    w = r(288378),
    _ = r(500731),
    S = r(475921),
    x = r(467324);
let E = (0, h.createContext)(null),
    k = (0, h.createContext)(null),
    C = (0, h.createContext)(null),
    T = (0, h.createContext)(null),
    M = (0, h.forwardRef)(function (e, t) {
        [e, t] = (0, n.JT)(e, t, C);
        let { validationBehavior: r } = (0, n.CC)(o.c) || {},
            p = e.validationBehavior ?? r ?? "native",
            m = (function (e = {}) {
                let [t, r] = (0, g.P)(e.value, e.defaultValue || [], e.onChange),
                    [n] = (0, h.useState)(t),
                    i = !!e.isRequired && 0 === t.length,
                    o = (0, h.useRef)(new Map()),
                    a = (0, v.KZ)({ ...e, value: t }),
                    s = a.displayValidation.isInvalid;
                return {
                    ...a,
                    value: t,
                    defaultValue: e.defaultValue ?? n,
                    setValue(t) {
                        e.isReadOnly || e.isDisabled || r(t);
                    },
                    isDisabled: e.isDisabled || !1,
                    isReadOnly: e.isReadOnly || !1,
                    isSelected: (e) => t.includes(e),
                    addValue(t) {
                        e.isReadOnly || e.isDisabled || r((e) => (e.includes(t) ? e : e.concat(t)));
                    },
                    removeValue(n) {
                        e.isReadOnly || e.isDisabled || (t.includes(n) && r(t.filter((e) => e !== n)));
                    },
                    toggleValue(n) {
                        e.isReadOnly || e.isDisabled || (t.includes(n) ? r(t.filter((e) => e !== n)) : r(t.concat(n)));
                    },
                    setInvalid(e, t) {
                        let r = new Map(o.current);
                        t.isInvalid ? r.set(e, t) : r.delete(e),
                            (o.current = r),
                            a.updateValidation((0, v.cX)(...r.values()));
                    },
                    validationState: e.validationState ?? (s ? "invalid" : null),
                    isInvalid: s,
                    isRequired: i,
                };
            })({ ...e, validationBehavior: p }),
            [y, b] = (0, n._E)(!e["aria-label"] && !e["aria-labelledby"]),
            {
                groupProps: w,
                labelProps: _,
                descriptionProps: S,
                errorMessageProps: x,
                ...E
            } = (function (e, t) {
                let { isDisabled: r, name: n, form: i, validationBehavior: o = "aria" } = e,
                    { isInvalid: a, validationErrors: s, validationDetails: p } = t.displayValidation,
                    {
                        labelProps: h,
                        fieldProps: m,
                        descriptionProps: v,
                        errorMessageProps: y,
                    } = (0, f.M)({ ...e, labelElementType: "span", isInvalid: a, errorMessage: e.errorMessage || s });
                l.set(t, { name: n, form: i, descriptionId: v.id, errorMessageId: y.id, validationBehavior: o });
                let g = (0, u.$)(e, { labelable: !0 }),
                    { focusWithinProps: b } = (0, d.R)({
                        onBlurWithin: e.onBlur,
                        onFocusWithin: e.onFocus,
                        onFocusWithinChange: e.onFocusChange,
                    });
                return {
                    groupProps: (0, c.v)(g, { role: "group", "aria-disabled": r || void 0, ...m, ...b }),
                    labelProps: h,
                    descriptionProps: v,
                    errorMessageProps: y,
                    isInvalid: a,
                    validationErrors: s,
                    validationDetails: p,
                };
            })({ ...e, label: b, validationBehavior: p }, m),
            k = (0, n.Sl)({
                ...e,
                values: {
                    isDisabled: m.isDisabled,
                    isReadOnly: m.isReadOnly,
                    isRequired: e.isRequired || !1,
                    isInvalid: m.isInvalid,
                    state: m,
                },
                defaultClassName: "react-aria-CheckboxGroup",
            }),
            M = (0, u.$)(e, { global: !0 });
        return h.createElement(
            n.tT.div,
            {
                ...(0, c.v)(M, k, w),
                ref: t,
                slot: e.slot || void 0,
                "data-readonly": m.isReadOnly || void 0,
                "data-required": e.isRequired || void 0,
                "data-invalid": m.isInvalid || void 0,
                "data-disabled": e.isDisabled || void 0,
            },
            h.createElement(
                n.Kq,
                {
                    values: [
                        [T, m],
                        [a.I, { ..._, ref: y, elementType: "span" }],
                        [s.h, { slots: { description: S, errorMessage: x } }],
                        [i.C, E],
                    ],
                },
                k.children,
            ),
        );
    }),
    P = (0, h.createContext)(null),
    A = (0, h.forwardRef)(function (e, t) {
        let { inputRef: r = null, ...i } = e;
        [e, t] = (0, n.JT)(i, t, E);
        let [a, s] = (function (e, t) {
            let { validationBehavior: r } = (0, n.CC)(o.c) || {},
                i = e.validationBehavior ?? r ?? "native",
                a = (0, h.useContext)(T),
                s = (0, S.U)(
                    (0, h.useMemo)(() => (0, b.P)(t, void 0 !== e.inputRef ? e.inputRef : null), [t, e.inputRef]),
                ),
                u = {
                    ...(0, n.SK)(e),
                    children: "function" == typeof e.children || e.children,
                    value: e.value,
                    validationBehavior: i,
                };
            return [
                a
                    ? (function (e, t, r) {
                          let n = (0, y.H)({
                                  isReadOnly: e.isReadOnly || t.isReadOnly,
                                  isSelected: t.isSelected(e.value),
                                  defaultSelected: t.defaultValue.includes(e.value),
                                  onChange(r) {
                                      r ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(r);
                                  },
                              }),
                              {
                                  name: i,
                                  form: o,
                                  descriptionId: a,
                                  errorMessageId: s,
                                  validationBehavior: u,
                              } = l.get(t);
                          u = e.validationBehavior ?? u;
                          let { realtimeValidation: c } = (0, v.KZ)({
                                  ...e,
                                  value: n.isSelected,
                                  name: void 0,
                                  validationBehavior: "aria",
                              }),
                              f = (0, h.useRef)(v.YD),
                              d = () => {
                                  t.setInvalid(e.value, c.isInvalid ? c : f.current);
                              };
                          (0, h.useEffect)(d);
                          let p = t.realtimeValidation.isInvalid ? t.realtimeValidation : c,
                              g = "native" === u ? t.displayValidation : p,
                              b = m(
                                  {
                                      ...e,
                                      isReadOnly: e.isReadOnly || t.isReadOnly,
                                      isDisabled: e.isDisabled || t.isDisabled,
                                      name: e.name || i,
                                      form: e.form || o,
                                      isRequired: e.isRequired ?? t.isRequired,
                                      validationBehavior: u,
                                      [v.Lf]: {
                                          realtimeValidation: p,
                                          displayValidation: g,
                                          resetValidation: t.resetValidation,
                                          commitValidation: t.commitValidation,
                                          updateValidation(e) {
                                              (f.current = e), d();
                                          },
                                      },
                                  },
                                  n,
                                  r,
                              );
                          return {
                              ...b,
                              inputProps: {
                                  ...b.inputProps,
                                  "aria-describedby":
                                      [b.inputProps["aria-describedby"], t.isInvalid ? s : null, a]
                                          .filter(Boolean)
                                          .join(" ") || void 0,
                              },
                          };
                      })(u, a, s)
                    : m(u, (0, y.H)(e), s),
                s,
            ];
        })(e, r);
        return h.createElement(
            P.Provider,
            {
                value: {
                    ...a,
                    inputRef: s,
                    defaultClassName: "react-aria-Checkbox",
                    isIndeterminate: e.isIndeterminate,
                    isRequired: e.isRequired,
                },
            },
            h.createElement(I, { ...e, ref: t }),
        );
    }),
    I = (0, h.forwardRef)(function (e, t) {
        let {
                labelProps: r,
                inputProps: i,
                isSelected: o,
                isDisabled: a,
                isReadOnly: s,
                isPressed: l,
                isInvalid: f,
                inputRef: d,
                defaultClassName: p,
                isIndeterminate: m,
                isRequired: v,
            } = (0, h.useContext)(P),
            { isFocused: y, isFocusVisible: g, focusProps: b } = (0, w.o)(),
            S = a || s,
            { hoverProps: E, isHovered: k } = (0, _.M)({ ...e, isDisabled: S }),
            C = (0, n.Sl)({
                ...e,
                defaultClassName: p,
                values: {
                    isSelected: o,
                    isIndeterminate: m || !1,
                    isPressed: l,
                    isHovered: k,
                    isFocused: y,
                    isFocusVisible: g,
                    isDisabled: a,
                    isReadOnly: s,
                    isInvalid: f,
                    isRequired: v || !1,
                },
            }),
            T = (0, u.$)(e, { global: !0 });
        return (
            delete T.id,
            delete T.onClick,
            h.createElement(
                n.tT.label,
                {
                    ...(0, c.v)(T, r, E, C),
                    ref: t,
                    slot: e.slot || void 0,
                    "data-selected": o || void 0,
                    "data-indeterminate": m || void 0,
                    "data-pressed": l || void 0,
                    "data-hovered": k || void 0,
                    "data-focused": y || void 0,
                    "data-focus-visible": g || void 0,
                    "data-disabled": a || void 0,
                    "data-readonly": s || void 0,
                    "data-invalid": f || void 0,
                    "data-required": v || void 0,
                },
                h.createElement(x.s, { elementType: "span" }, h.createElement("input", { ...(0, c.v)(i, b), ref: d })),
                C.children,
            )
        );
    });
