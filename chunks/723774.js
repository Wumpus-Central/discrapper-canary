n.d(t, {
    WE: () => c,
    lE: () => o
});
var r = n(709054),
    i = n(124368),
    l = n(388032);
let a = (e) => r.default.compare('992549565104128000', e) > -1,
    o = (e, t) => {
        if (null == e || e < 0) return '0';
        {
            let n = a(t);
            return (null == t || n) && e >= i.vw ? '50+' : e >= i.M3 ? '100k+' : ''.concat(e);
        }
    },
    s = (e, t, n) => {
        let r = o(e, n);
        return '0' === r ? l.intl.string(l.t.eXHkho) : l.intl.formatToPlainString(t, { count: r });
    },
    c = (e, t) => s(e, l.t.rfAXDQ, t);
