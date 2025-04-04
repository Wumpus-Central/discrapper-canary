var r = n(566885),
    i = n(926515),
    o = n(772425),
    a = n(339718),
    s = n(49693),
    l = n(981971),
    c = n(11697),
    u = n(908355),
    d = n(536524),
    f = n(192291).aTypedArrayConstructor,
    _ = n(165915);
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
