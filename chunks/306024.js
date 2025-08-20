n.d(t, { QL: () => y });
var r = n(278769),
    i = n(295579),
    a = n(770173);
n(647438);
let o = "react-aria-focus-scope-restore",
    s = null;
function l(e) {
    return e[0].parentElement;
}
function c(e) {
    let t = I.getTreeNode(s);
    for (; t && t.scopeRef !== e; ) {
        if (t.contain) return !1;
        t = t.parent;
    }
    return !0;
}
function u(e) {
    if (e.checked) return !0;
    let t = [];
    if (e.form) {
        var n, i;
        let r = null == (i = e.form) || null == (n = i.elements) ? void 0 : n.namedItem(e.name);
        t = [...(null != r ? r : [])];
    } else
        t = [...(0, r.r3)(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)].filter(
            (e) => !e.form,
        );
    return !!t && !t.some((e) => e.checked);
}
function d(e) {
    return _(e);
}
function f(e, t) {
    return !!e && !!t && t.some((t) => t.contains(e));
}
function _(e, t = null) {
    if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
    for (let { scopeRef: n } of I.traverse(I.getTreeNode(t))) if (n && f(e, n.current)) return !0;
    return !1;
}
function p(e, t) {
    var n;
    let r = null == (n = I.getTreeNode(t)) ? void 0 : n.parent;
    for (; r; ) {
        if (r.scopeRef === e) return !0;
        r = r.parent;
    }
    return !1;
}
function h(e, t = !1) {
    if (null == e || t) {
        if (null != e)
            try {
                e.focus();
            } catch {}
    } else
        try {
            $cgawC$focusSafely(e);
        } catch {}
}
function m(e, t = !0) {
    let n = e[0].previousElementSibling,
        r = l(e),
        i = y(r, { tabbable: t }, e);
    i.currentNode = n;
    let a = i.nextNode();
    return t && !a && (((i = y((r = l(e)), { tabbable: !1 }, e)).currentNode = n), (a = i.nextNode())), a;
}
function g(e, t = !0) {
    h(m(e, t));
}
function E(e) {
    let t = I.getTreeNode(s);
    for (; t && t.scopeRef !== e; ) {
        if (t.nodeToRestore) return !1;
        t = t.parent;
    }
    return (null == t ? void 0 : t.scopeRef) === e;
}
function b(e) {
    e.dispatchEvent(
        new CustomEvent(o, {
            bubbles: !0,
            cancelable: !0,
        }),
    ) && h(e);
}
function y(e, t, n) {
    let o = (null == t ? void 0 : t.tabbable) ? i.W : i.E,
        s = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
        l = (0, r.r3)(s),
        c = (0, a.A)(l, e || l, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
                var r;
                return (null == t || null == (r = t.from) ? void 0 : r.contains(e)) ||
                    ((null == t ? void 0 : t.tabbable) &&
                        "INPUT" === e.tagName &&
                        "radio" === e.getAttribute("type") &&
                        (!u(e) ||
                            ("INPUT" === c.currentNode.tagName &&
                                "radio" === c.currentNode.type &&
                                c.currentNode.name === e.name)))
                    ? NodeFilter.FILTER_REJECT
                    : o(e) && (!n || f(e, n)) && (!(null == t ? void 0 : t.accept) || t.accept(e))
                      ? NodeFilter.FILTER_ACCEPT
                      : NodeFilter.FILTER_SKIP;
            },
        });
    return (null == t ? void 0 : t.from) && (c.currentNode = t.from), c;
}
class O {
    get size() {
        return this.fastMap.size;
    }
    getTreeNode(e) {
        return this.fastMap.get(e);
    }
    addTreeNode(e, t, n) {
        let r = this.fastMap.get(null != t ? t : null);
        if (!r) return;
        let i = new v({ scopeRef: e });
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
                f(e.nodeToRestore, t.scopeRef.current) &&
                (e.nodeToRestore = t.nodeToRestore);
        let r = t.children;
        n && (n.removeChild(t), r.size > 0 && r.forEach((e) => n && n.addChild(e))), this.fastMap.delete(t.scopeRef);
    }
    *traverse(e = this.root) {
        if ((null != e.scopeRef && (yield e), e.children.size > 0)) for (let t of e.children) yield* this.traverse(t);
    }
    clone() {
        var e, t;
        let n = new O();
        for (let r of this.traverse())
            n.addTreeNode(
                r.scopeRef,
                null != (t = null == (e = r.parent) ? void 0 : e.scopeRef) ? t : null,
                r.nodeToRestore,
            );
        return n;
    }
    constructor() {
        (this.fastMap = new Map()), (this.root = new v({ scopeRef: null })), this.fastMap.set(null, this.root);
    }
}
class v {
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
let I = new O();
