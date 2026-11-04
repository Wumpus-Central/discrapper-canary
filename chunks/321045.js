var i = n(811091);
n(37411);
var u = n(792996);
function e(t, r) {
    if (null == t || t < 0) return "0";
    {
        let n = i.default.compare("992549565104128000", r) > -1;
        return (null == r || n) && t >= 50 ? "50+" : t >= 1e5 ? "100k+" : `${t}`;
    }
}
n.d(
    r,
    {},
    {
        Mw: e,
        ub: function (t, r) {
            var n;
            let i;
            return (
                (n = u.t.rfAXDV),
                "0" === (i = e(t, r)) ? u.intl.string(u.t.eXHkhl) : u.intl.formatToPlainString(n, { count: i })
            );
        },
    },
);
