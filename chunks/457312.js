t.d(a, { OX: () => s, ZI: () => c, ZR: () => m, cf: () => d });
var r = t(701366),
    n = t(352404),
    i = t(47276),
    l = t(849352),
    o = t(64700);
function u(e) {
    return e && e.__esModule ? e.default : e;
}
let s = new WeakMap();
function d(e) {
    return (null == e ? void 0 : e.calendar.identifier) === "gregory" && "BC" === e.era ? "short" : void 0;
}
function c(e) {
    var a;
    let t,
        s,
        c = (0, i.o)(u(r.A), "@react-aria/calendar");
    "highlightedRange" in e
        ? ({ start: t, end: s } = e.highlightedRange || {})
        : (t = s = null != (a = e.value) ? a : void 0);
    let m = (0, l.i)({
            weekday: "long",
            month: "long",
            year: "numeric",
            day: "numeric",
            era: d(t) || d(s),
            timeZone: e.timeZone,
        }),
        y = "anchorDate" in e ? e.anchorDate : null;
    return (0, o.useMemo)(() => {
        if (!y && t && s)
            if ((0, n.ro)(t, s)) {
                let a = m.format(t.toDate(e.timeZone));
                return c.format("selectedDateDescription", { date: a });
            } else {
                let a = h(m, c, t, s, e.timeZone);
                return c.format("selectedRangeDescription", { dateRange: a });
            }
        return "";
    }, [t, s, y, e.timeZone, c, m]);
}
function m(e, a, t, s) {
    let c = (0, i.o)(u(r.A), "@react-aria/calendar"),
        m = d(e) || d(a),
        y = (0, l.i)({ month: "long", year: "numeric", era: m, calendar: e.calendar.identifier, timeZone: t }),
        D = (0, l.i)({
            month: "long",
            year: "numeric",
            day: "numeric",
            era: m,
            calendar: e.calendar.identifier,
            timeZone: t,
        });
    return (0, o.useMemo)(() => {
        if ((0, n.ro)(e, (0, n.wH)(e))) {
            let r = e,
                i = a;
            if (
                (e.calendar.getFormattableMonth && (r = e.calendar.getFormattableMonth(e)),
                a.calendar.getFormattableMonth && (i = a.calendar.getFormattableMonth(a)),
                (0, n.ro)(a, (0, n.p9)(e)))
            )
                return y.format(r.toDate(t));
            if ((0, n.ro)(a, (0, n.p9)(a))) return s ? h(y, c, r, i, t) : y.formatRange(r.toDate(t), i.toDate(t));
        }
        return s ? h(D, c, e, a, t) : D.formatRange(e.toDate(t), a.toDate(t));
    }, [e, a, y, D, c, t, s]);
}
function h(e, a, t, r, n) {
    let i = e.formatRangeToParts(t.toDate(n), r.toDate(n)),
        l = -1;
    for (let e = 0; e < i.length; e++) {
        let a = i[e];
        if ("shared" === a.source && "literal" === a.type) l = e;
        else if ("endRange" === a.source) break;
    }
    let o = "",
        u = "";
    for (let e = 0; e < i.length; e++) e < l ? (o += i[e].value) : e > l && (u += i[e].value);
    return a.format("dateRange", { startDate: o, endDate: u });
}
