r.d(n, {
    KC: function () {
        return o;
    },
    Lg: function () {
        return f;
    },
    Mb: function () {
        return O;
    },
    N9: function () {
        return l;
    },
    Nm: function () {
        return E;
    },
    PA: function () {
        return I;
    },
    Rn: function () {
        return R;
    },
    Vf: function () {
        return v;
    },
    Xi: function () {
        return h;
    },
    em: function () {
        return y;
    },
    iT: function () {
        return g;
    },
    ji: function () {
        return c;
    },
    jx: function () {
        return b;
    },
    l7: function () {
        return D;
    },
    rm: function () {
        return p;
    },
    vV: function () {
        return S;
    },
    xj: function () {
        return s;
    },
    zJ: function () {
        return T;
    },
    zO: function () {
        return d;
    },
    zk: function () {
        return u;
    }
});
var i = r(697),
    a = r(682367);
function o(e, n) {
    return (n = (0, i.Mw)(n, e.calendar)), e.era === n.era && e.year === n.year && e.month === n.month && e.day === n.day;
}
function s(e, n) {
    return (n = (0, i.Mw)(n, e.calendar)), (e = E(e)), (n = E(n)), e.era === n.era && e.year === n.year && e.month === n.month;
}
function l(e, n) {
    return e.calendar.identifier === n.calendar.identifier && e.era === n.era && e.year === n.year && e.month === n.month && e.day === n.day;
}
function u(e, n) {
    return o(e, f(n));
}
function c(e, n) {
    let r = Math.ceil(e.calendar.toJulianDay(e) + 1 - N(n)) % 7;
    return r < 0 && (r += 7), r;
}
function d(e) {
    return (0, i.FD)(Date.now(), e);
}
function f(e) {
    return (0, i.WG)(d(e));
}
function p(e, n) {
    return e.calendar.toJulianDay(e) - n.calendar.toJulianDay(n);
}
function h(e, n) {
    return _(e) - _(n);
}
function _(e) {
    return 3600000 * e.hour + 60000 * e.minute + 1000 * e.second + e.millisecond;
}
let m = null;
function g() {
    return null == m && (m = new Intl.DateTimeFormat().resolvedOptions().timeZone), m;
}
function E(e) {
    return e.subtract({ days: e.day - 1 });
}
function v(e) {
    return e.add({ days: e.calendar.getDaysInMonth(e) - e.day });
}
function y(e) {
    return E(e.subtract({ months: e.month - 1 }));
}
function b(e) {
    return e.calendar.getMinimumMonthInYear ? e.calendar.getMinimumMonthInYear(e) : 1;
}
function I(e) {
    return e.calendar.getMinimumDayInMonth ? e.calendar.getMinimumDayInMonth(e) : 1;
}
function T(e, n) {
    let r = c(e, n);
    return e.subtract({ days: r });
}
function S(e, n) {
    return T(e, n).add({ days: 6 });
}
let A = new Map();
function C(e) {
    if (Intl.Locale) {
        let n = A.get(e);
        return !n && (n = new Intl.Locale(e).maximize().region) && A.set(e, n), n;
    }
    let n = e.split('-')[1];
    return 'u' === n ? void 0 : n;
}
function N(e) {
    let n = C(e);
    return (n && a.U[n]) || 0;
}
function R(e, n) {
    let r = e.calendar.getDaysInMonth(e);
    return Math.ceil((c(E(e), n) + r) / 7);
}
function O(e, n) {
    return e && n ? (0 >= e.compare(n) ? e : n) : e || n;
}
function D(e, n) {
    return e && n ? (e.compare(n) >= 0 ? e : n) : e || n;
}
let x = null;
function L(e, n) {
    let r = Math.ceil(e.calendar.toJulianDay(e) + 1) % 7;
    r < 0 && (r += 7);
    let [i, a] = x[C(n)] || [6, 0];
    return r === i || r === a;
}
