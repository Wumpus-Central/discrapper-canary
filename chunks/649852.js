var i = t(980320),
    e = t(403819),
    o = t(867167),
    u = Math.max,
    a = Math.min;
r.exports = function (r, n, t) {
    var c,
        f,
        v,
        p,
        d,
        s,
        l = 0,
        x = !1,
        h = !1,
        g = !0;
    if ("function" != typeof r) throw TypeError("Expected a function");
    function m(n) {
        var t = c,
            i = f;
        return (c = f = void 0), (l = n), (p = r.apply(i, t));
    }
    function T(r) {
        var t = r - s,
            i = r - l;
        return void 0 === s || t >= n || t < 0 || (h && i >= v);
    }
    function y() {
        var r,
            t,
            i,
            o = e();
        if (T(o)) return k(o);
        d = setTimeout(y, ((r = o - s), (t = o - l), (i = n - r), h ? a(i, v - t) : i));
    }
    function k(r) {
        return ((d = void 0), g && c) ? m(r) : ((c = f = void 0), p);
    }
    function w() {
        var r,
            t = e(),
            i = T(t);
        if (((c = arguments), (f = this), (s = t), i)) {
            if (void 0 === d) return (l = r = s), (d = setTimeout(y, n)), x ? m(r) : p;
            if (h) return clearTimeout(d), (d = setTimeout(y, n)), m(s);
        }
        return void 0 === d && (d = setTimeout(y, n)), p;
    }
    return (
        (n = o(n) || 0),
        i(t) &&
            ((x = !!t.leading),
            (v = (h = "maxWait" in t) ? u(o(t.maxWait) || 0, n) : v),
            (g = "trailing" in t ? !!t.trailing : g)),
        (w.cancel = function () {
            void 0 !== d && clearTimeout(d), (l = 0), (c = s = f = d = void 0);
        }),
        (w.flush = function () {
            return void 0 === d ? p : k(e());
        }),
        w
    );
};
