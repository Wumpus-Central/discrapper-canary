var i = n(762378),
    r = n(481062),
    a = n(34775),
    s = n(79568),
    o = n(221286),
    l = n(903425),
    u = n(785775),
    c = '[object Map]',
    d = '[object Object]',
    f = '[object Promise]',
    _ = '[object Set]',
    p = '[object WeakMap]',
    h = '[object DataView]',
    m = u(i),
    g = u(r),
    E = u(a),
    v = u(s),
    y = u(o),
    I = l;
((i && I(new i(new ArrayBuffer(1))) != h) || (r && I(new r()) != c) || (a && I(a.resolve()) != f) || (s && I(new s()) != _) || (o && I(new o()) != p)) &&
    (I = function (e) {
        var t = l(e),
            n = t == d ? e.constructor : void 0,
            i = n ? u(n) : '';
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
    }),
    (e.exports = I);
