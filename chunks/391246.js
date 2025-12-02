var r = n(127849),
    i = n(46015),
    a = n(507604),
    o = n(848120),
    s = n(938373),
    l = n(436207),
    c = n(573078),
    u = n(477732),
    d = n(621523),
    f = n(170322),
    p = n(77826),
    _ = n(554148),
    m = n(730383),
    h = n(953010),
    g = n(125328),
    E = n(961050),
    b = n(769827),
    y = n(760751),
    O = n(992174),
    v = n(176682),
    S = n(190289),
    I = n(25124),
    T = n(199838),
    A = s.PROPER,
    C = s.CONFIGURABLE,
    N = "ArrayBuffer",
    P = "DataView",
    R = "prototype",
    w = "Wrong length",
    D = "Wrong index",
    x = T.getterFor(N),
    L = T.getterFor(P),
    j = T.set,
    M = r[N],
    k = M,
    U = k && k[R],
    G = r[P],
    Z = G && G[R],
    B = Object.prototype,
    F = r.Array,
    V = r.RangeError,
    H = i(y),
    Y = i([].reverse),
    W = g.pack,
    K = g.unpack,
    z = function (e) {
        return [255 & e];
    },
    q = function (e) {
        return [255 & e, (e >> 8) & 255];
    },
    X = function (e) {
        return [255 & e, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255];
    },
    Q = function (e) {
        return (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0];
    },
    J = function (e) {
        return W(h(e), 23, 4);
    },
    $ = function (e) {
        return W(e, 52, 8);
    },
    ee = function (e, t, n) {
        c(e[R], t, {
            configurable: !0,
            get: function () {
                return n(this)[t];
            },
        });
    },
    et = function (e, t, n, r) {
        var i = L(e),
            a = m(n),
            o = !!r;
        if (a + t > i.byteLength) throw new V(D);
        var s = i.bytes,
            l = a + i.byteOffset,
            c = O(s, l, l + t);
        return o ? c : Y(c);
    },
    en = function (e, t, n, r, i, a) {
        var o = L(e),
            s = m(n),
            l = r(+i),
            c = !!a;
        if (s + t > o.byteLength) throw new V(D);
        for (var u = o.bytes, d = s + o.byteOffset, f = 0; f < t; f++) u[d + f] = l[c ? f : t - f - 1];
    };
if (o) {
    var er = A && M.name !== N;
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
              return f(this, U), v(new M(m(e)), this, k);
          })[R] = U),
          (U.constructor = k),
          S(k, M))
        : er && C && l(M, "name", N),
        b && E(Z) !== B && b(Z, B);
    var ei = new G(new k(2)),
        ea = i(Z.setInt8);
    ei.setInt8(0, 2147483648),
        ei.setInt8(1, 2147483649),
        (ei.getInt8(0) || !ei.getInt8(1)) &&
            u(
                Z,
                {
                    setInt8: function (e, t) {
                        ea(this, e, (t << 24) >> 24);
                    },
                    setUint8: function (e, t) {
                        ea(this, e, (t << 24) >> 24);
                    },
                },
                { unsafe: !0 },
            );
} else
    (U = (k = function (e) {
        f(this, U);
        var t = m(e);
        j(this, {
            type: N,
            bytes: H(F(t), 0),
            byteLength: t,
        }),
            a || ((this.byteLength = t), (this.detached = !1));
    })[R]),
        (Z = (G = function (e, t, n) {
            f(this, Z), f(e, U);
            var r = x(e),
                i = r.byteLength,
                o = p(t);
            if (o < 0 || o > i) throw new V("Wrong offset");
            if (((n = void 0 === n ? i - o : _(n)), o + n > i)) throw new V(w);
            j(this, {
                type: P,
                buffer: e,
                byteLength: n,
                byteOffset: o,
                bytes: r.bytes,
            }),
                a || ((this.buffer = e), (this.byteLength = n), (this.byteOffset = o));
        })[R]),
        a && (ee(k, "byteLength", x), ee(G, "buffer", L), ee(G, "byteLength", L), ee(G, "byteOffset", L)),
        u(Z, {
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
                return K(et(this, 4, e, arguments.length > 1 && arguments[1]), 23);
            },
            getFloat64: function (e) {
                return K(et(this, 8, e, arguments.length > 1 && arguments[1]), 52);
            },
            setInt8: function (e, t) {
                en(this, 1, e, z, t);
            },
            setUint8: function (e, t) {
                en(this, 1, e, z, t);
            },
            setInt16: function (e, t) {
                en(this, 2, e, q, t, arguments.length > 2 && arguments[2]);
            },
            setUint16: function (e, t) {
                en(this, 2, e, q, t, arguments.length > 2 && arguments[2]);
            },
            setInt32: function (e, t) {
                en(this, 4, e, X, t, arguments.length > 2 && arguments[2]);
            },
            setUint32: function (e, t) {
                en(this, 4, e, X, t, arguments.length > 2 && arguments[2]);
            },
            setFloat32: function (e, t) {
                en(this, 4, e, J, t, arguments.length > 2 && arguments[2]);
            },
            setFloat64: function (e, t) {
                en(this, 8, e, $, t, arguments.length > 2 && arguments[2]);
            },
        });
I(k, N),
    I(G, P),
    (e.exports = {
        ArrayBuffer: k,
        DataView: G,
    });
