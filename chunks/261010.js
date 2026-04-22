var r = n(739595),
    i = n(585022),
    s = n(546809),
    a = n(34524),
    o = n(538826),
    l = n(514119),
    u = n(731214),
    d = "[object Map]",
    c = "[object Promise]",
    _ = "[object Set]",
    f = "[object WeakMap]",
    E = "[object DataView]",
    h = u(r),
    p = u(i),
    m = u(s),
    g = u(a),
    A = u(o),
    I = l;
((r && I(new r(new ArrayBuffer(1))) != E) ||
    (i && I(new i()) != d) ||
    (s && I(s.resolve()) != c) ||
    (a && I(new a()) != _) ||
    (o && I(new o()) != f)) &&
    (I = function (e) {
        var t = l(e),
            n = "[object Object]" == t ? e.constructor : void 0,
            r = n ? u(n) : "";
        if (r)
            switch (r) {
                case h:
                    return E;
                case p:
                    return d;
                case m:
                    return c;
                case g:
                    return _;
                case A:
                    return f;
            }
        return t;
    }),
    (e.exports = I);
