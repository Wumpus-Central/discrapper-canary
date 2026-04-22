"use strict";
n.d(t, { C7: () => v, N$: () => R, n1: () => h });
var r = n(3388),
    i = n(241827),
    s = n(297987),
    a = n(408713),
    o = n(883768),
    l = n(621158),
    u = n(885714),
    d = n(805447),
    c = n(64700);
let _ = c.createContext(null),
    f = "react-aria-focus-scope-restore",
    E = null;
function h(e) {
    var t, n, o, l, d, h, v, C, b, w;
    let M,
        P,
        U,
        k,
        { children: x, contain: G, restoreFocus: V, autoFocus: F } = e,
        B = (0, c.useRef)(null),
        H = (0, c.useRef)(null),
        Y = (0, c.useRef)([]),
        { parentNode: W } = (0, c.useContext)(_) || {},
        j = (0, c.useMemo)(() => new D({ scopeRef: Y }), [Y]);
    (0, r.N)(() => {
        let e = W || L.root;
        if (L.getTreeNode(e.scopeRef) && E && !I(E, e.scopeRef)) {
            let t = L.getTreeNode(E);
            t && (e = t);
        }
        e.addChild(j), L.addNode(j);
    }, [j, W]),
        (0, r.N)(() => {
            let e = L.getTreeNode(Y);
            e && (e.contain = !!G);
        }, [G]),
        (0, r.N)(() => {
            var e;
            let t = null == (e = B.current) ? void 0 : e.nextSibling,
                n = [],
                r = (e) => e.stopPropagation();
            for (; t && t !== H.current; ) n.push(t), t.addEventListener(f, r), (t = t.nextSibling);
            return (
                (Y.current = n),
                () => {
                    for (let e of n) e.removeEventListener(f, r);
                }
            );
        }, [x]),
        (t = Y),
        (n = V),
        (o = G),
        (0, r.N)(() => {
            if (n || o) return;
            let e = t.current,
                r = (0, s.TW)(e ? e[0] : void 0),
                a = (e) => {
                    let n = (0, i.wt)(e);
                    g(n, t.current) ? (E = t) : A(n) || (E = null);
                };
            return (
                r.addEventListener("focusin", a, !1),
                null == e || e.forEach((e) => e.addEventListener("focusin", a, !1)),
                () => {
                    r.removeEventListener("focusin", a, !1),
                        null == e || e.forEach((e) => e.removeEventListener("focusin", a, !1));
                }
            );
        }, [t, n, o]),
        (l = Y),
        (d = G),
        (M = (0, c.useRef)(void 0)),
        (P = (0, c.useRef)(void 0)),
        (0, r.N)(() => {
            let e = l.current;
            if (!d) {
                P.current && (cancelAnimationFrame(P.current), (P.current = void 0));
                return;
            }
            let t = (0, s.TW)(e ? e[0] : void 0),
                n = (e) => {
                    if ("Tab" !== e.key || e.altKey || e.ctrlKey || e.metaKey || !m(l) || e.isComposing) return;
                    let n = (0, i.bq)(t),
                        r = l.current;
                    if (!r || !g(n, r)) return;
                    let s = R(p(r), { tabbable: !0 }, r);
                    if (!n) return;
                    s.currentNode = n;
                    let a = e.shiftKey ? s.previousNode() : s.nextNode();
                    a ||
                        ((s.currentNode = e.shiftKey
                            ? r[r.length - 1].nextElementSibling
                            : r[0].previousElementSibling),
                        (a = e.shiftKey ? s.previousNode() : s.nextNode())),
                        e.preventDefault(),
                        a && T(a, !0);
                },
                r = (e) => {
                    (!E || I(E, l)) && g((0, i.wt)(e), l.current)
                        ? ((E = l), (M.current = (0, i.wt)(e)))
                        : m(l) && !A((0, i.wt)(e), l)
                          ? M.current
                              ? M.current.focus()
                              : E && E.current && y(E.current)
                          : m(l) && (M.current = (0, i.wt)(e));
                },
                o = (e) => {
                    P.current && cancelAnimationFrame(P.current),
                        (P.current = requestAnimationFrame(() => {
                            let n = (0, u.ME)(),
                                r = ("virtual" === n || null === n) && (0, a.m0)() && (0, a.H8)(),
                                s = (0, i.bq)(t);
                            if (!r && s && m(l) && !A(s, l)) {
                                E = l;
                                let t = (0, i.wt)(e);
                                if (t && t.isConnected) {
                                    var o;
                                    (M.current = t), null == (o = M.current) || o.focus();
                                } else E.current && y(E.current);
                            }
                        }));
                };
            return (
                t.addEventListener("keydown", n, !1),
                t.addEventListener("focusin", r, !1),
                null == e || e.forEach((e) => e.addEventListener("focusin", r, !1)),
                null == e || e.forEach((e) => e.addEventListener("focusout", o, !1)),
                () => {
                    t.removeEventListener("keydown", n, !1),
                        t.removeEventListener("focusin", r, !1),
                        null == e || e.forEach((e) => e.removeEventListener("focusin", r, !1)),
                        null == e || e.forEach((e) => e.removeEventListener("focusout", o, !1));
                }
            );
        }, [l, d]),
        (0, r.N)(
            () => () => {
                P.current && cancelAnimationFrame(P.current);
            },
            [P],
        ),
        (h = Y),
        (v = V),
        (C = G),
        (U = (0, c.useRef)("u" > typeof document ? (0, i.bq)((0, s.TW)(h.current ? h.current[0] : void 0)) : null)),
        (0, r.N)(() => {
            let e = h.current,
                t = (0, s.TW)(e ? e[0] : void 0);
            if (!v || C) return;
            let n = () => {
                (!E || I(E, h)) && g((0, i.bq)(t), h.current) && (E = h);
            };
            return (
                t.addEventListener("focusin", n, !1),
                null == e || e.forEach((e) => e.addEventListener("focusin", n, !1)),
                () => {
                    t.removeEventListener("focusin", n, !1),
                        null == e || e.forEach((e) => e.removeEventListener("focusin", n, !1));
                }
            );
        }, [h, C]),
        (0, r.N)(() => {
            let e = (0, s.TW)(h.current ? h.current[0] : void 0);
            if (!v) return;
            let t = (t) => {
                if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !m(h) || t.isComposing) return;
                let n = e.activeElement;
                if (!A(n, h) || !N(h)) return;
                let r = L.getTreeNode(h);
                if (!r) return;
                let i = r.nodeToRestore,
                    s = R(e.body, { tabbable: !0 });
                s.currentNode = n;
                let a = t.shiftKey ? s.previousNode() : s.nextNode();
                if (
                    ((i && i.isConnected && i !== e.body) || ((i = void 0), (r.nodeToRestore = void 0)),
                    (!a || !A(a, h)) && i)
                ) {
                    s.currentNode = i;
                    do a = t.shiftKey ? s.previousNode() : s.nextNode();
                    while (A(a, h));
                    (t.preventDefault(), t.stopPropagation(), a) ? T(a, !0) : A(i) ? T(i, !0) : n.blur();
                }
            };
            return (
                C || e.addEventListener("keydown", t, !0),
                () => {
                    C || e.removeEventListener("keydown", t, !0);
                }
            );
        }, [h, v, C]),
        (0, r.N)(() => {
            var e;
            let t = (0, s.TW)(h.current ? h.current[0] : void 0);
            if (!v) return;
            let n = L.getTreeNode(h);
            if (n)
                return (
                    (n.nodeToRestore = null != (e = U.current) ? e : void 0),
                    () => {
                        let e = L.getTreeNode(h);
                        if (!e) return;
                        let n = e.nodeToRestore,
                            r = (0, i.bq)(t);
                        if (v && n && ((r && A(r, h)) || (r === t.body && N(h)))) {
                            let e = L.clone();
                            requestAnimationFrame(() => {
                                if (t.activeElement === t.body) {
                                    let t = e.getTreeNode(h);
                                    for (; t; ) {
                                        if (t.nodeToRestore && t.nodeToRestore.isConnected)
                                            return void O(t.nodeToRestore);
                                        t = t.parent;
                                    }
                                    for (t = e.getTreeNode(h); t; ) {
                                        if (t.scopeRef && t.scopeRef.current && L.getTreeNode(t.scopeRef))
                                            return void O(S(t.scopeRef.current, !0));
                                        t = t.parent;
                                    }
                                }
                            });
                        }
                    }
                );
        }, [h, v]),
        (b = Y),
        (w = F),
        (k = c.useRef(w)),
        (0, c.useEffect)(() => {
            if (k.current) {
                E = b;
                let e = (0, s.TW)(b.current ? b.current[0] : void 0);
                !g((0, i.bq)(e), E.current) && b.current && y(b.current);
            }
            k.current = !1;
        }, [b]),
        (0, c.useEffect)(() => {
            let e = (0, i.bq)((0, s.TW)(Y.current ? Y.current[0] : void 0)),
                t = null;
            if (g(e, Y.current)) {
                for (let n of L.traverse()) n.scopeRef && g(e, n.scopeRef.current) && (t = n);
                t === L.getTreeNode(Y) && (E = t.scopeRef);
            }
        }, [Y]),
        (0, r.N)(
            () => () => {
                var e, t, n;
                let r =
                    null != (n = null == (t = L.getTreeNode(Y)) || null == (e = t.parent) ? void 0 : e.scopeRef)
                        ? n
                        : null;
                (Y === E || I(Y, E)) && (!r || L.getTreeNode(r)) && (E = r), L.removeTreeNode(Y);
            },
            [Y],
        );
    let K = (0, c.useMemo)(() => {
            var e;
            return (
                (e = Y),
                {
                    focusNext(t = {}) {
                        var n;
                        let r = e.current,
                            { from: a, tabbable: o, wrap: l, accept: u } = t,
                            d = a || (0, i.bq)((0, s.TW)(null != (n = r[0]) ? n : void 0)),
                            c = r[0].previousElementSibling,
                            _ = R(p(r), { tabbable: o, accept: u }, r);
                        _.currentNode = g(d, r) ? d : c;
                        let f = _.nextNode();
                        return !f && l && ((_.currentNode = c), (f = _.nextNode())), f && T(f, !0), f;
                    },
                    focusPrevious(t = {}) {
                        var n;
                        let r = e.current,
                            { from: a, tabbable: o, wrap: l, accept: u } = t,
                            d = a || (0, i.bq)((0, s.TW)(null != (n = r[0]) ? n : void 0)),
                            c = r[r.length - 1].nextElementSibling,
                            _ = R(p(r), { tabbable: o, accept: u }, r);
                        _.currentNode = g(d, r) ? d : c;
                        let f = _.previousNode();
                        return !f && l && ((_.currentNode = c), (f = _.previousNode())), f && T(f, !0), f;
                    },
                    focusFirst(t = {}) {
                        let n = e.current,
                            { tabbable: r, accept: i } = t,
                            s = R(p(n), { tabbable: r, accept: i }, n);
                        s.currentNode = n[0].previousElementSibling;
                        let a = s.nextNode();
                        return a && T(a, !0), a;
                    },
                    focusLast(t = {}) {
                        let n = e.current,
                            { tabbable: r, accept: i } = t,
                            s = R(p(n), { tabbable: r, accept: i }, n);
                        s.currentNode = n[n.length - 1].nextElementSibling;
                        let a = s.previousNode();
                        return a && T(a, !0), a;
                    },
                }
            );
        }, []),
        $ = (0, c.useMemo)(() => ({ focusManager: K, parentNode: j }), [j, K]);
    return c.createElement(
        _.Provider,
        { value: $ },
        c.createElement("span", { "data-focus-scope-start": !0, hidden: !0, ref: B }),
        x,
        c.createElement("span", { "data-focus-scope-end": !0, hidden: !0, ref: H }),
    );
}
function p(e) {
    return e[0].parentElement;
}
function m(e) {
    let t = L.getTreeNode(E);
    for (; t && t.scopeRef !== e; ) {
        if (t.contain) return !1;
        t = t.parent;
    }
    return !0;
}
function g(e, t) {
    return !!e && !!t && t.some((t) => t.contains(e));
}
function A(e, t = null) {
    if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
    for (let { scopeRef: n } of L.traverse(L.getTreeNode(t))) if (n && g(e, n.current)) return !0;
    return !1;
}
function I(e, t) {
    var n;
    let r = null == (n = L.getTreeNode(t)) ? void 0 : n.parent;
    for (; r; ) {
        if (r.scopeRef === e) return !0;
        r = r.parent;
    }
    return !1;
}
function T(e, t = !1) {
    if (null == e || t) {
        if (null != e)
            try {
                e.focus();
            } catch {}
    } else
        try {
            (0, d.l)(e);
        } catch {}
}
function S(e, t = !0) {
    let n = e[0].previousElementSibling,
        r = p(e),
        i = R(r, { tabbable: t }, e);
    i.currentNode = n;
    let s = i.nextNode();
    return t && !s && (((i = R((r = p(e)), { tabbable: !1 }, e)).currentNode = n), (s = i.nextNode())), s;
}
function y(e, t = !0) {
    T(S(e, t));
}
function N(e) {
    let t = L.getTreeNode(E);
    for (; t && t.scopeRef !== e; ) {
        if (t.nodeToRestore) return !1;
        t = t.parent;
    }
    return (null == t ? void 0 : t.scopeRef) === e;
}
function O(e) {
    e.dispatchEvent(new CustomEvent(f, { bubbles: !0, cancelable: !0 })) && T(e);
}
function R(e, t, n) {
    let r = (null == t ? void 0 : t.tabbable) ? o.A : o.t,
        i = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
        a = (0, s.TW)(i),
        u = (0, l.H)(a, e || a, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
                var i;
                return (null == t || null == (i = t.from) ? void 0 : i.contains(e)) ||
                    ((null == t ? void 0 : t.tabbable) &&
                        "INPUT" === e.tagName &&
                        "radio" === e.getAttribute("type") &&
                        (!(function (e) {
                            if (e.checked) return !0;
                            let t = [];
                            if (e.form) {
                                var n, r;
                                let i = null == (r = e.form) || null == (n = r.elements) ? void 0 : n.namedItem(e.name);
                                t = [...(null != i ? i : [])];
                            } else
                                t = [
                                    ...(0, s.TW)(e).querySelectorAll(
                                        `input[type="radio"][name="${CSS.escape(e.name)}"]`,
                                    ),
                                ].filter((e) => !e.form);
                            return !!t && !t.some((e) => e.checked);
                        })(e) ||
                            ("INPUT" === u.currentNode.tagName &&
                                "radio" === u.currentNode.type &&
                                u.currentNode.name === e.name)))
                    ? NodeFilter.FILTER_REJECT
                    : r(e) && (!n || g(e, n)) && (!(null == t ? void 0 : t.accept) || t.accept(e))
                      ? NodeFilter.FILTER_ACCEPT
                      : NodeFilter.FILTER_SKIP;
            },
        });
    return (null == t ? void 0 : t.from) && (u.currentNode = t.from), u;
}
function v(e, t = {}) {
    return {
        focusNext(n = {}) {
            let r = e.current;
            if (!r) return null;
            let { from: a, tabbable: o = t.tabbable, wrap: l = t.wrap, accept: u = t.accept } = n,
                d = a || (0, i.bq)((0, s.TW)(r)),
                c = R(r, { tabbable: o, accept: u });
            r.contains(d) && (c.currentNode = d);
            let _ = c.nextNode();
            return !_ && l && ((c.currentNode = r), (_ = c.nextNode())), _ && T(_, !0), _;
        },
        focusPrevious(n = t) {
            let r = e.current;
            if (!r) return null;
            let { from: a, tabbable: o = t.tabbable, wrap: l = t.wrap, accept: u = t.accept } = n,
                d = a || (0, i.bq)((0, s.TW)(r)),
                c = R(r, { tabbable: o, accept: u });
            if (r.contains(d)) c.currentNode = d;
            else {
                let e = C(c);
                return e && T(e, !0), null != e ? e : null;
            }
            let _ = c.previousNode();
            if (!_ && l) {
                c.currentNode = r;
                let e = C(c);
                if (!e) return null;
                _ = e;
            }
            return _ && T(_, !0), null != _ ? _ : null;
        },
        focusFirst(n = t) {
            let r = e.current;
            if (!r) return null;
            let { tabbable: i = t.tabbable, accept: s = t.accept } = n,
                a = R(r, { tabbable: i, accept: s }).nextNode();
            return a && T(a, !0), a;
        },
        focusLast(n = t) {
            let r = e.current;
            if (!r) return null;
            let { tabbable: i = t.tabbable, accept: s = t.accept } = n,
                a = C(R(r, { tabbable: i, accept: s }));
            return a && T(a, !0), null != a ? a : null;
        },
    };
}
function C(e) {
    let t, n;
    do (t = e.lastChild()) && (n = t);
    while (t);
    return n;
}
class b {
    get size() {
        return this.fastMap.size;
    }
    getTreeNode(e) {
        return this.fastMap.get(e);
    }
    addTreeNode(e, t, n) {
        let r = this.fastMap.get(null != t ? t : null);
        if (!r) return;
        let i = new D({ scopeRef: e });
        r.addChild(i), (i.parent = r), this.fastMap.set(e, i), n && (i.nodeToRestore = n);
    }
    addNode(e) {
        this.fastMap.set(e.scopeRef, e);
    }
    removeTreeNode(e) {
        if (null === e) return;
        let t = this.fastMap.get(e);
        if (!t) return;
        let n = t.parent;
        for (let e of this.traverse())
            e !== t &&
                t.nodeToRestore &&
                e.nodeToRestore &&
                t.scopeRef &&
                t.scopeRef.current &&
                g(e.nodeToRestore, t.scopeRef.current) &&
                (e.nodeToRestore = t.nodeToRestore);
        let r = t.children;
        n && (n.removeChild(t), r.size > 0 && r.forEach((e) => n && n.addChild(e))), this.fastMap.delete(t.scopeRef);
    }
    *traverse(e = this.root) {
        if ((null != e.scopeRef && (yield e), e.children.size > 0)) for (let t of e.children) yield* this.traverse(t);
    }
    clone() {
        var e, t;
        let n = new b();
        for (let r of this.traverse())
            n.addTreeNode(
                r.scopeRef,
                null != (t = null == (e = r.parent) ? void 0 : e.scopeRef) ? t : null,
                r.nodeToRestore,
            );
        return n;
    }
    constructor() {
        (this.fastMap = new Map()), (this.root = new D({ scopeRef: null })), this.fastMap.set(null, this.root);
    }
}
class D {
    addChild(e) {
        this.children.add(e), (e.parent = this);
    }
    removeChild(e) {
        this.children.delete(e), (e.parent = void 0);
    }
    constructor(e) {
        (this.children = new Set()), (this.contain = !1), (this.scopeRef = e.scopeRef);
    }
}
let L = new b();
