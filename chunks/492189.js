var e = r(98405),
    o = r(127849),
    i = r(580983),
    u = r(507604),
    c = r(569743),
    a = r(840475),
    f = r(391246),
    s = r(170322),
    l = r(530575),
    p = r(436207),
    d = r(186868),
    _ = r(554148),
    h = r(730383),
    y = r(425105),
    b = r(231298),
    g = r(459316),
    v = r(77025),
    w = r(214027),
    m = r(434431),
    x = r(661970),
    A = r(713411),
    O = r(568033),
    T = r(769827),
    E = r(264750).f,
    S = r(522169),
    I = r(920029).forEach,
    R = r(108015),
    k = r(573078),
    j = r(117895),
    P = r(840991),
    M = r(335024),
    L = r(199838),
    F = r(176682),
    C = L.get,
    D = L.set,
    B = L.enforce,
    N = j.f,
    U = P.f,
    W = o.RangeError,
    V = f.ArrayBuffer,
    G = V.prototype,
    Y = f.DataView,
    q = a.NATIVE_ARRAY_BUFFER_VIEWS,
    z = a.TYPED_ARRAY_TAG,
    $ = a.TypedArray,
    H = a.TypedArrayPrototype,
    K = a.isTypedArray,
    Q = 'BYTES_PER_ELEMENT',
    X = 'Wrong length',
    J = function (t, n) {
        k(t, n, {
            configurable: !0,
            get: function () {
                return C(this)[n];
            }
        });
    },
    Z = function (t) {
        var n;
        return O(G, t) || 'ArrayBuffer' === (n = w(t)) || 'SharedArrayBuffer' === n;
    },
    tt = function (t, n) {
        return K(t) && !x(n) && n in t && d(+n) && n >= 0;
    },
    tn = function (t, n) {
        return tt(t, (n = g(n))) ? l(2, t[n]) : U(t, n);
    },
    tr = function (t, n, r) {
        return tt(t, (n = g(n))) && m(r) && v(r, 'value') && !v(r, 'get') && !v(r, 'set') && !r.configurable && (!v(r, 'writable') || r.writable) && (!v(r, 'enumerable') || r.enumerable) ? ((t[n] = r.value), t) : N(t, n, r);
    };
u
    ? (q || ((P.f = tn), (j.f = tr), J(H, 'buffer'), J(H, 'byteOffset'), J(H, 'byteLength'), J(H, 'length')),
      e(
          {
              target: 'Object',
              stat: !0,
              forced: !q
          },
          {
              getOwnPropertyDescriptor: tn,
              defineProperty: tr
          }
      ),
      (t.exports = function (t, n, r) {
          var u = t.match(/\d+/)[0] / 8,
              a = t + (r ? 'Clamped' : '') + 'Array',
              f = 'get' + t,
              l = 'set' + t,
              d = o[a],
              g = d,
              v = g && g.prototype,
              w = {},
              x = function (t, n) {
                  var r = C(t);
                  return r.view[f](n * u + r.byteOffset, !0);
              },
              O = function (t, n, e) {
                  var o = C(t);
                  o.view[l](n * u + o.byteOffset, r ? b(e) : e, !0);
              },
              k = function (t, n) {
                  N(t, n, {
                      get: function () {
                          return x(this, n);
                      },
                      set: function (t) {
                          return O(this, n, t);
                      },
                      enumerable: !0
                  });
              };
          q
              ? c &&
                ((g = n(function (t, n, r, e) {
                    return s(t, v), F(m(n) ? (Z(n) ? (void 0 !== e ? new d(n, y(r, u), e) : void 0 !== r ? new d(n, y(r, u)) : new d(n)) : K(n) ? M(g, n) : i(S, g, n)) : new d(h(n)), t, g);
                })),
                T && T(g, $),
                I(E(d), function (t) {
                    t in g || p(g, t, d[t]);
                }),
                (g.prototype = v))
              : ((g = n(function (t, n, r, e) {
                    s(t, v);
                    var o,
                        c,
                        a,
                        f = 0,
                        l = 0;
                    if (m(n))
                        if (Z(n)) {
                            (o = n), (l = y(r, u));
                            var p = n.byteLength;
                            if (void 0 === e) {
                                if (p % u || (c = p - l) < 0) throw new W(X);
                            } else if ((c = _(e) * u) + l > p) throw new W(X);
                            a = c / u;
                        } else if (K(n)) return M(g, n);
                        else return i(S, g, n);
                    else o = new V((c = (a = h(n)) * u));
                    for (
                        D(t, {
                            buffer: o,
                            byteOffset: l,
                            byteLength: c,
                            length: a,
                            view: new Y(o)
                        });
                        f < a;

                    )
                        k(t, f++);
                })),
                T && T(g, $),
                (v = g.prototype = A(H))),
              v.constructor !== g && p(v, 'constructor', g),
              (B(v).TypedArrayConstructor = g),
              z && p(v, z, a);
          var j = g !== d;
          (w[a] = g),
              e(
                  {
                      global: !0,
                      constructor: !0,
                      forced: j,
                      sham: !q
                  },
                  w
              ),
              Q in g || p(g, Q, u),
              Q in v || p(v, Q, u),
              R(a);
      }))
    : (t.exports = function () {});
