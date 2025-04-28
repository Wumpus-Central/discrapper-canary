var e = r(48657),
    o = r(580983),
    i = r(385903),
    u = r(527160),
    c = r(914331),
    a = r(533610),
    f = r(800054),
    s = r(760725),
    l = r(15998),
    p = r(840475).aTypedArrayConstructor,
    d = r(190475);
t.exports = function (t) {
    var n,
        r,
        _,
        h,
        y,
        b,
        g,
        v,
        w = i(this),
        m = u(t),
        x = arguments.length,
        A = x > 1 ? arguments[1] : void 0,
        O = void 0 !== A,
        T = f(m);
    if (T && !s(T)) for (v = (g = a(m, T)).next, m = []; !(b = o(v, g)).done; ) m.push(b.value);
    for (O && x > 2 && (A = e(A, arguments[2])), r = c(m), h = l((_ = new (p(w))(r))), n = 0; r > n; n++) (y = O ? A(m[n], n) : m[n]), (_[n] = h ? d(y) : +y);
    return _;
};
