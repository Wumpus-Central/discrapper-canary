"use strict";
r.d(t, { n1: () => v, N$: () => T, C7: () => M });
var n = r(256062),
    i = r(77716);
class o {
    constructor(e, t, r, n) {
        (this._walkerStack = []),
            (this._currentSetFor = new Set()),
            (this._acceptNode = (e) => {
                if (e.nodeType === Node.ELEMENT_NODE) {
                    let t = e.shadowRoot;
                    if (t) {
                        let e = this._doc.createTreeWalker(t, this.whatToShow, { acceptNode: this._acceptNode });
                        return this._walkerStack.unshift(e), NodeFilter.FILTER_ACCEPT;
                    }
                    if ("function" == typeof this.filter) return this.filter(e);
                    if (this.filter?.acceptNode) return this.filter.acceptNode(e);
                    else if (null === this.filter) return NodeFilter.FILTER_ACCEPT;
                }
                return NodeFilter.FILTER_SKIP;
            }),
            (this._doc = e),
            (this.root = t),
            (this.filter = n ?? null),
            (this.whatToShow = r ?? NodeFilter.SHOW_ALL),
            (this._currentNode = t),
            this._walkerStack.unshift(e.createTreeWalker(t, r, this._acceptNode));
        const i = t.shadowRoot;
        if (i) {
            const e = this._doc.createTreeWalker(i, this.whatToShow, { acceptNode: this._acceptNode });
            this._walkerStack.unshift(e);
        }
    }
    get currentNode() {
        return this._currentNode;
    }
    set currentNode(e) {
        if (!(0, n.sD)(this.root, e))
            throw Error("Cannot set currentNode to a node that is not contained by the root node.");
        let t = [],
            r = e,
            i = e;
        for (this._currentNode = e; r && r !== this.root; )
            if (r.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                let e = r,
                    n = this._doc.createTreeWalker(e, this.whatToShow, { acceptNode: this._acceptNode });
                t.push(n), (n.currentNode = i), this._currentSetFor.add(n), (r = i = e.host);
            } else r = r.parentNode;
        let o = this._doc.createTreeWalker(this.root, this.whatToShow, { acceptNode: this._acceptNode });
        t.push(o), (o.currentNode = i), this._currentSetFor.add(o), (this._walkerStack = t);
    }
    get doc() {
        return this._doc;
    }
    firstChild() {
        let e = this.currentNode,
            t = this.nextNode();
        return (0, n.sD)(e, t) ? (t && (this.currentNode = t), t) : ((this.currentNode = e), null);
    }
    lastChild() {
        let e = this._walkerStack[0].lastChild();
        return e && (this.currentNode = e), e;
    }
    nextNode() {
        let e = this._walkerStack[0].nextNode();
        if (e) {
            if (e.shadowRoot) {
                let t;
                if (
                    ("function" == typeof this.filter
                        ? (t = this.filter(e))
                        : this.filter?.acceptNode && (t = this.filter.acceptNode(e)),
                    t === NodeFilter.FILTER_ACCEPT)
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
                let e;
                if (
                    ("function" == typeof this.filter
                        ? (e = this.filter(t))
                        : this.filter?.acceptNode && (e = this.filter.acceptNode(t)),
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
}
var a = r(64480),
    s = r(225801),
    l = r(143761),
    u = r(644255),
    c = r(979347),
    f = r(361854),
    d = r(582128);
let p = d.createContext(null),
    h = "react-aria-focus-scope-restore",
    m = null;
function v(e) {
    var t, r, i, o, a, c, v, M, P, A;
    let D,
        R,
        L,
        F,
        { children: N, contain: j, restoreFocus: B, autoFocus: K } = e,
        $ = (0, d.useRef)(null),
        V = (0, d.useRef)(null),
        U = (0, d.useRef)([]),
        { parentNode: z } = (0, d.useContext)(p) || {},
        W = (0, d.useMemo)(() => new I({ scopeRef: U }), [U]);
    (0, f.N)(() => {
        let e = z || O.root;
        if (O.getTreeNode(e.scopeRef) && m && !_(m, e.scopeRef)) {
            let t = O.getTreeNode(m);
            t && (e = t);
        }
        e.addChild(W), O.addNode(W);
    }, [W, z]),
        (0, f.N)(() => {
            let e = O.getTreeNode(U);
            e && (e.contain = !!j);
        }, [j]),
        (0, f.N)(() => {
            let e = $.current?.nextSibling,
                t = [],
                r = (e) => e.stopPropagation();
            for (; e && e !== V.current; ) t.push(e), e.addEventListener(h, r), (e = e.nextSibling);
            return (
                (U.current = t),
                () => {
                    for (let e of t) e.removeEventListener(h, r);
                }
            );
        }, [N]),
        (t = U),
        (r = B),
        (i = j),
        (0, f.N)(() => {
            if (r || i) return;
            let e = t.current,
                o = (0, l.TW)(e ? e[0] : void 0),
                a = (e) => {
                    let r = (0, n.wt)(e);
                    b(r, t.current) ? (m = t) : w(r) || (m = null);
                };
            return (
                o.addEventListener("focusin", a, !1),
                e?.forEach((e) => e.addEventListener("focusin", a, !1)),
                () => {
                    o.removeEventListener("focusin", a, !1), e?.forEach((e) => e.removeEventListener("focusin", a, !1));
                }
            );
        }, [t, r, i]),
        (o = U),
        (a = j),
        (D = (0, d.useRef)(void 0)),
        (R = (0, d.useRef)(void 0)),
        (0, f.N)(() => {
            let e = o.current;
            if (!a) {
                R.current && (cancelAnimationFrame(R.current), (R.current = void 0));
                return;
            }
            let t = (0, l.TW)(e ? e[0] : void 0),
                r = (e) => {
                    if ("Tab" !== e.key || e.altKey || e.ctrlKey || e.metaKey || !g(o) || e.isComposing) return;
                    let r = (0, n.bq)(t),
                        i = o.current;
                    if (!i || !b(r, i)) return;
                    let a = T(y(i), { tabbable: !0 }, i);
                    if (!r) return;
                    a.currentNode = r;
                    let s = e.shiftKey ? a.previousNode() : a.nextNode();
                    s ||
                        ((a.currentNode = e.shiftKey
                            ? i[i.length - 1].nextElementSibling
                            : i[0].previousElementSibling),
                        (s = e.shiftKey ? a.previousNode() : a.nextNode())),
                        e.preventDefault(),
                        s && (S(s, !0), s instanceof (0, l.mD)(s).HTMLInputElement && s.select());
                },
                i = (e) => {
                    (!m || _(m, o)) && b((0, n.wt)(e), o.current)
                        ? ((m = o), (D.current = (0, n.wt)(e)))
                        : g(o) && !w((0, n.wt)(e), o)
                          ? D.current
                              ? S(D.current)
                              : m && m.current && E(m.current)
                          : g(o) && (D.current = (0, n.wt)(e));
                },
                c = (e) => {
                    R.current && cancelAnimationFrame(R.current),
                        (R.current = requestAnimationFrame(() => {
                            let r = (0, s.ME)(),
                                i = ("virtual" === r || null === r) && (0, u.m0)() && (0, u.H8)(),
                                a = (0, n.bq)(t);
                            if (!i && a && g(o) && !w(a, o)) {
                                m = o;
                                let t = (0, n.wt)(e);
                                t && t.isConnected ? ((D.current = t), S(D.current)) : m.current && E(m.current);
                            }
                        }));
                };
            return (
                t.addEventListener("keydown", r, !1),
                t.addEventListener("focusin", i, !1),
                e?.forEach((e) => e.addEventListener("focusin", i, !1)),
                e?.forEach((e) => e.addEventListener("focusout", c, !1)),
                () => {
                    t.removeEventListener("keydown", r, !1),
                        t.removeEventListener("focusin", i, !1),
                        e?.forEach((e) => e.removeEventListener("focusin", i, !1)),
                        e?.forEach((e) => e.removeEventListener("focusout", c, !1));
                }
            );
        }, [o, a]),
        (0, f.N)(
            () => () => {
                R.current && cancelAnimationFrame(R.current);
            },
            [R],
        ),
        (c = U),
        (v = B),
        (M = j),
        (L = (0, d.useRef)("u" > typeof document ? (0, n.bq)((0, l.TW)(c.current ? c.current[0] : void 0)) : null)),
        (0, f.N)(() => {
            let e = c.current,
                t = (0, l.TW)(e ? e[0] : void 0);
            if (!v || M) return;
            let r = () => {
                (!m || _(m, c)) && b((0, n.bq)(t), c.current) && (m = c);
            };
            return (
                t.addEventListener("focusin", r, !1),
                e?.forEach((e) => e.addEventListener("focusin", r, !1)),
                () => {
                    t.removeEventListener("focusin", r, !1), e?.forEach((e) => e.removeEventListener("focusin", r, !1));
                }
            );
        }, [c, M]),
        (0, f.N)(() => {
            let e = (0, l.TW)(c.current ? c.current[0] : void 0);
            if (!v) return;
            let t = (t) => {
                if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !g(c) || t.isComposing) return;
                let r = e.activeElement;
                if (!w(r, c) || !k(c)) return;
                let n = O.getTreeNode(c);
                if (!n) return;
                let i = n.nodeToRestore,
                    o = T(e.body, { tabbable: !0 });
                o.currentNode = r;
                let a = t.shiftKey ? o.previousNode() : o.nextNode();
                if (
                    ((i && i.isConnected && i !== e.body) || ((i = void 0), (n.nodeToRestore = void 0)),
                    (!a || !w(a, c)) && i)
                ) {
                    o.currentNode = i;
                    do a = t.shiftKey ? o.previousNode() : o.nextNode();
                    while (w(a, c));
                    (t.preventDefault(), t.stopPropagation(), a) ? S(a, !0) : w(i) ? S(i, !0) : r.blur();
                }
            };
            return (
                M || e.addEventListener("keydown", t, !0),
                () => {
                    M || e.removeEventListener("keydown", t, !0);
                }
            );
        }, [c, v, M]),
        (0, f.N)(() => {
            let e = (0, l.TW)(c.current ? c.current[0] : void 0);
            if (!v) return;
            let t = O.getTreeNode(c);
            if (t)
                return (
                    (t.nodeToRestore = L.current ?? void 0),
                    () => {
                        let t = O.getTreeNode(c);
                        if (!t) return;
                        let r = t.nodeToRestore,
                            i = (0, n.bq)(e);
                        if (v && r && ((i && w(i, c)) || (i === e.body && k(c)))) {
                            let t = O.clone();
                            requestAnimationFrame(() => {
                                if (e.activeElement === e.body) {
                                    let e = t.getTreeNode(c);
                                    for (; e; ) {
                                        if (e.nodeToRestore && e.nodeToRestore.isConnected)
                                            return void C(e.nodeToRestore);
                                        e = e.parent;
                                    }
                                    for (e = t.getTreeNode(c); e; ) {
                                        if (e.scopeRef && e.scopeRef.current && O.getTreeNode(e.scopeRef))
                                            return void C(x(e.scopeRef.current, !0));
                                        e = e.parent;
                                    }
                                }
                            });
                        }
                    }
                );
        }, [c, v]),
        (P = U),
        (A = K),
        (F = d.useRef(A)),
        (0, d.useEffect)(() => {
            if (F.current) {
                m = P;
                let e = (0, l.TW)(P.current ? P.current[0] : void 0);
                !b((0, n.bq)(e), m.current) && P.current && E(P.current);
            }
            F.current = !1;
        }, [P]),
        (0, d.useEffect)(() => {
            let e = (0, n.bq)((0, l.TW)(U.current ? U.current[0] : void 0)),
                t = null;
            if (b(e, U.current)) {
                for (let r of O.traverse()) r.scopeRef && b(e, r.scopeRef.current) && (t = r);
                t === O.getTreeNode(U) && (m = t.scopeRef);
            }
        }, [U]),
        (0, f.N)(
            () => () => {
                let e = O.getTreeNode(U)?.parent?.scopeRef ?? null;
                (U === m || _(U, m)) && (!e || O.getTreeNode(e)) && (m = e), O.removeTreeNode(U);
            },
            [U],
        );
    let H = (0, d.useMemo)(() => {
            var e;
            return (
                (e = U),
                {
                    focusNext(t = {}) {
                        let r = e.current,
                            { from: i, tabbable: o, wrap: a, accept: s } = t,
                            u = i || (0, n.bq)((0, l.TW)(r[0] ?? void 0)),
                            c = r[0].previousElementSibling,
                            f = T(y(r), { tabbable: o, accept: s }, r);
                        f.currentNode = b(u, r) ? u : c;
                        let d = f.nextNode();
                        return !d && a && ((f.currentNode = c), (d = f.nextNode())), d && S(d, !0), d;
                    },
                    focusPrevious(t = {}) {
                        let r = e.current,
                            { from: i, tabbable: o, wrap: a, accept: s } = t,
                            u = i || (0, n.bq)((0, l.TW)(r[0] ?? void 0)),
                            c = r[r.length - 1].nextElementSibling,
                            f = T(y(r), { tabbable: o, accept: s }, r);
                        f.currentNode = b(u, r) ? u : c;
                        let d = f.previousNode();
                        return !d && a && ((f.currentNode = c), (d = f.previousNode())), d && S(d, !0), d;
                    },
                    focusFirst(t = {}) {
                        let r = e.current,
                            { tabbable: n, accept: i } = t,
                            o = T(y(r), { tabbable: n, accept: i }, r);
                        o.currentNode = r[0].previousElementSibling;
                        let a = o.nextNode();
                        return a && S(a, !0), a;
                    },
                    focusLast(t = {}) {
                        let r = e.current,
                            { tabbable: n, accept: i } = t,
                            o = T(y(r), { tabbable: n, accept: i }, r);
                        o.currentNode = r[r.length - 1].nextElementSibling;
                        let a = o.previousNode();
                        return a && S(a, !0), a;
                    },
                }
            );
        }, []),
        G = (0, d.useMemo)(() => ({ focusManager: H, parentNode: W }), [W, H]);
    return d.createElement(
        p.Provider,
        { value: G },
        d.createElement("span", { "data-focus-scope-start": !0, hidden: !0, ref: $ }),
        N,
        d.createElement("span", { "data-focus-scope-end": !0, hidden: !0, ref: V }),
    );
}
function y(e) {
    return e[0].parentElement;
}
function g(e) {
    let t = O.getTreeNode(m);
    for (; t && t.scopeRef !== e; ) {
        if (t.contain) return !1;
        t = t.parent;
    }
    return !0;
}
function b(e, t) {
    return !!e && !!t && t.some((t) => (0, n.sD)(t, e));
}
function w(e, t = null) {
    if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
    for (let { scopeRef: r } of O.traverse(O.getTreeNode(t))) if (r && b(e, r.current)) return !0;
    return !1;
}
function _(e, t) {
    let r = O.getTreeNode(t)?.parent;
    for (; r; ) {
        if (r.scopeRef === e) return !0;
        r = r.parent;
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
            (0, a.l)(e);
        } catch {}
}
function x(e, t = !0) {
    let r = e[0].previousElementSibling,
        n = y(e),
        i = T(n, { tabbable: t }, e);
    i.currentNode = r;
    let o = i.nextNode();
    return t && !o && (((i = T((n = y(e)), { tabbable: !1 }, e)).currentNode = r), (o = i.nextNode())), o;
}
function E(e, t = !0) {
    S(x(e, t));
}
function k(e) {
    let t = O.getTreeNode(m);
    for (; t && t.scopeRef !== e; ) {
        if (t.nodeToRestore) return !1;
        t = t.parent;
    }
    return t?.scopeRef === e;
}
function C(e) {
    e.dispatchEvent(new CustomEvent(h, { bubbles: !0, cancelable: !0 })) && S(e);
}
function T(e, t, r) {
    var a, s, u;
    let f = t?.tabbable ? c.A : c.t,
        d = e?.nodeType === Node.ELEMENT_NODE ? e : null,
        p = (0, l.TW)(d),
        h =
            ((a = e || p),
            (s = NodeFilter.SHOW_ELEMENT),
            (u = {
                acceptNode: (e) =>
                    (0, n.sD)(t?.from, e) ||
                    (t?.tabbable &&
                        "INPUT" === e.tagName &&
                        "radio" === e.getAttribute("type") &&
                        (!(function (e) {
                            if (e.checked) return !0;
                            let t = (function (e) {
                                if (!e.form)
                                    return Array.from(
                                        (0, l.TW)(e).querySelectorAll(
                                            `input[type="radio"][name="${CSS.escape(e.name)}"]`,
                                        ),
                                    ).filter((e) => !e.form);
                                let t = e.form.elements.namedItem(e.name),
                                    r = (0, l.mD)(e);
                                return t instanceof r.RadioNodeList
                                    ? Array.from(t).filter((e) => e instanceof r.HTMLInputElement)
                                    : t instanceof r.HTMLInputElement
                                      ? [t]
                                      : [];
                            })(e);
                            return t.length > 0 && !t.some((e) => e.checked);
                        })(e) ||
                            ("INPUT" === h.currentNode.tagName &&
                                "radio" === h.currentNode.type &&
                                h.currentNode.name === e.name)))
                        ? NodeFilter.FILTER_REJECT
                        : f(e) && (!r || b(e, r)) && (!t?.accept || t.accept(e))
                          ? NodeFilter.FILTER_ACCEPT
                          : NodeFilter.FILTER_SKIP,
            }),
            (0, i.Nf)() ? new o(p, a, s, u) : p.createTreeWalker(a, s, u));
    return t?.from && (h.currentNode = t.from), h;
}
function M(e, t = {}) {
    return {
        focusNext(r = {}) {
            let i = e.current;
            if (!i) return null;
            let { from: o, tabbable: a = t.tabbable, wrap: s = t.wrap, accept: u = t.accept } = r,
                c = o || (0, n.bq)((0, l.TW)(i)),
                f = T(i, { tabbable: a, accept: u });
            (0, n.sD)(i, c) && (f.currentNode = c);
            let d = f.nextNode();
            return !d && s && ((f.currentNode = i), (d = f.nextNode())), d && S(d, !0), d;
        },
        focusPrevious(r = t) {
            let i = e.current;
            if (!i) return null;
            let { from: o, tabbable: a = t.tabbable, wrap: s = t.wrap, accept: u = t.accept } = r,
                c = o || (0, n.bq)((0, l.TW)(i)),
                f = T(i, { tabbable: a, accept: u });
            if ((0, n.sD)(i, c)) f.currentNode = c;
            else {
                let e = P(f);
                return e && S(e, !0), e ?? null;
            }
            let d = f.previousNode();
            if (!d && s) {
                f.currentNode = i;
                let e = P(f);
                if (!e) return null;
                d = e;
            }
            return d && S(d, !0), d ?? null;
        },
        focusFirst(r = t) {
            let n = e.current;
            if (!n) return null;
            let { tabbable: i = t.tabbable, accept: o = t.accept } = r,
                a = T(n, { tabbable: i, accept: o }).nextNode();
            return a && S(a, !0), a;
        },
        focusLast(r = t) {
            let n = e.current;
            if (!n) return null;
            let { tabbable: i = t.tabbable, accept: o = t.accept } = r,
                a = P(T(n, { tabbable: i, accept: o }));
            return a && S(a, !0), a ?? null;
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
    constructor() {
        (this.fastMap = new Map()), (this.root = new I({ scopeRef: null })), this.fastMap.set(null, this.root);
    }
    get size() {
        return this.fastMap.size;
    }
    getTreeNode(e) {
        return this.fastMap.get(e);
    }
    addTreeNode(e, t, r) {
        let n = this.fastMap.get(t ?? null);
        if (!n) return;
        let i = new I({ scopeRef: e });
        n.addChild(i), (i.parent = n), this.fastMap.set(e, i), r && (i.nodeToRestore = r);
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
        let e = new A();
        for (let t of this.traverse()) e.addTreeNode(t.scopeRef, t.parent?.scopeRef ?? null, t.nodeToRestore);
        return e;
    }
}
class I {
    constructor(e) {
        (this.children = new Set()), (this.contain = !1), (this.scopeRef = e.scopeRef);
    }
    addChild(e) {
        this.children.add(e), (e.parent = this);
    }
    removeChild(e) {
        this.children.delete(e), (e.parent = void 0);
    }
}
let O = new A();
