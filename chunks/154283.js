"use strict";
function n(e) {
    return "[object Object]" === Object.prototype.toString.call(e);
}
function a(e) {
    var t, r;
    return (
        !1 !== n(e) &&
        (void 0 === (t = e.constructor) || (!1 !== n((r = t.prototype)) && !1 !== r.hasOwnProperty("isPrototypeOf")))
    );
}
function s(e) {
    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
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
function i(e) {
    return !!e && !!e[z];
}
function o(e) {
    var t;
    return (
        !!e &&
        ((function (e) {
            if (!e || "object" != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            if (null === t) return !0;
            var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
            return r === Object || ("function" == typeof r && Function.toString.call(r) === W);
        })(e) ||
            Array.isArray(e) ||
            !!e[G] ||
            !!(null == (t = e.constructor) ? void 0 : t[G]) ||
            f(e) ||
            p(e))
    );
}
function l(e, t, r) {
    void 0 === r && (r = !1),
        0 === u(e)
            ? (r ? Object.keys : q)(e).forEach(function (n) {
                  (r && "symbol" == typeof n) || t(n, e[n], e);
              })
            : e.forEach(function (r, n) {
                  return t(n, r, e);
              });
}
function u(e) {
    var t = e[z];
    return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : f(e) ? 2 : 3 * !!p(e);
}
function c(e, t) {
    return 2 === u(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function d(e, t, r) {
    var n = u(e);
    2 === n ? e.set(t, r) : 3 === n ? e.add(r) : (e[t] = r);
}
function f(e) {
    return U && e instanceof Map;
}
function p(e) {
    return j && e instanceof Set;
}
function h(e) {
    return e.o || e.t;
}
function m(e) {
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    var t = $(e);
    delete t[z];
    for (var r = q(t), n = 0; n < r.length; n++) {
        var a = r[n],
            s = t[a];
        !1 === s.writable && ((s.writable = !0), (s.configurable = !0)),
            (s.get || s.set) && (t[a] = { configurable: !0, writable: !0, enumerable: s.enumerable, value: e[a] });
    }
    return Object.create(Object.getPrototypeOf(e), t);
}
function _(e, t) {
    return (
        void 0 === t && (t = !1),
        v(e) ||
            i(e) ||
            !o(e) ||
            (u(e) > 1 && (e.set = e.add = e.clear = e.delete = g),
            Object.freeze(e),
            t &&
                l(
                    e,
                    function (e, t) {
                        return _(t, !0);
                    },
                    !0,
                )),
        e
    );
}
function g() {
    s(2);
}
function v(e) {
    return null == e || "object" != typeof e || Object.isFrozen(e);
}
function b(e) {
    var t = K[e];
    return t || s(18, e), t;
}
r.d(t, {
    KE: () => eW,
    bP: () => eX,
    bR: () => e6,
    Q6: () => e7,
    ie: () => ef,
    gB: () => tE,
    Hg: () => eU,
    wA: () => e1,
    EY: () => tl,
    h6: () => tr,
});
function y(e, t) {
    t && (b("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function E(e) {
    S(e), e.p.forEach(x), (e.p = null);
}
function S(e) {
    e === B && (B = e.l);
}
function T(e) {
    return (B = { p: [], l: B, h: e, m: !0, _: 0 });
}
function x(e) {
    var t = e[z];
    0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
}
function w(e, t) {
    t._ = t.p.length;
    var r = t.p[0],
        n = void 0 !== e && e !== r;
    return (
        t.h.O || b("ES5").S(t, e, n),
        n
            ? (r[z].P && (E(t), s(4)),
              o(e) && ((e = C(t, e)), t.l || O(t, e)),
              t.u && b("Patches").M(r[z].t, e, t.u, t.s))
            : (e = C(t, r, [])),
        E(t),
        t.u && t.v(t.u, t.s),
        e !== H ? e : void 0
    );
}
function C(e, t, r) {
    if (v(t)) return t;
    var n = t[z];
    if (!n)
        return (
            l(
                t,
                function (a, s) {
                    return D(e, n, t, a, s, r);
                },
                !0,
            ),
            t
        );
    if (n.A !== e) return t;
    if (!n.P) return O(e, n.t, !0), n.t;
    if (!n.I) {
        (n.I = !0), n.A._--;
        var a = 4 === n.i || 5 === n.i ? (n.o = m(n.k)) : n.o,
            s = a,
            i = !1;
        3 === n.i && ((s = new Set(a)), a.clear(), (i = !0)),
            l(s, function (t, s) {
                return D(e, n, a, t, s, r, i);
            }),
            O(e, a, !1),
            r && e.u && b("Patches").N(n, r, e.u, e.s);
    }
    return n.o;
}
function D(e, t, r, n, a, s, l) {
    if (i(a)) {
        var u = C(e, a, s && t && 3 !== t.i && !c(t.R, n) ? s.concat(n) : void 0);
        if ((d(r, n, u), !i(u))) return;
        e.m = !1;
    } else l && r.add(a);
    if (o(a) && !v(a)) {
        if (!e.h.D && e._ < 1) return;
        C(e, a), (t && t.A.l) || O(e, a);
    }
}
function O(e, t, r) {
    void 0 === r && (r = !1), !e.l && e.h.D && e.m && _(t, r);
}
function A(e, t) {
    var r = e[z];
    return (r ? h(r) : e)[t];
}
function M(e, t) {
    if (t in e)
        for (var r = Object.getPrototypeOf(e); r; ) {
            var n = Object.getOwnPropertyDescriptor(r, t);
            if (n) return n;
            r = Object.getPrototypeOf(r);
        }
}
function R(e) {
    e.P || ((e.P = !0), e.l && R(e.l));
}
function k(e) {
    e.o || (e.o = m(e.t));
}
function N(e, t, r) {
    var n,
        a,
        s,
        i,
        o,
        l,
        u,
        c = f(t)
            ? b("MapSet").F(t, r)
            : p(t)
              ? b("MapSet").T(t, r)
              : e.O
                ? ((s = a =
                      {
                          i: +!!(n = Array.isArray(t)),
                          A: r ? r.A : B,
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
                  (i = Q),
                  n && ((s = [a]), (i = X)),
                  (l = (o = Proxy.revocable(s, i)).revoke),
                  (a.k = u = o.proxy),
                  (a.j = l),
                  u)
                : b("ES5").J(t, r);
    return (r ? r.A : B).p.push(c), c;
}
function L(e, t) {
    switch (t) {
        case 2:
            return new Map(e);
        case 3:
            return Array.from(e);
    }
    return m(e);
}
var I,
    P,
    F,
    B,
    Y = "u" > typeof Symbol && "symbol" == typeof Symbol("x"),
    U = "u" > typeof Map,
    j = "u" > typeof Set,
    V = "u" > typeof Proxy && void 0 !== Proxy.revocable && "u" > typeof Reflect,
    H = Y ? Symbol.for("immer-nothing") : (((F = {})["immer-nothing"] = !0), F),
    G = Y ? Symbol.for("immer-draftable") : "__$immer_draftable",
    z = Y ? Symbol.for("immer-state") : "__$immer_state",
    W = "" + Object.prototype.constructor,
    q =
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
                q(e).forEach(function (r) {
                    t[r] = Object.getOwnPropertyDescriptor(e, r);
                }),
                t
            );
        },
    K = {},
    Q = {
        get: function (e, t) {
            if (t === z) return e;
            var r,
                n,
                a = h(e);
            if (!c(a, t))
                return (n = M(a, t)) ? ("value" in n ? n.value : null == (r = n.get) ? void 0 : r.call(e.k)) : void 0;
            var s = a[t];
            return e.I || !o(s) ? s : s === A(e.t, t) ? (k(e), (e.o[t] = N(e.A.h, s, e))) : s;
        },
        has: function (e, t) {
            return t in h(e);
        },
        ownKeys: function (e) {
            return Reflect.ownKeys(h(e));
        },
        set: function (e, t, r) {
            var n = M(h(e), t);
            if (null == n ? void 0 : n.set) return n.set.call(e.k, r), !0;
            if (!e.P) {
                var a = A(h(e), t),
                    s = null == a ? void 0 : a[z];
                if (s && s.t === r) return (e.o[t] = r), (e.R[t] = !1), !0;
                if ((r === a ? 0 !== r || 1 / r == 1 / a : r != r && a != a) && (void 0 !== r || c(e.t, t))) return !0;
                k(e), R(e);
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
                void 0 !== A(e.t, t) || t in e.t ? ((e.R[t] = !1), k(e), R(e)) : delete e.R[t], e.o && delete e.o[t], !0
            );
        },
        getOwnPropertyDescriptor: function (e, t) {
            var r = h(e),
                n = Reflect.getOwnPropertyDescriptor(r, t);
            return n
                ? { writable: !0, configurable: 1 !== e.i || "length" !== t, enumerable: n.enumerable, value: r[t] }
                : n;
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
l(Q, function (e, t) {
    X[e] = function () {
        return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
    };
}),
    (X.deleteProperty = function (e, t) {
        return X.set.call(this, e, t, void 0);
    }),
    (X.set = function (e, t, r) {
        return Q.set.call(this, e[0], t, r, e[0]);
    });
var Z = new ((function () {
        function e(e) {
            var t = this;
            (this.O = V),
                (this.D = !0),
                (this.produce = function (e, r, n) {
                    if ("function" == typeof e && "function" != typeof r) {
                        var a,
                            i = r;
                        return (
                            (r = e),
                            function (e) {
                                var n = this;
                                void 0 === e && (e = i);
                                for (var a = arguments.length, s = Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
                                    s[o - 1] = arguments[o];
                                return t.produce(e, function (e) {
                                    var t;
                                    return (t = r).call.apply(t, [n, e].concat(s));
                                });
                            }
                        );
                    }
                    if (("function" != typeof r && s(6), void 0 !== n && "function" != typeof n && s(7), o(e))) {
                        var l = T(t),
                            u = N(t, e, void 0),
                            c = !0;
                        try {
                            (a = r(u)), (c = !1);
                        } finally {
                            c ? E(l) : S(l);
                        }
                        return "u" > typeof Promise && a instanceof Promise
                            ? a.then(
                                  function (e) {
                                      return y(l, n), w(e, l);
                                  },
                                  function (e) {
                                      throw (E(l), e);
                                  },
                              )
                            : (y(l, n), w(a, l));
                    }
                    if (!e || "object" != typeof e) {
                        if ((void 0 === (a = r(e)) && (a = e), a === H && (a = void 0), t.D && _(a, !0), n)) {
                            var d = [],
                                f = [];
                            b("Patches").M(e, a, d, f), n(d, f);
                        }
                        return a;
                    }
                    s(21, e);
                }),
                (this.produceWithPatches = function (e, r) {
                    if ("function" == typeof e)
                        return function (r) {
                            for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
                                a[s - 1] = arguments[s];
                            return t.produceWithPatches(r, function (t) {
                                return e.apply(void 0, [t].concat(a));
                            });
                        };
                    var n,
                        a,
                        s = t.produce(e, r, function (e, t) {
                            (n = e), (a = t);
                        });
                    return "u" > typeof Promise && s instanceof Promise
                        ? s.then(function (e) {
                              return [e, n, a];
                          })
                        : [s, n, a];
                }),
                "boolean" == typeof (null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies),
                "boolean" == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze);
        }
        var t = e.prototype;
        return (
            (t.createDraft = function (e) {
                o(e) || s(8),
                    i(e) &&
                        (i((t = e)) || s(22, t),
                        (e = (function e(t) {
                            if (!o(t)) return t;
                            var r,
                                n = t[z],
                                a = u(t);
                            if (n) {
                                if (!n.P && (n.i < 4 || !b("ES5").K(n))) return n.t;
                                (n.I = !0), (r = L(t, a)), (n.I = !1);
                            } else r = L(t, a);
                            return (
                                l(r, function (t, a) {
                                    var s;
                                    (n && ((s = n.t), (2 === u(s) ? s.get(t) : s[t]) === a)) || d(r, t, e(a));
                                }),
                                3 === a ? new Set(r) : r
                            );
                        })(t)));
                var t,
                    r = T(this),
                    n = N(this, e, void 0);
                return (n[z].C = !0), S(r), n;
            }),
            (t.finishDraft = function (e, t) {
                var r = (e && e[z]).A;
                return y(r, t), w(void 0, r);
            }),
            (t.setAutoFreeze = function (e) {
                this.D = e;
            }),
            (t.setUseProxies = function (e) {
                e && !V && s(20), (this.O = e);
            }),
            (t.applyPatches = function (e, t) {
                for (r = t.length - 1; r >= 0; r--) {
                    var r,
                        n = t[r];
                    if (0 === n.path.length && "replace" === n.op) {
                        e = n.value;
                        break;
                    }
                }
                r > -1 && (t = t.slice(r + 1));
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
    J = Z.produce,
    ee =
        (Z.produceWithPatches.bind(Z),
        Z.setAutoFreeze.bind(Z),
        Z.setUseProxies.bind(Z),
        Z.applyPatches.bind(Z),
        Z.createDraft.bind(Z)),
    et = Z.finishDraft.bind(Z);
function er(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var en = new WeakMap(),
    ea = new WeakMap(),
    es = new WeakMap(),
    ei = new WeakMap(),
    eo = new WeakMap(),
    el = new WeakMap(),
    eu = new WeakMap();
function ec(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function ed(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? ec(Object(r), !0).forEach(function (t) {
                  er(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ec(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
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
            for (var r of eW.pathRefs(e)) e2.transform(r, t);
            for (var n of eW.pointRefs(e)) e5.transform(n, t);
            for (var a of eW.rangeRefs(e)) te.transform(a, t);
            var s,
                i,
                o = en.get(e) || [],
                l = ea.get(e) || new Set(),
                u = (e) => {
                    if (e) {
                        var t = e.join(",");
                        i.has(t) || (i.add(t), s.push(e));
                    }
                };
            if (e1.operationCanTransformPath(t)) for (var c of ((s = []), (i = new Set()), o)) u(e1.transform(c, t));
            else (s = o), (i = l);
            for (var d of e.getDirtyPaths(t)) u(d);
            en.set(e, s),
                ea.set(e, i),
                tE.transform(e, t),
                e.operations.push(t),
                eW.normalize(e, { operation: t }),
                "set_selection" === t.type && (e.marks = null),
                es.get(e) ||
                    (es.set(e, !0),
                    Promise.resolve().then(() => {
                        es.set(e, !1), e.onChange({ operation: t }), (e.operations = []);
                    }));
        },
        addMark: (t, r) => {
            var { selection: n, markableVoid: a } = e;
            if (n) {
                var s = (t, r) => {
                        if (!tl.isText(t)) return !1;
                        var [n, a] = eW.parent(e, r);
                        return !e.isVoid(n) || e.markableVoid(n);
                    },
                    i = e7.isExpanded(n),
                    o = !1;
                if (!i) {
                    var [l, u] = eW.node(e, n);
                    if (l && s(l, u)) {
                        var [c] = eW.parent(e, u);
                        o = c && e.markableVoid(c);
                    }
                }
                if (i || o) tE.setNodes(e, { [t]: r }, { match: s, split: !0, voids: !0 });
                else {
                    var d = ed(ed({}, eW.marks(e) || {}), {}, { [t]: r });
                    (e.marks = d), es.get(e) || e.onChange();
                }
            }
        },
        deleteBackward: (t) => {
            var { selection: r } = e;
            r && e7.isCollapsed(r) && tE.delete(e, { unit: t, reverse: !0 });
        },
        deleteForward: (t) => {
            var { selection: r } = e;
            r && e7.isCollapsed(r) && tE.delete(e, { unit: t });
        },
        deleteFragment: (t) => {
            var { selection: r } = e;
            r && e7.isExpanded(r) && tE.delete(e, { reverse: "backward" === t });
        },
        getFragment: () => {
            var { selection: t } = e;
            return t ? eX.fragment(e, t) : [];
        },
        insertBreak: () => {
            tE.splitNodes(e, { always: !0 });
        },
        insertSoftBreak: () => {
            tE.splitNodes(e, { always: !0 });
        },
        insertFragment: (t) => {
            tE.insertFragment(e, t);
        },
        insertNode: (t) => {
            tE.insertNodes(e, t);
        },
        insertText: (t) => {
            var { selection: r, marks: n } = e;
            if (r) {
                if (n) {
                    var a = ed({ text: t }, n);
                    tE.insertNodes(e, a);
                } else tE.insertText(e, t);
                e.marks = null;
            }
        },
        normalizeNode: (t) => {
            var [r, n] = t;
            if (!tl.isText(r)) {
                if (eU.isElement(r) && 0 === r.children.length)
                    return void tE.insertNodes(e, { text: "" }, { at: n.concat(0), voids: !0 });
                for (
                    var a =
                            !eW.isEditor(r) &&
                            eU.isElement(r) &&
                            (e.isInline(r) ||
                                0 === r.children.length ||
                                tl.isText(r.children[0]) ||
                                e.isInline(r.children[0])),
                        s = 0,
                        i = 0;
                    i < r.children.length;
                    i++, s++
                ) {
                    var o = eX.get(e, n);
                    if (!tl.isText(o)) {
                        var l = r.children[i],
                            u = o.children[s - 1],
                            c = i === r.children.length - 1;
                        if ((tl.isText(l) || (eU.isElement(l) && e.isInline(l))) !== a)
                            tE.removeNodes(e, { at: n.concat(s), voids: !0 }), s--;
                        else if (eU.isElement(l)) {
                            if (e.isInline(l))
                                if (null != u && tl.isText(u)) {
                                    if (c) {
                                        var d = { text: "" };
                                        tE.insertNodes(e, d, { at: n.concat(s + 1), voids: !0 }), s++;
                                    }
                                } else {
                                    var f = { text: "" };
                                    tE.insertNodes(e, f, { at: n.concat(s), voids: !0 }), s++;
                                }
                        } else
                            null != u &&
                                tl.isText(u) &&
                                (tl.equals(l, u, { loose: !0 })
                                    ? (tE.mergeNodes(e, { at: n.concat(s), voids: !0 }), s--)
                                    : "" === u.text
                                      ? (tE.removeNodes(e, { at: n.concat(s - 1), voids: !0 }), s--)
                                      : "" === l.text && (tE.removeNodes(e, { at: n.concat(s), voids: !0 }), s--));
                    }
                }
            }
        },
        removeMark: (t) => {
            var { selection: r } = e;
            if (r) {
                var n = (t, r) => {
                        if (!tl.isText(t)) return !1;
                        var [n, a] = eW.parent(e, r);
                        return !e.isVoid(n) || e.markableVoid(n);
                    },
                    a = e7.isExpanded(r),
                    s = !1;
                if (!a) {
                    var [i, o] = eW.node(e, r);
                    if (i && n(i, o)) {
                        var [l] = eW.parent(e, o);
                        s = l && e.markableVoid(l);
                    }
                }
                if (a || s) tE.unsetNodes(e, t, { match: n, split: !0, voids: !0 });
                else {
                    var u = ed({}, eW.marks(e) || {});
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
                    var { node: r, path: n } = e;
                    return [
                        ...e1.levels(n),
                        ...(tl.isText(r)
                            ? []
                            : Array.from(eX.nodes(r), (e) => {
                                  var [, t] = e;
                                  return n.concat(t);
                              })),
                    ];
                case "merge_node":
                    var { path: a } = e;
                    return [...e1.ancestors(a), e1.previous(a)];
                case "move_node":
                    var { path: s, newPath: i } = e;
                    if (e1.equals(s, i)) return [];
                    var o = [],
                        l = [];
                    for (var u of e1.ancestors(s)) {
                        var c = e1.transform(u, e);
                        o.push(c);
                    }
                    for (var d of e1.ancestors(i)) {
                        var f = e1.transform(d, e);
                        l.push(f);
                    }
                    var p = l[l.length - 1],
                        h = i[i.length - 1];
                    return [...o, ...l, p.concat(h)];
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
            var { iteration: t, initialDirtyPathsLength: r } = e,
                n = 42 * r;
            if (t > n)
                throw Error(
                    "Could not completely normalize the editor after ".concat(
                        n,
                        " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.",
                    ),
                );
            return !0;
        },
    };
    return e;
};
function ep(e, t) {
    if (null == e) return {};
    var r,
        n,
        a = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                a = {},
                s = Object.keys(e);
            for (n = 0; n < s.length; n++) (r = s[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (n = 0; n < s.length; n++)
            (r = s[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    }
    return a;
}
var eh = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = !t,
            n = t ? eE(e) : e,
            a = P.None,
            s = P.None,
            i = 0,
            o = null;
        for (var l of n) {
            var u = l.codePointAt(0);
            if (!u) break;
            var c = eN(l, u);
            if (
                (([a, s] = r ? [s, c] : [c, a]),
                (a & P.ZWJ) != 0 &&
                    (s & P.ExtPict) != 0 &&
                    !(r ? eP(e.substring(0, i)) : eP(e.substring(0, e.length - i))))
            )
                break;
            if (
                ((a & P.RI) != 0 &&
                    (s & P.RI) != 0 &&
                    !(o = null !== o ? !o : !!r || eB(e.substring(0, e.length - i)))) ||
                (a !== P.None &&
                    s !== P.None &&
                    (function (e, t) {
                        return -1 === eL.findIndex((r) => (e & r[0]) != 0 && (t & r[1]) != 0);
                    })(a, s))
            )
                break;
            i += l.length;
        }
        return i || 1;
    },
    em = /\s/,
    e_ =
        /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
    eg = /['\u2018\u2019]/,
    ev = function (e) {
        for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = 0, n = !1; e.length > 0; ) {
            var a = eh(e, t),
                [s, i] = eb(e, a, t);
            if (ey(s, i, t)) (n = !0), (r += a);
            else if (n) break;
            else r += a;
            e = i;
        }
        return r;
    },
    eb = (e, t, r) => {
        if (r) {
            var n = e.length - t;
            return [e.slice(n, e.length), e.slice(0, n)];
        }
        return [e.slice(0, t), e.slice(t)];
    },
    ey = function e(t, r) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (em.test(t)) return !1;
        if (eg.test(t)) {
            var a = eh(r, n),
                [s, i] = eb(r, a, n);
            if (e(s, i, n)) return !0;
        }
        return !e_.test(t);
    },
    eE = function* (e) {
        for (var t = e.length - 1, r = 0; r < e.length; r++) {
            var n = e.charAt(t - r);
            if (eT(n.charCodeAt(0))) {
                var a = e.charAt(t - r - 1);
                if (eS(a.charCodeAt(0))) {
                    yield a + n, r++;
                    continue;
                }
            }
            yield n;
        }
    },
    eS = (e) => e >= 55296 && e <= 56319,
    eT = (e) => e >= 56320 && e <= 57343;
((I = P || (P = {}))[(I.None = 0)] = "None"),
    (I[(I.Extend = 1)] = "Extend"),
    (I[(I.ZWJ = 2)] = "ZWJ"),
    (I[(I.RI = 4)] = "RI"),
    (I[(I.Prepend = 8)] = "Prepend"),
    (I[(I.SpacingMark = 16)] = "SpacingMark"),
    (I[(I.L = 32)] = "L"),
    (I[(I.V = 64)] = "V"),
    (I[(I.T = 128)] = "T"),
    (I[(I.LV = 256)] = "LV"),
    (I[(I.LVT = 512)] = "LVT"),
    (I[(I.ExtPict = 1024)] = "ExtPict"),
    (I[(I.Any = 2048)] = "Any");
var ex =
        /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
    ew =
        /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
    eC =
        /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
    eD = /^[\u1100-\u115F\uA960-\uA97C]$/,
    eO = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
    eA = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
    eM =
        /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
    eR =
        /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
    ek =
        /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
    eN = (e, t) => {
        var r = P.Any;
        return (
            -1 !== e.search(ex) && (r |= P.Extend),
            8205 === t && (r |= P.ZWJ),
            t >= 127462 && t <= 127487 && (r |= P.RI),
            -1 !== e.search(ew) && (r |= P.Prepend),
            -1 !== e.search(eC) && (r |= P.SpacingMark),
            -1 !== e.search(eD) && (r |= P.L),
            -1 !== e.search(eO) && (r |= P.V),
            -1 !== e.search(eA) && (r |= P.T),
            -1 !== e.search(eM) && (r |= P.LV),
            -1 !== e.search(eR) && (r |= P.LVT),
            -1 !== e.search(ek) && (r |= P.ExtPict),
            r
        );
    },
    eL = [
        [P.L, P.L | P.V | P.LV | P.LVT],
        [P.LV | P.V, P.V | P.T],
        [P.LVT | P.T, P.T],
        [P.Any, P.Extend | P.ZWJ],
        [P.Any, P.SpacingMark],
        [P.Prepend, P.Any],
        [P.ZWJ, P.ExtPict],
        [P.RI, P.RI],
    ],
    eI =
        /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
    eP = (e) => -1 !== e.search(eI),
    eF = /(?:\uD83C[\uDDE6-\uDDFF])+$/g,
    eB = (e) => {
        var t = e.match(eF);
        return null !== t && (t[0].length / 2) % 2 == 1;
    },
    eY = (e) => a(e) && eX.isNodeList(e.children) && !eW.isEditor(e),
    eU = {
        isAncestor: (e) => a(e) && eX.isNodeList(e.children),
        isElement: eY,
        isElementList: (e) => Array.isArray(e) && e.every((e) => eU.isElement(e)),
        isElementProps: (e) => void 0 !== e.children,
        isElementType: function (e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "type";
            return eY(e) && e[r] === t;
        },
        matches(e, t) {
            for (var r in t) if ("children" !== r && e[r] !== t[r]) return !1;
            return !0;
        },
    },
    ej = ["text"],
    eV = ["text"];
function eH(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function eG(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eH(Object(r), !0).forEach(function (t) {
                  er(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eH(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var ez = new WeakMap(),
    eW = {
        above(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { voids: r = !1, mode: n = "lowest", at: a = e.selection, match: s } = t;
            if (a) {
                var i = eW.path(e, a);
                for (var [o, l] of eW.levels(e, { at: i, voids: r, match: s, reverse: "lowest" === n }))
                    if (!tl.isText(o)) {
                        if (e7.isRange(a)) {
                            if (e1.isAncestor(l, a.anchor.path) && e1.isAncestor(l, a.focus.path)) return [o, l];
                        } else if (!e1.equals(i, l)) return [o, l];
                    }
            }
        },
        addMark(e, t, r) {
            e.addMark(t, r);
        },
        after(e, t) {
            var r,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = eW.point(e, t, { edge: "end" }),
                s = eW.end(e, []),
                { distance: i = 1 } = n,
                o = 0;
            for (var l of eW.positions(e, eG(eG({}, n), {}, { at: { anchor: a, focus: s } }))) {
                if (o > i) break;
                0 !== o && (r = l), o++;
            }
            return r;
        },
        before(e, t) {
            var r,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = eW.start(e, []),
                s = eW.point(e, t, { edge: "start" }),
                { distance: i = 1 } = n,
                o = 0;
            for (var l of eW.positions(e, eG(eG({}, n), {}, { at: { anchor: a, focus: s }, reverse: !0 }))) {
                if (o > i) break;
                0 !== o && (r = l), o++;
            }
            return r;
        },
        deleteBackward(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { unit: r = "character" } = t;
            e.deleteBackward(r);
        },
        deleteForward(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { unit: r = "character" } = t;
            e.deleteForward(r);
        },
        deleteFragment(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { direction: r = "forward" } = t;
            e.deleteFragment(r);
        },
        edges: (e, t) => [eW.start(e, t), eW.end(e, t)],
        end: (e, t) => eW.point(e, t, { edge: "end" }),
        first(e, t) {
            var r = eW.path(e, t, { edge: "start" });
            return eW.node(e, r);
        },
        fragment(e, t) {
            var r = eW.range(e, t);
            return eX.fragment(e, r);
        },
        hasBlocks: (e, t) => t.children.some((t) => eU.isElement(t) && eW.isBlock(e, t)),
        hasInlines: (e, t) => t.children.some((t) => tl.isText(t) || eW.isInline(e, t)),
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
            var t = ez.get(e);
            if (void 0 !== t) return t;
            if (!a(e)) return !1;
            var r =
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
                (null === e.marks || a(e.marks)) &&
                (null === e.selection || e7.isRange(e.selection)) &&
                eX.isNodeList(e.children) &&
                e0.isOperationList(e.operations);
            return ez.set(e, r), r;
        },
        isEnd(e, t, r) {
            var n = eW.end(e, r);
            return e6.equals(t, n);
        },
        isEdge: (e, t, r) => eW.isStart(e, t, r) || eW.isEnd(e, t, r),
        isEmpty(e, t) {
            var { children: r } = t,
                [n] = r;
            return 0 === r.length || (1 === r.length && tl.isText(n) && "" === n.text && !e.isVoid(t));
        },
        isInline: (e, t) => e.isInline(t),
        isNormalizing(e) {
            var t = ei.get(e);
            return void 0 === t || t;
        },
        isStart(e, t, r) {
            if (0 !== t.offset) return !1;
            var n = eW.start(e, r);
            return e6.equals(t, n);
        },
        isVoid: (e, t) => e.isVoid(t),
        last(e, t) {
            var r = eW.path(e, t, { edge: "end" });
            return eW.node(e, r);
        },
        leaf(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                n = eW.path(e, t, r);
            return [eX.leaf(e, n), n];
        },
        *levels(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: r = e.selection, reverse: n = !1, voids: a = !1 } = t,
                { match: s } = t;
            if ((null == s && (s = () => !0), r)) {
                var i = [],
                    o = eW.path(e, r);
                for (var [l, u] of eX.levels(e, o))
                    if (s(l, u) && (i.push([l, u]), !a && eU.isElement(l) && eW.isVoid(e, l))) break;
                n && i.reverse(), yield* i;
            }
        },
        marks(e) {
            var { marks: t, selection: r } = e;
            if (!r) return null;
            if (t) return t;
            if (e7.isExpanded(r)) {
                var [n] = eW.nodes(e, { match: tl.isText });
                if (!n) return {};
                var [a] = n;
                return ep(a, ej);
            }
            var { anchor: s } = r,
                { path: i } = s,
                [o] = eW.leaf(e, i);
            if (0 === s.offset) {
                var l = eW.previous(e, { at: i, match: tl.isText });
                if (!eW.above(e, { match: (t) => eU.isElement(t) && eW.isVoid(e, t) && e.markableVoid(t) })) {
                    var u = eW.above(e, { match: (t) => eU.isElement(t) && eW.isBlock(e, t) });
                    if (l && u) {
                        var [c, d] = l,
                            [, f] = u;
                        e1.isAncestor(f, d) && (o = c);
                    }
                }
            }
            return ep(o, eV);
        },
        next(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { mode: r = "lowest", voids: n = !1 } = t,
                { match: a, at: s = e.selection } = t;
            if (s) {
                var i = eW.after(e, s, { voids: n });
                if (i) {
                    var [, o] = eW.last(e, []),
                        l = [i.path, o];
                    if (e1.isPath(s) && 0 === s.length) throw Error("Cannot get the next node from the root node!");
                    if (null == a)
                        if (e1.isPath(s)) {
                            var [u] = eW.parent(e, s);
                            a = (e) => u.children.includes(e);
                        } else a = () => !0;
                    var [c] = eW.nodes(e, { at: l, match: a, mode: r, voids: n });
                    return c;
                }
            }
        },
        node(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                n = eW.path(e, t, r);
            return [eX.get(e, n), n];
        },
        *nodes(e) {
            var t,
                r,
                n,
                a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: s = e.selection, mode: i = "all", universal: o = !1, reverse: l = !1, voids: u = !1 } = a,
                { match: c } = a;
            if ((c || (c = () => !0), s)) {
                if (eq.isSpan(s)) (t = s[0]), (r = s[1]);
                else {
                    var d = eW.path(e, s, { edge: "start" }),
                        f = eW.path(e, s, { edge: "end" });
                    (t = l ? f : d), (r = l ? d : f);
                }
                var p = eX.nodes(e, {
                        reverse: l,
                        from: t,
                        to: r,
                        pass: (t) => {
                            var [r] = t;
                            return !u && eU.isElement(r) && eW.isVoid(e, r);
                        },
                    }),
                    h = [];
                for (var [m, _] of p) {
                    var g = n && 0 === e1.compare(_, n[1]);
                    if ("highest" !== i || !g) {
                        if (!c(m, _))
                            if (o && !g && tl.isText(m)) return;
                            else continue;
                        if ("lowest" === i && g) {
                            n = [m, _];
                            continue;
                        }
                        var v = "lowest" === i ? n : [m, _];
                        v && (o ? h.push(v) : yield v), (n = [m, _]);
                    }
                }
                "lowest" === i && n && (o ? h.push(n) : yield n), o && (yield* h);
            }
        },
        normalize(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { force: r = !1, operation: n } = t,
                a = (e) => en.get(e) || [],
                s = (e) => {
                    var t = a(e).pop(),
                        r = t.join(",");
                    return (ea.get(e) || new Set()).delete(r), t;
                };
            if (eW.isNormalizing(e)) {
                if (r) {
                    var i = Array.from(eX.nodes(e), (e) => {
                            var [, t] = e;
                            return t;
                        }),
                        o = new Set(i.map((e) => e.join(",")));
                    en.set(e, i), ea.set(e, o);
                }
                0 !== a(e).length &&
                    eW.withoutNormalizing(e, () => {
                        for (var t of a(e))
                            if (eX.has(e, t)) {
                                var r = eW.node(e, t),
                                    [i, o] = r;
                                eU.isElement(i) && 0 === i.children.length && e.normalizeNode(r, { operation: n });
                            }
                        for (var l = a(e), u = l.length, c = 0; 0 !== l.length; ) {
                            if (
                                !e.shouldNormalize({
                                    dirtyPaths: l,
                                    iteration: c,
                                    initialDirtyPathsLength: u,
                                    operation: n,
                                })
                            )
                                return;
                            var d = s(e);
                            if (eX.has(e, d)) {
                                var f = eW.node(e, d);
                                e.normalizeNode(f, { operation: n });
                            }
                            c++, (l = a(e));
                        }
                    });
            }
        },
        parent(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                n = eW.path(e, t, r),
                a = e1.parent(n);
            return eW.node(e, a);
        },
        path(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { depth: n, edge: a } = r;
            if (e1.isPath(t)) {
                if ("start" === a) {
                    var [, s] = eX.first(e, t);
                    t = s;
                } else if ("end" === a) {
                    var [, i] = eX.last(e, t);
                    t = i;
                }
            }
            return (
                e7.isRange(t) &&
                    (t =
                        "start" === a ? e7.start(t) : "end" === a ? e7.end(t) : e1.common(t.anchor.path, t.focus.path)),
                e6.isPoint(t) && (t = t.path),
                null != n && (t = t.slice(0, n)),
                t
            );
        },
        hasPath: (e, t) => eX.has(e, t),
        pathRef(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: n = "forward" } = r,
                a = {
                    current: t,
                    affinity: n,
                    unref() {
                        var { current: t } = a;
                        return eW.pathRefs(e).delete(a), (a.current = null), t;
                    },
                };
            return eW.pathRefs(e).add(a), a;
        },
        pathRefs(e) {
            var t = eo.get(e);
            return t || ((t = new Set()), eo.set(e, t)), t;
        },
        point(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { edge: n = "start" } = r;
            if (e1.isPath(t)) {
                if ("end" === n) {
                    var a,
                        [, s] = eX.last(e, t);
                    a = s;
                } else {
                    var [, i] = eX.first(e, t);
                    a = i;
                }
                var o = eX.get(e, a);
                if (!tl.isText(o))
                    throw Error(
                        "Cannot get the "
                            .concat(n, " point in the node at path [")
                            .concat(t, "] because it has no ")
                            .concat(n, " text node."),
                    );
                return { path: a, offset: "end" === n ? o.text.length : 0 };
            }
            if (e7.isRange(t)) {
                var [l, u] = e7.edges(t);
                return "start" === n ? l : u;
            }
            return t;
        },
        pointRef(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: n = "forward" } = r,
                a = {
                    current: t,
                    affinity: n,
                    unref() {
                        var { current: t } = a;
                        return eW.pointRefs(e).delete(a), (a.current = null), t;
                    },
                };
            return eW.pointRefs(e).add(a), a;
        },
        pointRefs(e) {
            var t = el.get(e);
            return t || ((t = new Set()), el.set(e, t)), t;
        },
        *positions(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { at: r = e.selection, unit: n = "offset", reverse: a = !1, voids: s = !1 } = t;
            if (r) {
                var i = eW.range(e, r),
                    [o, l] = e7.edges(i),
                    u = a ? l : o,
                    c = !1,
                    d = "",
                    f = 0,
                    p = 0,
                    h = 0;
                for (var [m, _] of eW.nodes(e, { at: r, reverse: a, voids: s })) {
                    if (eU.isElement(m)) {
                        if (!s && e.isVoid(m)) {
                            yield eW.start(e, _);
                            continue;
                        }
                        if (e.isInline(m)) continue;
                        if (eW.hasInlines(e, m)) {
                            var g = e1.isAncestor(_, l.path) ? l : eW.end(e, _),
                                v = e1.isAncestor(_, o.path) ? o : eW.start(e, _);
                            (d = eW.string(e, { anchor: v, focus: g }, { voids: s })), (c = !0);
                        }
                    }
                    if (tl.isText(m)) {
                        var b,
                            y,
                            E,
                            S = e1.equals(_, u.path);
                        for (
                            S
                                ? ((p = a ? u.offset : m.text.length - u.offset), (h = u.offset))
                                : ((p = m.text.length), (h = a ? p : 0)),
                                (S || c || "offset" === n) && (yield { path: _, offset: h }, (c = !1));
                            ;
                        ) {
                            if (0 === f) {
                                if ("" === d) break;
                                (b = d),
                                    (y = n),
                                    (E = a),
                                    (d = eb(
                                        d,
                                        (f =
                                            "character" === y
                                                ? eh(b, E)
                                                : "word" === y
                                                  ? ev(b, E)
                                                  : "line" === y || "block" === y
                                                    ? b.length
                                                    : 1),
                                        a,
                                    )[1]);
                            }
                            if (((h = a ? h - f : h + f), (p -= f) < 0)) {
                                f = -p;
                                break;
                            }
                            (f = 0), yield { path: _, offset: h };
                        }
                    }
                }
            }
        },
        previous(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { mode: r = "lowest", voids: n = !1 } = t,
                { match: a, at: s = e.selection } = t;
            if (s) {
                var i = eW.before(e, s, { voids: n });
                if (i) {
                    var [, o] = eW.first(e, []),
                        l = [i.path, o];
                    if (e1.isPath(s) && 0 === s.length) throw Error("Cannot get the previous node from the root node!");
                    if (null == a)
                        if (e1.isPath(s)) {
                            var [u] = eW.parent(e, s);
                            a = (e) => u.children.includes(e);
                        } else a = () => !0;
                    var [c] = eW.nodes(e, { reverse: !0, at: l, match: a, mode: r, voids: n });
                    return c;
                }
            }
        },
        range: (e, t, r) => (e7.isRange(t) && !r ? t : { anchor: eW.start(e, t), focus: eW.end(e, r || t) }),
        rangeRef(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { affinity: n = "forward" } = r,
                a = {
                    current: t,
                    affinity: n,
                    unref() {
                        var { current: t } = a;
                        return eW.rangeRefs(e).delete(a), (a.current = null), t;
                    },
                };
            return eW.rangeRefs(e).add(a), a;
        },
        rangeRefs(e) {
            var t = eu.get(e);
            return t || ((t = new Set()), eu.set(e, t)), t;
        },
        removeMark(e, t) {
            e.removeMark(t);
        },
        setNormalizing(e, t) {
            ei.set(e, t);
        },
        start: (e, t) => eW.point(e, t, { edge: "start" }),
        string(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { voids: n = !1 } = r,
                a = eW.range(e, t),
                [s, i] = e7.edges(a),
                o = "";
            for (var [l, u] of eW.nodes(e, { at: a, match: tl.isText, voids: n })) {
                var c = l.text;
                e1.equals(u, i.path) && (c = c.slice(0, i.offset)),
                    e1.equals(u, s.path) && (c = c.slice(s.offset)),
                    (o += c);
            }
            return o;
        },
        unhangRange(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { voids: n = !1 } = r,
                [a, s] = e7.edges(t);
            if (0 !== a.offset || 0 !== s.offset || e7.isCollapsed(t) || e1.hasPrevious(s.path)) return t;
            var i = eW.above(e, { at: s, match: (t) => eU.isElement(t) && eW.isBlock(e, t), voids: n }),
                o = i ? i[1] : [],
                l = { anchor: eW.start(e, a), focus: s },
                u = !0;
            for (var [c, d] of eW.nodes(e, { at: l, match: tl.isText, reverse: !0, voids: n })) {
                if (u) {
                    u = !1;
                    continue;
                }
                if ("" !== c.text || e1.isBefore(d, o)) {
                    s = { path: d, offset: c.text.length };
                    break;
                }
            }
            return { anchor: a, focus: s };
        },
        void(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return eW.above(e, eG(eG({}, t), {}, { match: (t) => eU.isElement(t) && eW.isVoid(e, t) }));
        },
        withoutNormalizing(e, t) {
            var r = eW.isNormalizing(e);
            eW.setNormalizing(e, !1);
            try {
                t();
            } finally {
                eW.setNormalizing(e, r);
            }
            eW.normalize(e);
        },
    },
    eq = { isSpan: (e) => Array.isArray(e) && 2 === e.length && e.every(e1.isPath) },
    e$ = ["children"],
    eK = ["text"],
    eQ = new WeakMap(),
    eX = {
        ancestor(e, t) {
            var r = eX.get(e, t);
            if (tl.isText(r))
                throw Error(
                    "Cannot get the ancestor node at path ["
                        .concat(t, "] because it refers to a text node instead: ")
                        .concat(tr.stringify(r)),
                );
            return r;
        },
        *ancestors(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            for (var n of e1.ancestors(t, r)) {
                var a = [eX.ancestor(e, n), n];
                yield a;
            }
        },
        child(e, t) {
            if (tl.isText(e)) throw Error("Cannot get the child of a text node: ".concat(tr.stringify(e)));
            var r = e.children[t];
            if (null == r) throw Error("Cannot get child at index `".concat(t, "` in node: ").concat(tr.stringify(e)));
            return r;
        },
        *children(e, t) {
            for (
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    { reverse: n = !1 } = r,
                    a = eX.ancestor(e, t),
                    { children: s } = a,
                    i = n ? s.length - 1 : 0;
                n ? i >= 0 : i < s.length;
            ) {
                var o = eX.child(a, i),
                    l = t.concat(i);
                yield [o, l], (i = n ? i - 1 : i + 1);
            }
        },
        common(e, t, r) {
            var n = e1.common(t, r);
            return [eX.get(e, n), n];
        },
        descendant(e, t) {
            var r = eX.get(e, t);
            if (eW.isEditor(r))
                throw Error(
                    "Cannot get the descendant node at path ["
                        .concat(t, "] because it refers to the root editor node instead: ")
                        .concat(tr.stringify(r)),
                );
            return r;
        },
        *descendants(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [r, n] of eX.nodes(e, t)) 0 !== n.length && (yield [r, n]);
        },
        *elements(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [r, n] of eX.nodes(e, t)) eU.isElement(r) && (yield [r, n]);
        },
        extractProps(e) {
            if (eU.isAncestor(e)) {
                var t = ep(e, e$);
                return t;
            }
            var t = ep(e, eK);
            return t;
        },
        first(e, t) {
            for (var r = t.slice(), n = eX.get(e, r); n; )
                if (tl.isText(n) || 0 === n.children.length) break;
                else (n = n.children[0]), r.push(0);
            return [n, r];
        },
        fragment(e, t) {
            if (tl.isText(e))
                throw Error("Cannot get a fragment starting from a root text node: ".concat(tr.stringify(e)));
            return J({ children: e.children }, (e) => {
                var [r, n] = e7.edges(t);
                for (var [, a] of eX.nodes(e, {
                    reverse: !0,
                    pass: (e) => {
                        var [, r] = e;
                        return !e7.includes(t, r);
                    },
                })) {
                    if (!e7.includes(t, a)) {
                        var s = eX.parent(e, a),
                            i = a[a.length - 1];
                        s.children.splice(i, 1);
                    }
                    if (e1.equals(a, n.path)) {
                        var o = eX.leaf(e, a);
                        o.text = o.text.slice(0, n.offset);
                    }
                    if (e1.equals(a, r.path)) {
                        var l = eX.leaf(e, a);
                        l.text = l.text.slice(r.offset);
                    }
                }
                eW.isEditor(e) && (e.selection = null);
            }).children;
        },
        get(e, t) {
            for (var r = e, n = 0; n < t.length; n++) {
                var a = t[n];
                if (tl.isText(r) || !r.children[a])
                    throw Error("Cannot find a descendant at path [".concat(t, "] in node: ").concat(tr.stringify(e)));
                r = r.children[a];
            }
            return r;
        },
        has(e, t) {
            for (var r = e, n = 0; n < t.length; n++) {
                var a = t[n];
                if (tl.isText(r) || !r.children[a]) return !1;
                r = r.children[a];
            }
            return !0;
        },
        isNode: (e) => tl.isText(e) || eU.isElement(e) || eW.isEditor(e),
        isNodeList(e) {
            if (!Array.isArray(e)) return !1;
            var t = eQ.get(e);
            if (void 0 !== t) return t;
            var r = e.every((e) => eX.isNode(e));
            return eQ.set(e, r), r;
        },
        last(e, t) {
            for (var r = t.slice(), n = eX.get(e, r); n; )
                if (tl.isText(n) || 0 === n.children.length) break;
                else {
                    var a = n.children.length - 1;
                    (n = n.children[a]), r.push(a);
                }
            return [n, r];
        },
        leaf(e, t) {
            var r = eX.get(e, t);
            if (!tl.isText(r))
                throw Error(
                    "Cannot get the leaf node at path ["
                        .concat(t, "] because it refers to a non-leaf node: ")
                        .concat(tr.stringify(r)),
                );
            return r;
        },
        *levels(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            for (var n of e1.levels(t, r)) {
                var a = eX.get(e, n);
                yield [a, n];
            }
        },
        matches: (e, t) =>
            (eU.isElement(e) && eU.isElementProps(t) && eU.matches(e, t)) ||
            (tl.isText(e) && tl.isTextProps(t) && tl.matches(e, t)),
        *nodes(e) {
            for (
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { pass: r, reverse: n = !1 } = t,
                    { from: a = [], to: s } = t,
                    i = new Set(),
                    o = [],
                    l = e;
                !(s && (n ? e1.isBefore(o, s) : e1.isAfter(o, s)));
            ) {
                if (
                    (i.has(l) || (yield [l, o]),
                    !i.has(l) && !tl.isText(l) && 0 !== l.children.length && (null == r || !1 === r([l, o])))
                ) {
                    i.add(l);
                    var u = n ? l.children.length - 1 : 0;
                    e1.isAncestor(o, a) && (u = a[o.length]), (o = o.concat(u)), (l = eX.get(e, o));
                    continue;
                }
                if (0 === o.length) break;
                if (!n) {
                    var c = e1.next(o);
                    if (eX.has(e, c)) {
                        (o = c), (l = eX.get(e, o));
                        continue;
                    }
                }
                if (n && 0 !== o[o.length - 1]) {
                    (o = e1.previous(o)), (l = eX.get(e, o));
                    continue;
                }
                (o = e1.parent(o)), (l = eX.get(e, o)), i.add(l);
            }
        },
        parent(e, t) {
            var r = e1.parent(t),
                n = eX.get(e, r);
            if (tl.isText(n))
                throw Error("Cannot get the parent of path [".concat(t, "] because it does not exist in the root."));
            return n;
        },
        string: (e) => (tl.isText(e) ? e.text : e.children.map(eX.string).join("")),
        *texts(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            for (var [r, n] of eX.nodes(e, t)) tl.isText(r) && (yield [r, n]);
        },
    };
function eZ(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function eJ(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eZ(Object(r), !0).forEach(function (t) {
                  er(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eZ(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var e0 = {
        isNodeOperation: (e) => e0.isOperation(e) && e.type.endsWith("_node"),
        isOperation(e) {
            if (!a(e)) return !1;
            switch (e.type) {
                case "insert_node":
                case "remove_node":
                    return e1.isPath(e.path) && eX.isNode(e.node);
                case "insert_text":
                case "remove_text":
                    return "number" == typeof e.offset && "string" == typeof e.text && e1.isPath(e.path);
                case "merge_node":
                    return "number" == typeof e.position && e1.isPath(e.path) && a(e.properties);
                case "move_node":
                    return e1.isPath(e.path) && e1.isPath(e.newPath);
                case "set_node":
                    return e1.isPath(e.path) && a(e.properties) && a(e.newProperties);
                case "set_selection":
                    return (
                        (null === e.properties && e7.isRange(e.newProperties)) ||
                        (null === e.newProperties && e7.isRange(e.properties)) ||
                        (a(e.properties) && a(e.newProperties))
                    );
                case "split_node":
                    return e1.isPath(e.path) && "number" == typeof e.position && a(e.properties);
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
                    var { newPath: t, path: r } = e;
                    if (e1.equals(t, r)) return e;
                    if (e1.isSibling(r, t)) return eJ(eJ({}, e), {}, { path: t, newPath: r });
                    var n = e1.transform(r, e),
                        a = e1.transform(e1.next(r), e);
                    return eJ(eJ({}, e), {}, { path: n, newPath: a });
                case "remove_node":
                    return eJ(eJ({}, e), {}, { type: "insert_node" });
                case "remove_text":
                    return eJ(eJ({}, e), {}, { type: "insert_text" });
                case "set_node":
                    var { properties: s, newProperties: i } = e;
                    return eJ(eJ({}, e), {}, { properties: i, newProperties: s });
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
                { reverse: r = !1 } = t,
                n = e1.levels(e, t);
            return r ? n.slice(1) : n.slice(0, -1);
        },
        common(e, t) {
            for (var r = [], n = 0; n < e.length && n < t.length; n++) {
                var a = e[n];
                if (a !== t[n]) break;
                r.push(a);
            }
            return r;
        },
        compare(e, t) {
            for (var r = Math.min(e.length, t.length), n = 0; n < r; n++) {
                if (e[n] < t[n]) return -1;
                if (e[n] > t[n]) return 1;
            }
            return 0;
        },
        endsAfter(e, t) {
            var r = e.length - 1,
                n = e.slice(0, r),
                a = t.slice(0, r),
                s = e[r],
                i = t[r];
            return e1.equals(n, a) && s > i;
        },
        endsAt(e, t) {
            var r = e.length,
                n = e.slice(0, r),
                a = t.slice(0, r);
            return e1.equals(n, a);
        },
        endsBefore(e, t) {
            var r = e.length - 1,
                n = e.slice(0, r),
                a = t.slice(0, r),
                s = e[r],
                i = t[r];
            return e1.equals(n, a) && s < i;
        },
        equals: (e, t) => e.length === t.length && e.every((e, r) => e === t[r]),
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
            var r = e.slice(0, -1),
                n = t.slice(0, -1);
            return e[e.length - 1] !== t[t.length - 1] && e1.equals(r, n);
        },
        levels(e) {
            for (
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { reverse: r = !1 } = t,
                    n = [],
                    a = 0;
                a <= e.length;
                a++
            )
                n.push(e.slice(0, a));
            return r && n.reverse(), n;
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
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!e) return null;
            var n = [...e],
                { affinity: a = "forward" } = r;
            if (0 === e.length) return n;
            switch (t.type) {
                case "insert_node":
                    var { path: s } = t;
                    (e1.equals(s, n) || e1.endsBefore(s, n) || e1.isAncestor(s, n)) && (n[s.length - 1] += 1);
                    break;
                case "remove_node":
                    var { path: i } = t;
                    if (e1.equals(i, n) || e1.isAncestor(i, n)) return null;
                    e1.endsBefore(i, n) && (n[i.length - 1] -= 1);
                    break;
                case "merge_node":
                    var { path: o, position: l } = t;
                    e1.equals(o, n) || e1.endsBefore(o, n)
                        ? (n[o.length - 1] -= 1)
                        : e1.isAncestor(o, n) && ((n[o.length - 1] -= 1), (n[o.length] += l));
                    break;
                case "split_node":
                    var { path: u, position: c } = t;
                    if (e1.equals(u, n)) {
                        if ("forward" === a) n[n.length - 1] += 1;
                        else if ("backward" !== a) return null;
                    } else
                        e1.endsBefore(u, n)
                            ? (n[u.length - 1] += 1)
                            : e1.isAncestor(u, n) && e[u.length] >= c && ((n[u.length - 1] += 1), (n[u.length] -= c));
                    break;
                case "move_node":
                    var { path: d, newPath: f } = t;
                    if (e1.equals(d, f)) break;
                    if (e1.isAncestor(d, n) || e1.equals(d, n)) {
                        var p = f.slice();
                        return (
                            e1.endsBefore(d, f) && d.length < f.length && (p[d.length - 1] -= 1),
                            p.concat(n.slice(d.length))
                        );
                    }
                    e1.isSibling(d, f) && (e1.isAncestor(f, n) || e1.equals(f, n))
                        ? e1.endsBefore(d, n)
                            ? (n[d.length - 1] -= 1)
                            : (n[d.length - 1] += 1)
                        : e1.endsBefore(f, n) || e1.equals(f, n) || e1.isAncestor(f, n)
                          ? (e1.endsBefore(d, n) && (n[d.length - 1] -= 1), (n[f.length - 1] += 1))
                          : e1.endsBefore(d, n) && (e1.equals(f, n) && (n[f.length - 1] += 1), (n[d.length - 1] -= 1));
            }
            return n;
        },
    },
    e2 = {
        transform(e, t) {
            var { current: r, affinity: n } = e;
            if (null != r) {
                var a = e1.transform(r, t, { affinity: n });
                (e.current = a), null == a && e.unref();
            }
        },
    };
function e3(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function e4(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? e3(Object(r), !0).forEach(function (t) {
                  er(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : e3(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var e6 = {
        compare(e, t) {
            var r = e1.compare(e.path, t.path);
            return 0 === r ? (e.offset < t.offset ? -1 : +(e.offset > t.offset)) : r;
        },
        isAfter: (e, t) => 1 === e6.compare(e, t),
        isBefore: (e, t) => -1 === e6.compare(e, t),
        equals: (e, t) => e.offset === t.offset && e1.equals(e.path, t.path),
        isPoint: (e) => a(e) && "number" == typeof e.offset && e1.isPath(e.path),
        transform(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return J(e, (e) => {
                if (null === e) return null;
                var { affinity: n = "forward" } = r,
                    { path: a, offset: s } = e;
                switch (t.type) {
                    case "insert_node":
                    case "move_node":
                        e.path = e1.transform(a, t, r);
                        break;
                    case "insert_text":
                        e1.equals(t.path, a) &&
                            (t.offset < s || (t.offset === s && "forward" === n)) &&
                            (e.offset += t.text.length);
                        break;
                    case "merge_node":
                        e1.equals(t.path, a) && (e.offset += t.position), (e.path = e1.transform(a, t, r));
                        break;
                    case "remove_text":
                        e1.equals(t.path, a) && t.offset <= s && (e.offset -= Math.min(s - t.offset, t.text.length));
                        break;
                    case "remove_node":
                        if (e1.equals(t.path, a) || e1.isAncestor(t.path, a)) return null;
                        e.path = e1.transform(a, t, r);
                        break;
                    case "split_node":
                        if (e1.equals(t.path, a))
                            if (t.position === s && null == n) return null;
                            else
                                (t.position < s || (t.position === s && "forward" === n)) &&
                                    ((e.offset -= t.position),
                                    (e.path = e1.transform(a, t, e4(e4({}, r), {}, { affinity: "forward" }))));
                        else e.path = e1.transform(a, t, r);
                }
            });
        },
    },
    e5 = {
        transform(e, t) {
            var { current: r, affinity: n } = e;
            if (null != r) {
                var a = e6.transform(r, t, { affinity: n });
                (e.current = a), null == a && e.unref();
            }
        },
    },
    e8 = ["anchor", "focus"];
function e9(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
var e7 = {
        edges(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { reverse: r = !1 } = t,
                { anchor: n, focus: a } = e;
            return e7.isBackward(e) === r ? [n, a] : [a, n];
        },
        end(e) {
            var [, t] = e7.edges(e);
            return t;
        },
        equals: (e, t) => e6.equals(e.anchor, t.anchor) && e6.equals(e.focus, t.focus),
        includes(e, t) {
            if (e7.isRange(t)) {
                if (e7.includes(e, t.anchor) || e7.includes(e, t.focus)) return !0;
                var [r, n] = e7.edges(e),
                    [a, s] = e7.edges(t);
                return e6.isBefore(r, a) && e6.isAfter(n, s);
            }
            var [i, o] = e7.edges(e),
                l = !1,
                u = !1;
            return (
                e6.isPoint(t)
                    ? ((l = e6.compare(t, i) >= 0), (u = 0 >= e6.compare(t, o)))
                    : ((l = e1.compare(t, i.path) >= 0), (u = 0 >= e1.compare(t, o.path))),
                l && u
            );
        },
        intersection(e, t) {
            var r = ep(e, e8),
                [n, a] = e7.edges(e),
                [s, i] = e7.edges(t),
                o = e6.isBefore(n, s) ? s : n,
                l = e6.isBefore(a, i) ? a : i;
            return e6.isBefore(l, o)
                ? null
                : (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var r = null != arguments[t] ? arguments[t] : {};
                          t % 2
                              ? e9(Object(r), !0).forEach(function (t) {
                                    er(e, t, r[t]);
                                })
                              : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                                : e9(Object(r)).forEach(function (t) {
                                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                                  });
                      }
                      return e;
                  })({ anchor: o, focus: l }, r);
        },
        isBackward(e) {
            var { anchor: t, focus: r } = e;
            return e6.isAfter(t, r);
        },
        isCollapsed(e) {
            var { anchor: t, focus: r } = e;
            return e6.equals(t, r);
        },
        isExpanded: (e) => !e7.isCollapsed(e),
        isForward: (e) => !e7.isBackward(e),
        isRange: (e) => a(e) && e6.isPoint(e.anchor) && e6.isPoint(e.focus),
        *points(e) {
            yield [e.anchor, "anchor"], yield [e.focus, "focus"];
        },
        start(e) {
            var [t] = e7.edges(e);
            return t;
        },
        transform(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return J(e, (e) => {
                if (null === e) return null;
                var n,
                    a,
                    { affinity: s = "inward" } = r;
                if ("inward" === s) {
                    var i = e7.isCollapsed(e);
                    e7.isForward(e)
                        ? ((n = "forward"), (a = i ? n : "backward"))
                        : ((n = "backward"), (a = i ? n : "forward"));
                } else
                    "outward" === s
                        ? e7.isForward(e)
                            ? ((n = "backward"), (a = "forward"))
                            : ((n = "forward"), (a = "backward"))
                        : ((n = s), (a = s));
                var o = e6.transform(e.anchor, t, { affinity: n }),
                    l = e6.transform(e.focus, t, { affinity: a });
                if (!o || !l) return null;
                (e.anchor = o), (e.focus = l);
            });
        },
    },
    te = {
        transform(e, t) {
            var { current: r, affinity: n } = e;
            if (null != r) {
                var a = e7.transform(r, t, { affinity: n });
                (e.current = a), null == a && e.unref();
            }
        },
    },
    tt = void 0,
    tr = {
        setScrubber(e) {
            tt = e;
        },
        stringify: (e) => JSON.stringify(e, tt),
    },
    tn = (e, t) => {
        for (var r in e) {
            var n = e[r],
                s = t[r];
            if (a(n) && a(s)) {
                if (!tn(n, s)) return !1;
            } else if (Array.isArray(n) && Array.isArray(s)) {
                if (n.length !== s.length) return !1;
                for (var i = 0; i < n.length; i++) if (n[i] !== s[i]) return !1;
            } else if (n !== s) return !1;
        }
        for (var o in t) if (void 0 === e[o] && void 0 !== t[o]) return !1;
        return !0;
    },
    ta = ["text"],
    ts = ["anchor", "focus"];
function ti(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function to(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? ti(Object(r), !0).forEach(function (t) {
                  er(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ti(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var tl = {
    equals(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { loose: n = !1 } = r;
        return tn(n ? ep(e, ta) : e, n ? ep(t, ta) : t);
    },
    isText: (e) => a(e) && "string" == typeof e.text,
    isTextList: (e) => Array.isArray(e) && e.every((e) => tl.isText(e)),
    isTextProps: (e) => void 0 !== e.text,
    matches(e, t) {
        for (var r in t) if ("text" !== r && (!e.hasOwnProperty(r) || e[r] !== t[r])) return !1;
        return !0;
    },
    decorations(e, t) {
        var r = [to({}, e)];
        for (var n of t) {
            var a = ep(n, ts),
                [s, i] = e7.edges(n),
                o = [],
                l = 0,
                u = s.offset,
                c = i.offset;
            for (var d of r) {
                var { length: f } = d.text,
                    p = l;
                if (((l += f), u <= p && l <= c)) {
                    Object.assign(d, a), o.push(d);
                    continue;
                }
                if ((u !== c && (u === l || c === p)) || u > l || c < p || (c === p && 0 !== p)) {
                    o.push(d);
                    continue;
                }
                var h = d,
                    m = void 0,
                    _ = void 0;
                if (c < l) {
                    var g = c - p;
                    (_ = to(to({}, h), {}, { text: h.text.slice(g) })),
                        (h = to(to({}, h), {}, { text: h.text.slice(0, g) }));
                }
                if (u > p) {
                    var v = u - p;
                    (m = to(to({}, h), {}, { text: h.text.slice(0, v) })),
                        (h = to(to({}, h), {}, { text: h.text.slice(v) }));
                }
                Object.assign(h, a), m && o.push(m), o.push(h), _ && o.push(_);
            }
            r = o;
        }
        return r;
    },
};
function tu(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function tc(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tu(Object(r), !0).forEach(function (t) {
                  er(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : tu(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var td = ["text"],
    tf = ["children"];
function tp(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function th(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tp(Object(r), !0).forEach(function (t) {
                  er(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : tp(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var tm = (e, t) =>
        eU.isElement(t)
            ? !!eW.isVoid(e, t) || (1 === t.children.length && tm(e, t.children[0]))
            : !eW.isEditor(t) && !0,
    t_ = (e, t) => {
        var [r] = eW.node(e, t);
        return (e) => e === r;
    };
function tg(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function tv(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tg(Object(r), !0).forEach(function (t) {
                  er(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : tg(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
function tb(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function ty(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tb(Object(r), !0).forEach(function (t) {
                  er(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : tb(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var tE = ty(
    ty(
        ty(
            ty(
                {},
                {
                    transform(e, t) {
                        e.children = ee(e.children);
                        var r = e.selection && ee(e.selection);
                        try {
                            r = ((e, t, r) => {
                                switch (r.type) {
                                    case "insert_node":
                                        var { path: n, node: a } = r,
                                            s = eX.parent(e, n),
                                            i = n[n.length - 1];
                                        if (i > s.children.length)
                                            throw Error(
                                                'Cannot apply an "insert_node" operation at path ['.concat(
                                                    n,
                                                    "] because the destination is past the end of the node.",
                                                ),
                                            );
                                        if ((s.children.splice(i, 0, a), t))
                                            for (var [o, l] of e7.points(t)) t[l] = e6.transform(o, r);
                                        break;
                                    case "insert_text":
                                        var { path: u, offset: c, text: d } = r;
                                        if (0 === d.length) break;
                                        var f = eX.leaf(e, u),
                                            p = f.text.slice(0, c),
                                            h = f.text.slice(c);
                                        if (((f.text = p + d + h), t))
                                            for (var [m, _] of e7.points(t)) t[_] = e6.transform(m, r);
                                        break;
                                    case "merge_node":
                                        var { path: g } = r,
                                            v = eX.get(e, g),
                                            b = e1.previous(g),
                                            y = eX.get(e, b),
                                            E = eX.parent(e, g),
                                            S = g[g.length - 1];
                                        if (tl.isText(v) && tl.isText(y)) y.text += v.text;
                                        else if (tl.isText(v) || tl.isText(y))
                                            throw Error(
                                                'Cannot apply a "merge_node" operation at path ['
                                                    .concat(g, "] to nodes of different interfaces: ")
                                                    .concat(tr.stringify(v), " ")
                                                    .concat(tr.stringify(y)),
                                            );
                                        else y.children.push(...v.children);
                                        if ((E.children.splice(S, 1), t))
                                            for (var [T, x] of e7.points(t)) t[x] = e6.transform(T, r);
                                        break;
                                    case "move_node":
                                        var { path: w, newPath: C } = r;
                                        if (e1.isAncestor(w, C))
                                            throw Error(
                                                "Cannot move a path ["
                                                    .concat(w, "] to new path [")
                                                    .concat(C, "] because the destination is inside itself."),
                                            );
                                        var D = eX.get(e, w),
                                            O = eX.parent(e, w),
                                            A = w[w.length - 1];
                                        O.children.splice(A, 1);
                                        var M = e1.transform(w, r),
                                            R = eX.get(e, e1.parent(M)),
                                            k = M[M.length - 1];
                                        if ((R.children.splice(k, 0, D), t))
                                            for (var [N, L] of e7.points(t)) t[L] = e6.transform(N, r);
                                        break;
                                    case "remove_node":
                                        var { path: I } = r,
                                            P = I[I.length - 1];
                                        if ((eX.parent(e, I).children.splice(P, 1), t))
                                            for (var [F, B] of e7.points(t)) {
                                                var Y = e6.transform(F, r);
                                                if (null != t && null != Y) t[B] = Y;
                                                else {
                                                    var U = void 0,
                                                        j = void 0;
                                                    for (var [V, H] of eX.texts(e))
                                                        if (-1 === e1.compare(H, I)) U = [V, H];
                                                        else {
                                                            j = [V, H];
                                                            break;
                                                        }
                                                    var G = !1;
                                                    U &&
                                                        j &&
                                                        (G = e1.equals(j[1], I)
                                                            ? !e1.hasPrevious(j[1])
                                                            : e1.common(U[1], I).length < e1.common(j[1], I).length),
                                                        U && !G
                                                            ? ((F.path = U[1]), (F.offset = U[0].text.length))
                                                            : j
                                                              ? ((F.path = j[1]), (F.offset = 0))
                                                              : (t = null);
                                                }
                                            }
                                        break;
                                    case "remove_text":
                                        var { path: z, offset: W, text: q } = r;
                                        if (0 === q.length) break;
                                        var $ = eX.leaf(e, z),
                                            K = $.text.slice(0, W),
                                            Q = $.text.slice(W + q.length);
                                        if ((($.text = K + Q), t))
                                            for (var [X, Z] of e7.points(t)) t[Z] = e6.transform(X, r);
                                        break;
                                    case "set_node":
                                        var { path: J, properties: ee, newProperties: et } = r;
                                        if (0 === J.length) throw Error("Cannot set properties on the root node!");
                                        var er = eX.get(e, J);
                                        for (var en in et) {
                                            if ("children" === en || "text" === en)
                                                throw Error('Cannot set the "'.concat(en, '" property of nodes!'));
                                            var ea = et[en];
                                            null == ea ? delete er[en] : (er[en] = ea);
                                        }
                                        for (var es in ee) et.hasOwnProperty(es) || delete er[es];
                                        break;
                                    case "set_selection":
                                        var { newProperties: ei } = r;
                                        if (null == ei) t = ei;
                                        else {
                                            if (null == t) {
                                                if (!e7.isRange(ei))
                                                    throw Error(
                                                        'Cannot apply an incomplete "set_selection" operation properties '.concat(
                                                            tr.stringify(ei),
                                                            " when there is no current selection.",
                                                        ),
                                                    );
                                                t = tc({}, ei);
                                            }
                                            for (var eo in ei) {
                                                var el = ei[eo];
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
                                            { path: ec, position: ed, properties: ef } = r;
                                        if (0 === ec.length)
                                            throw Error(
                                                'Cannot apply a "split_node" operation at path ['.concat(
                                                    ec,
                                                    "] because the root node cannot be split.",
                                                ),
                                            );
                                        var ep = eX.get(e, ec),
                                            eh = eX.parent(e, ec),
                                            em = ec[ec.length - 1];
                                        if (tl.isText(ep)) {
                                            var e_ = ep.text.slice(0, ed),
                                                eg = ep.text.slice(ed);
                                            (ep.text = e_), (eu = tc(tc({}, ef), {}, { text: eg }));
                                        } else {
                                            var ev = ep.children.slice(0, ed),
                                                eb = ep.children.slice(ed);
                                            (ep.children = ev), (eu = tc(tc({}, ef), {}, { children: eb }));
                                        }
                                        if ((eh.children.splice(em + 1, 0, eu), t))
                                            for (var [ey, eE] of e7.points(t)) t[eE] = e6.transform(ey, r);
                                }
                                return t;
                            })(e, r, t);
                        } finally {
                            (e.children = et(e.children)), r ? (e.selection = i(r) ? et(r) : r) : (e.selection = null);
                        }
                    },
                },
            ),
            {
                insertNodes(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    eW.withoutNormalizing(e, () => {
                        var { hanging: n = !1, voids: a = !1, mode: s = "lowest" } = r,
                            { at: i, match: o, select: l } = r;
                        if ((eX.isNode(t) && (t = [t]), 0 !== t.length)) {
                            var [u] = t;
                            if (
                                (i ||
                                    ((i = e.selection ? e.selection : e.children.length > 0 ? eW.end(e, []) : [0]),
                                    (l = !0)),
                                null == l && (l = !1),
                                e7.isRange(i))
                            )
                                if ((n || (i = eW.unhangRange(e, i, { voids: a })), e7.isCollapsed(i))) i = i.anchor;
                                else {
                                    var [, c] = e7.edges(i),
                                        d = eW.pointRef(e, c);
                                    tE.delete(e, { at: i }), (i = d.unref());
                                }
                            if (e6.isPoint(i)) {
                                null == o &&
                                    (o = tl.isText(u)
                                        ? (e) => tl.isText(e)
                                        : e.isInline(u)
                                          ? (t) => tl.isText(t) || eW.isInline(e, t)
                                          : (t) => eU.isElement(t) && eW.isBlock(e, t));
                                var [f] = eW.nodes(e, { at: i.path, match: o, mode: s, voids: a });
                                if (!f) return;
                                var [, p] = f,
                                    h = eW.pathRef(e, p),
                                    m = eW.isEnd(e, i, p);
                                tE.splitNodes(e, { at: i, match: o, mode: s, voids: a });
                                var _ = h.unref();
                                i = m ? e1.next(_) : _;
                            }
                            var g = e1.parent(i),
                                v = i[i.length - 1];
                            if (!(!a && eW.void(e, { at: g }))) {
                                for (var b of t) {
                                    var y = g.concat(v);
                                    v++, e.apply({ type: "insert_node", path: y, node: b }), (i = e1.next(i));
                                }
                                if (((i = e1.previous(i)), l)) {
                                    var E = eW.end(e, i);
                                    E && tE.select(e, E);
                                }
                            }
                        }
                    });
                },
                liftNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    eW.withoutNormalizing(e, () => {
                        var { at: r = e.selection, mode: n = "lowest", voids: a = !1 } = t,
                            { match: s } = t;
                        if (
                            (null == s && (s = e1.isPath(r) ? t_(e, r) : (t) => eU.isElement(t) && eW.isBlock(e, t)), r)
                        )
                            for (var i of Array.from(eW.nodes(e, { at: r, match: s, mode: n, voids: a }), (t) => {
                                var [, r] = t;
                                return eW.pathRef(e, r);
                            })) {
                                var o = i.unref();
                                if (o.length < 2)
                                    throw Error(
                                        "Cannot lift node at a path [".concat(
                                            o,
                                            "] because it has a depth of less than `2`.",
                                        ),
                                    );
                                var [l, u] = eW.node(e, e1.parent(o)),
                                    c = o[o.length - 1],
                                    { length: d } = l.children;
                                if (1 === d) {
                                    var f = e1.next(u);
                                    tE.moveNodes(e, { at: o, to: f, voids: a }), tE.removeNodes(e, { at: u, voids: a });
                                } else if (0 === c) tE.moveNodes(e, { at: o, to: u, voids: a });
                                else if (c === d - 1) {
                                    var p = e1.next(u);
                                    tE.moveNodes(e, { at: o, to: p, voids: a });
                                } else {
                                    var h = e1.next(o),
                                        m = e1.next(u);
                                    tE.splitNodes(e, { at: h, voids: a }), tE.moveNodes(e, { at: o, to: m, voids: a });
                                }
                            }
                    });
                },
                mergeNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    eW.withoutNormalizing(e, () => {
                        var r,
                            n,
                            { match: a, at: s = e.selection } = t,
                            { hanging: i = !1, voids: o = !1, mode: l = "lowest" } = t;
                        if (s) {
                            if (null == a)
                                if (e1.isPath(s)) {
                                    var [u] = eW.parent(e, s);
                                    a = (e) => u.children.includes(e);
                                } else a = (t) => eU.isElement(t) && eW.isBlock(e, t);
                            if ((!i && e7.isRange(s) && (s = eW.unhangRange(e, s, { voids: o })), e7.isRange(s)))
                                if (e7.isCollapsed(s)) s = s.anchor;
                                else {
                                    var [, c] = e7.edges(s),
                                        d = eW.pointRef(e, c);
                                    tE.delete(e, { at: s }), (s = d.unref()), null == t.at && tE.select(e, s);
                                }
                            var [f] = eW.nodes(e, { at: s, match: a, voids: o, mode: l }),
                                p = eW.previous(e, { at: s, match: a, voids: o, mode: l });
                            if (f && p) {
                                var [h, m] = f,
                                    [_, g] = p;
                                if (0 !== m.length && 0 !== g.length) {
                                    var v = e1.next(g),
                                        b = e1.common(m, g),
                                        y = e1.isSibling(m, g),
                                        E = Array.from(eW.levels(e, { at: m }), (e) => {
                                            var [t] = e;
                                            return t;
                                        })
                                            .slice(b.length)
                                            .slice(0, -1),
                                        S = eW.above(e, {
                                            at: m,
                                            mode: "highest",
                                            match: (t) => E.includes(t) && tm(e, t),
                                        }),
                                        T = S && eW.pathRef(e, S[1]);
                                    if (tl.isText(h) && tl.isText(_)) {
                                        var x = ep(h, td);
                                        (n = _.text.length), (r = x);
                                    } else if (eU.isElement(h) && eU.isElement(_)) {
                                        var x = ep(h, tf);
                                        (n = _.children.length), (r = x);
                                    } else
                                        throw Error(
                                            "Cannot merge the node at path ["
                                                .concat(
                                                    m,
                                                    "] with the previous sibling because it is not the same kind: ",
                                                )
                                                .concat(tr.stringify(h), " ")
                                                .concat(tr.stringify(_)),
                                        );
                                    y || tE.moveNodes(e, { at: m, to: v, voids: o }),
                                        T && tE.removeNodes(e, { at: T.current, voids: o }),
                                        (eU.isElement(_) && eW.isEmpty(e, _)) ||
                                        (tl.isText(_) && "" === _.text && 0 !== g[g.length - 1])
                                            ? tE.removeNodes(e, { at: g, voids: o })
                                            : e.apply({ type: "merge_node", path: v, position: n, properties: r }),
                                        T && T.unref();
                                }
                            }
                        }
                    });
                },
                moveNodes(e, t) {
                    eW.withoutNormalizing(e, () => {
                        var { to: r, at: n = e.selection, mode: a = "lowest", voids: s = !1 } = t,
                            { match: i } = t;
                        if (n) {
                            null == i && (i = e1.isPath(n) ? t_(e, n) : (t) => eU.isElement(t) && eW.isBlock(e, t));
                            var o = eW.pathRef(e, r);
                            for (var l of Array.from(eW.nodes(e, { at: n, match: i, mode: a, voids: s }), (t) => {
                                var [, r] = t;
                                return eW.pathRef(e, r);
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
                    eW.withoutNormalizing(e, () => {
                        var { hanging: r = !1, voids: n = !1, mode: a = "lowest" } = t,
                            { at: s = e.selection, match: i } = t;
                        if (s)
                            for (var o of (null == i &&
                                (i = e1.isPath(s) ? t_(e, s) : (t) => eU.isElement(t) && eW.isBlock(e, t)),
                            !r && e7.isRange(s) && (s = eW.unhangRange(e, s, { voids: n })),
                            Array.from(eW.nodes(e, { at: s, match: i, mode: a, voids: n }), (t) => {
                                var [, r] = t;
                                return eW.pathRef(e, r);
                            }))) {
                                var l = o.unref();
                                if (l) {
                                    var [u] = eW.node(e, l);
                                    e.apply({ type: "remove_node", path: l, node: u });
                                }
                            }
                    });
                },
                setNodes(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    eW.withoutNormalizing(e, () => {
                        var { match: n, at: a = e.selection, compare: s, merge: i } = r,
                            { hanging: o = !1, mode: l = "lowest", split: u = !1, voids: c = !1 } = r;
                        if (a) {
                            if (
                                (null == n &&
                                    (n = e1.isPath(a) ? t_(e, a) : (t) => eU.isElement(t) && eW.isBlock(e, t)),
                                !o && e7.isRange(a) && (a = eW.unhangRange(e, a, { voids: c })),
                                u && e7.isRange(a))
                            ) {
                                if (e7.isCollapsed(a) && eW.leaf(e, a.anchor)[0].text.length > 0) return;
                                var d = eW.rangeRef(e, a, { affinity: "inward" }),
                                    [f, p] = e7.edges(a),
                                    h = "lowest" === l ? "lowest" : "highest",
                                    m = eW.isEnd(e, p, p.path);
                                tE.splitNodes(e, { at: p, match: n, mode: h, voids: c, always: !m });
                                var _ = eW.isStart(e, f, f.path);
                                tE.splitNodes(e, { at: f, match: n, mode: h, voids: c, always: !_ }),
                                    (a = d.unref()),
                                    null == r.at && tE.select(e, a);
                            }
                            for (var [g, v] of (s || (s = (e, t) => e !== t),
                            eW.nodes(e, { at: a, match: n, mode: l, voids: c }))) {
                                var b = {},
                                    y = {};
                                if (0 !== v.length) {
                                    var E = !1;
                                    for (var S in t)
                                        "children" !== S &&
                                            "text" !== S &&
                                            s(t[S], g[S]) &&
                                            ((E = !0),
                                            g.hasOwnProperty(S) && (b[S] = g[S]),
                                            i ? null != t[S] && (y[S] = i(g[S], t[S])) : null != t[S] && (y[S] = t[S]));
                                    E && e.apply({ type: "set_node", path: v, properties: b, newProperties: y });
                                }
                            }
                        }
                    });
                },
                splitNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    eW.withoutNormalizing(e, () => {
                        var r,
                            n,
                            { mode: a = "lowest", voids: s = !1 } = t,
                            { match: i, at: o = e.selection, height: l = 0, always: u = !1 } = t;
                        if (
                            (null == i && (i = (t) => eU.isElement(t) && eW.isBlock(e, t)),
                            e7.isRange(o) &&
                                (o = ((e, t) => {
                                    if (e7.isCollapsed(t)) return t.anchor;
                                    var [, r] = e7.edges(t),
                                        n = eW.pointRef(e, r);
                                    return tE.delete(e, { at: t }), n.unref();
                                })(e, o)),
                            e1.isPath(o))
                        ) {
                            var c = o,
                                d = eW.point(e, c),
                                [f] = eW.parent(e, c);
                            (i = (e) => e === f), (l = d.path.length - c.length + 1), (o = d), (u = !0);
                        }
                        if (o) {
                            var p = eW.pointRef(e, o, { affinity: "backward" });
                            try {
                                var [h] = eW.nodes(e, { at: o, match: i, mode: a, voids: s });
                                if (!h) return;
                                var m = eW.void(e, { at: o, mode: "highest" });
                                if (!s && m) {
                                    var [_, g] = m;
                                    if (eU.isElement(_) && e.isInline(_)) {
                                        var v = eW.after(e, g);
                                        if (!v) {
                                            var b = e1.next(g);
                                            tE.insertNodes(e, { text: "" }, { at: b, voids: s }), (v = eW.point(e, b));
                                        }
                                        (o = v), (u = !0);
                                    }
                                    (l = o.path.length - g.length + 1), (u = !0);
                                }
                                r = eW.pointRef(e, o);
                                var y = o.path.length - l,
                                    [, E] = h,
                                    S = o.path.slice(0, y),
                                    T = 0 === l ? o.offset : o.path[y] + 0;
                                for (var [x, w] of eW.levels(e, { at: S, reverse: !0, voids: s })) {
                                    var C = !1;
                                    if (
                                        w.length < E.length ||
                                        0 === w.length ||
                                        (!s && eU.isElement(x) && eW.isVoid(e, x))
                                    )
                                        break;
                                    var D = p.current,
                                        O = eW.isEnd(e, D, w);
                                    if (u || !p || !eW.isEdge(e, D, w)) {
                                        C = !0;
                                        var A = eX.extractProps(x);
                                        e.apply({ type: "split_node", path: w, position: T, properties: A });
                                    }
                                    T = w[w.length - 1] + (C || O ? 1 : 0);
                                }
                                if (null == t.at) {
                                    var M = r.current || eW.end(e, []);
                                    tE.select(e, M);
                                }
                            } finally {
                                p.unref(), null == (n = r) || n.unref();
                            }
                        }
                    });
                },
                unsetNodes(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    Array.isArray(t) || (t = [t]);
                    var n = {};
                    for (var a of t) n[a] = null;
                    tE.setNodes(e, n, r);
                },
                unwrapNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    eW.withoutNormalizing(e, () => {
                        var { mode: r = "lowest", split: n = !1, voids: a = !1 } = t,
                            { at: s = e.selection, match: i } = t;
                        if (s) {
                            null == i && (i = e1.isPath(s) ? t_(e, s) : (t) => eU.isElement(t) && eW.isBlock(e, t)),
                                e1.isPath(s) && (s = eW.range(e, s));
                            var o = e7.isRange(s) ? eW.rangeRef(e, s) : null;
                            for (var l of Array.from(eW.nodes(e, { at: s, match: i, mode: r, voids: a }), (t) => {
                                var [, r] = t;
                                return eW.pathRef(e, r);
                            }).reverse())
                                !(function (t) {
                                    var r = t.unref(),
                                        [s] = eW.node(e, r),
                                        i = eW.range(e, r);
                                    n && o && (i = e7.intersection(o.current, i)),
                                        tE.liftNodes(e, {
                                            at: i,
                                            match: (e) => eU.isAncestor(s) && s.children.includes(e),
                                            voids: a,
                                        });
                                })(l);
                            o && o.unref();
                        }
                    });
                },
                wrapNodes(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    eW.withoutNormalizing(e, () => {
                        var { mode: n = "lowest", split: a = !1, voids: s = !1 } = r,
                            { match: i, at: o = e.selection } = r;
                        if (o) {
                            if (
                                (null == i &&
                                    (i = e1.isPath(o)
                                        ? t_(e, o)
                                        : e.isInline(t)
                                          ? (t) => (eU.isElement(t) && eW.isInline(e, t)) || tl.isText(t)
                                          : (t) => eU.isElement(t) && eW.isBlock(e, t)),
                                a && e7.isRange(o))
                            ) {
                                var [l, u] = e7.edges(o),
                                    c = eW.rangeRef(e, o, { affinity: "inward" });
                                tE.splitNodes(e, { at: u, match: i, voids: s }),
                                    tE.splitNodes(e, { at: l, match: i, voids: s }),
                                    (o = c.unref()),
                                    null == r.at && tE.select(e, o);
                            }
                            for (var [, d] of Array.from(
                                eW.nodes(e, {
                                    at: o,
                                    match: e.isInline(t)
                                        ? (t) => eU.isElement(t) && eW.isBlock(e, t)
                                        : (e) => eW.isEditor(e),
                                    mode: "lowest",
                                    voids: s,
                                }),
                            )) {
                                var f = e7.isRange(o) ? e7.intersection(o, eW.range(e, d)) : o;
                                if (f) {
                                    var p = Array.from(eW.nodes(e, { at: f, match: i, mode: n, voids: s }));
                                    if (
                                        p.length > 0 &&
                                        "continue" ===
                                            (function () {
                                                var [r] = p,
                                                    n = p[p.length - 1],
                                                    [, a] = r,
                                                    [, i] = n;
                                                if (0 === a.length && 0 === i.length) return "continue";
                                                var o = e1.equals(a, i) ? e1.parent(a) : e1.common(a, i),
                                                    l = eW.range(e, a, i),
                                                    [u] = eW.node(e, o),
                                                    c = o.length + 1,
                                                    d = e1.next(i.slice(0, c)),
                                                    f = th(th({}, t), {}, { children: [] });
                                                tE.insertNodes(e, f, { at: d, voids: s }),
                                                    tE.moveNodes(e, {
                                                        at: l,
                                                        match: (e) => eU.isAncestor(u) && u.children.includes(e),
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
                    { edge: r = "anchor" } = t,
                    { selection: n } = e;
                if (n) {
                    if ("anchor" === r) tE.select(e, n.anchor);
                    else if ("focus" === r) tE.select(e, n.focus);
                    else if ("start" === r) {
                        var [a] = e7.edges(n);
                        tE.select(e, a);
                    } else if ("end" === r) {
                        var [, s] = e7.edges(n);
                        tE.select(e, s);
                    }
                }
            },
            deselect(e) {
                var { selection: t } = e;
                t && e.apply({ type: "set_selection", properties: t, newProperties: null });
            },
            move(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    { selection: r } = e,
                    { distance: n = 1, unit: a = "character", reverse: s = !1 } = t,
                    { edge: i = null } = t;
                if (r) {
                    "start" === i && (i = e7.isBackward(r) ? "focus" : "anchor"),
                        "end" === i && (i = e7.isBackward(r) ? "anchor" : "focus");
                    var { anchor: o, focus: l } = r,
                        u = { distance: n, unit: a },
                        c = {};
                    if (null == i || "anchor" === i) {
                        var d = s ? eW.before(e, o, u) : eW.after(e, o, u);
                        d && (c.anchor = d);
                    }
                    if (null == i || "focus" === i) {
                        var f = s ? eW.before(e, l, u) : eW.after(e, l, u);
                        f && (c.focus = f);
                    }
                    tE.setSelection(e, c);
                }
            },
            select(e, t) {
                var { selection: r } = e;
                if (((t = eW.range(e, t)), r)) return void tE.setSelection(e, t);
                if (!e7.isRange(t))
                    throw Error(
                        "When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(
                            tr.stringify(t),
                        ),
                    );
                e.apply({ type: "set_selection", properties: r, newProperties: t });
            },
            setPoint(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    { selection: n } = e,
                    { edge: a = "both" } = r;
                if (n) {
                    "start" === a && (a = e7.isBackward(n) ? "focus" : "anchor"),
                        "end" === a && (a = e7.isBackward(n) ? "anchor" : "focus");
                    var { anchor: s, focus: i } = n,
                        o = "anchor" === a ? s : i;
                    tE.setSelection(e, { ["anchor" === a ? "anchor" : "focus"]: tv(tv({}, o), t) });
                }
            },
            setSelection(e, t) {
                var { selection: r } = e,
                    n = {},
                    a = {};
                if (r) {
                    for (var s in t)
                        (("anchor" !== s || null == t.anchor || e6.equals(t.anchor, r.anchor)) &&
                            ("focus" !== s || null == t.focus || e6.equals(t.focus, r.focus)) &&
                            ("anchor" === s || "focus" === s || t[s] === r[s])) ||
                            ((n[s] = r[s]), (a[s] = t[s]));
                    Object.keys(n).length > 0 && e.apply({ type: "set_selection", properties: n, newProperties: a });
                }
            },
        },
    ),
    {
        delete(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            eW.withoutNormalizing(e, () => {
                var r,
                    { reverse: n = !1, unit: a = "character", distance: s = 1, voids: i = !1 } = t,
                    { at: o = e.selection, hanging: l = !1 } = t;
                if (o) {
                    var u = !1;
                    if ((e7.isRange(o) && e7.isCollapsed(o) && ((u = !0), (o = o.anchor)), e6.isPoint(o))) {
                        var c = eW.void(e, { at: o, mode: "highest" });
                        if (!i && c) {
                            var [, d] = c;
                            o = d;
                        } else {
                            var f = { unit: a, distance: s },
                                p = n ? eW.before(e, o, f) || eW.start(e, []) : eW.after(e, o, f) || eW.end(e, []);
                            (o = { anchor: o, focus: p }), (l = !0);
                        }
                    }
                    if (e1.isPath(o)) return void tE.removeNodes(e, { at: o, voids: i });
                    if (!e7.isCollapsed(o)) {
                        if (!l) {
                            var [, h] = e7.edges(o),
                                m = eW.end(e, []);
                            e6.equals(h, m) || (o = eW.unhangRange(e, o, { voids: i }));
                        }
                        var [_, g] = e7.edges(o),
                            v = eW.above(e, { match: (t) => eU.isElement(t) && eW.isBlock(e, t), at: _, voids: i }),
                            b = eW.above(e, { match: (t) => eU.isElement(t) && eW.isBlock(e, t), at: g, voids: i }),
                            y = v && b && !e1.equals(v[1], b[1]),
                            E = e1.equals(_.path, g.path),
                            S = i ? null : eW.void(e, { at: _, mode: "highest" }),
                            T = i ? null : eW.void(e, { at: g, mode: "highest" });
                        if (S) {
                            var x = eW.before(e, _);
                            x && v && e1.isAncestor(v[1], x.path) && (_ = x);
                        }
                        if (T) {
                            var w = eW.after(e, g);
                            w && b && e1.isAncestor(b[1], w.path) && (g = w);
                        }
                        var C = [];
                        for (var D of eW.nodes(e, { at: o, voids: i })) {
                            var [O, A] = D;
                            (!r || 0 !== e1.compare(A, r)) &&
                                ((!i && eU.isElement(O) && eW.isVoid(e, O)) ||
                                    (!e1.isCommon(A, _.path) && !e1.isCommon(A, g.path))) &&
                                (C.push(D), (r = A));
                        }
                        var M = Array.from(C, (t) => {
                                var [, r] = t;
                                return eW.pathRef(e, r);
                            }),
                            R = eW.pointRef(e, _),
                            k = eW.pointRef(e, g),
                            N = "";
                        if (!E && !S) {
                            var L = R.current,
                                [I] = eW.leaf(e, L),
                                { path: P } = L,
                                { offset: F } = _,
                                B = I.text.slice(F);
                            B.length > 0 && (e.apply({ type: "remove_text", path: P, offset: F, text: B }), (N = B));
                        }
                        if (
                            (M.reverse()
                                .map((e) => e.unref())
                                .filter((e) => null !== e)
                                .forEach((t) => tE.removeNodes(e, { at: t, voids: i })),
                            !T)
                        ) {
                            var Y = k.current,
                                [U] = eW.leaf(e, Y),
                                { path: j } = Y,
                                V = E ? _.offset : 0,
                                H = U.text.slice(V, g.offset);
                            H.length > 0 && (e.apply({ type: "remove_text", path: j, offset: V, text: H }), (N = H));
                        }
                        !E && y && k.current && R.current && tE.mergeNodes(e, { at: k.current, hanging: !0, voids: i }),
                            u &&
                                n &&
                                "character" === a &&
                                N.length > 1 &&
                                N.match(/[\u0E00-\u0E7F]+/) &&
                                tE.insertText(e, N.slice(0, N.length - s));
                        var G = R.unref(),
                            z = k.unref(),
                            W = n ? G || z : z || G;
                        null == t.at && W && tE.select(e, W);
                    }
                }
            });
        },
        insertFragment(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            eW.withoutNormalizing(e, () => {
                var n,
                    { hanging: a = !1, voids: s = !1 } = r,
                    { at: i = e.selection } = r;
                if (t.length) {
                    if (i) {
                        if (e7.isRange(i))
                            if ((a || (i = eW.unhangRange(e, i, { voids: s })), e7.isCollapsed(i))) i = i.anchor;
                            else {
                                var [, o] = e7.edges(i);
                                if (!s && eW.void(e, { at: o })) return;
                                var l = eW.pointRef(e, o);
                                tE.delete(e, { at: i }), (i = l.unref());
                            }
                        else e1.isPath(i) && (i = eW.start(e, i));
                        if (!(!s && eW.void(e, { at: i }))) {
                            var u = eW.above(e, {
                                at: i,
                                match: (t) => eU.isElement(t) && eW.isInline(e, t),
                                mode: "highest",
                                voids: s,
                            });
                            if (u) {
                                var [, c] = u;
                                eW.isEnd(e, i, c) ? (i = eW.after(e, c)) : eW.isStart(e, i, c) && (i = eW.before(e, c));
                            }
                            var [, d] = eW.above(e, {
                                    match: (t) => eU.isElement(t) && eW.isBlock(e, t),
                                    at: i,
                                    voids: s,
                                }),
                                f = eW.isStart(e, i, d),
                                p = eW.isEnd(e, i, d),
                                h = f && p,
                                m = !f || (f && p),
                                _ = !p,
                                [, g] = eX.first({ children: t }, []),
                                [, v] = eX.last({ children: t }, []),
                                b = [],
                                y = (t) => {
                                    var [r, n] = t;
                                    return (
                                        0 !== n.length &&
                                        (!!h ||
                                            !(
                                                (m &&
                                                    e1.isAncestor(n, g) &&
                                                    eU.isElement(r) &&
                                                    !e.isVoid(r) &&
                                                    !e.isInline(r)) ||
                                                (_ &&
                                                    e1.isAncestor(n, v) &&
                                                    eU.isElement(r) &&
                                                    !e.isVoid(r) &&
                                                    !e.isInline(r))
                                            ))
                                    );
                                };
                            for (var E of eX.nodes({ children: t }, { pass: y })) y(E) && b.push(E);
                            var S = [],
                                T = [],
                                x = [],
                                w = !0,
                                C = !1;
                            for (var [D] of b)
                                eU.isElement(D) && !e.isInline(D)
                                    ? ((w = !1), (C = !0), T.push(D))
                                    : w
                                      ? S.push(D)
                                      : x.push(D);
                            var [O] = eW.nodes(e, {
                                    at: i,
                                    match: (t) => tl.isText(t) || eW.isInline(e, t),
                                    mode: "highest",
                                    voids: s,
                                }),
                                [, A] = O,
                                M = eW.isStart(e, i, A),
                                R = eW.isEnd(e, i, A),
                                k = eW.pathRef(e, p && !x.length ? e1.next(d) : d),
                                N = eW.pathRef(e, R ? e1.next(A) : A);
                            tE.splitNodes(e, {
                                at: i,
                                match: (t) =>
                                    C ? eU.isElement(t) && eW.isBlock(e, t) : tl.isText(t) || eW.isInline(e, t),
                                mode: C ? "lowest" : "highest",
                                always: C && (!f || S.length > 0) && (!p || x.length > 0),
                                voids: s,
                            });
                            var L = eW.pathRef(e, !M || (M && R) ? e1.next(A) : A);
                            if (
                                (tE.insertNodes(e, S, {
                                    at: L.current,
                                    match: (t) => tl.isText(t) || eW.isInline(e, t),
                                    mode: "highest",
                                    voids: s,
                                }),
                                h && !S.length && T.length && !x.length && tE.delete(e, { at: d, voids: s }),
                                tE.insertNodes(e, T, {
                                    at: k.current,
                                    match: (t) => eU.isElement(t) && eW.isBlock(e, t),
                                    mode: "lowest",
                                    voids: s,
                                }),
                                tE.insertNodes(e, x, {
                                    at: N.current,
                                    match: (t) => tl.isText(t) || eW.isInline(e, t),
                                    mode: "highest",
                                    voids: s,
                                }),
                                !r.at &&
                                    (x.length > 0 && N.current
                                        ? (n = e1.previous(N.current))
                                        : T.length > 0 && k.current
                                          ? (n = e1.previous(k.current))
                                          : L.current && (n = e1.previous(L.current)),
                                    n))
                            ) {
                                var I = eW.end(e, n);
                                tE.select(e, I);
                            }
                            L.unref(), k.unref(), N.unref();
                        }
                    }
                }
            });
        },
        insertText(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            eW.withoutNormalizing(e, () => {
                var { voids: n = !1 } = r,
                    { at: a = e.selection } = r;
                if (a) {
                    if ((e1.isPath(a) && (a = eW.range(e, a)), e7.isRange(a)))
                        if (e7.isCollapsed(a)) a = a.anchor;
                        else {
                            var s = e7.end(a);
                            if (!n && eW.void(e, { at: s })) return;
                            var i = e7.start(a),
                                o = eW.pointRef(e, i),
                                l = eW.pointRef(e, s);
                            tE.delete(e, { at: a, voids: n });
                            var u = o.unref(),
                                c = l.unref();
                            (a = u || c), tE.setSelection(e, { anchor: a, focus: a });
                        }
                    if (!(!n && eW.void(e, { at: a }))) {
                        var { path: d, offset: f } = a;
                        t.length > 0 && e.apply({ type: "insert_text", path: d, offset: f, text: t });
                    }
                }
            });
        },
    },
);
