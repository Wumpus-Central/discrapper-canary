a.d(l, { U: () => f });
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
    p = a(452027),
    m = a(934551),
    x = a(862301),
    h = a(460890),
    v = a(796033),
    y = a(606086);
function f(e) {
    let {
            value: l,
            onChange: a,
            minValue: o,
            maxValue: f,
            placeholderValue: g,
            startName: V,
            endName: C,
            fullWidth: j = !1,
            ...S
        } = e,
        { i18n: k } = (0, h.G9)(),
        { fieldProps: w } = (0, p.n)(S),
        { disabled: T, errorMessage: M, required: D = !1 } = w,
        N = { hasError: null != M && "" !== M },
        {
            refs: I,
            floatingStyles: E,
            isOpen: A,
            setIsOpen: L,
            context: O,
            getFloatingProps: R,
            getReferenceProps: B,
        } = (0, b.u)({ matchReferenceWidth: !1, placement: "bottom-start" }),
        { isMounted: _, styles: P } = (0, b.D)(O, {
            common: (e) => {
                let { side: l } = e;
                return { transformOrigin: `${"top" === l ? "bottom" : "top"} center` };
            },
            initial: { opacity: 0.5, transform: "scaleY(0.96)" },
            duration: 100,
        }),
        z = (e) => {
            a(e), e?.start != null && e?.end != null && L(!1);
        };
    return (0, t.jsx)(p.D, {
        ...w,
        children: (e) =>
            (0, t.jsx)(x.F, {
                className: j ? y.e2 : y.qX,
                validation: N,
                ref: I.setReference,
                ...B(),
                children: (0, t.jsxs)(s.Ur, {
                    id: e.controlId,
                    "aria-labelledby": e.labelId,
                    "aria-describedby": e.describedById,
                    "aria-invalid": null != e.errorMessageId,
                    "aria-errormessage": e.errorMessageId,
                    value: l,
                    onChange: z,
                    isDisabled: T,
                    isRequired: D,
                    minValue: o,
                    maxValue: f,
                    placeholderValue: g,
                    granularity: "day",
                    startName: V,
                    endName: C,
                    "data-mana-component": "date-range-picker",
                    className: y.Nz,
                    children: [
                        (0, t.jsxs)(r.Y, {
                            className: y.wO,
                            children: [
                                (0, t.jsx)(d.J3, {
                                    slot: "start",
                                    children: (e) =>
                                        (0, t.jsx)(d.Eu, { segment: e, className: n()(y.mX, e.isPlaceholder && y.qf) }),
                                }),
                                (0, t.jsx)("span", { className: y.me, "aria-hidden": "true", children: "→" }),
                                (0, t.jsx)(d.J3, {
                                    slot: "end",
                                    children: (e) =>
                                        (0, t.jsx)(d.Eu, { segment: e, className: n()(y.mX, e.isPlaceholder && y.qf) }),
                                }),
                                (0, t.jsx)(u.$, {
                                    className: y.B7,
                                    onClick: () => L(!A),
                                    "aria-label": k.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                    children: (0, t.jsx)(m.CalendarIcon, { size: "sm", color: "currentColor" }),
                                }),
                            ],
                        }),
                        A &&
                            _ &&
                            (0, t.jsx)("div", {
                                ...R(),
                                ref: I.setFloating,
                                style: E,
                                className: y.oO,
                                children: (0, t.jsx)(i.n1, {
                                    contain: !0,
                                    restoreFocus: !0,
                                    children: (0, t.jsx)(c.lG, {
                                        "aria-label": k.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                        style: P,
                                        className: y.r3,
                                        children: (0, t.jsx)(v._, {
                                            value: l,
                                            onChange: z,
                                            minValue: o,
                                            maxValue: f,
                                            isDisabled: T,
                                            visibleMonths: 2,
                                        }),
                                    }),
                                }),
                            }),
                    ],
                }),
            }),
    });
}
