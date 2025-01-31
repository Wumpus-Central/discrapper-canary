n.d(t, {
    BU: () => l,
    IC: () => u,
    XD: () => r
});
var i = n(388032);
let r = 1024,
    a = 1024,
    s = 1024,
    o = {
        useKibibytes: !1,
        showDecimalForGB: !0,
        useSpace: !0
    };
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
        n = t.useKibibytes ? a : 1000,
        r = t.useKibibytes ? s : 1000,
        l = Math.ceil(e / n);
    if (l < r) return t.useSpace ? i.intl.formatToPlainString(i.t.cS889P, { size: l }) : i.intl.formatToPlainString(i.t.pIn7AQ, { size: l });
    let u = l / r;
    return (u = t.showDecimalForGB ? Math.round(10 * u) / 10 : Math.round(u)), t.useSpace ? i.intl.formatToPlainString(i.t.yhEXX1, { size: u }) : i.intl.formatToPlainString(i.t.TbMX9P, { size: u });
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
        n = t.useKibibytes ? r : 1000,
        s = t.useKibibytes ? a : 1000,
        u = e / n;
    return u / s >= 1 ? l(u, t) : t.useSpace ? i.intl.formatToPlainString(i.t.bTzRR0, { size: Math.ceil(u) }) : i.intl.formatToPlainString(i.t.kEk9pq, { size: Math.ceil(u) });
}
