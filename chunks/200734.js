n.d(t, {
    B: () => l,
    o: () => c
});
var r = n(146150),
    i = n(707908),
    o = n(713267),
    a = n(695170),
    s = n(812975);
function l(e) {
    var t = e
        .split('\n')
        .map(u)
        .filter(function (e) {
            return null !== e;
        });
    return (0, r.pi)((0, r.pi)({}, t[0]), t[1]);
}
function c(e) {
    var t = {},
        n = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i.exec(e);
    if (!n) return t;
    var r = n[1],
        i = n[2];
    return r && (t.tzid = r), (t.dtstart = (0, a.gE)(i)), t;
}
function u(e) {
    if (!(e = e.replace(/^\s+|\s+$/, '')).length) return null;
    var t = /^([A-Z]+?)[:;]/.exec(e.toUpperCase());
    if (!t) return d(e);
    var n = t[1];
    switch (n.toUpperCase()) {
        case 'RRULE':
        case 'EXRULE':
            return d(e);
        case 'DTSTART':
            return c(e);
        default:
            throw Error('Unsupported RFC prop '.concat(n, ' in ').concat(e));
    }
}
function d(e) {
    var t = c(e.replace(/^RRULE:/i, ''));
    return (
        e
            .replace(/^(?:RRULE|EXRULE):/i, '')
            .split(';')
            .forEach(function (n) {
                var r = n.split('='),
                    o = r[0],
                    l = r[1];
                switch (o.toUpperCase()) {
                    case 'FREQ':
                        t.freq = i.D[l.toUpperCase()];
                        break;
                    case 'WKST':
                        t.wkst = s.hn[l.toUpperCase()];
                        break;
                    case 'COUNT':
                    case 'INTERVAL':
                    case 'BYSETPOS':
                    case 'BYMONTH':
                    case 'BYMONTHDAY':
                    case 'BYYEARDAY':
                    case 'BYWEEKNO':
                    case 'BYHOUR':
                    case 'BYMINUTE':
                    case 'BYSECOND':
                        var u = f(l);
                        t[o.toLowerCase()] = u;
                        break;
                    case 'BYWEEKDAY':
                    case 'BYDAY':
                        t.byweekday = p(l);
                        break;
                    case 'DTSTART':
                    case 'TZID':
                        var d = c(e);
                        (t.tzid = d.tzid), (t.dtstart = d.dtstart);
                        break;
                    case 'UNTIL':
                        t.until = (0, a.gE)(l);
                        break;
                    case 'BYEASTER':
                        t.byeaster = Number(l);
                        break;
                    default:
                        throw Error("Unknown RRULE property '" + o + "'");
                }
            }),
        t
    );
}
function f(e) {
    return -1 !== e.indexOf(',') ? e.split(',').map(_) : _(e);
}
function _(e) {
    return /^[+-]?\d+$/.test(e) ? Number(e) : e;
}
function p(e) {
    return e.split(',').map(function (e) {
        if (2 === e.length) return s.hn[e];
        var t = e.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
        if (!t || t.length < 3) throw SyntaxError('Invalid weekday string: '.concat(e));
        var n = Number(t[1]),
            r = t[2],
            i = s.hn[r].weekday;
        return new o.O(i, n);
    });
}
