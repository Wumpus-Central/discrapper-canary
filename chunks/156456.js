n.d(t, { Z: () => a });
var r = n(571846),
    i = n(708605),
    o = n(662939);
function a(e, t) {
    var n = null == e ? null : (void 0 !== r && i(e)) || e['@@iterator'];
    if (null != n) {
        var a,
            s,
            l,
            c,
            u = [],
            d = !0,
            f = !1;
        try {
            if (((l = (n = n.call(e)).next), 0 === t)) {
                if (Object(n) !== n) return;
                d = !1;
            } else for (; !(d = (a = l.call(n)).done) && (o(u).call(u, a.value), u.length !== t); d = !0);
        } catch (e) {
            (f = !0), (s = e);
        } finally {
            try {
                if (!d && null != n.return && ((c = n.return()), Object(c) !== c)) return;
            } finally {
                if (f) throw s;
            }
        }
        return u;
    }
}
