t.d(a, {
    p9: () => $,
    $I: () => w,
    RZ: () => k,
    tB: () => m,
    rS: () => v,
    kq: () => P,
    Jg: () => u,
    Py: () => S,
    tF: () => o,
    Xj: () => f,
    Nu: () => D,
    SJ: () => c,
    SE: () => y,
    ro: () => i,
    D: () => R,
    ZI: () => E,
    Ec: () => h,
    cK: () => s,
    NV: () => l,
    wH: () => b,
});
var r = t(594247);
let n = {
    "001": 1,
    AD: 1,
    AE: 6,
    AF: 6,
    AI: 1,
    AL: 1,
    AM: 1,
    AN: 1,
    AR: 1,
    AT: 1,
    AU: 1,
    AX: 1,
    AZ: 1,
    BA: 1,
    BE: 1,
    BG: 1,
    BH: 6,
    BM: 1,
    BN: 1,
    BY: 1,
    CH: 1,
    CL: 1,
    CM: 1,
    CN: 1,
    CR: 1,
    CY: 1,
    CZ: 1,
    DE: 1,
    DJ: 6,
    DK: 1,
    DZ: 6,
    EC: 1,
    EE: 1,
    EG: 6,
    ES: 1,
    FI: 1,
    FJ: 1,
    FO: 1,
    FR: 1,
    GB: 1,
    GE: 1,
    GF: 1,
    GP: 1,
    GR: 1,
    HR: 1,
    HU: 1,
    IE: 1,
    IQ: 6,
    IR: 6,
    IS: 1,
    IT: 1,
    JO: 6,
    KG: 1,
    KW: 6,
    KZ: 1,
    LB: 1,
    LI: 1,
    LK: 1,
    LT: 1,
    LU: 1,
    LV: 1,
    LY: 6,
    MC: 1,
    MD: 1,
    ME: 1,
    MK: 1,
    MN: 1,
    MQ: 1,
    MV: 5,
    MY: 1,
    NL: 1,
    NO: 1,
    NZ: 1,
    OM: 6,
    PL: 1,
    QA: 6,
    RE: 1,
    RO: 1,
    RS: 1,
    RU: 1,
    SD: 6,
    SE: 1,
    SI: 1,
    SK: 1,
    SM: 1,
    SY: 6,
    TJ: 1,
    TM: 1,
    TR: 1,
    UA: 1,
    UY: 1,
    UZ: 1,
    VA: 1,
    VN: 1,
    XK: 1,
};
function i(e, a) {
    return (
        (a = (0, r.yP)(a, e.calendar)), e.era === a.era && e.year === a.year && e.month === a.month && e.day === a.day
    );
}
function o(e, a) {
    return (
        (a = (0, r.yP)(a, e.calendar)),
        (e = b(e)),
        (a = b(a)),
        e.era === a.era && e.year === a.year && e.month === a.month
    );
}
function l(e, a) {
    return u(e.calendar, a.calendar) && i(e, a);
}
function u(e, a) {
    return e.isEqual?.(a) ?? a.isEqual?.(e) ?? e.identifier === a.identifier;
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
                          let a = x.get(e);
                          if (!a) {
                              if (Intl.Locale) {
                                  let t = new Intl.Locale(e);
                                  if ("getWeekInfo" in t && (a = t.getWeekInfo())) return x.set(e, a), a.firstDay;
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
                              } else a = e.includes("-ca-iso8601") ? { firstDay: 1 } : { firstDay: (t && n[t]) || 0 };
                              x.set(e, a);
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
function f() {
    return null == g && (g = new Intl.DateTimeFormat().resolvedOptions().timeZone), g;
}
function v() {
    return !1;
}
function b(e) {
    return e.subtract({ days: e.day - 1 });
}
function $(e) {
    return e.add({ days: e.calendar.getDaysInMonth(e) - e.day });
}
function R(e) {
    return b(e.subtract({ months: e.month - 1 }));
}
function P(e, a, t) {
    let r = c(e, a, t);
    return e.subtract({ days: r });
}
function w(e, a, t) {
    return P(e, a, t).add({ days: 6 });
}
let C = new Map(),
    x = new Map();
function k(e, a, t) {
    let r = e.calendar.getDaysInMonth(e);
    return Math.ceil((c(b(e), a, t) + r) / 7);
}
function S(e, a) {
    return e && a ? (0 >= e.compare(a) ? e : a) : e || a;
}
function E(e, a) {
    return e && a ? (e.compare(a) >= 0 ? e : a) : e || a;
}
