n.d(t, { z: () => p });
var r = n(948932),
    i = n(177783),
    a = n(873505),
    o = n(880016),
    s = n(983977),
    l = n(752689),
    c = n(951726),
    u = n(158821),
    d = n(218769),
    f = n(473749);
function _(e) {
    return e && e.__esModule ? e.default : e;
}
function p(e, t) {
    let n = (0, d.q)(_(i.Z), "@react-aria/calendar"),
        p = (0, o.z)(e),
        h = (0, r.FK)(t.visibleRange.start, t.visibleRange.end, t.timeZone, !1),
        m = (0, r.FK)(t.visibleRange.start, t.visibleRange.end, t.timeZone, !0);
    (0, s.r)(() => {
        t.isFocused || (0, a.xQ)(m);
    }, [m]);
    let g = (0, r.So)(t);
    (0, s.r)(() => {
        g && (0, a.xQ)(g, "polite", 4000);
    }, [g]);
    let E = (0, l.mp)([!!e.errorMessage, e.isInvalid, e.validationState]);
    r.Lh.set(t, {
        ariaLabel: e["aria-label"],
        ariaLabelledBy: e["aria-labelledby"],
        errorMessageId: E,
        selectedDateDescription: g,
    });
    let [b, y] = (0, f.useState)(!1),
        O = e.isDisabled || t.isNextVisibleRangeInvalid();
    O && b && (y(!1), t.setFocused(!0));
    let [v, I] = (0, f.useState)(!1),
        T = e.isDisabled || t.isPreviousVisibleRangeInvalid();
    T && v && (I(!1), t.setFocused(!0));
    let S = (0, c.b)({
        id: e.id,
        "aria-label": [e["aria-label"], m].filter(Boolean).join(", "),
        "aria-labelledby": e["aria-labelledby"],
    });
    return {
        calendarProps: (0, u.d)(p, S, {
            role: "application",
            "aria-details": e["aria-details"] || void 0,
            "aria-describedby": e["aria-describedby"] || void 0,
        }),
        nextButtonProps: {
            onPress: () => t.focusNextPage(),
            "aria-label": n.format("next"),
            isDisabled: O,
            onFocusChange: y,
        },
        prevButtonProps: {
            onPress: () => t.focusPreviousPage(),
            "aria-label": n.format("previous"),
            isDisabled: T,
            onFocusChange: I,
        },
        errorMessageProps: { id: E },
        title: h,
    };
}
