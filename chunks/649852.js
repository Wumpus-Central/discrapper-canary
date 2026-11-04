var r = n(980320),
    i = n(403819),
    s = n(867167),
    o = Math.max,
    a = Math.min;
e.exports = function (e, t, n) {
    var u,
        c,
        l,
        d,
        f,
        p,
        h = 0,
        m = !1,
        g = !1,
        v = !0;
    if ("function" != typeof e) throw TypeError("Expected a function");
    function y(t) {
        var n = u,
            r = c;
        return ((u = c = void 0), (h = t), (d = e.apply(r, n)));
    }
    function _(e) {
        var n = e - p,
            r = e - h;
        return void 0 === p || n >= t || n < 0 || (g && r >= l);
    }
    function w() {
        var e,
            n,
            r,
            s = i();
        if (_(s)) return z(s);
        f = setTimeout(w, ((e = s - p), (n = s - h), (r = t - e), g ? a(r, l - n) : r));
    }
    function z(e) {
        return ((f = void 0), v && u) ? y(e) : ((u = c = void 0), d);
    }
    function b() {
        var e,
            n = i(),
            r = _(n);
        if (((u = arguments), (c = this), (p = n), r)) {
            if (void 0 === f) return ((h = e = p), (f = setTimeout(w, t)), m ? y(e) : d);
            if (g) return (clearTimeout(f), (f = setTimeout(w, t)), y(p));
        }
        return (void 0 === f && (f = setTimeout(w, t)), d);
    }
    return (
        (t = s(t) || 0),
        r(n) &&
            ((m = !!n.leading),
            (l = (g = "maxWait" in n) ? o(s(n.maxWait) || 0, t) : l),
            (v = "trailing" in n ? !!n.trailing : v)),
        (b.cancel = function () {
            (void 0 !== f && clearTimeout(f), (h = 0), (u = p = c = f = void 0));
        }),
        (b.flush = function () {
            return void 0 === f ? d : z(i());
        }),
        b
    );
};
