var n,
    o,
    a,
    i = e(593858),
    p = e(257943),
    f = e(860511),
    u = e(339626),
    y = e(598349),
    c = e(210140),
    s = e(324988),
    d = e(406208),
    h = e(706938),
    v = e(693655),
    A = e(485155),
    g = e(524152),
    w = e(42756),
    T = e(458680),
    l = e(380744),
    x = e(753891),
    _ = e(883972),
    b = _.enforce,
    E = _.get,
    I = f.Int8Array,
    O = I && I.prototype,
    R = f.Uint8ClampedArray,
    C = R && R.prototype,
    P = I && w(I),
    M = O && w(O),
    U = Object.prototype,
    j = f.TypeError,
    m = l("toStringTag"),
    B = x("TYPED_ARRAY_TAG"),
    F = "TypedArrayConstructor",
    V = i && !!T && "Opera" !== s(f.opera),
    D = !1,
    L = {
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
    S = { BigInt64Array: 8, BigUint64Array: 8 },
    Y = function (r) {
        var t = w(r);
        if (y(t)) {
            var e = E(t);
            return e && c(e, F) ? e[F] : Y(t);
        }
    },
    k = function (r) {
        if (!y(r)) return !1;
        var t = s(r);
        return c(L, t) || c(S, t);
    };
for (n in L) (a = (o = f[n]) && o.prototype) ? (b(a)[F] = o) : (V = !1);
for (n in S) (a = (o = f[n]) && o.prototype) && (b(a)[F] = o);
if (
    (!V || !u(P) || P === Function.prototype) &&
    ((P = function () {
        throw new j("Incorrect invocation");
    }),
    V)
)
    for (n in L) f[n] && T(f[n], P);
if ((!V || !M || M === U) && ((M = P.prototype), V)) for (n in L) f[n] && T(f[n].prototype, M);
if ((V && w(C) !== M && T(C, M), p && !c(M, m)))
    for (n in ((D = !0),
    A(M, m, {
        configurable: !0,
        get: function () {
            return y(this) ? this[B] : void 0;
        },
    }),
    L))
        f[n] && h(f[n], B, n);
r.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: V,
    TYPED_ARRAY_TAG: D && B,
    aTypedArray: function (r) {
        if (k(r)) return r;
        throw new j("Target is not a typed array");
    },
    aTypedArrayConstructor: function (r) {
        if (u(r) && (!T || g(P, r))) return r;
        throw new j(d(r) + " is not a typed array constructor");
    },
    exportTypedArrayMethod: function (r, t, e, n) {
        if (p) {
            if (e)
                for (var o in L) {
                    var a = f[o];
                    if (a && c(a.prototype, r))
                        try {
                            delete a.prototype[r];
                        } catch (e) {
                            try {
                                a.prototype[r] = t;
                            } catch (r) {}
                        }
                }
            (!M[r] || e) && v(M, r, e ? t : (V && O[r]) || t, n);
        }
    },
    exportTypedArrayStaticMethod: function (r, t, e) {
        var n, o;
        if (p) {
            if (T) {
                if (e) {
                    for (n in L)
                        if ((o = f[n]) && c(o, r))
                            try {
                                delete o[r];
                            } catch (r) {}
                }
                if (P[r] && !e) return;
                try {
                    return v(P, r, e ? t : (V && P[r]) || t);
                } catch (r) {}
            }
            for (n in L) (o = f[n]) && (!o[r] || e) && v(o, r, t);
        }
    },
    getTypedArrayConstructor: Y,
    isView: function (r) {
        if (!y(r)) return !1;
        var t = s(r);
        return "DataView" === t || c(L, t) || c(S, t);
    },
    isTypedArray: k,
    TypedArray: P,
    TypedArrayPrototype: M,
};
