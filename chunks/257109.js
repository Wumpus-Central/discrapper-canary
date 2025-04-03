r.d(t, { Z: () => w });
var n = r(467360),
    o = r(483266),
    a = r(862195),
    i = r(24002),
    l = r(178683),
    s = r(176338),
    u = r(526389),
    c = '[object Map]',
    p = '[object Promise]',
    f = '[object Set]',
    d = '[object WeakMap]',
    h = '[object DataView]',
    b = (0, u.Z)(n.Z),
    v = (0, u.Z)(o.Z),
    g = (0, u.Z)(a.Z),
    x = (0, u.Z)(i.Z),
    y = (0, u.Z)(l.Z),
    m = s.Z;
((n.Z && m(new n.Z(new ArrayBuffer(1))) != h) || (o.Z && m(new o.Z()) != c) || (a.Z && m(a.Z.resolve()) != p) || (i.Z && m(new i.Z()) != f) || (l.Z && m(new l.Z()) != d)) &&
    (m = function (e) {
        var t = (0, s.Z)(e),
            r = '[object Object]' == t ? e.constructor : void 0,
            n = r ? (0, u.Z)(r) : '';
        if (n)
            switch (n) {
                case b:
                    return h;
                case v:
                    return c;
                case g:
                    return p;
                case x:
                    return f;
                case y:
                    return d;
            }
        return t;
    });
let w = m;
