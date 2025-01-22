var i = r(762378),
    a = r(481062),
    o = r(34775),
    s = r(79568),
    l = r(221286),
    u = r(903425),
    c = r(785775),
    d = '[object Map]',
    f = '[object Object]',
    p = '[object Promise]',
    h = '[object Set]',
    _ = '[object WeakMap]',
    m = '[object DataView]',
    g = c(i),
    E = c(a),
    v = c(o),
    y = c(s),
    b = c(l),
    I = u;
((i && I(new i(new ArrayBuffer(1))) != m) || (a && I(new a()) != d) || (o && I(o.resolve()) != p) || (s && I(new s()) != h) || (l && I(new l()) != _)) &&
    (I = function (e) {
        var n = u(e),
            r = n == f ? e.constructor : void 0,
            i = r ? c(r) : '';
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
    (e.exports = I);
