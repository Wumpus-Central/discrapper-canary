"use strict";
n.d(t, { $: () => p });
var r = n(457312),
    i = n(701366),
    a = n(217512),
    s = n(290424),
    o = n(98909),
    l = n(723906),
    u = n(48284),
    c = n(803082),
    d = n(47276),
    _ = n(64700);
function f(e) {
    return e && e.__esModule ? e.default : e;
}
function p(e, t) {
    let n = (0, d.o)(f(i.A), "@react-aria/calendar"),
        p = (0, s.$)(e),
        h = (0, r.ZR)(t.visibleRange.start, t.visibleRange.end, t.timeZone, !1),
        m = (0, r.ZR)(t.visibleRange.start, t.visibleRange.end, t.timeZone, !0);
    (0, o.w)(() => {
        t.isFocused || (0, a.iP)(m);
    }, [m]);
    let g = (0, r.ZI)(t);
    (0, o.w)(() => {
        g && (0, a.iP)(g, "polite", 4e3);
    }, [g]);
    let E = (0, l.X1)([!!e.errorMessage, e.isInvalid, e.validationState]);
    r.OX.set(t, {
        ariaLabel: e["aria-label"],
        ariaLabelledBy: e["aria-labelledby"],
        errorMessageId: E,
        selectedDateDescription: g,
    });
    let [A, I] = (0, _.useState)(!1),
        T = e.isDisabled || t.isNextVisibleRangeInvalid();
    T && A && (I(!1), t.setFocused(!0));
    let [y, S] = (0, _.useState)(!1),
        v = e.isDisabled || t.isPreviousVisibleRangeInvalid();
    v && y && (S(!1), t.setFocused(!0));
    let C = (0, u.b)({
        id: e.id,
        "aria-label": [e["aria-label"], m].filter(Boolean).join(", "),
        "aria-labelledby": e["aria-labelledby"],
    });
    return {
        calendarProps: (0, c.v)(p, C, {
            role: "application",
            "aria-details": e["aria-details"] || void 0,
            "aria-describedby": e["aria-describedby"] || void 0,
        }),
        nextButtonProps: {
            onPress: () => t.focusNextPage(),
            "aria-label": n.format("next"),
            isDisabled: T,
            onFocusChange: I,
        },
        prevButtonProps: {
            onPress: () => t.focusPreviousPage(),
            "aria-label": n.format("previous"),
            isDisabled: v,
            onFocusChange: S,
        },
        errorMessageProps: { id: E },
        title: h,
    };
}
