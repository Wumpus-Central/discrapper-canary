var n = e(241091),
    o = e(664886),
    s = e(155084),
    i = e(663172),
    u = e(577904),
    c = e(794779),
    a = e(715804),
    f = e(159384),
    p = e(379180),
    l = e(858534),
    v = TypeError,
    y = function (t, r) {
        (this.stopped = t), (this.result = r);
    },
    h = y.prototype;
t.exports = function (t, r, e) {
    var x,
        d,
        g,
        b,
        m,
        S,
        w,
        O = e && e.that,
        j = !!(e && e.AS_ENTRIES),
        A = !!(e && e.IS_RECORD),
        E = !!(e && e.IS_ITERATOR),
        T = !!(e && e.INTERRUPTED),
        P = n(r, O),
        k = function (t) {
            return x && l(x, "normal", t), new y(!0, t);
        },
        I = function (t) {
            return j ? (s(t), T ? P(t[0], t[1], k) : P(t[0], t[1])) : T ? P(t, k) : P(t);
        };
    if (A) x = t.iterator;
    else if (E) x = t;
    else {
        if (!(d = p(t))) throw new v(i(t) + " is not iterable");
        if (u(d)) {
            for (g = 0, b = c(t); b > g; g++) if ((m = I(t[g])) && a(h, m)) return m;
            return new y(!1);
        }
        x = f(t, d);
    }
    for (S = A ? t.next : x.next; !(w = o(S, x)).done; ) {
        try {
            m = I(w.value);
        } catch (t) {
            l(x, "throw", t);
        }
        if ("object" == typeof m && m && a(h, m)) return m;
    }
    return new y(!1);
};
