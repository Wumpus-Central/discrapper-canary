n.d(t, { Ay: () => d, WR: () => o, _e: () => l, i: () => s });
var i = n(989349),
    a = n.n(i),
    r = n(985018);
let s = () => ({ minutes: r.t["XIGt+W"], hours: r.t.rhY1Rs, days: r.t.GBLpQ8, months: r.t.XzBNbS, years: r.t.I1E8p6 }),
    l = () => ({
        minutes: r.t["GqQ/Y9"],
        hours: r.t.c5zfWZ,
        days: r.t.amjnaI,
        months: r.t.SoON3V,
        years: r.t["12B3Re"],
    });
function o(e) {
    let { seconds: t, getFormatter: n } = e,
        i = n();
    return t < 60
        ? r.intl.formatToPlainString(i.minutes, { minutes: 1 })
        : t < 3600
          ? r.intl.formatToPlainString(i.minutes, { minutes: Math.floor(t / 60) })
          : t < 86400
            ? r.intl.formatToPlainString(i.hours, { hours: Math.floor(t / 3600) })
            : t < 2592e3
              ? r.intl.formatToPlainString(i.days, { days: Math.floor(t / 86400) })
              : t < 31104e3
                ? r.intl.formatToPlainString(i.months, { months: Math.floor(t / 2592e3) })
                : r.intl.formatToPlainString(i.years, { years: Math.floor(t / 31104e3) });
}
function d(e) {
    let { since: t, getFormatter: n } = e;
    return o({ seconds: a()().diff(a()(t), "s"), getFormatter: n });
}
