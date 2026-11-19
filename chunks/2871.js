var a = t(221015),
    n = t(446474),
    o = t(101968),
    c = t(406208),
    s = t(151860),
    i = t(503199),
    f = t(524152),
    u = t(327036),
    l = t(331336),
    p = t(350714),
    y = TypeError,
    h = function (e, r) {
        ((this.stopped = e), (this.result = r));
    },
    b = h.prototype;
e.exports = function (e, r, t) {
    var d,
        w,
        g,
        m,
        v,
        k,
        E,
        A = t && t.that,
        x = !!(t && t.AS_ENTRIES),
        O = !!(t && t.IS_RECORD),
        S = !!(t && t.IS_ITERATOR),
        D = !!(t && t.INTERRUPTED),
        M = a(r, A),
        R = function (e) {
            return (d && p(d, "normal", e), new h(!0, e));
        },
        C = function (e) {
            return x ? (o(e), D ? M(e[0], e[1], R) : M(e[0], e[1])) : D ? M(e, R) : M(e);
        };
    if (O) d = e.iterator;
    else if (S) d = e;
    else {
        if (!(w = l(e))) throw new y(c(e) + " is not iterable");
        if (s(w)) {
            for (g = 0, m = i(e); m > g; g++) if ((v = C(e[g])) && f(b, v)) return v;
            return new h(!1);
        }
        d = u(e, w);
    }
    for (k = O ? e.next : d.next; !(E = n(k, d)).done;) {
        try {
            v = C(E.value);
        } catch (e) {
            p(d, "throw", e);
        }
        if ("object" == typeof v && v && f(b, v)) return v;
    }
    return new h(!1);
};
