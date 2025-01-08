r.d(n, {
    E7: function () {
        return w;
    },
    Fx: function () {
        return B;
    },
    MT: function () {
        return _;
    },
    QL: function () {
        return x;
    },
    cW: function () {
        return S;
    },
    ex: function () {
        return o;
    },
    kc: function () {
        return F;
    },
    pu: function () {
        return V;
    }
});
var i = r(661763),
    a = r(192379),
    s = r(921336);
function o(e) {
    let n = (0, i.r3)(e);
    if ('virtual' === (0, s.Jz)()) {
        let r = n.activeElement;
        (0, i.QB)(() => {
            n.activeElement === r && e.isConnected && (0, i.Ao)(e);
        });
    } else (0, i.Ao)(e);
}
function l(e) {
    let n = (0, i.kR)(e);
    if (!(e instanceof n.HTMLElement) && !(e instanceof n.SVGElement)) return !1;
    let { display: r, visibility: a } = e.style,
        s = 'none' !== r && 'hidden' !== a && 'collapse' !== a;
    if (s) {
        let { getComputedStyle: n } = e.ownerDocument.defaultView,
            { display: r, visibility: i } = n(e);
        s = 'none' !== r && 'hidden' !== i && 'collapse' !== i;
    }
    return s;
}
function u(e, n) {
    return !e.hasAttribute('hidden') && ('DETAILS' !== e.nodeName || !n || 'SUMMARY' === n.nodeName || e.hasAttribute('open'));
}
function c(e, n) {
    return '#comment' !== e.nodeName && l(e) && u(e, n) && (!e.parentElement || c(e.parentElement, e));
}
let d = a.createContext(null),
    f = null;
