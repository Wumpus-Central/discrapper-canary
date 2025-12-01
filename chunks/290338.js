n.d(t, { Mt: () => T });
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
    p = n(420004),
    _ = n(819851),
    m = n(342232),
    h = n(984940),
    g = n(791864),
    E = n(472736),
    b = n(880016),
    y = n(158821),
    O = n(473749);
let v = (0, O.createContext)(null),
    S = (0, O.createContext)(null),
    I = [u.E, r.b, f.n, _.j],
    T = (0, O.forwardRef)(function (e, t) {
        var n, T;
        [e, t] = (0, a.pE)(e, t, v);
        let { validationBehavior: A } = (0, a.jn)(c.q) || {},
            C = null != (T = null != (n = e.validationBehavior) ? n : A) ? T : "native",
            N = (0, g.N)({
                ...e,
                validationBehavior: C,
            }),
            P = (0, O.useRef)(null),
            [R, w] = (0, a.xc)(!e["aria-label"] && !e["aria-labelledby"]),
            {
                groupProps: D,
                labelProps: x,
                fieldProps: L,
                buttonProps: j,
                dialogProps: M,
                calendarProps: k,
                descriptionProps: U,
                errorMessageProps: G,
                ...Z
            } = (0, m.k)(
                {
                    ...(0, a.vl)(e),
                    label: w,
                    validationBehavior: C,
                },
                N,
                P,
            ),
            [B, F] = (0, O.useState)(null),
            V = (0, O.useCallback)(() => {
                P.current && F(P.current.offsetWidth + "px");
            }, []);
        (0, E.y)({
            ref: P,
            onResize: V,
        });
        let { focusProps: H, isFocused: Y, isFocusVisible: W } = (0, h.F)({ within: !0 }),
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
                        [S, N],
                        [
                            u.E,
                            {
                                ...D,
                                ref: P,
                                isInvalid: N.isInvalid,
                            },
                        ],
                        [o.bd, L],
                        [
                            r.b,
                            {
                                ...j,
                                isPressed: N.isOpen,
                            },
                        ],
                        [
                            f.n,
                            {
                                ...x,
                                ref: R,
                                elementType: "span",
                            },
                        ],
                        [i.Ah, k],
                        [s.$H, N],
                        [
                            p.m,
                            {
                                trigger: "DatePicker",
                                triggerRef: P,
                                placement: "bottom start",
                                style: { "--trigger-width": B },
                                clearContexts: I,
                            },
                        ],
                        [s.MJ, M],
                        [
                            _.j,
                            {
                                slots: {
                                    description: U,
                                    errorMessage: G,
                                },
                            },
                        ],
                        [l.E, Z],
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
