var r = a(135839),
    n = a(117973),
    _ = a(780712),
    o = a(400353),
    i = a(653180),
    c = a(657398),
    s = a(19235),
    E = '[object Map]',
    l = '[object Promise]',
    u = '[object Set]',
    I = '[object WeakMap]',
    R = '[object DataView]',
    d = s(r),
    A = s(n),
    f = s(_),
    p = s(o),
    T = s(i),
    N = c;
((r && N(new r(new ArrayBuffer(1))) != R) || (n && N(new n()) != E) || (_ && N(_.resolve()) != l) || (o && N(new o()) != u) || (i && N(new i()) != I)) &&
    (N = function (t) {
        var e = c(t),
            a = '[object Object]' == e ? t.constructor : void 0,
            r = a ? s(a) : '';
        if (r)
            switch (r) {
                case d:
                    return R;
                case A:
                    return E;
                case f:
                    return l;
                case p:
                    return u;
                case T:
                    return I;
            }
        return e;
    }),
    (t.exports = N);
