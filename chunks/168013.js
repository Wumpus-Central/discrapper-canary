var r = n(476508),
    i = n(570596),
    o = n(611345),
    a = n(212854),
    s = n(987100),
    l = n(571240),
    c = n(474883),
    u = n(256110),
    d = n(86930),
    f = n(749915),
    p = Array;
e.exports = function (e) {
    var t,
        n,
        _,
        h,
        m,
        g,
        E = o(e),
        v = l(this),
        b = arguments.length,
        y = b > 1 ? arguments[1] : void 0,
        O = void 0 !== y;
    O && (y = r(y, b > 2 ? arguments[2] : void 0));
    var S = f(E),
        I = 0;
    if (S && !(this === p && s(S))) for (m = (h = d(E, S)).next, n = v ? new this() : []; !(_ = i(m, h)).done; I++) (g = O ? a(h, y, [_.value, I], !0) : _.value), u(n, I, g);
    else for (t = c(E), n = v ? new this(t) : p(t); t > I; I++) (g = O ? y(E[I], I) : E[I]), u(n, I, g);
    return (n.length = I), n;
};
