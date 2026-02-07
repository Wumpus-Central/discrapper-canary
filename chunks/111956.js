var r = n(646344),
    i = n(714163),
    a = n(681447),
    s = "Expected a function",
    o = Math.max,
    l = Math.min;
e.exports = function (e, t, n) {
    var u,
        c,
        d,
        _,
        f,
        p,
        h = 0,
        m = !1,
        g = !1,
        E = !0;
    if ("function" != typeof e) throw TypeError(s);
    function A(t) {
        var n = u,
            r = c;
        return (u = c = void 0), (h = t), (_ = e.apply(r, n));
    }
    function I(e) {
        return (h = e), (f = setTimeout(y, t)), m ? A(e) : _;
    }
    function T(e) {
        var n = e - p,
            r = e - h,
            i = t - n;
        return g ? l(i, d - r) : i;
    }
    function S(e) {
        var n = e - p,
            r = e - h;
        return void 0 === p || n >= t || n < 0 || (g && r >= d);
    }
    function y() {
        var e = i();
        if (S(e)) return v(e);
        f = setTimeout(y, T(e));
    }
    function v(e) {
        return ((f = void 0), E && u) ? A(e) : ((u = c = void 0), _);
    }
    function C() {
        return void 0 === f ? _ : v(i());
    }
    function N() {
        var e = i(),
            n = S(e);
        if (((u = arguments), (c = this), (p = e), n)) {
            if (void 0 === f) return I(p);
            if (g) return clearTimeout(f), (f = setTimeout(y, t)), A(p);
        }
        return void 0 === f && (f = setTimeout(y, t)), _;
    }
    return (
        (t = a(t) || 0),
        r(n) &&
            ((m = !!n.leading),
            (d = (g = "maxWait" in n) ? o(a(n.maxWait) || 0, t) : d),
            (E = "trailing" in n ? !!n.trailing : E)),
        (N.cancel = function () {
            void 0 !== f && clearTimeout(f), (h = 0), (u = p = c = f = void 0);
        }),
        (N.flush = C),
        N
    );
};
