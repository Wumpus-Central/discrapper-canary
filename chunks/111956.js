var r = n(646344),
    i = n(714163),
    s = n(681447),
    a = "Expected a function",
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
        E = !1,
        g = !0;
    if ("function" != typeof e) throw TypeError(a);
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
        return E ? l(i, d - r) : i;
    }
    function S(e) {
        var n = e - p,
            r = e - h;
        return void 0 === p || n >= t || n < 0 || (E && r >= d);
    }
    function y() {
        var e = i();
        if (S(e)) return v(e);
        f = setTimeout(y, T(e));
    }
    function v(e) {
        return ((f = void 0), g && u) ? A(e) : ((u = c = void 0), _);
    }
    function N() {
        return void 0 === f ? _ : v(i());
    }
    function C() {
        var e = i(),
            n = S(e);
        if (((u = arguments), (c = this), (p = e), n)) {
            if (void 0 === f) return I(p);
            if (E) return clearTimeout(f), (f = setTimeout(y, t)), A(p);
        }
        return void 0 === f && (f = setTimeout(y, t)), _;
    }
    return (
        (t = s(t) || 0),
        r(n) &&
            ((m = !!n.leading),
            (d = (E = "maxWait" in n) ? o(s(n.maxWait) || 0, t) : d),
            (g = "trailing" in n ? !!n.trailing : g)),
        (C.cancel = function () {
            void 0 !== f && clearTimeout(f), (h = 0), (u = p = c = f = void 0);
        }),
        (C.flush = N),
        C
    );
};
