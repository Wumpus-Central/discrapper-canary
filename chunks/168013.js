var i = n(476508),
    r = n(570596),
    a = n(611345),
    s = n(212854),
    o = n(987100),
    l = n(571240),
    u = n(474883),
    c = n(256110),
    d = n(86930),
    f = n(749915),
    _ = Array;
e.exports = function (e) {
    var t,
        n,
        p,
        h,
        m,
        g,
        E = a(e),
        v = l(this),
        y = arguments.length,
        I = y > 1 ? arguments[1] : void 0,
        b = void 0 !== I;
    b && (I = i(I, y > 2 ? arguments[2] : void 0));
    var T = f(E),
        S = 0;
    if (T && !(this === _ && o(T))) for (m = (h = d(E, T)).next, n = v ? new this() : []; !(p = r(m, h)).done; S++) (g = b ? s(h, I, [p.value, S], !0) : p.value), c(n, S, g);
    else for (t = u(E), n = v ? new this(t) : _(t); t > S; S++) (g = b ? I(E[S], S) : E[S]), c(n, S, g);
    return (n.length = S), n;
};
