s.d(a, { l: () => f });
var l = s(477900),
    r = s(503698),
    n = s.n(r),
    i = s(421114),
    t = s(608459),
    c = s(719659),
    o = s(711846),
    d = s(538790),
    m = s(794655),
    u = s(561392),
    x = s(499957),
    h = s(720341),
    j = s(452027),
    N = s(81466),
    b = s(862301),
    v = s(460890),
    E = s(341450);
function f(e) {
    let { value: a, onChange: s, minValue: r, maxValue: f, placeholderValue: p, granularity: _ = "day", ...g } = e,
        { i18n: C } = (0, v.G9)(),
        { fieldProps: A } = (0, j.n)(g),
        { disabled: y, errorMessage: L, required: V = !1 } = A,
        D = { hasError: null != L && "" !== L },
        {
            refs: I,
            floatingStyles: P,
            isOpen: k,
            setIsOpen: O,
            context: R,
            getFloatingProps: F,
            getReferenceProps: B,
        } = (0, u.u)({ matchReferenceWidth: !1, placement: "bottom-start" }),
        { isMounted: T, styles: w } = (0, x.DL)(R, {
            common: (e) => {
                let { side: a } = e;
                return { transformOrigin: `${"top" === a ? "bottom" : "top"} center` };
            },
            initial: { opacity: 0.5, transform: "scaleY(0.96)" },
            duration: 100,
        });
    function z(e) {
        s?.(e), O(!1);
    }
    return (0, l.jsx)(j.D, {
        ...A,
        children: (e) =>
            (0, l.jsx)(b.F, {
                className: "minute" === _ ? E.XF : E.LF,
                validation: D,
                ref: I.setReference,
                ...B(),
                children: (0, l.jsxs)(t.lr, {
                    id: e.controlId,
                    "aria-labelledby": e.labelId,
                    "aria-describedby": e.describedById,
                    "aria-invalid": null != e.errorMessageId,
                    "aria-errormessage": e.errorMessageId,
                    value: a,
                    onChange: z,
                    isDisabled: y,
                    isRequired: V,
                    minValue: r,
                    maxValue: f,
                    placeholderValue: p,
                    granularity: _,
                    "data-mana-component": "date-picker",
                    className: E.Nz,
                    children: [
                        (0, l.jsxs)(c.Y, {
                            className: E.wO,
                            children: [
                                (0, l.jsx)(o.J3, {
                                    children: (e) =>
                                        (0, l.jsx)(o.Eu, { segment: e, className: n()(E.mX, e.isPlaceholder && E.qf) }),
                                }),
                                (0, l.jsx)(d.$, {
                                    className: E.B7,
                                    onClick: () => O(!k),
                                    "aria-label": C.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                    children: (0, l.jsx)(N.CalendarIcon, { size: "sm", color: "currentColor" }),
                                }),
                            ],
                        }),
                        k &&
                            T &&
                            (0, l.jsx)("div", {
                                ...F(),
                                ref: I.setFloating,
                                style: P,
                                className: E.oO,
                                children: (0, l.jsx)(i.n1, {
                                    contain: !0,
                                    restoreFocus: !0,
                                    children: (0, l.jsx)(m.lG, {
                                        "aria-label": C.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                        style: w,
                                        className: E.r3,
                                        children: (0, l.jsx)(h.V, {
                                            value: a,
                                            onChange: z,
                                            minValue: r,
                                            maxValue: f,
                                            disabled: y,
                                        }),
                                    }),
                                }),
                            }),
                    ],
                }),
            }),
    });
}
