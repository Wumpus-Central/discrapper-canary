t.d(a, { j: () => d });
var r = t(22299),
    n = t(376472),
    i = t(515702),
    l = t(339241),
    o = t(636478),
    u = t(492313),
    s = t(64700);
function d(e) {
    var a, t;
    let d = (0, o.T)(e),
        [c, m] = (0, u.P)(e.value, e.defaultValue || null, e.onChange),
        [h] = (0, s.useState)(c),
        y = c || e.placeholderValue || null,
        [D, p] = (0, r.bf)(y, e.granularity),
        g = null != c ? c.toDate(null != p ? p : "UTC") : null,
        v = "hour" === D || "minute" === D || "second" === D,
        f = null == (a = e.shouldCloseOnSelect) || a,
        [b, A] = (0, s.useState)(null),
        [R, $] = (0, s.useState)(null);
    if ((c && ((b = c), "hour" in c && (R = c)), y && !(D in y)))
        throw Error("Invalid granularity " + D + " for value " + y.toString());
    let w = (null == c ? void 0 : c.calendar.identifier) === "gregory" && "BC" === c.era,
        P = (0, s.useMemo)(
            () => ({
                granularity: D,
                timeZone: p,
                hideTimeZone: e.hideTimeZone,
                hourCycle: e.hourCycle,
                shouldForceLeadingZeros: e.shouldForceLeadingZeros,
                showEra: w,
            }),
            [D, e.hourCycle, e.shouldForceLeadingZeros, p, e.hideTimeZone, w],
        ),
        { minValue: C, maxValue: k, isDateUnavailable: x } = e,
        E = (0, s.useMemo)(() => (0, r.nz)(c, C, k, x, P), [c, C, k, x, P]),
        S = (0, l.KZ)({ ...e, value: c, builtinValidation: E }),
        V = S.displayValidation.isInvalid,
        F = e.validationState || (V ? "invalid" : null),
        B = (e, a) => {
            m("timeZone" in a ? a.set((0, n.gw)(e)) : (0, n.tR)(e, a)), A(null), $(null), S.commitValidation();
        };
    return {
        ...S,
        value: c,
        defaultValue: null != (t = e.defaultValue) ? t : h,
        setValue: m,
        dateValue: b,
        timeValue: R,
        setDateValue: (a) => {
            let t = "function" == typeof f ? f() : f;
            v
                ? R || t
                    ? B(a, R || (0, r.$l)(e.defaultValue || e.placeholderValue))
                    : A(a)
                : (m(a), S.commitValidation()),
                t && d.setOpen(!1);
        },
        setTimeValue: (e) => {
            b && e ? B(b, e) : $(e);
        },
        granularity: D,
        hasTime: v,
        ...d,
        setOpen(a) {
            !a && !c && b && v && B(b, R || (0, r.$l)(e.defaultValue || e.placeholderValue)), d.setOpen(a);
        },
        validationState: F,
        isInvalid: V,
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
