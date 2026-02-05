"use strict";
n.d(t, { A: () => tj, Fo: () => tO, RV: () => ex, f7: () => eW, o$: () => t$, rL: () => eI, zL: () => tk });
var r = n(877413),
    i = n.n(r),
    a = n(805353),
    s = n.n(a),
    o = n(879378),
    l = n.n(o),
    u = n(64700),
    c = n(302588),
    d = n(719442),
    _ = n(234379),
    f = n(294106),
    p = n(340287);
function h(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
var E = 0;
class A {
    constructor() {
        this.id = "".concat(E++);
    }
}
var I = new WeakMap(),
    T = new WeakMap(),
    y = new WeakMap(),
    S = new WeakMap(),
    v = new WeakMap(),
    C = new WeakMap(),
    b = new WeakMap(),
    N = new WeakMap(),
    R = new WeakMap(),
    O = new WeakMap(),
    D = new WeakMap(),
    L = new WeakMap(),
    w = new WeakMap(),
    x = new WeakMap(),
    P = new WeakMap(),
    M = new WeakMap(),
    k = new WeakMap(),
    U = new WeakMap(),
    G = new WeakMap(),
    V = new WeakMap(),
    F = new WeakMap(),
    B = Symbol("placeholder"),
    j = Symbol("mark-placeholder"),
    H = globalThis.Text,
    Y = (e) => (e && e.ownerDocument && e.ownerDocument.defaultView) || null,
    W = (e) => z(e) && 8 === e.nodeType,
    K = (e) => z(e) && 1 === e.nodeType,
    z = (e) => {
        var t = Y(e);
        return !!t && e instanceof t.Node;
    },
    $ = (e) => {
        var t = e && e.anchorNode && Y(e.anchorNode);
        return !!t && e instanceof t.Selection;
    },
    q = (e) => z(e) && 3 === e.nodeType,
    Z = (e) => e.clipboardData && "" !== e.clipboardData.getData("text/plain") && 1 === e.clipboardData.types.length,
    Q = (e) => {
        var [t, n] = e;
        if (K(t) && t.childNodes.length) {
            var r = n === t.childNodes.length,
                i = r ? n - 1 : n;
            for ([t, i] = J(t, i, r ? "backward" : "forward"), r = i < n; K(t) && t.childNodes.length; ) {
                var a = r ? t.childNodes.length - 1 : 0;
                t = ee(t, a, r ? "backward" : "forward");
            }
            n = r && null != t.textContent ? t.textContent.length : 0;
        }
        return [t, n];
    },
    X = (e) => {
        for (var t = e && e.parentNode; t; ) {
            if ("[object ShadowRoot]" === t.toString()) return !0;
            t = t.parentNode;
        }
        return !1;
    },
    J = (e, t, n) => {
        for (
            var { childNodes: r } = e, i = r[t], a = t, s = !1, o = !1;
            (W(i) || (K(i) && 0 === i.childNodes.length) || (K(i) && "false" === i.getAttribute("contenteditable"))) &&
            (!s || !o);
        ) {
            if (a >= r.length) {
                (s = !0), (a = t - 1), (n = "backward");
                continue;
            }
            if (a < 0) {
                (o = !0), (a = t + 1), (n = "forward");
                continue;
            }
            (i = r[a]), (t = a), (a += "forward" === n ? 1 : -1);
        }
        return [i, t];
    },
    ee = (e, t, n) => {
        var [r] = J(e, t, n);
        return r;
    },
    et = (e) => {
        var t = "";
        if (q(e) && e.nodeValue) return e.nodeValue;
        if (K(e)) {
            for (var n of Array.from(e.childNodes)) t += et(n);
            var r = getComputedStyle(e).getPropertyValue("display");
            ("block" === r || "list" === r || "BR" === e.tagName) && (t += "\n");
        }
        return t;
    },
    en = /data-slate-fragment="(.+?)"/m,
    er = (e) => {
        var [, t] = e.getData("text/html").match(en) || [];
        return t;
    },
    ei = (e, t, n) => {
        var { target: r } = t;
        if (K(r) && r.matches('[contentEditable="false"]')) return !1;
        var { document: i } = eI.getWindow(e);
        if (i.contains(r)) return eI.hasDOMNode(e, r, { editable: !0 });
        var a = n.find((e) => {
            var { addedNodes: t, removedNodes: n } = e;
            for (var i of t) if (i === r || i.contains(r)) return !0;
            for (var a of n) if (a === r || a.contains(r)) return !0;
        });
        return !!a && a !== t && ei(e, a, n);
    },
    ea = parseInt(u.version.split(".")[0], 10) >= 17,
    es =
        "u" > typeof navigator &&
        "u" > typeof window &&
        /iPad|iPhone|iPod/.test(navigator.userAgent) &&
        !window.MSStream,
    eo = "u" > typeof navigator && /Mac OS X/.test(navigator.userAgent),
    el = "u" > typeof navigator && /Android/.test(navigator.userAgent),
    eu = "u" > typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
    ec = "u" > typeof navigator && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
    ed = "u" > typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
    e_ = "u" > typeof navigator && /Chrome/i.test(navigator.userAgent),
    ef = "u" > typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
    ep = el && "u" > typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
    eh =
        "u" > typeof navigator &&
        /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
    em = "u" > typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
    eg = "u" > typeof navigator && /.*Wechat/.test(navigator.userAgent),
    eE = "u" > typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
    eA =
        (!ef || !ep) &&
        !ed &&
        "u" > typeof globalThis &&
        globalThis.InputEvent &&
        "function" == typeof globalThis.InputEvent.prototype.getTargetRanges,
    eI = {
        isComposing: (e) => !!L.get(e),
        getWindow(e) {
            var t = y.get(e);
            if (!t) throw Error("Unable to find a host window element for this editor");
            return t;
        },
        findKey(e, t) {
            var n = N.get(t);
            return n || ((n = new A()), N.set(t, n)), n;
        },
        findPath(e, t) {
            for (var n = [], r = t; ; ) {
                var i = T.get(r);
                if (null == i)
                    if (d.KE.isEditor(r)) return n;
                    else break;
                var a = I.get(r);
                if (null == a) break;
                n.unshift(a), (r = i);
            }
            throw Error("Unable to find the path for Slate node: ".concat(d.h6.stringify(t)));
        },
        findDocumentOrShadowRoot(e) {
            var t = eI.toDOMNode(e, e),
                n = t.getRootNode();
            return (n instanceof Document || n instanceof ShadowRoot) && null != n.getSelection ? n : t.ownerDocument;
        },
        isFocused: (e) => !!D.get(e),
        isReadOnly: (e) => !!O.get(e),
        blur(e) {
            var t = eI.toDOMNode(e, e),
                n = eI.findDocumentOrShadowRoot(e);
            D.set(e, !1), n.activeElement === t && t.blur();
        },
        focus(e) {
            var t = eI.toDOMNode(e, e),
                n = eI.findDocumentOrShadowRoot(e);
            D.set(e, !0), n.activeElement !== t && t.focus({ preventScroll: !0 });
        },
        deselect(e) {
            var { selection: t } = e,
                n = eI.findDocumentOrShadowRoot(e).getSelection();
            n && n.rangeCount > 0 && n.removeAllRanges(), t && d.gB.deselect(e);
        },
        hasDOMNode(e, t) {
            var n,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { editable: i = !1 } = r,
                a = eI.toDOMNode(e, e);
            try {
                n = K(t) ? t : t.parentElement;
            } catch (e) {
                if (!e.message.includes('Permission denied to access property "nodeType"')) throw e;
            }
            return (
                !!n &&
                n.closest("[data-slate-editor]") === a &&
                (!i ||
                    !!n.isContentEditable ||
                    ("boolean" == typeof n.isContentEditable && n.closest('[contenteditable="false"]') === a) ||
                    !!n.getAttribute("data-slate-zero-width"))
            );
        },
        insertData(e, t) {
            e.insertData(t);
        },
        insertFragmentData: (e, t) => e.insertFragmentData(t),
        insertTextData: (e, t) => e.insertTextData(t),
        setFragmentData(e, t, n) {
            e.setFragmentData(t, n);
        },
        toDOMNode(e, t) {
            var n = R.get(e),
                r = d.KE.isEditor(t) ? S.get(e) : null == n ? void 0 : n.get(eI.findKey(e, t));
            if (!r) throw Error("Cannot resolve a DOM node from Slate node: ".concat(d.h6.stringify(t)));
            return r;
        },
        toDOMPoint(e, t) {
            var [n] = d.KE.node(e, t.path),
                r = eI.toDOMNode(e, n);
            d.KE.void(e, { at: t }) && (t = { path: t.path, offset: 0 });
            for (
                var i = "[data-slate-string], [data-slate-zero-width]",
                    a = Array.from(r.querySelectorAll(i)),
                    s = 0,
                    o = 0;
                o < a.length;
                o++
            ) {
                var l = a[o],
                    u = l.childNodes[0];
                if (null != u && null != u.textContent) {
                    var { length: c } = u.textContent,
                        _ = l.getAttribute("data-slate-length"),
                        f = null == _ ? c : parseInt(_, 10),
                        p = s + f,
                        h = a[o + 1];
                    if (t.offset === p && null != h && h.hasAttribute("data-slate-mark-placeholder")) {
                        var m,
                            g,
                            E = h.childNodes[0];
                        m = [E instanceof H ? E : h, null != (g = h.textContent) && g.startsWith("\uFEFF") ? 1 : 0];
                        break;
                    }
                    if (t.offset <= p) {
                        m = [u, Math.min(c, Math.max(0, t.offset - s))];
                        break;
                    }
                    s = p;
                }
            }
            if (!m) throw Error("Cannot resolve a DOM point from Slate point: ".concat(d.h6.stringify(t)));
            return m;
        },
        toDOMRange(e, t) {
            var { anchor: n, focus: r } = t,
                i = d.Q6.isBackward(t),
                a = eI.toDOMPoint(e, n),
                s = d.Q6.isCollapsed(t) ? a : eI.toDOMPoint(e, r),
                o = eI.getWindow(e).document.createRange(),
                [l, u] = i ? s : a,
                [c, _] = i ? a : s,
                f = !!(K(l) ? l : l.parentElement).getAttribute("data-slate-zero-width"),
                p = !!(K(c) ? c : c.parentElement).getAttribute("data-slate-zero-width");
            return o.setStart(l, f ? 1 : u), o.setEnd(c, p ? 1 : _), o;
        },
        toSlateNode(e, t) {
            var n = K(t) ? t : t.parentElement;
            n && !n.hasAttribute("data-slate-node") && (n = n.closest("[data-slate-node]"));
            var r = n ? C.get(n) : null;
            if (!r) throw Error("Cannot resolve a Slate node from DOM node: ".concat(n));
            return r;
        },
        findEventRange(e, t) {
            "nativeEvent" in t && (t = t.nativeEvent);
            var n,
                { clientX: r, clientY: i, target: a } = t;
            if (null == r || null == i) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
            var s = eI.toSlateNode(e, t.target),
                o = eI.findPath(e, s);
            if (d.Hg.isElement(s) && d.KE.isVoid(e, s)) {
                var l = a.getBoundingClientRect(),
                    u = e.isInline(s) ? r - l.left < l.left + l.width - r : i - l.top < l.top + l.height - i,
                    c = d.KE.point(e, o, { edge: u ? "start" : "end" }),
                    _ = u ? d.KE.before(e, c) : d.KE.after(e, c);
                if (_) return d.KE.range(e, _);
            }
            var { document: f } = eI.getWindow(e);
            if (f.caretRangeFromPoint) n = f.caretRangeFromPoint(r, i);
            else {
                var p = f.caretPositionFromPoint(r, i);
                p && ((n = f.createRange()).setStart(p.offsetNode, p.offset), n.setEnd(p.offsetNode, p.offset));
            }
            if (!n) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
            return eI.toSlateRange(e, n, { exactMatch: !1, suppressThrow: !1 });
        },
        toSlatePoint(e, t, n) {
            var { exactMatch: r, suppressThrow: i } = n,
                [a, s] = r ? t : Q(t),
                o = a.parentNode,
                l = null,
                u = 0;
            if (o) {
                var c,
                    _,
                    f = eI.toDOMNode(e, e),
                    p = o.closest('[data-slate-void="true"]'),
                    h = p && f.contains(p) ? p : null,
                    m = o.closest("[data-slate-leaf]"),
                    g = null;
                if (m) {
                    if ((l = m.closest('[data-slate-node="text"]'))) {
                        var E = eI.getWindow(e).document.createRange();
                        E.setStart(l, 0), E.setEnd(a, s);
                        var A = E.cloneContents();
                        [
                            ...Array.prototype.slice.call(A.querySelectorAll("[data-slate-zero-width]")),
                            ...Array.prototype.slice.call(A.querySelectorAll("[contenteditable=false]")),
                        ].forEach((e) => {
                            if (
                                el &&
                                !r &&
                                e.hasAttribute("data-slate-zero-width") &&
                                e.textContent.length > 0 &&
                                "\uFEFF" !== e.textContext
                            ) {
                                e.textContent.startsWith("\uFEFF") && (e.textContent = e.textContent.slice(1));
                                return;
                            }
                            e.parentNode.removeChild(e);
                        }),
                            (u = A.textContent.length),
                            (g = l);
                    }
                } else if (h) {
                    for (var I = h.querySelectorAll("[data-slate-leaf]"), T = 0; T < I.length; T++) {
                        var y = I[T];
                        if (eI.hasDOMNode(e, y)) {
                            m = y;
                            break;
                        }
                    }
                    m
                        ? ((l = m.closest('[data-slate-node="text"]')),
                          (u = (g = m).textContent.length),
                          g.querySelectorAll("[data-slate-zero-width]").forEach((e) => {
                              u -= e.textContent.length;
                          }))
                        : (u = 1);
                }
                g &&
                    u === g.textContent.length &&
                    el &&
                    "z" === g.getAttribute("data-slate-zero-width") &&
                    null != (c = g.textContent) &&
                    c.startsWith("\uFEFF") &&
                    (o.hasAttribute("data-slate-zero-width") ||
                        (eu && null != (_ = g.textContent) && _.endsWith("\n\n"))) &&
                    u--;
            }
            if (el && !l && !r) {
                var S = o.hasAttribute("data-slate-node") ? o : o.closest("[data-slate-node]");
                if (S && eI.hasDOMNode(e, S, { editable: !0 })) {
                    var v = eI.toSlateNode(e, S),
                        { path: C, offset: b } = d.KE.start(e, eI.findPath(e, v));
                    return S.querySelector("[data-slate-leaf]") || (b = s), { path: C, offset: b };
                }
            }
            if (!l) {
                if (i) return null;
                throw Error("Cannot resolve a Slate point from DOM point: ".concat(t));
            }
            var N = eI.toSlateNode(e, l);
            return { path: eI.findPath(e, N), offset: u };
        },
        toSlateRange(e, t, n) {
            var r,
                i,
                a,
                s,
                o,
                l,
                { exactMatch: u, suppressThrow: c } = n;
            if (
                (($(t) ? t.anchorNode : t.startContainer) &&
                    ($(t)
                        ? ((r = t.anchorNode),
                          (i = t.anchorOffset),
                          (a = t.focusNode),
                          (s = t.focusOffset),
                          (o =
                              e_ && X(r)
                                  ? t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset
                                  : t.isCollapsed))
                        : ((r = t.startContainer),
                          (i = t.startOffset),
                          (a = t.endContainer),
                          (s = t.endOffset),
                          (o = t.collapsed))),
                null == r || null == a || null == i || null == s)
            )
                throw Error("Cannot resolve a Slate range from DOM range: ".concat(t));
            "getAttribute" in a &&
                "false" === a.getAttribute("contenteditable") &&
                ((a = r), (s = (null == (l = r.textContent) ? void 0 : l.length) || 0));
            var _ = eI.toSlatePoint(e, [r, i], { exactMatch: u, suppressThrow: c });
            if (!_) return null;
            var f = o ? _ : eI.toSlatePoint(e, [a, s], { exactMatch: u, suppressThrow: c });
            if (!f) return null;
            if (eu && !o && r !== a) {
                var p = d.KE.isEnd(e, _, _.path),
                    h = d.KE.isStart(e, f, f.path);
                p && (_ = d.KE.after(e, _) || _), h && (f = d.KE.before(e, f) || f);
            }
            var m = { anchor: _, focus: f };
            return (
                d.Q6.isExpanded(m) &&
                    d.Q6.isForward(m) &&
                    K(a) &&
                    d.KE.void(e, { at: m.focus, mode: "highest" }) &&
                    (m = d.KE.unhangRange(e, m, { voids: !0 })),
                m
            );
        },
        hasRange(e, t) {
            var { anchor: n, focus: r } = t;
            return d.KE.hasPath(e, n.path) && d.KE.hasPath(e, r.path);
        },
        hasTarget: (e, t) => z(t) && eI.hasDOMNode(e, t),
        hasEditableTarget: (e, t) => z(t) && eI.hasDOMNode(e, t, { editable: !0 }),
        hasSelectableTarget: (e, t) => eI.hasEditableTarget(e, t) || eI.isTargetInsideNonReadonlyVoid(e, t),
        isTargetInsideNonReadonlyVoid(e, t) {
            if (O.get(e)) return !1;
            var n = eI.hasTarget(e, t) && eI.toSlateNode(e, t);
            return d.Hg.isElement(n) && d.KE.isVoid(e, n);
        },
        androidScheduleFlush(e) {
            var t;
            null == (t = P.get(e)) || t();
        },
        androidPendingDiffs: (e) => U.get(e),
    },
    eT = ["anchor", "focus"],
    ey = ["anchor", "focus"],
    eS = (e, t) =>
        Object.keys(e).length === Object.keys(t).length &&
        Object.keys(e).every((n) => t.hasOwnProperty(n) && e[n] === t[n]),
    ev = (e, t) => {
        var n = g(e, eT),
            r = g(t, ey);
        return e[B] === t[B] && eS(n, r);
    },
    eC = (e, t) => {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                i = t[n];
            if (!d.Q6.equals(r, i) || !ev(r, i)) return !1;
        }
        return !0;
    },
    eb = (e, t) => {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                i = t[n];
            if (r.anchor.offset !== i.anchor.offset || r.focus.offset !== i.focus.offset || !ev(r, i)) return !1;
        }
        return !0;
    },
    eN = eE ? u.useLayoutEffect : u.useEffect,
    eR = (e) => {
        var { isLast: t, leaf: n, parent: r, text: i } = e,
            a = ex(),
            s = eI.findPath(a, i),
            o = d.wA.parent(s),
            l = !0 === n[j];
        return a.isVoid(r)
            ? u.createElement(eL, { length: d.bP.string(r).length })
            : "" !== n.text || r.children[r.children.length - 1] !== i || a.isInline(r) || "" !== d.KE.string(a, o)
              ? "" === n.text
                  ? u.createElement(eL, { isMarkPlaceholder: l })
                  : t && "\n" === n.text.slice(-1)
                    ? u.createElement(eO, { isTrailing: !0, text: n.text })
                    : u.createElement(eO, { text: n.text })
              : u.createElement(eL, { isLineBreak: !0, isMarkPlaceholder: l });
    },
    eO = (e) => {
        var { text: t, isTrailing: n = !1 } = e,
            r = (0, u.useRef)(null),
            i = () => "".concat(null != t ? t : "").concat(n ? "\n" : ""),
            [a] = (0, u.useState)(i);
        return (
            eN(() => {
                var e = i();
                r.current && r.current.textContent !== e && (r.current.textContent = e);
            }),
            u.createElement(eD, { ref: r }, a)
        );
    },
    eD = (0, u.memo)(
        (0, u.forwardRef)((e, t) => u.createElement("span", { "data-slate-string": !0, ref: t }, e.children)),
    ),
    eL = (e) => {
        var { length: t = 0, isLineBreak: n = !1, isMarkPlaceholder: r = !1 } = e,
            i = { "data-slate-zero-width": n ? "n" : "z", "data-slate-length": t };
        return (
            r && (i["data-slate-mark-placeholder"] = !0),
            u.createElement(
                "span",
                Object.assign({}, i),
                el && n ? null : "\uFEFF",
                n ? u.createElement("br", null) : null,
            )
        );
    },
    ew = (0, u.createContext)(null),
    ex = () => {
        var e = (0, u.useContext)(ew);
        if (!e) throw Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
        return e;
    },
    eP = (e) => {
        var {
                leaf: t,
                isLast: n,
                text: r,
                parent: i,
                renderPlaceholder: a,
                renderLeaf: s = (e) => u.createElement(ek, Object.assign({}, e)),
            } = e,
            o = (0, u.useRef)(null),
            l = (0, u.useRef)(null),
            c = ex(),
            d = (0, u.useRef)(null);
        (0, u.useEffect)(
            () => () => {
                d.current && d.current.disconnect();
            },
            [],
        ),
            (0, u.useEffect)(() => {
                var e = null == l ? void 0 : l.current;
                if (
                    (e ? v.set(c, e) : v.delete(c),
                    d.current
                        ? (d.current.disconnect(), e && d.current.observe(e))
                        : e &&
                          ((d.current = new (window.ResizeObserver || _.tb)(() => {
                              var e = F.get(c);
                              null == e || e();
                          })),
                          d.current.observe(e)),
                    !e && o.current)
                ) {
                    var t = F.get(c);
                    null == t || t();
                }
                return (
                    (o.current = l.current),
                    () => {
                        v.delete(c);
                    }
                );
            }, [l, t]);
        var f = u.createElement(eR, { isLast: n, leaf: t, parent: i, text: r });
        if (t[B]) {
            var p = {
                children: t.placeholder,
                attributes: {
                    "data-slate-placeholder": !0,
                    style: {
                        position: "absolute",
                        pointerEvents: "none",
                        width: "100%",
                        maxWidth: "100%",
                        display: "block",
                        opacity: "0.333",
                        userSelect: "none",
                        textDecoration: "none",
                    },
                    contentEditable: !1,
                    ref: l,
                },
            };
            f = u.createElement(u.Fragment, null, a(p), f);
        }
        return s({ attributes: { "data-slate-leaf": !0 }, children: f, leaf: t, text: r });
    },
    eM = u.memo(
        eP,
        (e, t) =>
            t.parent === e.parent &&
            t.isLast === e.isLast &&
            t.renderLeaf === e.renderLeaf &&
            t.renderPlaceholder === e.renderPlaceholder &&
            t.text === e.text &&
            d.EY.equals(t.leaf, e.leaf) &&
            t.leaf[B] === e.leaf[B],
    ),
    ek = (e) => {
        var { attributes: t, children: n } = e;
        return u.createElement("span", Object.assign({}, t), n);
    },
    eU = (e) => {
        for (
            var { decorations: t, isLast: n, parent: r, renderPlaceholder: i, renderLeaf: a, text: s } = e,
                o = ex(),
                l = (0, u.useRef)(null),
                c = d.EY.decorations(s, t),
                _ = eI.findKey(o, s),
                f = [],
                p = 0;
            p < c.length;
            p++
        ) {
            var h = c[p];
            f.push(
                u.createElement(eM, {
                    isLast: n && p === c.length - 1,
                    key: "".concat(_.id, "-").concat(p),
                    renderPlaceholder: i,
                    leaf: h,
                    text: s,
                    parent: r,
                    renderLeaf: a,
                }),
            );
        }
        var m = (0, u.useCallback)(
            (e) => {
                var t = R.get(o);
                e
                    ? (null == t || t.set(_, e), b.set(s, e), C.set(e, s))
                    : (null == t || t.delete(_), b.delete(s), l.current && C.delete(l.current)),
                    (l.current = e);
            },
            [l, o, _, s],
        );
        return u.createElement("span", { "data-slate-node": "text", ref: m }, f);
    },
    eG = u.memo(
        eU,
        (e, t) =>
            t.parent === e.parent &&
            t.isLast === e.isLast &&
            t.renderLeaf === e.renderLeaf &&
            t.renderPlaceholder === e.renderPlaceholder &&
            t.text === e.text &&
            eb(t.decorations, e.decorations),
    ),
    eV = (e) => {
        var {
                decorations: t,
                element: n,
                renderElement: r = (e) => u.createElement(eB, Object.assign({}, e)),
                renderPlaceholder: a,
                renderLeaf: s,
                selection: o,
            } = e,
            l = ex(),
            c = e$(),
            _ = l.isInline(n),
            f = eI.findKey(l, n),
            p = (0, u.useCallback)(
                (e) => {
                    var t = R.get(l);
                    e ? (null == t || t.set(f, e), b.set(n, e), C.set(e, n)) : (null == t || t.delete(f), b.delete(n));
                },
                [l, f, n],
            ),
            h = eK({ decorations: t, node: n, renderElement: r, renderPlaceholder: a, renderLeaf: s, selection: o }),
            m = { "data-slate-node": "element", ref: p };
        if ((_ && (m["data-slate-inline"] = !0), !_ && d.KE.hasInlines(l, n))) {
            var g = d.bP.string(n),
                E = i()(g);
            "rtl" === E && (m.dir = E);
        }
        if (d.KE.isVoid(l, n)) {
            (m["data-slate-void"] = !0), !c && _ && (m.contentEditable = !1);
            var A = _ ? "span" : "div",
                [[y]] = d.bP.texts(n);
            (h = u.createElement(
                A,
                {
                    "data-slate-spacer": !0,
                    style: { height: "0", color: "transparent", outline: "none", position: "absolute" },
                },
                u.createElement(eG, { renderPlaceholder: a, decorations: [], isLast: !1, parent: n, text: y }),
            )),
                I.set(y, 0),
                T.set(y, n);
        }
        return r({ attributes: m, children: h, element: n, decorations: t });
    },
    eF = u.memo(
        eV,
        (e, t) =>
            e.element === t.element &&
            e.renderElement === t.renderElement &&
            e.renderLeaf === t.renderLeaf &&
            e.renderPlaceholder === t.renderPlaceholder &&
            eC(e.decorations, t.decorations) &&
            (e.selection === t.selection || (!!e.selection && !!t.selection && d.Q6.equals(e.selection, t.selection))),
    ),
    eB = (e) => {
        var { attributes: t, children: n, element: r } = e,
            i = ex().isInline(r) ? "span" : "div";
        return u.createElement(i, Object.assign({}, t, { style: { position: "relative" } }), n);
    },
    ej = (0, u.createContext)(() => []),
    eH = () => (0, u.useContext)(ej),
    eY = (0, u.createContext)(!1),
    eW = () => (0, u.useContext)(eY),
    eK = (e) => {
        for (
            var { decorations: t, node: n, renderElement: r, renderPlaceholder: i, renderLeaf: a, selection: s } = e,
                o = eH(),
                l = ex(),
                c = eI.findPath(l, n),
                _ = [],
                f = d.Hg.isElement(n) && !l.isInline(n) && d.KE.hasInlines(l, n),
                p = 0;
            p < n.children.length;
            p++
        ) {
            var h = c.concat(p),
                m = n.children[p],
                g = eI.findKey(l, m),
                E = d.KE.range(l, h),
                A = s && d.Q6.intersection(E, s),
                y = o([m, h]);
            for (var S of t) {
                var v = d.Q6.intersection(S, E);
                v && y.push(v);
            }
            d.Hg.isElement(m)
                ? _.push(
                      u.createElement(
                          eY.Provider,
                          { key: "provider-".concat(g.id), value: !!A },
                          u.createElement(eF, {
                              decorations: y,
                              element: m,
                              key: g.id,
                              renderElement: r,
                              renderPlaceholder: i,
                              renderLeaf: a,
                              selection: A,
                          }),
                      ),
                  )
                : _.push(
                      u.createElement(eG, {
                          decorations: y,
                          key: g.id,
                          isLast: f && p === n.children.length - 1,
                          parent: n,
                          renderPlaceholder: i,
                          renderLeaf: a,
                          text: m,
                      }),
                  ),
                I.set(m, p),
                T.set(m, n);
        }
        return _;
    },
    ez = (0, u.createContext)(!1),
    e$ = () => (0, u.useContext)(ez),
    eq = (0, u.createContext)(null),
    eZ = () => {
        var e = (0, u.useContext)(eq);
        if (!e) throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
        var { editor: t } = e;
        return t;
    },
    eQ = 3,
    eX = {
        bold: "mod+b",
        compose: ["down", "left", "right", "up", "backspace", "enter"],
        moveBackward: "left",
        moveForward: "right",
        moveWordBackward: "ctrl+left",
        moveWordForward: "ctrl+right",
        deleteBackward: "shift?+backspace",
        deleteForward: "shift?+delete",
        extendBackward: "shift+left",
        extendForward: "shift+right",
        italic: "mod+i",
        insertSoftBreak: "shift+enter",
        splitBlock: "enter",
        undo: "mod+z",
    },
    eJ = {
        moveLineBackward: "opt+up",
        moveLineForward: "opt+down",
        moveWordBackward: "opt+left",
        moveWordForward: "opt+right",
        deleteBackward: ["ctrl+backspace", "ctrl+h"],
        deleteForward: ["ctrl+delete", "ctrl+d"],
        deleteLineBackward: "cmd+shift?+backspace",
        deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
        deleteWordBackward: "opt+shift?+backspace",
        deleteWordForward: "opt+shift?+delete",
        extendLineBackward: "opt+shift+up",
        extendLineForward: "opt+shift+down",
        redo: "cmd+shift+z",
        transposeCharacter: "ctrl+t",
    },
    e0 = {
        deleteWordBackward: "ctrl+shift?+backspace",
        deleteWordForward: "ctrl+shift?+delete",
        redo: ["ctrl+y", "ctrl+shift+z"],
    },
    e1 = (e) => {
        var t = eX[e],
            n = eJ[e],
            r = e0[e],
            i = t && (0, f.isKeyHotkey)(t),
            a = n && (0, f.isKeyHotkey)(n),
            s = r && (0, f.isKeyHotkey)(r);
        return (e) => !!((i && i(e)) || (eo && a && a(e)) || (!eo && s && s(e)));
    },
    e2 = {
        isBold: e1("bold"),
        isCompose: e1("compose"),
        isMoveBackward: e1("moveBackward"),
        isMoveForward: e1("moveForward"),
        isDeleteBackward: e1("deleteBackward"),
        isDeleteForward: e1("deleteForward"),
        isDeleteLineBackward: e1("deleteLineBackward"),
        isDeleteLineForward: e1("deleteLineForward"),
        isDeleteWordBackward: e1("deleteWordBackward"),
        isDeleteWordForward: e1("deleteWordForward"),
        isExtendBackward: e1("extendBackward"),
        isExtendForward: e1("extendForward"),
        isExtendLineBackward: e1("extendLineBackward"),
        isExtendLineForward: e1("extendLineForward"),
        isItalic: e1("italic"),
        isMoveLineBackward: e1("moveLineBackward"),
        isMoveLineForward: e1("moveLineForward"),
        isMoveWordBackward: e1("moveWordBackward"),
        isMoveWordForward: e1("moveWordForward"),
        isRedo: e1("redo"),
        isSoftBreak: e1("insertSoftBreak"),
        isSplitBlock: e1("splitBlock"),
        isTransposeCharacter: e1("transposeCharacter"),
        isUndo: e1("undo"),
    },
    e3 = (e, t) => {
        var n = [],
            r = () => {
                n = [];
            };
        return {
            registerMutations: (r) => {
                if (t.current) {
                    var i = r.filter((t) => ei(e, t, r));
                    n.push(...i);
                }
            },
            restoreDOM: function () {
                n.length > 0 &&
                    (n.reverse().forEach((e) => {
                        "characterData" !== e.type &&
                            (e.removedNodes.forEach((t) => {
                                e.target.insertBefore(t, e.nextSibling);
                            }),
                            e.addedNodes.forEach((t) => {
                                e.target.removeChild(t);
                            }));
                    }),
                    r());
            },
            clear: r,
        };
    },
    e6 = { subtree: !0, childList: !0, characterData: !0, characterDataOldValue: !0 };
