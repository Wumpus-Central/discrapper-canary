r.d(n, {
    C: function () {
        return s;
    },
    s: function () {
        return l;
    }
});
var i = r(939639),
    a = r(99815),
    o = r(388032);
function s(e) {
    var n;
    return null !==
        (n = {
            [a.E.LOL_TOTAL_KILLS]: o.intl.string(o.t.aIbY2N),
            [a.E.LOL_TOTAL_DEATHS]: o.intl.string(o.t.Jec90d),
            [a.E.LOL_TOTAL_ASSISTS]: o.intl.string(o.t['8+lHWV']),
            [a.E.LOL_TOTAL_DAMAGE_DEALT]: o.intl.string(o.t['XEmO+P']),
            [a.E.LOL_TOTAL_DAMAGE_TAKEN]: o.intl.string(o.t['TcQ7//']),
            [a.E.LOL_TOTAL_WINS]: o.intl.string(o.t['/QfLjI']),
            [a.E.LOL_MAX_CREEP_SCORE]: o.intl.string(o.t.M5pp7e)
        }[e]) && void 0 !== n
        ? n
        : o.intl.string(o.t['IraB/v']);
}
function l(e) {
    let { statisticId: n, sortDesc: r, aggregationType: a } = e,
        l = s(n);
    if (a === i.k.MAX) return r ? o.intl.formatToPlainString(o.t.nJYOFx, { statisticName: l }) : o.intl.formatToPlainString(o.t.SYKIbW, { statisticName: l });
    return r ? o.intl.formatToPlainString(o.t.M9sOp6, { statisticName: l }) : o.intl.formatToPlainString(o.t.USfwd3, { statisticName: l });
}
