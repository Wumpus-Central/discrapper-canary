n(321073);
var i = n(76573),
    r = n(665956),
    a = n(792996);
let s = [i.ob.SUNDAY, i.ob.MONDAY, i.ob.TUESDAY, i.ob.WEDNESDAY, i.ob.THURSDAY, i.ob.FRIDAY, i.ob.SATURDAY];
function l(e) {
    return new Intl.DateTimeFormat(a.intl.currentLocale, { hour: "numeric", minute: "2-digit" }).format(
        new Date(2025, 0, 1, e.hours, e.minutes),
    );
}
let o = new Set(s.slice(1, 6)),
    d = new Set([s[0], s[6]]),
    c = new Set(s);
function u(e, t) {
    if (e.size !== t.size) return !1;
    for (let n of e) if (!t.has(n)) return !1;
    return !0;
}
function _(e) {
    return null != e.startTime && null != e.endTime ? `${l(e.startTime)} \u2013 ${l(e.endTime)}` : "";
}
n.d(
    t,
    {},
    {
        I2: function (e) {
            return e
                .slice()
                .sort(
                    (e, t) =>
                        (e.startTime?.hours ?? 0) * 60 +
                        (e.startTime?.minutes ?? 0) -
                        ((t.startTime?.hours ?? 0) * 60 + (t.startTime?.minutes ?? 0)),
                );
        },
        OO: function (e) {
            let t = new Intl.DateTimeFormat(a.intl.currentLocale, { weekday: e });
            return s.map((e, n) => t.format(new Date(2025, 0, 5 + n)));
        },
        a3: function (e) {
            let t = e / 60;
            return Number.isInteger(t)
                ? a.intl.formatToPlainString(r.default.hFDcmZ, { hours: t })
                : a.intl.formatToPlainString(r.default.wcrXLM, { hours: Math.floor(t) });
        },
        d: function (e, t, n) {
            let i = [];
            return (
                s.forEach((r, a) => {
                    if (!e.has(r)) return;
                    let s = t.find((e) => e.days.includes(r));
                    null != s && i.push({ dayLabel: n[a], timeRange: _(s) });
                }),
                { conflictingEntries: i }
            );
        },
        fU: l,
        li: _,
        n1: function (e) {
            let t = new Set(e);
            if (u(t, c)) return a.intl.string(r.default.bPjqd1);
            if (u(t, o)) return a.intl.string(r.default["4dr9L9"]);
            if (u(t, d)) return a.intl.string(r.default["6lTTJ+"]);
            let n = new Intl.DateTimeFormat(a.intl.currentLocale, { weekday: "short" });
            return s
                .map((e, i) => (t.has(e) ? n.format(new Date(2025, 0, 5 + i)) : null))
                .filter((e) => null !== e)
                .join(", ");
        },
        v9: function (e) {
            return { hours: e.hours, minutes: e.minutes, seconds: 0, nanos: 0 };
        },
        yG: s,
        yN: function (e) {
            return 60 * e.hours + e.minutes;
        },
    },
);
