n.d(t, {
    E7: () => x,
    MT: () => h,
    QL: () => L,
});
var r = n(159447),
    i = n(297808),
    a = n(477232),
    o = n(21814),
    s = n(970498),
    l = n(58892),
    c = n(981166),
    u = n(172395),
    d = n(473749);
let f = d.createContext(null),
    _ = "react-aria-focus-scope-restore",
    p = null;
function h(e) {
    let { children: t, contain: n, restoreFocus: o, autoFocus: s } = e,
        l = (0, d.useRef)(null),
        c = (0, d.useRef)(null),
        u = (0, d.useRef)([]),
        { parentNode: h } = (0, d.useContext)(f) || {},
        g = (0, d.useMemo)(() => new k({ scopeRef: u }), [u]);
    (0, r.b)(() => {
        let e = h || U.root;
        if (U.getTreeNode(e.scopeRef) && p && !T(p, e.scopeRef)) {
            let t = U.getTreeNode(p);
            t && (e = t);
        }
        e.addChild(g), U.addNode(g);
    }, [g, h]),
        (0, r.b)(() => {
            let e = U.getTreeNode(u);
            e && (e.contain = !!n);
        }, [n]),
        (0, r.b)(() => {
            var e;
            let t = null == (e = l.current) ? void 0 : e.nextSibling,
                n = [],
                r = (e) => e.stopPropagation();
            for (; t && t !== c.current; ) n.push(t), t.addEventListener(_, r), (t = t.nextSibling);
            return (
                (u.current = n),
                () => {
                    for (let e of n) e.removeEventListener(_, r);
                }
            );
        }, [t]),
        R(u, o, n),
        y(u, n),
        D(u, o, n),
        N(u, s),
        (0, d.useEffect)(() => {
            let e = (0, i.vY)((0, a.r3)(u.current ? u.current[0] : void 0)),
                t = null;
            if (v(e, u.current)) {
                for (let n of U.traverse()) n.scopeRef && v(e, n.scopeRef.current) && (t = n);
                t === U.getTreeNode(u) && (p = t.scopeRef);
            }
        }, [u]),
        (0, r.b)(
            () => () => {
                var e, t, n;
                let r =
                    null != (n = null == (t = U.getTreeNode(u)) || null == (e = t.parent) ? void 0 : e.scopeRef)
                        ? n
                        : null;
                (u === p || T(u, p)) && (!r || U.getTreeNode(r)) && (p = r), U.removeTreeNode(u);
            },
            [u],
        );
    let E = (0, d.useMemo)(() => m(u), []),
        b = (0, d.useMemo)(
            () => ({
                focusManager: E,
                parentNode: g,
            }),
            [g, E],
        );
    return d.createElement(
        f.Provider,
        { value: b },
        d.createElement("span", {
            "data-focus-scope-start": !0,
            hidden: !0,
            ref: l,
        }),
        t,
        d.createElement("span", {
            "data-focus-scope-end": !0,
            hidden: !0,
            ref: c,
        }),
    );
}
function m(e) {
    return {
        focusNext(t = {}) {
            var n;
            let r = e.current,
                { from: o, tabbable: s, wrap: l, accept: c } = t,
                u = o || (0, i.vY)((0, a.r3)(null != (n = r[0]) ? n : void 0)),
                d = r[0].previousElementSibling,
                f = L(
                    g(r),
                    {
                        tabbable: s,
                        accept: c,
                    },
                    r,
                );
            f.currentNode = v(u, r) ? u : d;
            let _ = f.nextNode();
            return !_ && l && ((f.currentNode = d), (_ = f.nextNode())), _ && S(_, !0), _;
        },
        focusPrevious(t = {}) {
            var n;
            let r = e.current,
                { from: o, tabbable: s, wrap: l, accept: c } = t,
                u = o || (0, i.vY)((0, a.r3)(null != (n = r[0]) ? n : void 0)),
                d = r[r.length - 1].nextElementSibling,
                f = L(
                    g(r),
                    {
                        tabbable: s,
                        accept: c,
                    },
                    r,
                );
            f.currentNode = v(u, r) ? u : d;
            let _ = f.previousNode();
            return !_ && l && ((f.currentNode = d), (_ = f.previousNode())), _ && S(_, !0), _;
        },
        focusFirst(t = {}) {
            let n = e.current,
                { tabbable: r, accept: i } = t,
                a = L(
                    g(n),
                    {
                        tabbable: r,
                        accept: i,
                    },
                    n,
                );
            a.currentNode = n[0].previousElementSibling;
            let o = a.nextNode();
            return o && S(o, !0), o;
        },
        focusLast(t = {}) {
            let n = e.current,
                { tabbable: r, accept: i } = t,
                a = L(
                    g(n),
                    {
                        tabbable: r,
                        accept: i,
                    },
                    n,
                );
            a.currentNode = n[n.length - 1].nextElementSibling;
            let o = a.previousNode();
            return o && S(o, !0), o;
        },
    };
}
function g(e) {
    return e[0].parentElement;
}
function E(e) {
    let t = U.getTreeNode(p);
    for (; t && t.scopeRef !== e; ) {
        if (t.contain) return !1;
        t = t.parent;
    }
    return !0;
}
function b(e) {
    if (e.checked) return !0;
    let t = [];
    if (e.form) {
        var n, r;
        let i = null == (r = e.form) || null == (n = r.elements) ? void 0 : n.namedItem(e.name);
        t = [...(null != i ? i : [])];
    } else
        t = [...(0, a.r3)(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)].filter(
            (e) => !e.form,
        );
    return !!t && !t.some((e) => e.checked);
}
function y(e, t) {
    let n = (0, d.useRef)(void 0),
        s = (0, d.useRef)(void 0);
    (0, r.b)(() => {
        let r = e.current;
        if (!t) {
            s.current && (cancelAnimationFrame(s.current), (s.current = void 0));
            return;
        }
        let l = (0, a.r3)(r ? r[0] : void 0),
            u = (t) => {
                if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !E(e) || t.isComposing) return;
                let n = (0, i.vY)(l),
                    r = e.current;
                if (!r || !v(n, r)) return;
                let a = L(g(r), { tabbable: !0 }, r);
                if (!n) return;
                a.currentNode = n;
                let o = t.shiftKey ? a.previousNode() : a.nextNode();
                o ||
                    ((a.currentNode = t.shiftKey ? r[r.length - 1].nextElementSibling : r[0].previousElementSibling),
                    (o = t.shiftKey ? a.previousNode() : a.nextNode())),
                    t.preventDefault(),
                    o && S(o, !0);
            },
            d = (t) => {
                (!p || T(p, e)) && v((0, i.NI)(t), e.current)
                    ? ((p = e), (n.current = (0, i.NI)(t)))
                    : E(e) && !I((0, i.NI)(t), e)
                      ? n.current
                          ? n.current.focus()
                          : p && p.current && C(p.current)
                      : E(e) && (n.current = (0, i.NI)(t));
            },
            f = (t) => {
                s.current && cancelAnimationFrame(s.current),
                    (s.current = requestAnimationFrame(() => {
                        let r = (0, c.Jz)(),
                            a = ("virtual" === r || null === r) && (0, o.Dt)() && (0, o.i7)(),
                            s = (0, i.vY)(l);
                        if (!a && s && E(e) && !I(s, e)) {
                            p = e;
                            let r = (0, i.NI)(t);
                            if (r && r.isConnected) {
                                var u;
                                (n.current = r), null == (u = n.current) || u.focus();
                            } else p.current && C(p.current);
                        }
                    }));
            };
        return (
            l.addEventListener("keydown", u, !1),
            l.addEventListener("focusin", d, !1),
            null == r || r.forEach((e) => e.addEventListener("focusin", d, !1)),
            null == r || r.forEach((e) => e.addEventListener("focusout", f, !1)),
            () => {
                l.removeEventListener("keydown", u, !1),
                    l.removeEventListener("focusin", d, !1),
                    null == r || r.forEach((e) => e.removeEventListener("focusin", d, !1)),
                    null == r || r.forEach((e) => e.removeEventListener("focusout", f, !1));
            }
        );
    }, [e, t]),
        (0, r.b)(
            () => () => {
                s.current && cancelAnimationFrame(s.current);
            },
            [s],
        );
}
function O(e) {
    return I(e);
}
function v(e, t) {
    return !!e && !!t && t.some((t) => t.contains(e));
}
function I(e, t = null) {
    if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
    for (let { scopeRef: n } of U.traverse(U.getTreeNode(t))) if (n && v(e, n.current)) return !0;
    return !1;
}
function T(e, t) {
    var n;
    let r = null == (n = U.getTreeNode(t)) ? void 0 : n.parent;
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
            (0, u.e)(e);
        } catch {}
}
function A(e, t = !0) {
    let n = e[0].previousElementSibling,
        r = g(e),
        i = L(r, { tabbable: t }, e);
    i.currentNode = n;
    let a = i.nextNode();
    return t && !a && (((i = L((r = g(e)), { tabbable: !1 }, e)).currentNode = n), (a = i.nextNode())), a;
}
function C(e, t = !0) {
    S(A(e, t));
}
function N(e, t) {
    let n = d.useRef(t);
    (0, d.useEffect)(() => {
        if (n.current) {
            p = e;
            let t = (0, a.r3)(e.current ? e.current[0] : void 0);
            !v((0, i.vY)(t), p.current) && e.current && C(e.current);
        }
        n.current = !1;
    }, [e]);
}
function R(e, t, n) {
    (0, r.b)(() => {
        if (t || n) return;
        let r = e.current,
            o = (0, a.r3)(r ? r[0] : void 0),
            s = (t) => {
                let n = (0, i.NI)(t);
                v(n, e.current) ? (p = e) : O(n) || (p = null);
            };
        return (
            o.addEventListener("focusin", s, !1),
            null == r || r.forEach((e) => e.addEventListener("focusin", s, !1)),
            () => {
                o.removeEventListener("focusin", s, !1),
                    null == r || r.forEach((e) => e.removeEventListener("focusin", s, !1));
            }
        );
    }, [e, t, n]);
}
function P(e) {
    let t = U.getTreeNode(p);
    for (; t && t.scopeRef !== e; ) {
        if (t.nodeToRestore) return !1;
        t = t.parent;
    }
    return (null == t ? void 0 : t.scopeRef) === e;
}
function D(e, t, n) {
    let o = (0, d.useRef)(
        "undefined" != typeof document ? (0, i.vY)((0, a.r3)(e.current ? e.current[0] : void 0)) : null,
    );
    (0, r.b)(() => {
        let r = e.current,
            o = (0, a.r3)(r ? r[0] : void 0);
        if (!t || n) return;
        let s = () => {
            (!p || T(p, e)) && v((0, i.vY)(o), e.current) && (p = e);
        };
        return (
            o.addEventListener("focusin", s, !1),
            null == r || r.forEach((e) => e.addEventListener("focusin", s, !1)),
            () => {
                o.removeEventListener("focusin", s, !1),
                    null == r || r.forEach((e) => e.removeEventListener("focusin", s, !1));
            }
        );
    }, [e, n]),
        (0, r.b)(() => {
            let r = (0, a.r3)(e.current ? e.current[0] : void 0);
            if (!t) return;
            let i = (t) => {
                if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !E(e) || t.isComposing) return;
                let n = r.activeElement;
                if (!I(n, e) || !P(e)) return;
                let i = U.getTreeNode(e);
                if (!i) return;
                let a = i.nodeToRestore,
                    o = L(r.body, { tabbable: !0 });
                o.currentNode = n;
                let s = t.shiftKey ? o.previousNode() : o.nextNode();
                if (
                    ((a && a.isConnected && a !== r.body) || ((a = void 0), (i.nodeToRestore = void 0)),
                    (!s || !I(s, e)) && a)
                ) {
                    o.currentNode = a;
                    do s = t.shiftKey ? o.previousNode() : o.nextNode();
                    while (I(s, e));
                    t.preventDefault(), t.stopPropagation(), s ? S(s, !0) : O(a) ? S(a, !0) : n.blur();
                }
            };
            return (
                n || r.addEventListener("keydown", i, !0),
                () => {
                    n || r.removeEventListener("keydown", i, !0);
                }
            );
        }, [e, t, n]),
        (0, r.b)(() => {
            var n;
            let r = (0, a.r3)(e.current ? e.current[0] : void 0);
            if (!t) return;
            let s = U.getTreeNode(e);
            if (s)
                return (
                    (s.nodeToRestore = null != (n = o.current) ? n : void 0),
                    () => {
                        let n = U.getTreeNode(e);
                        if (!n) return;
                        let a = n.nodeToRestore,
                            o = (0, i.vY)(r);
                        if (t && a && ((o && I(o, e)) || (o === r.body && P(e)))) {
                            let t = U.clone();
                            requestAnimationFrame(() => {
                                if (r.activeElement === r.body) {
                                    let n = t.getTreeNode(e);
                                    for (; n; ) {
                                        if (n.nodeToRestore && n.nodeToRestore.isConnected)
                                            return void w(n.nodeToRestore);
                                        n = n.parent;
                                    }
                                    for (n = t.getTreeNode(e); n; ) {
                                        if (n.scopeRef && n.scopeRef.current && U.getTreeNode(n.scopeRef))
                                            return void w(A(n.scopeRef.current, !0));
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
    e.dispatchEvent(
        new CustomEvent(_, {
            bubbles: !0,
            cancelable: !0,
        }),
    ) && S(e);
}
function L(e, t, n) {
    let r = (null == t ? void 0 : t.tabbable) ? s.W : s.E,
        i = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
        o = (0, a.r3)(i),
        c = (0, l.A)(o, e || o, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
                var i;
                return (null == t || null == (i = t.from) ? void 0 : i.contains(e)) ||
                    ((null == t ? void 0 : t.tabbable) &&
                        "INPUT" === e.tagName &&
                        "radio" === e.getAttribute("type") &&
                        (!b(e) ||
                            ("INPUT" === c.currentNode.tagName &&
                                "radio" === c.currentNode.type &&
                                c.currentNode.name === e.name)))
                    ? NodeFilter.FILTER_REJECT
                    : r(e) && (!n || v(e, n)) && (!(null == t ? void 0 : t.accept) || t.accept(e))
                      ? NodeFilter.FILTER_ACCEPT
                      : NodeFilter.FILTER_SKIP;
            },
        });
    return (null == t ? void 0 : t.from) && (c.currentNode = t.from), c;
}
function x(e, t = {}) {
    return {
        focusNext(n = {}) {
            let r = e.current;
            if (!r) return null;
            let { from: o, tabbable: s = t.tabbable, wrap: l = t.wrap, accept: c = t.accept } = n,
                u = o || (0, i.vY)((0, a.r3)(r)),
                d = L(r, {
                    tabbable: s,
                    accept: c,
                });
            r.contains(u) && (d.currentNode = u);
            let f = d.nextNode();
            return !f && l && ((d.currentNode = r), (f = d.nextNode())), f && S(f, !0), f;
        },
        focusPrevious(n = t) {
            let r = e.current;
            if (!r) return null;
            let { from: o, tabbable: s = t.tabbable, wrap: l = t.wrap, accept: c = t.accept } = n,
                u = o || (0, i.vY)((0, a.r3)(r)),
                d = L(r, {
                    tabbable: s,
                    accept: c,
                });
            if (r.contains(u)) d.currentNode = u;
            else {
                let e = M(d);
                return e && S(e, !0), null != e ? e : null;
            }
            let f = d.previousNode();
            if (!f && l) {
                d.currentNode = r;
                let e = M(d);
                if (!e) return null;
                f = e;
            }
            return f && S(f, !0), null != f ? f : null;
        },
        focusFirst(n = t) {
            let r = e.current;
            if (!r) return null;
            let { tabbable: i = t.tabbable, accept: a = t.accept } = n,
                o = L(r, {
                    tabbable: i,
                    accept: a,
                }).nextNode();
            return o && S(o, !0), o;
        },
        focusLast(n = t) {
            let r = e.current;
            if (!r) return null;
            let { tabbable: i = t.tabbable, accept: a = t.accept } = n,
                o = M(
                    L(r, {
                        tabbable: i,
                        accept: a,
                    }),
                );
            return o && S(o, !0), null != o ? o : null;
        },
    };
}
function M(e) {
    let t, n;
    do (t = e.lastChild()) && (n = t);
    while (t);
    return n;
}
class j {
    get size() {
        return this.fastMap.size;
    }
    getTreeNode(e) {
        return this.fastMap.get(e);
    }
    addTreeNode(e, t, n) {
        let r = this.fastMap.get(null != t ? t : null);
        if (!r) return;
        let i = new k({ scopeRef: e });
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
                v(e.nodeToRestore, t.scopeRef.current) &&
                (e.nodeToRestore = t.nodeToRestore);
        let r = t.children;
        n && (n.removeChild(t), r.size > 0 && r.forEach((e) => n && n.addChild(e))), this.fastMap.delete(t.scopeRef);
    }
    *traverse(e = this.root) {
        if ((null != e.scopeRef && (yield e), e.children.size > 0)) for (let t of e.children) yield* this.traverse(t);
    }
    clone() {
        var e, t;
        let n = new j();
        for (let r of this.traverse())
            n.addTreeNode(
                r.scopeRef,
                null != (t = null == (e = r.parent) ? void 0 : e.scopeRef) ? t : null,
                r.nodeToRestore,
            );
        return n;
    }
    constructor() {
        (this.fastMap = new Map()), (this.root = new k({ scopeRef: null })), this.fastMap.set(null, this.root);
    }
}
class k {
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
let U = new j();
