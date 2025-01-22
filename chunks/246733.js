r.d(n, {
    Wt: function () {
        return f;
    },
    Y0: function () {
        return h;
    },
    zY: function () {
        return p;
    }
});
var i = r(927521);
let a = 1723856,
    o = 1824665,
    s = 5500;
function l(e, n, r, i) {
    return e + 365 * n + Math.floor(n / 4) + 30 * (r - 1) + i - 1;
}
function u(e, n) {
    let r = Math.floor((4 * (n - e)) / 1461),
        i = 1 + Math.floor((n - l(e, r, 1, 1)) / 30),
        a = n + 1 - l(e, r, i, 1);
    return [r, i, a];
}
function c(e) {
    return Math.floor((e % 4) / 3);
}
function d(e, n) {
    return n % 13 != 0 ? 30 : c(e) + 5;
}
class f {
    fromJulianDay(e) {
        let [n, r, o] = u(a, e),
            l = 'AM';
        return n <= 0 && ((l = 'AA'), (n += s)), new i.aw(this, l, n, r, o);
    }
    toJulianDay(e) {
        let n = e.year;
        return 'AA' === e.era && (n -= s), l(a, n, e.month, e.day);
    }
    getDaysInMonth(e) {
        return d(e.year, e.month);
    }
    getMonthsInYear() {
        return 13;
    }
    getDaysInYear(e) {
        return 365 + c(e.year);
    }
    getYearsInEra(e) {
        return 'AA' === e.era ? 9999 : 9991;
    }
    getEras() {
        return ['AA', 'AM'];
    }
    constructor() {
        this.identifier = 'ethiopic';
    }
}
class p extends f {
    fromJulianDay(e) {
        let [n, r, o] = u(a, e);
        return (n += s), new i.aw(this, 'AA', n, r, o);
    }
    getEras() {
        return ['AA'];
    }
    getYearsInEra() {
        return 9999;
    }
    constructor(...e) {
        super(...e), (this.identifier = 'ethioaa');
    }
}
class h extends f {
    fromJulianDay(e) {
        let [n, r, a] = u(o, e),
            s = 'CE';
        return n <= 0 && ((s = 'BCE'), (n = 1 - n)), new i.aw(this, s, n, r, a);
    }
    toJulianDay(e) {
        let n = e.year;
        return 'BCE' === e.era && (n = 1 - n), l(o, n, e.month, e.day);
    }
    getDaysInMonth(e) {
        let n = e.year;
        return 'BCE' === e.era && (n = 1 - n), d(n, e.month);
    }
    isInverseEra(e) {
        return 'BCE' === e.era;
    }
    balanceDate(e) {
        e.year <= 0 && ((e.era = 'BCE' === e.era ? 'CE' : 'BCE'), (e.year = 1 - e.year));
    }
    getEras() {
        return ['BCE', 'CE'];
    }
    getYearsInEra(e) {
        return 'BCE' === e.era ? 9999 : 9715;
    }
    constructor(...e) {
        super(...e), (this.identifier = 'coptic');
    }
}
