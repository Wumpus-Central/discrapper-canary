n.d(t, {
    I2: () => A,
    a3: () => x,
    d: () => T,
    fU: () => o,
    li: () => h,
    n1: () => g,
    v9: () => p,
    yG: () => r,
    yK: () => a,
    yN: () => _,
}),
    n(321073);
var i = n(988506),
    s = n(602339),
    l = n(985018);
let r = [i.ob.SUNDAY, i.ob.MONDAY, i.ob.TUESDAY, i.ob.WEDNESDAY, i.ob.THURSDAY, i.ob.FRIDAY, i.ob.SATURDAY];
function a(e) {
    let t = new Intl.DateTimeFormat(l.intl.currentLocale, { weekday: e });
    return r.map((e, n) => t.format(new Date(2025, 0, 5 + n)));
}
function o(e) {
    return new Intl.DateTimeFormat(l.intl.currentLocale, { hour: "numeric", minute: "2-digit" }).format(
        new Date(2025, 0, 1, e.hours, e.minutes),
    );
}
let d = new Set(r.slice(1, 6)),
    c = new Set([r[0], r[6]]),
    u = new Set(r);
function m(e, t) {
    if (e.size !== t.size) return !1;
    for (let n of e) if (!t.has(n)) return !1;
    return !0;
}
function g(e) {
    let t = new Set(e);
    if (m(t, u)) return l.intl.string(s.default.bPjqd1);
    if (m(t, d)) return l.intl.string(s.default["4dr9L9"]);
    if (m(t, c)) return l.intl.string(s.default["6lTTJ+"]);
    let n = new Intl.DateTimeFormat(l.intl.currentLocale, { weekday: "short" });
    return r
        .map((e, i) => (t.has(e) ? n.format(new Date(2025, 0, 5 + i)) : null))
        .filter((e) => null !== e)
        .join(", ");
}
function _(e) {
    return 60 * e.hours + e.minutes;
}
function x(e) {
    let t = e / 60;
    return Number.isInteger(t)
        ? l.intl.formatToPlainString(s.default.hFDcmZ, { hours: t })
        : l.intl.formatToPlainString(s.default.wcrXLM, { hours: Math.floor(t) });
}
function h(e) {
    return null != e.startTime && null != e.endTime ? `${o(e.startTime)} \u2013 ${o(e.endTime)}` : "";
}
function A(e) {
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
        r.forEach((s, l) => {
            if (!e.has(s)) return;
            let r = t.find((e) => e.days.includes(s));
            null != r && i.push({ dayLabel: n[l], timeRange: h(r) });
        }),
        { conflictingEntries: i }
    );
}
