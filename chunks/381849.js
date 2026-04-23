"use strict";
n.d(t, { Ay: () => u, WR: () => l, _e: () => o, i: () => a });
var r = n(989349),
    i = n.n(r),
    s = n(985018);
let a = () => ({ minutes: s.t["XIGt+W"], hours: s.t.rhY1Rs, days: s.t.GBLpQ8, months: s.t.XzBNbS, years: s.t.I1E8p6 }),
    o = () => ({
        minutes: s.t["GqQ/Y9"],
        hours: s.t.c5zfWZ,
        days: s.t.amjnaI,
        months: s.t.SoON3V,
        years: s.t["12B3Re"],
    });
function l(e) {
    let { seconds: t, getFormatter: n } = e,
        r = n();
    return t < 60
        ? s.intl.formatToPlainString(r.minutes, { minutes: 1 })
        : t < 3600
          ? s.intl.formatToPlainString(r.minutes, { minutes: Math.floor(t / 60) })
          : t < 86400
            ? s.intl.formatToPlainString(r.hours, { hours: Math.floor(t / 3600) })
            : t < 2592e3
              ? s.intl.formatToPlainString(r.days, { days: Math.floor(t / 86400) })
              : t < 31104e3
                ? s.intl.formatToPlainString(r.months, { months: Math.floor(t / 2592e3) })
                : s.intl.formatToPlainString(r.years, { years: Math.floor(t / 31104e3) });
}
function u(e) {
    let { since: t, getFormatter: n } = e;
    return l({ seconds: i()().diff(i()(t), "s"), getFormatter: n });
}
