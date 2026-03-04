a.d(l, { l: () => f });
var t = a(627968),
    o = a(503698),
    n = a.n(o),
    i = a(13163),
    s = a(60628),
    r = a(521767),
    d = a(450902),
    u = a(650682),
    c = a(248062),
    b = a(561392),
    p = a(720341),
    m = a(452027),
    x = a(934551),
    h = a(862301),
    v = a(460890),
    y = a(316128);
function f(e) {
    let { value: l, onChange: a, minValue: o, maxValue: f, placeholderValue: g, ...V } = e,
        { i18n: C } = (0, v.G9)(),
        { fieldProps: j } = (0, m.n)(V),
        { disabled: S, errorMessage: k, required: w = !1 } = j,
        T = { hasError: null != k && "" !== k },
        {
            refs: M,
            floatingStyles: D,
            isOpen: N,
            setIsOpen: I,
            context: E,
            getFloatingProps: A,
            getReferenceProps: L,
        } = (0, b.u)({ matchReferenceWidth: !1, placement: "bottom-start" }),
        { isMounted: O, styles: R } = (0, b.D)(E, {
            common: (e) => {
                let { side: l } = e;
                return { transformOrigin: `${"top" === l ? "bottom" : "top"} center` };
            },
            initial: { opacity: 0.5, transform: "scaleY(0.96)" },
            duration: 100,
        }),
        B = (e) => {
            a?.(e), I(!1);
        };
    return (0, t.jsx)(m.D, {
        ...j,
        children: (e) =>
            (0, t.jsx)(h.F, {
                className: y.LF,
                validation: T,
                ref: M.setReference,
                ...L(),
                children: (0, t.jsxs)(s.lr, {
                    id: e.controlId,
                    "aria-labelledby": e.labelId,
                    "aria-describedby": e.describedById,
                    "aria-invalid": null != e.errorMessageId,
                    "aria-errormessage": e.errorMessageId,
                    value: l,
                    onChange: B,
                    isDisabled: S,
                    isRequired: w,
                    minValue: o,
                    maxValue: f,
                    placeholderValue: g,
                    granularity: "day",
                    "data-mana-component": "date-picker",
                    className: y.Nz,
                    children: [
                        (0, t.jsxs)(r.Y, {
                            className: y.wO,
                            children: [
                                (0, t.jsx)(d.J3, {
                                    children: (e) =>
                                        (0, t.jsx)(d.Eu, { segment: e, className: n()(y.mX, e.isPlaceholder && y.qf) }),
                                }),
                                (0, t.jsx)(u.$, {
                                    className: y.B7,
                                    onClick: () => I(!N),
                                    "aria-label": C.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                    children: (0, t.jsx)(x.CalendarIcon, { size: "sm", color: "currentColor" }),
                                }),
                            ],
                        }),
                        N &&
                            O &&
                            (0, t.jsx)("div", {
                                ...A(),
                                ref: M.setFloating,
                                style: D,
                                className: y.oO,
                                children: (0, t.jsx)(i.n1, {
                                    contain: !0,
                                    restoreFocus: !0,
                                    children: (0, t.jsx)(c.lG, {
                                        "aria-label": C.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                        style: R,
                                        className: y.r3,
                                        children: (0, t.jsx)(p.V, {
                                            value: l,
                                            onChange: B,
                                            minValue: o,
                                            maxValue: f,
                                            disabled: S,
                                        }),
                                    }),
                                }),
                            }),
                    ],
                }),
            }),
    });
}
