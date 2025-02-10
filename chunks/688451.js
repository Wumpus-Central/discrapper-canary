function i(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
    throw Error(
        '[Immer] minified error nr: ' +
            e +
            (n.length
                ? ' ' +
                  n
                      .map(function (e) {
                          return "'" + e + "'";
                      })
                      .join(',')
                : '') +
            '. Find the full error at: https://bit.ly/3cXEKWf'
    );
}
function r(e) {
    return !!e && !!e[W];
}
function a(e) {
    var t;
    return (
        !!e &&
        ((function (e) {
            if (!e || 'object' != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            if (null === t) return !0;
            var n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
            return n === Object || ('function' == typeof n && Function.toString.call(n) === z);
        })(e) ||
            Array.isArray(e) ||
            !!e[Y] ||
            !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[Y]) ||
            f(e) ||
            _(e))
    );
}
function s(e, t, n) {
    void 0 === n && (n = !1),
        0 === o(e)
            ? (n ? Object.keys : q)(e).forEach(function (i) {
                  (n && 'symbol' == typeof i) || t(i, e[i], e);
              })
            : e.forEach(function (n, i) {
                  return t(i, n, e);
              });
}
function o(e) {
    var t = e[W];
    return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : f(e) ? 2 : _(e) ? 3 : 0;
}
function l(e, t) {
    return 2 === o(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function u(e, t) {
    return 2 === o(e) ? e.get(t) : e[t];
}
function c(e, t, n) {
    var i = o(e);
    2 === i ? e.set(t, n) : 3 === i ? e.add(n) : (e[t] = n);
}
function d(e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
}
function f(e) {
    return F && e instanceof Map;
}
function _(e) {
    return V && e instanceof Set;
}
function p(e) {
    return e.o || e.t;
}
function h(e) {
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    var t = Q(e);
    delete t[W];
    for (var n = q(t), i = 0; i < n.length; i++) {
        var r = n[i],
            a = t[r];
        !1 === a.writable && ((a.writable = !0), (a.configurable = !0)),
            (a.get || a.set) &&
                (t[r] = {
                    configurable: !0,
                    writable: !0,
                    enumerable: a.enumerable,
                    value: e[r]
                });
    }
    return Object.create(Object.getPrototypeOf(e), t);
}
function m(e, t) {
    return (
        void 0 === t && (t = !1),
        E(e) ||
            r(e) ||
            !a(e) ||
            (o(e) > 1 && (e.set = e.add = e.clear = e.delete = g),
            Object.freeze(e),
            t &&
                s(
                    e,
                    function (e, t) {
                        return m(t, !0);
                    },
                    !0
                )),
        e
    );
}
function g() {
    i(2);
}
function E(e) {
    return null == e || 'object' != typeof e || Object.isFrozen(e);
}
function v(e) {
    var t = X[e];
    return t || i(18, e), t;
}
function y(e, t) {
    X[e] || (X[e] = t);
}
function I() {
    return B;
}
function T(e, t) {
    t && (v('Patches'), (e.u = []), (e.s = []), (e.v = t));
}
function b(e) {
    S(e), e.p.forEach(N), (e.p = null);
}
function S(e) {
    e === B && (B = e.l);
}
function A(e) {
    return (B = {
        p: [],
        l: B,
        h: e,
        m: !0,
        _: 0
    });
}
function N(e) {
    var t = e[W];
    0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
}
function C(e, t) {
    t._ = t.p.length;
    var n = t.p[0],
        r = void 0 !== e && e !== n;
    return t.h.O || v('ES5').S(t, e, r), r ? (n[W].P && (b(t), i(4)), a(e) && ((e = R(t, e)), t.l || D(t, e)), t.u && v('Patches').M(n[W].t, e, t.u, t.s)) : (e = R(t, n, [])), b(t), t.u && t.v(t.u, t.s), e !== H ? e : void 0;
}
function R(e, t, n) {
    if (E(t)) return t;
    var i = t[W];
    if (!i)
        return (
            s(
                t,
                function (r, a) {
                    return O(e, i, t, r, a, n);
                },
                !0
            ),
            t
        );
    if (i.A !== e) return t;
    if (!i.P) return D(e, i.t, !0), i.t;
    if (!i.I) {
        (i.I = !0), i.A._--;
        var r = 4 === i.i || 5 === i.i ? (i.o = h(i.k)) : i.o,
            a = r,
            o = !1;
        3 === i.i && ((a = new Set(r)), r.clear(), (o = !0)),
            s(a, function (t, a) {
                return O(e, i, r, t, a, n, o);
            }),
            D(e, r, !1),
            n && e.u && v('Patches').N(i, n, e.u, e.s);
    }
    return i.o;
}
function O(e, t, n, i, s, o, u) {
    if (r(s)) {
        var d = R(e, s, o && t && 3 !== t.i && !l(t.R, i) ? o.concat(i) : void 0);
        if ((c(n, i, d), !r(d))) return;
        e.m = !1;
    } else u && n.add(s);
    if (a(s) && !E(s)) {
        if (!e.h.D && e._ < 1) return;
        R(e, s), (t && t.A.l) || D(e, s);
    }
}
function D(e, t, n) {
    void 0 === n && (n = !1), !e.l && e.h.D && e.m && m(t, n);
}
function L(e, t) {
    var n = e[W];
    return (n ? p(n) : e)[t];
}
function x(e, t) {
    if (t in e)
        for (var n = Object.getPrototypeOf(e); n; ) {
            var i = Object.getOwnPropertyDescriptor(n, t);
            if (i) return i;
            n = Object.getPrototypeOf(n);
        }
}
function w(e) {
    e.P || ((e.P = !0), e.l && w(e.l));
}
function P(e) {
    e.o || (e.o = h(e.t));
}
function M(e, t, n) {
    var i = f(t)
        ? v('MapSet').F(t, n)
        : _(t)
          ? v('MapSet').T(t, n)
          : e.O
            ? (function (e, t) {
                  var n = Array.isArray(e),
                      i = {
                          i: n ? 1 : 0,
                          A: t ? t.A : I(),
                          P: !1,
                          I: !1,
                          R: {},
                          l: t,
                          t: e,
                          k: null,
                          o: null,
                          j: null,
                          C: !1
                      },
                      r = i,
                      a = J;
                  n && ((r = [i]), (a = $));
                  var s = Proxy.revocable(r, a),
                      o = s.revoke,
                      l = s.proxy;
                  return (i.k = l), (i.j = o), l;
              })(t, n)
            : v('ES5').J(t, n);
    return (n ? n.A : I()).p.push(i), i;
}
function k(e) {
    return (
        r(e) || i(22, e),
        (function e(t) {
            if (!a(t)) return t;
            var n,
                i = t[W],
                r = o(t);
            if (i) {
                if (!i.P && (i.i < 4 || !v('ES5').K(i))) return i.t;
                (i.I = !0), (n = U(t, r)), (i.I = !1);
            } else n = U(t, r);
            return (
                s(n, function (t, r) {
                    (i && u(i.t, t) === r) || c(n, t, e(r));
                }),
                3 === r ? new Set(n) : n
            );
        })(e)
    );
}
function U(e, t) {
    switch (t) {
        case 2:
            return new Map(e);
        case 3:
            return Array.from(e);
    }
    return h(e);
}
n.d(t, {
    P2: () => en,
    Uy: () => et,
    _x: () => ei,
    mv: () => r
});
var G,
    B,
    Z = 'undefined' != typeof Symbol && 'symbol' == typeof Symbol('x'),
    F = 'undefined' != typeof Map,
    V = 'undefined' != typeof Set,
    j = 'undefined' != typeof Proxy && void 0 !== Proxy.revocable && 'undefined' != typeof Reflect,
    H = Z ? Symbol.for('immer-nothing') : (((G = {})['immer-nothing'] = !0), G),
    Y = Z ? Symbol.for('immer-draftable') : '__$immer_draftable',
    W = Z ? Symbol.for('immer-state') : '__$immer_state',
    K = ('undefined' != typeof Symbol && Symbol.iterator) || '@@iterator',
    z = '' + Object.prototype.constructor,
    q =
        'undefined' != typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
              ? function (e) {
                    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
                }
              : Object.getOwnPropertyNames,
    Q =
        Object.getOwnPropertyDescriptors ||
        function (e) {
            var t = {};
            return (
                q(e).forEach(function (n) {
                    t[n] = Object.getOwnPropertyDescriptor(e, n);
                }),
                t
            );
        },
    X = {},
    J = {
        get: function (e, t) {
            if (t === W) return e;
            var n = p(e);
            if (!l(n, t))
                return (function (e, t, n) {
                    var i,
                        r = x(t, n);
                    return r ? ('value' in r ? r.value : null === (i = r.get) || void 0 === i ? void 0 : i.call(e.k)) : void 0;
                })(e, n, t);
            var i = n[t];
            return e.I || !a(i) ? i : i === L(e.t, t) ? (P(e), (e.o[t] = M(e.A.h, i, e))) : i;
        },
        has: function (e, t) {
            return t in p(e);
        },
        ownKeys: function (e) {
            return Reflect.ownKeys(p(e));
        },
        set: function (e, t, n) {
            var i = x(p(e), t);
            if (null == i ? void 0 : i.set) return i.set.call(e.k, n), !0;
            if (!e.P) {
                var r = L(p(e), t),
                    a = null == r ? void 0 : r[W];
                if (a && a.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
                if (d(n, r) && (void 0 !== n || l(e.t, t))) return !0;
                P(e), w(e);
            }
            return (e.o[t] === n && (void 0 !== n || t in e.o)) || (Number.isNaN(n) && Number.isNaN(e.o[t])) || ((e.o[t] = n), (e.R[t] = !0)), !0;
        },
        deleteProperty: function (e, t) {
            return void 0 !== L(e.t, t) || t in e.t ? ((e.R[t] = !1), P(e), w(e)) : delete e.R[t], e.o && delete e.o[t], !0;
        },
        getOwnPropertyDescriptor: function (e, t) {
            var n = p(e),
                i = Reflect.getOwnPropertyDescriptor(n, t);
            return i
                ? {
                      writable: !0,
                      configurable: 1 !== e.i || 'length' !== t,
                      enumerable: i.enumerable,
                      value: n[t]
                  }
                : i;
        },
        defineProperty: function () {
            i(11);
        },
        getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t);
        },
        setPrototypeOf: function () {
            i(12);
        }
    },
    $ = {};
s(J, function (e, t) {
    $[e] = function () {
        return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
    };
}),
    ($.deleteProperty = function (e, t) {
        return $.set.call(this, e, t, void 0);
    }),
    ($.set = function (e, t, n) {
        return J.set.call(this, e[0], t, n, e[0]);
    });
var ee = new ((function () {
        function e(e) {
            var t = this;
            (this.O = j),
                (this.D = !0),
                (this.produce = function (e, n, r) {
                    if ('function' == typeof e && 'function' != typeof n) {
                        var s,
                            o = n;
                        n = e;
                        var l = t;
                        return function (e) {
                            var t = this;
                            void 0 === e && (e = o);
                            for (var i = arguments.length, r = Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) r[a - 1] = arguments[a];
                            return l.produce(e, function (e) {
                                var i;
                                return (i = n).call.apply(i, [t, e].concat(r));
                            });
                        };
                    }
                    if (('function' != typeof n && i(6), void 0 !== r && 'function' != typeof r && i(7), a(e))) {
                        var u = A(t),
                            c = M(t, e, void 0),
                            d = !0;
                        try {
                            (s = n(c)), (d = !1);
                        } finally {
                            d ? b(u) : S(u);
                        }
                        return 'undefined' != typeof Promise && s instanceof Promise
                            ? s.then(
                                  function (e) {
                                      return T(u, r), C(e, u);
                                  },
                                  function (e) {
                                      throw (b(u), e);
                                  }
                              )
                            : (T(u, r), C(s, u));
                    }
                    if (!e || 'object' != typeof e) {
                        if ((void 0 === (s = n(e)) && (s = e), s === H && (s = void 0), t.D && m(s, !0), r)) {
                            var f = [],
                                _ = [];
                            v('Patches').M(e, s, f, _), r(f, _);
                        }
                        return s;
                    }
                    i(21, e);
                }),
                (this.produceWithPatches = function (e, n) {
                    if ('function' == typeof e)
                        return function (n) {
                            for (var i = arguments.length, r = Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) r[a - 1] = arguments[a];
                            return t.produceWithPatches(n, function (t) {
                                return e.apply(void 0, [t].concat(r));
                            });
                        };
                    var i,
                        r,
                        a = t.produce(e, n, function (e, t) {
                            (i = e), (r = t);
                        });
                    return 'undefined' != typeof Promise && a instanceof Promise
                        ? a.then(function (e) {
                              return [e, i, r];
                          })
                        : [a, i, r];
                }),
                'boolean' == typeof (null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies),
                'boolean' == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze);
        }
        var t = e.prototype;
        return (
            (t.createDraft = function (e) {
                a(e) || i(8), r(e) && (e = k(e));
                var t = A(this),
                    n = M(this, e, void 0);
                return (n[W].C = !0), S(t), n;
            }),
            (t.finishDraft = function (e, t) {
                var n = (e && e[W]).A;
                return T(n, t), C(void 0, n);
            }),
            (t.setAutoFreeze = function (e) {
                this.D = e;
            }),
            (t.setUseProxies = function (e) {
                e && !j && i(20), (this.O = e);
            }),
            (t.applyPatches = function (e, t) {
                for (n = t.length - 1; n >= 0; n--) {
                    var n,
                        i = t[n];
                    if (0 === i.path.length && 'replace' === i.op) {
                        e = i.value;
                        break;
                    }
                }
                n > -1 && (t = t.slice(n + 1));
                var a = v('Patches').$;
                return r(e)
                    ? a(e, t)
                    : this.produce(e, function (e) {
                          return a(e, t);
                      });
            }),
            e
        );
    })())(),
    et = ee.produce,
    en = (ee.produceWithPatches.bind(ee), ee.setAutoFreeze.bind(ee), ee.setUseProxies.bind(ee), ee.applyPatches.bind(ee), ee.createDraft.bind(ee)),
    ei = ee.finishDraft.bind(ee);
