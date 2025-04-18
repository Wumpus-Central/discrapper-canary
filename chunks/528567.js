n.d(t, {
    C: () => o,
    s: () => s
});
var r = n(939639),
    i = n(99815),
    a = n(388032);
function o(e) {
    var t;
    return null !=
        (t = {
            [i.E.LOL_TOTAL_KILLS]: a.NW.string(a.t.aIbY2N),
            [i.E.LOL_TOTAL_DEATHS]: a.NW.string(a.t.Jec90d),
            [i.E.LOL_TOTAL_ASSISTS]: a.NW.string(a.t['8+lHWV']),
            [i.E.LOL_TOTAL_DAMAGE_DEALT]: a.NW.string(a.t['XEmO+P']),
            [i.E.LOL_TOTAL_DAMAGE_TAKEN]: a.NW.string(a.t['TcQ7//']),
            [i.E.LOL_TOTAL_WINS]: a.NW.string(a.t['/QfLjI']),
            [i.E.LOL_MAX_CREEP_SCORE]: a.NW.string(a.t.M5pp7e)
        }[e])
        ? t
        : a.NW.string(a.t['IraB/v']);
}
function s(e) {
    let { statisticId: t, sortDesc: n, aggregationType: i } = e,
        s = o(t);
    if (i === r.k.MAX)
        if (n) return a.NW.formatToPlainString(a.t.nJYOFx, { statisticName: s });
        else return a.NW.formatToPlainString(a.t.SYKIbW, { statisticName: s });
    return n ? a.NW.formatToPlainString(a.t.M9sOp6, { statisticName: s }) : a.NW.formatToPlainString(a.t.USfwd3, { statisticName: s });
}
