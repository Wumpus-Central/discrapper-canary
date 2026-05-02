"use strict";
function i(e) {
    return "[object Object]" === Object.prototype.toString.call(e);
}
function r(e) {
    var t, n;
    return (
        !1 !== i(e) &&
        (void 0 === (t = e.constructor) || (!1 !== i((n = t.prototype)) && !1 !== n.hasOwnProperty("isPrototypeOf")))
    );
}
function s(e) {
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
function a(e) {
    return !!e && !!e[W];
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
            return n === Object || ("function" == typeof n && Function.toString.call(n) === K);
        })(e) ||
            Array.isArray(e) ||
            !!e[Y] ||
            !!(null == (t = e.constructor) ? void 0 : t[Y]) ||
            _(e) ||
            f(e))
    );
}
function l(e, t, n) {
    void 0 === n && (n = !1),
        0 === u(e)
            ? (n ? Object.keys : z)(e).forEach(function (i) {
                  (n && "symbol" == typeof i) || t(i, e[i], e);
              })
            : e.forEach(function (n, i) {
                  return t(i, n, e);
              });
}
function u(e) {
    var t = e[W];
    return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : _(e) ? 2 : 3 * !!f(e);
}
function c(e, t) {
    return 2 === u(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function d(e, t, n) {
    var i = u(e);
    2 === i ? e.set(t, n) : 3 === i ? e.add(n) : (e[t] = n);
}
function _(e) {
    return V && e instanceof Map;
}
function f(e) {
    return B && e instanceof Set;
}
function h(e) {
    return e.o || e.t;
}
function p(e) {
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    var t = $(e);
    delete t[W];
    for (var n = z(t), i = 0; i < n.length; i++) {
        var r = n[i],
            s = t[r];
        !1 === s.writable && ((s.writable = !0), (s.configurable = !0)),
            (s.get || s.set) && (t[r] = { configurable: !0, writable: !0, enumerable: s.enumerable, value: e[r] });
    }
    return Object.create(Object.getPrototypeOf(e), t);
}
function E(e, t) {
    return (
        void 0 === t && (t = !1),
        g(e) ||
            a(e) ||
            !o(e) ||
            (u(e) > 1 && (e.set = e.add = e.clear = e.delete = m),
            Object.freeze(e),
            t &&
                l(
                    e,
                    function (e, t) {
                        return E(t, !0);
                    },
                    !0,
                )),
        e
    );
}
function m() {
    s(2);
}
function g(e) {
    return null == e || "object" != typeof e || Object.isFrozen(e);
}
function A(e) {
    var t = q[e];
    return t || s(18, e), t;
}
n.d(t, {
    KE: () => eK,
    bP: () => eX,
    bR: () => e4,
    Q6: () => e9,
    ie: () => e_,
    gB: () => tT,
    Hg: () => eV,
    wA: () => e1,
    EY: () => tl,
    h6: () => tn,
});
function I(e, t) {
    t && (A("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function T(e) {
    S(e), e.p.forEach(y), (e.p = null);
}
function S(e) {
    e === G && (G = e.l);
}
function N(e) {
    return (G = { p: [], l: G, h: e, m: !0, _: 0 });
}
function y(e) {
    var t = e[W];
    0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
}
function C(e, t) {
    t._ = t.p.length;
    var n = t.p[0],
        i = void 0 !== e && e !== n;
    return (
        t.h.O || A("ES5").S(t, e, i),
        i
            ? (n[W].P && (T(t), s(4)),
              o(e) && ((e = v(t, e)), t.l || R(t, e)),
              t.u && A("Patches").M(n[W].t, e, t.u, t.s))
            : (e = v(t, n, [])),
        T(t),
        t.u && t.v(t.u, t.s),
        e !== j ? e : void 0
    );
}
function v(e, t, n) {
    if (g(t)) return t;
    var i = t[W];
    if (!i)
        return (
            l(
                t,
                function (r, s) {
                    return O(e, i, t, r, s, n);
                },
                !0,
            ),
            t
        );
    if (i.A !== e) return t;
    if (!i.P) return R(e, i.t, !0), i.t;
    if (!i.I) {
        (i.I = !0), i.A._--;
        var r = 4 === i.i || 5 === i.i ? (i.o = p(i.k)) : i.o,
            s = r,
            a = !1;
        3 === i.i && ((s = new Set(r)), r.clear(), (a = !0)),
            l(s, function (t, s) {
                return O(e, i, r, t, s, n, a);
            }),
            R(e, r, !1),
            n && e.u && A("Patches").N(i, n, e.u, e.s);
    }
    return i.o;
}
function O(e, t, n, i, r, s, l) {
    if (a(r)) {
        var u = v(e, r, s && t && 3 !== t.i && !c(t.R, i) ? s.concat(i) : void 0);
        if ((d(n, i, u), !a(u))) return;
        e.m = !1;
    } else l && n.add(r);
    if (o(r) && !g(r)) {
        if (!e.h.D && e._ < 1) return;
        v(e, r), (t && t.A.l) || R(e, r);
    }
}
function R(e, t, n) {
    void 0 === n && (n = !1), !e.l && e.h.D && e.m && E(t, n);
}
function b(e, t) {
    var n = e[W];
    return (n ? h(n) : e)[t];
}
function D(e, t) {
    if (t in e)
        for (var n = Object.getPrototypeOf(e); n; ) {
            var i = Object.getOwnPropertyDescriptor(n, t);
            if (i) return i;
            n = Object.getPrototypeOf(n);
        }
}
function L(e) {
    e.P || ((e.P = !0), e.l && L(e.l));
}
function w(e) {
    e.o || (e.o = p(e.t));
}
function M(e, t, n) {
    var i,
        r,
        s,
        a,
        o,
        l,
        u,
        c = _(t)
            ? A("MapSet").F(t, n)
            : f(t)
              ? A("MapSet").T(t, n)
              : e.O
                ? ((s = r =
                      {
                          i: +!!(i = Array.isArray(t)),
                          A: n ? n.A : G,
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
                  (a = Z),
                  i && ((s = [r]), (a = X)),
                  (l = (o = Proxy.revocable(s, a)).revoke),
                  (r.k = u = o.proxy),
                  (r.j = l),
                  u)
                : A("ES5").J(t, n);
    return (n ? n.A : G).p.push(c), c;
}
function P(e, t) {
    switch (t) {
        case 2:
            return new Map(e);
        case 3:
            return Array.from(e);
    }
    return p(e);
}
var x,
    U,
    k,
    G,
    F = "u" > typeof Symbol && "symbol" == typeof Symbol("x"),
    V = "u" > typeof Map,
    B = "u" > typeof Set,
    H = "u" > typeof Proxy && void 0 !== Proxy.revocable && "u" > typeof Reflect,
    j = F ? Symbol.for("immer-nothing") : (((k = {})["immer-nothing"] = !0), k),
    Y = F ? Symbol.for("immer-draftable") : "__$immer_draftable",
    W = F ? Symbol.for("immer-state") : "__$immer_state",
    K = "" + Object.prototype.constructor,
    z =
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
                z(e).forEach(function (n) {
                    t[n] = Object.getOwnPropertyDescriptor(e, n);
                }),
                t
            );
        },
    q = {},
    Z = {
        get: function (e, t) {
            if (t === W) return e;
            var n,
                i,
                r = h(e);
            if (!c(r, t))
                return (i = D(r, t)) ? ("value" in i ? i.value : null == (n = i.get) ? void 0 : n.call(e.k)) : void 0;
            var s = r[t];
            return e.I || !o(s) ? s : s === b(e.t, t) ? (w(e), (e.o[t] = M(e.A.h, s, e))) : s;
        },
        has: function (e, t) {
            return t in h(e);
        },
        ownKeys: function (e) {
            return Reflect.ownKeys(h(e));
        },
        set: function (e, t, n) {
            var i = D(h(e), t);
            if (null == i ? void 0 : i.set) return i.set.call(e.k, n), !0;
            if (!e.P) {
                var r = b(h(e), t),
                    s = null == r ? void 0 : r[W];
                if (s && s.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
                if ((n === r ? 0 !== n || 1 / n == 1 / r : n != n && r != r) && (void 0 !== n || c(e.t, t))) return !0;
                w(e), L(e);
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
                void 0 !== b(e.t, t) || t in e.t ? ((e.R[t] = !1), w(e), L(e)) : delete e.R[t], e.o && delete e.o[t], !0
            );
        },
        getOwnPropertyDescriptor: function (e, t) {
            var n = h(e),
                i = Reflect.getOwnPropertyDescriptor(n, t);
            return i
                ? { writable: !0, configurable: 1 !== e.i || "length" !== t, enumerable: i.enumerable, value: n[t] }
                : i;
        },
        defineProperty: function () {
            s(11);
        },
        getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t);
        },
        setPrototypeOf: function () {
            s(12);
        },
    },
    X = {};
l(Z, function (e, t) {
    X[e] = function () {
        return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
    };
}),
    (X.deleteProperty = function (e, t) {
        return X.set.call(this, e, t, void 0);
    }),
    (X.set = function (e, t, n) {
        return Z.set.call(this, e[0], t, n, e[0]);
    });
var Q = new ((function () {
        function e(e) {
            var t = this;
            (this.O = H),
                (this.D = !0),
                (this.produce = function (e, n, i) {
                    if ("function" == typeof e && "function" != typeof n) {
                        var r,
                            a = n;
                        return (
                            (n = e),
                            function (e) {
                                var i = this;
                                void 0 === e && (e = a);
                                for (var r = arguments.length, s = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
                                    s[o - 1] = arguments[o];
                                return t.produce(e, function (e) {
                                    var t;
                                    return (t = n).call.apply(t, [i, e].concat(s));
                                });
                            }
                        );
                    }
                    if (("function" != typeof n && s(6), void 0 !== i && "function" != typeof i && s(7), o(e))) {
                        var l = N(t),
                            u = M(t, e, void 0),
                            c = !0;
                        try {
                            (r = n(u)), (c = !1);
                        } finally {
                            c ? T(l) : S(l);
                        }
                        return "u" > typeof Promise && r instanceof Promise
                            ? r.then(
                                  function (e) {
                                      return I(l, i), C(e, l);
                                  },
                                  function (e) {
                                      throw (T(l), e);
                                  },
                              )
                            : (I(l, i), C(r, l));
                    }
                    if (!e || "object" != typeof e) {
                        if ((void 0 === (r = n(e)) && (r = e), r === j && (r = void 0), t.D && E(r, !0), i)) {
                            var d = [],
                                _ = [];
                            A("Patches").M(e, r, d, _), i(d, _);
                        }
                        return r;
                    }
                    s(21, e);
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
                o(e) || s(8),
                    a(e) &&
                        (a((t = e)) || s(22, t),
                        (e = (function e(t) {
                            if (!o(t)) return t;
                            var n,
                                i = t[W],
                                r = u(t);
                            if (i) {
                                if (!i.P && (i.i < 4 || !A("ES5").K(i))) return i.t;
                                (i.I = !0), (n = P(t, r)), (i.I = !1);
                            } else n = P(t, r);
                            return (
                                l(n, function (t, r) {
                                    var s;
                                    (i && ((s = i.t), (2 === u(s) ? s.get(t) : s[t]) === r)) || d(n, t, e(r));
                                }),
                                3 === r ? new Set(n) : n
                            );
                        })(t)));
                var t,
                    n = N(this),
                    i = M(this, e, void 0);
                return (i[W].C = !0), S(n), i;
            }),
            (t.finishDraft = function (e, t) {
                var n = (e && e[W]).A;
                return I(n, t), C(void 0, n);
            }),
            (t.setAutoFreeze = function (e) {
                this.D = e;
            }),
            (t.setUseProxies = function (e) {
                e && !H && s(20), (this.O = e);
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
                var r = A("Patches").$;
                return a(e)
                    ? r(e, t)
                    : this.produce(e, function (e) {
                          return r(e, t);
                      });
            }),
            e
        );
    })())(),
    J = Q.produce,
    ee =
        (Q.produceWithPatches.bind(Q),
        Q.setAutoFreeze.bind(Q),
        Q.setUseProxies.bind(Q),
        Q.applyPatches.bind(Q),
        Q.createDraft.bind(Q)),
    et = Q.finishDraft.bind(Q);
function en(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
var ei = new WeakMap(),
    er = new WeakMap(),
    es = new WeakMap(),
    ea = new WeakMap(),
    eo = new WeakMap(),
    el = new WeakMap(),
    eu = new WeakMap();
function ec(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function ed(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? ec(Object(n), !0).forEach(function (t) {
                  en(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ec(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var e_ = () => {
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
            for (var n of eK.pathRefs(e)) e2.transform(n, t);
            for (var i of eK.pointRefs(e)) e5.transform(i, t);
            for (var r of eK.rangeRefs(e)) te.transform(r, t);
            var s,
                a,
                o = ei.get(e) || [],
                l = er.get(e) || new Set(),
                u = (e) => {
                    if (e) {
                        var t = e.join(",");
                        a.has(t) || (a.add(t), s.push(e));
                    }
                };
            if (e1.operationCanTransformPath(t)) for (var c of ((s = []), (a = new Set()), o)) u(e1.transform(c, t));
            else (s = o), (a = l);
            for (var d of e.getDirtyPaths(t)) u(d);
            ei.set(e, s),
                er.set(e, a),
                tT.transform(e, t),
                e.operations.push(t),
                eK.normalize(e, { operation: t }),
                "set_selection" === t.type && (e.marks = null),
                es.get(e) ||
                    (es.set(e, !0),
                    Promise.resolve().then(() => {
                        es.set(e, !1), e.onChange({ operation: t }), (e.operations = []);
                    }));
        },
        addMark: (t, n) => {
            var { selection: i, markableVoid: r } = e;
            if (i) {
                var s = (t, n) => {
                        if (!tl.isText(t)) return !1;
                        var [i, r] = eK.parent(e, n);
                        return !e.isVoid(i) || e.markableVoid(i);
                    },
                    a = e9.isExpanded(i),
                    o = !1;
                if (!a) {
                    var [l, u] = eK.node(e, i);
                    if (l && s(l, u)) {
                        var [c] = eK.parent(e, u);
                        o = c && e.markableVoid(c);
                    }
                }
                if (a || o) tT.setNodes(e, { [t]: n }, { match: s, split: !0, voids: !0 });
                else {
                    var d = ed(ed({}, eK.marks(e) || {}), {}, { [t]: n });
                    (e.marks = d), es.get(e) || e.onChange();
                }
            }
        },
        deleteBackward: (t) => {
            var { selection: n } = e;
            n && e9.isCollapsed(n) && tT.delete(e, { unit: t, reverse: !0 });
        },
        deleteForward: (t) => {
            var { selection: n } = e;
            n && e9.isCollapsed(n) && tT.delete(e, { unit: t });
        },
        deleteFragment: (t) => {
            var { selection: n } = e;
            n && e9.isExpanded(n) && tT.delete(e, { reverse: "backward" === t });
        },
        getFragment: () => {
            var { selection: t } = e;
            return t ? eX.fragment(e, t) : [];
        },
        insertBreak: () => {
            tT.splitNodes(e, { always: !0 });
        },
        insertSoftBreak: () => {
            tT.splitNodes(e, { always: !0 });
        },
        insertFragment: (t) => {
            tT.insertFragment(e, t);
        },
        insertNode: (t) => {
            tT.insertNodes(e, t);
        },
        insertText: (t) => {
            var { selection: n, marks: i } = e;
            if (n) {
                if (i) {
                    var r = ed({ text: t }, i);
                    tT.insertNodes(e, r);
                } else tT.insertText(e, t);
                e.marks = null;
            }
        },
        normalizeNode: (t) => {
            var [n, i] = t;
            if (!tl.isText(n)) {
                if (eV.isElement(n) && 0 === n.children.length)
                    return void tT.insertNodes(e, { text: "" }, { at: i.concat(0), voids: !0 });
                for (
                    var r =
                            !eK.isEditor(n) &&
                            eV.isElement(n) &&
                            (e.isInline(n) ||
                                0 === n.children.length ||
                                tl.isText(n.children[0]) ||
                                e.isInline(n.children[0])),
                        s = 0,
                        a = 0;
                    a < n.children.length;
                    a++, s++
                ) {
                    var o = eX.get(e, i);
                    if (!tl.isText(o)) {
                        var l = n.children[a],
                            u = o.children[s - 1],
                            c = a === n.children.length - 1;
                        if ((tl.isText(l) || (eV.isElement(l) && e.isInline(l))) !== r)
                            tT.removeNodes(e, { at: i.concat(s), voids: !0 }), s--;
                        else if (eV.isElement(l)) {
                            if (e.isInline(l))
                                if (null != u && tl.isText(u)) {
                                    if (c) {
                                        var d = { text: "" };
                                        tT.insertNodes(e, d, { at: i.concat(s + 1), voids: !0 }), s++;
                                    }
                                } else {
                                    var _ = { text: "" };
                                    tT.insertNodes(e, _, { at: i.concat(s), voids: !0 }), s++;
                                }
                        } else
                            null != u &&
                                tl.isText(u) &&
                                (tl.equals(l, u, { loose: !0 })
                                    ? (tT.mergeNodes(e, { at: i.concat(s), voids: !0 }), s--)
                                    : "" === u.text
                                      ? (tT.removeNodes(e, { at: i.concat(s - 1), voids: !0 }), s--)
                                      : "" === l.text && (tT.removeNodes(e, { at: i.concat(s), voids: !0 }), s--));
                    }
                }
            }
        },
        removeMark: (t) => {
            var { selection: n } = e;
            if (n) {
                var i = (t, n) => {
                        if (!tl.isText(t)) return !1;
                        var [i, r] = eK.parent(e, n);
                        return !e.isVoid(i) || e.markableVoid(i);
                    },
                    r = e9.isExpanded(n),
                    s = !1;
                if (!r) {
                    var [a, o] = eK.node(e, n);
                    if (a && i(a, o)) {
                        var [l] = eK.parent(e, o);
                        s = l && e.markableVoid(l);
                    }
                }
                if (r || s) tT.unsetNodes(e, t, { match: i, split: !0, voids: !0 });
                else {
                    var u = ed({}, eK.marks(e) || {});
                    delete u[t], (e.marks = u), es.get(e) || e.onChange();
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
                    var { node: n, path: i } = e;
                    return [
                        ...e1.levels(i),
                        ...(tl.isText(n)
                            ? []
                            : Array.from(eX.nodes(n), (e) => {
                                  var [, t] = e;
                                  return i.concat(t);
                              })),
                    ];
                case "merge_node":
                    var { path: r } = e;
                    return [...e1.ancestors(r), e1.previous(r)];
                case "move_node":
                    var { path: s, newPath: a } = e;
                    if (e1.equals(s, a)) return [];
                    var o = [],
                        l = [];
                    for (var u of e1.ancestors(s)) {
                        var c = e1.transform(u, e);
                        o.push(c);
                    }
                    for (var d of e1.ancestors(a)) {
                        var _ = e1.transform(d, e);
                        l.push(_);
                    }
                    var f = l[l.length - 1],
                        h = a[a.length - 1];
                    return [...o, ...l, f.concat(h)];
                case "remove_node":
                    var { path: p } = e;
                    return [...e1.ancestors(p)];
                case "split_node":
                    var { path: E } = e;
                    return [...e1.levels(E), e1.next(E)];
                default:
                    return [];
            }
        },
        shouldNormalize: (e) => {
            var { iteration: t, initialDirtyPathsLength: n } = e,
                i = 42 * n;
            if (t > i)
                throw Error(
                    "Could not completely normalize the editor after ".concat(
                        i,
                        " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.",
                    ),
                );
            return !0;
        },
    };
    return e;
};
function ef(e, t) {
    if (null == e) return {};
    var n,
        i,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = {},
                s = Object.keys(e);
            for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++)
            (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
var eh = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !t,
            i = t ? eT(e) : e,
            r = U.None,
            s = U.None,
            a = 0,
            o = null;
        for (var l of i) {
            var u = l.codePointAt(0);
            if (!u) break;
            var c = eM(l, u);
            if (
                (([r, s] = n ? [s, c] : [c, r]),
                (r & U.ZWJ) != 0 &&
                    (s & U.ExtPict) != 0 &&
                    !(n ? eU(e.substring(0, a)) : eU(e.substring(0, e.length - a))))
            )
                break;
            if (
                ((r & U.RI) != 0 &&
                    (s & U.RI) != 0 &&
                    !(o = null !== o ? !o : !!n || eG(e.substring(0, e.length - a)))) ||
                (r !== U.None &&
                    s !== U.None &&
                    (function (e, t) {
                        return -1 === eP.findIndex((n) => (e & n[0]) != 0 && (t & n[1]) != 0);
                    })(r, s))
            )
                break;
            a += l.length;
        }
        return a || 1;
    },
    ep = /\s/,
    eE =
        /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
    em = /['\u2018\u2019]/,
    eg = function (e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = 0, i = !1; e.length > 0; ) {
            var r = eh(e, t),
                [s, a] = eA(e, r, t);
            if (eI(s, a, t)) (i = !0), (n += r);
            else if (i) break;
            else n += r;
            e = a;
        }
        return n;
    },
    eA = (e, t, n) => {
        if (n) {
            var i = e.length - t;
            return [e.slice(i, e.length), e.slice(0, i)];
        }
        return [e.slice(0, t), e.slice(t)];
    },
    eI = function e(t, n) {
        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (ep.test(t)) return !1;
        if (em.test(t)) {
            var r = eh(n, i),
                [s, a] = eA(n, r, i);
            if (e(s, a, i)) return !0;
        }
        return !eE.test(t);
    },
    eT = function* (e) {
        for (var t = e.length - 1, n = 0; n < e.length; n++) {
            var i = e.charAt(t - n);
            if (eN(i.charCodeAt(0))) {
                var r = e.charAt(t - n - 1);
                if (eS(r.charCodeAt(0))) {
                    yield r + i, n++;
                    continue;
                }
            }
            yield i;
        }
    },
    eS = (e) => e >= 55296 && e <= 56319,
    eN = (e) => e >= 56320 && e <= 57343;
((x = U || (U = {}))[(x.None = 0)] = "None"),
    (x[(x.Extend = 1)] = "Extend"),
    (x[(x.ZWJ = 2)] = "ZWJ"),
    (x[(x.RI = 4)] = "RI"),
    (x[(x.Prepend = 8)] = "Prepend"),
    (x[(x.SpacingMark = 16)] = "SpacingMark"),
    (x[(x.L = 32)] = "L"),
    (x[(x.V = 64)] = "V"),
    (x[(x.T = 128)] = "T"),
    (x[(x.LV = 256)] = "LV"),
    (x[(x.LVT = 512)] = "LVT"),
    (x[(x.ExtPict = 1024)] = "ExtPict"),
    (x[(x.Any = 2048)] = "Any");
var ey =
        /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
    eC =
        /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
    ev =
        /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
    eO = /^[\u1100-\u115F\uA960-\uA97C]$/,
    eR = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
    eb = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
    eD =
        /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
    eL =
        /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
    ew =
        /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
    eM = (e, t) => {
        var n = U.Any;
        return (
            -1 !== e.search(ey) && (n |= U.Extend),
            8205 === t && (n |= U.ZWJ),
            t >= 127462 && t <= 127487 && (n |= U.RI),
            -1 !== e.search(eC) && (n |= U.Prepend),
            -1 !== e.search(ev) && (n |= U.SpacingMark),
            -1 !== e.search(eO) && (n |= U.L),
            -1 !== e.search(eR) && (n |= U.V),
            -1 !== e.search(eb) && (n |= U.T),
            -1 !== e.search(eD) && (n |= U.LV),
            -1 !== e.search(eL) && (n |= U.LVT),
            -1 !== e.search(ew) && (n |= U.ExtPict),
            n
        );
    },
    eP = [
        [U.L, U.L | U.V | U.LV | U.LVT],
        [U.LV | U.V, U.V | U.T],
        [U.LVT | U.T, U.T],
        [U.Any, U.Extend | U.ZWJ],
        [U.Any, U.SpacingMark],
        [U.Prepend, U.Any],
        [U.ZWJ, U.ExtPict],
        [U.RI, U.RI],
    ],
    ex =
        /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
    eU = (e) => -1 !== e.search(ex),
    ek = /(?:\uD83C[\uDDE6-\uDDFF])+$/g,
    eG = (e) => {
        var t = e.match(ek);
        return null !== t && (t[0].length / 2) % 2 == 1;
    },
    eF = (e) => r(e) && eX.isNodeList(e.children) && !eK.isEditor(e),
    eV = {
        isAncestor: (e) => r(e) && eX.isNodeList(e.children),
        isElement: eF,
        isElementList: (e) => Array.isArray(e) && e.every((e) => eV.isElement(e)),
        isElementProps: (e) => void 0 !== e.children,
        isElementType: function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "type";
            return eF(e) && e[n] === t;
        },
        matches(e, t) {
            for (var n in t) if ("children" !== n && e[n] !== t[n]) return !1;
            return !0;
        },
    },
    eB = ["text"],
    eH = ["text"];
function ej(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function eY(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? ej(Object(n), !0).forEach(function (t) {
                  en(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ej(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var eW = new WeakMap(),
    eK = {
        above(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { voids: n = !1, mode: i = "lowest", at: r = e.selection, match: s } = t;
            if (r) {
                var a = eK.path(e, r);
                for (var [o, l] of eK.levels(e, { at: a, voids: n, match: s, reverse: "lowest" === i }))
                    if (!tl.isText(o)) {
                        if (e9.isRange(r)) {
                            if (e1.isAncestor(l, r.anchor.path) && e1.isAncestor(l, r.focus.path)) return [o, l];
                        } else if (!e1.equals(a, l)) return [o, l];
                    }
            }
        },
        addMark(e, t, n) {
            e.addMark(t, n);
        },
        after(e, t) {
            var n,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = eK.point(e, t, { edge: "end" }),
                s = eK.end(e, []),
                { distance: a = 1 } = i,
                o = 0;
            for (var l of eK.positions(e, eY(eY({}, i), {}, { at: { anchor: r, focus: s } }))) {
                if (o > a) break;
                0 !== o && (n = l), o++;
            }
            return n;
        },
        before(e, t) {
            var n,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = eK.start(e, []),
                s = eK.point(e, t, { edge: "start" }),
                { distance: a = 1 } = i,
                o = 0;
            for (var l of eK.positions(e, eY(eY({}, i), {}, { at: { anchor: r, focus: s }, reverse: !0 }))) {
                if (o > a) break;
                0 !== o && (n = l), o++;
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
        edges: (e, t) => [eK.start(e, t), eK.end(e, t)],
        end: (e, t) => eK.point(e, t, { edge: "end" }),
        first(e, t) {
            var n = eK.path(e, t, { edge: "start" });
            return eK.node(e, n);
        },
        fragment(e, t) {
            var n = eK.range(e, t);
            return eX.fragment(e, n);
        },
        hasBlocks: (e, t) => t.children.some((t) => eV.isElement(t) && eK.isBlock(e, t)),
        hasInlines: (e, t) => t.children.some((t) => tl.isText(t) || eK.isInline(e, t)),
        hasTexts: (e, t) => t.children.every((e) => tl.isText(e)),
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
            var t = eW.get(e);
            if (void 0 !== t) return t;
            if (!r(e)) return !1;
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
                (null === e.marks || r(e.marks)) &&
                (null === e.selection || e9.isRange(e.selection)) &&
                eX.isNodeList(e.children) &&
                e0.isOperationList(e.operations);
            return eW.set(e, n), n;
        },
        isEnd(e, t, n) {
            var i = eK.end(e, n);
            return e4.equals(t, i);
        },
        isEdge: (e, t, n) => eK.isStart(e, t, n) || eK.isEnd(e, t, n),
        isEmpty(e, t) {
            var { children: n } = t,
                [i] = n;
            return 0 === n.length || (1 === n.length && tl.isText(i) && "" === i.text && !e.isVoid(t));
        },
        isInline: (e, t) => e.isInline(t),
        isNormalizing(e) {
            var t = ea.get(e);
            return void 0 === t || t;
        },
        isStart(e, t, n) {
            if (0 !== t.offset) return !1;
            var i = eK.start(e, n);
            return e4.equals(t, i);
        },
        isVoid: (e, t) => e.isVoid(t),
        last(e, t) {
            var n = eK.path(e, t, { edge: "end" });
            return eK.node(e, n);
        },
        leaf(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = eK.path(e, t, n);
            return [eX.leaf(e, i), i];
        },
        *levels(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: n = e.selection, reverse: i = !1, voids: r = !1 } = t,
                { match: s } = t;
            if ((null == s && (s = () => !0), n)) {
                var a = [],
                    o = eK.path(e, n);
                for (var [l, u] of eX.levels(e, o))
                    if (s(l, u) && (a.push([l, u]), !r && eV.isElement(l) && eK.isVoid(e, l))) break;
                i && a.reverse(), yield* a;
            }
        },
        marks(e) {
            var { marks: t, selection: n } = e;
            if (!n) return null;
            if (t) return t;
            if (e9.isExpanded(n)) {
                var [i] = eK.nodes(e, { match: tl.isText });
                if (!i) return {};
                var [r] = i;
                return ef(r, eB);
            }
            var { anchor: s } = n,
                { path: a } = s,
                [o] = eK.leaf(e, a);
            if (0 === s.offset) {
                var l = eK.previous(e, { at: a, match: tl.isText });
                if (!eK.above(e, { match: (t) => eV.isElement(t) && eK.isVoid(e, t) && e.markableVoid(t) })) {
                    var u = eK.above(e, { match: (t) => eV.isElement(t) && eK.isBlock(e, t) });
                    if (l && u) {
                        var [c, d] = l,
                            [, _] = u;
                        e1.isAncestor(_, d) && (o = c);
                    }
                }
            }
            return ef(o, eH);
        },
        next(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { mode: n = "lowest", voids: i = !1 } = t,
                { match: r, at: s = e.selection } = t;
            if (s) {
                var a = eK.after(e, s, { voids: i });
                if (a) {
                    var [, o] = eK.last(e, []),
                        l = [a.path, o];
                    if (e1.isPath(s) && 0 === s.length) throw Error("Cannot get the next node from the root node!");
                    if (null == r)
                        if (e1.isPath(s)) {
                            var [u] = eK.parent(e, s);
                            r = (e) => u.children.includes(e);
                        } else r = () => !0;
                    var [c] = eK.nodes(e, { at: l, match: r, mode: n, voids: i });
                    return c;
                }
            }
        },
        node(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = eK.path(e, t, n);
            return [eX.get(e, i), i];
        },
        *nodes(e) {
            var t,
                n,
                i,
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: s = e.selection, mode: a = "all", universal: o = !1, reverse: l = !1, voids: u = !1 } = r,
                { match: c } = r;
            if ((c || (c = () => !0), s)) {
                if (ez.isSpan(s)) (t = s[0]), (n = s[1]);
                else {
                    var d = eK.path(e, s, { edge: "start" }),
                        _ = eK.path(e, s, { edge: "end" });
                    (t = l ? _ : d), (n = l ? d : _);
                }
                var f = eX.nodes(e, {
                        reverse: l,
                        from: t,
                        to: n,
                        pass: (t) => {
                            var [n] = t;
                            return !u && eV.isElement(n) && eK.isVoid(e, n);
                        },
                    }),
                    h = [];
                for (var [p, E] of f) {
                    var m = i && 0 === e1.compare(E, i[1]);
                    if ("highest" !== a || !m) {
                        if (!c(p, E))
                            if (o && !m && tl.isText(p)) return;
                            else continue;
                        if ("lowest" === a && m) {
                            i = [p, E];
                            continue;
                        }
                        var g = "lowest" === a ? i : [p, E];
                        g && (o ? h.push(g) : yield g), (i = [p, E]);
                    }
                }
                "lowest" === a && i && (o ? h.push(i) : yield i), o && (yield* h);
            }
        },
        normalize(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { force: n = !1, operation: i } = t,
                r = (e) => ei.get(e) || [],
                s = (e) => {
                    var t = r(e).pop(),
                        n = t.join(",");
                    return (er.get(e) || new Set()).delete(n), t;
                };
            if (eK.isNormalizing(e)) {
                if (n) {
                    var a = Array.from(eX.nodes(e), (e) => {
                            var [, t] = e;
                            return t;
                        }),
                        o = new Set(a.map((e) => e.join(",")));
                    ei.set(e, a), er.set(e, o);
                }
                0 !== r(e).length &&
                    eK.withoutNormalizing(e, () => {
                        for (var t of r(e))
                            if (eX.has(e, t)) {
                                var n = eK.node(e, t),
                                    [a, o] = n;
                                eV.isElement(a) && 0 === a.children.length && e.normalizeNode(n, { operation: i });
                            }
                        for (var l = r(e), u = l.length, c = 0; 0 !== l.length; ) {
                            if (
                                !e.shouldNormalize({
                                    dirtyPaths: l,
                                    iteration: c,
                                    initialDirtyPathsLength: u,
                                    operation: i,
                                })
                            )
                                return;
                            var d = s(e);
                            if (eX.has(e, d)) {
                                var _ = eK.node(e, d);
                                e.normalizeNode(_, { operation: i });
                            }
                            c++, (l = r(e));
                        }
                    });
            }
        },
        parent(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = eK.path(e, t, n),
                r = e1.parent(i);
            return eK.node(e, r);
        },
        path(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { depth: i, edge: r } = n;
            if (e1.isPath(t)) {
                if ("start" === r) {
                    var [, s] = eX.first(e, t);
                    t = s;
                } else if ("end" === r) {
                    var [, a] = eX.last(e, t);
                    t = a;
                }
            }
            return (
                e9.isRange(t) &&
                    (t =
                        "start" === r ? e9.start(t) : "end" === r ? e9.end(t) : e1.common(t.anchor.path, t.focus.path)),
                e4.isPoint(t) && (t = t.path),
                null != i && (t = t.slice(0, i)),
                t
            );
        },
        hasPath: (e, t) => eX.has(e, t),
        pathRef(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: i = "forward" } = n,
                r = {
                    current: t,
                    affinity: i,
                    unref() {
                        var { current: t } = r;
                        return eK.pathRefs(e).delete(r), (r.current = null), t;
                    },
                };
            return eK.pathRefs(e).add(r), r;
        },
        pathRefs(e) {
            var t = eo.get(e);
            return t || ((t = new Set()), eo.set(e, t)), t;
        },
        point(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { edge: i = "start" } = n;
            if (e1.isPath(t)) {
                if ("end" === i) {
                    var r,
                        [, s] = eX.last(e, t);
                    r = s;
                } else {
                    var [, a] = eX.first(e, t);
                    r = a;
                }
                var o = eX.get(e, r);
                if (!tl.isText(o))
                    throw Error(
                        "Cannot get the "
                            .concat(i, " point in the node at path [")
                            .concat(t, "] because it has no ")
                            .concat(i, " text node."),
                    );
                return { path: r, offset: "end" === i ? o.text.length : 0 };
            }
            if (e9.isRange(t)) {
                var [l, u] = e9.edges(t);
                return "start" === i ? l : u;
            }
            return t;
        },
        pointRef(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: i = "forward" } = n,
                r = {
                    current: t,
                    affinity: i,
                    unref() {
                        var { current: t } = r;
                        return eK.pointRefs(e).delete(r), (r.current = null), t;
                    },
                };
            return eK.pointRefs(e).add(r), r;
        },
        pointRefs(e) {
            var t = el.get(e);
            return t || ((t = new Set()), el.set(e, t)), t;
        },
        *positions(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: n = e.selection, unit: i = "offset", reverse: r = !1, voids: s = !1 } = t;
            if (n) {
                var a = eK.range(e, n),
                    [o, l] = e9.edges(a),
                    u = r ? l : o,
                    c = !1,
                    d = "",
                    _ = 0,
                    f = 0,
                    h = 0;
                for (var [p, E] of eK.nodes(e, { at: n, reverse: r, voids: s })) {
                    if (eV.isElement(p)) {
                        if (!s && e.isVoid(p)) {
                            yield eK.start(e, E);
                            continue;
                        }
                        if (e.isInline(p)) continue;
                        if (eK.hasInlines(e, p)) {
                            var m = e1.isAncestor(E, l.path) ? l : eK.end(e, E),
                                g = e1.isAncestor(E, o.path) ? o : eK.start(e, E);
                            (d = eK.string(e, { anchor: g, focus: m }, { voids: s })), (c = !0);
                        }
                    }
                    if (tl.isText(p)) {
                        var A,
                            I,
                            T,
                            S = e1.equals(E, u.path);
                        for (
                            S
                                ? ((f = r ? u.offset : p.text.length - u.offset), (h = u.offset))
                                : ((f = p.text.length), (h = r ? f : 0)),
                                (S || c || "offset" === i) && (yield { path: E, offset: h }, (c = !1));
                            ;
                        ) {
                            if (0 === _) {
                                if ("" === d) break;
                                (A = d),
                                    (I = i),
                                    (T = r),
                                    (d = eA(
                                        d,
                                        (_ =
                                            "character" === I
                                                ? eh(A, T)
                                                : "word" === I
                                                  ? eg(A, T)
                                                  : "line" === I || "block" === I
                                                    ? A.length
                                                    : 1),
                                        r,
                                    )[1]);
                            }
                            if (((h = r ? h - _ : h + _), (f -= _) < 0)) {
                                _ = -f;
                                break;
                            }
                            (_ = 0), yield { path: E, offset: h };
                        }
                    }
                }
            }
        },
        previous(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { mode: n = "lowest", voids: i = !1 } = t,
                { match: r, at: s = e.selection } = t;
            if (s) {
                var a = eK.before(e, s, { voids: i });
                if (a) {
                    var [, o] = eK.first(e, []),
                        l = [a.path, o];
                    if (e1.isPath(s) && 0 === s.length) throw Error("Cannot get the previous node from the root node!");
                    if (null == r)
                        if (e1.isPath(s)) {
                            var [u] = eK.parent(e, s);
                            r = (e) => u.children.includes(e);
                        } else r = () => !0;
                    var [c] = eK.nodes(e, { reverse: !0, at: l, match: r, mode: n, voids: i });
                    return c;
                }
            }
        },
        range: (e, t, n) => (e9.isRange(t) && !n ? t : { anchor: eK.start(e, t), focus: eK.end(e, n || t) }),
        rangeRef(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: i = "forward" } = n,
                r = {
                    current: t,
                    affinity: i,
                    unref() {
                        var { current: t } = r;
                        return eK.rangeRefs(e).delete(r), (r.current = null), t;
                    },
                };
            return eK.rangeRefs(e).add(r), r;
        },
        rangeRefs(e) {
            var t = eu.get(e);
            return t || ((t = new Set()), eu.set(e, t)), t;
        },
        removeMark(e, t) {
            e.removeMark(t);
        },
        setNormalizing(e, t) {
            ea.set(e, t);
        },
        start: (e, t) => eK.point(e, t, { edge: "start" }),
        string(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { voids: i = !1 } = n,
                r = eK.range(e, t),
                [s, a] = e9.edges(r),
                o = "";
            for (var [l, u] of eK.nodes(e, { at: r, match: tl.isText, voids: i })) {
                var c = l.text;
                e1.equals(u, a.path) && (c = c.slice(0, a.offset)),
                    e1.equals(u, s.path) && (c = c.slice(s.offset)),
                    (o += c);
            }
            return o;
        },
        unhangRange(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { voids: i = !1 } = n,
                [r, s] = e9.edges(t);
            if (0 !== r.offset || 0 !== s.offset || e9.isCollapsed(t) || e1.hasPrevious(s.path)) return t;
            var a = eK.above(e, { at: s, match: (t) => eV.isElement(t) && eK.isBlock(e, t), voids: i }),
                o = a ? a[1] : [],
                l = { anchor: eK.start(e, r), focus: s },
                u = !0;
            for (var [c, d] of eK.nodes(e, { at: l, match: tl.isText, reverse: !0, voids: i })) {
                if (u) {
                    u = !1;
                    continue;
                }
                if ("" !== c.text || e1.isBefore(d, o)) {
                    s = { path: d, offset: c.text.length };
                    break;
                }
            }
            return { anchor: r, focus: s };
        },
        void(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return eK.above(e, eY(eY({}, t), {}, { match: (t) => eV.isElement(t) && eK.isVoid(e, t) }));
        },
        withoutNormalizing(e, t) {
            var n = eK.isNormalizing(e);
            eK.setNormalizing(e, !1);
            try {
                t();
            } finally {
                eK.setNormalizing(e, n);
            }
            eK.normalize(e);
        },
    },
    ez = { isSpan: (e) => Array.isArray(e) && 2 === e.length && e.every(e1.isPath) },
    e$ = ["children"],
    eq = ["text"],
    eZ = new WeakMap(),
    eX = {
        ancestor(e, t) {
            var n = eX.get(e, t);
            if (tl.isText(n))
                throw Error(
                    "Cannot get the ancestor node at path ["
                        .concat(t, "] because it refers to a text node instead: ")
                        .concat(tn.stringify(n)),
                );
            return n;
        },
        *ancestors(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            for (var i of e1.ancestors(t, n)) {
                var r = [eX.ancestor(e, i), i];
                yield r;
            }
        },
        child(e, t) {
            if (tl.isText(e)) throw Error("Cannot get the child of a text node: ".concat(tn.stringify(e)));
            var n = e.children[t];
            if (null == n) throw Error("Cannot get child at index `".concat(t, "` in node: ").concat(tn.stringify(e)));
            return n;
        },
        *children(e, t) {
            for (
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    { reverse: i = !1 } = n,
                    r = eX.ancestor(e, t),
                    { children: s } = r,
                    a = i ? s.length - 1 : 0;
                i ? a >= 0 : a < s.length;
            ) {
                var o = eX.child(r, a),
                    l = t.concat(a);
                yield [o, l], (a = i ? a - 1 : a + 1);
            }
        },
        common(e, t, n) {
            var i = e1.common(t, n);
            return [eX.get(e, i), i];
        },
        descendant(e, t) {
            var n = eX.get(e, t);
            if (eK.isEditor(n))
                throw Error(
                    "Cannot get the descendant node at path ["
                        .concat(t, "] because it refers to the root editor node instead: ")
                        .concat(tn.stringify(n)),
                );
            return n;
        },
        *descendants(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [n, i] of eX.nodes(e, t)) 0 !== i.length && (yield [n, i]);
        },
        *elements(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [n, i] of eX.nodes(e, t)) eV.isElement(n) && (yield [n, i]);
        },
        extractProps(e) {
            if (eV.isAncestor(e)) {
                var t = ef(e, e$);
                return t;
            }
            var t = ef(e, eq);
            return t;
        },
        first(e, t) {
            for (var n = t.slice(), i = eX.get(e, n); i; )
                if (tl.isText(i) || 0 === i.children.length) break;
                else (i = i.children[0]), n.push(0);
            return [i, n];
        },
        fragment(e, t) {
            if (tl.isText(e))
                throw Error("Cannot get a fragment starting from a root text node: ".concat(tn.stringify(e)));
            return J({ children: e.children }, (e) => {
                var [n, i] = e9.edges(t);
                for (var [, r] of eX.nodes(e, {
                    reverse: !0,
                    pass: (e) => {
                        var [, n] = e;
                        return !e9.includes(t, n);
                    },
                })) {
                    if (!e9.includes(t, r)) {
                        var s = eX.parent(e, r),
                            a = r[r.length - 1];
                        s.children.splice(a, 1);
                    }
                    if (e1.equals(r, i.path)) {
                        var o = eX.leaf(e, r);
                        o.text = o.text.slice(0, i.offset);
                    }
                    if (e1.equals(r, n.path)) {
                        var l = eX.leaf(e, r);
                        l.text = l.text.slice(n.offset);
                    }
                }
                eK.isEditor(e) && (e.selection = null);
            }).children;
        },
        get(e, t) {
            for (var n = e, i = 0; i < t.length; i++) {
                var r = t[i];
                if (tl.isText(n) || !n.children[r])
                    throw Error("Cannot find a descendant at path [".concat(t, "] in node: ").concat(tn.stringify(e)));
                n = n.children[r];
            }
            return n;
        },
        has(e, t) {
            for (var n = e, i = 0; i < t.length; i++) {
                var r = t[i];
                if (tl.isText(n) || !n.children[r]) return !1;
                n = n.children[r];
            }
            return !0;
        },
        isNode: (e) => tl.isText(e) || eV.isElement(e) || eK.isEditor(e),
        isNodeList(e) {
            if (!Array.isArray(e)) return !1;
            var t = eZ.get(e);
            if (void 0 !== t) return t;
            var n = e.every((e) => eX.isNode(e));
            return eZ.set(e, n), n;
        },
        last(e, t) {
            for (var n = t.slice(), i = eX.get(e, n); i; )
                if (tl.isText(i) || 0 === i.children.length) break;
                else {
                    var r = i.children.length - 1;
                    (i = i.children[r]), n.push(r);
                }
            return [i, n];
        },
        leaf(e, t) {
            var n = eX.get(e, t);
            if (!tl.isText(n))
                throw Error(
                    "Cannot get the leaf node at path ["
                        .concat(t, "] because it refers to a non-leaf node: ")
                        .concat(tn.stringify(n)),
                );
            return n;
        },
        *levels(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            for (var i of e1.levels(t, n)) {
                var r = eX.get(e, i);
                yield [r, i];
            }
        },
        matches: (e, t) =>
            (eV.isElement(e) && eV.isElementProps(t) && eV.matches(e, t)) ||
            (tl.isText(e) && tl.isTextProps(t) && tl.matches(e, t)),
        *nodes(e) {
            for (
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { pass: n, reverse: i = !1 } = t,
                    { from: r = [], to: s } = t,
                    a = new Set(),
                    o = [],
                    l = e;
                !(s && (i ? e1.isBefore(o, s) : e1.isAfter(o, s)));
            ) {
                if (
                    (a.has(l) || (yield [l, o]),
                    !a.has(l) && !tl.isText(l) && 0 !== l.children.length && (null == n || !1 === n([l, o])))
                ) {
                    a.add(l);
                    var u = i ? l.children.length - 1 : 0;
                    e1.isAncestor(o, r) && (u = r[o.length]), (o = o.concat(u)), (l = eX.get(e, o));
                    continue;
                }
                if (0 === o.length) break;
                if (!i) {
                    var c = e1.next(o);
                    if (eX.has(e, c)) {
                        (o = c), (l = eX.get(e, o));
                        continue;
                    }
                }
                if (i && 0 !== o[o.length - 1]) {
                    (o = e1.previous(o)), (l = eX.get(e, o));
                    continue;
                }
                (o = e1.parent(o)), (l = eX.get(e, o)), a.add(l);
            }
        },
        parent(e, t) {
            var n = e1.parent(t),
                i = eX.get(e, n);
            if (tl.isText(i))
                throw Error("Cannot get the parent of path [".concat(t, "] because it does not exist in the root."));
            return i;
        },
        string: (e) => (tl.isText(e) ? e.text : e.children.map(eX.string).join("")),
        *texts(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [n, i] of eX.nodes(e, t)) tl.isText(n) && (yield [n, i]);
        },
    };
function eQ(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function eJ(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eQ(Object(n), !0).forEach(function (t) {
                  en(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eQ(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var e0 = {
        isNodeOperation: (e) => e0.isOperation(e) && e.type.endsWith("_node"),
        isOperation(e) {
            if (!r(e)) return !1;
            switch (e.type) {
                case "insert_node":
                case "remove_node":
                    return e1.isPath(e.path) && eX.isNode(e.node);
                case "insert_text":
                case "remove_text":
                    return "number" == typeof e.offset && "string" == typeof e.text && e1.isPath(e.path);
                case "merge_node":
                    return "number" == typeof e.position && e1.isPath(e.path) && r(e.properties);
                case "move_node":
                    return e1.isPath(e.path) && e1.isPath(e.newPath);
                case "set_node":
                    return e1.isPath(e.path) && r(e.properties) && r(e.newProperties);
                case "set_selection":
                    return (
                        (null === e.properties && e9.isRange(e.newProperties)) ||
                        (null === e.newProperties && e9.isRange(e.properties)) ||
                        (r(e.properties) && r(e.newProperties))
                    );
                case "split_node":
                    return e1.isPath(e.path) && "number" == typeof e.position && r(e.properties);
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
                    return eJ(eJ({}, e), {}, { type: "remove_node" });
                case "insert_text":
                    return eJ(eJ({}, e), {}, { type: "remove_text" });
                case "merge_node":
                    return eJ(eJ({}, e), {}, { type: "split_node", path: e1.previous(e.path) });
                case "move_node":
                    var { newPath: t, path: n } = e;
                    if (e1.equals(t, n)) return e;
                    if (e1.isSibling(n, t)) return eJ(eJ({}, e), {}, { path: t, newPath: n });
                    var i = e1.transform(n, e),
                        r = e1.transform(e1.next(n), e);
                    return eJ(eJ({}, e), {}, { path: i, newPath: r });
                case "remove_node":
                    return eJ(eJ({}, e), {}, { type: "insert_node" });
                case "remove_text":
                    return eJ(eJ({}, e), {}, { type: "insert_text" });
                case "set_node":
                    var { properties: s, newProperties: a } = e;
                    return eJ(eJ({}, e), {}, { properties: a, newProperties: s });
                case "set_selection":
                    var { properties: o, newProperties: l } = e;
                    if (null == o) return eJ(eJ({}, e), {}, { properties: l, newProperties: null });
                    if (null == l) return eJ(eJ({}, e), {}, { properties: null, newProperties: o });
                    return eJ(eJ({}, e), {}, { properties: l, newProperties: o });
                case "split_node":
                    return eJ(eJ({}, e), {}, { type: "merge_node", path: e1.next(e.path) });
            }
        },
    },
    e1 = {
        ancestors(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { reverse: n = !1 } = t,
                i = e1.levels(e, t);
            return n ? i.slice(1) : i.slice(0, -1);
        },
        common(e, t) {
            for (var n = [], i = 0; i < e.length && i < t.length; i++) {
                var r = e[i];
                if (r !== t[i]) break;
                n.push(r);
            }
            return n;
        },
        compare(e, t) {
            for (var n = Math.min(e.length, t.length), i = 0; i < n; i++) {
                if (e[i] < t[i]) return -1;
                if (e[i] > t[i]) return 1;
            }
            return 0;
        },
        endsAfter(e, t) {
            var n = e.length - 1,
                i = e.slice(0, n),
                r = t.slice(0, n),
                s = e[n],
                a = t[n];
            return e1.equals(i, r) && s > a;
        },
        endsAt(e, t) {
            var n = e.length,
                i = e.slice(0, n),
                r = t.slice(0, n);
            return e1.equals(i, r);
        },
        endsBefore(e, t) {
            var n = e.length - 1,
                i = e.slice(0, n),
                r = t.slice(0, n),
                s = e[n],
                a = t[n];
            return e1.equals(i, r) && s < a;
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
                i = t.slice(0, -1);
            return e[e.length - 1] !== t[t.length - 1] && e1.equals(n, i);
        },
        levels(e) {
            for (
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { reverse: n = !1 } = t,
                    i = [],
                    r = 0;
                r <= e.length;
                r++
            )
                i.push(e.slice(0, r));
            return n && i.reverse(), i;
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
            var i = [...e],
                { affinity: r = "forward" } = n;
            if (0 === e.length) return i;
            switch (t.type) {
                case "insert_node":
                    var { path: s } = t;
                    (e1.equals(s, i) || e1.endsBefore(s, i) || e1.isAncestor(s, i)) && (i[s.length - 1] += 1);
                    break;
                case "remove_node":
                    var { path: a } = t;
                    if (e1.equals(a, i) || e1.isAncestor(a, i)) return null;
                    e1.endsBefore(a, i) && (i[a.length - 1] -= 1);
                    break;
                case "merge_node":
                    var { path: o, position: l } = t;
                    e1.equals(o, i) || e1.endsBefore(o, i)
                        ? (i[o.length - 1] -= 1)
                        : e1.isAncestor(o, i) && ((i[o.length - 1] -= 1), (i[o.length] += l));
                    break;
                case "split_node":
                    var { path: u, position: c } = t;
                    if (e1.equals(u, i)) {
                        if ("forward" === r) i[i.length - 1] += 1;
                        else if ("backward" !== r) return null;
                    } else
                        e1.endsBefore(u, i)
                            ? (i[u.length - 1] += 1)
                            : e1.isAncestor(u, i) && e[u.length] >= c && ((i[u.length - 1] += 1), (i[u.length] -= c));
                    break;
                case "move_node":
                    var { path: d, newPath: _ } = t;
                    if (e1.equals(d, _)) break;
                    if (e1.isAncestor(d, i) || e1.equals(d, i)) {
                        var f = _.slice();
                        return (
                            e1.endsBefore(d, _) && d.length < _.length && (f[d.length - 1] -= 1),
                            f.concat(i.slice(d.length))
                        );
                    }
                    e1.isSibling(d, _) && (e1.isAncestor(_, i) || e1.equals(_, i))
                        ? e1.endsBefore(d, i)
                            ? (i[d.length - 1] -= 1)
                            : (i[d.length - 1] += 1)
                        : e1.endsBefore(_, i) || e1.equals(_, i) || e1.isAncestor(_, i)
                          ? (e1.endsBefore(d, i) && (i[d.length - 1] -= 1), (i[_.length - 1] += 1))
                          : e1.endsBefore(d, i) && (e1.equals(_, i) && (i[_.length - 1] += 1), (i[d.length - 1] -= 1));
            }
            return i;
        },
    },
    e2 = {
        transform(e, t) {
            var { current: n, affinity: i } = e;
            if (null != n) {
                var r = e1.transform(n, t, { affinity: i });
                (e.current = r), null == r && e.unref();
            }
        },
    };
function e3(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function e6(e) {
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
var e4 = {
        compare(e, t) {
            var n = e1.compare(e.path, t.path);
            return 0 === n ? (e.offset < t.offset ? -1 : +(e.offset > t.offset)) : n;
        },
        isAfter: (e, t) => 1 === e4.compare(e, t),
        isBefore: (e, t) => -1 === e4.compare(e, t),
        equals: (e, t) => e.offset === t.offset && e1.equals(e.path, t.path),
        isPoint: (e) => r(e) && "number" == typeof e.offset && e1.isPath(e.path),
        transform(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return J(e, (e) => {
                if (null === e) return null;
                var { affinity: i = "forward" } = n,
                    { path: r, offset: s } = e;
                switch (t.type) {
                    case "insert_node":
                    case "move_node":
                        e.path = e1.transform(r, t, n);
                        break;
                    case "insert_text":
                        e1.equals(t.path, r) &&
                            (t.offset < s || (t.offset === s && "forward" === i)) &&
                            (e.offset += t.text.length);
                        break;
                    case "merge_node":
                        e1.equals(t.path, r) && (e.offset += t.position), (e.path = e1.transform(r, t, n));
                        break;
                    case "remove_text":
                        e1.equals(t.path, r) && t.offset <= s && (e.offset -= Math.min(s - t.offset, t.text.length));
                        break;
                    case "remove_node":
                        if (e1.equals(t.path, r) || e1.isAncestor(t.path, r)) return null;
                        e.path = e1.transform(r, t, n);
                        break;
                    case "split_node":
                        if (e1.equals(t.path, r))
                            if (t.position === s && null == i) return null;
                            else
                                (t.position < s || (t.position === s && "forward" === i)) &&
                                    ((e.offset -= t.position),
                                    (e.path = e1.transform(r, t, e6(e6({}, n), {}, { affinity: "forward" }))));
                        else e.path = e1.transform(r, t, n);
                }
            });
        },
    },
    e5 = {
        transform(e, t) {
            var { current: n, affinity: i } = e;
            if (null != n) {
                var r = e4.transform(n, t, { affinity: i });
                (e.current = r), null == r && e.unref();
            }
        },
    },
    e7 = ["anchor", "focus"];
function e8(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
var e9 = {
        edges(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { reverse: n = !1 } = t,
                { anchor: i, focus: r } = e;
            return e9.isBackward(e) === n ? [i, r] : [r, i];
        },
        end(e) {
            var [, t] = e9.edges(e);
            return t;
        },
        equals: (e, t) => e4.equals(e.anchor, t.anchor) && e4.equals(e.focus, t.focus),
        includes(e, t) {
            if (e9.isRange(t)) {
                if (e9.includes(e, t.anchor) || e9.includes(e, t.focus)) return !0;
                var [n, i] = e9.edges(e),
                    [r, s] = e9.edges(t);
                return e4.isBefore(n, r) && e4.isAfter(i, s);
            }
            var [a, o] = e9.edges(e),
                l = !1,
                u = !1;
            return (
                e4.isPoint(t)
                    ? ((l = e4.compare(t, a) >= 0), (u = 0 >= e4.compare(t, o)))
                    : ((l = e1.compare(t, a.path) >= 0), (u = 0 >= e1.compare(t, o.path))),
                l && u
            );
        },
        intersection(e, t) {
            var n = ef(e, e7),
                [i, r] = e9.edges(e),
                [s, a] = e9.edges(t),
                o = e4.isBefore(i, s) ? s : i,
                l = e4.isBefore(r, a) ? r : a;
            return e4.isBefore(l, o)
                ? null
                : (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {};
                          t % 2
                              ? e8(Object(n), !0).forEach(function (t) {
                                    en(e, t, n[t]);
                                })
                              : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                : e8(Object(n)).forEach(function (t) {
                                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                  });
                      }
                      return e;
                  })({ anchor: o, focus: l }, n);
        },
        isBackward(e) {
            var { anchor: t, focus: n } = e;
            return e4.isAfter(t, n);
        },
        isCollapsed(e) {
            var { anchor: t, focus: n } = e;
            return e4.equals(t, n);
        },
        isExpanded: (e) => !e9.isCollapsed(e),
        isForward: (e) => !e9.isBackward(e),
        isRange: (e) => r(e) && e4.isPoint(e.anchor) && e4.isPoint(e.focus),
        *points(e) {
            yield [e.anchor, "anchor"], yield [e.focus, "focus"];
        },
        start(e) {
            var [t] = e9.edges(e);
            return t;
        },
        transform(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return J(e, (e) => {
                if (null === e) return null;
                var i,
                    r,
                    { affinity: s = "inward" } = n;
                if ("inward" === s) {
                    var a = e9.isCollapsed(e);
                    e9.isForward(e)
                        ? ((i = "forward"), (r = a ? i : "backward"))
                        : ((i = "backward"), (r = a ? i : "forward"));
                } else
                    "outward" === s
                        ? e9.isForward(e)
                            ? ((i = "backward"), (r = "forward"))
                            : ((i = "forward"), (r = "backward"))
                        : ((i = s), (r = s));
                var o = e4.transform(e.anchor, t, { affinity: i }),
                    l = e4.transform(e.focus, t, { affinity: r });
                if (!o || !l) return null;
                (e.anchor = o), (e.focus = l);
            });
        },
    },
    te = {
        transform(e, t) {
            var { current: n, affinity: i } = e;
            if (null != n) {
                var r = e9.transform(n, t, { affinity: i });
                (e.current = r), null == r && e.unref();
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
    ti = (e, t) => {
        for (var n in e) {
            var i = e[n],
                s = t[n];
            if (r(i) && r(s)) {
                if (!ti(i, s)) return !1;
            } else if (Array.isArray(i) && Array.isArray(s)) {
                if (i.length !== s.length) return !1;
                for (var a = 0; a < i.length; a++) if (i[a] !== s[a]) return !1;
            } else if (i !== s) return !1;
        }
        for (var o in t) if (void 0 === e[o] && void 0 !== t[o]) return !1;
        return !0;
    },
    tr = ["text"],
    ts = ["anchor", "focus"];
function ta(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function to(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? ta(Object(n), !0).forEach(function (t) {
                  en(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ta(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var tl = {
    equals(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { loose: i = !1 } = n;
        return ti(i ? ef(e, tr) : e, i ? ef(t, tr) : t);
    },
    isText: (e) => r(e) && "string" == typeof e.text,
    isTextList: (e) => Array.isArray(e) && e.every((e) => tl.isText(e)),
    isTextProps: (e) => void 0 !== e.text,
    matches(e, t) {
        for (var n in t) if ("text" !== n && (!e.hasOwnProperty(n) || e[n] !== t[n])) return !1;
        return !0;
    },
    decorations(e, t) {
        var n = [to({}, e)];
        for (var i of t) {
            var r = ef(i, ts),
                [s, a] = e9.edges(i),
                o = [],
                l = 0,
                u = s.offset,
                c = a.offset;
            for (var d of n) {
                var { length: _ } = d.text,
                    f = l;
                if (((l += _), u <= f && l <= c)) {
                    Object.assign(d, r), o.push(d);
                    continue;
                }
                if ((u !== c && (u === l || c === f)) || u > l || c < f || (c === f && 0 !== f)) {
                    o.push(d);
                    continue;
                }
                var h = d,
                    p = void 0,
                    E = void 0;
                if (c < l) {
                    var m = c - f;
                    (E = to(to({}, h), {}, { text: h.text.slice(m) })),
                        (h = to(to({}, h), {}, { text: h.text.slice(0, m) }));
                }
                if (u > f) {
                    var g = u - f;
                    (p = to(to({}, h), {}, { text: h.text.slice(0, g) })),
                        (h = to(to({}, h), {}, { text: h.text.slice(g) }));
                }
                Object.assign(h, r), p && o.push(p), o.push(h), E && o.push(E);
            }
            n = o;
        }
        return n;
    },
};
function tu(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function tc(e) {
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
var td = ["text"],
    t_ = ["children"];
function tf(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function th(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tf(Object(n), !0).forEach(function (t) {
                  en(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tf(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var tp = (e, t) =>
        eV.isElement(t)
            ? !!eK.isVoid(e, t) || (1 === t.children.length && tp(e, t.children[0]))
            : !eK.isEditor(t) && !0,
    tE = (e, t) => {
        var [n] = eK.node(e, t);
        return (e) => e === n;
    };
function tm(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function tg(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tm(Object(n), !0).forEach(function (t) {
                  en(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tm(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
function tA(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function tI(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tA(Object(n), !0).forEach(function (t) {
                  en(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tA(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var tT = tI(
    tI(
        tI(
            tI(
                {},
                {
                    transform(e, t) {
                        e.children = ee(e.children);
                        var n = e.selection && ee(e.selection);
                        try {
                            n = ((e, t, n) => {
                                switch (n.type) {
                                    case "insert_node":
                                        var { path: i, node: r } = n,
                                            s = eX.parent(e, i),
                                            a = i[i.length - 1];
                                        if (a > s.children.length)
                                            throw Error(
                                                'Cannot apply an "insert_node" operation at path ['.concat(
                                                    i,
                                                    "] because the destination is past the end of the node.",
                                                ),
                                            );
                                        if ((s.children.splice(a, 0, r), t))
                                            for (var [o, l] of e9.points(t)) t[l] = e4.transform(o, n);
                                        break;
                                    case "insert_text":
                                        var { path: u, offset: c, text: d } = n;
                                        if (0 === d.length) break;
                                        var _ = eX.leaf(e, u),
                                            f = _.text.slice(0, c),
                                            h = _.text.slice(c);
                                        if (((_.text = f + d + h), t))
                                            for (var [p, E] of e9.points(t)) t[E] = e4.transform(p, n);
                                        break;
                                    case "merge_node":
                                        var { path: m } = n,
                                            g = eX.get(e, m),
                                            A = e1.previous(m),
                                            I = eX.get(e, A),
                                            T = eX.parent(e, m),
                                            S = m[m.length - 1];
                                        if (tl.isText(g) && tl.isText(I)) I.text += g.text;
                                        else if (tl.isText(g) || tl.isText(I))
                                            throw Error(
                                                'Cannot apply a "merge_node" operation at path ['
                                                    .concat(m, "] to nodes of different interfaces: ")
                                                    .concat(tn.stringify(g), " ")
                                                    .concat(tn.stringify(I)),
                                            );
                                        else I.children.push(...g.children);
                                        if ((T.children.splice(S, 1), t))
                                            for (var [N, y] of e9.points(t)) t[y] = e4.transform(N, n);
                                        break;
                                    case "move_node":
                                        var { path: C, newPath: v } = n;
                                        if (e1.isAncestor(C, v))
                                            throw Error(
                                                "Cannot move a path ["
                                                    .concat(C, "] to new path [")
                                                    .concat(v, "] because the destination is inside itself."),
                                            );
                                        var O = eX.get(e, C),
                                            R = eX.parent(e, C),
                                            b = C[C.length - 1];
                                        R.children.splice(b, 1);
                                        var D = e1.transform(C, n),
                                            L = eX.get(e, e1.parent(D)),
                                            w = D[D.length - 1];
                                        if ((L.children.splice(w, 0, O), t))
                                            for (var [M, P] of e9.points(t)) t[P] = e4.transform(M, n);
                                        break;
                                    case "remove_node":
                                        var { path: x } = n,
                                            U = x[x.length - 1];
                                        if ((eX.parent(e, x).children.splice(U, 1), t))
                                            for (var [k, G] of e9.points(t)) {
                                                var F = e4.transform(k, n);
                                                if (null != t && null != F) t[G] = F;
                                                else {
                                                    var V = void 0,
                                                        B = void 0;
                                                    for (var [H, j] of eX.texts(e))
                                                        if (-1 === e1.compare(j, x)) V = [H, j];
                                                        else {
                                                            B = [H, j];
                                                            break;
                                                        }
                                                    var Y = !1;
                                                    V &&
                                                        B &&
                                                        (Y = e1.equals(B[1], x)
                                                            ? !e1.hasPrevious(B[1])
                                                            : e1.common(V[1], x).length < e1.common(B[1], x).length),
                                                        V && !Y
                                                            ? ((k.path = V[1]), (k.offset = V[0].text.length))
                                                            : B
                                                              ? ((k.path = B[1]), (k.offset = 0))
                                                              : (t = null);
                                                }
                                            }
                                        break;
                                    case "remove_text":
                                        var { path: W, offset: K, text: z } = n;
                                        if (0 === z.length) break;
                                        var $ = eX.leaf(e, W),
                                            q = $.text.slice(0, K),
                                            Z = $.text.slice(K + z.length);
                                        if ((($.text = q + Z), t))
                                            for (var [X, Q] of e9.points(t)) t[Q] = e4.transform(X, n);
                                        break;
                                    case "set_node":
                                        var { path: J, properties: ee, newProperties: et } = n;
                                        if (0 === J.length) throw Error("Cannot set properties on the root node!");
                                        var en = eX.get(e, J);
                                        for (var ei in et) {
                                            if ("children" === ei || "text" === ei)
                                                throw Error('Cannot set the "'.concat(ei, '" property of nodes!'));
                                            var er = et[ei];
                                            null == er ? delete en[ei] : (en[ei] = er);
                                        }
                                        for (var es in ee) et.hasOwnProperty(es) || delete en[es];
                                        break;
                                    case "set_selection":
                                        var { newProperties: ea } = n;
                                        if (null == ea) t = ea;
                                        else {
                                            if (null == t) {
                                                if (!e9.isRange(ea))
                                                    throw Error(
                                                        'Cannot apply an incomplete "set_selection" operation properties '.concat(
                                                            tn.stringify(ea),
                                                            " when there is no current selection.",
                                                        ),
                                                    );
                                                t = tc({}, ea);
                                            }
                                            for (var eo in ea) {
                                                var el = ea[eo];
                                                if (null == el) {
                                                    if ("anchor" === eo || "focus" === eo)
                                                        throw Error(
                                                            'Cannot remove the "'.concat(eo, '" selection property'),
                                                        );
                                                    delete t[eo];
                                                } else t[eo] = el;
                                            }
                                        }
                                        break;
                                    case "split_node":
                                        var eu,
                                            { path: ec, position: ed, properties: e_ } = n;
                                        if (0 === ec.length)
                                            throw Error(
                                                'Cannot apply a "split_node" operation at path ['.concat(
                                                    ec,
                                                    "] because the root node cannot be split.",
                                                ),
                                            );
                                        var ef = eX.get(e, ec),
                                            eh = eX.parent(e, ec),
                                            ep = ec[ec.length - 1];
                                        if (tl.isText(ef)) {
                                            var eE = ef.text.slice(0, ed),
                                                em = ef.text.slice(ed);
                                            (ef.text = eE), (eu = tc(tc({}, e_), {}, { text: em }));
                                        } else {
                                            var eg = ef.children.slice(0, ed),
                                                eA = ef.children.slice(ed);
                                            (ef.children = eg), (eu = tc(tc({}, e_), {}, { children: eA }));
                                        }
                                        if ((eh.children.splice(ep + 1, 0, eu), t))
                                            for (var [eI, eT] of e9.points(t)) t[eT] = e4.transform(eI, n);
                                }
                                return t;
                            })(e, n, t);
                        } finally {
                            (e.children = et(e.children)), n ? (e.selection = a(n) ? et(n) : n) : (e.selection = null);
                        }
                    },
                },
            ),
            {
                insertNodes(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    eK.withoutNormalizing(e, () => {
                        var { hanging: i = !1, voids: r = !1, mode: s = "lowest" } = n,
                            { at: a, match: o, select: l } = n;
                        if ((eX.isNode(t) && (t = [t]), 0 !== t.length)) {
                            var [u] = t;
                            if (
                                (a ||
                                    ((a = e.selection ? e.selection : e.children.length > 0 ? eK.end(e, []) : [0]),
                                    (l = !0)),
                                null == l && (l = !1),
                                e9.isRange(a))
                            )
                                if ((i || (a = eK.unhangRange(e, a, { voids: r })), e9.isCollapsed(a))) a = a.anchor;
                                else {
                                    var [, c] = e9.edges(a),
                                        d = eK.pointRef(e, c);
                                    tT.delete(e, { at: a }), (a = d.unref());
                                }
                            if (e4.isPoint(a)) {
                                null == o &&
                                    (o = tl.isText(u)
                                        ? (e) => tl.isText(e)
                                        : e.isInline(u)
                                          ? (t) => tl.isText(t) || eK.isInline(e, t)
                                          : (t) => eV.isElement(t) && eK.isBlock(e, t));
                                var [_] = eK.nodes(e, { at: a.path, match: o, mode: s, voids: r });
                                if (!_) return;
                                var [, f] = _,
                                    h = eK.pathRef(e, f),
                                    p = eK.isEnd(e, a, f);
                                tT.splitNodes(e, { at: a, match: o, mode: s, voids: r });
                                var E = h.unref();
                                a = p ? e1.next(E) : E;
                            }
                            var m = e1.parent(a),
                                g = a[a.length - 1];
                            if (!(!r && eK.void(e, { at: m }))) {
                                for (var A of t) {
                                    var I = m.concat(g);
                                    g++, e.apply({ type: "insert_node", path: I, node: A }), (a = e1.next(a));
                                }
                                if (((a = e1.previous(a)), l)) {
                                    var T = eK.end(e, a);
                                    T && tT.select(e, T);
                                }
                            }
                        }
                    });
                },
                liftNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    eK.withoutNormalizing(e, () => {
                        var { at: n = e.selection, mode: i = "lowest", voids: r = !1 } = t,
                            { match: s } = t;
                        if (
                            (null == s && (s = e1.isPath(n) ? tE(e, n) : (t) => eV.isElement(t) && eK.isBlock(e, t)), n)
                        )
                            for (var a of Array.from(eK.nodes(e, { at: n, match: s, mode: i, voids: r }), (t) => {
                                var [, n] = t;
                                return eK.pathRef(e, n);
                            })) {
                                var o = a.unref();
                                if (o.length < 2)
                                    throw Error(
                                        "Cannot lift node at a path [".concat(
                                            o,
                                            "] because it has a depth of less than `2`.",
                                        ),
                                    );
                                var [l, u] = eK.node(e, e1.parent(o)),
                                    c = o[o.length - 1],
                                    { length: d } = l.children;
                                if (1 === d) {
                                    var _ = e1.next(u);
                                    tT.moveNodes(e, { at: o, to: _, voids: r }), tT.removeNodes(e, { at: u, voids: r });
                                } else if (0 === c) tT.moveNodes(e, { at: o, to: u, voids: r });
                                else if (c === d - 1) {
                                    var f = e1.next(u);
                                    tT.moveNodes(e, { at: o, to: f, voids: r });
                                } else {
                                    var h = e1.next(o),
                                        p = e1.next(u);
                                    tT.splitNodes(e, { at: h, voids: r }), tT.moveNodes(e, { at: o, to: p, voids: r });
                                }
                            }
                    });
                },
                mergeNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    eK.withoutNormalizing(e, () => {
                        var n,
                            i,
                            { match: r, at: s = e.selection } = t,
                            { hanging: a = !1, voids: o = !1, mode: l = "lowest" } = t;
                        if (s) {
                            if (null == r)
                                if (e1.isPath(s)) {
                                    var [u] = eK.parent(e, s);
                                    r = (e) => u.children.includes(e);
                                } else r = (t) => eV.isElement(t) && eK.isBlock(e, t);
                            if ((!a && e9.isRange(s) && (s = eK.unhangRange(e, s, { voids: o })), e9.isRange(s)))
                                if (e9.isCollapsed(s)) s = s.anchor;
                                else {
                                    var [, c] = e9.edges(s),
                                        d = eK.pointRef(e, c);
                                    tT.delete(e, { at: s }), (s = d.unref()), null == t.at && tT.select(e, s);
                                }
                            var [_] = eK.nodes(e, { at: s, match: r, voids: o, mode: l }),
                                f = eK.previous(e, { at: s, match: r, voids: o, mode: l });
                            if (_ && f) {
                                var [h, p] = _,
                                    [E, m] = f;
                                if (0 !== p.length && 0 !== m.length) {
                                    var g = e1.next(m),
                                        A = e1.common(p, m),
                                        I = e1.isSibling(p, m),
                                        T = Array.from(eK.levels(e, { at: p }), (e) => {
                                            var [t] = e;
                                            return t;
                                        })
                                            .slice(A.length)
                                            .slice(0, -1),
                                        S = eK.above(e, {
                                            at: p,
                                            mode: "highest",
                                            match: (t) => T.includes(t) && tp(e, t),
                                        }),
                                        N = S && eK.pathRef(e, S[1]);
                                    if (tl.isText(h) && tl.isText(E)) {
                                        var y = ef(h, td);
                                        (i = E.text.length), (n = y);
                                    } else if (eV.isElement(h) && eV.isElement(E)) {
                                        var y = ef(h, t_);
                                        (i = E.children.length), (n = y);
                                    } else
                                        throw Error(
                                            "Cannot merge the node at path ["
                                                .concat(
                                                    p,
                                                    "] with the previous sibling because it is not the same kind: ",
                                                )
                                                .concat(tn.stringify(h), " ")
                                                .concat(tn.stringify(E)),
                                        );
                                    I || tT.moveNodes(e, { at: p, to: g, voids: o }),
                                        N && tT.removeNodes(e, { at: N.current, voids: o }),
                                        (eV.isElement(E) && eK.isEmpty(e, E)) ||
                                        (tl.isText(E) && "" === E.text && 0 !== m[m.length - 1])
                                            ? tT.removeNodes(e, { at: m, voids: o })
                                            : e.apply({ type: "merge_node", path: g, position: i, properties: n }),
                                        N && N.unref();
                                }
                            }
                        }
                    });
                },
                moveNodes(e, t) {
                    eK.withoutNormalizing(e, () => {
                        var { to: n, at: i = e.selection, mode: r = "lowest", voids: s = !1 } = t,
                            { match: a } = t;
                        if (i) {
                            null == a && (a = e1.isPath(i) ? tE(e, i) : (t) => eV.isElement(t) && eK.isBlock(e, t));
                            var o = eK.pathRef(e, n);
                            for (var l of Array.from(eK.nodes(e, { at: i, match: a, mode: r, voids: s }), (t) => {
                                var [, n] = t;
                                return eK.pathRef(e, n);
                            })) {
                                var u = l.unref(),
                                    c = o.current;
                                0 !== u.length && e.apply({ type: "move_node", path: u, newPath: c }),
                                    o.current &&
                                        e1.isSibling(c, u) &&
                                        e1.isAfter(c, u) &&
                                        (o.current = e1.next(o.current));
                            }
                            o.unref();
                        }
                    });
                },
                removeNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    eK.withoutNormalizing(e, () => {
                        var { hanging: n = !1, voids: i = !1, mode: r = "lowest" } = t,
                            { at: s = e.selection, match: a } = t;
                        if (s)
                            for (var o of (null == a &&
                                (a = e1.isPath(s) ? tE(e, s) : (t) => eV.isElement(t) && eK.isBlock(e, t)),
                            !n && e9.isRange(s) && (s = eK.unhangRange(e, s, { voids: i })),
                            Array.from(eK.nodes(e, { at: s, match: a, mode: r, voids: i }), (t) => {
                                var [, n] = t;
                                return eK.pathRef(e, n);
                            }))) {
                                var l = o.unref();
                                if (l) {
                                    var [u] = eK.node(e, l);
                                    e.apply({ type: "remove_node", path: l, node: u });
                                }
                            }
                    });
                },
                setNodes(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    eK.withoutNormalizing(e, () => {
                        var { match: i, at: r = e.selection, compare: s, merge: a } = n,
                            { hanging: o = !1, mode: l = "lowest", split: u = !1, voids: c = !1 } = n;
                        if (r) {
                            if (
                                (null == i &&
                                    (i = e1.isPath(r) ? tE(e, r) : (t) => eV.isElement(t) && eK.isBlock(e, t)),
                                !o && e9.isRange(r) && (r = eK.unhangRange(e, r, { voids: c })),
                                u && e9.isRange(r))
                            ) {
                                if (e9.isCollapsed(r) && eK.leaf(e, r.anchor)[0].text.length > 0) return;
                                var d = eK.rangeRef(e, r, { affinity: "inward" }),
                                    [_, f] = e9.edges(r),
                                    h = "lowest" === l ? "lowest" : "highest",
                                    p = eK.isEnd(e, f, f.path);
                                tT.splitNodes(e, { at: f, match: i, mode: h, voids: c, always: !p });
                                var E = eK.isStart(e, _, _.path);
                                tT.splitNodes(e, { at: _, match: i, mode: h, voids: c, always: !E }),
                                    (r = d.unref()),
                                    null == n.at && tT.select(e, r);
                            }
                            for (var [m, g] of (s || (s = (e, t) => e !== t),
                            eK.nodes(e, { at: r, match: i, mode: l, voids: c }))) {
                                var A = {},
                                    I = {};
                                if (0 !== g.length) {
                                    var T = !1;
                                    for (var S in t)
                                        "children" !== S &&
                                            "text" !== S &&
                                            s(t[S], m[S]) &&
                                            ((T = !0),
                                            m.hasOwnProperty(S) && (A[S] = m[S]),
                                            a ? null != t[S] && (I[S] = a(m[S], t[S])) : null != t[S] && (I[S] = t[S]));
                                    T && e.apply({ type: "set_node", path: g, properties: A, newProperties: I });
                                }
                            }
                        }
                    });
                },
                splitNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    eK.withoutNormalizing(e, () => {
                        var n,
                            i,
                            { mode: r = "lowest", voids: s = !1 } = t,
                            { match: a, at: o = e.selection, height: l = 0, always: u = !1 } = t;
                        if (
                            (null == a && (a = (t) => eV.isElement(t) && eK.isBlock(e, t)),
                            e9.isRange(o) &&
                                (o = ((e, t) => {
                                    if (e9.isCollapsed(t)) return t.anchor;
                                    var [, n] = e9.edges(t),
                                        i = eK.pointRef(e, n);
                                    return tT.delete(e, { at: t }), i.unref();
                                })(e, o)),
                            e1.isPath(o))
                        ) {
                            var c = o,
                                d = eK.point(e, c),
                                [_] = eK.parent(e, c);
                            (a = (e) => e === _), (l = d.path.length - c.length + 1), (o = d), (u = !0);
                        }
                        if (o) {
                            var f = eK.pointRef(e, o, { affinity: "backward" });
                            try {
                                var [h] = eK.nodes(e, { at: o, match: a, mode: r, voids: s });
                                if (!h) return;
                                var p = eK.void(e, { at: o, mode: "highest" });
                                if (!s && p) {
                                    var [E, m] = p;
                                    if (eV.isElement(E) && e.isInline(E)) {
                                        var g = eK.after(e, m);
                                        if (!g) {
                                            var A = e1.next(m);
                                            tT.insertNodes(e, { text: "" }, { at: A, voids: s }), (g = eK.point(e, A));
                                        }
                                        (o = g), (u = !0);
                                    }
                                    (l = o.path.length - m.length + 1), (u = !0);
                                }
                                n = eK.pointRef(e, o);
                                var I = o.path.length - l,
                                    [, T] = h,
                                    S = o.path.slice(0, I),
                                    N = 0 === l ? o.offset : o.path[I] + 0;
                                for (var [y, C] of eK.levels(e, { at: S, reverse: !0, voids: s })) {
                                    var v = !1;
                                    if (
                                        C.length < T.length ||
                                        0 === C.length ||
                                        (!s && eV.isElement(y) && eK.isVoid(e, y))
                                    )
                                        break;
                                    var O = f.current,
                                        R = eK.isEnd(e, O, C);
                                    if (u || !f || !eK.isEdge(e, O, C)) {
                                        v = !0;
                                        var b = eX.extractProps(y);
                                        e.apply({ type: "split_node", path: C, position: N, properties: b });
                                    }
                                    N = C[C.length - 1] + (v || R ? 1 : 0);
                                }
                                if (null == t.at) {
                                    var D = n.current || eK.end(e, []);
                                    tT.select(e, D);
                                }
                            } finally {
                                f.unref(), null == (i = n) || i.unref();
                            }
                        }
                    });
                },
                unsetNodes(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    Array.isArray(t) || (t = [t]);
                    var i = {};
                    for (var r of t) i[r] = null;
                    tT.setNodes(e, i, n);
                },
                unwrapNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    eK.withoutNormalizing(e, () => {
                        var { mode: n = "lowest", split: i = !1, voids: r = !1 } = t,
                            { at: s = e.selection, match: a } = t;
                        if (s) {
                            null == a && (a = e1.isPath(s) ? tE(e, s) : (t) => eV.isElement(t) && eK.isBlock(e, t)),
                                e1.isPath(s) && (s = eK.range(e, s));
                            var o = e9.isRange(s) ? eK.rangeRef(e, s) : null;
                            for (var l of Array.from(eK.nodes(e, { at: s, match: a, mode: n, voids: r }), (t) => {
                                var [, n] = t;
                                return eK.pathRef(e, n);
                            }).reverse())
                                !(function (t) {
                                    var n = t.unref(),
                                        [s] = eK.node(e, n),
                                        a = eK.range(e, n);
                                    i && o && (a = e9.intersection(o.current, a)),
                                        tT.liftNodes(e, {
                                            at: a,
                                            match: (e) => eV.isAncestor(s) && s.children.includes(e),
                                            voids: r,
                                        });
                                })(l);
                            o && o.unref();
                        }
                    });
                },
                wrapNodes(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    eK.withoutNormalizing(e, () => {
                        var { mode: i = "lowest", split: r = !1, voids: s = !1 } = n,
                            { match: a, at: o = e.selection } = n;
                        if (o) {
                            if (
                                (null == a &&
                                    (a = e1.isPath(o)
                                        ? tE(e, o)
                                        : e.isInline(t)
                                          ? (t) => (eV.isElement(t) && eK.isInline(e, t)) || tl.isText(t)
                                          : (t) => eV.isElement(t) && eK.isBlock(e, t)),
                                r && e9.isRange(o))
                            ) {
                                var [l, u] = e9.edges(o),
                                    c = eK.rangeRef(e, o, { affinity: "inward" });
                                tT.splitNodes(e, { at: u, match: a, voids: s }),
                                    tT.splitNodes(e, { at: l, match: a, voids: s }),
                                    (o = c.unref()),
                                    null == n.at && tT.select(e, o);
                            }
                            for (var [, d] of Array.from(
                                eK.nodes(e, {
                                    at: o,
                                    match: e.isInline(t)
                                        ? (t) => eV.isElement(t) && eK.isBlock(e, t)
                                        : (e) => eK.isEditor(e),
                                    mode: "lowest",
                                    voids: s,
                                }),
                            )) {
                                var _ = e9.isRange(o) ? e9.intersection(o, eK.range(e, d)) : o;
                                if (_) {
                                    var f = Array.from(eK.nodes(e, { at: _, match: a, mode: i, voids: s }));
                                    if (
                                        f.length > 0 &&
                                        "continue" ===
                                            (function () {
                                                var [n] = f,
                                                    i = f[f.length - 1],
                                                    [, r] = n,
                                                    [, a] = i;
                                                if (0 === r.length && 0 === a.length) return "continue";
                                                var o = e1.equals(r, a) ? e1.parent(r) : e1.common(r, a),
                                                    l = eK.range(e, r, a),
                                                    [u] = eK.node(e, o),
                                                    c = o.length + 1,
                                                    d = e1.next(a.slice(0, c)),
                                                    _ = th(th({}, t), {}, { children: [] });
                                                tT.insertNodes(e, _, { at: d, voids: s }),
                                                    tT.moveNodes(e, {
                                                        at: l,
                                                        match: (e) => eV.isAncestor(u) && u.children.includes(e),
                                                        to: d.concat(0),
                                                        voids: s,
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
                    { selection: i } = e;
                if (i) {
                    if ("anchor" === n) tT.select(e, i.anchor);
                    else if ("focus" === n) tT.select(e, i.focus);
                    else if ("start" === n) {
                        var [r] = e9.edges(i);
                        tT.select(e, r);
                    } else if ("end" === n) {
                        var [, s] = e9.edges(i);
                        tT.select(e, s);
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
                    { distance: i = 1, unit: r = "character", reverse: s = !1 } = t,
                    { edge: a = null } = t;
                if (n) {
                    "start" === a && (a = e9.isBackward(n) ? "focus" : "anchor"),
                        "end" === a && (a = e9.isBackward(n) ? "anchor" : "focus");
                    var { anchor: o, focus: l } = n,
                        u = { distance: i, unit: r },
                        c = {};
                    if (null == a || "anchor" === a) {
                        var d = s ? eK.before(e, o, u) : eK.after(e, o, u);
                        d && (c.anchor = d);
                    }
                    if (null == a || "focus" === a) {
                        var _ = s ? eK.before(e, l, u) : eK.after(e, l, u);
                        _ && (c.focus = _);
                    }
                    tT.setSelection(e, c);
                }
            },
            select(e, t) {
                var { selection: n } = e;
                if (((t = eK.range(e, t)), n)) return void tT.setSelection(e, t);
                if (!e9.isRange(t))
                    throw Error(
                        "When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(
                            tn.stringify(t),
                        ),
                    );
                e.apply({ type: "set_selection", properties: n, newProperties: t });
            },
            setPoint(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    { selection: i } = e,
                    { edge: r = "both" } = n;
                if (i) {
                    "start" === r && (r = e9.isBackward(i) ? "focus" : "anchor"),
                        "end" === r && (r = e9.isBackward(i) ? "anchor" : "focus");
                    var { anchor: s, focus: a } = i,
                        o = "anchor" === r ? s : a;
                    tT.setSelection(e, { ["anchor" === r ? "anchor" : "focus"]: tg(tg({}, o), t) });
                }
            },
            setSelection(e, t) {
                var { selection: n } = e,
                    i = {},
                    r = {};
                if (n) {
                    for (var s in t)
                        (("anchor" !== s || null == t.anchor || e4.equals(t.anchor, n.anchor)) &&
                            ("focus" !== s || null == t.focus || e4.equals(t.focus, n.focus)) &&
                            ("anchor" === s || "focus" === s || t[s] === n[s])) ||
                            ((i[s] = n[s]), (r[s] = t[s]));
                    Object.keys(i).length > 0 && e.apply({ type: "set_selection", properties: i, newProperties: r });
                }
            },
        },
    ),
    {
        delete(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            eK.withoutNormalizing(e, () => {
                var n,
                    { reverse: i = !1, unit: r = "character", distance: s = 1, voids: a = !1 } = t,
                    { at: o = e.selection, hanging: l = !1 } = t;
                if (o) {
                    var u = !1;
                    if ((e9.isRange(o) && e9.isCollapsed(o) && ((u = !0), (o = o.anchor)), e4.isPoint(o))) {
                        var c = eK.void(e, { at: o, mode: "highest" });
                        if (!a && c) {
                            var [, d] = c;
                            o = d;
                        } else {
                            var _ = { unit: r, distance: s },
                                f = i ? eK.before(e, o, _) || eK.start(e, []) : eK.after(e, o, _) || eK.end(e, []);
                            (o = { anchor: o, focus: f }), (l = !0);
                        }
                    }
                    if (e1.isPath(o)) return void tT.removeNodes(e, { at: o, voids: a });
                    if (!e9.isCollapsed(o)) {
                        if (!l) {
                            var [, h] = e9.edges(o),
                                p = eK.end(e, []);
                            e4.equals(h, p) || (o = eK.unhangRange(e, o, { voids: a }));
                        }
                        var [E, m] = e9.edges(o),
                            g = eK.above(e, { match: (t) => eV.isElement(t) && eK.isBlock(e, t), at: E, voids: a }),
                            A = eK.above(e, { match: (t) => eV.isElement(t) && eK.isBlock(e, t), at: m, voids: a }),
                            I = g && A && !e1.equals(g[1], A[1]),
                            T = e1.equals(E.path, m.path),
                            S = a ? null : eK.void(e, { at: E, mode: "highest" }),
                            N = a ? null : eK.void(e, { at: m, mode: "highest" });
                        if (S) {
                            var y = eK.before(e, E);
                            y && g && e1.isAncestor(g[1], y.path) && (E = y);
                        }
                        if (N) {
                            var C = eK.after(e, m);
                            C && A && e1.isAncestor(A[1], C.path) && (m = C);
                        }
                        var v = [];
                        for (var O of eK.nodes(e, { at: o, voids: a })) {
                            var [R, b] = O;
                            (!n || 0 !== e1.compare(b, n)) &&
                                ((!a && eV.isElement(R) && eK.isVoid(e, R)) ||
                                    (!e1.isCommon(b, E.path) && !e1.isCommon(b, m.path))) &&
                                (v.push(O), (n = b));
                        }
                        var D = Array.from(v, (t) => {
                                var [, n] = t;
                                return eK.pathRef(e, n);
                            }),
                            L = eK.pointRef(e, E),
                            w = eK.pointRef(e, m),
                            M = "";
                        if (!T && !S) {
                            var P = L.current,
                                [x] = eK.leaf(e, P),
                                { path: U } = P,
                                { offset: k } = E,
                                G = x.text.slice(k);
                            G.length > 0 && (e.apply({ type: "remove_text", path: U, offset: k, text: G }), (M = G));
                        }
                        if (
                            (D.reverse()
                                .map((e) => e.unref())
                                .filter((e) => null !== e)
                                .forEach((t) => tT.removeNodes(e, { at: t, voids: a })),
                            !N)
                        ) {
                            var F = w.current,
                                [V] = eK.leaf(e, F),
                                { path: B } = F,
                                H = T ? E.offset : 0,
                                j = V.text.slice(H, m.offset);
                            j.length > 0 && (e.apply({ type: "remove_text", path: B, offset: H, text: j }), (M = j));
                        }
                        !T && I && w.current && L.current && tT.mergeNodes(e, { at: w.current, hanging: !0, voids: a }),
                            u &&
                                i &&
                                "character" === r &&
                                M.length > 1 &&
                                M.match(/[\u0E00-\u0E7F]+/) &&
                                tT.insertText(e, M.slice(0, M.length - s));
                        var Y = L.unref(),
                            W = w.unref(),
                            K = i ? Y || W : W || Y;
                        null == t.at && K && tT.select(e, K);
                    }
                }
            });
        },
        insertFragment(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            eK.withoutNormalizing(e, () => {
                var i,
                    { hanging: r = !1, voids: s = !1 } = n,
                    { at: a = e.selection } = n;
                if (t.length) {
                    if (a) {
                        if (e9.isRange(a))
                            if ((r || (a = eK.unhangRange(e, a, { voids: s })), e9.isCollapsed(a))) a = a.anchor;
                            else {
                                var [, o] = e9.edges(a);
                                if (!s && eK.void(e, { at: o })) return;
                                var l = eK.pointRef(e, o);
                                tT.delete(e, { at: a }), (a = l.unref());
                            }
                        else e1.isPath(a) && (a = eK.start(e, a));
                        if (!(!s && eK.void(e, { at: a }))) {
                            var u = eK.above(e, {
                                at: a,
                                match: (t) => eV.isElement(t) && eK.isInline(e, t),
                                mode: "highest",
                                voids: s,
                            });
                            if (u) {
                                var [, c] = u;
                                eK.isEnd(e, a, c) ? (a = eK.after(e, c)) : eK.isStart(e, a, c) && (a = eK.before(e, c));
                            }
                            var [, d] = eK.above(e, {
                                    match: (t) => eV.isElement(t) && eK.isBlock(e, t),
                                    at: a,
                                    voids: s,
                                }),
                                _ = eK.isStart(e, a, d),
                                f = eK.isEnd(e, a, d),
                                h = _ && f,
                                p = !_ || (_ && f),
                                E = !f,
                                [, m] = eX.first({ children: t }, []),
                                [, g] = eX.last({ children: t }, []),
                                A = [],
                                I = (t) => {
                                    var [n, i] = t;
                                    return (
                                        0 !== i.length &&
                                        (!!h ||
                                            !(
                                                (p &&
                                                    e1.isAncestor(i, m) &&
                                                    eV.isElement(n) &&
                                                    !e.isVoid(n) &&
                                                    !e.isInline(n)) ||
                                                (E &&
                                                    e1.isAncestor(i, g) &&
                                                    eV.isElement(n) &&
                                                    !e.isVoid(n) &&
                                                    !e.isInline(n))
                                            ))
                                    );
                                };
                            for (var T of eX.nodes({ children: t }, { pass: I })) I(T) && A.push(T);
                            var S = [],
                                N = [],
                                y = [],
                                C = !0,
                                v = !1;
                            for (var [O] of A)
                                eV.isElement(O) && !e.isInline(O)
                                    ? ((C = !1), (v = !0), N.push(O))
                                    : C
                                      ? S.push(O)
                                      : y.push(O);
                            var [R] = eK.nodes(e, {
                                    at: a,
                                    match: (t) => tl.isText(t) || eK.isInline(e, t),
                                    mode: "highest",
                                    voids: s,
                                }),
                                [, b] = R,
                                D = eK.isStart(e, a, b),
                                L = eK.isEnd(e, a, b),
                                w = eK.pathRef(e, f && !y.length ? e1.next(d) : d),
                                M = eK.pathRef(e, L ? e1.next(b) : b);
                            tT.splitNodes(e, {
                                at: a,
                                match: (t) =>
                                    v ? eV.isElement(t) && eK.isBlock(e, t) : tl.isText(t) || eK.isInline(e, t),
                                mode: v ? "lowest" : "highest",
                                always: v && (!_ || S.length > 0) && (!f || y.length > 0),
                                voids: s,
                            });
                            var P = eK.pathRef(e, !D || (D && L) ? e1.next(b) : b);
                            if (
                                (tT.insertNodes(e, S, {
                                    at: P.current,
                                    match: (t) => tl.isText(t) || eK.isInline(e, t),
                                    mode: "highest",
                                    voids: s,
                                }),
                                h && !S.length && N.length && !y.length && tT.delete(e, { at: d, voids: s }),
                                tT.insertNodes(e, N, {
                                    at: w.current,
                                    match: (t) => eV.isElement(t) && eK.isBlock(e, t),
                                    mode: "lowest",
                                    voids: s,
                                }),
                                tT.insertNodes(e, y, {
                                    at: M.current,
                                    match: (t) => tl.isText(t) || eK.isInline(e, t),
                                    mode: "highest",
                                    voids: s,
                                }),
                                !n.at &&
                                    (y.length > 0 && M.current
                                        ? (i = e1.previous(M.current))
                                        : N.length > 0 && w.current
                                          ? (i = e1.previous(w.current))
                                          : P.current && (i = e1.previous(P.current)),
                                    i))
                            ) {
                                var x = eK.end(e, i);
                                tT.select(e, x);
                            }
                            P.unref(), w.unref(), M.unref();
                        }
                    }
                }
            });
        },
        insertText(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            eK.withoutNormalizing(e, () => {
                var { voids: i = !1 } = n,
                    { at: r = e.selection } = n;
                if (r) {
                    if ((e1.isPath(r) && (r = eK.range(e, r)), e9.isRange(r)))
                        if (e9.isCollapsed(r)) r = r.anchor;
                        else {
                            var s = e9.end(r);
                            if (!i && eK.void(e, { at: s })) return;
                            var a = e9.start(r),
                                o = eK.pointRef(e, a),
                                l = eK.pointRef(e, s);
                            tT.delete(e, { at: r, voids: i });
                            var u = o.unref(),
                                c = l.unref();
                            (r = u || c), tT.setSelection(e, { anchor: r, focus: r });
                        }
                    if (!(!i && eK.void(e, { at: r }))) {
                        var { path: d, offset: _ } = r;
                        t.length > 0 && e.apply({ type: "insert_text", path: d, offset: _, text: t });
                    }
                }
            });
        },
    },
);
