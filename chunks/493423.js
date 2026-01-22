n.d(t, { $: () => _ });
var r = n(457312),
    i = n(701366),
    a = n(217512),
    s = n(290424),
    o = n(98909),
    l = n(723906),
    c = n(48284),
    u = n(803082),
    d = n(47276),
    f = n(64700);
function p(e) {
    return e && e.__esModule ? e.default : e;
}
function _(e, t) {
    let n = (0, d.o)(p(i.A), "@react-aria/calendar"),
        _ = (0, s.$)(e),
        h = (0, r.ZR)(t.visibleRange.start, t.visibleRange.end, t.timeZone, !1),
        m = (0, r.ZR)(t.visibleRange.start, t.visibleRange.end, t.timeZone, !0);
    (0, o.w)(() => {
        t.isFocused || (0, a.iP)(m);
    }, [m]);
    let g = (0, r.ZI)(t);
    (0, o.w)(() => {
        g && (0, a.iP)(g, "polite", 4000);
    }, [g]);
    let E = (0, l.X1)([!!e.errorMessage, e.isInvalid, e.validationState]);
    r.OX.set(t, {
        ariaLabel: e["aria-label"],
        ariaLabelledBy: e["aria-labelledby"],
        errorMessageId: E,
        selectedDateDescription: g,
    });
    let [b, y] = (0, f.useState)(!1),
        O = e.isDisabled || t.isNextVisibleRangeInvalid();
    O && b && (y(!1), t.setFocused(!0));
    let [A, v] = (0, f.useState)(!1),
        S = e.isDisabled || t.isPreviousVisibleRangeInvalid();
    S && A && (v(!1), t.setFocused(!0));
    let I = (0, c.b)({
        id: e.id,
        "aria-label": [e["aria-label"], m].filter(Boolean).join(", "),
        "aria-labelledby": e["aria-labelledby"],
    });
    return {
        calendarProps: (0, u.v)(_, I, {
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
            isDisabled: S,
            onFocusChange: v,
        },
        errorMessageProps: { id: E },
        title: h,
    };
}
