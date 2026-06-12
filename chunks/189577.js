var i = n(687072),
    r = n(624443),
    s = n(214272),
    a = n(280885),
    o = n(31675),
    l = n(338036),
    u = n(429397),
    c = "[object Map]",
    d = "[object Promise]",
    _ = "[object Set]",
    h = "[object WeakMap]",
    f = "[object DataView]",
    p = u(i),
    E = u(r),
    m = u(s),
    g = u(a),
    A = u(o),
    I = l;
((i && I(new i(new ArrayBuffer(1))) != f) ||
    (r && I(new r()) != c) ||
    (s && I(s.resolve()) != d) ||
    (a && I(new a()) != _) ||
    (o && I(new o()) != h)) &&
    (I = function (e) {
        var t = l(e),
            n = "[object Object]" == t ? e.constructor : void 0,
            i = n ? u(n) : "";
        if (i)
            switch (i) {
                case p:
                    return f;
                case E:
                    return c;
                case m:
                    return d;
                case g:
                    return _;
                case A:
                    return h;
            }
        return t;
    }),
    (e.exports = I);
