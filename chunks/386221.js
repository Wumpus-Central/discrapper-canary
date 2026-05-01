"use strict";
(t.createDateTimeFormat = c),
    (t.createDateTimeFormats = function (e) {
        var t,
            r,
            n,
            s,
            a,
            o = e.availableFormats,
            l = e.timeFormats,
            d = e.dateFormats,
            f = e.medium,
            p = [],
            h = [],
            m = [];
        function v(e, t) {
            var r = Array((e.match(/M/g) || []).length + 1),
                n = Array((e.match(/E/g) || []).length + 1);
            return (
                r.length > 2 && (t = t.replace(/(M|L)+/, r.join("$1"))),
                n.length > 2 && (t = t.replace(/([Eec])+/, n.join("$1"))),
                t
            );
        }
        for (t in o)
            o.hasOwnProperty(t) &&
                (n = c((r = v(t, o[t])))) &&
                (p.push(n),
                (function (e) {
                    for (var t = 0; t < u.length; t += 1) if (e.hasOwnProperty(u[t])) return !1;
                    return !0;
                })(n)
                    ? m.push(r)
                    : (function (e) {
                          for (var t = 0; t < i.length; t += 1) if (e.hasOwnProperty(i[t])) return !1;
                          return !0;
                      })(n) && h.push(r));
        for (s = 0; s < h.length; s += 1)
            for (a = 0; a < m.length; a += 1)
                (n = c(
                    (r = f
                        .replace("{0}", h[s])
                        .replace("{1}", m[a])
                        .replace(/^[,\s]+|[,\s]+$/gi, "")),
                )) && p.push(n);
        for (t in l) l.hasOwnProperty(t) && (n = c((r = v(t, l[t])))) && p.push(n);
        for (t in d) d.hasOwnProperty(t) && (n = c((r = v(t, d[t])))) && p.push(n);
        return p;
    });
var r =
        /(?:[Eec]{1,6}|G{1,5}|(?:[yYu]+|U{1,5})|[ML]{1,5}|d{1,2}|a|[hkHK]{1,2}|m{1,2}|s{1,2}|z{1,4})(?=([^']*'[^']*')*[^']*$)/g,
    n = /[QxXVOvZASjgFDwWIQqH]/,
    s = ["numeric", "2-digit", "short", "long", "narrow"],
    a = ["short", "short", "short", "long", "narrow"],
    o = ["short", "short", "short", "long", "narrow"],
    i = ["weekday", "era", "year", "month", "day"],
    u = ["hour", "minute", "second", "timeZoneName"];
function c(e) {
    if (!n.test(e)) {
        var t = {};
        return (
            (t.pattern = e.replace(r, function (e) {
                switch (e.charAt(0)) {
                    case "E":
                    case "e":
                    case "c":
                        return (t.weekday = a[e.length - 1]), "{weekday}";
                    case "G":
                        return (t.era = o[e.length - 1]), "{era}";
                    case "y":
                    case "Y":
                    case "u":
                    case "U":
                        return (t.year = 2 === e.length ? "2-digit" : "numeric"), "{year}";
                    case "M":
                    case "L":
                        return (t.month = s[e.length - 1]), "{month}";
                    case "d":
                        return (t.day = 2 === e.length ? "2-digit" : "numeric"), "{day}";
                    case "a":
                        return "{ampm}";
                    case "h":
                    case "H":
                    case "k":
                    case "K":
                        return (t.hour = 2 === e.length ? "2-digit" : "numeric"), "{hour}";
                    case "m":
                        return (t.minute = 2 === e.length ? "2-digit" : "numeric"), "{minute}";
                    case "s":
                        return (t.second = 2 === e.length ? "2-digit" : "numeric"), "{second}";
                    case "z":
                        return (t.timeZoneName = e.length < 4 ? "short" : "long"), "{timeZoneName}";
                }
            })),
            (t.pattern = t.pattern.replace(/'([^']*)'/g, function (e, t) {
                return t || "'";
            })),
            t.pattern.indexOf("{ampm}") > -1 &&
                ((t.hour12 = !0),
                (t.pattern12 = t.pattern),
                (t.pattern = t.pattern.replace("{ampm}", "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""))),
            t
        );
    }
}
