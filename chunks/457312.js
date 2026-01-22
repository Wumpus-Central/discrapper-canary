n.d(t, {
    OX: () => c,
    ZI: () => d,
    ZR: () => f,
    cf: () => u,
});
var r = n(701366),
    i = n(352404),
    a = n(47276),
    s = n(849352),
    o = n(64700);
function l(e) {
    return e && e.__esModule ? e.default : e;
}
let c = new WeakMap();
function u(e) {
    return (null == e ? void 0 : e.calendar.identifier) === "gregory" && "BC" === e.era ? "short" : void 0;
}
function d(e) {
    var t;
    let n,
        c,
        d = (0, a.o)(l(r.A), "@react-aria/calendar");
    "highlightedRange" in e
        ? ({ start: n, end: c } = e.highlightedRange || {})
        : (n = c = null != (t = e.value) ? t : void 0);
    let f = (0, s.i)({
            weekday: "long",
            month: "long",
            year: "numeric",
            day: "numeric",
            era: u(n) || u(c),
            timeZone: e.timeZone,
        }),
        _ = "anchorDate" in e ? e.anchorDate : null;
    return (0, o.useMemo)(() => {
        if (!_ && n && c)
            if ((0, i.ro)(n, c)) {
                let t = f.format(n.toDate(e.timeZone));
                return d.format("selectedDateDescription", { date: t });
            } else {
                let t = p(f, d, n, c, e.timeZone);
                return d.format("selectedRangeDescription", { dateRange: t });
            }
        return "";
    }, [n, c, _, e.timeZone, d, f]);
}
function f(e, t, n, c) {
    let d = (0, a.o)(l(r.A), "@react-aria/calendar"),
        f = u(e) || u(t),
        _ = (0, s.i)({
            month: "long",
            year: "numeric",
            era: f,
            calendar: e.calendar.identifier,
            timeZone: n,
        }),
        h = (0, s.i)({
            month: "long",
            year: "numeric",
            day: "numeric",
            era: f,
            calendar: e.calendar.identifier,
            timeZone: n,
        });
    return (0, o.useMemo)(() => {
        if ((0, i.ro)(e, (0, i.wH)(e))) {
            let r = e,
                a = t;
            if (
                (e.calendar.getFormattableMonth && (r = e.calendar.getFormattableMonth(e)),
                t.calendar.getFormattableMonth && (a = t.calendar.getFormattableMonth(t)),
                (0, i.ro)(t, (0, i.p9)(e)))
            )
                return _.format(r.toDate(n));
            if ((0, i.ro)(t, (0, i.p9)(t))) return c ? p(_, d, r, a, n) : _.formatRange(r.toDate(n), a.toDate(n));
        }
        return c ? p(h, d, e, t, n) : h.formatRange(e.toDate(n), t.toDate(n));
    }, [e, t, _, h, d, n, c]);
}
function p(e, t, n, r, i) {
    let a = e.formatRangeToParts(n.toDate(i), r.toDate(i)),
        s = -1;
    for (let e = 0; e < a.length; e++) {
        let t = a[e];
        if ("shared" === t.source && "literal" === t.type) s = e;
        else if ("endRange" === t.source) break;
    }
    let o = "",
        l = "";
    for (let e = 0; e < a.length; e++) e < s ? (o += a[e].value) : e > s && (l += a[e].value);
    return t.format("dateRange", {
        startDate: o,
        endDate: l,
    });
}
