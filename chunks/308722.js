n.d(t, { j: () => u });
var r = n(22299),
    i = n(376472),
    a = n(515702),
    s = n(339241),
    o = n(636478),
    l = n(492313),
    c = n(64700);
function u(e) {
    var t, n;
    let u = (0, o.T)(e),
        [d, f] = (0, l.P)(e.value, e.defaultValue || null, e.onChange),
        [p] = (0, c.useState)(d),
        _ = d || e.placeholderValue || null,
        [h, m] = (0, r.bf)(_, e.granularity),
        g = null != d ? d.toDate(null != m ? m : "UTC") : null,
        E = "hour" === h || "minute" === h || "second" === h,
        b = null == (t = e.shouldCloseOnSelect) || t,
        [y, O] = (0, c.useState)(null),
        [A, v] = (0, c.useState)(null);
    if ((d && ((y = d), "hour" in d && (A = d)), _ && !(h in _)))
        throw Error("Invalid granularity " + h + " for value " + _.toString());
    let S = (null == d ? void 0 : d.calendar.identifier) === "gregory" && "BC" === d.era,
        I = (0, c.useMemo)(
            () => ({
                granularity: h,
                timeZone: m,
                hideTimeZone: e.hideTimeZone,
                hourCycle: e.hourCycle,
                shouldForceLeadingZeros: e.shouldForceLeadingZeros,
                showEra: S,
            }),
            [h, e.hourCycle, e.shouldForceLeadingZeros, m, e.hideTimeZone, S],
        ),
        { minValue: T, maxValue: C, isDateUnavailable: N } = e,
        R = (0, c.useMemo)(() => (0, r.nz)(d, T, C, N, I), [d, T, C, N, I]),
        w = (0, s.KZ)({
            ...e,
            value: d,
            builtinValidation: R,
        }),
        P = w.displayValidation.isInvalid,
        D = e.validationState || (P ? "invalid" : null),
        x = (e, t) => {
            f("timeZone" in t ? t.set((0, i.gw)(e)) : (0, i.tR)(e, t)), O(null), v(null), w.commitValidation();
        },
        L = (t) => {
            let n = "function" == typeof b ? b() : b;
            E
                ? A || n
                    ? x(t, A || (0, r.$l)(e.defaultValue || e.placeholderValue))
                    : O(t)
                : (f(t), w.commitValidation()),
                n && u.setOpen(!1);
        },
        j = (e) => {
            y && e ? x(y, e) : v(e);
        };
    return {
        ...w,
        value: d,
        defaultValue: null != (n = e.defaultValue) ? n : p,
        setValue: f,
        dateValue: y,
        timeValue: A,
        setDateValue: L,
        setTimeValue: j,
        granularity: h,
        hasTime: E,
        ...u,
        setOpen(t) {
            !t && !d && y && E && x(y, A || (0, r.$l)(e.defaultValue || e.placeholderValue)), u.setOpen(t);
        },
        validationState: D,
        isInvalid: P,
        formatValue(e, t) {
            if (!g) return "";
            let n = (0, r.id)(t, I);
            return new (0, a.p)(e, n).format(g);
        },
        getDateFormatter(e, t) {
            let n = {
                    ...I,
                    ...t,
                },
                i = (0, r.id)({}, n);
            return new (0, a.p)(e, i);
        },
    };
}
