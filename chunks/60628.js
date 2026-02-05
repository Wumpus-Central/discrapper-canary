"use strict";
n.d(t, { lr: () => C });
var r = n(650682),
    i = n(968172),
    a = n(825913),
    s = n(450902),
    o = n(248062),
    l = n(162376),
    u = n(461212),
    c = n(521767),
    d = n(360970),
    _ = n(129844),
    f = n(134009),
    p = n(193523),
    h = n(668167),
    m = n(498430),
    g = n(308722),
    E = n(752579),
    A = n(290424),
    I = n(803082),
    T = n(64700);
let y = (0, T.createContext)(null),
    S = (0, T.createContext)(null),
    v = [c.t, r.k, _.I, p.h],
    C = (0, T.forwardRef)(function (e, t) {
        var n, C;
        [e, t] = (0, a.JT)(e, t, y);
        let { validationBehavior: b } = (0, a.CC)(u.c) || {},
            N = null != (C = null != (n = e.validationBehavior) ? n : b) ? C : "native",
            R = (0, g.j)({ ...e, validationBehavior: N }),
            O = (0, T.useRef)(null),
            [D, L] = (0, a._E)(!e["aria-label"] && !e["aria-labelledby"]),
            {
                groupProps: w,
                labelProps: x,
                fieldProps: P,
                buttonProps: M,
                dialogProps: k,
                calendarProps: U,
                descriptionProps: G,
                errorMessageProps: V,
                ...F
            } = (0, h.Q)({ ...(0, a.SK)(e), label: L, validationBehavior: N }, R, O),
            [B, j] = (0, T.useState)(null),
            H = (0, T.useCallback)(() => {
                O.current && j(O.current.offsetWidth + "px");
            }, []);
        (0, E.w)({ ref: O, onResize: H });
        let { focusProps: Y, isFocused: W, isFocusVisible: K } = (0, m.o)({ within: !0 }),
            z = (0, a.Sl)({
                ...e,
                values: {
                    state: R,
                    isFocusWithin: W,
                    isFocusVisible: K,
                    isDisabled: e.isDisabled || !1,
                    isInvalid: R.isInvalid,
                    isOpen: R.isOpen,
                    isReadOnly: e.isReadOnly || !1,
                },
                defaultClassName: "react-aria-DatePicker",
            }),
            $ = (0, A.$)(e, { global: !0 });
        return (
            delete $.id,
            T.createElement(
                a.Kq,
                {
                    values: [
                        [S, R],
                        [c.t, { ...w, ref: O, isInvalid: R.isInvalid }],
                        [s.cQ, P],
                        [r.k, { ...M, isPressed: R.isOpen }],
                        [_.I, { ...x, ref: D, elementType: "span" }],
                        [i.Yi, U],
                        [o.RG, R],
                        [
                            f.n,
                            {
                                trigger: "DatePicker",
                                triggerRef: O,
                                placement: "bottom start",
                                style: { "--trigger-width": B },
                                clearContexts: v,
                            },
                        ],
                        [o.MV, k],
                        [p.h, { slots: { description: G, errorMessage: V } }],
                        [l.C, F],
                    ],
                },
                T.createElement("div", {
                    ...(0, I.v)($, z, Y),
                    ref: t,
                    slot: e.slot || void 0,
                    "data-focus-within": W || void 0,
                    "data-invalid": R.isInvalid || void 0,
                    "data-focus-visible": K || void 0,
                    "data-disabled": e.isDisabled || void 0,
                    "data-readonly": e.isReadOnly || void 0,
                    "data-open": R.isOpen || void 0,
                }),
                T.createElement(d.N, {
                    autoComplete: e.autoComplete,
                    name: e.name,
                    isDisabled: e.isDisabled,
                    state: R,
                }),
            )
        );
    });
