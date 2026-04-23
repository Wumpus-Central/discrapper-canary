t.d(a, { Ur: () => S, lr: () => E });
var r = t(650682),
    n = t(968172),
    i = t(825913),
    l = t(450902),
    o = t(248062),
    u = t(162376),
    s = t(461212),
    d = t(521767),
    c = t(360970),
    m = t(129844),
    h = t(134009),
    y = t(193523),
    D = t(668167),
    p = t(498430),
    g = t(425050),
    v = t(308722),
    f = t(387925),
    b = t(752579),
    A = t(290424),
    R = t(803082),
    $ = t(64700);
let w = (0, $.createContext)(null),
    P = (0, $.createContext)(null),
    C = (0, $.createContext)(null),
    k = (0, $.createContext)(null),
    x = [d.t, r.k, m.I, y.h],
    E = (0, $.forwardRef)(function (e, a) {
        var t, g;
        [e, a] = (0, i.JT)(e, a, w);
        let { validationBehavior: f } = (0, i.CC)(s.c) || {},
            P = null != (g = null != (t = e.validationBehavior) ? t : f) ? g : "native",
            k = (0, v.j)({ ...e, validationBehavior: P }),
            E = (0, $.useRef)(null),
            [S, V] = (0, i._E)(!e["aria-label"] && !e["aria-labelledby"]),
            {
                groupProps: F,
                labelProps: B,
                fieldProps: M,
                buttonProps: I,
                dialogProps: T,
                calendarProps: O,
                descriptionProps: N,
                errorMessageProps: Z,
                ...z
            } = (0, D.Q)({ ...(0, i.SK)(e), label: V, validationBehavior: P }, k, E),
            [U, j] = (0, $.useState)(null),
            K = (0, $.useCallback)(() => {
                E.current && j(E.current.offsetWidth + "px");
            }, []);
        (0, b.w)({ ref: E, onResize: K });
        let { focusProps: L, isFocused: J, isFocusVisible: Y } = (0, p.o)({ within: !0 }),
            W = (0, i.Sl)({
                ...e,
                values: {
                    state: k,
                    isFocusWithin: J,
                    isFocusVisible: Y,
                    isDisabled: e.isDisabled || !1,
                    isInvalid: k.isInvalid,
                    isOpen: k.isOpen,
                    isReadOnly: e.isReadOnly || !1,
                },
                defaultClassName: "react-aria-DatePicker",
            }),
            G = (0, A.$)(e, { global: !0 });
        return (
            delete G.id,
            $.createElement(
                i.Kq,
                {
                    values: [
                        [C, k],
                        [d.t, { ...F, ref: E, isInvalid: k.isInvalid }],
                        [l.cQ, M],
                        [r.k, { ...I, isPressed: k.isOpen }],
                        [m.I, { ...B, ref: S, elementType: "span" }],
                        [n.Yi, O],
                        [o.RG, k],
                        [
                            h.n,
                            {
                                trigger: "DatePicker",
                                triggerRef: E,
                                placement: "bottom start",
                                style: { "--trigger-width": U },
                                clearContexts: x,
                            },
                        ],
                        [o.MV, T],
                        [y.h, { slots: { description: N, errorMessage: Z } }],
                        [u.C, z],
                    ],
                },
                $.createElement("div", {
                    ...(0, R.v)(G, W, L),
                    ref: a,
                    slot: e.slot || void 0,
                    "data-focus-within": J || void 0,
                    "data-invalid": k.isInvalid || void 0,
                    "data-focus-visible": Y || void 0,
                    "data-disabled": e.isDisabled || void 0,
                    "data-readonly": e.isReadOnly || void 0,
                    "data-open": k.isOpen || void 0,
                }),
                $.createElement(c.N, {
                    autoComplete: e.autoComplete,
                    name: e.name,
                    isDisabled: e.isDisabled,
                    state: k,
                }),
            )
        );
    }),
    S = (0, $.forwardRef)(function (e, a) {
        var t, c;
        [e, a] = (0, i.JT)(e, a, P);
        let { validationBehavior: D } = (0, i.CC)(s.c) || {},
            v = null != (c = null != (t = e.validationBehavior) ? t : D) ? c : "native",
            w = (0, f.m)({ ...e, validationBehavior: v }),
            C = (0, $.useRef)(null),
            [E, S] = (0, i._E)(!e["aria-label"] && !e["aria-labelledby"]),
            {
                groupProps: V,
                labelProps: F,
                startFieldProps: B,
                endFieldProps: M,
                buttonProps: I,
                dialogProps: T,
                calendarProps: O,
                descriptionProps: N,
                errorMessageProps: Z,
                ...z
            } = (0, g.Z)({ ...(0, i.SK)(e), label: S, validationBehavior: v }, w, C),
            [U, j] = (0, $.useState)(null),
            K = (0, $.useCallback)(() => {
                C.current && j(C.current.offsetWidth + "px");
            }, []);
        (0, b.w)({ ref: C, onResize: K });
        let { focusProps: L, isFocused: J, isFocusVisible: Y } = (0, p.o)({ within: !0 }),
            W = (0, i.Sl)({
                ...e,
                values: {
                    state: w,
                    isFocusWithin: J,
                    isFocusVisible: Y,
                    isDisabled: e.isDisabled || !1,
                    isInvalid: w.isInvalid,
                    isOpen: w.isOpen,
                    isReadOnly: e.isReadOnly || !1,
                },
                defaultClassName: "react-aria-DateRangePicker",
            }),
            G = (0, A.$)(e, { global: !0 });
        return (
            delete G.id,
            $.createElement(
                i.Kq,
                {
                    values: [
                        [k, w],
                        [d.t, { ...V, ref: C, isInvalid: w.isInvalid }],
                        [r.k, { ...I, isPressed: w.isOpen }],
                        [m.I, { ...F, ref: E, elementType: "span" }],
                        [n.pr, O],
                        [o.RG, w],
                        [
                            h.n,
                            {
                                trigger: "DateRangePicker",
                                triggerRef: C,
                                placement: "bottom start",
                                style: { "--trigger-width": U },
                                clearContexts: x,
                            },
                        ],
                        [o.MV, T],
                        [l.cQ, { slots: { start: B, end: M } }],
                        [y.h, { slots: { description: N, errorMessage: Z } }],
                        [u.C, z],
                    ],
                },
                $.createElement("div", {
                    ...(0, R.v)(G, W, L),
                    ref: a,
                    slot: e.slot || void 0,
                    "data-focus-within": J || void 0,
                    "data-invalid": w.isInvalid || void 0,
                    "data-focus-visible": Y || void 0,
                    "data-disabled": e.isDisabled || void 0,
                    "data-readonly": e.isReadOnly || void 0,
                    "data-open": w.isOpen || void 0,
                }),
            )
        );
    });
