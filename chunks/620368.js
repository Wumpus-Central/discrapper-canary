t.d(a, { N: () => d });
var u = t(467940),
    n = t(640475),
    r = t(45728),
    i = t(819129),
    o = t(507476),
    l = t(379955),
    s = t(647438);
function d(e) {
    var a, t;
    let d = (0, o.d)(e),
        [c, m] = (0, l.z)(e.value, e.defaultValue || null, e.onChange),
        [D] = (0, s.useState)(c),
        h = c || e.placeholderValue || null,
        [f, y] = (0, u.iZ)(h, e.granularity),
        p = null != c ? c.toDate(null != y ? y : "UTC") : null,
        g = "hour" === f || "minute" === f || "second" === f,
        v = null == (a = e.shouldCloseOnSelect) || a,
        [b, C] = (0, s.useState)(null),
        [x, B] = (0, s.useState)(null);
    if ((c && ((b = c), "hour" in c && (x = c)), h && !(f in h)))
        throw Error("Invalid granularity " + f + " for value " + h.toString());
    let E = (null == c ? void 0 : c.calendar.identifier) === "gregory" && "BC" === c.era,
        F = (0, s.useMemo)(
            () => ({
                granularity: f,
                timeZone: y,
                hideTimeZone: e.hideTimeZone,
                hourCycle: e.hourCycle,
                shouldForceLeadingZeros: e.shouldForceLeadingZeros,
                showEra: E,
            }),
            [f, e.hourCycle, e.shouldForceLeadingZeros, y, e.hideTimeZone, E],
        ),
        { minValue: w, maxValue: $, isDateUnavailable: R } = e,
        Z = (0, s.useMemo)(() => (0, u.p2)(c, w, $, R, F), [c, w, $, R, F]),
        k = (0, i.Q3)({
            ...e,
            value: c,
            builtinValidation: Z,
        }),
        A = k.displayValidation.isInvalid,
        P = e.validationState || (A ? "invalid" : null),
        S = (e, a) => {
            m("timeZone" in a ? a.set((0, n.WG)(e)) : (0, n.IO)(e, a)), C(null), B(null), k.commitValidation();
        };
    return {
        ...k,
        value: c,
        defaultValue: null != (t = e.defaultValue) ? t : D,
        setValue: m,
        dateValue: b,
        timeValue: x,
        setDateValue: (a) => {
            let t = "function" == typeof v ? v() : v;
            g
                ? x || t
                    ? S(a, x || (0, u.zu)(e.defaultValue || e.placeholderValue))
                    : C(a)
                : (m(a), k.commitValidation()),
                t && d.setOpen(!1);
        },
        setTimeValue: (e) => {
            b && e ? S(b, e) : B(e);
        },
        granularity: f,
        hasTime: g,
        ...d,
        setOpen(a) {
            !a && !c && b && g && S(b, x || (0, u.zu)(e.defaultValue || e.placeholderValue)), d.setOpen(a);
        },
        validationState: P,
        isInvalid: A,
        formatValue(e, a) {
            if (!p) return "";
            let t = (0, u.oE)(a, F);
            return new (0, r.C)(e, t).format(p);
        },
        getDateFormatter(e, a) {
            let t = {
                    ...F,
                    ...a,
                },
                n = (0, u.oE)({}, t);
            return new (0, r.C)(e, n);
        },
    };
}
