var r = n(980320),
    i = n(403819),
    s = n(867167),
    o = Math.max,
    a = Math.min;
e.exports = function (e, t, n) {
    var u,
        l,
        c,
        f,
        d,
        h,
        p = 0,
        m = !1,
        g = !1,
        v = !0;
    if ("function" != typeof e) throw TypeError("Expected a function");
    function y(t) {
        var n = u,
            r = l;
        return ((u = l = void 0), (p = t), (f = e.apply(r, n)));
    }
    function _(e) {
        var n = e - h,
            r = e - p;
        return void 0 === h || n >= t || n < 0 || (g && r >= c);
    }
    function w() {
        var e,
            n,
            r,
            s = i();
        if (_(s)) return b(s);
        d = setTimeout(w, ((e = s - h), (n = s - p), (r = t - e), g ? a(r, c - n) : r));
    }
    function b(e) {
        return ((d = void 0), v && u) ? y(e) : ((u = l = void 0), f);
    }
    function z() {
        var e,
            n = i(),
            r = _(n);
        if (((u = arguments), (l = this), (h = n), r)) {
            if (void 0 === d) return ((p = e = h), (d = setTimeout(w, t)), m ? y(e) : f);
            if (g) return (clearTimeout(d), (d = setTimeout(w, t)), y(h));
        }
        return (void 0 === d && (d = setTimeout(w, t)), f);
    }
    return (
        (t = s(t) || 0),
        r(n) &&
            ((m = !!n.leading),
            (c = (g = "maxWait" in n) ? o(s(n.maxWait) || 0, t) : c),
            (v = "trailing" in n ? !!n.trailing : v)),
        (z.cancel = function () {
            (void 0 !== d && clearTimeout(d), (p = 0), (u = h = l = d = void 0));
        }),
        (z.flush = function () {
            return void 0 === d ? f : b(i());
        }),
        z
    );
};
