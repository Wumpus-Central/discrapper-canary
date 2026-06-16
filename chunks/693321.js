"use strict";
n.d(t, { n1: () => E, N$: () => R, C7: () => O });
var i = n(3388),
    r = n(241827),
    s = n(297987),
    a = n(408713),
    o = n(419711),
    l = n(790637);
class u {
    get currentNode() {
        return this._currentNode;
    }
    set currentNode(e) {
        if (!(0, r.sD)(this.root, e))
            throw Error("Cannot set currentNode to a node that is not contained by the root node.");
        let t = [],
            n = e,
            i = e;
        for (this._currentNode = e; n && n !== this.root; )
            if (n.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                let e = n,
                    r = this._doc.createTreeWalker(e, this.whatToShow, { acceptNode: this._acceptNode });
                t.push(r), (r.currentNode = i), this._currentSetFor.add(r), (n = i = e.host);
            } else n = n.parentNode;
        let s = this._doc.createTreeWalker(this.root, this.whatToShow, { acceptNode: this._acceptNode });
        t.push(s), (s.currentNode = i), this._currentSetFor.add(s), (this._walkerStack = t);
    }
    get doc() {
        return this._doc;
    }
    firstChild() {
        let e = this.currentNode,
            t = this.nextNode();
        return (0, r.sD)(e, t) ? (t && (this.currentNode = t), t) : ((this.currentNode = e), null);
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
                let i = this.nextNode();
                return i && (this.currentNode = i), i;
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
                let i = this.lastChild();
                return i && (this.currentNode = i), i;
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
    constructor(e, t, n, i) {
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
            (this.filter = null != i ? i : null),
            (this.whatToShow = null != n ? n : NodeFilter.SHOW_ALL),
            (this._currentNode = t),
            this._walkerStack.unshift(e.createTreeWalker(t, n, this._acceptNode));
        const r = t.shadowRoot;
        if (r) {
            const e = this._doc.createTreeWalker(r, this.whatToShow, { acceptNode: this._acceptNode });
            this._walkerStack.unshift(e);
        }
    }
}
var c = n(885714),
    d = n(805447),
    _ = n(64700);
let h = _.createContext(null),
    f = "react-aria-focus-scope-restore",
    p = null;
function E(e) {
    var t, n, o, l, u, d, E, O, b, D;
    let M,
        P,
        x,
        k,
        { children: U, contain: G, restoreFocus: F, autoFocus: V } = e,
        B = (0, _.useRef)(null),
        j = (0, _.useRef)(null),
        H = (0, _.useRef)([]),
        { parentNode: Y } = (0, _.useContext)(h) || {},
        W = (0, _.useMemo)(() => new L({ scopeRef: H }), [H]);
    (0, i.N)(() => {
        let e = Y || w.root;
        if (w.getTreeNode(e.scopeRef) && p && !T(p, e.scopeRef)) {
            let t = w.getTreeNode(p);
            t && (e = t);
        }
        e.addChild(W), w.addNode(W);
    }, [W, Y]),
        (0, i.N)(() => {
            let e = w.getTreeNode(H);
            e && (e.contain = !!G);
        }, [G]),
        (0, i.N)(() => {
            var e;
            let t = null == (e = B.current) ? void 0 : e.nextSibling,
                n = [],
                i = (e) => e.stopPropagation();
            for (; t && t !== j.current; ) n.push(t), t.addEventListener(f, i), (t = t.nextSibling);
            return (
                (H.current = n),
                () => {
                    for (let e of n) e.removeEventListener(f, i);
                }
            );
        }, [U]),
        (t = H),
        (n = F),
        (o = G),
        (0, i.N)(() => {
            if (n || o) return;
            let e = t.current,
                i = (0, s.TW)(e ? e[0] : void 0),
                a = (e) => {
                    let n = (0, r.wt)(e);
                    A(n, t.current) ? (p = t) : I(n) || (p = null);
                };
            return (
                i.addEventListener("focusin", a, !1),
                null == e || e.forEach((e) => e.addEventListener("focusin", a, !1)),
                () => {
                    i.removeEventListener("focusin", a, !1),
                        null == e || e.forEach((e) => e.removeEventListener("focusin", a, !1));
                }
            );
        }, [t, n, o]),
        (l = H),
        (u = G),
        (M = (0, _.useRef)(void 0)),
        (P = (0, _.useRef)(void 0)),
        (0, i.N)(() => {
            let e = l.current;
            if (!u) {
                P.current && (cancelAnimationFrame(P.current), (P.current = void 0));
                return;
            }
            let t = (0, s.TW)(e ? e[0] : void 0),
                n = (e) => {
                    if ("Tab" !== e.key || e.altKey || e.ctrlKey || e.metaKey || !g(l) || e.isComposing) return;
                    let n = (0, r.bq)(t),
                        i = l.current;
                    if (!i || !A(n, i)) return;
                    let s = R(m(i), { tabbable: !0 }, i);
                    if (!n) return;
                    s.currentNode = n;
                    let a = e.shiftKey ? s.previousNode() : s.nextNode();
                    a ||
                        ((s.currentNode = e.shiftKey
                            ? i[i.length - 1].nextElementSibling
                            : i[0].previousElementSibling),
                        (a = e.shiftKey ? s.previousNode() : s.nextNode())),
                        e.preventDefault(),
                        a && S(a, !0);
                },
                i = (e) => {
                    (!p || T(p, l)) && A((0, r.wt)(e), l.current)
                        ? ((p = l), (M.current = (0, r.wt)(e)))
                        : g(l) && !I((0, r.wt)(e), l)
                          ? M.current
                              ? M.current.focus()
                              : p && p.current && C(p.current)
                          : g(l) && (M.current = (0, r.wt)(e));
                },
                o = (e) => {
                    P.current && cancelAnimationFrame(P.current),
                        (P.current = requestAnimationFrame(() => {
                            let n = (0, c.ME)(),
                                i = ("virtual" === n || null === n) && (0, a.m0)() && (0, a.H8)(),
                                s = (0, r.bq)(t);
                            if (!i && s && g(l) && !I(s, l)) {
                                p = l;
                                let t = (0, r.wt)(e);
                                if (t && t.isConnected) {
                                    var o;
                                    (M.current = t), null == (o = M.current) || o.focus();
                                } else p.current && C(p.current);
                            }
                        }));
                };
            return (
                t.addEventListener("keydown", n, !1),
                t.addEventListener("focusin", i, !1),
                null == e || e.forEach((e) => e.addEventListener("focusin", i, !1)),
                null == e || e.forEach((e) => e.addEventListener("focusout", o, !1)),
                () => {
                    t.removeEventListener("keydown", n, !1),
                        t.removeEventListener("focusin", i, !1),
                        null == e || e.forEach((e) => e.removeEventListener("focusin", i, !1)),
                        null == e || e.forEach((e) => e.removeEventListener("focusout", o, !1));
                }
            );
        }, [l, u]),
        (0, i.N)(
            () => () => {
                P.current && cancelAnimationFrame(P.current);
            },
            [P],
        ),
        (d = H),
        (E = F),
        (O = G),
        (x = (0, _.useRef)("u" > typeof document ? (0, r.bq)((0, s.TW)(d.current ? d.current[0] : void 0)) : null)),
        (0, i.N)(() => {
            let e = d.current,
                t = (0, s.TW)(e ? e[0] : void 0);
            if (!E || O) return;
            let n = () => {
                (!p || T(p, d)) && A((0, r.bq)(t), d.current) && (p = d);
            };
            return (
                t.addEventListener("focusin", n, !1),
                null == e || e.forEach((e) => e.addEventListener("focusin", n, !1)),
                () => {
                    t.removeEventListener("focusin", n, !1),
                        null == e || e.forEach((e) => e.removeEventListener("focusin", n, !1));
                }
            );
        }, [d, O]),
        (0, i.N)(() => {
            let e = (0, s.TW)(d.current ? d.current[0] : void 0);
            if (!E) return;
            let t = (t) => {
                if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !g(d) || t.isComposing) return;
                let n = e.activeElement;
                if (!I(n, d) || !N(d)) return;
                let i = w.getTreeNode(d);
                if (!i) return;
                let r = i.nodeToRestore,
                    s = R(e.body, { tabbable: !0 });
                s.currentNode = n;
                let a = t.shiftKey ? s.previousNode() : s.nextNode();
                if (
                    ((r && r.isConnected && r !== e.body) || ((r = void 0), (i.nodeToRestore = void 0)),
                    (!a || !I(a, d)) && r)
                ) {
                    s.currentNode = r;
                    do a = t.shiftKey ? s.previousNode() : s.nextNode();
                    while (I(a, d));
                    (t.preventDefault(), t.stopPropagation(), a) ? S(a, !0) : I(r) ? S(r, !0) : n.blur();
                }
            };
            return (
                O || e.addEventListener("keydown", t, !0),
                () => {
                    O || e.removeEventListener("keydown", t, !0);
                }
            );
        }, [d, E, O]),
        (0, i.N)(() => {
            var e;
            let t = (0, s.TW)(d.current ? d.current[0] : void 0);
            if (!E) return;
            let n = w.getTreeNode(d);
            if (n)
                return (
                    (n.nodeToRestore = null != (e = x.current) ? e : void 0),
                    () => {
                        let e = w.getTreeNode(d);
                        if (!e) return;
                        let n = e.nodeToRestore,
                            i = (0, r.bq)(t);
                        if (E && n && ((i && I(i, d)) || (i === t.body && N(d)))) {
                            let e = w.clone();
                            requestAnimationFrame(() => {
                                if (t.activeElement === t.body) {
                                    let t = e.getTreeNode(d);
                                    for (; t; ) {
                                        if (t.nodeToRestore && t.nodeToRestore.isConnected)
                                            return void v(t.nodeToRestore);
                                        t = t.parent;
                                    }
                                    for (t = e.getTreeNode(d); t; ) {
                                        if (t.scopeRef && t.scopeRef.current && w.getTreeNode(t.scopeRef))
                                            return void v(y(t.scopeRef.current, !0));
                                        t = t.parent;
                                    }
                                }
                            });
                        }
                    }
                );
        }, [d, E]),
        (b = H),
        (D = V),
        (k = _.useRef(D)),
        (0, _.useEffect)(() => {
            if (k.current) {
                p = b;
                let e = (0, s.TW)(b.current ? b.current[0] : void 0);
                !A((0, r.bq)(e), p.current) && b.current && C(b.current);
            }
            k.current = !1;
        }, [b]),
        (0, _.useEffect)(() => {
            let e = (0, r.bq)((0, s.TW)(H.current ? H.current[0] : void 0)),
                t = null;
            if (A(e, H.current)) {
                for (let n of w.traverse()) n.scopeRef && A(e, n.scopeRef.current) && (t = n);
                t === w.getTreeNode(H) && (p = t.scopeRef);
            }
        }, [H]),
        (0, i.N)(
            () => () => {
                var e, t, n;
                let i =
                    null != (n = null == (t = w.getTreeNode(H)) || null == (e = t.parent) ? void 0 : e.scopeRef)
                        ? n
                        : null;
                (H === p || T(H, p)) && (!i || w.getTreeNode(i)) && (p = i), w.removeTreeNode(H);
            },
            [H],
        );
    let K = (0, _.useMemo)(() => {
            var e;
            return (
                (e = H),
                {
                    focusNext(t = {}) {
                        var n;
                        let i = e.current,
                            { from: a, tabbable: o, wrap: l, accept: u } = t,
                            c = a || (0, r.bq)((0, s.TW)(null != (n = i[0]) ? n : void 0)),
                            d = i[0].previousElementSibling,
                            _ = R(m(i), { tabbable: o, accept: u }, i);
                        _.currentNode = A(c, i) ? c : d;
                        let h = _.nextNode();
                        return !h && l && ((_.currentNode = d), (h = _.nextNode())), h && S(h, !0), h;
                    },
                    focusPrevious(t = {}) {
                        var n;
                        let i = e.current,
                            { from: a, tabbable: o, wrap: l, accept: u } = t,
                            c = a || (0, r.bq)((0, s.TW)(null != (n = i[0]) ? n : void 0)),
                            d = i[i.length - 1].nextElementSibling,
                            _ = R(m(i), { tabbable: o, accept: u }, i);
                        _.currentNode = A(c, i) ? c : d;
                        let h = _.previousNode();
                        return !h && l && ((_.currentNode = d), (h = _.previousNode())), h && S(h, !0), h;
                    },
                    focusFirst(t = {}) {
                        let n = e.current,
                            { tabbable: i, accept: r } = t,
                            s = R(m(n), { tabbable: i, accept: r }, n);
                        s.currentNode = n[0].previousElementSibling;
                        let a = s.nextNode();
                        return a && S(a, !0), a;
                    },
                    focusLast(t = {}) {
                        let n = e.current,
                            { tabbable: i, accept: r } = t,
                            s = R(m(n), { tabbable: i, accept: r }, n);
                        s.currentNode = n[n.length - 1].nextElementSibling;
                        let a = s.previousNode();
                        return a && S(a, !0), a;
                    },
                }
            );
        }, []),
        $ = (0, _.useMemo)(() => ({ focusManager: K, parentNode: W }), [W, K]);
    return _.createElement(
        h.Provider,
        { value: $ },
        _.createElement("span", { "data-focus-scope-start": !0, hidden: !0, ref: B }),
        U,
        _.createElement("span", { "data-focus-scope-end": !0, hidden: !0, ref: j }),
    );
}
function m(e) {
    return e[0].parentElement;
}
function g(e) {
    let t = w.getTreeNode(p);
    for (; t && t.scopeRef !== e; ) {
        if (t.contain) return !1;
        t = t.parent;
    }
    return !0;
}
function A(e, t) {
    return !!e && !!t && t.some((t) => t.contains(e));
}
function I(e, t = null) {
    if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
    for (let { scopeRef: n } of w.traverse(w.getTreeNode(t))) if (n && A(e, n.current)) return !0;
    return !1;
}
function T(e, t) {
    var n;
    let i = null == (n = w.getTreeNode(t)) ? void 0 : n.parent;
    for (; i; ) {
        if (i.scopeRef === e) return !0;
        i = i.parent;
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
function y(e, t = !0) {
    let n = e[0].previousElementSibling,
        i = m(e),
        r = R(i, { tabbable: t }, e);
    r.currentNode = n;
    let s = r.nextNode();
    return t && !s && (((r = R((i = m(e)), { tabbable: !1 }, e)).currentNode = n), (s = r.nextNode())), s;
}
function C(e, t = !0) {
    S(y(e, t));
}
function N(e) {
    let t = w.getTreeNode(p);
    for (; t && t.scopeRef !== e; ) {
        if (t.nodeToRestore) return !1;
        t = t.parent;
    }
    return (null == t ? void 0 : t.scopeRef) === e;
}
function v(e) {
    e.dispatchEvent(new CustomEvent(f, { bubbles: !0, cancelable: !0 })) && S(e);
}
function R(e, t, n) {
    var i, r, a;
    let c = (null == t ? void 0 : t.tabbable) ? o.A : o.t,
        d = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
        _ = (0, s.TW)(d),
        h =
            ((i = e || _),
            (r = NodeFilter.SHOW_ELEMENT),
            (a = {
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
                                    var n, i;
                                    let r =
                                        null == (i = e.form) || null == (n = i.elements) ? void 0 : n.namedItem(e.name);
                                    t = [...(null != r ? r : [])];
                                } else
                                    t = [
                                        ...(0, s.TW)(e).querySelectorAll(
                                            `input[type="radio"][name="${CSS.escape(e.name)}"]`,
                                        ),
                                    ].filter((e) => !e.form);
                                return !!t && !t.some((e) => e.checked);
                            })(e) ||
                                ("INPUT" === h.currentNode.tagName &&
                                    "radio" === h.currentNode.type &&
                                    h.currentNode.name === e.name)))
                        ? NodeFilter.FILTER_REJECT
                        : c(e) && (!n || A(e, n)) && (!(null == t ? void 0 : t.accept) || t.accept(e))
                          ? NodeFilter.FILTER_ACCEPT
                          : NodeFilter.FILTER_SKIP;
                },
            }),
            (0, l.Nf)() ? new u(_, i, r, a) : _.createTreeWalker(i, r, a));
    return (null == t ? void 0 : t.from) && (h.currentNode = t.from), h;
}
function O(e, t = {}) {
    return {
        focusNext(n = {}) {
            let i = e.current;
            if (!i) return null;
            let { from: a, tabbable: o = t.tabbable, wrap: l = t.wrap, accept: u = t.accept } = n,
                c = a || (0, r.bq)((0, s.TW)(i)),
                d = R(i, { tabbable: o, accept: u });
            i.contains(c) && (d.currentNode = c);
            let _ = d.nextNode();
            return !_ && l && ((d.currentNode = i), (_ = d.nextNode())), _ && S(_, !0), _;
        },
        focusPrevious(n = t) {
            let i = e.current;
            if (!i) return null;
            let { from: a, tabbable: o = t.tabbable, wrap: l = t.wrap, accept: u = t.accept } = n,
                c = a || (0, r.bq)((0, s.TW)(i)),
                d = R(i, { tabbable: o, accept: u });
            if (i.contains(c)) d.currentNode = c;
            else {
                let e = b(d);
                return e && S(e, !0), null != e ? e : null;
            }
            let _ = d.previousNode();
            if (!_ && l) {
                d.currentNode = i;
                let e = b(d);
                if (!e) return null;
                _ = e;
            }
            return _ && S(_, !0), null != _ ? _ : null;
        },
        focusFirst(n = t) {
            let i = e.current;
            if (!i) return null;
            let { tabbable: r = t.tabbable, accept: s = t.accept } = n,
                a = R(i, { tabbable: r, accept: s }).nextNode();
            return a && S(a, !0), a;
        },
        focusLast(n = t) {
            let i = e.current;
            if (!i) return null;
            let { tabbable: r = t.tabbable, accept: s = t.accept } = n,
                a = b(R(i, { tabbable: r, accept: s }));
            return a && S(a, !0), null != a ? a : null;
        },
    };
}
function b(e) {
    let t, n;
    do (t = e.lastChild()) && (n = t);
    while (t);
    return n;
}
class D {
    get size() {
        return this.fastMap.size;
    }
    getTreeNode(e) {
        return this.fastMap.get(e);
    }
    addTreeNode(e, t, n) {
        let i = this.fastMap.get(null != t ? t : null);
        if (!i) return;
        let r = new L({ scopeRef: e });
        i.addChild(r), (r.parent = i), this.fastMap.set(e, r), n && (r.nodeToRestore = n);
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
                A(e.nodeToRestore, t.scopeRef.current) &&
                (e.nodeToRestore = t.nodeToRestore);
        let i = t.children;
        n && (n.removeChild(t), i.size > 0 && i.forEach((e) => n && n.addChild(e))), this.fastMap.delete(t.scopeRef);
    }
    *traverse(e = this.root) {
        if ((null != e.scopeRef && (yield e), e.children.size > 0)) for (let t of e.children) yield* this.traverse(t);
    }
    clone() {
        var e, t;
        let n = new D();
        for (let i of this.traverse())
            n.addTreeNode(
                i.scopeRef,
                null != (t = null == (e = i.parent) ? void 0 : e.scopeRef) ? t : null,
                i.nodeToRestore,
            );
        return n;
    }
    constructor() {
        (this.fastMap = new Map()), (this.root = new L({ scopeRef: null })), this.fastMap.set(null, this.root);
    }
}
class L {
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
let w = new D();
