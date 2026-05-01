"use strict";
var i,
    r,
    s,
    a = n(593858),
    o = n(257943),
    l = n(860511),
    u = n(339626),
    c = n(598349),
    d = n(210140),
    _ = n(324988),
    f = n(406208),
    h = n(706938),
    p = n(693655),
    E = n(485155),
    m = n(524152),
    g = n(42756),
    A = n(458680),
    I = n(380744),
    T = n(753891),
    S = n(883972),
    N = S.enforce,
    y = S.get,
    C = l.Int8Array,
    v = C && C.prototype,
    O = l.Uint8ClampedArray,
    R = O && O.prototype,
    b = C && g(C),
    D = v && g(v),
    L = Object.prototype,
    w = l.TypeError,
    M = I("toStringTag"),
    P = T("TYPED_ARRAY_TAG"),
    x = "TypedArrayConstructor",
    U = a && !!A && "Opera" !== _(l.opera),
    k = !1,
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
    F = { BigInt64Array: 8, BigUint64Array: 8 },
    V = function (e) {
        var t = g(e);
        if (c(t)) {
            var n = y(t);
            return n && d(n, x) ? n[x] : V(t);
        }
    },
    B = function (e) {
        if (!c(e)) return !1;
        var t = _(e);
        return d(G, t) || d(F, t);
    };
for (i in G) (s = (r = l[i]) && r.prototype) ? (N(s)[x] = r) : (U = !1);
for (i in F) (s = (r = l[i]) && r.prototype) && (N(s)[x] = r);
if (
    (!U || !u(b) || b === Function.prototype) &&
    ((b = function () {
        throw new w("Incorrect invocation");
    }),
    U)
)
    for (i in G) l[i] && A(l[i], b);
if ((!U || !D || D === L) && ((D = b.prototype), U)) for (i in G) l[i] && A(l[i].prototype, D);
if ((U && g(R) !== D && A(R, D), o && !d(D, M)))
    for (i in ((k = !0),
    E(D, M, {
        configurable: !0,
        get: function () {
            return c(this) ? this[P] : void 0;
        },
    }),
    G))
        l[i] && h(l[i], P, i);
e.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: U,
    TYPED_ARRAY_TAG: k && P,
    aTypedArray: function (e) {
        if (B(e)) return e;
        throw new w("Target is not a typed array");
    },
    aTypedArrayConstructor: function (e) {
        if (u(e) && (!A || m(b, e))) return e;
        throw new w(f(e) + " is not a typed array constructor");
    },
    exportTypedArrayMethod: function (e, t, n, i) {
        if (o) {
            if (n)
                for (var r in G) {
                    var s = l[r];
                    if (s && d(s.prototype, e))
                        try {
                            delete s.prototype[e];
                        } catch (n) {
                            try {
                                s.prototype[e] = t;
                            } catch (e) {}
                        }
                }
            (!D[e] || n) && p(D, e, n ? t : (U && v[e]) || t, i);
        }
    },
    exportTypedArrayStaticMethod: function (e, t, n) {
        var i, r;
        if (o) {
            if (A) {
                if (n) {
                    for (i in G)
                        if ((r = l[i]) && d(r, e))
                            try {
                                delete r[e];
                            } catch (e) {}
                }
                if (b[e] && !n) return;
                try {
                    return p(b, e, n ? t : (U && b[e]) || t);
                } catch (e) {}
            }
            for (i in G) (r = l[i]) && (!r[e] || n) && p(r, e, t);
        }
    },
    getTypedArrayConstructor: V,
    isView: function (e) {
        if (!c(e)) return !1;
        var t = _(e);
        return "DataView" === t || d(G, t) || d(F, t);
    },
    isTypedArray: B,
    TypedArray: b,
    TypedArrayPrototype: D,
};
