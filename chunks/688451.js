function r(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
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
function i(e) {
    return !!e && !!e[Y];
}
function o(e) {
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
            !!e[W] ||
            !!(null == (t = e.constructor) ? void 0 : t[W]) ||
            f(e) ||
            _(e))
    );
}
function a(e, t, n) {
    void 0 === n && (n = !1),
        0 === s(e)
            ? (n ? Object.keys : q)(e).forEach(function (r) {
                  (n && 'symbol' == typeof r) || t(r, e[r], e);
              })
            : e.forEach(function (n, r) {
                  return t(r, n, e);
              });
}
function s(e) {
    var t = e[Y];
    return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : f(e) ? 2 : 3 * !!_(e);
}
function l(e, t) {
    return 2 === s(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function c(e, t) {
    return 2 === s(e) ? e.get(t) : e[t];
}
function u(e, t, n) {
    var r = s(e);
    2 === r ? e.set(t, n) : 3 === r ? e.add(n) : (e[t] = n);
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
    delete t[Y];
    for (var n = q(t), r = 0; r < n.length; r++) {
        var i = n[r],
            o = t[i];
        !1 === o.writable && ((o.writable = !0), (o.configurable = !0)),
            (o.get || o.set) &&
                (t[i] = {
                    configurable: !0,
                    writable: !0,
                    enumerable: o.enumerable,
                    value: e[i]
                });
    }
    return Object.create(Object.getPrototypeOf(e), t);
}
function m(e, t) {
    return (
        void 0 === t && (t = !1),
        E(e) ||
            i(e) ||
            !o(e) ||
            (s(e) > 1 && (e.set = e.add = e.clear = e.delete = g),
            Object.freeze(e),
            t &&
                a(
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
    r(2);
}
function E(e) {
    return null == e || 'object' != typeof e || Object.isFrozen(e);
}
function b(e) {
    var t = X[e];
    return t || r(18, e), t;
}
function y(e, t) {
    X[e] || (X[e] = t);
}
function v() {
    return G;
}
function O(e, t) {
    t && (b('Patches'), (e.u = []), (e.s = []), (e.v = t));
}
function I(e) {
    S(e), e.p.forEach(N), (e.p = null);
}
function S(e) {
    e === G && (G = e.l);
}
function T(e) {
    return (G = {
        p: [],
        l: G,
        h: e,
        m: !0,
        _: 0
    });
}
function N(e) {
    var t = e[Y];
    0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
}
function A(e, t) {
    t._ = t.p.length;
    var n = t.p[0],
        i = void 0 !== e && e !== n;
    return t.h.O || b('ES5').S(t, e, i), i ? (n[Y].P && (I(t), r(4)), o(e) && ((e = C(t, e)), t.l || P(t, e)), t.u && b('Patches').M(n[Y].t, e, t.u, t.s)) : (e = C(t, n, [])), I(t), t.u && t.v(t.u, t.s), e !== H ? e : void 0;
}
function C(e, t, n) {
    if (E(t)) return t;
    var r = t[Y];
    if (!r)
        return (
            a(
                t,
                function (i, o) {
                    return R(e, r, t, i, o, n);
                },
                !0
            ),
            t
        );
    if (r.A !== e) return t;
    if (!r.P) return P(e, r.t, !0), r.t;
    if (!r.I) {
        (r.I = !0), r.A._--;
        var i = 4 === r.i || 5 === r.i ? (r.o = h(r.k)) : r.o,
            o = i,
            s = !1;
        3 === r.i && ((o = new Set(i)), i.clear(), (s = !0)),
            a(o, function (t, o) {
                return R(e, r, i, t, o, n, s);
            }),
            P(e, i, !1),
            n && e.u && b('Patches').N(r, n, e.u, e.s);
    }
    return r.o;
}
function R(e, t, n, r, a, s, c) {
    if (i(a)) {
        var d = C(e, a, s && t && 3 !== t.i && !l(t.R, r) ? s.concat(r) : void 0);
        if ((u(n, r, d), !i(d))) return;
        e.m = !1;
    } else c && n.add(a);
    if (o(a) && !E(a)) {
        if (!e.h.D && e._ < 1) return;
        C(e, a), (t && t.A.l) || P(e, a);
    }
}
function P(e, t, n) {
    void 0 === n && (n = !1), !e.l && e.h.D && e.m && m(t, n);
}
function w(e, t) {
    var n = e[Y];
    return (n ? p(n) : e)[t];
}
function D(e, t) {
    if (t in e)
        for (var n = Object.getPrototypeOf(e); n; ) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r) return r;
            n = Object.getPrototypeOf(n);
        }
}
function L(e) {
    e.P || ((e.P = !0), e.l && L(e.l));
}
function x(e) {
    e.o || (e.o = h(e.t));
}
function M(e, t, n) {
    var r = f(t)
        ? b('MapSet').F(t, n)
        : _(t)
          ? b('MapSet').T(t, n)
          : e.O
            ? (function (e, t) {
                  var n = Array.isArray(e),
                      r = {
                          i: +!!n,
                          A: t ? t.A : v(),
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
                      i = r,
                      o = J;
                  n && ((i = [r]), (o = $));
                  var a = Proxy.revocable(i, o),
                      s = a.revoke,
                      l = a.proxy;
                  return (r.k = l), (r.j = s), l;
              })(t, n)
            : b('ES5').J(t, n);
    return (n ? n.A : v()).p.push(r), r;
}
function k(e) {
    return (
        i(e) || r(22, e),
        (function e(t) {
            if (!o(t)) return t;
            var n,
                r = t[Y],
                i = s(t);
            if (r) {
                if (!r.P && (r.i < 4 || !b('ES5').K(r))) return r.t;
                (r.I = !0), (n = j(t, i)), (r.I = !1);
            } else n = j(t, i);
            return (
                a(n, function (t, i) {
                    (r && c(r.t, t) === i) || u(n, t, e(i));
                }),
                3 === i ? new Set(n) : n
            );
        })(e)
    );
}
function j(e, t) {
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
    _x: () => er,
    mv: () => i
});
var U,
    G,
    B = 'undefined' != typeof Symbol && 'symbol' == typeof Symbol('x'),
    F = 'undefined' != typeof Map,
    V = 'undefined' != typeof Set,
    Z = 'undefined' != typeof Proxy && void 0 !== Proxy.revocable && 'undefined' != typeof Reflect,
    H = B ? Symbol.for('immer-nothing') : (((U = {})['immer-nothing'] = !0), U),
    W = B ? Symbol.for('immer-draftable') : '__$immer_draftable',
    Y = B ? Symbol.for('immer-state') : '__$immer_state',
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
            if (t === Y) return e;
            var n = p(e);
            if (!l(n, t))
                return (function (e, t, n) {
                    var r,
                        i = D(t, n);
                    return i ? ('value' in i ? i.value : null == (r = i.get) ? void 0 : r.call(e.k)) : void 0;
                })(e, n, t);
            var r = n[t];
            return e.I || !o(r) ? r : r === w(e.t, t) ? (x(e), (e.o[t] = M(e.A.h, r, e))) : r;
        },
        has: function (e, t) {
            return t in p(e);
        },
        ownKeys: function (e) {
            return Reflect.ownKeys(p(e));
        },
        set: function (e, t, n) {
            var r = D(p(e), t);
            if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
            if (!e.P) {
                var i = w(p(e), t),
                    o = null == i ? void 0 : i[Y];
                if (o && o.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
                if (d(n, i) && (void 0 !== n || l(e.t, t))) return !0;
                x(e), L(e);
            }
            return (e.o[t] === n && (void 0 !== n || t in e.o)) || (Number.isNaN(n) && Number.isNaN(e.o[t])) || ((e.o[t] = n), (e.R[t] = !0)), !0;
        },
        deleteProperty: function (e, t) {
            return void 0 !== w(e.t, t) || t in e.t ? ((e.R[t] = !1), x(e), L(e)) : delete e.R[t], e.o && delete e.o[t], !0;
        },
        getOwnPropertyDescriptor: function (e, t) {
            var n = p(e),
                r = Reflect.getOwnPropertyDescriptor(n, t);
            return r
                ? {
                      writable: !0,
                      configurable: 1 !== e.i || 'length' !== t,
                      enumerable: r.enumerable,
                      value: n[t]
                  }
                : r;
        },
        defineProperty: function () {
            r(11);
        },
        getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t);
        },
        setPrototypeOf: function () {
            r(12);
        }
    },
    $ = {};
