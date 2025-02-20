t.d(n, {
    WE: () => d,
    lE: () => o
});
var r = t(709054),
    l = t(124368),
    u = t(388032);
let i = (e) => r.default.compare('992549565104128000', e) > -1,
    o = (e, n) => {
        if (null == e || e < 0) return '0';
        {
            let t = i(n);
            return (null == n || t) && e >= l.vw ? '50+' : e >= l.M3 ? '100k+' : ''.concat(e);
        }
    },
    a = (e, n, t) => {
        let r = o(e, t);
        return '0' === r ? u.NW.string(u.t.eXHkho) : u.NW.formatToPlainString(n, { count: r });
    },
    d = (e, n) => a(e, u.t.rfAXDQ, n);
