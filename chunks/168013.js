var i = r(476508),
    a = r(570596),
    o = r(611345),
    s = r(212854),
    l = r(987100),
    u = r(571240),
    c = r(474883),
    d = r(256110),
    f = r(86930),
    p = r(749915),
    h = Array;
e.exports = function (e) {
    var n,
        r,
        _,
        m,
        g,
        E,
        v = o(e),
        y = u(this),
        b = arguments.length,
        I = b > 1 ? arguments[1] : void 0,
        T = void 0 !== I;
    T && (I = i(I, b > 2 ? arguments[2] : void 0));
    var S = p(v),
        A = 0;
    if (S && !(this === h && l(S))) for (g = (m = f(v, S)).next, r = y ? new this() : []; !(_ = a(g, m)).done; A++) (E = T ? s(m, I, [_.value, A], !0) : _.value), d(r, A, E);
    else for (n = c(v), r = y ? new this(n) : h(n); n > A; A++) (E = T ? I(v[A], A) : v[A]), d(r, A, E);
    return (r.length = A), r;
};
