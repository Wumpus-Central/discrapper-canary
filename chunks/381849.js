var i = n(536637),
    r = n.n(i),
    a = n(792996);
function s(e) {
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
n.d(
    t,
    {},
    {
        Ay: function (e) {
            let { since: t, getFormatter: n, includeWeeks: i } = e;
            return s({ seconds: r()().diff(r()(t), "s"), getFormatter: n, includeWeeks: i });
        },
        WR: s,
        _e: function () {
            return {
                minutes: a.t["GqQ/Y9"],
                hours: a.t.c5zfWZ,
                days: a.t.amjnaI,
                months: a.t.SoON3V,
                years: a.t["12B3Re"],
            };
        },
        i: function () {
            return {
                minutes: a.t["XIGt+W"],
                hours: a.t.rhY1Rs,
                days: a.t.GBLpQ8,
                weeks: a.t.veX7G1,
                months: a.t.XzBNbS,
                years: a.t.I1E8p6,
            };
        },
    },
);
