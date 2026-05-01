"use strict";
function r(e) {
    return "[object Object]" === Object.prototype.toString.call(e);
}
function i(e) {
    var t, n;
    return (
        !1 !== r(e) &&
        (void 0 === (t = e.constructor) || (!1 !== r((n = t.prototype)) && !1 !== n.hasOwnProperty("isPrototypeOf")))
    );
}
function a(e) {
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
function u(e) {
    return !!e && !!e[H];
}
function o(e) {
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
            !!e[U] ||
            !!(null == (t = e.constructor) ? void 0 : t[U]) ||
            f(e) ||
            h(e))
    );
}
function s(e, t, n) {
    void 0 === n && (n = !1),
        0 === l(e)
            ? (n ? Object.keys : z)(e).forEach(function (r) {
                  (n && "symbol" == typeof r) || t(r, e[r], e);
              })
            : e.forEach(function (n, r) {
                  return t(r, n, e);
              });
}
function l(e) {
    var t = e[H];
    return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : f(e) ? 2 : 3 * !!h(e);
}
function d(e, t) {
    return 2 === l(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function c(e, t, n) {
    var r = l(e);
    2 === r ? e.set(t, n) : 3 === r ? e.add(n) : (e[t] = n);
}
function f(e) {
    return j && e instanceof Map;
}
function h(e) {
    return G && e instanceof Set;
}
function p(e) {
    return e.o || e.t;
}
function m(e) {
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    var t = X(e);
    delete t[H];
    for (var n = z(t), r = 0; r < n.length; r++) {
        var i = n[r],
            a = t[i];
        !1 === a.writable && ((a.writable = !0), (a.configurable = !0)),
            (a.get || a.set) && (t[i] = { configurable: !0, writable: !0, enumerable: a.enumerable, value: e[i] });
    }
    return Object.create(Object.getPrototypeOf(e), t);
}
function _(e, t) {
    return (
        void 0 === t && (t = !1),
        g(e) ||
            u(e) ||
            !o(e) ||
            (l(e) > 1 && (e.set = e.add = e.clear = e.delete = v),
            Object.freeze(e),
            t &&
                s(
                    e,
                    function (e, t) {
                        return _(t, !0);
                    },
                    !0,
                )),
        e
    );
}
function v() {
    a(2);
}
function g(e) {
    return null == e || "object" != typeof e || Object.isFrozen(e);
}
function y(e) {
    var t = Q[e];
    return t || a(18, e), t;
}
n.d(t, {
    KE: () => eq,
    bP: () => eY,
    bR: () => e8,
    Q6: () => e6,
    ie: () => ef,
    gB: () => tb,
    Hg: () => ej,
    wA: () => e1,
    EY: () => ts,
    h6: () => tn,
});
function D(e, t) {
    t && (y("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function b(e) {
    C(e), e.p.forEach(w), (e.p = null);
}
function C(e) {
    e === L && (L = e.l);
}
function E(e) {
    return (L = { p: [], l: L, h: e, m: !0, _: 0 });
}
function w(e) {
    var t = e[H];
    0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
}
function A(e, t) {
    t._ = t.p.length;
    var n = t.p[0],
        r = void 0 !== e && e !== n;
    return (
        t.h.O || y("ES5").S(t, e, r),
        r
            ? (n[H].P && (b(t), a(4)),
              o(e) && ((e = B(t, e)), t.l || V(t, e)),
              t.u && y("Patches").M(n[H].t, e, t.u, t.s))
            : (e = B(t, n, [])),
        b(t),
        t.u && t.v(t.u, t.s),
        e !== K ? e : void 0
    );
}
function B(e, t, n) {
    if (g(t)) return t;
    var r = t[H];
    if (!r)
        return (
            s(
                t,
                function (i, a) {
                    return F(e, r, t, i, a, n);
                },
                !0,
            ),
            t
        );
    if (r.A !== e) return t;
    if (!r.P) return V(e, r.t, !0), r.t;
    if (!r.I) {
        (r.I = !0), r.A._--;
        var i = 4 === r.i || 5 === r.i ? (r.o = m(r.k)) : r.o,
            a = i,
            u = !1;
        3 === r.i && ((a = new Set(i)), i.clear(), (u = !0)),
            s(a, function (t, a) {
                return F(e, r, i, t, a, n, u);
            }),
            V(e, i, !1),
            n && e.u && y("Patches").N(r, n, e.u, e.s);
    }
    return r.o;
}
function F(e, t, n, r, i, a, s) {
    if (u(i)) {
        var l = B(e, i, a && t && 3 !== t.i && !d(t.R, r) ? a.concat(r) : void 0);
        if ((c(n, r, l), !u(l))) return;
        e.m = !1;
    } else s && n.add(i);
    if (o(i) && !g(i)) {
        if (!e.h.D && e._ < 1) return;
        B(e, i), (t && t.A.l) || V(e, i);
    }
}
function V(e, t, n) {
    void 0 === n && (n = !1), !e.l && e.h.D && e.m && _(t, n);
}
function T(e, t) {
    var n = e[H];
    return (n ? p(n) : e)[t];
}
function k(e, t) {
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
function P(e) {
    e.o || (e.o = m(e.t));
}
function O(e, t, n) {
    var r,
        i,
        a,
        u,
        o,
        s,
        l,
        d = f(t)
            ? y("MapSet").F(t, n)
            : h(t)
              ? y("MapSet").T(t, n)
              : e.O
                ? ((a = i =
                      {
                          i: +!!(r = Array.isArray(t)),
                          A: n ? n.A : L,
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
                  (u = Z),
                  r && ((a = [i]), (u = Y)),
                  (s = (o = Proxy.revocable(a, u)).revoke),
                  (i.k = l = o.proxy),
                  (i.j = s),
                  l)
                : y("ES5").J(t, n);
    return (n ? n.A : L).p.push(d), d;
}
function S(e, t) {
    switch (t) {
        case 2:
            return new Map(e);
        case 3:
            return Array.from(e);
    }
    return m(e);
}
var R,
    M,
    N,
    L,
    I = "u" > typeof Symbol && "symbol" == typeof Symbol("x"),
    j = "u" > typeof Map,
    G = "u" > typeof Set,
    W = "u" > typeof Proxy && void 0 !== Proxy.revocable && "u" > typeof Reflect,
    K = I ? Symbol.for("immer-nothing") : (((N = {})["immer-nothing"] = !0), N),
    U = I ? Symbol.for("immer-draftable") : "__$immer_draftable",
    H = I ? Symbol.for("immer-state") : "__$immer_state",
    q = "" + Object.prototype.constructor,
    z =
        "u" > typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
              ? function (e) {
                    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
                }
              : Object.getOwnPropertyNames,
    X =
        Object.getOwnPropertyDescriptors ||
        function (e) {
            var t = {};
            return (
                z(e).forEach(function (n) {
                    t[n] = Object.getOwnPropertyDescriptor(e, n);
                }),
                t
            );
        },
    Q = {},
    Z = {
        get: function (e, t) {
            if (t === H) return e;
            var n,
                r,
                i = p(e);
            if (!d(i, t))
                return (r = k(i, t)) ? ("value" in r ? r.value : null == (n = r.get) ? void 0 : n.call(e.k)) : void 0;
            var a = i[t];
            return e.I || !o(a) ? a : a === T(e.t, t) ? (P(e), (e.o[t] = O(e.A.h, a, e))) : a;
        },
        has: function (e, t) {
            return t in p(e);
        },
        ownKeys: function (e) {
            return Reflect.ownKeys(p(e));
        },
        set: function (e, t, n) {
            var r = k(p(e), t);
            if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
            if (!e.P) {
                var i = T(p(e), t),
                    a = null == i ? void 0 : i[H];
                if (a && a.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
                if ((n === i ? 0 !== n || 1 / n == 1 / i : n != n && i != i) && (void 0 !== n || d(e.t, t))) return !0;
                P(e), x(e);
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
                void 0 !== T(e.t, t) || t in e.t ? ((e.R[t] = !1), P(e), x(e)) : delete e.R[t], e.o && delete e.o[t], !0
            );
        },
        getOwnPropertyDescriptor: function (e, t) {
            var n = p(e),
                r = Reflect.getOwnPropertyDescriptor(n, t);
            return r
                ? { writable: !0, configurable: 1 !== e.i || "length" !== t, enumerable: r.enumerable, value: n[t] }
                : r;
        },
        defineProperty: function () {
            a(11);
        },
        getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t);
        },
        setPrototypeOf: function () {
            a(12);
        },
    },
    Y = {};
s(Z, function (e, t) {
    Y[e] = function () {
        return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
    };
}),
    (Y.deleteProperty = function (e, t) {
        return Y.set.call(this, e, t, void 0);
    }),
    (Y.set = function (e, t, n) {
        return Z.set.call(this, e[0], t, n, e[0]);
    });
var J = new ((function () {
        function e(e) {
            var t = this;
            (this.O = W),
                (this.D = !0),
                (this.produce = function (e, n, r) {
                    if ("function" == typeof e && "function" != typeof n) {
                        var i,
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
                    if (("function" != typeof n && a(6), void 0 !== r && "function" != typeof r && a(7), o(e))) {
                        var s = E(t),
                            l = O(t, e, void 0),
                            d = !0;
                        try {
                            (i = n(l)), (d = !1);
                        } finally {
                            d ? b(s) : C(s);
                        }
                        return "u" > typeof Promise && i instanceof Promise
                            ? i.then(
                                  function (e) {
                                      return D(s, r), A(e, s);
                                  },
                                  function (e) {
                                      throw (b(s), e);
                                  },
                              )
                            : (D(s, r), A(i, s));
                    }
                    if (!e || "object" != typeof e) {
                        if ((void 0 === (i = n(e)) && (i = e), i === K && (i = void 0), t.D && _(i, !0), r)) {
                            var c = [],
                                f = [];
                            y("Patches").M(e, i, c, f), r(c, f);
                        }
                        return i;
                    }
                    a(21, e);
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
                o(e) || a(8),
                    u(e) &&
                        (u((t = e)) || a(22, t),
                        (e = (function e(t) {
                            if (!o(t)) return t;
                            var n,
                                r = t[H],
                                i = l(t);
                            if (r) {
                                if (!r.P && (r.i < 4 || !y("ES5").K(r))) return r.t;
                                (r.I = !0), (n = S(t, i)), (r.I = !1);
                            } else n = S(t, i);
                            return (
                                s(n, function (t, i) {
                                    var a;
                                    (r && ((a = r.t), (2 === l(a) ? a.get(t) : a[t]) === i)) || c(n, t, e(i));
                                }),
                                3 === i ? new Set(n) : n
                            );
                        })(t)));
                var t,
                    n = E(this),
                    r = O(this, e, void 0);
                return (r[H].C = !0), C(n), r;
            }),
            (t.finishDraft = function (e, t) {
                var n = (e && e[H]).A;
                return D(n, t), A(void 0, n);
            }),
            (t.setAutoFreeze = function (e) {
                this.D = e;
            }),
            (t.setUseProxies = function (e) {
                e && !W && a(20), (this.O = e);
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
                var i = y("Patches").$;
                return u(e)
                    ? i(e, t)
                    : this.produce(e, function (e) {
                          return i(e, t);
                      });
            }),
            e
        );
    })())(),
    $ = J.produce,
    ee =
        (J.produceWithPatches.bind(J),
        J.setAutoFreeze.bind(J),
        J.setUseProxies.bind(J),
        J.applyPatches.bind(J),
        J.createDraft.bind(J)),
    et = J.finishDraft.bind(J);
function en(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
var er = new WeakMap(),
    ei = new WeakMap(),
    ea = new WeakMap(),
    eu = new WeakMap(),
    eo = new WeakMap(),
    es = new WeakMap(),
    el = new WeakMap();
function ed(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function ec(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? ed(Object(n), !0).forEach(function (t) {
                  en(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ed(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var ef = () => {
    var e = {
        children: [],
        operations: [],
        selection: null,
        marks: null,
        isInline: () => !1,
        isVoid: () => !1,
        markableVoid: () => !1,
        onChange: () => {},
        apply: (t) => {
            for (var n of eq.pathRefs(e)) e2.transform(n, t);
            for (var r of eq.pointRefs(e)) e7.transform(r, t);
            for (var i of eq.rangeRefs(e)) te.transform(i, t);
            var a,
                u,
                o = er.get(e) || [],
                s = ei.get(e) || new Set(),
                l = (e) => {
                    if (e) {
                        var t = e.join(",");
                        u.has(t) || (u.add(t), a.push(e));
                    }
                };
            if (e1.operationCanTransformPath(t)) for (var d of ((a = []), (u = new Set()), o)) l(e1.transform(d, t));
            else (a = o), (u = s);
            for (var c of e.getDirtyPaths(t)) l(c);
            er.set(e, a),
                ei.set(e, u),
                tb.transform(e, t),
                e.operations.push(t),
                eq.normalize(e, { operation: t }),
                "set_selection" === t.type && (e.marks = null),
                ea.get(e) ||
                    (ea.set(e, !0),
                    Promise.resolve().then(() => {
                        ea.set(e, !1), e.onChange({ operation: t }), (e.operations = []);
                    }));
        },
        addMark: (t, n) => {
            var { selection: r, markableVoid: i } = e;
            if (r) {
                var a = (t, n) => {
                        if (!ts.isText(t)) return !1;
                        var [r, i] = eq.parent(e, n);
                        return !e.isVoid(r) || e.markableVoid(r);
                    },
                    u = e6.isExpanded(r),
                    o = !1;
                if (!u) {
                    var [s, l] = eq.node(e, r);
                    if (s && a(s, l)) {
                        var [d] = eq.parent(e, l);
                        o = d && e.markableVoid(d);
                    }
                }
                if (u || o) tb.setNodes(e, { [t]: n }, { match: a, split: !0, voids: !0 });
                else {
                    var c = ec(ec({}, eq.marks(e) || {}), {}, { [t]: n });
                    (e.marks = c), ea.get(e) || e.onChange();
                }
            }
        },
        deleteBackward: (t) => {
            var { selection: n } = e;
            n && e6.isCollapsed(n) && tb.delete(e, { unit: t, reverse: !0 });
        },
        deleteForward: (t) => {
            var { selection: n } = e;
            n && e6.isCollapsed(n) && tb.delete(e, { unit: t });
        },
        deleteFragment: (t) => {
            var { selection: n } = e;
            n && e6.isExpanded(n) && tb.delete(e, { reverse: "backward" === t });
        },
        getFragment: () => {
            var { selection: t } = e;
            return t ? eY.fragment(e, t) : [];
        },
        insertBreak: () => {
            tb.splitNodes(e, { always: !0 });
        },
        insertSoftBreak: () => {
            tb.splitNodes(e, { always: !0 });
        },
        insertFragment: (t) => {
            tb.insertFragment(e, t);
        },
        insertNode: (t) => {
            tb.insertNodes(e, t);
        },
        insertText: (t) => {
            var { selection: n, marks: r } = e;
            if (n) {
                if (r) {
                    var i = ec({ text: t }, r);
                    tb.insertNodes(e, i);
                } else tb.insertText(e, t);
                e.marks = null;
            }
        },
        normalizeNode: (t) => {
            var [n, r] = t;
            if (!ts.isText(n)) {
                if (ej.isElement(n) && 0 === n.children.length)
                    return void tb.insertNodes(e, { text: "" }, { at: r.concat(0), voids: !0 });
                for (
                    var i =
                            !eq.isEditor(n) &&
                            ej.isElement(n) &&
                            (e.isInline(n) ||
                                0 === n.children.length ||
                                ts.isText(n.children[0]) ||
                                e.isInline(n.children[0])),
                        a = 0,
                        u = 0;
                    u < n.children.length;
                    u++, a++
                ) {
                    var o = eY.get(e, r);
                    if (!ts.isText(o)) {
                        var s = n.children[u],
                            l = o.children[a - 1],
                            d = u === n.children.length - 1;
                        if ((ts.isText(s) || (ej.isElement(s) && e.isInline(s))) !== i)
                            tb.removeNodes(e, { at: r.concat(a), voids: !0 }), a--;
                        else if (ej.isElement(s)) {
                            if (e.isInline(s))
                                if (null != l && ts.isText(l)) {
                                    if (d) {
                                        var c = { text: "" };
                                        tb.insertNodes(e, c, { at: r.concat(a + 1), voids: !0 }), a++;
                                    }
                                } else {
                                    var f = { text: "" };
                                    tb.insertNodes(e, f, { at: r.concat(a), voids: !0 }), a++;
                                }
                        } else
                            null != l &&
                                ts.isText(l) &&
                                (ts.equals(s, l, { loose: !0 })
                                    ? (tb.mergeNodes(e, { at: r.concat(a), voids: !0 }), a--)
                                    : "" === l.text
                                      ? (tb.removeNodes(e, { at: r.concat(a - 1), voids: !0 }), a--)
                                      : "" === s.text && (tb.removeNodes(e, { at: r.concat(a), voids: !0 }), a--));
                    }
                }
            }
        },
        removeMark: (t) => {
            var { selection: n } = e;
            if (n) {
                var r = (t, n) => {
                        if (!ts.isText(t)) return !1;
                        var [r, i] = eq.parent(e, n);
                        return !e.isVoid(r) || e.markableVoid(r);
                    },
                    i = e6.isExpanded(n),
                    a = !1;
                if (!i) {
                    var [u, o] = eq.node(e, n);
                    if (u && r(u, o)) {
                        var [s] = eq.parent(e, o);
                        a = s && e.markableVoid(s);
                    }
                }
                if (i || a) tb.unsetNodes(e, t, { match: r, split: !0, voids: !0 });
                else {
                    var l = ec({}, eq.marks(e) || {});
                    delete l[t], (e.marks = l), ea.get(e) || e.onChange();
                }
            }
        },
        getDirtyPaths: (e) => {
            switch (e.type) {
                case "insert_text":
                case "remove_text":
                case "set_node":
                    var { path: t } = e;
                    return e1.levels(t);
                case "insert_node":
                    var { node: n, path: r } = e;
                    return [
                        ...e1.levels(r),
                        ...(ts.isText(n)
                            ? []
                            : Array.from(eY.nodes(n), (e) => {
                                  var [, t] = e;
                                  return r.concat(t);
                              })),
                    ];
                case "merge_node":
                    var { path: i } = e;
                    return [...e1.ancestors(i), e1.previous(i)];
                case "move_node":
                    var { path: a, newPath: u } = e;
                    if (e1.equals(a, u)) return [];
                    var o = [],
                        s = [];
                    for (var l of e1.ancestors(a)) {
                        var d = e1.transform(l, e);
                        o.push(d);
                    }
                    for (var c of e1.ancestors(u)) {
                        var f = e1.transform(c, e);
                        s.push(f);
                    }
                    var h = s[s.length - 1],
                        p = u[u.length - 1];
                    return [...o, ...s, h.concat(p)];
                case "remove_node":
                    var { path: m } = e;
                    return [...e1.ancestors(m)];
                case "split_node":
                    var { path: _ } = e;
                    return [...e1.levels(_), e1.next(_)];
                default:
                    return [];
            }
        },
        shouldNormalize: (e) => {
            var { iteration: t, initialDirtyPathsLength: n } = e,
                r = 42 * n;
            if (t > r)
                throw Error(
                    "Could not completely normalize the editor after ".concat(
                        r,
                        " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.",
                    ),
                );
            return !0;
        },
    };
    return e;
};
function eh(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
var ep = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !t,
            r = t ? eb(e) : e,
            i = M.None,
            a = M.None,
            u = 0,
            o = null;
        for (var s of r) {
            var l = s.codePointAt(0);
            if (!l) break;
            var d = eO(s, l);
            if (
                (([i, a] = n ? [a, d] : [d, i]),
                (i & M.ZWJ) != 0 &&
                    (a & M.ExtPict) != 0 &&
                    !(n ? eM(e.substring(0, u)) : eM(e.substring(0, e.length - u))))
            )
                break;
            if (
                ((i & M.RI) != 0 &&
                    (a & M.RI) != 0 &&
                    !(o = null !== o ? !o : !!n || eL(e.substring(0, e.length - u)))) ||
                (i !== M.None &&
                    a !== M.None &&
                    (function (e, t) {
                        return -1 === eS.findIndex((n) => (e & n[0]) != 0 && (t & n[1]) != 0);
                    })(i, a))
            )
                break;
            u += s.length;
        }
        return u || 1;
    },
    em = /\s/,
    e_ =
        /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
    ev = /['\u2018\u2019]/,
    eg = function (e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = 0, r = !1; e.length > 0; ) {
            var i = ep(e, t),
                [a, u] = ey(e, i, t);
            if (eD(a, u, t)) (r = !0), (n += i);
            else if (r) break;
            else n += i;
            e = u;
        }
        return n;
    },
    ey = (e, t, n) => {
        if (n) {
            var r = e.length - t;
            return [e.slice(r, e.length), e.slice(0, r)];
        }
        return [e.slice(0, t), e.slice(t)];
    },
    eD = function e(t, n) {
        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (em.test(t)) return !1;
        if (ev.test(t)) {
            var i = ep(n, r),
                [a, u] = ey(n, i, r);
            if (e(a, u, r)) return !0;
        }
        return !e_.test(t);
    },
    eb = function* (e) {
        for (var t = e.length - 1, n = 0; n < e.length; n++) {
            var r = e.charAt(t - n);
            if (eE(r.charCodeAt(0))) {
                var i = e.charAt(t - n - 1);
                if (eC(i.charCodeAt(0))) {
                    yield i + r, n++;
                    continue;
                }
            }
            yield r;
        }
    },
    eC = (e) => e >= 55296 && e <= 56319,
    eE = (e) => e >= 56320 && e <= 57343;
((R = M || (M = {}))[(R.None = 0)] = "None"),
    (R[(R.Extend = 1)] = "Extend"),
    (R[(R.ZWJ = 2)] = "ZWJ"),
    (R[(R.RI = 4)] = "RI"),
    (R[(R.Prepend = 8)] = "Prepend"),
    (R[(R.SpacingMark = 16)] = "SpacingMark"),
    (R[(R.L = 32)] = "L"),
    (R[(R.V = 64)] = "V"),
    (R[(R.T = 128)] = "T"),
    (R[(R.LV = 256)] = "LV"),
    (R[(R.LVT = 512)] = "LVT"),
    (R[(R.ExtPict = 1024)] = "ExtPict"),
    (R[(R.Any = 2048)] = "Any");
var ew =
        /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
    eA =
        /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
    eB =
        /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
    eF = /^[\u1100-\u115F\uA960-\uA97C]$/,
    eV = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
    eT = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
    ek =
        /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
    ex =
        /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
    eP =
        /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
    eO = (e, t) => {
        var n = M.Any;
        return (
            -1 !== e.search(ew) && (n |= M.Extend),
            8205 === t && (n |= M.ZWJ),
            t >= 127462 && t <= 127487 && (n |= M.RI),
            -1 !== e.search(eA) && (n |= M.Prepend),
            -1 !== e.search(eB) && (n |= M.SpacingMark),
            -1 !== e.search(eF) && (n |= M.L),
            -1 !== e.search(eV) && (n |= M.V),
            -1 !== e.search(eT) && (n |= M.T),
            -1 !== e.search(ek) && (n |= M.LV),
            -1 !== e.search(ex) && (n |= M.LVT),
            -1 !== e.search(eP) && (n |= M.ExtPict),
            n
        );
    },
    eS = [
        [M.L, M.L | M.V | M.LV | M.LVT],
        [M.LV | M.V, M.V | M.T],
        [M.LVT | M.T, M.T],
        [M.Any, M.Extend | M.ZWJ],
        [M.Any, M.SpacingMark],
        [M.Prepend, M.Any],
        [M.ZWJ, M.ExtPict],
        [M.RI, M.RI],
    ],
    eR =
        /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
    eM = (e) => -1 !== e.search(eR),
    eN = /(?:\uD83C[\uDDE6-\uDDFF])+$/g,
    eL = (e) => {
        var t = e.match(eN);
        return null !== t && (t[0].length / 2) % 2 == 1;
    },
    eI = (e) => i(e) && eY.isNodeList(e.children) && !eq.isEditor(e),
    ej = {
        isAncestor: (e) => i(e) && eY.isNodeList(e.children),
        isElement: eI,
        isElementList: (e) => Array.isArray(e) && e.every((e) => ej.isElement(e)),
        isElementProps: (e) => void 0 !== e.children,
        isElementType: function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "type";
            return eI(e) && e[n] === t;
        },
        matches(e, t) {
            for (var n in t) if ("children" !== n && e[n] !== t[n]) return !1;
            return !0;
        },
    },
    eG = ["text"],
    eW = ["text"];
function eK(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function eU(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eK(Object(n), !0).forEach(function (t) {
                  en(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eK(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var eH = new WeakMap(),
    eq = {
        above(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { voids: n = !1, mode: r = "lowest", at: i = e.selection, match: a } = t;
            if (i) {
                var u = eq.path(e, i);
                for (var [o, s] of eq.levels(e, { at: u, voids: n, match: a, reverse: "lowest" === r }))
                    if (!ts.isText(o)) {
                        if (e6.isRange(i)) {
                            if (e1.isAncestor(s, i.anchor.path) && e1.isAncestor(s, i.focus.path)) return [o, s];
                        } else if (!e1.equals(u, s)) return [o, s];
                    }
            }
        },
        addMark(e, t, n) {
            e.addMark(t, n);
        },
        after(e, t) {
            var n,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = eq.point(e, t, { edge: "end" }),
                a = eq.end(e, []),
                { distance: u = 1 } = r,
                o = 0;
            for (var s of eq.positions(e, eU(eU({}, r), {}, { at: { anchor: i, focus: a } }))) {
                if (o > u) break;
                0 !== o && (n = s), o++;
            }
            return n;
        },
        before(e, t) {
            var n,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = eq.start(e, []),
                a = eq.point(e, t, { edge: "start" }),
                { distance: u = 1 } = r,
                o = 0;
            for (var s of eq.positions(e, eU(eU({}, r), {}, { at: { anchor: i, focus: a }, reverse: !0 }))) {
                if (o > u) break;
                0 !== o && (n = s), o++;
            }
            return n;
        },
        deleteBackward(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { unit: n = "character" } = t;
            e.deleteBackward(n);
        },
        deleteForward(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { unit: n = "character" } = t;
            e.deleteForward(n);
        },
        deleteFragment(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { direction: n = "forward" } = t;
            e.deleteFragment(n);
        },
        edges: (e, t) => [eq.start(e, t), eq.end(e, t)],
        end: (e, t) => eq.point(e, t, { edge: "end" }),
        first(e, t) {
            var n = eq.path(e, t, { edge: "start" });
            return eq.node(e, n);
        },
        fragment(e, t) {
            var n = eq.range(e, t);
            return eY.fragment(e, n);
        },
        hasBlocks: (e, t) => t.children.some((t) => ej.isElement(t) && eq.isBlock(e, t)),
        hasInlines: (e, t) => t.children.some((t) => ts.isText(t) || eq.isInline(e, t)),
        hasTexts: (e, t) => t.children.every((e) => ts.isText(e)),
        insertBreak(e) {
            e.insertBreak();
        },
        insertSoftBreak(e) {
            e.insertSoftBreak();
        },
        insertFragment(e, t) {
            e.insertFragment(t);
        },
        insertNode(e, t) {
            e.insertNode(t);
        },
        insertText(e, t) {
            e.insertText(t);
        },
        isBlock: (e, t) => !e.isInline(t),
        isEditor(e) {
            var t = eH.get(e);
            if (void 0 !== t) return t;
            if (!i(e)) return !1;
            var n =
                "function" == typeof e.addMark &&
                "function" == typeof e.apply &&
                "function" == typeof e.deleteBackward &&
                "function" == typeof e.deleteForward &&
                "function" == typeof e.deleteFragment &&
                "function" == typeof e.insertBreak &&
                "function" == typeof e.insertSoftBreak &&
                "function" == typeof e.insertFragment &&
                "function" == typeof e.insertNode &&
                "function" == typeof e.insertText &&
                "function" == typeof e.isInline &&
                "function" == typeof e.isVoid &&
                "function" == typeof e.normalizeNode &&
                "function" == typeof e.onChange &&
                "function" == typeof e.removeMark &&
                "function" == typeof e.getDirtyPaths &&
                (null === e.marks || i(e.marks)) &&
                (null === e.selection || e6.isRange(e.selection)) &&
                eY.isNodeList(e.children) &&
                e0.isOperationList(e.operations);
            return eH.set(e, n), n;
        },
        isEnd(e, t, n) {
            var r = eq.end(e, n);
            return e8.equals(t, r);
        },
        isEdge: (e, t, n) => eq.isStart(e, t, n) || eq.isEnd(e, t, n),
        isEmpty(e, t) {
            var { children: n } = t,
                [r] = n;
            return 0 === n.length || (1 === n.length && ts.isText(r) && "" === r.text && !e.isVoid(t));
        },
        isInline: (e, t) => e.isInline(t),
        isNormalizing(e) {
            var t = eu.get(e);
            return void 0 === t || t;
        },
        isStart(e, t, n) {
            if (0 !== t.offset) return !1;
            var r = eq.start(e, n);
            return e8.equals(t, r);
        },
        isVoid: (e, t) => e.isVoid(t),
        last(e, t) {
            var n = eq.path(e, t, { edge: "end" });
            return eq.node(e, n);
        },
        leaf(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = eq.path(e, t, n);
            return [eY.leaf(e, r), r];
        },
        *levels(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: n = e.selection, reverse: r = !1, voids: i = !1 } = t,
                { match: a } = t;
            if ((null == a && (a = () => !0), n)) {
                var u = [],
                    o = eq.path(e, n);
                for (var [s, l] of eY.levels(e, o))
                    if (a(s, l) && (u.push([s, l]), !i && ej.isElement(s) && eq.isVoid(e, s))) break;
                r && u.reverse(), yield* u;
            }
        },
        marks(e) {
            var { marks: t, selection: n } = e;
            if (!n) return null;
            if (t) return t;
            if (e6.isExpanded(n)) {
                var [r] = eq.nodes(e, { match: ts.isText });
                if (!r) return {};
                var [i] = r;
                return eh(i, eG);
            }
            var { anchor: a } = n,
                { path: u } = a,
                [o] = eq.leaf(e, u);
            if (0 === a.offset) {
                var s = eq.previous(e, { at: u, match: ts.isText });
                if (!eq.above(e, { match: (t) => ej.isElement(t) && eq.isVoid(e, t) && e.markableVoid(t) })) {
                    var l = eq.above(e, { match: (t) => ej.isElement(t) && eq.isBlock(e, t) });
                    if (s && l) {
                        var [d, c] = s,
                            [, f] = l;
                        e1.isAncestor(f, c) && (o = d);
                    }
                }
            }
            return eh(o, eW);
        },
        next(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { mode: n = "lowest", voids: r = !1 } = t,
                { match: i, at: a = e.selection } = t;
            if (a) {
                var u = eq.after(e, a, { voids: r });
                if (u) {
                    var [, o] = eq.last(e, []),
                        s = [u.path, o];
                    if (e1.isPath(a) && 0 === a.length) throw Error("Cannot get the next node from the root node!");
                    if (null == i)
                        if (e1.isPath(a)) {
                            var [l] = eq.parent(e, a);
                            i = (e) => l.children.includes(e);
                        } else i = () => !0;
                    var [d] = eq.nodes(e, { at: s, match: i, mode: n, voids: r });
                    return d;
                }
            }
        },
        node(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = eq.path(e, t, n);
            return [eY.get(e, r), r];
        },
        *nodes(e) {
            var t,
                n,
                r,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: a = e.selection, mode: u = "all", universal: o = !1, reverse: s = !1, voids: l = !1 } = i,
                { match: d } = i;
            if ((d || (d = () => !0), a)) {
                if (ez.isSpan(a)) (t = a[0]), (n = a[1]);
                else {
                    var c = eq.path(e, a, { edge: "start" }),
                        f = eq.path(e, a, { edge: "end" });
                    (t = s ? f : c), (n = s ? c : f);
                }
                var h = eY.nodes(e, {
                        reverse: s,
                        from: t,
                        to: n,
                        pass: (t) => {
                            var [n] = t;
                            return !l && ej.isElement(n) && eq.isVoid(e, n);
                        },
                    }),
                    p = [];
                for (var [m, _] of h) {
                    var v = r && 0 === e1.compare(_, r[1]);
                    if ("highest" !== u || !v) {
                        if (!d(m, _))
                            if (o && !v && ts.isText(m)) return;
                            else continue;
                        if ("lowest" === u && v) {
                            r = [m, _];
                            continue;
                        }
                        var g = "lowest" === u ? r : [m, _];
                        g && (o ? p.push(g) : yield g), (r = [m, _]);
                    }
                }
                "lowest" === u && r && (o ? p.push(r) : yield r), o && (yield* p);
            }
        },
        normalize(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { force: n = !1, operation: r } = t,
                i = (e) => er.get(e) || [],
                a = (e) => {
                    var t = i(e).pop(),
                        n = t.join(",");
                    return (ei.get(e) || new Set()).delete(n), t;
                };
            if (eq.isNormalizing(e)) {
                if (n) {
                    var u = Array.from(eY.nodes(e), (e) => {
                            var [, t] = e;
                            return t;
                        }),
                        o = new Set(u.map((e) => e.join(",")));
                    er.set(e, u), ei.set(e, o);
                }
                0 !== i(e).length &&
                    eq.withoutNormalizing(e, () => {
                        for (var t of i(e))
                            if (eY.has(e, t)) {
                                var n = eq.node(e, t),
                                    [u, o] = n;
                                ej.isElement(u) && 0 === u.children.length && e.normalizeNode(n, { operation: r });
                            }
                        for (var s = i(e), l = s.length, d = 0; 0 !== s.length; ) {
                            if (
                                !e.shouldNormalize({
                                    dirtyPaths: s,
                                    iteration: d,
                                    initialDirtyPathsLength: l,
                                    operation: r,
                                })
                            )
                                return;
                            var c = a(e);
                            if (eY.has(e, c)) {
                                var f = eq.node(e, c);
                                e.normalizeNode(f, { operation: r });
                            }
                            d++, (s = i(e));
                        }
                    });
            }
        },
        parent(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = eq.path(e, t, n),
                i = e1.parent(r);
            return eq.node(e, i);
        },
        path(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { depth: r, edge: i } = n;
            if (e1.isPath(t)) {
                if ("start" === i) {
                    var [, a] = eY.first(e, t);
                    t = a;
                } else if ("end" === i) {
                    var [, u] = eY.last(e, t);
                    t = u;
                }
            }
            return (
                e6.isRange(t) &&
                    (t =
                        "start" === i ? e6.start(t) : "end" === i ? e6.end(t) : e1.common(t.anchor.path, t.focus.path)),
                e8.isPoint(t) && (t = t.path),
                null != r && (t = t.slice(0, r)),
                t
            );
        },
        hasPath: (e, t) => eY.has(e, t),
        pathRef(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: r = "forward" } = n,
                i = {
                    current: t,
                    affinity: r,
                    unref() {
                        var { current: t } = i;
                        return eq.pathRefs(e).delete(i), (i.current = null), t;
                    },
                };
            return eq.pathRefs(e).add(i), i;
        },
        pathRefs(e) {
            var t = eo.get(e);
            return t || ((t = new Set()), eo.set(e, t)), t;
        },
        point(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { edge: r = "start" } = n;
            if (e1.isPath(t)) {
                if ("end" === r) {
                    var i,
                        [, a] = eY.last(e, t);
                    i = a;
                } else {
                    var [, u] = eY.first(e, t);
                    i = u;
                }
                var o = eY.get(e, i);
                if (!ts.isText(o))
                    throw Error(
                        "Cannot get the "
                            .concat(r, " point in the node at path [")
                            .concat(t, "] because it has no ")
                            .concat(r, " text node."),
                    );
                return { path: i, offset: "end" === r ? o.text.length : 0 };
            }
            if (e6.isRange(t)) {
                var [s, l] = e6.edges(t);
                return "start" === r ? s : l;
            }
            return t;
        },
        pointRef(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: r = "forward" } = n,
                i = {
                    current: t,
                    affinity: r,
                    unref() {
                        var { current: t } = i;
                        return eq.pointRefs(e).delete(i), (i.current = null), t;
                    },
                };
            return eq.pointRefs(e).add(i), i;
        },
        pointRefs(e) {
            var t = es.get(e);
            return t || ((t = new Set()), es.set(e, t)), t;
        },
        *positions(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: n = e.selection, unit: r = "offset", reverse: i = !1, voids: a = !1 } = t;
            if (n) {
                var u = eq.range(e, n),
                    [o, s] = e6.edges(u),
                    l = i ? s : o,
                    d = !1,
                    c = "",
                    f = 0,
                    h = 0,
                    p = 0;
                for (var [m, _] of eq.nodes(e, { at: n, reverse: i, voids: a })) {
                    if (ej.isElement(m)) {
                        if (!a && e.isVoid(m)) {
                            yield eq.start(e, _);
                            continue;
                        }
                        if (e.isInline(m)) continue;
                        if (eq.hasInlines(e, m)) {
                            var v = e1.isAncestor(_, s.path) ? s : eq.end(e, _),
                                g = e1.isAncestor(_, o.path) ? o : eq.start(e, _);
                            (c = eq.string(e, { anchor: g, focus: v }, { voids: a })), (d = !0);
                        }
                    }
                    if (ts.isText(m)) {
                        var y,
                            D,
                            b,
                            C = e1.equals(_, l.path);
                        for (
                            C
                                ? ((h = i ? l.offset : m.text.length - l.offset), (p = l.offset))
                                : ((h = m.text.length), (p = i ? h : 0)),
                                (C || d || "offset" === r) && (yield { path: _, offset: p }, (d = !1));
                            ;
                        ) {
                            if (0 === f) {
                                if ("" === c) break;
                                (y = c),
                                    (D = r),
                                    (b = i),
                                    (c = ey(
                                        c,
                                        (f =
                                            "character" === D
                                                ? ep(y, b)
                                                : "word" === D
                                                  ? eg(y, b)
                                                  : "line" === D || "block" === D
                                                    ? y.length
                                                    : 1),
                                        i,
                                    )[1]);
                            }
                            if (((p = i ? p - f : p + f), (h -= f) < 0)) {
                                f = -h;
                                break;
                            }
                            (f = 0), yield { path: _, offset: p };
                        }
                    }
                }
            }
        },
        previous(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { mode: n = "lowest", voids: r = !1 } = t,
                { match: i, at: a = e.selection } = t;
            if (a) {
                var u = eq.before(e, a, { voids: r });
                if (u) {
                    var [, o] = eq.first(e, []),
                        s = [u.path, o];
                    if (e1.isPath(a) && 0 === a.length) throw Error("Cannot get the previous node from the root node!");
                    if (null == i)
                        if (e1.isPath(a)) {
                            var [l] = eq.parent(e, a);
                            i = (e) => l.children.includes(e);
                        } else i = () => !0;
                    var [d] = eq.nodes(e, { reverse: !0, at: s, match: i, mode: n, voids: r });
                    return d;
                }
            }
        },
        range: (e, t, n) => (e6.isRange(t) && !n ? t : { anchor: eq.start(e, t), focus: eq.end(e, n || t) }),
        rangeRef(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: r = "forward" } = n,
                i = {
                    current: t,
                    affinity: r,
                    unref() {
                        var { current: t } = i;
                        return eq.rangeRefs(e).delete(i), (i.current = null), t;
                    },
                };
            return eq.rangeRefs(e).add(i), i;
        },
        rangeRefs(e) {
            var t = el.get(e);
            return t || ((t = new Set()), el.set(e, t)), t;
        },
        removeMark(e, t) {
            e.removeMark(t);
        },
        setNormalizing(e, t) {
            eu.set(e, t);
        },
        start: (e, t) => eq.point(e, t, { edge: "start" }),
        string(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { voids: r = !1 } = n,
                i = eq.range(e, t),
                [a, u] = e6.edges(i),
                o = "";
            for (var [s, l] of eq.nodes(e, { at: i, match: ts.isText, voids: r })) {
                var d = s.text;
                e1.equals(l, u.path) && (d = d.slice(0, u.offset)),
                    e1.equals(l, a.path) && (d = d.slice(a.offset)),
                    (o += d);
            }
            return o;
        },
        unhangRange(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { voids: r = !1 } = n,
                [i, a] = e6.edges(t);
            if (0 !== i.offset || 0 !== a.offset || e6.isCollapsed(t) || e1.hasPrevious(a.path)) return t;
            var u = eq.above(e, { at: a, match: (t) => ej.isElement(t) && eq.isBlock(e, t), voids: r }),
                o = u ? u[1] : [],
                s = { anchor: eq.start(e, i), focus: a },
                l = !0;
            for (var [d, c] of eq.nodes(e, { at: s, match: ts.isText, reverse: !0, voids: r })) {
                if (l) {
                    l = !1;
                    continue;
                }
                if ("" !== d.text || e1.isBefore(c, o)) {
                    a = { path: c, offset: d.text.length };
                    break;
                }
            }
            return { anchor: i, focus: a };
        },
        void(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return eq.above(e, eU(eU({}, t), {}, { match: (t) => ej.isElement(t) && eq.isVoid(e, t) }));
        },
        withoutNormalizing(e, t) {
            var n = eq.isNormalizing(e);
            eq.setNormalizing(e, !1);
            try {
                t();
            } finally {
                eq.setNormalizing(e, n);
            }
            eq.normalize(e);
        },
    },
    ez = { isSpan: (e) => Array.isArray(e) && 2 === e.length && e.every(e1.isPath) },
    eX = ["children"],
    eQ = ["text"],
    eZ = new WeakMap(),
    eY = {
        ancestor(e, t) {
            var n = eY.get(e, t);
            if (ts.isText(n))
                throw Error(
                    "Cannot get the ancestor node at path ["
                        .concat(t, "] because it refers to a text node instead: ")
                        .concat(tn.stringify(n)),
                );
            return n;
        },
        *ancestors(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            for (var r of e1.ancestors(t, n)) {
                var i = [eY.ancestor(e, r), r];
                yield i;
            }
        },
        child(e, t) {
            if (ts.isText(e)) throw Error("Cannot get the child of a text node: ".concat(tn.stringify(e)));
            var n = e.children[t];
            if (null == n) throw Error("Cannot get child at index `".concat(t, "` in node: ").concat(tn.stringify(e)));
            return n;
        },
        *children(e, t) {
            for (
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    { reverse: r = !1 } = n,
                    i = eY.ancestor(e, t),
                    { children: a } = i,
                    u = r ? a.length - 1 : 0;
                r ? u >= 0 : u < a.length;
            ) {
                var o = eY.child(i, u),
                    s = t.concat(u);
                yield [o, s], (u = r ? u - 1 : u + 1);
            }
        },
        common(e, t, n) {
            var r = e1.common(t, n);
            return [eY.get(e, r), r];
        },
        descendant(e, t) {
            var n = eY.get(e, t);
            if (eq.isEditor(n))
                throw Error(
                    "Cannot get the descendant node at path ["
                        .concat(t, "] because it refers to the root editor node instead: ")
                        .concat(tn.stringify(n)),
                );
            return n;
        },
        *descendants(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [n, r] of eY.nodes(e, t)) 0 !== r.length && (yield [n, r]);
        },
        *elements(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [n, r] of eY.nodes(e, t)) ej.isElement(n) && (yield [n, r]);
        },
        extractProps(e) {
            if (ej.isAncestor(e)) {
                var t = eh(e, eX);
                return t;
            }
            var t = eh(e, eQ);
            return t;
        },
        first(e, t) {
            for (var n = t.slice(), r = eY.get(e, n); r; )
                if (ts.isText(r) || 0 === r.children.length) break;
                else (r = r.children[0]), n.push(0);
            return [r, n];
        },
        fragment(e, t) {
            if (ts.isText(e))
                throw Error("Cannot get a fragment starting from a root text node: ".concat(tn.stringify(e)));
            return $({ children: e.children }, (e) => {
                var [n, r] = e6.edges(t);
                for (var [, i] of eY.nodes(e, {
                    reverse: !0,
                    pass: (e) => {
                        var [, n] = e;
                        return !e6.includes(t, n);
                    },
                })) {
                    if (!e6.includes(t, i)) {
                        var a = eY.parent(e, i),
                            u = i[i.length - 1];
                        a.children.splice(u, 1);
                    }
                    if (e1.equals(i, r.path)) {
                        var o = eY.leaf(e, i);
                        o.text = o.text.slice(0, r.offset);
                    }
                    if (e1.equals(i, n.path)) {
                        var s = eY.leaf(e, i);
                        s.text = s.text.slice(n.offset);
                    }
                }
                eq.isEditor(e) && (e.selection = null);
            }).children;
        },
        get(e, t) {
            for (var n = e, r = 0; r < t.length; r++) {
                var i = t[r];
                if (ts.isText(n) || !n.children[i])
                    throw Error("Cannot find a descendant at path [".concat(t, "] in node: ").concat(tn.stringify(e)));
                n = n.children[i];
            }
            return n;
        },
        has(e, t) {
            for (var n = e, r = 0; r < t.length; r++) {
                var i = t[r];
                if (ts.isText(n) || !n.children[i]) return !1;
                n = n.children[i];
            }
            return !0;
        },
        isNode: (e) => ts.isText(e) || ej.isElement(e) || eq.isEditor(e),
        isNodeList(e) {
            if (!Array.isArray(e)) return !1;
            var t = eZ.get(e);
            if (void 0 !== t) return t;
            var n = e.every((e) => eY.isNode(e));
            return eZ.set(e, n), n;
        },
        last(e, t) {
            for (var n = t.slice(), r = eY.get(e, n); r; )
                if (ts.isText(r) || 0 === r.children.length) break;
                else {
                    var i = r.children.length - 1;
                    (r = r.children[i]), n.push(i);
                }
            return [r, n];
        },
        leaf(e, t) {
            var n = eY.get(e, t);
            if (!ts.isText(n))
                throw Error(
                    "Cannot get the leaf node at path ["
                        .concat(t, "] because it refers to a non-leaf node: ")
                        .concat(tn.stringify(n)),
                );
            return n;
        },
        *levels(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            for (var r of e1.levels(t, n)) {
                var i = eY.get(e, r);
                yield [i, r];
            }
        },
        matches: (e, t) =>
            (ej.isElement(e) && ej.isElementProps(t) && ej.matches(e, t)) ||
            (ts.isText(e) && ts.isTextProps(t) && ts.matches(e, t)),
        *nodes(e) {
            for (
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { pass: n, reverse: r = !1 } = t,
                    { from: i = [], to: a } = t,
                    u = new Set(),
                    o = [],
                    s = e;
                !(a && (r ? e1.isBefore(o, a) : e1.isAfter(o, a)));
            ) {
                if (
                    (u.has(s) || (yield [s, o]),
                    !u.has(s) && !ts.isText(s) && 0 !== s.children.length && (null == n || !1 === n([s, o])))
                ) {
                    u.add(s);
                    var l = r ? s.children.length - 1 : 0;
                    e1.isAncestor(o, i) && (l = i[o.length]), (o = o.concat(l)), (s = eY.get(e, o));
                    continue;
                }
                if (0 === o.length) break;
                if (!r) {
                    var d = e1.next(o);
                    if (eY.has(e, d)) {
                        (o = d), (s = eY.get(e, o));
                        continue;
                    }
                }
                if (r && 0 !== o[o.length - 1]) {
                    (o = e1.previous(o)), (s = eY.get(e, o));
                    continue;
                }
                (o = e1.parent(o)), (s = eY.get(e, o)), u.add(s);
            }
        },
        parent(e, t) {
            var n = e1.parent(t),
                r = eY.get(e, n);
            if (ts.isText(r))
                throw Error("Cannot get the parent of path [".concat(t, "] because it does not exist in the root."));
            return r;
        },
        string: (e) => (ts.isText(e) ? e.text : e.children.map(eY.string).join("")),
        *texts(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [n, r] of eY.nodes(e, t)) ts.isText(n) && (yield [n, r]);
        },
    };
function eJ(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function e$(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eJ(Object(n), !0).forEach(function (t) {
                  en(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eJ(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var e0 = {
        isNodeOperation: (e) => e0.isOperation(e) && e.type.endsWith("_node"),
        isOperation(e) {
            if (!i(e)) return !1;
            switch (e.type) {
                case "insert_node":
                case "remove_node":
                    return e1.isPath(e.path) && eY.isNode(e.node);
                case "insert_text":
                case "remove_text":
                    return "number" == typeof e.offset && "string" == typeof e.text && e1.isPath(e.path);
                case "merge_node":
                    return "number" == typeof e.position && e1.isPath(e.path) && i(e.properties);
                case "move_node":
                    return e1.isPath(e.path) && e1.isPath(e.newPath);
                case "set_node":
                    return e1.isPath(e.path) && i(e.properties) && i(e.newProperties);
                case "set_selection":
                    return (
                        (null === e.properties && e6.isRange(e.newProperties)) ||
                        (null === e.newProperties && e6.isRange(e.properties)) ||
                        (i(e.properties) && i(e.newProperties))
                    );
                case "split_node":
                    return e1.isPath(e.path) && "number" == typeof e.position && i(e.properties);
                default:
                    return !1;
            }
        },
        isOperationList: (e) => Array.isArray(e) && e.every((e) => e0.isOperation(e)),
        isSelectionOperation: (e) => e0.isOperation(e) && e.type.endsWith("_selection"),
        isTextOperation: (e) => e0.isOperation(e) && e.type.endsWith("_text"),
        inverse(e) {
            switch (e.type) {
                case "insert_node":
                    return e$(e$({}, e), {}, { type: "remove_node" });
                case "insert_text":
                    return e$(e$({}, e), {}, { type: "remove_text" });
                case "merge_node":
                    return e$(e$({}, e), {}, { type: "split_node", path: e1.previous(e.path) });
                case "move_node":
                    var { newPath: t, path: n } = e;
                    if (e1.equals(t, n)) return e;
                    if (e1.isSibling(n, t)) return e$(e$({}, e), {}, { path: t, newPath: n });
                    var r = e1.transform(n, e),
                        i = e1.transform(e1.next(n), e);
                    return e$(e$({}, e), {}, { path: r, newPath: i });
                case "remove_node":
                    return e$(e$({}, e), {}, { type: "insert_node" });
                case "remove_text":
                    return e$(e$({}, e), {}, { type: "insert_text" });
                case "set_node":
                    var { properties: a, newProperties: u } = e;
                    return e$(e$({}, e), {}, { properties: u, newProperties: a });
                case "set_selection":
                    var { properties: o, newProperties: s } = e;
                    if (null == o) return e$(e$({}, e), {}, { properties: s, newProperties: null });
                    if (null == s) return e$(e$({}, e), {}, { properties: null, newProperties: o });
                    return e$(e$({}, e), {}, { properties: s, newProperties: o });
                case "split_node":
                    return e$(e$({}, e), {}, { type: "merge_node", path: e1.next(e.path) });
            }
        },
    },
    e1 = {
        ancestors(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { reverse: n = !1 } = t,
                r = e1.levels(e, t);
            return n ? r.slice(1) : r.slice(0, -1);
        },
        common(e, t) {
            for (var n = [], r = 0; r < e.length && r < t.length; r++) {
                var i = e[r];
                if (i !== t[r]) break;
                n.push(i);
            }
            return n;
        },
        compare(e, t) {
            for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) {
                if (e[r] < t[r]) return -1;
                if (e[r] > t[r]) return 1;
            }
            return 0;
        },
        endsAfter(e, t) {
            var n = e.length - 1,
                r = e.slice(0, n),
                i = t.slice(0, n),
                a = e[n],
                u = t[n];
            return e1.equals(r, i) && a > u;
        },
        endsAt(e, t) {
            var n = e.length,
                r = e.slice(0, n),
                i = t.slice(0, n);
            return e1.equals(r, i);
        },
        endsBefore(e, t) {
            var n = e.length - 1,
                r = e.slice(0, n),
                i = t.slice(0, n),
                a = e[n],
                u = t[n];
            return e1.equals(r, i) && a < u;
        },
        equals: (e, t) => e.length === t.length && e.every((e, n) => e === t[n]),
        hasPrevious: (e) => e[e.length - 1] > 0,
        isAfter: (e, t) => 1 === e1.compare(e, t),
        isAncestor: (e, t) => e.length < t.length && 0 === e1.compare(e, t),
        isBefore: (e, t) => -1 === e1.compare(e, t),
        isChild: (e, t) => e.length === t.length + 1 && 0 === e1.compare(e, t),
        isCommon: (e, t) => e.length <= t.length && 0 === e1.compare(e, t),
        isDescendant: (e, t) => e.length > t.length && 0 === e1.compare(e, t),
        isParent: (e, t) => e.length + 1 === t.length && 0 === e1.compare(e, t),
        isPath: (e) => Array.isArray(e) && (0 === e.length || "number" == typeof e[0]),
        isSibling(e, t) {
            if (e.length !== t.length) return !1;
            var n = e.slice(0, -1),
                r = t.slice(0, -1);
            return e[e.length - 1] !== t[t.length - 1] && e1.equals(n, r);
        },
        levels(e) {
            for (
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { reverse: n = !1 } = t,
                    r = [],
                    i = 0;
                i <= e.length;
                i++
            )
                r.push(e.slice(0, i));
            return n && r.reverse(), r;
        },
        next(e) {
            if (0 === e.length)
                throw Error("Cannot get the next path of a root path [".concat(e, "], because it has no next index."));
            var t = e[e.length - 1];
            return e.slice(0, -1).concat(t + 1);
        },
        operationCanTransformPath(e) {
            switch (e.type) {
                case "insert_node":
                case "remove_node":
                case "merge_node":
                case "split_node":
                case "move_node":
                    return !0;
                default:
                    return !1;
            }
        },
        parent(e) {
            if (0 === e.length) throw Error("Cannot get the parent path of the root path [".concat(e, "]."));
            return e.slice(0, -1);
        },
        previous(e) {
            if (0 === e.length)
                throw Error(
                    "Cannot get the previous path of a root path [".concat(e, "], because it has no previous index."),
                );
            var t = e[e.length - 1];
            if (t <= 0)
                throw Error(
                    "Cannot get the previous path of a first child path [".concat(
                        e,
                        "] because it would result in a negative index.",
                    ),
                );
            return e.slice(0, -1).concat(t - 1);
        },
        relative(e, t) {
            if (!e1.isAncestor(t, e) && !e1.equals(e, t))
                throw Error(
                    "Cannot get the relative path of ["
                        .concat(e, "] inside ancestor [")
                        .concat(t, "], because it is not above or equal to the path."),
                );
            return e.slice(t.length);
        },
        transform(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!e) return null;
            var r = [...e],
                { affinity: i = "forward" } = n;
            if (0 === e.length) return r;
            switch (t.type) {
                case "insert_node":
                    var { path: a } = t;
                    (e1.equals(a, r) || e1.endsBefore(a, r) || e1.isAncestor(a, r)) && (r[a.length - 1] += 1);
                    break;
                case "remove_node":
                    var { path: u } = t;
                    if (e1.equals(u, r) || e1.isAncestor(u, r)) return null;
                    e1.endsBefore(u, r) && (r[u.length - 1] -= 1);
                    break;
                case "merge_node":
                    var { path: o, position: s } = t;
                    e1.equals(o, r) || e1.endsBefore(o, r)
                        ? (r[o.length - 1] -= 1)
                        : e1.isAncestor(o, r) && ((r[o.length - 1] -= 1), (r[o.length] += s));
                    break;
                case "split_node":
                    var { path: l, position: d } = t;
                    if (e1.equals(l, r)) {
                        if ("forward" === i) r[r.length - 1] += 1;
                        else if ("backward" !== i) return null;
                    } else
                        e1.endsBefore(l, r)
                            ? (r[l.length - 1] += 1)
                            : e1.isAncestor(l, r) && e[l.length] >= d && ((r[l.length - 1] += 1), (r[l.length] -= d));
                    break;
                case "move_node":
                    var { path: c, newPath: f } = t;
                    if (e1.equals(c, f)) break;
                    if (e1.isAncestor(c, r) || e1.equals(c, r)) {
                        var h = f.slice();
                        return (
                            e1.endsBefore(c, f) && c.length < f.length && (h[c.length - 1] -= 1),
                            h.concat(r.slice(c.length))
                        );
                    }
                    e1.isSibling(c, f) && (e1.isAncestor(f, r) || e1.equals(f, r))
                        ? e1.endsBefore(c, r)
                            ? (r[c.length - 1] -= 1)
                            : (r[c.length - 1] += 1)
                        : e1.endsBefore(f, r) || e1.equals(f, r) || e1.isAncestor(f, r)
                          ? (e1.endsBefore(c, r) && (r[c.length - 1] -= 1), (r[f.length - 1] += 1))
                          : e1.endsBefore(c, r) && (e1.equals(f, r) && (r[f.length - 1] += 1), (r[c.length - 1] -= 1));
            }
            return r;
        },
    },
    e2 = {
        transform(e, t) {
            var { current: n, affinity: r } = e;
            if (null != n) {
                var i = e1.transform(n, t, { affinity: r });
                (e.current = i), null == i && e.unref();
            }
        },
    };
function e3(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function e5(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? e3(Object(n), !0).forEach(function (t) {
                  en(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : e3(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var e8 = {
        compare(e, t) {
            var n = e1.compare(e.path, t.path);
            return 0 === n ? (e.offset < t.offset ? -1 : +(e.offset > t.offset)) : n;
        },
        isAfter: (e, t) => 1 === e8.compare(e, t),
        isBefore: (e, t) => -1 === e8.compare(e, t),
        equals: (e, t) => e.offset === t.offset && e1.equals(e.path, t.path),
        isPoint: (e) => i(e) && "number" == typeof e.offset && e1.isPath(e.path),
        transform(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return $(e, (e) => {
                if (null === e) return null;
                var { affinity: r = "forward" } = n,
                    { path: i, offset: a } = e;
                switch (t.type) {
                    case "insert_node":
                    case "move_node":
                        e.path = e1.transform(i, t, n);
                        break;
                    case "insert_text":
                        e1.equals(t.path, i) &&
                            (t.offset < a || (t.offset === a && "forward" === r)) &&
                            (e.offset += t.text.length);
                        break;
                    case "merge_node":
                        e1.equals(t.path, i) && (e.offset += t.position), (e.path = e1.transform(i, t, n));
                        break;
                    case "remove_text":
                        e1.equals(t.path, i) && t.offset <= a && (e.offset -= Math.min(a - t.offset, t.text.length));
                        break;
                    case "remove_node":
                        if (e1.equals(t.path, i) || e1.isAncestor(t.path, i)) return null;
                        e.path = e1.transform(i, t, n);
                        break;
                    case "split_node":
                        if (e1.equals(t.path, i))
                            if (t.position === a && null == r) return null;
                            else
                                (t.position < a || (t.position === a && "forward" === r)) &&
                                    ((e.offset -= t.position),
                                    (e.path = e1.transform(i, t, e5(e5({}, n), {}, { affinity: "forward" }))));
                        else e.path = e1.transform(i, t, n);
                }
            });
        },
    },
    e7 = {
        transform(e, t) {
            var { current: n, affinity: r } = e;
            if (null != n) {
                var i = e8.transform(n, t, { affinity: r });
                (e.current = i), null == i && e.unref();
            }
        },
    },
    e4 = ["anchor", "focus"];
function e9(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
var e6 = {
        edges(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { reverse: n = !1 } = t,
                { anchor: r, focus: i } = e;
            return e6.isBackward(e) === n ? [r, i] : [i, r];
        },
        end(e) {
            var [, t] = e6.edges(e);
            return t;
        },
        equals: (e, t) => e8.equals(e.anchor, t.anchor) && e8.equals(e.focus, t.focus),
        includes(e, t) {
            if (e6.isRange(t)) {
                if (e6.includes(e, t.anchor) || e6.includes(e, t.focus)) return !0;
                var [n, r] = e6.edges(e),
                    [i, a] = e6.edges(t);
                return e8.isBefore(n, i) && e8.isAfter(r, a);
            }
            var [u, o] = e6.edges(e),
                s = !1,
                l = !1;
            return (
                e8.isPoint(t)
                    ? ((s = e8.compare(t, u) >= 0), (l = 0 >= e8.compare(t, o)))
                    : ((s = e1.compare(t, u.path) >= 0), (l = 0 >= e1.compare(t, o.path))),
                s && l
            );
        },
        intersection(e, t) {
            var n = eh(e, e4),
                [r, i] = e6.edges(e),
                [a, u] = e6.edges(t),
                o = e8.isBefore(r, a) ? a : r,
                s = e8.isBefore(i, u) ? i : u;
            return e8.isBefore(s, o)
                ? null
                : (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {};
                          t % 2
                              ? e9(Object(n), !0).forEach(function (t) {
                                    en(e, t, n[t]);
                                })
                              : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                : e9(Object(n)).forEach(function (t) {
                                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                  });
                      }
                      return e;
                  })({ anchor: o, focus: s }, n);
        },
        isBackward(e) {
            var { anchor: t, focus: n } = e;
            return e8.isAfter(t, n);
        },
        isCollapsed(e) {
            var { anchor: t, focus: n } = e;
            return e8.equals(t, n);
        },
        isExpanded: (e) => !e6.isCollapsed(e),
        isForward: (e) => !e6.isBackward(e),
        isRange: (e) => i(e) && e8.isPoint(e.anchor) && e8.isPoint(e.focus),
        *points(e) {
            yield [e.anchor, "anchor"], yield [e.focus, "focus"];
        },
        start(e) {
            var [t] = e6.edges(e);
            return t;
        },
        transform(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return $(e, (e) => {
                if (null === e) return null;
                var r,
                    i,
                    { affinity: a = "inward" } = n;
                if ("inward" === a) {
                    var u = e6.isCollapsed(e);
                    e6.isForward(e)
                        ? ((r = "forward"), (i = u ? r : "backward"))
                        : ((r = "backward"), (i = u ? r : "forward"));
                } else
                    "outward" === a
                        ? e6.isForward(e)
                            ? ((r = "backward"), (i = "forward"))
                            : ((r = "forward"), (i = "backward"))
                        : ((r = a), (i = a));
                var o = e8.transform(e.anchor, t, { affinity: r }),
                    s = e8.transform(e.focus, t, { affinity: i });
                if (!o || !s) return null;
                (e.anchor = o), (e.focus = s);
            });
        },
    },
    te = {
        transform(e, t) {
            var { current: n, affinity: r } = e;
            if (null != n) {
                var i = e6.transform(n, t, { affinity: r });
                (e.current = i), null == i && e.unref();
            }
        },
    },
    tt = void 0,
    tn = {
        setScrubber(e) {
            tt = e;
        },
        stringify: (e) => JSON.stringify(e, tt),
    },
    tr = (e, t) => {
        for (var n in e) {
            var r = e[n],
                a = t[n];
            if (i(r) && i(a)) {
                if (!tr(r, a)) return !1;
            } else if (Array.isArray(r) && Array.isArray(a)) {
                if (r.length !== a.length) return !1;
                for (var u = 0; u < r.length; u++) if (r[u] !== a[u]) return !1;
            } else if (r !== a) return !1;
        }
        for (var o in t) if (void 0 === e[o] && void 0 !== t[o]) return !1;
        return !0;
    },
    ti = ["text"],
    ta = ["anchor", "focus"];
function tu(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function to(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tu(Object(n), !0).forEach(function (t) {
                  en(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tu(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var ts = {
    equals(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { loose: r = !1 } = n;
        return tr(r ? eh(e, ti) : e, r ? eh(t, ti) : t);
    },
    isText: (e) => i(e) && "string" == typeof e.text,
    isTextList: (e) => Array.isArray(e) && e.every((e) => ts.isText(e)),
    isTextProps: (e) => void 0 !== e.text,
    matches(e, t) {
        for (var n in t) if ("text" !== n && (!e.hasOwnProperty(n) || e[n] !== t[n])) return !1;
        return !0;
    },
    decorations(e, t) {
        var n = [to({}, e)];
        for (var r of t) {
            var i = eh(r, ta),
                [a, u] = e6.edges(r),
                o = [],
                s = 0,
                l = a.offset,
                d = u.offset;
            for (var c of n) {
                var { length: f } = c.text,
                    h = s;
                if (((s += f), l <= h && s <= d)) {
                    Object.assign(c, i), o.push(c);
                    continue;
                }
                if ((l !== d && (l === s || d === h)) || l > s || d < h || (d === h && 0 !== h)) {
                    o.push(c);
                    continue;
                }
                var p = c,
                    m = void 0,
                    _ = void 0;
                if (d < s) {
                    var v = d - h;
                    (_ = to(to({}, p), {}, { text: p.text.slice(v) })),
                        (p = to(to({}, p), {}, { text: p.text.slice(0, v) }));
                }
                if (l > h) {
                    var g = l - h;
                    (m = to(to({}, p), {}, { text: p.text.slice(0, g) })),
                        (p = to(to({}, p), {}, { text: p.text.slice(g) }));
                }
                Object.assign(p, i), m && o.push(m), o.push(p), _ && o.push(_);
            }
            n = o;
        }
        return n;
    },
};
function tl(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function td(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tl(Object(n), !0).forEach(function (t) {
                  en(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tl(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var tc = ["text"],
    tf = ["children"];
function th(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function tp(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? th(Object(n), !0).forEach(function (t) {
                  en(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : th(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var tm = (e, t) =>
        ej.isElement(t)
            ? !!eq.isVoid(e, t) || (1 === t.children.length && tm(e, t.children[0]))
            : !eq.isEditor(t) && !0,
    t_ = (e, t) => {
        var [n] = eq.node(e, t);
        return (e) => e === n;
    };
function tv(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function tg(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tv(Object(n), !0).forEach(function (t) {
                  en(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tv(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
function ty(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function tD(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? ty(Object(n), !0).forEach(function (t) {
                  en(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ty(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var tb = tD(
    tD(
        tD(
            tD(
                {},
                {
                    transform(e, t) {
                        e.children = ee(e.children);
                        var n = e.selection && ee(e.selection);
                        try {
                            n = ((e, t, n) => {
                                switch (n.type) {
                                    case "insert_node":
                                        var { path: r, node: i } = n,
                                            a = eY.parent(e, r),
                                            u = r[r.length - 1];
                                        if (u > a.children.length)
                                            throw Error(
                                                'Cannot apply an "insert_node" operation at path ['.concat(
                                                    r,
                                                    "] because the destination is past the end of the node.",
                                                ),
                                            );
                                        if ((a.children.splice(u, 0, i), t))
                                            for (var [o, s] of e6.points(t)) t[s] = e8.transform(o, n);
                                        break;
                                    case "insert_text":
                                        var { path: l, offset: d, text: c } = n;
                                        if (0 === c.length) break;
                                        var f = eY.leaf(e, l),
                                            h = f.text.slice(0, d),
                                            p = f.text.slice(d);
                                        if (((f.text = h + c + p), t))
                                            for (var [m, _] of e6.points(t)) t[_] = e8.transform(m, n);
                                        break;
                                    case "merge_node":
                                        var { path: v } = n,
                                            g = eY.get(e, v),
                                            y = e1.previous(v),
                                            D = eY.get(e, y),
                                            b = eY.parent(e, v),
                                            C = v[v.length - 1];
                                        if (ts.isText(g) && ts.isText(D)) D.text += g.text;
                                        else if (ts.isText(g) || ts.isText(D))
                                            throw Error(
                                                'Cannot apply a "merge_node" operation at path ['
                                                    .concat(v, "] to nodes of different interfaces: ")
                                                    .concat(tn.stringify(g), " ")
                                                    .concat(tn.stringify(D)),
                                            );
                                        else D.children.push(...g.children);
                                        if ((b.children.splice(C, 1), t))
                                            for (var [E, w] of e6.points(t)) t[w] = e8.transform(E, n);
                                        break;
                                    case "move_node":
                                        var { path: A, newPath: B } = n;
                                        if (e1.isAncestor(A, B))
                                            throw Error(
                                                "Cannot move a path ["
                                                    .concat(A, "] to new path [")
                                                    .concat(B, "] because the destination is inside itself."),
                                            );
                                        var F = eY.get(e, A),
                                            V = eY.parent(e, A),
                                            T = A[A.length - 1];
                                        V.children.splice(T, 1);
                                        var k = e1.transform(A, n),
                                            x = eY.get(e, e1.parent(k)),
                                            P = k[k.length - 1];
                                        if ((x.children.splice(P, 0, F), t))
                                            for (var [O, S] of e6.points(t)) t[S] = e8.transform(O, n);
                                        break;
                                    case "remove_node":
                                        var { path: R } = n,
                                            M = R[R.length - 1];
                                        if ((eY.parent(e, R).children.splice(M, 1), t))
                                            for (var [N, L] of e6.points(t)) {
                                                var I = e8.transform(N, n);
                                                if (null != t && null != I) t[L] = I;
                                                else {
                                                    var j = void 0,
                                                        G = void 0;
                                                    for (var [W, K] of eY.texts(e))
                                                        if (-1 === e1.compare(K, R)) j = [W, K];
                                                        else {
                                                            G = [W, K];
                                                            break;
                                                        }
                                                    var U = !1;
                                                    j &&
                                                        G &&
                                                        (U = e1.equals(G[1], R)
                                                            ? !e1.hasPrevious(G[1])
                                                            : e1.common(j[1], R).length < e1.common(G[1], R).length),
                                                        j && !U
                                                            ? ((N.path = j[1]), (N.offset = j[0].text.length))
                                                            : G
                                                              ? ((N.path = G[1]), (N.offset = 0))
                                                              : (t = null);
                                                }
                                            }
                                        break;
                                    case "remove_text":
                                        var { path: H, offset: q, text: z } = n;
                                        if (0 === z.length) break;
                                        var X = eY.leaf(e, H),
                                            Q = X.text.slice(0, q),
                                            Z = X.text.slice(q + z.length);
                                        if (((X.text = Q + Z), t))
                                            for (var [Y, J] of e6.points(t)) t[J] = e8.transform(Y, n);
                                        break;
                                    case "set_node":
                                        var { path: $, properties: ee, newProperties: et } = n;
                                        if (0 === $.length) throw Error("Cannot set properties on the root node!");
                                        var en = eY.get(e, $);
                                        for (var er in et) {
                                            if ("children" === er || "text" === er)
                                                throw Error('Cannot set the "'.concat(er, '" property of nodes!'));
                                            var ei = et[er];
                                            null == ei ? delete en[er] : (en[er] = ei);
                                        }
                                        for (var ea in ee) et.hasOwnProperty(ea) || delete en[ea];
                                        break;
                                    case "set_selection":
                                        var { newProperties: eu } = n;
                                        if (null == eu) t = eu;
                                        else {
                                            if (null == t) {
                                                if (!e6.isRange(eu))
                                                    throw Error(
                                                        'Cannot apply an incomplete "set_selection" operation properties '.concat(
                                                            tn.stringify(eu),
                                                            " when there is no current selection.",
                                                        ),
                                                    );
                                                t = td({}, eu);
                                            }
                                            for (var eo in eu) {
                                                var es = eu[eo];
                                                if (null == es) {
                                                    if ("anchor" === eo || "focus" === eo)
                                                        throw Error(
                                                            'Cannot remove the "'.concat(eo, '" selection property'),
                                                        );
                                                    delete t[eo];
                                                } else t[eo] = es;
                                            }
                                        }
                                        break;
                                    case "split_node":
                                        var el,
                                            { path: ed, position: ec, properties: ef } = n;
                                        if (0 === ed.length)
                                            throw Error(
                                                'Cannot apply a "split_node" operation at path ['.concat(
                                                    ed,
                                                    "] because the root node cannot be split.",
                                                ),
                                            );
                                        var eh = eY.get(e, ed),
                                            ep = eY.parent(e, ed),
                                            em = ed[ed.length - 1];
                                        if (ts.isText(eh)) {
                                            var e_ = eh.text.slice(0, ec),
                                                ev = eh.text.slice(ec);
                                            (eh.text = e_), (el = td(td({}, ef), {}, { text: ev }));
                                        } else {
                                            var eg = eh.children.slice(0, ec),
                                                ey = eh.children.slice(ec);
                                            (eh.children = eg), (el = td(td({}, ef), {}, { children: ey }));
                                        }
                                        if ((ep.children.splice(em + 1, 0, el), t))
                                            for (var [eD, eb] of e6.points(t)) t[eb] = e8.transform(eD, n);
                                }
                                return t;
                            })(e, n, t);
                        } finally {
                            (e.children = et(e.children)), n ? (e.selection = u(n) ? et(n) : n) : (e.selection = null);
                        }
                    },
                },
            ),
            {
                insertNodes(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    eq.withoutNormalizing(e, () => {
                        var { hanging: r = !1, voids: i = !1, mode: a = "lowest" } = n,
                            { at: u, match: o, select: s } = n;
                        if ((eY.isNode(t) && (t = [t]), 0 !== t.length)) {
                            var [l] = t;
                            if (
                                (u ||
                                    ((u = e.selection ? e.selection : e.children.length > 0 ? eq.end(e, []) : [0]),
                                    (s = !0)),
                                null == s && (s = !1),
                                e6.isRange(u))
                            )
                                if ((r || (u = eq.unhangRange(e, u, { voids: i })), e6.isCollapsed(u))) u = u.anchor;
                                else {
                                    var [, d] = e6.edges(u),
                                        c = eq.pointRef(e, d);
                                    tb.delete(e, { at: u }), (u = c.unref());
                                }
                            if (e8.isPoint(u)) {
                                null == o &&
                                    (o = ts.isText(l)
                                        ? (e) => ts.isText(e)
                                        : e.isInline(l)
                                          ? (t) => ts.isText(t) || eq.isInline(e, t)
                                          : (t) => ej.isElement(t) && eq.isBlock(e, t));
                                var [f] = eq.nodes(e, { at: u.path, match: o, mode: a, voids: i });
                                if (!f) return;
                                var [, h] = f,
                                    p = eq.pathRef(e, h),
                                    m = eq.isEnd(e, u, h);
                                tb.splitNodes(e, { at: u, match: o, mode: a, voids: i });
                                var _ = p.unref();
                                u = m ? e1.next(_) : _;
                            }
                            var v = e1.parent(u),
                                g = u[u.length - 1];
                            if (!(!i && eq.void(e, { at: v }))) {
                                for (var y of t) {
                                    var D = v.concat(g);
                                    g++, e.apply({ type: "insert_node", path: D, node: y }), (u = e1.next(u));
                                }
                                if (((u = e1.previous(u)), s)) {
                                    var b = eq.end(e, u);
                                    b && tb.select(e, b);
                                }
                            }
                        }
                    });
                },
                liftNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    eq.withoutNormalizing(e, () => {
                        var { at: n = e.selection, mode: r = "lowest", voids: i = !1 } = t,
                            { match: a } = t;
                        if (
                            (null == a && (a = e1.isPath(n) ? t_(e, n) : (t) => ej.isElement(t) && eq.isBlock(e, t)), n)
                        )
                            for (var u of Array.from(eq.nodes(e, { at: n, match: a, mode: r, voids: i }), (t) => {
                                var [, n] = t;
                                return eq.pathRef(e, n);
                            })) {
                                var o = u.unref();
                                if (o.length < 2)
                                    throw Error(
                                        "Cannot lift node at a path [".concat(
                                            o,
                                            "] because it has a depth of less than `2`.",
                                        ),
                                    );
                                var [s, l] = eq.node(e, e1.parent(o)),
                                    d = o[o.length - 1],
                                    { length: c } = s.children;
                                if (1 === c) {
                                    var f = e1.next(l);
                                    tb.moveNodes(e, { at: o, to: f, voids: i }), tb.removeNodes(e, { at: l, voids: i });
                                } else if (0 === d) tb.moveNodes(e, { at: o, to: l, voids: i });
                                else if (d === c - 1) {
                                    var h = e1.next(l);
                                    tb.moveNodes(e, { at: o, to: h, voids: i });
                                } else {
                                    var p = e1.next(o),
                                        m = e1.next(l);
                                    tb.splitNodes(e, { at: p, voids: i }), tb.moveNodes(e, { at: o, to: m, voids: i });
                                }
                            }
                    });
                },
                mergeNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    eq.withoutNormalizing(e, () => {
                        var n,
                            r,
                            { match: i, at: a = e.selection } = t,
                            { hanging: u = !1, voids: o = !1, mode: s = "lowest" } = t;
                        if (a) {
                            if (null == i)
                                if (e1.isPath(a)) {
                                    var [l] = eq.parent(e, a);
                                    i = (e) => l.children.includes(e);
                                } else i = (t) => ej.isElement(t) && eq.isBlock(e, t);
                            if ((!u && e6.isRange(a) && (a = eq.unhangRange(e, a, { voids: o })), e6.isRange(a)))
                                if (e6.isCollapsed(a)) a = a.anchor;
                                else {
                                    var [, d] = e6.edges(a),
                                        c = eq.pointRef(e, d);
                                    tb.delete(e, { at: a }), (a = c.unref()), null == t.at && tb.select(e, a);
                                }
                            var [f] = eq.nodes(e, { at: a, match: i, voids: o, mode: s }),
                                h = eq.previous(e, { at: a, match: i, voids: o, mode: s });
                            if (f && h) {
                                var [p, m] = f,
                                    [_, v] = h;
                                if (0 !== m.length && 0 !== v.length) {
                                    var g = e1.next(v),
                                        y = e1.common(m, v),
                                        D = e1.isSibling(m, v),
                                        b = Array.from(eq.levels(e, { at: m }), (e) => {
                                            var [t] = e;
                                            return t;
                                        })
                                            .slice(y.length)
                                            .slice(0, -1),
                                        C = eq.above(e, {
                                            at: m,
                                            mode: "highest",
                                            match: (t) => b.includes(t) && tm(e, t),
                                        }),
                                        E = C && eq.pathRef(e, C[1]);
                                    if (ts.isText(p) && ts.isText(_)) {
                                        var w = eh(p, tc);
                                        (r = _.text.length), (n = w);
                                    } else if (ej.isElement(p) && ej.isElement(_)) {
                                        var w = eh(p, tf);
                                        (r = _.children.length), (n = w);
                                    } else
                                        throw Error(
                                            "Cannot merge the node at path ["
                                                .concat(
                                                    m,
                                                    "] with the previous sibling because it is not the same kind: ",
                                                )
                                                .concat(tn.stringify(p), " ")
                                                .concat(tn.stringify(_)),
                                        );
                                    D || tb.moveNodes(e, { at: m, to: g, voids: o }),
                                        E && tb.removeNodes(e, { at: E.current, voids: o }),
                                        (ej.isElement(_) && eq.isEmpty(e, _)) ||
                                        (ts.isText(_) && "" === _.text && 0 !== v[v.length - 1])
                                            ? tb.removeNodes(e, { at: v, voids: o })
                                            : e.apply({ type: "merge_node", path: g, position: r, properties: n }),
                                        E && E.unref();
                                }
                            }
                        }
                    });
                },
                moveNodes(e, t) {
                    eq.withoutNormalizing(e, () => {
                        var { to: n, at: r = e.selection, mode: i = "lowest", voids: a = !1 } = t,
                            { match: u } = t;
                        if (r) {
                            null == u && (u = e1.isPath(r) ? t_(e, r) : (t) => ej.isElement(t) && eq.isBlock(e, t));
                            var o = eq.pathRef(e, n);
                            for (var s of Array.from(eq.nodes(e, { at: r, match: u, mode: i, voids: a }), (t) => {
                                var [, n] = t;
                                return eq.pathRef(e, n);
                            })) {
                                var l = s.unref(),
                                    d = o.current;
                                0 !== l.length && e.apply({ type: "move_node", path: l, newPath: d }),
                                    o.current &&
                                        e1.isSibling(d, l) &&
                                        e1.isAfter(d, l) &&
                                        (o.current = e1.next(o.current));
                            }
                            o.unref();
                        }
                    });
                },
                removeNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    eq.withoutNormalizing(e, () => {
                        var { hanging: n = !1, voids: r = !1, mode: i = "lowest" } = t,
                            { at: a = e.selection, match: u } = t;
                        if (a)
                            for (var o of (null == u &&
                                (u = e1.isPath(a) ? t_(e, a) : (t) => ej.isElement(t) && eq.isBlock(e, t)),
                            !n && e6.isRange(a) && (a = eq.unhangRange(e, a, { voids: r })),
                            Array.from(eq.nodes(e, { at: a, match: u, mode: i, voids: r }), (t) => {
                                var [, n] = t;
                                return eq.pathRef(e, n);
                            }))) {
                                var s = o.unref();
                                if (s) {
                                    var [l] = eq.node(e, s);
                                    e.apply({ type: "remove_node", path: s, node: l });
                                }
                            }
                    });
                },
                setNodes(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    eq.withoutNormalizing(e, () => {
                        var { match: r, at: i = e.selection, compare: a, merge: u } = n,
                            { hanging: o = !1, mode: s = "lowest", split: l = !1, voids: d = !1 } = n;
                        if (i) {
                            if (
                                (null == r &&
                                    (r = e1.isPath(i) ? t_(e, i) : (t) => ej.isElement(t) && eq.isBlock(e, t)),
                                !o && e6.isRange(i) && (i = eq.unhangRange(e, i, { voids: d })),
                                l && e6.isRange(i))
                            ) {
                                if (e6.isCollapsed(i) && eq.leaf(e, i.anchor)[0].text.length > 0) return;
                                var c = eq.rangeRef(e, i, { affinity: "inward" }),
                                    [f, h] = e6.edges(i),
                                    p = "lowest" === s ? "lowest" : "highest",
                                    m = eq.isEnd(e, h, h.path);
                                tb.splitNodes(e, { at: h, match: r, mode: p, voids: d, always: !m });
                                var _ = eq.isStart(e, f, f.path);
                                tb.splitNodes(e, { at: f, match: r, mode: p, voids: d, always: !_ }),
                                    (i = c.unref()),
                                    null == n.at && tb.select(e, i);
                            }
                            for (var [v, g] of (a || (a = (e, t) => e !== t),
                            eq.nodes(e, { at: i, match: r, mode: s, voids: d }))) {
                                var y = {},
                                    D = {};
                                if (0 !== g.length) {
                                    var b = !1;
                                    for (var C in t)
                                        "children" !== C &&
                                            "text" !== C &&
                                            a(t[C], v[C]) &&
                                            ((b = !0),
                                            v.hasOwnProperty(C) && (y[C] = v[C]),
                                            u ? null != t[C] && (D[C] = u(v[C], t[C])) : null != t[C] && (D[C] = t[C]));
                                    b && e.apply({ type: "set_node", path: g, properties: y, newProperties: D });
                                }
                            }
                        }
                    });
                },
                splitNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    eq.withoutNormalizing(e, () => {
                        var n,
                            r,
                            { mode: i = "lowest", voids: a = !1 } = t,
                            { match: u, at: o = e.selection, height: s = 0, always: l = !1 } = t;
                        if (
                            (null == u && (u = (t) => ej.isElement(t) && eq.isBlock(e, t)),
                            e6.isRange(o) &&
                                (o = ((e, t) => {
                                    if (e6.isCollapsed(t)) return t.anchor;
                                    var [, n] = e6.edges(t),
                                        r = eq.pointRef(e, n);
                                    return tb.delete(e, { at: t }), r.unref();
                                })(e, o)),
                            e1.isPath(o))
                        ) {
                            var d = o,
                                c = eq.point(e, d),
                                [f] = eq.parent(e, d);
                            (u = (e) => e === f), (s = c.path.length - d.length + 1), (o = c), (l = !0);
                        }
                        if (o) {
                            var h = eq.pointRef(e, o, { affinity: "backward" });
                            try {
                                var [p] = eq.nodes(e, { at: o, match: u, mode: i, voids: a });
                                if (!p) return;
                                var m = eq.void(e, { at: o, mode: "highest" });
                                if (!a && m) {
                                    var [_, v] = m;
                                    if (ej.isElement(_) && e.isInline(_)) {
                                        var g = eq.after(e, v);
                                        if (!g) {
                                            var y = e1.next(v);
                                            tb.insertNodes(e, { text: "" }, { at: y, voids: a }), (g = eq.point(e, y));
                                        }
                                        (o = g), (l = !0);
                                    }
                                    (s = o.path.length - v.length + 1), (l = !0);
                                }
                                n = eq.pointRef(e, o);
                                var D = o.path.length - s,
                                    [, b] = p,
                                    C = o.path.slice(0, D),
                                    E = 0 === s ? o.offset : o.path[D] + 0;
                                for (var [w, A] of eq.levels(e, { at: C, reverse: !0, voids: a })) {
                                    var B = !1;
                                    if (
                                        A.length < b.length ||
                                        0 === A.length ||
                                        (!a && ej.isElement(w) && eq.isVoid(e, w))
                                    )
                                        break;
                                    var F = h.current,
                                        V = eq.isEnd(e, F, A);
                                    if (l || !h || !eq.isEdge(e, F, A)) {
                                        B = !0;
                                        var T = eY.extractProps(w);
                                        e.apply({ type: "split_node", path: A, position: E, properties: T });
                                    }
                                    E = A[A.length - 1] + (B || V ? 1 : 0);
                                }
                                if (null == t.at) {
                                    var k = n.current || eq.end(e, []);
                                    tb.select(e, k);
                                }
                            } finally {
                                h.unref(), null == (r = n) || r.unref();
                            }
                        }
                    });
                },
                unsetNodes(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    Array.isArray(t) || (t = [t]);
                    var r = {};
                    for (var i of t) r[i] = null;
                    tb.setNodes(e, r, n);
                },
                unwrapNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    eq.withoutNormalizing(e, () => {
                        var { mode: n = "lowest", split: r = !1, voids: i = !1 } = t,
                            { at: a = e.selection, match: u } = t;
                        if (a) {
                            null == u && (u = e1.isPath(a) ? t_(e, a) : (t) => ej.isElement(t) && eq.isBlock(e, t)),
                                e1.isPath(a) && (a = eq.range(e, a));
                            var o = e6.isRange(a) ? eq.rangeRef(e, a) : null;
                            for (var s of Array.from(eq.nodes(e, { at: a, match: u, mode: n, voids: i }), (t) => {
                                var [, n] = t;
                                return eq.pathRef(e, n);
                            }).reverse())
                                !(function (t) {
                                    var n = t.unref(),
                                        [a] = eq.node(e, n),
                                        u = eq.range(e, n);
                                    r && o && (u = e6.intersection(o.current, u)),
                                        tb.liftNodes(e, {
                                            at: u,
                                            match: (e) => ej.isAncestor(a) && a.children.includes(e),
                                            voids: i,
                                        });
                                })(s);
                            o && o.unref();
                        }
                    });
                },
                wrapNodes(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    eq.withoutNormalizing(e, () => {
                        var { mode: r = "lowest", split: i = !1, voids: a = !1 } = n,
                            { match: u, at: o = e.selection } = n;
                        if (o) {
                            if (
                                (null == u &&
                                    (u = e1.isPath(o)
                                        ? t_(e, o)
                                        : e.isInline(t)
                                          ? (t) => (ej.isElement(t) && eq.isInline(e, t)) || ts.isText(t)
                                          : (t) => ej.isElement(t) && eq.isBlock(e, t)),
                                i && e6.isRange(o))
                            ) {
                                var [s, l] = e6.edges(o),
                                    d = eq.rangeRef(e, o, { affinity: "inward" });
                                tb.splitNodes(e, { at: l, match: u, voids: a }),
                                    tb.splitNodes(e, { at: s, match: u, voids: a }),
                                    (o = d.unref()),
                                    null == n.at && tb.select(e, o);
                            }
                            for (var [, c] of Array.from(
                                eq.nodes(e, {
                                    at: o,
                                    match: e.isInline(t)
                                        ? (t) => ej.isElement(t) && eq.isBlock(e, t)
                                        : (e) => eq.isEditor(e),
                                    mode: "lowest",
                                    voids: a,
                                }),
                            )) {
                                var f = e6.isRange(o) ? e6.intersection(o, eq.range(e, c)) : o;
                                if (f) {
                                    var h = Array.from(eq.nodes(e, { at: f, match: u, mode: r, voids: a }));
                                    if (
                                        h.length > 0 &&
                                        "continue" ===
                                            (function () {
                                                var [n] = h,
                                                    r = h[h.length - 1],
                                                    [, i] = n,
                                                    [, u] = r;
                                                if (0 === i.length && 0 === u.length) return "continue";
                                                var o = e1.equals(i, u) ? e1.parent(i) : e1.common(i, u),
                                                    s = eq.range(e, i, u),
                                                    [l] = eq.node(e, o),
                                                    d = o.length + 1,
                                                    c = e1.next(u.slice(0, d)),
                                                    f = tp(tp({}, t), {}, { children: [] });
                                                tb.insertNodes(e, f, { at: c, voids: a }),
                                                    tb.moveNodes(e, {
                                                        at: s,
                                                        match: (e) => ej.isAncestor(l) && l.children.includes(e),
                                                        to: c.concat(0),
                                                        voids: a,
                                                    });
                                            })()
                                    )
                                        continue;
                                }
                            }
                        }
                    });
                },
            },
        ),
        {
            collapse(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { edge: n = "anchor" } = t,
                    { selection: r } = e;
                if (r) {
                    if ("anchor" === n) tb.select(e, r.anchor);
                    else if ("focus" === n) tb.select(e, r.focus);
                    else if ("start" === n) {
                        var [i] = e6.edges(r);
                        tb.select(e, i);
                    } else if ("end" === n) {
                        var [, a] = e6.edges(r);
                        tb.select(e, a);
                    }
                }
            },
            deselect(e) {
                var { selection: t } = e;
                t && e.apply({ type: "set_selection", properties: t, newProperties: null });
            },
            move(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { selection: n } = e,
                    { distance: r = 1, unit: i = "character", reverse: a = !1 } = t,
                    { edge: u = null } = t;
                if (n) {
                    "start" === u && (u = e6.isBackward(n) ? "focus" : "anchor"),
                        "end" === u && (u = e6.isBackward(n) ? "anchor" : "focus");
                    var { anchor: o, focus: s } = n,
                        l = { distance: r, unit: i },
                        d = {};
                    if (null == u || "anchor" === u) {
                        var c = a ? eq.before(e, o, l) : eq.after(e, o, l);
                        c && (d.anchor = c);
                    }
                    if (null == u || "focus" === u) {
                        var f = a ? eq.before(e, s, l) : eq.after(e, s, l);
                        f && (d.focus = f);
                    }
                    tb.setSelection(e, d);
                }
            },
            select(e, t) {
                var { selection: n } = e;
                if (((t = eq.range(e, t)), n)) return void tb.setSelection(e, t);
                if (!e6.isRange(t))
                    throw Error(
                        "When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(
                            tn.stringify(t),
                        ),
                    );
                e.apply({ type: "set_selection", properties: n, newProperties: t });
            },
            setPoint(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    { selection: r } = e,
                    { edge: i = "both" } = n;
                if (r) {
                    "start" === i && (i = e6.isBackward(r) ? "focus" : "anchor"),
                        "end" === i && (i = e6.isBackward(r) ? "anchor" : "focus");
                    var { anchor: a, focus: u } = r,
                        o = "anchor" === i ? a : u;
                    tb.setSelection(e, { ["anchor" === i ? "anchor" : "focus"]: tg(tg({}, o), t) });
                }
            },
            setSelection(e, t) {
                var { selection: n } = e,
                    r = {},
                    i = {};
                if (n) {
                    for (var a in t)
                        (("anchor" !== a || null == t.anchor || e8.equals(t.anchor, n.anchor)) &&
                            ("focus" !== a || null == t.focus || e8.equals(t.focus, n.focus)) &&
                            ("anchor" === a || "focus" === a || t[a] === n[a])) ||
                            ((r[a] = n[a]), (i[a] = t[a]));
                    Object.keys(r).length > 0 && e.apply({ type: "set_selection", properties: r, newProperties: i });
                }
            },
        },
    ),
    {
        delete(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            eq.withoutNormalizing(e, () => {
                var n,
                    { reverse: r = !1, unit: i = "character", distance: a = 1, voids: u = !1 } = t,
                    { at: o = e.selection, hanging: s = !1 } = t;
                if (o) {
                    var l = !1;
                    if ((e6.isRange(o) && e6.isCollapsed(o) && ((l = !0), (o = o.anchor)), e8.isPoint(o))) {
                        var d = eq.void(e, { at: o, mode: "highest" });
                        if (!u && d) {
                            var [, c] = d;
                            o = c;
                        } else {
                            var f = { unit: i, distance: a },
                                h = r ? eq.before(e, o, f) || eq.start(e, []) : eq.after(e, o, f) || eq.end(e, []);
                            (o = { anchor: o, focus: h }), (s = !0);
                        }
                    }
                    if (e1.isPath(o)) return void tb.removeNodes(e, { at: o, voids: u });
                    if (!e6.isCollapsed(o)) {
                        if (!s) {
                            var [, p] = e6.edges(o),
                                m = eq.end(e, []);
                            e8.equals(p, m) || (o = eq.unhangRange(e, o, { voids: u }));
                        }
                        var [_, v] = e6.edges(o),
                            g = eq.above(e, { match: (t) => ej.isElement(t) && eq.isBlock(e, t), at: _, voids: u }),
                            y = eq.above(e, { match: (t) => ej.isElement(t) && eq.isBlock(e, t), at: v, voids: u }),
                            D = g && y && !e1.equals(g[1], y[1]),
                            b = e1.equals(_.path, v.path),
                            C = u ? null : eq.void(e, { at: _, mode: "highest" }),
                            E = u ? null : eq.void(e, { at: v, mode: "highest" });
                        if (C) {
                            var w = eq.before(e, _);
                            w && g && e1.isAncestor(g[1], w.path) && (_ = w);
                        }
                        if (E) {
                            var A = eq.after(e, v);
                            A && y && e1.isAncestor(y[1], A.path) && (v = A);
                        }
                        var B = [];
                        for (var F of eq.nodes(e, { at: o, voids: u })) {
                            var [V, T] = F;
                            (!n || 0 !== e1.compare(T, n)) &&
                                ((!u && ej.isElement(V) && eq.isVoid(e, V)) ||
                                    (!e1.isCommon(T, _.path) && !e1.isCommon(T, v.path))) &&
                                (B.push(F), (n = T));
                        }
                        var k = Array.from(B, (t) => {
                                var [, n] = t;
                                return eq.pathRef(e, n);
                            }),
                            x = eq.pointRef(e, _),
                            P = eq.pointRef(e, v),
                            O = "";
                        if (!b && !C) {
                            var S = x.current,
                                [R] = eq.leaf(e, S),
                                { path: M } = S,
                                { offset: N } = _,
                                L = R.text.slice(N);
                            L.length > 0 && (e.apply({ type: "remove_text", path: M, offset: N, text: L }), (O = L));
                        }
                        if (
                            (k
                                .reverse()
                                .map((e) => e.unref())
                                .filter((e) => null !== e)
                                .forEach((t) => tb.removeNodes(e, { at: t, voids: u })),
                            !E)
                        ) {
                            var I = P.current,
                                [j] = eq.leaf(e, I),
                                { path: G } = I,
                                W = b ? _.offset : 0,
                                K = j.text.slice(W, v.offset);
                            K.length > 0 && (e.apply({ type: "remove_text", path: G, offset: W, text: K }), (O = K));
                        }
                        !b && D && P.current && x.current && tb.mergeNodes(e, { at: P.current, hanging: !0, voids: u }),
                            l &&
                                r &&
                                "character" === i &&
                                O.length > 1 &&
                                O.match(/[\u0E00-\u0E7F]+/) &&
                                tb.insertText(e, O.slice(0, O.length - a));
                        var U = x.unref(),
                            H = P.unref(),
                            q = r ? U || H : H || U;
                        null == t.at && q && tb.select(e, q);
                    }
                }
            });
        },
        insertFragment(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            eq.withoutNormalizing(e, () => {
                var r,
                    { hanging: i = !1, voids: a = !1 } = n,
                    { at: u = e.selection } = n;
                if (t.length) {
                    if (u) {
                        if (e6.isRange(u))
                            if ((i || (u = eq.unhangRange(e, u, { voids: a })), e6.isCollapsed(u))) u = u.anchor;
                            else {
                                var [, o] = e6.edges(u);
                                if (!a && eq.void(e, { at: o })) return;
                                var s = eq.pointRef(e, o);
                                tb.delete(e, { at: u }), (u = s.unref());
                            }
                        else e1.isPath(u) && (u = eq.start(e, u));
                        if (!(!a && eq.void(e, { at: u }))) {
                            var l = eq.above(e, {
                                at: u,
                                match: (t) => ej.isElement(t) && eq.isInline(e, t),
                                mode: "highest",
                                voids: a,
                            });
                            if (l) {
                                var [, d] = l;
                                eq.isEnd(e, u, d) ? (u = eq.after(e, d)) : eq.isStart(e, u, d) && (u = eq.before(e, d));
                            }
                            var [, c] = eq.above(e, {
                                    match: (t) => ej.isElement(t) && eq.isBlock(e, t),
                                    at: u,
                                    voids: a,
                                }),
                                f = eq.isStart(e, u, c),
                                h = eq.isEnd(e, u, c),
                                p = f && h,
                                m = !f || (f && h),
                                _ = !h,
                                [, v] = eY.first({ children: t }, []),
                                [, g] = eY.last({ children: t }, []),
                                y = [],
                                D = (t) => {
                                    var [n, r] = t;
                                    return (
                                        0 !== r.length &&
                                        (!!p ||
                                            !(
                                                (m &&
                                                    e1.isAncestor(r, v) &&
                                                    ej.isElement(n) &&
                                                    !e.isVoid(n) &&
                                                    !e.isInline(n)) ||
                                                (_ &&
                                                    e1.isAncestor(r, g) &&
                                                    ej.isElement(n) &&
                                                    !e.isVoid(n) &&
                                                    !e.isInline(n))
                                            ))
                                    );
                                };
                            for (var b of eY.nodes({ children: t }, { pass: D })) D(b) && y.push(b);
                            var C = [],
                                E = [],
                                w = [],
                                A = !0,
                                B = !1;
                            for (var [F] of y)
                                ej.isElement(F) && !e.isInline(F)
                                    ? ((A = !1), (B = !0), E.push(F))
                                    : A
                                      ? C.push(F)
                                      : w.push(F);
                            var [V] = eq.nodes(e, {
                                    at: u,
                                    match: (t) => ts.isText(t) || eq.isInline(e, t),
                                    mode: "highest",
                                    voids: a,
                                }),
                                [, T] = V,
                                k = eq.isStart(e, u, T),
                                x = eq.isEnd(e, u, T),
                                P = eq.pathRef(e, h && !w.length ? e1.next(c) : c),
                                O = eq.pathRef(e, x ? e1.next(T) : T);
                            tb.splitNodes(e, {
                                at: u,
                                match: (t) =>
                                    B ? ej.isElement(t) && eq.isBlock(e, t) : ts.isText(t) || eq.isInline(e, t),
                                mode: B ? "lowest" : "highest",
                                always: B && (!f || C.length > 0) && (!h || w.length > 0),
                                voids: a,
                            });
                            var S = eq.pathRef(e, !k || (k && x) ? e1.next(T) : T);
                            if (
                                (tb.insertNodes(e, C, {
                                    at: S.current,
                                    match: (t) => ts.isText(t) || eq.isInline(e, t),
                                    mode: "highest",
                                    voids: a,
                                }),
                                p && !C.length && E.length && !w.length && tb.delete(e, { at: c, voids: a }),
                                tb.insertNodes(e, E, {
                                    at: P.current,
                                    match: (t) => ej.isElement(t) && eq.isBlock(e, t),
                                    mode: "lowest",
                                    voids: a,
                                }),
                                tb.insertNodes(e, w, {
                                    at: O.current,
                                    match: (t) => ts.isText(t) || eq.isInline(e, t),
                                    mode: "highest",
                                    voids: a,
                                }),
                                !n.at &&
                                    (w.length > 0 && O.current
                                        ? (r = e1.previous(O.current))
                                        : E.length > 0 && P.current
                                          ? (r = e1.previous(P.current))
                                          : S.current && (r = e1.previous(S.current)),
                                    r))
                            ) {
                                var R = eq.end(e, r);
                                tb.select(e, R);
                            }
                            S.unref(), P.unref(), O.unref();
                        }
                    }
                }
            });
        },
        insertText(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            eq.withoutNormalizing(e, () => {
                var { voids: r = !1 } = n,
                    { at: i = e.selection } = n;
                if (i) {
                    if ((e1.isPath(i) && (i = eq.range(e, i)), e6.isRange(i)))
                        if (e6.isCollapsed(i)) i = i.anchor;
                        else {
                            var a = e6.end(i);
                            if (!r && eq.void(e, { at: a })) return;
                            var u = e6.start(i),
                                o = eq.pointRef(e, u),
                                s = eq.pointRef(e, a);
                            tb.delete(e, { at: i, voids: r });
                            var l = o.unref(),
                                d = s.unref();
                            (i = l || d), tb.setSelection(e, { anchor: i, focus: i });
                        }
                    if (!(!r && eq.void(e, { at: i }))) {
                        var { path: c, offset: f } = i;
                        t.length > 0 && e.apply({ type: "insert_text", path: c, offset: f, text: t });
                    }
                }
            });
        },
    },
);
