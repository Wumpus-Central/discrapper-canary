t.d(a, { j: () => d });
var r = t(22299),
    n = t(376472),
    i = t(515702),
    o = t(339241),
    u = t(636478),
    l = t(492313),
    s = t(64700);
function d(e) {
    var a, t;
    let d = (0, u.T)(e),
        [c, m] = (0, l.P)(e.value, e.defaultValue || null, e.onChange),
        [h] = (0, s.useState)(c),
        D = c || e.placeholderValue || null,
        [y, p] = (0, r.bf)(D, e.granularity),
        g = null != c ? c.toDate(null != p ? p : "UTC") : null,
        f = "hour" === y || "minute" === y || "second" === y,
        v = null == (a = e.shouldCloseOnSelect) || a,
        [b, A] = (0, s.useState)(null),
        [$, w] = (0, s.useState)(null);
    if ((c && ((b = c), "hour" in c && ($ = c)), D && !(y in D)))
        throw Error("Invalid granularity " + y + " for value " + D.toString());
    let R = (null == c ? void 0 : c.calendar.identifier) === "gregory" && "BC" === c.era,
        P = (0, s.useMemo)(
            () => ({
                granularity: y,
                timeZone: p,
                hideTimeZone: e.hideTimeZone,
                hourCycle: e.hourCycle,
                shouldForceLeadingZeros: e.shouldForceLeadingZeros,
                showEra: R,
            }),
            [y, e.hourCycle, e.shouldForceLeadingZeros, p, e.hideTimeZone, R],
        ),
        { minValue: k, maxValue: x, isDateUnavailable: C } = e,
        E = (0, s.useMemo)(() => (0, r.nz)(c, k, x, C, P), [c, k, x, C, P]),
        S = (0, o.KZ)({ ...e, value: c, builtinValidation: E }),
        F = S.displayValidation.isInvalid,
        B = e.validationState || (F ? "invalid" : null),
        V = (e, a) => {
            m("timeZone" in a ? a.set((0, n.gw)(e)) : (0, n.tR)(e, a)), A(null), w(null), S.commitValidation();
        };
    return {
        ...S,
        value: c,
        defaultValue: null != (t = e.defaultValue) ? t : h,
        setValue: m,
        dateValue: b,
        timeValue: $,
        setDateValue: (a) => {
            let t = "function" == typeof v ? v() : v;
            f
                ? $ || t
                    ? V(a, $ || (0, r.$l)(e.defaultValue || e.placeholderValue))
                    : A(a)
                : (m(a), S.commitValidation()),
                t && d.setOpen(!1);
        },
        setTimeValue: (e) => {
            b && e ? V(b, e) : w(e);
        },
        granularity: y,
        hasTime: f,
        ...d,
        setOpen(a) {
            !a && !c && b && f && V(b, $ || (0, r.$l)(e.defaultValue || e.placeholderValue)), d.setOpen(a);
        },
        validationState: B,
        isInvalid: F,
        formatValue(e, a) {
            if (!g) return "";
            let t = (0, r.id)(a, P);
            return new (0, i.p)(e, t).format(g);
        },
        getDateFormatter(e, a) {
            let t = { ...P, ...a },
                n = (0, r.id)({}, t);
            return new (0, i.p)(e, n);
        },
    };
}
