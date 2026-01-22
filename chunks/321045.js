n.d(t, {
    Mw: () => l,
    ub: () => u,
});
var r = n(661191),
    i = n(37411),
    a = n(985018);
let s = "992549565104128000",
    o = (e) => r.default.compare(s, e) > -1,
    l = (e, t) => {
        if (null == e || e < 0) return "0";
        {
            let n = o(t);
            return (null == t || n) && e >= i.kl ? "50+" : e >= i.su ? "100k+" : "".concat(e);
        }
    },
    c = (e, t, n) => {
        let r = l(e, n);
        return "0" === r
            ? a.intl.string(a.t.eXHkhl)
            : a.intl.formatToPlainString(t, {
                  count: r,
              });
    },
    u = (e, t) => c(e, a.t.rfAXDV, t);
