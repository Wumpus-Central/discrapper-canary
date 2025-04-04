var r = n(48657),
    i = n(580983),
    o = n(385903),
    a = n(527160),
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
        y = o(this),
        v = a(e),
        O = arguments.length,
        I = O > 1 ? arguments[1] : void 0,
        S = void 0 !== I,
        T = c(v);
    if (T && !u(T)) for (b = (E = l(v, T)).next, v = []; !(g = i(b, E)).done; ) v.push(g.value);
    for (S && O > 2 && (I = r(I, arguments[2])), n = s(v), h = d((p = new (f(y))(n))), t = 0; n > t; t++) (m = S ? I(v[t], t) : v[t]), (p[t] = h ? _(m) : +m);
    return p;
};
