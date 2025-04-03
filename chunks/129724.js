n.d(t, { A: () => l });
var i = n(913527),
    r = n.n(i),
    o = n(388032);
function l(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.NW.string(o.t['Yl1D8/']),
        i = r().duration(e, 'seconds');
    return i.days() > 0 ? o.NW.formatToPlainString(t ? o.t.GBLpQ0 : o.t.k2UNz8, { days: i.days() }) : i.hours() > 0 ? o.NW.formatToPlainString(t ? o.t.rhY1Rk : o.t.xCjYxM, { hours: i.hours() }) : i.minutes() > 0 ? o.NW.formatToPlainString(t ? o.t['XIGt+f'] : o.t.iXLF9f, { minutes: i.minutes() }) : e > 0 ? o.NW.formatToPlainString(t ? o.t.pyvjRk : o.t.geSp4O, { seconds: i.seconds() }) : t ? o.NW.string(o.t['Yl1D8/']) : n;
}
