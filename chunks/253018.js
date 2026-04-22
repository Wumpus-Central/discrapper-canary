"use strict";
n.d(t, { A: () => tl, Fo: () => e6, RV: () => eA, f7: () => eO, o$: () => tp, rL: () => em, zL: () => to });
var r = n(877413),
    i = n.n(r),
    a = n(805353),
    o = n.n(a),
    u = n(879378),
    s = n.n(u),
    l = n(64700),
    d = n(302588),
    c = n(719442),
    f = n(234379),
    h = n(294106),
    p = n(340287);
function m(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
var _ = 0;
class g {
    constructor() {
        this.id = "".concat(_++);
    }
}
var y = new WeakMap(),
    D = new WeakMap(),
    b = new WeakMap(),
    C = new WeakMap(),
    E = new WeakMap(),
    w = new WeakMap(),
    A = new WeakMap(),
    B = new WeakMap(),
    F = new WeakMap(),
    V = new WeakMap(),
    T = new WeakMap(),
    k = new WeakMap(),
    x = new WeakMap(),
    P = new WeakMap(),
    O = new WeakMap(),
    S = new WeakMap(),
    M = new WeakMap(),
    R = new WeakMap(),
    N = new WeakMap(),
    L = new WeakMap(),
    I = new WeakMap(),
    j = Symbol("placeholder"),
    G = Symbol("mark-placeholder"),
    W = globalThis.Text,
    K = (e) => (e && e.ownerDocument && e.ownerDocument.defaultView) || null,
    U = (e) => q(e) && 8 === e.nodeType,
    H = (e) => q(e) && 1 === e.nodeType,
    q = (e) => {
        var t = K(e);
        return !!t && e instanceof t.Node;
    },
    z = (e) => {
        var t = e && e.anchorNode && K(e.anchorNode);
        return !!t && e instanceof t.Selection;
    },
    Q = (e) => q(e) && 3 === e.nodeType,
    X = (e, t, n) => {
        for (
            var { childNodes: r } = e, i = r[t], a = t, o = !1, u = !1;
            (U(i) || (H(i) && 0 === i.childNodes.length) || (H(i) && "false" === i.getAttribute("contenteditable"))) &&
            (!o || !u);
        ) {
            if (a >= r.length) {
                (o = !0), (a = t - 1), (n = "backward");
                continue;
            }
            if (a < 0) {
                (u = !0), (a = t + 1), (n = "forward");
                continue;
            }
            (i = r[a]), (t = a), (a += "forward" === n ? 1 : -1);
        }
        return [i, t];
    },
    Z = (e, t, n) => {
        var [r] = X(e, t, n);
        return r;
    },
    Y = (e) => {
        var t = "";
        if (Q(e) && e.nodeValue) return e.nodeValue;
        if (H(e)) {
            for (var n of Array.from(e.childNodes)) t += Y(n);
            var r = getComputedStyle(e).getPropertyValue("display");
            ("block" === r || "list" === r || "BR" === e.tagName) && (t += "\n");
        }
        return t;
    },
    J = /data-slate-fragment="(.+?)"/m,
    $ = (e, t, n) => {
        var { target: r } = t;
        if (H(r) && r.matches('[contentEditable="false"]')) return !1;
        var { document: i } = em.getWindow(e);
        if (i.contains(r)) return em.hasDOMNode(e, r, { editable: !0 });
        var a = n.find((e) => {
            var { addedNodes: t, removedNodes: n } = e;
            for (var i of t) if (i === r || i.contains(r)) return !0;
            for (var a of n) if (a === r || a.contains(r)) return !0;
        });
        return !!a && a !== t && $(e, a, n);
    },
    ee = parseInt(l.version.split(".")[0], 10) >= 17,
    et =
        "u" > typeof navigator &&
        "u" > typeof window &&
        /iPad|iPhone|iPod/.test(navigator.userAgent) &&
        !window.MSStream,
    en = "u" > typeof navigator && /Mac OS X/.test(navigator.userAgent),
    er = "u" > typeof navigator && /Android/.test(navigator.userAgent),
    ei = "u" > typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
    ea = "u" > typeof navigator && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
    eo = "u" > typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
    eu = "u" > typeof navigator && /Chrome/i.test(navigator.userAgent),
    es = "u" > typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
    el = er && "u" > typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
    ed =
        "u" > typeof navigator &&
        /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
    ec = "u" > typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
    ef = "u" > typeof navigator && /.*Wechat/.test(navigator.userAgent),
    eh = "u" > typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
    ep =
        (!es || !el) &&
        !eo &&
        "u" > typeof globalThis &&
        globalThis.InputEvent &&
        "function" == typeof globalThis.InputEvent.prototype.getTargetRanges,
    em = {
        isComposing: (e) => !!k.get(e),
        getWindow(e) {
            var t = b.get(e);
            if (!t) throw Error("Unable to find a host window element for this editor");
            return t;
        },
        findKey(e, t) {
            var n = B.get(t);
            return n || ((n = new g()), B.set(t, n)), n;
        },
        findPath(e, t) {
            for (var n = [], r = t; ; ) {
                var i = D.get(r);
                if (null == i)
                    if (c.KE.isEditor(r)) return n;
                    else break;
                var a = y.get(r);
                if (null == a) break;
                n.unshift(a), (r = i);
            }
            throw Error("Unable to find the path for Slate node: ".concat(c.h6.stringify(t)));
        },
        findDocumentOrShadowRoot(e) {
            var t = em.toDOMNode(e, e),
                n = t.getRootNode();
            return (n instanceof Document || n instanceof ShadowRoot) && null != n.getSelection ? n : t.ownerDocument;
        },
        isFocused: (e) => !!T.get(e),
        isReadOnly: (e) => !!V.get(e),
        blur(e) {
            var t = em.toDOMNode(e, e),
                n = em.findDocumentOrShadowRoot(e);
            T.set(e, !1), n.activeElement === t && t.blur();
        },
        focus(e) {
            var t = em.toDOMNode(e, e),
                n = em.findDocumentOrShadowRoot(e);
            T.set(e, !0), n.activeElement !== t && t.focus({ preventScroll: !0 });
        },
        deselect(e) {
            var { selection: t } = e,
                n = em.findDocumentOrShadowRoot(e).getSelection();
            n && n.rangeCount > 0 && n.removeAllRanges(), t && c.gB.deselect(e);
        },
        hasDOMNode(e, t) {
            var n,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { editable: i = !1 } = r,
                a = em.toDOMNode(e, e);
            try {
                n = H(t) ? t : t.parentElement;
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
            var n = F.get(e),
                r = c.KE.isEditor(t) ? C.get(e) : null == n ? void 0 : n.get(em.findKey(e, t));
            if (!r) throw Error("Cannot resolve a DOM node from Slate node: ".concat(c.h6.stringify(t)));
            return r;
        },
        toDOMPoint(e, t) {
            var [n] = c.KE.node(e, t.path),
                r = em.toDOMNode(e, n);
            c.KE.void(e, { at: t }) && (t = { path: t.path, offset: 0 });
            for (
                var i = Array.from(r.querySelectorAll("[data-slate-string], [data-slate-zero-width]")), a = 0, o = 0;
                o < i.length;
                o++
            ) {
                var u = i[o],
                    s = u.childNodes[0];
                if (null != s && null != s.textContent) {
                    var { length: l } = s.textContent,
                        d = u.getAttribute("data-slate-length"),
                        f = a + (null == d ? l : parseInt(d, 10)),
                        h = i[o + 1];
                    if (t.offset === f && null != h && h.hasAttribute("data-slate-mark-placeholder")) {
                        var p,
                            m,
                            v = h.childNodes[0];
                        p = [v instanceof W ? v : h, null != (m = h.textContent) && m.startsWith("\uFEFF") ? 1 : 0];
                        break;
                    }
                    if (t.offset <= f) {
                        p = [s, Math.min(l, Math.max(0, t.offset - a))];
                        break;
                    }
                    a = f;
                }
            }
            if (!p) throw Error("Cannot resolve a DOM point from Slate point: ".concat(c.h6.stringify(t)));
            return p;
        },
        toDOMRange(e, t) {
            var { anchor: n, focus: r } = t,
                i = c.Q6.isBackward(t),
                a = em.toDOMPoint(e, n),
                o = c.Q6.isCollapsed(t) ? a : em.toDOMPoint(e, r),
                u = em.getWindow(e).document.createRange(),
                [s, l] = i ? o : a,
                [d, f] = i ? a : o,
                h = !!(H(s) ? s : s.parentElement).getAttribute("data-slate-zero-width"),
                p = !!(H(d) ? d : d.parentElement).getAttribute("data-slate-zero-width");
            return u.setStart(s, h ? 1 : l), u.setEnd(d, p ? 1 : f), u;
        },
        toSlateNode(e, t) {
            var n = H(t) ? t : t.parentElement;
            n && !n.hasAttribute("data-slate-node") && (n = n.closest("[data-slate-node]"));
            var r = n ? w.get(n) : null;
            if (!r) throw Error("Cannot resolve a Slate node from DOM node: ".concat(n));
            return r;
        },
        findEventRange(e, t) {
            "nativeEvent" in t && (t = t.nativeEvent);
            var n,
                { clientX: r, clientY: i, target: a } = t;
            if (null == r || null == i) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
            var o = em.toSlateNode(e, t.target),
                u = em.findPath(e, o);
            if (c.Hg.isElement(o) && c.KE.isVoid(e, o)) {
                var s = a.getBoundingClientRect(),
                    l = e.isInline(o) ? r - s.left < s.left + s.width - r : i - s.top < s.top + s.height - i,
                    d = c.KE.point(e, u, { edge: l ? "start" : "end" }),
                    f = l ? c.KE.before(e, d) : c.KE.after(e, d);
                if (f) return c.KE.range(e, f);
            }
            var { document: h } = em.getWindow(e);
            if (h.caretRangeFromPoint) n = h.caretRangeFromPoint(r, i);
            else {
                var p = h.caretPositionFromPoint(r, i);
                p && ((n = h.createRange()).setStart(p.offsetNode, p.offset), n.setEnd(p.offsetNode, p.offset));
            }
            if (!n) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
            return em.toSlateRange(e, n, { exactMatch: !1, suppressThrow: !1 });
        },
        toSlatePoint(e, t, n) {
            var { exactMatch: r, suppressThrow: i } = n,
                [a, o] = r
                    ? t
                    : ((e) => {
                          var [t, n] = e;
                          if (H(t) && t.childNodes.length) {
                              var r = n === t.childNodes.length,
                                  i = r ? n - 1 : n;
                              for (
                                  [t, i] = X(t, i, r ? "backward" : "forward"), r = i < n;
                                  H(t) && t.childNodes.length;
                              ) {
                                  var a = r ? t.childNodes.length - 1 : 0;
                                  t = Z(t, a, r ? "backward" : "forward");
                              }
                              n = r && null != t.textContent ? t.textContent.length : 0;
                          }
                          return [t, n];
                      })(t),
                u = a.parentNode,
                s = null,
                l = 0;
            if (u) {
                var d,
                    f,
                    h = em.toDOMNode(e, e),
                    p = u.closest('[data-slate-void="true"]'),
                    m = p && h.contains(p) ? p : null,
                    v = u.closest("[data-slate-leaf]"),
                    _ = null;
                if (v) {
                    if ((s = v.closest('[data-slate-node="text"]'))) {
                        var g = em.getWindow(e).document.createRange();
                        g.setStart(s, 0), g.setEnd(a, o);
                        var y = g.cloneContents();
                        [
                            ...Array.prototype.slice.call(y.querySelectorAll("[data-slate-zero-width]")),
                            ...Array.prototype.slice.call(y.querySelectorAll("[contenteditable=false]")),
                        ].forEach((e) => {
                            if (
                                er &&
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
                            (l = y.textContent.length),
                            (_ = s);
                    }
                } else if (m) {
                    for (var D = m.querySelectorAll("[data-slate-leaf]"), b = 0; b < D.length; b++) {
                        var C = D[b];
                        if (em.hasDOMNode(e, C)) {
                            v = C;
                            break;
                        }
                    }
                    v
                        ? ((s = v.closest('[data-slate-node="text"]')),
                          (l = (_ = v).textContent.length),
                          _.querySelectorAll("[data-slate-zero-width]").forEach((e) => {
                              l -= e.textContent.length;
                          }))
                        : (l = 1);
                }
                _ &&
                    l === _.textContent.length &&
                    er &&
                    "z" === _.getAttribute("data-slate-zero-width") &&
                    null != (d = _.textContent) &&
                    d.startsWith("\uFEFF") &&
                    (u.hasAttribute("data-slate-zero-width") ||
                        (ei && null != (f = _.textContent) && f.endsWith("\n\n"))) &&
                    l--;
            }
            if (er && !s && !r) {
                var E = u.hasAttribute("data-slate-node") ? u : u.closest("[data-slate-node]");
                if (E && em.hasDOMNode(e, E, { editable: !0 })) {
                    var w = em.toSlateNode(e, E),
                        { path: A, offset: B } = c.KE.start(e, em.findPath(e, w));
                    return E.querySelector("[data-slate-leaf]") || (B = o), { path: A, offset: B };
                }
            }
            if (!s) {
                if (i) return null;
                throw Error("Cannot resolve a Slate point from DOM point: ".concat(t));
            }
            var F = em.toSlateNode(e, s);
            return { path: em.findPath(e, F), offset: l };
        },
        toSlateRange(e, t, n) {
            var r,
                i,
                a,
                o,
                u,
                s,
                { exactMatch: l, suppressThrow: d } = n;
            if (
                ((z(t) ? t.anchorNode : t.startContainer) &&
                    (z(t)
                        ? ((r = t.anchorNode),
                          (i = t.anchorOffset),
                          (a = t.focusNode),
                          (o = t.focusOffset),
                          (u =
                              eu &&
                              ((e) => {
                                  for (var t = e && e.parentNode; t; ) {
                                      if ("[object ShadowRoot]" === t.toString()) return !0;
                                      t = t.parentNode;
                                  }
                                  return !1;
                              })(r)
                                  ? t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset
                                  : t.isCollapsed))
                        : ((r = t.startContainer),
                          (i = t.startOffset),
                          (a = t.endContainer),
                          (o = t.endOffset),
                          (u = t.collapsed))),
                null == r || null == a || null == i || null == o)
            )
                throw Error("Cannot resolve a Slate range from DOM range: ".concat(t));
            "getAttribute" in a &&
                "false" === a.getAttribute("contenteditable") &&
                ((a = r), (o = (null == (s = r.textContent) ? void 0 : s.length) || 0));
            var f = em.toSlatePoint(e, [r, i], { exactMatch: l, suppressThrow: d });
            if (!f) return null;
            var h = u ? f : em.toSlatePoint(e, [a, o], { exactMatch: l, suppressThrow: d });
            if (!h) return null;
            if (ei && !u && r !== a) {
                var p = c.KE.isEnd(e, f, f.path),
                    m = c.KE.isStart(e, h, h.path);
                p && (f = c.KE.after(e, f) || f), m && (h = c.KE.before(e, h) || h);
            }
            var v = { anchor: f, focus: h };
            return (
                c.Q6.isExpanded(v) &&
                    c.Q6.isForward(v) &&
                    H(a) &&
                    c.KE.void(e, { at: v.focus, mode: "highest" }) &&
                    (v = c.KE.unhangRange(e, v, { voids: !0 })),
                v
            );
        },
        hasRange(e, t) {
            var { anchor: n, focus: r } = t;
            return c.KE.hasPath(e, n.path) && c.KE.hasPath(e, r.path);
        },
        hasTarget: (e, t) => q(t) && em.hasDOMNode(e, t),
        hasEditableTarget: (e, t) => q(t) && em.hasDOMNode(e, t, { editable: !0 }),
        hasSelectableTarget: (e, t) => em.hasEditableTarget(e, t) || em.isTargetInsideNonReadonlyVoid(e, t),
        isTargetInsideNonReadonlyVoid(e, t) {
            if (V.get(e)) return !1;
            var n = em.hasTarget(e, t) && em.toSlateNode(e, t);
            return c.Hg.isElement(n) && c.KE.isVoid(e, n);
        },
        androidScheduleFlush(e) {
            var t;
            null == (t = O.get(e)) || t();
        },
        androidPendingDiffs: (e) => R.get(e),
    },
    ev = ["anchor", "focus"],
    e_ = ["anchor", "focus"],
    eg = (e, t) => {
        var n = v(e, ev),
            r = v(t, e_);
        return (
            e[j] === t[j] &&
            Object.keys(n).length === Object.keys(r).length &&
            Object.keys(n).every((e) => r.hasOwnProperty(e) && n[e] === r[e])
        );
    },
    ey = eh ? l.useLayoutEffect : l.useEffect,
    eD = (e) => {
        var { isLast: t, leaf: n, parent: r, text: i } = e,
            a = eA(),
            o = em.findPath(a, i),
            u = c.wA.parent(o),
            s = !0 === n[G];
        return a.isVoid(r)
            ? l.createElement(eE, { length: c.bP.string(r).length })
            : "" !== n.text || r.children[r.children.length - 1] !== i || a.isInline(r) || "" !== c.KE.string(a, u)
              ? "" === n.text
                  ? l.createElement(eE, { isMarkPlaceholder: s })
                  : t && "\n" === n.text.slice(-1)
                    ? l.createElement(eb, { isTrailing: !0, text: n.text })
                    : l.createElement(eb, { text: n.text })
              : l.createElement(eE, { isLineBreak: !0, isMarkPlaceholder: s });
    },
    eb = (e) => {
        var { text: t, isTrailing: n = !1 } = e,
            r = (0, l.useRef)(null),
            i = () => "".concat(null != t ? t : "").concat(n ? "\n" : ""),
            [a] = (0, l.useState)(i);
        return (
            ey(() => {
                var e = i();
                r.current && r.current.textContent !== e && (r.current.textContent = e);
            }),
            l.createElement(eC, { ref: r }, a)
        );
    },
    eC = (0, l.memo)(
        (0, l.forwardRef)((e, t) => l.createElement("span", { "data-slate-string": !0, ref: t }, e.children)),
    ),
    eE = (e) => {
        var { length: t = 0, isLineBreak: n = !1, isMarkPlaceholder: r = !1 } = e,
            i = { "data-slate-zero-width": n ? "n" : "z", "data-slate-length": t };
        return (
            r && (i["data-slate-mark-placeholder"] = !0),
            l.createElement(
                "span",
                Object.assign({}, i),
                er && n ? null : "\uFEFF",
                n ? l.createElement("br", null) : null,
            )
        );
    },
    ew = (0, l.createContext)(null),
    eA = () => {
        var e = (0, l.useContext)(ew);
        if (!e) throw Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
        return e;
    },
    eB = l.memo(
        (e) => {
            var {
                    leaf: t,
                    isLast: n,
                    text: r,
                    parent: i,
                    renderPlaceholder: a,
                    renderLeaf: o = (e) => l.createElement(eF, Object.assign({}, e)),
                } = e,
                u = (0, l.useRef)(null),
                s = (0, l.useRef)(null),
                d = eA(),
                c = (0, l.useRef)(null);
            (0, l.useEffect)(
                () => () => {
                    c.current && c.current.disconnect();
                },
                [],
            ),
                (0, l.useEffect)(() => {
                    var e = null == s ? void 0 : s.current;
                    if (
                        (e ? E.set(d, e) : E.delete(d),
                        c.current
                            ? (c.current.disconnect(), e && c.current.observe(e))
                            : e &&
                              ((c.current = new (window.ResizeObserver || f.tb)(() => {
                                  var e = I.get(d);
                                  null == e || e();
                              })),
                              c.current.observe(e)),
                        !e && u.current)
                    ) {
                        var t = I.get(d);
                        null == t || t();
                    }
                    return (
                        (u.current = s.current),
                        () => {
                            E.delete(d);
                        }
                    );
                }, [s, t]);
            var h = l.createElement(eD, { isLast: n, leaf: t, parent: i, text: r });
            if (t[j]) {
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
                        ref: s,
                    },
                };
                h = l.createElement(l.Fragment, null, a(p), h);
            }
            return o({ attributes: { "data-slate-leaf": !0 }, children: h, leaf: t, text: r });
        },
        (e, t) =>
            t.parent === e.parent &&
            t.isLast === e.isLast &&
            t.renderLeaf === e.renderLeaf &&
            t.renderPlaceholder === e.renderPlaceholder &&
            t.text === e.text &&
            c.EY.equals(t.leaf, e.leaf) &&
            t.leaf[j] === e.leaf[j],
    ),
    eF = (e) => {
        var { attributes: t, children: n } = e;
        return l.createElement("span", Object.assign({}, t), n);
    },
    eV = l.memo(
        (e) => {
            for (
                var { decorations: t, isLast: n, parent: r, renderPlaceholder: i, renderLeaf: a, text: o } = e,
                    u = eA(),
                    s = (0, l.useRef)(null),
                    d = c.EY.decorations(o, t),
                    f = em.findKey(u, o),
                    h = [],
                    p = 0;
                p < d.length;
                p++
            ) {
                var m = d[p];
                h.push(
                    l.createElement(eB, {
                        isLast: n && p === d.length - 1,
                        key: "".concat(f.id, "-").concat(p),
                        renderPlaceholder: i,
                        leaf: m,
                        text: o,
                        parent: r,
                        renderLeaf: a,
                    }),
                );
            }
            var v = (0, l.useCallback)(
                (e) => {
                    var t = F.get(u);
                    e
                        ? (null == t || t.set(f, e), A.set(o, e), w.set(e, o))
                        : (null == t || t.delete(f), A.delete(o), s.current && w.delete(s.current)),
                        (s.current = e);
                },
                [s, u, f, o],
            );
            return l.createElement("span", { "data-slate-node": "text", ref: v }, h);
        },
        (e, t) =>
            t.parent === e.parent &&
            t.isLast === e.isLast &&
            t.renderLeaf === e.renderLeaf &&
            t.renderPlaceholder === e.renderPlaceholder &&
            t.text === e.text &&
            ((e, t) => {
                if (e.length !== t.length) return !1;
                for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                        i = t[n];
                    if (r.anchor.offset !== i.anchor.offset || r.focus.offset !== i.focus.offset || !eg(r, i))
                        return !1;
                }
                return !0;
            })(t.decorations, e.decorations),
    ),
    eT = l.memo(
        (e) => {
            var {
                    decorations: t,
                    element: n,
                    renderElement: r = (e) => l.createElement(ek, Object.assign({}, e)),
                    renderPlaceholder: a,
                    renderLeaf: o,
                    selection: u,
                } = e,
                s = eA(),
                d = eR(),
                f = s.isInline(n),
                h = em.findKey(s, n),
                p = (0, l.useCallback)(
                    (e) => {
                        var t = F.get(s);
                        e
                            ? (null == t || t.set(h, e), A.set(n, e), w.set(e, n))
                            : (null == t || t.delete(h), A.delete(n));
                    },
                    [s, h, n],
                ),
                m = eS({
                    decorations: t,
                    node: n,
                    renderElement: r,
                    renderPlaceholder: a,
                    renderLeaf: o,
                    selection: u,
                }),
                v = { "data-slate-node": "element", ref: p };
            if ((f && (v["data-slate-inline"] = !0), !f && c.KE.hasInlines(s, n))) {
                var _ = c.bP.string(n),
                    g = i()(_);
                "rtl" === g && (v.dir = g);
            }
            if (c.KE.isVoid(s, n)) {
                (v["data-slate-void"] = !0), !d && f && (v.contentEditable = !1);
                var [[b]] = c.bP.texts(n);
                (m = l.createElement(
                    f ? "span" : "div",
                    {
                        "data-slate-spacer": !0,
                        style: { height: "0", color: "transparent", outline: "none", position: "absolute" },
                    },
                    l.createElement(eV, { renderPlaceholder: a, decorations: [], isLast: !1, parent: n, text: b }),
                )),
                    y.set(b, 0),
                    D.set(b, n);
            }
            return r({ attributes: v, children: m, element: n, decorations: t });
        },
        (e, t) =>
            e.element === t.element &&
            e.renderElement === t.renderElement &&
            e.renderLeaf === t.renderLeaf &&
            e.renderPlaceholder === t.renderPlaceholder &&
            ((e, t) => {
                if (e.length !== t.length) return !1;
                for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                        i = t[n];
                    if (!c.Q6.equals(r, i) || !eg(r, i)) return !1;
                }
                return !0;
            })(e.decorations, t.decorations) &&
            (e.selection === t.selection || (!!e.selection && !!t.selection && c.Q6.equals(e.selection, t.selection))),
    ),
    ek = (e) => {
        var { attributes: t, children: n, element: r } = e,
            i = eA().isInline(r) ? "span" : "div";
        return l.createElement(i, Object.assign({}, t, { style: { position: "relative" } }), n);
    },
    ex = (0, l.createContext)(() => []),
    eP = (0, l.createContext)(!1),
    eO = () => (0, l.useContext)(eP),
    eS = (e) => {
        for (
            var { decorations: t, node: n, renderElement: r, renderPlaceholder: i, renderLeaf: a, selection: o } = e,
                u = (0, l.useContext)(ex),
                s = eA(),
                d = em.findPath(s, n),
                f = [],
                h = c.Hg.isElement(n) && !s.isInline(n) && c.KE.hasInlines(s, n),
                p = 0;
            p < n.children.length;
            p++
        ) {
            var m = d.concat(p),
                v = n.children[p],
                _ = em.findKey(s, v),
                g = c.KE.range(s, m),
                b = o && c.Q6.intersection(g, o),
                C = u([v, m]);
            for (var E of t) {
                var w = c.Q6.intersection(E, g);
                w && C.push(w);
            }
            c.Hg.isElement(v)
                ? f.push(
                      l.createElement(
                          eP.Provider,
                          { key: "provider-".concat(_.id), value: !!b },
                          l.createElement(eT, {
                              decorations: C,
                              element: v,
                              key: _.id,
                              renderElement: r,
                              renderPlaceholder: i,
                              renderLeaf: a,
                              selection: b,
                          }),
                      ),
                  )
                : f.push(
                      l.createElement(eV, {
                          decorations: C,
                          key: _.id,
                          isLast: h && p === n.children.length - 1,
                          parent: n,
                          renderPlaceholder: i,
                          renderLeaf: a,
                          text: v,
                      }),
                  ),
                y.set(v, p),
                D.set(v, n);
        }
        return f;
    },
    eM = (0, l.createContext)(!1),
    eR = () => (0, l.useContext)(eM),
    eN = (0, l.createContext)(null),
    eL = {
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
    eI = {
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
    ej = {
        deleteWordBackward: "ctrl+shift?+backspace",
        deleteWordForward: "ctrl+shift?+delete",
        redo: ["ctrl+y", "ctrl+shift+z"],
    },
    eG = (e) => {
        var t = eL[e],
            n = eI[e],
            r = ej[e],
            i = t && (0, h.isKeyHotkey)(t),
            a = n && (0, h.isKeyHotkey)(n),
            o = r && (0, h.isKeyHotkey)(r);
        return (e) => !!((i && i(e)) || (en && a && a(e)) || (!en && o && o(e)));
    },
    eW = {
        isBold: eG("bold"),
        isCompose: eG("compose"),
        isMoveBackward: eG("moveBackward"),
        isMoveForward: eG("moveForward"),
        isDeleteBackward: eG("deleteBackward"),
        isDeleteForward: eG("deleteForward"),
        isDeleteLineBackward: eG("deleteLineBackward"),
        isDeleteLineForward: eG("deleteLineForward"),
        isDeleteWordBackward: eG("deleteWordBackward"),
        isDeleteWordForward: eG("deleteWordForward"),
        isExtendBackward: eG("extendBackward"),
        isExtendForward: eG("extendForward"),
        isExtendLineBackward: eG("extendLineBackward"),
        isExtendLineForward: eG("extendLineForward"),
        isItalic: eG("italic"),
        isMoveLineBackward: eG("moveLineBackward"),
        isMoveLineForward: eG("moveLineForward"),
        isMoveWordBackward: eG("moveWordBackward"),
        isMoveWordForward: eG("moveWordForward"),
        isRedo: eG("redo"),
        isSoftBreak: eG("insertSoftBreak"),
        isSplitBlock: eG("splitBlock"),
        isTransposeCharacter: eG("transposeCharacter"),
        isUndo: eG("undo"),
    },
    eK = { subtree: !0, childList: !0, characterData: !0, characterDataOldValue: !0 };
class eU extends l.Component {
    constructor() {
        super(...arguments), (this.context = null), (this.manager = null), (this.mutationObserver = null);
    }
    observe() {
        var e,
            { node: t } = this.props;
        if (!t.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
        null == (e = this.mutationObserver) || e.observe(t.current, eK);
    }
    componentDidMount() {
        var e,
            t,
            { receivedUserInput: n } = this.props,
            r = this.context;
        (this.manager =
            ((e = []),
            {
                registerMutations: (t) => {
                    if (n.current) {
                        var i = t.filter((e) => $(r, e, t));
                        e.push(...i);
                    }
                },
                restoreDOM: function () {
                    e.length > 0 &&
                        (e.reverse().forEach((e) => {
                            "characterData" !== e.type &&
                                (e.removedNodes.forEach((t) => {
                                    e.target.insertBefore(t, e.nextSibling);
                                }),
                                e.addedNodes.forEach((t) => {
                                    e.target.removeChild(t);
                                }));
                        }),
                        t());
                },
                clear: (t = () => {
                    e = [];
                }),
            })),
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
eU.contextType = ew;
var eH = er
    ? eU
    : (e) => {
          var { children: t } = e;
          return l.createElement(l.Fragment, null, t);
      };
function eq(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return n.reduce((e, t) => e.slice(0, t.start) + t.text + e.slice(t.end), e);
}
function ez(e, t) {
    var { start: n, end: r, text: i } = t,
        a = e.slice(n, r),
        o = (function (e, t) {
            for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) if (e.charAt(r) !== t.charAt(r)) return r;
            return n;
        })(a, i),
        u = Math.min(a.length - o, i.length - o),
        s = (function (e, t, n) {
            for (var r = Math.min(e.length, t.length, n), i = 0; i < r; i++)
                if (e.charAt(e.length - i - 1) !== t.charAt(t.length - i - 1)) return i;
            return r;
        })(a, i, u),
        l = { start: n + o, end: r - s, text: i.slice(o, i.length - s) };
    return l.start === l.end && 0 === l.text.length ? null : l;
}
function eQ(e, t) {
    var { path: n, offset: r } = t;
    if (!c.KE.hasPath(e, n)) return null;
    var i = c.bP.get(e, n);
    if (!c.EY.isText(i)) return null;
    var a = c.KE.above(e, { match: (t) => c.Hg.isElement(t) && c.KE.isBlock(e, t), at: n });
    if (!a) return null;
    for (; r > i.text.length; ) {
        var o = c.KE.next(e, { at: n, match: c.EY.isText });
        if (!o || !c.wA.isDescendant(o[1], a[1])) return null;
        (r -= i.text.length), (i = o[0]), (n = o[1]);
    }
    return { path: n, offset: r };
}
function eX(e, t) {
    var n = eQ(e, t.anchor);
    if (!n) return null;
    if (c.Q6.isCollapsed(t)) return { anchor: n, focus: n };
    var r = eQ(e, t.focus);
    return r ? { anchor: n, focus: r } : null;
}
function eZ(e, t, n) {
    var r = R.get(e),
        i =
            null == r
                ? void 0
                : r.find((e) => {
                      var { path: n } = e;
                      return c.wA.equals(n, t.path);
                  });
    if (!i || t.offset <= i.diff.start) return c.bR.transform(t, n, { affinity: "backward" });
    var { diff: a } = i;
    if (t.offset <= a.start + a.text.length) {
        var o = { path: t.path, offset: a.start },
            u = c.bR.transform(o, n, { affinity: "backward" });
        return u ? { path: u.path, offset: u.offset + t.offset - a.start } : null;
    }
    var s = { path: t.path, offset: t.offset - a.text.length + a.end - a.start },
        l = c.bR.transform(s, n, { affinity: "backward" });
    return l
        ? "split_node" === n.type && c.wA.equals(n.path, t.path) && s.offset < n.position && a.start < n.position
            ? l
            : { path: l.path, offset: l.offset + a.text.length - a.end + a.start }
        : null;
}
function eY(e, t, n) {
    var r = eZ(e, t.anchor, n);
    if (!r) return null;
    if (c.Q6.isCollapsed(t)) return { anchor: r, focus: r };
    var i = eZ(e, t.focus, n);
    return i ? { anchor: r, focus: i } : null;
}
function eJ(e, t) {
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
function e$(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eJ(Object(n), !0).forEach(function (t) {
                  m(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eJ(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var e0 = function () {},
    e1 = ["node"];
function e2(e, t) {
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
var e3 = { subtree: !0, childList: !0, characterData: !0 },
    e5 = [
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
    e8 = ["text"];
function e4(e, t) {
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
function e7(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? e4(Object(n), !0).forEach(function (t) {
                  m(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : e4(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var e9 = (e) => l.createElement(l.Fragment, null, eS(e)),
    e6 = (e) => {
        var t,
            n,
            r,
            a,
            u,
            d,
            f = (0, l.useCallback)((e) => l.createElement(te, Object.assign({}, e)), []),
            {
                autoFocus: h,
                decorate: p = tt,
                onDOMBeforeInput: _,
                placeholder: g,
                readOnly: y = !1,
                renderElement: D,
                renderLeaf: B,
                renderPlaceholder: F = f,
                scrollSelectionIntoView: P = tn,
                style: W = {},
                as: U = "div",
                disableDefaultStyles: Q = !1,
            } = e,
            X = v(e, e5),
            Z = (() => {
                var e = (0, l.useContext)(eN);
                if (!e) throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
                var { editor: t } = e;
                return t;
            })(),
            [Y, J] = (0, l.useState)(!1),
            ee = (0, l.useRef)(null),
            en = (0, l.useRef)([]),
            { onUserInput: eo, receivedUserInput: es } =
                ((t = eA()),
                (n = (0, l.useRef)(!1)),
                (r = (0, l.useRef)(0)),
                (a = (0, l.useCallback)(() => {
                    if (!n.current) {
                        n.current = !0;
                        var e = em.getWindow(t);
                        e.cancelAnimationFrame(r.current),
                            (r.current = e.requestAnimationFrame(() => {
                                n.current = !1;
                            }));
                    }
                }, [])),
                (0, l.useEffect)(() => () => cancelAnimationFrame(r.current), []),
                { receivedUserInput: n, onUserInput: a }),
            [, el] = (0, l.useReducer)((e) => e + 1, 0);
        I.set(Z, el), V.set(Z, y);
        var ev = (0, l.useMemo)(
            () => ({ isDraggingInternally: !1, isUpdatingSelection: !1, latestElement: null, hasMarkPlaceholder: !1 }),
            [],
        );
        (0, l.useLayoutEffect)(
            () => () => {
                null == ev || (null != ev.latestElement && (ev.latestElement.remove(), (ev.latestElement = null)));
            },
            [],
        ),
            (0, l.useEffect)(() => {
                ee.current && h && ee.current.focus();
            }, [h]);
        var e_ = (0, l.useCallback)(
                s()(() => {
                    if (
                        (er || !em.isComposing(Z)) &&
                        (!ev.isUpdatingSelection || (null != eD && eD.isFlushing())) &&
                        !ev.isDraggingInternally
                    ) {
                        var e = em.findDocumentOrShadowRoot(Z),
                            { activeElement: t } = e,
                            n = em.toDOMNode(Z, Z),
                            r = e.getSelection();
                        if ((t === n ? ((ev.latestElement = t), T.set(Z, !0)) : T.delete(Z), !r))
                            return c.gB.deselect(Z);
                        var { anchorNode: i, focusNode: a } = r,
                            o = em.hasEditableTarget(Z, i) || em.isTargetInsideNonReadonlyVoid(Z, i),
                            u = em.hasEditableTarget(Z, a) || em.isTargetInsideNonReadonlyVoid(Z, a);
                        if (o && u) {
                            var s = em.toSlateRange(Z, r, { exactMatch: !1, suppressThrow: !0 });
                            s &&
                                (em.isComposing(Z) ||
                                (null != eD && eD.hasPendingChanges()) ||
                                (null != eD && eD.isFlushing())
                                    ? null == eD || eD.handleUserSelect(s)
                                    : c.gB.select(Z, s));
                        }
                        !y || (o && u) || c.gB.deselect(Z);
                    }
                }, 100),
                [y],
            ),
            eg = (0, l.useMemo)(() => o()(e_, 0), [e_]),
            eD = (function (e) {
                var t,
                    { node: n } = e,
                    r = v(e, e1);
                if (!er) return null;
                var i = eA(),
                    a =
                        ((t = (0, l.useRef)(!1)),
                        (0, l.useEffect)(
                            () => (
                                (t.current = !0),
                                () => {
                                    t.current = !1;
                                }
                            ),
                            [],
                        ),
                        t.current),
                    [o] = (0, l.useState)(() =>
                        (function (e) {
                            var { editor: t, scheduleOnDOMSelectionChange: n, onDOMSelectionChange: r } = e,
                                i = !1,
                                a = null,
                                o = null,
                                u = null,
                                s = 0,
                                l = !1,
                                d = () => {
                                    var e = L.get(t);
                                    if ((L.delete(t), e)) {
                                        var { selection: n } = t,
                                            r = eX(t, e);
                                        !r || (n && c.Q6.equals(r, n)) || c.gB.select(t, r);
                                    }
                                },
                                f = () => {
                                    if (
                                        (o && (clearTimeout(o), (o = null)),
                                        u && (clearTimeout(u), (u = null)),
                                        !_() && !v())
                                    )
                                        return void d();
                                    i || ((i = !0), setTimeout(() => (i = !1))), v() && (i = "action");
                                    var e = t.selection && c.KE.rangeRef(t, t.selection, { affinity: "forward" });
                                    M.set(t, t.marks), e0("flush", N.get(t), R.get(t));
                                    for (var a = _(); (s = null == (f = R.get(t)) ? void 0 : f[0]); ) {
                                        var s,
                                            f,
                                            h,
                                            p = S.get(t);
                                        void 0 !== p && (S.delete(t), (t.marks = p)), p && !1 === l && (l = null);
                                        var m = (function (e) {
                                            var { path: t, diff: n } = e;
                                            return {
                                                anchor: { path: t, offset: n.start },
                                                focus: { path: t, offset: n.end },
                                            };
                                        })(s);
                                        (t.selection && c.Q6.equals(t.selection, m)) || c.gB.select(t, m),
                                            s.diff.text ? c.KE.insertText(t, s.diff.text) : c.KE.deleteFragment(t),
                                            R.set(
                                                t,
                                                null == (h = R.get(t))
                                                    ? void 0
                                                    : h.filter((e) => {
                                                          var { id: t } = e;
                                                          return t !== s.id;
                                                      }),
                                            ),
                                            !(function (e, t) {
                                                var { path: n, diff: r } = t;
                                                if (!c.KE.hasPath(e, n)) return !1;
                                                var i = c.bP.get(e, n);
                                                if (!c.EY.isText(i)) return !1;
                                                if (r.start !== i.text.length || 0 === r.text.length)
                                                    return i.text.slice(r.start, r.start + r.text.length) === r.text;
                                                var a = c.wA.next(n);
                                                if (!c.KE.hasPath(e, a)) return !1;
                                                var o = c.bP.get(e, a);
                                                return c.EY.isText(o) && o.text.startsWith(r.text);
                                            })(t, s) &&
                                                ((a = !1),
                                                N.delete(t),
                                                M.delete(t),
                                                (i = "action"),
                                                L.delete(t),
                                                n.cancel(),
                                                r.cancel(),
                                                null == e || e.unref());
                                    }
                                    var g = null == e ? void 0 : e.unref();
                                    if (
                                        (!g ||
                                            L.get(t) ||
                                            (t.selection && c.Q6.equals(g, t.selection)) ||
                                            c.gB.select(t, g),
                                        v())
                                    )
                                        return void (() => {
                                            var e = N.get(t);
                                            if ((N.delete(t), e)) {
                                                if (e.at) {
                                                    var n = c.bR.isPoint(e.at) ? eQ(t, e.at) : eX(t, e.at);
                                                    if (!n) return;
                                                    var r = c.KE.range(t, n);
                                                    (t.selection && c.Q6.equals(t.selection, r)) || c.gB.select(t, n);
                                                }
                                                e.run();
                                            }
                                        })();
                                    a && n(), n.flush(), r.flush(), d();
                                    var y = M.get(t);
                                    M.delete(t), void 0 !== y && ((t.marks = y), t.onChange());
                                },
                                h = function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                        n = E.get(t);
                                    if (n) {
                                        if (_() || e) {
                                            n.style.display = "none";
                                            return;
                                        }
                                        n.style.removeProperty("display");
                                    }
                                },
                                p = (e, n) => {
                                    var r,
                                        i,
                                        a,
                                        o,
                                        u,
                                        l,
                                        d,
                                        f,
                                        p = null != (f = R.get(t)) ? f : [];
                                    R.set(t, p);
                                    var m = c.bP.leaf(t, e),
                                        v = p.findIndex((t) => c.wA.equals(t.path, e));
                                    if (v < 0) {
                                        ez(m.text, n) && p.push({ path: e, diff: n, id: s++ }), h();
                                        return;
                                    }
                                    var _ =
                                        ((r = m.text),
                                        (i = p[v].diff),
                                        (a = Math.min(i.start, n.start)),
                                        (o = Math.max(0, Math.min(i.start + i.text.length, n.end) - n.start)),
                                        (u = eq(r, i, n)),
                                        (l = Math.max(
                                            n.start + n.text.length,
                                            i.start +
                                                i.text.length +
                                                (i.start + i.text.length > n.start ? n.text.length : 0) -
                                                o,
                                        )),
                                        (d = u.slice(a, l)),
                                        ez(r, {
                                            start: a,
                                            end: Math.max(i.end, n.end - i.text.length + (i.end - i.start)),
                                            text: d,
                                        }));
                                    if (!_) {
                                        p.splice(v, 1), h();
                                        return;
                                    }
                                    p[v] = e$(e$({}, p[v]), {}, { diff: _ });
                                },
                                m = function (e) {
                                    var { at: i } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    (l = !1),
                                        L.delete(t),
                                        n.cancel(),
                                        r.cancel(),
                                        v() && f(),
                                        N.set(t, { at: i, run: e }),
                                        (u = setTimeout(f));
                                },
                                v = () => !!N.get(t),
                                _ = () => {
                                    var e;
                                    return !!(null != (e = R.get(t)) && e.length);
                                },
                                g = (e) => {
                                    L.set(t, e), o && (clearTimeout(o), (o = null));
                                    var { selection: n } = t;
                                    if (e) {
                                        var r = !n || !c.wA.equals(n.anchor.path, e.anchor.path),
                                            i =
                                                !n ||
                                                !c.wA.equals(n.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
                                        ((r && l) || i) && (l = !1), (r || _()) && (o = setTimeout(f, 200));
                                    }
                                },
                                y = () => {
                                    v() || (u = setTimeout(f));
                                };
                            return {
                                flush: f,
                                scheduleFlush: y,
                                hasPendingDiffs: _,
                                hasPendingAction: v,
                                hasPendingChanges: () => v() || _(),
                                isFlushing: () => i,
                                handleUserSelect: g,
                                handleCompositionEnd: (e) => {
                                    a && clearTimeout(a),
                                        (a = setTimeout(() => {
                                            k.set(t, !1), f();
                                        }, 25));
                                },
                                handleCompositionStart: (e) => {
                                    k.set(t, !0), a && (clearTimeout(a), (a = null));
                                },
                                handleDOMBeforeInput: (e) => {
                                    o && (clearTimeout(o), (o = null));
                                    var { inputType: n } = e,
                                        r = null,
                                        i = e.dataTransfer || e.data || void 0;
                                    !1 !== l && "insertText" !== n && "insertCompositionText" !== n && (l = !1);
                                    var [a] = e.getTargetRanges();
                                    a && (r = em.toSlateRange(t, a, { exactMatch: !1, suppressThrow: !0 }));
                                    var u = em.getWindow(t).getSelection();
                                    if (
                                        (!r &&
                                            u &&
                                            ((a = u),
                                            (r = em.toSlateRange(t, u, { exactMatch: !1, suppressThrow: !0 }))),
                                        (r = null != (k = r) ? k : t.selection))
                                    ) {
                                        var s = !0;
                                        if (n.startsWith("delete")) {
                                            if (c.Q6.isExpanded(r)) {
                                                var [d, f] = c.Q6.edges(r);
                                                if (c.bP.leaf(t, d.path).text.length === d.offset && 0 === f.offset) {
                                                    var h = c.KE.next(t, { at: d.path, match: c.EY.isText });
                                                    h && c.wA.equals(h[1], f.path) && (r = { anchor: f, focus: f });
                                                }
                                            }
                                            var v = n.endsWith("Backward") ? "backward" : "forward",
                                                [_, D] = c.Q6.edges(r),
                                                [b, C] = c.KE.leaf(t, _.path),
                                                E = { text: "", start: _.offset, end: D.offset },
                                                w = R.get(t),
                                                A = null == w ? void 0 : w.find((e) => c.wA.equals(e.path, C)),
                                                B = A ? [A.diff, E] : [E];
                                            if ((0 === eq(b.text, ...B).length && (s = !1), c.Q6.isExpanded(r))) {
                                                if (s && c.wA.equals(r.anchor.path, r.focus.path)) {
                                                    var F = { path: r.anchor.path, offset: _.offset };
                                                    return (
                                                        g(c.KE.range(t, F, F)),
                                                        p(r.anchor.path, { text: "", end: D.offset, start: _.offset })
                                                    );
                                                }
                                                return m(() => c.KE.deleteFragment(t, { direction: v }), { at: r });
                                            }
                                        }
                                        switch (n) {
                                            case "deleteByComposition":
                                            case "deleteByCut":
                                            case "deleteByDrag":
                                                return m(() => c.KE.deleteFragment(t), { at: r });
                                            case "deleteContent":
                                            case "deleteContentForward":
                                                var { anchor: V } = r;
                                                if (s && c.Q6.isCollapsed(r)) {
                                                    var T = c.bP.leaf(t, V.path);
                                                    if (V.offset < T.text.length)
                                                        return p(V.path, {
                                                            text: "",
                                                            start: V.offset,
                                                            end: V.offset + 1,
                                                        });
                                                }
                                                return m(() => c.KE.deleteForward(t), { at: r });
                                            case "deleteContentBackward":
                                                var k,
                                                    x,
                                                    { anchor: P } = r,
                                                    O = z(a) ? a.isCollapsed : !!(null != (x = a) && x.collapsed);
                                                if (s && O && c.Q6.isCollapsed(r) && P.offset > 0)
                                                    return p(P.path, { text: "", start: P.offset - 1, end: P.offset });
                                                return m(() => c.KE.deleteBackward(t), { at: r });
                                            case "deleteEntireSoftLine":
                                                return m(
                                                    () => {
                                                        c.KE.deleteBackward(t, { unit: "line" }),
                                                            c.KE.deleteForward(t, { unit: "line" });
                                                    },
                                                    { at: r },
                                                );
                                            case "deleteHardLineBackward":
                                                return m(() => c.KE.deleteBackward(t, { unit: "block" }), { at: r });
                                            case "deleteSoftLineBackward":
                                                return m(() => c.KE.deleteBackward(t, { unit: "line" }), { at: r });
                                            case "deleteHardLineForward":
                                                return m(() => c.KE.deleteForward(t, { unit: "block" }), { at: r });
                                            case "deleteSoftLineForward":
                                                return m(() => c.KE.deleteForward(t, { unit: "line" }), { at: r });
                                            case "deleteWordBackward":
                                                return m(() => c.KE.deleteBackward(t, { unit: "word" }), { at: r });
                                            case "deleteWordForward":
                                                return m(() => c.KE.deleteForward(t, { unit: "word" }), { at: r });
                                            case "insertLineBreak":
                                                return m(() => c.KE.insertSoftBreak(t), { at: r });
                                            case "insertParagraph":
                                                return m(() => c.KE.insertBreak(t), { at: r });
                                            case "insertCompositionText":
                                            case "deleteCompositionText":
                                            case "insertFromComposition":
                                            case "insertFromDrop":
                                            case "insertFromPaste":
                                            case "insertFromYank":
                                            case "insertReplacementText":
                                            case "insertText":
                                                if ((null == i ? void 0 : i.constructor.name) === "DataTransfer")
                                                    return m(() => em.insertData(t, i), { at: r });
                                                var M = null != i ? i : "";
                                                if (
                                                    (S.get(t) && (M = M.replace("\uFEFF", "")),
                                                    "insertText" === n && /.*\n.*\n$/.test(M) && (M = M.slice(0, -1)),
                                                    M.includes("\n"))
                                                )
                                                    return m(
                                                        () => {
                                                            var e = M.split("\n");
                                                            e.forEach((n, r) => {
                                                                n && c.KE.insertText(t, n),
                                                                    r !== e.length - 1 && c.KE.insertSoftBreak(t);
                                                            });
                                                        },
                                                        { at: r },
                                                    );
                                                if (c.wA.equals(r.anchor.path, r.focus.path)) {
                                                    var [N, L] = c.Q6.edges(r),
                                                        I = { start: N.offset, end: L.offset, text: M };
                                                    if (M && l && "insertCompositionText" === n) {
                                                        var j = l.start + l.text.search(/\S|$/);
                                                        I.start + I.text.search(/\S|$/) === j + 1 &&
                                                        I.end === l.start + l.text.length
                                                            ? ((I.start -= 1), (l = null), y())
                                                            : (l = !1);
                                                    } else
                                                        l =
                                                            "insertText" === n &&
                                                            (null === l
                                                                ? I
                                                                : !!(l && c.Q6.isCollapsed(r)) &&
                                                                  l.end + l.text.length === N.offset &&
                                                                  e$(e$({}, l), {}, { text: l.text + M }));
                                                    if (s) return void p(N.path, I);
                                                }
                                                return m(() => c.KE.insertText(t, M), { at: r });
                                        }
                                    }
                                },
                                handleKeyDown: (e) => {
                                    _() || (h(!0), setTimeout(h));
                                },
                                handleDomMutations: (e) => {
                                    if (!(_() || v()) && e.some((n) => $(t, n, e))) {
                                        var n;
                                        null == (n = I.get(t)) || n();
                                    }
                                },
                                handleInput: () => {
                                    (v() || !_()) && f();
                                },
                            };
                        })(
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? e2(Object(n), !0).forEach(function (t) {
                                              m(e, t, n[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                          : e2(Object(n)).forEach(function (t) {
                                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                            });
                                }
                                return e;
                            })({ editor: i }, r),
                        ),
                    );
                return (
                    !(function (e, t, n) {
                        var [r] = (0, l.useState)(() => new MutationObserver(t));
                        ey(() => {
                            r.takeRecords();
                        }),
                            (0, l.useEffect)(() => {
                                if (!e.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
                                return r.observe(e.current, n), () => r.disconnect();
                            }, []);
                    })(n, o.handleDomMutations, e3),
                    O.set(i, o.scheduleFlush),
                    a && o.flush(),
                    o
                );
            })({ node: ee, onDOMSelectionChange: e_, scheduleOnDOMSelectionChange: eg });
        ey(() => {
            ee.current && (e = K(ee.current))
                ? (b.set(Z, e), C.set(Z, ee.current), A.set(Z, ee.current), w.set(ee.current, Z))
                : A.delete(Z);
            var e,
                { selection: t } = Z,
                n = em.findDocumentOrShadowRoot(Z).getSelection();
            if (!(!n || !em.isFocused(Z) || (null != eD && eD.hasPendingAction()))) {
                var r = (e) => {
                        var r = "None" !== n.type;
                        if (t || r) {
                            var i = C.get(Z),
                                a = !1;
                            if ((i.contains(n.anchorNode) && i.contains(n.focusNode) && (a = !0), r && a && t && !e)) {
                                var o = em.toSlateRange(Z, n, { exactMatch: !0, suppressThrow: !0 });
                                if (o && c.Q6.equals(o, t)) {
                                    if (!ev.hasMarkPlaceholder) return;
                                    var u,
                                        { anchorNode: s } = n;
                                    if (
                                        null != s &&
                                        null != (u = s.parentElement) &&
                                        u.hasAttribute("data-slate-mark-placeholder")
                                    )
                                        return;
                                }
                            }
                            if (t && !em.hasRange(Z, t)) {
                                Z.selection = em.toSlateRange(Z, n, { exactMatch: !1, suppressThrow: !0 });
                                return;
                            }
                            ev.isUpdatingSelection = !0;
                            var l = t && em.toDOMRange(Z, t);
                            return (
                                l
                                    ? (c.Q6.isBackward(t)
                                          ? n.setBaseAndExtent(
                                                l.endContainer,
                                                l.endOffset,
                                                l.startContainer,
                                                l.startOffset,
                                            )
                                          : n.setBaseAndExtent(
                                                l.startContainer,
                                                l.startOffset,
                                                l.endContainer,
                                                l.endOffset,
                                            ),
                                      P(Z, l))
                                    : n.removeAllRanges(),
                                l
                            );
                        }
                    },
                    i = r(),
                    a = (null == eD ? void 0 : eD.isFlushing()) === "action";
                if (!er || !a)
                    return void setTimeout(() => {
                        i && ei && em.toDOMNode(Z, Z).focus(), (ev.isUpdatingSelection = !1);
                    });
                var o = null,
                    u = requestAnimationFrame(() => {
                        if (a) {
                            var e = (e) => {
                                try {
                                    em.toDOMNode(Z, Z).focus(), r(e);
                                } catch (e) {}
                            };
                            e(),
                                (o = setTimeout(() => {
                                    e(!0), (ev.isUpdatingSelection = !1);
                                }));
                        }
                    });
                return () => {
                    cancelAnimationFrame(u), o && clearTimeout(o);
                };
            }
        });
        var eb = (0, l.useCallback)(
                (e) => {
                    if ((eo(), !y && em.hasEditableTarget(Z, e.target) && !ti(e, _))) {
                        if (eD) return eD.handleDOMBeforeInput(e);
                        eg.flush(), e_.flush();
                        var { selection: t } = Z,
                            { inputType: n } = e,
                            r = e.dataTransfer || e.data || void 0,
                            i = "insertCompositionText" === n || "deleteCompositionText" === n;
                        if (!(i && em.isComposing(Z))) {
                            var a = !1;
                            if (
                                "insertText" === n &&
                                t &&
                                c.Q6.isCollapsed(t) &&
                                e.data &&
                                1 === e.data.length &&
                                /[a-z ]/i.test(e.data) &&
                                0 !== t.anchor.offset
                            ) {
                                (a = !0), Z.marks && (a = !1);
                                var { anchor: o } = t,
                                    [u, s] = em.toDOMPoint(Z, o),
                                    l = null == (h = u.parentElement) ? void 0 : h.closest("a"),
                                    d = em.getWindow(Z);
                                if (a && l && em.hasDOMNode(Z, l)) {
                                    var f,
                                        h,
                                        p,
                                        m,
                                        v =
                                            null == d
                                                ? void 0
                                                : d.document.createTreeWalker(l, NodeFilter.SHOW_TEXT).lastChild();
                                    v === u && (null == (m = v.textContent) ? void 0 : m.length) === s && (a = !1);
                                }
                                if (
                                    a &&
                                    u.parentElement &&
                                    (null == d || null == (p = d.getComputedStyle(u.parentElement))
                                        ? void 0
                                        : p.whiteSpace) === "pre"
                                ) {
                                    var g = c.KE.above(Z, {
                                        at: o.path,
                                        match: (e) => c.Hg.isElement(e) && c.KE.isBlock(Z, e),
                                    });
                                    g && c.bP.string(g[0]).includes("	") && (a = !1);
                                }
                            }
                            if (!n.startsWith("delete") || n.startsWith("deleteBy")) {
                                var [D] = e.getTargetRanges();
                                if (D) {
                                    var b = em.toSlateRange(Z, D, { exactMatch: !1, suppressThrow: !1 });
                                    if (!t || !c.Q6.equals(t, b)) {
                                        a = !1;
                                        var C = !i && Z.selection && c.KE.rangeRef(Z, Z.selection);
                                        c.gB.select(Z, b), C && x.set(Z, C);
                                    }
                                }
                            }
                            if (!i) {
                                if ((a || e.preventDefault(), t && c.Q6.isExpanded(t) && n.startsWith("delete"))) {
                                    var E = n.endsWith("Backward") ? "backward" : "forward";
                                    c.KE.deleteFragment(Z, { direction: E });
                                    return;
                                }
                                switch (n) {
                                    case "deleteByComposition":
                                    case "deleteByCut":
                                    case "deleteByDrag":
                                        c.KE.deleteFragment(Z);
                                        break;
                                    case "deleteContent":
                                    case "deleteContentForward":
                                        c.KE.deleteForward(Z);
                                        break;
                                    case "deleteContentBackward":
                                        c.KE.deleteBackward(Z);
                                        break;
                                    case "deleteEntireSoftLine":
                                        c.KE.deleteBackward(Z, { unit: "line" }),
                                            c.KE.deleteForward(Z, { unit: "line" });
                                        break;
                                    case "deleteHardLineBackward":
                                        c.KE.deleteBackward(Z, { unit: "block" });
                                        break;
                                    case "deleteSoftLineBackward":
                                        c.KE.deleteBackward(Z, { unit: "line" });
                                        break;
                                    case "deleteHardLineForward":
                                        c.KE.deleteForward(Z, { unit: "block" });
                                        break;
                                    case "deleteSoftLineForward":
                                        c.KE.deleteForward(Z, { unit: "line" });
                                        break;
                                    case "deleteWordBackward":
                                        c.KE.deleteBackward(Z, { unit: "word" });
                                        break;
                                    case "deleteWordForward":
                                        c.KE.deleteForward(Z, { unit: "word" });
                                        break;
                                    case "insertLineBreak":
                                        c.KE.insertSoftBreak(Z);
                                        break;
                                    case "insertParagraph":
                                        c.KE.insertBreak(Z);
                                        break;
                                    case "insertFromComposition":
                                    case "insertFromDrop":
                                    case "insertFromPaste":
                                    case "insertFromYank":
                                    case "insertReplacementText":
                                    case "insertText":
                                        "insertFromComposition" === n && em.isComposing(Z) && (J(!1), k.set(Z, !1)),
                                            (null == r ? void 0 : r.constructor.name) === "DataTransfer"
                                                ? em.insertData(Z, r)
                                                : "string" == typeof r &&
                                                  (a
                                                      ? en.current.push(() => c.KE.insertText(Z, r))
                                                      : c.KE.insertText(Z, r));
                                }
                                var w = null == (f = x.get(Z)) ? void 0 : f.unref();
                                x.delete(Z), !w || (Z.selection && c.Q6.equals(Z.selection, w)) || c.gB.select(Z, w);
                            }
                        }
                    }
                },
                [y, _],
            ),
            eC = (0, l.useCallback)(
                (e) => {
                    null == e
                        ? (e_.cancel(),
                          eg.cancel(),
                          C.delete(Z),
                          A.delete(Z),
                          ee.current && ep && ee.current.removeEventListener("beforeinput", eb))
                        : ep && e.addEventListener("beforeinput", eb),
                        (ee.current = e);
                },
                [ee, eb, e_, eg],
            );
        ey(() => {
            var e = em.getWindow(Z);
            return (
                e.document.addEventListener("selectionchange", eg),
                () => {
                    e.document.removeEventListener("selectionchange", eg);
                }
            );
        }, [eg]);
        var eE = p([Z, []]);
        if (g && 1 === Z.children.length && 1 === Array.from(c.bP.texts(Z)).length && "" === c.bP.string(Z) && !Y) {
            var ew = c.KE.start(Z, []);
            eE.push({ [j]: !0, placeholder: g, anchor: ew, focus: ew });
        }
        var { marks: eB } = Z;
        if (((ev.hasMarkPlaceholder = !1), Z.selection && c.Q6.isCollapsed(Z.selection) && eB)) {
            var { anchor: eF } = Z.selection,
                eV = c.bP.leaf(Z, eF.path),
                eT = v(eV, e8);
            if (!c.EY.equals(eV, eB, { loose: !0 })) {
                ev.hasMarkPlaceholder = !0;
                var ek = Object.fromEntries(Object.keys(eT).map((e) => [e, null]));
                eE.push(e7(e7(e7({ [G]: !0 }, ek), eB), {}, { anchor: eF, focus: eF }));
            }
        }
        (0, l.useEffect)(() => {
            setTimeout(() => {
                var { selection: e } = Z;
                if (e) {
                    var { anchor: t } = e,
                        n = c.bP.leaf(Z, t.path);
                    if (eB && !c.EY.equals(n, eB, { loose: !0 })) return void S.set(Z, eB);
                }
                S.delete(Z);
            });
        });
        var eP = null == (u = E.get(Z)) || null == (d = u.getBoundingClientRect()) ? void 0 : d.height;
        return l.createElement(
            eM.Provider,
            { value: y },
            l.createElement(
                ex.Provider,
                { value: p },
                l.createElement(
                    eH,
                    { node: ee, receivedUserInput: es },
                    l.createElement(
                        U,
                        Object.assign({ role: y ? void 0 : "textbox", "aria-multiline": !y || void 0 }, X, {
                            spellCheck: (!!ep || !eh) && X.spellCheck,
                            autoCorrect: ep || !eh ? X.autoCorrect : "false",
                            autoCapitalize: ep || !eh ? X.autoCapitalize : "false",
                            "data-slate-editor": !0,
                            "data-slate-node": "value",
                            contentEditable: !y,
                            zindex: -1,
                            suppressContentEditableWarning: !0,
                            ref: eC,
                            style: e7(
                                e7(
                                    {},
                                    Q
                                        ? {}
                                        : e7(
                                              {
                                                  position: "relative",
                                                  outline: "none",
                                                  whiteSpace: "pre-wrap",
                                                  wordWrap: "break-word",
                                              },
                                              eP ? { minHeight: eP } : {},
                                          ),
                                ),
                                W,
                            ),
                            onBeforeInput: (0, l.useCallback)(
                                (e) => {
                                    if (
                                        !ep &&
                                        !y &&
                                        !tr(e, X.onBeforeInput) &&
                                        em.hasSelectableTarget(Z, e.target) &&
                                        (e.preventDefault(), !em.isComposing(Z))
                                    ) {
                                        var t = e.data;
                                        c.KE.insertText(Z, t);
                                    }
                                },
                                [y],
                            ),
                            onInput: (0, l.useCallback)((e) => {
                                if (!tr(e, X.onInput)) {
                                    if (eD) return void eD.handleInput();
                                    for (var t of en.current) t();
                                    en.current = [];
                                }
                            }, []),
                            onBlur: (0, l.useCallback)(
                                (e) => {
                                    if (
                                        y ||
                                        ev.isUpdatingSelection ||
                                        !em.hasSelectableTarget(Z, e.target) ||
                                        tr(e, X.onBlur)
                                    )
                                        return;
                                    var t = em.findDocumentOrShadowRoot(Z);
                                    if (ev.latestElement !== t.activeElement) {
                                        var { relatedTarget: n } = e;
                                        if (
                                            n !== em.toDOMNode(Z, Z) &&
                                            !(H(n) && n.hasAttribute("data-slate-spacer"))
                                        ) {
                                            if (null != n && q(n) && em.hasDOMNode(Z, n)) {
                                                var r = em.toSlateNode(Z, n);
                                                if (c.Hg.isElement(r) && !Z.isVoid(r)) return;
                                            }
                                            if (ea) {
                                                var i = t.getSelection();
                                                null == i || i.removeAllRanges();
                                            }
                                            T.delete(Z);
                                        }
                                    }
                                },
                                [y, X.onBlur],
                            ),
                            onClick: (0, l.useCallback)(
                                (e) => {
                                    if (em.hasTarget(Z, e.target) && !tr(e, X.onClick) && q(e.target)) {
                                        var t = em.toSlateNode(Z, e.target),
                                            n = em.findPath(Z, t);
                                        if (c.KE.hasPath(Z, n) && c.bP.get(Z, n) === t) {
                                            if (3 === e.detail && n.length >= 1) {
                                                var r = n;
                                                if (!(c.Hg.isElement(t) && c.KE.isBlock(Z, t))) {
                                                    var i,
                                                        a = c.KE.above(Z, {
                                                            match: (e) => c.Hg.isElement(e) && c.KE.isBlock(Z, e),
                                                            at: n,
                                                        });
                                                    r = null != (i = null == a ? void 0 : a[1]) ? i : n.slice(0, 1);
                                                }
                                                var o = c.KE.range(Z, r);
                                                c.gB.select(Z, o);
                                                return;
                                            }
                                            if (!y) {
                                                var u = c.KE.start(Z, n),
                                                    s = c.KE.end(Z, n),
                                                    l = c.KE.void(Z, { at: u }),
                                                    d = c.KE.void(Z, { at: s });
                                                if (l && d && c.wA.equals(l[1], d[1])) {
                                                    var f = c.KE.range(Z, u);
                                                    c.gB.select(Z, f);
                                                }
                                            }
                                        }
                                    }
                                },
                                [y, X.onClick],
                            ),
                            onCompositionEnd: (0, l.useCallback)(
                                (e) => {
                                    if (
                                        em.hasSelectableTarget(Z, e.target) &&
                                        (em.isComposing(Z) && (J(!1), k.set(Z, !1)),
                                        null == eD || eD.handleCompositionEnd(e),
                                        !tr(e, X.onCompositionEnd) && !er && !ea && !ed && !et && !ef && !ec) &&
                                        e.data
                                    ) {
                                        var t = S.get(Z);
                                        S.delete(Z),
                                            void 0 !== t && (M.set(Z, Z.marks), (Z.marks = t)),
                                            c.KE.insertText(Z, e.data);
                                        var n = M.get(Z);
                                        M.delete(Z), void 0 !== n && (Z.marks = n);
                                    }
                                },
                                [X.onCompositionEnd],
                            ),
                            onCompositionUpdate: (0, l.useCallback)(
                                (e) => {
                                    !em.hasSelectableTarget(Z, e.target) ||
                                        tr(e, X.onCompositionUpdate) ||
                                        em.isComposing(Z) ||
                                        (J(!0), k.set(Z, !0));
                                },
                                [X.onCompositionUpdate],
                            ),
                            onCompositionStart: (0, l.useCallback)(
                                (e) => {
                                    if (
                                        em.hasSelectableTarget(Z, e.target) &&
                                        (null == eD || eD.handleCompositionStart(e),
                                        !tr(e, X.onCompositionStart) && !er)
                                    ) {
                                        J(!0);
                                        var { selection: t } = Z;
                                        if (t) {
                                            if (c.Q6.isExpanded(t)) return void c.KE.deleteFragment(Z);
                                            var n = c.KE.above(Z, {
                                                match: (e) => c.Hg.isElement(e) && c.KE.isInline(Z, e),
                                                mode: "highest",
                                            });
                                            if (n) {
                                                var [, r] = n;
                                                if (c.KE.isEnd(Z, t.anchor, r)) {
                                                    var i = c.KE.after(Z, r);
                                                    c.gB.setSelection(Z, { anchor: i, focus: i });
                                                }
                                            }
                                        }
                                    }
                                },
                                [X.onCompositionStart],
                            ),
                            onCopy: (0, l.useCallback)(
                                (e) => {
                                    em.hasSelectableTarget(Z, e.target) &&
                                        !tr(e, X.onCopy) &&
                                        (e.preventDefault(), em.setFragmentData(Z, e.clipboardData, "copy"));
                                },
                                [X.onCopy],
                            ),
                            onCut: (0, l.useCallback)(
                                (e) => {
                                    if (!y && em.hasSelectableTarget(Z, e.target) && !tr(e, X.onCut)) {
                                        e.preventDefault(), em.setFragmentData(Z, e.clipboardData, "cut");
                                        var { selection: t } = Z;
                                        if (t)
                                            if (c.Q6.isExpanded(t)) c.KE.deleteFragment(Z);
                                            else {
                                                var n = c.bP.parent(Z, t.anchor.path);
                                                c.KE.isVoid(Z, n) && c.gB.delete(Z);
                                            }
                                    }
                                },
                                [y, X.onCut],
                            ),
                            onDragOver: (0, l.useCallback)(
                                (e) => {
                                    if (em.hasTarget(Z, e.target) && !tr(e, X.onDragOver)) {
                                        var t = em.toSlateNode(Z, e.target);
                                        c.Hg.isElement(t) && c.KE.isVoid(Z, t) && e.preventDefault();
                                    }
                                },
                                [X.onDragOver],
                            ),
                            onDragStart: (0, l.useCallback)(
                                (e) => {
                                    if (!y && em.hasTarget(Z, e.target) && !tr(e, X.onDragStart)) {
                                        var t = em.toSlateNode(Z, e.target),
                                            n = em.findPath(Z, t);
                                        if (
                                            (c.Hg.isElement(t) && c.KE.isVoid(Z, t)) ||
                                            c.KE.void(Z, { at: n, voids: !0 })
                                        ) {
                                            var r = c.KE.range(Z, n);
                                            c.gB.select(Z, r);
                                        }
                                        (ev.isDraggingInternally = !0), em.setFragmentData(Z, e.dataTransfer, "drag");
                                    }
                                },
                                [y, X.onDragStart],
                            ),
                            onDrop: (0, l.useCallback)(
                                (e) => {
                                    if (!y && em.hasTarget(Z, e.target) && !tr(e, X.onDrop)) {
                                        e.preventDefault();
                                        var t = Z.selection,
                                            n = em.findEventRange(Z, e),
                                            r = e.dataTransfer;
                                        c.gB.select(Z, n),
                                            ev.isDraggingInternally &&
                                                t &&
                                                !c.Q6.equals(t, n) &&
                                                !c.KE.void(Z, { at: n, voids: !0 }) &&
                                                c.gB.delete(Z, { at: t }),
                                            em.insertData(Z, r),
                                            em.isFocused(Z) || em.focus(Z);
                                    }
                                    ev.isDraggingInternally = !1;
                                },
                                [y, X.onDrop],
                            ),
                            onDragEnd: (0, l.useCallback)(
                                (e) => {
                                    !y &&
                                        ev.isDraggingInternally &&
                                        X.onDragEnd &&
                                        em.hasTarget(Z, e.target) &&
                                        X.onDragEnd(e),
                                        (ev.isDraggingInternally = !1);
                                },
                                [y, X.onDragEnd],
                            ),
                            onFocus: (0, l.useCallback)(
                                (e) => {
                                    if (
                                        !y &&
                                        !ev.isUpdatingSelection &&
                                        em.hasEditableTarget(Z, e.target) &&
                                        !tr(e, X.onFocus)
                                    ) {
                                        var t = em.toDOMNode(Z, Z);
                                        if (
                                            ((ev.latestElement = em.findDocumentOrShadowRoot(Z).activeElement),
                                            ei && e.target !== t)
                                        )
                                            return void t.focus();
                                        T.set(Z, !0);
                                    }
                                },
                                [y, X.onFocus],
                            ),
                            onKeyDown: (0, l.useCallback)(
                                (e) => {
                                    if (!y && em.hasEditableTarget(Z, e.target)) {
                                        null == eD || eD.handleKeyDown(e);
                                        var { nativeEvent: t } = e;
                                        if (
                                            (em.isComposing(Z) && !1 === t.isComposing && (k.set(Z, !1), J(!1)),
                                            !(tr(e, X.onKeyDown) || em.isComposing(Z)))
                                        ) {
                                            var { selection: n } = Z,
                                                r = Z.children[null !== n ? n.focus.path[0] : 0],
                                                a = "rtl" === i()(c.bP.string(r));
                                            if (eW.isRedo(t)) {
                                                e.preventDefault(), "function" == typeof Z.redo && Z.redo();
                                                return;
                                            }
                                            if (eW.isUndo(t)) {
                                                e.preventDefault(), "function" == typeof Z.undo && Z.undo();
                                                return;
                                            }
                                            if (eW.isMoveLineBackward(t)) {
                                                e.preventDefault(), c.gB.move(Z, { unit: "line", reverse: !0 });
                                                return;
                                            }
                                            if (eW.isMoveLineForward(t)) {
                                                e.preventDefault(), c.gB.move(Z, { unit: "line" });
                                                return;
                                            }
                                            if (eW.isExtendLineBackward(t)) {
                                                e.preventDefault(),
                                                    c.gB.move(Z, { unit: "line", edge: "focus", reverse: !0 });
                                                return;
                                            }
                                            if (eW.isExtendLineForward(t)) {
                                                e.preventDefault(), c.gB.move(Z, { unit: "line", edge: "focus" });
                                                return;
                                            }
                                            if (eW.isMoveBackward(t)) {
                                                e.preventDefault(),
                                                    n && c.Q6.isCollapsed(n)
                                                        ? c.gB.move(Z, { reverse: !a })
                                                        : c.gB.collapse(Z, { edge: "start" });
                                                return;
                                            }
                                            if (eW.isMoveForward(t)) {
                                                e.preventDefault(),
                                                    n && c.Q6.isCollapsed(n)
                                                        ? c.gB.move(Z, { reverse: a })
                                                        : c.gB.collapse(Z, { edge: "end" });
                                                return;
                                            }
                                            if (eW.isMoveWordBackward(t)) {
                                                e.preventDefault(),
                                                    n && c.Q6.isExpanded(n) && c.gB.collapse(Z, { edge: "focus" }),
                                                    c.gB.move(Z, { unit: "word", reverse: !a });
                                                return;
                                            }
                                            if (eW.isMoveWordForward(t)) {
                                                e.preventDefault(),
                                                    n && c.Q6.isExpanded(n) && c.gB.collapse(Z, { edge: "focus" }),
                                                    c.gB.move(Z, { unit: "word", reverse: a });
                                                return;
                                            }
                                            if (ep) {
                                                if (
                                                    (eu || ea) &&
                                                    n &&
                                                    (eW.isDeleteBackward(t) || eW.isDeleteForward(t)) &&
                                                    c.Q6.isCollapsed(n)
                                                ) {
                                                    var o = c.bP.parent(Z, n.anchor.path);
                                                    if (
                                                        c.Hg.isElement(o) &&
                                                        c.KE.isVoid(Z, o) &&
                                                        (c.KE.isInline(Z, o) || c.KE.isBlock(Z, o))
                                                    ) {
                                                        e.preventDefault(), c.KE.deleteBackward(Z, { unit: "block" });
                                                        return;
                                                    }
                                                }
                                            } else {
                                                if (eW.isBold(t) || eW.isItalic(t) || eW.isTransposeCharacter(t))
                                                    return void e.preventDefault();
                                                if (eW.isSoftBreak(t)) {
                                                    e.preventDefault(), c.KE.insertSoftBreak(Z);
                                                    return;
                                                }
                                                if (eW.isSplitBlock(t)) {
                                                    e.preventDefault(), c.KE.insertBreak(Z);
                                                    return;
                                                }
                                                if (eW.isDeleteBackward(t)) {
                                                    e.preventDefault(),
                                                        n && c.Q6.isExpanded(n)
                                                            ? c.KE.deleteFragment(Z, { direction: "backward" })
                                                            : c.KE.deleteBackward(Z);
                                                    return;
                                                }
                                                if (eW.isDeleteForward(t)) {
                                                    e.preventDefault(),
                                                        n && c.Q6.isExpanded(n)
                                                            ? c.KE.deleteFragment(Z, { direction: "forward" })
                                                            : c.KE.deleteForward(Z);
                                                    return;
                                                }
                                                if (eW.isDeleteLineBackward(t)) {
                                                    e.preventDefault(),
                                                        n && c.Q6.isExpanded(n)
                                                            ? c.KE.deleteFragment(Z, { direction: "backward" })
                                                            : c.KE.deleteBackward(Z, { unit: "line" });
                                                    return;
                                                }
                                                if (eW.isDeleteLineForward(t)) {
                                                    e.preventDefault(),
                                                        n && c.Q6.isExpanded(n)
                                                            ? c.KE.deleteFragment(Z, { direction: "forward" })
                                                            : c.KE.deleteForward(Z, { unit: "line" });
                                                    return;
                                                }
                                                if (eW.isDeleteWordBackward(t)) {
                                                    e.preventDefault(),
                                                        n && c.Q6.isExpanded(n)
                                                            ? c.KE.deleteFragment(Z, { direction: "backward" })
                                                            : c.KE.deleteBackward(Z, { unit: "word" });
                                                    return;
                                                }
                                                if (eW.isDeleteWordForward(t)) {
                                                    e.preventDefault(),
                                                        n && c.Q6.isExpanded(n)
                                                            ? c.KE.deleteFragment(Z, { direction: "forward" })
                                                            : c.KE.deleteForward(Z, { unit: "word" });
                                                    return;
                                                }
                                            }
                                        }
                                    }
                                },
                                [y, X.onKeyDown],
                            ),
                            onPaste: (0, l.useCallback)(
                                (e) => {
                                    let t;
                                    !y &&
                                        em.hasEditableTarget(Z, e.target) &&
                                        !tr(e, X.onPaste) &&
                                        (!ep ||
                                            ((t = e.nativeEvent).clipboardData &&
                                                "" !== t.clipboardData.getData("text/plain") &&
                                                1 === t.clipboardData.types.length) ||
                                            ea) &&
                                        (e.preventDefault(), em.insertData(Z, e.clipboardData));
                                },
                                [y, X.onPaste],
                            ),
                        }),
                        l.createElement(e9, {
                            decorations: eE,
                            node: Z,
                            renderElement: D,
                            renderPlaceholder: F,
                            renderLeaf: B,
                            selection: Z.selection,
                        }),
                    ),
                ),
            ),
        );
    },
    te = (e) => {
        var { attributes: t, children: n } = e;
        return l.createElement("span", Object.assign({}, t), n, er && l.createElement("br", null));
    },
    tt = () => [],
    tn = (e, t) => {
        if (t.getBoundingClientRect && (!e.selection || (e.selection && c.Q6.isCollapsed(e.selection)))) {
            var n = t.startContainer.parentElement;
            (n.getBoundingClientRect = t.getBoundingClientRect.bind(t)),
                (0, d.A)(n, { scrollMode: "if-needed" }),
                delete n.getBoundingClientRect;
        }
    },
    tr = (e, t) => {
        if (!t) return !1;
        var n = t(e);
        return null != n ? n : e.isDefaultPrevented() || e.isPropagationStopped();
    },
    ti = (e, t) => {
        if (!t) return !1;
        var n = t(e);
        return null != n ? n : e.defaultPrevented;
    },
    ta = (0, l.createContext)(!1),
    to = () => (0, l.useContext)(ta),
    tu = (0, l.createContext)({}),
    ts = ["editor", "children", "onChange", "value"],
    tl = (e) => {
        var t,
            n,
            r,
            { editor: i, children: a, onChange: o, value: u } = e,
            s = v(e, ts),
            d = (0, l.useRef)(!1),
            [f, h] = l.useState(() => {
                if (!c.bP.isNodeList(u))
                    throw Error(
                        "[Slate] value is invalid! Expected a list of elements but got: ".concat(c.h6.stringify(u)),
                    );
                if (!c.KE.isEditor(i)) throw Error("[Slate] editor is invalid! You passed: ".concat(c.h6.stringify(i)));
                return (i.children = u), Object.assign(i, s), { v: 0, editor: i };
            }),
            { selectorContext: p, onChange: m } =
                ((t = (0, l.useRef)([]).current),
                (n = (0, l.useRef)({ editor: i }).current),
                (r = (0, l.useCallback)((e) => {
                    (n.editor = e), t.forEach((t) => t(e));
                }, [])),
                {
                    selectorContext: (0, l.useMemo)(
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
                }),
            _ = (0, l.useCallback)(() => {
                o && o(i.children), h((e) => ({ v: e.v + 1, editor: i })), m(i);
            }, [o]);
        (0, l.useEffect)(
            () => (
                P.set(i, _),
                () => {
                    P.set(i, () => {}), (d.current = !0);
                }
            ),
            [_],
        );
        var [g, y] = (0, l.useState)(em.isFocused(i));
        return (
            (0, l.useEffect)(() => {
                y(em.isFocused(i));
            }),
            ey(() => {
                var e = () => y(em.isFocused(i));
                return ee
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
            l.createElement(
                tu.Provider,
                { value: p },
                l.createElement(
                    eN.Provider,
                    { value: f },
                    l.createElement(ew.Provider, { value: f.editor }, l.createElement(ta.Provider, { value: g }, a)),
                ),
            )
        );
    },
    td = (e, t) => {
        var n = (t.top + t.bottom) / 2;
        return e.top <= n && e.bottom >= n;
    },
    tc = (e, t, n) => {
        var r = em.toDOMRange(e, t).getBoundingClientRect(),
            i = em.toDOMRange(e, n).getBoundingClientRect();
        return td(r, i) && td(i, r);
    };
function tf(e, t) {
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
function th(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tf(Object(n), !0).forEach(function (t) {
                  m(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tf(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var tp = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x-slate-fragment",
            { apply: n, onChange: r, deleteBackward: i, addMark: a, removeMark: o } = e;
        return (
            F.set(e, new WeakMap()),
            (e.addMark = (t, n) => {
                var r, i;
                null == (r = O.get(e)) || r(),
                    !S.get(e) && null != (i = R.get(e)) && i.length && S.set(e, null),
                    M.delete(e),
                    a(t, n);
            }),
            (e.removeMark = (t) => {
                var n;
                !S.get(e) && null != (n = R.get(e)) && n.length && S.set(e, null), M.delete(e), o(t);
            }),
            (e.deleteBackward = (t) => {
                if ("line" !== t) return i(t);
                if (e.selection && c.Q6.isCollapsed(e.selection)) {
                    var n = c.KE.above(e, { match: (t) => c.Hg.isElement(t) && c.KE.isBlock(e, t), at: e.selection });
                    if (n) {
                        var [, r] = n,
                            a = c.KE.range(e, r, e.selection.anchor),
                            o = ((e, t) => {
                                var n = c.KE.range(e, c.Q6.end(t)),
                                    r = Array.from(c.KE.positions(e, { at: t })),
                                    i = 0,
                                    a = r.length,
                                    o = Math.floor(a / 2);
                                if (tc(e, c.KE.range(e, r[i]), n)) return c.KE.range(e, r[i], n);
                                if (r.length < 2) return c.KE.range(e, r[r.length - 1], n);
                                for (; o !== r.length && o !== i; )
                                    tc(e, c.KE.range(e, r[o]), n) ? (a = o) : (i = o), (o = Math.floor((i + a) / 2));
                                return c.KE.range(e, r[a], n);
                            })(e, a);
                        c.Q6.isCollapsed(o) || c.gB.delete(e, { at: o });
                    }
                }
            }),
            (e.apply = (t) => {
                var r,
                    i = [],
                    a = R.get(e);
                if (null != a && a.length) {
                    var o = a
                        .map((e) =>
                            (function (e, t) {
                                var { path: n, diff: r, id: i } = e;
                                switch (t.type) {
                                    case "insert_text":
                                        if (!c.wA.equals(t.path, n) || t.offset >= r.end) return e;
                                        if (t.offset <= r.start)
                                            return {
                                                diff: {
                                                    start: t.text.length + r.start,
                                                    end: t.text.length + r.end,
                                                    text: r.text,
                                                },
                                                id: i,
                                                path: n,
                                            };
                                        return {
                                            diff: { start: r.start, end: r.end + t.text.length, text: r.text },
                                            id: i,
                                            path: n,
                                        };
                                    case "remove_text":
                                        if (!c.wA.equals(t.path, n) || t.offset >= r.end) return e;
                                        if (t.offset + t.text.length <= r.start)
                                            return {
                                                diff: {
                                                    start: r.start - t.text.length,
                                                    end: r.end - t.text.length,
                                                    text: r.text,
                                                },
                                                id: i,
                                                path: n,
                                            };
                                        return {
                                            diff: { start: r.start, end: r.end - t.text.length, text: r.text },
                                            id: i,
                                            path: n,
                                        };
                                    case "split_node":
                                        if (!c.wA.equals(t.path, n) || t.position >= r.end)
                                            return {
                                                diff: r,
                                                id: i,
                                                path: c.wA.transform(n, t, { affinity: "backward" }),
                                            };
                                        if (t.position > r.start)
                                            return {
                                                diff: {
                                                    start: r.start,
                                                    end: Math.min(t.position, r.end),
                                                    text: r.text,
                                                },
                                                id: i,
                                                path: n,
                                            };
                                        return {
                                            diff: {
                                                start: r.start - t.position,
                                                end: r.end - t.position,
                                                text: r.text,
                                            },
                                            id: i,
                                            path: c.wA.transform(n, t, { affinity: "forward" }),
                                        };
                                    case "merge_node":
                                        if (!c.wA.equals(t.path, n))
                                            return { diff: r, id: i, path: c.wA.transform(n, t) };
                                        return {
                                            diff: {
                                                start: r.start + t.position,
                                                end: r.end + t.position,
                                                text: r.text,
                                            },
                                            id: i,
                                            path: c.wA.transform(n, t),
                                        };
                                }
                                var a = c.wA.transform(n, t);
                                return a ? { diff: r, path: a, id: i } : null;
                            })(e, t),
                        )
                        .filter(Boolean);
                    R.set(e, o);
                }
                var u = L.get(e);
                u && L.set(e, eY(e, u, t));
                var s = N.get(e);
                if (null != s && s.at) {
                    var l = c.bR.isPoint(null == s ? void 0 : s.at) ? eZ(e, s.at, t) : eY(e, s.at, t);
                    N.set(e, l ? th(th({}, s), {}, { at: l }) : null);
                }
                switch (t.type) {
                    case "insert_text":
                    case "remove_text":
                    case "set_node":
                    case "split_node":
                        i.push(...tm(e, t.path));
                        break;
                    case "set_selection":
                        null == (r = x.get(e)) || r.unref(), x.delete(e);
                        break;
                    case "insert_node":
                    case "remove_node":
                        i.push(...tm(e, c.wA.parent(t.path)));
                        break;
                    case "merge_node":
                        i.push(...tm(e, c.wA.previous(t.path)));
                        break;
                    case "move_node":
                        i.push(...tm(e, c.wA.common(c.wA.parent(t.path), c.wA.parent(t.newPath))));
                }
                for (var [d, f] of (n(t), i)) {
                    var [h] = c.KE.node(e, d);
                    B.set(h, f);
                }
            }),
            (e.setFragmentData = (n) => {
                var { selection: r } = e;
                if (r) {
                    var [i, a] = c.Q6.edges(r),
                        o = c.KE.void(e, { at: i.path }),
                        u = c.KE.void(e, { at: a.path });
                    if (!c.Q6.isCollapsed(r) || o) {
                        var s = em.toDOMRange(e, r),
                            l = s.cloneContents(),
                            d = l.childNodes[0];
                        if (
                            (l.childNodes.forEach((e) => {
                                e.textContent && "" !== e.textContent.trim() && (d = e);
                            }),
                            u)
                        ) {
                            var [f] = u,
                                h = s.cloneRange(),
                                p = em.toDOMNode(e, f);
                            h.setEndAfter(p), (l = h.cloneContents());
                        }
                        if (
                            (o && (d = l.querySelector("[data-slate-spacer]")),
                            Array.from(l.querySelectorAll("[data-slate-zero-width]")).forEach((e) => {
                                var t = "n" === e.getAttribute("data-slate-zero-width");
                                e.textContent = t ? "\n" : "";
                            }),
                            Q(d))
                        ) {
                            var m = d.ownerDocument.createElement("span");
                            (m.style.whiteSpace = "pre"), m.appendChild(d), l.appendChild(m), (d = m);
                        }
                        var v = JSON.stringify(e.getFragment()),
                            _ = window.btoa(encodeURIComponent(v));
                        d.setAttribute("data-slate-fragment", _), n.setData("application/".concat(t), _);
                        var g = l.ownerDocument.createElement("div");
                        return (
                            g.appendChild(l),
                            g.setAttribute("hidden", "true"),
                            l.ownerDocument.body.appendChild(g),
                            n.setData("text/html", g.innerHTML),
                            n.setData("text/plain", Y(g)),
                            l.ownerDocument.body.removeChild(g),
                            n
                        );
                    }
                }
            }),
            (e.insertData = (t) => {
                e.insertFragmentData(t) || e.insertTextData(t);
            }),
            (e.insertFragmentData = (n) => {
                var r =
                    n.getData("application/".concat(t)) ||
                    ((e) => {
                        var [, t] = e.getData("text/html").match(J) || [];
                        return t;
                    })(n);
                if (r) {
                    var i = JSON.parse(decodeURIComponent(window.atob(r)));
                    return e.insertFragment(i), !0;
                }
                return !1;
            }),
            (e.insertTextData = (t) => {
                var n = t.getData("text/plain");
                if (n) {
                    var r = n.split(/\r\n|\r|\n/),
                        i = !1;
                    for (var a of r) i && c.gB.splitNodes(e, { always: !0 }), e.insertText(a), (i = !0);
                    return !0;
                }
                return !1;
            }),
            (e.onChange = (t) => {
                p.unstable_batchedUpdates(() => {
                    var n = P.get(e);
                    n && n(), r(t);
                });
            }),
            e
        );
    },
    tm = (e, t) => {
        var n = [];
        for (var [r, i] of c.KE.levels(e, { at: t })) {
            var a = em.findKey(e, r);
            n.push([i, a]);
        }
        return n;
    };
