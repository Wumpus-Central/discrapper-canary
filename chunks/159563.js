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
    return !!e && !!e[K];
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
            !!e[W] ||
            !!(null == (t = e.constructor) ? void 0 : t[W]) ||
            f(e) ||
            p(e))
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
    var t = e[K];
    return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : f(e) ? 2 : 3 * !!p(e);
}
function l(e, t) {
    return 2 === o(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function c(e, t) {
    return 2 === o(e) ? e.get(t) : e[t];
}
function u(e, t, n) {
    var r = o(e);
    2 === r ? e.set(t, n) : 3 === r ? e.add(n) : (e[t] = n);
}
function d(e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
}
function f(e) {
    return F && e instanceof Map;
}
function p(e) {
    return B && e instanceof Set;
}
function _(e) {
    return e.o || e.t;
}
function h(e) {
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    var t = Z(e);
    delete t[K];
    for (var n = X(t), r = 0; r < n.length; r++) {
        var i = n[r],
            a = t[i];
        !1 === a.writable && ((a.writable = !0), (a.configurable = !0)),
            (a.get || a.set) &&
                (t[i] = {
                    configurable: !0,
                    writable: !0,
                    enumerable: a.enumerable,
                    value: e[i],
                });
    }
    return Object.create(Object.getPrototypeOf(e), t);
}
function m(e, t) {
    return (
        void 0 === t && (t = !1),
        E(e) ||
            i(e) ||
            !a(e) ||
            (o(e) > 1 && (e.set = e.add = e.clear = e.delete = g),
            Object.freeze(e),
            t &&
                s(
                    e,
                    function (e, t) {
                        return m(t, !0);
                    },
                    !0,
                )),
        e
    );
}
function g() {
    r(2);
}
function E(e) {
    return null == e || "object" != typeof e || Object.isFrozen(e);
}
function b(e) {
    var t = Q[e];
    return t || r(18, e), t;
}
function y(e, t) {
    Q[e] || (Q[e] = t);
}
function O() {
    return G;
}
function A(e, t) {
    t && (b("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function v(e) {
    S(e), e.p.forEach(T), (e.p = null);
}
function S(e) {
    e === G && (G = e.l);
}
function I(e) {
    return (G = {
        p: [],
        l: G,
        h: e,
        m: !0,
        _: 0,
    });
}
function T(e) {
    var t = e[K];
    0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
}
function C(e, t) {
    t._ = t.p.length;
    var n = t.p[0],
        i = void 0 !== e && e !== n;
    return (
        t.h.O || b("ES5").S(t, e, i),
        i
            ? (n[K].P && (v(t), r(4)),
              a(e) && ((e = N(t, e)), t.l || w(t, e)),
              t.u && b("Patches").M(n[K].t, e, t.u, t.s))
            : (e = N(t, n, [])),
        v(t),
        t.u && t.v(t.u, t.s),
        e !== Y ? e : void 0
    );
}
function N(e, t, n) {
    if (E(t)) return t;
    var r = t[K];
    if (!r)
        return (
            s(
                t,
                function (i, a) {
                    return R(e, r, t, i, a, n);
                },
                !0,
            ),
            t
        );
    if (r.A !== e) return t;
    if (!r.P) return w(e, r.t, !0), r.t;
    if (!r.I) {
        (r.I = !0), r.A._--;
        var i = 4 === r.i || 5 === r.i ? (r.o = h(r.k)) : r.o,
            a = i,
            o = !1;
        3 === r.i && ((a = new Set(i)), i.clear(), (o = !0)),
            s(a, function (t, a) {
                return R(e, r, i, t, a, n, o);
            }),
            w(e, i, !1),
            n && e.u && b("Patches").N(r, n, e.u, e.s);
    }
    return r.o;
}
function R(e, t, n, r, s, o, c) {
    if (i(s)) {
        var d = N(e, s, o && t && 3 !== t.i && !l(t.R, r) ? o.concat(r) : void 0);
        if ((u(n, r, d), !i(d))) return;
        e.m = !1;
    } else c && n.add(s);
    if (a(s) && !E(s)) {
        if (!e.h.D && e._ < 1) return;
        N(e, s), (t && t.A.l) || w(e, s);
    }
}
function w(e, t, n) {
    void 0 === n && (n = !1), !e.l && e.h.D && e.m && m(t, n);
}
function P(e, t) {
    var n = e[K];
    return (n ? _(n) : e)[t];
}
function D(e, t) {
    if (t in e)
        for (var n = Object.getPrototypeOf(e); n; ) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r) return r;
            n = Object.getPrototypeOf(n);
        }
}
function x(e) {
    e.P || ((e.P = !0), e.l && x(e.l));
}
function L(e) {
    e.o || (e.o = h(e.t));
}
function j(e, t, n) {
    var r = f(t)
        ? b("MapSet").F(t, n)
        : p(t)
          ? b("MapSet").T(t, n)
          : e.O
            ? (function (e, t) {
                  var n = Array.isArray(e),
                      r = {
                          i: +!!n,
                          A: t ? t.A : O(),
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
                      a = $;
                  n && ((i = [r]), (a = J));
                  var s = Proxy.revocable(i, a),
                      o = s.revoke,
                      l = s.proxy;
                  return (r.k = l), (r.j = o), l;
              })(t, n)
            : b("ES5").J(t, n);
    return (n ? n.A : O()).p.push(r), r;
}
function M(e) {
    return (
        i(e) || r(22, e),
        (function e(t) {
            if (!a(t)) return t;
            var n,
                r = t[K],
                i = o(t);
            if (r) {
                if (!r.P && (r.i < 4 || !b("ES5").K(r))) return r.t;
                (r.I = !0), (n = k(t, i)), (r.I = !1);
            } else n = k(t, i);
            return (
                s(n, function (t, i) {
                    (r && c(r.t, t) === i) || u(n, t, e(i));
                }),
                3 === i ? new Set(n) : n
            );
        })(e)
    );
}
function k(e, t) {
    switch (t) {
        case 2:
            return new Map(e);
        case 3:
            return Array.from(e);
    }
    return h(e);
}
n.d(t, {
    Qx: () => i,
    jM: () => et,
    mq: () => en,
    vD: () => er,
});
var U,
    G,
    V = "u" > typeof Symbol && "symbol" == typeof Symbol("x"),
    F = "u" > typeof Map,
    B = "u" > typeof Set,
    H = "u" > typeof Proxy && void 0 !== Proxy.revocable && "u" > typeof Reflect,
    Y = V ? Symbol.for("immer-nothing") : (((U = {})["immer-nothing"] = !0), U),
    W = V ? Symbol.for("immer-draftable") : "__$immer_draftable",
    K = V ? Symbol.for("immer-state") : "__$immer_state",
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
    $ = {
        get: function (e, t) {
            if (t === K) return e;
            var n = _(e);
            if (!l(n, t))
                return (function (e, t, n) {
                    var r,
                        i = D(t, n);
                    return i ? ("value" in i ? i.value : null == (r = i.get) ? void 0 : r.call(e.k)) : void 0;
                })(e, n, t);
            var r = n[t];
            return e.I || !a(r) ? r : r === P(e.t, t) ? (L(e), (e.o[t] = j(e.A.h, r, e))) : r;
        },
        has: function (e, t) {
            return t in _(e);
        },
        ownKeys: function (e) {
            return Reflect.ownKeys(_(e));
        },
        set: function (e, t, n) {
            var r = D(_(e), t);
            if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
            if (!e.P) {
                var i = P(_(e), t),
                    a = null == i ? void 0 : i[K];
                if (a && a.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
                if (d(n, i) && (void 0 !== n || l(e.t, t))) return !0;
                L(e), x(e);
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
                void 0 !== P(e.t, t) || t in e.t ? ((e.R[t] = !1), L(e), x(e)) : delete e.R[t], e.o && delete e.o[t], !0
            );
        },
        getOwnPropertyDescriptor: function (e, t) {
            var n = _(e),
                r = Reflect.getOwnPropertyDescriptor(n, t);
            return r
                ? {
                      writable: !0,
                      configurable: 1 !== e.i || "length" !== t,
                      enumerable: r.enumerable,
                      value: n[t],
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
        },
    },
    J = {};
s($, function (e, t) {
    J[e] = function () {
        return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
    };
}),
    (J.deleteProperty = function (e, t) {
        return J.set.call(this, e, t, void 0);
    }),
    (J.set = function (e, t, n) {
        return $.set.call(this, e[0], t, n, e[0]);
    });
var ee = new ((function () {
        function e(e) {
            var t = this;
            (this.O = H),
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
                        var c = I(t),
                            u = j(t, e, void 0),
                            d = !0;
                        try {
                            (s = n(u)), (d = !1);
                        } finally {
                            d ? v(c) : S(c);
                        }
                        return "u" > typeof Promise && s instanceof Promise
                            ? s.then(
                                  function (e) {
                                      return A(c, i), C(e, c);
                                  },
                                  function (e) {
                                      throw (v(c), e);
                                  },
                              )
                            : (A(c, i), C(s, c));
                    }
                    if (!e || "object" != typeof e) {
                        if ((void 0 === (s = n(e)) && (s = e), s === Y && (s = void 0), t.D && m(s, !0), i)) {
                            var f = [],
                                p = [];
                            b("Patches").M(e, s, f, p), i(f, p);
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
                a(e) || r(8), i(e) && (e = M(e));
                var t = I(this),
                    n = j(this, e, void 0);
                return (n[K].C = !0), S(t), n;
            }),
            (t.finishDraft = function (e, t) {
                var n = (e && e[K]).A;
                return A(n, t), C(void 0, n);
            }),
            (t.setAutoFreeze = function (e) {
                this.D = e;
            }),
            (t.setUseProxies = function (e) {
                e && !H && r(20), (this.O = e);
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
                var a = b("Patches").$;
                return i(e)
                    ? a(e, t)
                    : this.produce(e, function (e) {
                          return a(e, t);
                      });
            }),
            e
        );
    })())(),
    et = ee.produce,
    en =
        (ee.produceWithPatches.bind(ee),
        ee.setAutoFreeze.bind(ee),
        ee.setUseProxies.bind(ee),
        ee.applyPatches.bind(ee),
        ee.createDraft.bind(ee)),
    er = ee.finishDraft.bind(ee);
