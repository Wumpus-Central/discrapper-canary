var a = t(619321),
    o = t(529776),
    n = t(403607);
(e.exports = function (e, r) {
    var t = null == e ? null : (void 0 !== a && o(e)) || e['@@iterator'];
    if (null != t) {
        var l,
            i,
            s,
            u,
            d = [],
            c = !0,
            p = !1;
        try {
            if (((s = (t = t.call(e)).next), 0 === r)) {
                if (Object(t) !== t) return;
                c = !1;
            } else for (; !(c = (l = s.call(t)).done) && (n(d).call(d, l.value), d.length !== r); c = !0);
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
