var r = n(135839),
    i = n(117973),
    a = n(780712),
    o = n(400353),
    s = n(653180),
    l = n(657398),
    c = n(19235),
    u = "[object Map]",
    d = "[object Object]",
    f = "[object Promise]",
    p = "[object Set]",
    _ = "[object WeakMap]",
    m = "[object DataView]",
    h = c(r),
    g = c(i),
    E = c(a),
    b = c(o),
    y = c(s),
    O = l;
((r && O(new r(new ArrayBuffer(1))) != m) ||
    (i && O(new i()) != u) ||
    (a && O(a.resolve()) != f) ||
    (o && O(new o()) != p) ||
    (s && O(new s()) != _)) &&
    (O = function (e) {
        var t = l(e),
            n = t == d ? e.constructor : void 0,
            r = n ? c(n) : "";
        if (r)
            switch (r) {
                case h:
                    return m;
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
