"use strict";
r.d(t, { n1: () => v, N$: () => T, C7: () => M });
var n = r(576024),
    o = r(712247),
    i = r(745391),
    a = r(361037),
    s = r(194498),
    l = r(790637);
class u {
    get currentNode() {
        return this._currentNode;
    }
    set currentNode(e) {
        if (!(0, o.sD)(this.root, e))
            throw Error("Cannot set currentNode to a node that is not contained by the root node.");
        let t = [],
            r = e,
            n = e;
        for (this._currentNode = e; r && r !== this.root; )
            if (r.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                let e = r,
                    o = this._doc.createTreeWalker(e, this.whatToShow, { acceptNode: this._acceptNode });
                t.push(o), (o.currentNode = n), this._currentSetFor.add(o), (r = n = e.host);
            } else r = r.parentNode;
        let i = this._doc.createTreeWalker(this.root, this.whatToShow, { acceptNode: this._acceptNode });
        t.push(i), (i.currentNode = n), this._currentSetFor.add(i), (this._walkerStack = t);
    }
    get doc() {
        return this._doc;
    }
    firstChild() {
        let e = this.currentNode,
            t = this.nextNode();
        return (0, o.sD)(e, t) ? (t && (this.currentNode = t), t) : ((this.currentNode = e), null);
    }
    lastChild() {
        let e = this._walkerStack[0].lastChild();
        return e && (this.currentNode = e), e;
    }
    nextNode() {
        let e = this._walkerStack[0].nextNode();
        if (e) {
            if (e.shadowRoot) {
                var t;
                let r;
                if (
                    ("function" == typeof this.filter
                        ? (r = this.filter(e))
                        : (null == (t = this.filter) ? void 0 : t.acceptNode) && (r = this.filter.acceptNode(e)),
                    r === NodeFilter.FILTER_ACCEPT)
                )
                    return (this.currentNode = e), e;
                let n = this.nextNode();
                return n && (this.currentNode = n), n;
            }
            return e && (this.currentNode = e), e;
        }
        if (!(this._walkerStack.length > 1)) return null;
        {
            this._walkerStack.shift();
            let e = this.nextNode();
            return e && (this.currentNode = e), e;
        }
    }
    previousNode() {
        let e = this._walkerStack[0];
        if (e.currentNode === e.root) {
            if (this._currentSetFor.has(e) && (this._currentSetFor.delete(e), this._walkerStack.length > 1)) {
                this._walkerStack.shift();
                let e = this.previousNode();
                return e && (this.currentNode = e), e;
            }
            return null;
        }
        let t = e.previousNode();
        if (t) {
            if (t.shadowRoot) {
                var r;
                let e;
                if (
                    ("function" == typeof this.filter
                        ? (e = this.filter(t))
                        : (null == (r = this.filter) ? void 0 : r.acceptNode) && (e = this.filter.acceptNode(t)),
                    e === NodeFilter.FILTER_ACCEPT)
                )
                    return t && (this.currentNode = t), t;
                let n = this.lastChild();
                return n && (this.currentNode = n), n;
            }
            return t && (this.currentNode = t), t;
        }
        if (!(this._walkerStack.length > 1)) return null;
        {
            this._walkerStack.shift();
            let e = this.previousNode();
            return e && (this.currentNode = e), e;
        }
    }
    nextSibling() {
        return null;
    }
    previousSibling() {
        return null;
    }
    parentNode() {
        return null;
    }
    constructor(e, t, r, n) {
        (this._walkerStack = []),
            (this._currentSetFor = new Set()),
            (this._acceptNode = (e) => {
                if (e.nodeType === Node.ELEMENT_NODE) {
                    var t;
                    let r = e.shadowRoot;
                    if (r) {
                        let e = this._doc.createTreeWalker(r, this.whatToShow, { acceptNode: this._acceptNode });
                        return this._walkerStack.unshift(e), NodeFilter.FILTER_ACCEPT;
                    }
                    if ("function" == typeof this.filter) return this.filter(e);
                    if (null == (t = this.filter) ? void 0 : t.acceptNode) return this.filter.acceptNode(e);
                    if (null === this.filter) return NodeFilter.FILTER_ACCEPT;
                }
                return NodeFilter.FILTER_SKIP;
            }),
            (this._doc = e),
            (this.root = t),
            (this.filter = null != n ? n : null),
            (this.whatToShow = null != r ? r : NodeFilter.SHOW_ALL),
            (this._currentNode = t),
            this._walkerStack.unshift(e.createTreeWalker(t, r, this._acceptNode));
        const o = t.shadowRoot;
        if (o) {
            const e = this._doc.createTreeWalker(o, this.whatToShow, { acceptNode: this._acceptNode });
            this._walkerStack.unshift(e);
        }
    }
}
var c = r(766382),
    f = r(288371),
    p = r(582128);
