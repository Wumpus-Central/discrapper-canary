var r = n(127849),
    i = n(46015),
    o = n(507604),
    a = n(848120),
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
    v = n(992174),
    O = n(176682),
    I = n(190289),
    S = n(25124),
    T = n(199838),
    N = s.PROPER,
    A = s.CONFIGURABLE,
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
    W = i([].reverse),
    Y = g.pack,
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
        return Y(m(e), 23, 4);
    },
    $ = function (e) {
        return Y(e, 52, 8);
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
            o = h(n),
            a = !!r;
        if (o + t > i.byteLength) throw new Z(D);
        var s = i.bytes,
            l = o + i.byteOffset,
            c = v(s, l, l + t);
        return a ? c : W(c);
    },
    en = function (e, t, n, r, i, o) {
        var a = x(e),
            s = h(n),
            l = r(+i),
            c = !!o;
        if (s + t > a.byteLength) throw new Z(D);
        for (var u = a.bytes, d = s + a.byteOffset, f = 0; f < t; f++) u[d + f] = l[c ? f : t - f - 1];
    };
if (a) {
    var er = N && k.name !== C;
    !d(function () {
        k(1);
    }) ||
    !d(function () {
        new k(-1);
    }) ||
    d(function () {
        return new k(), new k(1.5), new k(NaN), 1 !== k.length || (er && !A);
    })
        ? (((j = function (e) {
              return f(this, U), O(new k(h(e)), this, j);
          })[P] = U),
          (U.constructor = j),
          I(j, k))
        : er && A && l(k, 'name', C),
        b && E(B) !== V && b(B, V);
    var ei = new G(new j(2)),
        eo = i(B.setInt8);
    ei.setInt8(0, 2147483648),
        ei.setInt8(1, 2147483649),
        (ei.getInt8(0) || !ei.getInt8(1)) &&
            u(
                B,
                {
                    setInt8: function (e, t) {
                        eo(this, e, (t << 24) >> 24);
                    },
                    setUint8: function (e, t) {
                        eo(this, e, (t << 24) >> 24);
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
            o || ((this.byteLength = t), (this.detached = !1));
    })[P]),
        (B = (G = function (e, t, n) {
            f(this, B), f(e, U);
            var r = L(e),
                i = r.byteLength,
                a = _(t);
            if (a < 0 || a > i) throw new Z('Wrong offset');
            if (((n = void 0 === n ? i - a : p(n)), a + n > i)) throw new Z(w);
            M(this, {
                type: R,
                buffer: e,
                byteLength: n,
                byteOffset: a,
                bytes: r.bytes
            }),
                o || ((this.buffer = e), (this.byteLength = n), (this.byteOffset = a));
        })[P]),
        o && (ee(j, 'byteLength', L), ee(G, 'buffer', x), ee(G, 'byteLength', x), ee(G, 'byteOffset', x)),
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
