var i = n(566885),
    r = n(926515),
    a = n(339718),
    s = n(627060),
    o = n(908355),
    l = n(933676),
    u = n(49693),
    c = n(182867),
    d = n(981971),
    f = n(11697),
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
