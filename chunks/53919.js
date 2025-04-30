var r = n(762378),
    i = n(481062),
    a = n(34775),
    o = n(79568),
    s = n(221286),
    l = n(903425),
    c = n(785775),
    u = '[object Map]',
    d = '[object Object]',
    f = '[object Promise]',
    _ = '[object Set]',
    p = '[object WeakMap]',
    h = '[object DataView]',
    m = c(r),
    g = c(i),
    E = c(a),
    b = c(o),
    y = c(s),
    O = l;
((r && O(new r(new ArrayBuffer(1))) != h) || (i && O(new i()) != u) || (a && O(a.resolve()) != f) || (o && O(new o()) != _) || (s && O(new s()) != p)) &&
    (O = function (e) {
        var t = l(e),
            n = t == d ? e.constructor : void 0,
            r = n ? c(n) : '';
        if (r)
            switch (r) {
                case m:
                    return h;
                case g:
                    return u;
                case E:
                    return f;
                case b:
                    return _;
                case y:
                    return p;
            }
        return t;
    }),
    (e.exports = O);
