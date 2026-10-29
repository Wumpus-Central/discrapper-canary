n.d(t, { Ay: () => d, WR: () => o, _e: () => l, i: () => s });
var i = n(536637),
    r = n.n(i),
    a = n(105292);
function s() {
    return {
        minutes: a.t["XIGt+W"],
        hours: a.t.rhY1Rs,
        days: a.t.GBLpQ8,
        weeks: a.t.veX7G1,
        months: a.t.XzBNbS,
        years: a.t.I1E8p6,
    };
}
function l() {
    return { minutes: a.t["GqQ/Y9"], hours: a.t.c5zfWZ, days: a.t.amjnaI, months: a.t.SoON3V, years: a.t["12B3Re"] };
}
function o(e) {
    let { seconds: t, getFormatter: n, includeWeeks: i = !1 } = e,
        r = n(),
        s = i ? r.weeks : void 0;
    return t < 60
        ? a.intl.formatToPlainString(r.minutes, { minutes: 1 })
        : t < 3600
          ? a.intl.formatToPlainString(r.minutes, { minutes: Math.floor(t / 60) })
          : t < 86400
            ? a.intl.formatToPlainString(r.hours, { hours: Math.floor(t / 3600) })
            : null != s && t >= 604800 && t < 2592e3
              ? a.intl.formatToPlainString(s, { weeks: Math.floor(t / 604800) })
              : t < 2592e3
                ? a.intl.formatToPlainString(r.days, { days: Math.floor(t / 86400) })
                : t < 31104e3
                  ? a.intl.formatToPlainString(r.months, { months: Math.floor(t / 2592e3) })
                  : a.intl.formatToPlainString(r.years, { years: Math.floor(t / 31104e3) });
}
function d(e) {
    let { since: t, getFormatter: n, includeWeeks: i } = e;
    return o({ seconds: r()().diff(r()(t), "s"), getFormatter: n, includeWeeks: i });
}
