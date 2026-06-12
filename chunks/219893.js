"use strict";
n.d(t, {
    I2: () => m,
    a3: () => p,
    d: () => A,
    fU: () => l,
    li: () => E,
    n1: () => h,
    v9: () => g,
    yG: () => a,
    yK: () => o,
    yN: () => f,
}),
    n(321073);
var i = n(441574),
    r = n(602339),
    s = n(375708);
let a = [i.ob.SUNDAY, i.ob.MONDAY, i.ob.TUESDAY, i.ob.WEDNESDAY, i.ob.THURSDAY, i.ob.FRIDAY, i.ob.SATURDAY];
function o(e) {
    let t = new Intl.DateTimeFormat(s.intl.currentLocale, { weekday: e });
    return a.map((e, n) => t.format(new Date(2025, 0, 5 + n)));
}
function l(e) {
    return new Intl.DateTimeFormat(s.intl.currentLocale, { hour: "numeric", minute: "2-digit" }).format(
        new Date(2025, 0, 1, e.hours, e.minutes),
    );
}
let u = new Set(a.slice(1, 6)),
    c = new Set([a[0], a[6]]),
    d = new Set(a);
function _(e, t) {
    if (e.size !== t.size) return !1;
    for (let n of e) if (!t.has(n)) return !1;
    return !0;
}
function h(e) {
    let t = new Set(e);
    if (_(t, d)) return s.intl.string(r.default.bPjqd1);
    if (_(t, u)) return s.intl.string(r.default["4dr9L9"]);
    if (_(t, c)) return s.intl.string(r.default["6lTTJ+"]);
    let n = new Intl.DateTimeFormat(s.intl.currentLocale, { weekday: "short" });
    return a
        .map((e, i) => (t.has(e) ? n.format(new Date(2025, 0, 5 + i)) : null))
        .filter((e) => null !== e)
        .join(", ");
}
function f(e) {
    return 60 * e.hours + e.minutes;
}
function p(e) {
    let t = e / 60;
    return Number.isInteger(t)
        ? s.intl.formatToPlainString(r.default.hFDcmZ, { hours: t })
        : s.intl.formatToPlainString(r.default.wcrXLM, { hours: Math.floor(t) });
}
function E(e) {
    return null != e.startTime && null != e.endTime ? `${l(e.startTime)} \u2013 ${l(e.endTime)}` : "";
}
function m(e) {
    return e
        .slice()
        .sort(
            (e, t) =>
                (e.startTime?.hours ?? 0) * 60 +
                (e.startTime?.minutes ?? 0) -
                ((t.startTime?.hours ?? 0) * 60 + (t.startTime?.minutes ?? 0)),
        );
}
function g(e) {
    return { hours: e.hours, minutes: e.minutes, seconds: 0, nanos: 0 };
}
function A(e, t, n) {
    let i = [];
    return (
        a.forEach((r, s) => {
            if (!e.has(r)) return;
            let a = t.find((e) => e.days.includes(r));
            null != a && i.push({ dayLabel: n[s], timeRange: E(a) });
        }),
        { conflictingEntries: i }
    );
}
