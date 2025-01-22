r.d(n, {
    H: function () {
        return g;
    }
});
var i = r(927521),
    a = r(926726);
let o = 347997,
    s = 1080,
    l = 25920,
    u = 765433;
function c(e) {
    return 7 > (0, a.wQ)(7 * e + 1, 19);
}
function d(e) {
    let n = Math.floor((235 * e - 234) / 19),
        r = 12084 + 13753 * n,
        i = 29 * n + Math.floor(r / 25920);
    return 3 > (0, a.wQ)(3 * (i + 1), 7) && (i += 1), i;
}
function f(e) {
    let n = d(e - 1),
        r = d(e);
    return d(e + 1) - r == 356 ? 2 : r - n == 382 ? 1 : 0;
}
function p(e) {
    return d(e) + f(e);
}
function h(e) {
    return p(e + 1) - p(e);
}
function _(e) {
    let n = h(e);
    switch ((n > 380 && (n -= 30), n)) {
        case 353:
            return 0;
        case 354:
            return 1;
        case 355:
            return 2;
    }
}
function m(e, n) {
    if ((n >= 6 && !c(e) && n++, 4 === n || 7 === n || 9 === n || 11 === n || 13 === n)) return 29;
    let r = _(e);
    return 2 === n ? (2 === r ? 30 : 29) : 3 === n ? (0 === r ? 29 : 30) : 6 === n ? (c(e) ? 30 : 0) : 30;
}
class g {
    fromJulianDay(e) {
        let n = e - o,
            r = Math.floor((((n * l) / u) * 19 + 234) / 235) + 1,
            a = p(r),
            s = Math.floor(n - a);
        for (; s < 1; ) s = Math.floor(n - (a = p(--r)));
        let c = 1,
            d = 0;
        for (; d < s; ) (d += m(r, c)), c++;
        let f = s - (d -= m(r, --c));
        return new i.aw(this, r, c, f);
    }
    toJulianDay(e) {
        let n = p(e.year);
        for (let r = 1; r < e.month; r++) n += m(e.year, r);
        return n + e.day + o;
    }
    getDaysInMonth(e) {
        return m(e.year, e.month);
    }
    getMonthsInYear(e) {
        return c(e.year) ? 13 : 12;
    }
    getDaysInYear(e) {
        return h(e.year);
    }
    getYearsInEra() {
        return 9999;
    }
    getEras() {
        return ['AM'];
    }
    balanceYearMonth(e, n) {
        n.year !== e.year && (c(n.year) && !c(e.year) && n.month > 6 ? e.month-- : !c(n.year) && c(e.year) && n.month > 6 && e.month++);
    }
    constructor() {
        this.identifier = 'hebrew';
    }
}
