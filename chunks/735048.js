n.d(t, {
    XZ: () => S,
    cO: () => T,
});
var r = n(900090),
    i = n(595707),
    a = n(576418),
    o = n(995827),
    s = n(937397),
    l = n(819851),
    c = n(937226),
    u = n(158821),
    d = n(805204),
    f = n(511746),
    _ = n(984940),
    p = n(69771),
    h = n(485853),
    m = n(21701),
    g = n(698369),
    E = n(880016),
    b = n(413565),
    y = n(401522),
    O = n(473749);
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
                isInvalid: D,
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
            { isFocused: w, isFocusVisible: x, focusProps: L } = (0, _.F)(),
            M = N || R,
            { hoverProps: k, isHovered: j } = (0, p.X)({
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
                    isHovered: j,
                    isFocused: w,
                    isFocusVisible: x,
                    isDisabled: N,
                    isReadOnly: R,
                    isInvalid: D,
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
                    ...(0, u.d)(G, S, k, U),
                    ref: t,
                    slot: e.slot || void 0,
                    "data-selected": C || void 0,
                    "data-indeterminate": e.isIndeterminate || void 0,
                    "data-pressed": P || void 0,
                    "data-hovered": j || void 0,
                    "data-focused": w || void 0,
                    "data-focus-visible": x || void 0,
                    "data-disabled": N || void 0,
                    "data-readonly": R || void 0,
                    "data-invalid": D || void 0,
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
