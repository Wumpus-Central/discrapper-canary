a.d(l, { l: () => y });
var t = a(627968),
    o = a(503698),
    n = a.n(o),
    i = a(60628),
    s = a(521767),
    r = a(450902),
    d = a(650682),
    u = a(248062),
    c = a(561392),
    b = a(720341),
    p = a(452027),
    m = a(934551),
    x = a(862301),
    v = a(460890),
    h = a(944787);
function y(e) {
    let {
            value: l,
            onChange: a,
            minValue: o,
            maxValue: y,
            placeholderValue: f,
            granularity: g = "day",
            hourCycle: V,
            hideTimeZone: C = !1,
            ...S
        } = e,
        { i18n: j } = (0, v.G9)(),
        { fieldProps: k } = (0, p.n)(S),
        { disabled: w, errorMessage: T, required: M = !1 } = k,
        D = { hasError: null != T && "" !== T },
        {
            refs: I,
            floatingStyles: A,
            isOpen: L,
            setIsOpen: B,
            context: O,
            getFloatingProps: N,
            getReferenceProps: E,
        } = (0, c.u)({ matchReferenceWidth: !1, placement: "bottom-start" }),
        { isMounted: R, styles: P } = (0, c.D)(O, {
            common: (e) => {
                let { side: l } = e;
                return { transformOrigin: `${"top" === l ? "bottom" : "top"} center` };
            },
            initial: { opacity: 0.5, transform: "scaleY(0.96)" },
            duration: 100,
        }),
        z = (e) => {
            a?.(e), B(!1);
        };
    return (0, t.jsx)(p.D, {
        ...k,
        children: (e) =>
            (0, t.jsx)(x.F, {
                className: h.LF,
                validation: D,
                ref: I.setReference,
                ...E(),
                children: (0, t.jsxs)(i.lr, {
                    id: e.controlId,
                    "aria-labelledby": e.labelId,
                    "aria-describedby": e.describedById,
                    "aria-invalid": null != e.errorMessageId,
                    "aria-errormessage": e.errorMessageId,
                    value: l,
                    onChange: z,
                    isDisabled: w,
                    isRequired: M,
                    minValue: o,
                    maxValue: y,
                    placeholderValue: f,
                    granularity: g,
                    hourCycle: V,
                    hideTimeZone: C,
                    "data-mana-component": "date-picker",
                    className: h.dn,
                    children: [
                        (0, t.jsxs)(s.Y, {
                            className: h.wO,
                            children: [
                                (0, t.jsx)(r.J3, {
                                    children: (e) =>
                                        (0, t.jsx)(r.Eu, { segment: e, className: n()(h.mX, e.isPlaceholder && h.qf) }),
                                }),
                                (0, t.jsx)(d.$, {
                                    className: h.B7,
                                    onClick: () => B(!L),
                                    "aria-label": j.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                    children: (0, t.jsx)(m.CalendarIcon, { size: "sm", color: "currentColor" }),
                                }),
                            ],
                        }),
                        L &&
                            R &&
                            (0, t.jsx)("div", {
                                ...N(),
                                ref: I.setFloating,
                                style: A,
                                className: h.oO,
                                children: (0, t.jsx)(u.lG, {
                                    style: P,
                                    className: h.r3,
                                    children: (0, t.jsx)(b.V, {
                                        value: l,
                                        onChange: z,
                                        minValue: o,
                                        maxValue: y,
                                        disabled: w,
                                    }),
                                }),
                            }),
                    ],
                }),
            }),
    });
}
