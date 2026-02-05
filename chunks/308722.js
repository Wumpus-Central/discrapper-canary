"use strict";
n.d(t, { j: () => c });
var r = n(22299),
    i = n(376472),
    a = n(515702),
    s = n(339241),
    o = n(636478),
    l = n(492313),
    u = n(64700);
function c(e) {
    var t, n;
    let c = (0, o.T)(e),
        [d, _] = (0, l.P)(e.value, e.defaultValue || null, e.onChange),
        [f] = (0, u.useState)(d),
        p = d || e.placeholderValue || null,
        [h, m] = (0, r.bf)(p, e.granularity),
        g = null != d ? d.toDate(null != m ? m : "UTC") : null,
        E = "hour" === h || "minute" === h || "second" === h,
        A = null == (t = e.shouldCloseOnSelect) || t,
        [I, T] = (0, u.useState)(null),
        [y, S] = (0, u.useState)(null);
    if ((d && ((I = d), "hour" in d && (y = d)), p && !(h in p)))
        throw Error("Invalid granularity " + h + " for value " + p.toString());
    let v = (null == d ? void 0 : d.calendar.identifier) === "gregory" && "BC" === d.era,
        C = (0, u.useMemo)(
            () => ({
                granularity: h,
                timeZone: m,
                hideTimeZone: e.hideTimeZone,
                hourCycle: e.hourCycle,
                shouldForceLeadingZeros: e.shouldForceLeadingZeros,
                showEra: v,
            }),
            [h, e.hourCycle, e.shouldForceLeadingZeros, m, e.hideTimeZone, v],
        ),
        { minValue: b, maxValue: N, isDateUnavailable: R } = e,
        O = (0, u.useMemo)(() => (0, r.nz)(d, b, N, R, C), [d, b, N, R, C]),
        D = (0, s.KZ)({ ...e, value: d, builtinValidation: O }),
        L = D.displayValidation.isInvalid,
        w = e.validationState || (L ? "invalid" : null),
        x = (e, t) => {
            _("timeZone" in t ? t.set((0, i.gw)(e)) : (0, i.tR)(e, t)), T(null), S(null), D.commitValidation();
        },
        P = (t) => {
            let n = "function" == typeof A ? A() : A;
            E
                ? y || n
                    ? x(t, y || (0, r.$l)(e.defaultValue || e.placeholderValue))
                    : T(t)
                : (_(t), D.commitValidation()),
                n && c.setOpen(!1);
        },
        M = (e) => {
            I && e ? x(I, e) : S(e);
        };
    return {
        ...D,
        value: d,
        defaultValue: null != (n = e.defaultValue) ? n : f,
        setValue: _,
        dateValue: I,
        timeValue: y,
        setDateValue: P,
        setTimeValue: M,
        granularity: h,
        hasTime: E,
        ...c,
        setOpen(t) {
            !t && !d && I && E && x(I, y || (0, r.$l)(e.defaultValue || e.placeholderValue)), c.setOpen(t);
        },
        validationState: w,
        isInvalid: L,
        formatValue(e, t) {
            if (!g) return "";
            let n = (0, r.id)(t, C);
            return new (0, a.p)(e, n).format(g);
        },
        getDateFormatter(e, t) {
            let n = { ...C, ...t },
                i = (0, r.id)({}, n);
            return new (0, a.p)(e, i);
        },
    };
}
