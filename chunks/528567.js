n.d(t, {
    C: () => s,
    s: () => o
});
var i = n(939639),
    r = n(99815),
    a = n(388032);
function s(e) {
    var t;
    return null !==
        (t = {
            [r.E.LOL_TOTAL_KILLS]: a.intl.string(a.t.aIbY2N),
            [r.E.LOL_TOTAL_DEATHS]: a.intl.string(a.t.Jec90d),
            [r.E.LOL_TOTAL_ASSISTS]: a.intl.string(a.t['8+lHWV']),
            [r.E.LOL_TOTAL_DAMAGE_DEALT]: a.intl.string(a.t['XEmO+P']),
            [r.E.LOL_TOTAL_DAMAGE_TAKEN]: a.intl.string(a.t['TcQ7//']),
            [r.E.LOL_TOTAL_WINS]: a.intl.string(a.t['/QfLjI']),
            [r.E.LOL_MAX_CREEP_SCORE]: a.intl.string(a.t.M5pp7e)
        }[e]) && void 0 !== t
        ? t
        : a.intl.string(a.t['IraB/v']);
}
function o(e) {
    let { statisticId: t, sortDesc: n, aggregationType: r } = e,
        o = s(t);
    return r === i.k.MAX ? (n ? a.intl.formatToPlainString(a.t.nJYOFx, { statisticName: o }) : a.intl.formatToPlainString(a.t.SYKIbW, { statisticName: o })) : n ? a.intl.formatToPlainString(a.t.M9sOp6, { statisticName: o }) : a.intl.formatToPlainString(a.t.USfwd3, { statisticName: o });
}
