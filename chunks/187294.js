var r = n(221015),
    i = n(446474),
    a = n(721339),
    s = n(250594),
    o = n(503199),
    l = n(327036),
    c = n(331336),
    u = n(151860),
    d = n(464046),
    f = n(739305).aTypedArrayConstructor,
    p = n(900923);
e.exports = function (e) {
    var t,
        n,
        _,
        h,
        m,
        g,
        E,
        b,
        y = a(this),
        O = s(e),
        A = arguments.length,
        v = A > 1 ? arguments[1] : void 0,
        S = void 0 !== v,
        I = c(O);
    if (I && !u(I)) for (b = (E = l(O, I)).next, O = []; !(g = i(b, E)).done; ) O.push(g.value);
    for (S && A > 2 && (v = r(v, arguments[2])), n = o(O), h = d((_ = new (f(y))(n))), t = 0; n > t; t++)
        (m = S ? v(O[t], t) : O[t]), (_[t] = h ? p(m) : +m);
    return _;
};
