n.d(t, { A: () => o });
var i = n(913527),
    r = n.n(i),
    l = n(388032);
function o(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.intl.string(l.t["Yl1D8/"]),
        i = r().duration(e, "seconds");
    return i.days() > 0
        ? l.intl.formatToPlainString(t ? l.t.GBLpQ0 : l.t.k2UNz8, { days: i.days() })
        : i.hours() > 0
          ? l.intl.formatToPlainString(t ? l.t.rhY1Rk : l.t.xCjYxM, { hours: i.hours() })
          : i.minutes() > 0
            ? l.intl.formatToPlainString(t ? l.t["XIGt+f"] : l.t.iXLF9f, { minutes: i.minutes() })
            : e > 0
              ? l.intl.formatToPlainString(t ? l.t.pyvjRk : l.t.geSp4O, { seconds: i.seconds() })
              : t
                ? l.intl.string(l.t["Yl1D8/"])
                : n;
}
