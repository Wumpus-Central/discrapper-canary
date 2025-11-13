n.d(t, { N: () => u });
var r = n(467940),
    i = n(640475),
    a = n(45728),
    o = n(819129),
    s = n(507476),
    l = n(379955),
    c = n(647438);
function u(e) {
    var t, n;
    let u = (0, s.d)(e),
        [d, f] = (0, l.z)(e.value, e.defaultValue || null, e.onChange),
        [_] = (0, c.useState)(d),
        p = d || e.placeholderValue || null,
        [h, m] = (0, r.iZ)(p, e.granularity),
        g = null != d ? d.toDate(null != m ? m : "UTC") : null,
        E = "hour" === h || "minute" === h || "second" === h,
        b = null == (t = e.shouldCloseOnSelect) || t,
        [y, O] = (0, c.useState)(null),
        [v, I] = (0, c.useState)(null);
    if ((d && ((y = d), "hour" in d && (v = d)), p && !(h in p)))
        throw Error("Invalid granularity " + h + " for value " + p.toString());
    let T = (null == d ? void 0 : d.calendar.identifier) === "gregory" && "BC" === d.era,
        S = (0, c.useMemo)(
            () => ({
                granularity: h,
                timeZone: m,
                hideTimeZone: e.hideTimeZone,
                hourCycle: e.hourCycle,
                shouldForceLeadingZeros: e.shouldForceLeadingZeros,
                showEra: T,
            }),
            [h, e.hourCycle, e.shouldForceLeadingZeros, m, e.hideTimeZone, T],
        ),
        { minValue: A, maxValue: C, isDateUnavailable: N } = e,
        R = (0, c.useMemo)(() => (0, r.p2)(d, A, C, N, S), [d, A, C, N, S]),
        P = (0, o.Q3)({
            ...e,
            value: d,
            builtinValidation: R,
        }),
        D = P.displayValidation.isInvalid,
        w = e.validationState || (D ? "invalid" : null),
        x = (e, t) => {
            f("timeZone" in t ? t.set((0, i.WG)(e)) : (0, i.IO)(e, t)), O(null), I(null), P.commitValidation();
        },
        L = (t) => {
            let n = "function" == typeof b ? b() : b;
            E
                ? v || n
                    ? x(t, v || (0, r.zu)(e.defaultValue || e.placeholderValue))
                    : O(t)
                : (f(t), P.commitValidation()),
                n && u.setOpen(!1);
        },
        M = (e) => {
            y && e ? x(y, e) : I(e);
        };
    return {
        ...P,
        value: d,
        defaultValue: null != (n = e.defaultValue) ? n : _,
        setValue: f,
        dateValue: y,
        timeValue: v,
        setDateValue: L,
        setTimeValue: M,
        granularity: h,
        hasTime: E,
        ...u,
        setOpen(t) {
            !t && !d && y && E && x(y, v || (0, r.zu)(e.defaultValue || e.placeholderValue)), u.setOpen(t);
        },
        validationState: w,
        isInvalid: D,
        formatValue(e, t) {
            if (!g) return "";
            let n = (0, r.oE)(t, S);
            return new (0, a.C)(e, n).format(g);
        },
        getDateFormatter(e, t) {
            let n = {
                    ...S,
                    ...t,
                },
                i = (0, r.oE)({}, n);
            return new (0, a.C)(e, i);
        },
    };
}
