"use strict";
r.d(t, { n1: () => _, N$: () => D, C7: () => O });
var n = r(3388),
    a = r(241827),
    s = r(297987),
    i = r(408713),
    o = r(419711),
    l = r(790637);
class u {
    get currentNode() {
        return this._currentNode;
    }
    set currentNode(e) {
        if (!(0, a.sD)(this.root, e))
            throw Error("Cannot set currentNode to a node that is not contained by the root node.");
        let t = [],
            r = e,
            n = e;
        for (this._currentNode = e; r && r !== this.root; )
            if (r.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                let e = r,
                    a = this._doc.createTreeWalker(e, this.whatToShow, { acceptNode: this._acceptNode });
                t.push(a), (a.currentNode = n), this._currentSetFor.add(a), (r = n = e.host);
            } else r = r.parentNode;
        let s = this._doc.createTreeWalker(this.root, this.whatToShow, { acceptNode: this._acceptNode });
        t.push(s), (s.currentNode = n), this._currentSetFor.add(s), (this._walkerStack = t);
    }
    get doc() {
        return this._doc;
    }
    firstChild() {
        let e = this.currentNode,
            t = this.nextNode();
        return (0, a.sD)(e, t) ? (t && (this.currentNode = t), t) : ((this.currentNode = e), null);
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
        const a = t.shadowRoot;
        if (a) {
            const e = this._doc.createTreeWalker(a, this.whatToShow, { acceptNode: this._acceptNode });
            this._walkerStack.unshift(e);
        }
    }
}
var c = r(885714),
    d = r(805447),
    f = r(64700);
let p = f.createContext(null),
    h = "react-aria-focus-scope-restore",
    m = null;
