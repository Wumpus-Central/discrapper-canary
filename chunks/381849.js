"use strict";
n.d(t, { Ay: () => d, WR: () => o, _e: () => l, i: () => s });
var i = n(536637),
    r = n.n(i),
    a = n(375708);
function s() {
    return { minutes: a.t["XIGt+W"], hours: a.t.rhY1Rs, days: a.t.GBLpQ8, months: a.t.XzBNbS, years: a.t.I1E8p6 };
}
function l() {
    return { minutes: a.t["GqQ/Y9"], hours: a.t.c5zfWZ, days: a.t.amjnaI, months: a.t.SoON3V, years: a.t["12B3Re"] };
}
function o(e) {
    let { seconds: t, getFormatter: n } = e,
        i = n();
    return t < 60
        ? a.intl.formatToPlainString(i.minutes, { minutes: 1 })
        : t < 3600
          ? a.intl.formatToPlainString(i.minutes, { minutes: Math.floor(t / 60) })
          : t < 86400
            ? a.intl.formatToPlainString(i.hours, { hours: Math.floor(t / 3600) })
            : t < 2592e3
              ? a.intl.formatToPlainString(i.days, { days: Math.floor(t / 86400) })
              : t < 31104e3
                ? a.intl.formatToPlainString(i.months, { months: Math.floor(t / 2592e3) })
                : a.intl.formatToPlainString(i.years, { years: Math.floor(t / 31104e3) });
}
function d(e) {
    let { since: t, getFormatter: n } = e;
    return o({ seconds: r()().diff(r()(t), "s"), getFormatter: n });
}
