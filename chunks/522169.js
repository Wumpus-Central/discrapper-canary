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
    _ = n(190475);
e.exports = function (e) {
    var t,
        n,
        p,
        h,
        m,
        g,
        E,
        b,
        y = a(this),
        O = o(e),
        v = arguments.length,
        I = v > 1 ? arguments[1] : void 0,
        T = void 0 !== I,
        S = c(O);
    if (S && !u(S)) for (b = (E = l(O, S)).next, O = []; !(g = i(b, E)).done; ) O.push(g.value);
    for (T && v > 2 && (I = r(I, arguments[2])), n = s(O), h = d((p = new (f(y))(n))), t = 0; n > t; t++) ((m = T ? I(O[t], t) : O[t]), (p[t] = h ? _(m) : +m));
    return p;
};
