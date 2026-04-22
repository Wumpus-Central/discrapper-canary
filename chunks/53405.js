a.d(l, { U: () => y });
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
    m = a(452027),
    h = a(81466),
    x = a(862301),
    g = a(460890),
    f = a(796033),
    v = a(760345);
function y(e) {
    let {
            value: l,
            onChange: a,
            minValue: n,
            maxValue: y,
            placeholderValue: _,
            startName: C,
            endName: j,
            fullWidth: V = !1,
            ...k
        } = e,
        { i18n: S } = (0, g.G9)(),
        { fieldProps: w } = (0, m.n)(k),
        { disabled: M, errorMessage: T, required: A = !1 } = w,
        N = { hasError: null != T && "" !== T },
        {
            refs: E,
            floatingStyles: D,
            isOpen: I,
            setIsOpen: L,
            context: R,
            getFloatingProps: P,
            getReferenceProps: O,
        } = (0, b.u)({ matchReferenceWidth: !1, placement: "bottom-start" }),
        { isMounted: B, styles: z } = (0, p.DL)(R, {
            common: (e) => {
                let { side: l } = e;
                return { transformOrigin: `${"top" === l ? "bottom" : "top"} center` };
            },
            initial: { opacity: 0.5, transform: "scaleY(0.96)" },
            duration: 100,
        }),
        F = (e) => {
            a(e), e?.start != null && e?.end != null && L(!1);
        };
    return (0, t.jsx)(m.D, {
        ...w,
        children: (e) =>
            (0, t.jsx)(x.F, {
                className: V ? v.e2 : v.qX,
                validation: N,
                ref: E.setReference,
                ...O(),
                children: (0, t.jsxs)(r.Ur, {
                    id: e.controlId,
                    "aria-labelledby": e.labelId,
                    "aria-describedby": e.describedById,
                    "aria-invalid": null != e.errorMessageId,
                    "aria-errormessage": e.errorMessageId,
                    value: l,
                    onChange: F,
                    isDisabled: M,
                    isRequired: A,
                    minValue: n,
                    maxValue: y,
                    placeholderValue: _,
                    granularity: "day",
                    startName: C,
                    endName: j,
                    "data-mana-component": "date-range-picker",
                    className: v.Nz,
                    children: [
                        (0, t.jsxs)(s.Y, {
                            className: v.wO,
                            children: [
                                (0, t.jsx)(d.J3, {
                                    slot: "start",
                                    children: (e) =>
                                        (0, t.jsx)(d.Eu, { segment: e, className: o()(v.mX, e.isPlaceholder && v.qf) }),
                                }),
                                (0, t.jsx)("span", { className: v.me, "aria-hidden": "true", children: "→" }),
                                (0, t.jsx)(d.J3, {
                                    slot: "end",
                                    children: (e) =>
                                        (0, t.jsx)(d.Eu, { segment: e, className: o()(v.mX, e.isPlaceholder && v.qf) }),
                                }),
                                (0, t.jsx)(u.$, {
                                    className: v.B7,
                                    onClick: () => L(!I),
                                    "aria-label": S.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                    children: (0, t.jsx)(h.C, { size: "sm", color: "currentColor" }),
                                }),
                            ],
                        }),
                        I &&
                            B &&
                            (0, t.jsx)("div", {
                                ...P(),
                                ref: E.setFloating,
                                style: D,
                                className: v.oO,
                                children: (0, t.jsx)(i.n1, {
                                    contain: !0,
                                    restoreFocus: !0,
                                    children: (0, t.jsx)(c.lG, {
                                        "aria-label": S.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                        style: z,
                                        className: v.r3,
                                        children: (0, t.jsx)(f._, {
                                            value: l,
                                            onChange: F,
                                            minValue: n,
                                            maxValue: y,
                                            isDisabled: M,
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
