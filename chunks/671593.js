t.d(a, { z: () => D });
var u = t(49603),
    n = t(580560),
    r = t(873505),
    i = t(735437),
    o = t(765112),
    l = t(677061),
    s = t(864019),
    d = t(43341),
    c = t(970185),
    m = t(647438);
function D(e, a) {
    var t;
    let D = (0, c.q)((t = n.Z) && t.__esModule ? t.default : t, "@react-aria/calendar"),
        h = (0, i.z)(e),
        f = (0, u.FK)(a.visibleRange.start, a.visibleRange.end, a.timeZone, !1),
        y = (0, u.FK)(a.visibleRange.start, a.visibleRange.end, a.timeZone, !0);
    (0, o.r)(() => {
        a.isFocused || (0, r.xQ)(y);
    }, [y]);
    let p = (0, u.So)(a);
    (0, o.r)(() => {
        p && (0, r.xQ)(p, "polite", 4000);
    }, [p]);
    let g = (0, l.mp)([!!e.errorMessage, e.isInvalid, e.validationState]);
    u.Lh.set(a, {
        ariaLabel: e["aria-label"],
        ariaLabelledBy: e["aria-labelledby"],
        errorMessageId: g,
        selectedDateDescription: p,
    });
    let [v, b] = (0, m.useState)(!1),
        C = e.isDisabled || a.isNextVisibleRangeInvalid();
    C && v && (b(!1), a.setFocused(!0));
    let [x, B] = (0, m.useState)(!1),
        E = e.isDisabled || a.isPreviousVisibleRangeInvalid();
    E && x && (B(!1), a.setFocused(!0));
    let F = (0, s.b)({
        id: e.id,
        "aria-label": [e["aria-label"], y].filter(Boolean).join(", "),
        "aria-labelledby": e["aria-labelledby"],
    });
    return {
        calendarProps: (0, d.d)(h, F, {
            role: "application",
            "aria-details": e["aria-details"] || void 0,
            "aria-describedby": e["aria-describedby"] || void 0,
        }),
        nextButtonProps: {
            onPress: () => a.focusNextPage(),
            "aria-label": D.format("next"),
            isDisabled: C,
            onFocusChange: b,
        },
        prevButtonProps: {
            onPress: () => a.focusPreviousPage(),
            "aria-label": D.format("previous"),
            isDisabled: E,
            onFocusChange: B,
        },
        errorMessageProps: { id: g },
        title: f,
    };
}
