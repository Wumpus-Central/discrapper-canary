n.d(t, {
    WE: () => o,
    lE: () => a,
});
var r = n(709054),
    i = n(124368),
    l = n(388032);
let a = (e, t) => {
        if (null == e || e < 0) return "0";
        {
            let n = r.default.compare("992549565104128000", t) > -1;
            return (null == t || n) && e >= i.vw ? "50+" : e >= i.M3 ? "100k+" : "".concat(e);
        }
    },
    o = (e, t) =>
        ((e, t, n) => {
            let r = a(e, n);
            return "0" === r ? l.intl.string(l.t.eXHkho) : l.intl.formatToPlainString(t, { count: r });
        })(e, l.t.rfAXDQ, t);
