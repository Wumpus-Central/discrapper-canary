"use strict";
function i(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
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
function r(e) {
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
            return n === Object || ("function" == typeof n && Function.toString.call(n) === j);
        })(e) ||
            Array.isArray(e) ||
            !!e[F] ||
            !!(null == (t = e.constructor) ? void 0 : t[F]) ||
            d(e) ||
            c(e))
    );
}
function a(e, t, n) {
    void 0 === n && (n = !1),
        0 === o(e)
            ? (n ? Object.keys : H)(e).forEach(function (i) {
                  (n && "symbol" == typeof i) || t(i, e[i], e);
              })
            : e.forEach(function (n, i) {
                  return t(i, n, e);
              });
}
function o(e) {
    var t = e[B];
    return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : d(e) ? 2 : 3 * !!c(e);
}
function l(e, t) {
    return 2 === o(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function u(e, t, n) {
    var i = o(e);
    2 === i ? e.set(t, n) : 3 === i ? e.add(n) : (e[t] = n);
}
function d(e) {
    return U && e instanceof Map;
}
function c(e) {
    return k && e instanceof Set;
}
function _(e) {
    return e.o || e.t;
}
function h(e) {
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    var t = W(e);
    delete t[B];
    for (var n = H(t), i = 0; i < n.length; i++) {
        var r = n[i],
            s = t[r];
        !1 === s.writable && ((s.writable = !0), (s.configurable = !0)),
            (s.get || s.set) && (t[r] = { configurable: !0, writable: !0, enumerable: s.enumerable, value: e[r] });
    }
    return Object.create(Object.getPrototypeOf(e), t);
}
function f(e, t) {
    return (
        void 0 === t && (t = !1),
        p(e) ||
            r(e) ||
            !s(e) ||
            (o(e) > 1 && (e.set = e.add = e.clear = e.delete = E),
            Object.freeze(e),
            t &&
                a(
                    e,
                    function (e, t) {
                        return f(t, !0);
                    },
                    !0,
                )),
        e
    );
}
function E() {
    i(2);
}
function p(e) {
    return null == e || "object" != typeof e || Object.isFrozen(e);
}
function m(e) {
    var t = Y[e];
    return t || i(18, e), t;
}
n.d(t, { Qx: () => r, jM: () => q, mq: () => Z, vD: () => X });
function g(e, t) {
    t && (m("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function A(e) {
    I(e), e.p.forEach(S), (e.p = null);
}
function I(e) {
    e === M && (M = e.l);
}
function T(e) {
    return (M = { p: [], l: M, h: e, m: !0, _: 0 });
}
function S(e) {
    var t = e[B];
    0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
}
function N(e, t) {
    t._ = t.p.length;
    var n = t.p[0],
        r = void 0 !== e && e !== n;
    return (
        t.h.O || m("ES5").S(t, e, r),
        r
            ? (n[B].P && (A(t), i(4)),
              s(e) && ((e = C(t, e)), t.l || v(t, e)),
              t.u && m("Patches").M(n[B].t, e, t.u, t.s))
            : (e = C(t, n, [])),
        A(t),
        t.u && t.v(t.u, t.s),
        e !== V ? e : void 0
    );
}
function C(e, t, n) {
    if (p(t)) return t;
    var i = t[B];
    if (!i)
        return (
            a(
                t,
                function (r, s) {
                    return y(e, i, t, r, s, n);
                },
                !0,
            ),
            t
        );
    if (i.A !== e) return t;
    if (!i.P) return v(e, i.t, !0), i.t;
    if (!i.I) {
        (i.I = !0), i.A._--;
        var r = 4 === i.i || 5 === i.i ? (i.o = h(i.k)) : i.o,
            s = r,
            o = !1;
        3 === i.i && ((s = new Set(r)), r.clear(), (o = !0)),
            a(s, function (t, s) {
                return y(e, i, r, t, s, n, o);
            }),
            v(e, r, !1),
            n && e.u && m("Patches").N(i, n, e.u, e.s);
    }
    return i.o;
}
function y(e, t, n, i, a, o, d) {
    if (r(a)) {
        var c = C(e, a, o && t && 3 !== t.i && !l(t.R, i) ? o.concat(i) : void 0);
        if ((u(n, i, c), !r(c))) return;
        e.m = !1;
    } else d && n.add(a);
    if (s(a) && !p(a)) {
        if (!e.h.D && e._ < 1) return;
        C(e, a), (t && t.A.l) || v(e, a);
    }
}
function v(e, t, n) {
    void 0 === n && (n = !1), !e.l && e.h.D && e.m && f(t, n);
}
function R(e, t) {
    var n = e[B];
    return (n ? _(n) : e)[t];
}
function O(e, t) {
    if (t in e)
        for (var n = Object.getPrototypeOf(e); n; ) {
            var i = Object.getOwnPropertyDescriptor(n, t);
            if (i) return i;
            n = Object.getPrototypeOf(n);
        }
}
function b(e) {
    e.P || ((e.P = !0), e.l && b(e.l));
}
function L(e) {
    e.o || (e.o = h(e.t));
}
function D(e, t, n) {
    var i,
        r,
        s,
        a,
        o,
        l,
        u,
        _ = d(t)
            ? m("MapSet").F(t, n)
            : c(t)
              ? m("MapSet").T(t, n)
              : e.O
                ? ((s = r =
                      {
                          i: +!!(i = Array.isArray(t)),
                          A: n ? n.A : M,
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
                  i && ((s = [r]), (a = $)),
                  (l = (o = Proxy.revocable(s, a)).revoke),
                  (r.k = u = o.proxy),
                  (r.j = l),
                  u)
                : m("ES5").J(t, n);
    return (n ? n.A : M).p.push(_), _;
}
function P(e, t) {
    switch (t) {
        case 2:
            return new Map(e);
        case 3:
            return Array.from(e);
    }
    return h(e);
}
var w,
    M,
    x = "u" > typeof Symbol && "symbol" == typeof Symbol("x"),
    U = "u" > typeof Map,
    k = "u" > typeof Set,
    G = "u" > typeof Proxy && void 0 !== Proxy.revocable && "u" > typeof Reflect,
    V = x ? Symbol.for("immer-nothing") : (((w = {})["immer-nothing"] = !0), w),
    F = x ? Symbol.for("immer-draftable") : "__$immer_draftable",
    B = x ? Symbol.for("immer-state") : "__$immer_state",
    j = "" + Object.prototype.constructor,
    H =
        "u" > typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
              ? function (e) {
                    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
                }
              : Object.getOwnPropertyNames,
    W =
        Object.getOwnPropertyDescriptors ||
        function (e) {
            var t = {};
            return (
                H(e).forEach(function (n) {
                    t[n] = Object.getOwnPropertyDescriptor(e, n);
                }),
                t
            );
        },
    Y = {},
    K = {
        get: function (e, t) {
            if (t === B) return e;
            var n,
                i,
                r = _(e);
            if (!l(r, t))
                return (i = O(r, t)) ? ("value" in i ? i.value : null == (n = i.get) ? void 0 : n.call(e.k)) : void 0;
            var a = r[t];
            return e.I || !s(a) ? a : a === R(e.t, t) ? (L(e), (e.o[t] = D(e.A.h, a, e))) : a;
        },
        has: function (e, t) {
            return t in _(e);
        },
        ownKeys: function (e) {
            return Reflect.ownKeys(_(e));
        },
        set: function (e, t, n) {
            var i = O(_(e), t);
            if (null == i ? void 0 : i.set) return i.set.call(e.k, n), !0;
            if (!e.P) {
                var r = R(_(e), t),
                    s = null == r ? void 0 : r[B];
                if (s && s.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
                if ((n === r ? 0 !== n || 1 / n == 1 / r : n != n && r != r) && (void 0 !== n || l(e.t, t))) return !0;
                L(e), b(e);
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
                void 0 !== R(e.t, t) || t in e.t ? ((e.R[t] = !1), L(e), b(e)) : delete e.R[t], e.o && delete e.o[t], !0
            );
        },
        getOwnPropertyDescriptor: function (e, t) {
            var n = _(e),
                i = Reflect.getOwnPropertyDescriptor(n, t);
            return i
                ? { writable: !0, configurable: 1 !== e.i || "length" !== t, enumerable: i.enumerable, value: n[t] }
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
                (this.produce = function (e, n, r) {
                    if ("function" == typeof e && "function" != typeof n) {
                        var a,
                            o = n;
                        return (
                            (n = e),
                            function (e) {
                                var i = this;
                                void 0 === e && (e = o);
                                for (var r = arguments.length, s = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
                                    s[a - 1] = arguments[a];
                                return t.produce(e, function (e) {
                                    var t;
                                    return (t = n).call.apply(t, [i, e].concat(s));
                                });
                            }
                        );
                    }
                    if (("function" != typeof n && i(6), void 0 !== r && "function" != typeof r && i(7), s(e))) {
                        var l = T(t),
                            u = D(t, e, void 0),
                            d = !0;
                        try {
                            (a = n(u)), (d = !1);
                        } finally {
                            d ? A(l) : I(l);
                        }
                        return "u" > typeof Promise && a instanceof Promise
                            ? a.then(
                                  function (e) {
                                      return g(l, r), N(e, l);
                                  },
                                  function (e) {
                                      throw (A(l), e);
                                  },
                              )
                            : (g(l, r), N(a, l));
                    }
                    if (!e || "object" != typeof e) {
                        if ((void 0 === (a = n(e)) && (a = e), a === V && (a = void 0), t.D && f(a, !0), r)) {
                            var c = [],
                                _ = [];
                            m("Patches").M(e, a, c, _), r(c, _);
                        }
                        return a;
                    }
                    i(21, e);
                }),
                (this.produceWithPatches = function (e, n) {
                    if ("function" == typeof e)
                        return function (n) {
                            for (var i = arguments.length, r = Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++)
                                r[s - 1] = arguments[s];
                            return t.produceWithPatches(n, function (t) {
                                return e.apply(void 0, [t].concat(r));
                            });
                        };
                    var i,
                        r,
                        s = t.produce(e, n, function (e, t) {
                            (i = e), (r = t);
                        });
                    return "u" > typeof Promise && s instanceof Promise
                        ? s.then(function (e) {
                              return [e, i, r];
                          })
                        : [s, i, r];
                }),
                "boolean" == typeof (null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies),
                "boolean" == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze);
        }
        var t = e.prototype;
        return (
            (t.createDraft = function (e) {
                s(e) || i(8),
                    r(e) &&
                        (r((t = e)) || i(22, t),
                        (e = (function e(t) {
                            if (!s(t)) return t;
                            var n,
                                i = t[B],
                                r = o(t);
                            if (i) {
                                if (!i.P && (i.i < 4 || !m("ES5").K(i))) return i.t;
                                (i.I = !0), (n = P(t, r)), (i.I = !1);
                            } else n = P(t, r);
                            return (
                                a(n, function (t, r) {
                                    var s;
                                    (i && ((s = i.t), (2 === o(s) ? s.get(t) : s[t]) === r)) || u(n, t, e(r));
                                }),
                                3 === r ? new Set(n) : n
                            );
                        })(t)));
                var t,
                    n = T(this),
                    l = D(this, e, void 0);
                return (l[B].C = !0), I(n), l;
            }),
            (t.finishDraft = function (e, t) {
                var n = (e && e[B]).A;
                return g(n, t), N(void 0, n);
            }),
            (t.setAutoFreeze = function (e) {
                this.D = e;
            }),
            (t.setUseProxies = function (e) {
                e && !G && i(20), (this.O = e);
            }),
            (t.applyPatches = function (e, t) {
                for (n = t.length - 1; n >= 0; n--) {
                    var n,
                        i = t[n];
                    if (0 === i.path.length && "replace" === i.op) {
                        e = i.value;
                        break;
                    }
                }
                n > -1 && (t = t.slice(n + 1));
                var s = m("Patches").$;
                return r(e)
                    ? s(e, t)
                    : this.produce(e, function (e) {
                          return s(e, t);
                      });
            }),
            e
        );
    })())(),
    q = z.produce,
    Z =
        (z.produceWithPatches.bind(z),
        z.setAutoFreeze.bind(z),
        z.setUseProxies.bind(z),
        z.applyPatches.bind(z),
        z.createDraft.bind(z)),
    X = z.finishDraft.bind(z);
