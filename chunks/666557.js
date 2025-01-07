function a(e, t) {
    var r = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (null != r) {
        var a,
            n,
            s,
            o,
            i = [],
            c = !0,
            u = !1;
        try {
            if (((s = (r = r.call(e)).next), 0 === t)) {
                if (Object(r) !== r) return;
                c = !1;
            } else for (; !(c = (a = s.call(r)).done) && (i.push(a.value), i.length !== t); c = !0);
        } catch (e) {
            (u = !0), (n = e);
        } finally {
            try {
                if (!c && null != r.return && ((o = r.return()), Object(o) !== o)) return;
            } finally {
                if (u) throw n;
            }
        }
        return i;
    }
}
r.d(t, {
    Z: function () {
        return a;
    }
});
