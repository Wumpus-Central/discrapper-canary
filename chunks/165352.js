r.d(n, {
    Eg: function () {
        return l;
    },
    IQ: function () {
        return f;
    },
    J4: function () {
        return u;
    },
    JD: function () {
        return c;
    },
    g_: function () {
        return s;
    }
});
var i = r(927521),
    a = r(926726);
let o = 1721426;
function s(e, n, r, i) {
    let a = (n = u(e, n)) - 1,
        s = -2;
    return r <= 2 ? (s = 0) : l(n) && (s = -1), o - 1 + 365 * a + Math.floor(a / 4) - Math.floor(a / 100) + Math.floor(a / 400) + Math.floor((367 * r - 362) / 12 + s + i);
}
function l(e) {
    return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function u(e, n) {
    return 'BC' === e ? 1 - n : n;
}
function c(e) {
    let n = 'AD';
    return e <= 0 && ((n = 'BC'), (e = 1 - e)), [n, e];
}
let d = {
    standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
};
class f {
    fromJulianDay(e) {
        let n = e,
            r = n - o,
            u = Math.floor(r / 146097),
            d = (0, a.wQ)(r, 146097),
            f = Math.floor(d / 36524),
            p = (0, a.wQ)(d, 36524),
            h = Math.floor(p / 1461),
            _ = Math.floor((0, a.wQ)(p, 1461) / 365),
            [m, g] = c(400 * u + 100 * f + 4 * h + _ + (4 !== f && 4 !== _ ? 1 : 0)),
            E = n - s(m, g, 1, 1),
            v = 2;
        n < s(m, g, 3, 1) ? (v = 0) : l(g) && (v = 1);
        let y = Math.floor(((E + v) * 12 + 373) / 367),
            b = n - s(m, g, y, 1) + 1;
        return new i.aw(m, g, y, b);
    }
    toJulianDay(e) {
        return s(e.era, e.year, e.month, e.day);
    }
    getDaysInMonth(e) {
        return d[l(e.year) ? 'leapyear' : 'standard'][e.month - 1];
    }
    getMonthsInYear(e) {
        return 12;
    }
    getDaysInYear(e) {
        return l(e.year) ? 366 : 365;
    }
    getYearsInEra(e) {
        return 9999;
    }
    getEras() {
        return ['BC', 'AD'];
    }
    isInverseEra(e) {
        return 'BC' === e.era;
    }
    balanceDate(e) {
        e.year <= 0 && ((e.era = 'BC' === e.era ? 'AD' : 'BC'), (e.year = 1 - e.year));
    }
    constructor() {
        this.identifier = 'gregory';
    }
}
