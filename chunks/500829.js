var r = n(221015),
    i = n(446474),
    a = n(250594),
    s = n(254818),
    o = n(151860),
    l = n(43452),
    c = n(503199),
    u = n(41575),
    d = n(327036),
    f = n(331336),
    p = Array;
e.exports = function (e) {
    var t,
        n,
        _,
        h,
        m,
        g,
        E = a(e),
        b = l(this),
        y = arguments.length,
        O = y > 1 ? arguments[1] : void 0,
        A = void 0 !== O;
    A && (O = r(O, y > 2 ? arguments[2] : void 0));
    var v = f(E),
        S = 0;
    if (v && !(this === p && o(v)))
        for (n = b ? new this() : [], m = (h = d(E, v)).next; !(_ = i(m, h)).done; S++)
            (g = A ? s(h, O, [_.value, S], !0) : _.value), u(n, S, g);
    else for (t = c(E), n = b ? new this(t) : p(t); t > S; S++) (g = A ? O(E[S], S) : E[S]), u(n, S, g);
    return (n.length = S), n;
};
