var e = r(127849),
    o = r(46015),
    i = r(507604),
    u = r(848120),
    c = r(938373),
    a = r(436207),
    f = r(573078),
    s = r(477732),
    l = r(621523),
    p = r(170322),
    d = r(77826),
    _ = r(554148),
    h = r(730383),
    y = r(953010),
    b = r(125328),
    g = r(961050),
    v = r(769827),
    w = r(760751),
    m = r(992174),
    x = r(176682),
    A = r(190289),
    O = r(25124),
    T = r(199838),
    E = c.PROPER,
    S = c.CONFIGURABLE,
    I = 'ArrayBuffer',
    R = 'DataView',
    k = 'prototype',
    j = 'Wrong index',
    P = T.getterFor(I),
    M = T.getterFor(R),
    L = T.set,
    F = e[I],
    C = F,
    D = C && C[k],
    B = e[R],
    N = B && B[k],
    U = Object.prototype,
    W = e.Array,
    V = e.RangeError,
    G = o(w),
    Y = o([].reverse),
    q = b.pack,
    z = b.unpack,
    $ = function (t) {
        return [255 & t];
    },
    H = function (t) {
        return [255 & t, (t >> 8) & 255];
    },
    K = function (t) {
        return [255 & t, (t >> 8) & 255, (t >> 16) & 255, (t >> 24) & 255];
    },
    Q = function (t) {
        return (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0];
    },
    X = function (t) {
        return q(y(t), 23, 4);
    },
    J = function (t) {
        return q(t, 52, 8);
    },
    Z = function (t, n, r) {
        f(t[k], n, {
            configurable: !0,
            get: function () {
                return r(this)[n];
            }
        });
    },
    tt = function (t, n, r, e) {
        var o = M(t),
            i = h(r);
        if (i + n > o.byteLength) throw new V(j);
        var u = o.bytes,
            c = i + o.byteOffset,
            a = m(u, c, c + n);
        return e ? a : Y(a);
    },
    tn = function (t, n, r, e, o, i) {
        var u = M(t),
            c = h(r),
            a = e(+o),
            f = !!i;
        if (c + n > u.byteLength) throw new V(j);
        for (var s = u.bytes, l = c + u.byteOffset, p = 0; p < n; p++) s[l + p] = a[f ? p : n - p - 1];
    };
if (u) {
    var tr = E && F.name !== I;
    !l(function () {
        F(1);
    }) ||
    !l(function () {
        new F(-1);
    }) ||
    l(function () {
        return new F(), new F(1.5), new F(NaN), 1 !== F.length || (tr && !S);
    })
        ? (((C = function (t) {
              return p(this, D), x(new F(h(t)), this, C);
          })[k] = D),
          (D.constructor = C),
          A(C, F))
        : tr && S && a(F, 'name', I),
        v && g(N) !== U && v(N, U);
    var te = new B(new C(2)),
        to = o(N.setInt8);
    te.setInt8(0, 2147483648),
        te.setInt8(1, 2147483649),
        (te.getInt8(0) || !te.getInt8(1)) &&
            s(
                N,
                {
                    setInt8: function (t, n) {
                        to(this, t, (n << 24) >> 24);
                    },
                    setUint8: function (t, n) {
                        to(this, t, (n << 24) >> 24);
                    }
                },
                { unsafe: !0 }
            );
} else
    (D = (C = function (t) {
        p(this, D);
        var n = h(t);
        L(this, {
            type: I,
            bytes: G(W(n), 0),
            byteLength: n
        }),
            i || ((this.byteLength = n), (this.detached = !1));
    })[k]),
        (N = (B = function (t, n, r) {
            p(this, N), p(t, D);
            var e = P(t),
                o = e.byteLength,
                u = d(n);
            if (u < 0 || u > o) throw new V('Wrong offset');
            if (((r = void 0 === r ? o - u : _(r)), u + r > o)) throw new V('Wrong length');
            L(this, {
                type: R,
                buffer: t,
                byteLength: r,
                byteOffset: u,
                bytes: e.bytes
            }),
                i || ((this.buffer = t), (this.byteLength = r), (this.byteOffset = u));
        })[k]),
        i && (Z(C, 'byteLength', P), Z(B, 'buffer', M), Z(B, 'byteLength', M), Z(B, 'byteOffset', M)),
        s(N, {
            getInt8: function (t) {
                return (tt(this, 1, t)[0] << 24) >> 24;
            },
            getUint8: function (t) {
                return tt(this, 1, t)[0];
            },
            getInt16: function (t) {
                var n = tt(this, 2, t, arguments.length > 1 && arguments[1]);
                return (((n[1] << 8) | n[0]) << 16) >> 16;
            },
            getUint16: function (t) {
                var n = tt(this, 2, t, arguments.length > 1 && arguments[1]);
                return (n[1] << 8) | n[0];
            },
            getInt32: function (t) {
                return Q(tt(this, 4, t, arguments.length > 1 && arguments[1]));
            },
            getUint32: function (t) {
                return Q(tt(this, 4, t, arguments.length > 1 && arguments[1])) >>> 0;
            },
            getFloat32: function (t) {
                return z(tt(this, 4, t, arguments.length > 1 && arguments[1]), 23);
            },
            getFloat64: function (t) {
                return z(tt(this, 8, t, arguments.length > 1 && arguments[1]), 52);
            },
            setInt8: function (t, n) {
                tn(this, 1, t, $, n);
            },
            setUint8: function (t, n) {
                tn(this, 1, t, $, n);
            },
            setInt16: function (t, n) {
                tn(this, 2, t, H, n, arguments.length > 2 && arguments[2]);
            },
            setUint16: function (t, n) {
                tn(this, 2, t, H, n, arguments.length > 2 && arguments[2]);
            },
            setInt32: function (t, n) {
                tn(this, 4, t, K, n, arguments.length > 2 && arguments[2]);
            },
            setUint32: function (t, n) {
                tn(this, 4, t, K, n, arguments.length > 2 && arguments[2]);
            },
            setFloat32: function (t, n) {
                tn(this, 4, t, X, n, arguments.length > 2 && arguments[2]);
            },
            setFloat64: function (t, n) {
                tn(this, 8, t, J, n, arguments.length > 2 && arguments[2]);
            }
        });
O(C, I),
    O(B, R),
    (t.exports = {
        ArrayBuffer: C,
        DataView: B
    });