function _(e) {
    var t, r, o, l, u, d, _, O, A, M;
    let N,
        L,
        I,
        P,
        { children: F, contain: B, restoreFocus: Y, autoFocus: U } = e,
        j = (0, f.useRef)(null),
        V = (0, f.useRef)(null),
        H = (0, f.useRef)([]),
        { parentNode: G } = (0, f.useContext)(p) || {},
        z = (0, f.useMemo)(() => new R({ scopeRef: H }), [H]);
    (0, n.N)(() => {
        let e = G || k.root;
        if (k.getTreeNode(e.scopeRef) && m && !E(m, e.scopeRef)) {
            let t = k.getTreeNode(m);
            t && (e = t);
        }
        e.addChild(z), k.addNode(z);
    }, [z, G]),
        (0, n.N)(() => {
            let e = k.getTreeNode(H);
            e && (e.contain = !!B);
        }, [B]),
        (0, n.N)(() => {
            var e;
            let t = null == (e = j.current) ? void 0 : e.nextSibling,
                r = [],
                n = (e) => e.stopPropagation();
            for (; t && t !== V.current; ) r.push(t), t.addEventListener(h, n), (t = t.nextSibling);
            return (
                (H.current = r),
                () => {
                    for (let e of r) e.removeEventListener(h, n);
                }
            );
        }, [F]),
        (t = H),
        (r = Y),
        (o = B),
        (0, n.N)(() => {
            if (r || o) return;
            let e = t.current,
                n = (0, s.TW)(e ? e[0] : void 0),
                i = (e) => {
                    let r = (0, a.wt)(e);
                    b(r, t.current) ? (m = t) : y(r) || (m = null);
                };
            return (
                n.addEventListener("focusin", i, !1),
                null == e || e.forEach((e) => e.addEventListener("focusin", i, !1)),
                () => {
                    n.removeEventListener("focusin", i, !1),
                        null == e || e.forEach((e) => e.removeEventListener("focusin", i, !1));
                }
            );
        }, [t, r, o]),
        (l = H),
        (u = B),
        (N = (0, f.useRef)(void 0)),
        (L = (0, f.useRef)(void 0)),
        (0, n.N)(() => {
            let e = l.current;
            if (!u) {
                L.current && (cancelAnimationFrame(L.current), (L.current = void 0));
                return;
            }
            let t = (0, s.TW)(e ? e[0] : void 0),
                r = (e) => {
                    if ("Tab" !== e.key || e.altKey || e.ctrlKey || e.metaKey || !v(l) || e.isComposing) return;
                    let r = (0, a.bq)(t),
                        n = l.current;
                    if (!n || !b(r, n)) return;
                    let s = D(g(n), { tabbable: !0 }, n);
                    if (!r) return;
                    s.currentNode = r;
                    let i = e.shiftKey ? s.previousNode() : s.nextNode();
                    i ||
                        ((s.currentNode = e.shiftKey
                            ? n[n.length - 1].nextElementSibling
                            : n[0].previousElementSibling),
                        (i = e.shiftKey ? s.previousNode() : s.nextNode())),
                        e.preventDefault(),
                        i && S(i, !0);
                },
                n = (e) => {
                    (!m || E(m, l)) && b((0, a.wt)(e), l.current)
                        ? ((m = l), (N.current = (0, a.wt)(e)))
                        : v(l) && !y((0, a.wt)(e), l)
                          ? N.current
                              ? N.current.focus()
                              : m && m.current && x(m.current)
                          : v(l) && (N.current = (0, a.wt)(e));
                },
                o = (e) => {
                    L.current && cancelAnimationFrame(L.current),
                        (L.current = requestAnimationFrame(() => {
                            let r = (0, c.ME)(),
                                n = ("virtual" === r || null === r) && (0, i.m0)() && (0, i.H8)(),
                                s = (0, a.bq)(t);
                            if (!n && s && v(l) && !y(s, l)) {
                                m = l;
                                let t = (0, a.wt)(e);
                                if (t && t.isConnected) {
                                    var o;
                                    (N.current = t), null == (o = N.current) || o.focus();
                                } else m.current && x(m.current);
                            }
                        }));
                };
            return (
                t.addEventListener("keydown", r, !1),
                t.addEventListener("focusin", n, !1),
                null == e || e.forEach((e) => e.addEventListener("focusin", n, !1)),
                null == e || e.forEach((e) => e.addEventListener("focusout", o, !1)),
                () => {
                    t.removeEventListener("keydown", r, !1),
                        t.removeEventListener("focusin", n, !1),
                        null == e || e.forEach((e) => e.removeEventListener("focusin", n, !1)),
                        null == e || e.forEach((e) => e.removeEventListener("focusout", o, !1));
                }
            );
        }, [l, u]),
        (0, n.N)(
            () => () => {
                L.current && cancelAnimationFrame(L.current);
            },
            [L],
        ),
        (d = H),
        (_ = Y),
        (O = B),
        (I = (0, f.useRef)("u" > typeof document ? (0, a.bq)((0, s.TW)(d.current ? d.current[0] : void 0)) : null)),
        (0, n.N)(() => {
            let e = d.current,
                t = (0, s.TW)(e ? e[0] : void 0);
            if (!_ || O) return;
            let r = () => {
                (!m || E(m, d)) && b((0, a.bq)(t), d.current) && (m = d);
            };
            return (
                t.addEventListener("focusin", r, !1),
                null == e || e.forEach((e) => e.addEventListener("focusin", r, !1)),
                () => {
                    t.removeEventListener("focusin", r, !1),
                        null == e || e.forEach((e) => e.removeEventListener("focusin", r, !1));
                }
            );
        }, [d, O]),
        (0, n.N)(() => {
            let e = (0, s.TW)(d.current ? d.current[0] : void 0);
            if (!_) return;
            let t = (t) => {
                if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !v(d) || t.isComposing) return;
                let r = e.activeElement;
                if (!y(r, d) || !w(d)) return;
                let n = k.getTreeNode(d);
                if (!n) return;
                let a = n.nodeToRestore,
                    s = D(e.body, { tabbable: !0 });
                s.currentNode = r;
                let i = t.shiftKey ? s.previousNode() : s.nextNode();
                if (
                    ((a && a.isConnected && a !== e.body) || ((a = void 0), (n.nodeToRestore = void 0)),
                    (!i || !y(i, d)) && a)
                ) {
                    s.currentNode = a;
                    do i = t.shiftKey ? s.previousNode() : s.nextNode();
                    while (y(i, d));
                    (t.preventDefault(), t.stopPropagation(), i) ? S(i, !0) : y(a) ? S(a, !0) : r.blur();
                }
            };
            return (
                O || e.addEventListener("keydown", t, !0),
                () => {
                    O || e.removeEventListener("keydown", t, !0);
                }
            );
        }, [d, _, O]),
        (0, n.N)(() => {
            var e;
            let t = (0, s.TW)(d.current ? d.current[0] : void 0);
            if (!_) return;
            let r = k.getTreeNode(d);
            if (r)
                return (
                    (r.nodeToRestore = null != (e = I.current) ? e : void 0),
                    () => {
                        let e = k.getTreeNode(d);
                        if (!e) return;
                        let r = e.nodeToRestore,
                            n = (0, a.bq)(t);
                        if (_ && r && ((n && y(n, d)) || (n === t.body && w(d)))) {
                            let e = k.clone();
                            requestAnimationFrame(() => {
                                if (t.activeElement === t.body) {
                                    let t = e.getTreeNode(d);
                                    for (; t; ) {
                                        if (t.nodeToRestore && t.nodeToRestore.isConnected)
                                            return void C(t.nodeToRestore);
                                        t = t.parent;
                                    }
                                    for (t = e.getTreeNode(d); t; ) {
                                        if (t.scopeRef && t.scopeRef.current && k.getTreeNode(t.scopeRef))
                                            return void C(T(t.scopeRef.current, !0));
                                        t = t.parent;
                                    }
                                }
                            });
                        }
                    }
                );
        }, [d, _]),
        (A = H),
        (M = U),
        (P = f.useRef(M)),
        (0, f.useEffect)(() => {
            if (P.current) {
                m = A;
                let e = (0, s.TW)(A.current ? A.current[0] : void 0);
                !b((0, a.bq)(e), m.current) && A.current && x(A.current);
            }
            P.current = !1;
        }, [A]),
        (0, f.useEffect)(() => {
            let e = (0, a.bq)((0, s.TW)(H.current ? H.current[0] : void 0)),
                t = null;
            if (b(e, H.current)) {
                for (let r of k.traverse()) r.scopeRef && b(e, r.scopeRef.current) && (t = r);
                t === k.getTreeNode(H) && (m = t.scopeRef);
            }
        }, [H]),
        (0, n.N)(
            () => () => {
                var e, t, r;
                let n =
                    null != (r = null == (t = k.getTreeNode(H)) || null == (e = t.parent) ? void 0 : e.scopeRef)
                        ? r
                        : null;
                (H === m || E(H, m)) && (!n || k.getTreeNode(n)) && (m = n), k.removeTreeNode(H);
            },
            [H],
        );
    let W = (0, f.useMemo)(() => {
            var e;
            return (
                (e = H),
                {
                    focusNext(t = {}) {
                        var r;
                        let n = e.current,
                            { from: i, tabbable: o, wrap: l, accept: u } = t,
                            c = i || (0, a.bq)((0, s.TW)(null != (r = n[0]) ? r : void 0)),
                            d = n[0].previousElementSibling,
                            f = D(g(n), { tabbable: o, accept: u }, n);
                        f.currentNode = b(c, n) ? c : d;
                        let p = f.nextNode();
                        return !p && l && ((f.currentNode = d), (p = f.nextNode())), p && S(p, !0), p;
                    },
                    focusPrevious(t = {}) {
                        var r;
                        let n = e.current,
                            { from: i, tabbable: o, wrap: l, accept: u } = t,
                            c = i || (0, a.bq)((0, s.TW)(null != (r = n[0]) ? r : void 0)),
                            d = n[n.length - 1].nextElementSibling,
                            f = D(g(n), { tabbable: o, accept: u }, n);
                        f.currentNode = b(c, n) ? c : d;
                        let p = f.previousNode();
                        return !p && l && ((f.currentNode = d), (p = f.previousNode())), p && S(p, !0), p;
                    },
                    focusFirst(t = {}) {
                        let r = e.current,
                            { tabbable: n, accept: a } = t,
                            s = D(g(r), { tabbable: n, accept: a }, r);
                        s.currentNode = r[0].previousElementSibling;
                        let i = s.nextNode();
                        return i && S(i, !0), i;
                    },
                    focusLast(t = {}) {
                        let r = e.current,
                            { tabbable: n, accept: a } = t,
                            s = D(g(r), { tabbable: n, accept: a }, r);
                        s.currentNode = r[r.length - 1].nextElementSibling;
                        let i = s.previousNode();
                        return i && S(i, !0), i;
                    },
                }
            );
        }, []),
        q = (0, f.useMemo)(() => ({ focusManager: W, parentNode: z }), [z, W]);
    return f.createElement(
        p.Provider,
        { value: q },
        f.createElement("span", { "data-focus-scope-start": !0, hidden: !0, ref: j }),
        F,
        f.createElement("span", { "data-focus-scope-end": !0, hidden: !0, ref: V }),
    );
}
function g(e) {
    return e[0].parentElement;
}
function v(e) {
    let t = k.getTreeNode(m);
    for (; t && t.scopeRef !== e; ) {
        if (t.contain) return !1;
        t = t.parent;
    }
    return !0;
}
function b(e, t) {
    return !!e && !!t && t.some((t) => t.contains(e));
}
function y(e, t = null) {
    if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
    for (let { scopeRef: r } of k.traverse(k.getTreeNode(t))) if (r && b(e, r.current)) return !0;
    return !1;
}
function E(e, t) {
    var r;
    let n = null == (r = k.getTreeNode(t)) ? void 0 : r.parent;
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
            (0, d.l)(e);
        } catch {}
}
function T(e, t = !0) {
    let r = e[0].previousElementSibling,
        n = g(e),
        a = D(n, { tabbable: t }, e);
    a.currentNode = r;
    let s = a.nextNode();
    return t && !s && (((a = D((n = g(e)), { tabbable: !1 }, e)).currentNode = r), (s = a.nextNode())), s;
}
function x(e, t = !0) {
    S(T(e, t));
}
function w(e) {
    let t = k.getTreeNode(m);
    for (; t && t.scopeRef !== e; ) {
        if (t.nodeToRestore) return !1;
        t = t.parent;
    }
    return (null == t ? void 0 : t.scopeRef) === e;
}
function C(e) {
    e.dispatchEvent(new CustomEvent(h, { bubbles: !0, cancelable: !0 })) && S(e);
}
function D(e, t, r) {
    var n, a, i;
    let c = (null == t ? void 0 : t.tabbable) ? o.A : o.t,
        d = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
        f = (0, s.TW)(d),
        p =
            ((n = e || f),
            (a = NodeFilter.SHOW_ELEMENT),
            (i = {
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
                                    let a =
                                        null == (n = e.form) || null == (r = n.elements) ? void 0 : r.namedItem(e.name);
                                    t = [...(null != a ? a : [])];
                                } else
                                    t = [
                                        ...(0, s.TW)(e).querySelectorAll(
                                            `input[type="radio"][name="${CSS.escape(e.name)}"]`,
                                        ),
                                    ].filter((e) => !e.form);
                                return !!t && !t.some((e) => e.checked);
                            })(e) ||
                                ("INPUT" === p.currentNode.tagName &&
                                    "radio" === p.currentNode.type &&
                                    p.currentNode.name === e.name)))
                        ? NodeFilter.FILTER_REJECT
                        : c(e) && (!r || b(e, r)) && (!(null == t ? void 0 : t.accept) || t.accept(e))
                          ? NodeFilter.FILTER_ACCEPT
                          : NodeFilter.FILTER_SKIP;
                },
            }),
            (0, l.Nf)() ? new u(f, n, a, i) : f.createTreeWalker(n, a, i));
    return (null == t ? void 0 : t.from) && (p.currentNode = t.from), p;
}
function O(e, t = {}) {
    return {
        focusNext(r = {}) {
            let n = e.current;
            if (!n) return null;
            let { from: i, tabbable: o = t.tabbable, wrap: l = t.wrap, accept: u = t.accept } = r,
                c = i || (0, a.bq)((0, s.TW)(n)),
                d = D(n, { tabbable: o, accept: u });
            n.contains(c) && (d.currentNode = c);
            let f = d.nextNode();
            return !f && l && ((d.currentNode = n), (f = d.nextNode())), f && S(f, !0), f;
        },
        focusPrevious(r = t) {
            let n = e.current;
            if (!n) return null;
            let { from: i, tabbable: o = t.tabbable, wrap: l = t.wrap, accept: u = t.accept } = r,
                c = i || (0, a.bq)((0, s.TW)(n)),
                d = D(n, { tabbable: o, accept: u });
            if (n.contains(c)) d.currentNode = c;
            else {
                let e = A(d);
                return e && S(e, !0), null != e ? e : null;
            }
            let f = d.previousNode();
            if (!f && l) {
                d.currentNode = n;
                let e = A(d);
                if (!e) return null;
                f = e;
            }
            return f && S(f, !0), null != f ? f : null;
        },
        focusFirst(r = t) {
            let n = e.current;
            if (!n) return null;
            let { tabbable: a = t.tabbable, accept: s = t.accept } = r,
                i = D(n, { tabbable: a, accept: s }).nextNode();
            return i && S(i, !0), i;
        },
        focusLast(r = t) {
            let n = e.current;
            if (!n) return null;
            let { tabbable: a = t.tabbable, accept: s = t.accept } = r,
                i = A(D(n, { tabbable: a, accept: s }));
            return i && S(i, !0), null != i ? i : null;
        },
    };
}
function A(e) {
    let t, r;
    do (t = e.lastChild()) && (r = t);
    while (t);
    return r;
}
class M {
    get size() {
        return this.fastMap.size;
    }
    getTreeNode(e) {
        return this.fastMap.get(e);
    }
    addTreeNode(e, t, r) {
        let n = this.fastMap.get(null != t ? t : null);
        if (!n) return;
        let a = new R({ scopeRef: e });
        n.addChild(a), (a.parent = n), this.fastMap.set(e, a), r && (a.nodeToRestore = r);
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
        let r = new M();
        for (let n of this.traverse())
            r.addTreeNode(
                n.scopeRef,
                null != (t = null == (e = n.parent) ? void 0 : e.scopeRef) ? t : null,
                n.nodeToRestore,
            );
        return r;
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
let k = new M();
