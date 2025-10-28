t.d(a, {
    FK: () => m,
    Lh: () => s,
    So: () => c,
    tN: () => d,
});
var u = t(580560),
    n = t(533426),
    r = t(970185),
    i = t(298806),
    o = t(647438);
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
        c = (0, r.q)(l(u.Z), "@react-aria/calendar");
    "highlightedRange" in e
        ? ({ start: t, end: s } = e.highlightedRange || {})
        : (t = s = null != (a = e.value) ? a : void 0);
    let m = (0, i.a)({
            weekday: "long",
            month: "long",
            year: "numeric",
            day: "numeric",
            era: d(t) || d(s),
            timeZone: e.timeZone,
        }),
        h = "anchorDate" in e ? e.anchorDate : null;
    return (0, o.useMemo)(() => {
        if (!h && t && s)
            if ((0, n.KC)(t, s)) {
                let a = m.format(t.toDate(e.timeZone));
                return c.format("selectedDateDescription", { date: a });
            } else {
                let a = D(m, c, t, s, e.timeZone);
                return c.format("selectedRangeDescription", { dateRange: a });
            }
        return "";
    }, [t, s, h, e.timeZone, c, m]);
}
function m(e, a, t, s) {
    let c = (0, r.q)(l(u.Z), "@react-aria/calendar"),
        m = d(e) || d(a),
        h = (0, i.a)({
            month: "long",
            year: "numeric",
            era: m,
            calendar: e.calendar.identifier,
            timeZone: t,
        }),
        f = (0, i.a)({
            month: "long",
            year: "numeric",
            day: "numeric",
            era: m,
            calendar: e.calendar.identifier,
            timeZone: t,
        });
    return (0, o.useMemo)(() => {
        if ((0, n.KC)(e, (0, n.Nm)(e))) {
            let u = e,
                r = a;
            if (
                (e.calendar.getFormattableMonth && (u = e.calendar.getFormattableMonth(e)),
                a.calendar.getFormattableMonth && (r = a.calendar.getFormattableMonth(a)),
                (0, n.KC)(a, (0, n.Vf)(e)))
            )
                return h.format(u.toDate(t));
            if ((0, n.KC)(a, (0, n.Vf)(a))) return s ? D(h, c, u, r, t) : h.formatRange(u.toDate(t), r.toDate(t));
        }
        return s ? D(f, c, e, a, t) : f.formatRange(e.toDate(t), a.toDate(t));
    }, [e, a, h, f, c, t, s]);
}
function D(e, a, t, u, n) {
    let r = e.formatRangeToParts(t.toDate(n), u.toDate(n)),
        i = -1;
    for (let e = 0; e < r.length; e++) {
        let a = r[e];
        if ("shared" === a.source && "literal" === a.type) i = e;
        else if ("endRange" === a.source) break;
    }
    let o = "",
        l = "";
    for (let e = 0; e < r.length; e++) e < i ? (o += r[e].value) : e > i && (l += r[e].value);
    return a.format("dateRange", {
        startDate: o,
        endDate: l,
    });
}
