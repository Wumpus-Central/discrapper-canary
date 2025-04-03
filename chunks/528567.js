r.d(t, {
    C: () => i,
    s: () => l
});
var n = r(939639),
    a = r(99815),
    o = r(388032);
function i(e) {
    var t;
    return null !=
        (t = {
            [a.E.LOL_TOTAL_KILLS]: o.NW.string(o.t.aIbY2N),
            [a.E.LOL_TOTAL_DEATHS]: o.NW.string(o.t.Jec90d),
            [a.E.LOL_TOTAL_ASSISTS]: o.NW.string(o.t['8+lHWV']),
            [a.E.LOL_TOTAL_DAMAGE_DEALT]: o.NW.string(o.t['XEmO+P']),
            [a.E.LOL_TOTAL_DAMAGE_TAKEN]: o.NW.string(o.t['TcQ7//']),
            [a.E.LOL_TOTAL_WINS]: o.NW.string(o.t['/QfLjI']),
            [a.E.LOL_MAX_CREEP_SCORE]: o.NW.string(o.t.M5pp7e)
        }[e])
        ? t
        : o.NW.string(o.t['IraB/v']);
}
function l(e) {
    let { statisticId: t, sortDesc: r, aggregationType: a } = e,
        l = i(t);
    if (a === n.k.MAX)
        if (r) return o.NW.formatToPlainString(o.t.nJYOFx, { statisticName: l });
        else return o.NW.formatToPlainString(o.t.SYKIbW, { statisticName: l });
    return r ? o.NW.formatToPlainString(o.t.M9sOp6, { statisticName: l }) : o.NW.formatToPlainString(o.t.USfwd3, { statisticName: l });
}
