var r = n(466293),
    i = n(139069),
    o = n(703284),
    a = n(501979),
    s = n(98368),
    l = n(433005),
    c = 1,
    u = 2,
    d = '[object Boolean]',
    f = '[object Date]',
    _ = '[object Error]',
    p = '[object Map]',
    h = '[object Number]',
    m = '[object RegExp]',
    g = '[object Set]',
    E = '[object String]',
    b = '[object Symbol]',
    y = '[object ArrayBuffer]',
    O = '[object DataView]',
    v = r ? r.prototype : void 0,
    I = v ? v.valueOf : void 0;
e.exports = function (e, t, n, r, v, S, T) {
    switch (n) {
        case O:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
            (e = e.buffer), (t = t.buffer);
        case y:
            if (e.byteLength != t.byteLength || !S(new i(e), new i(t))) break;
            return !0;
        case d:
        case f:
        case h:
            return o(+e, +t);
        case _:
            return e.name == t.name && e.message == t.message;
        case m:
        case E:
            return e == t + '';
        case p:
            var A = s;
        case g:
            var N = r & c;
            if ((A || (A = l), e.size != t.size && !N)) break;
            var C = T.get(e);
            if (C) return C == t;
            (r |= u), T.set(e, t);
            var P = a(A(e), A(t), r, v, S, T);
            return T.delete(e), P;
        case b:
            if (I) return I.call(e) == I.call(t);
    }
    return !1;
};
