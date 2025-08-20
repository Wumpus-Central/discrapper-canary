n.d(t, {
    WE: () => u,
    lE: () => l,
});
var r = n(709054),
    i = n(124368),
    a = n(388032);
let o = "992549565104128000",
    s = (e) => r.default.compare(o, e) > -1,
    l = (e, t) => {
        if (null == e || e < 0) return "0";
        {
            let n = s(t);
            return (null == t || n) && e >= i.vw ? "50+" : e >= i.M3 ? "100k+" : "".concat(e);
        }
    },
    c = (e, t, n) => {
        let r = l(e, n);
        return "0" === r ? a.intl.string(a.t.eXHkho) : a.intl.formatToPlainString(t, { count: r });
    },
    u = (e, t) => c(e, a.t.rfAXDQ, t);
