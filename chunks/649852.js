var n = r(980320),
    i = r(403819),
    s = r(867167),
    o = Math.max,
    a = Math.min;
e.exports = function (e, t, r) {
    var u,
        c,
        l,
        f,
        d,
        h,
        p = 0,
        m = !1,
        g = !1,
        v = !0;
    if ("function" != typeof e) throw TypeError("Expected a function");
    function y(t) {
        var r = u,
            n = c;
        return ((u = c = void 0), (p = t), (f = e.apply(n, r)));
    }
    function w(e) {
        var r = e - h,
            n = e - p;
        return void 0 === h || r >= t || r < 0 || (g && n >= l);
    }
    function _() {
        var e,
            r,
            n,
            s = i();
        if (w(s)) return b(s);
        d = setTimeout(_, ((e = s - h), (r = s - p), (n = t - e), g ? a(n, l - r) : n));
    }
    function b(e) {
        return ((d = void 0), v && u) ? y(e) : ((u = c = void 0), f);
    }
    function z() {
        var e,
            r = i(),
            n = w(r);
        if (((u = arguments), (c = this), (h = r), n)) {
            if (void 0 === d) return ((p = e = h), (d = setTimeout(_, t)), m ? y(e) : f);
            if (g) return (clearTimeout(d), (d = setTimeout(_, t)), y(h));
        }
        return (void 0 === d && (d = setTimeout(_, t)), f);
    }
    return (
        (t = s(t) || 0),
        n(r) &&
            ((m = !!r.leading),
            (l = (g = "maxWait" in r) ? o(s(r.maxWait) || 0, t) : l),
            (v = "trailing" in r ? !!r.trailing : v)),
        (z.cancel = function () {
            (void 0 !== d && clearTimeout(d), (p = 0), (u = h = c = d = void 0));
        }),
        (z.flush = function () {
            return void 0 === d ? f : b(i());
        }),
        z
    );
};
