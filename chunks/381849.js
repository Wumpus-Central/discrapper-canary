n.d(t, { Ay: () => o, WR: () => l, _e: () => _, i: () => s });
var i = n(989349),
    r = n.n(i),
    a = n(985018);
let s = () => ({ minutes: a.t["XIGt+W"], hours: a.t.rhY1Rs, days: a.t.GBLpQ8, months: a.t.XzBNbS, years: a.t.I1E8p6 }),
    _ = () => ({
        minutes: a.t["GqQ/Y9"],
        hours: a.t.c5zfWZ,
        days: a.t.amjnaI,
        months: a.t.SoON3V,
        years: a.t["12B3Re"],
    });
function l(e) {
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
function o(e) {
    let { since: t, getFormatter: n } = e;
    return l({ seconds: r()().diff(r()(t), "s"), getFormatter: n });
}
