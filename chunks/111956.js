var n = r(646344),
    i = r(714163),
    o = r(681447),
    a = Math.max,
    l = Math.min;
e.exports = function (e, t, r) {
    var s,
        u,
        c,
        f,
        p,
        d,
        v = 0,
        m = !1,
        b = !1,
        g = !0;
    if ("function" != typeof e) throw TypeError("Expected a function");
    function h(t) {
        var r = s,
            n = u;
        return (s = u = void 0), (v = t), (f = e.apply(n, r));
    }
    function y(e) {
        var r = e - d,
            n = e - v;
        return void 0 === d || r >= t || r < 0 || (b && n >= c);
    }
    function S() {
        var e,
            r,
            n,
            o = i();
        if (y(o)) return x(o);
        p = setTimeout(S, ((e = o - d), (r = o - v), (n = t - e), b ? l(n, c - r) : n));
    }
    function x(e) {
        return ((p = void 0), g && s) ? h(e) : ((s = u = void 0), f);
    }
    function E() {
        var e,
            r = i(),
            n = y(r);
        if (((s = arguments), (u = this), (d = r), n)) {
            if (void 0 === p) return (v = e = d), (p = setTimeout(S, t)), m ? h(e) : f;
            if (b) return clearTimeout(p), (p = setTimeout(S, t)), h(d);
        }
        return void 0 === p && (p = setTimeout(S, t)), f;
    }
    return (
        (t = o(t) || 0),
        n(r) &&
            ((m = !!r.leading),
            (c = (b = "maxWait" in r) ? a(o(r.maxWait) || 0, t) : c),
            (g = "trailing" in r ? !!r.trailing : g)),
        (E.cancel = function () {
            void 0 !== p && clearTimeout(p), (v = 0), (s = d = u = p = void 0);
        }),
        (E.flush = function () {
            return void 0 === p ? f : x(i());
        }),
        E
    );
};
