n.d(t, {
    C: () => i,
    s: () => o
});
var r = n(939639),
    a = n(99815),
    l = n(388032);
function i(e) {
    var t;
    return null !=
        (t = {
            [a.E.LOL_TOTAL_KILLS]: l.NW.string(l.t.aIbY2N),
            [a.E.LOL_TOTAL_DEATHS]: l.NW.string(l.t.Jec90d),
            [a.E.LOL_TOTAL_ASSISTS]: l.NW.string(l.t['8+lHWV']),
            [a.E.LOL_TOTAL_DAMAGE_DEALT]: l.NW.string(l.t['XEmO+P']),
            [a.E.LOL_TOTAL_DAMAGE_TAKEN]: l.NW.string(l.t['TcQ7//']),
            [a.E.LOL_TOTAL_WINS]: l.NW.string(l.t['/QfLjI']),
            [a.E.LOL_MAX_CREEP_SCORE]: l.NW.string(l.t.M5pp7e)
        }[e])
        ? t
        : l.NW.string(l.t['IraB/v']);
}
function o(e) {
    let { statisticId: t, sortDesc: n, aggregationType: a } = e,
        o = i(t);
    if (a === r.k.MAX)
        if (n) return l.NW.formatToPlainString(l.t.nJYOFx, { statisticName: o });
        else return l.NW.formatToPlainString(l.t.SYKIbW, { statisticName: o });
    return n ? l.NW.formatToPlainString(l.t.M9sOp6, { statisticName: o }) : l.NW.formatToPlainString(l.t.USfwd3, { statisticName: o });
}
