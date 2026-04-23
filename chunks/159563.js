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
    return !!e && !!e[B];
}
function s(e) {
    var t;
    return (
        !!e &&
        ((function (e) {
            if (!e || "object" != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            if (null === t) return !0;
            var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
            return n === Object || ("function" == typeof n && Function.toString.call(n) === H);
        })(e) ||
            Array.isArray(e) ||
            !!e[V] ||
            !!(null == (t = e.constructor) ? void 0 : t[V]) ||
            c(e) ||
            d(e))
    );
}
function a(e, t, n) {
    void 0 === n && (n = !1),
        0 === o(e)
            ? (n ? Object.keys : j)(e).forEach(function (r) {
                  (n && "symbol" == typeof r) || t(r, e[r], e);
              })
            : e.forEach(function (n, r) {
                  return t(r, n, e);
              });
}
function o(e) {
    var t = e[B];
    return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : c(e) ? 2 : 3 * !!d(e);
}
function l(e, t) {
    return 2 === o(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function u(e, t, n) {
    var r = o(e);
    2 === r ? e.set(t, n) : 3 === r ? e.add(n) : (e[t] = n);
}
function c(e) {
    return k && e instanceof Map;
}
function d(e) {
    return U && e instanceof Set;
}
function _(e) {
    return e.o || e.t;
}
function f(e) {
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    var t = Y(e);
    delete t[B];
    for (var n = j(t), r = 0; r < n.length; r++) {
        var i = n[r],
            s = t[i];
        !1 === s.writable && ((s.writable = !0), (s.configurable = !0)),
            (s.get || s.set) && (t[i] = { configurable: !0, writable: !0, enumerable: s.enumerable, value: e[i] });
    }
    return Object.create(Object.getPrototypeOf(e), t);
}
function p(e, t) {
    return (
        void 0 === t && (t = !1),
        E(e) ||
            i(e) ||
            !s(e) ||
            (o(e) > 1 && (e.set = e.add = e.clear = e.delete = h),
            Object.freeze(e),
            t &&
                a(
                    e,
                    function (e, t) {
                        return p(t, !0);
                    },
                    !0,
                )),
        e
    );
}
function h() {
    r(2);
}
function E(e) {
    return null == e || "object" != typeof e || Object.isFrozen(e);
}
function m(e) {
    var t = W[e];
    return t || r(18, e), t;
}
n.d(t, { Qx: () => i, jM: () => q, mq: () => X, vD: () => Q });
function g(e, t) {
    t && (m("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function A(e) {
    I(e), e.p.forEach(S), (e.p = null);
}
function I(e) {
    e === P && (P = e.l);
}
function T(e) {
    return (P = { p: [], l: P, h: e, m: !0, _: 0 });
}
function S(e) {
    var t = e[B];
    0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
}
function y(e, t) {
    t._ = t.p.length;
    var n = t.p[0],
        i = void 0 !== e && e !== n;
    return (
        t.h.O || m("ES5").S(t, e, i),
        i
            ? (n[B].P && (A(t), r(4)),
              s(e) && ((e = N(t, e)), t.l || C(t, e)),
              t.u && m("Patches").M(n[B].t, e, t.u, t.s))
            : (e = N(t, n, [])),
        A(t),
        t.u && t.v(t.u, t.s),
        e !== F ? e : void 0
    );
}
function N(e, t, n) {
    if (E(t)) return t;
    var r = t[B];
    if (!r)
        return (
            a(
                t,
                function (i, s) {
                    return v(e, r, t, i, s, n);
                },
                !0,
            ),
            t
        );
    if (r.A !== e) return t;
    if (!r.P) return C(e, r.t, !0), r.t;
    if (!r.I) {
        (r.I = !0), r.A._--;
        var i = 4 === r.i || 5 === r.i ? (r.o = f(r.k)) : r.o,
            s = i,
            o = !1;
        3 === r.i && ((s = new Set(i)), i.clear(), (o = !0)),
            a(s, function (t, s) {
                return v(e, r, i, t, s, n, o);
            }),
            C(e, i, !1),
            n && e.u && m("Patches").N(r, n, e.u, e.s);
    }
    return r.o;
}
function v(e, t, n, r, a, o, c) {
    if (i(a)) {
        var d = N(e, a, o && t && 3 !== t.i && !l(t.R, r) ? o.concat(r) : void 0);
        if ((u(n, r, d), !i(d))) return;
        e.m = !1;
    } else c && n.add(a);
    if (s(a) && !E(a)) {
        if (!e.h.D && e._ < 1) return;
        N(e, a), (t && t.A.l) || C(e, a);
    }
}
function C(e, t, n) {
    void 0 === n && (n = !1), !e.l && e.h.D && e.m && p(t, n);
}
function O(e, t) {
    var n = e[B];
    return (n ? _(n) : e)[t];
}
function R(e, t) {
    if (t in e)
        for (var n = Object.getPrototypeOf(e); n; ) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r) return r;
            n = Object.getPrototypeOf(n);
        }
}
function b(e) {
    e.P || ((e.P = !0), e.l && b(e.l));
}
function D(e) {
    e.o || (e.o = f(e.t));
}
function L(e, t, n) {
    var r,
        i,
        s,
        a,
        o,
        l,
        u,
        _ = c(t)
            ? m("MapSet").F(t, n)
            : d(t)
              ? m("MapSet").T(t, n)
              : e.O
                ? ((s = i =
                      {
                          i: +!!(r = Array.isArray(t)),
                          A: n ? n.A : P,
                          P: !1,
                          I: !1,
                          R: {},
                          l: n,
                          t: t,
                          k: null,
                          o: null,
                          j: null,
                          C: !1,
                      }),
                  (a = K),
                  r && ((s = [i]), (a = $)),
                  (l = (o = Proxy.revocable(s, a)).revoke),
                  (i.k = u = o.proxy),
                  (i.j = l),
                  u)
                : m("ES5").J(t, n);
    return (n ? n.A : P).p.push(_), _;
}
function w(e, t) {
    switch (t) {
        case 2:
            return new Map(e);
        case 3:
            return Array.from(e);
    }
    return f(e);
}
var M,
    P,
    x = "u" > typeof Symbol && "symbol" == typeof Symbol("x"),
    k = "u" > typeof Map,
    U = "u" > typeof Set,
    G = "u" > typeof Proxy && void 0 !== Proxy.revocable && "u" > typeof Reflect,
    F = x ? Symbol.for("immer-nothing") : (((M = {})["immer-nothing"] = !0), M),
    V = x ? Symbol.for("immer-draftable") : "__$immer_draftable",
    B = x ? Symbol.for("immer-state") : "__$immer_state",
    H = "" + Object.prototype.constructor,
    j =
        "u" > typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
              ? function (e) {
                    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
                }
              : Object.getOwnPropertyNames,
    Y =
        Object.getOwnPropertyDescriptors ||
        function (e) {
            var t = {};
            return (
                j(e).forEach(function (n) {
                    t[n] = Object.getOwnPropertyDescriptor(e, n);
                }),
                t
            );
        },
    W = {},
    K = {
        get: function (e, t) {
            if (t === B) return e;
            var n,
                r,
                i = _(e);
            if (!l(i, t))
                return (r = R(i, t)) ? ("value" in r ? r.value : null == (n = r.get) ? void 0 : n.call(e.k)) : void 0;
            var a = i[t];
            return e.I || !s(a) ? a : a === O(e.t, t) ? (D(e), (e.o[t] = L(e.A.h, a, e))) : a;
        },
        has: function (e, t) {
            return t in _(e);
        },
        ownKeys: function (e) {
            return Reflect.ownKeys(_(e));
        },
        set: function (e, t, n) {
            var r = R(_(e), t);
            if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
            if (!e.P) {
                var i = O(_(e), t),
                    s = null == i ? void 0 : i[B];
                if (s && s.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
                if ((n === i ? 0 !== n || 1 / n == 1 / i : n != n && i != i) && (void 0 !== n || l(e.t, t))) return !0;
                D(e), b(e);
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
                void 0 !== O(e.t, t) || t in e.t ? ((e.R[t] = !1), D(e), b(e)) : delete e.R[t], e.o && delete e.o[t], !0
            );
        },
        getOwnPropertyDescriptor: function (e, t) {
            var n = _(e),
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
    $ = {};
a(K, function (e, t) {
    $[e] = function () {
        return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
    };
}),
    ($.deleteProperty = function (e, t) {
        return $.set.call(this, e, t, void 0);
    }),
    ($.set = function (e, t, n) {
        return K.set.call(this, e[0], t, n, e[0]);
    });
var z = new ((function () {
        function e(e) {
            var t = this;
            (this.O = G),
                (this.D = !0),
                (this.produce = function (e, n, i) {
                    if ("function" == typeof e && "function" != typeof n) {
                        var a,
                            o = n;
                        return (
                            (n = e),
                            function (e) {
                                var r = this;
                                void 0 === e && (e = o);
                                for (var i = arguments.length, s = Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
                                    s[a - 1] = arguments[a];
                                return t.produce(e, function (e) {
                                    var t;
                                    return (t = n).call.apply(t, [r, e].concat(s));
                                });
                            }
                        );
                    }
                    if (("function" != typeof n && r(6), void 0 !== i && "function" != typeof i && r(7), s(e))) {
                        var l = T(t),
                            u = L(t, e, void 0),
                            c = !0;
                        try {
                            (a = n(u)), (c = !1);
                        } finally {
                            c ? A(l) : I(l);
                        }
                        return "u" > typeof Promise && a instanceof Promise
                            ? a.then(
                                  function (e) {
                                      return g(l, i), y(e, l);
                                  },
                                  function (e) {
                                      throw (A(l), e);
                                  },
                              )
                            : (g(l, i), y(a, l));
                    }
                    if (!e || "object" != typeof e) {
                        if ((void 0 === (a = n(e)) && (a = e), a === F && (a = void 0), t.D && p(a, !0), i)) {
                            var d = [],
                                _ = [];
                            m("Patches").M(e, a, d, _), i(d, _);
                        }
                        return a;
                    }
                    r(21, e);
                }),
                (this.produceWithPatches = function (e, n) {
                    if ("function" == typeof e)
                        return function (n) {
                            for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
                                i[s - 1] = arguments[s];
                            return t.produceWithPatches(n, function (t) {
                                return e.apply(void 0, [t].concat(i));
                            });
                        };
                    var r,
                        i,
                        s = t.produce(e, n, function (e, t) {
                            (r = e), (i = t);
                        });
                    return "u" > typeof Promise && s instanceof Promise
                        ? s.then(function (e) {
                              return [e, r, i];
                          })
                        : [s, r, i];
                }),
                "boolean" == typeof (null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies),
                "boolean" == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze);
        }
        var t = e.prototype;
        return (
            (t.createDraft = function (e) {
                s(e) || r(8),
                    i(e) &&
                        (i((t = e)) || r(22, t),
                        (e = (function e(t) {
                            if (!s(t)) return t;
                            var n,
                                r = t[B],
                                i = o(t);
                            if (r) {
                                if (!r.P && (r.i < 4 || !m("ES5").K(r))) return r.t;
                                (r.I = !0), (n = w(t, i)), (r.I = !1);
                            } else n = w(t, i);
                            return (
                                a(n, function (t, i) {
                                    var s;
                                    (r && ((s = r.t), (2 === o(s) ? s.get(t) : s[t]) === i)) || u(n, t, e(i));
                                }),
                                3 === i ? new Set(n) : n
                            );
                        })(t)));
                var t,
                    n = T(this),
                    l = L(this, e, void 0);
                return (l[B].C = !0), I(n), l;
            }),
            (t.finishDraft = function (e, t) {
                var n = (e && e[B]).A;
                return g(n, t), y(void 0, n);
            }),
            (t.setAutoFreeze = function (e) {
                this.D = e;
            }),
            (t.setUseProxies = function (e) {
                e && !G && r(20), (this.O = e);
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
                var s = m("Patches").$;
                return i(e)
                    ? s(e, t)
                    : this.produce(e, function (e) {
                          return s(e, t);
                      });
            }),
            e
        );
    })())(),
    q = z.produce,
    X =
        (z.produceWithPatches.bind(z),
        z.setAutoFreeze.bind(z),
        z.setUseProxies.bind(z),
        z.applyPatches.bind(z),
        z.createDraft.bind(z)),
    Q = z.finishDraft.bind(z);
