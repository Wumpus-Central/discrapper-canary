"use strict";
n.d(t, { n1: () => g, N$: () => C, C7: () => P });
var r = n(576024),
    i = n(712247),
    a = n(745391),
    o = n(361037),
    s = n(194498),
    l = n(790637);
class u {
    get currentNode() {
        return this._currentNode;
    }
    set currentNode(e) {
        if (!(0, i.sD)(this.root, e))
            throw Error("Cannot set currentNode to a node that is not contained by the root node.");
        let t = [],
            n = e,
            r = e;
        for (this._currentNode = e; n && n !== this.root; )
            if (n.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                let e = n,
                    i = this._doc.createTreeWalker(e, this.whatToShow, { acceptNode: this._acceptNode });
                t.push(i), (i.currentNode = r), this._currentSetFor.add(i), (n = r = e.host);
            } else n = n.parentNode;
        let a = this._doc.createTreeWalker(this.root, this.whatToShow, { acceptNode: this._acceptNode });
        t.push(a), (a.currentNode = r), this._currentSetFor.add(a), (this._walkerStack = t);
    }
    get doc() {
        return this._doc;
    }
    firstChild() {
        let e = this.currentNode,
            t = this.nextNode();
        return (0, i.sD)(e, t) ? (t && (this.currentNode = t), t) : ((this.currentNode = e), null);
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
                let n;
                if (
                    ("function" == typeof this.filter
                        ? (n = this.filter(e))
                        : (null == (t = this.filter) ? void 0 : t.acceptNode) && (n = this.filter.acceptNode(e)),
                    n === NodeFilter.FILTER_ACCEPT)
                )
                    return (this.currentNode = e), e;
                let r = this.nextNode();
                return r && (this.currentNode = r), r;
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
                var n;
                let e;
                if (
                    ("function" == typeof this.filter
                        ? (e = this.filter(t))
                        : (null == (n = this.filter) ? void 0 : n.acceptNode) && (e = this.filter.acceptNode(t)),
                    e === NodeFilter.FILTER_ACCEPT)
                )
                    return t && (this.currentNode = t), t;
                let r = this.lastChild();
                return r && (this.currentNode = r), r;
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
    constructor(e, t, n, r) {
        (this._walkerStack = []),
            (this._currentSetFor = new Set()),
            (this._acceptNode = (e) => {
                if (e.nodeType === Node.ELEMENT_NODE) {
                    var t;
                    let n = e.shadowRoot;
                    if (n) {
                        let e = this._doc.createTreeWalker(n, this.whatToShow, { acceptNode: this._acceptNode });
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
            (this.filter = null != r ? r : null),
            (this.whatToShow = null != n ? n : NodeFilter.SHOW_ALL),
            (this._currentNode = t),
            this._walkerStack.unshift(e.createTreeWalker(t, n, this._acceptNode));
        const i = t.shadowRoot;
        if (i) {
            const e = this._doc.createTreeWalker(i, this.whatToShow, { acceptNode: this._acceptNode });
            this._walkerStack.unshift(e);
        }
    }
}
var c = n(766382),
    d = n(288371),
    f = n(582128);
let p = f.createContext(null),
    h = "react-aria-focus-scope-restore",
    m = null;
function g(e) {
    var t, n, s, l, u, d, g, P, A, M;
    let L,
        O,
        D,
        F,
        { children: N, contain: V, restoreFocus: j, autoFocus: B } = e,
        U = (0, f.useRef)(null),
        K = (0, f.useRef)(null),
        $ = (0, f.useRef)([]),
        { parentNode: z } = (0, f.useContext)(p) || {},
        W = (0, f.useMemo)(() => new R({ scopeRef: $ }), [$]);
    (0, r.N)(() => {
        let e = z || I.root;
        if (I.getTreeNode(e.scopeRef) && m && !w(m, e.scopeRef)) {
            let t = I.getTreeNode(m);
            t && (e = t);
        }
        e.addChild(W), I.addNode(W);
    }, [W, z]),
        (0, r.N)(() => {
            let e = I.getTreeNode($);
            e && (e.contain = !!V);
        }, [V]),
        (0, r.N)(() => {
            var e;
            let t = null == (e = U.current) ? void 0 : e.nextSibling,
                n = [],
                r = (e) => e.stopPropagation();
            for (; t && t !== K.current; ) n.push(t), t.addEventListener(h, r), (t = t.nextSibling);
            return (
                ($.current = n),
                () => {
                    for (let e of n) e.removeEventListener(h, r);
                }
            );
        }, [N]),
        (t = $),
        (n = j),
        (s = V),
        (0, r.N)(() => {
            if (n || s) return;
            let e = t.current,
                r = (0, a.TW)(e ? e[0] : void 0),
                o = (e) => {
                    let n = (0, i.wt)(e);
                    b(n, t.current) ? (m = t) : _(n) || (m = null);
                };
            return (
                r.addEventListener("focusin", o, !1),
                null == e || e.forEach((e) => e.addEventListener("focusin", o, !1)),
                () => {
                    r.removeEventListener("focusin", o, !1),
                        null == e || e.forEach((e) => e.removeEventListener("focusin", o, !1));
                }
            );
        }, [t, n, s]),
        (l = $),
        (u = V),
        (L = (0, f.useRef)(void 0)),
        (O = (0, f.useRef)(void 0)),
        (0, r.N)(() => {
            let e = l.current;
            if (!u) {
                O.current && (cancelAnimationFrame(O.current), (O.current = void 0));
                return;
            }
            let t = (0, a.TW)(e ? e[0] : void 0),
                n = (e) => {
                    if ("Tab" !== e.key || e.altKey || e.ctrlKey || e.metaKey || !y(l) || e.isComposing) return;
                    let n = (0, i.bq)(t),
                        r = l.current;
                    if (!r || !b(n, r)) return;
                    let a = C(v(r), { tabbable: !0 }, r);
                    if (!n) return;
                    a.currentNode = n;
                    let o = e.shiftKey ? a.previousNode() : a.nextNode();
                    o ||
                        ((a.currentNode = e.shiftKey
                            ? r[r.length - 1].nextElementSibling
                            : r[0].previousElementSibling),
                        (o = e.shiftKey ? a.previousNode() : a.nextNode())),
                        e.preventDefault(),
                        o && x(o, !0);
                },
                r = (e) => {
                    (!m || w(m, l)) && b((0, i.wt)(e), l.current)
                        ? ((m = l), (L.current = (0, i.wt)(e)))
                        : y(l) && !_((0, i.wt)(e), l)
                          ? L.current
                              ? L.current.focus()
                              : m && m.current && S(m.current)
                          : y(l) && (L.current = (0, i.wt)(e));
                },
                s = (e) => {
                    O.current && cancelAnimationFrame(O.current),
                        (O.current = requestAnimationFrame(() => {
                            let n = (0, c.ME)(),
                                r = ("virtual" === n || null === n) && (0, o.m0)() && (0, o.H8)(),
                                a = (0, i.bq)(t);
                            if (!r && a && y(l) && !_(a, l)) {
                                m = l;
                                let t = (0, i.wt)(e);
                                if (t && t.isConnected) {
                                    var s;
                                    (L.current = t), null == (s = L.current) || s.focus();
                                } else m.current && S(m.current);
                            }
                        }));
                };
            return (
                t.addEventListener("keydown", n, !1),
                t.addEventListener("focusin", r, !1),
                null == e || e.forEach((e) => e.addEventListener("focusin", r, !1)),
                null == e || e.forEach((e) => e.addEventListener("focusout", s, !1)),
                () => {
                    t.removeEventListener("keydown", n, !1),
                        t.removeEventListener("focusin", r, !1),
                        null == e || e.forEach((e) => e.removeEventListener("focusin", r, !1)),
                        null == e || e.forEach((e) => e.removeEventListener("focusout", s, !1));
                }
            );
        }, [l, u]),
        (0, r.N)(
            () => () => {
                O.current && cancelAnimationFrame(O.current);
            },
            [O],
        ),
        (d = $),
        (g = j),
        (P = V),
        (D = (0, f.useRef)("u" > typeof document ? (0, i.bq)((0, a.TW)(d.current ? d.current[0] : void 0)) : null)),
        (0, r.N)(() => {
            let e = d.current,
                t = (0, a.TW)(e ? e[0] : void 0);
            if (!g || P) return;
            let n = () => {
                (!m || w(m, d)) && b((0, i.bq)(t), d.current) && (m = d);
            };
            return (
                t.addEventListener("focusin", n, !1),
                null == e || e.forEach((e) => e.addEventListener("focusin", n, !1)),
                () => {
                    t.removeEventListener("focusin", n, !1),
                        null == e || e.forEach((e) => e.removeEventListener("focusin", n, !1));
                }
            );
        }, [d, P]),
        (0, r.N)(() => {
            let e = (0, a.TW)(d.current ? d.current[0] : void 0);
            if (!g) return;
            let t = (t) => {
                if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !y(d) || t.isComposing) return;
                let n = e.activeElement;
                if (!_(n, d) || !k(d)) return;
                let r = I.getTreeNode(d);
                if (!r) return;
                let i = r.nodeToRestore,
                    a = C(e.body, { tabbable: !0 });
                a.currentNode = n;
                let o = t.shiftKey ? a.previousNode() : a.nextNode();
                if (
                    ((i && i.isConnected && i !== e.body) || ((i = void 0), (r.nodeToRestore = void 0)),
                    (!o || !_(o, d)) && i)
                ) {
                    a.currentNode = i;
                    do o = t.shiftKey ? a.previousNode() : a.nextNode();
                    while (_(o, d));
                    (t.preventDefault(), t.stopPropagation(), o) ? x(o, !0) : _(i) ? x(i, !0) : n.blur();
                }
            };
            return (
                P || e.addEventListener("keydown", t, !0),
                () => {
                    P || e.removeEventListener("keydown", t, !0);
                }
            );
        }, [d, g, P]),
        (0, r.N)(() => {
            var e;
            let t = (0, a.TW)(d.current ? d.current[0] : void 0);
            if (!g) return;
            let n = I.getTreeNode(d);
            if (n)
                return (
                    (n.nodeToRestore = null != (e = D.current) ? e : void 0),
                    () => {
                        let e = I.getTreeNode(d);
                        if (!e) return;
                        let n = e.nodeToRestore,
                            r = (0, i.bq)(t);
                        if (g && n && ((r && _(r, d)) || (r === t.body && k(d)))) {
                            let e = I.clone();
                            requestAnimationFrame(() => {
                                if (t.activeElement === t.body) {
                                    let t = e.getTreeNode(d);
                                    for (; t; ) {
                                        if (t.nodeToRestore && t.nodeToRestore.isConnected)
                                            return void T(t.nodeToRestore);
                                        t = t.parent;
                                    }
                                    for (t = e.getTreeNode(d); t; ) {
                                        if (t.scopeRef && t.scopeRef.current && I.getTreeNode(t.scopeRef))
                                            return void T(E(t.scopeRef.current, !0));
                                        t = t.parent;
                                    }
                                }
                            });
                        }
                    }
                );
        }, [d, g]),
        (A = $),
        (M = B),
        (F = f.useRef(M)),
        (0, f.useEffect)(() => {
            if (F.current) {
                m = A;
                let e = (0, a.TW)(A.current ? A.current[0] : void 0);
                !b((0, i.bq)(e), m.current) && A.current && S(A.current);
            }
            F.current = !1;
        }, [A]),
        (0, f.useEffect)(() => {
            let e = (0, i.bq)((0, a.TW)($.current ? $.current[0] : void 0)),
                t = null;
            if (b(e, $.current)) {
                for (let n of I.traverse()) n.scopeRef && b(e, n.scopeRef.current) && (t = n);
                t === I.getTreeNode($) && (m = t.scopeRef);
            }
        }, [$]),
        (0, r.N)(
            () => () => {
                var e, t, n;
                let r =
                    null != (n = null == (t = I.getTreeNode($)) || null == (e = t.parent) ? void 0 : e.scopeRef)
                        ? n
                        : null;
                ($ === m || w($, m)) && (!r || I.getTreeNode(r)) && (m = r), I.removeTreeNode($);
            },
            [$],
        );
    let G = (0, f.useMemo)(() => {
            var e;
            return (
                (e = $),
                {
                    focusNext(t = {}) {
                        var n;
                        let r = e.current,
                            { from: o, tabbable: s, wrap: l, accept: u } = t,
                            c = o || (0, i.bq)((0, a.TW)(null != (n = r[0]) ? n : void 0)),
                            d = r[0].previousElementSibling,
                            f = C(v(r), { tabbable: s, accept: u }, r);
                        f.currentNode = b(c, r) ? c : d;
                        let p = f.nextNode();
                        return !p && l && ((f.currentNode = d), (p = f.nextNode())), p && x(p, !0), p;
                    },
                    focusPrevious(t = {}) {
                        var n;
                        let r = e.current,
                            { from: o, tabbable: s, wrap: l, accept: u } = t,
                            c = o || (0, i.bq)((0, a.TW)(null != (n = r[0]) ? n : void 0)),
                            d = r[r.length - 1].nextElementSibling,
                            f = C(v(r), { tabbable: s, accept: u }, r);
                        f.currentNode = b(c, r) ? c : d;
                        let p = f.previousNode();
                        return !p && l && ((f.currentNode = d), (p = f.previousNode())), p && x(p, !0), p;
                    },
                    focusFirst(t = {}) {
                        let n = e.current,
                            { tabbable: r, accept: i } = t,
                            a = C(v(n), { tabbable: r, accept: i }, n);
                        a.currentNode = n[0].previousElementSibling;
                        let o = a.nextNode();
                        return o && x(o, !0), o;
                    },
                    focusLast(t = {}) {
                        let n = e.current,
                            { tabbable: r, accept: i } = t,
                            a = C(v(n), { tabbable: r, accept: i }, n);
                        a.currentNode = n[n.length - 1].nextElementSibling;
                        let o = a.previousNode();
                        return o && x(o, !0), o;
                    },
                }
            );
        }, []),
        H = (0, f.useMemo)(() => ({ focusManager: G, parentNode: W }), [W, G]);
    return f.createElement(
        p.Provider,
        { value: H },
        f.createElement("span", { "data-focus-scope-start": !0, hidden: !0, ref: U }),
        N,
        f.createElement("span", { "data-focus-scope-end": !0, hidden: !0, ref: K }),
    );
}
function v(e) {
    return e[0].parentElement;
}
function y(e) {
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
function _(e, t = null) {
    if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
    for (let { scopeRef: n } of I.traverse(I.getTreeNode(t))) if (n && b(e, n.current)) return !0;
    return !1;
}
function w(e, t) {
    var n;
    let r = null == (n = I.getTreeNode(t)) ? void 0 : n.parent;
    for (; r; ) {
        if (r.scopeRef === e) return !0;
        r = r.parent;
    }
    return !1;
}
function x(e, t = !1) {
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
function E(e, t = !0) {
    let n = e[0].previousElementSibling,
        r = v(e),
        i = C(r, { tabbable: t }, e);
    i.currentNode = n;
    let a = i.nextNode();
    return t && !a && (((i = C((r = v(e)), { tabbable: !1 }, e)).currentNode = n), (a = i.nextNode())), a;
}
function S(e, t = !0) {
    x(E(e, t));
}
function k(e) {
    let t = I.getTreeNode(m);
    for (; t && t.scopeRef !== e; ) {
        if (t.nodeToRestore) return !1;
        t = t.parent;
    }
    return (null == t ? void 0 : t.scopeRef) === e;
}
function T(e) {
    e.dispatchEvent(new CustomEvent(h, { bubbles: !0, cancelable: !0 })) && x(e);
}
function C(e, t, n) {
    var r, i, o;
    let c = (null == t ? void 0 : t.tabbable) ? s.A : s.t,
        d = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
        f = (0, a.TW)(d),
        p =
            ((r = e || f),
            (i = NodeFilter.SHOW_ELEMENT),
            (o = {
                acceptNode(e) {
                    var r;
                    return (null == t || null == (r = t.from) ? void 0 : r.contains(e)) ||
                        ((null == t ? void 0 : t.tabbable) &&
                            "INPUT" === e.tagName &&
                            "radio" === e.getAttribute("type") &&
                            (!(function (e) {
                                if (e.checked) return !0;
                                let t = [];
                                if (e.form) {
                                    var n, r;
                                    let i =
                                        null == (r = e.form) || null == (n = r.elements) ? void 0 : n.namedItem(e.name);
                                    t = [...(null != i ? i : [])];
                                } else
                                    t = [
                                        ...(0, a.TW)(e).querySelectorAll(
                                            `input[type="radio"][name="${CSS.escape(e.name)}"]`,
                                        ),
                                    ].filter((e) => !e.form);
                                return !!t && !t.some((e) => e.checked);
                            })(e) ||
                                ("INPUT" === p.currentNode.tagName &&
                                    "radio" === p.currentNode.type &&
                                    p.currentNode.name === e.name)))
                        ? NodeFilter.FILTER_REJECT
                        : c(e) && (!n || b(e, n)) && (!(null == t ? void 0 : t.accept) || t.accept(e))
                          ? NodeFilter.FILTER_ACCEPT
                          : NodeFilter.FILTER_SKIP;
                },
            }),
            (0, l.Nf)() ? new u(f, r, i, o) : f.createTreeWalker(r, i, o));
    return (null == t ? void 0 : t.from) && (p.currentNode = t.from), p;
}
function P(e, t = {}) {
    return {
        focusNext(n = {}) {
            let r = e.current;
            if (!r) return null;
            let { from: o, tabbable: s = t.tabbable, wrap: l = t.wrap, accept: u = t.accept } = n,
                c = o || (0, i.bq)((0, a.TW)(r)),
                d = C(r, { tabbable: s, accept: u });
            r.contains(c) && (d.currentNode = c);
            let f = d.nextNode();
            return !f && l && ((d.currentNode = r), (f = d.nextNode())), f && x(f, !0), f;
        },
        focusPrevious(n = t) {
            let r = e.current;
            if (!r) return null;
            let { from: o, tabbable: s = t.tabbable, wrap: l = t.wrap, accept: u = t.accept } = n,
                c = o || (0, i.bq)((0, a.TW)(r)),
                d = C(r, { tabbable: s, accept: u });
            if (r.contains(c)) d.currentNode = c;
            else {
                let e = A(d);
                return e && x(e, !0), null != e ? e : null;
            }
            let f = d.previousNode();
            if (!f && l) {
                d.currentNode = r;
                let e = A(d);
                if (!e) return null;
                f = e;
            }
            return f && x(f, !0), null != f ? f : null;
        },
        focusFirst(n = t) {
            let r = e.current;
            if (!r) return null;
            let { tabbable: i = t.tabbable, accept: a = t.accept } = n,
                o = C(r, { tabbable: i, accept: a }).nextNode();
            return o && x(o, !0), o;
        },
        focusLast(n = t) {
            let r = e.current;
            if (!r) return null;
            let { tabbable: i = t.tabbable, accept: a = t.accept } = n,
                o = A(C(r, { tabbable: i, accept: a }));
            return o && x(o, !0), null != o ? o : null;
        },
    };
}
function A(e) {
    let t, n;
    do (t = e.lastChild()) && (n = t);
    while (t);
    return n;
}
class M {
    get size() {
        return this.fastMap.size;
    }
    getTreeNode(e) {
        return this.fastMap.get(e);
    }
    addTreeNode(e, t, n) {
        let r = this.fastMap.get(null != t ? t : null);
        if (!r) return;
        let i = new R({ scopeRef: e });
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
                b(e.nodeToRestore, t.scopeRef.current) &&
                (e.nodeToRestore = t.nodeToRestore);
        let r = t.children;
        n && (n.removeChild(t), r.size > 0 && r.forEach((e) => n && n.addChild(e))), this.fastMap.delete(t.scopeRef);
    }
    *traverse(e = this.root) {
        if ((null != e.scopeRef && (yield e), e.children.size > 0)) for (let t of e.children) yield* this.traverse(t);
    }
    clone() {
        var e, t;
        let n = new M();
        for (let r of this.traverse())
            n.addTreeNode(
                r.scopeRef,
                null != (t = null == (e = r.parent) ? void 0 : e.scopeRef) ? t : null,
                r.nodeToRestore,
            );
        return n;
    }
    constructor() {
        (this.fastMap = new Map()), (this.root = new R({ scopeRef: null })), this.fastMap.set(null, this.root);
    }
}
class R {
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
let I = new M();
