var i,
    r,
    a,
    s = n(212036),
    o = n(325008),
    l = n(161581),
    u = n(354848),
    c = n(622281),
    d = n(740362),
    f = n(974971),
    _ = n(938507),
    p = n(251069),
    h = n(859209),
    m = n(4340),
    g = n(838957),
    E = n(144748),
    v = n(276321),
    y = n(641236),
    I = n(457507),
    T = n(644659),
    b = T.enforce,
    S = T.get,
    A = l.Int8Array,
    N = A && A.prototype,
    C = l.Uint8ClampedArray,
    R = C && C.prototype,
    O = A && E(A),
    D = N && E(N),
    x = Object.prototype,
    L = l.TypeError,
    P = y('toStringTag'),
    w = I('TYPED_ARRAY_TAG'),
    M = 'TypedArrayConstructor',
    k = s && !!v && 'Opera' !== f(l.opera),
    U = !1,
    G = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8
    },
    B = {
        BigInt64Array: 8,
        BigUint64Array: 8
    },
    Z = function (e) {
        if (!c(e)) return !1;
        var t = f(e);
        return 'DataView' === t || d(G, t) || d(B, t);
    },
    F = function (e) {
        var t = E(e);
        if (c(t)) {
            var n = S(t);
            return n && d(n, M) ? n[M] : F(t);
        }
    },
    V = function (e) {
        if (!c(e)) return !1;
        var t = f(e);
        return d(G, t) || d(B, t);
    },
    j = function (e) {
        if (V(e)) return e;
        throw L('Target is not a typed array');
    },
    H = function (e) {
        if (u(e) && (!v || g(O, e))) return e;
        throw L(_(e) + ' is not a typed array constructor');
    },
    Y = function (e, t, n, i) {
        if (o) {
            if (n)
                for (var r in G) {
                    var a = l[r];
                    if (a && d(a.prototype, e))
                        try {
                            delete a.prototype[e];
                        } catch (n) {
                            try {
                                a.prototype[e] = t;
                            } catch (e) {}
                        }
                }
            (!D[e] || n) && h(D, e, n ? t : (k && N[e]) || t, i);
        }
    },
    W = function (e, t, n) {
        var i, r;
        if (o) {
            if (v) {
                if (n) {
                    for (i in G)
                        if ((r = l[i]) && d(r, e))
                            try {
                                delete r[e];
                            } catch (e) {}
                }
                if (O[e] && !n) return;
                try {
                    return h(O, e, n ? t : (k && O[e]) || t);
                } catch (e) {}
            }
            for (i in G) (r = l[i]) && (!r[e] || n) && h(r, e, t);
        }
    };
for (i in G) (a = (r = l[i]) && r.prototype) ? (b(a)[M] = r) : (k = !1);
for (i in B) (a = (r = l[i]) && r.prototype) && (b(a)[M] = r);
if (
    (!k || !u(O) || O === Function.prototype) &&
    ((O = function () {
        throw L('Incorrect invocation');
    }),
    k)
)
    for (i in G) l[i] && v(l[i], O);
if ((!k || !D || D === x) && ((D = O.prototype), k)) for (i in G) l[i] && v(l[i].prototype, D);
if ((k && E(R) !== D && v(R, D), o && !d(D, P)))
    for (i in ((U = !0),
    m(D, P, {
        configurable: !0,
        get: function () {
            return c(this) ? this[w] : void 0;
        }
    }),
    G))
        l[i] && p(l[i], w, i);
e.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: k,
    TYPED_ARRAY_TAG: U && w,
    aTypedArray: j,
    aTypedArrayConstructor: H,
    exportTypedArrayMethod: Y,
    exportTypedArrayStaticMethod: W,
    getTypedArrayConstructor: F,
    isView: Z,
    isTypedArray: V,
    TypedArray: O,
    TypedArrayPrototype: D
};
