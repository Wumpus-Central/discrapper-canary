n.d(t, {
    Mw: () => o,
    ub: () => a,
});
var i = n(661191),
    l = n(37411),
    r = n(985018);
let o = (e, t) => {
        if (null == e || e < 0) return "0";
        {
            let n = i.default.compare("992549565104128000", t) > -1;
            return (null == t || n) && e >= l.kl ? "50+" : e >= l.su ? "100k+" : "".concat(e);
        }
    },
    a = (e, t) => {
        var n;
        let i;
        return (
            (n = r.t.rfAXDV),
            "0" === (i = o(e, t))
                ? r.intl.string(r.t.eXHkhl)
                : r.intl.formatToPlainString(n, {
                      count: i,
                  })
        );
    };
