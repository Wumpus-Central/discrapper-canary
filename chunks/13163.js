"use strict";
n.d(t, { C7: () => P, N$: () => x, n1: () => h });
var r = n(3388),
    i = n(241827),
    a = n(297987),
    s = n(408713),
    o = n(883768),
    l = n(621158),
    u = n(885714),
    c = n(805447),
    d = n(64700);
let _ = d.createContext(null),
    f = "react-aria-focus-scope-restore",
    p = null;
function h(e) {
    let { children: t, contain: n, restoreFocus: s, autoFocus: o } = e,
        l = (0, d.useRef)(null),
        u = (0, d.useRef)(null),
        c = (0, d.useRef)([]),
        { parentNode: h } = (0, d.useContext)(_) || {},
        g = (0, d.useMemo)(() => new U({ scopeRef: c }), [c]);
    (0, r.N)(() => {
        let e = h || G.root;
        if (G.getTreeNode(e.scopeRef) && p && !v(p, e.scopeRef)) {
            let t = G.getTreeNode(p);
            t && (e = t);
        }
        e.addChild(g), G.addNode(g);
    }, [g, h]),
        (0, r.N)(() => {
            let e = G.getTreeNode(c);
            e && (e.contain = !!n);
        }, [n]),
        (0, r.N)(() => {
            var e;
            let t = null == (e = l.current) ? void 0 : e.nextSibling,
                n = [],
                r = (e) => e.stopPropagation();
            for (; t && t !== u.current; ) n.push(t), t.addEventListener(f, r), (t = t.nextSibling);
            return (
                (c.current = n),
                () => {
                    for (let e of n) e.removeEventListener(f, r);
                }
            );
        }, [t]),
        O(c, s, n),
        I(c, n),
        L(c, s, n),
        R(c, o),
        (0, d.useEffect)(() => {
            let e = (0, i.bq)((0, a.TW)(c.current ? c.current[0] : void 0)),
                t = null;
            if (y(e, c.current)) {
                for (let n of G.traverse()) n.scopeRef && y(e, n.scopeRef.current) && (t = n);
                t === G.getTreeNode(c) && (p = t.scopeRef);
            }
        }, [c]),
        (0, r.N)(
            () => () => {
                var e, t, n;
                let r =
                    null != (n = null == (t = G.getTreeNode(c)) || null == (e = t.parent) ? void 0 : e.scopeRef)
                        ? n
                        : null;
                (c === p || v(c, p)) && (!r || G.getTreeNode(r)) && (p = r), G.removeTreeNode(c);
            },
            [c],
        );
    let E = (0, d.useMemo)(() => m(c), []),
        A = (0, d.useMemo)(() => ({ focusManager: E, parentNode: g }), [g, E]);
    return d.createElement(
        _.Provider,
        { value: A },
        d.createElement("span", { "data-focus-scope-start": !0, hidden: !0, ref: l }),
        t,
        d.createElement("span", { "data-focus-scope-end": !0, hidden: !0, ref: u }),
    );
}
function m(e) {
    return {
        focusNext(t = {}) {
            var n;
            let r = e.current,
                { from: s, tabbable: o, wrap: l, accept: u } = t,
                c = s || (0, i.bq)((0, a.TW)(null != (n = r[0]) ? n : void 0)),
                d = r[0].previousElementSibling,
                _ = x(g(r), { tabbable: o, accept: u }, r);
            _.currentNode = y(c, r) ? c : d;
            let f = _.nextNode();
            return !f && l && ((_.currentNode = d), (f = _.nextNode())), f && C(f, !0), f;
        },
        focusPrevious(t = {}) {
            var n;
            let r = e.current,
                { from: s, tabbable: o, wrap: l, accept: u } = t,
                c = s || (0, i.bq)((0, a.TW)(null != (n = r[0]) ? n : void 0)),
                d = r[r.length - 1].nextElementSibling,
                _ = x(g(r), { tabbable: o, accept: u }, r);
            _.currentNode = y(c, r) ? c : d;
            let f = _.previousNode();
            return !f && l && ((_.currentNode = d), (f = _.previousNode())), f && C(f, !0), f;
        },
        focusFirst(t = {}) {
            let n = e.current,
                { tabbable: r, accept: i } = t,
                a = x(g(n), { tabbable: r, accept: i }, n);
            a.currentNode = n[0].previousElementSibling;
            let s = a.nextNode();
            return s && C(s, !0), s;
        },
        focusLast(t = {}) {
            let n = e.current,
                { tabbable: r, accept: i } = t,
                a = x(g(n), { tabbable: r, accept: i }, n);
            a.currentNode = n[n.length - 1].nextElementSibling;
            let s = a.previousNode();
            return s && C(s, !0), s;
        },
    };
}
function g(e) {
    return e[0].parentElement;
}
function E(e) {
    let t = G.getTreeNode(p);
    for (; t && t.scopeRef !== e; ) {
        if (t.contain) return !1;
        t = t.parent;
    }
    return !0;
}
function A(e) {
    if (e.checked) return !0;
    let t = [];
    if (e.form) {
        var n, r;
        let i = null == (r = e.form) || null == (n = r.elements) ? void 0 : n.namedItem(e.name);
        t = [...(null != i ? i : [])];
    } else
        t = [...(0, a.TW)(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)].filter(
            (e) => !e.form,
        );
    return !!t && !t.some((e) => e.checked);
}
function I(e, t) {
    let n = (0, d.useRef)(void 0),
        o = (0, d.useRef)(void 0);
    (0, r.N)(() => {
        let r = e.current;
        if (!t) {
            o.current && (cancelAnimationFrame(o.current), (o.current = void 0));
            return;
        }
        let l = (0, a.TW)(r ? r[0] : void 0),
            c = (t) => {
                if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !E(e) || t.isComposing) return;
                let n = (0, i.bq)(l),
                    r = e.current;
                if (!r || !y(n, r)) return;
                let a = x(g(r), { tabbable: !0 }, r);
                if (!n) return;
                a.currentNode = n;
                let s = t.shiftKey ? a.previousNode() : a.nextNode();
                s ||
                    ((a.currentNode = t.shiftKey ? r[r.length - 1].nextElementSibling : r[0].previousElementSibling),
                    (s = t.shiftKey ? a.previousNode() : a.nextNode())),
                    t.preventDefault(),
                    s && C(s, !0);
            },
            d = (t) => {
                (!p || v(p, e)) && y((0, i.wt)(t), e.current)
                    ? ((p = e), (n.current = (0, i.wt)(t)))
                    : E(e) && !S((0, i.wt)(t), e)
                      ? n.current
                          ? n.current.focus()
                          : p && p.current && N(p.current)
                      : E(e) && (n.current = (0, i.wt)(t));
            },
            _ = (t) => {
                o.current && cancelAnimationFrame(o.current),
                    (o.current = requestAnimationFrame(() => {
                        let r = (0, u.ME)(),
                            a = ("virtual" === r || null === r) && (0, s.m0)() && (0, s.H8)(),
                            o = (0, i.bq)(l);
                        if (!a && o && E(e) && !S(o, e)) {
                            p = e;
                            let r = (0, i.wt)(t);
                            if (r && r.isConnected) {
                                var c;
                                (n.current = r), null == (c = n.current) || c.focus();
                            } else p.current && N(p.current);
                        }
                    }));
            };
        return (
            l.addEventListener("keydown", c, !1),
            l.addEventListener("focusin", d, !1),
            null == r || r.forEach((e) => e.addEventListener("focusin", d, !1)),
            null == r || r.forEach((e) => e.addEventListener("focusout", _, !1)),
            () => {
                l.removeEventListener("keydown", c, !1),
                    l.removeEventListener("focusin", d, !1),
                    null == r || r.forEach((e) => e.removeEventListener("focusin", d, !1)),
                    null == r || r.forEach((e) => e.removeEventListener("focusout", _, !1));
            }
        );
    }, [e, t]),
        (0, r.N)(
            () => () => {
                o.current && cancelAnimationFrame(o.current);
            },
            [o],
        );
}
function T(e) {
    return S(e);
}
function y(e, t) {
    return !!e && !!t && t.some((t) => t.contains(e));
}
function S(e, t = null) {
    if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
    for (let { scopeRef: n } of G.traverse(G.getTreeNode(t))) if (n && y(e, n.current)) return !0;
    return !1;
}
function v(e, t) {
    var n;
    let r = null == (n = G.getTreeNode(t)) ? void 0 : n.parent;
    for (; r; ) {
        if (r.scopeRef === e) return !0;
        r = r.parent;
    }
    return !1;
}
function C(e, t = !1) {
    if (null == e || t) {
        if (null != e)
            try {
                e.focus();
            } catch {}
    } else
        try {
            (0, c.l)(e);
        } catch {}
}
function b(e, t = !0) {
    let n = e[0].previousElementSibling,
        r = g(e),
        i = x(r, { tabbable: t }, e);
    i.currentNode = n;
    let a = i.nextNode();
    return t && !a && (((i = x((r = g(e)), { tabbable: !1 }, e)).currentNode = n), (a = i.nextNode())), a;
}
function N(e, t = !0) {
    C(b(e, t));
}
function R(e, t) {
    let n = d.useRef(t);
    (0, d.useEffect)(() => {
        if (n.current) {
            p = e;
            let t = (0, a.TW)(e.current ? e.current[0] : void 0);
            !y((0, i.bq)(t), p.current) && e.current && N(e.current);
        }
        n.current = !1;
    }, [e]);
}
function O(e, t, n) {
    (0, r.N)(() => {
        if (t || n) return;
        let r = e.current,
            s = (0, a.TW)(r ? r[0] : void 0),
            o = (t) => {
                let n = (0, i.wt)(t);
                y(n, e.current) ? (p = e) : T(n) || (p = null);
            };
        return (
            s.addEventListener("focusin", o, !1),
            null == r || r.forEach((e) => e.addEventListener("focusin", o, !1)),
            () => {
                s.removeEventListener("focusin", o, !1),
                    null == r || r.forEach((e) => e.removeEventListener("focusin", o, !1));
            }
        );
    }, [e, t, n]);
}
function D(e) {
    let t = G.getTreeNode(p);
    for (; t && t.scopeRef !== e; ) {
        if (t.nodeToRestore) return !1;
        t = t.parent;
    }
    return (null == t ? void 0 : t.scopeRef) === e;
}
function L(e, t, n) {
    let s = (0, d.useRef)("u" > typeof document ? (0, i.bq)((0, a.TW)(e.current ? e.current[0] : void 0)) : null);
    (0, r.N)(() => {
        let r = e.current,
            s = (0, a.TW)(r ? r[0] : void 0);
        if (!t || n) return;
        let o = () => {
            (!p || v(p, e)) && y((0, i.bq)(s), e.current) && (p = e);
        };
        return (
            s.addEventListener("focusin", o, !1),
            null == r || r.forEach((e) => e.addEventListener("focusin", o, !1)),
            () => {
                s.removeEventListener("focusin", o, !1),
                    null == r || r.forEach((e) => e.removeEventListener("focusin", o, !1));
            }
        );
    }, [e, n]),
        (0, r.N)(() => {
            let r = (0, a.TW)(e.current ? e.current[0] : void 0);
            if (!t) return;
            let i = (t) => {
                if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !E(e) || t.isComposing) return;
                let n = r.activeElement;
                if (!S(n, e) || !D(e)) return;
                let i = G.getTreeNode(e);
                if (!i) return;
                let a = i.nodeToRestore,
                    s = x(r.body, { tabbable: !0 });
                s.currentNode = n;
                let o = t.shiftKey ? s.previousNode() : s.nextNode();
                if (
                    ((a && a.isConnected && a !== r.body) || ((a = void 0), (i.nodeToRestore = void 0)),
                    (!o || !S(o, e)) && a)
                ) {
                    s.currentNode = a;
                    do o = t.shiftKey ? s.previousNode() : s.nextNode();
                    while (S(o, e));
                    t.preventDefault(), t.stopPropagation(), o ? C(o, !0) : T(a) ? C(a, !0) : n.blur();
                }
            };
            return (
                n || r.addEventListener("keydown", i, !0),
                () => {
                    n || r.removeEventListener("keydown", i, !0);
                }
            );
        }, [e, t, n]),
        (0, r.N)(() => {
            var n;
            let r = (0, a.TW)(e.current ? e.current[0] : void 0);
            if (!t) return;
            let o = G.getTreeNode(e);
            if (o)
                return (
                    (o.nodeToRestore = null != (n = s.current) ? n : void 0),
                    () => {
                        let n = G.getTreeNode(e);
                        if (!n) return;
                        let a = n.nodeToRestore,
                            s = (0, i.bq)(r);
                        if (t && a && ((s && S(s, e)) || (s === r.body && D(e)))) {
                            let t = G.clone();
                            requestAnimationFrame(() => {
                                if (r.activeElement === r.body) {
                                    let n = t.getTreeNode(e);
                                    for (; n; ) {
                                        if (n.nodeToRestore && n.nodeToRestore.isConnected)
                                            return void w(n.nodeToRestore);
                                        n = n.parent;
                                    }
                                    for (n = t.getTreeNode(e); n; ) {
                                        if (n.scopeRef && n.scopeRef.current && G.getTreeNode(n.scopeRef))
                                            return void w(b(n.scopeRef.current, !0));
                                        n = n.parent;
                                    }
                                }
                            });
                        }
                    }
                );
        }, [e, t]);
}
function w(e) {
    e.dispatchEvent(new CustomEvent(f, { bubbles: !0, cancelable: !0 })) && C(e);
}
function x(e, t, n) {
    let r = (null == t ? void 0 : t.tabbable) ? o.A : o.t,
        i = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
        s = (0, a.TW)(i),
        u = (0, l.H)(s, e || s, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
                var i;
                return (null == t || null == (i = t.from) ? void 0 : i.contains(e)) ||
                    ((null == t ? void 0 : t.tabbable) &&
                        "INPUT" === e.tagName &&
                        "radio" === e.getAttribute("type") &&
                        (!A(e) ||
                            ("INPUT" === u.currentNode.tagName &&
                                "radio" === u.currentNode.type &&
                                u.currentNode.name === e.name)))
                    ? NodeFilter.FILTER_REJECT
                    : r(e) && (!n || y(e, n)) && (!(null == t ? void 0 : t.accept) || t.accept(e))
                      ? NodeFilter.FILTER_ACCEPT
                      : NodeFilter.FILTER_SKIP;
            },
        });
    return (null == t ? void 0 : t.from) && (u.currentNode = t.from), u;
}
function P(e, t = {}) {
    return {
        focusNext(n = {}) {
            let r = e.current;
            if (!r) return null;
            let { from: s, tabbable: o = t.tabbable, wrap: l = t.wrap, accept: u = t.accept } = n,
                c = s || (0, i.bq)((0, a.TW)(r)),
                d = x(r, { tabbable: o, accept: u });
            r.contains(c) && (d.currentNode = c);
            let _ = d.nextNode();
            return !_ && l && ((d.currentNode = r), (_ = d.nextNode())), _ && C(_, !0), _;
        },
        focusPrevious(n = t) {
            let r = e.current;
            if (!r) return null;
            let { from: s, tabbable: o = t.tabbable, wrap: l = t.wrap, accept: u = t.accept } = n,
                c = s || (0, i.bq)((0, a.TW)(r)),
                d = x(r, { tabbable: o, accept: u });
            if (r.contains(c)) d.currentNode = c;
            else {
                let e = M(d);
                return e && C(e, !0), null != e ? e : null;
            }
            let _ = d.previousNode();
            if (!_ && l) {
                d.currentNode = r;
                let e = M(d);
                if (!e) return null;
                _ = e;
            }
            return _ && C(_, !0), null != _ ? _ : null;
        },
        focusFirst(n = t) {
            let r = e.current;
            if (!r) return null;
            let { tabbable: i = t.tabbable, accept: a = t.accept } = n,
                s = x(r, { tabbable: i, accept: a }).nextNode();
            return s && C(s, !0), s;
        },
        focusLast(n = t) {
            let r = e.current;
            if (!r) return null;
            let { tabbable: i = t.tabbable, accept: a = t.accept } = n,
                s = M(x(r, { tabbable: i, accept: a }));
            return s && C(s, !0), null != s ? s : null;
        },
    };
}
function M(e) {
    let t, n;
    do (t = e.lastChild()) && (n = t);
    while (t);
    return n;
}
class k {
    get size() {
        return this.fastMap.size;
    }
    getTreeNode(e) {
        return this.fastMap.get(e);
    }
    addTreeNode(e, t, n) {
        let r = this.fastMap.get(null != t ? t : null);
        if (!r) return;
        let i = new U({ scopeRef: e });
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
                y(e.nodeToRestore, t.scopeRef.current) &&
                (e.nodeToRestore = t.nodeToRestore);
        let r = t.children;
        n && (n.removeChild(t), r.size > 0 && r.forEach((e) => n && n.addChild(e))), this.fastMap.delete(t.scopeRef);
    }
    *traverse(e = this.root) {
        if ((null != e.scopeRef && (yield e), e.children.size > 0)) for (let t of e.children) yield* this.traverse(t);
    }
    clone() {
        var e, t;
        let n = new k();
        for (let r of this.traverse())
            n.addTreeNode(
                r.scopeRef,
                null != (t = null == (e = r.parent) ? void 0 : e.scopeRef) ? t : null,
                r.nodeToRestore,
            );
        return n;
    }
    constructor() {
        (this.fastMap = new Map()), (this.root = new U({ scopeRef: null })), this.fastMap.set(null, this.root);
    }
}
class U {
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
let G = new k();