a(J, function (e, t) {
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
            (this.O = Z),
                (this.D = !0),
                (this.produce = function (e, n, i) {
                    if ('function' == typeof e && 'function' != typeof n) {
                        var a,
                            s = n;
                        n = e;
                        var l = t;
                        return function (e) {
                            var t = this;
                            void 0 === e && (e = s);
                            for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
                            return l.produce(e, function (e) {
                                var r;
                                return (r = n).call.apply(r, [t, e].concat(i));
                            });
                        };
                    }
                    if (('function' != typeof n && r(6), void 0 !== i && 'function' != typeof i && r(7), o(e))) {
                        var c = T(t),
                            u = M(t, e, void 0),
                            d = !0;
                        try {
                            (a = n(u)), (d = !1);
                        } finally {
                            d ? I(c) : S(c);
                        }
                        return 'undefined' != typeof Promise && a instanceof Promise
                            ? a.then(
                                  function (e) {
                                      return O(c, i), A(e, c);
                                  },
                                  function (e) {
                                      throw (I(c), e);
                                  }
                              )
                            : (O(c, i), A(a, c));
                    }
                    if (!e || 'object' != typeof e) {
                        if ((void 0 === (a = n(e)) && (a = e), a === H && (a = void 0), t.D && m(a, !0), i)) {
                            var f = [],
                                _ = [];
                            b('Patches').M(e, a, f, _), i(f, _);
                        }
                        return a;
                    }
                    r(21, e);
                }),
                (this.produceWithPatches = function (e, n) {
                    if ('function' == typeof e)
                        return function (n) {
                            for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
                            return t.produceWithPatches(n, function (t) {
                                return e.apply(void 0, [t].concat(i));
                            });
                        };
                    var r,
                        i,
                        o = t.produce(e, n, function (e, t) {
                            (r = e), (i = t);
                        });
                    return 'undefined' != typeof Promise && o instanceof Promise
                        ? o.then(function (e) {
                              return [e, r, i];
                          })
                        : [o, r, i];
                }),
                'boolean' == typeof (null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies),
                'boolean' == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze);
        }
        var t = e.prototype;
        return (
            (t.createDraft = function (e) {
                o(e) || r(8), i(e) && (e = k(e));
                var t = T(this),
                    n = M(this, e, void 0);
                return (n[Y].C = !0), S(t), n;
            }),
            (t.finishDraft = function (e, t) {
                var n = (e && e[Y]).A;
                return O(n, t), A(void 0, n);
            }),
            (t.setAutoFreeze = function (e) {
                this.D = e;
            }),
            (t.setUseProxies = function (e) {
                e && !Z && r(20), (this.O = e);
            }),
            (t.applyPatches = function (e, t) {
                for (n = t.length - 1; n >= 0; n--) {
                    var n,
                        r = t[n];
                    if (0 === r.path.length && 'replace' === r.op) {
                        e = r.value;
                        break;
                    }
                }
                n > -1 && (t = t.slice(n + 1));
                var o = b('Patches').$;
                return i(e)
                    ? o(e, t)
                    : this.produce(e, function (e) {
                          return o(e, t);
                      });
            }),
            e
        );
    })())(),
    et = ee.produce,
    en = (ee.produceWithPatches.bind(ee), ee.setAutoFreeze.bind(ee), ee.setUseProxies.bind(ee), ee.applyPatches.bind(ee), ee.createDraft.bind(ee)),
    er = ee.finishDraft.bind(ee);
