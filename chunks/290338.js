n.d(t, { Mt: () => S });
var r = n(23893),
    i = n(971903),
    a = n(595707),
    o = n(480554),
    s = n(929887),
    l = n(576418),
    c = n(995827),
    u = n(540387),
    d = n(294381),
    f = n(937397),
    _ = n(420004),
    p = n(819851),
    h = n(342232),
    m = n(984940),
    g = n(791864),
    E = n(472736),
    b = n(880016),
    y = n(158821),
    O = n(473749);
let v = (0, O.createContext)(null),
    I = (0, O.createContext)(null),
    T = [u.E, r.b, f.n, p.j],
    S = (0, O.forwardRef)(function (e, t) {
        var n, S;
        [e, t] = (0, a.pE)(e, t, v);
        let { validationBehavior: A } = (0, a.jn)(c.q) || {},
            C = null != (S = null != (n = e.validationBehavior) ? n : A) ? S : "native",
            N = (0, g.N)({
                ...e,
                validationBehavior: C,
            }),
            R = (0, O.useRef)(null),
            [P, D] = (0, a.xc)(!e["aria-label"] && !e["aria-labelledby"]),
            {
                groupProps: w,
                labelProps: L,
                fieldProps: x,
                buttonProps: M,
                dialogProps: j,
                calendarProps: k,
                descriptionProps: U,
                errorMessageProps: G,
                ...B
            } = (0, h.k)(
                {
                    ...(0, a.vl)(e),
                    label: D,
                    validationBehavior: C,
                },
                N,
                R,
            ),
            [Z, F] = (0, O.useState)(null),
            V = (0, O.useCallback)(() => {
                R.current && F(R.current.offsetWidth + "px");
            }, []);
        (0, E.y)({
            ref: R,
            onResize: V,
        });
        let { focusProps: H, isFocused: Y, isFocusVisible: W } = (0, m.F)({ within: !0 }),
            K = (0, a.aX)({
                ...e,
                values: {
                    state: N,
                    isFocusWithin: Y,
                    isFocusVisible: W,
                    isDisabled: e.isDisabled || !1,
                    isInvalid: N.isInvalid,
                    isOpen: N.isOpen,
                    isReadOnly: e.isReadOnly || !1,
                },
                defaultClassName: "react-aria-DatePicker",
            }),
            z = (0, b.z)(e, { global: !0 });
        return (
            delete z.id,
            O.createElement(
                a.zt,
                {
                    values: [
                        [I, N],
                        [
                            u.E,
                            {
                                ...w,
                                ref: R,
                                isInvalid: N.isInvalid,
                            },
                        ],
                        [o.bd, x],
                        [
                            r.b,
                            {
                                ...M,
                                isPressed: N.isOpen,
                            },
                        ],
                        [
                            f.n,
                            {
                                ...L,
                                ref: P,
                                elementType: "span",
                            },
                        ],
                        [i.Ah, k],
                        [s.$H, N],
                        [
                            _.m,
                            {
                                trigger: "DatePicker",
                                triggerRef: R,
                                placement: "bottom start",
                                style: { "--trigger-width": Z },
                                clearContexts: T,
                            },
                        ],
                        [s.MJ, j],
                        [
                            p.j,
                            {
                                slots: {
                                    description: U,
                                    errorMessage: G,
                                },
                            },
                        ],
                        [l.E, B],
                    ],
                },
                O.createElement("div", {
                    ...(0, y.d)(z, K, H),
                    ref: t,
                    slot: e.slot || void 0,
                    "data-focus-within": Y || void 0,
                    "data-invalid": N.isInvalid || void 0,
                    "data-focus-visible": W || void 0,
                    "data-disabled": e.isDisabled || void 0,
                    "data-readonly": e.isReadOnly || void 0,
                    "data-open": N.isOpen || void 0,
                }),
                O.createElement(d.j, {
                    autoComplete: e.autoComplete,
                    name: e.name,
                    isDisabled: e.isDisabled,
                    state: N,
                }),
            )
        );
    });
