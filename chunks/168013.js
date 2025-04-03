var e = n(476508),
    o = n(570596),
    i = n(611345),
    u = n(212854),
    s = n(987100),
    c = n(571240),
    f = n(474883),
    a = n(256110),
    p = n(86930),
    v = n(749915),
    l = Array;
t.exports = function (t) {
    var r,
        n,
        y,
        h,
        x,
        d,
        g = i(t),
        b = c(this),
        m = arguments.length,
        S = m > 1 ? arguments[1] : void 0,
        w = void 0 !== S;
    w && (S = e(S, m > 2 ? arguments[2] : void 0));
    var O = v(g),
        j = 0;
    if (O && !(this === l && s(O))) for (x = (h = p(g, O)).next, n = b ? new this() : []; !(y = o(x, h)).done; j++) (d = w ? u(h, S, [y.value, j], !0) : y.value), a(n, j, d);
    else for (r = f(g), n = b ? new this(r) : l(r); r > j; j++) (d = w ? S(g[j], j) : g[j]), a(n, j, d);
    return (n.length = j), n;
};
