n.d(t, {
    BU: () => l,
    IC: () => c,
    XD: () => i
});
var r = n(388032);
let i = 1024,
    o = 1024,
    a = 1024,
    s = {
        useKibibytes: !1,
        showDecimalForGB: !0,
        useSpace: !0
    };
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = t.useKibibytes ? o : 1000,
        i = t.useKibibytes ? a : 1000,
        l = Math.ceil(e / n);
    if (l < i) return t.useSpace ? r.NW.formatToPlainString(r.t.cS889P, { size: l }) : r.NW.formatToPlainString(r.t.pIn7AQ, { size: l });
    let c = l / i;
    return (c = t.showDecimalForGB ? Math.round(10 * c) / 10 : Math.round(c)), t.useSpace ? r.NW.formatToPlainString(r.t.yhEXX1, { size: c }) : r.NW.formatToPlainString(r.t.TbMX9P, { size: c });
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
        n = t.useKibibytes ? i : 1000,
        a = t.useKibibytes ? o : 1000,
        c = e / n;
    return c / a >= 1 ? l(c, t) : t.useSpace ? r.NW.formatToPlainString(r.t.bTzRR0, { size: Math.ceil(c) }) : r.NW.formatToPlainString(r.t.kEk9pq, { size: Math.ceil(c) });
}
