"use strict";
n.d(t, { Y: () => h });
var r = n(99478),
    i = n(526531);
let a = 347997,
    s = 25920,
    o = 765433;
function l(e) {
    return 7 > (0, i.z)(7 * e + 1, 19);
}
function u(e) {
    let t = Math.floor((235 * e - 234) / 19),
        n = 12084 + 13753 * t,
        r = 29 * t + Math.floor(n / 25920);
    return 3 > (0, i.z)(3 * (r + 1), 7) && (r += 1), r;
}
function c(e) {
    let t = u(e - 1),
        n = u(e);
    return u(e + 1) - n == 356 ? 2 : +(n - t == 382);
}
function d(e) {
    return u(e) + c(e);
}
function _(e) {
    return d(e + 1) - d(e);
}
function f(e) {
    let t = _(e);
    switch ((t > 380 && (t -= 30), t)) {
        case 353:
            return 0;
        case 354:
            return 1;
        case 355:
            return 2;
    }
}
function p(e, t) {
    if ((t >= 6 && !l(e) && t++, 4 === t || 7 === t || 9 === t || 11 === t || 13 === t)) return 29;
    let n = f(e);
    return 2 === t ? (2 === n ? 30 : 29) : 3 === t ? (0 === n ? 29 : 30) : 6 === t ? 30 * !!l(e) : 30;
}
class h {
    fromJulianDay(e) {
        let t = e - a,
            n = Math.floor((((t * s) / o) * 19 + 234) / 235) + 1,
            i = d(n),
            l = Math.floor(t - i);
        for (; l < 1; ) l = Math.floor(t - (i = d(--n)));
        let u = 1,
            c = 0;
        for (; c < l; ) (c += p(n, u)), u++;
        let _ = l - (c -= p(n, --u));
        return new (0, r.ng)(this, n, u, _);
    }
    toJulianDay(e) {
        let t = d(e.year);
        for (let n = 1; n < e.month; n++) t += p(e.year, n);
        return t + e.day + a;
    }
    getDaysInMonth(e) {
        return p(e.year, e.month);
    }
    getMonthsInYear(e) {
        return l(e.year) ? 13 : 12;
    }
    getDaysInYear(e) {
        return _(e.year);
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
