"use strict";
(t.createDateTimeFormat = u),
    (t.createDateTimeFormats = function (e) {
        var t,
            r,
            n,
            a,
            s,
            i = e.availableFormats,
            c = e.timeFormats,
            d = e.dateFormats,
            f = e.medium,
            p = [],
            h = [],
            m = [];
        function _(e, t) {
            var r = Array((e.match(/M/g) || []).length + 1),
                n = Array((e.match(/E/g) || []).length + 1);
            return (
                r.length > 2 && (t = t.replace(/(M|L)+/, r.join("$1"))),
                n.length > 2 && (t = t.replace(/([Eec])+/, n.join("$1"))),
                t
            );
        }
        for (t in i)
            i.hasOwnProperty(t) &&
                (n = u((r = _(t, i[t])))) &&
                (p.push(n),
                (function (e) {
                    for (var t = 0; t < l.length; t += 1) if (e.hasOwnProperty(l[t])) return !1;
                    return !0;
                })(n)
                    ? m.push(r)
                    : (function (e) {
                          for (var t = 0; t < o.length; t += 1) if (e.hasOwnProperty(o[t])) return !1;
                          return !0;
                      })(n) && h.push(r));
        for (a = 0; a < h.length; a += 1)
            for (s = 0; s < m.length; s += 1)
                (n = u(
                    (r = f
                        .replace("{0}", h[a])
                        .replace("{1}", m[s])
                        .replace(/^[,\s]+|[,\s]+$/gi, "")),
                )) && p.push(n);
        for (t in c) c.hasOwnProperty(t) && (n = u((r = _(t, c[t])))) && p.push(n);
        for (t in d) d.hasOwnProperty(t) && (n = u((r = _(t, d[t])))) && p.push(n);
        return p;
    });
var r =
        /(?:[Eec]{1,6}|G{1,5}|(?:[yYu]+|U{1,5})|[ML]{1,5}|d{1,2}|a|[hkHK]{1,2}|m{1,2}|s{1,2}|z{1,4})(?=([^']*'[^']*')*[^']*$)/g,
    n = /[QxXVOvZASjgFDwWIQqH]/,
    a = ["numeric", "2-digit", "short", "long", "narrow"],
    s = ["short", "short", "short", "long", "narrow"],
    i = ["short", "short", "short", "long", "narrow"],
    o = ["weekday", "era", "year", "month", "day"],
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
                        return (t.weekday = s[e.length - 1]), "{weekday}";
                    case "G":
                        return (t.era = i[e.length - 1]), "{era}";
                    case "y":
                    case "Y":
                    case "u":
                    case "U":
                        return (t.year = 2 === e.length ? "2-digit" : "numeric"), "{year}";
                    case "M":
                    case "L":
                        return (t.month = a[e.length - 1]), "{month}";
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
