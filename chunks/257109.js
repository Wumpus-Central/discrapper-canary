var i = r(467360),
    a = r(483266),
    o = r(862195),
    s = r(24002),
    l = r(178683),
    u = r(176338),
    c = r(526389),
    d = '[object Map]',
    f = '[object Object]',
    p = '[object Promise]',
    h = '[object Set]',
    _ = '[object WeakMap]',
    m = '[object DataView]',
    g = (0, c.Z)(i.Z),
    E = (0, c.Z)(a.Z),
    v = (0, c.Z)(o.Z),
    y = (0, c.Z)(s.Z),
    b = (0, c.Z)(l.Z),
    I = u.Z;
((i.Z && I(new i.Z(new ArrayBuffer(1))) != m) || (a.Z && I(new a.Z()) != d) || (o.Z && I(o.Z.resolve()) != p) || (s.Z && I(new s.Z()) != h) || (l.Z && I(new l.Z()) != _)) &&
    (I = function (e) {
        var n = (0, u.Z)(e),
            r = n == f ? e.constructor : void 0,
            i = r ? (0, c.Z)(r) : '';
        if (i)
            switch (i) {
                case g:
                    return m;
                case E:
                    return d;
                case v:
                    return p;
                case y:
                    return h;
                case b:
                    return _;
            }
        return n;
    }),
    (n.Z = I);
