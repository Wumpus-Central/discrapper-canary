n.d(t, { A: () => s });
var r = n(913527),
    i = n.n(r),
    l = n(388032);
function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.NW.string(l.t['Yl1D8/']),
        r = i().duration(e, 'seconds');
    return r.days() > 0 ? l.NW.formatToPlainString(t ? l.t.GBLpQ0 : l.t.k2UNz8, { days: r.days() }) : r.hours() > 0 ? l.NW.formatToPlainString(t ? l.t.rhY1Rk : l.t.xCjYxM, { hours: r.hours() }) : r.minutes() > 0 ? l.NW.formatToPlainString(t ? l.t['XIGt+f'] : l.t.iXLF9f, { minutes: r.minutes() }) : e > 0 ? l.NW.formatToPlainString(t ? l.t.pyvjRk : l.t.geSp4O, { seconds: r.seconds() }) : t ? l.NW.string(l.t['Yl1D8/']) : n;
}
