t.d(a, {
    KC: () => r,
    Lg: () => D,
    Mb: () => Z,
    N9: () => o,
    Nm: () => v,
    PA: () => B,
    Rn: () => R,
    Vf: () => b,
    Xi: () => f,
    em: () => C,
    iT: () => g,
    ji: () => c,
    jv: () => l,
    jx: () => x,
    l7: () => k,
    rm: () => h,
    vV: () => F,
    xj: () => i,
    zJ: () => E,
    zO: () => m,
    zk: () => s,
});
var u = t(640475),
    n = t(707021);
function r(e, a) {
    return (
        (a = (0, u.Mw)(a, e.calendar)), e.era === a.era && e.year === a.year && e.month === a.month && e.day === a.day
    );
}
function i(e, a) {
    return (
        (a = (0, u.Mw)(a, e.calendar)),
        (e = v(e)),
        (a = v(a)),
        e.era === a.era && e.year === a.year && e.month === a.month
    );
}
function o(e, a) {
    return l(e.calendar, a.calendar) && r(e, a);
}
function l(e, a) {
    var t, u, n, r;
    return null !=
        (r =
            null != (n = null == (t = e.isEqual) ? void 0 : t.call(e, a))
                ? n
                : null == (u = a.isEqual)
                  ? void 0
                  : u.call(a, e))
        ? r
        : e.identifier === a.identifier;
}
function s(e, a) {
    return r(e, D(a));
}
let d = {
    sun: 0,
    mon: 1,
    tue: 2,
    wed: 3,
    thu: 4,
    fri: 5,
    sat: 6,
};
function c(e, a, t) {
    let u =
        Math.ceil(
            e.calendar.toJulianDay(e) +
                1 -
                (t
                    ? d[t]
                    : (function (e) {
                          let a = $.get(e);
                          if (!a) {
                              if (Intl.Locale) {
                                  let t = new Intl.Locale(e);
                                  if ("getWeekInfo" in t && (a = t.getWeekInfo())) return $.set(e, a), a.firstDay;
                              }
                              let t = (function (e) {
                                  if (Intl.Locale) {
                                      let a = w.get(e);
                                      return !a && (a = new Intl.Locale(e).maximize().region) && w.set(e, a), a;
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
                              } else a = e.includes("-ca-iso8601") ? { firstDay: 1 } : { firstDay: (t && n.U[t]) || 0 };
                              $.set(e, a);
                          }
                          return a.firstDay;
                      })(a)),
        ) % 7;
    return u < 0 && (u += 7), u;
}
function m(e) {
    return (0, u.FD)(Date.now(), e);
}
function D(e) {
    return (0, u.WG)(m(e));
}
function h(e, a) {
    return e.calendar.toJulianDay(e) - a.calendar.toJulianDay(a);
}
function f(e, a) {
    return y(e) - y(a);
}
function y(e) {
    return 3600000 * e.hour + 60000 * e.minute + 1000 * e.second + e.millisecond;
}
let p = null;
function g() {
    return null == p && (p = new Intl.DateTimeFormat().resolvedOptions().timeZone), p;
}
function v(e) {
    return e.subtract({ days: e.day - 1 });
}
function b(e) {
    return e.add({ days: e.calendar.getDaysInMonth(e) - e.day });
}
function C(e) {
    return v(e.subtract({ months: e.month - 1 }));
}
function x(e) {
    return e.calendar.getMinimumMonthInYear ? e.calendar.getMinimumMonthInYear(e) : 1;
}
function B(e) {
    return e.calendar.getMinimumDayInMonth ? e.calendar.getMinimumDayInMonth(e) : 1;
}
function E(e, a, t) {
    let u = c(e, a, t);
    return e.subtract({ days: u });
}
function F(e, a, t) {
    return E(e, a, t).add({ days: 6 });
}
let w = new Map(),
    $ = new Map();
function R(e, a, t) {
    let u = e.calendar.getDaysInMonth(e);
    return Math.ceil((c(v(e), a, t) + u) / 7);
}
function Z(e, a) {
    return e && a ? (0 >= e.compare(a) ? e : a) : e || a;
}
function k(e, a) {
    return e && a ? (e.compare(a) >= 0 ? e : a) : e || a;
}
