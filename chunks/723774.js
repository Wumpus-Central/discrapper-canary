n.d(t, {
    WE: () => u,
    lE: () => l
});
var r = n(709054),
    o = n(124368),
    i = n(388032);
let a = (e) => r.default.compare('992549565104128000', e) > -1,
    l = (e, t) => {
        if (null == e || e < 0) return '0';
        {
            let n = a(t);
            return (null == t || n) && e >= o.vw ? '50+' : e >= o.M3 ? '100k+' : ''.concat(e);
        }
    },
    c = (e, t, n) => {
        let r = l(e, n);
        return '0' === r ? i.intl.string(i.t.eXHkho) : i.intl.formatToPlainString(t, { count: r });
    },
    u = (e, t) => c(e, i.t.rfAXDQ, t);
