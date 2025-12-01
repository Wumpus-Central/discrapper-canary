n.d(t, { z: () => _ });
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
function p(e) {
    return e && e.__esModule ? e.default : e;
}
function _(e, t) {
    let n = (0, d.q)(p(i.Z), "@react-aria/calendar"),
        _ = (0, o.z)(e),
        m = (0, r.FK)(t.visibleRange.start, t.visibleRange.end, t.timeZone, !1),
        h = (0, r.FK)(t.visibleRange.start, t.visibleRange.end, t.timeZone, !0);
    (0, s.r)(() => {
        t.isFocused || (0, a.xQ)(h);
    }, [h]);
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
    let [v, S] = (0, f.useState)(!1),
        I = e.isDisabled || t.isPreviousVisibleRangeInvalid();
    I && v && (S(!1), t.setFocused(!0));
    let T = (0, c.b)({
        id: e.id,
        "aria-label": [e["aria-label"], h].filter(Boolean).join(", "),
        "aria-labelledby": e["aria-labelledby"],
    });
    return {
        calendarProps: (0, u.d)(_, T, {
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
            isDisabled: I,
            onFocusChange: S,
        },
        errorMessageProps: { id: E },
        title: m,
    };
}
