var r = n(98405),
    i = n(127849),
    a = n(580983),
    o = n(507604),
    s = n(569743),
    l = n(840475),
    c = n(391246),
    u = n(170322),
    d = n(530575),
    f = n(436207),
    _ = n(186868),
    p = n(554148),
    h = n(730383),
    m = n(425105),
    g = n(231298),
    E = n(459316),
    b = n(77025),
    y = n(214027),
    O = n(434431),
    v = n(661970),
    I = n(713411),
    T = n(568033),
    S = n(769827),
    A = n(264750).f,
    N = n(522169),
    C = n(920029).forEach,
    w = n(108015),
    R = n(573078),
    P = n(117895),
    D = n(840991),
    L = n(335024),
    x = n(199838),
    k = n(176682),
    j = x.get,
    M = x.set,
    U = x.enforce,
    G = P.f,
    B = D.f,
    Z = i.RangeError,
    F = c.ArrayBuffer,
    V = F.prototype,
    H = c.DataView,
    Y = l.NATIVE_ARRAY_BUFFER_VIEWS,
    W = l.TYPED_ARRAY_TAG,
    K = l.TypedArray,
    z = l.TypedArrayPrototype,
    q = l.isTypedArray,
    $ = 'BYTES_PER_ELEMENT',
    X = 'Wrong length',
    Q = function (e, t) {
        R(e, t, {
            configurable: !0,
            get: function () {
                return j(this)[t];
            }
        });
    },
    J = function (e) {
        var t;
        return T(V, e) || 'ArrayBuffer' === (t = y(e)) || 'SharedArrayBuffer' === t;
    },
    ee = function (e, t) {
        return q(e) && !v(t) && t in e && _(+t) && t >= 0;
    },
    et = function (e, t) {
        return ee(e, (t = E(t))) ? d(2, e[t]) : B(e, t);
    },
    en = function (e, t, n) {
        return ee(e, (t = E(t))) && O(n) && b(n, 'value') && !b(n, 'get') && !b(n, 'set') && !n.configurable && (!b(n, 'writable') || n.writable) && (!b(n, 'enumerable') || n.enumerable) ? ((e[t] = n.value), e) : G(e, t, n);
    };
o
    ? (Y || ((D.f = et), (P.f = en), Q(z, 'buffer'), Q(z, 'byteOffset'), Q(z, 'byteLength'), Q(z, 'length')),
      r(
          {
              target: 'Object',
              stat: !0,
              forced: !Y
          },
          {
              getOwnPropertyDescriptor: et,
              defineProperty: en
          }
      ),
      (e.exports = function (e, t, n) {
          var o = e.match(/\d+/)[0] / 8,
              l = e + (n ? 'Clamped' : '') + 'Array',
              c = 'get' + e,
              d = 'set' + e,
              _ = i[l],
              E = _,
              b = E && E.prototype,
              y = {},
              v = function (e, t) {
                  var n = j(e);
                  return n.view[c](t * o + n.byteOffset, !0);
              },
              T = function (e, t, r) {
                  var i = j(e);
                  i.view[d](t * o + i.byteOffset, n ? g(r) : r, !0);
              },
              R = function (e, t) {
                  G(e, t, {
                      get: function () {
                          return v(this, t);
                      },
                      set: function (e) {
                          return T(this, t, e);
                      },
                      enumerable: !0
                  });
              };
          (Y
              ? s &&
                ((E = t(function (e, t, n, r) {
                    return (
                        u(e, b),
                        k(
                            (function () {
                                return O(t) ? (J(t) ? (void 0 !== r ? new _(t, m(n, o), r) : void 0 !== n ? new _(t, m(n, o)) : new _(t)) : q(t) ? L(E, t) : a(N, E, t)) : new _(h(t));
                            })(),
                            e,
                            E
                        )
                    );
                })),
                S && S(E, K),
                C(A(_), function (e) {
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
                    if (O(t))
                        if (J(t)) {
                            ((i = t), (d = m(n, o)));
                            var f = t.byteLength;
                            if (void 0 === r) {
                                if (f % o || (s = f - d) < 0) throw new Z(X);
                            } else if ((s = p(r) * o) + d > f) throw new Z(X);
                            l = s / o;
                        } else if (q(t)) return L(E, t);
                        else return a(N, E, t);
                    else i = new F((s = (l = h(t)) * o));
                    for (
                        M(e, {
                            buffer: i,
                            byteOffset: d,
                            byteLength: s,
                            length: l,
                            view: new H(i)
                        });
                        c < l;

                    )
                        R(e, c++);
                })),
                S && S(E, K),
                (b = E.prototype = I(z))),
              b.constructor !== E && f(b, 'constructor', E),
              (U(b).TypedArrayConstructor = E),
              W && f(b, W, l));
          var P = E !== _;
          ((y[l] = E),
              r(
                  {
                      global: !0,
                      constructor: !0,
                      forced: P,
                      sham: !Y
                  },
                  y
              ),
              $ in E || f(E, $, o),
              $ in b || f(b, $, o),
              w(l));
      }))
    : (e.exports = function () {});
