n.d(t, {
    $: () => l,
    m: () => c,
});
var r = n(56636),
    i = n(114922),
    a = n(734481),
    s = n(222367),
    o = n(90727);
function l(e) {
    var t = e
        .split("\n")
        .map(u)
        .filter(function (e) {
            return null !== e;
        });
    return (0, r.Cl)((0, r.Cl)({}, t[0]), t[1]);
}
function c(e) {
    var t = {},
        n = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i.exec(e);
    if (!n) return t;
    var r = n[1],
        i = n[2];
    return r && (t.tzid = r), (t.dtstart = (0, s.lP)(i)), t;
}
function u(e) {
    if (!(e = e.replace(/^\s+|\s+$/, "")).length) return null;
    var t = /^([A-Z]+?)[:;]/.exec(e.toUpperCase());
    if (!t) return d(e);
    var n = t[1];
    switch (n.toUpperCase()) {
        case "RRULE":
        case "EXRULE":
            return d(e);
        case "DTSTART":
            return c(e);
        default:
            throw Error("Unsupported RFC prop ".concat(n, " in ").concat(e));
    }
}
function d(e) {
    var t = c(e.replace(/^RRULE:/i, ""));
    return (
        e
            .replace(/^(?:RRULE|EXRULE):/i, "")
            .split(";")
            .forEach(function (n) {
                var r = n.split("="),
                    a = r[0],
                    l = r[1];
                switch (a.toUpperCase()) {
                    case "FREQ":
                        t.freq = i.j[l.toUpperCase()];
                        break;
                    case "WKST":
                        t.wkst = o.Wn[l.toUpperCase()];
                        break;
                    case "COUNT":
                    case "INTERVAL":
                    case "BYSETPOS":
                    case "BYMONTH":
                    case "BYMONTHDAY":
                    case "BYYEARDAY":
                    case "BYWEEKNO":
                    case "BYHOUR":
                    case "BYMINUTE":
                    case "BYSECOND":
                        var u = f(l);
                        t[a.toLowerCase()] = u;
                        break;
                    case "BYWEEKDAY":
                    case "BYDAY":
                        t.byweekday = _(l);
                        break;
                    case "DTSTART":
                    case "TZID":
                        var d = c(e);
                        (t.tzid = d.tzid), (t.dtstart = d.dtstart);
                        break;
                    case "UNTIL":
                        t.until = (0, s.lP)(l);
                        break;
                    case "BYEASTER":
                        t.byeaster = Number(l);
                        break;
                    default:
                        throw Error("Unknown RRULE property '" + a + "'");
                }
            }),
        t
    );
}
function f(e) {
    return -1 !== e.indexOf(",") ? e.split(",").map(p) : p(e);
}
function p(e) {
    return /^[+-]?\d+$/.test(e) ? Number(e) : e;
}
function _(e) {
    return e.split(",").map(function (e) {
        if (2 === e.length) return o.Wn[e];
        var t = e.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
        if (!t || t.length < 3) throw SyntaxError("Invalid weekday string: ".concat(e));
        var n = Number(t[1]),
            r = t[2],
            i = o.Wn[r].weekday;
        return new a.B(i, n);
    });
}
