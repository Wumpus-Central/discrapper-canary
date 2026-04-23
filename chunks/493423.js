t.d(a, { $: () => h });
var r = t(457312),
    n = t(701366),
    i = t(217512),
    l = t(290424),
    o = t(98909),
    u = t(723906),
    s = t(48284),
    d = t(803082),
    c = t(47276),
    m = t(64700);
function h(e, a) {
    var t;
    let h = (0, c.o)((t = n.A) && t.__esModule ? t.default : t, "@react-aria/calendar"),
        y = (0, l.$)(e),
        D = (0, r.ZR)(a.visibleRange.start, a.visibleRange.end, a.timeZone, !1),
        p = (0, r.ZR)(a.visibleRange.start, a.visibleRange.end, a.timeZone, !0);
    (0, o.w)(() => {
        a.isFocused || (0, i.iP)(p);
    }, [p]);
    let g = (0, r.ZI)(a);
    (0, o.w)(() => {
        g && (0, i.iP)(g, "polite", 4e3);
    }, [g]);
    let v = (0, u.X1)([!!e.errorMessage, e.isInvalid, e.validationState]);
    r.OX.set(a, {
        ariaLabel: e["aria-label"],
        ariaLabelledBy: e["aria-labelledby"],
        errorMessageId: v,
        selectedDateDescription: g,
    });
    let [f, b] = (0, m.useState)(!1),
        A = e.isDisabled || a.isNextVisibleRangeInvalid();
    A && f && (b(!1), a.setFocused(!0));
    let [R, $] = (0, m.useState)(!1),
        w = e.isDisabled || a.isPreviousVisibleRangeInvalid();
    w && R && ($(!1), a.setFocused(!0));
    let P = (0, s.b)({
        id: e.id,
        "aria-label": [e["aria-label"], p].filter(Boolean).join(", "),
        "aria-labelledby": e["aria-labelledby"],
    });
    return {
        calendarProps: (0, d.v)(y, P, {
            role: "application",
            "aria-details": e["aria-details"] || void 0,
            "aria-describedby": e["aria-describedby"] || void 0,
        }),
        nextButtonProps: {
            onPress: () => a.focusNextPage(),
            "aria-label": h.format("next"),
            isDisabled: A,
            onFocusChange: b,
        },
        prevButtonProps: {
            onPress: () => a.focusPreviousPage(),
            "aria-label": h.format("previous"),
            isDisabled: w,
            onFocusChange: $,
        },
        errorMessageProps: { id: v },
        title: D,
    };
}
