"use strict";
n.d(t, { $: () => l, m: () => u });
var r = n(56636),
    i = n(114922),
    s = n(734481),
    a = n(222367),
    o = n(90727);
function l(e) {
    var t = e
        .split("\n")
        .map(c)
        .filter(function (e) {
            return null !== e;
        });
    return (0, r.Cl)((0, r.Cl)({}, t[0]), t[1]);
}
function u(e) {
    var t = {},
        n = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i.exec(e);
    if (!n) return t;
    var r = n[1],
        i = n[2];
    return r && (t.tzid = r), (t.dtstart = (0, a.lP)(i)), t;
}
function c(e) {
    if (!(e = e.replace(/^\s+|\s+$/, "")).length) return null;
    var t = /^([A-Z]+?)[:;]/.exec(e.toUpperCase());
    if (!t) return d(e);
    var n = t[1];
    switch (n.toUpperCase()) {
        case "RRULE":
        case "EXRULE":
            return d(e);
        case "DTSTART":
            return u(e);
        default:
            throw Error("Unsupported RFC prop ".concat(n, " in ").concat(e));
    }
}
function d(e) {
    var t = u(e.replace(/^RRULE:/i, ""));
    return (
        e
            .replace(/^(?:RRULE|EXRULE):/i, "")
            .split(";")
            .forEach(function (n) {
                var r = n.split("="),
                    l = r[0],
                    c = r[1];
                switch (l.toUpperCase()) {
                    case "FREQ":
                        t.freq = i.j[c.toUpperCase()];
                        break;
                    case "WKST":
                        t.wkst = o.Wn[c.toUpperCase()];
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
                        var d,
                            f = -1 !== (d = c).indexOf(",") ? d.split(",").map(_) : _(d);
                        t[l.toLowerCase()] = f;
                        break;
                    case "BYWEEKDAY":
                    case "BYDAY":
                        t.byweekday = c.split(",").map(function (e) {
                            if (2 === e.length) return o.Wn[e];
                            var t = e.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
                            if (!t || t.length < 3) throw SyntaxError("Invalid weekday string: ".concat(e));
                            var n = Number(t[1]),
                                r = t[2],
                                i = o.Wn[r].weekday;
                            return new s.B(i, n);
                        });
                        break;
                    case "DTSTART":
                    case "TZID":
                        var p = u(e);
                        (t.tzid = p.tzid), (t.dtstart = p.dtstart);
                        break;
                    case "UNTIL":
                        t.until = (0, a.lP)(c);
                        break;
                    case "BYEASTER":
                        t.byeaster = Number(c);
                        break;
                    default:
                        throw Error("Unknown RRULE property '" + l + "'");
                }
            }),
        t
    );
}
function _(e) {
    return /^[+-]?\d+$/.test(e) ? Number(e) : e;
}
