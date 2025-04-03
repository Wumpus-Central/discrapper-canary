var e = n(476508),
    o = n(570596),
    i = n(28886),
    u = n(858698),
    s = n(987100),
    c = n(474883),
    f = n(875604),
    a = n(86930),
    p = n(749915),
    v = n(736849),
    l = TypeError,
    y = function (t, r) {
        (this.stopped = t), (this.result = r);
    },
    h = y.prototype;
t.exports = function (t, r, n) {
    var x,
        d,
        g,
        b,
        m,
        S,
        w,
        O = n && n.that,
        j = !!(n && n.AS_ENTRIES),
        A = !!(n && n.IS_RECORD),
        E = !!(n && n.IS_ITERATOR),
        P = !!(n && n.INTERRUPTED),
        T = e(r, O),
        k = function (t) {
            return x && v(x, 'normal', t), new y(!0, t);
        },
        F = function (t) {
            return j ? (i(t), P ? T(t[0], t[1], k) : T(t[0], t[1])) : P ? T(t, k) : T(t);
        };
    if (A) x = t.iterator;
    else if (E) x = t;
    else {
        if (!(d = p(t))) throw new l(u(t) + ' is not iterable');
        if (s(d)) {
            for (g = 0, b = c(t); b > g; g++) if ((m = F(t[g])) && f(h, m)) return m;
            return new y(!1);
        }
        x = a(t, d);
    }
    for (S = A ? t.next : x.next; !(w = o(S, x)).done; ) {
        try {
            m = F(w.value);
        } catch (t) {
            v(x, 'throw', t);
        }
        if ('object' == typeof m && m && f(h, m)) return m;
    }
    return new y(!1);
};
