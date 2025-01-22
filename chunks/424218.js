r.d(n, {
    BU: function () {
        return u;
    },
    IC: function () {
        return c;
    },
    XD: function () {
        return a;
    }
});
var i = r(388032);
let a = 1024,
    o = 1024,
    s = 1024,
    l = {
        useKibibytes: !1,
        showDecimalForGB: !0,
        useSpace: !0
    };
function u(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
        r = n.useKibibytes ? o : 1000,
        a = n.useKibibytes ? s : 1000,
        u = Math.ceil(e / r);
    if (u < a) return n.useSpace ? i.intl.formatToPlainString(i.t.cS889P, { size: u }) : i.intl.formatToPlainString(i.t.pIn7AQ, { size: u });
    let c = u / a;
    return (c = n.showDecimalForGB ? Math.round(10 * c) / 10 : Math.round(c)), n.useSpace ? i.intl.formatToPlainString(i.t.yhEXX1, { size: c }) : i.intl.formatToPlainString(i.t.TbMX9P, { size: c });
}
function c(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
        r = n.useKibibytes ? a : 1000,
        s = n.useKibibytes ? o : 1000,
        c = e / r;
    return c / s >= 1 ? u(c, n) : n.useSpace ? i.intl.formatToPlainString(i.t.bTzRR0, { size: Math.ceil(c) }) : i.intl.formatToPlainString(i.t.kEk9pq, { size: Math.ceil(c) });
}
