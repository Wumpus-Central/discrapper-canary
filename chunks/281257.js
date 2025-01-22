let i, a;
r.d(n, {
    $0: function () {
        return _;
    },
    CF: function () {
        return m;
    },
    lw: function () {
        return I;
    }
});
var o = r(927521);
let s = 1948440,
    l = 1948439,
    u = 1300,
    c = 1600,
    d = 460322;
function f(e, n, r, i) {
    return i + Math.ceil(29.5 * (r - 1)) + (n - 1) * 354 + Math.floor((3 + 11 * n) / 30) + e - 1;
}
function p(e, n, r) {
    let i = Math.floor((30 * (r - n) + 10646) / 10631),
        a = Math.min(12, Math.ceil((r - (29 + f(n, i, 1, 1))) / 29.5) + 1),
        s = r - f(n, i, a, 1) + 1;
    return new o.aw(e, i, a, s);
}
function h(e) {
    return (14 + 11 * e) % 30 < 11;
}
class _ {
    fromJulianDay(e) {
        return p(this, s, e);
    }
    toJulianDay(e) {
        return f(s, e.year, e.month, e.day);
    }
    getDaysInMonth(e) {
        let n = 29 + (e.month % 2);
        return 12 === e.month && h(e.year) && n++, n;
    }
    getMonthsInYear() {
        return 12;
    }
    getDaysInYear(e) {
        return h(e.year) ? 355 : 354;
    }
    getYearsInEra() {
        return 9665;
    }
    getEras() {
        return ['AH'];
    }
    constructor() {
        this.identifier = 'islamic-civil';
    }
}
class m extends _ {
    fromJulianDay(e) {
        return p(this, l, e);
    }
    toJulianDay(e) {
        return f(l, e.year, e.month, e.day);
    }
    constructor(...e) {
        super(...e), (this.identifier = 'islamic-tbla');
    }
}
let g = 'qgpUDckO1AbqBmwDrQpVBakGkgepC9QF2gpcBS0NlQZKB1QLagutBa4ETwoXBYsGpQbVCtYCWwmdBE0KJg2VDawFtgm6AlsKKwWVCsoG6Qr0AnYJtgJWCcoKpAvSC9kF3AJtCU0FpQpSC6ULtAW2CVcFlwJLBaMGUgdlC2oFqworBZUMSg2lDcoF1gpXCasESwmlClILagt1BXYCtwhbBFUFqQW0BdoJ3QRuAjYJqgpUDbIN1QXaAlsJqwRVCkkLZAtxC7QFtQpVCiUNkg7JDtQG6QprCasEkwpJDaQNsg25CroEWworBZUKKgtVC1wFvQQ9Ah0JlQpKC1oLbQW2AjsJmwRVBqkGVAdqC2wFrQpVBSkLkgupC9QF2gpaBasKlQVJB2QHqgu1BbYCVgpNDiULUgtqC60FrgIvCZcESwalBqwG1gpdBZ0ETQoWDZUNqgW1BdoCWwmtBJUFygbkBuoK9QS2AlYJqgpUC9IL2QXqAm0JrQSVCkoLpQuyBbUJ1gSXCkcFkwZJB1ULagVrCisFiwpGDaMNygXWCtsEawJLCaUKUgtpC3UFdgG3CFsCKwVlBbQF2gntBG0BtgimClINqQ3UBdoKWwmrBFMGKQdiB6kLsgW1ClUFJQuSDckO0gbpCmsFqwRVCikNVA2qDbUJugQ7CpsETQqqCtUK2gJdCV4ELgqaDFUNsga5BroEXQotBZUKUguoC7QLuQXaAloJSgukDdEO6AZqC20FNQWVBkoNqA3UDdoGWwWdAisGFQtKC5ULqgWuCi4JjwwnBZUGqgbWCl0FnQI=';
function E(e) {
    return d + a[e - u];
}
function v(e, n) {
    let r = 1 << (11 - (n - 1));
    return (i[e - u] & r) == 0 ? 29 : 30;
}
function y(e, n) {
    let r = E(e);
    for (let i = 1; i < n; i++) r += v(e, i);
    return r;
}
function b(e) {
    return a[e + 1 - u] - a[e - u];
}
class I extends _ {
    fromJulianDay(e) {
        let n = e - s,
            r = E(u),
            i = E(c);
        if (n < r || n > i) return super.fromJulianDay(e);
        {
            let e = u - 1,
                r = 1,
                i = 1;
            for (; i > 0; ) {
                i = n - E(++e) + 1;
                let a = b(e);
                if (i === a) {
                    r = 12;
                    break;
                }
                if (i < a) {
                    let n = v(e, r);
                    for (r = 1; i > n; ) (i -= n), (n = v(e, ++r));
                    break;
                }
            }
            return new o.aw(this, e, r, n - y(e, r) + 1);
        }
    }
    toJulianDay(e) {
        return e.year < u || e.year > c ? super.toJulianDay(e) : s + y(e.year, e.month) + (e.day - 1);
    }
    getDaysInMonth(e) {
        return e.year < u || e.year > c ? super.getDaysInMonth(e) : v(e.year, e.month);
    }
    getDaysInYear(e) {
        return e.year < u || e.year > c ? super.getDaysInYear(e) : b(e.year);
    }
    constructor() {
        if ((super(), (this.identifier = 'islamic-umalqura'), !i && (i = new Uint16Array(Uint8Array.from(atob(g), (e) => e.charCodeAt(0)).buffer)), !a)) {
            a = new Uint32Array(c - u + 1);
            let e = 0;
            for (let n = u; n <= c; n++) {
                a[n - u] = e;
                for (let r = 1; r <= 12; r++) e += v(n, r);
            }
        }
    }
}
