var a = t(231131),
    l = t(964347),
    o = t(106722);
(e.exports = function (e, r) {
    var t = null == e ? null : (void 0 !== a && l(e)) || e["@@iterator"];
    if (null != t) {
        var s,
            i,
            n,
            u,
            d = [],
            c = !0,
            p = !1;
        try {
            if (((n = (t = t.call(e)).next), 0 === r)) {
                if (Object(t) !== t) return;
                c = !1;
            } else for (; !(c = (s = n.call(t)).done) && (o(d).call(d, s.value), d.length !== r); c = !0);
        } catch (e) {
            (p = !0), (i = e);
        } finally {
            try {
                if (!c && null != t.return && ((u = t.return()), Object(u) !== u)) return;
            } finally {
                if (p) throw i;
            }
        }
        return d;
    }
}),
    (e.exports.__esModule = !0),
    (e.exports.default = e.exports);
