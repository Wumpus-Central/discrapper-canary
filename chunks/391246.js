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
    _ = n(77826),
    p = n(554148),
    h = n(730383),
    m = n(953010),
    g = n(125328),
    E = n(961050),
    b = n(769827),
    y = n(760751),
    O = n(992174),
    v = n(176682),
    I = n(190289),
    S = n(25124),
    T = n(199838),
    A = s.PROPER,
    N = s.CONFIGURABLE,
    C = 'ArrayBuffer',
    R = 'DataView',
    P = 'prototype',
    w = 'Wrong length',
    D = 'Wrong index',
    L = T.getterFor(C),
    x = T.getterFor(R),
    M = T.set,
    k = r[C],
    j = k,
    U = j && j[P],
    G = r[R],
    B = G && G[P],
    V = Object.prototype,
    F = r.Array,
    Z = r.RangeError,
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
    Q = function (e) {
        return [255 & e, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255];
    },
    X = function (e) {
        return (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0];
    },
    J = function (e) {
        return W(m(e), 23, 4);
    },
    $ = function (e) {
        return W(e, 52, 8);
    },
    ee = function (e, t, n) {
        c(e[P], t, {
            configurable: !0,
            get: function () {
                return n(this)[t];
            }
        });
    },
    et = function (e, t, n, r) {
        var i = x(e),
            a = h(n),
            o = !!r;
        if (a + t > i.byteLength) throw new Z(D);
        var s = i.bytes,
            l = a + i.byteOffset,
            c = O(s, l, l + t);
        return o ? c : Y(c);
    },
    en = function (e, t, n, r, i, a) {
        var o = x(e),
            s = h(n),
            l = r(+i),
            c = !!a;
        if (s + t > o.byteLength) throw new Z(D);
        for (var u = o.bytes, d = s + o.byteOffset, f = 0; f < t; f++) u[d + f] = l[c ? f : t - f - 1];
    };
if (o) {
    var er = A && k.name !== C;
    !d(function () {
        k(1);
    }) ||
    !d(function () {
        new k(-1);
    }) ||
    d(function () {
        return new k(), new k(1.5), new k(NaN), 1 !== k.length || (er && !N);
    })
        ? (((j = function (e) {
              return f(this, U), v(new k(h(e)), this, j);
          })[P] = U),
          (U.constructor = j),
          I(j, k))
        : er && N && l(k, 'name', C),
        b && E(B) !== V && b(B, V);
    var ei = new G(new j(2)),
        ea = i(B.setInt8);
    ei.setInt8(0, 2147483648),
        ei.setInt8(1, 2147483649),
        (ei.getInt8(0) || !ei.getInt8(1)) &&
            u(
                B,
                {
                    setInt8: function (e, t) {
                        ea(this, e, (t << 24) >> 24);
                    },
                    setUint8: function (e, t) {
                        ea(this, e, (t << 24) >> 24);
                    }
                },
                { unsafe: !0 }
            );
} else
    (U = (j = function (e) {
        f(this, U);
        var t = h(e);
        M(this, {
            type: C,
            bytes: H(F(t), 0),
            byteLength: t
        }),
            a || ((this.byteLength = t), (this.detached = !1));
    })[P]),
        (B = (G = function (e, t, n) {
            f(this, B), f(e, U);
            var r = L(e),
                i = r.byteLength,
                o = _(t);
            if (o < 0 || o > i) throw new Z('Wrong offset');
            if (((n = void 0 === n ? i - o : p(n)), o + n > i)) throw new Z(w);
            M(this, {
                type: R,
                buffer: e,
                byteLength: n,
                byteOffset: o,
                bytes: r.bytes
            }),
                a || ((this.buffer = e), (this.byteLength = n), (this.byteOffset = o));
        })[P]),
        a && (ee(j, 'byteLength', L), ee(G, 'buffer', x), ee(G, 'byteLength', x), ee(G, 'byteOffset', x)),
        u(B, {
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
                return X(et(this, 4, e, arguments.length > 1 && arguments[1]));
            },
            getUint32: function (e) {
                return X(et(this, 4, e, arguments.length > 1 && arguments[1])) >>> 0;
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
                en(this, 4, e, Q, t, arguments.length > 2 && arguments[2]);
            },
            setUint32: function (e, t) {
                en(this, 4, e, Q, t, arguments.length > 2 && arguments[2]);
            },
            setFloat32: function (e, t) {
                en(this, 4, e, J, t, arguments.length > 2 && arguments[2]);
            },
            setFloat64: function (e, t) {
                en(this, 8, e, $, t, arguments.length > 2 && arguments[2]);
            }
        });
S(j, C),
    S(G, R),
    (e.exports = {
        ArrayBuffer: j,
        DataView: G
    });
