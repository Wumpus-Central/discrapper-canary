n.d(t, {
    WE: () => s,
    lE: () => c
});
var a = n(709054),
    i = n(124368),
    o = n(388032);
let r = (e) => a.default.compare('992549565104128000', e) > -1,
    c = (e, t) => {
        if (null == e || e < 0) return '0';
        {
            let n = r(t);
            return (null == t || n) && e >= i.vw ? '50+' : e >= i.M3 ? '100k+' : ''.concat(e);
        }
    },
    l = (e, t, n) => {
        let a = c(e, n);
        return '0' === a ? o.intl.string(o.t.eXHkho) : o.intl.formatToPlainString(t, { count: a });
    },
    s = (e, t) => l(e, o.t.rfAXDQ, t);
