n.d(t, {
    WE: () => u,
    lE: () => l
});
var r = n(709054),
    i = n(124368),
    o = n(388032);
let a = (e) => r.default.compare('992549565104128000', e) > -1,
    l = (e, t) => {
        if (null == e || e < 0) return '0';
        {
            let n = a(t);
            return (null == t || n) && e >= i.vw ? '50+' : e >= i.M3 ? '100k+' : ''.concat(e);
        }
    },
    c = (e, t, n) => {
        let r = l(e, n);
        return '0' === r ? o.intl.string(o.t.eXHkho) : o.intl.formatToPlainString(t, { count: r });
    },
    u = (e, t) => c(e, o.t.rfAXDQ, t);
