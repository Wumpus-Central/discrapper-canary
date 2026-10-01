function u(e) {
    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++) r[u - 1] = arguments[u];
    throw Error(
        "[Immer] minified error nr: " +
            e +
            (r.length
                ? " " +
                  r
                      .map(function (e) {
                          return "'" + e + "'";
                      })
                      .join(",")
                : "") +
            ". Find the full error at: https://bit.ly/3cXEKWf",
    );
}
function n(e) {
    return !!e && !!e[z];
}
function a(e) {
    var t;
    return (
        !!e &&
        ((function (e) {
            if (!e || "object" != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            if (null === t) return !0;
            var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
            return r === Object || ("function" == typeof r && Function.toString.call(r) === I);
        })(e) ||
            Array.isArray(e) ||
            !!e[L] ||
            !!(null == (t = e.constructor) ? void 0 : t[L]) ||
            c(e) ||
            f(e))
    );
}
function o(e, t, r) {
    (void 0 === r && (r = !1),
        0 === i(e)
            ? (r ? Object.keys : q)(e).forEach(function (u) {
                  (r && "symbol" == typeof u) || t(u, e[u], e);
              })
            : e.forEach(function (r, u) {
                  return t(u, r, e);
              }));
}
function i(e) {
    var t = e[z];
    return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : c(e) ? 2 : 3 * !!f(e);
}
function s(e, t) {
    return 2 === i(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function l(e, t, r) {
    var u = i(e);
    2 === u ? e.set(t, r) : 3 === u ? e.add(r) : (e[t] = r);
}
function c(e) {
    return M && e instanceof Map;
}
function f(e) {
    return K && e instanceof Set;
}
function d(e) {
    return e.o || e.t;
}
function D(e) {
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    var t = V(e);
    delete t[z];
    for (var r = q(t), u = 0; u < r.length; u++) {
        var n = r[u],
            a = t[n];
        (!1 === a.writable && ((a.writable = !0), (a.configurable = !0)),
            (a.get || a.set) && (t[n] = { configurable: !0, writable: !0, enumerable: a.enumerable, value: e[n] }));
    }
    return Object.create(Object.getPrototypeOf(e), t);
}
function h(e, t) {
    return (
        void 0 === t && (t = !1),
        v(e) ||
            n(e) ||
            !a(e) ||
            (i(e) > 1 && (e.set = e.add = e.clear = e.delete = C),
            Object.freeze(e),
            t &&
                o(
                    e,
                    function (e, t) {
                        return h(t, !0);
                    },
                    !0,
                )),
        e
    );
}
function C() {
    u(2);
}
function v(e) {
    return null == e || "object" != typeof e || Object.isFrozen(e);
}
function p(e) {
    var t = Q[e];
    return (t || u(18, e), t);
}
r.d(t, { Qx: () => n, jM: () => X, mq: () => Y, vD: () => $ });
function g(e, t) {
    t && (p("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function B(e) {
    (E(e), e.p.forEach(F), (e.p = null));
}
function E(e) {
    e === R && (R = e.l);
}
function A(e) {
    return (R = { p: [], l: R, h: e, m: !0, _: 0 });
}
function F(e) {
    var t = e[z];
    0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
}
function m(e, t) {
    t._ = t.p.length;
    var r = t.p[0],
        n = void 0 !== e && e !== r;
    return (
        t.h.O || p("ES5").S(t, e, n),
        n
            ? (r[z].P && (B(t), u(4)),
              a(e) && ((e = b(t, e)), t.l || y(t, e)),
              t.u && p("Patches").M(r[z].t, e, t.u, t.s))
            : (e = b(t, r, [])),
        B(t),
        t.u && t.v(t.u, t.s),
        e !== _ ? e : void 0
    );
}
function b(e, t, r) {
    if (v(t)) return t;
    var u = t[z];
    if (!u)
        return (
            o(
                t,
                function (n, a) {
                    return w(e, u, t, n, a, r);
                },
                !0,
            ),
            t
        );
    if (u.A !== e) return t;
    if (!u.P) return (y(e, u.t, !0), u.t);
    if (!u.I) {
        ((u.I = !0), u.A._--);
        var n = 4 === u.i || 5 === u.i ? (u.o = D(u.k)) : u.o,
            a = n,
            i = !1;
        (3 === u.i && ((a = new Set(n)), n.clear(), (i = !0)),
            o(a, function (t, a) {
                return w(e, u, n, t, a, r, i);
            }),
            y(e, n, !1),
            r && e.u && p("Patches").N(u, r, e.u, e.s));
    }
    return u.o;
}
function w(e, t, r, u, o, i, c) {
    if (n(o)) {
        var f = b(e, o, i && t && 3 !== t.i && !s(t.R, u) ? i.concat(u) : void 0);
        if ((l(r, u, f), !n(f))) return;
        e.m = !1;
    } else c && r.add(o);
    if (a(o) && !v(o)) {
        if (!e.h.D && e._ < 1) return;
        (b(e, o), (t && t.A.l) || y(e, o));
    }
}
function y(e, t, r) {
    (void 0 === r && (r = !1), !e.l && e.h.D && e.m && h(t, r));
}
function x(e, t) {
    var r = e[z];
    return (r ? d(r) : e)[t];
}
function O(e, t) {
    if (t in e)
        for (var r = Object.getPrototypeOf(e); r;) {
            var u = Object.getOwnPropertyDescriptor(r, t);
            if (u) return u;
            r = Object.getPrototypeOf(r);
        }
}
function k(e) {
    e.P || ((e.P = !0), e.l && k(e.l));
}
function P(e) {
    e.o || (e.o = D(e.t));
}
function S(e, t, r) {
    var u,
        n,
        a,
        o,
        i,
        s,
        l,
        d = c(t)
            ? p("MapSet").F(t, r)
            : f(t)
              ? p("MapSet").T(t, r)
              : e.O
                ? ((a = n =
                      {
                          i: +!!(u = Array.isArray(t)),
                          A: r ? r.A : R,
                          P: !1,
                          I: !1,
                          R: {},
                          l: r,
                          t: t,
                          k: null,
                          o: null,
                          j: null,
                          C: !1,
                      }),
                  (o = H),
                  u && ((a = [n]), (o = U)),
                  (s = (i = Proxy.revocable(a, o)).revoke),
                  (n.k = l = i.proxy),
                  (n.j = s),
                  l)
                : p("ES5").J(t, r);
    return ((r ? r.A : R).p.push(d), d);
}
function T(e, t) {
    switch (t) {
        case 2:
            return new Map(e);
        case 3:
            return Array.from(e);
    }
    return D(e);
}
var j,
    R,
    N = "u" > typeof Symbol && "symbol" == typeof Symbol("x"),
    M = "u" > typeof Map,
    K = "u" > typeof Set,
    W = "u" > typeof Proxy && void 0 !== Proxy.revocable && "u" > typeof Reflect,
    _ = N ? Symbol.for("immer-nothing") : (((j = {})["immer-nothing"] = !0), j),
    L = N ? Symbol.for("immer-draftable") : "__$immer_draftable",
    z = N ? Symbol.for("immer-state") : "__$immer_state",
    I = "" + Object.prototype.constructor,
    q =
        "u" > typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
              ? function (e) {
                    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
                }
              : Object.getOwnPropertyNames,
    V =
        Object.getOwnPropertyDescriptors ||
        function (e) {
            var t = {};
            return (
                q(e).forEach(function (r) {
                    t[r] = Object.getOwnPropertyDescriptor(e, r);
                }),
                t
            );
        },
    Q = {},
    H = {
        get: function (e, t) {
            if (t === z) return e;
            var r,
                u,
                n = d(e);
            if (!s(n, t))
                return (u = O(n, t)) ? ("value" in u ? u.value : null == (r = u.get) ? void 0 : r.call(e.k)) : void 0;
            var o = n[t];
            return e.I || !a(o) ? o : o === x(e.t, t) ? (P(e), (e.o[t] = S(e.A.h, o, e))) : o;
        },
        has: function (e, t) {
            return t in d(e);
        },
        ownKeys: function (e) {
            return Reflect.ownKeys(d(e));
        },
        set: function (e, t, r) {
            var u = O(d(e), t);
            if (null == u ? void 0 : u.set) return (u.set.call(e.k, r), !0);
            if (!e.P) {
                var n = x(d(e), t),
                    a = null == n ? void 0 : n[z];
                if (a && a.t === r) return ((e.o[t] = r), (e.R[t] = !1), !0);
                if ((r === n ? 0 !== r || 1 / r == 1 / n : r != r && n != n) && (void 0 !== r || s(e.t, t))) return !0;
                (P(e), k(e));
            }
            return (
                (e.o[t] === r && (void 0 !== r || t in e.o)) ||
                    (Number.isNaN(r) && Number.isNaN(e.o[t])) ||
                    ((e.o[t] = r), (e.R[t] = !0)),
                !0
            );
        },
        deleteProperty: function (e, t) {
            return (
                void 0 !== x(e.t, t) || t in e.t ? ((e.R[t] = !1), P(e), k(e)) : delete e.R[t], e.o && delete e.o[t], !0
            );
        },
        getOwnPropertyDescriptor: function (e, t) {
            var r = d(e),
                u = Reflect.getOwnPropertyDescriptor(r, t);
            return u
                ? { writable: !0, configurable: 1 !== e.i || "length" !== t, enumerable: u.enumerable, value: r[t] }
                : u;
        },
        defineProperty: function () {
            u(11);
        },
        getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t);
        },
        setPrototypeOf: function () {
            u(12);
        },
    },
    U = {};
(o(H, function (e, t) {
    U[e] = function () {
        return ((arguments[0] = arguments[0][0]), t.apply(this, arguments));
    };
}),
    (U.deleteProperty = function (e, t) {
        return U.set.call(this, e, t, void 0);
    }),
    (U.set = function (e, t, r) {
        return H.set.call(this, e[0], t, r, e[0]);
    }));
var J = new ((function () {
        function e(e) {
            var t = this;
            ((this.O = W),
                (this.D = !0),
                (this.produce = function (e, r, n) {
                    if ("function" == typeof e && "function" != typeof r) {
                        var o,
                            i = r;
                        return (
                            (r = e),
                            function (e) {
                                var u = this;
                                void 0 === e && (e = i);
                                for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                                    a[o - 1] = arguments[o];
                                return t.produce(e, function (e) {
                                    var t;
                                    return (t = r).call.apply(t, [u, e].concat(a));
                                });
                            }
                        );
                    }
                    if (("function" != typeof r && u(6), void 0 !== n && "function" != typeof n && u(7), a(e))) {
                        var s = A(t),
                            l = S(t, e, void 0),
                            c = !0;
                        try {
                            ((o = r(l)), (c = !1));
                        } finally {
                            c ? B(s) : E(s);
                        }
                        return "u" > typeof Promise && o instanceof Promise
                            ? o.then(
                                  function (e) {
                                      return (g(s, n), m(e, s));
                                  },
                                  function (e) {
                                      throw (B(s), e);
                                  },
                              )
                            : (g(s, n), m(o, s));
                    }
                    if (!e || "object" != typeof e) {
                        if ((void 0 === (o = r(e)) && (o = e), o === _ && (o = void 0), t.D && h(o, !0), n)) {
                            var f = [],
                                d = [];
                            (p("Patches").M(e, o, f, d), n(f, d));
                        }
                        return o;
                    }
                    u(21, e);
                }),
                (this.produceWithPatches = function (e, r) {
                    if ("function" == typeof e)
                        return function (r) {
                            for (var u = arguments.length, n = Array(u > 1 ? u - 1 : 0), a = 1; a < u; a++)
                                n[a - 1] = arguments[a];
                            return t.produceWithPatches(r, function (t) {
                                return e.apply(void 0, [t].concat(n));
                            });
                        };
                    var u,
                        n,
                        a = t.produce(e, r, function (e, t) {
                            ((u = e), (n = t));
                        });
                    return "u" > typeof Promise && a instanceof Promise
                        ? a.then(function (e) {
                              return [e, u, n];
                          })
                        : [a, u, n];
                }),
                "boolean" == typeof (null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies),
                "boolean" == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze));
        }
        var t = e.prototype;
        return (
            (t.createDraft = function (e) {
                (a(e) || u(8),
                    n(e) &&
                        (n((t = e)) || u(22, t),
                        (e = (function e(t) {
                            if (!a(t)) return t;
                            var r,
                                u = t[z],
                                n = i(t);
                            if (u) {
                                if (!u.P && (u.i < 4 || !p("ES5").K(u))) return u.t;
                                ((u.I = !0), (r = T(t, n)), (u.I = !1));
                            } else r = T(t, n);
                            return (
                                o(r, function (t, n) {
                                    var a;
                                    (u && ((a = u.t), (2 === i(a) ? a.get(t) : a[t]) === n)) || l(r, t, e(n));
                                }),
                                3 === n ? new Set(r) : r
                            );
                        })(t))));
                var t,
                    r = A(this),
                    s = S(this, e, void 0);
                return ((s[z].C = !0), E(r), s);
            }),
            (t.finishDraft = function (e, t) {
                var r = (e && e[z]).A;
                return (g(r, t), m(void 0, r));
            }),
            (t.setAutoFreeze = function (e) {
                this.D = e;
            }),
            (t.setUseProxies = function (e) {
                (e && !W && u(20), (this.O = e));
            }),
            (t.applyPatches = function (e, t) {
                for (r = t.length - 1; r >= 0; r--) {
                    var r,
                        u = t[r];
                    if (0 === u.path.length && "replace" === u.op) {
                        e = u.value;
                        break;
                    }
                }
                r > -1 && (t = t.slice(r + 1));
                var a = p("Patches").$;
                return n(e)
                    ? a(e, t)
                    : this.produce(e, function (e) {
                          return a(e, t);
                      });
            }),
            e
        );
    })())(),
    X = J.produce,
    Y =
        (J.produceWithPatches.bind(J),
        J.setAutoFreeze.bind(J),
        J.setUseProxies.bind(J),
        J.applyPatches.bind(J),
        J.createDraft.bind(J)),
    $ = J.finishDraft.bind(J);
