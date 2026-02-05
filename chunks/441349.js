"use strict";
n.d(t, { l: () => E });
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
    p = n(934551),
    h = n(862301),
    m = n(460890),
    g = n(25181);
function E(e) {
    let {
            value: t,
            onChange: n,
            minValue: i,
            maxValue: E,
            placeholderValue: A,
            granularity: I = "day",
            hourCycle: T,
            hideTimeZone: y = !1,
            ...S
        } = e,
        { i18n: v } = (0, m.G9)(),
        { fieldProps: C } = (0, f.n)(S),
        { disabled: b, errorMessage: N, required: R = !1 } = C,
        O = { hasError: null != N && "" !== N },
        {
            refs: D,
            floatingStyles: L,
            isOpen: w,
            setIsOpen: x,
            context: P,
            getFloatingProps: M,
            getReferenceProps: k,
        } = (0, d.u)({ matchReferenceWidth: !1, placement: "bottom-start" }),
        { isMounted: U, styles: G } = (0, d.D)(P, {
            common: (e) => {
                let { side: t } = e;
                return { transformOrigin: `${"top" === t ? "bottom" : "top"} center` };
            },
            initial: { opacity: 0.5, transform: "scaleY(0.96)" },
            duration: 100,
        }),
        V = (e) => {
            n?.(e), x(!1);
        };
    return (0, r.jsx)(f.D, {
        ...C,
        children: (e) =>
            (0, r.jsx)(h.F, {
                className: g.LF,
                validation: O,
                ref: D.setReference,
                ...k(),
                children: (0, r.jsxs)(s.lr, {
                    id: e.controlId,
                    "aria-labelledby": e.labelId,
                    "aria-describedby": e.describedById,
                    "aria-invalid": null != e.errorMessageId,
                    "aria-errormessage": e.errorMessageId,
                    value: t,
                    onChange: V,
                    isDisabled: b,
                    isRequired: R,
                    minValue: i,
                    maxValue: E,
                    placeholderValue: A,
                    granularity: I,
                    hourCycle: T,
                    hideTimeZone: y,
                    "data-mana-component": "date-picker",
                    className: g.dn,
                    children: [
                        (0, r.jsxs)(o.Y, {
                            className: g.wO,
                            children: [
                                (0, r.jsx)(l.J3, {
                                    children: (e) =>
                                        (0, r.jsx)(l.Eu, { segment: e, className: a()(g.mX, e.isPlaceholder && g.qf) }),
                                }),
                                (0, r.jsx)(u.$, {
                                    className: g.B7,
                                    onClick: () => x(!w),
                                    "aria-label": v.DATE_INPUT_OPEN_CALENDAR_LABEL,
                                    children: (0, r.jsx)(p.CalendarIcon, { size: "sm", color: "currentColor" }),
                                }),
                            ],
                        }),
                        w &&
                            U &&
                            (0, r.jsx)("div", {
                                ...M(),
                                ref: D.setFloating,
                                style: L,
                                className: g.oO,
                                children: (0, r.jsx)(c.lG, {
                                    style: G,
                                    className: g.r3,
                                    children: (0, r.jsx)(_.V, {
                                        value: t,
                                        onChange: V,
                                        minValue: i,
                                        maxValue: E,
                                        disabled: b,
                                    }),
                                }),
                            }),
                    ],
                }),
            }),
    });
}
