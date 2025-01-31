t.d(n, {
    WE: () => o,
    lE: () => a
});
var l = t(709054),
    u = t(124368),
    i = t(388032);
let r = (e) => l.default.compare('992549565104128000', e) > -1,
    a = (e, n) => {
        if (null == e || e < 0) return '0';
        {
            let t = r(n);
            return (null == n || t) && e >= u.vw ? '50+' : e >= u.M3 ? '100k+' : ''.concat(e);
        }
    },
    d = (e, n, t) => {
        let l = a(e, t);
        return '0' === l ? i.intl.string(i.t.eXHkho) : i.intl.formatToPlainString(n, { count: l });
    },
    o = (e, n) => d(e, i.t.rfAXDQ, n);
