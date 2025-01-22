var i = r(682404),
    a = r(657006),
    o = r(665771),
    s = r(217764),
    l = r(193603),
    u = r(119352),
    c = r(80383),
    d = {
        midnight: 'midnight',
        noon: 'noon',
        morning: 'morning',
        afternoon: 'afternoon',
        evening: 'evening',
        night: 'night'
    },
    f = {
        G: function (e, n, r) {
            var i = e.getUTCFullYear() > 0 ? 1 : 0;
            switch (n) {
                case 'G':
                case 'GG':
                case 'GGG':
                    return r.era(i, { width: 'abbreviated' });
                case 'GGGGG':
                    return r.era(i, { width: 'narrow' });
                default:
                    return r.era(i, { width: 'wide' });
            }
        },
        y: function (e, n, r) {
            if ('yo' === n) {
                var i = e.getUTCFullYear(),
                    a = i > 0 ? i : 1 - i;
                return r.ordinalNumber(a, { unit: 'year' });
            }
            return c.Z.y(e, n);
        },
        Y: function (e, n, r, i) {
            var a = (0, l.Z)(e, i),
                o = a > 0 ? a : 1 - a;
            if ('YY' === n) {
                var s = o % 100;
                return (0, u.Z)(s, 2);
            }
            return 'Yo' === n ? r.ordinalNumber(o, { unit: 'year' }) : (0, u.Z)(o, n.length);
        },
        R: function (e, n) {
            var r = (0, o.Z)(e);
            return (0, u.Z)(r, n.length);
        },
        u: function (e, n) {
            var r = e.getUTCFullYear();
            return (0, u.Z)(r, n.length);
        },
        Q: function (e, n, r) {
            var i = Math.ceil((e.getUTCMonth() + 1) / 3);
            switch (n) {
                case 'Q':
                    return String(i);
                case 'QQ':
                    return (0, u.Z)(i, 2);
                case 'Qo':
                    return r.ordinalNumber(i, { unit: 'quarter' });
                case 'QQQ':
                    return r.quarter(i, {
                        width: 'abbreviated',
                        context: 'formatting'
                    });
                case 'QQQQQ':
                    return r.quarter(i, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                default:
                    return r.quarter(i, {
                        width: 'wide',
                        context: 'formatting'
                    });
            }
        },
        q: function (e, n, r) {
            var i = Math.ceil((e.getUTCMonth() + 1) / 3);
            switch (n) {
                case 'q':
                    return String(i);
                case 'qq':
                    return (0, u.Z)(i, 2);
                case 'qo':
                    return r.ordinalNumber(i, { unit: 'quarter' });
                case 'qqq':
                    return r.quarter(i, {
                        width: 'abbreviated',
                        context: 'standalone'
                    });
                case 'qqqqq':
                    return r.quarter(i, {
                        width: 'narrow',
                        context: 'standalone'
                    });
                default:
                    return r.quarter(i, {
                        width: 'wide',
                        context: 'standalone'
                    });
            }
        },
        M: function (e, n, r) {
            var i = e.getUTCMonth();
            switch (n) {
                case 'M':
                case 'MM':
                    return c.Z.M(e, n);
                case 'Mo':
                    return r.ordinalNumber(i + 1, { unit: 'month' });
                case 'MMM':
                    return r.month(i, {
                        width: 'abbreviated',
                        context: 'formatting'
                    });
                case 'MMMMM':
                    return r.month(i, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                default:
                    return r.month(i, {
                        width: 'wide',
                        context: 'formatting'
                    });
            }
        },
        L: function (e, n, r) {
            var i = e.getUTCMonth();
            switch (n) {
                case 'L':
                    return String(i + 1);
                case 'LL':
                    return (0, u.Z)(i + 1, 2);
                case 'Lo':
                    return r.ordinalNumber(i + 1, { unit: 'month' });
                case 'LLL':
                    return r.month(i, {
                        width: 'abbreviated',
                        context: 'standalone'
                    });
                case 'LLLLL':
                    return r.month(i, {
                        width: 'narrow',
                        context: 'standalone'
                    });
                default:
                    return r.month(i, {
                        width: 'wide',
                        context: 'standalone'
                    });
            }
        },
        w: function (e, n, r, i) {
            var a = (0, s.Z)(e, i);
            return 'wo' === n ? r.ordinalNumber(a, { unit: 'week' }) : (0, u.Z)(a, n.length);
        },
        I: function (e, n, r) {
            var i = (0, a.Z)(e);
            return 'Io' === n ? r.ordinalNumber(i, { unit: 'week' }) : (0, u.Z)(i, n.length);
        },
        d: function (e, n, r) {
            return 'do' === n ? r.ordinalNumber(e.getUTCDate(), { unit: 'date' }) : c.Z.d(e, n);
        },
        D: function (e, n, r) {
            var a = (0, i.Z)(e);
            return 'Do' === n ? r.ordinalNumber(a, { unit: 'dayOfYear' }) : (0, u.Z)(a, n.length);
        },
        E: function (e, n, r) {
            var i = e.getUTCDay();
            switch (n) {
                case 'E':
                case 'EE':
                case 'EEE':
                    return r.day(i, {
                        width: 'abbreviated',
                        context: 'formatting'
                    });
                case 'EEEEE':
                    return r.day(i, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                case 'EEEEEE':
                    return r.day(i, {
                        width: 'short',
                        context: 'formatting'
                    });
                default:
                    return r.day(i, {
                        width: 'wide',
                        context: 'formatting'
                    });
            }
        },
        e: function (e, n, r, i) {
            var a = e.getUTCDay(),
                o = (a - i.weekStartsOn + 8) % 7 || 7;
            switch (n) {
                case 'e':
                    return String(o);
                case 'ee':
                    return (0, u.Z)(o, 2);
                case 'eo':
                    return r.ordinalNumber(o, { unit: 'day' });
                case 'eee':
                    return r.day(a, {
                        width: 'abbreviated',
                        context: 'formatting'
                    });
                case 'eeeee':
                    return r.day(a, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                case 'eeeeee':
                    return r.day(a, {
                        width: 'short',
                        context: 'formatting'
                    });
                default:
                    return r.day(a, {
                        width: 'wide',
                        context: 'formatting'
                    });
            }
        },
        c: function (e, n, r, i) {
            var a = e.getUTCDay(),
                o = (a - i.weekStartsOn + 8) % 7 || 7;
            switch (n) {
                case 'c':
                    return String(o);
                case 'cc':
                    return (0, u.Z)(o, n.length);
                case 'co':
                    return r.ordinalNumber(o, { unit: 'day' });
                case 'ccc':
                    return r.day(a, {
                        width: 'abbreviated',
                        context: 'standalone'
                    });
                case 'ccccc':
                    return r.day(a, {
                        width: 'narrow',
                        context: 'standalone'
                    });
                case 'cccccc':
                    return r.day(a, {
                        width: 'short',
                        context: 'standalone'
                    });
                default:
                    return r.day(a, {
                        width: 'wide',
                        context: 'standalone'
                    });
            }
        },
        i: function (e, n, r) {
            var i = e.getUTCDay(),
                a = 0 === i ? 7 : i;
            switch (n) {
                case 'i':
                    return String(a);
                case 'ii':
                    return (0, u.Z)(a, n.length);
                case 'io':
                    return r.ordinalNumber(a, { unit: 'day' });
                case 'iii':
                    return r.day(i, {
                        width: 'abbreviated',
                        context: 'formatting'
                    });
                case 'iiiii':
                    return r.day(i, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                case 'iiiiii':
                    return r.day(i, {
                        width: 'short',
                        context: 'formatting'
                    });
                default:
                    return r.day(i, {
                        width: 'wide',
                        context: 'formatting'
                    });
            }
        },
        a: function (e, n, r) {
            var i = e.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
            switch (n) {
                case 'a':
                case 'aa':
                    return r.dayPeriod(i, {
                        width: 'abbreviated',
                        context: 'formatting'
                    });
                case 'aaa':
                    return r
                        .dayPeriod(i, {
                            width: 'abbreviated',
                            context: 'formatting'
                        })
                        .toLowerCase();
                case 'aaaaa':
                    return r.dayPeriod(i, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                default:
                    return r.dayPeriod(i, {
                        width: 'wide',
                        context: 'formatting'
                    });
            }
        },
        b: function (e, n, r) {
            var i,
                a = e.getUTCHours();
            switch (((i = 12 === a ? d.noon : 0 === a ? d.midnight : a / 12 >= 1 ? 'pm' : 'am'), n)) {
                case 'b':
                case 'bb':
                    return r.dayPeriod(i, {
                        width: 'abbreviated',
                        context: 'formatting'
                    });
                case 'bbb':
                    return r
                        .dayPeriod(i, {
                            width: 'abbreviated',
                            context: 'formatting'
                        })
                        .toLowerCase();
                case 'bbbbb':
                    return r.dayPeriod(i, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                default:
                    return r.dayPeriod(i, {
                        width: 'wide',
                        context: 'formatting'
                    });
            }
        },
        B: function (e, n, r) {
            var i,
                a = e.getUTCHours();
            switch (((i = a >= 17 ? d.evening : a >= 12 ? d.afternoon : a >= 4 ? d.morning : d.night), n)) {
                case 'B':
                case 'BB':
                case 'BBB':
                    return r.dayPeriod(i, {
                        width: 'abbreviated',
                        context: 'formatting'
                    });
                case 'BBBBB':
                    return r.dayPeriod(i, {
                        width: 'narrow',
                        context: 'formatting'
                    });
                default:
                    return r.dayPeriod(i, {
                        width: 'wide',
                        context: 'formatting'
                    });
            }
        },
        h: function (e, n, r) {
            if ('ho' === n) {
                var i = e.getUTCHours() % 12;
                return 0 === i && (i = 12), r.ordinalNumber(i, { unit: 'hour' });
            }
            return c.Z.h(e, n);
        },
        H: function (e, n, r) {
            return 'Ho' === n ? r.ordinalNumber(e.getUTCHours(), { unit: 'hour' }) : c.Z.H(e, n);
        },
        K: function (e, n, r) {
            var i = e.getUTCHours() % 12;
            return 'Ko' === n ? r.ordinalNumber(i, { unit: 'hour' }) : (0, u.Z)(i, n.length);
        },
        k: function (e, n, r) {
            var i = e.getUTCHours();
            return (0 === i && (i = 24), 'ko' === n) ? r.ordinalNumber(i, { unit: 'hour' }) : (0, u.Z)(i, n.length);
        },
        m: function (e, n, r) {
            return 'mo' === n ? r.ordinalNumber(e.getUTCMinutes(), { unit: 'minute' }) : c.Z.m(e, n);
        },
        s: function (e, n, r) {
            return 'so' === n ? r.ordinalNumber(e.getUTCSeconds(), { unit: 'second' }) : c.Z.s(e, n);
        },
        S: function (e, n) {
            return c.Z.S(e, n);
        },
        X: function (e, n, r, i) {
            var a = (i._originalDate || e).getTimezoneOffset();
            if (0 === a) return 'Z';
            switch (n) {
                case 'X':
                    return h(a);
                case 'XXXX':
                case 'XX':
                    return _(a);
                default:
                    return _(a, ':');
            }
        },
        x: function (e, n, r, i) {
            var a = (i._originalDate || e).getTimezoneOffset();
            switch (n) {
                case 'x':
                    return h(a);
                case 'xxxx':
                case 'xx':
                    return _(a);
                default:
                    return _(a, ':');
            }
        },
        O: function (e, n, r, i) {
            var a = (i._originalDate || e).getTimezoneOffset();
            switch (n) {
                case 'O':
                case 'OO':
                case 'OOO':
                    return 'GMT' + p(a, ':');
                default:
                    return 'GMT' + _(a, ':');
            }
        },
        z: function (e, n, r, i) {
            var a = (i._originalDate || e).getTimezoneOffset();
            switch (n) {
                case 'z':
                case 'zz':
                case 'zzz':
                    return 'GMT' + p(a, ':');
                default:
                    return 'GMT' + _(a, ':');
            }
        },
        t: function (e, n, r, i) {
            var a = Math.floor((i._originalDate || e).getTime() / 1000);
            return (0, u.Z)(a, n.length);
        },
        T: function (e, n, r, i) {
            var a = (i._originalDate || e).getTime();
            return (0, u.Z)(a, n.length);
        }
    };
function p(e, n) {
    var r = e > 0 ? '-' : '+',
        i = Math.abs(e),
        a = Math.floor(i / 60),
        o = i % 60;
    if (0 === o) return r + String(a);
    var s = n || '';
    return r + String(a) + s + (0, u.Z)(o, 2);
}
function h(e, n) {
    return e % 60 == 0 ? (e > 0 ? '-' : '+') + (0, u.Z)(Math.abs(e) / 60, 2) : _(e, n);
}
function _(e, n) {
    var r = n || '',
        i = e > 0 ? '-' : '+',
        a = Math.abs(e);
    return i + (0, u.Z)(Math.floor(a / 60), 2) + r + (0, u.Z)(a % 60, 2);
}
n.Z = f;
