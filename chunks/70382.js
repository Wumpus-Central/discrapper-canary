n.d(t, { H: () => m });
var r = n(720479),
    i = n(745597);
let a = 347997,
    o = 25920,
    s = 765433;
function l(e) {
    return 7 > (0, i.w)(7 * e + 1, 19);
}
function c(e) {
    let t = Math.floor((235 * e - 234) / 19),
        n = 12084 + 13753 * t,
        r = 29 * t + Math.floor(n / 25920);
    return 3 > (0, i.w)(3 * (r + 1), 7) && (r += 1), r;
}
function u(e) {
    let t = c(e - 1),
        n = c(e);
    return c(e + 1) - n == 356 ? 2 : +(n - t == 382);
}
function d(e) {
    return c(e) + u(e);
}
function f(e) {
    return d(e + 1) - d(e);
}
function p(e) {
    let t = f(e);
    switch ((t > 380 && (t -= 30), t)) {
        case 353:
            return 0;
        case 354:
            return 1;
        case 355:
            return 2;
    }
}
function _(e, t) {
    if ((t >= 6 && !l(e) && t++, 4 === t || 7 === t || 9 === t || 11 === t || 13 === t)) return 29;
    let n = p(e);
    return 2 === t ? (2 === n ? 30 : 29) : 3 === t ? (0 === n ? 29 : 30) : 6 === t ? 30 * !!l(e) : 30;
}
class m {
    fromJulianDay(e) {
        let t = e - a,
            n = Math.floor((((t * o) / s) * 19 + 234) / 235) + 1,
            i = d(n),
            l = Math.floor(t - i);
        for (; l < 1; ) l = Math.floor(t - (i = d(--n)));
        let c = 1,
            u = 0;
        for (; u < l; ) (u += _(n, c)), c++;
        let f = l - (u -= _(n, --c));
        return new (0, r.aw)(this, n, c, f);
    }
    toJulianDay(e) {
        let t = d(e.year);
        for (let n = 1; n < e.month; n++) t += _(e.year, n);
        return t + e.day + a;
    }
    getDaysInMonth(e) {
        return _(e.year, e.month);
    }
    getMonthsInYear(e) {
        return l(e.year) ? 13 : 12;
    }
    getDaysInYear(e) {
        return f(e.year);
    }
    getYearsInEra() {
        return 9999;
    }
    getEras() {
        return ["AM"];
    }
    balanceYearMonth(e, t) {
        t.year !== e.year &&
            (l(t.year) && !l(e.year) && t.month > 6 ? e.month-- : !l(t.year) && l(e.year) && t.month > 6 && e.month++);
    }
    constructor() {
        this.identifier = "hebrew";
    }
}
