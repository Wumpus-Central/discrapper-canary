n.d(t, {
    C: () => r,
    s: () => l
});
var i = n(939639),
    a = n(99815),
    o = n(388032);
function r(e) {
    var t;
    return null !==
        (t = {
            [a.E.LOL_TOTAL_KILLS]: o.intl.string(o.t.aIbY2N),
            [a.E.LOL_TOTAL_DEATHS]: o.intl.string(o.t.Jec90d),
            [a.E.LOL_TOTAL_ASSISTS]: o.intl.string(o.t['8+lHWV']),
            [a.E.LOL_TOTAL_DAMAGE_DEALT]: o.intl.string(o.t['XEmO+P']),
            [a.E.LOL_TOTAL_DAMAGE_TAKEN]: o.intl.string(o.t['TcQ7//']),
            [a.E.LOL_TOTAL_WINS]: o.intl.string(o.t['/QfLjI']),
            [a.E.LOL_MAX_CREEP_SCORE]: o.intl.string(o.t.M5pp7e)
        }[e]) && void 0 !== t
        ? t
        : o.intl.string(o.t['IraB/v']);
}
function l(e) {
    let { statisticId: t, sortDesc: n, aggregationType: a } = e,
        l = r(t);
    return a === i.k.MAX ? (n ? o.intl.formatToPlainString(o.t.nJYOFx, { statisticName: l }) : o.intl.formatToPlainString(o.t.SYKIbW, { statisticName: l })) : n ? o.intl.formatToPlainString(o.t.M9sOp6, { statisticName: l }) : o.intl.formatToPlainString(o.t.USfwd3, { statisticName: l });
}
