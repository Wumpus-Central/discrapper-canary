n.d(t, { XZ: () => E });
var r = n(532033),
    i = n(477831),
    a = n(22811),
    o = n(604183),
    s = n(507378),
    l = n(127096),
    c = n(553357),
    u = n(506523),
    d = n(788555),
    f = n(133209),
    _ = n(853400),
    p = n(62236),
    h = n(753125),
    m = n(647438);
let g = (0, m.createContext)(null),
    E = (0, m.forwardRef)(function (e, t) {
        var n, E;
        let { inputRef: b = null, ...y } = e;
        [e, t] = (0, i.pE)(y, t, r.cP);
        let { validationBehavior: O } = (0, i.jn)(a.q) || {},
            v = null != (E = null != (n = e.validationBehavior) ? n : O) ? E : "native",
            I = (0, m.useContext)(g),
            T = (0, _.B)((0, m.useMemo)(() => (0, p.l)(b, void 0 !== e.inputRef ? e.inputRef : null), [b, e.inputRef])),
            {
                labelProps: S,
                inputProps: A,
                isSelected: C,
                isDisabled: N,
                isReadOnly: R,
                isPressed: P,
                isInvalid: w,
            } = I
                ? (0, o.a)(
                      {
                          ...(0, i.vl)(e),
                          value: e.value,
                          children: "function" == typeof e.children || e.children,
                      },
                      I,
                      T,
                  )
                : (0, s.O)(
                      {
                          ...(0, i.vl)(e),
                          children: "function" == typeof e.children || e.children,
                          validationBehavior: v,
                      },
                      (0, f.l)(e),
                      T,
                  ),
            { isFocused: D, isFocusVisible: x, focusProps: L } = (0, l.F)(),
            j = N || R,
            { hoverProps: M, isHovered: k } = (0, c.X)({
                ...e,
                isDisabled: j,
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
            G = (0, h.z)(e, { global: !0 });
        return (
            delete G.id,
            delete G.onClick,
            m.createElement(
                "label",
                {
                    ...(0, u.d)(G, S, M, U),
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
                m.createElement(
                    d.T,
                    { elementType: "span" },
                    m.createElement("input", {
                        ...(0, u.d)(A, L),
                        ref: T,
                    }),
                ),
                U.children,
            )
        );
    });
