n.d(t, {
    C: () => i,
    s: () => o
});
var a = n(939639),
    r = n(99815),
    l = n(388032);
function i(e) {
    var t;
    return null !==
        (t = {
            [r.E.LOL_TOTAL_KILLS]: l.intl.string(l.t.aIbY2N),
            [r.E.LOL_TOTAL_DEATHS]: l.intl.string(l.t.Jec90d),
            [r.E.LOL_TOTAL_ASSISTS]: l.intl.string(l.t['8+lHWV']),
            [r.E.LOL_TOTAL_DAMAGE_DEALT]: l.intl.string(l.t['XEmO+P']),
            [r.E.LOL_TOTAL_DAMAGE_TAKEN]: l.intl.string(l.t['TcQ7//']),
            [r.E.LOL_TOTAL_WINS]: l.intl.string(l.t['/QfLjI']),
            [r.E.LOL_MAX_CREEP_SCORE]: l.intl.string(l.t.M5pp7e)
        }[e]) && void 0 !== t
        ? t
        : l.intl.string(l.t['IraB/v']);
}
function o(e) {
    let { statisticId: t, sortDesc: n, aggregationType: r } = e,
        o = i(t);
    return r === a.k.MAX ? (n ? l.intl.formatToPlainString(l.t.nJYOFx, { statisticName: o }) : l.intl.formatToPlainString(l.t.SYKIbW, { statisticName: o })) : n ? l.intl.formatToPlainString(l.t.M9sOp6, { statisticName: o }) : l.intl.formatToPlainString(l.t.USfwd3, { statisticName: o });
}
