"use strict";
n.d(t, { A: () => tu, Fo: () => e9, RV: () => ev, f7: () => eM, o$: () => tp, rL: () => eh, zL: () => ta });
var r = n(877413),
    i = n.n(r),
    s = n(805353),
    a = n.n(s),
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
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                s = Object.keys(e);
            for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++)
            (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
var m = 0;
class g {
    constructor() {
        this.id = "".concat(m++);
    }
}
var A = new WeakMap(),
    I = new WeakMap(),
    T = new WeakMap(),
    S = new WeakMap(),
    y = new WeakMap(),
    N = new WeakMap(),
    v = new WeakMap(),
    C = new WeakMap(),
    O = new WeakMap(),
    R = new WeakMap(),
    b = new WeakMap(),
    D = new WeakMap(),
    L = new WeakMap(),
    w = new WeakMap(),
    M = new WeakMap(),
    P = new WeakMap(),
    x = new WeakMap(),
    k = new WeakMap(),
    U = new WeakMap(),
    G = new WeakMap(),
    F = new WeakMap(),
    V = Symbol("placeholder"),
    B = Symbol("mark-placeholder"),
    H = globalThis.Text,
    j = (e) => (e && e.ownerDocument && e.ownerDocument.defaultView) || null,
    Y = (e) => K(e) && 8 === e.nodeType,
    W = (e) => K(e) && 1 === e.nodeType,
    K = (e) => {
        var t = j(e);
        return !!t && e instanceof t.Node;
    },
    $ = (e) => {
        var t = e && e.anchorNode && j(e.anchorNode);
        return !!t && e instanceof t.Selection;
    },
    z = (e) => K(e) && 3 === e.nodeType,
    q = (e, t, n) => {
        for (
            var { childNodes: r } = e, i = r[t], s = t, a = !1, o = !1;
            (Y(i) || (W(i) && 0 === i.childNodes.length) || (W(i) && "false" === i.getAttribute("contenteditable"))) &&
            (!a || !o);
        ) {
            if (s >= r.length) {
                (a = !0), (s = t - 1), (n = "backward");
                continue;
            }
            if (s < 0) {
                (o = !0), (s = t + 1), (n = "forward");
                continue;
            }
            (i = r[s]), (t = s), (s += "forward" === n ? 1 : -1);
        }
        return [i, t];
    },
    X = (e, t, n) => {
        var [r] = q(e, t, n);
        return r;
    },
    Q = (e) => {
        var t = "";
        if (z(e) && e.nodeValue) return e.nodeValue;
        if (W(e)) {
            for (var n of Array.from(e.childNodes)) t += Q(n);
            var r = getComputedStyle(e).getPropertyValue("display");
            ("block" === r || "list" === r || "BR" === e.tagName) && (t += "\n");
        }
        return t;
    },
    Z = /data-slate-fragment="(.+?)"/m,
    J = (e, t, n) => {
        var { target: r } = t;
        if (W(r) && r.matches('[contentEditable="false"]')) return !1;
        var { document: i } = eh.getWindow(e);
        if (i.contains(r)) return eh.hasDOMNode(e, r, { editable: !0 });
        var s = n.find((e) => {
            var { addedNodes: t, removedNodes: n } = e;
            for (var i of t) if (i === r || i.contains(r)) return !0;
            for (var s of n) if (s === r || s.contains(r)) return !0;
        });
        return !!s && s !== t && J(e, s, n);
    },
    ee = parseInt(u.version.split(".")[0], 10) >= 17,
    et =
        "u" > typeof navigator &&
        "u" > typeof window &&
        /iPad|iPhone|iPod/.test(navigator.userAgent) &&
        !window.MSStream,
    en = "u" > typeof navigator && /Mac OS X/.test(navigator.userAgent),
    er = "u" > typeof navigator && /Android/.test(navigator.userAgent),
    ei = "u" > typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
    es = "u" > typeof navigator && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
    ea = "u" > typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
    eo = "u" > typeof navigator && /Chrome/i.test(navigator.userAgent),
    el = "u" > typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
    eu = er && "u" > typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
    ec =
        "u" > typeof navigator &&
        /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
    ed = "u" > typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
    e_ = "u" > typeof navigator && /.*Wechat/.test(navigator.userAgent),
    ef = "u" > typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
    ep =
        (!el || !eu) &&
        !ea &&
        "u" > typeof globalThis &&
        globalThis.InputEvent &&
        "function" == typeof globalThis.InputEvent.prototype.getTargetRanges,
    eh = {
        isComposing: (e) => !!D.get(e),
        getWindow(e) {
            var t = T.get(e);
            if (!t) throw Error("Unable to find a host window element for this editor");
            return t;
        },
        findKey(e, t) {
            var n = C.get(t);
            return n || ((n = new g()), C.set(t, n)), n;
        },
        findPath(e, t) {
            for (var n = [], r = t; ; ) {
                var i = I.get(r);
                if (null == i)
                    if (d.KE.isEditor(r)) return n;
                    else break;
                var s = A.get(r);
                if (null == s) break;
                n.unshift(s), (r = i);
            }
            throw Error("Unable to find the path for Slate node: ".concat(d.h6.stringify(t)));
        },
        findDocumentOrShadowRoot(e) {
            var t = eh.toDOMNode(e, e),
                n = t.getRootNode();
            return (n instanceof Document || n instanceof ShadowRoot) && null != n.getSelection ? n : t.ownerDocument;
        },
        isFocused: (e) => !!b.get(e),
        isReadOnly: (e) => !!R.get(e),
        blur(e) {
            var t = eh.toDOMNode(e, e),
                n = eh.findDocumentOrShadowRoot(e);
            b.set(e, !1), n.activeElement === t && t.blur();
        },
        focus(e) {
            var t = eh.toDOMNode(e, e),
                n = eh.findDocumentOrShadowRoot(e);
            b.set(e, !0), n.activeElement !== t && t.focus({ preventScroll: !0 });
        },
        deselect(e) {
            var { selection: t } = e,
                n = eh.findDocumentOrShadowRoot(e).getSelection();
            n && n.rangeCount > 0 && n.removeAllRanges(), t && d.gB.deselect(e);
        },
        hasDOMNode(e, t) {
            var n,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { editable: i = !1 } = r,
                s = eh.toDOMNode(e, e);
            try {
                n = W(t) ? t : t.parentElement;
            } catch (e) {
                if (!e.message.includes('Permission denied to access property "nodeType"')) throw e;
            }
            return (
                !!n &&
                n.closest("[data-slate-editor]") === s &&
                (!i ||
                    !!n.isContentEditable ||
                    ("boolean" == typeof n.isContentEditable && n.closest('[contenteditable="false"]') === s) ||
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
            var n = O.get(e),
                r = d.KE.isEditor(t) ? S.get(e) : null == n ? void 0 : n.get(eh.findKey(e, t));
            if (!r) throw Error("Cannot resolve a DOM node from Slate node: ".concat(d.h6.stringify(t)));
            return r;
        },
        toDOMPoint(e, t) {
            var [n] = d.KE.node(e, t.path),
                r = eh.toDOMNode(e, n);
            d.KE.void(e, { at: t }) && (t = { path: t.path, offset: 0 });
            for (
                var i = Array.from(r.querySelectorAll("[data-slate-string], [data-slate-zero-width]")), s = 0, a = 0;
                a < i.length;
                a++
            ) {
                var o = i[a],
                    l = o.childNodes[0];
                if (null != l && null != l.textContent) {
                    var { length: u } = l.textContent,
                        c = o.getAttribute("data-slate-length"),
                        _ = s + (null == c ? u : parseInt(c, 10)),
                        f = i[a + 1];
                    if (t.offset === _ && null != f && f.hasAttribute("data-slate-mark-placeholder")) {
                        var p,
                            h,
                            E = f.childNodes[0];
                        p = [E instanceof H ? E : f, null != (h = f.textContent) && h.startsWith("\uFEFF") ? 1 : 0];
                        break;
                    }
                    if (t.offset <= _) {
                        p = [l, Math.min(u, Math.max(0, t.offset - s))];
                        break;
                    }
                    s = _;
                }
            }
            if (!p) throw Error("Cannot resolve a DOM point from Slate point: ".concat(d.h6.stringify(t)));
            return p;
        },
        toDOMRange(e, t) {
            var { anchor: n, focus: r } = t,
                i = d.Q6.isBackward(t),
                s = eh.toDOMPoint(e, n),
                a = d.Q6.isCollapsed(t) ? s : eh.toDOMPoint(e, r),
                o = eh.getWindow(e).document.createRange(),
                [l, u] = i ? a : s,
                [c, _] = i ? s : a,
                f = !!(W(l) ? l : l.parentElement).getAttribute("data-slate-zero-width"),
                p = !!(W(c) ? c : c.parentElement).getAttribute("data-slate-zero-width");
            return o.setStart(l, f ? 1 : u), o.setEnd(c, p ? 1 : _), o;
        },
        toSlateNode(e, t) {
            var n = W(t) ? t : t.parentElement;
            n && !n.hasAttribute("data-slate-node") && (n = n.closest("[data-slate-node]"));
            var r = n ? N.get(n) : null;
            if (!r) throw Error("Cannot resolve a Slate node from DOM node: ".concat(n));
            return r;
        },
        findEventRange(e, t) {
            "nativeEvent" in t && (t = t.nativeEvent);
            var n,
                { clientX: r, clientY: i, target: s } = t;
            if (null == r || null == i) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
            var a = eh.toSlateNode(e, t.target),
                o = eh.findPath(e, a);
            if (d.Hg.isElement(a) && d.KE.isVoid(e, a)) {
                var l = s.getBoundingClientRect(),
                    u = e.isInline(a) ? r - l.left < l.left + l.width - r : i - l.top < l.top + l.height - i,
                    c = d.KE.point(e, o, { edge: u ? "start" : "end" }),
                    _ = u ? d.KE.before(e, c) : d.KE.after(e, c);
                if (_) return d.KE.range(e, _);
            }
            var { document: f } = eh.getWindow(e);
            if (f.caretRangeFromPoint) n = f.caretRangeFromPoint(r, i);
            else {
                var p = f.caretPositionFromPoint(r, i);
                p && ((n = f.createRange()).setStart(p.offsetNode, p.offset), n.setEnd(p.offsetNode, p.offset));
            }
            if (!n) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
            return eh.toSlateRange(e, n, { exactMatch: !1, suppressThrow: !1 });
        },
        toSlatePoint(e, t, n) {
            var { exactMatch: r, suppressThrow: i } = n,
                [s, a] = r
                    ? t
                    : ((e) => {
                          var [t, n] = e;
                          if (W(t) && t.childNodes.length) {
                              var r = n === t.childNodes.length,
                                  i = r ? n - 1 : n;
                              for (
                                  [t, i] = q(t, i, r ? "backward" : "forward"), r = i < n;
                                  W(t) && t.childNodes.length;
                              ) {
                                  var s = r ? t.childNodes.length - 1 : 0;
                                  t = X(t, s, r ? "backward" : "forward");
                              }
                              n = r && null != t.textContent ? t.textContent.length : 0;
                          }
                          return [t, n];
                      })(t),
                o = s.parentNode,
                l = null,
                u = 0;
            if (o) {
                var c,
                    _,
                    f = eh.toDOMNode(e, e),
                    p = o.closest('[data-slate-void="true"]'),
                    h = p && f.contains(p) ? p : null,
                    E = o.closest("[data-slate-leaf]"),
                    m = null;
                if (E) {
                    if ((l = E.closest('[data-slate-node="text"]'))) {
                        var g = eh.getWindow(e).document.createRange();
                        g.setStart(l, 0), g.setEnd(s, a);
                        var A = g.cloneContents();
                        [
                            ...Array.prototype.slice.call(A.querySelectorAll("[data-slate-zero-width]")),
                            ...Array.prototype.slice.call(A.querySelectorAll("[contenteditable=false]")),
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
                            (u = A.textContent.length),
                            (m = l);
                    }
                } else if (h) {
                    for (var I = h.querySelectorAll("[data-slate-leaf]"), T = 0; T < I.length; T++) {
                        var S = I[T];
                        if (eh.hasDOMNode(e, S)) {
                            E = S;
                            break;
                        }
                    }
                    E
                        ? ((l = E.closest('[data-slate-node="text"]')),
                          (u = (m = E).textContent.length),
                          m.querySelectorAll("[data-slate-zero-width]").forEach((e) => {
                              u -= e.textContent.length;
                          }))
                        : (u = 1);
                }
                m &&
                    u === m.textContent.length &&
                    er &&
                    "z" === m.getAttribute("data-slate-zero-width") &&
                    null != (c = m.textContent) &&
                    c.startsWith("\uFEFF") &&
                    (o.hasAttribute("data-slate-zero-width") ||
                        (ei && null != (_ = m.textContent) && _.endsWith("\n\n"))) &&
                    u--;
            }
            if (er && !l && !r) {
                var y = o.hasAttribute("data-slate-node") ? o : o.closest("[data-slate-node]");
                if (y && eh.hasDOMNode(e, y, { editable: !0 })) {
                    var N = eh.toSlateNode(e, y),
                        { path: v, offset: C } = d.KE.start(e, eh.findPath(e, N));
                    return y.querySelector("[data-slate-leaf]") || (C = a), { path: v, offset: C };
                }
            }
            if (!l) {
                if (i) return null;
                throw Error("Cannot resolve a Slate point from DOM point: ".concat(t));
            }
            var O = eh.toSlateNode(e, l);
            return { path: eh.findPath(e, O), offset: u };
        },
        toSlateRange(e, t, n) {
            var r,
                i,
                s,
                a,
                o,
                l,
                { exactMatch: u, suppressThrow: c } = n;
            if (
                (($(t) ? t.anchorNode : t.startContainer) &&
                    ($(t)
                        ? ((r = t.anchorNode),
                          (i = t.anchorOffset),
                          (s = t.focusNode),
                          (a = t.focusOffset),
                          (o =
                              eo &&
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
                          (s = t.endContainer),
                          (a = t.endOffset),
                          (o = t.collapsed))),
                null == r || null == s || null == i || null == a)
            )
                throw Error("Cannot resolve a Slate range from DOM range: ".concat(t));
            "getAttribute" in s &&
                "false" === s.getAttribute("contenteditable") &&
                ((s = r), (a = (null == (l = r.textContent) ? void 0 : l.length) || 0));
            var _ = eh.toSlatePoint(e, [r, i], { exactMatch: u, suppressThrow: c });
            if (!_) return null;
            var f = o ? _ : eh.toSlatePoint(e, [s, a], { exactMatch: u, suppressThrow: c });
            if (!f) return null;
            if (ei && !o && r !== s) {
                var p = d.KE.isEnd(e, _, _.path),
                    h = d.KE.isStart(e, f, f.path);
                p && (_ = d.KE.after(e, _) || _), h && (f = d.KE.before(e, f) || f);
            }
            var E = { anchor: _, focus: f };
            return (
                d.Q6.isExpanded(E) &&
                    d.Q6.isForward(E) &&
                    W(s) &&
                    d.KE.void(e, { at: E.focus, mode: "highest" }) &&
                    (E = d.KE.unhangRange(e, E, { voids: !0 })),
                E
            );
        },
        hasRange(e, t) {
            var { anchor: n, focus: r } = t;
            return d.KE.hasPath(e, n.path) && d.KE.hasPath(e, r.path);
        },
        hasTarget: (e, t) => K(t) && eh.hasDOMNode(e, t),
        hasEditableTarget: (e, t) => K(t) && eh.hasDOMNode(e, t, { editable: !0 }),
        hasSelectableTarget: (e, t) => eh.hasEditableTarget(e, t) || eh.isTargetInsideNonReadonlyVoid(e, t),
        isTargetInsideNonReadonlyVoid(e, t) {
            if (R.get(e)) return !1;
            var n = eh.hasTarget(e, t) && eh.toSlateNode(e, t);
            return d.Hg.isElement(n) && d.KE.isVoid(e, n);
        },
        androidScheduleFlush(e) {
            var t;
            null == (t = M.get(e)) || t();
        },
        androidPendingDiffs: (e) => k.get(e),
    },
    eE = ["anchor", "focus"],
    em = ["anchor", "focus"],
    eg = (e, t) => {
        var n = E(e, eE),
            r = E(t, em);
        return (
            e[V] === t[V] &&
            Object.keys(n).length === Object.keys(r).length &&
            Object.keys(n).every((e) => r.hasOwnProperty(e) && n[e] === r[e])
        );
    },
    eA = ef ? u.useLayoutEffect : u.useEffect,
    eI = (e) => {
        var { isLast: t, leaf: n, parent: r, text: i } = e,
            s = ev(),
            a = eh.findPath(s, i),
            o = d.wA.parent(a),
            l = !0 === n[B];
        return s.isVoid(r)
            ? u.createElement(ey, { length: d.bP.string(r).length })
            : "" !== n.text || r.children[r.children.length - 1] !== i || s.isInline(r) || "" !== d.KE.string(s, o)
              ? "" === n.text
                  ? u.createElement(ey, { isMarkPlaceholder: l })
                  : t && "\n" === n.text.slice(-1)
                    ? u.createElement(eT, { isTrailing: !0, text: n.text })
                    : u.createElement(eT, { text: n.text })
              : u.createElement(ey, { isLineBreak: !0, isMarkPlaceholder: l });
    },
    eT = (e) => {
        var { text: t, isTrailing: n = !1 } = e,
            r = (0, u.useRef)(null),
            i = () => "".concat(null != t ? t : "").concat(n ? "\n" : ""),
            [s] = (0, u.useState)(i);
        return (
            eA(() => {
                var e = i();
                r.current && r.current.textContent !== e && (r.current.textContent = e);
            }),
            u.createElement(eS, { ref: r }, s)
        );
    },
    eS = (0, u.memo)(
        (0, u.forwardRef)((e, t) => u.createElement("span", { "data-slate-string": !0, ref: t }, e.children)),
    ),
    ey = (e) => {
        var { length: t = 0, isLineBreak: n = !1, isMarkPlaceholder: r = !1 } = e,
            i = { "data-slate-zero-width": n ? "n" : "z", "data-slate-length": t };
        return (
            r && (i["data-slate-mark-placeholder"] = !0),
            u.createElement(
                "span",
                Object.assign({}, i),
                er && n ? null : "\uFEFF",
                n ? u.createElement("br", null) : null,
            )
        );
    },
    eN = (0, u.createContext)(null),
    ev = () => {
        var e = (0, u.useContext)(eN);
        if (!e) throw Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
        return e;
    },
    eC = u.memo(
        (e) => {
            var {
                    leaf: t,
                    isLast: n,
                    text: r,
                    parent: i,
                    renderPlaceholder: s,
                    renderLeaf: a = (e) => u.createElement(eO, Object.assign({}, e)),
                } = e,
                o = (0, u.useRef)(null),
                l = (0, u.useRef)(null),
                c = ev(),
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
                        (e ? y.set(c, e) : y.delete(c),
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
                            y.delete(c);
                        }
                    );
                }, [l, t]);
            var f = u.createElement(eI, { isLast: n, leaf: t, parent: i, text: r });
            if (t[V]) {
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
                f = u.createElement(u.Fragment, null, s(p), f);
            }
            return a({ attributes: { "data-slate-leaf": !0 }, children: f, leaf: t, text: r });
        },
        (e, t) =>
            t.parent === e.parent &&
            t.isLast === e.isLast &&
            t.renderLeaf === e.renderLeaf &&
            t.renderPlaceholder === e.renderPlaceholder &&
            t.text === e.text &&
            d.EY.equals(t.leaf, e.leaf) &&
            t.leaf[V] === e.leaf[V],
    ),
    eO = (e) => {
        var { attributes: t, children: n } = e;
        return u.createElement("span", Object.assign({}, t), n);
    },
    eR = u.memo(
        (e) => {
            for (
                var { decorations: t, isLast: n, parent: r, renderPlaceholder: i, renderLeaf: s, text: a } = e,
                    o = ev(),
                    l = (0, u.useRef)(null),
                    c = d.EY.decorations(a, t),
                    _ = eh.findKey(o, a),
                    f = [],
                    p = 0;
                p < c.length;
                p++
            ) {
                var h = c[p];
                f.push(
                    u.createElement(eC, {
                        isLast: n && p === c.length - 1,
                        key: "".concat(_.id, "-").concat(p),
                        renderPlaceholder: i,
                        leaf: h,
                        text: a,
                        parent: r,
                        renderLeaf: s,
                    }),
                );
            }
            var E = (0, u.useCallback)(
                (e) => {
                    var t = O.get(o);
                    e
                        ? (null == t || t.set(_, e), v.set(a, e), N.set(e, a))
                        : (null == t || t.delete(_), v.delete(a), l.current && N.delete(l.current)),
                        (l.current = e);
                },
                [l, o, _, a],
            );
            return u.createElement("span", { "data-slate-node": "text", ref: E }, f);
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
    eb = u.memo(
        (e) => {
            var {
                    decorations: t,
                    element: n,
                    renderElement: r = (e) => u.createElement(eD, Object.assign({}, e)),
                    renderPlaceholder: s,
                    renderLeaf: a,
                    selection: o,
                } = e,
                l = ev(),
                c = ek(),
                _ = l.isInline(n),
                f = eh.findKey(l, n),
                p = (0, u.useCallback)(
                    (e) => {
                        var t = O.get(l);
                        e
                            ? (null == t || t.set(f, e), v.set(n, e), N.set(e, n))
                            : (null == t || t.delete(f), v.delete(n));
                    },
                    [l, f, n],
                ),
                h = eP({
                    decorations: t,
                    node: n,
                    renderElement: r,
                    renderPlaceholder: s,
                    renderLeaf: a,
                    selection: o,
                }),
                E = { "data-slate-node": "element", ref: p };
            if ((_ && (E["data-slate-inline"] = !0), !_ && d.KE.hasInlines(l, n))) {
                var m = d.bP.string(n),
                    g = i()(m);
                "rtl" === g && (E.dir = g);
            }
            if (d.KE.isVoid(l, n)) {
                (E["data-slate-void"] = !0), !c && _ && (E.contentEditable = !1);
                var [[T]] = d.bP.texts(n);
                (h = u.createElement(
                    _ ? "span" : "div",
                    {
                        "data-slate-spacer": !0,
                        style: { height: "0", color: "transparent", outline: "none", position: "absolute" },
                    },
                    u.createElement(eR, { renderPlaceholder: s, decorations: [], isLast: !1, parent: n, text: T }),
                )),
                    A.set(T, 0),
                    I.set(T, n);
            }
            return r({ attributes: E, children: h, element: n, decorations: t });
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
                    if (!d.Q6.equals(r, i) || !eg(r, i)) return !1;
                }
                return !0;
            })(e.decorations, t.decorations) &&
            (e.selection === t.selection || (!!e.selection && !!t.selection && d.Q6.equals(e.selection, t.selection))),
    ),
    eD = (e) => {
        var { attributes: t, children: n, element: r } = e,
            i = ev().isInline(r) ? "span" : "div";
        return u.createElement(i, Object.assign({}, t, { style: { position: "relative" } }), n);
    },
    eL = (0, u.createContext)(() => []),
    ew = (0, u.createContext)(!1),
    eM = () => (0, u.useContext)(ew),
    eP = (e) => {
        for (
            var { decorations: t, node: n, renderElement: r, renderPlaceholder: i, renderLeaf: s, selection: a } = e,
                o = (0, u.useContext)(eL),
                l = ev(),
                c = eh.findPath(l, n),
                _ = [],
                f = d.Hg.isElement(n) && !l.isInline(n) && d.KE.hasInlines(l, n),
                p = 0;
            p < n.children.length;
            p++
        ) {
            var h = c.concat(p),
                E = n.children[p],
                m = eh.findKey(l, E),
                g = d.KE.range(l, h),
                T = a && d.Q6.intersection(g, a),
                S = o([E, h]);
            for (var y of t) {
                var N = d.Q6.intersection(y, g);
                N && S.push(N);
            }
            d.Hg.isElement(E)
                ? _.push(
                      u.createElement(
                          ew.Provider,
                          { key: "provider-".concat(m.id), value: !!T },
                          u.createElement(eb, {
                              decorations: S,
                              element: E,
                              key: m.id,
                              renderElement: r,
                              renderPlaceholder: i,
                              renderLeaf: s,
                              selection: T,
                          }),
                      ),
                  )
                : _.push(
                      u.createElement(eR, {
                          decorations: S,
                          key: m.id,
                          isLast: f && p === n.children.length - 1,
                          parent: n,
                          renderPlaceholder: i,
                          renderLeaf: s,
                          text: E,
                      }),
                  ),
                A.set(E, p),
                I.set(E, n);
        }
        return _;
    },
    ex = (0, u.createContext)(!1),
    ek = () => (0, u.useContext)(ex),
    eU = (0, u.createContext)(null),
    eG = {
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
    eF = {
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
    eV = {
        deleteWordBackward: "ctrl+shift?+backspace",
        deleteWordForward: "ctrl+shift?+delete",
        redo: ["ctrl+y", "ctrl+shift+z"],
    },
    eB = (e) => {
        var t = eG[e],
            n = eF[e],
            r = eV[e],
            i = t && (0, f.isKeyHotkey)(t),
            s = n && (0, f.isKeyHotkey)(n),
            a = r && (0, f.isKeyHotkey)(r);
        return (e) => !!((i && i(e)) || (en && s && s(e)) || (!en && a && a(e)));
    },
    eH = {
        isBold: eB("bold"),
        isCompose: eB("compose"),
        isMoveBackward: eB("moveBackward"),
        isMoveForward: eB("moveForward"),
        isDeleteBackward: eB("deleteBackward"),
        isDeleteForward: eB("deleteForward"),
        isDeleteLineBackward: eB("deleteLineBackward"),
        isDeleteLineForward: eB("deleteLineForward"),
        isDeleteWordBackward: eB("deleteWordBackward"),
        isDeleteWordForward: eB("deleteWordForward"),
        isExtendBackward: eB("extendBackward"),
        isExtendForward: eB("extendForward"),
        isExtendLineBackward: eB("extendLineBackward"),
        isExtendLineForward: eB("extendLineForward"),
        isItalic: eB("italic"),
        isMoveLineBackward: eB("moveLineBackward"),
        isMoveLineForward: eB("moveLineForward"),
        isMoveWordBackward: eB("moveWordBackward"),
        isMoveWordForward: eB("moveWordForward"),
        isRedo: eB("redo"),
        isSoftBreak: eB("insertSoftBreak"),
        isSplitBlock: eB("splitBlock"),
        isTransposeCharacter: eB("transposeCharacter"),
        isUndo: eB("undo"),
    },
    ej = { subtree: !0, childList: !0, characterData: !0, characterDataOldValue: !0 };
class eY extends u.Component {
    constructor() {
        super(...arguments), (this.context = null), (this.manager = null), (this.mutationObserver = null);
    }
    observe() {
        var e,
            { node: t } = this.props;
        if (!t.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
        null == (e = this.mutationObserver) || e.observe(t.current, ej);
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
                        var i = t.filter((e) => J(r, e, t));
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
eY.contextType = eN;
var eW = er
    ? eY
    : (e) => {
          var { children: t } = e;
          return u.createElement(u.Fragment, null, t);
      };
function eK(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return n.reduce((e, t) => e.slice(0, t.start) + t.text + e.slice(t.end), e);
}
function e$(e, t) {
    var { start: n, end: r, text: i } = t,
        s = e.slice(n, r),
        a = (function (e, t) {
            for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) if (e.charAt(r) !== t.charAt(r)) return r;
            return n;
        })(s, i),
        o = Math.min(s.length - a, i.length - a),
        l = (function (e, t, n) {
            for (var r = Math.min(e.length, t.length, n), i = 0; i < r; i++)
                if (e.charAt(e.length - i - 1) !== t.charAt(t.length - i - 1)) return i;
            return r;
        })(s, i, o),
        u = { start: n + a, end: r - l, text: i.slice(a, i.length - l) };
    return u.start === u.end && 0 === u.text.length ? null : u;
}
function ez(e, t) {
    var { path: n, offset: r } = t;
    if (!d.KE.hasPath(e, n)) return null;
    var i = d.bP.get(e, n);
    if (!d.EY.isText(i)) return null;
    var s = d.KE.above(e, { match: (t) => d.Hg.isElement(t) && d.KE.isBlock(e, t), at: n });
    if (!s) return null;
    for (; r > i.text.length; ) {
        var a = d.KE.next(e, { at: n, match: d.EY.isText });
        if (!a || !d.wA.isDescendant(a[1], s[1])) return null;
        (r -= i.text.length), (i = a[0]), (n = a[1]);
    }
    return { path: n, offset: r };
}
function eq(e, t) {
    var n = ez(e, t.anchor);
    if (!n) return null;
    if (d.Q6.isCollapsed(t)) return { anchor: n, focus: n };
    var r = ez(e, t.focus);
    return r ? { anchor: n, focus: r } : null;
}
function eX(e, t, n) {
    var r = k.get(e),
        i =
            null == r
                ? void 0
                : r.find((e) => {
                      var { path: n } = e;
                      return d.wA.equals(n, t.path);
                  });
    if (!i || t.offset <= i.diff.start) return d.bR.transform(t, n, { affinity: "backward" });
    var { diff: s } = i;
    if (t.offset <= s.start + s.text.length) {
        var a = { path: t.path, offset: s.start },
            o = d.bR.transform(a, n, { affinity: "backward" });
        return o ? { path: o.path, offset: o.offset + t.offset - s.start } : null;
    }
    var l = { path: t.path, offset: t.offset - s.text.length + s.end - s.start },
        u = d.bR.transform(l, n, { affinity: "backward" });
    return u
        ? "split_node" === n.type && d.wA.equals(n.path, t.path) && l.offset < n.position && s.start < n.position
            ? u
            : { path: u.path, offset: u.offset + s.text.length - s.end + s.start }
        : null;
}
function eQ(e, t, n) {
    var r = eX(e, t.anchor, n);
    if (!r) return null;
    if (d.Q6.isCollapsed(t)) return { anchor: r, focus: r };
    var i = eX(e, t.focus, n);
    return i ? { anchor: r, focus: i } : null;
}
function eZ(e, t) {
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
function eJ(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eZ(Object(n), !0).forEach(function (t) {
                  h(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eZ(Object(n)).forEach(function (t) {
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
    e6 = [
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
    e4 = ["text"];
function e7(e, t) {
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
function e5(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? e7(Object(n), !0).forEach(function (t) {
                  h(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : e7(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var e8 = (e) => u.createElement(u.Fragment, null, eP(e)),
    e9 = (e) => {
        var t,
            n,
            r,
            s,
            o,
            c,
            _ = (0, u.useCallback)((e) => u.createElement(te, Object.assign({}, e)), []),
            {
                autoFocus: f,
                decorate: p = tt,
                onDOMBeforeInput: m,
                placeholder: g,
                readOnly: A = !1,
                renderElement: I,
                renderLeaf: C,
                renderPlaceholder: O = _,
                scrollSelectionIntoView: w = tn,
                style: H = {},
                as: Y = "div",
                disableDefaultStyles: z = !1,
            } = e,
            q = E(e, e6),
            X = (() => {
                var e = (0, u.useContext)(eU);
                if (!e) throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
                var { editor: t } = e;
                return t;
            })(),
            [Q, Z] = (0, u.useState)(!1),
            ee = (0, u.useRef)(null),
            en = (0, u.useRef)([]),
            { onUserInput: ea, receivedUserInput: el } =
                ((t = ev()),
                (n = (0, u.useRef)(!1)),
                (r = (0, u.useRef)(0)),
                (s = (0, u.useCallback)(() => {
                    if (!n.current) {
                        n.current = !0;
                        var e = eh.getWindow(t);
                        e.cancelAnimationFrame(r.current),
                            (r.current = e.requestAnimationFrame(() => {
                                n.current = !1;
                            }));
                    }
                }, [])),
                (0, u.useEffect)(() => () => cancelAnimationFrame(r.current), []),
                { receivedUserInput: n, onUserInput: s }),
            [, eu] = (0, u.useReducer)((e) => e + 1, 0);
        F.set(X, eu), R.set(X, A);
        var eE = (0, u.useMemo)(
            () => ({ isDraggingInternally: !1, isUpdatingSelection: !1, latestElement: null, hasMarkPlaceholder: !1 }),
            [],
        );
        (0, u.useLayoutEffect)(
            () => () => {
                null == eE || (null != eE.latestElement && (eE.latestElement.remove(), (eE.latestElement = null)));
            },
            [],
        ),
            (0, u.useEffect)(() => {
                ee.current && f && ee.current.focus();
            }, [f]);
        var em = (0, u.useCallback)(
                l()(() => {
                    if (
                        (er || !eh.isComposing(X)) &&
                        (!eE.isUpdatingSelection || (null != eI && eI.isFlushing())) &&
                        !eE.isDraggingInternally
                    ) {
                        var e = eh.findDocumentOrShadowRoot(X),
                            { activeElement: t } = e,
                            n = eh.toDOMNode(X, X),
                            r = e.getSelection();
                        if ((t === n ? ((eE.latestElement = t), b.set(X, !0)) : b.delete(X), !r))
                            return d.gB.deselect(X);
                        var { anchorNode: i, focusNode: s } = r,
                            a = eh.hasEditableTarget(X, i) || eh.isTargetInsideNonReadonlyVoid(X, i),
                            o = eh.hasEditableTarget(X, s) || eh.isTargetInsideNonReadonlyVoid(X, s);
                        if (a && o) {
                            var l = eh.toSlateRange(X, r, { exactMatch: !1, suppressThrow: !0 });
                            l &&
                                (eh.isComposing(X) ||
                                (null != eI && eI.hasPendingChanges()) ||
                                (null != eI && eI.isFlushing())
                                    ? null == eI || eI.handleUserSelect(l)
                                    : d.gB.select(X, l));
                        }
                        !A || (a && o) || d.gB.deselect(X);
                    }
                }, 100),
                [A],
            ),
            eg = (0, u.useMemo)(() => a()(em, 0), [em]),
            eI = (function (e) {
                var t,
                    { node: n } = e,
                    r = E(e, e1);
                if (!er) return null;
                var i = ev(),
                    s =
                        ((t = (0, u.useRef)(!1)),
                        (0, u.useEffect)(
                            () => (
                                (t.current = !0),
                                () => {
                                    t.current = !1;
                                }
                            ),
                            [],
                        ),
                        t.current),
                    [a] = (0, u.useState)(() =>
                        (function (e) {
                            var { editor: t, scheduleOnDOMSelectionChange: n, onDOMSelectionChange: r } = e,
                                i = !1,
                                s = null,
                                a = null,
                                o = null,
                                l = 0,
                                u = !1,
                                c = () => {
                                    var e = G.get(t);
                                    if ((G.delete(t), e)) {
                                        var { selection: n } = t,
                                            r = eq(t, e);
                                        !r || (n && d.Q6.equals(r, n)) || d.gB.select(t, r);
                                    }
                                },
                                _ = () => {
                                    if (
                                        (a && (clearTimeout(a), (a = null)),
                                        o && (clearTimeout(o), (o = null)),
                                        !m() && !E())
                                    )
                                        return void c();
                                    i || ((i = !0), setTimeout(() => (i = !1))), E() && (i = "action");
                                    var e = t.selection && d.KE.rangeRef(t, t.selection, { affinity: "forward" });
                                    x.set(t, t.marks), e0("flush", U.get(t), k.get(t));
                                    for (var s = m(); (l = null == (_ = k.get(t)) ? void 0 : _[0]); ) {
                                        var l,
                                            _,
                                            f,
                                            p = P.get(t);
                                        void 0 !== p && (P.delete(t), (t.marks = p)), p && !1 === u && (u = null);
                                        var h = (function (e) {
                                            var { path: t, diff: n } = e;
                                            return {
                                                anchor: { path: t, offset: n.start },
                                                focus: { path: t, offset: n.end },
                                            };
                                        })(l);
                                        (t.selection && d.Q6.equals(t.selection, h)) || d.gB.select(t, h),
                                            l.diff.text ? d.KE.insertText(t, l.diff.text) : d.KE.deleteFragment(t),
                                            k.set(
                                                t,
                                                null == (f = k.get(t))
                                                    ? void 0
                                                    : f.filter((e) => {
                                                          var { id: t } = e;
                                                          return t !== l.id;
                                                      }),
                                            ),
                                            !(function (e, t) {
                                                var { path: n, diff: r } = t;
                                                if (!d.KE.hasPath(e, n)) return !1;
                                                var i = d.bP.get(e, n);
                                                if (!d.EY.isText(i)) return !1;
                                                if (r.start !== i.text.length || 0 === r.text.length)
                                                    return i.text.slice(r.start, r.start + r.text.length) === r.text;
                                                var s = d.wA.next(n);
                                                if (!d.KE.hasPath(e, s)) return !1;
                                                var a = d.bP.get(e, s);
                                                return d.EY.isText(a) && a.text.startsWith(r.text);
                                            })(t, l) &&
                                                ((s = !1),
                                                U.delete(t),
                                                x.delete(t),
                                                (i = "action"),
                                                G.delete(t),
                                                n.cancel(),
                                                r.cancel(),
                                                null == e || e.unref());
                                    }
                                    var g = null == e ? void 0 : e.unref();
                                    if (
                                        (!g ||
                                            G.get(t) ||
                                            (t.selection && d.Q6.equals(g, t.selection)) ||
                                            d.gB.select(t, g),
                                        E())
                                    )
                                        return void (() => {
                                            var e = U.get(t);
                                            if ((U.delete(t), e)) {
                                                if (e.at) {
                                                    var n = d.bR.isPoint(e.at) ? ez(t, e.at) : eq(t, e.at);
                                                    if (!n) return;
                                                    var r = d.KE.range(t, n);
                                                    (t.selection && d.Q6.equals(t.selection, r)) || d.gB.select(t, n);
                                                }
                                                e.run();
                                            }
                                        })();
                                    s && n(), n.flush(), r.flush(), c();
                                    var A = x.get(t);
                                    x.delete(t), void 0 !== A && ((t.marks = A), t.onChange());
                                },
                                f = function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                        n = y.get(t);
                                    if (n) {
                                        if (m() || e) {
                                            n.style.display = "none";
                                            return;
                                        }
                                        n.style.removeProperty("display");
                                    }
                                },
                                p = (e, n) => {
                                    var r,
                                        i,
                                        s,
                                        a,
                                        o,
                                        u,
                                        c,
                                        _,
                                        p = null != (_ = k.get(t)) ? _ : [];
                                    k.set(t, p);
                                    var h = d.bP.leaf(t, e),
                                        E = p.findIndex((t) => d.wA.equals(t.path, e));
                                    if (E < 0) {
                                        e$(h.text, n) && p.push({ path: e, diff: n, id: l++ }), f();
                                        return;
                                    }
                                    var m =
                                        ((r = h.text),
                                        (i = p[E].diff),
                                        (s = Math.min(i.start, n.start)),
                                        (a = Math.max(0, Math.min(i.start + i.text.length, n.end) - n.start)),
                                        (o = eK(r, i, n)),
                                        (u = Math.max(
                                            n.start + n.text.length,
                                            i.start +
                                                i.text.length +
                                                (i.start + i.text.length > n.start ? n.text.length : 0) -
                                                a,
                                        )),
                                        (c = o.slice(s, u)),
                                        e$(r, {
                                            start: s,
                                            end: Math.max(i.end, n.end - i.text.length + (i.end - i.start)),
                                            text: c,
                                        }));
                                    if (!m) {
                                        p.splice(E, 1), f();
                                        return;
                                    }
                                    p[E] = eJ(eJ({}, p[E]), {}, { diff: m });
                                },
                                h = function (e) {
                                    var { at: i } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    (u = !1),
                                        G.delete(t),
                                        n.cancel(),
                                        r.cancel(),
                                        E() && _(),
                                        U.set(t, { at: i, run: e }),
                                        (o = setTimeout(_));
                                },
                                E = () => !!U.get(t),
                                m = () => {
                                    var e;
                                    return !!(null != (e = k.get(t)) && e.length);
                                },
                                g = (e) => {
                                    G.set(t, e), a && (clearTimeout(a), (a = null));
                                    var { selection: n } = t;
                                    if (e) {
                                        var r = !n || !d.wA.equals(n.anchor.path, e.anchor.path),
                                            i =
                                                !n ||
                                                !d.wA.equals(n.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
                                        ((r && u) || i) && (u = !1), (r || m()) && (a = setTimeout(_, 200));
                                    }
                                },
                                A = () => {
                                    E() || (o = setTimeout(_));
                                };
                            return {
                                flush: _,
                                scheduleFlush: A,
                                hasPendingDiffs: m,
                                hasPendingAction: E,
                                hasPendingChanges: () => E() || m(),
                                isFlushing: () => i,
                                handleUserSelect: g,
                                handleCompositionEnd: (e) => {
                                    s && clearTimeout(s),
                                        (s = setTimeout(() => {
                                            D.set(t, !1), _();
                                        }, 25));
                                },
                                handleCompositionStart: (e) => {
                                    D.set(t, !0), s && (clearTimeout(s), (s = null));
                                },
                                handleDOMBeforeInput: (e) => {
                                    a && (clearTimeout(a), (a = null));
                                    var { inputType: n } = e,
                                        r = null,
                                        i = e.dataTransfer || e.data || void 0;
                                    !1 !== u && "insertText" !== n && "insertCompositionText" !== n && (u = !1);
                                    var [s] = e.getTargetRanges();
                                    s && (r = eh.toSlateRange(t, s, { exactMatch: !1, suppressThrow: !0 }));
                                    var o = eh.getWindow(t).getSelection();
                                    if (
                                        (!r &&
                                            o &&
                                            ((s = o),
                                            (r = eh.toSlateRange(t, o, { exactMatch: !1, suppressThrow: !0 }))),
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
                                            var E = n.endsWith("Backward") ? "backward" : "forward",
                                                [m, I] = d.Q6.edges(r),
                                                [T, S] = d.KE.leaf(t, m.path),
                                                y = { text: "", start: m.offset, end: I.offset },
                                                N = k.get(t),
                                                v = null == N ? void 0 : N.find((e) => d.wA.equals(e.path, S)),
                                                C = v ? [v.diff, y] : [y];
                                            if ((0 === eK(T.text, ...C).length && (l = !1), d.Q6.isExpanded(r))) {
                                                if (l && d.wA.equals(r.anchor.path, r.focus.path)) {
                                                    var O = { path: r.anchor.path, offset: m.offset };
                                                    return (
                                                        g(d.KE.range(t, O, O)),
                                                        p(r.anchor.path, { text: "", end: I.offset, start: m.offset })
                                                    );
                                                }
                                                return h(() => d.KE.deleteFragment(t, { direction: E }), { at: r });
                                            }
                                        }
                                        switch (n) {
                                            case "deleteByComposition":
                                            case "deleteByCut":
                                            case "deleteByDrag":
                                                return h(() => d.KE.deleteFragment(t), { at: r });
                                            case "deleteContent":
                                            case "deleteContentForward":
                                                var { anchor: R } = r;
                                                if (l && d.Q6.isCollapsed(r)) {
                                                    var b = d.bP.leaf(t, R.path);
                                                    if (R.offset < b.text.length)
                                                        return p(R.path, {
                                                            text: "",
                                                            start: R.offset,
                                                            end: R.offset + 1,
                                                        });
                                                }
                                                return h(() => d.KE.deleteForward(t), { at: r });
                                            case "deleteContentBackward":
                                                var D,
                                                    L,
                                                    { anchor: w } = r,
                                                    M = $(s) ? s.isCollapsed : !!(null != (L = s) && L.collapsed);
                                                if (l && M && d.Q6.isCollapsed(r) && w.offset > 0)
                                                    return p(w.path, { text: "", start: w.offset - 1, end: w.offset });
                                                return h(() => d.KE.deleteBackward(t), { at: r });
                                            case "deleteEntireSoftLine":
                                                return h(
                                                    () => {
                                                        d.KE.deleteBackward(t, { unit: "line" }),
                                                            d.KE.deleteForward(t, { unit: "line" });
                                                    },
                                                    { at: r },
                                                );
                                            case "deleteHardLineBackward":
                                                return h(() => d.KE.deleteBackward(t, { unit: "block" }), { at: r });
                                            case "deleteSoftLineBackward":
                                                return h(() => d.KE.deleteBackward(t, { unit: "line" }), { at: r });
                                            case "deleteHardLineForward":
                                                return h(() => d.KE.deleteForward(t, { unit: "block" }), { at: r });
                                            case "deleteSoftLineForward":
                                                return h(() => d.KE.deleteForward(t, { unit: "line" }), { at: r });
                                            case "deleteWordBackward":
                                                return h(() => d.KE.deleteBackward(t, { unit: "word" }), { at: r });
                                            case "deleteWordForward":
                                                return h(() => d.KE.deleteForward(t, { unit: "word" }), { at: r });
                                            case "insertLineBreak":
                                                return h(() => d.KE.insertSoftBreak(t), { at: r });
                                            case "insertParagraph":
                                                return h(() => d.KE.insertBreak(t), { at: r });
                                            case "insertCompositionText":
                                            case "deleteCompositionText":
                                            case "insertFromComposition":
                                            case "insertFromDrop":
                                            case "insertFromPaste":
                                            case "insertFromYank":
                                            case "insertReplacementText":
                                            case "insertText":
                                                if ((null == i ? void 0 : i.constructor.name) === "DataTransfer")
                                                    return h(() => eh.insertData(t, i), { at: r });
                                                var x = null != i ? i : "";
                                                if (
                                                    (P.get(t) && (x = x.replace("\uFEFF", "")),
                                                    "insertText" === n && /.*\n.*\n$/.test(x) && (x = x.slice(0, -1)),
                                                    x.includes("\n"))
                                                )
                                                    return h(
                                                        () => {
                                                            var e = x.split("\n");
                                                            e.forEach((n, r) => {
                                                                n && d.KE.insertText(t, n),
                                                                    r !== e.length - 1 && d.KE.insertSoftBreak(t);
                                                            });
                                                        },
                                                        { at: r },
                                                    );
                                                if (d.wA.equals(r.anchor.path, r.focus.path)) {
                                                    var [U, G] = d.Q6.edges(r),
                                                        F = { start: U.offset, end: G.offset, text: x };
                                                    if (x && u && "insertCompositionText" === n) {
                                                        var V = u.start + u.text.search(/\S|$/);
                                                        F.start + F.text.search(/\S|$/) === V + 1 &&
                                                        F.end === u.start + u.text.length
                                                            ? ((F.start -= 1), (u = null), A())
                                                            : (u = !1);
                                                    } else
                                                        u =
                                                            "insertText" === n &&
                                                            (null === u
                                                                ? F
                                                                : !!(u && d.Q6.isCollapsed(r)) &&
                                                                  u.end + u.text.length === U.offset &&
                                                                  eJ(eJ({}, u), {}, { text: u.text + x }));
                                                    if (l) return void p(U.path, F);
                                                }
                                                return h(() => d.KE.insertText(t, x), { at: r });
                                        }
                                    }
                                },
                                handleKeyDown: (e) => {
                                    m() || (f(!0), setTimeout(f));
                                },
                                handleDomMutations: (e) => {
                                    if (!(m() || E()) && e.some((n) => J(t, n, e))) {
                                        var n;
                                        null == (n = F.get(t)) || n();
                                    }
                                },
                                handleInput: () => {
                                    (E() || !m()) && _();
                                },
                            };
                        })(
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? e2(Object(n), !0).forEach(function (t) {
                                              h(e, t, n[t]);
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
                        var [r] = (0, u.useState)(() => new MutationObserver(t));
                        eA(() => {
                            r.takeRecords();
                        }),
                            (0, u.useEffect)(() => {
                                if (!e.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
                                return r.observe(e.current, n), () => r.disconnect();
                            }, []);
                    })(n, a.handleDomMutations, e3),
                    M.set(i, a.scheduleFlush),
                    s && a.flush(),
                    a
                );
            })({ node: ee, onDOMSelectionChange: em, scheduleOnDOMSelectionChange: eg });
        eA(() => {
            ee.current && (e = j(ee.current))
                ? (T.set(X, e), S.set(X, ee.current), v.set(X, ee.current), N.set(ee.current, X))
                : v.delete(X);
            var e,
                { selection: t } = X,
                n = eh.findDocumentOrShadowRoot(X).getSelection();
            if (!(!n || !eh.isFocused(X) || (null != eI && eI.hasPendingAction()))) {
                var r = (e) => {
                        var r = "None" !== n.type;
                        if (t || r) {
                            var i = S.get(X),
                                s = !1;
                            if ((i.contains(n.anchorNode) && i.contains(n.focusNode) && (s = !0), r && s && t && !e)) {
                                var a = eh.toSlateRange(X, n, { exactMatch: !0, suppressThrow: !0 });
                                if (a && d.Q6.equals(a, t)) {
                                    if (!eE.hasMarkPlaceholder) return;
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
                            if (t && !eh.hasRange(X, t)) {
                                X.selection = eh.toSlateRange(X, n, { exactMatch: !1, suppressThrow: !0 });
                                return;
                            }
                            eE.isUpdatingSelection = !0;
                            var u = t && eh.toDOMRange(X, t);
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
                                      w(X, u))
                                    : n.removeAllRanges(),
                                u
                            );
                        }
                    },
                    i = r(),
                    s = (null == eI ? void 0 : eI.isFlushing()) === "action";
                if (!er || !s)
                    return void setTimeout(() => {
                        i && ei && eh.toDOMNode(X, X).focus(), (eE.isUpdatingSelection = !1);
                    });
                var a = null,
                    o = requestAnimationFrame(() => {
                        if (s) {
                            var e = (e) => {
                                try {
                                    eh.toDOMNode(X, X).focus(), r(e);
                                } catch (e) {}
                            };
                            e(),
                                (a = setTimeout(() => {
                                    e(!0), (eE.isUpdatingSelection = !1);
                                }));
                        }
                    });
                return () => {
                    cancelAnimationFrame(o), a && clearTimeout(a);
                };
            }
        });
        var eT = (0, u.useCallback)(
                (e) => {
                    if ((ea(), !A && eh.hasEditableTarget(X, e.target) && !ti(e, m))) {
                        if (eI) return eI.handleDOMBeforeInput(e);
                        eg.flush(), em.flush();
                        var { selection: t } = X,
                            { inputType: n } = e,
                            r = e.dataTransfer || e.data || void 0,
                            i = "insertCompositionText" === n || "deleteCompositionText" === n;
                        if (!(i && eh.isComposing(X))) {
                            var s = !1;
                            if (
                                "insertText" === n &&
                                t &&
                                d.Q6.isCollapsed(t) &&
                                e.data &&
                                1 === e.data.length &&
                                /[a-z ]/i.test(e.data) &&
                                0 !== t.anchor.offset
                            ) {
                                (s = !0), X.marks && (s = !1);
                                var { anchor: a } = t,
                                    [o, l] = eh.toDOMPoint(X, a),
                                    u = null == (f = o.parentElement) ? void 0 : f.closest("a"),
                                    c = eh.getWindow(X);
                                if (s && u && eh.hasDOMNode(X, u)) {
                                    var _,
                                        f,
                                        p,
                                        h,
                                        E =
                                            null == c
                                                ? void 0
                                                : c.document.createTreeWalker(u, NodeFilter.SHOW_TEXT).lastChild();
                                    E === o && (null == (h = E.textContent) ? void 0 : h.length) === l && (s = !1);
                                }
                                if (
                                    s &&
                                    o.parentElement &&
                                    (null == c || null == (p = c.getComputedStyle(o.parentElement))
                                        ? void 0
                                        : p.whiteSpace) === "pre"
                                ) {
                                    var g = d.KE.above(X, {
                                        at: a.path,
                                        match: (e) => d.Hg.isElement(e) && d.KE.isBlock(X, e),
                                    });
                                    g && d.bP.string(g[0]).includes("	") && (s = !1);
                                }
                            }
                            if (!n.startsWith("delete") || n.startsWith("deleteBy")) {
                                var [I] = e.getTargetRanges();
                                if (I) {
                                    var T = eh.toSlateRange(X, I, { exactMatch: !1, suppressThrow: !1 });
                                    if (!t || !d.Q6.equals(t, T)) {
                                        s = !1;
                                        var S = !i && X.selection && d.KE.rangeRef(X, X.selection);
                                        d.gB.select(X, T), S && L.set(X, S);
                                    }
                                }
                            }
                            if (!i) {
                                if ((s || e.preventDefault(), t && d.Q6.isExpanded(t) && n.startsWith("delete"))) {
                                    var y = n.endsWith("Backward") ? "backward" : "forward";
                                    d.KE.deleteFragment(X, { direction: y });
                                    return;
                                }
                                switch (n) {
                                    case "deleteByComposition":
                                    case "deleteByCut":
                                    case "deleteByDrag":
                                        d.KE.deleteFragment(X);
                                        break;
                                    case "deleteContent":
                                    case "deleteContentForward":
                                        d.KE.deleteForward(X);
                                        break;
                                    case "deleteContentBackward":
                                        d.KE.deleteBackward(X);
                                        break;
                                    case "deleteEntireSoftLine":
                                        d.KE.deleteBackward(X, { unit: "line" }),
                                            d.KE.deleteForward(X, { unit: "line" });
                                        break;
                                    case "deleteHardLineBackward":
                                        d.KE.deleteBackward(X, { unit: "block" });
                                        break;
                                    case "deleteSoftLineBackward":
                                        d.KE.deleteBackward(X, { unit: "line" });
                                        break;
                                    case "deleteHardLineForward":
                                        d.KE.deleteForward(X, { unit: "block" });
                                        break;
                                    case "deleteSoftLineForward":
                                        d.KE.deleteForward(X, { unit: "line" });
                                        break;
                                    case "deleteWordBackward":
                                        d.KE.deleteBackward(X, { unit: "word" });
                                        break;
                                    case "deleteWordForward":
                                        d.KE.deleteForward(X, { unit: "word" });
                                        break;
                                    case "insertLineBreak":
                                        d.KE.insertSoftBreak(X);
                                        break;
                                    case "insertParagraph":
                                        d.KE.insertBreak(X);
                                        break;
                                    case "insertFromComposition":
                                    case "insertFromDrop":
                                    case "insertFromPaste":
                                    case "insertFromYank":
                                    case "insertReplacementText":
                                    case "insertText":
                                        "insertFromComposition" === n && eh.isComposing(X) && (Z(!1), D.set(X, !1)),
                                            (null == r ? void 0 : r.constructor.name) === "DataTransfer"
                                                ? eh.insertData(X, r)
                                                : "string" == typeof r &&
                                                  (s
                                                      ? en.current.push(() => d.KE.insertText(X, r))
                                                      : d.KE.insertText(X, r));
                                }
                                var N = null == (_ = L.get(X)) ? void 0 : _.unref();
                                L.delete(X), !N || (X.selection && d.Q6.equals(X.selection, N)) || d.gB.select(X, N);
                            }
                        }
                    }
                },
                [A, m],
            ),
            eS = (0, u.useCallback)(
                (e) => {
                    null == e
                        ? (em.cancel(),
                          eg.cancel(),
                          S.delete(X),
                          v.delete(X),
                          ee.current && ep && ee.current.removeEventListener("beforeinput", eT))
                        : ep && e.addEventListener("beforeinput", eT),
                        (ee.current = e);
                },
                [ee, eT, em, eg],
            );
        eA(() => {
            var e = eh.getWindow(X);
            return (
                e.document.addEventListener("selectionchange", eg),
                () => {
                    e.document.removeEventListener("selectionchange", eg);
                }
            );
        }, [eg]);
        var ey = p([X, []]);
        if (g && 1 === X.children.length && 1 === Array.from(d.bP.texts(X)).length && "" === d.bP.string(X) && !Q) {
            var eN = d.KE.start(X, []);
            ey.push({ [V]: !0, placeholder: g, anchor: eN, focus: eN });
        }
        var { marks: eC } = X;
        if (((eE.hasMarkPlaceholder = !1), X.selection && d.Q6.isCollapsed(X.selection) && eC)) {
            var { anchor: eO } = X.selection,
                eR = d.bP.leaf(X, eO.path),
                eb = E(eR, e4);
            if (!d.EY.equals(eR, eC, { loose: !0 })) {
                eE.hasMarkPlaceholder = !0;
                var eD = Object.fromEntries(Object.keys(eb).map((e) => [e, null]));
                ey.push(e5(e5(e5({ [B]: !0 }, eD), eC), {}, { anchor: eO, focus: eO }));
            }
        }
        (0, u.useEffect)(() => {
            setTimeout(() => {
                var { selection: e } = X;
                if (e) {
                    var { anchor: t } = e,
                        n = d.bP.leaf(X, t.path);
                    if (eC && !d.EY.equals(n, eC, { loose: !0 })) return void P.set(X, eC);
                }
                P.delete(X);
            });
        });
        var ew = null == (o = y.get(X)) || null == (c = o.getBoundingClientRect()) ? void 0 : c.height;
        return u.createElement(
            ex.Provider,
            { value: A },
            u.createElement(
                eL.Provider,
                { value: p },
                u.createElement(
                    eW,
                    { node: ee, receivedUserInput: el },
                    u.createElement(
                        Y,
                        Object.assign({ role: A ? void 0 : "textbox", "aria-multiline": !A || void 0 }, q, {
                            spellCheck: (!!ep || !ef) && q.spellCheck,
                            autoCorrect: ep || !ef ? q.autoCorrect : "false",
                            autoCapitalize: ep || !ef ? q.autoCapitalize : "false",
                            "data-slate-editor": !0,
                            "data-slate-node": "value",
                            contentEditable: !A,
                            zindex: -1,
                            suppressContentEditableWarning: !0,
                            ref: eS,
                            style: e5(
                                e5(
                                    {},
                                    z
                                        ? {}
                                        : e5(
                                              {
                                                  position: "relative",
                                                  outline: "none",
                                                  whiteSpace: "pre-wrap",
                                                  wordWrap: "break-word",
                                              },
                                              ew ? { minHeight: ew } : {},
                                          ),
                                ),
                                H,
                            ),
                            onBeforeInput: (0, u.useCallback)(
                                (e) => {
                                    if (
                                        !ep &&
                                        !A &&
                                        !tr(e, q.onBeforeInput) &&
                                        eh.hasSelectableTarget(X, e.target) &&
                                        (e.preventDefault(), !eh.isComposing(X))
                                    ) {
                                        var t = e.data;
                                        d.KE.insertText(X, t);
                                    }
                                },
                                [A],
                            ),
                            onInput: (0, u.useCallback)((e) => {
                                if (!tr(e, q.onInput)) {
                                    if (eI) return void eI.handleInput();
                                    for (var t of en.current) t();
                                    en.current = [];
                                }
                            }, []),
                            onBlur: (0, u.useCallback)(
                                (e) => {
                                    if (
                                        A ||
                                        eE.isUpdatingSelection ||
                                        !eh.hasSelectableTarget(X, e.target) ||
                                        tr(e, q.onBlur)
                                    )
                                        return;
                                    var t = eh.findDocumentOrShadowRoot(X);
                                    if (eE.latestElement !== t.activeElement) {
                                        var { relatedTarget: n } = e;
                                        if (
                                            n !== eh.toDOMNode(X, X) &&
                                            !(W(n) && n.hasAttribute("data-slate-spacer"))
                                        ) {
                                            if (null != n && K(n) && eh.hasDOMNode(X, n)) {
                                                var r = eh.toSlateNode(X, n);
                                                if (d.Hg.isElement(r) && !X.isVoid(r)) return;
                                            }
                                            if (es) {
                                                var i = t.getSelection();
                                                null == i || i.removeAllRanges();
                                            }
                                            b.delete(X);
                                        }
                                    }
                                },
                                [A, q.onBlur],
                            ),
                            onClick: (0, u.useCallback)(
                                (e) => {
                                    if (eh.hasTarget(X, e.target) && !tr(e, q.onClick) && K(e.target)) {
                                        var t = eh.toSlateNode(X, e.target),
                                            n = eh.findPath(X, t);
                                        if (d.KE.hasPath(X, n) && d.bP.get(X, n) === t) {
                                            if (3 === e.detail && n.length >= 1) {
                                                var r = n;
                                                if (!(d.Hg.isElement(t) && d.KE.isBlock(X, t))) {
                                                    var i,
                                                        s = d.KE.above(X, {
                                                            match: (e) => d.Hg.isElement(e) && d.KE.isBlock(X, e),
                                                            at: n,
                                                        });
                                                    r = null != (i = null == s ? void 0 : s[1]) ? i : n.slice(0, 1);
                                                }
                                                var a = d.KE.range(X, r);
                                                d.gB.select(X, a);
                                                return;
                                            }
                                            if (!A) {
                                                var o = d.KE.start(X, n),
                                                    l = d.KE.end(X, n),
                                                    u = d.KE.void(X, { at: o }),
                                                    c = d.KE.void(X, { at: l });
                                                if (u && c && d.wA.equals(u[1], c[1])) {
                                                    var _ = d.KE.range(X, o);
                                                    d.gB.select(X, _);
                                                }
                                            }
                                        }
                                    }
                                },
                                [A, q.onClick],
                            ),
                            onCompositionEnd: (0, u.useCallback)(
                                (e) => {
                                    if (
                                        eh.hasSelectableTarget(X, e.target) &&
                                        (eh.isComposing(X) && (Z(!1), D.set(X, !1)),
                                        null == eI || eI.handleCompositionEnd(e),
                                        !tr(e, q.onCompositionEnd) && !er && !es && !ec && !et && !e_ && !ed) &&
                                        e.data
                                    ) {
                                        var t = P.get(X);
                                        P.delete(X),
                                            void 0 !== t && (x.set(X, X.marks), (X.marks = t)),
                                            d.KE.insertText(X, e.data);
                                        var n = x.get(X);
                                        x.delete(X), void 0 !== n && (X.marks = n);
                                    }
                                },
                                [q.onCompositionEnd],
                            ),
                            onCompositionUpdate: (0, u.useCallback)(
                                (e) => {
                                    !eh.hasSelectableTarget(X, e.target) ||
                                        tr(e, q.onCompositionUpdate) ||
                                        eh.isComposing(X) ||
                                        (Z(!0), D.set(X, !0));
                                },
                                [q.onCompositionUpdate],
                            ),
                            onCompositionStart: (0, u.useCallback)(
                                (e) => {
                                    if (
                                        eh.hasSelectableTarget(X, e.target) &&
                                        (null == eI || eI.handleCompositionStart(e),
                                        !tr(e, q.onCompositionStart) && !er)
                                    ) {
                                        Z(!0);
                                        var { selection: t } = X;
                                        if (t) {
                                            if (d.Q6.isExpanded(t)) return void d.KE.deleteFragment(X);
                                            var n = d.KE.above(X, {
                                                match: (e) => d.Hg.isElement(e) && d.KE.isInline(X, e),
                                                mode: "highest",
                                            });
                                            if (n) {
                                                var [, r] = n;
                                                if (d.KE.isEnd(X, t.anchor, r)) {
                                                    var i = d.KE.after(X, r);
                                                    d.gB.setSelection(X, { anchor: i, focus: i });
                                                }
                                            }
                                        }
                                    }
                                },
                                [q.onCompositionStart],
                            ),
                            onCopy: (0, u.useCallback)(
                                (e) => {
                                    eh.hasSelectableTarget(X, e.target) &&
                                        !tr(e, q.onCopy) &&
                                        (e.preventDefault(), eh.setFragmentData(X, e.clipboardData, "copy"));
                                },
                                [q.onCopy],
                            ),
                            onCut: (0, u.useCallback)(
                                (e) => {
                                    if (!A && eh.hasSelectableTarget(X, e.target) && !tr(e, q.onCut)) {
                                        e.preventDefault(), eh.setFragmentData(X, e.clipboardData, "cut");
                                        var { selection: t } = X;
                                        if (t)
                                            if (d.Q6.isExpanded(t)) d.KE.deleteFragment(X);
                                            else {
                                                var n = d.bP.parent(X, t.anchor.path);
                                                d.KE.isVoid(X, n) && d.gB.delete(X);
                                            }
                                    }
                                },
                                [A, q.onCut],
                            ),
                            onDragOver: (0, u.useCallback)(
                                (e) => {
                                    if (eh.hasTarget(X, e.target) && !tr(e, q.onDragOver)) {
                                        var t = eh.toSlateNode(X, e.target);
                                        d.Hg.isElement(t) && d.KE.isVoid(X, t) && e.preventDefault();
                                    }
                                },
                                [q.onDragOver],
                            ),
                            onDragStart: (0, u.useCallback)(
                                (e) => {
                                    if (!A && eh.hasTarget(X, e.target) && !tr(e, q.onDragStart)) {
                                        var t = eh.toSlateNode(X, e.target),
                                            n = eh.findPath(X, t);
                                        if (
                                            (d.Hg.isElement(t) && d.KE.isVoid(X, t)) ||
                                            d.KE.void(X, { at: n, voids: !0 })
                                        ) {
                                            var r = d.KE.range(X, n);
                                            d.gB.select(X, r);
                                        }
                                        (eE.isDraggingInternally = !0), eh.setFragmentData(X, e.dataTransfer, "drag");
                                    }
                                },
                                [A, q.onDragStart],
                            ),
                            onDrop: (0, u.useCallback)(
                                (e) => {
                                    if (!A && eh.hasTarget(X, e.target) && !tr(e, q.onDrop)) {
                                        e.preventDefault();
                                        var t = X.selection,
                                            n = eh.findEventRange(X, e),
                                            r = e.dataTransfer;
                                        d.gB.select(X, n),
                                            eE.isDraggingInternally &&
                                                t &&
                                                !d.Q6.equals(t, n) &&
                                                !d.KE.void(X, { at: n, voids: !0 }) &&
                                                d.gB.delete(X, { at: t }),
                                            eh.insertData(X, r),
                                            eh.isFocused(X) || eh.focus(X);
                                    }
                                    eE.isDraggingInternally = !1;
                                },
                                [A, q.onDrop],
                            ),
                            onDragEnd: (0, u.useCallback)(
                                (e) => {
                                    !A &&
                                        eE.isDraggingInternally &&
                                        q.onDragEnd &&
                                        eh.hasTarget(X, e.target) &&
                                        q.onDragEnd(e),
                                        (eE.isDraggingInternally = !1);
                                },
                                [A, q.onDragEnd],
                            ),
                            onFocus: (0, u.useCallback)(
                                (e) => {
                                    if (
                                        !A &&
                                        !eE.isUpdatingSelection &&
                                        eh.hasEditableTarget(X, e.target) &&
                                        !tr(e, q.onFocus)
                                    ) {
                                        var t = eh.toDOMNode(X, X);
                                        if (
                                            ((eE.latestElement = eh.findDocumentOrShadowRoot(X).activeElement),
                                            ei && e.target !== t)
                                        )
                                            return void t.focus();
                                        b.set(X, !0);
                                    }
                                },
                                [A, q.onFocus],
                            ),
                            onKeyDown: (0, u.useCallback)(
                                (e) => {
                                    if (!A && eh.hasEditableTarget(X, e.target)) {
                                        null == eI || eI.handleKeyDown(e);
                                        var { nativeEvent: t } = e;
                                        if (
                                            (eh.isComposing(X) && !1 === t.isComposing && (D.set(X, !1), Z(!1)),
                                            !(tr(e, q.onKeyDown) || eh.isComposing(X)))
                                        ) {
                                            var { selection: n } = X,
                                                r = X.children[null !== n ? n.focus.path[0] : 0],
                                                s = "rtl" === i()(d.bP.string(r));
                                            if (eH.isRedo(t)) {
                                                e.preventDefault(), "function" == typeof X.redo && X.redo();
                                                return;
                                            }
                                            if (eH.isUndo(t)) {
                                                e.preventDefault(), "function" == typeof X.undo && X.undo();
                                                return;
                                            }
                                            if (eH.isMoveLineBackward(t)) {
                                                e.preventDefault(), d.gB.move(X, { unit: "line", reverse: !0 });
                                                return;
                                            }
                                            if (eH.isMoveLineForward(t)) {
                                                e.preventDefault(), d.gB.move(X, { unit: "line" });
                                                return;
                                            }
                                            if (eH.isExtendLineBackward(t)) {
                                                e.preventDefault(),
                                                    d.gB.move(X, { unit: "line", edge: "focus", reverse: !0 });
                                                return;
                                            }
                                            if (eH.isExtendLineForward(t)) {
                                                e.preventDefault(), d.gB.move(X, { unit: "line", edge: "focus" });
                                                return;
                                            }
                                            if (eH.isMoveBackward(t)) {
                                                e.preventDefault(),
                                                    n && d.Q6.isCollapsed(n)
                                                        ? d.gB.move(X, { reverse: !s })
                                                        : d.gB.collapse(X, { edge: "start" });
                                                return;
                                            }
                                            if (eH.isMoveForward(t)) {
                                                e.preventDefault(),
                                                    n && d.Q6.isCollapsed(n)
                                                        ? d.gB.move(X, { reverse: s })
                                                        : d.gB.collapse(X, { edge: "end" });
                                                return;
                                            }
                                            if (eH.isMoveWordBackward(t)) {
                                                e.preventDefault(),
                                                    n && d.Q6.isExpanded(n) && d.gB.collapse(X, { edge: "focus" }),
                                                    d.gB.move(X, { unit: "word", reverse: !s });
                                                return;
                                            }
                                            if (eH.isMoveWordForward(t)) {
                                                e.preventDefault(),
                                                    n && d.Q6.isExpanded(n) && d.gB.collapse(X, { edge: "focus" }),
                                                    d.gB.move(X, { unit: "word", reverse: s });
                                                return;
                                            }
                                            if (ep) {
                                                if (
                                                    (eo || es) &&
                                                    n &&
                                                    (eH.isDeleteBackward(t) || eH.isDeleteForward(t)) &&
                                                    d.Q6.isCollapsed(n)
                                                ) {
                                                    var a = d.bP.parent(X, n.anchor.path);
                                                    if (
                                                        d.Hg.isElement(a) &&
                                                        d.KE.isVoid(X, a) &&
                                                        (d.KE.isInline(X, a) || d.KE.isBlock(X, a))
                                                    ) {
                                                        e.preventDefault(), d.KE.deleteBackward(X, { unit: "block" });
                                                        return;
                                                    }
                                                }
                                            } else {
                                                if (eH.isBold(t) || eH.isItalic(t) || eH.isTransposeCharacter(t))
                                                    return void e.preventDefault();
                                                if (eH.isSoftBreak(t)) {
                                                    e.preventDefault(), d.KE.insertSoftBreak(X);
                                                    return;
                                                }
                                                if (eH.isSplitBlock(t)) {
                                                    e.preventDefault(), d.KE.insertBreak(X);
                                                    return;
                                                }
                                                if (eH.isDeleteBackward(t)) {
                                                    e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(X, { direction: "backward" })
                                                            : d.KE.deleteBackward(X);
                                                    return;
                                                }
                                                if (eH.isDeleteForward(t)) {
                                                    e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(X, { direction: "forward" })
                                                            : d.KE.deleteForward(X);
                                                    return;
                                                }
                                                if (eH.isDeleteLineBackward(t)) {
                                                    e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(X, { direction: "backward" })
                                                            : d.KE.deleteBackward(X, { unit: "line" });
                                                    return;
                                                }
                                                if (eH.isDeleteLineForward(t)) {
                                                    e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(X, { direction: "forward" })
                                                            : d.KE.deleteForward(X, { unit: "line" });
                                                    return;
                                                }
                                                if (eH.isDeleteWordBackward(t)) {
                                                    e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(X, { direction: "backward" })
                                                            : d.KE.deleteBackward(X, { unit: "word" });
                                                    return;
                                                }
                                                if (eH.isDeleteWordForward(t)) {
                                                    e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(X, { direction: "forward" })
                                                            : d.KE.deleteForward(X, { unit: "word" });
                                                    return;
                                                }
                                            }
                                        }
                                    }
                                },
                                [A, q.onKeyDown],
                            ),
                            onPaste: (0, u.useCallback)(
                                (e) => {
                                    let t;
                                    !A &&
                                        eh.hasEditableTarget(X, e.target) &&
                                        !tr(e, q.onPaste) &&
                                        (!ep ||
                                            ((t = e.nativeEvent).clipboardData &&
                                                "" !== t.clipboardData.getData("text/plain") &&
                                                1 === t.clipboardData.types.length) ||
                                            es) &&
                                        (e.preventDefault(), eh.insertData(X, e.clipboardData));
                                },
                                [A, q.onPaste],
                            ),
                        }),
                        u.createElement(e8, {
                            decorations: ey,
                            node: X,
                            renderElement: I,
                            renderPlaceholder: O,
                            renderLeaf: C,
                            selection: X.selection,
                        }),
                    ),
                ),
            ),
        );
    },
    te = (e) => {
        var { attributes: t, children: n } = e;
        return u.createElement("span", Object.assign({}, t), n, er && u.createElement("br", null));
    },
    tt = () => [],
    tn = (e, t) => {
        if (t.getBoundingClientRect && (!e.selection || (e.selection && d.Q6.isCollapsed(e.selection)))) {
            var n = t.startContainer.parentElement;
            (n.getBoundingClientRect = t.getBoundingClientRect.bind(t)),
                (0, c.A)(n, { scrollMode: "if-needed" }),
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
    ts = (0, u.createContext)(!1),
    ta = () => (0, u.useContext)(ts),
    to = (0, u.createContext)({}),
    tl = ["editor", "children", "onChange", "value"],
    tu = (e) => {
        var t,
            n,
            r,
            { editor: i, children: s, onChange: a, value: o } = e,
            l = E(e, tl),
            c = (0, u.useRef)(!1),
            [_, f] = u.useState(() => {
                if (!d.bP.isNodeList(o))
                    throw Error(
                        "[Slate] value is invalid! Expected a list of elements but got: ".concat(d.h6.stringify(o)),
                    );
                if (!d.KE.isEditor(i)) throw Error("[Slate] editor is invalid! You passed: ".concat(d.h6.stringify(i)));
                return (i.children = o), Object.assign(i, l), { v: 0, editor: i };
            }),
            { selectorContext: p, onChange: h } =
                ((t = (0, u.useRef)([]).current),
                (n = (0, u.useRef)({ editor: i }).current),
                (r = (0, u.useCallback)((e) => {
                    (n.editor = e), t.forEach((t) => t(e));
                }, [])),
                {
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
                }),
            m = (0, u.useCallback)(() => {
                a && a(i.children), f((e) => ({ v: e.v + 1, editor: i })), h(i);
            }, [a]);
        (0, u.useEffect)(
            () => (
                w.set(i, m),
                () => {
                    w.set(i, () => {}), (c.current = !0);
                }
            ),
            [m],
        );
        var [g, A] = (0, u.useState)(eh.isFocused(i));
        return (
            (0, u.useEffect)(() => {
                A(eh.isFocused(i));
            }),
            eA(() => {
                var e = () => A(eh.isFocused(i));
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
            u.createElement(
                to.Provider,
                { value: p },
                u.createElement(
                    eU.Provider,
                    { value: _ },
                    u.createElement(eN.Provider, { value: _.editor }, u.createElement(ts.Provider, { value: g }, s)),
                ),
            )
        );
    },
    tc = (e, t) => {
        var n = (t.top + t.bottom) / 2;
        return e.top <= n && e.bottom >= n;
    },
    td = (e, t, n) => {
        var r = eh.toDOMRange(e, t).getBoundingClientRect(),
            i = eh.toDOMRange(e, n).getBoundingClientRect();
        return tc(r, i) && tc(i, r);
    };
function t_(e, t) {
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
function tf(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? t_(Object(n), !0).forEach(function (t) {
                  h(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : t_(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var tp = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x-slate-fragment",
            { apply: n, onChange: r, deleteBackward: i, addMark: s, removeMark: a } = e;
        return (
            O.set(e, new WeakMap()),
            (e.addMark = (t, n) => {
                var r, i;
                null == (r = M.get(e)) || r(),
                    !P.get(e) && null != (i = k.get(e)) && i.length && P.set(e, null),
                    x.delete(e),
                    s(t, n);
            }),
            (e.removeMark = (t) => {
                var n;
                !P.get(e) && null != (n = k.get(e)) && n.length && P.set(e, null), x.delete(e), a(t);
            }),
            (e.deleteBackward = (t) => {
                if ("line" !== t) return i(t);
                if (e.selection && d.Q6.isCollapsed(e.selection)) {
                    var n = d.KE.above(e, { match: (t) => d.Hg.isElement(t) && d.KE.isBlock(e, t), at: e.selection });
                    if (n) {
                        var [, r] = n,
                            s = d.KE.range(e, r, e.selection.anchor),
                            a = ((e, t) => {
                                var n = d.KE.range(e, d.Q6.end(t)),
                                    r = Array.from(d.KE.positions(e, { at: t })),
                                    i = 0,
                                    s = r.length,
                                    a = Math.floor(s / 2);
                                if (td(e, d.KE.range(e, r[i]), n)) return d.KE.range(e, r[i], n);
                                if (r.length < 2) return d.KE.range(e, r[r.length - 1], n);
                                for (; a !== r.length && a !== i; )
                                    td(e, d.KE.range(e, r[a]), n) ? (s = a) : (i = a), (a = Math.floor((i + s) / 2));
                                return d.KE.range(e, r[s], n);
                            })(e, s);
                        d.Q6.isCollapsed(a) || d.gB.delete(e, { at: a });
                    }
                }
            }),
            (e.apply = (t) => {
                var r,
                    i = [],
                    s = k.get(e);
                if (null != s && s.length) {
                    var a = s
                        .map((e) =>
                            (function (e, t) {
                                var { path: n, diff: r, id: i } = e;
                                switch (t.type) {
                                    case "insert_text":
                                        if (!d.wA.equals(t.path, n) || t.offset >= r.end) return e;
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
                                        if (!d.wA.equals(t.path, n) || t.offset >= r.end) return e;
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
                                        if (!d.wA.equals(t.path, n) || t.position >= r.end)
                                            return {
                                                diff: r,
                                                id: i,
                                                path: d.wA.transform(n, t, { affinity: "backward" }),
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
                                            path: d.wA.transform(n, t, { affinity: "forward" }),
                                        };
                                    case "merge_node":
                                        if (!d.wA.equals(t.path, n))
                                            return { diff: r, id: i, path: d.wA.transform(n, t) };
                                        return {
                                            diff: {
                                                start: r.start + t.position,
                                                end: r.end + t.position,
                                                text: r.text,
                                            },
                                            id: i,
                                            path: d.wA.transform(n, t),
                                        };
                                }
                                var s = d.wA.transform(n, t);
                                return s ? { diff: r, path: s, id: i } : null;
                            })(e, t),
                        )
                        .filter(Boolean);
                    k.set(e, a);
                }
                var o = G.get(e);
                o && G.set(e, eQ(e, o, t));
                var l = U.get(e);
                if (null != l && l.at) {
                    var u = d.bR.isPoint(null == l ? void 0 : l.at) ? eX(e, l.at, t) : eQ(e, l.at, t);
                    U.set(e, u ? tf(tf({}, l), {}, { at: u }) : null);
                }
                switch (t.type) {
                    case "insert_text":
                    case "remove_text":
                    case "set_node":
                    case "split_node":
                        i.push(...th(e, t.path));
                        break;
                    case "set_selection":
                        null == (r = L.get(e)) || r.unref(), L.delete(e);
                        break;
                    case "insert_node":
                    case "remove_node":
                        i.push(...th(e, d.wA.parent(t.path)));
                        break;
                    case "merge_node":
                        i.push(...th(e, d.wA.previous(t.path)));
                        break;
                    case "move_node":
                        i.push(...th(e, d.wA.common(d.wA.parent(t.path), d.wA.parent(t.newPath))));
                }
                for (var [c, _] of (n(t), i)) {
                    var [f] = d.KE.node(e, c);
                    C.set(f, _);
                }
            }),
            (e.setFragmentData = (n) => {
                var { selection: r } = e;
                if (r) {
                    var [i, s] = d.Q6.edges(r),
                        a = d.KE.void(e, { at: i.path }),
                        o = d.KE.void(e, { at: s.path });
                    if (!d.Q6.isCollapsed(r) || a) {
                        var l = eh.toDOMRange(e, r),
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
                                p = eh.toDOMNode(e, _);
                            f.setEndAfter(p), (u = f.cloneContents());
                        }
                        if (
                            (a && (c = u.querySelector("[data-slate-spacer]")),
                            Array.from(u.querySelectorAll("[data-slate-zero-width]")).forEach((e) => {
                                var t = "n" === e.getAttribute("data-slate-zero-width");
                                e.textContent = t ? "\n" : "";
                            }),
                            z(c))
                        ) {
                            var h = c.ownerDocument.createElement("span");
                            (h.style.whiteSpace = "pre"), h.appendChild(c), u.appendChild(h), (c = h);
                        }
                        var E = JSON.stringify(e.getFragment()),
                            m = window.btoa(encodeURIComponent(E));
                        c.setAttribute("data-slate-fragment", m), n.setData("application/".concat(t), m);
                        var g = u.ownerDocument.createElement("div");
                        return (
                            g.appendChild(u),
                            g.setAttribute("hidden", "true"),
                            u.ownerDocument.body.appendChild(g),
                            n.setData("text/html", g.innerHTML),
                            n.setData("text/plain", Q(g)),
                            u.ownerDocument.body.removeChild(g),
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
                        var [, t] = e.getData("text/html").match(Z) || [];
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
                    for (var s of r) i && d.gB.splitNodes(e, { always: !0 }), e.insertText(s), (i = !0);
                    return !0;
                }
                return !1;
            }),
            (e.onChange = (t) => {
                p.unstable_batchedUpdates(() => {
                    var n = w.get(e);
                    n && n(), r(t);
                });
            }),
            e
        );
    },
    th = (e, t) => {
        var n = [];
        for (var [r, i] of d.KE.levels(e, { at: t })) {
            var s = eh.findKey(e, r);
            n.push([i, s]);
        }
        return n;
    };
