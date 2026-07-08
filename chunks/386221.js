"use strict";
(t.createDateTimeFormat = u),
    (t.createDateTimeFormats = function (e) {
        var t,
            r,
            n,
            i,
            o,
            a = e.availableFormats,
            c = e.timeFormats,
            f = e.dateFormats,
            d = e.medium,
            p = [],
            h = [],
            m = [];
        function g(e, t) {
            var r = Array((e.match(/M/g) || []).length + 1),
                n = Array((e.match(/E/g) || []).length + 1);
            return (
                r.length > 2 && (t = t.replace(/(M|L)+/, r.join("$1"))),
                n.length > 2 && (t = t.replace(/([Eec])+/, n.join("$1"))),
                t
            );
        }
        for (t in a)
            a.hasOwnProperty(t) &&
                (n = u((r = g(t, a[t])))) &&
                (p.push(n),
                (function (e) {
                    for (var t = 0; t < l.length; t += 1) if (e.hasOwnProperty(l[t])) return !1;
                    return !0;
                })(n)
                    ? m.push(r)
                    : (function (e) {
                          for (var t = 0; t < s.length; t += 1) if (e.hasOwnProperty(s[t])) return !1;
                          return !0;
                      })(n) && h.push(r));
        for (i = 0; i < h.length; i += 1)
            for (o = 0; o < m.length; o += 1)
                (n = u(
                    (r = d
                        .replace("{0}", h[i])
                        .replace("{1}", m[o])
                        .replace(/^[,\s]+|[,\s]+$/gi, "")),
                )) && p.push(n);
        for (t in c) c.hasOwnProperty(t) && (n = u((r = g(t, c[t])))) && p.push(n);
        for (t in f) f.hasOwnProperty(t) && (n = u((r = g(t, f[t])))) && p.push(n);
        return p;
    });
var r =
        /(?:[Eec]{1,6}|G{1,5}|(?:[yYu]+|U{1,5})|[ML]{1,5}|d{1,2}|a|[hkHK]{1,2}|m{1,2}|s{1,2}|z{1,4})(?=([^']*'[^']*')*[^']*$)/g,
    n = /[QxXVOvZASjgFDwWIQqH]/,
    i = ["numeric", "2-digit", "short", "long", "narrow"],
    o = ["short", "short", "short", "long", "narrow"],
    a = ["short", "short", "short", "long", "narrow"],
    s = ["weekday", "era", "year", "month", "day"],
    l = ["hour", "minute", "second", "timeZoneName"];
function u(e) {
    if (!n.test(e)) {
        var t = {};
        return (
            (t.pattern = e.replace(r, function (e) {
                switch (e.charAt(0)) {
                    case "E":
                    case "e":
                    case "c":
                        return (t.weekday = o[e.length - 1]), "{weekday}";
                    case "G":
                        return (t.era = a[e.length - 1]), "{era}";
                    case "y":
                    case "Y":
                    case "u":
                    case "U":
                        return (t.year = 2 === e.length ? "2-digit" : "numeric"), "{year}";
                    case "M":
                    case "L":
                        return (t.month = i[e.length - 1]), "{month}";
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
