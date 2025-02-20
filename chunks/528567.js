n.d(t, {
    C: () => l,
    s: () => o
});
var r = n(939639),
    a = n(99815),
    i = n(388032);
function l(e) {
    var t;
    return null !==
        (t = {
            [a.E.LOL_TOTAL_KILLS]: i.NW.string(i.t.aIbY2N),
            [a.E.LOL_TOTAL_DEATHS]: i.NW.string(i.t.Jec90d),
            [a.E.LOL_TOTAL_ASSISTS]: i.NW.string(i.t['8+lHWV']),
            [a.E.LOL_TOTAL_DAMAGE_DEALT]: i.NW.string(i.t['XEmO+P']),
            [a.E.LOL_TOTAL_DAMAGE_TAKEN]: i.NW.string(i.t['TcQ7//']),
            [a.E.LOL_TOTAL_WINS]: i.NW.string(i.t['/QfLjI']),
            [a.E.LOL_MAX_CREEP_SCORE]: i.NW.string(i.t.M5pp7e)
        }[e]) && void 0 !== t
        ? t
        : i.NW.string(i.t['IraB/v']);
}
function o(e) {
    let { statisticId: t, sortDesc: n, aggregationType: a } = e,
        o = l(t);
    return a === r.k.MAX ? (n ? i.NW.formatToPlainString(i.t.nJYOFx, { statisticName: o }) : i.NW.formatToPlainString(i.t.SYKIbW, { statisticName: o })) : n ? i.NW.formatToPlainString(i.t.M9sOp6, { statisticName: o }) : i.NW.formatToPlainString(i.t.USfwd3, { statisticName: o });
}
