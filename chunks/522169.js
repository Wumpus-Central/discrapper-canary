var r = n(48657),
    i = n(580983),
    a = n(385903),
    o = n(527160),
    s = n(914331),
    l = n(533610),
    c = n(800054),
    u = n(760725),
    d = n(15998),
    f = n(840475).aTypedArrayConstructor,
    p = n(190475);
e.exports = function (e) {
    var t,
        n,
        _,
        m,
        h,
        g,
        E,
        b,
        y = a(this),
        O = o(e),
        v = arguments.length,
        S = v > 1 ? arguments[1] : void 0,
        I = void 0 !== S,
        T = c(O);
    if (T && !u(T)) for (b = (E = l(O, T)).next, O = []; !(g = i(b, E)).done; ) O.push(g.value);
    for (I && v > 2 && (S = r(S, arguments[2])), n = s(O), m = d((_ = new (f(y))(n))), t = 0; n > t; t++)
        (h = I ? S(O[t], t) : O[t]), (_[t] = m ? p(h) : +h);
    return _;
};
