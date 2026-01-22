var r = n(646344),
    i = n(714163),
    a = n(681447),
    s = "Expected a function",
    o = Math.max,
    l = Math.min;
e.exports = function (e, t, n) {
    var c,
        u,
        d,
        f,
        p,
        _,
        h = 0,
        m = !1,
        g = !1,
        E = !0;
    if ("function" != typeof e) throw TypeError(s);
    function b(t) {
        var n = c,
            r = u;
        return (c = u = void 0), (h = t), (f = e.apply(r, n));
    }
    function y(e) {
        return (h = e), (p = setTimeout(v, t)), m ? b(e) : f;
    }
    function O(e) {
        var n = e - _,
            r = e - h,
            i = t - n;
        return g ? l(i, d - r) : i;
    }
    function A(e) {
        var n = e - _,
            r = e - h;
        return void 0 === _ || n >= t || n < 0 || (g && r >= d);
    }
    function v() {
        var e = i();
        if (A(e)) return S(e);
        p = setTimeout(v, O(e));
    }
    function S(e) {
        return ((p = void 0), E && c) ? b(e) : ((c = u = void 0), f);
    }
    function I() {
        return void 0 === p ? f : S(i());
    }
    function T() {
        var e = i(),
            n = A(e);
        if (((c = arguments), (u = this), (_ = e), n)) {
            if (void 0 === p) return y(_);
            if (g) return clearTimeout(p), (p = setTimeout(v, t)), b(_);
        }
        return void 0 === p && (p = setTimeout(v, t)), f;
    }
    return (
        (t = a(t) || 0),
        r(n) &&
            ((m = !!n.leading),
            (d = (g = "maxWait" in n) ? o(a(n.maxWait) || 0, t) : d),
            (E = "trailing" in n ? !!n.trailing : E)),
        (T.cancel = function () {
            void 0 !== p && clearTimeout(p), (h = 0), (c = _ = u = p = void 0);
        }),
        (T.flush = I),
        T
    );
};
