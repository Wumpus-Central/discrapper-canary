n.d(t, {
    lr: () => I,
});
var r = n(650682),
    i = n(968172),
    a = n(825913),
    s = n(450902),
    o = n(248062),
    l = n(162376),
    c = n(461212),
    u = n(521767),
    d = n(360970),
    f = n(129844),
    p = n(134009),
    _ = n(193523),
    h = n(668167),
    m = n(498430),
    g = n(308722),
    E = n(752579),
    b = n(290424),
    y = n(803082),
    O = n(64700);
let A = (0, O.createContext)(null),
    v = (0, O.createContext)(null),
    S = [u.t, r.k, f.I, _.h],
    I = (0, O.forwardRef)(function (e, t) {
        var n, I;
        [e, t] = (0, a.JT)(e, t, A);
        let { validationBehavior: T } = (0, a.CC)(c.c) || {},
            C = null != (I = null != (n = e.validationBehavior) ? n : T) ? I : "native",
            N = (0, g.j)({
                ...e,
                validationBehavior: C,
            }),
            R = (0, O.useRef)(null),
            [w, P] = (0, a._E)(!e["aria-label"] && !e["aria-labelledby"]),
            {
                groupProps: D,
                labelProps: x,
                fieldProps: L,
                buttonProps: j,
                dialogProps: M,
                calendarProps: k,
                descriptionProps: U,
                errorMessageProps: G,
                ...V
            } = (0, h.Q)(
                {
                    ...(0, a.SK)(e),
                    label: P,
                    validationBehavior: C,
                },
                N,
                R,
            ),
            [F, B] = (0, O.useState)(null),
            H = (0, O.useCallback)(() => {
                R.current && B(R.current.offsetWidth + "px");
            }, []);
        (0, E.w)({
            ref: R,
            onResize: H,
        });
        let {
                focusProps: Y,
                isFocused: W,
                isFocusVisible: K,
            } = (0, m.o)({
                within: !0,
            }),
            z = (0, a.Sl)({
                ...e,
                values: {
                    state: N,
                    isFocusWithin: W,
                    isFocusVisible: K,
                    isDisabled: e.isDisabled || !1,
                    isInvalid: N.isInvalid,
                    isOpen: N.isOpen,
                    isReadOnly: e.isReadOnly || !1,
                },
                defaultClassName: "react-aria-DatePicker",
            }),
            q = (0, b.$)(e, {
                global: !0,
            });
        return (
            delete q.id,
            O.createElement(
                a.Kq,
                {
                    values: [
                        [v, N],
                        [
                            u.t,
                            {
                                ...D,
                                ref: R,
                                isInvalid: N.isInvalid,
                            },
                        ],
                        [s.cQ, L],
                        [
                            r.k,
                            {
                                ...j,
                                isPressed: N.isOpen,
                            },
                        ],
                        [
                            f.I,
                            {
                                ...x,
                                ref: w,
                                elementType: "span",
                            },
                        ],
                        [i.Yi, k],
                        [o.RG, N],
                        [
                            p.n,
                            {
                                trigger: "DatePicker",
                                triggerRef: R,
                                placement: "bottom start",
                                style: {
                                    "--trigger-width": F,
                                },
                                clearContexts: S,
                            },
                        ],
                        [o.MV, M],
                        [
                            _.h,
                            {
                                slots: {
                                    description: U,
                                    errorMessage: G,
                                },
                            },
                        ],
                        [l.C, V],
                    ],
                },
                O.createElement("div", {
                    ...(0, y.v)(q, z, Y),
                    ref: t,
                    slot: e.slot || void 0,
                    "data-focus-within": W || void 0,
                    "data-invalid": N.isInvalid || void 0,
                    "data-focus-visible": K || void 0,
                    "data-disabled": e.isDisabled || void 0,
                    "data-readonly": e.isReadOnly || void 0,
                    "data-open": N.isOpen || void 0,
                }),
                O.createElement(d.N, {
                    autoComplete: e.autoComplete,
                    name: e.name,
                    isDisabled: e.isDisabled,
                    state: N,
                }),
            )
        );
    });