function _(e) {
    let { children: n, contain: r, restoreFocus: s, autoFocus: o } = e,
        l = (0, a.useRef)(null),
        u = (0, a.useRef)(null),
        c = (0, a.useRef)([]),
        { parentNode: _ } = (0, a.useContext)(d) || {},
        p = (0, a.useMemo)(() => new k({ scopeRef: c }), [c]);
    (0, i.bt)(() => {
        let e = _ || U.root;
        if (U.getTreeNode(e.scopeRef) && f && !A(f, e.scopeRef)) {
            let n = U.getTreeNode(f);
            n && (e = n);
        }
        e.addChild(p), U.addNode(p);
    }, [p, _]),
        (0, i.bt)(() => {
            let e = U.getTreeNode(c);
            e && (e.contain = !!r);
        }, [r]),
        (0, i.bt)(() => {
            var e;
            let n = null === (e = l.current) || void 0 === e ? void 0 : e.nextSibling,
                r = [];
            for (; n && n !== u.current; ) r.push(n), (n = n.nextSibling);
            c.current = r;
        }, [n]),
        O(c, s, r),
        I(c, r),
        L(c, s, r),
        R(c, o),
        (0, a.useEffect)(() => {
            let e = (0, i.r3)(c.current ? c.current[0] : void 0).activeElement,
                n = null;
            if (b(e, c.current)) {
                for (let r of U.traverse()) r.scopeRef && b(e, r.scopeRef.current) && (n = r);
                n === U.getTreeNode(c) && (f = n.scopeRef);
            }
        }, [c]),
        (0, i.bt)(
            () => () => {
                var e, n, r;
                let i = null !== (r = null === (n = U.getTreeNode(c)) || void 0 === n ? void 0 : null === (e = n.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== r ? r : null;
                (c === f || A(c, f)) && (!i || U.getTreeNode(i)) && (f = i), U.removeTreeNode(c);
            },
            [c]
        );
    let m = (0, a.useMemo)(() => h(c), []),
        g = (0, a.useMemo)(
            () => ({
                focusManager: m,
                parentNode: p
            }),
            [p, m]
        );
    return a.createElement(
        d.Provider,
        { value: g },
        a.createElement('span', {
            'data-focus-scope-start': !0,
            hidden: !0,
            ref: l
        }),
        n,
        a.createElement('span', {
            'data-focus-scope-end': !0,
            hidden: !0,
            ref: u
        })
    );
}
function h(e) {
    return {
        focusNext(n = {}) {
            let r = e.current,
                { from: a, tabbable: s, wrap: o, accept: l } = n,
                u = a || (0, i.r3)(r[0]).activeElement,
                c = r[0].previousElementSibling,
                d = x(
                    E(r),
                    {
                        tabbable: s,
                        accept: l
                    },
                    r
                );
            d.currentNode = b(u, r) ? u : c;
            let f = d.nextNode();
            return !f && o && ((d.currentNode = c), (f = d.nextNode())), f && N(f, !0), f;
        },
        focusPrevious(n = {}) {
            let r = e.current,
                { from: a, tabbable: s, wrap: o, accept: l } = n,
                u = a || (0, i.r3)(r[0]).activeElement,
                c = r[r.length - 1].nextElementSibling,
                d = x(
                    E(r),
                    {
                        tabbable: s,
                        accept: l
                    },
                    r
                );
            d.currentNode = b(u, r) ? u : c;
            let f = d.previousNode();
            return !f && o && ((d.currentNode = c), (f = d.previousNode())), f && N(f, !0), f;
        },
        focusFirst(n = {}) {
            let r = e.current,
                { tabbable: i, accept: a } = n,
                s = x(
                    E(r),
                    {
                        tabbable: i,
                        accept: a
                    },
                    r
                );
            s.currentNode = r[0].previousElementSibling;
            let o = s.nextNode();
            return o && N(o, !0), o;
        },
        focusLast(n = {}) {
            let r = e.current,
                { tabbable: i, accept: a } = n,
                s = x(
                    E(r),
                    {
                        tabbable: i,
                        accept: a
                    },
                    r
                );
            s.currentNode = r[r.length - 1].nextElementSibling;
            let o = s.previousNode();
            return o && N(o, !0), o;
        }
    };
}
let p = ['input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'a[href]', 'area[href]', 'summary', 'iframe', 'object', 'embed', 'audio[controls]', 'video[controls]', '[contenteditable]'],
    m = p.join(':not([hidden]),') + ',[tabindex]:not([disabled]):not([hidden])';
p.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
let g = p.join(':not([hidden]):not([tabindex="-1"]),');
function E(e) {
    return e[0].parentElement;
}
function v(e) {
    let n = U.getTreeNode(f);
    for (; n && n.scopeRef !== e; ) {
        if (n.contain) return !1;
        n = n.parent;
    }
    return !0;
}
function I(e, n) {
    let r = (0, a.useRef)(),
        s = (0, a.useRef)();
    (0, i.bt)(() => {
        let a = e.current;
        if (!n) {
            s.current && (cancelAnimationFrame(s.current), (s.current = void 0));
            return;
        }
        let o = (0, i.r3)(a ? a[0] : void 0),
            l = (n) => {
                if ('Tab' !== n.key || n.altKey || n.ctrlKey || n.metaKey || !v(e)) return;
                let r = o.activeElement,
                    i = e.current;
                if (!i || !b(r, i)) return;
                let a = x(E(i), { tabbable: !0 }, i);
                if (!r) return;
                a.currentNode = r;
                let s = n.shiftKey ? a.previousNode() : a.nextNode();
                !s && ((a.currentNode = n.shiftKey ? i[i.length - 1].nextElementSibling : i[0].previousElementSibling), (s = n.shiftKey ? a.previousNode() : a.nextNode())), n.preventDefault(), s && N(s, !0);
            },
            u = (n) => {
                (!f || A(f, e)) && b(n.target, e.current) ? ((f = e), (r.current = n.target)) : v(e) && !y(n.target, e) ? (r.current ? r.current.focus() : f && f.current && C(f.current)) : v(e) && (r.current = n.target);
            },
            c = (n) => {
                s.current && cancelAnimationFrame(s.current),
                    (s.current = requestAnimationFrame(() => {
                        if (o.activeElement && v(e) && !y(o.activeElement, e)) {
                            if (((f = e), o.body.contains(n.target))) {
                                var i;
                                (r.current = n.target), null === (i = r.current) || void 0 === i || i.focus();
                            } else f.current && C(f.current);
                        }
                    }));
            };
        return (
            o.addEventListener('keydown', l, !1),
            o.addEventListener('focusin', u, !1),
            null == a || a.forEach((e) => e.addEventListener('focusin', u, !1)),
            null == a || a.forEach((e) => e.addEventListener('focusout', c, !1)),
            () => {
                o.removeEventListener('keydown', l, !1), o.removeEventListener('focusin', u, !1), null == a || a.forEach((e) => e.removeEventListener('focusin', u, !1)), null == a || a.forEach((e) => e.removeEventListener('focusout', c, !1));
            }
        );
    }, [e, n]),
        (0, i.bt)(
            () => () => {
                s.current && cancelAnimationFrame(s.current);
            },
            [s]
        );
}
function T(e) {
    return y(e);
}
function b(e, n) {
    return !!e && !!n && n.some((n) => n.contains(e));
}
function y(e, n = null) {
    if (e instanceof Element && e.closest('[data-react-aria-top-layer]')) return !0;
    for (let { scopeRef: r } of U.traverse(U.getTreeNode(n))) if (r && b(e, r.current)) return !0;
    return !1;
}
function S(e) {
    return y(e, f);
}
function A(e, n) {
    var r;
    let i = null === (r = U.getTreeNode(n)) || void 0 === r ? void 0 : r.parent;
    for (; i; ) {
        if (i.scopeRef === e) return !0;
        i = i.parent;
    }
    return !1;
}
function N(e, n = !1) {
    if (null == e || n) {
        if (null != e)
            try {
                e.focus();
            } catch (e) {}
    } else
        try {
            o(e);
        } catch (e) {}
}
function C(e, n = !0) {
    let r = e[0].previousElementSibling,
        i = E(e),
        a = x(i, { tabbable: n }, e);
    a.currentNode = r;
    let s = a.nextNode();
    n && !s && (((a = x((i = E(e)), { tabbable: !1 }, e)).currentNode = r), (s = a.nextNode())), N(s);
}
function R(e, n) {
    let r = a.useRef(n);
    (0, a.useEffect)(() => {
        r.current && ((f = e), !b((0, i.r3)(e.current ? e.current[0] : void 0).activeElement, f.current) && e.current && C(e.current)), (r.current = !1);
    }, [e]);
}
function O(e, n, r) {
    (0, i.bt)(() => {
        if (n || r) return;
        let a = e.current,
            s = (0, i.r3)(a ? a[0] : void 0),
            o = (n) => {
                let r = n.target;
                b(r, e.current) ? (f = e) : !T(r) && (f = null);
            };
        return (
            s.addEventListener('focusin', o, !1),
            null == a || a.forEach((e) => e.addEventListener('focusin', o, !1)),
            () => {
                s.removeEventListener('focusin', o, !1), null == a || a.forEach((e) => e.removeEventListener('focusin', o, !1));
            }
        );
    }, [e, n, r]);
}
function D(e) {
    let n = U.getTreeNode(f);
    for (; n && n.scopeRef !== e; ) {
        if (n.nodeToRestore) return !1;
        n = n.parent;
    }
    return (null == n ? void 0 : n.scopeRef) === e;
}
function L(e, n, r) {
    let s = (0, a.useRef)('undefined' != typeof document ? (0, i.r3)(e.current ? e.current[0] : void 0).activeElement : null);
    (0, i.bt)(() => {
        let a = e.current,
            s = (0, i.r3)(a ? a[0] : void 0);
        if (!n || r) return;
        let o = () => {
            (!f || A(f, e)) && b(s.activeElement, e.current) && (f = e);
        };
        return (
            s.addEventListener('focusin', o, !1),
            null == a || a.forEach((e) => e.addEventListener('focusin', o, !1)),
            () => {
                s.removeEventListener('focusin', o, !1), null == a || a.forEach((e) => e.removeEventListener('focusin', o, !1));
            }
        );
    }, [e, r]),
        (0, i.bt)(() => {
            let a = (0, i.r3)(e.current ? e.current[0] : void 0);
            if (!n) return;
            let s = (n) => {
                if ('Tab' !== n.key || n.altKey || n.ctrlKey || n.metaKey || !v(e)) return;
                let r = a.activeElement;
                if (!b(r, e.current)) return;
                let i = U.getTreeNode(e);
                if (!i) return;
                let s = i.nodeToRestore,
                    o = x(a.body, { tabbable: !0 });
                o.currentNode = r;
                let l = n.shiftKey ? o.previousNode() : o.nextNode();
                if (((!s || !a.body.contains(s) || s === a.body) && ((s = void 0), (i.nodeToRestore = void 0)), (!l || !b(l, e.current)) && s)) {
                    o.currentNode = s;
                    do l = n.shiftKey ? o.previousNode() : o.nextNode();
                    while (b(l, e.current));
                    n.preventDefault(), n.stopPropagation(), l ? N(l, !0) : T(s) ? N(s, !0) : r.blur();
                }
            };
            return (
                !r && a.addEventListener('keydown', s, !0),
                () => {
                    !r && a.removeEventListener('keydown', s, !0);
                }
            );
        }, [e, n, r]),
        (0, i.bt)(() => {
            var r;
            let a = (0, i.r3)(e.current ? e.current[0] : void 0);
            if (!n) return;
            let o = U.getTreeNode(e);
            if (o)
                return (
                    (o.nodeToRestore = null !== (r = s.current) && void 0 !== r ? r : void 0),
                    () => {
                        let r = U.getTreeNode(e);
                        if (!r) return;
                        let i = r.nodeToRestore;
                        if (n && i && (b(a.activeElement, e.current) || (a.activeElement === a.body && D(e)))) {
                            let n = U.clone();
                            requestAnimationFrame(() => {
                                if (a.activeElement === a.body) {
                                    let r = n.getTreeNode(e);
                                    for (; r; ) {
                                        if (r.nodeToRestore && r.nodeToRestore.isConnected) {
                                            N(r.nodeToRestore);
                                            return;
                                        }
                                        r = r.parent;
                                    }
                                    for (r = n.getTreeNode(e); r; ) {
                                        if (r.scopeRef && r.scopeRef.current && U.getTreeNode(r.scopeRef)) {
                                            C(r.scopeRef.current, !0);
                                            return;
                                        }
                                        r = r.parent;
                                    }
                                }
                            });
                        }
                    }
                );
        }, [e, n]);
}
function x(e, n, r) {
    let a = (null == n ? void 0 : n.tabbable) ? g : m,
        s = (0, i.r3)(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
                var i;
                return (null == n ? void 0 : null === (i = n.from) || void 0 === i ? void 0 : i.contains(e)) ? NodeFilter.FILTER_REJECT : e.matches(a) && c(e) && (!r || b(e, r)) && (!(null == n ? void 0 : n.accept) || n.accept(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
            }
        });
    return (null == n ? void 0 : n.from) && (s.currentNode = n.from), s;
}
function w(e, n = {}) {
    return {
        focusNext(r = {}) {
            let a = e.current;
            if (!a) return null;
            let { from: s, tabbable: o = n.tabbable, wrap: l = n.wrap, accept: u = n.accept } = r,
                c = s || (0, i.r3)(a).activeElement,
                d = x(a, {
                    tabbable: o,
                    accept: u
                });
            a.contains(c) && (d.currentNode = c);
            let f = d.nextNode();
            return !f && l && ((d.currentNode = a), (f = d.nextNode())), f && N(f, !0), f;
        },
        focusPrevious(r = n) {
            let a = e.current;
            if (!a) return null;
            let { from: s, tabbable: o = n.tabbable, wrap: l = n.wrap, accept: u = n.accept } = r,
                c = s || (0, i.r3)(a).activeElement,
                d = x(a, {
                    tabbable: o,
                    accept: u
                });
            if (a.contains(c)) d.currentNode = c;
            else {
                let e = P(d);
                return e && N(e, !0), null != e ? e : null;
            }
            let f = d.previousNode();
            if (!f && l) {
                d.currentNode = a;
                let e = P(d);
                if (!e) return null;
                f = e;
            }
            return f && N(f, !0), null != f ? f : null;
        },
        focusFirst(r = n) {
            let i = e.current;
            if (!i) return null;
            let { tabbable: a = n.tabbable, accept: s = n.accept } = r,
                o = x(i, {
                    tabbable: a,
                    accept: s
                }).nextNode();
            return o && N(o, !0), o;
        },
        focusLast(r = n) {
            let i = e.current;
            if (!i) return null;
            let { tabbable: a = n.tabbable, accept: s = n.accept } = r,
                o = P(
                    x(i, {
                        tabbable: a,
                        accept: s
                    })
                );
            return o && N(o, !0), null != o ? o : null;
        }
    };
}
function P(e) {
    let n, r;
    do (n = e.lastChild()) && (r = n);
    while (n);
    return r;
}
class M {
    get size() {
        return this.fastMap.size;
    }
    getTreeNode(e) {
        return this.fastMap.get(e);
    }
    addTreeNode(e, n, r) {
        let i = this.fastMap.get(null != n ? n : null);
        if (!i) return;
        let a = new k({ scopeRef: e });
        i.addChild(a), (a.parent = i), this.fastMap.set(e, a), r && (a.nodeToRestore = r);
    }
    addNode(e) {
        this.fastMap.set(e.scopeRef, e);
    }
    removeTreeNode(e) {
        if (null === e) return;
        let n = this.fastMap.get(e);
        if (!n) return;
        let r = n.parent;
        for (let e of this.traverse()) e !== n && n.nodeToRestore && e.nodeToRestore && n.scopeRef && n.scopeRef.current && b(e.nodeToRestore, n.scopeRef.current) && (e.nodeToRestore = n.nodeToRestore);
        let i = n.children;
        r && (r.removeChild(n), i.size > 0 && i.forEach((e) => r && r.addChild(e))), this.fastMap.delete(n.scopeRef);
    }
    *traverse(e = this.root) {
        if ((null != e.scopeRef && (yield e), e.children.size > 0)) for (let n of e.children) yield* this.traverse(n);
    }
    clone() {
        var e, n;
        let r = new M();
        for (let i of this.traverse()) r.addTreeNode(i.scopeRef, null !== (n = null === (e = i.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== n ? n : null, i.nodeToRestore);
        return r;
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
let U = new M();
function B(e = {}) {
    let { autoFocus: n = !1, isTextInput: r, within: i } = e,
        o = (0, a.useRef)({
            isFocused: !1,
            isFocusVisible: n || (0, s.E)()
        }),
        [l, u] = (0, a.useState)(!1),
        [c, d] = (0, a.useState)(() => o.current.isFocused && o.current.isFocusVisible),
        f = (0, a.useCallback)(() => d(o.current.isFocused && o.current.isFocusVisible), []),
        _ = (0, a.useCallback)(
            (e) => {
                (o.current.isFocused = e), u(e), f();
            },
            [f]
        );
    (0, s.mG)(
        (e) => {
            (o.current.isFocusVisible = e), f();
        },
        [],
        { isTextInput: r }
    );
    let { focusProps: h } = (0, s.KK)({
            isDisabled: i,
            onFocusChange: _
        }),
        { focusWithinProps: p } = (0, s.L_)({
            isDisabled: !i,
            onFocusWithinChange: _
        });
    return {
        isFocused: l,
        isFocusVisible: c,
        focusProps: i ? p : h
    };
}
let G = a.createContext(null);
function Z(e) {
    let n = (0, a.useContext)(G) || {};
    (0, i.lE)(n, e);
    let { ref: r, ...s } = n;
    return s;
}
function F(e, n) {
    let { focusProps: r } = (0, s.KK)(e),
        { keyboardProps: l } = (0, s.v5)(e),
        u = (0, i.dG)(r, l),
        c = Z(n),
        d = e.isDisabled ? {} : c,
        f = (0, a.useRef)(e.autoFocus);
    return (
        (0, a.useEffect)(() => {
            f.current && n.current && o(n.current), (f.current = !1);
        }, [n]),
        {
            focusableProps: (0, i.dG)(
                {
                    ...u,
                    tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0
                },
                d
            )
        }
    );
}
function V(e, n) {
    let r = null == n ? void 0 : n.isDisabled,
        [s, o] = (0, a.useState)(!1);
    return (
        (0, i.bt)(() => {
            if ((null == e ? void 0 : e.current) && !r) {
                let n = () => {
                    e.current && o(!!x(e.current, { tabbable: !0 }).nextNode());
                };
                n();
                let r = new MutationObserver(n);
                return (
                    r.observe(e.current, {
                        subtree: !0,
                        childList: !0,
                        attributes: !0,
                        attributeFilter: ['tabIndex', 'disabled']
                    }),
                    () => {
                        r.disconnect();
                    }
                );
            }
        }),
        !r && s
    );
}
