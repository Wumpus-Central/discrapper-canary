n.d(t, { Z: () => r });
function r(e, t) {
    var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (null != n) {
        var r,
            i,
            l,
            a,
            s = [],
            o = !0,
            c = !1;
        try {
            if (((l = (n = n.call(e)).next), 0 === t)) {
                if (Object(n) !== n) return;
                o = !1;
            } else for (; !(o = (r = l.call(n)).done) && (s.push(r.value), s.length !== t); o = !0);
        } catch (e) {
            (c = !0), (i = e);
        } finally {
            try {
                if (!o && null != n.return && ((a = n.return()), Object(a) !== a)) return;
            } finally {
                if (c) throw i;
            }
        }
        return s;
    }
}
