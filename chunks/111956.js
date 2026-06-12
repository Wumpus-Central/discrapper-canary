var i = n(646344),
    r = n(714163),
    s = n(681447),
    a = Math.max,
    o = Math.min;
e.exports = function (e, t, n) {
    var l,
        u,
        c,
        d,
        _,
        h,
        f = 0,
        p = !1,
        E = !1,
        m = !0;
    if ("function" != typeof e) throw TypeError("Expected a function");
    function g(t) {
        var n = l,
            i = u;
        return (l = u = void 0), (f = t), (d = e.apply(i, n));
    }
    function A(e) {
        var n = e - h,
            i = e - f;
        return void 0 === h || n >= t || n < 0 || (E && i >= c);
    }
    function I() {
        var e,
            n,
            i,
            s = r();
        if (A(s)) return T(s);
        _ = setTimeout(I, ((e = s - h), (n = s - f), (i = t - e), E ? o(i, c - n) : i));
    }
    function T(e) {
        return ((_ = void 0), m && l) ? g(e) : ((l = u = void 0), d);
    }
    function S() {
        var e,
            n = r(),
            i = A(n);
        if (((l = arguments), (u = this), (h = n), i)) {
            if (void 0 === _) return (f = e = h), (_ = setTimeout(I, t)), p ? g(e) : d;
            if (E) return clearTimeout(_), (_ = setTimeout(I, t)), g(h);
        }
        return void 0 === _ && (_ = setTimeout(I, t)), d;
    }
    return (
        (t = s(t) || 0),
        i(n) &&
            ((p = !!n.leading),
            (c = (E = "maxWait" in n) ? a(s(n.maxWait) || 0, t) : c),
            (m = "trailing" in n ? !!n.trailing : m)),
        (S.cancel = function () {
            void 0 !== _ && clearTimeout(_), (f = 0), (l = h = u = _ = void 0);
        }),
        (S.flush = function () {
            return void 0 === _ ? d : T(r());
        }),
        S
    );
};
