var n = e(241091),
    o = e(664886),
    s = e(529030),
    i = e(163446),
    u = e(577904),
    c = e(712192),
    a = e(794779),
    f = e(287731),
    p = e(159384),
    l = e(379180),
    v = Array;
t.exports = function (t) {
    var r,
        e,
        y,
        h,
        x,
        d,
        g = s(t),
        b = c(this),
        m = arguments.length,
        S = m > 1 ? arguments[1] : void 0,
        w = void 0 !== S;
    w && (S = n(S, m > 2 ? arguments[2] : void 0));
    var O = l(g),
        j = 0;
    if (O && !(this === v && u(O)))
        for (e = b ? new this() : [], x = (h = p(g, O)).next; !(y = o(x, h)).done; j++)
            (d = w ? i(h, S, [y.value, j], !0) : y.value), f(e, j, d);
    else for (r = a(g), e = b ? new this(r) : v(r); r > j; j++) (d = w ? S(g[j], j) : g[j]), f(e, j, d);
    return (e.length = j), e;
};
