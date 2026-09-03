n.d(t, {
    I2: () => f,
    a3: () => h,
    d: () => T,
    fU: () => o,
    li: () => I,
    n1: () => E,
    v9: () => p,
    yG: () => s,
    yK: () => l,
    yN: () => A,
}),
    n(321073);
var i = n(441574),
    r = n(513687),
    a = n(375708);
let s = [i.ob.SUNDAY, i.ob.MONDAY, i.ob.TUESDAY, i.ob.WEDNESDAY, i.ob.THURSDAY, i.ob.FRIDAY, i.ob.SATURDAY];
function l(e) {
    let t = new Intl.DateTimeFormat(a.intl.currentLocale, { weekday: e });
    return s.map((e, n) => t.format(new Date(2025, 0, 5 + n)));
}
function o(e) {
    return new Intl.DateTimeFormat(a.intl.currentLocale, { hour: "numeric", minute: "2-digit" }).format(
        new Date(2025, 0, 1, e.hours, e.minutes),
    );
}
let d = new Set(s.slice(1, 6)),
    c = new Set([s[0], s[6]]),
    u = new Set(s);
function _(e, t) {
    if (e.size !== t.size) return !1;
    for (let n of e) if (!t.has(n)) return !1;
    return !0;
}
function E(e) {
    let t = new Set(e);
    if (_(t, u)) return a.intl.string(r.default.bPjqd1);
    if (_(t, d)) return a.intl.string(r.default["4dr9L9"]);
    if (_(t, c)) return a.intl.string(r.default["6lTTJ+"]);
    let n = new Intl.DateTimeFormat(a.intl.currentLocale, { weekday: "short" });
    return s
        .map((e, i) => (t.has(e) ? n.format(new Date(2025, 0, 5 + i)) : null))
        .filter((e) => null !== e)
        .join(", ");
}
function A(e) {
    return 60 * e.hours + e.minutes;
}
function h(e) {
    let t = e / 60;
    return Number.isInteger(t)
        ? a.intl.formatToPlainString(r.default.hFDcmZ, { hours: t })
        : a.intl.formatToPlainString(r.default.wcrXLM, { hours: Math.floor(t) });
}
function I(e) {
    return null != e.startTime && null != e.endTime ? `${o(e.startTime)} \u2013 ${o(e.endTime)}` : "";
}
function f(e) {
    return e
        .slice()
        .sort(
            (e, t) =>
                (e.startTime?.hours ?? 0) * 60 +
                (e.startTime?.minutes ?? 0) -
                ((t.startTime?.hours ?? 0) * 60 + (t.startTime?.minutes ?? 0)),
        );
}
function p(e) {
    return { hours: e.hours, minutes: e.minutes, seconds: 0, nanos: 0 };
}
function T(e, t, n) {
    let i = [];
    return (
        s.forEach((r, a) => {
            if (!e.has(r)) return;
            let s = t.find((e) => e.days.includes(r));
            null != s && i.push({ dayLabel: n[a], timeRange: I(s) });
        }),
        { conflictingEntries: i }
    );
}
