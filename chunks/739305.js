var n,
    o,
    a,
    i = e(593858),
    p = e(257943),
    u = e(860511),
    y = e(339626),
    f = e(598349),
    c = e(210140),
    s = e(324988),
    d = e(406208),
    v = e(706938),
    A = e(693655),
    h = e(485155),
    g = e(524152),
    T = e(42756),
    w = e(458680),
    x = e(380744),
    l = e(753891),
    _ = e(883972),
    I = _.enforce,
    b = _.get,
    E = u.Int8Array,
    O = E && E.prototype,
    R = u.Uint8ClampedArray,
    C = R && R.prototype,
    U = E && T(E),
    j = O && T(O),
    m = Object.prototype,
    M = u.TypeError,
    P = x("toStringTag"),
    S = l("TYPED_ARRAY_TAG"),
    B = "TypedArrayConstructor",
    F = i && !!w && "Opera" !== s(u.opera),
    V = !1,
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
    Y = { BigInt64Array: 8, BigUint64Array: 8 },
    D = function (r) {
        var t = T(r);
        if (f(t)) {
            var e = b(t);
            return e && c(e, B) ? e[B] : D(t);
        }
    },
    k = function (r) {
        if (!f(r)) return !1;
        var t = s(r);
        return c(L, t) || c(Y, t);
    };
for (n in L) (a = (o = u[n]) && o.prototype) ? (I(a)[B] = o) : (F = !1);
for (n in Y) (a = (o = u[n]) && o.prototype) && (I(a)[B] = o);
if (
    (!F || !y(U) || U === Function.prototype) &&
    ((U = function () {
        throw new M("Incorrect invocation");
    }),
    F)
)
    for (n in L) u[n] && w(u[n], U);
if ((!F || !j || j === m) && ((j = U.prototype), F)) for (n in L) u[n] && w(u[n].prototype, j);
if ((F && T(C) !== j && w(C, j), p && !c(j, P)))
    for (n in ((V = !0),
    h(j, P, {
        configurable: !0,
        get: function () {
            return f(this) ? this[S] : void 0;
        },
    }),
    L))
        u[n] && v(u[n], S, n);
r.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: F,
    TYPED_ARRAY_TAG: V && S,
    aTypedArray: function (r) {
        if (k(r)) return r;
        throw new M("Target is not a typed array");
    },
    aTypedArrayConstructor: function (r) {
        if (y(r) && (!w || g(U, r))) return r;
        throw new M(d(r) + " is not a typed array constructor");
    },
    exportTypedArrayMethod: function (r, t, e, n) {
        if (p) {
            if (e)
                for (var o in L) {
                    var a = u[o];
                    if (a && c(a.prototype, r))
                        try {
                            delete a.prototype[r];
                        } catch (e) {
                            try {
                                a.prototype[r] = t;
                            } catch (r) {}
                        }
                }
            (!j[r] || e) && A(j, r, e ? t : (F && O[r]) || t, n);
        }
    },
    exportTypedArrayStaticMethod: function (r, t, e) {
        var n, o;
        if (p) {
            if (w) {
                if (e) {
                    for (n in L)
                        if ((o = u[n]) && c(o, r))
                            try {
                                delete o[r];
                            } catch (r) {}
                }
                if (U[r] && !e) return;
                try {
                    return A(U, r, e ? t : (F && U[r]) || t);
                } catch (r) {}
            }
            for (n in L) (o = u[n]) && (!o[r] || e) && A(o, r, t);
        }
    },
    getTypedArrayConstructor: D,
    isView: function (r) {
        if (!f(r)) return !1;
        var t = s(r);
        return "DataView" === t || c(L, t) || c(Y, t);
    },
    isTypedArray: k,
    TypedArray: U,
    TypedArrayPrototype: j,
};
