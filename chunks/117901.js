var i = r(566885),
    a = r(926515),
    o = r(339718),
    s = r(627060),
    l = r(908355),
    u = r(933676),
    c = r(49693),
    d = r(182867),
    f = r(981971),
    p = r(11697),
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
