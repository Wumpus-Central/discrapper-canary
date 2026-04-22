"use strict";
n.d(t, {
    I2: () => E,
    a3: () => h,
    d: () => A,
    fU: () => l,
    li: () => m,
    n1: () => f,
    v9: () => g,
    yG: () => a,
    yK: () => o,
    yN: () => p,
}),
    n(321073);
var r = n(988506),
    i = n(602339),
    s = n(985018);
let a = [r.ob.SUNDAY, r.ob.MONDAY, r.ob.TUESDAY, r.ob.WEDNESDAY, r.ob.THURSDAY, r.ob.FRIDAY, r.ob.SATURDAY];
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
function f(e) {
    let t = new Set(e);
    if (_(t, d)) return s.intl.string(i.default.bPjqd1);
    if (_(t, u)) return s.intl.string(i.default["4dr9L9"]);
    if (_(t, c)) return s.intl.string(i.default["6lTTJ+"]);
    let n = new Intl.DateTimeFormat(s.intl.currentLocale, { weekday: "short" });
    return a
        .map((e, r) => (t.has(e) ? n.format(new Date(2025, 0, 5 + r)) : null))
        .filter((e) => null !== e)
        .join(", ");
}
function p(e) {
    return 60 * e.hours + e.minutes;
}
function h(e) {
    let t = e / 60;
    return Number.isInteger(t)
        ? s.intl.formatToPlainString(i.default.hFDcmZ, { hours: t })
        : s.intl.formatToPlainString(i.default.wcrXLM, { hours: Math.floor(t) });
}
function m(e) {
    return null != e.startTime && null != e.endTime ? `${l(e.startTime)} \u2013 ${l(e.endTime)}` : "";
}
function E(e) {
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
    let r = [];
    return (
        a.forEach((i, s) => {
            if (!e.has(i)) return;
            let a = t.find((e) => e.days.includes(i));
            null != a && r.push({ dayLabel: n[s], timeRange: m(a) });
        }),
        { conflictingEntries: r }
    );
}
