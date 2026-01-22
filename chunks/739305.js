var r,
    i,
    a,
    s = n(593858),
    o = n(257943),
    l = n(860511),
    c = n(339626),
    u = n(598349),
    d = n(210140),
    f = n(324988),
    p = n(406208),
    _ = n(706938),
    h = n(693655),
    m = n(485155),
    g = n(524152),
    E = n(42756),
    b = n(458680),
    y = n(380744),
    O = n(753891),
    A = n(883972),
    v = A.enforce,
    S = A.get,
    I = l.Int8Array,
    T = I && I.prototype,
    C = l.Uint8ClampedArray,
    N = C && C.prototype,
    R = I && E(I),
    w = T && E(T),
    P = Object.prototype,
    D = l.TypeError,
    x = y("toStringTag"),
    L = O("TYPED_ARRAY_TAG"),
    j = "TypedArrayConstructor",
    M = s && !!b && "Opera" !== f(l.opera),
    k = !1,
    U = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8,
    },
    G = {
        BigInt64Array: 8,
        BigUint64Array: 8,
    },
    V = function (e) {
        if (!u(e)) return !1;
        var t = f(e);
        return "DataView" === t || d(U, t) || d(G, t);
    },
    F = function (e) {
        var t = E(e);
        if (u(t)) {
            var n = S(t);
            return n && d(n, j) ? n[j] : F(t);
        }
    },
    B = function (e) {
        if (!u(e)) return !1;
        var t = f(e);
        return d(U, t) || d(G, t);
    },
    H = function (e) {
        if (B(e)) return e;
        throw new D("Target is not a typed array");
    },
    Y = function (e) {
        if (c(e) && (!b || g(R, e))) return e;
        throw new D(p(e) + " is not a typed array constructor");
    },
    W = function (e, t, n, r) {
        if (o) {
            if (n)
                for (var i in U) {
                    var a = l[i];
                    if (a && d(a.prototype, e))
                        try {
                            delete a.prototype[e];
                        } catch (n) {
                            try {
                                a.prototype[e] = t;
                            } catch (e) {}
                        }
                }
            (!w[e] || n) && h(w, e, n ? t : (M && T[e]) || t, r);
        }
    },
    K = function (e, t, n) {
        var r, i;
        if (o) {
            if (b) {
                if (n) {
                    for (r in U)
                        if ((i = l[r]) && d(i, e))
                            try {
                                delete i[e];
                            } catch (e) {}
                }
                if (R[e] && !n) return;
                try {
                    return h(R, e, n ? t : (M && R[e]) || t);
                } catch (e) {}
            }
            for (r in U) (i = l[r]) && (!i[e] || n) && h(i, e, t);
        }
    };
for (r in U) (a = (i = l[r]) && i.prototype) ? (v(a)[j] = i) : (M = !1);
for (r in G) (a = (i = l[r]) && i.prototype) && (v(a)[j] = i);
if (
    (!M || !c(R) || R === Function.prototype) &&
    ((R = function () {
        throw new D("Incorrect invocation");
    }),
    M)
)
    for (r in U) l[r] && b(l[r], R);
if ((!M || !w || w === P) && ((w = R.prototype), M)) for (r in U) l[r] && b(l[r].prototype, w);
if ((M && E(N) !== w && b(N, w), o && !d(w, x)))
    for (r in ((k = !0),
    m(w, x, {
        configurable: !0,
        get: function () {
            return u(this) ? this[L] : void 0;
        },
    }),
    U))
        l[r] && _(l[r], L, r);
e.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: M,
    TYPED_ARRAY_TAG: k && L,
    aTypedArray: H,
    aTypedArrayConstructor: Y,
    exportTypedArrayMethod: W,
    exportTypedArrayStaticMethod: K,
    getTypedArrayConstructor: F,
    isView: V,
    isTypedArray: B,
    TypedArray: R,
    TypedArrayPrototype: w,
};
