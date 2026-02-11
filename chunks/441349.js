"use strict";
n.d(t, { l: () => A });
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    s = n(60628),
    o = n(521767),
    l = n(450902),
    u = n(650682),
    c = n(248062),
    d = n(561392),
    _ = n(720341),
    f = n(452027),
    h = n(934551),
    p = n(862301),
    g = n(460890),
    E = n(944787);
function A(e) {
    let {
            value: t,
            onChange: n,
            minValue: i,
            maxValue: A,
            placeholderValue: I,
            granularity: T = "day",
            hourCycle: y,
            hideTimeZone: S = !1,
            ...v
        } = e,
        { i18n: C } = (0, g.G9)(),
        { fieldProps: b } = (0, f.n)(v),
        { disabled: N, errorMessage: R, required: O = !1 } = b,
        D = { hasError: null != R && "" !== R },
        {
            refs: L,
            floatingStyles: w,
            isOpen: x,
            setIsOpen: P,
            context: M,
            getFloatingProps: k,
            getReferenceProps: U,
        } = (0, d.u)({ matchReferenceWidth: !1, placement: "bottom-start" }),
        { isMounted: G, styles: F } = (0, d.D)(M, {
            common: (e) => {
                let { side: t } = e;
                return { transformOrigin: `${"top" === t ? "bottom" : "top"} center` };
            },
            initial: { opacity: 0.5, transform: "scaleY(0.96)" },
            duration: 100,
        }),
        V = (e) => {
            n?.(e), P(!1);
        };
    return (0, r.jsx)(f.D, {
        ...b,
        children: (e) =>
            (0, r.jsx)(p.F, {
                className: E.LF,
                validation: D,
                ref: L.setReference,
                ...U(),
                children: (0, r.jsxs)(s.lr, {
                    id: e.controlId,
                    "aria-labelledby": e.labelId,
                    "aria-describedby": e.describedById,
                    "aria-invalid": null != e.errorMessageId,
                    "aria-errormessage": e.errorMessageId,
                    value: t,
                    onChange: V,
                    isDisabled: N,
                    isRequired: O,
                    minValue: i,
                    maxValue: A,
                    placeholderValue: I,
                    granularity: T,
                    hourCycle: y,
                    hideTimeZone: S,
                    "data-mana-component": "date-picker",
                    className: E.dn,
                    children: [
                        (0, r.jsxs)(o.Y, {
                            className: E.wO,
                            children: [
                                (0, r.jsx)(l.J3, {
                                    children: (e) =>
                                        (0, r.jsx)(l.Eu, { segment: e, className: a()(E.mX, e.isPlaceholder && E.qf) }),
                                }),
                                (0, r.jsx)(u.$, {
                                    className: E.B7,
                                    onClick: () => P(!x),
                                    "aria-label": C.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                    children: (0, r.jsx)(h.CalendarIcon, { size: "sm", color: "currentColor" }),
                                }),
                            ],
                        }),
                        x &&
                            G &&
                            (0, r.jsx)("div", {
                                ...k(),
                                ref: L.setFloating,
                                style: w,
                                className: E.oO,
                                children: (0, r.jsx)(c.lG, {
                                    style: F,
                                    className: E.r3,
                                    children: (0, r.jsx)(_.V, {
                                        value: t,
                                        onChange: V,
                                        minValue: i,
                                        maxValue: A,
                                        disabled: N,
                                    }),
                                }),
                            }),
                    ],
                }),
            }),
    });
}
