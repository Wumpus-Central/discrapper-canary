t.d(a, { m: () => d });
var r = t(22299),
    n = t(376472),
    i = t(515702),
    l = t(339241),
    o = t(636478),
    u = t(492313),
    s = t(64700);
function d(e) {
    var a, t, d, m;
    let h = (0, o.T)(e),
        [y, D] = (0, u.P)(e.value, e.defaultValue || null, e.onChange),
        [p] = (0, s.useState)(y),
        [g, v] = (0, s.useState)(() => y || { start: null, end: null });
    null == y && g.start && g.end && v((g = { start: null, end: null }));
    let f = y || g,
        b = (e) => {
            v((f = e || { start: null, end: null })), c(f) ? D(f) : D(null);
        },
        A = (null == f ? void 0 : f.start) || (null == f ? void 0 : f.end) || e.placeholderValue || null,
        [R, $] = (0, r.bf)(A, e.granularity),
        w = "hour" === R || "minute" === R || "second" === R,
        P = null == (d = e.shouldCloseOnSelect) || d,
        [C, k] = (0, s.useState)(null),
        [x, E] = (0, s.useState)(null);
    f && c(f) && ((C = f), "hour" in f.start && (x = f));
    let S = (e, a) => {
            b({
                start: "timeZone" in a.start ? a.start.set((0, n.gw)(e.start)) : (0, n.tR)(e.start, a.start),
                end: "timeZone" in a.end ? a.end.set((0, n.gw)(e.end)) : (0, n.tR)(e.end, a.end),
            }),
                k(null),
                E(null),
                Z.commitValidation();
        },
        V = (a) => {
            let t = "function" == typeof P ? P() : P;
            w
                ? c(a) && (t || ((null == x ? void 0 : x.start) && (null == x ? void 0 : x.end)))
                    ? S(a, {
                          start: (null == x ? void 0 : x.start) || (0, r.$l)(e.placeholderValue),
                          end: (null == x ? void 0 : x.end) || (0, r.$l)(e.placeholderValue),
                      })
                    : k(a)
                : c(a)
                  ? (b(a), Z.commitValidation())
                  : k(a),
                t && h.setOpen(!1);
        },
        F = (e) => {
            c(C) && c(e) ? S(C, e) : E(e);
        },
        B =
            ((null == f || null == (a = f.start) ? void 0 : a.calendar.identifier) === "gregory" &&
                "BC" === f.start.era) ||
            ((null == f || null == (t = f.end) ? void 0 : t.calendar.identifier) === "gregory" && "BC" === f.end.era),
        M = (0, s.useMemo)(
            () => ({
                granularity: R,
                timeZone: $,
                hideTimeZone: e.hideTimeZone,
                hourCycle: e.hourCycle,
                shouldForceLeadingZeros: e.shouldForceLeadingZeros,
                showEra: B,
            }),
            [R, e.hourCycle, e.shouldForceLeadingZeros, $, e.hideTimeZone, B],
        ),
        { minValue: I, maxValue: T, isDateUnavailable: O } = e,
        N = (0, s.useMemo)(() => (0, r.eD)(f, I, T, O, M), [f, I, T, O, M]),
        Z = (0, l.KZ)({
            ...e,
            value: y,
            name: (0, s.useMemo)(() => [e.startName, e.endName].filter((e) => null != e), [e.startName, e.endName]),
            builtinValidation: N,
        }),
        z = Z.displayValidation.isInvalid,
        U = e.validationState || (z ? "invalid" : null);
    return {
        ...Z,
        value: f,
        defaultValue: null != (m = e.defaultValue) ? m : p,
        setValue: b,
        dateRange: C,
        timeRange: x,
        granularity: R,
        hasTime: w,
        setDate(e, a) {
            var t, r;
            "start" === e
                ? V({ start: a, end: null != (t = null == C ? void 0 : C.end) ? t : null })
                : V({ start: null != (r = null == C ? void 0 : C.start) ? r : null, end: a });
        },
        setTime(e, a) {
            var t, r;
            "start" === e
                ? F({ start: a, end: null != (t = null == x ? void 0 : x.end) ? t : null })
                : F({ start: null != (r = null == x ? void 0 : x.start) ? r : null, end: a });
        },
        setDateTime(e, a) {
            var t, r;
            "start" === e
                ? b({ start: a, end: null != (t = null == f ? void 0 : f.end) ? t : null })
                : b({ start: null != (r = null == f ? void 0 : f.start) ? r : null, end: a });
        },
        setDateRange: V,
        setTimeRange: F,
        ...h,
        setOpen(a) {
            !a &&
                !((null == f ? void 0 : f.start) && (null == f ? void 0 : f.end)) &&
                c(C) &&
                w &&
                S(C, {
                    start: (null == x ? void 0 : x.start) || (0, r.$l)(e.placeholderValue),
                    end: (null == x ? void 0 : x.end) || (0, r.$l)(e.placeholderValue),
                }),
                h.setOpen(a);
        },
        validationState: U,
        isInvalid: z,
        formatValue(a, t) {
            let n;
            if (!f || !f.start || !f.end) return null;
            let l = "timeZone" in f.start ? f.start.timeZone : void 0,
                o = e.granularity || (f.start && "minute" in f.start ? "minute" : "day"),
                u = "timeZone" in f.end ? f.end.timeZone : void 0,
                s = e.granularity || (f.end && "minute" in f.end ? "minute" : "day"),
                d = (0, r.id)(t, {
                    granularity: o,
                    timeZone: l,
                    hideTimeZone: e.hideTimeZone,
                    hourCycle: e.hourCycle,
                    showEra:
                        ("gregory" === f.start.calendar.identifier && "BC" === f.start.era) ||
                        ("gregory" === f.end.calendar.identifier && "BC" === f.end.era),
                }),
                c = f.start.toDate(l || "UTC"),
                m = f.end.toDate(u || "UTC"),
                h = new (0, i.p)(a, d);
            if (l === u && o === s && 0 !== f.start.compare(f.end)) {
                try {
                    let e = h.formatRangeToParts(c, m),
                        a = -1;
                    for (let t = 0; t < e.length; t++) {
                        let r = e[t];
                        if ("shared" === r.source && "literal" === r.type) a = t;
                        else if ("endRange" === r.source) break;
                    }
                    let t = "",
                        r = "";
                    for (let n = 0; n < e.length; n++) n < a ? (t += e[n].value) : n > a && (r += e[n].value);
                    return { start: t, end: r };
                } catch {}
                n = h;
            } else {
                let l = (0, r.id)(t, {
                    granularity: s,
                    timeZone: u,
                    hideTimeZone: e.hideTimeZone,
                    hourCycle: e.hourCycle,
                });
                n = new (0, i.p)(a, l);
            }
            return { start: h.format(c), end: n.format(m) };
        },
        getDateFormatter(e, a) {
            let t = { ...M, ...a },
                n = (0, r.id)({}, t);
            return new (0, i.p)(e, n);
        },
    };
}
function c(e) {
    return (null == e ? void 0 : e.start) != null && null != e.end;
}
