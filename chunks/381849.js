"use strict";
n.d(t, { Ay: () => p, _e: () => _, i: () => d });
var r = n(989349),
    i = n.n(r),
    a = n(985018);
let s = 60,
    o = 3600,
    l = 86400,
    u = 2592e3,
    c = 31104e3,
    d = () => ({ minutes: a.t["XIGt+W"], hours: a.t.rhY1Rs, days: a.t.GBLpQ8, months: a.t.XzBNbS, years: a.t.I1E8p6 }),
    _ = () => ({
        minutes: a.t["GqQ/Y9"],
        hours: a.t.c5zfWZ,
        days: a.t.amjnaI,
        months: a.t.SoON3V,
        years: a.t["12B3Re"],
    });
function f(e) {
    let { seconds: t, getFormatter: n } = e,
        r = n(),
        i = "";
    return t < s
        ? a.intl.formatToPlainString(r.minutes, { minutes: 1 })
        : t < o
          ? a.intl.formatToPlainString(r.minutes, { minutes: Math.floor(t / s) })
          : t < l
            ? a.intl.formatToPlainString(r.hours, { hours: Math.floor(t / o) })
            : t < u
              ? a.intl.formatToPlainString(r.days, { days: Math.floor(t / l) })
              : t < c
                ? a.intl.formatToPlainString(r.months, { months: Math.floor(t / u) })
                : a.intl.formatToPlainString(r.years, { years: Math.floor(t / c) });
}
function p(e) {
    let { since: t, getFormatter: n } = e;
    return f({ seconds: i()().diff(i()(t), "s"), getFormatter: n });
}
