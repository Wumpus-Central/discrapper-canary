n.d(t, { Z: () => i });
var r = n(571846),
    o = n(708605),
    a = n(662939);
function i(e, t) {
    var n = null == e ? null : (void 0 !== r && o(e)) || e['@@iterator'];
    if (null != n) {
        var i,
            s,
            c,
            l,
            u = [],
            d = !0,
            p = !1;
        try {
            if (((c = (n = n.call(e)).next), 0 === t)) {
                if (Object(n) !== n) return;
                d = !1;
            } else for (; !(d = (i = c.call(n)).done) && (a(u).call(u, i.value), u.length !== t); d = !0);
        } catch (e) {
            (p = !0), (s = e);
        } finally {
            try {
                if (!d && null != n.return && ((l = n.return()), Object(l) !== l)) return;
            } finally {
                if (p) throw s;
            }
        }
        return u;
    }
}
