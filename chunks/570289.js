n.d(t, { Z: () => p });
var i = n(682404),
    r = n(657006),
    a = n(665771),
    s = n(217764),
    o = n(193603),
    l = n(119352),
    u = n(80383),
    c = {
        midnight: 'midnight',
        noon: 'noon',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night'
    };
function d(e, t) {
    var n = e > 0 ? '-' : '+',
        i = Math.abs(e),
        r = Math.floor(i / 60),
        a = i % 60;
    if (0 === a) return n + String(r);
    var s = t || '';
    return n + String(r) + s + (0, l.Z)(a, 2);
}
function f(e, t) {
    return e % 60 == 0 ? (e > 0 ? '-' : '+') + (0, l.Z)(Math.abs(e) / 60, 2) : _(e, t);
}
function _(e, t) {
    var n = t || '',
        i = e > 0 ? '-' : '+',
        r = Math.abs(e);
    return i + (0, l.Z)(Math.floor(r / 60), 2) + n + (0, l.Z)(r % 60, 2);
}
let p = {
    G: function (e, t, n) {
        var i = e.getUTCFullYear() > 0 ? 1 : 0;
        switch (t) {
            case 'G':
            case 'GG':
            case 'GGG':
                return n.era(i, { width: 'abbreviated' });
            case 'GGGGG':
                return n.era(i, { width: 'narrow' });
            default:
                return n.era(i, { width: 'wide' });
        }
    },
    y: function (e, t, n) {
        if ('yo' === t) {
            var i = e.getUTCFullYear(),
                r = i > 0 ? i : 1 - i;
            return n.ordinalNumber(r, { unit: 'year' });
        }
        return u.Z.y(e, t);
    },
    Y: function (e, t, n, i) {
        var r = (0, o.Z)(e, i),
            a = r > 0 ? r : 1 - r;
        if ('YY' === t) {
            var s = a % 100;
            return (0, l.Z)(s, 2);
        }
        return 'Yo' === t ? n.ordinalNumber(a, { unit: 'year' }) : (0, l.Z)(a, t.length);
    },
    R: function (e, t) {
        var n = (0, a.Z)(e);
        return (0, l.Z)(n, t.length);
    },
    u: function (e, t) {
        var n = e.getUTCFullYear();
        return (0, l.Z)(n, t.length);
    },
    Q: function (e, t, n) {
        var i = Math.ceil((e.getUTCMonth() + 1) / 3);
        switch (t) {
            case 'Q':
                return String(i);
            case 'QQ':
                return (0, l.Z)(i, 2);
            case 'Qo':
                return n.ordinalNumber(i, { unit: 'quarter' });
            case 'QQQ':
                return n.quarter(i, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            case 'QQQQQ':
                return n.quarter(i, {
                    width: 'narrow',
                    context: 'formatting'
                });
            default:
                return n.quarter(i, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    q: function (e, t, n) {
        var i = Math.ceil((e.getUTCMonth() + 1) / 3);
        switch (t) {
            case 'q':
                return String(i);
            case 'qq':
                return (0, l.Z)(i, 2);
            case 'qo':
                return n.ordinalNumber(i, { unit: 'quarter' });
            case 'qqq':
                return n.quarter(i, {
                    width: 'abbreviated',
                    context: 'standalone'
                });
            case 'qqqqq':
                return n.quarter(i, {
                    width: 'narrow',
                    context: 'standalone'
                });
            default:
                return n.quarter(i, {
                    width: 'wide',
                    context: 'standalone'
                });
        }
    },
    M: function (e, t, n) {
        var i = e.getUTCMonth();
        switch (t) {
            case 'M':
            case 'MM':
                return u.Z.M(e, t);
            case 'Mo':
                return n.ordinalNumber(i + 1, { unit: 'month' });
            case 'MMM':
                return n.month(i, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            case 'MMMMM':
                return n.month(i, {
                    width: 'narrow',
                    context: 'formatting'
                });
            default:
                return n.month(i, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    L: function (e, t, n) {
        var i = e.getUTCMonth();
        switch (t) {
            case 'L':
                return String(i + 1);
            case 'LL':
                return (0, l.Z)(i + 1, 2);
            case 'Lo':
                return n.ordinalNumber(i + 1, { unit: 'month' });
            case 'LLL':
                return n.month(i, {
                    width: 'abbreviated',
                    context: 'standalone'
                });
            case 'LLLLL':
                return n.month(i, {
                    width: 'narrow',
                    context: 'standalone'
                });
            default:
                return n.month(i, {
                    width: 'wide',
                    context: 'standalone'
                });
        }
    },
    w: function (e, t, n, i) {
        var r = (0, s.Z)(e, i);
        return 'wo' === t ? n.ordinalNumber(r, { unit: 'week' }) : (0, l.Z)(r, t.length);
    },
    I: function (e, t, n) {
        var i = (0, r.Z)(e);
        return 'Io' === t ? n.ordinalNumber(i, { unit: 'week' }) : (0, l.Z)(i, t.length);
    },
    d: function (e, t, n) {
        return 'do' === t ? n.ordinalNumber(e.getUTCDate(), { unit: 'date' }) : u.Z.d(e, t);
    },
    D: function (e, t, n) {
        var r = (0, i.Z)(e);
        return 'Do' === t ? n.ordinalNumber(r, { unit: 'dayOfYear' }) : (0, l.Z)(r, t.length);
    },
    E: function (e, t, n) {
        var i = e.getUTCDay();
        switch (t) {
            case 'E':
            case 'EE':
            case 'EEE':
                return n.day(i, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            case 'EEEEE':
                return n.day(i, {
                    width: 'narrow',
                    context: 'formatting'
                });
            case 'EEEEEE':
                return n.day(i, {
                    width: 'short',
                    context: 'formatting'
                });
            default:
                return n.day(i, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    e: function (e, t, n, i) {
        var r = e.getUTCDay(),
            a = (r - i.weekStartsOn + 8) % 7 || 7;
        switch (t) {
            case 'e':
                return String(a);
            case 'ee':
                return (0, l.Z)(a, 2);
            case 'eo':
                return n.ordinalNumber(a, { unit: 'day' });
            case 'eee':
                return n.day(r, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            case 'eeeee':
                return n.day(r, {
                    width: 'narrow',
                    context: 'formatting'
                });
            case 'eeeeee':
                return n.day(r, {
                    width: 'short',
                    context: 'formatting'
                });
            default:
                return n.day(r, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    c: function (e, t, n, i) {
        var r = e.getUTCDay(),
            a = (r - i.weekStartsOn + 8) % 7 || 7;
        switch (t) {
            case 'c':
                return String(a);
            case 'cc':
                return (0, l.Z)(a, t.length);
            case 'co':
                return n.ordinalNumber(a, { unit: 'day' });
            case 'ccc':
                return n.day(r, {
                    width: 'abbreviated',
                    context: 'standalone'
                });
            case 'ccccc':
                return n.day(r, {
                    width: 'narrow',
                    context: 'standalone'
                });
            case 'cccccc':
                return n.day(r, {
                    width: 'short',
                    context: 'standalone'
                });
            default:
                return n.day(r, {
                    width: 'wide',
                    context: 'standalone'
                });
        }
    },
    i: function (e, t, n) {
        var i = e.getUTCDay(),
            r = 0 === i ? 7 : i;
        switch (t) {
            case 'i':
                return String(r);
            case 'ii':
                return (0, l.Z)(r, t.length);
            case 'io':
                return n.ordinalNumber(r, { unit: 'day' });
            case 'iii':
                return n.day(i, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            case 'iiiii':
                return n.day(i, {
                    width: 'narrow',
                    context: 'formatting'
                });
            case 'iiiiii':
                return n.day(i, {
                    width: 'short',
                    context: 'formatting'
                });
            default:
                return n.day(i, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    a: function (e, t, n) {
        var i = e.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
        switch (t) {
            case 'a':
            case 'aa':
                return n.dayPeriod(i, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            case 'aaa':
                return n
                    .dayPeriod(i, {
                        width: 'abbreviated',
                        context: 'formatting'
                    })
                    .toLowerCase();
            case 'aaaaa':
                return n.dayPeriod(i, {
                    width: 'narrow',
                    context: 'formatting'
                });
            default:
                return n.dayPeriod(i, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    b: function (e, t, n) {
        var i,
            r = e.getUTCHours();
        switch (((i = 12 === r ? c.noon : 0 === r ? c.midnight : r / 12 >= 1 ? 'pm' : 'am'), t)) {
            case 'b':
            case 'bb':
                return n.dayPeriod(i, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            case 'bbb':
                return n
                    .dayPeriod(i, {
                        width: 'abbreviated',
                        context: 'formatting'
                    })
                    .toLowerCase();
            case 'bbbbb':
                return n.dayPeriod(i, {
                    width: 'narrow',
                    context: 'formatting'
                });
            default:
                return n.dayPeriod(i, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    B: function (e, t, n) {
        var i,
            r = e.getUTCHours();
        switch (((i = r >= 17 ? c.evening : r >= 12 ? c.afternoon : r >= 4 ? c.morning : c.night), t)) {
            case 'B':
            case 'BB':
            case 'BBB':
                return n.dayPeriod(i, {
                    width: 'abbreviated',
                    context: 'formatting'
                });
            case 'BBBBB':
                return n.dayPeriod(i, {
                    width: 'narrow',
                    context: 'formatting'
                });
            default:
                return n.dayPeriod(i, {
                    width: 'wide',
                    context: 'formatting'
                });
        }
    },
    h: function (e, t, n) {
        if ('ho' === t) {
            var i = e.getUTCHours() % 12;
            return 0 === i && (i = 12), n.ordinalNumber(i, { unit: 'hour' });
        }
        return u.Z.h(e, t);
    },
    H: function (e, t, n) {
        return 'Ho' === t ? n.ordinalNumber(e.getUTCHours(), { unit: 'hour' }) : u.Z.H(e, t);
    },
    K: function (e, t, n) {
        var i = e.getUTCHours() % 12;
        return 'Ko' === t ? n.ordinalNumber(i, { unit: 'hour' }) : (0, l.Z)(i, t.length);
    },
    k: function (e, t, n) {
        var i = e.getUTCHours();
        return (0 === i && (i = 24), 'ko' === t) ? n.ordinalNumber(i, { unit: 'hour' }) : (0, l.Z)(i, t.length);
    },
    m: function (e, t, n) {
        return 'mo' === t ? n.ordinalNumber(e.getUTCMinutes(), { unit: 'minute' }) : u.Z.m(e, t);
    },
    s: function (e, t, n) {
        return 'so' === t ? n.ordinalNumber(e.getUTCSeconds(), { unit: 'second' }) : u.Z.s(e, t);
    },
    S: function (e, t) {
        return u.Z.S(e, t);
    },
    X: function (e, t, n, i) {
        var r = (i._originalDate || e).getTimezoneOffset();
        if (0 === r) return 'Z';
        switch (t) {
            case 'X':
                return f(r);
            case 'XXXX':
            case 'XX':
                return _(r);
            default:
                return _(r, ':');
        }
    },
    x: function (e, t, n, i) {
        var r = (i._originalDate || e).getTimezoneOffset();
        switch (t) {
            case 'x':
                return f(r);
            case 'xxxx':
            case 'xx':
                return _(r);
            default:
                return _(r, ':');
        }
    },
    O: function (e, t, n, i) {
        var r = (i._originalDate || e).getTimezoneOffset();
        switch (t) {
            case 'O':
            case 'OO':
            case 'OOO':
                return 'GMT' + d(r, ':');
            default:
                return 'GMT' + _(r, ':');
        }
    },
    z: function (e, t, n, i) {
        var r = (i._originalDate || e).getTimezoneOffset();
        switch (t) {
            case 'z':
            case 'zz':
            case 'zzz':
                return 'GMT' + d(r, ':');
            default:
                return 'GMT' + _(r, ':');
        }
    },
    t: function (e, t, n, i) {
        var r = Math.floor((i._originalDate || e).getTime() / 1000);
        return (0, l.Z)(r, t.length);
    },
    T: function (e, t, n, i) {
        var r = (i._originalDate || e).getTime();
        return (0, l.Z)(r, t.length);
    }
};
