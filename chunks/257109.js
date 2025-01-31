n.d(t, { Z: () => b });
var i = n(467360),
    r = n(483266),
    a = n(862195),
    s = n(24002),
    o = n(178683),
    l = n(176338),
    u = n(526389),
    c = '[object Map]',
    d = '[object Object]',
    f = '[object Promise]',
    _ = '[object Set]',
    p = '[object WeakMap]',
    h = '[object DataView]',
    m = (0, u.Z)(i.Z),
    g = (0, u.Z)(r.Z),
    E = (0, u.Z)(a.Z),
    v = (0, u.Z)(s.Z),
    y = (0, u.Z)(o.Z),
    I = l.Z;
((i.Z && I(new i.Z(new ArrayBuffer(1))) != h) || (r.Z && I(new r.Z()) != c) || (a.Z && I(a.Z.resolve()) != f) || (s.Z && I(new s.Z()) != _) || (o.Z && I(new o.Z()) != p)) &&
    (I = function (e) {
        var t = (0, l.Z)(e),
            n = t == d ? e.constructor : void 0,
            i = n ? (0, u.Z)(n) : '';
        if (i)
            switch (i) {
                case m:
                    return h;
                case g:
                    return c;
                case E:
                    return f;
                case v:
                    return _;
                case y:
                    return p;
            }
        return t;
    });
let b = I;
