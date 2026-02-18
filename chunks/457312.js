t.d(a, { OX: () => s, ZI: () => c, ZR: () => m, cf: () => d });
var r = t(701366),
    n = t(352404),
    i = t(47276),
    o = t(849352),
    u = t(64700);
function l(e) {
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
        c = (0, i.o)(l(r.A), "@react-aria/calendar");
    "highlightedRange" in e
        ? ({ start: t, end: s } = e.highlightedRange || {})
        : (t = s = null != (a = e.value) ? a : void 0);
    let m = (0, o.i)({
            weekday: "long",
            month: "long",
            year: "numeric",
            day: "numeric",
            era: d(t) || d(s),
            timeZone: e.timeZone,
        }),
        D = "anchorDate" in e ? e.anchorDate : null;
    return (0, u.useMemo)(() => {
        if (!D && t && s)
            if ((0, n.ro)(t, s)) {
                let a = m.format(t.toDate(e.timeZone));
                return c.format("selectedDateDescription", { date: a });
            } else {
                let a = h(m, c, t, s, e.timeZone);
                return c.format("selectedRangeDescription", { dateRange: a });
            }
        return "";
    }, [t, s, D, e.timeZone, c, m]);
}
function m(e, a, t, s) {
    let c = (0, i.o)(l(r.A), "@react-aria/calendar"),
        m = d(e) || d(a),
        D = (0, o.i)({ month: "long", year: "numeric", era: m, calendar: e.calendar.identifier, timeZone: t }),
        y = (0, o.i)({
            month: "long",
            year: "numeric",
            day: "numeric",
            era: m,
            calendar: e.calendar.identifier,
            timeZone: t,
        });
    return (0, u.useMemo)(() => {
        if ((0, n.ro)(e, (0, n.wH)(e))) {
            let r = e,
                i = a;
            if (
                (e.calendar.getFormattableMonth && (r = e.calendar.getFormattableMonth(e)),
                a.calendar.getFormattableMonth && (i = a.calendar.getFormattableMonth(a)),
                (0, n.ro)(a, (0, n.p9)(e)))
            )
                return D.format(r.toDate(t));
            if ((0, n.ro)(a, (0, n.p9)(a))) return s ? h(D, c, r, i, t) : D.formatRange(r.toDate(t), i.toDate(t));
        }
        return s ? h(y, c, e, a, t) : y.formatRange(e.toDate(t), a.toDate(t));
    }, [e, a, D, y, c, t, s]);
}
function h(e, a, t, r, n) {
    let i = e.formatRangeToParts(t.toDate(n), r.toDate(n)),
        o = -1;
    for (let e = 0; e < i.length; e++) {
        let a = i[e];
        if ("shared" === a.source && "literal" === a.type) o = e;
        else if ("endRange" === a.source) break;
    }
    let u = "",
        l = "";
    for (let e = 0; e < i.length; e++) e < o ? (u += i[e].value) : e > o && (l += i[e].value);
    return a.format("dateRange", { startDate: u, endDate: l });
}
