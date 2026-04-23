i.d(t, { Mw: () => s, ub: () => o });
var n = i(661191),
    l = i(37411),
    a = i(985018);
let s = (e, t) => {
        if (null == e || e < 0) return "0";
        {
            let i = n.default.compare("992549565104128000", t) > -1;
            return (null == t || i) && e >= l.kl ? "50+" : e >= l.su ? "100k+" : `${e}`;
        }
    },
    o = (e, t) => {
        var i;
        let n;
        return (
            (i = a.t.rfAXDV),
            "0" === (n = s(e, t)) ? a.intl.string(a.t.eXHkhl) : a.intl.formatToPlainString(i, { count: n })
        );
    };
