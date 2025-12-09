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
    p = n(186868),
    _ = n(554148),
    m = n(730383),
    h = n(425105),
    g = n(231298),
    E = n(459316),
    b = n(77025),
    y = n(214027),
    O = n(434431),
    v = n(661970),
    S = n(713411),
    I = n(568033),
    T = n(769827),
    A = n(264750).f,
    C = n(522169),
    N = n(920029).forEach,
    P = n(108015),
    R = n(573078),
    D = n(117895),
    w = n(840991),
    x = n(335024),
    L = n(199838),
    j = n(176682),
    M = L.get,
    k = L.set,
    U = L.enforce,
    G = D.f,
    Z = w.f,
    B = i.RangeError,
    F = c.ArrayBuffer,
    V = F.prototype,
    H = c.DataView,
    Y = l.NATIVE_ARRAY_BUFFER_VIEWS,
    W = l.TYPED_ARRAY_TAG,
    K = l.TypedArray,
    z = l.TypedArrayPrototype,
    q = l.isTypedArray,
    Q = "BYTES_PER_ELEMENT",
    X = "Wrong length",
    J = function (e, t) {
        R(e, t, {
            configurable: !0,
            get: function () {
                return M(this)[t];
            },
        });
    },
    $ = function (e) {
        var t;
        return I(V, e) || "ArrayBuffer" === (t = y(e)) || "SharedArrayBuffer" === t;
    },
    ee = function (e, t) {
        return q(e) && !v(t) && t in e && p(+t) && t >= 0;
    },
    et = function (e, t) {
        return ee(e, (t = E(t))) ? d(2, e[t]) : Z(e, t);
    },
    en = function (e, t, n) {
        return ee(e, (t = E(t))) &&
            O(n) &&
            b(n, "value") &&
            !b(n, "get") &&
            !b(n, "set") &&
            !n.configurable &&
            (!b(n, "writable") || n.writable) &&
            (!b(n, "enumerable") || n.enumerable)
            ? ((e[t] = n.value), e)
            : G(e, t, n);
    };
o
    ? (Y || ((w.f = et), (D.f = en), J(z, "buffer"), J(z, "byteOffset"), J(z, "byteLength"), J(z, "length")),
      r(
          {
              target: "Object",
              stat: !0,
              forced: !Y,
          },
          {
              getOwnPropertyDescriptor: et,
              defineProperty: en,
          },
      ),
      (e.exports = function (e, t, n) {
          var o = e.match(/\d+/)[0] / 8,
              l = e + (n ? "Clamped" : "") + "Array",
              c = "get" + e,
              d = "set" + e,
              p = i[l],
              E = p,
              b = E && E.prototype,
              y = {},
              v = function (e, t) {
                  var n = M(e);
                  return n.view[c](t * o + n.byteOffset, !0);
              },
              I = function (e, t, r) {
                  var i = M(e);
                  i.view[d](t * o + i.byteOffset, n ? g(r) : r, !0);
              },
              R = function (e, t) {
                  G(e, t, {
                      get: function () {
                          return v(this, t);
                      },
                      set: function (e) {
                          return I(this, t, e);
                      },
                      enumerable: !0,
                  });
              };
          Y
              ? s &&
                ((E = t(function (e, t, n, r) {
                    return (
                        u(e, b),
                        j(
                            (function () {
                                return O(t)
                                    ? $(t)
                                        ? void 0 !== r
                                            ? new p(t, h(n, o), r)
                                            : void 0 !== n
                                              ? new p(t, h(n, o))
                                              : new p(t)
                                        : q(t)
                                          ? x(E, t)
                                          : a(C, E, t)
                                    : new p(m(t));
                            })(),
                            e,
                            E,
                        )
                    );
                })),
                T && T(E, K),
                N(A(p), function (e) {
                    e in E || f(E, e, p[e]);
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
                        if ($(t)) {
                            (i = t), (d = h(n, o));
                            var f = t.byteLength;
                            if (void 0 === r) {
                                if (f % o || (s = f - d) < 0) throw new B(X);
                            } else if ((s = _(r) * o) + d > f) throw new B(X);
                            l = s / o;
                        } else if (q(t)) return x(E, t);
                        else return a(C, E, t);
                    else i = new F((s = (l = m(t)) * o));
                    for (
                        k(e, {
                            buffer: i,
                            byteOffset: d,
                            byteLength: s,
                            length: l,
                            view: new H(i),
                        });
                        c < l;
                    )
                        R(e, c++);
                })),
                T && T(E, K),
                (b = E.prototype = S(z))),
              b.constructor !== E && f(b, "constructor", E),
              (U(b).TypedArrayConstructor = E),
              W && f(b, W, l);
          var D = E !== p;
          (y[l] = E),
              r(
                  {
                      global: !0,
                      constructor: !0,
                      forced: D,
                      sham: !Y,
                  },
                  y,
              ),
              Q in E || f(E, Q, o),
              Q in b || f(b, Q, o),
              P(l);
      }))
    : (e.exports = function () {});
