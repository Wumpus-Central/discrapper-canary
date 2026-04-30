"use strict";
n.d(t, { Ay: () => u, WR: () => l, _e: () => o, i: () => a });
var i = n(989349),
    r = n.n(i),
    s = n(375708);
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
        i = n();
    return t < 60
        ? s.intl.formatToPlainString(i.minutes, { minutes: 1 })
        : t < 3600
          ? s.intl.formatToPlainString(i.minutes, { minutes: Math.floor(t / 60) })
          : t < 86400
            ? s.intl.formatToPlainString(i.hours, { hours: Math.floor(t / 3600) })
            : t < 2592e3
              ? s.intl.formatToPlainString(i.days, { days: Math.floor(t / 86400) })
              : t < 31104e3
                ? s.intl.formatToPlainString(i.months, { months: Math.floor(t / 2592e3) })
                : s.intl.formatToPlainString(i.years, { years: Math.floor(t / 31104e3) });
}
function u(e) {
    let { since: t, getFormatter: n } = e;
    return l({ seconds: r()().diff(r()(t), "s"), getFormatter: n });
}
