var r = n(566885),
    i = n(926515),
    o = n(339718),
    a = n(627060),
    s = n(908355),
    l = n(933676),
    c = n(49693),
    u = n(182867),
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
        E = o(e),
        b = l(this),
        y = arguments.length,
        v = y > 1 ? arguments[1] : void 0,
        O = void 0 !== v;
    O && (v = r(v, y > 2 ? arguments[2] : void 0));
    var I = f(E),
        S = 0;
    if (I && !(this === _ && s(I))) for (m = (h = d(E, I)).next, n = b ? new this() : []; !(p = i(m, h)).done; S++) (g = O ? a(h, v, [p.value, S], !0) : p.value), u(n, S, g);
    else for (t = c(E), n = b ? new this(t) : _(t); t > S; S++) (g = O ? v(E[S], S) : E[S]), u(n, S, g);
    return (n.length = S), n;
};
