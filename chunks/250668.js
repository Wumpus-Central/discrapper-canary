var i = n(147018),
    r = n(161581),
    a = n(926515),
    s = n(325008),
    o = n(22092),
    l = n(192291),
    u = n(476579),
    c = n(603528),
    d = n(879),
    f = n(251069),
    _ = n(907533),
    p = n(552028),
    h = n(646328),
    m = n(18316),
    g = n(712560),
    E = n(966606),
    v = n(740362),
    y = n(974971),
    I = n(622281),
    T = n(323979),
    b = n(803938),
    S = n(838957),
    A = n(276321),
    N = n(537443).f,
    C = n(12367),
    R = n(335225).forEach,
    O = n(930990),
    D = n(4340),
    L = n(97131),
    x = n(347722),
    P = n(644659),
    w = n(95948),
    M = P.get,
    k = P.set,
    U = P.enforce,
    G = L.f,
    B = x.f,
    Z = r.RangeError,
    F = u.ArrayBuffer,
    V = F.prototype,
    j = u.DataView,
    H = l.NATIVE_ARRAY_BUFFER_VIEWS,
    Y = l.TYPED_ARRAY_TAG,
    W = l.TypedArray,
    K = l.TypedArrayPrototype,
    z = l.aTypedArrayConstructor,
    q = l.isTypedArray,
    Q = 'BYTES_PER_ELEMENT',
    X = 'Wrong length',
    J = function (e, t) {
        z(e);
        for (var n = 0, i = t.length, r = new e(i); i > n; ) r[n] = t[n++];
        return r;
    },
    $ = function (e, t) {
        D(e, t, {
            configurable: !0,
            get: function () {
                return M(this)[t];
            }
        });
    },
    ee = function (e) {
        var t;
        return S(V, e) || 'ArrayBuffer' === (t = y(e)) || 'SharedArrayBuffer' === t;
    },
    et = function (e, t) {
        return q(e) && !T(t) && t in e && _(+t) && t >= 0;
    },
    en = function (e, t) {
        return et(e, (t = E(t))) ? d(2, e[t]) : B(e, t);
    },
    ei = function (e, t, n) {
        return et(e, (t = E(t))) && I(n) && v(n, 'value') && !v(n, 'get') && !v(n, 'set') && !n.configurable && (!v(n, 'writable') || n.writable) && (!v(n, 'enumerable') || n.enumerable) ? ((e[t] = n.value), e) : G(e, t, n);
    };
s
    ? (H || ((x.f = en), (L.f = ei), $(K, 'buffer'), $(K, 'byteOffset'), $(K, 'byteLength'), $(K, 'length')),
      i(
          {
              target: 'Object',
              stat: !0,
              forced: !H
          },
          {
              getOwnPropertyDescriptor: en,
              defineProperty: ei
          }
      ),
      (e.exports = function (e, t, n) {
          var s = e.match(/\d+/)[0] / 8,
              l = e + (n ? 'Clamped' : '') + 'Array',
              u = 'get' + e,
              d = 'set' + e,
              _ = r[l],
              E = _,
              v = E && E.prototype,
              y = {},
              T = function (e, t) {
                  var n = M(e);
                  return n.view[u](t * s + n.byteOffset, !0);
              },
              S = function (e, t, i) {
                  var r = M(e);
                  r.view[d](t * s + r.byteOffset, n ? g(i) : i, !0);
              },
              D = function (e, t) {
                  G(e, t, {
                      get: function () {
                          return T(this, t);
                      },
                      set: function (e) {
                          return S(this, t, e);
                      },
                      enumerable: !0
                  });
              };
          H
              ? o &&
                ((E = t(function (e, t, n, i) {
                    return (
                        c(e, v),
                        w(
                            (function () {
                                return I(t) ? (ee(t) ? (void 0 !== i ? new _(t, m(n, s), i) : void 0 !== n ? new _(t, m(n, s)) : new _(t)) : q(t) ? J(E, t) : a(C, E, t)) : new _(h(t));
                            })(),
                            e,
                            E
                        )
                    );
                })),
                A && A(E, W),
                R(N(_), function (e) {
                    e in E || f(E, e, _[e]);
                }),
                (E.prototype = v))
              : ((E = t(function (e, t, n, i) {
                    c(e, v);
                    var r,
                        o,
                        l,
                        u = 0,
                        d = 0;
                    if (I(t)) {
                        if (ee(t)) {
                            (r = t), (d = m(n, s));
                            var f = t.byteLength;
                            if (void 0 === i) {
                                if (f % s || (o = f - d) < 0) throw Z(X);
                            } else if ((o = p(i) * s) + d > f) throw Z(X);
                            l = o / s;
                        } else if (q(t)) return J(E, t);
                        else return a(C, E, t);
                    } else r = new F((o = (l = h(t)) * s));
                    for (
                        k(e, {
                            buffer: r,
                            byteOffset: d,
                            byteLength: o,
                            length: l,
                            view: new j(r)
                        });
                        u < l;

                    )
                        D(e, u++);
                })),
                A && A(E, W),
                (v = E.prototype = b(K))),
              v.constructor !== E && f(v, 'constructor', E),
              (U(v).TypedArrayConstructor = E),
              Y && f(v, Y, l);
          var L = E !== _;
          (y[l] = E),
              i(
                  {
                      global: !0,
                      constructor: !0,
                      forced: L,
                      sham: !H
                  },
                  y
              ),
              Q in E || f(E, Q, s),
              Q in v || f(v, Q, s),
              O(l);
      }))
    : (e.exports = function () {});
