var i = n(161581),
    r = n(581031),
    a = n(325008),
    s = n(212036),
    o = n(539459),
    l = n(251069),
    u = n(4340),
    c = n(90338),
    d = n(936940),
    f = n(603528),
    _ = n(959318),
    p = n(552028),
    h = n(646328),
    m = n(339399),
    g = n(144748),
    E = n(276321),
    v = n(537443).f,
    y = n(692994),
    I = n(175440),
    T = n(865312),
    b = n(644659),
    S = o.PROPER,
    A = o.CONFIGURABLE,
    N = 'ArrayBuffer',
    C = 'DataView',
    R = 'prototype',
    O = 'Wrong length',
    D = 'Wrong index',
    L = b.getterFor(N),
    x = b.getterFor(C),
    P = b.set,
    w = i[N],
    M = w,
    k = M && M[R],
    U = i[C],
    G = U && U[R],
    B = Object.prototype,
    Z = i.Array,
    F = i.RangeError,
    V = r(y),
    j = r([].reverse),
    H = m.pack,
    Y = m.unpack,
    W = function (e) {
        return [255 & e];
    },
    K = function (e) {
        return [255 & e, (e >> 8) & 255];
    },
    z = function (e) {
        return [255 & e, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255];
    },
    q = function (e) {
        return (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0];
    },
    Q = function (e) {
        return H(e, 23, 4);
    },
    X = function (e) {
        return H(e, 52, 8);
    },
    J = function (e, t, n) {
        u(e[R], t, {
            configurable: !0,
            get: function () {
                return n(this)[t];
            }
        });
    },
    $ = function (e, t, n, i) {
        var r = x(e),
            a = h(n),
            s = !!i;
        if (a + t > r.byteLength) throw F(D);
        var o = r.bytes,
            l = a + r.byteOffset,
            u = I(o, l, l + t);
        return s ? u : j(u);
    },
    ee = function (e, t, n, i, r, a) {
        var s = x(e),
            o = h(n),
            l = i(+r),
            u = !!a;
        if (o + t > s.byteLength) throw F(D);
        for (var c = s.bytes, d = o + s.byteOffset, f = 0; f < t; f++) c[d + f] = l[u ? f : t - f - 1];
    };
if (s) {
    var et = S && w.name !== N;
    if (
        !d(function () {
            w(1);
        }) ||
        !d(function () {
            new w(-1);
        }) ||
        d(function () {
            return new w(), new w(1.5), new w(NaN), 1 !== w.length || (et && !A);
        })
    ) {
        (M = function (e) {
            return f(this, k), new w(h(e));
        })[R] = k;
        for (var en, ei = v(w), er = 0; ei.length > er; ) (en = ei[er++]) in M || l(M, en, w[en]);
        k.constructor = M;
    } else et && A && l(w, 'name', N);
    E && g(G) !== B && E(G, B);
    var ea = new U(new M(2)),
        es = r(G.setInt8);
    ea.setInt8(0, 2147483648),
        ea.setInt8(1, 2147483649),
        (ea.getInt8(0) || !ea.getInt8(1)) &&
            c(
                G,
                {
                    setInt8: function (e, t) {
                        es(this, e, (t << 24) >> 24);
                    },
                    setUint8: function (e, t) {
                        es(this, e, (t << 24) >> 24);
                    }
                },
                { unsafe: !0 }
            );
} else
    (k = (M = function (e) {
        f(this, k);
        var t = h(e);
        P(this, {
            type: N,
            bytes: V(Z(t), 0),
            byteLength: t
        }),
            a || ((this.byteLength = t), (this.detached = !1));
    })[R]),
        (G = (U = function (e, t, n) {
            f(this, G), f(e, k);
            var i = L(e),
                r = i.byteLength,
                s = _(t);
            if (s < 0 || s > r) throw F('Wrong offset');
            if (((n = void 0 === n ? r - s : p(n)), s + n > r)) throw F(O);
            P(this, {
                type: C,
                buffer: e,
                byteLength: n,
                byteOffset: s,
                bytes: i.bytes
            }),
                a || ((this.buffer = e), (this.byteLength = n), (this.byteOffset = s));
        })[R]),
        a && (J(M, 'byteLength', L), J(U, 'buffer', x), J(U, 'byteLength', x), J(U, 'byteOffset', x)),
        c(G, {
            getInt8: function (e) {
                return ($(this, 1, e)[0] << 24) >> 24;
            },
            getUint8: function (e) {
                return $(this, 1, e)[0];
            },
            getInt16: function (e) {
                var t = $(this, 2, e, arguments.length > 1 && arguments[1]);
                return (((t[1] << 8) | t[0]) << 16) >> 16;
            },
            getUint16: function (e) {
                var t = $(this, 2, e, arguments.length > 1 && arguments[1]);
                return (t[1] << 8) | t[0];
            },
            getInt32: function (e) {
                return q($(this, 4, e, arguments.length > 1 && arguments[1]));
            },
            getUint32: function (e) {
                return q($(this, 4, e, arguments.length > 1 && arguments[1])) >>> 0;
            },
            getFloat32: function (e) {
                return Y($(this, 4, e, arguments.length > 1 && arguments[1]), 23);
            },
            getFloat64: function (e) {
                return Y($(this, 8, e, arguments.length > 1 && arguments[1]), 52);
            },
            setInt8: function (e, t) {
                ee(this, 1, e, W, t);
            },
            setUint8: function (e, t) {
                ee(this, 1, e, W, t);
            },
            setInt16: function (e, t) {
                ee(this, 2, e, K, t, arguments.length > 2 && arguments[2]);
            },
            setUint16: function (e, t) {
                ee(this, 2, e, K, t, arguments.length > 2 && arguments[2]);
            },
            setInt32: function (e, t) {
                ee(this, 4, e, z, t, arguments.length > 2 && arguments[2]);
            },
            setUint32: function (e, t) {
                ee(this, 4, e, z, t, arguments.length > 2 && arguments[2]);
            },
            setFloat32: function (e, t) {
                ee(this, 4, e, Q, t, arguments.length > 2 && arguments[2]);
            },
            setFloat64: function (e, t) {
                ee(this, 8, e, X, t, arguments.length > 2 && arguments[2]);
            }
        });
T(M, N),
    T(U, C),
    (e.exports = {
        ArrayBuffer: M,
        DataView: U
    });
