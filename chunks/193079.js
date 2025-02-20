n.d(t, { Z: () => I });
var r = n(548015),
    i = n(74748),
    o = n(572657),
    a = n(318670),
    s = n(252798),
    l = n(396379),
    c = 1,
    u = 2,
    d = '[object Boolean]',
    f = '[object Date]',
    p = '[object Error]',
    _ = '[object Map]',
    h = '[object Number]',
    m = '[object RegExp]',
    g = '[object Set]',
    E = '[object String]',
    v = '[object Symbol]',
    b = '[object ArrayBuffer]',
    y = '[object DataView]',
    O = r.Z ? r.Z.prototype : void 0,
    S = O ? O.valueOf : void 0;
let I = function (e, t, n, r, O, I, T) {
    switch (n) {
        case y:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
            (e = e.buffer), (t = t.buffer);
        case b:
            if (e.byteLength != t.byteLength || !I(new i.Z(e), new i.Z(t))) break;
            return !0;
        case d:
        case f:
        case h:
            return (0, o.Z)(+e, +t);
        case p:
            return e.name == t.name && e.message == t.message;
        case m:
        case E:
            return e == t + '';
        case _:
            var N = s.Z;
        case g:
            var A = r & c;
            if ((N || (N = l.Z), e.size != t.size && !A)) break;
            var C = T.get(e);
            if (C) return C == t;
            (r |= u), T.set(e, t);
            var R = (0, a.Z)(N(e), N(t), r, O, I, T);
            return T.delete(e), R;
        case v:
            if (S) return S.call(e) == S.call(t);
    }
    return !1;
};
