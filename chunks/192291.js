var r,
    i,
    o,
    a = n(212036),
    s = n(325008),
    l = n(161581),
    c = n(354848),
    u = n(622281),
    d = n(740362),
    f = n(974971),
    p = n(938507),
    _ = n(251069),
    h = n(859209),
    m = n(4340),
    g = n(838957),
    E = n(144748),
    v = n(276321),
    b = n(641236),
    y = n(457507),
    O = n(644659),
    S = O.enforce,
    I = O.get,
    T = l.Int8Array,
    N = T && T.prototype,
    A = l.Uint8ClampedArray,
    C = A && A.prototype,
    R = T && E(T),
    P = N && E(N),
    w = Object.prototype,
    D = l.TypeError,
    x = b('toStringTag'),
    L = y('TYPED_ARRAY_TAG'),
    M = 'TypedArrayConstructor',
    k = a && !!v && 'Opera' !== f(l.opera),
    j = !1,
    U = {
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
    G = {
        BigInt64Array: 8,
        BigUint64Array: 8
    },
    B = function (e) {
        if (!u(e)) return !1;
        var t = f(e);
        return 'DataView' === t || d(U, t) || d(G, t);
    },
    Z = function (e) {
        var t = E(e);
        if (u(t)) {
            var n = I(t);
            return n && d(n, M) ? n[M] : Z(t);
        }
    },
    F = function (e) {
        if (!u(e)) return !1;
        var t = f(e);
        return d(U, t) || d(G, t);
    },
    V = function (e) {
        if (F(e)) return e;
        throw D('Target is not a typed array');
    },
    H = function (e) {
        if (c(e) && (!v || g(R, e))) return e;
        throw D(p(e) + ' is not a typed array constructor');
    },
    W = function (e, t, n, r) {
        if (s) {
            if (n)
                for (var i in U) {
                    var o = l[i];
                    if (o && d(o.prototype, e))
                        try {
                            delete o.prototype[e];
                        } catch (n) {
                            try {
                                o.prototype[e] = t;
                            } catch (e) {}
                        }
                }
            (!P[e] || n) && h(P, e, n ? t : (k && N[e]) || t, r);
        }
    },
    Y = function (e, t, n) {
        var r, i;
        if (s) {
            if (v) {
                if (n) {
                    for (r in U)
                        if ((i = l[r]) && d(i, e))
                            try {
                                delete i[e];
                            } catch (e) {}
                }
                if (R[e] && !n) return;
                try {
                    return h(R, e, n ? t : (k && R[e]) || t);
                } catch (e) {}
            }
            for (r in U) (i = l[r]) && (!i[e] || n) && h(i, e, t);
        }
    };
for (r in U) (o = (i = l[r]) && i.prototype) ? (S(o)[M] = i) : (k = !1);
for (r in G) (o = (i = l[r]) && i.prototype) && (S(o)[M] = i);
if (
    (!k || !c(R) || R === Function.prototype) &&
    ((R = function () {
        throw D('Incorrect invocation');
    }),
    k)
)
    for (r in U) l[r] && v(l[r], R);
if ((!k || !P || P === w) && ((P = R.prototype), k)) for (r in U) l[r] && v(l[r].prototype, P);
if ((k && E(C) !== P && v(C, P), s && !d(P, x)))
    for (r in ((j = !0),
    m(P, x, {
        configurable: !0,
        get: function () {
            return u(this) ? this[L] : void 0;
        }
    }),
    U))
        l[r] && _(l[r], L, r);
e.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: k,
    TYPED_ARRAY_TAG: j && L,
    aTypedArray: V,
    aTypedArrayConstructor: H,
    exportTypedArrayMethod: W,
    exportTypedArrayStaticMethod: Y,
    getTypedArrayConstructor: Z,
    isView: B,
    isTypedArray: F,
    TypedArray: R,
    TypedArrayPrototype: P
};