class e4 extends u.Component {
    constructor() {
        super(...arguments), (this.context = null), (this.manager = null), (this.mutationObserver = null);
    }
    observe() {
        var e,
            { node: t } = this.props;
        if (!t.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
        null == (e = this.mutationObserver) || e.observe(t.current, e6);
    }
    componentDidMount() {
        var { receivedUserInput: e } = this.props,
            t = this.context;
        (this.manager = e3(t, e)),
            (this.mutationObserver = new MutationObserver(this.manager.registerMutations)),
            this.observe();
    }
    getSnapshotBeforeUpdate() {
        var e,
            t,
            n,
            r,
            i = null == (e = this.mutationObserver) ? void 0 : e.takeRecords();
        return (
            null != i && i.length && (null == (r = this.manager) || r.registerMutations(i)),
            null == (t = this.mutationObserver) || t.disconnect(),
            null == (n = this.manager) || n.restoreDOM(),
            null
        );
    }
    componentDidUpdate() {
        var e;
        null == (e = this.manager) || e.clear(), this.observe();
    }
    componentWillUnmount() {
        var e;
        null == (e = this.mutationObserver) || e.disconnect();
    }
    render() {
        return this.props.children;
    }
}
e4.contextType = ew;
var e5 = el
    ? e4
    : (e) => {
          var { children: t } = e;
          return u.createElement(u.Fragment, null, t);
      };
function e7(e, t) {
    var { path: n, diff: r } = t;
    if (!d.KE.hasPath(e, n)) return !1;
    var i = d.bP.get(e, n);
    if (!d.EY.isText(i)) return !1;
    if (r.start !== i.text.length || 0 === r.text.length)
        return i.text.slice(r.start, r.start + r.text.length) === r.text;
    var a = d.wA.next(n);
    if (!d.KE.hasPath(e, a)) return !1;
    var s = d.bP.get(e, a);
    return d.EY.isText(s) && s.text.startsWith(r.text);
}
function e8(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return n.reduce((e, t) => e.slice(0, t.start) + t.text + e.slice(t.end), e);
}
function e9(e, t) {
    for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) if (e.charAt(r) !== t.charAt(r)) return r;
    return n;
}
function te(e, t, n) {
    for (var r = Math.min(e.length, t.length, n), i = 0; i < r; i++)
        if (e.charAt(e.length - i - 1) !== t.charAt(t.length - i - 1)) return i;
    return r;
}
function tt(e, t) {
    var { start: n, end: r, text: i } = t,
        a = e.slice(n, r),
        s = e9(a, i),
        o = Math.min(a.length - s, i.length - s),
        l = te(a, i, o),
        u = { start: n + s, end: r - l, text: i.slice(s, i.length - l) };
    return u.start === u.end && 0 === u.text.length ? null : u;
}
function tn(e, t, n) {
    var r = Math.min(t.start, n.start),
        i = Math.max(0, Math.min(t.start + t.text.length, n.end) - n.start),
        a = e8(e, t, n),
        s = Math.max(
            n.start + n.text.length,
            t.start + t.text.length + (t.start + t.text.length > n.start ? n.text.length : 0) - i,
        ),
        o = a.slice(r, s);
    return tt(e, { start: r, end: Math.max(t.end, n.end - t.text.length + (t.end - t.start)), text: o });
}
function tr(e) {
    var { path: t, diff: n } = e;
    return { anchor: { path: t, offset: n.start }, focus: { path: t, offset: n.end } };
}
function ti(e, t) {
    var { path: n, offset: r } = t;
    if (!d.KE.hasPath(e, n)) return null;
    var i = d.bP.get(e, n);
    if (!d.EY.isText(i)) return null;
    var a = d.KE.above(e, { match: (t) => d.Hg.isElement(t) && d.KE.isBlock(e, t), at: n });
    if (!a) return null;
    for (; r > i.text.length; ) {
        var s = d.KE.next(e, { at: n, match: d.EY.isText });
        if (!s || !d.wA.isDescendant(s[1], a[1])) return null;
        (r -= i.text.length), (i = s[0]), (n = s[1]);
    }
    return { path: n, offset: r };
}
function ta(e, t) {
    var n = ti(e, t.anchor);
    if (!n) return null;
    if (d.Q6.isCollapsed(t)) return { anchor: n, focus: n };
    var r = ti(e, t.focus);
    return r ? { anchor: n, focus: r } : null;
}
function ts(e, t, n) {
    var r = U.get(e),
        i =
            null == r
                ? void 0
                : r.find((e) => {
                      var { path: n } = e;
                      return d.wA.equals(n, t.path);
                  });
    if (!i || t.offset <= i.diff.start) return d.bR.transform(t, n, { affinity: "backward" });
    var { diff: a } = i;
    if (t.offset <= a.start + a.text.length) {
        var s = { path: t.path, offset: a.start },
            o = d.bR.transform(s, n, { affinity: "backward" });
        return o ? { path: o.path, offset: o.offset + t.offset - a.start } : null;
    }
    var l = { path: t.path, offset: t.offset - a.text.length + a.end - a.start },
        u = d.bR.transform(l, n, { affinity: "backward" });
    return u
        ? "split_node" === n.type && d.wA.equals(n.path, t.path) && l.offset < n.position && a.start < n.position
            ? u
            : { path: u.path, offset: u.offset + a.text.length - a.end + a.start }
        : null;
}
function to(e, t, n) {
    var r = ts(e, t.anchor, n);
    if (!r) return null;
    if (d.Q6.isCollapsed(t)) return { anchor: r, focus: r };
    var i = ts(e, t.focus, n);
    return i ? { anchor: r, focus: i } : null;
}
function tl(e, t) {
    var { path: n, diff: r, id: i } = e;
    switch (t.type) {
        case "insert_text":
            if (!d.wA.equals(t.path, n) || t.offset >= r.end) return e;
            if (t.offset <= r.start)
                return {
                    diff: { start: t.text.length + r.start, end: t.text.length + r.end, text: r.text },
                    id: i,
                    path: n,
                };
            return { diff: { start: r.start, end: r.end + t.text.length, text: r.text }, id: i, path: n };
        case "remove_text":
            if (!d.wA.equals(t.path, n) || t.offset >= r.end) return e;
            if (t.offset + t.text.length <= r.start)
                return {
                    diff: { start: r.start - t.text.length, end: r.end - t.text.length, text: r.text },
                    id: i,
                    path: n,
                };
            return { diff: { start: r.start, end: r.end - t.text.length, text: r.text }, id: i, path: n };
        case "split_node":
            if (!d.wA.equals(t.path, n) || t.position >= r.end)
                return { diff: r, id: i, path: d.wA.transform(n, t, { affinity: "backward" }) };
            if (t.position > r.start)
                return { diff: { start: r.start, end: Math.min(t.position, r.end), text: r.text }, id: i, path: n };
            return {
                diff: { start: r.start - t.position, end: r.end - t.position, text: r.text },
                id: i,
                path: d.wA.transform(n, t, { affinity: "forward" }),
            };
        case "merge_node":
            if (!d.wA.equals(t.path, n)) return { diff: r, id: i, path: d.wA.transform(n, t) };
            return {
                diff: { start: r.start + t.position, end: r.end + t.position, text: r.text },
                id: i,
                path: d.wA.transform(n, t),
            };
    }
    var a = d.wA.transform(n, t);
    return a ? { diff: r, path: a, id: i } : null;
}
function tu(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function tc(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tu(Object(n), !0).forEach(function (t) {
                  h(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tu(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var td = 25,
    t_ = 200,
    tf = function () {},
    tp = (e) => (null == e ? void 0 : e.constructor.name) === "DataTransfer";
function th(e) {
    var { editor: t, scheduleOnDOMSelectionChange: n, onDOMSelectionChange: r } = e,
        i = !1,
        a = null,
        s = null,
        o = null,
        l = 0,
        u = !1,
        c = () => {
            var e = V.get(t);
            if ((V.delete(t), e)) {
                var { selection: n } = t,
                    r = ta(t, e);
                !r || (n && d.Q6.equals(r, n)) || d.gB.select(t, r);
            }
        },
        _ = () => {
            var e = G.get(t);
            if ((G.delete(t), e)) {
                if (e.at) {
                    var n = d.bR.isPoint(e.at) ? ti(t, e.at) : ta(t, e.at);
                    if (!n) return;
                    var r = d.KE.range(t, n);
                    (t.selection && d.Q6.equals(t.selection, r)) || d.gB.select(t, n);
                }
                e.run();
            }
        },
        f = () => {
            if ((s && (clearTimeout(s), (s = null)), o && (clearTimeout(o), (o = null)), !I() && !A())) return void c();
            i || ((i = !0), setTimeout(() => (i = !1))), A() && (i = "action");
            var e = t.selection && d.KE.rangeRef(t, t.selection, { affinity: "forward" });
            k.set(t, t.marks), tf("flush", G.get(t), U.get(t));
            for (var a = I(); (l = null == (f = U.get(t)) ? void 0 : f[0]); ) {
                var l,
                    f,
                    p,
                    h = M.get(t);
                void 0 !== h && (M.delete(t), (t.marks = h)), h && !1 === u && (u = null);
                var m = tr(l);
                (t.selection && d.Q6.equals(t.selection, m)) || d.gB.select(t, m),
                    l.diff.text ? d.KE.insertText(t, l.diff.text) : d.KE.deleteFragment(t),
                    U.set(
                        t,
                        null == (p = U.get(t))
                            ? void 0
                            : p.filter((e) => {
                                  var { id: t } = e;
                                  return t !== l.id;
                              }),
                    ),
                    e7(t, l) ||
                        ((a = !1),
                        G.delete(t),
                        k.delete(t),
                        (i = "action"),
                        V.delete(t),
                        n.cancel(),
                        r.cancel(),
                        null == e || e.unref());
            }
            var g = null == e ? void 0 : e.unref();
            if ((!g || V.get(t) || (t.selection && d.Q6.equals(g, t.selection)) || d.gB.select(t, g), A()))
                return void _();
            a && n(), n.flush(), r.flush(), c();
            var E = k.get(t);
            k.delete(t), void 0 !== E && ((t.marks = E), t.onChange());
        },
        p = (e) => {
            a && clearTimeout(a),
                (a = setTimeout(() => {
                    L.set(t, !1), f();
                }, td));
        },
        h = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                n = v.get(t);
            if (n) {
                if (I() || e) {
                    n.style.display = "none";
                    return;
                }
                n.style.removeProperty("display");
            }
        },
        m = (e, n) => {
            var r,
                i = null != (r = U.get(t)) ? r : [];
            U.set(t, i);
            var a = d.bP.leaf(t, e),
                s = i.findIndex((t) => d.wA.equals(t.path, e));
            if (s < 0) {
                tt(a.text, n) && i.push({ path: e, diff: n, id: l++ }), h();
                return;
            }
            var o = tn(a.text, i[s].diff, n);
            if (!o) {
                i.splice(s, 1), h();
                return;
            }
            i[s] = tc(tc({}, i[s]), {}, { diff: o });
        },
        g = function (e) {
            var { at: i } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (u = !1), V.delete(t), n.cancel(), r.cancel(), A() && f(), G.set(t, { at: i, run: e }), (o = setTimeout(f));
        },
        E = (e) => {
            s && (clearTimeout(s), (s = null));
            var { inputType: n } = e,
                r = null,
                i = e.dataTransfer || e.data || void 0;
            !1 !== u && "insertText" !== n && "insertCompositionText" !== n && (u = !1);
            var [a] = e.getTargetRanges();
            a && (r = eI.toSlateRange(t, a, { exactMatch: !1, suppressThrow: !0 }));
            var o = eI.getWindow(t).getSelection();
            if (
                (!r && o && ((a = o), (r = eI.toSlateRange(t, o, { exactMatch: !1, suppressThrow: !0 }))),
                (r = null != (D = r) ? D : t.selection))
            ) {
                var l = !0;
                if (n.startsWith("delete")) {
                    if (d.Q6.isExpanded(r)) {
                        var [c, _] = d.Q6.edges(r);
                        if (d.bP.leaf(t, c.path).text.length === c.offset && 0 === _.offset) {
                            var f = d.KE.next(t, { at: c.path, match: d.EY.isText });
                            f && d.wA.equals(f[1], _.path) && (r = { anchor: _, focus: _ });
                        }
                    }
                    var p = n.endsWith("Backward") ? "backward" : "forward",
                        [h, E] = d.Q6.edges(r),
                        [A, I] = d.KE.leaf(t, h.path),
                        T = { text: "", start: h.offset, end: E.offset },
                        S = U.get(t),
                        v = null == S ? void 0 : S.find((e) => d.wA.equals(e.path, I)),
                        C = v ? [v.diff, T] : [T];
                    if ((0 === e8(A.text, ...C).length && (l = !1), d.Q6.isExpanded(r))) {
                        if (l && d.wA.equals(r.anchor.path, r.focus.path)) {
                            var N = { path: r.anchor.path, offset: h.offset };
                            return (
                                y(d.KE.range(t, N, N)), m(r.anchor.path, { text: "", end: E.offset, start: h.offset })
                            );
                        }
                        return g(() => d.KE.deleteFragment(t, { direction: p }), { at: r });
                    }
                }
                switch (n) {
                    case "deleteByComposition":
                    case "deleteByCut":
                    case "deleteByDrag":
                        return g(() => d.KE.deleteFragment(t), { at: r });
                    case "deleteContent":
                    case "deleteContentForward":
                        var { anchor: R } = r;
                        if (l && d.Q6.isCollapsed(r)) {
                            var O = d.bP.leaf(t, R.path);
                            if (R.offset < O.text.length)
                                return m(R.path, { text: "", start: R.offset, end: R.offset + 1 });
                        }
                        return g(() => d.KE.deleteForward(t), { at: r });
                    case "deleteContentBackward":
                        var D,
                            L,
                            { anchor: w } = r,
                            x = $(a) ? a.isCollapsed : !!(null != (L = a) && L.collapsed);
                        if (l && x && d.Q6.isCollapsed(r) && w.offset > 0)
                            return m(w.path, { text: "", start: w.offset - 1, end: w.offset });
                        return g(() => d.KE.deleteBackward(t), { at: r });
                    case "deleteEntireSoftLine":
                        return g(
                            () => {
                                d.KE.deleteBackward(t, { unit: "line" }), d.KE.deleteForward(t, { unit: "line" });
                            },
                            { at: r },
                        );
                    case "deleteHardLineBackward":
                        return g(() => d.KE.deleteBackward(t, { unit: "block" }), { at: r });
                    case "deleteSoftLineBackward":
                        return g(() => d.KE.deleteBackward(t, { unit: "line" }), { at: r });
                    case "deleteHardLineForward":
                        return g(() => d.KE.deleteForward(t, { unit: "block" }), { at: r });
                    case "deleteSoftLineForward":
                        return g(() => d.KE.deleteForward(t, { unit: "line" }), { at: r });
                    case "deleteWordBackward":
                        return g(() => d.KE.deleteBackward(t, { unit: "word" }), { at: r });
                    case "deleteWordForward":
                        return g(() => d.KE.deleteForward(t, { unit: "word" }), { at: r });
                    case "insertLineBreak":
                        return g(() => d.KE.insertSoftBreak(t), { at: r });
                    case "insertParagraph":
                        return g(() => d.KE.insertBreak(t), { at: r });
                    case "insertCompositionText":
                    case "deleteCompositionText":
                    case "insertFromComposition":
                    case "insertFromDrop":
                    case "insertFromPaste":
                    case "insertFromYank":
                    case "insertReplacementText":
                    case "insertText":
                        if (tp(i)) return g(() => eI.insertData(t, i), { at: r });
                        var P = null != i ? i : "";
                        if (
                            (M.get(t) && (P = P.replace("\uFEFF", "")),
                            "insertText" === n && /.*\n.*\n$/.test(P) && (P = P.slice(0, -1)),
                            P.includes("\n"))
                        )
                            return g(
                                () => {
                                    var e = P.split("\n");
                                    e.forEach((n, r) => {
                                        n && d.KE.insertText(t, n), r !== e.length - 1 && d.KE.insertSoftBreak(t);
                                    });
                                },
                                { at: r },
                            );
                        if (d.wA.equals(r.anchor.path, r.focus.path)) {
                            var [k, G] = d.Q6.edges(r),
                                V = { start: k.offset, end: G.offset, text: P };
                            if (P && u && "insertCompositionText" === n) {
                                var F = u.start + u.text.search(/\S|$/);
                                V.start + V.text.search(/\S|$/) === F + 1 && V.end === u.start + u.text.length
                                    ? ((V.start -= 1), (u = null), b())
                                    : (u = !1);
                            } else
                                u =
                                    "insertText" === n &&
                                    (null === u
                                        ? V
                                        : !!(u && d.Q6.isCollapsed(r)) &&
                                          u.end + u.text.length === k.offset &&
                                          tc(tc({}, u), {}, { text: u.text + P }));
                            if (l) return void m(k.path, V);
                        }
                        return g(() => d.KE.insertText(t, P), { at: r });
                }
            }
        },
        A = () => !!G.get(t),
        I = () => {
            var e;
            return !!(null != (e = U.get(t)) && e.length);
        },
        T = () => A() || I(),
        y = (e) => {
            V.set(t, e), s && (clearTimeout(s), (s = null));
            var { selection: n } = t;
            if (e) {
                var r = !n || !d.wA.equals(n.anchor.path, e.anchor.path),
                    i = !n || !d.wA.equals(n.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
                ((r && u) || i) && (u = !1), (r || I()) && (s = setTimeout(f, t_));
            }
        },
        S = () => {
            (A() || !I()) && f();
        },
        C = (e) => {
            I() || (h(!0), setTimeout(h));
        },
        b = () => {
            A() || (o = setTimeout(f));
        },
        N = (e) => {
            if (!(I() || A()) && e.some((n) => ei(t, n, e))) {
                var n;
                null == (n = F.get(t)) || n();
            }
        };
    return {
        flush: f,
        scheduleFlush: b,
        hasPendingDiffs: I,
        hasPendingAction: A,
        hasPendingChanges: T,
        isFlushing: () => i,
        handleUserSelect: y,
        handleCompositionEnd: p,
        handleCompositionStart: (e) => {
            L.set(t, !0), a && (clearTimeout(a), (a = null));
        },
        handleDOMBeforeInput: E,
        handleKeyDown: C,
        handleDomMutations: N,
        handleInput: S,
    };
}
function tm() {
    var e = (0, u.useRef)(!1);
    return (
        (0, u.useEffect)(
            () => (
                (e.current = !0),
                () => {
                    e.current = !1;
                }
            ),
            [],
        ),
        e.current
    );
}
function tg(e, t, n) {
    var [r] = (0, u.useState)(() => new MutationObserver(t));
    eN(() => {
        r.takeRecords();
    }),
        (0, u.useEffect)(() => {
            if (!e.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
            return r.observe(e.current, n), () => r.disconnect();
        }, []);
}
var tE = ["node"];
function tA(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function tI(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tA(Object(n), !0).forEach(function (t) {
                  h(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tA(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var tT = { subtree: !0, childList: !0, characterData: !0 };
function ty(e) {
    var { node: t } = e,
        n = g(e, tE);
    if (!el) return null;
    var r = ex(),
        i = tm(),
        [a] = (0, u.useState)(() => th(tI({ editor: r }, n)));
    return tg(t, a.handleDomMutations, tT), P.set(r, a.scheduleFlush), i && a.flush(), a;
}
function tS() {
    var e = ex(),
        t = (0, u.useRef)(!1),
        n = (0, u.useRef)(0),
        r = (0, u.useCallback)(() => {
            if (!t.current) {
                t.current = !0;
                var r = eI.getWindow(e);
                r.cancelAnimationFrame(n.current),
                    (n.current = r.requestAnimationFrame(() => {
                        t.current = !1;
                    }));
            }
        }, []);
    return (0, u.useEffect)(() => () => cancelAnimationFrame(n.current), []), { receivedUserInput: t, onUserInput: r };
}
var tv = [
        "autoFocus",
        "decorate",
        "onDOMBeforeInput",
        "placeholder",
        "readOnly",
        "renderElement",
        "renderLeaf",
        "renderPlaceholder",
        "scrollSelectionIntoView",
        "style",
        "as",
        "disableDefaultStyles",
    ],
    tC = ["text"];
function tb(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function tN(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tb(Object(n), !0).forEach(function (t) {
                  h(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tb(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var tR = (e) => u.createElement(u.Fragment, null, eK(e)),
    tO = (e) => {
        var t,
            n,
            r = (0, u.useCallback)((e) => u.createElement(tD, Object.assign({}, e)), []),
            {
                autoFocus: a,
                decorate: o = tL,
                onDOMBeforeInput: c,
                placeholder: _,
                readOnly: f = !1,
                renderElement: p,
                renderLeaf: h,
                renderPlaceholder: m = r,
                scrollSelectionIntoView: E = tw,
                style: A = {},
                as: I = "div",
                disableDefaultStyles: T = !1,
            } = e,
            N = g(e, tv),
            R = eZ(),
            [x, P] = (0, u.useState)(!1),
            U = (0, u.useRef)(null),
            G = (0, u.useRef)([]),
            { onUserInput: V, receivedUserInput: H } = tS(),
            [, W] = (0, u.useReducer)((e) => e + 1, 0);
        F.set(R, W), O.set(R, f);
        var $ = (0, u.useMemo)(
            () => ({ isDraggingInternally: !1, isUpdatingSelection: !1, latestElement: null, hasMarkPlaceholder: !1 }),
            [],
        );
        (0, u.useLayoutEffect)(
            () => () => {
                null == $ || (null != $.latestElement && ($.latestElement.remove(), ($.latestElement = null)));
            },
            [],
        ),
            (0, u.useEffect)(() => {
                U.current && a && U.current.focus();
            }, [a]);
        var q = (0, u.useCallback)(
                l()(() => {
                    if (
                        (el || !eI.isComposing(R)) &&
                        (!$.isUpdatingSelection || (null != X && X.isFlushing())) &&
                        !$.isDraggingInternally
                    ) {
                        var e = eI.findDocumentOrShadowRoot(R),
                            { activeElement: t } = e,
                            n = eI.toDOMNode(R, R),
                            r = e.getSelection();
                        if ((t === n ? (($.latestElement = t), D.set(R, !0)) : D.delete(R), !r))
                            return d.gB.deselect(R);
                        var { anchorNode: i, focusNode: a } = r,
                            s = eI.hasEditableTarget(R, i) || eI.isTargetInsideNonReadonlyVoid(R, i),
                            o = eI.hasEditableTarget(R, a) || eI.isTargetInsideNonReadonlyVoid(R, a);
                        if (s && o) {
                            var l = eI.toSlateRange(R, r, { exactMatch: !1, suppressThrow: !0 });
                            l &&
                                (eI.isComposing(R) ||
                                (null != X && X.hasPendingChanges()) ||
                                (null != X && X.isFlushing())
                                    ? null == X || X.handleUserSelect(l)
                                    : d.gB.select(R, l));
                        }
                        !f || (s && o) || d.gB.deselect(R);
                    }
                }, 100),
                [f],
            ),
            Q = (0, u.useMemo)(() => s()(q, 0), [q]),
            X = ty({ node: U, onDOMSelectionChange: q, scheduleOnDOMSelectionChange: Q });
        eN(() => {
            U.current && (e = Y(U.current))
                ? (y.set(R, e), S.set(R, U.current), b.set(R, U.current), C.set(U.current, R))
                : b.delete(R);
            var e,
                { selection: t } = R,
                n = eI.findDocumentOrShadowRoot(R).getSelection();
            if (!(!n || !eI.isFocused(R) || (null != X && X.hasPendingAction()))) {
                var r = (e) => {
                        var r = "None" !== n.type;
                        if (t || r) {
                            var i = S.get(R),
                                a = !1;
                            if ((i.contains(n.anchorNode) && i.contains(n.focusNode) && (a = !0), r && a && t && !e)) {
                                var s = eI.toSlateRange(R, n, { exactMatch: !0, suppressThrow: !0 });
                                if (s && d.Q6.equals(s, t)) {
                                    if (!$.hasMarkPlaceholder) return;
                                    var o,
                                        { anchorNode: l } = n;
                                    if (
                                        null != l &&
                                        null != (o = l.parentElement) &&
                                        o.hasAttribute("data-slate-mark-placeholder")
                                    )
                                        return;
                                }
                            }
                            if (t && !eI.hasRange(R, t)) {
                                R.selection = eI.toSlateRange(R, n, { exactMatch: !1, suppressThrow: !0 });
                                return;
                            }
                            $.isUpdatingSelection = !0;
                            var u = t && eI.toDOMRange(R, t);
                            return (
                                u
                                    ? (d.Q6.isBackward(t)
                                          ? n.setBaseAndExtent(
                                                u.endContainer,
                                                u.endOffset,
                                                u.startContainer,
                                                u.startOffset,
                                            )
                                          : n.setBaseAndExtent(
                                                u.startContainer,
                                                u.startOffset,
                                                u.endContainer,
                                                u.endOffset,
                                            ),
                                      E(R, u))
                                    : n.removeAllRanges(),
                                u
                            );
                        }
                    },
                    i = r(),
                    a = (null == X ? void 0 : X.isFlushing()) === "action";
                if (!el || !a)
                    return void setTimeout(() => {
                        i && eu && eI.toDOMNode(R, R).focus(), ($.isUpdatingSelection = !1);
                    });
                var s = null,
                    o = requestAnimationFrame(() => {
                        if (a) {
                            var e = (e) => {
                                try {
                                    eI.toDOMNode(R, R).focus(), r(e);
                                } catch (e) {}
                            };
                            e(),
                                (s = setTimeout(() => {
                                    e(!0), ($.isUpdatingSelection = !1);
                                }));
                        }
                    });
                return () => {
                    cancelAnimationFrame(o), s && clearTimeout(s);
                };
            }
        });
        var J = (0, u.useCallback)(
                (e) => {
                    if ((V(), !f && eI.hasEditableTarget(R, e.target) && !tP(e, c))) {
                        if (X) return X.handleDOMBeforeInput(e);
                        Q.flush(), q.flush();
                        var { selection: t } = R,
                            { inputType: n } = e,
                            r = e.dataTransfer || e.data || void 0,
                            i = "insertCompositionText" === n || "deleteCompositionText" === n;
                        if (!(i && eI.isComposing(R))) {
                            var a = !1;
                            if (
                                "insertText" === n &&
                                t &&
                                d.Q6.isCollapsed(t) &&
                                e.data &&
                                1 === e.data.length &&
                                /[a-z ]/i.test(e.data) &&
                                0 !== t.anchor.offset
                            ) {
                                (a = !0), R.marks && (a = !1);
                                var { anchor: s } = t,
                                    [o, l] = eI.toDOMPoint(R, s),
                                    u = null == (h = o.parentElement) ? void 0 : h.closest("a"),
                                    _ = eI.getWindow(R);
                                if (a && u && eI.hasDOMNode(R, u)) {
                                    var p,
                                        h,
                                        m,
                                        g,
                                        E =
                                            null == _
                                                ? void 0
                                                : _.document.createTreeWalker(u, NodeFilter.SHOW_TEXT).lastChild();
                                    E === o && (null == (g = E.textContent) ? void 0 : g.length) === l && (a = !1);
                                }
                                if (
                                    a &&
                                    o.parentElement &&
                                    (null == _ || null == (m = _.getComputedStyle(o.parentElement))
                                        ? void 0
                                        : m.whiteSpace) === "pre"
                                ) {
                                    var A = d.KE.above(R, {
                                        at: s.path,
                                        match: (e) => d.Hg.isElement(e) && d.KE.isBlock(R, e),
                                    });
                                    A && d.bP.string(A[0]).includes("	") && (a = !1);
                                }
                            }
                            if (!n.startsWith("delete") || n.startsWith("deleteBy")) {
                                var [I] = e.getTargetRanges();
                                if (I) {
                                    var T = eI.toSlateRange(R, I, { exactMatch: !1, suppressThrow: !1 });
                                    if (!t || !d.Q6.equals(t, T)) {
                                        a = !1;
                                        var y = !i && R.selection && d.KE.rangeRef(R, R.selection);
                                        d.gB.select(R, T), y && w.set(R, y);
                                    }
                                }
                            }
                            if (!i) {
                                if ((a || e.preventDefault(), t && d.Q6.isExpanded(t) && n.startsWith("delete"))) {
                                    var S = n.endsWith("Backward") ? "backward" : "forward";
                                    d.KE.deleteFragment(R, { direction: S });
                                    return;
                                }
                                switch (n) {
                                    case "deleteByComposition":
                                    case "deleteByCut":
                                    case "deleteByDrag":
                                        d.KE.deleteFragment(R);
                                        break;
                                    case "deleteContent":
                                    case "deleteContentForward":
                                        d.KE.deleteForward(R);
                                        break;
                                    case "deleteContentBackward":
                                        d.KE.deleteBackward(R);
                                        break;
                                    case "deleteEntireSoftLine":
                                        d.KE.deleteBackward(R, { unit: "line" }),
                                            d.KE.deleteForward(R, { unit: "line" });
                                        break;
                                    case "deleteHardLineBackward":
                                        d.KE.deleteBackward(R, { unit: "block" });
                                        break;
                                    case "deleteSoftLineBackward":
                                        d.KE.deleteBackward(R, { unit: "line" });
                                        break;
                                    case "deleteHardLineForward":
                                        d.KE.deleteForward(R, { unit: "block" });
                                        break;
                                    case "deleteSoftLineForward":
                                        d.KE.deleteForward(R, { unit: "line" });
                                        break;
                                    case "deleteWordBackward":
                                        d.KE.deleteBackward(R, { unit: "word" });
                                        break;
                                    case "deleteWordForward":
                                        d.KE.deleteForward(R, { unit: "word" });
                                        break;
                                    case "insertLineBreak":
                                        d.KE.insertSoftBreak(R);
                                        break;
                                    case "insertParagraph":
                                        d.KE.insertBreak(R);
                                        break;
                                    case "insertFromComposition":
                                    case "insertFromDrop":
                                    case "insertFromPaste":
                                    case "insertFromYank":
                                    case "insertReplacementText":
                                    case "insertText":
                                        "insertFromComposition" === n && eI.isComposing(R) && (P(!1), L.set(R, !1)),
                                            (null == r ? void 0 : r.constructor.name) === "DataTransfer"
                                                ? eI.insertData(R, r)
                                                : "string" == typeof r &&
                                                  (a
                                                      ? G.current.push(() => d.KE.insertText(R, r))
                                                      : d.KE.insertText(R, r));
                                }
                                var v = null == (p = w.get(R)) ? void 0 : p.unref();
                                w.delete(R), !v || (R.selection && d.Q6.equals(R.selection, v)) || d.gB.select(R, v);
                            }
                        }
                    }
                },
                [f, c],
            ),
            ee = (0, u.useCallback)(
                (e) => {
                    null == e
                        ? (q.cancel(),
                          Q.cancel(),
                          S.delete(R),
                          b.delete(R),
                          U.current && eA && U.current.removeEventListener("beforeinput", J))
                        : eA && e.addEventListener("beforeinput", J),
                        (U.current = e);
                },
                [U, J, q, Q],
            );
        eN(() => {
            var e = eI.getWindow(R);
            return (
                e.document.addEventListener("selectionchange", Q),
                () => {
                    e.document.removeEventListener("selectionchange", Q);
                }
            );
        }, [Q]);
        var et = o([R, []]);
        if (_ && 1 === R.children.length && 1 === Array.from(d.bP.texts(R)).length && "" === d.bP.string(R) && !x) {
            var en = d.KE.start(R, []);
            et.push({ [B]: !0, placeholder: _, anchor: en, focus: en });
        }
        var { marks: er } = R;
        if ((($.hasMarkPlaceholder = !1), R.selection && d.Q6.isCollapsed(R.selection) && er)) {
            var { anchor: ei } = R.selection,
                ea = d.bP.leaf(R, ei.path),
                eo = g(ea, tC);
            if (!d.EY.equals(ea, er, { loose: !0 })) {
                $.hasMarkPlaceholder = !0;
                var ed = Object.fromEntries(Object.keys(eo).map((e) => [e, null]));
                et.push(tN(tN(tN({ [j]: !0 }, ed), er), {}, { anchor: ei, focus: ei }));
            }
        }
        (0, u.useEffect)(() => {
            setTimeout(() => {
                var { selection: e } = R;
                if (e) {
                    var { anchor: t } = e,
                        n = d.bP.leaf(R, t.path);
                    if (er && !d.EY.equals(n, er, { loose: !0 })) return void M.set(R, er);
                }
                M.delete(R);
            });
        });
        var ef = null == (t = v.get(R)) || null == (n = t.getBoundingClientRect()) ? void 0 : n.height;
        return u.createElement(
            ez.Provider,
            { value: f },
            u.createElement(
                ej.Provider,
                { value: o },
                u.createElement(
                    e5,
                    { node: U, receivedUserInput: H },
                    u.createElement(
                        I,
                        Object.assign({ role: f ? void 0 : "textbox", "aria-multiline": !f || void 0 }, N, {
                            spellCheck: (!!eA || !eE) && N.spellCheck,
                            autoCorrect: eA || !eE ? N.autoCorrect : "false",
                            autoCapitalize: eA || !eE ? N.autoCapitalize : "false",
                            "data-slate-editor": !0,
                            "data-slate-node": "value",
                            contentEditable: !f,
                            zindex: -1,
                            suppressContentEditableWarning: !0,
                            ref: ee,
                            style: tN(
                                tN(
                                    {},
                                    T
                                        ? {}
                                        : tN(
                                              {
                                                  position: "relative",
                                                  outline: "none",
                                                  whiteSpace: "pre-wrap",
                                                  wordWrap: "break-word",
                                              },
                                              ef ? { minHeight: ef } : {},
                                          ),
                                ),
                                A,
                            ),
                            onBeforeInput: (0, u.useCallback)(
                                (e) => {
                                    if (
                                        !eA &&
                                        !f &&
                                        !tx(e, N.onBeforeInput) &&
                                        eI.hasSelectableTarget(R, e.target) &&
                                        (e.preventDefault(), !eI.isComposing(R))
                                    ) {
                                        var t = e.data;
                                        d.KE.insertText(R, t);
                                    }
                                },
                                [f],
                            ),
                            onInput: (0, u.useCallback)((e) => {
                                if (!tx(e, N.onInput)) {
                                    if (X) return void X.handleInput();
                                    for (var t of G.current) t();
                                    G.current = [];
                                }
                            }, []),
                            onBlur: (0, u.useCallback)(
                                (e) => {
                                    if (
                                        f ||
                                        $.isUpdatingSelection ||
                                        !eI.hasSelectableTarget(R, e.target) ||
                                        tx(e, N.onBlur)
                                    )
                                        return;
                                    var t = eI.findDocumentOrShadowRoot(R);
                                    if ($.latestElement !== t.activeElement) {
                                        var { relatedTarget: n } = e;
                                        if (
                                            n !== eI.toDOMNode(R, R) &&
                                            !(K(n) && n.hasAttribute("data-slate-spacer"))
                                        ) {
                                            if (null != n && z(n) && eI.hasDOMNode(R, n)) {
                                                var r = eI.toSlateNode(R, n);
                                                if (d.Hg.isElement(r) && !R.isVoid(r)) return;
                                            }
                                            if (ec) {
                                                var i = t.getSelection();
                                                null == i || i.removeAllRanges();
                                            }
                                            D.delete(R);
                                        }
                                    }
                                },
                                [f, N.onBlur],
                            ),
                            onClick: (0, u.useCallback)(
                                (e) => {
                                    if (eI.hasTarget(R, e.target) && !tx(e, N.onClick) && z(e.target)) {
                                        var t = eI.toSlateNode(R, e.target),
                                            n = eI.findPath(R, t);
                                        if (d.KE.hasPath(R, n) && d.bP.get(R, n) === t) {
                                            if (e.detail === eQ && n.length >= 1) {
                                                var r = n;
                                                if (!(d.Hg.isElement(t) && d.KE.isBlock(R, t))) {
                                                    var i,
                                                        a = d.KE.above(R, {
                                                            match: (e) => d.Hg.isElement(e) && d.KE.isBlock(R, e),
                                                            at: n,
                                                        });
                                                    r = null != (i = null == a ? void 0 : a[1]) ? i : n.slice(0, 1);
                                                }
                                                var s = d.KE.range(R, r);
                                                d.gB.select(R, s);
                                                return;
                                            }
                                            if (!f) {
                                                var o = d.KE.start(R, n),
                                                    l = d.KE.end(R, n),
                                                    u = d.KE.void(R, { at: o }),
                                                    c = d.KE.void(R, { at: l });
                                                if (u && c && d.wA.equals(u[1], c[1])) {
                                                    var _ = d.KE.range(R, o);
                                                    d.gB.select(R, _);
                                                }
                                            }
                                        }
                                    }
                                },
                                [f, N.onClick],
                            ),
                            onCompositionEnd: (0, u.useCallback)(
                                (e) => {
                                    if (
                                        eI.hasSelectableTarget(R, e.target) &&
                                        (eI.isComposing(R) && (P(!1), L.set(R, !1)),
                                        null == X || X.handleCompositionEnd(e),
                                        !tx(e, N.onCompositionEnd) && !el && !ec && !eh && !es && !eg && !em) &&
                                        e.data
                                    ) {
                                        var t = M.get(R);
                                        M.delete(R),
                                            void 0 !== t && (k.set(R, R.marks), (R.marks = t)),
                                            d.KE.insertText(R, e.data);
                                        var n = k.get(R);
                                        k.delete(R), void 0 !== n && (R.marks = n);
                                    }
                                },
                                [N.onCompositionEnd],
                            ),
                            onCompositionUpdate: (0, u.useCallback)(
                                (e) => {
                                    !eI.hasSelectableTarget(R, e.target) ||
                                        tx(e, N.onCompositionUpdate) ||
                                        eI.isComposing(R) ||
                                        (P(!0), L.set(R, !0));
                                },
                                [N.onCompositionUpdate],
                            ),
                            onCompositionStart: (0, u.useCallback)(
                                (e) => {
                                    if (
                                        eI.hasSelectableTarget(R, e.target) &&
                                        (null == X || X.handleCompositionStart(e), !tx(e, N.onCompositionStart) && !el)
                                    ) {
                                        P(!0);
                                        var { selection: t } = R;
                                        if (t) {
                                            if (d.Q6.isExpanded(t)) return void d.KE.deleteFragment(R);
                                            var n = d.KE.above(R, {
                                                match: (e) => d.Hg.isElement(e) && d.KE.isInline(R, e),
                                                mode: "highest",
                                            });
                                            if (n) {
                                                var [, r] = n;
                                                if (d.KE.isEnd(R, t.anchor, r)) {
                                                    var i = d.KE.after(R, r);
                                                    d.gB.setSelection(R, { anchor: i, focus: i });
                                                }
                                            }
                                        }
                                    }
                                },
                                [N.onCompositionStart],
                            ),
                            onCopy: (0, u.useCallback)(
                                (e) => {
                                    eI.hasSelectableTarget(R, e.target) &&
                                        !tx(e, N.onCopy) &&
                                        (e.preventDefault(), eI.setFragmentData(R, e.clipboardData, "copy"));
                                },
                                [N.onCopy],
                            ),
                            onCut: (0, u.useCallback)(
                                (e) => {
                                    if (!f && eI.hasSelectableTarget(R, e.target) && !tx(e, N.onCut)) {
                                        e.preventDefault(), eI.setFragmentData(R, e.clipboardData, "cut");
                                        var { selection: t } = R;
                                        if (t)
                                            if (d.Q6.isExpanded(t)) d.KE.deleteFragment(R);
                                            else {
                                                var n = d.bP.parent(R, t.anchor.path);
                                                d.KE.isVoid(R, n) && d.gB.delete(R);
                                            }
                                    }
                                },
                                [f, N.onCut],
                            ),
                            onDragOver: (0, u.useCallback)(
                                (e) => {
                                    if (eI.hasTarget(R, e.target) && !tx(e, N.onDragOver)) {
                                        var t = eI.toSlateNode(R, e.target);
                                        d.Hg.isElement(t) && d.KE.isVoid(R, t) && e.preventDefault();
                                    }
                                },
                                [N.onDragOver],
                            ),
                            onDragStart: (0, u.useCallback)(
                                (e) => {
                                    if (!f && eI.hasTarget(R, e.target) && !tx(e, N.onDragStart)) {
                                        var t = eI.toSlateNode(R, e.target),
                                            n = eI.findPath(R, t);
                                        if (
                                            (d.Hg.isElement(t) && d.KE.isVoid(R, t)) ||
                                            d.KE.void(R, { at: n, voids: !0 })
                                        ) {
                                            var r = d.KE.range(R, n);
                                            d.gB.select(R, r);
                                        }
                                        ($.isDraggingInternally = !0), eI.setFragmentData(R, e.dataTransfer, "drag");
                                    }
                                },
                                [f, N.onDragStart],
                            ),
                            onDrop: (0, u.useCallback)(
                                (e) => {
                                    if (!f && eI.hasTarget(R, e.target) && !tx(e, N.onDrop)) {
                                        e.preventDefault();
                                        var t = R.selection,
                                            n = eI.findEventRange(R, e),
                                            r = e.dataTransfer;
                                        d.gB.select(R, n),
                                            $.isDraggingInternally &&
                                                t &&
                                                !d.Q6.equals(t, n) &&
                                                !d.KE.void(R, { at: n, voids: !0 }) &&
                                                d.gB.delete(R, { at: t }),
                                            eI.insertData(R, r),
                                            eI.isFocused(R) || eI.focus(R);
                                    }
                                    $.isDraggingInternally = !1;
                                },
                                [f, N.onDrop],
                            ),
                            onDragEnd: (0, u.useCallback)(
                                (e) => {
                                    !f &&
                                        $.isDraggingInternally &&
                                        N.onDragEnd &&
                                        eI.hasTarget(R, e.target) &&
                                        N.onDragEnd(e),
                                        ($.isDraggingInternally = !1);
                                },
                                [f, N.onDragEnd],
                            ),
                            onFocus: (0, u.useCallback)(
                                (e) => {
                                    if (
                                        !f &&
                                        !$.isUpdatingSelection &&
                                        eI.hasEditableTarget(R, e.target) &&
                                        !tx(e, N.onFocus)
                                    ) {
                                        var t = eI.toDOMNode(R, R);
                                        if (
                                            (($.latestElement = eI.findDocumentOrShadowRoot(R).activeElement),
                                            eu && e.target !== t)
                                        )
                                            return void t.focus();
                                        D.set(R, !0);
                                    }
                                },
                                [f, N.onFocus],
                            ),
                            onKeyDown: (0, u.useCallback)(
                                (e) => {
                                    if (!f && eI.hasEditableTarget(R, e.target)) {
                                        null == X || X.handleKeyDown(e);
                                        var { nativeEvent: t } = e;
                                        if (
                                            (eI.isComposing(R) && !1 === t.isComposing && (L.set(R, !1), P(!1)),
                                            !(tx(e, N.onKeyDown) || eI.isComposing(R)))
                                        ) {
                                            var { selection: n } = R,
                                                r = R.children[null !== n ? n.focus.path[0] : 0],
                                                a = "rtl" === i()(d.bP.string(r));
                                            if (e2.isRedo(t)) {
                                                e.preventDefault();
                                                var s = R;
                                                "function" == typeof s.redo && s.redo();
                                                return;
                                            }
                                            if (e2.isUndo(t)) {
                                                e.preventDefault();
                                                var o = R;
                                                "function" == typeof o.undo && o.undo();
                                                return;
                                            }
                                            if (e2.isMoveLineBackward(t)) {
                                                e.preventDefault(), d.gB.move(R, { unit: "line", reverse: !0 });
                                                return;
                                            }
                                            if (e2.isMoveLineForward(t)) {
                                                e.preventDefault(), d.gB.move(R, { unit: "line" });
                                                return;
                                            }
                                            if (e2.isExtendLineBackward(t)) {
                                                e.preventDefault(),
                                                    d.gB.move(R, { unit: "line", edge: "focus", reverse: !0 });
                                                return;
                                            }
                                            if (e2.isExtendLineForward(t)) {
                                                e.preventDefault(), d.gB.move(R, { unit: "line", edge: "focus" });
                                                return;
                                            }
                                            if (e2.isMoveBackward(t)) {
                                                e.preventDefault(),
                                                    n && d.Q6.isCollapsed(n)
                                                        ? d.gB.move(R, { reverse: !a })
                                                        : d.gB.collapse(R, { edge: "start" });
                                                return;
                                            }
                                            if (e2.isMoveForward(t)) {
                                                e.preventDefault(),
                                                    n && d.Q6.isCollapsed(n)
                                                        ? d.gB.move(R, { reverse: a })
                                                        : d.gB.collapse(R, { edge: "end" });
                                                return;
                                            }
                                            if (e2.isMoveWordBackward(t)) {
                                                e.preventDefault(),
                                                    n && d.Q6.isExpanded(n) && d.gB.collapse(R, { edge: "focus" }),
                                                    d.gB.move(R, { unit: "word", reverse: !a });
                                                return;
                                            }
                                            if (e2.isMoveWordForward(t)) {
                                                e.preventDefault(),
                                                    n && d.Q6.isExpanded(n) && d.gB.collapse(R, { edge: "focus" }),
                                                    d.gB.move(R, { unit: "word", reverse: a });
                                                return;
                                            }
                                            if (eA) {
                                                if (
                                                    (e_ || ec) &&
                                                    n &&
                                                    (e2.isDeleteBackward(t) || e2.isDeleteForward(t)) &&
                                                    d.Q6.isCollapsed(n)
                                                ) {
                                                    var l = d.bP.parent(R, n.anchor.path);
                                                    if (
                                                        d.Hg.isElement(l) &&
                                                        d.KE.isVoid(R, l) &&
                                                        (d.KE.isInline(R, l) || d.KE.isBlock(R, l))
                                                    ) {
                                                        e.preventDefault(), d.KE.deleteBackward(R, { unit: "block" });
                                                        return;
                                                    }
                                                }
                                            } else {
                                                if (e2.isBold(t) || e2.isItalic(t) || e2.isTransposeCharacter(t))
                                                    return void e.preventDefault();
                                                if (e2.isSoftBreak(t)) {
                                                    e.preventDefault(), d.KE.insertSoftBreak(R);
                                                    return;
                                                }
                                                if (e2.isSplitBlock(t)) {
                                                    e.preventDefault(), d.KE.insertBreak(R);
                                                    return;
                                                }
                                                if (e2.isDeleteBackward(t)) {
                                                    e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(R, { direction: "backward" })
                                                            : d.KE.deleteBackward(R);
                                                    return;
                                                }
                                                if (e2.isDeleteForward(t)) {
                                                    e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(R, { direction: "forward" })
                                                            : d.KE.deleteForward(R);
                                                    return;
                                                }
                                                if (e2.isDeleteLineBackward(t)) {
                                                    e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(R, { direction: "backward" })
                                                            : d.KE.deleteBackward(R, { unit: "line" });
                                                    return;
                                                }
                                                if (e2.isDeleteLineForward(t)) {
                                                    e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(R, { direction: "forward" })
                                                            : d.KE.deleteForward(R, { unit: "line" });
                                                    return;
                                                }
                                                if (e2.isDeleteWordBackward(t)) {
                                                    e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(R, { direction: "backward" })
                                                            : d.KE.deleteBackward(R, { unit: "word" });
                                                    return;
                                                }
                                                if (e2.isDeleteWordForward(t)) {
                                                    e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(R, { direction: "forward" })
                                                            : d.KE.deleteForward(R, { unit: "word" });
                                                    return;
                                                }
                                            }
                                        }
                                    }
                                },
                                [f, N.onKeyDown],
                            ),
                            onPaste: (0, u.useCallback)(
                                (e) => {
                                    !f &&
                                        eI.hasEditableTarget(R, e.target) &&
                                        !tx(e, N.onPaste) &&
                                        (!eA || Z(e.nativeEvent) || ec) &&
                                        (e.preventDefault(), eI.insertData(R, e.clipboardData));
                                },
                                [f, N.onPaste],
                            ),
                        }),
                        u.createElement(tR, {
                            decorations: et,
                            node: R,
                            renderElement: p,
                            renderPlaceholder: m,
                            renderLeaf: h,
                            selection: R.selection,
                        }),
                    ),
                ),
            ),
        );
    },
    tD = (e) => {
        var { attributes: t, children: n } = e;
        return u.createElement("span", Object.assign({}, t), n, el && u.createElement("br", null));
    },
    tL = () => [],
    tw = (e, t) => {
        if (t.getBoundingClientRect && (!e.selection || (e.selection && d.Q6.isCollapsed(e.selection)))) {
            var n = t.startContainer.parentElement;
            (n.getBoundingClientRect = t.getBoundingClientRect.bind(t)),
                (0, c.A)(n, { scrollMode: "if-needed" }),
                delete n.getBoundingClientRect;
        }
    },
    tx = (e, t) => {
        if (!t) return !1;
        var n = t(e);
        return null != n ? n : e.isDefaultPrevented() || e.isPropagationStopped();
    },
    tP = (e, t) => {
        if (!t) return !1;
        var n = t(e);
        return null != n ? n : e.defaultPrevented;
    },
    tM = (0, u.createContext)(!1),
    tk = () => (0, u.useContext)(tM);
function tU(e) {
    return e instanceof Error;
}
var tG = (0, u.createContext)({}),
    tV = (e, t) => e === t;
function tF(e) {
    var t = (0, u.useRef)([]).current,
        n = (0, u.useRef)({ editor: e }).current,
        r = (0, u.useCallback)((e) => {
            (n.editor = e), t.forEach((t) => t(e));
        }, []);
    return {
        selectorContext: (0, u.useMemo)(
            () => ({
                getSlate: () => n.editor,
                addEventListener: (e) => (
                    t.push(e),
                    () => {
                        t.splice(t.indexOf(e), 1);
                    }
                ),
            }),
            [t, n],
        ),
        onChange: r,
    };
}
var tB = ["editor", "children", "onChange", "value"],
    tj = (e) => {
        var { editor: t, children: n, onChange: r, value: i } = e,
            a = g(e, tB),
            s = (0, u.useRef)(!1),
            [o, l] = u.useState(() => {
                if (!d.bP.isNodeList(i))
                    throw Error(
                        "[Slate] value is invalid! Expected a list of elements but got: ".concat(d.h6.stringify(i)),
                    );
                if (!d.KE.isEditor(t)) throw Error("[Slate] editor is invalid! You passed: ".concat(d.h6.stringify(t)));
                return (t.children = i), Object.assign(t, a), { v: 0, editor: t };
            }),
            { selectorContext: c, onChange: _ } = tF(t),
            f = (0, u.useCallback)(() => {
                r && r(t.children), l((e) => ({ v: e.v + 1, editor: t })), _(t);
            }, [r]);
        (0, u.useEffect)(
            () => (
                x.set(t, f),
                () => {
                    x.set(t, () => {}), (s.current = !0);
                }
            ),
            [f],
        );
        var [p, h] = (0, u.useState)(eI.isFocused(t));
        return (
            (0, u.useEffect)(() => {
                h(eI.isFocused(t));
            }),
            eN(() => {
                var e = () => h(eI.isFocused(t));
                return ea
                    ? (document.addEventListener("focusin", e),
                      document.addEventListener("focusout", e),
                      () => {
                          document.removeEventListener("focusin", e), document.removeEventListener("focusout", e);
                      })
                    : (document.addEventListener("focus", e, !0),
                      document.addEventListener("blur", e, !0),
                      () => {
                          document.removeEventListener("focus", e, !0), document.removeEventListener("blur", e, !0);
                      });
            }, []),
            u.createElement(
                tG.Provider,
                { value: c },
                u.createElement(
                    eq.Provider,
                    { value: o },
                    u.createElement(ew.Provider, { value: o.editor }, u.createElement(tM.Provider, { value: p }, n)),
                ),
            )
        );
    },
    tH = (e, t) => {
        var n = (t.top + t.bottom) / 2;
        return e.top <= n && e.bottom >= n;
    },
    tY = (e, t, n) => {
        var r = eI.toDOMRange(e, t).getBoundingClientRect(),
            i = eI.toDOMRange(e, n).getBoundingClientRect();
        return tH(r, i) && tH(i, r);
    },
    tW = (e, t) => {
        var n = d.KE.range(e, d.Q6.end(t)),
            r = Array.from(d.KE.positions(e, { at: t })),
            i = 0,
            a = r.length,
            s = Math.floor(a / 2);
        if (tY(e, d.KE.range(e, r[i]), n)) return d.KE.range(e, r[i], n);
        if (r.length < 2) return d.KE.range(e, r[r.length - 1], n);
        for (; s !== r.length && s !== i; )
            tY(e, d.KE.range(e, r[s]), n) ? (a = s) : (i = s), (s = Math.floor((i + a) / 2));
        return d.KE.range(e, r[a], n);
    };
function tK(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function tz(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tK(Object(n), !0).forEach(function (t) {
                  h(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tK(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var t$ = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x-slate-fragment",
            n = e,
            { apply: r, onChange: i, deleteBackward: a, addMark: s, removeMark: o } = n;
        return (
            R.set(n, new WeakMap()),
            (n.addMark = (e, t) => {
                var r, i;
                null == (r = P.get(n)) || r(),
                    !M.get(n) && null != (i = U.get(n)) && i.length && M.set(n, null),
                    k.delete(n),
                    s(e, t);
            }),
            (n.removeMark = (e) => {
                var t;
                !M.get(n) && null != (t = U.get(n)) && t.length && M.set(n, null), k.delete(n), o(e);
            }),
            (n.deleteBackward = (e) => {
                if ("line" !== e) return a(e);
                if (n.selection && d.Q6.isCollapsed(n.selection)) {
                    var t = d.KE.above(n, { match: (e) => d.Hg.isElement(e) && d.KE.isBlock(n, e), at: n.selection });
                    if (t) {
                        var [, r] = t,
                            i = d.KE.range(n, r, n.selection.anchor),
                            s = tW(n, i);
                        d.Q6.isCollapsed(s) || d.gB.delete(n, { at: s });
                    }
                }
            }),
            (n.apply = (e) => {
                var t,
                    i = [],
                    a = U.get(n);
                if (null != a && a.length) {
                    var s = a.map((t) => tl(t, e)).filter(Boolean);
                    U.set(n, s);
                }
                var o = V.get(n);
                o && V.set(n, to(n, o, e));
                var l = G.get(n);
                if (null != l && l.at) {
                    var u = d.bR.isPoint(null == l ? void 0 : l.at) ? ts(n, l.at, e) : to(n, l.at, e);
                    G.set(n, u ? tz(tz({}, l), {}, { at: u }) : null);
                }
                switch (e.type) {
                    case "insert_text":
                    case "remove_text":
                    case "set_node":
                    case "split_node":
                        i.push(...tq(n, e.path));
                        break;
                    case "set_selection":
                        null == (t = w.get(n)) || t.unref(), w.delete(n);
                        break;
                    case "insert_node":
                    case "remove_node":
                        i.push(...tq(n, d.wA.parent(e.path)));
                        break;
                    case "merge_node":
                        i.push(...tq(n, d.wA.previous(e.path)));
                        break;
                    case "move_node":
                        i.push(...tq(n, d.wA.common(d.wA.parent(e.path), d.wA.parent(e.newPath))));
                }
                for (var [c, _] of (r(e), i)) {
                    var [f] = d.KE.node(n, c);
                    N.set(f, _);
                }
            }),
            (n.setFragmentData = (e) => {
                var { selection: r } = n;
                if (r) {
                    var [i, a] = d.Q6.edges(r),
                        s = d.KE.void(n, { at: i.path }),
                        o = d.KE.void(n, { at: a.path });
                    if (!d.Q6.isCollapsed(r) || s) {
                        var l = eI.toDOMRange(n, r),
                            u = l.cloneContents(),
                            c = u.childNodes[0];
                        if (
                            (u.childNodes.forEach((e) => {
                                e.textContent && "" !== e.textContent.trim() && (c = e);
                            }),
                            o)
                        ) {
                            var [_] = o,
                                f = l.cloneRange(),
                                p = eI.toDOMNode(n, _);
                            f.setEndAfter(p), (u = f.cloneContents());
                        }
                        if (
                            (s && (c = u.querySelector("[data-slate-spacer]")),
                            Array.from(u.querySelectorAll("[data-slate-zero-width]")).forEach((e) => {
                                var t = "n" === e.getAttribute("data-slate-zero-width");
                                e.textContent = t ? "\n" : "";
                            }),
                            q(c))
                        ) {
                            var h = c.ownerDocument.createElement("span");
                            (h.style.whiteSpace = "pre"), h.appendChild(c), u.appendChild(h), (c = h);
                        }
                        var m = n.getFragment(),
                            g = JSON.stringify(m),
                            E = window.btoa(encodeURIComponent(g));
                        c.setAttribute("data-slate-fragment", E), e.setData("application/".concat(t), E);
                        var A = u.ownerDocument.createElement("div");
                        return (
                            A.appendChild(u),
                            A.setAttribute("hidden", "true"),
                            u.ownerDocument.body.appendChild(A),
                            e.setData("text/html", A.innerHTML),
                            e.setData("text/plain", et(A)),
                            u.ownerDocument.body.removeChild(A),
                            e
                        );
                    }
                }
            }),
            (n.insertData = (e) => {
                n.insertFragmentData(e) || n.insertTextData(e);
            }),
            (n.insertFragmentData = (e) => {
                var r = e.getData("application/".concat(t)) || er(e);
                if (r) {
                    var i = JSON.parse(decodeURIComponent(window.atob(r)));
                    return n.insertFragment(i), !0;
                }
                return !1;
            }),
            (n.insertTextData = (e) => {
                var t = e.getData("text/plain");
                if (t) {
                    var r = t.split(/\r\n|\r|\n/),
                        i = !1;
                    for (var a of r) i && d.gB.splitNodes(n, { always: !0 }), n.insertText(a), (i = !0);
                    return !0;
                }
                return !1;
            }),
            (n.onChange = (e) => {
                p.unstable_batchedUpdates(() => {
                    var t = x.get(n);
                    t && t(), i(e);
                });
            }),
            n
        );
    },
    tq = (e, t) => {
        var n = [];
        for (var [r, i] of d.KE.levels(e, { at: t })) {
            var a = eI.findKey(e, r);
            n.push([i, a]);
        }
        return n;
    };