let d = p.createContext(null),
    h = "react-aria-focus-scope-restore",
    m = null;
function v(e) {
    var t, r, s, l, u, f, v, M, P, A;
    let D,
        L,
        R,
        F,
        { children: N, contain: j, restoreFocus: B, autoFocus: $ } = e,
        K = (0, p.useRef)(null),
        V = (0, p.useRef)(null),
        U = (0, p.useRef)([]),
        { parentNode: z } = (0, p.useContext)(d) || {},
        W = (0, p.useMemo)(() => new O({ scopeRef: U }), [U]);
    (0, n.N)(() => {
        let e = z || I.root;
        if (I.getTreeNode(e.scopeRef) && m && !_(m, e.scopeRef)) {
            let t = I.getTreeNode(m);
            t && (e = t);
        }
        e.addChild(W), I.addNode(W);
    }, [W, z]),
        (0, n.N)(() => {
            let e = I.getTreeNode(U);
            e && (e.contain = !!j);
        }, [j]),
        (0, n.N)(() => {
            var e;
            let t = null == (e = K.current) ? void 0 : e.nextSibling,
                r = [],
                n = (e) => e.stopPropagation();
            for (; t && t !== V.current; ) r.push(t), t.addEventListener(h, n), (t = t.nextSibling);
            return (
                (U.current = r),
                () => {
                    for (let e of r) e.removeEventListener(h, n);
                }
            );
        }, [N]),
        (t = U),
        (r = B),
        (s = j),
        (0, n.N)(() => {
            if (r || s) return;
            let e = t.current,
                n = (0, i.TW)(e ? e[0] : void 0),
                a = (e) => {
                    let r = (0, o.wt)(e);
                    b(r, t.current) ? (m = t) : w(r) || (m = null);
                };
            return (
                n.addEventListener("focusin", a, !1),
                null == e || e.forEach((e) => e.addEventListener("focusin", a, !1)),
                () => {
                    n.removeEventListener("focusin", a, !1),
                        null == e || e.forEach((e) => e.removeEventListener("focusin", a, !1));
                }
            );
        }, [t, r, s]),
        (l = U),
        (u = j),
        (D = (0, p.useRef)(void 0)),
        (L = (0, p.useRef)(void 0)),
        (0, n.N)(() => {
            let e = l.current;
            if (!u) {
                L.current && (cancelAnimationFrame(L.current), (L.current = void 0));
                return;
            }
            let t = (0, i.TW)(e ? e[0] : void 0),
                r = (e) => {
                    if ("Tab" !== e.key || e.altKey || e.ctrlKey || e.metaKey || !g(l) || e.isComposing) return;
                    let r = (0, o.bq)(t),
                        n = l.current;
                    if (!n || !b(r, n)) return;
                    let i = T(y(n), { tabbable: !0 }, n);
                    if (!r) return;
                    i.currentNode = r;
                    let a = e.shiftKey ? i.previousNode() : i.nextNode();
                    a ||
                        ((i.currentNode = e.shiftKey
                            ? n[n.length - 1].nextElementSibling
                            : n[0].previousElementSibling),
                        (a = e.shiftKey ? i.previousNode() : i.nextNode())),
                        e.preventDefault(),
                        a && S(a, !0);
                },
                n = (e) => {
                    (!m || _(m, l)) && b((0, o.wt)(e), l.current)
                        ? ((m = l), (D.current = (0, o.wt)(e)))
                        : g(l) && !w((0, o.wt)(e), l)
                          ? D.current
                              ? D.current.focus()
                              : m && m.current && E(m.current)
                          : g(l) && (D.current = (0, o.wt)(e));
                },
                s = (e) => {
                    L.current && cancelAnimationFrame(L.current),
                        (L.current = requestAnimationFrame(() => {
                            let r = (0, c.ME)(),
                                n = ("virtual" === r || null === r) && (0, a.m0)() && (0, a.H8)(),
                                i = (0, o.bq)(t);
                            if (!n && i && g(l) && !w(i, l)) {
                                m = l;
                                let t = (0, o.wt)(e);
                                if (t && t.isConnected) {
                                    var s;
                                    (D.current = t), null == (s = D.current) || s.focus();
                                } else m.current && E(m.current);
                            }
                        }));
                };
            return (
                t.addEventListener("keydown", r, !1),
                t.addEventListener("focusin", n, !1),
                null == e || e.forEach((e) => e.addEventListener("focusin", n, !1)),
                null == e || e.forEach((e) => e.addEventListener("focusout", s, !1)),
                () => {
                    t.removeEventListener("keydown", r, !1),
                        t.removeEventListener("focusin", n, !1),
                        null == e || e.forEach((e) => e.removeEventListener("focusin", n, !1)),
                        null == e || e.forEach((e) => e.removeEventListener("focusout", s, !1));
                }
            );
        }, [l, u]),
        (0, n.N)(
            () => () => {
                L.current && cancelAnimationFrame(L.current);
            },
            [L],
        ),
        (f = U),
        (v = B),
        (M = j),
        (R = (0, p.useRef)("u" > typeof document ? (0, o.bq)((0, i.TW)(f.current ? f.current[0] : void 0)) : null)),
        (0, n.N)(() => {
            let e = f.current,
                t = (0, i.TW)(e ? e[0] : void 0);
            if (!v || M) return;
            let r = () => {
                (!m || _(m, f)) && b((0, o.bq)(t), f.current) && (m = f);
            };
            return (
                t.addEventListener("focusin", r, !1),
                null == e || e.forEach((e) => e.addEventListener("focusin", r, !1)),
                () => {
                    t.removeEventListener("focusin", r, !1),
                        null == e || e.forEach((e) => e.removeEventListener("focusin", r, !1));
                }
            );
        }, [f, M]),
        (0, n.N)(() => {
            let e = (0, i.TW)(f.current ? f.current[0] : void 0);
            if (!v) return;
            let t = (t) => {
                if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !g(f) || t.isComposing) return;
                let r = e.activeElement;
                if (!w(r, f) || !k(f)) return;
                let n = I.getTreeNode(f);
                if (!n) return;
                let o = n.nodeToRestore,
                    i = T(e.body, { tabbable: !0 });
                i.currentNode = r;
                let a = t.shiftKey ? i.previousNode() : i.nextNode();
                if (
                    ((o && o.isConnected && o !== e.body) || ((o = void 0), (n.nodeToRestore = void 0)),
                    (!a || !w(a, f)) && o)
                ) {
                    i.currentNode = o;
                    do a = t.shiftKey ? i.previousNode() : i.nextNode();
                    while (w(a, f));
                    (t.preventDefault(), t.stopPropagation(), a) ? S(a, !0) : w(o) ? S(o, !0) : r.blur();
                }
            };
            return (
                M || e.addEventListener("keydown", t, !0),
                () => {
                    M || e.removeEventListener("keydown", t, !0);
                }
            );
        }, [f, v, M]),
        (0, n.N)(() => {
            var e;
            let t = (0, i.TW)(f.current ? f.current[0] : void 0);
            if (!v) return;
            let r = I.getTreeNode(f);
            if (r)
                return (
                    (r.nodeToRestore = null != (e = R.current) ? e : void 0),
                    () => {
                        let e = I.getTreeNode(f);
                        if (!e) return;
                        let r = e.nodeToRestore,
                            n = (0, o.bq)(t);
                        if (v && r && ((n && w(n, f)) || (n === t.body && k(f)))) {
                            let e = I.clone();
                            requestAnimationFrame(() => {
                                if (t.activeElement === t.body) {
                                    let t = e.getTreeNode(f);
                                    for (; t; ) {
                                        if (t.nodeToRestore && t.nodeToRestore.isConnected)
                                            return void C(t.nodeToRestore);
                                        t = t.parent;
                                    }
                                    for (t = e.getTreeNode(f); t; ) {
                                        if (t.scopeRef && t.scopeRef.current && I.getTreeNode(t.scopeRef))
                                            return void C(x(t.scopeRef.current, !0));
                                        t = t.parent;
                                    }
                                }
                            });
                        }
                    }
                );
        }, [f, v]),
        (P = U),
        (A = $),
        (F = p.useRef(A)),
        (0, p.useEffect)(() => {
            if (F.current) {
                m = P;
                let e = (0, i.TW)(P.current ? P.current[0] : void 0);
                !b((0, o.bq)(e), m.current) && P.current && E(P.current);
            }
            F.current = !1;
        }, [P]),
        (0, p.useEffect)(() => {
            let e = (0, o.bq)((0, i.TW)(U.current ? U.current[0] : void 0)),
                t = null;
            if (b(e, U.current)) {
                for (let r of I.traverse()) r.scopeRef && b(e, r.scopeRef.current) && (t = r);
                t === I.getTreeNode(U) && (m = t.scopeRef);
            }
        }, [U]),
        (0, n.N)(
            () => () => {
                var e, t, r;
                let n =
                    null != (r = null == (t = I.getTreeNode(U)) || null == (e = t.parent) ? void 0 : e.scopeRef)
                        ? r
                        : null;
                (U === m || _(U, m)) && (!n || I.getTreeNode(n)) && (m = n), I.removeTreeNode(U);
            },
            [U],
        );
    let H = (0, p.useMemo)(() => {
            var e;
            return (
                (e = U),
                {
                    focusNext(t = {}) {
                        var r;
                        let n = e.current,
                            { from: a, tabbable: s, wrap: l, accept: u } = t,
                            c = a || (0, o.bq)((0, i.TW)(null != (r = n[0]) ? r : void 0)),
                            f = n[0].previousElementSibling,
                            p = T(y(n), { tabbable: s, accept: u }, n);
                        p.currentNode = b(c, n) ? c : f;
                        let d = p.nextNode();
                        return !d && l && ((p.currentNode = f), (d = p.nextNode())), d && S(d, !0), d;
                    },
                    focusPrevious(t = {}) {
                        var r;
                        let n = e.current,
                            { from: a, tabbable: s, wrap: l, accept: u } = t,
                            c = a || (0, o.bq)((0, i.TW)(null != (r = n[0]) ? r : void 0)),
                            f = n[n.length - 1].nextElementSibling,
                            p = T(y(n), { tabbable: s, accept: u }, n);
                        p.currentNode = b(c, n) ? c : f;
                        let d = p.previousNode();
                        return !d && l && ((p.currentNode = f), (d = p.previousNode())), d && S(d, !0), d;
                    },
                    focusFirst(t = {}) {
                        let r = e.current,
                            { tabbable: n, accept: o } = t,
                            i = T(y(r), { tabbable: n, accept: o }, r);
                        i.currentNode = r[0].previousElementSibling;
                        let a = i.nextNode();
                        return a && S(a, !0), a;
                    },
                    focusLast(t = {}) {
                        let r = e.current,
                            { tabbable: n, accept: o } = t,
                            i = T(y(r), { tabbable: n, accept: o }, r);
                        i.currentNode = r[r.length - 1].nextElementSibling;
                        let a = i.previousNode();
                        return a && S(a, !0), a;
                    },
                }
            );
        }, []),
        G = (0, p.useMemo)(() => ({ focusManager: H, parentNode: W }), [W, H]);
    return p.createElement(
        d.Provider,
        { value: G },
        p.createElement("span", { "data-focus-scope-start": !0, hidden: !0, ref: K }),
        N,
        p.createElement("span", { "data-focus-scope-end": !0, hidden: !0, ref: V }),
    );
}
function y(e) {
    return e[0].parentElement;
}
function g(e) {
    let t = I.getTreeNode(m);
    for (; t && t.scopeRef !== e; ) {
        if (t.contain) return !1;
        t = t.parent;
    }
    return !0;
}
function b(e, t) {
    return !!e && !!t && t.some((t) => t.contains(e));
}
function w(e, t = null) {
    if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
    for (let { scopeRef: r } of I.traverse(I.getTreeNode(t))) if (r && b(e, r.current)) return !0;
    return !1;
}
function _(e, t) {
    var r;
    let n = null == (r = I.getTreeNode(t)) ? void 0 : r.parent;
    for (; n; ) {
        if (n.scopeRef === e) return !0;
        n = n.parent;
    }
    return !1;
}
function S(e, t = !1) {
    if (null == e || t) {
        if (null != e)
            try {
                e.focus();
            } catch {}
    } else
        try {
            (0, f.l)(e);
        } catch {}
}
function x(e, t = !0) {
    let r = e[0].previousElementSibling,
        n = y(e),
        o = T(n, { tabbable: t }, e);
    o.currentNode = r;
    let i = o.nextNode();
    return t && !i && (((o = T((n = y(e)), { tabbable: !1 }, e)).currentNode = r), (i = o.nextNode())), i;
}
function E(e, t = !0) {
    S(x(e, t));
}
function k(e) {
    let t = I.getTreeNode(m);
    for (; t && t.scopeRef !== e; ) {
        if (t.nodeToRestore) return !1;
        t = t.parent;
    }
    return (null == t ? void 0 : t.scopeRef) === e;
}
function C(e) {
    e.dispatchEvent(new CustomEvent(h, { bubbles: !0, cancelable: !0 })) && S(e);
}
function T(e, t, r) {
    var n, o, a;
    let c = (null == t ? void 0 : t.tabbable) ? s.A : s.t,
        f = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
        p = (0, i.TW)(f),
        d =
            ((n = e || p),
            (o = NodeFilter.SHOW_ELEMENT),
            (a = {
                acceptNode(e) {
                    var n;
                    return (null == t || null == (n = t.from) ? void 0 : n.contains(e)) ||
                        ((null == t ? void 0 : t.tabbable) &&
                            "INPUT" === e.tagName &&
                            "radio" === e.getAttribute("type") &&
                            (!(function (e) {
                                if (e.checked) return !0;
                                let t = [];
                                if (e.form) {
                                    var r, n;
                                    let o =
                                        null == (n = e.form) || null == (r = n.elements) ? void 0 : r.namedItem(e.name);
                                    t = [...(null != o ? o : [])];
                                } else
                                    t = [
                                        ...(0, i.TW)(e).querySelectorAll(
                                            `input[type="radio"][name="${CSS.escape(e.name)}"]`,
                                        ),
                                    ].filter((e) => !e.form);
                                return !!t && !t.some((e) => e.checked);
                            })(e) ||
                                ("INPUT" === d.currentNode.tagName &&
                                    "radio" === d.currentNode.type &&
                                    d.currentNode.name === e.name)))
                        ? NodeFilter.FILTER_REJECT
                        : c(e) && (!r || b(e, r)) && (!(null == t ? void 0 : t.accept) || t.accept(e))
                          ? NodeFilter.FILTER_ACCEPT
                          : NodeFilter.FILTER_SKIP;
                },
            }),
            (0, l.Nf)() ? new u(p, n, o, a) : p.createTreeWalker(n, o, a));
    return (null == t ? void 0 : t.from) && (d.currentNode = t.from), d;
}
function M(e, t = {}) {
    return {
        focusNext(r = {}) {
            let n = e.current;
            if (!n) return null;
            let { from: a, tabbable: s = t.tabbable, wrap: l = t.wrap, accept: u = t.accept } = r,
                c = a || (0, o.bq)((0, i.TW)(n)),
                f = T(n, { tabbable: s, accept: u });
            n.contains(c) && (f.currentNode = c);
            let p = f.nextNode();
            return !p && l && ((f.currentNode = n), (p = f.nextNode())), p && S(p, !0), p;
        },
        focusPrevious(r = t) {
            let n = e.current;
            if (!n) return null;
            let { from: a, tabbable: s = t.tabbable, wrap: l = t.wrap, accept: u = t.accept } = r,
                c = a || (0, o.bq)((0, i.TW)(n)),
                f = T(n, { tabbable: s, accept: u });
            if (n.contains(c)) f.currentNode = c;
            else {
                let e = P(f);
                return e && S(e, !0), null != e ? e : null;
            }
            let p = f.previousNode();
            if (!p && l) {
                f.currentNode = n;
                let e = P(f);
                if (!e) return null;
                p = e;
            }
            return p && S(p, !0), null != p ? p : null;
        },
        focusFirst(r = t) {
            let n = e.current;
            if (!n) return null;
            let { tabbable: o = t.tabbable, accept: i = t.accept } = r,
                a = T(n, { tabbable: o, accept: i }).nextNode();
            return a && S(a, !0), a;
        },
        focusLast(r = t) {
            let n = e.current;
            if (!n) return null;
            let { tabbable: o = t.tabbable, accept: i = t.accept } = r,
                a = P(T(n, { tabbable: o, accept: i }));
            return a && S(a, !0), null != a ? a : null;
        },
    };
}
function P(e) {
    let t, r;
    do (t = e.lastChild()) && (r = t);
    while (t);
    return r;
}
class A {
    get size() {
        return this.fastMap.size;
    }
    getTreeNode(e) {
        return this.fastMap.get(e);
    }
    addTreeNode(e, t, r) {
        let n = this.fastMap.get(null != t ? t : null);
        if (!n) return;
        let o = new O({ scopeRef: e });
        n.addChild(o), (o.parent = n), this.fastMap.set(e, o), r && (o.nodeToRestore = r);
    }
    addNode(e) {
        this.fastMap.set(e.scopeRef, e);
    }
    removeTreeNode(e) {
        if (null === e) return;
        let t = this.fastMap.get(e);
        if (!t) return;
        let r = t.parent;
        for (let e of this.traverse())
            e !== t &&
                t.nodeToRestore &&
                e.nodeToRestore &&
                t.scopeRef &&
                t.scopeRef.current &&
                b(e.nodeToRestore, t.scopeRef.current) &&
                (e.nodeToRestore = t.nodeToRestore);
        let n = t.children;
        r && (r.removeChild(t), n.size > 0 && n.forEach((e) => r && r.addChild(e))), this.fastMap.delete(t.scopeRef);
    }
    *traverse(e = this.root) {
        if ((null != e.scopeRef && (yield e), e.children.size > 0)) for (let t of e.children) yield* this.traverse(t);
    }
    clone() {
        var e, t;
        let r = new A();
        for (let n of this.traverse())
            r.addTreeNode(
                n.scopeRef,
                null != (t = null == (e = n.parent) ? void 0 : e.scopeRef) ? t : null,
                n.nodeToRestore,
            );
        return r;
    }
    constructor() {
        (this.fastMap = new Map()), (this.root = new O({ scopeRef: null })), this.fastMap.set(null, this.root);
    }
}
class O {
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
let I = new A();
