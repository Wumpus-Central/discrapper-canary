n.d(t, { A: () => a });
var i = n(913527),
    l = n.n(i),
    s = n(388032);
function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.intl.string(s.t['Yl1D8/']),
        i = l().duration(e, 'seconds');
    return i.days() > 0 ? s.intl.formatToPlainString(t ? s.t.GBLpQ0 : s.t.k2UNz8, { days: i.days() }) : i.hours() > 0 ? s.intl.formatToPlainString(t ? s.t.rhY1Rk : s.t.xCjYxM, { hours: i.hours() }) : i.minutes() > 0 ? s.intl.formatToPlainString(t ? s.t['XIGt+f'] : s.t.iXLF9f, { minutes: i.minutes() }) : e > 0 ? s.intl.formatToPlainString(t ? s.t.pyvjRk : s.t.geSp4O, { seconds: i.seconds() }) : t ? s.intl.string(s.t['Yl1D8/']) : n;
}
