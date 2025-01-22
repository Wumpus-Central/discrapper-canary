(n.createDateTimeFormat = c), (n.createDateTimeFormats = d);
var r = /(?:[Eec]{1,6}|G{1,5}|(?:[yYu]+|U{1,5})|[ML]{1,5}|d{1,2}|a|[hkHK]{1,2}|m{1,2}|s{1,2}|z{1,4})(?=([^']*'[^']*')*[^']*$)/g,
    i = /[QxXVOvZASjgFDwWIQqH]/,
    a = {
        month: ['numeric', '2-digit', 'short', 'long', 'narrow'],
        weekday: ['short', 'short', 'short', 'long', 'narrow'],
        era: ['short', 'short', 'short', 'long', 'narrow']
    },
    o = ['weekday', 'era', 'year', 'month', 'day'],
    s = ['hour', 'minute', 'second', 'timeZoneName'];
function l(e) {
    for (var n = 0; n < s.length; n += 1) if (e.hasOwnProperty(s[n])) return !1;
    return !0;
}
function u(e) {
    for (var n = 0; n < o.length; n += 1) if (e.hasOwnProperty(o[n])) return !1;
    return !0;
}
function c(e) {
    if (!i.test(e)) {
        var n = {};
        return (
            (n.pattern = e.replace(r, function (e) {
                switch (e.charAt(0)) {
                    case 'E':
                    case 'e':
                    case 'c':
                        return (n.weekday = a.weekday[e.length - 1]), '{weekday}';
                    case 'G':
                        return (n.era = a.era[e.length - 1]), '{era}';
                    case 'y':
                    case 'Y':
                    case 'u':
                    case 'U':
                        return (n.year = 2 === e.length ? '2-digit' : 'numeric'), '{year}';
                    case 'M':
                    case 'L':
                        return (n.month = a.month[e.length - 1]), '{month}';
                    case 'd':
                        return (n.day = 2 === e.length ? '2-digit' : 'numeric'), '{day}';
                    case 'a':
                        return '{ampm}';
                    case 'h':
                    case 'H':
                    case 'k':
                    case 'K':
                        return (n.hour = 2 === e.length ? '2-digit' : 'numeric'), '{hour}';
                    case 'm':
                        return (n.minute = 2 === e.length ? '2-digit' : 'numeric'), '{minute}';
                    case 's':
                        return (n.second = 2 === e.length ? '2-digit' : 'numeric'), '{second}';
                    case 'z':
                        return (n.timeZoneName = e.length < 4 ? 'short' : 'long'), '{timeZoneName}';
                }
            })),
            (n.pattern = n.pattern.replace(/'([^']*)'/g, function (e, n) {
                return n || "'";
            })),
            n.pattern.indexOf('{ampm}') > -1 && ((n.hour12 = !0), (n.pattern12 = n.pattern), (n.pattern = n.pattern.replace('{ampm}', '').replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''))),
            n
        );
    }
}
function d(e) {
    var n,
        r,
        i,
        a,
        o,
        s = e.availableFormats,
        d = e.timeFormats,
        f = e.dateFormats,
        p = e.medium,
        h = [],
        _ = [],
        m = [];
    function g(e, n) {
        var r = Array((e.match(/M/g) || []).length + 1),
            i = Array((e.match(/E/g) || []).length + 1);
        return r.length > 2 && (n = n.replace(/(M|L)+/, r.join('$1'))), i.length > 2 && (n = n.replace(/([Eec])+/, i.join('$1'))), n;
    }
    for (n in s) s.hasOwnProperty(n) && (i = c((r = g(n, s[n])))) && (h.push(i), l(i) ? m.push(r) : u(i) && _.push(r));
    for (a = 0; a < _.length; a += 1)
        for (o = 0; o < m.length; o += 1)
            (i = c(
                (r = p
                    .replace('{0}', _[a])
                    .replace('{1}', m[o])
                    .replace(/^[,\s]+|[,\s]+$/gi, ''))
            )) && h.push(i);
    for (n in d) d.hasOwnProperty(n) && (i = c((r = g(n, d[n])))) && h.push(i);
    for (n in f) f.hasOwnProperty(n) && (i = c((r = g(n, f[n])))) && h.push(i);
    return h;
}
