n.d(t, {
    C: () => a,
    s: () => l
});
var r = n(939639),
    i = n(99815),
    o = n(388032);
function a(e) {
    var t;
    return null !=
        (t = {
            [i.E.LOL_TOTAL_KILLS]: o.NW.string(o.t.aIbY2N),
            [i.E.LOL_TOTAL_DEATHS]: o.NW.string(o.t.Jec90d),
            [i.E.LOL_TOTAL_ASSISTS]: o.NW.string(o.t['8+lHWV']),
            [i.E.LOL_TOTAL_DAMAGE_DEALT]: o.NW.string(o.t['XEmO+P']),
            [i.E.LOL_TOTAL_DAMAGE_TAKEN]: o.NW.string(o.t['TcQ7//']),
            [i.E.LOL_TOTAL_WINS]: o.NW.string(o.t['/QfLjI']),
            [i.E.LOL_MAX_CREEP_SCORE]: o.NW.string(o.t.M5pp7e)
        }[e])
        ? t
        : o.NW.string(o.t['IraB/v']);
}
function l(e) {
    let { statisticId: t, sortDesc: n, aggregationType: i } = e,
        l = a(t);
    if (i === r.k.MAX)
        if (n) return o.NW.formatToPlainString(o.t.nJYOFx, { statisticName: l });
        else return o.NW.formatToPlainString(o.t.SYKIbW, { statisticName: l });
    return n ? o.NW.formatToPlainString(o.t.M9sOp6, { statisticName: l }) : o.NW.formatToPlainString(o.t.USfwd3, { statisticName: l });
}
