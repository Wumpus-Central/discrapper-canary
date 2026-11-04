var l = s(477900);
s(582128);
var n = s(503698),
    r = s.n(n),
    i = s(912295),
    c = s(393570),
    t = s(755357),
    o = s(10083),
    d = s(51340),
    m = s(372177),
    u = s(561392),
    h = s(286615),
    x = s(720341),
    j = s(452027),
    N = s(81466),
    b = s(862301),
    v = s(116711),
    E = s(341450);
s.d(
    a,
    {},
    {
        l: function (e) {
            let {
                    value: a,
                    onChange: s,
                    minValue: n,
                    maxValue: f,
                    isDateUnavailable: y,
                    placeholderValue: p,
                    granularity: _ = "day",
                    ...g
                } = e,
                { i18n: C } = (0, v.G9)(),
                { fieldProps: A } = (0, j.n)(g),
                { disabled: D, errorMessage: L, required: V = !1 } = A,
                I = null != a && y?.(a) === !0,
                P = { hasError: null != L && "" !== L },
                {
                    refs: k,
                    floatingStyles: O,
                    isOpen: R,
                    setIsOpen: F,
                    context: B,
                    getFloatingProps: T,
                    getReferenceProps: U,
                } = (0, u.u)({ matchReferenceWidth: !1, placement: "bottom-start" }),
                { isMounted: w, styles: z } = (0, h.DL)(B, {
                    common: (e) => {
                        let { side: a } = e;
                        return { transformOrigin: `${"top" === a ? "bottom" : "top"} center` };
                    },
                    initial: { opacity: 0.5, transform: "scaleY(0.96)" },
                    duration: 100,
                });
            function K(e) {
                (s?.(e), F(!1));
            }
            return (0, l.jsx)(j.D, {
                ...A,
                children: (e) =>
                    (0, l.jsx)(b.F, {
                        className: "minute" === _ ? E.XF : E.LF,
                        validation: P,
                        ref: k.setReference,
                        ...U(),
                        children: (0, l.jsxs)(c.lr, {
                            id: e.controlId,
                            "aria-labelledby": e.labelId,
                            "aria-describedby": e.describedById,
                            "aria-invalid": null != e.errorMessageId,
                            "aria-errormessage": e.errorMessageId,
                            value: a,
                            onChange: K,
                            isDisabled: D,
                            isRequired: V,
                            minValue: n,
                            maxValue: f,
                            isDateUnavailable: y,
                            isInvalid: I || void 0,
                            placeholderValue: p,
                            granularity: _,
                            "data-mana-component": "date-picker",
                            className: E.Nz,
                            children: [
                                (0, l.jsxs)(t.Y, {
                                    className: E.wO,
                                    children: [
                                        (0, l.jsx)(o.J3, {
                                            children: (e) =>
                                                (0, l.jsx)(o.Eu, {
                                                    segment: e,
                                                    className: r()(E.mX, e.isPlaceholder && E.qf),
                                                }),
                                        }),
                                        (0, l.jsx)(d.$, {
                                            className: E.B7,
                                            onClick: () => F(!R),
                                            "aria-label": C.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                            children: (0, l.jsx)(N.CalendarIcon, { size: "sm", color: "currentColor" }),
                                        }),
                                    ],
                                }),
                                R &&
                                    w &&
                                    (0, l.jsx)("div", {
                                        ...T(),
                                        ref: k.setFloating,
                                        style: O,
                                        className: E.oO,
                                        children: (0, l.jsx)(i.n1, {
                                            contain: !0,
                                            restoreFocus: !0,
                                            children: (0, l.jsx)(m.lG, {
                                                "aria-label": C.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                                style: z,
                                                className: E.r3,
                                                children: (0, l.jsx)(x.V, {
                                                    value: a,
                                                    onChange: K,
                                                    minValue: n,
                                                    maxValue: f,
                                                    isDateUnavailable: y,
                                                    disabled: D,
                                                }),
                                            }),
                                        }),
                                    }),
                            ],
                        }),
                    }),
            });
        },
    },
);
