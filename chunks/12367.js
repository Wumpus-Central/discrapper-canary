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
    p = n(165915);
e.exports = function (e) {
    var t,
        n,
        _,
        h,
        m,
        g,
        E,
        v,
        b = o(this),
        y = a(e),
        O = arguments.length,
        S = O > 1 ? arguments[1] : void 0,
        I = void 0 !== S,
        T = c(y);
    if (T && !u(T)) for (v = (E = l(y, T)).next, y = []; !(g = i(v, E)).done; ) y.push(g.value);
    for (I && O > 2 && (S = r(S, arguments[2])), n = s(y), h = d((_ = new (f(b))(n))), t = 0; n > t; t++) (m = I ? S(y[t], t) : y[t]), (_[t] = h ? p(m) : +m);
    return _;
};
