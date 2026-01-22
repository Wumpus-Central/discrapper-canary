var r = n(687072),
    i = n(624443),
    a = n(214272),
    s = n(280885),
    o = n(31675),
    l = n(338036),
    c = n(429397),
    u = "[object Map]",
    d = "[object Object]",
    f = "[object Promise]",
    p = "[object Set]",
    _ = "[object WeakMap]",
    h = "[object DataView]",
    m = c(r),
    g = c(i),
    E = c(a),
    b = c(s),
    y = c(o),
    O = l;
((r && O(new r(new ArrayBuffer(1))) != h) ||
    (i && O(new i()) != u) ||
    (a && O(a.resolve()) != f) ||
    (s && O(new s()) != p) ||
    (o && O(new o()) != _)) &&
    (O = function (e) {
        var t = l(e),
            n = t == d ? e.constructor : void 0,
            r = n ? c(n) : "";
        if (r)
            switch (r) {
                case m:
                    return h;
                case g:
                    return u;
                case E:
                    return f;
                case b:
                    return p;
                case y:
                    return _;
            }
        return t;
    }),
    (e.exports = O);
