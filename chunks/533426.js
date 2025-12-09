n.d(t, {
    KC: () => a,
    Lg: () => p,
    Mb: () => D,
    N9: () => s,
    Nm: () => b,
    PA: () => S,
    Rn: () => R,
    Vf: () => y,
    Xi: () => m,
    em: () => O,
    iT: () => E,
    ji: () => d,
    jv: () => l,
    jx: () => v,
    l7: () => w,
    rm: () => _,
    vV: () => T,
    xj: () => o,
    zJ: () => I,
    zO: () => f,
    zk: () => c,
});
var r = n(640475),
    i = n(707021);
function a(e, t) {
    return (
        (t = (0, r.Mw)(t, e.calendar)), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day
    );
}
function o(e, t) {
    return (
        (t = (0, r.Mw)(t, e.calendar)),
        (e = b(e)),
        (t = b(t)),
        e.era === t.era && e.year === t.year && e.month === t.month
    );
}
function s(e, t) {
    return l(e.calendar, t.calendar) && a(e, t);
}
function l(e, t) {
    var n, r, i, a;
    return null !=
        (a =
            null != (i = null == (n = e.isEqual) ? void 0 : n.call(e, t))
                ? i
                : null == (r = t.isEqual)
                  ? void 0
                  : r.call(t, e))
        ? a
        : e.identifier === t.identifier;
}
function c(e, t) {
    return a(e, p(t));
}
let u = {
    sun: 0,
    mon: 1,
    tue: 2,
    wed: 3,
    thu: 4,
    fri: 5,
    sat: 6,
};
function d(e, t, n) {
    let r = Math.ceil(e.calendar.toJulianDay(e) + 1 - (n ? u[n] : P(t))) % 7;
    return r < 0 && (r += 7), r;
}
function f(e) {
    return (0, r.FD)(Date.now(), e);
}
function p(e) {
    return (0, r.WG)(f(e));
}
function _(e, t) {
    return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function m(e, t) {
    return h(e) - h(t);
}
function h(e) {
    return 3600000 * e.hour + 60000 * e.minute + 1000 * e.second + e.millisecond;
}
let g = null;
function E() {
    return null == g && (g = new Intl.DateTimeFormat().resolvedOptions().timeZone), g;
}
function b(e) {
    return e.subtract({ days: e.day - 1 });
}
function y(e) {
    return e.add({ days: e.calendar.getDaysInMonth(e) - e.day });
}
function O(e) {
    return b(e.subtract({ months: e.month - 1 }));
}
function v(e) {
    return e.calendar.getMinimumMonthInYear ? e.calendar.getMinimumMonthInYear(e) : 1;
}
function S(e) {
    return e.calendar.getMinimumDayInMonth ? e.calendar.getMinimumDayInMonth(e) : 1;
}
function I(e, t, n) {
    let r = d(e, t, n);
    return e.subtract({ days: r });
}
function T(e, t, n) {
    return I(e, t, n).add({ days: 6 });
}
let A = new Map(),
    C = new Map();
function N(e) {
    if (Intl.Locale) {
        let t = A.get(e);
        return !t && (t = new Intl.Locale(e).maximize().region) && A.set(e, t), t;
    }
    let t = e.split("-")[1];
    return "u" === t ? void 0 : t;
}
function P(e) {
    let t = C.get(e);
    if (!t) {
        if (Intl.Locale) {
            let n = new Intl.Locale(e);
            if ("getWeekInfo" in n && (t = n.getWeekInfo())) return C.set(e, t), t.firstDay;
        }
        let n = N(e);
        if (e.includes("-fw-")) {
            let n = e.split("-fw-")[1].split("-")[0];
            t =
                "mon" === n
                    ? { firstDay: 1 }
                    : "tue" === n
                      ? { firstDay: 2 }
                      : "wed" === n
                        ? { firstDay: 3 }
                        : "thu" === n
                          ? { firstDay: 4 }
                          : "fri" === n
                            ? { firstDay: 5 }
                            : "sat" === n
                              ? { firstDay: 6 }
                              : { firstDay: 0 };
        } else t = e.includes("-ca-iso8601") ? { firstDay: 1 } : { firstDay: (n && i.U[n]) || 0 };
        C.set(e, t);
    }
    return t.firstDay;
}
function R(e, t, n) {
    let r = e.calendar.getDaysInMonth(e);
    return Math.ceil((d(b(e), t, n) + r) / 7);
}
function D(e, t) {
    return e && t ? (0 >= e.compare(t) ? e : t) : e || t;
}
function w(e, t) {
    return e && t ? (e.compare(t) >= 0 ? e : t) : e || t;
}
let x = null;
