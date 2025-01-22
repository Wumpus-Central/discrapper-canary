r.d(n, {
    B: function () {
        return u;
    },
    o: function () {
        return c;
    }
});
var i = r(146150),
    a = r(707908),
    o = r(713267),
    s = r(695170),
    l = r(812975);
function u(e) {
    var n = e
        .split('\n')
        .map(d)
        .filter(function (e) {
            return null !== e;
        });
    return (0, i.pi)((0, i.pi)({}, n[0]), n[1]);
}
function c(e) {
    var n = {},
        r = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i.exec(e);
    if (!r) return n;
    var i = r[1],
        a = r[2];
    return i && (n.tzid = i), (n.dtstart = (0, s.gE)(a)), n;
}
function d(e) {
    if (!(e = e.replace(/^\s+|\s+$/, '')).length) return null;
    var n = /^([A-Z]+?)[:;]/.exec(e.toUpperCase());
    if (!n) return f(e);
    var r = n[1];
    switch (r.toUpperCase()) {
        case 'RRULE':
        case 'EXRULE':
            return f(e);
        case 'DTSTART':
            return c(e);
        default:
            throw Error('Unsupported RFC prop '.concat(r, ' in ').concat(e));
    }
}
function f(e) {
    var n = c(e.replace(/^RRULE:/i, ''));
    return (
        e
            .replace(/^(?:RRULE|EXRULE):/i, '')
            .split(';')
            .forEach(function (r) {
                var i = r.split('='),
                    o = i[0],
                    u = i[1];
                switch (o.toUpperCase()) {
                    case 'FREQ':
                        n.freq = a.D[u.toUpperCase()];
                        break;
                    case 'WKST':
                        n.wkst = l.hn[u.toUpperCase()];
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
                        var d = p(u);
                        n[o.toLowerCase()] = d;
                        break;
                    case 'BYWEEKDAY':
                    case 'BYDAY':
                        n.byweekday = _(u);
                        break;
                    case 'DTSTART':
                    case 'TZID':
                        var f = c(e);
                        (n.tzid = f.tzid), (n.dtstart = f.dtstart);
                        break;
                    case 'UNTIL':
                        n.until = (0, s.gE)(u);
                        break;
                    case 'BYEASTER':
                        n.byeaster = Number(u);
                        break;
                    default:
                        throw Error("Unknown RRULE property '" + o + "'");
                }
            }),
        n
    );
}
function p(e) {
    return -1 !== e.indexOf(',') ? e.split(',').map(h) : h(e);
}
function h(e) {
    return /^[+-]?\d+$/.test(e) ? Number(e) : e;
}
function _(e) {
    return e.split(',').map(function (e) {
        if (2 === e.length) return l.hn[e];
        var n = e.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
        if (!n || n.length < 3) throw SyntaxError('Invalid weekday string: '.concat(e));
        var r = Number(n[1]),
            i = n[2],
            a = l.hn[i].weekday;
        return new o.O(a, r);
    });
}
