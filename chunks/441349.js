a.d(l, { l: () => y });
var t = a(627968),
    n = a(503698),
    o = a.n(n),
    i = a(13163),
    r = a(60628),
    s = a(521767),
    d = a(450902),
    u = a(650682),
    c = a(248062),
    b = a(561392),
    p = a(862019),
    m = a(720341),
    h = a(452027),
    x = a(81466),
    g = a(862301),
    f = a(460890),
    v = a(760345);
function y(e) {
    let { value: l, onChange: a, minValue: n, maxValue: y, placeholderValue: _, ...C } = e,
        { i18n: j } = (0, f.G9)(),
        { fieldProps: V } = (0, h.n)(C),
        { disabled: k, errorMessage: S, required: w = !1 } = V,
        M = { hasError: null != S && "" !== S },
        {
            refs: T,
            floatingStyles: A,
            isOpen: N,
            setIsOpen: E,
            context: D,
            getFloatingProps: I,
            getReferenceProps: L,
        } = (0, b.u)({ matchReferenceWidth: !1, placement: "bottom-start" }),
        { isMounted: R, styles: P } = (0, p.DL)(D, {
            common: (e) => {
                let { side: l } = e;
                return { transformOrigin: `${"top" === l ? "bottom" : "top"} center` };
            },
            initial: { opacity: 0.5, transform: "scaleY(0.96)" },
            duration: 100,
        }),
        O = (e) => {
            a?.(e), E(!1);
        };
    return (0, t.jsx)(h.D, {
        ...V,
        children: (e) =>
            (0, t.jsx)(g.F, {
                className: v.LF,
                validation: M,
                ref: T.setReference,
                ...L(),
                children: (0, t.jsxs)(r.lr, {
                    id: e.controlId,
                    "aria-labelledby": e.labelId,
                    "aria-describedby": e.describedById,
                    "aria-invalid": null != e.errorMessageId,
                    "aria-errormessage": e.errorMessageId,
                    value: l,
                    onChange: O,
                    isDisabled: k,
                    isRequired: w,
                    minValue: n,
                    maxValue: y,
                    placeholderValue: _,
                    granularity: "day",
                    "data-mana-component": "date-picker",
                    className: v.Nz,
                    children: [
                        (0, t.jsxs)(s.Y, {
                            className: v.wO,
                            children: [
                                (0, t.jsx)(d.J3, {
                                    children: (e) =>
                                        (0, t.jsx)(d.Eu, { segment: e, className: o()(v.mX, e.isPlaceholder && v.qf) }),
                                }),
                                (0, t.jsx)(u.$, {
                                    className: v.B7,
                                    onClick: () => E(!N),
                                    "aria-label": j.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                    children: (0, t.jsx)(x.C, { size: "sm", color: "currentColor" }),
                                }),
                            ],
                        }),
                        N &&
                            R &&
                            (0, t.jsx)("div", {
                                ...I(),
                                ref: T.setFloating,
                                style: A,
                                className: v.oO,
                                children: (0, t.jsx)(i.n1, {
                                    contain: !0,
                                    restoreFocus: !0,
                                    children: (0, t.jsx)(c.lG, {
                                        "aria-label": j.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                        style: P,
                                        className: v.r3,
                                        children: (0, t.jsx)(m.V, {
                                            value: l,
                                            onChange: O,
                                            minValue: n,
                                            maxValue: y,
                                            disabled: k,
                                        }),
                                    }),
                                }),
                            }),
                    ],
                }),
            }),
    });
}
