n.d(t, { I2: () => A, a3: () => x, fU: () => o, li: () => h, n1: () => g, yG: () => r, yK: () => a, yN: () => _ });
var i = n(988506),
    s = n(221425),
    l = n(985018);
let r = [i.ob.SUNDAY, i.ob.MONDAY, i.ob.TUESDAY, i.ob.WEDNESDAY, i.ob.THURSDAY, i.ob.FRIDAY, i.ob.SATURDAY];
function a() {
    let e = new Intl.DateTimeFormat(l.intl.currentLocale, { weekday: "short" });
    return r.map((t, n) => e.format(new Date(2025, 0, 5 + n)));
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
