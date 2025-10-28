t.d(a, { Mt: () => F });
var u = t(188366),
    n = t(862371),
    r = t(922387),
    i = t(167111),
    o = t(989189),
    l = t(986636),
    s = t(210325),
    d = t(276820),
    c = t(831352),
    m = t(682199),
    D = t(860448),
    h = t(594350),
    f = t(716723),
    y = t(580470),
    p = t(620368),
    g = t(506699),
    v = t(735437),
    b = t(43341),
    C = t(647438);
let x = (0, C.createContext)(null),
    B = (0, C.createContext)(null),
    E = [d.E, u.b, m.n, h.j],
    F = (0, C.forwardRef)(function (e, a) {
        var t, F;
        [e, a] = (0, r.pE)(e, a, x);
        let { validationBehavior: w } = (0, r.jn)(s.q) || {},
            $ = null != (F = null != (t = e.validationBehavior) ? t : w) ? F : "native",
            R = (0, p.N)({
                ...e,
                validationBehavior: $,
            }),
            Z = (0, C.useRef)(null),
            [k, A] = (0, r.xc)(!e["aria-label"] && !e["aria-labelledby"]),
            {
                groupProps: P,
                labelProps: S,
                fieldProps: M,
                buttonProps: V,
                dialogProps: I,
                calendarProps: z,
                descriptionProps: O,
                errorMessageProps: j,
                ...T
            } = (0, f.k)(
                {
                    ...(0, r.vl)(e),
                    label: A,
                    validationBehavior: $,
                },
                R,
                Z,
            ),
            [N, U] = (0, C.useState)(null),
            K = (0, C.useCallback)(() => {
                Z.current && U(Z.current.offsetWidth + "px");
            }, []);
        (0, g.y)({
            ref: Z,
            onResize: K,
        });
        let { focusProps: L, isFocused: J, isFocusVisible: W } = (0, y.F)({ within: !0 }),
            H = (0, r.aX)({
                ...e,
                values: {
                    state: R,
                    isFocusWithin: J,
                    isFocusVisible: W,
                    isDisabled: e.isDisabled || !1,
                    isInvalid: R.isInvalid,
                    isOpen: R.isOpen,
                    isReadOnly: e.isReadOnly || !1,
                },
                defaultClassName: "react-aria-DatePicker",
            }),
            G = (0, v.z)(e, { global: !0 });
        return (
            delete G.id,
            C.createElement(
                r.zt,
                {
                    values: [
                        [B, R],
                        [
                            d.E,
                            {
                                ...P,
                                ref: Z,
                                isInvalid: R.isInvalid,
                            },
                        ],
                        [i.bd, M],
                        [
                            u.b,
                            {
                                ...V,
                                isPressed: R.isOpen,
                            },
                        ],
                        [
                            m.n,
                            {
                                ...S,
                                ref: k,
                                elementType: "span",
                            },
                        ],
                        [n.Ah, z],
                        [o.$H, R],
                        [
                            D.m,
                            {
                                trigger: "DatePicker",
                                triggerRef: Z,
                                placement: "bottom start",
                                style: { "--trigger-width": N },
                                clearContexts: E,
                            },
                        ],
                        [o.MJ, I],
                        [
                            h.j,
                            {
                                slots: {
                                    description: O,
                                    errorMessage: j,
                                },
                            },
                        ],
                        [l.E, T],
                    ],
                },
                C.createElement("div", {
                    ...(0, b.d)(G, H, L),
                    ref: a,
                    slot: e.slot || void 0,
                    "data-focus-within": J || void 0,
                    "data-invalid": R.isInvalid || void 0,
                    "data-focus-visible": W || void 0,
                    "data-disabled": e.isDisabled || void 0,
                    "data-readonly": e.isReadOnly || void 0,
                    "data-open": R.isOpen || void 0,
                }),
                C.createElement(c.j, {
                    autoComplete: e.autoComplete,
                    name: e.name,
                    isDisabled: e.isDisabled,
                    state: R,
                }),
            )
        );
    });
