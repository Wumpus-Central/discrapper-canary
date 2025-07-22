n.d(t, {
    WE: () => u,
    lE: () => l
});
var r = n(709054),
    o = n(124368),
    a = n(388032);
let i = (e) => r.default.compare('992549565104128000', e) > -1,
    l = (e, t) => {
        if (null == e || e < 0) return '0';
        {
            let n = i(t);
            return (null == t || n) && e >= o.vw ? '50+' : e >= o.M3 ? '100k+' : ''.concat(e);
        }
    },
    c = (e, t, n) => {
        let r = l(e, n);
        return '0' === r ? a.intl.string(a.t.eXHkho) : a.intl.formatToPlainString(t, { count: r });
    },
    u = (e, t) => c(e, a.t.rfAXDQ, t);
