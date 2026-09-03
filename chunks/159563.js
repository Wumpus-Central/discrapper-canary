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
    return !!e && !!e[L];
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
            return n === Object || ("function" == typeof n && Function.toString.call(n) === Z);
        })(e) ||
            Array.isArray(e) ||
            !!e[j] ||
            !!(null == (t = e.constructor) ? void 0 : t[j]) ||
            d(e) ||
            c(e))
    );
}
function o(e, t, n) {
    void 0 === n && (n = !1),
        0 === u(e)
            ? (n ? Object.keys : U)(e).forEach(function (r) {
                  (n && "symbol" == typeof r) || t(r, e[r], e);
              })
            : e.forEach(function (n, r) {
                  return t(r, n, e);
              });
}
function u(e) {
    var t = e[L];
    return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : d(e) ? 2 : 3 * !!c(e);
}
function s(e, t) {
    return 2 === u(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function l(e, t, n) {
    var r = u(e);
    2 === r ? e.set(t, n) : 3 === r ? e.add(n) : (e[t] = n);
}
function d(e) {
    return R && e instanceof Map;
}
function c(e) {
    return M && e instanceof Set;
}
function f(e) {
    return e.o || e.t;
}
function h(e) {
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    var t = $(e);
    delete t[L];
    for (var n = U(t), r = 0; r < n.length; r++) {
        var i = n[r],
            a = t[i];
        !1 === a.writable && ((a.writable = !0), (a.configurable = !0)),
            (a.get || a.set) && (t[i] = { configurable: !0, writable: !0, enumerable: a.enumerable, value: e[i] });
    }
    return Object.create(Object.getPrototypeOf(e), t);
}
function p(e, t) {
    return (
        void 0 === t && (t = !1),
        v(e) ||
            i(e) ||
            !a(e) ||
            (u(e) > 1 && (e.set = e.add = e.clear = e.delete = m),
            Object.freeze(e),
            t &&
                o(
                    e,
                    function (e, t) {
                        return p(t, !0);
                    },
                    !0,
                )),
        e
    );
}
function m() {
    r(2);
}
function v(e) {
    return null == e || "object" != typeof e || Object.isFrozen(e);
}
function _(e) {
    var t = W[e];
    return t || r(18, e), t;
}
n.d(t, { Qx: () => i, jM: () => q, mq: () => J, vD: () => Q });
function g(e, t) {
    t && (_("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function y(e) {
    b(e), e.p.forEach(w), (e.p = null);
}
function b(e) {
    e === S && (S = e.l);
}
function D(e) {
    return (S = { p: [], l: S, h: e, m: !0, _: 0 });
}
function w(e) {
    var t = e[L];
    0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
}
function E(e, t) {
    t._ = t.p.length;
    var n = t.p[0],
        i = void 0 !== e && e !== n;
    return (
        t.h.O || _("ES5").S(t, e, i),
        i
            ? (n[L].P && (y(t), r(4)),
              a(e) && ((e = C(t, e)), t.l || B(t, e)),
              t.u && _("Patches").M(n[L].t, e, t.u, t.s))
            : (e = C(t, n, [])),
        y(t),
        t.u && t.v(t.u, t.s),
        e !== I ? e : void 0
    );
}
function C(e, t, n) {
    if (v(t)) return t;
    var r = t[L];
    if (!r)
        return (
            o(
                t,
                function (i, a) {
                    return A(e, r, t, i, a, n);
                },
                !0,
            ),
            t
        );
    if (r.A !== e) return t;
    if (!r.P) return B(e, r.t, !0), r.t;
    if (!r.I) {
        (r.I = !0), r.A._--;
        var i = 4 === r.i || 5 === r.i ? (r.o = h(r.k)) : r.o,
            a = i,
            u = !1;
        3 === r.i && ((a = new Set(i)), i.clear(), (u = !0)),
            o(a, function (t, a) {
                return A(e, r, i, t, a, n, u);
            }),
            B(e, i, !1),
            n && e.u && _("Patches").N(r, n, e.u, e.s);
    }
    return r.o;
}
function A(e, t, n, r, o, u, d) {
    if (i(o)) {
        var c = C(e, o, u && t && 3 !== t.i && !s(t.R, r) ? u.concat(r) : void 0);
        if ((l(n, r, c), !i(c))) return;
        e.m = !1;
    } else d && n.add(o);
    if (a(o) && !v(o)) {
        if (!e.h.D && e._ < 1) return;
        C(e, o), (t && t.A.l) || B(e, o);
    }
}
function B(e, t, n) {
    void 0 === n && (n = !1), !e.l && e.h.D && e.m && p(t, n);
}
function k(e, t) {
    var n = e[L];
    return (n ? f(n) : e)[t];
}
function F(e, t) {
    if (t in e)
        for (var n = Object.getPrototypeOf(e); n; ) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r) return r;
            n = Object.getPrototypeOf(n);
        }
}
function T(e) {
    e.P || ((e.P = !0), e.l && T(e.l));
}
function V(e) {
    e.o || (e.o = h(e.t));
}
function x(e, t, n) {
    var r,
        i,
        a,
        o,
        u,
        s,
        l,
        f = d(t)
            ? _("MapSet").F(t, n)
            : c(t)
              ? _("MapSet").T(t, n)
              : e.O
                ? ((a = i =
                      {
                          i: +!!(r = Array.isArray(t)),
                          A: n ? n.A : S,
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
                  (o = G),
                  r && ((a = [i]), (o = K)),
                  (s = (u = Proxy.revocable(a, o)).revoke),
                  (i.k = l = u.proxy),
                  (i.j = s),
                  l)
                : _("ES5").J(t, n);
    return (n ? n.A : S).p.push(f), f;
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
var O,
    S,
    z = "u" > typeof Symbol && "symbol" == typeof Symbol("x"),
    R = "u" > typeof Map,
    M = "u" > typeof Set,
    N = "u" > typeof Proxy && void 0 !== Proxy.revocable && "u" > typeof Reflect,
    I = z ? Symbol.for("immer-nothing") : (((O = {})["immer-nothing"] = !0), O),
    j = z ? Symbol.for("immer-draftable") : "__$immer_draftable",
    L = z ? Symbol.for("immer-state") : "__$immer_state",
    Z = "" + Object.prototype.constructor,
    U =
        "u" > typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
              ? function (e) {
                    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
                }
              : Object.getOwnPropertyNames,
    $ =
        Object.getOwnPropertyDescriptors ||
        function (e) {
            var t = {};
            return (
                U(e).forEach(function (n) {
                    t[n] = Object.getOwnPropertyDescriptor(e, n);
                }),
                t
            );
        },
    W = {},
    G = {
        get: function (e, t) {
            if (t === L) return e;
            var n,
                r,
                i = f(e);
            if (!s(i, t))
                return (r = F(i, t)) ? ("value" in r ? r.value : null == (n = r.get) ? void 0 : n.call(e.k)) : void 0;
            var o = i[t];
            return e.I || !a(o) ? o : o === k(e.t, t) ? (V(e), (e.o[t] = x(e.A.h, o, e))) : o;
        },
        has: function (e, t) {
            return t in f(e);
        },
        ownKeys: function (e) {
            return Reflect.ownKeys(f(e));
        },
        set: function (e, t, n) {
            var r = F(f(e), t);
            if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
            if (!e.P) {
                var i = k(f(e), t),
                    a = null == i ? void 0 : i[L];
                if (a && a.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
                if ((n === i ? 0 !== n || 1 / n == 1 / i : n != n && i != i) && (void 0 !== n || s(e.t, t))) return !0;
                V(e), T(e);
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
                void 0 !== k(e.t, t) || t in e.t ? ((e.R[t] = !1), V(e), T(e)) : delete e.R[t], e.o && delete e.o[t], !0
            );
        },
        getOwnPropertyDescriptor: function (e, t) {
            var n = f(e),
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
    K = {};
o(G, function (e, t) {
    K[e] = function () {
        return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
    };
}),
    (K.deleteProperty = function (e, t) {
        return K.set.call(this, e, t, void 0);
    }),
    (K.set = function (e, t, n) {
        return G.set.call(this, e[0], t, n, e[0]);
    });
var H = new ((function () {
        function e(e) {
            var t = this;
            (this.O = N),
                (this.D = !0),
                (this.produce = function (e, n, i) {
                    if ("function" == typeof e && "function" != typeof n) {
                        var o,
                            u = n;
                        return (
                            (n = e),
                            function (e) {
                                var r = this;
                                void 0 === e && (e = u);
                                for (var i = arguments.length, a = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
                                    a[o - 1] = arguments[o];
                                return t.produce(e, function (e) {
                                    var t;
                                    return (t = n).call.apply(t, [r, e].concat(a));
                                });
                            }
                        );
                    }
                    if (("function" != typeof n && r(6), void 0 !== i && "function" != typeof i && r(7), a(e))) {
                        var s = D(t),
                            l = x(t, e, void 0),
                            d = !0;
                        try {
                            (o = n(l)), (d = !1);
                        } finally {
                            d ? y(s) : b(s);
                        }
                        return "u" > typeof Promise && o instanceof Promise
                            ? o.then(
                                  function (e) {
                                      return g(s, i), E(e, s);
                                  },
                                  function (e) {
                                      throw (y(s), e);
                                  },
                              )
                            : (g(s, i), E(o, s));
                    }
                    if (!e || "object" != typeof e) {
                        if ((void 0 === (o = n(e)) && (o = e), o === I && (o = void 0), t.D && p(o, !0), i)) {
                            var c = [],
                                f = [];
                            _("Patches").M(e, o, c, f), i(c, f);
                        }
                        return o;
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
                a(e) || r(8),
                    i(e) &&
                        (i((t = e)) || r(22, t),
                        (e = (function e(t) {
                            if (!a(t)) return t;
                            var n,
                                r = t[L],
                                i = u(t);
                            if (r) {
                                if (!r.P && (r.i < 4 || !_("ES5").K(r))) return r.t;
                                (r.I = !0), (n = P(t, i)), (r.I = !1);
                            } else n = P(t, i);
                            return (
                                o(n, function (t, i) {
                                    var a;
                                    (r && ((a = r.t), (2 === u(a) ? a.get(t) : a[t]) === i)) || l(n, t, e(i));
                                }),
                                3 === i ? new Set(n) : n
                            );
                        })(t)));
                var t,
                    n = D(this),
                    s = x(this, e, void 0);
                return (s[L].C = !0), b(n), s;
            }),
            (t.finishDraft = function (e, t) {
                var n = (e && e[L]).A;
                return g(n, t), E(void 0, n);
            }),
            (t.setAutoFreeze = function (e) {
                this.D = e;
            }),
            (t.setUseProxies = function (e) {
                e && !N && r(20), (this.O = e);
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
                var a = _("Patches").$;
                return i(e)
                    ? a(e, t)
                    : this.produce(e, function (e) {
                          return a(e, t);
                      });
            }),
            e
        );
    })())(),
    q = H.produce,
    J =
        (H.produceWithPatches.bind(H),
        H.setAutoFreeze.bind(H),
        H.setUseProxies.bind(H),
        H.applyPatches.bind(H),
        H.createDraft.bind(H)),
    Q = H.finishDraft.bind(H);
