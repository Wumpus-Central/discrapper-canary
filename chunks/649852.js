var i = n(980320),
    r = n(403819),
    o = n(867167),
    s = Math.max,
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
    function _(t) {
        var n = u,
            i = c;
        return ((u = c = void 0), (h = t), (d = e.apply(i, n)));
    }
    function y(e) {
        var n = e - p,
            i = e - h;
        return void 0 === p || n >= t || n < 0 || (g && i >= l);
    }
    function w() {
        var e,
            n,
            i,
            o = r();
        if (y(o)) return z(o);
        f = setTimeout(w, ((e = o - p), (n = o - h), (i = t - e), g ? a(i, l - n) : i));
    }
    function z(e) {
        return ((f = void 0), v && u) ? _(e) : ((u = c = void 0), d);
    }
    function b() {
        var e,
            n = r(),
            i = y(n);
        if (((u = arguments), (c = this), (p = n), i)) {
            if (void 0 === f) return ((h = e = p), (f = setTimeout(w, t)), m ? _(e) : d);
            if (g) return (clearTimeout(f), (f = setTimeout(w, t)), _(p));
        }
        return (void 0 === f && (f = setTimeout(w, t)), d);
    }
    return (
        (t = o(t) || 0),
        i(n) &&
            ((m = !!n.leading),
            (l = (g = "maxWait" in n) ? s(o(n.maxWait) || 0, t) : l),
            (v = "trailing" in n ? !!n.trailing : v)),
        (b.cancel = function () {
            (void 0 !== f && clearTimeout(f), (h = 0), (u = p = c = f = void 0));
        }),
        (b.flush = function () {
            return void 0 === f ? d : z(r());
        }),
        b
    );
};
