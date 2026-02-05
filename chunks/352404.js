"use strict";
n.d(t, {
    $I: () => C,
    D: () => T,
    Ec: () => f,
    Jg: () => l,
    NV: () => o,
    Nu: () => h,
    Py: () => L,
    RZ: () => D,
    SE: () => p,
    SJ: () => d,
    Xj: () => E,
    ZI: () => w,
    cK: () => u,
    kq: () => v,
    oT: () => S,
    p9: () => I,
    ro: () => a,
    tB: () => _,
    tF: () => s,
    wH: () => A,
    xz: () => y,
});
var r = n(376472),
    i = n(447372);
function a(e, t) {
    return (
        (t = (0, r.yP)(t, e.calendar)), e.era === t.era && e.year === t.year && e.month === t.month && e.day === t.day
    );
}
function s(e, t) {
    return (
        (t = (0, r.yP)(t, e.calendar)),
        (e = A(e)),
        (t = A(t)),
        e.era === t.era && e.year === t.year && e.month === t.month
    );
}
function o(e, t) {
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
function u(e, t) {
    return a(e, f(t));
}
let c = { sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6 };
function d(e, t, n) {
    let r = Math.ceil(e.calendar.toJulianDay(e) + 1 - (n ? c[n] : O(t))) % 7;
    return r < 0 && (r += 7), r;
}
function _(e) {
    return (0, r.Yd)(Date.now(), e);
}
function f(e) {
    return (0, r.gw)(_(e));
}
function p(e, t) {
    return e.calendar.toJulianDay(e) - t.calendar.toJulianDay(t);
}
function h(e, t) {
    return m(e) - m(t);
}
function m(e) {
    return 36e5 * e.hour + 6e4 * e.minute + 1e3 * e.second + e.millisecond;
}
let g = null;
function E() {
    return null == g && (g = new Intl.DateTimeFormat().resolvedOptions().timeZone), g;
}
function A(e) {
    return e.subtract({ days: e.day - 1 });
}
function I(e) {
    return e.add({ days: e.calendar.getDaysInMonth(e) - e.day });
}
function T(e) {
    return A(e.subtract({ months: e.month - 1 }));
}
function y(e) {
    return e.calendar.getMinimumMonthInYear ? e.calendar.getMinimumMonthInYear(e) : 1;
}
function S(e) {
    return e.calendar.getMinimumDayInMonth ? e.calendar.getMinimumDayInMonth(e) : 1;
}
function v(e, t, n) {
    let r = d(e, t, n);
    return e.subtract({ days: r });
}
function C(e, t, n) {
    return v(e, t, n).add({ days: 6 });
}
let b = new Map(),
    N = new Map();
function R(e) {
    if (Intl.Locale) {
        let t = b.get(e);
        return !t && (t = new Intl.Locale(e).maximize().region) && b.set(e, t), t;
    }
    let t = e.split("-")[1];
    return "u" === t ? void 0 : t;
}
function O(e) {
    let t = N.get(e);
    if (!t) {
        if (Intl.Locale) {
            let n = new Intl.Locale(e);
            if ("getWeekInfo" in n && (t = n.getWeekInfo())) return N.set(e, t), t.firstDay;
        }
        let n = R(e);
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
        } else t = e.includes("-ca-iso8601") ? { firstDay: 1 } : { firstDay: (n && i.Z[n]) || 0 };
        N.set(e, t);
    }
    return t.firstDay;
}
function D(e, t, n) {
    let r = e.calendar.getDaysInMonth(e);
    return Math.ceil((d(A(e), t, n) + r) / 7);
}
function L(e, t) {
    return e && t ? (0 >= e.compare(t) ? e : t) : e || t;
}
function w(e, t) {
    return e && t ? (e.compare(t) >= 0 ? e : t) : e || t;
}
let x = null;
