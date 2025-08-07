n.d(t, { Z: () => r });
function r(e, t) {
    var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (null != n) {
        var r,
            i,
            l,
            o,
            s = [],
            a = !0,
            c = !1;
        try {
            if (((l = (n = n.call(e)).next), 0 === t)) {
                if (Object(n) !== n) return;
                a = !1;
            } else for (; !(a = (r = l.call(n)).done) && (s.push(r.value), s.length !== t); a = !0);
        } catch (e) {
            (c = !0), (i = e);
        } finally {
            try {
                if (!a && null != n.return && ((o = n.return()), Object(o) !== o)) return;
            } finally {
                if (c) throw i;
            }
        }
        return s;
    }
}
