a.d(l, { U: () => y });
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
    m = a(452027),
    h = a(81466),
    x = a(862301),
    v = a(460890),
    f = a(796033),
    g = a(760345);
function y(e) {
    let {
            value: l,
            onChange: a,
            minValue: o,
            maxValue: y,
            placeholderValue: C,
            startName: j,
            endName: V,
            fullWidth: k = !1,
            ...S
        } = e,
        { i18n: _ } = (0, v.G9)(),
        { fieldProps: w } = (0, m.n)(S),
        { disabled: T, errorMessage: M, required: A = !1 } = w,
        N = { hasError: null != M && "" !== M },
        {
            refs: E,
            floatingStyles: D,
            isOpen: L,
            setIsOpen: I,
            context: P,
            getFloatingProps: O,
            getReferenceProps: R,
        } = (0, b.u)({ matchReferenceWidth: !1, placement: "bottom-start" }),
        { isMounted: B, styles: z } = (0, p.DL)(P, {
            common: (e) => {
                let { side: l } = e;
                return { transformOrigin: `${"top" === l ? "bottom" : "top"} center` };
            },
            initial: { opacity: 0.5, transform: "scaleY(0.96)" },
            duration: 100,
        }),
        F = (e) => {
            a(e), e?.start != null && e?.end != null && I(!1);
        };
    return (0, t.jsx)(m.D, {
        ...w,
        children: (e) =>
            (0, t.jsx)(x.F, {
                className: k ? g.e2 : g.qX,
                validation: N,
                ref: E.setReference,
                ...R(),
                children: (0, t.jsxs)(r.Ur, {
                    id: e.controlId,
                    "aria-labelledby": e.labelId,
                    "aria-describedby": e.describedById,
                    "aria-invalid": null != e.errorMessageId,
                    "aria-errormessage": e.errorMessageId,
                    value: l,
                    onChange: F,
                    isDisabled: T,
                    isRequired: A,
                    minValue: o,
                    maxValue: y,
                    placeholderValue: C,
                    granularity: "day",
                    startName: j,
                    endName: V,
                    "data-mana-component": "date-range-picker",
                    className: g.Nz,
                    children: [
                        (0, t.jsxs)(s.Y, {
                            className: g.wO,
                            children: [
                                (0, t.jsx)(d.J3, {
                                    slot: "start",
                                    children: (e) =>
                                        (0, t.jsx)(d.Eu, { segment: e, className: n()(g.mX, e.isPlaceholder && g.qf) }),
                                }),
                                (0, t.jsx)("span", { className: g.me, "aria-hidden": "true", children: "→" }),
                                (0, t.jsx)(d.J3, {
                                    slot: "end",
                                    children: (e) =>
                                        (0, t.jsx)(d.Eu, { segment: e, className: n()(g.mX, e.isPlaceholder && g.qf) }),
                                }),
                                (0, t.jsx)(u.$, {
                                    className: g.B7,
                                    onClick: () => I(!L),
                                    "aria-label": _.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                    children: (0, t.jsx)(h.C, { size: "sm", color: "currentColor" }),
                                }),
                            ],
                        }),
                        L &&
                            B &&
                            (0, t.jsx)("div", {
                                ...O(),
                                ref: E.setFloating,
                                style: D,
                                className: g.oO,
                                children: (0, t.jsx)(i.n1, {
                                    contain: !0,
                                    restoreFocus: !0,
                                    children: (0, t.jsx)(c.lG, {
                                        "aria-label": _.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                        style: z,
                                        className: g.r3,
                                        children: (0, t.jsx)(f._, {
                                            value: l,
                                            onChange: F,
                                            minValue: o,
                                            maxValue: y,
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
