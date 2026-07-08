var n,
    o,
    i,
    a = e(593858),
    u = e(257943),
    c = e(860511),
    f = e(339626),
    p = e(598349),
    s = e(210140),
    y = e(324988),
    v = e(406208),
    l = e(706938),
    h = e(693655),
    d = e(485155),
    g = e(524152),
    b = e(42756),
    x = e(458680),
    w = e(380744),
    m = e(753891),
    A = e(883972),
    O = A.enforce,
    T = A.get,
    S = c.Int8Array,
    j = S && S.prototype,
    E = c.Uint8ClampedArray,
    P = E && E.prototype,
    _ = S && b(S),
    I = j && b(j),
    C = Object.prototype,
    M = c.TypeError,
    R = w("toStringTag"),
    F = m("TYPED_ARRAY_TAG"),
    L = "TypedArrayConstructor",
    U = a && !!x && "Opera" !== y(c.opera),
    k = !1,
    D = {
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
    B = { BigInt64Array: 8, BigUint64Array: 8 },
    N = function (r) {
        var t = b(r);
        if (p(t)) {
            var e = T(t);
            return e && s(e, L) ? e[L] : N(t);
        }
    },
    z = function (r) {
        if (!p(r)) return !1;
        var t = y(r);
        return s(D, t) || s(B, t);
    };
for (n in D) (i = (o = c[n]) && o.prototype) ? (O(i)[L] = o) : (U = !1);
for (n in B) (i = (o = c[n]) && o.prototype) && (O(i)[L] = o);
if (
    (!U || !f(_) || _ === Function.prototype) &&
    ((_ = function () {
        throw new M("Incorrect invocation");
    }),
    U)
)
    for (n in D) c[n] && x(c[n], _);
if ((!U || !I || I === C) && ((I = _.prototype), U)) for (n in D) c[n] && x(c[n].prototype, I);
if ((U && b(P) !== I && x(P, I), u && !s(I, R)))
    for (n in ((k = !0),
    d(I, R, {
        configurable: !0,
        get: function () {
            return p(this) ? this[F] : void 0;
        },
    }),
    D))
        c[n] && l(c[n], F, n);
r.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: U,
    TYPED_ARRAY_TAG: k && F,
    aTypedArray: function (r) {
        if (z(r)) return r;
        throw new M("Target is not a typed array");
    },
    aTypedArrayConstructor: function (r) {
        if (f(r) && (!x || g(_, r))) return r;
        throw new M(v(r) + " is not a typed array constructor");
    },
    exportTypedArrayMethod: function (r, t, e, n) {
        if (u) {
            if (e)
                for (var o in D) {
                    var i = c[o];
                    if (i && s(i.prototype, r))
                        try {
                            delete i.prototype[r];
                        } catch (e) {
                            try {
                                i.prototype[r] = t;
                            } catch (r) {}
                        }
                }
            (!I[r] || e) && h(I, r, e ? t : (U && j[r]) || t, n);
        }
    },
    exportTypedArrayStaticMethod: function (r, t, e) {
        var n, o;
        if (u) {
            if (x) {
                if (e) {
                    for (n in D)
                        if ((o = c[n]) && s(o, r))
                            try {
                                delete o[r];
                            } catch (r) {}
                }
                if (_[r] && !e) return;
                try {
                    return h(_, r, e ? t : (U && _[r]) || t);
                } catch (r) {}
            }
            for (n in D) (o = c[n]) && (!o[r] || e) && h(o, r, t);
        }
    },
    getTypedArrayConstructor: N,
    isView: function (r) {
        if (!p(r)) return !1;
        var t = y(r);
        return "DataView" === t || s(D, t) || s(B, t);
    },
    isTypedArray: z,
    TypedArray: _,
    TypedArrayPrototype: I,
};
