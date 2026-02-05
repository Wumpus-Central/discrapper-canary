"use strict";
var r,
    i,
    a,
    s = n(593858),
    o = n(257943),
    l = n(860511),
    u = n(339626),
    c = n(598349),
    d = n(210140),
    _ = n(324988),
    f = n(406208),
    p = n(706938),
    h = n(693655),
    m = n(485155),
    g = n(524152),
    E = n(42756),
    A = n(458680),
    I = n(380744),
    T = n(753891),
    y = n(883972),
    S = y.enforce,
    v = y.get,
    C = l.Int8Array,
    b = C && C.prototype,
    N = l.Uint8ClampedArray,
    R = N && N.prototype,
    O = C && E(C),
    D = b && E(b),
    L = Object.prototype,
    w = l.TypeError,
    x = I("toStringTag"),
    P = T("TYPED_ARRAY_TAG"),
    M = "TypedArrayConstructor",
    k = s && !!A && "Opera" !== _(l.opera),
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
        Float64Array: 8,
    },
    V = { BigInt64Array: 8, BigUint64Array: 8 },
    F = function (e) {
        if (!c(e)) return !1;
        var t = _(e);
        return "DataView" === t || d(G, t) || d(V, t);
    },
    B = function (e) {
        var t = E(e);
        if (c(t)) {
            var n = v(t);
            return n && d(n, M) ? n[M] : B(t);
        }
    },
    j = function (e) {
        if (!c(e)) return !1;
        var t = _(e);
        return d(G, t) || d(V, t);
    },
    H = function (e) {
        if (j(e)) return e;
        throw new w("Target is not a typed array");
    },
    Y = function (e) {
        if (u(e) && (!A || g(O, e))) return e;
        throw new w(f(e) + " is not a typed array constructor");
    },
    W = function (e, t, n, r) {
        if (o) {
            if (n)
                for (var i in G) {
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
            (!D[e] || n) && h(D, e, n ? t : (k && b[e]) || t, r);
        }
    },
    K = function (e, t, n) {
        var r, i;
        if (o) {
            if (A) {
                if (n) {
                    for (r in G)
                        if ((i = l[r]) && d(i, e))
                            try {
                                delete i[e];
                            } catch (e) {}
                }
                if (O[e] && !n) return;
                try {
                    return h(O, e, n ? t : (k && O[e]) || t);
                } catch (e) {}
            }
            for (r in G) (i = l[r]) && (!i[e] || n) && h(i, e, t);
        }
    };
for (r in G) (a = (i = l[r]) && i.prototype) ? (S(a)[M] = i) : (k = !1);
for (r in V) (a = (i = l[r]) && i.prototype) && (S(a)[M] = i);
if (
    (!k || !u(O) || O === Function.prototype) &&
    ((O = function () {
        throw new w("Incorrect invocation");
    }),
    k)
)
    for (r in G) l[r] && A(l[r], O);
if ((!k || !D || D === L) && ((D = O.prototype), k)) for (r in G) l[r] && A(l[r].prototype, D);
if ((k && E(R) !== D && A(R, D), o && !d(D, x)))
    for (r in ((U = !0),
    m(D, x, {
        configurable: !0,
        get: function () {
            return c(this) ? this[P] : void 0;
        },
    }),
    G))
        l[r] && p(l[r], P, r);
e.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: k,
    TYPED_ARRAY_TAG: U && P,
    aTypedArray: H,
    aTypedArrayConstructor: Y,
    exportTypedArrayMethod: W,
    exportTypedArrayStaticMethod: K,
    getTypedArrayConstructor: B,
    isView: F,
    isTypedArray: j,
    TypedArray: O,
    TypedArrayPrototype: D,
};
