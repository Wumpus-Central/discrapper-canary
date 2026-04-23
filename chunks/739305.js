"use strict";
var r,
    i,
    s,
    a = n(593858),
    o = n(257943),
    l = n(860511),
    u = n(339626),
    c = n(598349),
    d = n(210140),
    _ = n(324988),
    f = n(406208),
    p = n(706938),
    h = n(693655),
    E = n(485155),
    m = n(524152),
    g = n(42756),
    A = n(458680),
    I = n(380744),
    T = n(753891),
    S = n(883972),
    y = S.enforce,
    N = S.get,
    v = l.Int8Array,
    C = v && v.prototype,
    O = l.Uint8ClampedArray,
    R = O && O.prototype,
    b = v && g(v),
    D = C && g(C),
    L = Object.prototype,
    w = l.TypeError,
    M = I("toStringTag"),
    P = T("TYPED_ARRAY_TAG"),
    x = "TypedArrayConstructor",
    k = a && !!A && "Opera" !== _(l.opera),
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
    F = { BigInt64Array: 8, BigUint64Array: 8 },
    V = function (e) {
        var t = g(e);
        if (c(t)) {
            var n = N(t);
            return n && d(n, x) ? n[x] : V(t);
        }
    },
    B = function (e) {
        if (!c(e)) return !1;
        var t = _(e);
        return d(G, t) || d(F, t);
    };
for (r in G) (s = (i = l[r]) && i.prototype) ? (y(s)[x] = i) : (k = !1);
for (r in F) (s = (i = l[r]) && i.prototype) && (y(s)[x] = i);
if (
    (!k || !u(b) || b === Function.prototype) &&
    ((b = function () {
        throw new w("Incorrect invocation");
    }),
    k)
)
    for (r in G) l[r] && A(l[r], b);
if ((!k || !D || D === L) && ((D = b.prototype), k)) for (r in G) l[r] && A(l[r].prototype, D);
if ((k && g(R) !== D && A(R, D), o && !d(D, M)))
    for (r in ((U = !0),
    E(D, M, {
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
    aTypedArray: function (e) {
        if (B(e)) return e;
        throw new w("Target is not a typed array");
    },
    aTypedArrayConstructor: function (e) {
        if (u(e) && (!A || m(b, e))) return e;
        throw new w(f(e) + " is not a typed array constructor");
    },
    exportTypedArrayMethod: function (e, t, n, r) {
        if (o) {
            if (n)
                for (var i in G) {
                    var s = l[i];
                    if (s && d(s.prototype, e))
                        try {
                            delete s.prototype[e];
                        } catch (n) {
                            try {
                                s.prototype[e] = t;
                            } catch (e) {}
                        }
                }
            (!D[e] || n) && h(D, e, n ? t : (k && C[e]) || t, r);
        }
    },
    exportTypedArrayStaticMethod: function (e, t, n) {
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
                if (b[e] && !n) return;
                try {
                    return h(b, e, n ? t : (k && b[e]) || t);
                } catch (e) {}
            }
            for (r in G) (i = l[r]) && (!i[e] || n) && h(i, e, t);
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
