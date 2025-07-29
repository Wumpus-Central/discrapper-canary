n.d(t, {
    WE: () => u,
    lE: () => o
});
var r = n(709054),
    i = n(124368),
    a = n(388032);
let l = (e) => r.default.compare('992549565104128000', e) > -1,
    o = (e, t) => {
        if (null == e || e < 0) return '0';
        {
            let n = l(t);
            return (null == t || n) && e >= i.vw ? '50+' : e >= i.M3 ? '100k+' : ''.concat(e);
        }
    },
    c = (e, t, n) => {
        let r = o(e, n);
        return '0' === r ? a.intl.string(a.t.eXHkho) : a.intl.formatToPlainString(t, { count: r });
    },
    u = (e, t) => c(e, a.t.rfAXDQ, t);
