var i = n(566885),
    r = n(926515),
    a = n(772425),
    s = n(339718),
    o = n(49693),
    l = n(981971),
    u = n(11697),
    c = n(908355),
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
        v,
        y = a(this),
        I = s(e),
        T = arguments.length,
        b = T > 1 ? arguments[1] : void 0,
        S = void 0 !== b,
        A = u(I);
    if (A && !c(A)) for (v = (E = l(I, A)).next, I = []; !(g = r(v, E)).done; ) I.push(g.value);
    for (S && T > 2 && (b = i(b, arguments[2])), n = o(I), h = d((p = new (f(y))(n))), t = 0; n > t; t++) (m = S ? b(I[t], t) : I[t]), (p[t] = h ? _(m) : +m);
    return p;
};
