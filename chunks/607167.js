var r = n(860511),
    i = n(410323),
    a = n(257943),
    s = n(593858),
    o = n(814113),
    l = n(706938),
    c = n(485155),
    u = n(673570),
    d = n(503628),
    f = n(61132),
    p = n(120394),
    _ = n(370001),
    h = n(794729),
    m = n(46430),
    g = n(204357),
    E = n(42756),
    b = n(458680),
    y = n(380296),
    O = n(192819),
    A = n(486724),
    v = n(517771),
    S = n(174168),
    I = n(883972),
    T = o.PROPER,
    C = o.CONFIGURABLE,
    N = "ArrayBuffer",
    R = "DataView",
    w = "prototype",
    P = "Wrong length",
    D = "Wrong index",
    x = I.getterFor(N),
    L = I.getterFor(R),
    j = I.set,
    M = r[N],
    k = M,
    U = k && k[w],
    G = r[R],
    V = G && G[w],
    F = Object.prototype,
    B = r.Array,
    H = r.RangeError,
    Y = i(y),
    W = i([].reverse),
    K = g.pack,
    z = g.unpack,
    q = function (e) {
        return [255 & e];
    },
    X = function (e) {
        return [255 & e, (e >> 8) & 255];
    },
    Z = function (e) {
        return [255 & e, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255];
    },
    Q = function (e) {
        return (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0];
    },
    $ = function (e) {
        return K(m(e), 23, 4);
    },
    J = function (e) {
        return K(e, 52, 8);
    },
    ee = function (e, t, n) {
        c(e[w], t, {
            configurable: !0,
            get: function () {
                return n(this)[t];
            },
        });
    },
    et = function (e, t, n, r) {
        var i = L(e),
            a = h(n),
            s = !!r;
        if (a + t > i.byteLength) throw new H(D);
        var o = i.bytes,
            l = a + i.byteOffset,
            c = O(o, l, l + t);
        return s ? c : W(c);
    },
    en = function (e, t, n, r, i, a) {
        var s = L(e),
            o = h(n),
            l = r(+i),
            c = !!a;
        if (o + t > s.byteLength) throw new H(D);
        for (var u = s.bytes, d = o + s.byteOffset, f = 0; f < t; f++) u[d + f] = l[c ? f : t - f - 1];
    };
if (s) {
    var er = T && M.name !== N;
    !d(function () {
        M(1);
    }) ||
    !d(function () {
        new M(-1);
    }) ||
    d(function () {
        return new M(), new M(1.5), new M(NaN), 1 !== M.length || (er && !C);
    })
        ? (((k = function (e) {
              return f(this, U), A(new M(h(e)), this, k);
          })[w] = U),
          (U.constructor = k),
          v(k, M))
        : er && C && l(M, "name", N),
        b && E(V) !== F && b(V, F);
    var ei = new G(new k(2)),
        ea = i(V.setInt8);
    ei.setInt8(0, 0x80000000),
        ei.setInt8(1, 0x80000001),
        (ei.getInt8(0) || !ei.getInt8(1)) &&
            u(
                V,
                {
                    setInt8: function (e, t) {
                        ea(this, e, (t << 24) >> 24);
                    },
                    setUint8: function (e, t) {
                        ea(this, e, (t << 24) >> 24);
                    },
                },
                {
                    unsafe: !0,
                },
            );
} else
    (U = (k = function (e) {
        f(this, U);
        var t = h(e);
        j(this, {
            type: N,
            bytes: Y(B(t), 0),
            byteLength: t,
        }),
            a || ((this.byteLength = t), (this.detached = !1));
    })[w]),
        (V = (G = function (e, t, n) {
            f(this, V), f(e, U);
            var r = x(e),
                i = r.byteLength,
                s = p(t);
            if (s < 0 || s > i) throw new H("Wrong offset");
            if (((n = void 0 === n ? i - s : _(n)), s + n > i)) throw new H(P);
            j(this, {
                type: R,
                buffer: e,
                byteLength: n,
                byteOffset: s,
                bytes: r.bytes,
            }),
                a || ((this.buffer = e), (this.byteLength = n), (this.byteOffset = s));
        })[w]),
        a && (ee(k, "byteLength", x), ee(G, "buffer", L), ee(G, "byteLength", L), ee(G, "byteOffset", L)),
        u(V, {
            getInt8: function (e) {
                return (et(this, 1, e)[0] << 24) >> 24;
            },
            getUint8: function (e) {
                return et(this, 1, e)[0];
            },
            getInt16: function (e) {
                var t = et(this, 2, e, arguments.length > 1 && arguments[1]);
                return (((t[1] << 8) | t[0]) << 16) >> 16;
            },
            getUint16: function (e) {
                var t = et(this, 2, e, arguments.length > 1 && arguments[1]);
                return (t[1] << 8) | t[0];
            },
            getInt32: function (e) {
                return Q(et(this, 4, e, arguments.length > 1 && arguments[1]));
            },
            getUint32: function (e) {
                return Q(et(this, 4, e, arguments.length > 1 && arguments[1])) >>> 0;
            },
            getFloat32: function (e) {
                return z(et(this, 4, e, arguments.length > 1 && arguments[1]), 23);
            },
            getFloat64: function (e) {
                return z(et(this, 8, e, arguments.length > 1 && arguments[1]), 52);
            },
            setInt8: function (e, t) {
                en(this, 1, e, q, t);
            },
            setUint8: function (e, t) {
                en(this, 1, e, q, t);
            },
            setInt16: function (e, t) {
                en(this, 2, e, X, t, arguments.length > 2 && arguments[2]);
            },
            setUint16: function (e, t) {
                en(this, 2, e, X, t, arguments.length > 2 && arguments[2]);
            },
            setInt32: function (e, t) {
                en(this, 4, e, Z, t, arguments.length > 2 && arguments[2]);
            },
            setUint32: function (e, t) {
                en(this, 4, e, Z, t, arguments.length > 2 && arguments[2]);
            },
            setFloat32: function (e, t) {
                en(this, 4, e, $, t, arguments.length > 2 && arguments[2]);
            },
            setFloat64: function (e, t) {
                en(this, 8, e, J, t, arguments.length > 2 && arguments[2]);
            },
        });
S(k, N),
    S(G, R),
    (e.exports = {
        ArrayBuffer: k,
        DataView: G,
    });
