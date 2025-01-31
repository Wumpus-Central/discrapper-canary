n.d(t, {
    B: () => l,
    o: () => u
});
var i = n(146150),
    r = n(707908),
    a = n(713267),
    s = n(695170),
    o = n(812975);
function l(e) {
    var t = e
        .split('\n')
        .map(c)
        .filter(function (e) {
            return null !== e;
        });
    return (0, i.pi)((0, i.pi)({}, t[0]), t[1]);
}
function u(e) {
    var t = {},
        n = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i.exec(e);
    if (!n) return t;
    var i = n[1],
        r = n[2];
    return i && (t.tzid = i), (t.dtstart = (0, s.gE)(r)), t;
}
function c(e) {
    if (!(e = e.replace(/^\s+|\s+$/, '')).length) return null;
    var t = /^([A-Z]+?)[:;]/.exec(e.toUpperCase());
    if (!t) return d(e);
    var n = t[1];
    switch (n.toUpperCase()) {
        case 'RRULE':
        case 'EXRULE':
            return d(e);
        case 'DTSTART':
            return u(e);
        default:
            throw Error('Unsupported RFC prop '.concat(n, ' in ').concat(e));
    }
}
function d(e) {
    var t = u(e.replace(/^RRULE:/i, ''));
    return (
        e
            .replace(/^(?:RRULE|EXRULE):/i, '')
            .split(';')
            .forEach(function (n) {
                var i = n.split('='),
                    a = i[0],
                    l = i[1];
                switch (a.toUpperCase()) {
                    case 'FREQ':
                        t.freq = r.D[l.toUpperCase()];
                        break;
                    case 'WKST':
                        t.wkst = o.hn[l.toUpperCase()];
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
                        var c = f(l);
                        t[a.toLowerCase()] = c;
                        break;
                    case 'BYWEEKDAY':
                    case 'BYDAY':
                        t.byweekday = p(l);
                        break;
                    case 'DTSTART':
                    case 'TZID':
                        var d = u(e);
                        (t.tzid = d.tzid), (t.dtstart = d.dtstart);
                        break;
                    case 'UNTIL':
                        t.until = (0, s.gE)(l);
                        break;
                    case 'BYEASTER':
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
    return -1 !== e.indexOf(',') ? e.split(',').map(_) : _(e);
}
function _(e) {
    return /^[+-]?\d+$/.test(e) ? Number(e) : e;
}
function p(e) {
    return e.split(',').map(function (e) {
        if (2 === e.length) return o.hn[e];
        var t = e.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
        if (!t || t.length < 3) throw SyntaxError('Invalid weekday string: '.concat(e));
        var n = Number(t[1]),
            i = t[2],
            r = o.hn[i].weekday;
        return new a.O(r, n);
    });
}
