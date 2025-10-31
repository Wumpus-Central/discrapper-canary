n.d(t, {
    XZ: () => S,
    cO: () => T,
});
var r = n(386843),
    i = n(922387),
    a = n(986636),
    o = n(210325),
    s = n(682199),
    l = n(594350),
    c = n(399598),
    u = n(43341),
    d = n(747339),
    f = n(933269),
    _ = n(580470),
    p = n(437525),
    h = n(513351),
    m = n(134820),
    g = n(940131),
    E = n(735437),
    b = n(593277),
    y = n(483022),
    O = n(647438);
let v = (0, O.createContext)(null),
    I = (0, O.createContext)(null),
    T = (0, O.forwardRef)(function (e, t) {
        var n, r;
        [e, t] = (0, i.pE)(e, t, v);
        let { validationBehavior: d } = (0, i.jn)(o.q) || {},
            f = null != (r = null != (n = e.validationBehavior) ? n : d) ? r : "native",
            _ = (0, m.$)({
                ...e,
                validationBehavior: f,
            }),
            [p, h] = (0, i.xc)(!e["aria-label"] && !e["aria-labelledby"]),
            {
                groupProps: g,
                labelProps: b,
                descriptionProps: y,
                errorMessageProps: T,
                ...S
            } = (0, c.u)(
                {
                    ...e,
                    label: h,
                    validationBehavior: f,
                },
                _,
            ),
            A = (0, i.aX)({
                ...e,
                values: {
                    isDisabled: _.isDisabled,
                    isReadOnly: _.isReadOnly,
                    isRequired: e.isRequired || !1,
                    isInvalid: _.isInvalid,
                    state: _,
                },
                defaultClassName: "react-aria-CheckboxGroup",
            }),
            C = (0, E.z)(e, { global: !0 });
        return O.createElement(
            "div",
            {
                ...(0, u.d)(C, A, g),
                ref: t,
                slot: e.slot || void 0,
                "data-readonly": _.isReadOnly || void 0,
                "data-required": e.isRequired || void 0,
                "data-invalid": _.isInvalid || void 0,
                "data-disabled": e.isDisabled || void 0,
            },
            O.createElement(
                i.zt,
                {
                    values: [
                        [I, _],
                        [
                            s.n,
                            {
                                ...b,
                                ref: p,
                                elementType: "span",
                            },
                        ],
                        [
                            l.j,
                            {
                                slots: {
                                    description: y,
                                    errorMessage: T,
                                },
                            },
                        ],
                        [a.E, S],
                    ],
                },
                A.children,
            ),
        );
    }),
    S = (0, O.forwardRef)(function (e, t) {
        var n, a;
        let { inputRef: s = null, ...l } = e;
        [e, t] = (0, i.pE)(l, t, r.cP);
        let { validationBehavior: c } = (0, i.jn)(o.q) || {},
            m = null != (a = null != (n = e.validationBehavior) ? n : c) ? a : "native",
            v = (0, O.useContext)(I),
            T = (0, b.B)((0, O.useMemo)(() => (0, y.l)(s, void 0 !== e.inputRef ? e.inputRef : null), [s, e.inputRef])),
            {
                labelProps: S,
                inputProps: A,
                isSelected: C,
                isDisabled: N,
                isReadOnly: R,
                isPressed: P,
                isInvalid: w,
            } = v
                ? (0, d.a)(
                      {
                          ...(0, i.vl)(e),
                          value: e.value,
                          children: "function" == typeof e.children || e.children,
                      },
                      v,
                      T,
                  )
                : (0, f.O)(
                      {
                          ...(0, i.vl)(e),
                          children: "function" == typeof e.children || e.children,
                          validationBehavior: m,
                      },
                      (0, g.l)(e),
                      T,
                  ),
            { isFocused: D, isFocusVisible: x, focusProps: L } = (0, _.F)(),
            M = N || R,
            { hoverProps: j, isHovered: k } = (0, p.X)({
                ...e,
                isDisabled: M,
            }),
            U = (0, i.aX)({
                ...e,
                defaultClassName: "react-aria-Checkbox",
                values: {
                    isSelected: C,
                    isIndeterminate: e.isIndeterminate || !1,
                    isPressed: P,
                    isHovered: k,
                    isFocused: D,
                    isFocusVisible: x,
                    isDisabled: N,
                    isReadOnly: R,
                    isInvalid: w,
                    isRequired: e.isRequired || !1,
                },
            }),
            G = (0, E.z)(e, { global: !0 });
        return (
            delete G.id,
            delete G.onClick,
            O.createElement(
                "label",
                {
                    ...(0, u.d)(G, S, j, U),
                    ref: t,
                    slot: e.slot || void 0,
                    "data-selected": C || void 0,
                    "data-indeterminate": e.isIndeterminate || void 0,
                    "data-pressed": P || void 0,
                    "data-hovered": k || void 0,
                    "data-focused": D || void 0,
                    "data-focus-visible": x || void 0,
                    "data-disabled": N || void 0,
                    "data-readonly": R || void 0,
                    "data-invalid": w || void 0,
                    "data-required": e.isRequired || void 0,
                },
                O.createElement(
                    h.T,
                    { elementType: "span" },
                    O.createElement("input", {
                        ...(0, u.d)(A, L),
                        ref: T,
                    }),
                ),
                U.children,
            )
        );
    });
