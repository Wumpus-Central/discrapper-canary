l.d(r, { Mw: () => i, ub: () => a });
var e = l(935208),
    n = l(37411),
    u = l(375708);
let i = (t, r) => {
        if (null == t || t < 0) return "0";
        {
            let l = e.default.compare("992549565104128000", r) > -1;
            return (null == r || l) && t >= n.kl ? "50+" : t >= n.su ? "100k+" : `${t}`;
        }
    },
    a = (t, r) => {
        var l;
        let e;
        return (
            (l = u.t.rfAXDV),
            "0" === (e = i(t, r)) ? u.intl.string(u.t.eXHkhl) : u.intl.formatToPlainString(l, { count: e })
        );
    };
