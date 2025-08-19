n.d(t, { Z: () => r });
function r(e, t) {
    var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (null != n) {
        var r,
            i,
            l,
            a,
            o = [],
            s = !0,
            c = !1;
        try {
            if (((l = (n = n.call(e)).next), 0 === t)) {
                if (Object(n) !== n) return;
                s = !1;
            } else for (; !(s = (r = l.call(n)).done) && (o.push(r.value), o.length !== t); s = !0);
        } catch (e) {
            (c = !0), (i = e);
        } finally {
            try {
                if (!s && null != n.return && ((a = n.return()), Object(a) !== a)) return;
            } finally {
                if (c) throw i;
            }
        }
        return o;
    }
}
