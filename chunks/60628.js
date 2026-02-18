t.d(a, { lr: () => P });
var r = t(650682),
    n = t(968172),
    i = t(825913),
    o = t(450902),
    u = t(248062),
    l = t(162376),
    s = t(461212),
    d = t(521767),
    c = t(360970),
    m = t(129844),
    h = t(134009),
    D = t(193523),
    y = t(668167),
    p = t(498430),
    g = t(308722),
    f = t(752579),
    v = t(290424),
    b = t(803082),
    A = t(64700);
let $ = (0, A.createContext)(null),
    w = (0, A.createContext)(null),
    R = [d.t, r.k, m.I, D.h],
    P = (0, A.forwardRef)(function (e, a) {
        var t, P;
        [e, a] = (0, i.JT)(e, a, $);
        let { validationBehavior: k } = (0, i.CC)(s.c) || {},
            x = null != (P = null != (t = e.validationBehavior) ? t : k) ? P : "native",
            C = (0, g.j)({ ...e, validationBehavior: x }),
            E = (0, A.useRef)(null),
            [S, F] = (0, i._E)(!e["aria-label"] && !e["aria-labelledby"]),
            {
                groupProps: B,
                labelProps: V,
                fieldProps: M,
                buttonProps: I,
                dialogProps: T,
                calendarProps: O,
                descriptionProps: N,
                errorMessageProps: z,
                ...j
            } = (0, y.Q)({ ...(0, i.SK)(e), label: F, validationBehavior: x }, C, E),
            [Z, U] = (0, A.useState)(null),
            K = (0, A.useCallback)(() => {
                E.current && U(E.current.offsetWidth + "px");
            }, []);
        (0, f.w)({ ref: E, onResize: K });
        let { focusProps: L, isFocused: J, isFocusVisible: Y } = (0, p.o)({ within: !0 }),
            W = (0, i.Sl)({
                ...e,
                values: {
                    state: C,
                    isFocusWithin: J,
                    isFocusVisible: Y,
                    isDisabled: e.isDisabled || !1,
                    isInvalid: C.isInvalid,
                    isOpen: C.isOpen,
                    isReadOnly: e.isReadOnly || !1,
                },
                defaultClassName: "react-aria-DatePicker",
            }),
            G = (0, v.$)(e, { global: !0 });
        return (
            delete G.id,
            A.createElement(
                i.Kq,
                {
                    values: [
                        [w, C],
                        [d.t, { ...B, ref: E, isInvalid: C.isInvalid }],
                        [o.cQ, M],
                        [r.k, { ...I, isPressed: C.isOpen }],
                        [m.I, { ...V, ref: S, elementType: "span" }],
                        [n.Yi, O],
                        [u.RG, C],
                        [
                            h.n,
                            {
                                trigger: "DatePicker",
                                triggerRef: E,
                                placement: "bottom start",
                                style: { "--trigger-width": Z },
                                clearContexts: R,
                            },
                        ],
                        [u.MV, T],
                        [D.h, { slots: { description: N, errorMessage: z } }],
                        [l.C, j],
                    ],
                },
                A.createElement("div", {
                    ...(0, b.v)(G, W, L),
                    ref: a,
                    slot: e.slot || void 0,
                    "data-focus-within": J || void 0,
                    "data-invalid": C.isInvalid || void 0,
                    "data-focus-visible": Y || void 0,
                    "data-disabled": e.isDisabled || void 0,
                    "data-readonly": e.isReadOnly || void 0,
                    "data-open": C.isOpen || void 0,
                }),
                A.createElement(c.N, {
                    autoComplete: e.autoComplete,
                    name: e.name,
                    isDisabled: e.isDisabled,
                    state: C,
                }),
            )
        );
    });
