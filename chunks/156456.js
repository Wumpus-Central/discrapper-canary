n.d(t, { Z: () => s });
var i = n(571846),
    r = n(708605),
    a = n(662939);
function s(e, t) {
    var n = null == e ? null : (void 0 !== i && r(e)) || e['@@iterator'];
    if (null != n) {
        var s,
            o,
            l,
            u,
            c = [],
            d = !0,
            f = !1;
        try {
            if (((l = (n = n.call(e)).next), 0 === t)) {
                if (Object(n) !== n) return;
                d = !1;
            } else for (; !(d = (s = l.call(n)).done) && (a(c).call(c, s.value), c.length !== t); d = !0);
        } catch (e) {
            (f = !0), (o = e);
        } finally {
            try {
                if (!d && null != n.return && ((u = n.return()), Object(u) !== u)) return;
            } finally {
                if (f) throw o;
            }
        }
        return c;
    }
}
