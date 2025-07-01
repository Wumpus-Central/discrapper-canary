n.d(t, {
    WE: () => s,
    lE: () => c
});
var a = n(709054),
    o = n(124368),
    i = n(388032);
let r = (e) => a.default.compare('992549565104128000', e) > -1,
    c = (e, t) => {
        if (null == e || e < 0) return '0';
        {
            let n = r(t);
            return (null == t || n) && e >= o.vw ? '50+' : e >= o.M3 ? '100k+' : ''.concat(e);
        }
    },
    l = (e, t, n) => {
        let a = c(e, n);
        return '0' === a ? i.intl.string(i.t.eXHkho) : i.intl.formatToPlainString(t, { count: a });
    },
    s = (e, t) => l(e, i.t.rfAXDQ, t);
