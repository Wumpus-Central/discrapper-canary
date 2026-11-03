s.d(a, { l: () => f });
var l = s(477900),
    r = s(503698),
    n = s.n(r),
    i = s(610138),
    c = s(416494),
    t = s(755357),
    o = s(498607),
    d = s(51340),
    m = s(434119),
    u = s(561392),
    h = s(499957),
    x = s(720341),
    j = s(452027),
    N = s(81466),
    b = s(862301),
    v = s(432816),
    E = s(341450);
function f(e) {
    let { value: a, onChange: s, minValue: r, maxValue: f, placeholderValue: y, granularity: p = "day", ..._ } = e,
        { i18n: g } = (0, v.G9)(),
        { fieldProps: C } = (0, j.n)(_),
        { disabled: A, errorMessage: L, required: V = !1 } = C,
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
        { isMounted: T, styles: w } = (0, h.DL)(R, {
            common: (e) => {
                let { side: a } = e;
                return { transformOrigin: `${"top" === a ? "bottom" : "top"} center` };
            },
            initial: { opacity: 0.5, transform: "scaleY(0.96)" },
            duration: 100,
        });
    function z(e) {
        (s?.(e), O(!1));
    }
    return (0, l.jsx)(j.D, {
        ...C,
        children: (e) =>
            (0, l.jsx)(b.F, {
                className: "minute" === p ? E.XF : E.LF,
                validation: D,
                ref: I.setReference,
                ...B(),
                children: (0, l.jsxs)(c.lr, {
                    id: e.controlId,
                    "aria-labelledby": e.labelId,
                    "aria-describedby": e.describedById,
                    "aria-invalid": null != e.errorMessageId,
                    "aria-errormessage": e.errorMessageId,
                    value: a,
                    onChange: z,
                    isDisabled: A,
                    isRequired: V,
                    minValue: r,
                    maxValue: f,
                    placeholderValue: y,
                    granularity: p,
                    "data-mana-component": "date-picker",
                    className: E.Nz,
                    children: [
                        (0, l.jsxs)(t.Y, {
                            className: E.wO,
                            children: [
                                (0, l.jsx)(o.J3, {
                                    children: (e) =>
                                        (0, l.jsx)(o.Eu, { segment: e, className: n()(E.mX, e.isPlaceholder && E.qf) }),
                                }),
                                (0, l.jsx)(d.$, {
                                    className: E.B7,
                                    onClick: () => O(!k),
                                    "aria-label": g.DATE_INPUT_OPEN_CALENDAR_LABEL,
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
                                        "aria-label": g.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                        style: w,
                                        className: E.r3,
                                        children: (0, l.jsx)(x.V, {
                                            value: a,
                                            onChange: z,
                                            minValue: r,
                                            maxValue: f,
                                            disabled: A,
                                        }),
                                    }),
                                }),
                            }),
                    ],
                }),
            }),
    });
}
