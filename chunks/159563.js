"use strict";
function r(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    throw Error(
        "[Immer] minified error nr: " +
            e +
            (n.length
                ? " " +
                  n
                      .map(function (e) {
                          return "'" + e + "'";
                      })
                      .join(",")
                : "") +
            ". Find the full error at: https://bit.ly/3cXEKWf",
    );
}
function i(e) {
    return !!e && !!e[$];
}
function a(e) {
    var t;
    return (
        !!e &&
        ((function (e) {
            if (!e || "object" != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            if (null === t) return !0;
            var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
            return n === Object || ("function" == typeof n && Function.toString.call(n) === q);
        })(e) ||
            Array.isArray(e) ||
            !!e[K] ||
            !!(null == (t = e.constructor) ? void 0 : t[K]) ||
            _(e) ||
            f(e))
    );
}
function s(e, t, n) {
    void 0 === n && (n = !1),
        0 === o(e)
            ? (n ? Object.keys : X)(e).forEach(function (r) {
                  (n && "symbol" == typeof r) || t(r, e[r], e);
              })
            : e.forEach(function (n, r) {
                  return t(r, n, e);
              });
}
function o(e) {
    var t = e[$];
    return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : _(e) ? 2 : 3 * !!f(e);
}
function l(e, t) {
    return 2 === o(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function u(e, t) {
    return 2 === o(e) ? e.get(t) : e[t];
}
function c(e, t, n) {
    var r = o(e);
    2 === r ? e.set(t, n) : 3 === r ? e.add(n) : (e[t] = n);
}
function d(e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
}
function _(e) {
    return j && e instanceof Map;
}
function f(e) {
    return H && e instanceof Set;
}
function h(e) {
    return e.o || e.t;
}
function p(e) {
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    var t = Z(e);
    delete t[$];
    for (var n = X(t), r = 0; r < n.length; r++) {
        var i = n[r],
            a = t[i];
        !1 === a.writable && ((a.writable = !0), (a.configurable = !0)),
            (a.get || a.set) && (t[i] = { configurable: !0, writable: !0, enumerable: a.enumerable, value: e[i] });
    }
    return Object.create(Object.getPrototypeOf(e), t);
}
function g(e, t) {
    return (
        void 0 === t && (t = !1),
        A(e) ||
            i(e) ||
            !a(e) ||
            (o(e) > 1 && (e.set = e.add = e.clear = e.delete = E),
            Object.freeze(e),
            t &&
                s(
                    e,
                    function (e, t) {
                        return g(t, !0);
                    },
                    !0,
                )),
        e
    );
}
function E() {
    r(2);
}
function A(e) {
    return null == e || "object" != typeof e || Object.isFrozen(e);
}
function I(e) {
    var t = Q[e];
    return t || r(18, e), t;
}
function T(e, t) {
    Q[e] || (Q[e] = t);
}
function y() {
    return V;
}
function S(e, t) {
    t && (I("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function v(e) {
    C(e), e.p.forEach(N), (e.p = null);
}
function C(e) {
    e === V && (V = e.l);
}
function b(e) {
    return (V = { p: [], l: V, h: e, m: !0, _: 0 });
}
function N(e) {
    var t = e[$];
    0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
}
function R(e, t) {
    t._ = t.p.length;
    var n = t.p[0],
        i = void 0 !== e && e !== n;
    return (
        t.h.O || I("ES5").S(t, e, i),
        i
            ? (n[$].P && (v(t), r(4)),
              a(e) && ((e = O(t, e)), t.l || L(t, e)),
              t.u && I("Patches").M(n[$].t, e, t.u, t.s))
            : (e = O(t, n, [])),
        v(t),
        t.u && t.v(t.u, t.s),
        e !== W ? e : void 0
    );
}
function O(e, t, n) {
    if (A(t)) return t;
    var r = t[$];
    if (!r)
        return (
            s(
                t,
                function (i, a) {
                    return D(e, r, t, i, a, n);
                },
                !0,
            ),
            t
        );
    if (r.A !== e) return t;
    if (!r.P) return L(e, r.t, !0), r.t;
    if (!r.I) {
        (r.I = !0), r.A._--;
        var i = 4 === r.i || 5 === r.i ? (r.o = p(r.k)) : r.o,
            a = i,
            o = !1;
        3 === r.i && ((a = new Set(i)), i.clear(), (o = !0)),
            s(a, function (t, a) {
                return D(e, r, i, t, a, n, o);
            }),
            L(e, i, !1),
            n && e.u && I("Patches").N(r, n, e.u, e.s);
    }
    return r.o;
}
function D(e, t, n, r, s, o, u) {
    if (i(s)) {
        var d = O(e, s, o && t && 3 !== t.i && !l(t.R, r) ? o.concat(r) : void 0);
        if ((c(n, r, d), !i(d))) return;
        e.m = !1;
    } else u && n.add(s);
    if (a(s) && !A(s)) {
        if (!e.h.D && e._ < 1) return;
        O(e, s), (t && t.A.l) || L(e, s);
    }
}
function L(e, t, n) {
    void 0 === n && (n = !1), !e.l && e.h.D && e.m && g(t, n);
}
function w(e, t) {
    var n = e[$];
    return (n ? h(n) : e)[t];
}
function x(e, t) {
    if (t in e)
        for (var n = Object.getPrototypeOf(e); n; ) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r) return r;
            n = Object.getPrototypeOf(n);
        }
}
function P(e) {
    e.P || ((e.P = !0), e.l && P(e.l));
}
function M(e) {
    e.o || (e.o = p(e.t));
}
function k(e, t, n) {
    var r = _(t)
        ? I("MapSet").F(t, n)
        : f(t)
          ? I("MapSet").T(t, n)
          : e.O
            ? (function (e, t) {
                  var n = Array.isArray(e),
                      r = {
                          i: +!!n,
                          A: t ? t.A : y(),
                          P: !1,
                          I: !1,
                          R: {},
                          l: t,
                          t: e,
                          k: null,
                          o: null,
                          j: null,
                          C: !1,
                      },
                      i = r,
                      a = J;
                  n && ((i = [r]), (a = ee));
                  var s = Proxy.revocable(i, a),
                      o = s.revoke,
                      l = s.proxy;
                  return (r.k = l), (r.j = o), l;
              })(t, n)
            : I("ES5").J(t, n);
    return (n ? n.A : y()).p.push(r), r;
}
function U(e) {
    return (
        i(e) || r(22, e),
        (function e(t) {
            if (!a(t)) return t;
            var n,
                r = t[$],
                i = o(t);
            if (r) {
                if (!r.P && (r.i < 4 || !I("ES5").K(r))) return r.t;
                (r.I = !0), (n = G(t, i)), (r.I = !1);
            } else n = G(t, i);
            return (
                s(n, function (t, i) {
                    (r && u(r.t, t) === i) || c(n, t, e(i));
                }),
                3 === i ? new Set(n) : n
            );
        })(e)
    );
}
function G(e, t) {
    switch (t) {
        case 2:
            return new Map(e);
        case 3:
            return Array.from(e);
    }
    return p(e);
}
n.d(t, { Qx: () => i, jM: () => en, mq: () => er, vD: () => ei });
var F,
    V,
    B = "u" > typeof Symbol && "symbol" == typeof Symbol("x"),
    j = "u" > typeof Map,
    H = "u" > typeof Set,
    Y = "u" > typeof Proxy && void 0 !== Proxy.revocable && "u" > typeof Reflect,
    W = B ? Symbol.for("immer-nothing") : (((F = {})["immer-nothing"] = !0), F),
    K = B ? Symbol.for("immer-draftable") : "__$immer_draftable",
    $ = B ? Symbol.for("immer-state") : "__$immer_state",
    z = ("u" > typeof Symbol && Symbol.iterator) || "@@iterator",
    q = "" + Object.prototype.constructor,
    X =
        "u" > typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
              ? function (e) {
                    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
                }
              : Object.getOwnPropertyNames,
    Z =
        Object.getOwnPropertyDescriptors ||
        function (e) {
            var t = {};
            return (
                X(e).forEach(function (n) {
                    t[n] = Object.getOwnPropertyDescriptor(e, n);
                }),
                t
            );
        },
    Q = {},
    J = {
        get: function (e, t) {
            if (t === $) return e;
            var n = h(e);
            if (!l(n, t))
                return (function (e, t, n) {
                    var r,
                        i = x(t, n);
                    return i ? ("value" in i ? i.value : null == (r = i.get) ? void 0 : r.call(e.k)) : void 0;
                })(e, n, t);
            var r = n[t];
            return e.I || !a(r) ? r : r === w(e.t, t) ? (M(e), (e.o[t] = k(e.A.h, r, e))) : r;
        },
        has: function (e, t) {
            return t in h(e);
        },
        ownKeys: function (e) {
            return Reflect.ownKeys(h(e));
        },
        set: function (e, t, n) {
            var r = x(h(e), t);
            if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
            if (!e.P) {
                var i = w(h(e), t),
                    a = null == i ? void 0 : i[$];
                if (a && a.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
                if (d(n, i) && (void 0 !== n || l(e.t, t))) return !0;
                M(e), P(e);
            }
            return (
                (e.o[t] === n && (void 0 !== n || t in e.o)) ||
                    (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
                    ((e.o[t] = n), (e.R[t] = !0)),
                !0
            );
        },
        deleteProperty: function (e, t) {
            return (
                void 0 !== w(e.t, t) || t in e.t ? ((e.R[t] = !1), M(e), P(e)) : delete e.R[t], e.o && delete e.o[t], !0
            );
        },
        getOwnPropertyDescriptor: function (e, t) {
            var n = h(e),
                r = Reflect.getOwnPropertyDescriptor(n, t);
            return r
                ? { writable: !0, configurable: 1 !== e.i || "length" !== t, enumerable: r.enumerable, value: n[t] }
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
        },
    },
    ee = {};
s(J, function (e, t) {
    ee[e] = function () {
        return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
    };
}),
    (ee.deleteProperty = function (e, t) {
        return ee.set.call(this, e, t, void 0);
    }),
    (ee.set = function (e, t, n) {
        return J.set.call(this, e[0], t, n, e[0]);
    });
var et = new ((function () {
        function e(e) {
            var t = this;
            (this.O = Y),
                (this.D = !0),
                (this.produce = function (e, n, i) {
                    if ("function" == typeof e && "function" != typeof n) {
                        var s,
                            o = n;
                        n = e;
                        var l = t;
                        return function (e) {
                            var t = this;
                            void 0 === e && (e = o);
                            for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
                                i[a - 1] = arguments[a];
                            return l.produce(e, function (e) {
                                var r;
                                return (r = n).call.apply(r, [t, e].concat(i));
                            });
                        };
                    }
                    if (("function" != typeof n && r(6), void 0 !== i && "function" != typeof i && r(7), a(e))) {
                        var u = b(t),
                            c = k(t, e, void 0),
                            d = !0;
                        try {
                            (s = n(c)), (d = !1);
                        } finally {
                            d ? v(u) : C(u);
                        }
                        return "u" > typeof Promise && s instanceof Promise
                            ? s.then(
                                  function (e) {
                                      return S(u, i), R(e, u);
                                  },
                                  function (e) {
                                      throw (v(u), e);
                                  },
                              )
                            : (S(u, i), R(s, u));
                    }
                    if (!e || "object" != typeof e) {
                        if ((void 0 === (s = n(e)) && (s = e), s === W && (s = void 0), t.D && g(s, !0), i)) {
                            var _ = [],
                                f = [];
                            I("Patches").M(e, s, _, f), i(_, f);
                        }
                        return s;
                    }
                    r(21, e);
                }),
                (this.produceWithPatches = function (e, n) {
                    if ("function" == typeof e)
                        return function (n) {
                            for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
                                i[a - 1] = arguments[a];
                            return t.produceWithPatches(n, function (t) {
                                return e.apply(void 0, [t].concat(i));
                            });
                        };
                    var r,
                        i,
                        a = t.produce(e, n, function (e, t) {
                            (r = e), (i = t);
                        });
                    return "u" > typeof Promise && a instanceof Promise
                        ? a.then(function (e) {
                              return [e, r, i];
                          })
                        : [a, r, i];
                }),
                "boolean" == typeof (null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies),
                "boolean" == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze);
        }
        var t = e.prototype;
        return (
            (t.createDraft = function (e) {
                a(e) || r(8), i(e) && (e = U(e));
                var t = b(this),
                    n = k(this, e, void 0);
                return (n[$].C = !0), C(t), n;
            }),
            (t.finishDraft = function (e, t) {
                var n = (e && e[$]).A;
                return S(n, t), R(void 0, n);
            }),
            (t.setAutoFreeze = function (e) {
                this.D = e;
            }),
            (t.setUseProxies = function (e) {
                e && !Y && r(20), (this.O = e);
            }),
            (t.applyPatches = function (e, t) {
                for (n = t.length - 1; n >= 0; n--) {
                    var n,
                        r = t[n];
                    if (0 === r.path.length && "replace" === r.op) {
                        e = r.value;
                        break;
                    }
                }
                n > -1 && (t = t.slice(n + 1));
                var a = I("Patches").$;
                return i(e)
                    ? a(e, t)
                    : this.produce(e, function (e) {
                          return a(e, t);
                      });
            }),
            e
        );
    })())(),
    en = et.produce,
    er =
        (et.produceWithPatches.bind(et),
        et.setAutoFreeze.bind(et),
        et.setUseProxies.bind(et),
        et.applyPatches.bind(et),
        et.createDraft.bind(et)),
    ei = et.finishDraft.bind(et);
