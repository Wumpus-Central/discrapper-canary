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
    y = a(316128);
function f(e) {
    let { value: l, onChange: a, minValue: o, maxValue: f, placeholderValue: g, startName: V, endName: C, ...j } = e,
        { i18n: S } = (0, h.G9)(),
        { fieldProps: k } = (0, p.n)(j),
        { disabled: w, errorMessage: T, required: M = !1 } = k,
        D = { hasError: null != T && "" !== T },
        {
            refs: N,
            floatingStyles: I,
            isOpen: E,
            setIsOpen: A,
            context: L,
            getFloatingProps: O,
            getReferenceProps: R,
        } = (0, b.u)({ matchReferenceWidth: !1, placement: "bottom-start" }),
        { isMounted: B, styles: P } = (0, b.D)(L, {
            common: (e) => {
                let { side: l } = e;
                return { transformOrigin: `${"top" === l ? "bottom" : "top"} center` };
            },
            initial: { opacity: 0.5, transform: "scaleY(0.96)" },
            duration: 100,
        }),
        _ = (e) => {
            a(e), e?.start != null && e?.end != null && A(!1);
        };
    return (0, t.jsx)(p.D, {
        ...k,
        children: (e) =>
            (0, t.jsx)(x.F, {
                className: y.qX,
                validation: D,
                ref: N.setReference,
                ...R(),
                children: (0, t.jsxs)(s.Ur, {
                    id: e.controlId,
                    "aria-labelledby": e.labelId,
                    "aria-describedby": e.describedById,
                    "aria-invalid": null != e.errorMessageId,
                    "aria-errormessage": e.errorMessageId,
                    value: l,
                    onChange: _,
                    isDisabled: w,
                    isRequired: M,
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
                                    onClick: () => A(!E),
                                    "aria-label": S.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                    children: (0, t.jsx)(m.CalendarIcon, { size: "sm", color: "currentColor" }),
                                }),
                            ],
                        }),
                        E &&
                            B &&
                            (0, t.jsx)("div", {
                                ...O(),
                                ref: N.setFloating,
                                style: I,
                                className: y.oO,
                                children: (0, t.jsx)(i.n1, {
                                    contain: !0,
                                    restoreFocus: !0,
                                    children: (0, t.jsx)(c.lG, {
                                        "aria-label": S.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                        style: P,
                                        className: y.r3,
                                        children: (0, t.jsx)(v._, {
                                            value: l,
                                            onChange: _,
                                            minValue: o,
                                            maxValue: f,
                                            isDisabled: w,
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
