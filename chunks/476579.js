var r = n(161581),
    i = n(581031),
    o = n(325008),
    a = n(212036),
    s = n(539459),
    l = n(251069),
    c = n(4340),
    u = n(90338),
    d = n(936940),
    f = n(603528),
    p = n(959318),
    _ = n(552028),
    h = n(646328),
    m = n(339399),
    g = n(144748),
    E = n(276321),
    v = n(537443).f,
    b = n(692994),
    y = n(175440),
    O = n(865312),
    S = n(644659),
    I = s.PROPER,
    T = s.CONFIGURABLE,
    N = 'ArrayBuffer',
    A = 'DataView',
    C = 'prototype',
    R = 'Wrong length',
    P = 'Wrong index',
    w = S.getterFor(N),
    D = S.getterFor(A),
    x = S.set,
    L = r[N],
    M = L,
    k = M && M[C],
    j = r[A],
    U = j && j[C],
    G = Object.prototype,
    B = r.Array,
    Z = r.RangeError,
    F = i(b),
    V = i([].reverse),
    H = m.pack,
    W = m.unpack,
    Y = function (e) {
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
        c(e[C], t, {
            configurable: !0,
            get: function () {
                return n(this)[t];
            }
        });
    },
    $ = function (e, t, n, r) {
        var i = D(e),
            o = h(n),
            a = !!r;
        if (o + t > i.byteLength) throw Z(P);
        var s = i.bytes,
            l = o + i.byteOffset,
            c = y(s, l, l + t);
        return a ? c : V(c);
    },
    ee = function (e, t, n, r, i, o) {
        var a = D(e),
            s = h(n),
            l = r(+i),
            c = !!o;
        if (s + t > a.byteLength) throw Z(P);
        for (var u = a.bytes, d = s + a.byteOffset, f = 0; f < t; f++) u[d + f] = l[c ? f : t - f - 1];
    };
if (a) {
    var et = I && L.name !== N;
    if (
        !d(function () {
            L(1);
        }) ||
        !d(function () {
            new L(-1);
        }) ||
        d(function () {
            return new L(), new L(1.5), new L(NaN), 1 !== L.length || (et && !T);
        })
    ) {
        (M = function (e) {
            return f(this, k), new L(h(e));
        })[C] = k;
        for (var en, er = v(L), ei = 0; er.length > ei; ) (en = er[ei++]) in M || l(M, en, L[en]);
        k.constructor = M;
    } else et && T && l(L, 'name', N);
    E && g(U) !== G && E(U, G);
    var eo = new j(new M(2)),
        ea = i(U.setInt8);
    eo.setInt8(0, 2147483648),
        eo.setInt8(1, 2147483649),
        (eo.getInt8(0) || !eo.getInt8(1)) &&
            u(
                U,
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
    (k = (M = function (e) {
        f(this, k);
        var t = h(e);
        x(this, {
            type: N,
            bytes: F(B(t), 0),
            byteLength: t
        }),
            o || ((this.byteLength = t), (this.detached = !1));
    })[C]),
        (U = (j = function (e, t, n) {
            f(this, U), f(e, k);
            var r = w(e),
                i = r.byteLength,
                a = p(t);
            if (a < 0 || a > i) throw Z('Wrong offset');
            if (((n = void 0 === n ? i - a : _(n)), a + n > i)) throw Z(R);
            x(this, {
                type: A,
                buffer: e,
                byteLength: n,
                byteOffset: a,
                bytes: r.bytes
            }),
                o || ((this.buffer = e), (this.byteLength = n), (this.byteOffset = a));
        })[C]),
        o && (J(M, 'byteLength', w), J(j, 'buffer', D), J(j, 'byteLength', D), J(j, 'byteOffset', D)),
        u(U, {
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
                return W($(this, 4, e, arguments.length > 1 && arguments[1]), 23);
            },
            getFloat64: function (e) {
                return W($(this, 8, e, arguments.length > 1 && arguments[1]), 52);
            },
            setInt8: function (e, t) {
                ee(this, 1, e, Y, t);
            },
            setUint8: function (e, t) {
                ee(this, 1, e, Y, t);
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
O(M, N),
    O(j, A),
    (e.exports = {
        ArrayBuffer: M,
        DataView: j
    });
