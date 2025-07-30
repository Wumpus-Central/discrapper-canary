n.d(t, {
    WE: () => c,
    lE: () => a
});
var i = n(709054),
    r = n(124368),
    l = n(388032);
let o = (e) => i.default.compare('992549565104128000', e) > -1,
    a = (e, t) => {
        if (null == e || e < 0) return '0';
        {
            let n = o(t);
            return (null == t || n) && e >= r.vw ? '50+' : e >= r.M3 ? '100k+' : ''.concat(e);
        }
    },
    s = (e, t, n) => {
        let i = a(e, n);
        return '0' === i ? l.intl.string(l.t.eXHkho) : l.intl.formatToPlainString(t, { count: i });
    },
    c = (e, t) => s(e, l.t.rfAXDQ, t);
