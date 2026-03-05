"use strict";
n.d(t, { Ay: () => p, WR: () => f, _e: () => _, i: () => d });
var r = n(989349),
    i = n.n(r),
    s = n(985018);
let a = 60,
    o = 3600,
    l = 86400,
    u = 2592e3,
    c = 31104e3,
    d = () => ({ minutes: s.t["XIGt+W"], hours: s.t.rhY1Rs, days: s.t.GBLpQ8, months: s.t.XzBNbS, years: s.t.I1E8p6 }),
    _ = () => ({
        minutes: s.t["GqQ/Y9"],
        hours: s.t.c5zfWZ,
        days: s.t.amjnaI,
        months: s.t.SoON3V,
        years: s.t["12B3Re"],
    });
function f(e) {
    let { seconds: t, getFormatter: n } = e,
        r = n(),
        i = "";
    return t < a
        ? s.intl.formatToPlainString(r.minutes, { minutes: 1 })
        : t < o
          ? s.intl.formatToPlainString(r.minutes, { minutes: Math.floor(t / a) })
          : t < l
            ? s.intl.formatToPlainString(r.hours, { hours: Math.floor(t / o) })
            : t < u
              ? s.intl.formatToPlainString(r.days, { days: Math.floor(t / l) })
              : t < c
                ? s.intl.formatToPlainString(r.months, { months: Math.floor(t / u) })
                : s.intl.formatToPlainString(r.years, { years: Math.floor(t / c) });
}
function p(e) {
    let { since: t, getFormatter: n } = e;
    return f({ seconds: i()().diff(i()(t), "s"), getFormatter: n });
}
