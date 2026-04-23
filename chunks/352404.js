t.d(a, {
    $I: () => P,
    D: () => A,
    Ec: () => h,
    Jg: () => u,
    NV: () => o,
    Nu: () => D,
    Py: () => E,
    RZ: () => x,
    SE: () => y,
    SJ: () => c,
    Xj: () => v,
    ZI: () => S,
    cK: () => s,
    kq: () => w,
    oT: () => $,
    p9: () => b,
    ro: () => i,
    tB: () => m,
    tF: () => l,
    wH: () => f,
    xz: () => R,
});
var r = t(376472),
    n = t(447372);
function i(e, a) {
    return (
        (a = (0, r.yP)(a, e.calendar)), e.era === a.era && e.year === a.year && e.month === a.month && e.day === a.day
    );
}
function l(e, a) {
    return (
        (a = (0, r.yP)(a, e.calendar)),
        (e = f(e)),
        (a = f(a)),
        e.era === a.era && e.year === a.year && e.month === a.month
    );
}
function o(e, a) {
    return u(e.calendar, a.calendar) && i(e, a);
}
function u(e, a) {
    var t, r, n, i;
    return null !=
        (i =
            null != (n = null == (t = e.isEqual) ? void 0 : t.call(e, a))
                ? n
                : null == (r = a.isEqual)
                  ? void 0
                  : r.call(a, e))
        ? i
        : e.identifier === a.identifier;
}
function s(e, a) {
    return i(e, h(a));
}
let d = { sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6 };
function c(e, a, t) {
    let r =
        Math.ceil(
            e.calendar.toJulianDay(e) +
                1 -
                (t
                    ? d[t]
                    : (function (e) {
                          let a = k.get(e);
                          if (!a) {
                              if (Intl.Locale) {
                                  let t = new Intl.Locale(e);
                                  if ("getWeekInfo" in t && (a = t.getWeekInfo())) return k.set(e, a), a.firstDay;
                              }
                              let t = (function (e) {
                                  if (Intl.Locale) {
                                      let a = C.get(e);
                                      return !a && (a = new Intl.Locale(e).maximize().region) && C.set(e, a), a;
                                  }
                                  let a = e.split("-")[1];
                                  return "u" === a ? void 0 : a;
                              })(e);
                              if (e.includes("-fw-")) {
                                  let t = e.split("-fw-")[1].split("-")[0];
                                  a =
                                      "mon" === t
                                          ? { firstDay: 1 }
                                          : "tue" === t
                                            ? { firstDay: 2 }
                                            : "wed" === t
                                              ? { firstDay: 3 }
                                              : "thu" === t
                                                ? { firstDay: 4 }
                                                : "fri" === t
                                                  ? { firstDay: 5 }
                                                  : "sat" === t
                                                    ? { firstDay: 6 }
                                                    : { firstDay: 0 };
                              } else a = e.includes("-ca-iso8601") ? { firstDay: 1 } : { firstDay: (t && n.Z[t]) || 0 };
                              k.set(e, a);
                          }
                          return a.firstDay;
                      })(a)),
        ) % 7;
    return r < 0 && (r += 7), r;
}
function m(e) {
    return (0, r.Yd)(Date.now(), e);
}
function h(e) {
    return (0, r.gw)(m(e));
}
function y(e, a) {
    return e.calendar.toJulianDay(e) - a.calendar.toJulianDay(a);
}
function D(e, a) {
    return p(e) - p(a);
}
function p(e) {
    return 36e5 * e.hour + 6e4 * e.minute + 1e3 * e.second + e.millisecond;
}
let g = null;
function v() {
    return null == g && (g = new Intl.DateTimeFormat().resolvedOptions().timeZone), g;
}
function f(e) {
    return e.subtract({ days: e.day - 1 });
}
function b(e) {
    return e.add({ days: e.calendar.getDaysInMonth(e) - e.day });
}
function A(e) {
    return f(e.subtract({ months: e.month - 1 }));
}
function R(e) {
    return e.calendar.getMinimumMonthInYear ? e.calendar.getMinimumMonthInYear(e) : 1;
}
function $(e) {
    return e.calendar.getMinimumDayInMonth ? e.calendar.getMinimumDayInMonth(e) : 1;
}
function w(e, a, t) {
    let r = c(e, a, t);
    return e.subtract({ days: r });
}
function P(e, a, t) {
    return w(e, a, t).add({ days: 6 });
}
let C = new Map(),
    k = new Map();
function x(e, a, t) {
    let r = e.calendar.getDaysInMonth(e);
    return Math.ceil((c(f(e), a, t) + r) / 7);
}
function E(e, a) {
    return e && a ? (0 >= e.compare(a) ? e : a) : e || a;
}
function S(e, a) {
    return e && a ? (e.compare(a) >= 0 ? e : a) : e || a;
}
