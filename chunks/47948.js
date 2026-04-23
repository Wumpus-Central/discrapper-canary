"use strict";
r.d(t, { Sc: () => M, $Q: () => A });
var n = r(257537),
    a = r(825913),
    s = r(162376),
    i = r(461212),
    o = r(129844),
    l = r(193523);
let u = new WeakMap();
var c = r(290424),
    d = r(318473),
    f = r(986960),
    p = r(744493),
    h = r(64700),
    m = r(339241),
    _ = r(96441),
    g = r(775133),
    v = r(757260);
function b(e, t, r) {
    let n = (0, m.KZ)({ ...e, value: t.isSelected }),
        { isInvalid: a, validationErrors: s, validationDetails: i } = n.displayValidation,
        {
            labelProps: o,
            inputProps: l,
            isSelected: u,
            isPressed: c,
            isDisabled: f,
            isReadOnly: p,
        } = (0, v.e)({ ...e, isInvalid: a }, t, r);
    (0, _.X)(e, n, r);
    let { isIndeterminate: b, isRequired: y, validationBehavior: E = "aria" } = e;
    (0, h.useEffect)(() => {
        r.current && (r.current.indeterminate = !!b);
    });
    let { pressProps: S } = (0, g.d)({
        isDisabled: f || p,
        onPress() {
            let { [m.Lf]: t } = e,
                { commitValidation: r } = t || n;
            r();
        },
    });
    return {
        labelProps: (0, d.v)(
            o,
            S,
            (0, h.useMemo)(() => ({ onMouseDown: (e) => e.preventDefault() }), []),
        ),
        inputProps: { ...l, checked: u, "aria-required": (y && "aria" === E) || void 0, required: y && "native" === E },
        isSelected: u,
        isPressed: c,
        isDisabled: f,
        isReadOnly: p,
        isInvalid: a,
        validationErrors: s,
        validationDetails: i,
    };
}
var y = r(823807),
    E = r(498430),
    S = r(967158),
    T = r(126031),
    x = r(492313),
    w = r(533715),
    C = r(561514);
