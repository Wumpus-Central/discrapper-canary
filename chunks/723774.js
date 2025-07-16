n.d(t, {
    WE: () => s,
    lE: () => r
});
var a = n(709054),
    o = n(124368),
    i = n(388032);
let c = (e) => a.default.compare('992549565104128000', e) > -1,
    r = (e, t) => {
        if (null == e || e < 0) return '0';
        {
            let n = c(t);
            return (null == t || n) && e >= o.vw ? '50+' : e >= o.M3 ? '100k+' : ''.concat(e);
        }
    },
    l = (e, t, n) => {
        let a = r(e, n);
        return '0' === a ? i.intl.string(i.t.eXHkho) : i.intl.formatToPlainString(t, { count: a });
    },
    s = (e, t) => l(e, i.t.rfAXDQ, t);
