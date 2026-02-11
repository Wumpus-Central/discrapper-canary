"use strict";
n.d(t, { A: () => tH, Fo: () => tD, RV: () => eP, f7: () => eK, o$: () => tq, rL: () => eT, zL: () => tU });
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
    h = n(340287);
function p(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
var A = 0;
class I {
    constructor() {
        this.id = "".concat(A++);
    }
}
var T = new WeakMap(),
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
    F = new WeakMap(),
    V = new WeakMap(),
    B = new WeakMap(),
    j = Symbol("placeholder"),
    H = Symbol("mark-placeholder"),
    Y = globalThis.Text,
    W = (e) => (e && e.ownerDocument && e.ownerDocument.defaultView) || null,
    K = (e) => z(e) && 8 === e.nodeType,
    $ = (e) => z(e) && 1 === e.nodeType,
    z = (e) => {
        var t = W(e);
        return !!t && e instanceof t.Node;
    },
    q = (e) => {
        var t = e && e.anchorNode && W(e.anchorNode);
        return !!t && e instanceof t.Selection;
    },
    X = (e) => z(e) && 3 === e.nodeType,
    Z = (e) => e.clipboardData && "" !== e.clipboardData.getData("text/plain") && 1 === e.clipboardData.types.length,
    Q = (e) => {
        var [t, n] = e;
        if ($(t) && t.childNodes.length) {
            var r = n === t.childNodes.length,
                i = r ? n - 1 : n;
            for ([t, i] = ee(t, i, r ? "backward" : "forward"), r = i < n; $(t) && t.childNodes.length; ) {
                var a = r ? t.childNodes.length - 1 : 0;
                t = et(t, a, r ? "backward" : "forward");
            }
            n = r && null != t.textContent ? t.textContent.length : 0;
        }
        return [t, n];
    },
    J = (e) => {
        for (var t = e && e.parentNode; t; ) {
            if ("[object ShadowRoot]" === t.toString()) return !0;
            t = t.parentNode;
        }
        return !1;
    },
    ee = (e, t, n) => {
        for (
            var { childNodes: r } = e, i = r[t], a = t, s = !1, o = !1;
            (K(i) || ($(i) && 0 === i.childNodes.length) || ($(i) && "false" === i.getAttribute("contenteditable"))) &&
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
    et = (e, t, n) => {
        var [r] = ee(e, t, n);
        return r;
    },
    en = (e) => {
        var t = "";
        if (X(e) && e.nodeValue) return e.nodeValue;
        if ($(e)) {
            for (var n of Array.from(e.childNodes)) t += en(n);
            var r = getComputedStyle(e).getPropertyValue("display");
            ("block" === r || "list" === r || "BR" === e.tagName) && (t += "\n");
        }
        return t;
    },
    er = /data-slate-fragment="(.+?)"/m,
    ei = (e) => {
        var [, t] = e.getData("text/html").match(er) || [];
        return t;
    },
    ea = (e, t, n) => {
        var { target: r } = t;
        if ($(r) && r.matches('[contentEditable="false"]')) return !1;
        var { document: i } = eT.getWindow(e);
        if (i.contains(r)) return eT.hasDOMNode(e, r, { editable: !0 });
        var a = n.find((e) => {
            var { addedNodes: t, removedNodes: n } = e;
            for (var i of t) if (i === r || i.contains(r)) return !0;
            for (var a of n) if (a === r || a.contains(r)) return !0;
        });
        return !!a && a !== t && ea(e, a, n);
    },
    es = parseInt(u.version.split(".")[0], 10) >= 17,
    eo =
        "u" > typeof navigator &&
        "u" > typeof window &&
        /iPad|iPhone|iPod/.test(navigator.userAgent) &&
        !window.MSStream,
    el = "u" > typeof navigator && /Mac OS X/.test(navigator.userAgent),
    eu = "u" > typeof navigator && /Android/.test(navigator.userAgent),
    ec = "u" > typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
    ed = "u" > typeof navigator && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
    e_ = "u" > typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
    ef = "u" > typeof navigator && /Chrome/i.test(navigator.userAgent),
    eh = "u" > typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
    ep = eu && "u" > typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
    em =
        "u" > typeof navigator &&
        /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
    eg = "u" > typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
    eE = "u" > typeof navigator && /.*Wechat/.test(navigator.userAgent),
    eA = "u" > typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
    eI =
        (!eh || !ep) &&
        !e_ &&
        "u" > typeof globalThis &&
        globalThis.InputEvent &&
        "function" == typeof globalThis.InputEvent.prototype.getTargetRanges,
    eT = {
        isComposing: (e) => !!w.get(e),
        getWindow(e) {
            var t = S.get(e);
            if (!t) throw Error("Unable to find a host window element for this editor");
            return t;
        },
        findKey(e, t) {
            var n = R.get(t);
            return n || ((n = new I()), R.set(t, n)), n;
        },
        findPath(e, t) {
            for (var n = [], r = t; ; ) {
                var i = y.get(r);
                if (null == i)
                    if (d.KE.isEditor(r)) return n;
                    else break;
                var a = T.get(r);
                if (null == a) break;
                n.unshift(a), (r = i);
            }
            throw Error("Unable to find the path for Slate node: ".concat(d.h6.stringify(t)));
        },
        findDocumentOrShadowRoot(e) {
            var t = eT.toDOMNode(e, e),
                n = t.getRootNode();
            return (n instanceof Document || n instanceof ShadowRoot) && null != n.getSelection ? n : t.ownerDocument;
        },
        isFocused: (e) => !!L.get(e),
        isReadOnly: (e) => !!D.get(e),
        blur(e) {
            var t = eT.toDOMNode(e, e),
                n = eT.findDocumentOrShadowRoot(e);
            L.set(e, !1), n.activeElement === t && t.blur();
        },
        focus(e) {
            var t = eT.toDOMNode(e, e),
                n = eT.findDocumentOrShadowRoot(e);
            L.set(e, !0), n.activeElement !== t && t.focus({ preventScroll: !0 });
        },
        deselect(e) {
            var { selection: t } = e,
                n = eT.findDocumentOrShadowRoot(e).getSelection();
            n && n.rangeCount > 0 && n.removeAllRanges(), t && d.gB.deselect(e);
        },
        hasDOMNode(e, t) {
            var n,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { editable: i = !1 } = r,
                a = eT.toDOMNode(e, e);
            try {
                n = $(t) ? t : t.parentElement;
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
            var n = O.get(e),
                r = d.KE.isEditor(t) ? v.get(e) : null == n ? void 0 : n.get(eT.findKey(e, t));
            if (!r) throw Error("Cannot resolve a DOM node from Slate node: ".concat(d.h6.stringify(t)));
            return r;
        },
        toDOMPoint(e, t) {
            var [n] = d.KE.node(e, t.path),
                r = eT.toDOMNode(e, n);
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
                        h = s + f,
                        p = a[o + 1];
                    if (t.offset === h && null != p && p.hasAttribute("data-slate-mark-placeholder")) {
                        var g,
                            E,
                            A = p.childNodes[0];
                        g = [A instanceof Y ? A : p, null != (E = p.textContent) && E.startsWith("\uFEFF") ? 1 : 0];
                        break;
                    }
                    if (t.offset <= h) {
                        g = [u, Math.min(c, Math.max(0, t.offset - s))];
                        break;
                    }
                    s = h;
                }
            }
            if (!g) throw Error("Cannot resolve a DOM point from Slate point: ".concat(d.h6.stringify(t)));
            return g;
        },
        toDOMRange(e, t) {
            var { anchor: n, focus: r } = t,
                i = d.Q6.isBackward(t),
                a = eT.toDOMPoint(e, n),
                s = d.Q6.isCollapsed(t) ? a : eT.toDOMPoint(e, r),
                o = eT.getWindow(e).document.createRange(),
                [l, u] = i ? s : a,
                [c, _] = i ? a : s,
                f = !!($(l) ? l : l.parentElement).getAttribute("data-slate-zero-width"),
                h = !!($(c) ? c : c.parentElement).getAttribute("data-slate-zero-width");
            return o.setStart(l, f ? 1 : u), o.setEnd(c, h ? 1 : _), o;
        },
        toSlateNode(e, t) {
            var n = $(t) ? t : t.parentElement;
            n && !n.hasAttribute("data-slate-node") && (n = n.closest("[data-slate-node]"));
            var r = n ? b.get(n) : null;
            if (!r) throw Error("Cannot resolve a Slate node from DOM node: ".concat(n));
            return r;
        },
        findEventRange(e, t) {
            "nativeEvent" in t && (t = t.nativeEvent);
            var n,
                { clientX: r, clientY: i, target: a } = t;
            if (null == r || null == i) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
            var s = eT.toSlateNode(e, t.target),
                o = eT.findPath(e, s);
            if (d.Hg.isElement(s) && d.KE.isVoid(e, s)) {
                var l = a.getBoundingClientRect(),
                    u = e.isInline(s) ? r - l.left < l.left + l.width - r : i - l.top < l.top + l.height - i,
                    c = d.KE.point(e, o, { edge: u ? "start" : "end" }),
                    _ = u ? d.KE.before(e, c) : d.KE.after(e, c);
                if (_) return d.KE.range(e, _);
            }
            var { document: f } = eT.getWindow(e);
            if (f.caretRangeFromPoint) n = f.caretRangeFromPoint(r, i);
            else {
                var h = f.caretPositionFromPoint(r, i);
                h && ((n = f.createRange()).setStart(h.offsetNode, h.offset), n.setEnd(h.offsetNode, h.offset));
            }
            if (!n) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
            return eT.toSlateRange(e, n, { exactMatch: !1, suppressThrow: !1 });
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
                    f = eT.toDOMNode(e, e),
                    h = o.closest('[data-slate-void="true"]'),
                    p = h && f.contains(h) ? h : null,
                    g = o.closest("[data-slate-leaf]"),
                    E = null;
                if (g) {
                    if ((l = g.closest('[data-slate-node="text"]'))) {
                        var A = eT.getWindow(e).document.createRange();
                        A.setStart(l, 0), A.setEnd(a, s);
                        var I = A.cloneContents();
                        [
                            ...Array.prototype.slice.call(I.querySelectorAll("[data-slate-zero-width]")),
                            ...Array.prototype.slice.call(I.querySelectorAll("[contenteditable=false]")),
                        ].forEach((e) => {
                            if (
                                eu &&
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
                            (u = I.textContent.length),
                            (E = l);
                    }
                } else if (p) {
                    for (var T = p.querySelectorAll("[data-slate-leaf]"), y = 0; y < T.length; y++) {
                        var S = T[y];
                        if (eT.hasDOMNode(e, S)) {
                            g = S;
                            break;
                        }
                    }
                    g
                        ? ((l = g.closest('[data-slate-node="text"]')),
                          (u = (E = g).textContent.length),
                          E.querySelectorAll("[data-slate-zero-width]").forEach((e) => {
                              u -= e.textContent.length;
                          }))
                        : (u = 1);
                }
                E &&
                    u === E.textContent.length &&
                    eu &&
                    "z" === E.getAttribute("data-slate-zero-width") &&
                    null != (c = E.textContent) &&
                    c.startsWith("\uFEFF") &&
                    (o.hasAttribute("data-slate-zero-width") ||
                        (ec && null != (_ = E.textContent) && _.endsWith("\n\n"))) &&
                    u--;
            }
            if (eu && !l && !r) {
                var v = o.hasAttribute("data-slate-node") ? o : o.closest("[data-slate-node]");
                if (v && eT.hasDOMNode(e, v, { editable: !0 })) {
                    var C = eT.toSlateNode(e, v),
                        { path: b, offset: N } = d.KE.start(e, eT.findPath(e, C));
                    return v.querySelector("[data-slate-leaf]") || (N = s), { path: b, offset: N };
                }
            }
            if (!l) {
                if (i) return null;
                throw Error("Cannot resolve a Slate point from DOM point: ".concat(t));
            }
            var R = eT.toSlateNode(e, l);
            return { path: eT.findPath(e, R), offset: u };
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
                ((q(t) ? t.anchorNode : t.startContainer) &&
                    (q(t)
                        ? ((r = t.anchorNode),
                          (i = t.anchorOffset),
                          (a = t.focusNode),
                          (s = t.focusOffset),
                          (o =
                              ef && J(r)
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
            var _ = eT.toSlatePoint(e, [r, i], { exactMatch: u, suppressThrow: c });
            if (!_) return null;
            var f = o ? _ : eT.toSlatePoint(e, [a, s], { exactMatch: u, suppressThrow: c });
            if (!f) return null;
            if (ec && !o && r !== a) {
                var h = d.KE.isEnd(e, _, _.path),
                    p = d.KE.isStart(e, f, f.path);
                h && (_ = d.KE.after(e, _) || _), p && (f = d.KE.before(e, f) || f);
            }
            var g = { anchor: _, focus: f };
            return (
                d.Q6.isExpanded(g) &&
                    d.Q6.isForward(g) &&
                    $(a) &&
                    d.KE.void(e, { at: g.focus, mode: "highest" }) &&
                    (g = d.KE.unhangRange(e, g, { voids: !0 })),
                g
            );
        },
        hasRange(e, t) {
            var { anchor: n, focus: r } = t;
            return d.KE.hasPath(e, n.path) && d.KE.hasPath(e, r.path);
        },
        hasTarget: (e, t) => z(t) && eT.hasDOMNode(e, t),
        hasEditableTarget: (e, t) => z(t) && eT.hasDOMNode(e, t, { editable: !0 }),
        hasSelectableTarget: (e, t) => eT.hasEditableTarget(e, t) || eT.isTargetInsideNonReadonlyVoid(e, t),
        isTargetInsideNonReadonlyVoid(e, t) {
            if (D.get(e)) return !1;
            var n = eT.hasTarget(e, t) && eT.toSlateNode(e, t);
            return d.Hg.isElement(n) && d.KE.isVoid(e, n);
        },
        androidScheduleFlush(e) {
            var t;
            null == (t = M.get(e)) || t();
        },
        androidPendingDiffs: (e) => G.get(e),
    },
    ey = ["anchor", "focus"],
    eS = ["anchor", "focus"],
    ev = (e, t) =>
        Object.keys(e).length === Object.keys(t).length &&
        Object.keys(e).every((n) => t.hasOwnProperty(n) && e[n] === t[n]),
    eC = (e, t) => {
        var n = E(e, ey),
            r = E(t, eS);
        return e[j] === t[j] && ev(n, r);
    },
    eb = (e, t) => {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                i = t[n];
            if (!d.Q6.equals(r, i) || !eC(r, i)) return !1;
        }
        return !0;
    },
    eN = (e, t) => {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                i = t[n];
            if (r.anchor.offset !== i.anchor.offset || r.focus.offset !== i.focus.offset || !eC(r, i)) return !1;
        }
        return !0;
    },
    eR = eA ? u.useLayoutEffect : u.useEffect,
    eO = (e) => {
        var { isLast: t, leaf: n, parent: r, text: i } = e,
            a = eP(),
            s = eT.findPath(a, i),
            o = d.wA.parent(s),
            l = !0 === n[H];
        return a.isVoid(r)
            ? u.createElement(ew, { length: d.bP.string(r).length })
            : "" !== n.text || r.children[r.children.length - 1] !== i || a.isInline(r) || "" !== d.KE.string(a, o)
              ? "" === n.text
                  ? u.createElement(ew, { isMarkPlaceholder: l })
                  : t && "\n" === n.text.slice(-1)
                    ? u.createElement(eD, { isTrailing: !0, text: n.text })
                    : u.createElement(eD, { text: n.text })
              : u.createElement(ew, { isLineBreak: !0, isMarkPlaceholder: l });
    },
    eD = (e) => {
        var { text: t, isTrailing: n = !1 } = e,
            r = (0, u.useRef)(null),
            i = () => "".concat(null != t ? t : "").concat(n ? "\n" : ""),
            [a] = (0, u.useState)(i);
        return (
            eR(() => {
                var e = i();
                r.current && r.current.textContent !== e && (r.current.textContent = e);
            }),
            u.createElement(eL, { ref: r }, a)
        );
    },
    eL = (0, u.memo)(
        (0, u.forwardRef)((e, t) => u.createElement("span", { "data-slate-string": !0, ref: t }, e.children)),
    ),
    ew = (e) => {
        var { length: t = 0, isLineBreak: n = !1, isMarkPlaceholder: r = !1 } = e,
            i = { "data-slate-zero-width": n ? "n" : "z", "data-slate-length": t };
        return (
            r && (i["data-slate-mark-placeholder"] = !0),
            u.createElement(
                "span",
                Object.assign({}, i),
                eu && n ? null : "\uFEFF",
                n ? u.createElement("br", null) : null,
            )
        );
    },
    ex = (0, u.createContext)(null),
    eP = () => {
        var e = (0, u.useContext)(ex);
        if (!e) throw Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
        return e;
    },
    eM = (e) => {
        var {
                leaf: t,
                isLast: n,
                text: r,
                parent: i,
                renderPlaceholder: a,
                renderLeaf: s = (e) => u.createElement(eU, Object.assign({}, e)),
            } = e,
            o = (0, u.useRef)(null),
            l = (0, u.useRef)(null),
            c = eP(),
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
                    (e ? C.set(c, e) : C.delete(c),
                    d.current
                        ? (d.current.disconnect(), e && d.current.observe(e))
                        : e &&
                          ((d.current = new (window.ResizeObserver || _.tb)(() => {
                              var e = B.get(c);
                              null == e || e();
                          })),
                          d.current.observe(e)),
                    !e && o.current)
                ) {
                    var t = B.get(c);
                    null == t || t();
                }
                return (
                    (o.current = l.current),
                    () => {
                        C.delete(c);
                    }
                );
            }, [l, t]);
        var f = u.createElement(eO, { isLast: n, leaf: t, parent: i, text: r });
        if (t[j]) {
            var h = {
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
            f = u.createElement(u.Fragment, null, a(h), f);
        }
        return s({ attributes: { "data-slate-leaf": !0 }, children: f, leaf: t, text: r });
    },
    ek = u.memo(
        eM,
        (e, t) =>
            t.parent === e.parent &&
            t.isLast === e.isLast &&
            t.renderLeaf === e.renderLeaf &&
            t.renderPlaceholder === e.renderPlaceholder &&
            t.text === e.text &&
            d.EY.equals(t.leaf, e.leaf) &&
            t.leaf[j] === e.leaf[j],
    ),
    eU = (e) => {
        var { attributes: t, children: n } = e;
        return u.createElement("span", Object.assign({}, t), n);
    },
    eG = (e) => {
        for (
            var { decorations: t, isLast: n, parent: r, renderPlaceholder: i, renderLeaf: a, text: s } = e,
                o = eP(),
                l = (0, u.useRef)(null),
                c = d.EY.decorations(s, t),
                _ = eT.findKey(o, s),
                f = [],
                h = 0;
            h < c.length;
            h++
        ) {
            var p = c[h];
            f.push(
                u.createElement(ek, {
                    isLast: n && h === c.length - 1,
                    key: "".concat(_.id, "-").concat(h),
                    renderPlaceholder: i,
                    leaf: p,
                    text: s,
                    parent: r,
                    renderLeaf: a,
                }),
            );
        }
        var g = (0, u.useCallback)(
            (e) => {
                var t = O.get(o);
                e
                    ? (null == t || t.set(_, e), N.set(s, e), b.set(e, s))
                    : (null == t || t.delete(_), N.delete(s), l.current && b.delete(l.current)),
                    (l.current = e);
            },
            [l, o, _, s],
        );
        return u.createElement("span", { "data-slate-node": "text", ref: g }, f);
    },
    eF = u.memo(
        eG,
        (e, t) =>
            t.parent === e.parent &&
            t.isLast === e.isLast &&
            t.renderLeaf === e.renderLeaf &&
            t.renderPlaceholder === e.renderPlaceholder &&
            t.text === e.text &&
            eN(t.decorations, e.decorations),
    ),
    eV = (e) => {
        var {
                decorations: t,
                element: n,
                renderElement: r = (e) => u.createElement(ej, Object.assign({}, e)),
                renderPlaceholder: a,
                renderLeaf: s,
                selection: o,
            } = e,
            l = eP(),
            c = eq(),
            _ = l.isInline(n),
            f = eT.findKey(l, n),
            h = (0, u.useCallback)(
                (e) => {
                    var t = O.get(l);
                    e ? (null == t || t.set(f, e), N.set(n, e), b.set(e, n)) : (null == t || t.delete(f), N.delete(n));
                },
                [l, f, n],
            ),
            p = e$({ decorations: t, node: n, renderElement: r, renderPlaceholder: a, renderLeaf: s, selection: o }),
            g = { "data-slate-node": "element", ref: h };
        if ((_ && (g["data-slate-inline"] = !0), !_ && d.KE.hasInlines(l, n))) {
            var E = d.bP.string(n),
                A = i()(E);
            "rtl" === A && (g.dir = A);
        }
        if (d.KE.isVoid(l, n)) {
            (g["data-slate-void"] = !0), !c && _ && (g.contentEditable = !1);
            var I = _ ? "span" : "div",
                [[S]] = d.bP.texts(n);
            (p = u.createElement(
                I,
                {
                    "data-slate-spacer": !0,
                    style: { height: "0", color: "transparent", outline: "none", position: "absolute" },
                },
                u.createElement(eF, { renderPlaceholder: a, decorations: [], isLast: !1, parent: n, text: S }),
            )),
                T.set(S, 0),
                y.set(S, n);
        }
        return r({ attributes: g, children: p, element: n, decorations: t });
    },
    eB = u.memo(
        eV,
        (e, t) =>
            e.element === t.element &&
            e.renderElement === t.renderElement &&
            e.renderLeaf === t.renderLeaf &&
            e.renderPlaceholder === t.renderPlaceholder &&
            eb(e.decorations, t.decorations) &&
            (e.selection === t.selection || (!!e.selection && !!t.selection && d.Q6.equals(e.selection, t.selection))),
    ),
    ej = (e) => {
        var { attributes: t, children: n, element: r } = e,
            i = eP().isInline(r) ? "span" : "div";
        return u.createElement(i, Object.assign({}, t, { style: { position: "relative" } }), n);
    },
    eH = (0, u.createContext)(() => []),
    eY = () => (0, u.useContext)(eH),
    eW = (0, u.createContext)(!1),
    eK = () => (0, u.useContext)(eW),
    e$ = (e) => {
        for (
            var { decorations: t, node: n, renderElement: r, renderPlaceholder: i, renderLeaf: a, selection: s } = e,
                o = eY(),
                l = eP(),
                c = eT.findPath(l, n),
                _ = [],
                f = d.Hg.isElement(n) && !l.isInline(n) && d.KE.hasInlines(l, n),
                h = 0;
            h < n.children.length;
            h++
        ) {
            var p = c.concat(h),
                g = n.children[h],
                E = eT.findKey(l, g),
                A = d.KE.range(l, p),
                I = s && d.Q6.intersection(A, s),
                S = o([g, p]);
            for (var v of t) {
                var C = d.Q6.intersection(v, A);
                C && S.push(C);
            }
            d.Hg.isElement(g)
                ? _.push(
                      u.createElement(
                          eW.Provider,
                          { key: "provider-".concat(E.id), value: !!I },
                          u.createElement(eB, {
                              decorations: S,
                              element: g,
                              key: E.id,
                              renderElement: r,
                              renderPlaceholder: i,
                              renderLeaf: a,
                              selection: I,
                          }),
                      ),
                  )
                : _.push(
                      u.createElement(eF, {
                          decorations: S,
                          key: E.id,
                          isLast: f && h === n.children.length - 1,
                          parent: n,
                          renderPlaceholder: i,
                          renderLeaf: a,
                          text: g,
                      }),
                  ),
                T.set(g, h),
                y.set(g, n);
        }
        return _;
    },
    ez = (0, u.createContext)(!1),
    eq = () => (0, u.useContext)(ez),
    eX = (0, u.createContext)(null),
    eZ = () => {
        var e = (0, u.useContext)(eX);
        if (!e) throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
        var { editor: t } = e;
        return t;
    },
    eQ = 3,
    eJ = {
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
    e0 = {
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
    e1 = {
        deleteWordBackward: "ctrl+shift?+backspace",
        deleteWordForward: "ctrl+shift?+delete",
        redo: ["ctrl+y", "ctrl+shift+z"],
    },
    e2 = (e) => {
        var t = eJ[e],
            n = e0[e],
            r = e1[e],
            i = t && (0, f.isKeyHotkey)(t),
            a = n && (0, f.isKeyHotkey)(n),
            s = r && (0, f.isKeyHotkey)(r);
        return (e) => !!((i && i(e)) || (el && a && a(e)) || (!el && s && s(e)));
    },
    e3 = {
        isBold: e2("bold"),
        isCompose: e2("compose"),
        isMoveBackward: e2("moveBackward"),
        isMoveForward: e2("moveForward"),
        isDeleteBackward: e2("deleteBackward"),
        isDeleteForward: e2("deleteForward"),
        isDeleteLineBackward: e2("deleteLineBackward"),
        isDeleteLineForward: e2("deleteLineForward"),
        isDeleteWordBackward: e2("deleteWordBackward"),
        isDeleteWordForward: e2("deleteWordForward"),
        isExtendBackward: e2("extendBackward"),
        isExtendForward: e2("extendForward"),
        isExtendLineBackward: e2("extendLineBackward"),
        isExtendLineForward: e2("extendLineForward"),
        isItalic: e2("italic"),
        isMoveLineBackward: e2("moveLineBackward"),
        isMoveLineForward: e2("moveLineForward"),
        isMoveWordBackward: e2("moveWordBackward"),
        isMoveWordForward: e2("moveWordForward"),
        isRedo: e2("redo"),
        isSoftBreak: e2("insertSoftBreak"),
        isSplitBlock: e2("splitBlock"),
        isTransposeCharacter: e2("transposeCharacter"),
        isUndo: e2("undo"),
    },
    e6 = (e, t) => {
        var n = [],
            r = () => {
                n = [];
            };
        return {
            registerMutations: (r) => {
                if (t.current) {
                    var i = r.filter((t) => ea(e, t, r));
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
    e4 = { subtree: !0, childList: !0, characterData: !0, characterDataOldValue: !0 };
class e5 extends u.Component {
    constructor() {
        super(...arguments), (this.context = null), (this.manager = null), (this.mutationObserver = null);
    }
    observe() {
        var e,
            { node: t } = this.props;
        if (!t.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
        null == (e = this.mutationObserver) || e.observe(t.current, e4);
    }
    componentDidMount() {
        var { receivedUserInput: e } = this.props,
            t = this.context;
        (this.manager = e6(t, e)),
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
e5.contextType = ex;
var e7 = eu
    ? e5
    : (e) => {
          var { children: t } = e;
          return u.createElement(u.Fragment, null, t);
      };
function e8(e, t) {
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
function e9(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return n.reduce((e, t) => e.slice(0, t.start) + t.text + e.slice(t.end), e);
}
function te(e, t) {
    for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) if (e.charAt(r) !== t.charAt(r)) return r;
    return n;
}
function tt(e, t, n) {
    for (var r = Math.min(e.length, t.length, n), i = 0; i < r; i++)
        if (e.charAt(e.length - i - 1) !== t.charAt(t.length - i - 1)) return i;
    return r;
}
function tn(e, t) {
    var { start: n, end: r, text: i } = t,
        a = e.slice(n, r),
        s = te(a, i),
        o = Math.min(a.length - s, i.length - s),
        l = tt(a, i, o),
        u = { start: n + s, end: r - l, text: i.slice(s, i.length - l) };
    return u.start === u.end && 0 === u.text.length ? null : u;
}
function tr(e, t, n) {
    var r = Math.min(t.start, n.start),
        i = Math.max(0, Math.min(t.start + t.text.length, n.end) - n.start),
        a = e9(e, t, n),
        s = Math.max(
            n.start + n.text.length,
            t.start + t.text.length + (t.start + t.text.length > n.start ? n.text.length : 0) - i,
        ),
        o = a.slice(r, s);
    return tn(e, { start: r, end: Math.max(t.end, n.end - t.text.length + (t.end - t.start)), text: o });
}
function ti(e) {
    var { path: t, diff: n } = e;
    return { anchor: { path: t, offset: n.start }, focus: { path: t, offset: n.end } };
}
function ta(e, t) {
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
function ts(e, t) {
    var n = ta(e, t.anchor);
    if (!n) return null;
    if (d.Q6.isCollapsed(t)) return { anchor: n, focus: n };
    var r = ta(e, t.focus);
    return r ? { anchor: n, focus: r } : null;
}
function to(e, t, n) {
    var r = G.get(e),
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
function tl(e, t, n) {
    var r = to(e, t.anchor, n);
    if (!r) return null;
    if (d.Q6.isCollapsed(t)) return { anchor: r, focus: r };
    var i = to(e, t.focus, n);
    return i ? { anchor: r, focus: i } : null;
}
function tu(e, t) {
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
function tc(e, t) {
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
function td(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tc(Object(n), !0).forEach(function (t) {
                  p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tc(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var t_ = 25,
    tf = 200,
    th = function () {},
    tp = (e) => (null == e ? void 0 : e.constructor.name) === "DataTransfer";
function tm(e) {
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
                    r = ts(t, e);
                !r || (n && d.Q6.equals(r, n)) || d.gB.select(t, r);
            }
        },
        _ = () => {
            var e = F.get(t);
            if ((F.delete(t), e)) {
                if (e.at) {
                    var n = d.bR.isPoint(e.at) ? ta(t, e.at) : ts(t, e.at);
                    if (!n) return;
                    var r = d.KE.range(t, n);
                    (t.selection && d.Q6.equals(t.selection, r)) || d.gB.select(t, n);
                }
                e.run();
            }
        },
        f = () => {
            if ((s && (clearTimeout(s), (s = null)), o && (clearTimeout(o), (o = null)), !T() && !I())) return void c();
            i || ((i = !0), setTimeout(() => (i = !1))), I() && (i = "action");
            var e = t.selection && d.KE.rangeRef(t, t.selection, { affinity: "forward" });
            U.set(t, t.marks), th("flush", F.get(t), G.get(t));
            for (var a = T(); (l = null == (f = G.get(t)) ? void 0 : f[0]); ) {
                var l,
                    f,
                    h,
                    p = k.get(t);
                void 0 !== p && (k.delete(t), (t.marks = p)), p && !1 === u && (u = null);
                var g = ti(l);
                (t.selection && d.Q6.equals(t.selection, g)) || d.gB.select(t, g),
                    l.diff.text ? d.KE.insertText(t, l.diff.text) : d.KE.deleteFragment(t),
                    G.set(
                        t,
                        null == (h = G.get(t))
                            ? void 0
                            : h.filter((e) => {
                                  var { id: t } = e;
                                  return t !== l.id;
                              }),
                    ),
                    e8(t, l) ||
                        ((a = !1),
                        F.delete(t),
                        U.delete(t),
                        (i = "action"),
                        V.delete(t),
                        n.cancel(),
                        r.cancel(),
                        null == e || e.unref());
            }
            var E = null == e ? void 0 : e.unref();
            if ((!E || V.get(t) || (t.selection && d.Q6.equals(E, t.selection)) || d.gB.select(t, E), I()))
                return void _();
            a && n(), n.flush(), r.flush(), c();
            var A = U.get(t);
            U.delete(t), void 0 !== A && ((t.marks = A), t.onChange());
        },
        h = (e) => {
            a && clearTimeout(a),
                (a = setTimeout(() => {
                    w.set(t, !1), f();
                }, t_));
        },
        p = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                n = C.get(t);
            if (n) {
                if (T() || e) {
                    n.style.display = "none";
                    return;
                }
                n.style.removeProperty("display");
            }
        },
        g = (e, n) => {
            var r,
                i = null != (r = G.get(t)) ? r : [];
            G.set(t, i);
            var a = d.bP.leaf(t, e),
                s = i.findIndex((t) => d.wA.equals(t.path, e));
            if (s < 0) {
                tn(a.text, n) && i.push({ path: e, diff: n, id: l++ }), p();
                return;
            }
            var o = tr(a.text, i[s].diff, n);
            if (!o) {
                i.splice(s, 1), p();
                return;
            }
            i[s] = td(td({}, i[s]), {}, { diff: o });
        },
        E = function (e) {
            var { at: i } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (u = !1), V.delete(t), n.cancel(), r.cancel(), I() && f(), F.set(t, { at: i, run: e }), (o = setTimeout(f));
        },
        A = (e) => {
            s && (clearTimeout(s), (s = null));
            var { inputType: n } = e,
                r = null,
                i = e.dataTransfer || e.data || void 0;
            !1 !== u && "insertText" !== n && "insertCompositionText" !== n && (u = !1);
            var [a] = e.getTargetRanges();
            a && (r = eT.toSlateRange(t, a, { exactMatch: !1, suppressThrow: !0 }));
            var o = eT.getWindow(t).getSelection();
            if (
                (!r && o && ((a = o), (r = eT.toSlateRange(t, o, { exactMatch: !1, suppressThrow: !0 }))),
                (r = null != (L = r) ? L : t.selection))
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
                    var h = n.endsWith("Backward") ? "backward" : "forward",
                        [p, A] = d.Q6.edges(r),
                        [I, T] = d.KE.leaf(t, p.path),
                        y = { text: "", start: p.offset, end: A.offset },
                        v = G.get(t),
                        C = null == v ? void 0 : v.find((e) => d.wA.equals(e.path, T)),
                        b = C ? [C.diff, y] : [y];
                    if ((0 === e9(I.text, ...b).length && (l = !1), d.Q6.isExpanded(r))) {
                        if (l && d.wA.equals(r.anchor.path, r.focus.path)) {
                            var R = { path: r.anchor.path, offset: p.offset };
                            return (
                                S(d.KE.range(t, R, R)), g(r.anchor.path, { text: "", end: A.offset, start: p.offset })
                            );
                        }
                        return E(() => d.KE.deleteFragment(t, { direction: h }), { at: r });
                    }
                }
                switch (n) {
                    case "deleteByComposition":
                    case "deleteByCut":
                    case "deleteByDrag":
                        return E(() => d.KE.deleteFragment(t), { at: r });
                    case "deleteContent":
                    case "deleteContentForward":
                        var { anchor: O } = r;
                        if (l && d.Q6.isCollapsed(r)) {
                            var D = d.bP.leaf(t, O.path);
                            if (O.offset < D.text.length)
                                return g(O.path, { text: "", start: O.offset, end: O.offset + 1 });
                        }
                        return E(() => d.KE.deleteForward(t), { at: r });
                    case "deleteContentBackward":
                        var L,
                            w,
                            { anchor: x } = r,
                            P = q(a) ? a.isCollapsed : !!(null != (w = a) && w.collapsed);
                        if (l && P && d.Q6.isCollapsed(r) && x.offset > 0)
                            return g(x.path, { text: "", start: x.offset - 1, end: x.offset });
                        return E(() => d.KE.deleteBackward(t), { at: r });
                    case "deleteEntireSoftLine":
                        return E(
                            () => {
                                d.KE.deleteBackward(t, { unit: "line" }), d.KE.deleteForward(t, { unit: "line" });
                            },
                            { at: r },
                        );
                    case "deleteHardLineBackward":
                        return E(() => d.KE.deleteBackward(t, { unit: "block" }), { at: r });
                    case "deleteSoftLineBackward":
                        return E(() => d.KE.deleteBackward(t, { unit: "line" }), { at: r });
                    case "deleteHardLineForward":
                        return E(() => d.KE.deleteForward(t, { unit: "block" }), { at: r });
                    case "deleteSoftLineForward":
                        return E(() => d.KE.deleteForward(t, { unit: "line" }), { at: r });
                    case "deleteWordBackward":
                        return E(() => d.KE.deleteBackward(t, { unit: "word" }), { at: r });
                    case "deleteWordForward":
                        return E(() => d.KE.deleteForward(t, { unit: "word" }), { at: r });
                    case "insertLineBreak":
                        return E(() => d.KE.insertSoftBreak(t), { at: r });
                    case "insertParagraph":
                        return E(() => d.KE.insertBreak(t), { at: r });
                    case "insertCompositionText":
                    case "deleteCompositionText":
                    case "insertFromComposition":
                    case "insertFromDrop":
                    case "insertFromPaste":
                    case "insertFromYank":
                    case "insertReplacementText":
                    case "insertText":
                        if (tp(i)) return E(() => eT.insertData(t, i), { at: r });
                        var M = null != i ? i : "";
                        if (
                            (k.get(t) && (M = M.replace("\uFEFF", "")),
                            "insertText" === n && /.*\n.*\n$/.test(M) && (M = M.slice(0, -1)),
                            M.includes("\n"))
                        )
                            return E(
                                () => {
                                    var e = M.split("\n");
                                    e.forEach((n, r) => {
                                        n && d.KE.insertText(t, n), r !== e.length - 1 && d.KE.insertSoftBreak(t);
                                    });
                                },
                                { at: r },
                            );
                        if (d.wA.equals(r.anchor.path, r.focus.path)) {
                            var [U, F] = d.Q6.edges(r),
                                V = { start: U.offset, end: F.offset, text: M };
                            if (M && u && "insertCompositionText" === n) {
                                var B = u.start + u.text.search(/\S|$/);
                                V.start + V.text.search(/\S|$/) === B + 1 && V.end === u.start + u.text.length
                                    ? ((V.start -= 1), (u = null), N())
                                    : (u = !1);
                            } else
                                u =
                                    "insertText" === n &&
                                    (null === u
                                        ? V
                                        : !!(u && d.Q6.isCollapsed(r)) &&
                                          u.end + u.text.length === U.offset &&
                                          td(td({}, u), {}, { text: u.text + M }));
                            if (l) return void g(U.path, V);
                        }
                        return E(() => d.KE.insertText(t, M), { at: r });
                }
            }
        },
        I = () => !!F.get(t),
        T = () => {
            var e;
            return !!(null != (e = G.get(t)) && e.length);
        },
        y = () => I() || T(),
        S = (e) => {
            V.set(t, e), s && (clearTimeout(s), (s = null));
            var { selection: n } = t;
            if (e) {
                var r = !n || !d.wA.equals(n.anchor.path, e.anchor.path),
                    i = !n || !d.wA.equals(n.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
                ((r && u) || i) && (u = !1), (r || T()) && (s = setTimeout(f, tf));
            }
        },
        v = () => {
            (I() || !T()) && f();
        },
        b = (e) => {
            T() || (p(!0), setTimeout(p));
        },
        N = () => {
            I() || (o = setTimeout(f));
        },
        R = (e) => {
            if (!(T() || I()) && e.some((n) => ea(t, n, e))) {
                var n;
                null == (n = B.get(t)) || n();
            }
        };
    return {
        flush: f,
        scheduleFlush: N,
        hasPendingDiffs: T,
        hasPendingAction: I,
        hasPendingChanges: y,
        isFlushing: () => i,
        handleUserSelect: S,
        handleCompositionEnd: h,
        handleCompositionStart: (e) => {
            w.set(t, !0), a && (clearTimeout(a), (a = null));
        },
        handleDOMBeforeInput: A,
        handleKeyDown: b,
        handleDomMutations: R,
        handleInput: v,
    };
}
function tg() {
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
function tE(e, t, n) {
    var [r] = (0, u.useState)(() => new MutationObserver(t));
    eR(() => {
        r.takeRecords();
    }),
        (0, u.useEffect)(() => {
            if (!e.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
            return r.observe(e.current, n), () => r.disconnect();
        }, []);
}
var tA = ["node"];
function tI(e, t) {
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
function tT(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tI(Object(n), !0).forEach(function (t) {
                  p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tI(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var ty = { subtree: !0, childList: !0, characterData: !0 };
function tS(e) {
    var { node: t } = e,
        n = E(e, tA);
    if (!eu) return null;
    var r = eP(),
        i = tg(),
        [a] = (0, u.useState)(() => tm(tT({ editor: r }, n)));
    return tE(t, a.handleDomMutations, ty), M.set(r, a.scheduleFlush), i && a.flush(), a;
}
function tv() {
    var e = eP(),
        t = (0, u.useRef)(!1),
        n = (0, u.useRef)(0),
        r = (0, u.useCallback)(() => {
            if (!t.current) {
                t.current = !0;
                var r = eT.getWindow(e);
                r.cancelAnimationFrame(n.current),
                    (n.current = r.requestAnimationFrame(() => {
                        t.current = !1;
                    }));
            }
        }, []);
    return (0, u.useEffect)(() => () => cancelAnimationFrame(n.current), []), { receivedUserInput: t, onUserInput: r };
}
var tC = [
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
    tb = ["text"];
function tN(e, t) {
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
function tR(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tN(Object(n), !0).forEach(function (t) {
                  p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tN(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var tO = (e) => u.createElement(u.Fragment, null, e$(e)),
    tD = (e) => {
        var t,
            n,
            r = (0, u.useCallback)((e) => u.createElement(tL, Object.assign({}, e)), []),
            {
                autoFocus: a,
                decorate: o = tw,
                onDOMBeforeInput: c,
                placeholder: _,
                readOnly: f = !1,
                renderElement: h,
                renderLeaf: p,
                renderPlaceholder: g = r,
                scrollSelectionIntoView: A = tx,
                style: I = {},
                as: T = "div",
                disableDefaultStyles: y = !1,
            } = e,
            R = E(e, tC),
            O = eZ(),
            [P, M] = (0, u.useState)(!1),
            G = (0, u.useRef)(null),
            F = (0, u.useRef)([]),
            { onUserInput: V, receivedUserInput: Y } = tv(),
            [, K] = (0, u.useReducer)((e) => e + 1, 0);
        B.set(O, K), D.set(O, f);
        var q = (0, u.useMemo)(
            () => ({ isDraggingInternally: !1, isUpdatingSelection: !1, latestElement: null, hasMarkPlaceholder: !1 }),
            [],
        );
        (0, u.useLayoutEffect)(
            () => () => {
                null == q || (null != q.latestElement && (q.latestElement.remove(), (q.latestElement = null)));
            },
            [],
        ),
            (0, u.useEffect)(() => {
                G.current && a && G.current.focus();
            }, [a]);
        var X = (0, u.useCallback)(
                l()(() => {
                    if (
                        (eu || !eT.isComposing(O)) &&
                        (!q.isUpdatingSelection || (null != J && J.isFlushing())) &&
                        !q.isDraggingInternally
                    ) {
                        var e = eT.findDocumentOrShadowRoot(O),
                            { activeElement: t } = e,
                            n = eT.toDOMNode(O, O),
                            r = e.getSelection();
                        if ((t === n ? ((q.latestElement = t), L.set(O, !0)) : L.delete(O), !r))
                            return d.gB.deselect(O);
                        var { anchorNode: i, focusNode: a } = r,
                            s = eT.hasEditableTarget(O, i) || eT.isTargetInsideNonReadonlyVoid(O, i),
                            o = eT.hasEditableTarget(O, a) || eT.isTargetInsideNonReadonlyVoid(O, a);
                        if (s && o) {
                            var l = eT.toSlateRange(O, r, { exactMatch: !1, suppressThrow: !0 });
                            l &&
                                (eT.isComposing(O) ||
                                (null != J && J.hasPendingChanges()) ||
                                (null != J && J.isFlushing())
                                    ? null == J || J.handleUserSelect(l)
                                    : d.gB.select(O, l));
                        }
                        !f || (s && o) || d.gB.deselect(O);
                    }
                }, 100),
                [f],
            ),
            Q = (0, u.useMemo)(() => s()(X, 0), [X]),
            J = tS({ node: G, onDOMSelectionChange: X, scheduleOnDOMSelectionChange: Q });
        eR(() => {
            G.current && (e = W(G.current))
                ? (S.set(O, e), v.set(O, G.current), N.set(O, G.current), b.set(G.current, O))
                : N.delete(O);
            var e,
                { selection: t } = O,
                n = eT.findDocumentOrShadowRoot(O).getSelection();
            if (!(!n || !eT.isFocused(O) || (null != J && J.hasPendingAction()))) {
                var r = (e) => {
                        var r = "None" !== n.type;
                        if (t || r) {
                            var i = v.get(O),
                                a = !1;
                            if ((i.contains(n.anchorNode) && i.contains(n.focusNode) && (a = !0), r && a && t && !e)) {
                                var s = eT.toSlateRange(O, n, { exactMatch: !0, suppressThrow: !0 });
                                if (s && d.Q6.equals(s, t)) {
                                    if (!q.hasMarkPlaceholder) return;
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
                            if (t && !eT.hasRange(O, t)) {
                                O.selection = eT.toSlateRange(O, n, { exactMatch: !1, suppressThrow: !0 });
                                return;
                            }
                            q.isUpdatingSelection = !0;
                            var u = t && eT.toDOMRange(O, t);
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
                                      A(O, u))
                                    : n.removeAllRanges(),
                                u
                            );
                        }
                    },
                    i = r(),
                    a = (null == J ? void 0 : J.isFlushing()) === "action";
                if (!eu || !a)
                    return void setTimeout(() => {
                        i && ec && eT.toDOMNode(O, O).focus(), (q.isUpdatingSelection = !1);
                    });
                var s = null,
                    o = requestAnimationFrame(() => {
                        if (a) {
                            var e = (e) => {
                                try {
                                    eT.toDOMNode(O, O).focus(), r(e);
                                } catch (e) {}
                            };
                            e(),
                                (s = setTimeout(() => {
                                    e(!0), (q.isUpdatingSelection = !1);
                                }));
                        }
                    });
                return () => {
                    cancelAnimationFrame(o), s && clearTimeout(s);
                };
            }
        });
        var ee = (0, u.useCallback)(
                (e) => {
                    if ((V(), !f && eT.hasEditableTarget(O, e.target) && !tM(e, c))) {
                        if (J) return J.handleDOMBeforeInput(e);
                        Q.flush(), X.flush();
                        var { selection: t } = O,
                            { inputType: n } = e,
                            r = e.dataTransfer || e.data || void 0,
                            i = "insertCompositionText" === n || "deleteCompositionText" === n;
                        if (!(i && eT.isComposing(O))) {
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
                                (a = !0), O.marks && (a = !1);
                                var { anchor: s } = t,
                                    [o, l] = eT.toDOMPoint(O, s),
                                    u = null == (p = o.parentElement) ? void 0 : p.closest("a"),
                                    _ = eT.getWindow(O);
                                if (a && u && eT.hasDOMNode(O, u)) {
                                    var h,
                                        p,
                                        g,
                                        E,
                                        A =
                                            null == _
                                                ? void 0
                                                : _.document.createTreeWalker(u, NodeFilter.SHOW_TEXT).lastChild();
                                    A === o && (null == (E = A.textContent) ? void 0 : E.length) === l && (a = !1);
                                }
                                if (
                                    a &&
                                    o.parentElement &&
                                    (null == _ || null == (g = _.getComputedStyle(o.parentElement))
                                        ? void 0
                                        : g.whiteSpace) === "pre"
                                ) {
                                    var I = d.KE.above(O, {
                                        at: s.path,
                                        match: (e) => d.Hg.isElement(e) && d.KE.isBlock(O, e),
                                    });
                                    I && d.bP.string(I[0]).includes("	") && (a = !1);
                                }
                            }
                            if (!n.startsWith("delete") || n.startsWith("deleteBy")) {
                                var [T] = e.getTargetRanges();
                                if (T) {
                                    var y = eT.toSlateRange(O, T, { exactMatch: !1, suppressThrow: !1 });
                                    if (!t || !d.Q6.equals(t, y)) {
                                        a = !1;
                                        var S = !i && O.selection && d.KE.rangeRef(O, O.selection);
                                        d.gB.select(O, y), S && x.set(O, S);
                                    }
                                }
                            }
                            if (!i) {
                                if ((a || e.preventDefault(), t && d.Q6.isExpanded(t) && n.startsWith("delete"))) {
                                    var v = n.endsWith("Backward") ? "backward" : "forward";
                                    d.KE.deleteFragment(O, { direction: v });
                                    return;
                                }
                                switch (n) {
                                    case "deleteByComposition":
                                    case "deleteByCut":
                                    case "deleteByDrag":
                                        d.KE.deleteFragment(O);
                                        break;
                                    case "deleteContent":
                                    case "deleteContentForward":
                                        d.KE.deleteForward(O);
                                        break;
                                    case "deleteContentBackward":
                                        d.KE.deleteBackward(O);
                                        break;
                                    case "deleteEntireSoftLine":
                                        d.KE.deleteBackward(O, { unit: "line" }),
                                            d.KE.deleteForward(O, { unit: "line" });
                                        break;
                                    case "deleteHardLineBackward":
                                        d.KE.deleteBackward(O, { unit: "block" });
                                        break;
                                    case "deleteSoftLineBackward":
                                        d.KE.deleteBackward(O, { unit: "line" });
                                        break;
                                    case "deleteHardLineForward":
                                        d.KE.deleteForward(O, { unit: "block" });
                                        break;
                                    case "deleteSoftLineForward":
                                        d.KE.deleteForward(O, { unit: "line" });
                                        break;
                                    case "deleteWordBackward":
                                        d.KE.deleteBackward(O, { unit: "word" });
                                        break;
                                    case "deleteWordForward":
                                        d.KE.deleteForward(O, { unit: "word" });
                                        break;
                                    case "insertLineBreak":
                                        d.KE.insertSoftBreak(O);
                                        break;
                                    case "insertParagraph":
                                        d.KE.insertBreak(O);
                                        break;
                                    case "insertFromComposition":
                                    case "insertFromDrop":
                                    case "insertFromPaste":
                                    case "insertFromYank":
                                    case "insertReplacementText":
                                    case "insertText":
                                        "insertFromComposition" === n && eT.isComposing(O) && (M(!1), w.set(O, !1)),
                                            (null == r ? void 0 : r.constructor.name) === "DataTransfer"
                                                ? eT.insertData(O, r)
                                                : "string" == typeof r &&
                                                  (a
                                                      ? F.current.push(() => d.KE.insertText(O, r))
                                                      : d.KE.insertText(O, r));
                                }
                                var C = null == (h = x.get(O)) ? void 0 : h.unref();
                                x.delete(O), !C || (O.selection && d.Q6.equals(O.selection, C)) || d.gB.select(O, C);
                            }
                        }
                    }
                },
                [f, c],
            ),
            et = (0, u.useCallback)(
                (e) => {
                    null == e
                        ? (X.cancel(),
                          Q.cancel(),
                          v.delete(O),
                          N.delete(O),
                          G.current && eI && G.current.removeEventListener("beforeinput", ee))
                        : eI && e.addEventListener("beforeinput", ee),
                        (G.current = e);
                },
                [G, ee, X, Q],
            );
        eR(() => {
            var e = eT.getWindow(O);
            return (
                e.document.addEventListener("selectionchange", Q),
                () => {
                    e.document.removeEventListener("selectionchange", Q);
                }
            );
        }, [Q]);
        var en = o([O, []]);
        if (_ && 1 === O.children.length && 1 === Array.from(d.bP.texts(O)).length && "" === d.bP.string(O) && !P) {
            var er = d.KE.start(O, []);
            en.push({ [j]: !0, placeholder: _, anchor: er, focus: er });
        }
        var { marks: ei } = O;
        if (((q.hasMarkPlaceholder = !1), O.selection && d.Q6.isCollapsed(O.selection) && ei)) {
            var { anchor: ea } = O.selection,
                es = d.bP.leaf(O, ea.path),
                el = E(es, tb);
            if (!d.EY.equals(es, ei, { loose: !0 })) {
                q.hasMarkPlaceholder = !0;
                var e_ = Object.fromEntries(Object.keys(el).map((e) => [e, null]));
                en.push(tR(tR(tR({ [H]: !0 }, e_), ei), {}, { anchor: ea, focus: ea }));
            }
        }
        (0, u.useEffect)(() => {
            setTimeout(() => {
                var { selection: e } = O;
                if (e) {
                    var { anchor: t } = e,
                        n = d.bP.leaf(O, t.path);
                    if (ei && !d.EY.equals(n, ei, { loose: !0 })) return void k.set(O, ei);
                }
                k.delete(O);
            });
        });
        var eh = null == (t = C.get(O)) || null == (n = t.getBoundingClientRect()) ? void 0 : n.height;
        return u.createElement(
            ez.Provider,
            { value: f },
            u.createElement(
                eH.Provider,
                { value: o },
                u.createElement(
                    e7,
                    { node: G, receivedUserInput: Y },
                    u.createElement(
                        T,
                        Object.assign({ role: f ? void 0 : "textbox", "aria-multiline": !f || void 0 }, R, {
                            spellCheck: (!!eI || !eA) && R.spellCheck,
                            autoCorrect: eI || !eA ? R.autoCorrect : "false",
                            autoCapitalize: eI || !eA ? R.autoCapitalize : "false",
                            "data-slate-editor": !0,
                            "data-slate-node": "value",
                            contentEditable: !f,
                            zindex: -1,
                            suppressContentEditableWarning: !0,
                            ref: et,
                            style: tR(
                                tR(
                                    {},
                                    y
                                        ? {}
                                        : tR(
                                              {
                                                  position: "relative",
                                                  outline: "none",
                                                  whiteSpace: "pre-wrap",
                                                  wordWrap: "break-word",
                                              },
                                              eh ? { minHeight: eh } : {},
                                          ),
                                ),
                                I,
                            ),
                            onBeforeInput: (0, u.useCallback)(
                                (e) => {
                                    if (
                                        !eI &&
                                        !f &&
                                        !tP(e, R.onBeforeInput) &&
                                        eT.hasSelectableTarget(O, e.target) &&
                                        (e.preventDefault(), !eT.isComposing(O))
                                    ) {
                                        var t = e.data;
                                        d.KE.insertText(O, t);
                                    }
                                },
                                [f],
                            ),
                            onInput: (0, u.useCallback)((e) => {
                                if (!tP(e, R.onInput)) {
                                    if (J) return void J.handleInput();
                                    for (var t of F.current) t();
                                    F.current = [];
                                }
                            }, []),
                            onBlur: (0, u.useCallback)(
                                (e) => {
                                    if (
                                        f ||
                                        q.isUpdatingSelection ||
                                        !eT.hasSelectableTarget(O, e.target) ||
                                        tP(e, R.onBlur)
                                    )
                                        return;
                                    var t = eT.findDocumentOrShadowRoot(O);
                                    if (q.latestElement !== t.activeElement) {
                                        var { relatedTarget: n } = e;
                                        if (
                                            n !== eT.toDOMNode(O, O) &&
                                            !($(n) && n.hasAttribute("data-slate-spacer"))
                                        ) {
                                            if (null != n && z(n) && eT.hasDOMNode(O, n)) {
                                                var r = eT.toSlateNode(O, n);
                                                if (d.Hg.isElement(r) && !O.isVoid(r)) return;
                                            }
                                            if (ed) {
                                                var i = t.getSelection();
                                                null == i || i.removeAllRanges();
                                            }
                                            L.delete(O);
                                        }
                                    }
                                },
                                [f, R.onBlur],
                            ),
                            onClick: (0, u.useCallback)(
                                (e) => {
                                    if (eT.hasTarget(O, e.target) && !tP(e, R.onClick) && z(e.target)) {
                                        var t = eT.toSlateNode(O, e.target),
                                            n = eT.findPath(O, t);
                                        if (d.KE.hasPath(O, n) && d.bP.get(O, n) === t) {
                                            if (e.detail === eQ && n.length >= 1) {
                                                var r = n;
                                                if (!(d.Hg.isElement(t) && d.KE.isBlock(O, t))) {
                                                    var i,
                                                        a = d.KE.above(O, {
                                                            match: (e) => d.Hg.isElement(e) && d.KE.isBlock(O, e),
                                                            at: n,
                                                        });
                                                    r = null != (i = null == a ? void 0 : a[1]) ? i : n.slice(0, 1);
                                                }
                                                var s = d.KE.range(O, r);
                                                d.gB.select(O, s);
                                                return;
                                            }
                                            if (!f) {
                                                var o = d.KE.start(O, n),
                                                    l = d.KE.end(O, n),
                                                    u = d.KE.void(O, { at: o }),
                                                    c = d.KE.void(O, { at: l });
                                                if (u && c && d.wA.equals(u[1], c[1])) {
                                                    var _ = d.KE.range(O, o);
                                                    d.gB.select(O, _);
                                                }
                                            }
                                        }
                                    }
                                },
                                [f, R.onClick],
                            ),
                            onCompositionEnd: (0, u.useCallback)(
                                (e) => {
                                    if (
                                        eT.hasSelectableTarget(O, e.target) &&
                                        (eT.isComposing(O) && (M(!1), w.set(O, !1)),
                                        null == J || J.handleCompositionEnd(e),
                                        !tP(e, R.onCompositionEnd) && !eu && !ed && !em && !eo && !eE && !eg) &&
                                        e.data
                                    ) {
                                        var t = k.get(O);
                                        k.delete(O),
                                            void 0 !== t && (U.set(O, O.marks), (O.marks = t)),
                                            d.KE.insertText(O, e.data);
                                        var n = U.get(O);
                                        U.delete(O), void 0 !== n && (O.marks = n);
                                    }
                                },
                                [R.onCompositionEnd],
                            ),
                            onCompositionUpdate: (0, u.useCallback)(
                                (e) => {
                                    !eT.hasSelectableTarget(O, e.target) ||
                                        tP(e, R.onCompositionUpdate) ||
                                        eT.isComposing(O) ||
                                        (M(!0), w.set(O, !0));
                                },
                                [R.onCompositionUpdate],
                            ),
                            onCompositionStart: (0, u.useCallback)(
                                (e) => {
                                    if (
                                        eT.hasSelectableTarget(O, e.target) &&
                                        (null == J || J.handleCompositionStart(e), !tP(e, R.onCompositionStart) && !eu)
                                    ) {
                                        M(!0);
                                        var { selection: t } = O;
                                        if (t) {
                                            if (d.Q6.isExpanded(t)) return void d.KE.deleteFragment(O);
                                            var n = d.KE.above(O, {
                                                match: (e) => d.Hg.isElement(e) && d.KE.isInline(O, e),
                                                mode: "highest",
                                            });
                                            if (n) {
                                                var [, r] = n;
                                                if (d.KE.isEnd(O, t.anchor, r)) {
                                                    var i = d.KE.after(O, r);
                                                    d.gB.setSelection(O, { anchor: i, focus: i });
                                                }
                                            }
                                        }
                                    }
                                },
                                [R.onCompositionStart],
                            ),
                            onCopy: (0, u.useCallback)(
                                (e) => {
                                    eT.hasSelectableTarget(O, e.target) &&
                                        !tP(e, R.onCopy) &&
                                        (e.preventDefault(), eT.setFragmentData(O, e.clipboardData, "copy"));
                                },
                                [R.onCopy],
                            ),
                            onCut: (0, u.useCallback)(
                                (e) => {
                                    if (!f && eT.hasSelectableTarget(O, e.target) && !tP(e, R.onCut)) {
                                        e.preventDefault(), eT.setFragmentData(O, e.clipboardData, "cut");
                                        var { selection: t } = O;
                                        if (t)
                                            if (d.Q6.isExpanded(t)) d.KE.deleteFragment(O);
                                            else {
                                                var n = d.bP.parent(O, t.anchor.path);
                                                d.KE.isVoid(O, n) && d.gB.delete(O);
                                            }
                                    }
                                },
                                [f, R.onCut],
                            ),
                            onDragOver: (0, u.useCallback)(
                                (e) => {
                                    if (eT.hasTarget(O, e.target) && !tP(e, R.onDragOver)) {
                                        var t = eT.toSlateNode(O, e.target);
                                        d.Hg.isElement(t) && d.KE.isVoid(O, t) && e.preventDefault();
                                    }
                                },
                                [R.onDragOver],
                            ),
                            onDragStart: (0, u.useCallback)(
                                (e) => {
                                    if (!f && eT.hasTarget(O, e.target) && !tP(e, R.onDragStart)) {
                                        var t = eT.toSlateNode(O, e.target),
                                            n = eT.findPath(O, t);
                                        if (
                                            (d.Hg.isElement(t) && d.KE.isVoid(O, t)) ||
                                            d.KE.void(O, { at: n, voids: !0 })
                                        ) {
                                            var r = d.KE.range(O, n);
                                            d.gB.select(O, r);
                                        }
                                        (q.isDraggingInternally = !0), eT.setFragmentData(O, e.dataTransfer, "drag");
                                    }
                                },
                                [f, R.onDragStart],
                            ),
                            onDrop: (0, u.useCallback)(
                                (e) => {
                                    if (!f && eT.hasTarget(O, e.target) && !tP(e, R.onDrop)) {
                                        e.preventDefault();
                                        var t = O.selection,
                                            n = eT.findEventRange(O, e),
                                            r = e.dataTransfer;
                                        d.gB.select(O, n),
                                            q.isDraggingInternally &&
                                                t &&
                                                !d.Q6.equals(t, n) &&
                                                !d.KE.void(O, { at: n, voids: !0 }) &&
                                                d.gB.delete(O, { at: t }),
                                            eT.insertData(O, r),
                                            eT.isFocused(O) || eT.focus(O);
                                    }
                                    q.isDraggingInternally = !1;
                                },
                                [f, R.onDrop],
                            ),
                            onDragEnd: (0, u.useCallback)(
                                (e) => {
                                    !f &&
                                        q.isDraggingInternally &&
                                        R.onDragEnd &&
                                        eT.hasTarget(O, e.target) &&
                                        R.onDragEnd(e),
                                        (q.isDraggingInternally = !1);
                                },
                                [f, R.onDragEnd],
                            ),
                            onFocus: (0, u.useCallback)(
                                (e) => {
                                    if (
                                        !f &&
                                        !q.isUpdatingSelection &&
                                        eT.hasEditableTarget(O, e.target) &&
                                        !tP(e, R.onFocus)
                                    ) {
                                        var t = eT.toDOMNode(O, O);
                                        if (
                                            ((q.latestElement = eT.findDocumentOrShadowRoot(O).activeElement),
                                            ec && e.target !== t)
                                        )
                                            return void t.focus();
                                        L.set(O, !0);
                                    }
                                },
                                [f, R.onFocus],
                            ),
                            onKeyDown: (0, u.useCallback)(
                                (e) => {
                                    if (!f && eT.hasEditableTarget(O, e.target)) {
                                        null == J || J.handleKeyDown(e);
                                        var { nativeEvent: t } = e;
                                        if (
                                            (eT.isComposing(O) && !1 === t.isComposing && (w.set(O, !1), M(!1)),
                                            !(tP(e, R.onKeyDown) || eT.isComposing(O)))
                                        ) {
                                            var { selection: n } = O,
                                                r = O.children[null !== n ? n.focus.path[0] : 0],
                                                a = "rtl" === i()(d.bP.string(r));
                                            if (e3.isRedo(t)) {
                                                e.preventDefault();
                                                var s = O;
                                                "function" == typeof s.redo && s.redo();
                                                return;
                                            }
                                            if (e3.isUndo(t)) {
                                                e.preventDefault();
                                                var o = O;
                                                "function" == typeof o.undo && o.undo();
                                                return;
                                            }
                                            if (e3.isMoveLineBackward(t)) {
                                                e.preventDefault(), d.gB.move(O, { unit: "line", reverse: !0 });
                                                return;
                                            }
                                            if (e3.isMoveLineForward(t)) {
                                                e.preventDefault(), d.gB.move(O, { unit: "line" });
                                                return;
                                            }
                                            if (e3.isExtendLineBackward(t)) {
                                                e.preventDefault(),
                                                    d.gB.move(O, { unit: "line", edge: "focus", reverse: !0 });
                                                return;
                                            }
                                            if (e3.isExtendLineForward(t)) {
                                                e.preventDefault(), d.gB.move(O, { unit: "line", edge: "focus" });
                                                return;
                                            }
                                            if (e3.isMoveBackward(t)) {
                                                e.preventDefault(),
                                                    n && d.Q6.isCollapsed(n)
                                                        ? d.gB.move(O, { reverse: !a })
                                                        : d.gB.collapse(O, { edge: "start" });
                                                return;
                                            }
                                            if (e3.isMoveForward(t)) {
                                                e.preventDefault(),
                                                    n && d.Q6.isCollapsed(n)
                                                        ? d.gB.move(O, { reverse: a })
                                                        : d.gB.collapse(O, { edge: "end" });
                                                return;
                                            }
                                            if (e3.isMoveWordBackward(t)) {
                                                e.preventDefault(),
                                                    n && d.Q6.isExpanded(n) && d.gB.collapse(O, { edge: "focus" }),
                                                    d.gB.move(O, { unit: "word", reverse: !a });
                                                return;
                                            }
                                            if (e3.isMoveWordForward(t)) {
                                                e.preventDefault(),
                                                    n && d.Q6.isExpanded(n) && d.gB.collapse(O, { edge: "focus" }),
                                                    d.gB.move(O, { unit: "word", reverse: a });
                                                return;
                                            }
                                            if (eI) {
                                                if (
                                                    (ef || ed) &&
                                                    n &&
                                                    (e3.isDeleteBackward(t) || e3.isDeleteForward(t)) &&
                                                    d.Q6.isCollapsed(n)
                                                ) {
                                                    var l = d.bP.parent(O, n.anchor.path);
                                                    if (
                                                        d.Hg.isElement(l) &&
                                                        d.KE.isVoid(O, l) &&
                                                        (d.KE.isInline(O, l) || d.KE.isBlock(O, l))
                                                    ) {
                                                        e.preventDefault(), d.KE.deleteBackward(O, { unit: "block" });
                                                        return;
                                                    }
                                                }
                                            } else {
                                                if (e3.isBold(t) || e3.isItalic(t) || e3.isTransposeCharacter(t))
                                                    return void e.preventDefault();
                                                if (e3.isSoftBreak(t)) {
                                                    e.preventDefault(), d.KE.insertSoftBreak(O);
                                                    return;
                                                }
                                                if (e3.isSplitBlock(t)) {
                                                    e.preventDefault(), d.KE.insertBreak(O);
                                                    return;
                                                }
                                                if (e3.isDeleteBackward(t)) {
                                                    e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(O, { direction: "backward" })
                                                            : d.KE.deleteBackward(O);
                                                    return;
                                                }
                                                if (e3.isDeleteForward(t)) {
                                                    e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(O, { direction: "forward" })
                                                            : d.KE.deleteForward(O);
                                                    return;
                                                }
                                                if (e3.isDeleteLineBackward(t)) {
                                                    e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(O, { direction: "backward" })
                                                            : d.KE.deleteBackward(O, { unit: "line" });
                                                    return;
                                                }
                                                if (e3.isDeleteLineForward(t)) {
                                                    e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(O, { direction: "forward" })
                                                            : d.KE.deleteForward(O, { unit: "line" });
                                                    return;
                                                }
                                                if (e3.isDeleteWordBackward(t)) {
                                                    e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(O, { direction: "backward" })
                                                            : d.KE.deleteBackward(O, { unit: "word" });
                                                    return;
                                                }
                                                if (e3.isDeleteWordForward(t)) {
                                                    e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(O, { direction: "forward" })
                                                            : d.KE.deleteForward(O, { unit: "word" });
                                                    return;
                                                }
                                            }
                                        }
                                    }
                                },
                                [f, R.onKeyDown],
                            ),
                            onPaste: (0, u.useCallback)(
                                (e) => {
                                    !f &&
                                        eT.hasEditableTarget(O, e.target) &&
                                        !tP(e, R.onPaste) &&
                                        (!eI || Z(e.nativeEvent) || ed) &&
                                        (e.preventDefault(), eT.insertData(O, e.clipboardData));
                                },
                                [f, R.onPaste],
                            ),
                        }),
                        u.createElement(tO, {
                            decorations: en,
                            node: O,
                            renderElement: h,
                            renderPlaceholder: g,
                            renderLeaf: p,
                            selection: O.selection,
                        }),
                    ),
                ),
            ),
        );
    },
    tL = (e) => {
        var { attributes: t, children: n } = e;
        return u.createElement("span", Object.assign({}, t), n, eu && u.createElement("br", null));
    },
    tw = () => [],
    tx = (e, t) => {
        if (t.getBoundingClientRect && (!e.selection || (e.selection && d.Q6.isCollapsed(e.selection)))) {
            var n = t.startContainer.parentElement;
            (n.getBoundingClientRect = t.getBoundingClientRect.bind(t)),
                (0, c.A)(n, { scrollMode: "if-needed" }),
                delete n.getBoundingClientRect;
        }
    },
    tP = (e, t) => {
        if (!t) return !1;
        var n = t(e);
        return null != n ? n : e.isDefaultPrevented() || e.isPropagationStopped();
    },
    tM = (e, t) => {
        if (!t) return !1;
        var n = t(e);
        return null != n ? n : e.defaultPrevented;
    },
    tk = (0, u.createContext)(!1),
    tU = () => (0, u.useContext)(tk);
function tG(e) {
    return e instanceof Error;
}
var tF = (0, u.createContext)({}),
    tV = (e, t) => e === t;
function tB(e) {
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
var tj = ["editor", "children", "onChange", "value"],
    tH = (e) => {
        var { editor: t, children: n, onChange: r, value: i } = e,
            a = E(e, tj),
            s = (0, u.useRef)(!1),
            [o, l] = u.useState(() => {
                if (!d.bP.isNodeList(i))
                    throw Error(
                        "[Slate] value is invalid! Expected a list of elements but got: ".concat(d.h6.stringify(i)),
                    );
                if (!d.KE.isEditor(t)) throw Error("[Slate] editor is invalid! You passed: ".concat(d.h6.stringify(t)));
                return (t.children = i), Object.assign(t, a), { v: 0, editor: t };
            }),
            { selectorContext: c, onChange: _ } = tB(t),
            f = (0, u.useCallback)(() => {
                r && r(t.children), l((e) => ({ v: e.v + 1, editor: t })), _(t);
            }, [r]);
        (0, u.useEffect)(
            () => (
                P.set(t, f),
                () => {
                    P.set(t, () => {}), (s.current = !0);
                }
            ),
            [f],
        );
        var [h, p] = (0, u.useState)(eT.isFocused(t));
        return (
            (0, u.useEffect)(() => {
                p(eT.isFocused(t));
            }),
            eR(() => {
                var e = () => p(eT.isFocused(t));
                return es
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
                tF.Provider,
                { value: c },
                u.createElement(
                    eX.Provider,
                    { value: o },
                    u.createElement(ex.Provider, { value: o.editor }, u.createElement(tk.Provider, { value: h }, n)),
                ),
            )
        );
    },
    tY = (e, t) => {
        var n = (t.top + t.bottom) / 2;
        return e.top <= n && e.bottom >= n;
    },
    tW = (e, t, n) => {
        var r = eT.toDOMRange(e, t).getBoundingClientRect(),
            i = eT.toDOMRange(e, n).getBoundingClientRect();
        return tY(r, i) && tY(i, r);
    },
    tK = (e, t) => {
        var n = d.KE.range(e, d.Q6.end(t)),
            r = Array.from(d.KE.positions(e, { at: t })),
            i = 0,
            a = r.length,
            s = Math.floor(a / 2);
        if (tW(e, d.KE.range(e, r[i]), n)) return d.KE.range(e, r[i], n);
        if (r.length < 2) return d.KE.range(e, r[r.length - 1], n);
        for (; s !== r.length && s !== i; )
            tW(e, d.KE.range(e, r[s]), n) ? (a = s) : (i = s), (s = Math.floor((i + a) / 2));
        return d.KE.range(e, r[a], n);
    };
function t$(e, t) {
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
            ? t$(Object(n), !0).forEach(function (t) {
                  p(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : t$(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var tq = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x-slate-fragment",
            n = e,
            { apply: r, onChange: i, deleteBackward: a, addMark: s, removeMark: o } = n;
        return (
            O.set(n, new WeakMap()),
            (n.addMark = (e, t) => {
                var r, i;
                null == (r = M.get(n)) || r(),
                    !k.get(n) && null != (i = G.get(n)) && i.length && k.set(n, null),
                    U.delete(n),
                    s(e, t);
            }),
            (n.removeMark = (e) => {
                var t;
                !k.get(n) && null != (t = G.get(n)) && t.length && k.set(n, null), U.delete(n), o(e);
            }),
            (n.deleteBackward = (e) => {
                if ("line" !== e) return a(e);
                if (n.selection && d.Q6.isCollapsed(n.selection)) {
                    var t = d.KE.above(n, { match: (e) => d.Hg.isElement(e) && d.KE.isBlock(n, e), at: n.selection });
                    if (t) {
                        var [, r] = t,
                            i = d.KE.range(n, r, n.selection.anchor),
                            s = tK(n, i);
                        d.Q6.isCollapsed(s) || d.gB.delete(n, { at: s });
                    }
                }
            }),
            (n.apply = (e) => {
                var t,
                    i = [],
                    a = G.get(n);
                if (null != a && a.length) {
                    var s = a.map((t) => tu(t, e)).filter(Boolean);
                    G.set(n, s);
                }
                var o = V.get(n);
                o && V.set(n, tl(n, o, e));
                var l = F.get(n);
                if (null != l && l.at) {
                    var u = d.bR.isPoint(null == l ? void 0 : l.at) ? to(n, l.at, e) : tl(n, l.at, e);
                    F.set(n, u ? tz(tz({}, l), {}, { at: u }) : null);
                }
                switch (e.type) {
                    case "insert_text":
                    case "remove_text":
                    case "set_node":
                    case "split_node":
                        i.push(...tX(n, e.path));
                        break;
                    case "set_selection":
                        null == (t = x.get(n)) || t.unref(), x.delete(n);
                        break;
                    case "insert_node":
                    case "remove_node":
                        i.push(...tX(n, d.wA.parent(e.path)));
                        break;
                    case "merge_node":
                        i.push(...tX(n, d.wA.previous(e.path)));
                        break;
                    case "move_node":
                        i.push(...tX(n, d.wA.common(d.wA.parent(e.path), d.wA.parent(e.newPath))));
                }
                for (var [c, _] of (r(e), i)) {
                    var [f] = d.KE.node(n, c);
                    R.set(f, _);
                }
            }),
            (n.setFragmentData = (e) => {
                var { selection: r } = n;
                if (r) {
                    var [i, a] = d.Q6.edges(r),
                        s = d.KE.void(n, { at: i.path }),
                        o = d.KE.void(n, { at: a.path });
                    if (!d.Q6.isCollapsed(r) || s) {
                        var l = eT.toDOMRange(n, r),
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
                                h = eT.toDOMNode(n, _);
                            f.setEndAfter(h), (u = f.cloneContents());
                        }
                        if (
                            (s && (c = u.querySelector("[data-slate-spacer]")),
                            Array.from(u.querySelectorAll("[data-slate-zero-width]")).forEach((e) => {
                                var t = "n" === e.getAttribute("data-slate-zero-width");
                                e.textContent = t ? "\n" : "";
                            }),
                            X(c))
                        ) {
                            var p = c.ownerDocument.createElement("span");
                            (p.style.whiteSpace = "pre"), p.appendChild(c), u.appendChild(p), (c = p);
                        }
                        var g = n.getFragment(),
                            E = JSON.stringify(g),
                            A = window.btoa(encodeURIComponent(E));
                        c.setAttribute("data-slate-fragment", A), e.setData("application/".concat(t), A);
                        var I = u.ownerDocument.createElement("div");
                        return (
                            I.appendChild(u),
                            I.setAttribute("hidden", "true"),
                            u.ownerDocument.body.appendChild(I),
                            e.setData("text/html", I.innerHTML),
                            e.setData("text/plain", en(I)),
                            u.ownerDocument.body.removeChild(I),
                            e
                        );
                    }
                }
            }),
            (n.insertData = (e) => {
                n.insertFragmentData(e) || n.insertTextData(e);
            }),
            (n.insertFragmentData = (e) => {
                var r = e.getData("application/".concat(t)) || ei(e);
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
                h.unstable_batchedUpdates(() => {
                    var t = P.get(n);
                    t && t(), i(e);
                });
            }),
            n
        );
    },
    tX = (e, t) => {
        var n = [];
        for (var [r, i] of d.KE.levels(e, { at: t })) {
            var a = eT.findKey(e, r);
            n.push([i, a]);
        }
        return n;
    };
