var r = n(147018),
    i = n(161581),
    o = n(926515),
    a = n(325008),
    s = n(22092),
    l = n(192291),
    c = n(476579),
    u = n(603528),
    d = n(879),
    f = n(251069),
    _ = n(907533),
    p = n(552028),
    h = n(646328),
    m = n(18316),
    g = n(712560),
    E = n(966606),
    b = n(740362),
    y = n(974971),
    v = n(622281),
    O = n(323979),
    I = n(803938),
    S = n(838957),
    T = n(276321),
    N = n(537443).f,
    A = n(12367),
    C = n(335225).forEach,
    R = n(930990),
    P = n(4340),
    w = n(97131),
    D = n(347722),
    L = n(644659),
    x = n(95948),
    M = L.get,
    k = L.set,
    j = L.enforce,
    U = w.f,
    G = D.f,
    B = i.RangeError,
    F = c.ArrayBuffer,
    V = F.prototype,
    Z = c.DataView,
    H = l.NATIVE_ARRAY_BUFFER_VIEWS,
    W = l.TYPED_ARRAY_TAG,
    Y = l.TypedArray,
    K = l.TypedArrayPrototype,
    z = l.aTypedArrayConstructor,
    q = l.isTypedArray,
    Q = 'BYTES_PER_ELEMENT',
    X = 'Wrong length',
    J = function (e, t) {
        z(e);
        for (var n = 0, r = t.length, i = new e(r); r > n; ) i[n] = t[n++];
        return i;
    },
    $ = function (e, t) {
        P(e, t, {
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
        return q(e) && !O(t) && t in e && _(+t) && t >= 0;
    },
    en = function (e, t) {
        return et(e, (t = E(t))) ? d(2, e[t]) : G(e, t);
    },
    er = function (e, t, n) {
        return et(e, (t = E(t))) && v(n) && b(n, 'value') && !b(n, 'get') && !b(n, 'set') && !n.configurable && (!b(n, 'writable') || n.writable) && (!b(n, 'enumerable') || n.enumerable) ? ((e[t] = n.value), e) : U(e, t, n);
    };
a
    ? (H || ((D.f = en), (w.f = er), $(K, 'buffer'), $(K, 'byteOffset'), $(K, 'byteLength'), $(K, 'length')),
      r(
          {
              target: 'Object',
              stat: !0,
              forced: !H
          },
          {
              getOwnPropertyDescriptor: en,
              defineProperty: er
          }
      ),
      (e.exports = function (e, t, n) {
          var a = e.match(/\d+/)[0] / 8,
              l = e + (n ? 'Clamped' : '') + 'Array',
              c = 'get' + e,
              d = 'set' + e,
              _ = i[l],
              E = _,
              b = E && E.prototype,
              y = {},
              O = function (e, t) {
                  var n = M(e);
                  return n.view[c](t * a + n.byteOffset, !0);
              },
              S = function (e, t, r) {
                  var i = M(e);
                  i.view[d](t * a + i.byteOffset, n ? g(r) : r, !0);
              },
              P = function (e, t) {
                  U(e, t, {
                      get: function () {
                          return O(this, t);
                      },
                      set: function (e) {
                          return S(this, t, e);
                      },
                      enumerable: !0
                  });
              };
          H
              ? s &&
                ((E = t(function (e, t, n, r) {
                    return (
                        u(e, b),
                        x(
                            (function () {
                                return v(t) ? (ee(t) ? (void 0 !== r ? new _(t, m(n, a), r) : void 0 !== n ? new _(t, m(n, a)) : new _(t)) : q(t) ? J(E, t) : o(A, E, t)) : new _(h(t));
                            })(),
                            e,
                            E
                        )
                    );
                })),
                T && T(E, Y),
                C(N(_), function (e) {
                    e in E || f(E, e, _[e]);
                }),
                (E.prototype = b))
              : ((E = t(function (e, t, n, r) {
                    u(e, b);
                    var i,
                        s,
                        l,
                        c = 0,
                        d = 0;
                    if (v(t))
                        if (ee(t)) {
                            (i = t), (d = m(n, a));
                            var f = t.byteLength;
                            if (void 0 === r) {
                                if (f % a || (s = f - d) < 0) throw B(X);
                            } else if ((s = p(r) * a) + d > f) throw B(X);
                            l = s / a;
                        } else if (q(t)) return J(E, t);
                        else return o(A, E, t);
                    else i = new F((s = (l = h(t)) * a));
                    for (
                        k(e, {
                            buffer: i,
                            byteOffset: d,
                            byteLength: s,
                            length: l,
                            view: new Z(i)
                        });
                        c < l;

                    )
                        P(e, c++);
                })),
                T && T(E, Y),
                (b = E.prototype = I(K))),
              b.constructor !== E && f(b, 'constructor', E),
              (j(b).TypedArrayConstructor = E),
              W && f(b, W, l);
          var w = E !== _;
          (y[l] = E),
              r(
                  {
                      global: !0,
                      constructor: !0,
                      forced: w,
                      sham: !H
                  },
                  y
              ),
              Q in E || f(E, Q, a),
              Q in b || f(b, Q, a),
              R(l);
      }))
    : (e.exports = function () {});
