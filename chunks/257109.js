n.d(t, { Z: () => O });
var r = n(467360),
    i = n(483266),
    o = n(862195),
    a = n(24002),
    s = n(178683),
    l = n(176338),
    c = n(526389),
    u = '[object Map]',
    d = '[object Object]',
    f = '[object Promise]',
    p = '[object Set]',
    _ = '[object WeakMap]',
    h = '[object DataView]',
    m = (0, c.Z)(r.Z),
    g = (0, c.Z)(i.Z),
    E = (0, c.Z)(o.Z),
    v = (0, c.Z)(a.Z),
    b = (0, c.Z)(s.Z),
    y = l.Z;
((r.Z && y(new r.Z(new ArrayBuffer(1))) != h) || (i.Z && y(new i.Z()) != u) || (o.Z && y(o.Z.resolve()) != f) || (a.Z && y(new a.Z()) != p) || (s.Z && y(new s.Z()) != _)) &&
    (y = function (e) {
        var t = (0, l.Z)(e),
            n = t == d ? e.constructor : void 0,
            r = n ? (0, c.Z)(n) : '';
        if (r)
            switch (r) {
                case m:
                    return h;
                case g:
                    return u;
                case E:
                    return f;
                case v:
                    return p;
                case b:
                    return _;
            }
        return t;
    });
let O = y;