let D = (0, h.createContext)(null),
    O = (0, h.createContext)(null),
    A = (0, h.forwardRef)(function (e, t) {
        var r, n;
        [e, t] = (0, a.JT)(e, t, D);
        let { validationBehavior: _ } = (0, a.CC)(i.c) || {},
            g = null != (n = null != (r = e.validationBehavior) ? r : _) ? n : "native",
            v = (function (e = {}) {
                var t, r;
                let [n, a] = (0, x.P)(e.value, e.defaultValue || [], e.onChange),
                    [s] = (0, h.useState)(n),
                    i = !!e.isRequired && 0 === n.length,
                    o = (0, h.useRef)(new Map()),
                    l = (0, m.KZ)({ ...e, value: n }),
                    u = l.displayValidation.isInvalid;
                return {
                    ...l,
                    value: n,
                    defaultValue: null != (t = e.defaultValue) ? t : s,
                    setValue(t) {
                        e.isReadOnly || e.isDisabled || a(t);
                    },
                    isDisabled: e.isDisabled || !1,
                    isReadOnly: e.isReadOnly || !1,
                    isSelected: (e) => n.includes(e),
                    addValue(t) {
                        e.isReadOnly || e.isDisabled || n.includes(t) || a((n = n.concat(t)));
                    },
                    removeValue(t) {
                        e.isReadOnly || e.isDisabled || (n.includes(t) && a(n.filter((e) => e !== t)));
                    },
                    toggleValue(t) {
                        e.isReadOnly || e.isDisabled || (n.includes(t) ? a(n.filter((e) => e !== t)) : a(n.concat(t)));
                    },
                    setInvalid(e, t) {
                        let r = new Map(o.current);
                        t.isInvalid ? r.set(e, t) : r.delete(e),
                            (o.current = r),
                            l.updateValidation((0, m.cX)(...r.values()));
                    },
                    validationState: null != (r = e.validationState) ? r : u ? "invalid" : null,
                    isInvalid: u,
                    isRequired: i,
                };
            })({ ...e, validationBehavior: g }),
            [b, y] = (0, a._E)(!e["aria-label"] && !e["aria-labelledby"]),
            {
                groupProps: E,
                labelProps: S,
                descriptionProps: T,
                errorMessageProps: w,
                ...C
            } = (function (e, t) {
                let { isDisabled: r, name: n, form: a, validationBehavior: s = "aria" } = e,
                    { isInvalid: i, validationErrors: o, validationDetails: l } = t.displayValidation,
                    {
                        labelProps: h,
                        fieldProps: m,
                        descriptionProps: _,
                        errorMessageProps: g,
                    } = (0, f.M)({ ...e, labelElementType: "span", isInvalid: i, errorMessage: e.errorMessage || o });
                u.set(t, { name: n, form: a, descriptionId: _.id, errorMessageId: g.id, validationBehavior: s });
                let v = (0, c.$)(e, { labelable: !0 }),
                    { focusWithinProps: b } = (0, p.R)({
                        onBlurWithin: e.onBlur,
                        onFocusWithin: e.onFocus,
                        onFocusWithinChange: e.onFocusChange,
                    });
                return {
                    groupProps: (0, d.v)(v, { role: "group", "aria-disabled": r || void 0, ...m, ...b }),
                    labelProps: h,
                    descriptionProps: _,
                    errorMessageProps: g,
                    isInvalid: i,
                    validationErrors: o,
                    validationDetails: l,
                };
            })({ ...e, label: y, validationBehavior: g }, v),
            A = (0, a.Sl)({
                ...e,
                values: {
                    isDisabled: v.isDisabled,
                    isReadOnly: v.isReadOnly,
                    isRequired: e.isRequired || !1,
                    isInvalid: v.isInvalid,
                    state: v,
                },
                defaultClassName: "react-aria-CheckboxGroup",
            }),
            M = (0, c.$)(e, { global: !0 });
        return h.createElement(
            "div",
            {
                ...(0, d.v)(M, A, E),
                ref: t,
                slot: e.slot || void 0,
                "data-readonly": v.isReadOnly || void 0,
                "data-required": e.isRequired || void 0,
                "data-invalid": v.isInvalid || void 0,
                "data-disabled": e.isDisabled || void 0,
            },
            h.createElement(
                a.Kq,
                {
                    values: [
                        [O, v],
                        [o.I, { ...S, ref: b, elementType: "span" }],
                        [l.h, { slots: { description: T, errorMessage: w } }],
                        [s.C, C],
                    ],
                },
                A.children,
            ),
        );
    }),
    M = (0, h.forwardRef)(function (e, t) {
        var r, s;
        let { inputRef: o = null, ...l } = e;
        [e, t] = (0, a.JT)(l, t, n.BP);
        let { validationBehavior: f } = (0, a.CC)(i.c) || {},
            p = null != (s = null != (r = e.validationBehavior) ? r : f) ? s : "native",
            _ = (0, h.useContext)(O),
            g = (0, w.U)((0, h.useMemo)(() => (0, C.P)(o, void 0 !== e.inputRef ? e.inputRef : null), [o, e.inputRef])),
            {
                labelProps: v,
                inputProps: x,
                isSelected: D,
                isDisabled: A,
                isReadOnly: M,
                isPressed: R,
                isInvalid: k,
            } = _
                ? (function (e, t, r) {
                      var n, a;
                      let s = (0, y.H)({
                              isReadOnly: e.isReadOnly || t.isReadOnly,
                              isSelected: t.isSelected(e.value),
                              defaultSelected: t.defaultValue.includes(e.value),
                              onChange(r) {
                                  r ? t.addValue(e.value) : t.removeValue(e.value), e.onChange && e.onChange(r);
                              },
                          }),
                          { name: i, form: o, descriptionId: l, errorMessageId: c, validationBehavior: d } = u.get(t);
                      d = null != (n = e.validationBehavior) ? n : d;
                      let { realtimeValidation: f } = (0, m.KZ)({
                              ...e,
                              value: s.isSelected,
                              name: void 0,
                              validationBehavior: "aria",
                          }),
                          p = (0, h.useRef)(m.YD),
                          _ = () => {
                              t.setInvalid(e.value, f.isInvalid ? f : p.current);
                          };
                      (0, h.useEffect)(_);
                      let g = t.realtimeValidation.isInvalid ? t.realtimeValidation : f,
                          v = "native" === d ? t.displayValidation : g,
                          E = b(
                              {
                                  ...e,
                                  isReadOnly: e.isReadOnly || t.isReadOnly,
                                  isDisabled: e.isDisabled || t.isDisabled,
                                  name: e.name || i,
                                  form: e.form || o,
                                  isRequired: null != (a = e.isRequired) ? a : t.isRequired,
                                  validationBehavior: d,
                                  [m.Lf]: {
                                      realtimeValidation: g,
                                      displayValidation: v,
                                      resetValidation: t.resetValidation,
                                      commitValidation: t.commitValidation,
                                      updateValidation(e) {
                                          (p.current = e), _();
                                      },
                                  },
                              },
                              s,
                              r,
                          );
                      return {
                          ...E,
                          inputProps: {
                              ...E.inputProps,
                              "aria-describedby":
                                  [e["aria-describedby"], t.isInvalid ? c : null, l].filter(Boolean).join(" ") ||
                                  void 0,
                          },
                      };
                  })({ ...(0, a.SK)(e), value: e.value, children: "function" == typeof e.children || e.children }, _, g)
                : b(
                      {
                          ...(0, a.SK)(e),
                          children: "function" == typeof e.children || e.children,
                          validationBehavior: p,
                      },
                      (0, y.H)(e),
                      g,
                  ),
            { isFocused: N, isFocusVisible: L, focusProps: I } = (0, E.o)(),
            P = A || M,
            { hoverProps: F, isHovered: B } = (0, S.M)({ ...e, isDisabled: P }),
            Y = (0, a.Sl)({
                ...e,
                defaultClassName: "react-aria-Checkbox",
                values: {
                    isSelected: D,
                    isIndeterminate: e.isIndeterminate || !1,
                    isPressed: R,
                    isHovered: B,
                    isFocused: N,
                    isFocusVisible: L,
                    isDisabled: A,
                    isReadOnly: M,
                    isInvalid: k,
                    isRequired: e.isRequired || !1,
                },
            }),
            U = (0, c.$)(e, { global: !0 });
        return (
            delete U.id,
            delete U.onClick,
            h.createElement(
                "label",
                {
                    ...(0, d.v)(U, v, F, Y),
                    ref: t,
                    slot: e.slot || void 0,
                    "data-selected": D || void 0,
                    "data-indeterminate": e.isIndeterminate || void 0,
                    "data-pressed": R || void 0,
                    "data-hovered": B || void 0,
                    "data-focused": N || void 0,
                    "data-focus-visible": L || void 0,
                    "data-disabled": A || void 0,
                    "data-readonly": M || void 0,
                    "data-invalid": k || void 0,
                    "data-required": e.isRequired || void 0,
                },
                h.createElement(T.s, { elementType: "span" }, h.createElement("input", { ...(0, d.v)(x, I), ref: g })),
                Y.children,
            )
        );
    });
