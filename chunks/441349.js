a.d(l, { l: () => y });
var t = a(627968),
    o = a(503698),
    n = a.n(o),
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
    v = a(862301),
    f = a(460890),
    g = a(760345);
function y(e) {
    let { value: l, onChange: a, minValue: o, maxValue: y, placeholderValue: C, ...j } = e,
        { i18n: V } = (0, f.G9)(),
        { fieldProps: k } = (0, h.n)(j),
        { disabled: S, errorMessage: _, required: w = !1 } = k,
        T = { hasError: null != _ && "" !== _ },
        {
            refs: M,
            floatingStyles: A,
            isOpen: N,
            setIsOpen: E,
            context: D,
            getFloatingProps: L,
            getReferenceProps: I,
        } = (0, b.u)({ matchReferenceWidth: !1, placement: "bottom-start" }),
        { isMounted: P, styles: O } = (0, p.DL)(D, {
            common: (e) => {
                let { side: l } = e;
                return { transformOrigin: `${"top" === l ? "bottom" : "top"} center` };
            },
            initial: { opacity: 0.5, transform: "scaleY(0.96)" },
            duration: 100,
        }),
        R = (e) => {
            a?.(e), E(!1);
        };
    return (0, t.jsx)(h.D, {
        ...k,
        children: (e) =>
            (0, t.jsx)(v.F, {
                className: g.LF,
                validation: T,
                ref: M.setReference,
                ...I(),
                children: (0, t.jsxs)(r.lr, {
                    id: e.controlId,
                    "aria-labelledby": e.labelId,
                    "aria-describedby": e.describedById,
                    "aria-invalid": null != e.errorMessageId,
                    "aria-errormessage": e.errorMessageId,
                    value: l,
                    onChange: R,
                    isDisabled: S,
                    isRequired: w,
                    minValue: o,
                    maxValue: y,
                    placeholderValue: C,
                    granularity: "day",
                    "data-mana-component": "date-picker",
                    className: g.Nz,
                    children: [
                        (0, t.jsxs)(s.Y, {
                            className: g.wO,
                            children: [
                                (0, t.jsx)(d.J3, {
                                    children: (e) =>
                                        (0, t.jsx)(d.Eu, { segment: e, className: n()(g.mX, e.isPlaceholder && g.qf) }),
                                }),
                                (0, t.jsx)(u.$, {
                                    className: g.B7,
                                    onClick: () => E(!N),
                                    "aria-label": V.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                    children: (0, t.jsx)(x.C, { size: "sm", color: "currentColor" }),
                                }),
                            ],
                        }),
                        N &&
                            P &&
                            (0, t.jsx)("div", {
                                ...L(),
                                ref: M.setFloating,
                                style: A,
                                className: g.oO,
                                children: (0, t.jsx)(i.n1, {
                                    contain: !0,
                                    restoreFocus: !0,
                                    children: (0, t.jsx)(c.lG, {
                                        "aria-label": V.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                        style: O,
                                        className: g.r3,
                                        children: (0, t.jsx)(m.V, {
                                            value: l,
                                            onChange: R,
                                            minValue: o,
                                            maxValue: y,
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
