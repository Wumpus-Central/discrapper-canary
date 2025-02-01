(t.createDateTimeFormat = u), (t.createDateTimeFormats = c);
var n = /(?:[Eec]{1,6}|G{1,5}|(?:[yYu]+|U{1,5})|[ML]{1,5}|d{1,2}|a|[hkHK]{1,2}|m{1,2}|s{1,2}|z{1,4})(?=([^']*'[^']*')*[^']*$)/g,
    i = /[QxXVOvZASjgFDwWIQqH]/,
    r = {
        month: ['numeric', '2-digit', 'short', 'long', 'narrow'],
        weekday: ['short', 'short', 'short', 'long', 'narrow'],
        era: ['short', 'short', 'short', 'long', 'narrow']
    },
    a = ['weekday', 'era', 'year', 'month', 'day'],
    s = ['hour', 'minute', 'second', 'timeZoneName'];
function o(e) {
    for (var t = 0; t < s.length; t += 1) if (e.hasOwnProperty(s[t])) return !1;
    return !0;
}
function l(e) {
    for (var t = 0; t < a.length; t += 1) if (e.hasOwnProperty(a[t])) return !1;
    return !0;
}
function u(e) {
    if (!i.test(e)) {
        var t = {};
        return (
            (t.pattern = e.replace(n, function (e) {
                switch (e.charAt(0)) {
                    case 'E':
                    case 'e':
                    case 'c':
                        return (t.weekday = r.weekday[e.length - 1]), '{weekday}';
                    case 'G':
                        return (t.era = r.era[e.length - 1]), '{era}';
                    case 'y':
                    case 'Y':
                    case 'u':
                    case 'U':
                        return (t.year = 2 === e.length ? '2-digit' : 'numeric'), '{year}';
                    case 'M':
                    case 'L':
                        return (t.month = r.month[e.length - 1]), '{month}';
                    case 'd':
                        return (t.day = 2 === e.length ? '2-digit' : 'numeric'), '{day}';
                    case 'a':
                        return '{ampm}';
                    case 'h':
                    case 'H':
                    case 'k':
                    case 'K':
                        return (t.hour = 2 === e.length ? '2-digit' : 'numeric'), '{hour}';
                    case 'm':
                        return (t.minute = 2 === e.length ? '2-digit' : 'numeric'), '{minute}';
                    case 's':
                        return (t.second = 2 === e.length ? '2-digit' : 'numeric'), '{second}';
                    case 'z':
                        return (t.timeZoneName = e.length < 4 ? 'short' : 'long'), '{timeZoneName}';
                }
            })),
            (t.pattern = t.pattern.replace(/'([^']*)'/g, function (e, t) {
                return t || "'";
            })),
            t.pattern.indexOf('{ampm}') > -1 && ((t.hour12 = !0), (t.pattern12 = t.pattern), (t.pattern = t.pattern.replace('{ampm}', '').replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''))),
            t
        );
    }
}
function c(e) {
    var t,
        n,
        i,
        r,
        a,
        s = e.availableFormats,
        c = e.timeFormats,
        d = e.dateFormats,
        f = e.medium,
        _ = [],
        p = [],
        h = [];
    function m(e, t) {
        var n = Array((e.match(/M/g) || []).length + 1),
            i = Array((e.match(/E/g) || []).length + 1);
        return n.length > 2 && (t = t.replace(/(M|L)+/, n.join('$1'))), i.length > 2 && (t = t.replace(/([Eec])+/, i.join('$1'))), t;
    }
    for (t in s) s.hasOwnProperty(t) && (i = u((n = m(t, s[t])))) && (_.push(i), o(i) ? h.push(n) : l(i) && p.push(n));
    for (r = 0; r < p.length; r += 1)
        for (a = 0; a < h.length; a += 1)
            (i = u(
                (n = f
                    .replace('{0}', p[r])
                    .replace('{1}', h[a])
                    .replace(/^[,\s]+|[,\s]+$/gi, ''))
            )) && _.push(i);
    for (t in c) c.hasOwnProperty(t) && (i = u((n = m(t, c[t])))) && _.push(i);
    for (t in d) d.hasOwnProperty(t) && (i = u((n = m(t, d[t])))) && _.push(i);
    return _;
}
