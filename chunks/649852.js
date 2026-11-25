var a = t(980320),
    n = t(403819),
    o = t(867167),
    c = Math.max,
    s = Math.min;
e.exports = function (e, r, t) {
    var i,
        u,
        f,
        l,
        p,
        h,
        y = 0,
        d = !1,
        v = !1,
        g = !0;
    if ("function" != typeof e) throw TypeError("Expected a function");
    function w(r) {
        var t = i,
            a = u;
        return ((i = u = void 0), (y = r), (l = e.apply(a, t)));
    }
    function b(e) {
        var t = e - h,
            a = e - y;
        return void 0 === h || t >= r || t < 0 || (v && a >= f);
    }
    function m() {
        var e,
            t,
            a,
            o = n();
        if (b(o)) return x(o);
        p = setTimeout(m, ((e = o - h), (t = o - y), (a = r - e), v ? s(a, f - t) : a));
    }
    function x(e) {
        return ((p = void 0), g && i) ? w(e) : ((i = u = void 0), l);
    }
    function k() {
        var e,
            t = n(),
            a = b(t);
        if (((i = arguments), (u = this), (h = t), a)) {
            if (void 0 === p) return ((y = e = h), (p = setTimeout(m, r)), d ? w(e) : l);
            if (v) return (clearTimeout(p), (p = setTimeout(m, r)), w(h));
        }
        return (void 0 === p && (p = setTimeout(m, r)), l);
    }
    return (
        (r = o(r) || 0),
        a(t) &&
            ((d = !!t.leading),
            (f = (v = "maxWait" in t) ? c(o(t.maxWait) || 0, r) : f),
            (g = "trailing" in t ? !!t.trailing : g)),
        (k.cancel = function () {
            (void 0 !== p && clearTimeout(p), (y = 0), (i = h = u = p = void 0));
        }),
        (k.flush = function () {
            return void 0 === p ? l : x(n());
        }),
        k
    );
};
