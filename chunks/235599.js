r.d(t, { A: () => tl, Fo: () => e6, RV: () => ew, f7: () => ej, o$: () => th, rL: () => eC, zL: () => to });
var u = r(877413),
    n = r.n(u),
    a = r(649852),
    o = r.n(a),
    i = r(64015),
    s = r.n(i),
    l = r(582128),
    c = r(104681),
    f = r(719442),
    d = r(415171),
    D = r(294106),
    h = r(333007);
function C(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
function v(e, t) {
    if (null == e) return {};
    var r,
        u,
        n = (function (e, t) {
            if (null == e) return {};
            var r,
                u,
                n = {},
                a = Object.keys(e);
            for (u = 0; u < a.length; u++) ((r = a[u]), t.indexOf(r) >= 0 || (n[r] = e[r]));
            return n;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (u = 0; u < a.length; u++)
            ((r = a[u]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]));
    }
    return n;
}
var p = 0;
class g {
    constructor() {
        this.id = "".concat(p++);
    }
}
var B = new WeakMap(),
    E = new WeakMap(),
    A = new WeakMap(),
    F = new WeakMap(),
    m = new WeakMap(),
    b = new WeakMap(),
    w = new WeakMap(),
    y = new WeakMap(),
    x = new WeakMap(),
    O = new WeakMap(),
    k = new WeakMap(),
    P = new WeakMap(),
    S = new WeakMap(),
    T = new WeakMap(),
    j = new WeakMap(),
    R = new WeakMap(),
    N = new WeakMap(),
    M = new WeakMap(),
    K = new WeakMap(),
    W = new WeakMap(),
    _ = new WeakMap(),
    L = Symbol("placeholder"),
    z = Symbol("mark-placeholder"),
    I = globalThis.Text,
    q = (e) => (e && e.ownerDocument && e.ownerDocument.defaultView) || null,
    V = (e) => H(e) && 8 === e.nodeType,
    Q = (e) => H(e) && 1 === e.nodeType,
    H = (e) => {
        var t = q(e);
        return !!t && e instanceof t.Node;
    },
    U = (e) => {
        var t = e && e.anchorNode && q(e.anchorNode);
        return !!t && e instanceof t.Selection;
    },
    J = (e) => H(e) && 3 === e.nodeType,
    X = (e, t, r) => {
        for (
            var { childNodes: u } = e, n = u[t], a = t, o = !1, i = !1;
            (V(n) || (Q(n) && 0 === n.childNodes.length) || (Q(n) && "false" === n.getAttribute("contenteditable"))) &&
            (!o || !i);
        ) {
            if (a >= u.length) {
                ((o = !0), (a = t - 1), (r = "backward"));
                continue;
            }
            if (a < 0) {
                ((i = !0), (a = t + 1), (r = "forward"));
                continue;
            }
            ((n = u[a]), (t = a), (a += "forward" === r ? 1 : -1));
        }
        return [n, t];
    },
    Y = (e, t, r) => {
        var [u] = X(e, t, r);
        return u;
    },
    $ = (e) => {
        var t = "";
        if (J(e) && e.nodeValue) return e.nodeValue;
        if (Q(e)) {
            for (var r of Array.from(e.childNodes)) t += $(r);
            var u = getComputedStyle(e).getPropertyValue("display");
            ("block" === u || "list" === u || "BR" === e.tagName) && (t += "\n");
        }
        return t;
    },
    Z = /data-slate-fragment="(.+?)"/m,
    G = (e, t, r) => {
        var { target: u } = t;
        if (Q(u) && u.matches('[contentEditable="false"]')) return !1;
        var { document: n } = eC.getWindow(e);
        if (n.contains(u)) return eC.hasDOMNode(e, u, { editable: !0 });
        var a = r.find((e) => {
            var { addedNodes: t, removedNodes: r } = e;
            for (var n of t) if (n === u || n.contains(u)) return !0;
            for (var a of r) if (a === u || a.contains(u)) return !0;
        });
        return !!a && a !== t && G(e, a, r);
    },
    ee = parseInt(l.version.split(".")[0], 10) >= 17,
    et =
        "u" > typeof navigator &&
        "u" > typeof window &&
        /iPad|iPhone|iPod/.test(navigator.userAgent) &&
        !window.MSStream,
    er = "u" > typeof navigator && /Mac OS X/.test(navigator.userAgent),
    eu = "u" > typeof navigator && /Android/.test(navigator.userAgent),
    en = "u" > typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
    ea = "u" > typeof navigator && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
    eo = "u" > typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
    ei = "u" > typeof navigator && /Chrome/i.test(navigator.userAgent),
    es = "u" > typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
    el = eu && "u" > typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
    ec =
        "u" > typeof navigator &&
        /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
    ef = "u" > typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
    ed = "u" > typeof navigator && /.*Wechat/.test(navigator.userAgent),
    eD = "u" > typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
    eh =
        (!es || !el) &&
        !eo &&
        "u" > typeof globalThis &&
        globalThis.InputEvent &&
        "function" == typeof globalThis.InputEvent.prototype.getTargetRanges,
    eC = {
        isComposing: (e) => !!P.get(e),
        getWindow(e) {
            var t = A.get(e);
            if (!t) throw Error("Unable to find a host window element for this editor");
            return t;
        },
        findKey(e, t) {
            var r = y.get(t);
            return (r || ((r = new g()), y.set(t, r)), r);
        },
        findPath(e, t) {
            for (var r = [], u = t; ;) {
                var n = E.get(u);
                if (null == n)
                    if (f.KE.isEditor(u)) return r;
                    else break;
                var a = B.get(u);
                if (null == a) break;
                (r.unshift(a), (u = n));
            }
            throw Error("Unable to find the path for Slate node: ".concat(f.h6.stringify(t)));
        },
        findDocumentOrShadowRoot(e) {
            var t = eC.toDOMNode(e, e),
                r = t.getRootNode();
            return (r instanceof Document || r instanceof ShadowRoot) && null != r.getSelection ? r : t.ownerDocument;
        },
        isFocused: (e) => !!k.get(e),
        isReadOnly: (e) => !!O.get(e),
        blur(e) {
            var t = eC.toDOMNode(e, e),
                r = eC.findDocumentOrShadowRoot(e);
            (k.set(e, !1), r.activeElement === t && t.blur());
        },
        focus(e) {
            var t = eC.toDOMNode(e, e),
                r = eC.findDocumentOrShadowRoot(e);
            (k.set(e, !0), r.activeElement !== t && t.focus({ preventScroll: !0 }));
        },
        deselect(e) {
            var { selection: t } = e,
                r = eC.findDocumentOrShadowRoot(e).getSelection();
            (r && r.rangeCount > 0 && r.removeAllRanges(), t && f.gB.deselect(e));
        },
        hasDOMNode(e, t) {
            var r,
                u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { editable: n = !1 } = u,
                a = eC.toDOMNode(e, e);
            try {
                r = Q(t) ? t : t.parentElement;
            } catch (e) {
                if (!e.message.includes('Permission denied to access property "nodeType"')) throw e;
            }
            return (
                !!r &&
                r.closest("[data-slate-editor]") === a &&
                (!n ||
                    !!r.isContentEditable ||
                    ("boolean" == typeof r.isContentEditable && r.closest('[contenteditable="false"]') === a) ||
                    !!r.getAttribute("data-slate-zero-width"))
            );
        },
        insertData(e, t) {
            e.insertData(t);
        },
        insertFragmentData: (e, t) => e.insertFragmentData(t),
        insertTextData: (e, t) => e.insertTextData(t),
        setFragmentData(e, t, r) {
            e.setFragmentData(t, r);
        },
        toDOMNode(e, t) {
            var r = x.get(e),
                u = f.KE.isEditor(t) ? F.get(e) : null == r ? void 0 : r.get(eC.findKey(e, t));
            if (!u) throw Error("Cannot resolve a DOM node from Slate node: ".concat(f.h6.stringify(t)));
            return u;
        },
        toDOMPoint(e, t) {
            var [r] = f.KE.node(e, t.path),
                u = eC.toDOMNode(e, r);
            f.KE.void(e, { at: t }) && (t = { path: t.path, offset: 0 });
            for (
                var n = Array.from(u.querySelectorAll("[data-slate-string], [data-slate-zero-width]")), a = 0, o = 0;
                o < n.length;
                o++
            ) {
                var i = n[o],
                    s = i.childNodes[0];
                if (null != s && null != s.textContent) {
                    var { length: l } = s.textContent,
                        c = i.getAttribute("data-slate-length"),
                        d = a + (null == c ? l : parseInt(c, 10)),
                        D = n[o + 1];
                    if (t.offset === d && null != D && D.hasAttribute("data-slate-mark-placeholder")) {
                        var h,
                            C,
                            v = D.childNodes[0];
                        h = [v instanceof I ? v : D, null != (C = D.textContent) && C.startsWith("\uFEFF") ? 1 : 0];
                        break;
                    }
                    if (t.offset <= d) {
                        h = [s, Math.min(l, Math.max(0, t.offset - a))];
                        break;
                    }
                    a = d;
                }
            }
            if (!h) throw Error("Cannot resolve a DOM point from Slate point: ".concat(f.h6.stringify(t)));
            return h;
        },
        toDOMRange(e, t) {
            var { anchor: r, focus: u } = t,
                n = f.Q6.isBackward(t),
                a = eC.toDOMPoint(e, r),
                o = f.Q6.isCollapsed(t) ? a : eC.toDOMPoint(e, u),
                i = eC.getWindow(e).document.createRange(),
                [s, l] = n ? o : a,
                [c, d] = n ? a : o,
                D = !!(Q(s) ? s : s.parentElement).getAttribute("data-slate-zero-width"),
                h = !!(Q(c) ? c : c.parentElement).getAttribute("data-slate-zero-width");
            return (i.setStart(s, D ? 1 : l), i.setEnd(c, h ? 1 : d), i);
        },
        toSlateNode(e, t) {
            var r = Q(t) ? t : t.parentElement;
            r && !r.hasAttribute("data-slate-node") && (r = r.closest("[data-slate-node]"));
            var u = r ? b.get(r) : null;
            if (!u) throw Error("Cannot resolve a Slate node from DOM node: ".concat(r));
            return u;
        },
        findEventRange(e, t) {
            "nativeEvent" in t && (t = t.nativeEvent);
            var r,
                { clientX: u, clientY: n, target: a } = t;
            if (null == u || null == n) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
            var o = eC.toSlateNode(e, t.target),
                i = eC.findPath(e, o);
            if (f.Hg.isElement(o) && f.KE.isVoid(e, o)) {
                var s = a.getBoundingClientRect(),
                    l = e.isInline(o) ? u - s.left < s.left + s.width - u : n - s.top < s.top + s.height - n,
                    c = f.KE.point(e, i, { edge: l ? "start" : "end" }),
                    d = l ? f.KE.before(e, c) : f.KE.after(e, c);
                if (d) return f.KE.range(e, d);
            }
            var { document: D } = eC.getWindow(e);
            if (D.caretRangeFromPoint) r = D.caretRangeFromPoint(u, n);
            else {
                var h = D.caretPositionFromPoint(u, n);
                h && ((r = D.createRange()).setStart(h.offsetNode, h.offset), r.setEnd(h.offsetNode, h.offset));
            }
            if (!r) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
            return eC.toSlateRange(e, r, { exactMatch: !1, suppressThrow: !1 });
        },
        toSlatePoint(e, t, r) {
            var { exactMatch: u, suppressThrow: n } = r,
                [a, o] = u
                    ? t
                    : ((e) => {
                          var [t, r] = e;
                          if (Q(t) && t.childNodes.length) {
                              var u = r === t.childNodes.length,
                                  n = u ? r - 1 : r;
                              for (
                                  [t, n] = X(t, n, u ? "backward" : "forward"), u = n < r;
                                  Q(t) && t.childNodes.length;
                              ) {
                                  var a = u ? t.childNodes.length - 1 : 0;
                                  t = Y(t, a, u ? "backward" : "forward");
                              }
                              r = u && null != t.textContent ? t.textContent.length : 0;
                          }
                          return [t, r];
                      })(t),
                i = a.parentNode,
                s = null,
                l = 0;
            if (i) {
                var c,
                    d,
                    D = eC.toDOMNode(e, e),
                    h = i.closest('[data-slate-void="true"]'),
                    C = h && D.contains(h) ? h : null,
                    v = i.closest("[data-slate-leaf]"),
                    p = null;
                if (v) {
                    if ((s = v.closest('[data-slate-node="text"]'))) {
                        var g = eC.getWindow(e).document.createRange();
                        (g.setStart(s, 0), g.setEnd(a, o));
                        var B = g.cloneContents();
                        ([
                            ...Array.prototype.slice.call(B.querySelectorAll("[data-slate-zero-width]")),
                            ...Array.prototype.slice.call(B.querySelectorAll("[contenteditable=false]")),
                        ].forEach((e) => {
                            if (
                                eu &&
                                !u &&
                                e.hasAttribute("data-slate-zero-width") &&
                                e.textContent.length > 0 &&
                                "\uFEFF" !== e.textContext
                            ) {
                                e.textContent.startsWith("\uFEFF") && (e.textContent = e.textContent.slice(1));
                                return;
                            }
                            e.parentNode.removeChild(e);
                        }),
                            (l = B.textContent.length),
                            (p = s));
                    }
                } else if (C) {
                    for (var E = C.querySelectorAll("[data-slate-leaf]"), A = 0; A < E.length; A++) {
                        var F = E[A];
                        if (eC.hasDOMNode(e, F)) {
                            v = F;
                            break;
                        }
                    }
                    v
                        ? ((s = v.closest('[data-slate-node="text"]')),
                          (l = (p = v).textContent.length),
                          p.querySelectorAll("[data-slate-zero-width]").forEach((e) => {
                              l -= e.textContent.length;
                          }))
                        : (l = 1);
                }
                p &&
                    l === p.textContent.length &&
                    eu &&
                    "z" === p.getAttribute("data-slate-zero-width") &&
                    null != (c = p.textContent) &&
                    c.startsWith("\uFEFF") &&
                    (i.hasAttribute("data-slate-zero-width") ||
                        (en && null != (d = p.textContent) && d.endsWith("\n\n"))) &&
                    l--;
            }
            if (eu && !s && !u) {
                var m = i.hasAttribute("data-slate-node") ? i : i.closest("[data-slate-node]");
                if (m && eC.hasDOMNode(e, m, { editable: !0 })) {
                    var b = eC.toSlateNode(e, m),
                        { path: w, offset: y } = f.KE.start(e, eC.findPath(e, b));
                    return (m.querySelector("[data-slate-leaf]") || (y = o), { path: w, offset: y });
                }
            }
            if (!s) {
                if (n) return null;
                throw Error("Cannot resolve a Slate point from DOM point: ".concat(t));
            }
            var x = eC.toSlateNode(e, s);
            return { path: eC.findPath(e, x), offset: l };
        },
        toSlateRange(e, t, r) {
            var u,
                n,
                a,
                o,
                i,
                s,
                { exactMatch: l, suppressThrow: c } = r;
            if (
                ((U(t) ? t.anchorNode : t.startContainer) &&
                    (U(t)
                        ? ((u = t.anchorNode),
                          (n = t.anchorOffset),
                          (a = t.focusNode),
                          (o = t.focusOffset),
                          (i =
                              ei &&
                              ((e) => {
                                  for (var t = e && e.parentNode; t;) {
                                      if ("[object ShadowRoot]" === t.toString()) return !0;
                                      t = t.parentNode;
                                  }
                                  return !1;
                              })(u)
                                  ? t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset
                                  : t.isCollapsed))
                        : ((u = t.startContainer),
                          (n = t.startOffset),
                          (a = t.endContainer),
                          (o = t.endOffset),
                          (i = t.collapsed))),
                null == u || null == a || null == n || null == o)
            )
                throw Error("Cannot resolve a Slate range from DOM range: ".concat(t));
            "getAttribute" in a &&
                "false" === a.getAttribute("contenteditable") &&
                ((a = u), (o = (null == (s = u.textContent) ? void 0 : s.length) || 0));
            var d = eC.toSlatePoint(e, [u, n], { exactMatch: l, suppressThrow: c });
            if (!d) return null;
            var D = i ? d : eC.toSlatePoint(e, [a, o], { exactMatch: l, suppressThrow: c });
            if (!D) return null;
            if (en && !i && u !== a) {
                var h = f.KE.isEnd(e, d, d.path),
                    C = f.KE.isStart(e, D, D.path);
                (h && (d = f.KE.after(e, d) || d), C && (D = f.KE.before(e, D) || D));
            }
            var v = { anchor: d, focus: D };
            return (
                f.Q6.isExpanded(v) &&
                    f.Q6.isForward(v) &&
                    Q(a) &&
                    f.KE.void(e, { at: v.focus, mode: "highest" }) &&
                    (v = f.KE.unhangRange(e, v, { voids: !0 })),
                v
            );
        },
        hasRange(e, t) {
            var { anchor: r, focus: u } = t;
            return f.KE.hasPath(e, r.path) && f.KE.hasPath(e, u.path);
        },
        hasTarget: (e, t) => H(t) && eC.hasDOMNode(e, t),
        hasEditableTarget: (e, t) => H(t) && eC.hasDOMNode(e, t, { editable: !0 }),
        hasSelectableTarget: (e, t) => eC.hasEditableTarget(e, t) || eC.isTargetInsideNonReadonlyVoid(e, t),
        isTargetInsideNonReadonlyVoid(e, t) {
            if (O.get(e)) return !1;
            var r = eC.hasTarget(e, t) && eC.toSlateNode(e, t);
            return f.Hg.isElement(r) && f.KE.isVoid(e, r);
        },
        androidScheduleFlush(e) {
            var t;
            null == (t = j.get(e)) || t();
        },
        androidPendingDiffs: (e) => M.get(e),
    },
    ev = ["anchor", "focus"],
    ep = ["anchor", "focus"],
    eg = (e, t) => {
        var r = v(e, ev),
            u = v(t, ep);
        return (
            e[L] === t[L] &&
            Object.keys(r).length === Object.keys(u).length &&
            Object.keys(r).every((e) => u.hasOwnProperty(e) && r[e] === u[e])
        );
    },
    eB = eD ? l.useLayoutEffect : l.useEffect,
    eE = (e) => {
        var { isLast: t, leaf: r, parent: u, text: n } = e,
            a = ew(),
            o = eC.findPath(a, n),
            i = f.wA.parent(o),
            s = !0 === r[z];
        return a.isVoid(u)
            ? l.createElement(em, { length: f.bP.string(u).length })
            : "" !== r.text || u.children[u.children.length - 1] !== n || a.isInline(u) || "" !== f.KE.string(a, i)
              ? "" === r.text
                  ? l.createElement(em, { isMarkPlaceholder: s })
                  : t && "\n" === r.text.slice(-1)
                    ? l.createElement(eA, { isTrailing: !0, text: r.text })
                    : l.createElement(eA, { text: r.text })
              : l.createElement(em, { isLineBreak: !0, isMarkPlaceholder: s });
    },
    eA = (e) => {
        var { text: t, isTrailing: r = !1 } = e,
            u = (0, l.useRef)(null),
            n = () => "".concat(null != t ? t : "").concat(r ? "\n" : ""),
            [a] = (0, l.useState)(n);
        return (
            eB(() => {
                var e = n();
                if (u.current && u.current.textContent !== e) {
                    var t = u.current.firstChild;
                    if (
                        t &&
                        t === u.current.lastChild &&
                        3 === t.nodeType &&
                        (t.data.startsWith(e) || e.startsWith(t.data))
                    ) {
                        var r = Math.min(t.length, e.length);
                        t.replaceData(r, t.length - r, e.slice(r));
                    } else u.current.textContent = e;
                }
            }),
            l.createElement(eF, { ref: u }, a)
        );
    },
    eF = (0, l.memo)(
        (0, l.forwardRef)((e, t) => l.createElement("span", { "data-slate-string": !0, ref: t }, e.children)),
    ),
    em = (e) => {
        var { length: t = 0, isLineBreak: r = !1, isMarkPlaceholder: u = !1 } = e,
            n = { "data-slate-zero-width": r ? "n" : "z", "data-slate-length": t };
        return (
            u && (n["data-slate-mark-placeholder"] = !0),
            l.createElement(
                "span",
                Object.assign({}, n),
                eu && r ? null : "\uFEFF",
                r ? l.createElement("br", null) : null,
            )
        );
    },
    eb = (0, l.createContext)(null),
    ew = () => {
        var e = (0, l.useContext)(eb);
        if (!e) throw Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
        return e;
    },
    ey = l.memo(
        (e) => {
            var {
                    leaf: t,
                    isLast: r,
                    text: u,
                    parent: n,
                    renderPlaceholder: a,
                    renderLeaf: o = (e) => l.createElement(ex, Object.assign({}, e)),
                } = e,
                i = (0, l.useRef)(null),
                s = (0, l.useRef)(null),
                c = ew(),
                f = (0, l.useRef)(null);
            ((0, l.useEffect)(
                () => () => {
                    f.current && f.current.disconnect();
                },
                [],
            ),
                (0, l.useEffect)(() => {
                    var e = null == s ? void 0 : s.current;
                    if (
                        (e ? m.set(c, e) : m.delete(c),
                        f.current
                            ? (f.current.disconnect(), e && f.current.observe(e))
                            : e &&
                              ((f.current = new (window.ResizeObserver || d.tb)(() => {
                                  var e = _.get(c);
                                  null == e || e();
                              })),
                              f.current.observe(e)),
                        !e && i.current)
                    ) {
                        var t = _.get(c);
                        null == t || t();
                    }
                    return (
                        (i.current = s.current),
                        () => {
                            m.delete(c);
                        }
                    );
                }, [s, t]));
            var D = l.createElement(eE, { isLast: r, leaf: t, parent: n, text: u });
            if (t[L]) {
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
                        ref: s,
                    },
                };
                D = l.createElement(l.Fragment, null, a(h), D);
            }
            return o({ attributes: { "data-slate-leaf": !0 }, children: D, leaf: t, text: u });
        },
        (e, t) =>
            t.parent === e.parent &&
            t.isLast === e.isLast &&
            t.renderLeaf === e.renderLeaf &&
            t.renderPlaceholder === e.renderPlaceholder &&
            t.text === e.text &&
            f.EY.equals(t.leaf, e.leaf) &&
            t.leaf[L] === e.leaf[L],
    ),
    ex = (e) => {
        var { attributes: t, children: r } = e;
        return l.createElement("span", Object.assign({}, t), r);
    },
    eO = l.memo(
        (e) => {
            for (
                var { decorations: t, isLast: r, parent: u, renderPlaceholder: n, renderLeaf: a, text: o } = e,
                    i = ew(),
                    s = (0, l.useRef)(null),
                    c = f.EY.decorations(o, t),
                    d = eC.findKey(i, o),
                    D = [],
                    h = 0;
                h < c.length;
                h++
            ) {
                var C = c[h];
                D.push(
                    l.createElement(ey, {
                        isLast: r && h === c.length - 1,
                        key: "".concat(d.id, "-").concat(h),
                        renderPlaceholder: n,
                        leaf: C,
                        text: o,
                        parent: u,
                        renderLeaf: a,
                    }),
                );
            }
            var v = (0, l.useCallback)(
                (e) => {
                    var t = x.get(i);
                    (e
                        ? (null == t || t.set(d, e), w.set(o, e), b.set(e, o))
                        : (null == t || t.delete(d), w.delete(o), s.current && b.delete(s.current)),
                        (s.current = e));
                },
                [s, i, d, o],
            );
            return l.createElement("span", { "data-slate-node": "text", ref: v }, D);
        },
        (e, t) =>
            t.parent === e.parent &&
            t.isLast === e.isLast &&
            t.renderLeaf === e.renderLeaf &&
            t.renderPlaceholder === e.renderPlaceholder &&
            t.text === e.text &&
            ((e, t) => {
                if (e.length !== t.length) return !1;
                for (var r = 0; r < e.length; r++) {
                    var u = e[r],
                        n = t[r];
                    if (u.anchor.offset !== n.anchor.offset || u.focus.offset !== n.focus.offset || !eg(u, n))
                        return !1;
                }
                return !0;
            })(t.decorations, e.decorations),
    ),
    ek = l.memo(
        (e) => {
            var {
                    decorations: t,
                    element: r,
                    renderElement: u = (e) => l.createElement(eP, Object.assign({}, e)),
                    renderPlaceholder: a,
                    renderLeaf: o,
                    selection: i,
                } = e,
                s = ew(),
                c = eM(),
                d = s.isInline(r),
                D = eC.findKey(s, r),
                h = (0, l.useCallback)(
                    (e) => {
                        var t = x.get(s);
                        e
                            ? (null == t || t.set(D, e), w.set(r, e), b.set(e, r))
                            : (null == t || t.delete(D), w.delete(r));
                    },
                    [s, D, r],
                ),
                C = eR({
                    decorations: t,
                    node: r,
                    renderElement: u,
                    renderPlaceholder: a,
                    renderLeaf: o,
                    selection: i,
                }),
                v = { "data-slate-node": "element", ref: h };
            if ((d && (v["data-slate-inline"] = !0), !d && f.KE.hasInlines(s, r))) {
                var p = f.bP.string(r),
                    g = n()(p);
                "rtl" === g && (v.dir = g);
            }
            if (f.KE.isVoid(s, r)) {
                ((v["data-slate-void"] = !0), !c && d && (v.contentEditable = !1));
                var [[A]] = f.bP.texts(r);
                ((C = l.createElement(
                    d ? "span" : "div",
                    {
                        "data-slate-spacer": !0,
                        style: { height: "0", color: "transparent", outline: "none", position: "absolute" },
                    },
                    l.createElement(eO, { renderPlaceholder: a, decorations: [], isLast: !1, parent: r, text: A }),
                )),
                    B.set(A, 0),
                    E.set(A, r));
            }
            return u({ attributes: v, children: C, element: r, decorations: t });
        },
        (e, t) =>
            e.element === t.element &&
            e.renderElement === t.renderElement &&
            e.renderLeaf === t.renderLeaf &&
            e.renderPlaceholder === t.renderPlaceholder &&
            ((e, t) => {
                if (e.length !== t.length) return !1;
                for (var r = 0; r < e.length; r++) {
                    var u = e[r],
                        n = t[r];
                    if (!f.Q6.equals(u, n) || !eg(u, n)) return !1;
                }
                return !0;
            })(e.decorations, t.decorations) &&
            (e.selection === t.selection || (!!e.selection && !!t.selection && f.Q6.equals(e.selection, t.selection))),
    ),
    eP = (e) => {
        var { attributes: t, children: r, element: u } = e,
            n = ew().isInline(u) ? "span" : "div";
        return l.createElement(n, Object.assign({}, t, { style: { position: "relative" } }), r);
    },
    eS = (0, l.createContext)(() => []),
    eT = (0, l.createContext)(!1),
    ej = () => (0, l.useContext)(eT),
    eR = (e) => {
        for (
            var { decorations: t, node: r, renderElement: u, renderPlaceholder: n, renderLeaf: a, selection: o } = e,
                i = (0, l.useContext)(eS),
                s = ew(),
                c = eC.findPath(s, r),
                d = [],
                D = f.Hg.isElement(r) && !s.isInline(r) && f.KE.hasInlines(s, r),
                h = f.Hg.isElement(r) && null != s.rendersTrailingNewline && s.rendersTrailingNewline(r),
                C = 0;
            C < r.children.length;
            C++
        ) {
            var v = c.concat(C),
                p = r.children[C],
                g = eC.findKey(s, p),
                A = f.KE.range(s, v),
                F = o && f.Q6.intersection(A, o),
                m = i([p, v]);
            for (var b of t) {
                var w = f.Q6.intersection(b, A);
                w && m.push(w);
            }
            (f.Hg.isElement(p)
                ? d.push(
                      l.createElement(
                          eT.Provider,
                          { key: "provider-".concat(g.id), value: !!F },
                          l.createElement(ek, {
                              decorations: m,
                              element: p,
                              key: g.id,
                              renderElement: u,
                              renderPlaceholder: n,
                              renderLeaf: a,
                              selection: F,
                          }),
                      ),
                  )
                : d.push(
                      l.createElement(eO, {
                          decorations: m,
                          key: g.id,
                          isLast: (D || h) && C === r.children.length - 1,
                          parent: r,
                          renderPlaceholder: n,
                          renderLeaf: a,
                          text: p,
                      }),
                  ),
                B.set(p, C),
                E.set(p, r));
        }
        return d;
    },
    eN = (0, l.createContext)(!1),
    eM = () => (0, l.useContext)(eN),
    eK = (0, l.createContext)(null),
    eW = {
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
    e_ = {
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
    eL = {
        deleteWordBackward: "ctrl+shift?+backspace",
        deleteWordForward: "ctrl+shift?+delete",
        redo: ["ctrl+y", "ctrl+shift+z"],
    },
    ez = (e) => {
        var t = eW[e],
            r = e_[e],
            u = eL[e],
            n = t && (0, D.isKeyHotkey)(t),
            a = r && (0, D.isKeyHotkey)(r),
            o = u && (0, D.isKeyHotkey)(u);
        return (e) => !!((n && n(e)) || (er && a && a(e)) || (!er && o && o(e)));
    },
    eI = {
        isBold: ez("bold"),
        isCompose: ez("compose"),
        isMoveBackward: ez("moveBackward"),
        isMoveForward: ez("moveForward"),
        isDeleteBackward: ez("deleteBackward"),
        isDeleteForward: ez("deleteForward"),
        isDeleteLineBackward: ez("deleteLineBackward"),
        isDeleteLineForward: ez("deleteLineForward"),
        isDeleteWordBackward: ez("deleteWordBackward"),
        isDeleteWordForward: ez("deleteWordForward"),
        isExtendBackward: ez("extendBackward"),
        isExtendForward: ez("extendForward"),
        isExtendLineBackward: ez("extendLineBackward"),
        isExtendLineForward: ez("extendLineForward"),
        isItalic: ez("italic"),
        isMoveLineBackward: ez("moveLineBackward"),
        isMoveLineForward: ez("moveLineForward"),
        isMoveWordBackward: ez("moveWordBackward"),
        isMoveWordForward: ez("moveWordForward"),
        isRedo: ez("redo"),
        isSoftBreak: ez("insertSoftBreak"),
        isSplitBlock: ez("splitBlock"),
        isTransposeCharacter: ez("transposeCharacter"),
        isUndo: ez("undo"),
    },
    eq = { subtree: !0, childList: !0, characterData: !0, characterDataOldValue: !0 };
class eV extends l.Component {
    constructor() {
        (super(...arguments), (this.context = null), (this.manager = null), (this.mutationObserver = null));
    }
    observe() {
        var e,
            { node: t } = this.props;
        if (!t.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
        null == (e = this.mutationObserver) || e.observe(t.current, eq);
    }
    componentDidMount() {
        var e,
            t,
            { receivedUserInput: r } = this.props,
            u = this.context;
        ((this.manager =
            ((e = []),
            {
                registerMutations: (t) => {
                    if (r.current) {
                        var n = t.filter((e) => G(u, e, t));
                        e.push(...n);
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
            this.observe());
    }
    getSnapshotBeforeUpdate() {
        var e,
            t,
            r,
            u,
            n = null == (e = this.mutationObserver) ? void 0 : e.takeRecords();
        return (
            null != n && n.length && (null == (u = this.manager) || u.registerMutations(n)),
            null == (t = this.mutationObserver) || t.disconnect(),
            null == (r = this.manager) || r.restoreDOM(),
            null
        );
    }
    componentDidUpdate() {
        var e;
        (null == (e = this.manager) || e.clear(), this.observe());
    }
    componentWillUnmount() {
        var e;
        null == (e = this.mutationObserver) || e.disconnect();
    }
    render() {
        return this.props.children;
    }
}
eV.contextType = eb;
var eQ = eu
    ? eV
    : (e) => {
          var { children: t } = e;
          return l.createElement(l.Fragment, null, t);
      };
function eH(e) {
    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++) r[u - 1] = arguments[u];
    return r.reduce((e, t) => e.slice(0, t.start) + t.text + e.slice(t.end), e);
}
function eU(e, t) {
    var { start: r, end: u, text: n } = t,
        a = e.slice(r, u),
        o = (function (e, t) {
            for (var r = Math.min(e.length, t.length), u = 0; u < r; u++) if (e.charAt(u) !== t.charAt(u)) return u;
            return r;
        })(a, n),
        i = Math.min(a.length - o, n.length - o),
        s = (function (e, t, r) {
            for (var u = Math.min(e.length, t.length, r), n = 0; n < u; n++)
                if (e.charAt(e.length - n - 1) !== t.charAt(t.length - n - 1)) return n;
            return u;
        })(a, n, i),
        l = { start: r + o, end: u - s, text: n.slice(o, n.length - s) };
    return l.start === l.end && 0 === l.text.length ? null : l;
}
function eJ(e, t) {
    var { path: r, offset: u } = t;
    if (!f.KE.hasPath(e, r)) return null;
    var n = f.bP.get(e, r);
    if (!f.EY.isText(n)) return null;
    var a = f.KE.above(e, { match: (t) => f.Hg.isElement(t) && f.KE.isBlock(e, t), at: r });
    if (!a) return null;
    for (; u > n.text.length;) {
        var o = f.KE.next(e, { at: r, match: f.EY.isText });
        if (!o || !f.wA.isDescendant(o[1], a[1])) return null;
        ((u -= n.text.length), (n = o[0]), (r = o[1]));
    }
    return { path: r, offset: u };
}
function eX(e, t) {
    var r = eJ(e, t.anchor);
    if (!r) return null;
    if (f.Q6.isCollapsed(t)) return { anchor: r, focus: r };
    var u = eJ(e, t.focus);
    return u ? { anchor: r, focus: u } : null;
}
function eY(e, t, r) {
    var u = M.get(e),
        n =
            null == u
                ? void 0
                : u.find((e) => {
                      var { path: r } = e;
                      return f.wA.equals(r, t.path);
                  });
    if (!n || t.offset <= n.diff.start) return f.bR.transform(t, r, { affinity: "backward" });
    var { diff: a } = n;
    if (t.offset <= a.start + a.text.length) {
        var o = { path: t.path, offset: a.start },
            i = f.bR.transform(o, r, { affinity: "backward" });
        return i ? { path: i.path, offset: i.offset + t.offset - a.start } : null;
    }
    var s = { path: t.path, offset: t.offset - a.text.length + a.end - a.start },
        l = f.bR.transform(s, r, { affinity: "backward" });
    return l
        ? "split_node" === r.type && f.wA.equals(r.path, t.path) && s.offset < r.position && a.start < r.position
            ? l
            : { path: l.path, offset: l.offset + a.text.length - a.end + a.start }
        : null;
}
function e$(e, t, r) {
    var u = eY(e, t.anchor, r);
    if (!u) return null;
    if (f.Q6.isCollapsed(t)) return { anchor: u, focus: u };
    var n = eY(e, t.focus, r);
    return n ? { anchor: u, focus: n } : null;
}
function eZ(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var u = Object.getOwnPropertySymbols(e);
        (t &&
            (u = u.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u));
    }
    return r;
}
function eG(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? eZ(Object(r), !0).forEach(function (t) {
                  C(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eZ(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var e0 = function () {},
    e1 = ["node"];
function e3(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var u = Object.getOwnPropertySymbols(e);
        (t &&
            (u = u.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u));
    }
    return r;
}
var e2 = { subtree: !0, childList: !0, characterData: !0 },
    e7 = [
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
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var u = Object.getOwnPropertySymbols(e);
        (t &&
            (u = u.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u));
    }
    return r;
}
function e5(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? e4(Object(r), !0).forEach(function (t) {
                  C(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : e4(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var e9 = (e) => l.createElement(l.Fragment, null, eR(e)),
    e6 = (e) => {
        var t,
            r,
            u,
            a,
            i,
            c,
            d = (0, l.useCallback)((e) => l.createElement(te, Object.assign({}, e)), []),
            {
                autoFocus: D,
                decorate: h = tt,
                onDOMBeforeInput: p,
                placeholder: g,
                readOnly: B = !1,
                renderElement: E,
                renderLeaf: y,
                renderPlaceholder: x = d,
                scrollSelectionIntoView: T = tr,
                style: I = {},
                as: V = "div",
                disableDefaultStyles: J = !1,
            } = e,
            X = v(e, e7),
            Y = (() => {
                var e = (0, l.useContext)(eK);
                if (!e) throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
                var { editor: t } = e;
                return t;
            })(),
            [$, Z] = (0, l.useState)(!1),
            ee = (0, l.useRef)(null),
            er = (0, l.useRef)([]),
            { onUserInput: eo, receivedUserInput: es } =
                ((t = ew()),
                (r = (0, l.useRef)(!1)),
                (u = (0, l.useRef)(0)),
                (a = (0, l.useCallback)(() => {
                    if (!r.current) {
                        r.current = !0;
                        var e = eC.getWindow(t);
                        (e.cancelAnimationFrame(u.current),
                            (u.current = e.requestAnimationFrame(() => {
                                r.current = !1;
                            })));
                    }
                }, [])),
                (0, l.useEffect)(() => () => cancelAnimationFrame(u.current), []),
                { receivedUserInput: r, onUserInput: a }),
            [, el] = (0, l.useReducer)((e) => e + 1, 0);
        (_.set(Y, el), O.set(Y, B));
        var ev = (0, l.useMemo)(
            () => ({ isDraggingInternally: !1, isUpdatingSelection: !1, latestElement: null, hasMarkPlaceholder: !1 }),
            [],
        );
        ((0, l.useLayoutEffect)(
            () => () => {
                null == ev || (null != ev.latestElement && (ev.latestElement.remove(), (ev.latestElement = null)));
            },
            [],
        ),
            (0, l.useEffect)(() => {
                ee.current && D && ee.current.focus();
            }, [D]));
        var ep = (0, l.useCallback)(
                s()(() => {
                    if (
                        (eu || !eC.isComposing(Y)) &&
                        (!ev.isUpdatingSelection || (null != eE && eE.isFlushing())) &&
                        !ev.isDraggingInternally
                    ) {
                        var e = eC.findDocumentOrShadowRoot(Y),
                            { activeElement: t } = e,
                            r = eC.toDOMNode(Y, Y),
                            u = e.getSelection();
                        if ((t === r ? ((ev.latestElement = t), k.set(Y, !0)) : k.delete(Y), !u))
                            return f.gB.deselect(Y);
                        var { anchorNode: n, focusNode: a } = u,
                            o = eC.hasEditableTarget(Y, n) || eC.isTargetInsideNonReadonlyVoid(Y, n),
                            i = eC.hasEditableTarget(Y, a) || eC.isTargetInsideNonReadonlyVoid(Y, a);
                        if (o && i) {
                            var s = eC.toSlateRange(Y, u, { exactMatch: !1, suppressThrow: !0 });
                            s &&
                                (eC.isComposing(Y) ||
                                (null != eE && eE.hasPendingChanges()) ||
                                (null != eE && eE.isFlushing())
                                    ? null == eE || eE.handleUserSelect(s)
                                    : f.gB.select(Y, s));
                        }
                        !B || (o && i) || f.gB.deselect(Y);
                    }
                }, 100),
                [B],
            ),
            eg = (0, l.useMemo)(() => o()(ep, 0), [ep]),
            eE = (function (e) {
                var t,
                    { node: r } = e,
                    u = v(e, e1);
                if (!eu) return null;
                var n = ew(),
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
                            var { editor: t, scheduleOnDOMSelectionChange: r, onDOMSelectionChange: u } = e,
                                n = !1,
                                a = null,
                                o = null,
                                i = null,
                                s = 0,
                                l = !1,
                                c = () => {
                                    var e = W.get(t);
                                    if ((W.delete(t), e)) {
                                        var { selection: r } = t,
                                            u = eX(t, e);
                                        !u || (r && f.Q6.equals(u, r)) || f.gB.select(t, u);
                                    }
                                },
                                d = () => {
                                    if (
                                        (o && (clearTimeout(o), (o = null)),
                                        i && (clearTimeout(i), (i = null)),
                                        !p() && !v())
                                    )
                                        return void c();
                                    (n || ((n = !0), setTimeout(() => (n = !1))), v() && (n = "action"));
                                    var e = t.selection && f.KE.rangeRef(t, t.selection, { affinity: "forward" });
                                    (N.set(t, t.marks), e0("flush", K.get(t), M.get(t)));
                                    for (var a = p(); (s = null == (d = M.get(t)) ? void 0 : d[0]);) {
                                        var s,
                                            d,
                                            D,
                                            h = R.get(t);
                                        (void 0 !== h && (R.delete(t), (t.marks = h)), h && !1 === l && (l = null));
                                        var C = (function (e) {
                                            var { path: t, diff: r } = e;
                                            return {
                                                anchor: { path: t, offset: r.start },
                                                focus: { path: t, offset: r.end },
                                            };
                                        })(s);
                                        ((t.selection && f.Q6.equals(t.selection, C)) || f.gB.select(t, C),
                                            s.diff.text ? f.KE.insertText(t, s.diff.text) : f.KE.deleteFragment(t),
                                            M.set(
                                                t,
                                                null == (D = M.get(t))
                                                    ? void 0
                                                    : D.filter((e) => {
                                                          var { id: t } = e;
                                                          return t !== s.id;
                                                      }),
                                            ),
                                            !(function (e, t) {
                                                var { path: r, diff: u } = t;
                                                if (!f.KE.hasPath(e, r)) return !1;
                                                var n = f.bP.get(e, r);
                                                if (!f.EY.isText(n)) return !1;
                                                if (u.start !== n.text.length || 0 === u.text.length)
                                                    return n.text.slice(u.start, u.start + u.text.length) === u.text;
                                                var a = f.wA.next(r);
                                                if (!f.KE.hasPath(e, a)) return !1;
                                                var o = f.bP.get(e, a);
                                                return f.EY.isText(o) && o.text.startsWith(u.text);
                                            })(t, s) &&
                                                ((a = !1),
                                                K.delete(t),
                                                N.delete(t),
                                                (n = "action"),
                                                W.delete(t),
                                                r.cancel(),
                                                u.cancel(),
                                                null == e || e.unref()));
                                    }
                                    var g = null == e ? void 0 : e.unref();
                                    if (
                                        (!g ||
                                            W.get(t) ||
                                            (t.selection && f.Q6.equals(g, t.selection)) ||
                                            f.gB.select(t, g),
                                        v())
                                    )
                                        return void (() => {
                                            var e = K.get(t);
                                            if ((K.delete(t), e)) {
                                                if (e.at) {
                                                    var r = f.bR.isPoint(e.at) ? eJ(t, e.at) : eX(t, e.at);
                                                    if (!r) return;
                                                    var u = f.KE.range(t, r);
                                                    (t.selection && f.Q6.equals(t.selection, u)) || f.gB.select(t, r);
                                                }
                                                e.run();
                                            }
                                        })();
                                    (a && r(), r.flush(), u.flush(), c());
                                    var B = N.get(t);
                                    (N.delete(t), void 0 !== B && ((t.marks = B), t.onChange()));
                                },
                                D = function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                        r = m.get(t);
                                    if (r) {
                                        if (p() || e) {
                                            r.style.display = "none";
                                            return;
                                        }
                                        r.style.removeProperty("display");
                                    }
                                },
                                h = (e, r) => {
                                    var u,
                                        n,
                                        a,
                                        o,
                                        i,
                                        l,
                                        c,
                                        d,
                                        h = null != (d = M.get(t)) ? d : [];
                                    M.set(t, h);
                                    var C = f.bP.leaf(t, e),
                                        v = h.findIndex((t) => f.wA.equals(t.path, e));
                                    if (v < 0) {
                                        (eU(C.text, r) && h.push({ path: e, diff: r, id: s++ }), D());
                                        return;
                                    }
                                    var p =
                                        ((u = C.text),
                                        (n = h[v].diff),
                                        (a = Math.min(n.start, r.start)),
                                        (o = Math.max(0, Math.min(n.start + n.text.length, r.end) - r.start)),
                                        (i = eH(u, n, r)),
                                        (l = Math.max(
                                            r.start + r.text.length,
                                            n.start +
                                                n.text.length +
                                                (n.start + n.text.length > r.start ? r.text.length : 0) -
                                                o,
                                        )),
                                        (c = i.slice(a, l)),
                                        eU(u, {
                                            start: a,
                                            end: Math.max(n.end, r.end - n.text.length + (n.end - n.start)),
                                            text: c,
                                        }));
                                    if (!p) {
                                        (h.splice(v, 1), D());
                                        return;
                                    }
                                    h[v] = eG(eG({}, h[v]), {}, { diff: p });
                                },
                                C = function (e) {
                                    var { at: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    ((l = !1),
                                        W.delete(t),
                                        r.cancel(),
                                        u.cancel(),
                                        v() && d(),
                                        K.set(t, { at: n, run: e }),
                                        (i = setTimeout(d)));
                                },
                                v = () => !!K.get(t),
                                p = () => {
                                    var e;
                                    return !!(null != (e = M.get(t)) && e.length);
                                },
                                g = (e) => {
                                    (W.set(t, e), o && (clearTimeout(o), (o = null)));
                                    var { selection: r } = t;
                                    if (e) {
                                        var u = !r || !f.wA.equals(r.anchor.path, e.anchor.path),
                                            n =
                                                !r ||
                                                !f.wA.equals(r.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
                                        (((u && l) || n) && (l = !1), (u || p()) && (o = setTimeout(d, 200)));
                                    }
                                },
                                B = () => {
                                    v() || (i = setTimeout(d));
                                };
                            return {
                                flush: d,
                                scheduleFlush: B,
                                hasPendingDiffs: p,
                                hasPendingAction: v,
                                hasPendingChanges: () => v() || p(),
                                isFlushing: () => n,
                                handleUserSelect: g,
                                handleCompositionEnd: (e) => {
                                    (a && clearTimeout(a),
                                        (a = setTimeout(() => {
                                            (P.set(t, !1), d());
                                        }, 25)));
                                },
                                handleCompositionStart: (e) => {
                                    (P.set(t, !0), a && (clearTimeout(a), (a = null)));
                                },
                                handleDOMBeforeInput: (e) => {
                                    o && (clearTimeout(o), (o = null));
                                    var { inputType: r } = e,
                                        u = null,
                                        n = e.dataTransfer || e.data || void 0;
                                    !1 !== l && "insertText" !== r && "insertCompositionText" !== r && (l = !1);
                                    var [a] = e.getTargetRanges();
                                    a && (u = eC.toSlateRange(t, a, { exactMatch: !1, suppressThrow: !0 }));
                                    var i = eC.getWindow(t).getSelection();
                                    if (
                                        (!u &&
                                            i &&
                                            ((a = i),
                                            (u = eC.toSlateRange(t, i, { exactMatch: !1, suppressThrow: !0 }))),
                                        (u = null != (P = u) ? P : t.selection))
                                    ) {
                                        var s = !0;
                                        if (r.startsWith("delete")) {
                                            if (f.Q6.isExpanded(u)) {
                                                var [c, d] = f.Q6.edges(u);
                                                if (f.bP.leaf(t, c.path).text.length === c.offset && 0 === d.offset) {
                                                    var D = f.KE.next(t, { at: c.path, match: f.EY.isText });
                                                    D && f.wA.equals(D[1], d.path) && (u = { anchor: d, focus: d });
                                                }
                                            }
                                            var v = r.endsWith("Backward") ? "backward" : "forward",
                                                [p, E] = f.Q6.edges(u),
                                                [A, F] = f.KE.leaf(t, p.path),
                                                m = { text: "", start: p.offset, end: E.offset },
                                                b = M.get(t),
                                                w = null == b ? void 0 : b.find((e) => f.wA.equals(e.path, F)),
                                                y = w ? [w.diff, m] : [m];
                                            if ((0 === eH(A.text, ...y).length && (s = !1), f.Q6.isExpanded(u))) {
                                                if (s && f.wA.equals(u.anchor.path, u.focus.path)) {
                                                    var x = { path: u.anchor.path, offset: p.offset };
                                                    return (
                                                        g(f.KE.range(t, x, x)),
                                                        h(u.anchor.path, { text: "", end: E.offset, start: p.offset })
                                                    );
                                                }
                                                return C(() => f.KE.deleteFragment(t, { direction: v }), { at: u });
                                            }
                                        }
                                        switch (r) {
                                            case "deleteByComposition":
                                            case "deleteByCut":
                                            case "deleteByDrag":
                                                return C(() => f.KE.deleteFragment(t), { at: u });
                                            case "deleteContent":
                                            case "deleteContentForward":
                                                var { anchor: O } = u;
                                                if (s && f.Q6.isCollapsed(u)) {
                                                    var k = f.bP.leaf(t, O.path);
                                                    if (O.offset < k.text.length)
                                                        return h(O.path, {
                                                            text: "",
                                                            start: O.offset,
                                                            end: O.offset + 1,
                                                        });
                                                }
                                                return C(() => f.KE.deleteForward(t), { at: u });
                                            case "deleteContentBackward":
                                                var P,
                                                    S,
                                                    { anchor: T } = u,
                                                    j = U(a) ? a.isCollapsed : !!(null != (S = a) && S.collapsed);
                                                if (s && j && f.Q6.isCollapsed(u) && T.offset > 0)
                                                    return h(T.path, { text: "", start: T.offset - 1, end: T.offset });
                                                return C(() => f.KE.deleteBackward(t), { at: u });
                                            case "deleteEntireSoftLine":
                                                return C(
                                                    () => {
                                                        (f.KE.deleteBackward(t, { unit: "line" }),
                                                            f.KE.deleteForward(t, { unit: "line" }));
                                                    },
                                                    { at: u },
                                                );
                                            case "deleteHardLineBackward":
                                                return C(() => f.KE.deleteBackward(t, { unit: "block" }), { at: u });
                                            case "deleteSoftLineBackward":
                                                return C(() => f.KE.deleteBackward(t, { unit: "line" }), { at: u });
                                            case "deleteHardLineForward":
                                                return C(() => f.KE.deleteForward(t, { unit: "block" }), { at: u });
                                            case "deleteSoftLineForward":
                                                return C(() => f.KE.deleteForward(t, { unit: "line" }), { at: u });
                                            case "deleteWordBackward":
                                                return C(() => f.KE.deleteBackward(t, { unit: "word" }), { at: u });
                                            case "deleteWordForward":
                                                return C(() => f.KE.deleteForward(t, { unit: "word" }), { at: u });
                                            case "insertLineBreak":
                                                return C(() => f.KE.insertSoftBreak(t), { at: u });
                                            case "insertParagraph":
                                                return C(() => f.KE.insertBreak(t), { at: u });
                                            case "insertCompositionText":
                                            case "deleteCompositionText":
                                            case "insertFromComposition":
                                            case "insertFromDrop":
                                            case "insertFromPaste":
                                            case "insertFromYank":
                                            case "insertReplacementText":
                                            case "insertText":
                                                if ((null == n ? void 0 : n.constructor.name) === "DataTransfer")
                                                    return C(() => eC.insertData(t, n), { at: u });
                                                var N = null != n ? n : "";
                                                if (
                                                    (R.get(t) && (N = N.replace("\uFEFF", "")),
                                                    "insertText" === r && /.*\n.*\n$/.test(N) && (N = N.slice(0, -1)),
                                                    N.includes("\n"))
                                                )
                                                    return C(
                                                        () => {
                                                            var e = N.split("\n");
                                                            e.forEach((r, u) => {
                                                                (r && f.KE.insertText(t, r),
                                                                    u !== e.length - 1 && f.KE.insertSoftBreak(t));
                                                            });
                                                        },
                                                        { at: u },
                                                    );
                                                if (f.wA.equals(u.anchor.path, u.focus.path)) {
                                                    var [K, W] = f.Q6.edges(u),
                                                        _ = { start: K.offset, end: W.offset, text: N };
                                                    if (N && l && "insertCompositionText" === r) {
                                                        var L = l.start + l.text.search(/\S|$/);
                                                        _.start + _.text.search(/\S|$/) === L + 1 &&
                                                        _.end === l.start + l.text.length
                                                            ? ((_.start -= 1), (l = null), B())
                                                            : (l = !1);
                                                    } else
                                                        l =
                                                            "insertText" === r &&
                                                            (null === l
                                                                ? _
                                                                : !!(l && f.Q6.isCollapsed(u)) &&
                                                                  l.end + l.text.length === K.offset &&
                                                                  eG(eG({}, l), {}, { text: l.text + N }));
                                                    if (s) return void h(K.path, _);
                                                }
                                                return C(() => f.KE.insertText(t, N), { at: u });
                                        }
                                    }
                                },
                                handleKeyDown: (e) => {
                                    p() || (D(!0), setTimeout(D));
                                },
                                handleDomMutations: (e) => {
                                    if (!(p() || v()) && e.some((r) => G(t, r, e))) {
                                        var r;
                                        null == (r = _.get(t)) || r();
                                    }
                                },
                                handleInput: () => {
                                    (v() || !p()) && d();
                                },
                            };
                        })(
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? e3(Object(r), !0).forEach(function (t) {
                                              C(e, t, r[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                                          : e3(Object(r)).forEach(function (t) {
                                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                                            });
                                }
                                return e;
                            })({ editor: n }, u),
                        ),
                    );
                return (
                    !(function (e, t, r) {
                        var [u] = (0, l.useState)(() => new MutationObserver(t));
                        (eB(() => {
                            u.takeRecords();
                        }),
                            (0, l.useEffect)(() => {
                                if (!e.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
                                return (u.observe(e.current, r), () => u.disconnect());
                            }, []));
                    })(r, o.handleDomMutations, e2),
                    j.set(n, o.scheduleFlush),
                    a && o.flush(),
                    o
                );
            })({ node: ee, onDOMSelectionChange: ep, scheduleOnDOMSelectionChange: eg });
        eB(() => {
            ee.current && (e = q(ee.current))
                ? (A.set(Y, e), F.set(Y, ee.current), w.set(Y, ee.current), b.set(ee.current, Y))
                : w.delete(Y);
            var e,
                { selection: t } = Y,
                r = eC.findDocumentOrShadowRoot(Y).getSelection();
            if (!(!r || !eC.isFocused(Y) || (null != eE && eE.hasPendingAction()))) {
                var u = (e) => {
                        var u = "None" !== r.type;
                        if (t || u) {
                            var n = F.get(Y),
                                a = !1;
                            if ((n.contains(r.anchorNode) && n.contains(r.focusNode) && (a = !0), u && a && t && !e)) {
                                var o = eC.toSlateRange(Y, r, { exactMatch: !0, suppressThrow: !0 }),
                                    i =
                                        (null == r.anchorNode ||
                                            3 !== r.anchorNode.nodeType ||
                                            null == r.focusNode ||
                                            3 !== r.focusNode.nodeType) &&
                                        !eC.isComposing(Y);
                                if (o && f.Q6.equals(o, t) && !i) {
                                    if (!ev.hasMarkPlaceholder) return;
                                    var s,
                                        { anchorNode: l } = r;
                                    if (
                                        null != l &&
                                        null != (s = l.parentElement) &&
                                        s.hasAttribute("data-slate-mark-placeholder")
                                    )
                                        return;
                                }
                            }
                            if (t && !eC.hasRange(Y, t)) {
                                Y.selection = eC.toSlateRange(Y, r, { exactMatch: !1, suppressThrow: !0 });
                                return;
                            }
                            ev.isUpdatingSelection = !0;
                            var c = t && eC.toDOMRange(Y, t);
                            return (
                                c
                                    ? (f.Q6.isBackward(t)
                                          ? r.setBaseAndExtent(
                                                c.endContainer,
                                                c.endOffset,
                                                c.startContainer,
                                                c.startOffset,
                                            )
                                          : r.setBaseAndExtent(
                                                c.startContainer,
                                                c.startOffset,
                                                c.endContainer,
                                                c.endOffset,
                                            ),
                                      T(Y, c))
                                    : r.removeAllRanges(),
                                c
                            );
                        }
                    },
                    n = u(),
                    a = (null == eE ? void 0 : eE.isFlushing()) === "action";
                if (!eu || !a)
                    return void setTimeout(() => {
                        (n && en && eC.toDOMNode(Y, Y).focus(), (ev.isUpdatingSelection = !1));
                    });
                var o = null,
                    i = requestAnimationFrame(() => {
                        if (a) {
                            var e = (e) => {
                                try {
                                    (eC.toDOMNode(Y, Y).focus(), u(e));
                                } catch (e) {}
                            };
                            (e(),
                                (o = setTimeout(() => {
                                    (e(!0), (ev.isUpdatingSelection = !1));
                                })));
                        }
                    });
                return () => {
                    (cancelAnimationFrame(i), o && clearTimeout(o));
                };
            }
        });
        var eA = (0, l.useCallback)(
                (e) => {
                    if ((eo(), !B && eC.hasEditableTarget(Y, e.target) && !tn(e, p))) {
                        if (eE) return eE.handleDOMBeforeInput(e);
                        (eg.flush(), ep.flush());
                        var { selection: t } = Y,
                            { inputType: r } = e,
                            u = e.dataTransfer || e.data || void 0,
                            n = "insertCompositionText" === r || "deleteCompositionText" === r;
                        if (!(n && eC.isComposing(Y))) {
                            var a = !1;
                            if (
                                "insertText" === r &&
                                t &&
                                f.Q6.isCollapsed(t) &&
                                e.data &&
                                1 === e.data.length &&
                                /[a-z ]/i.test(e.data) &&
                                0 !== t.anchor.offset
                            ) {
                                ((a = !0), Y.marks && (a = !1));
                                var { anchor: o } = t,
                                    [i, s] = eC.toDOMPoint(Y, o),
                                    l = null == (D = i.parentElement) ? void 0 : D.closest("a"),
                                    c = eC.getWindow(Y);
                                if (a && l && eC.hasDOMNode(Y, l)) {
                                    var d,
                                        D,
                                        h,
                                        C,
                                        v =
                                            null == c
                                                ? void 0
                                                : c.document.createTreeWalker(l, NodeFilter.SHOW_TEXT).lastChild();
                                    v === i && (null == (C = v.textContent) ? void 0 : C.length) === s && (a = !1);
                                }
                                if (
                                    a &&
                                    i.parentElement &&
                                    (null == c || null == (h = c.getComputedStyle(i.parentElement))
                                        ? void 0
                                        : h.whiteSpace) === "pre"
                                ) {
                                    var g = f.KE.above(Y, {
                                        at: o.path,
                                        match: (e) => f.Hg.isElement(e) && f.KE.isBlock(Y, e),
                                    });
                                    g && f.bP.string(g[0]).includes("	") && (a = !1);
                                }
                            }
                            if (!r.startsWith("delete") || r.startsWith("deleteBy")) {
                                var [E] = e.getTargetRanges();
                                if (E) {
                                    var A = eC.toSlateRange(Y, E, { exactMatch: !1, suppressThrow: !1 });
                                    if (!t || !f.Q6.equals(t, A)) {
                                        a = !1;
                                        var F = !n && Y.selection && f.KE.rangeRef(Y, Y.selection);
                                        (f.gB.select(Y, A), F && S.set(Y, F));
                                    }
                                }
                            }
                            if (!n) {
                                if ((a || e.preventDefault(), t && f.Q6.isExpanded(t) && r.startsWith("delete"))) {
                                    var m = r.endsWith("Backward") ? "backward" : "forward";
                                    f.KE.deleteFragment(Y, { direction: m });
                                    return;
                                }
                                switch (r) {
                                    case "deleteByComposition":
                                    case "deleteByCut":
                                    case "deleteByDrag":
                                        f.KE.deleteFragment(Y);
                                        break;
                                    case "deleteContent":
                                    case "deleteContentForward":
                                        f.KE.deleteForward(Y);
                                        break;
                                    case "deleteContentBackward":
                                        f.KE.deleteBackward(Y);
                                        break;
                                    case "deleteEntireSoftLine":
                                        (f.KE.deleteBackward(Y, { unit: "line" }),
                                            f.KE.deleteForward(Y, { unit: "line" }));
                                        break;
                                    case "deleteHardLineBackward":
                                        f.KE.deleteBackward(Y, { unit: "block" });
                                        break;
                                    case "deleteSoftLineBackward":
                                        f.KE.deleteBackward(Y, { unit: "line" });
                                        break;
                                    case "deleteHardLineForward":
                                        f.KE.deleteForward(Y, { unit: "block" });
                                        break;
                                    case "deleteSoftLineForward":
                                        f.KE.deleteForward(Y, { unit: "line" });
                                        break;
                                    case "deleteWordBackward":
                                        f.KE.deleteBackward(Y, { unit: "word" });
                                        break;
                                    case "deleteWordForward":
                                        f.KE.deleteForward(Y, { unit: "word" });
                                        break;
                                    case "insertLineBreak":
                                        f.KE.insertSoftBreak(Y);
                                        break;
                                    case "insertParagraph":
                                        f.KE.insertBreak(Y);
                                        break;
                                    case "insertFromComposition":
                                    case "insertFromDrop":
                                    case "insertFromPaste":
                                    case "insertFromYank":
                                    case "insertReplacementText":
                                    case "insertText":
                                        ("insertFromComposition" === r && eC.isComposing(Y) && (Z(!1), P.set(Y, !1)),
                                            (null == u ? void 0 : u.constructor.name) === "DataTransfer"
                                                ? eC.insertData(Y, u)
                                                : "string" == typeof u &&
                                                  (a
                                                      ? er.current.push(() => f.KE.insertText(Y, u))
                                                      : f.KE.insertText(Y, u)));
                                }
                                var b = null == (d = S.get(Y)) ? void 0 : d.unref();
                                (S.delete(Y), !b || (Y.selection && f.Q6.equals(Y.selection, b)) || f.gB.select(Y, b));
                            }
                        }
                    }
                },
                [B, p],
            ),
            eF = (0, l.useCallback)(
                (e) => {
                    (null == e
                        ? (ep.cancel(),
                          eg.cancel(),
                          F.delete(Y),
                          w.delete(Y),
                          ee.current && eh && ee.current.removeEventListener("beforeinput", eA))
                        : eh && e.addEventListener("beforeinput", eA),
                        (ee.current = e));
                },
                [ee, eA, ep, eg],
            );
        eB(() => {
            var e = eC.getWindow(Y);
            return (
                e.document.addEventListener("selectionchange", eg),
                () => {
                    e.document.removeEventListener("selectionchange", eg);
                }
            );
        }, [eg]);
        var em = h([Y, []]);
        if (g && 1 === Y.children.length && 1 === Array.from(f.bP.texts(Y)).length && "" === f.bP.string(Y) && !$) {
            var eb = f.KE.start(Y, []);
            em.push({ [L]: !0, placeholder: g, anchor: eb, focus: eb });
        }
        var { marks: ey } = Y;
        if (((ev.hasMarkPlaceholder = !1), Y.selection && f.Q6.isCollapsed(Y.selection) && ey)) {
            var { anchor: ex } = Y.selection,
                eO = f.bP.leaf(Y, ex.path),
                ek = v(eO, e8);
            if (!f.EY.equals(eO, ey, { loose: !0 })) {
                ev.hasMarkPlaceholder = !0;
                var eP = Object.fromEntries(Object.keys(ek).map((e) => [e, null]));
                em.push(e5(e5(e5({ [z]: !0 }, eP), ey), {}, { anchor: ex, focus: ex }));
            }
        }
        (0, l.useEffect)(() => {
            setTimeout(() => {
                var { selection: e } = Y;
                if (e) {
                    var { anchor: t } = e,
                        r = f.bP.leaf(Y, t.path);
                    if (ey && !f.EY.equals(r, ey, { loose: !0 })) return void R.set(Y, ey);
                }
                R.delete(Y);
            });
        });
        var eT = null == (i = m.get(Y)) || null == (c = i.getBoundingClientRect()) ? void 0 : c.height;
        return l.createElement(
            eN.Provider,
            { value: B },
            l.createElement(
                eS.Provider,
                { value: h },
                l.createElement(
                    eQ,
                    { node: ee, receivedUserInput: es },
                    l.createElement(
                        V,
                        Object.assign({ role: B ? void 0 : "textbox", "aria-multiline": !B || void 0 }, X, {
                            spellCheck: (!!eh || !eD) && X.spellCheck,
                            autoCorrect: eh || !eD ? X.autoCorrect : "false",
                            autoCapitalize: eh || !eD ? X.autoCapitalize : "false",
                            "data-slate-editor": !0,
                            "data-slate-node": "value",
                            contentEditable: !B,
                            zindex: -1,
                            suppressContentEditableWarning: !0,
                            ref: eF,
                            style: e5(
                                e5(
                                    {},
                                    J
                                        ? {}
                                        : e5(
                                              {
                                                  position: "relative",
                                                  outline: "none",
                                                  whiteSpace: "pre-wrap",
                                                  wordWrap: "break-word",
                                              },
                                              eT ? { minHeight: eT } : {},
                                          ),
                                ),
                                I,
                            ),
                            onBeforeInput: (0, l.useCallback)(
                                (e) => {
                                    if (
                                        !eh &&
                                        !B &&
                                        !tu(e, X.onBeforeInput) &&
                                        eC.hasSelectableTarget(Y, e.target) &&
                                        (e.preventDefault(), !eC.isComposing(Y))
                                    ) {
                                        var t = e.data;
                                        f.KE.insertText(Y, t);
                                    }
                                },
                                [B],
                            ),
                            onInput: (0, l.useCallback)((e) => {
                                if (!tu(e, X.onInput)) {
                                    if (eE) return void eE.handleInput();
                                    for (var t of er.current) t();
                                    er.current = [];
                                }
                            }, []),
                            onBlur: (0, l.useCallback)(
                                (e) => {
                                    if (
                                        B ||
                                        ev.isUpdatingSelection ||
                                        !eC.hasSelectableTarget(Y, e.target) ||
                                        tu(e, X.onBlur)
                                    )
                                        return;
                                    var t = eC.findDocumentOrShadowRoot(Y);
                                    if (ev.latestElement !== t.activeElement) {
                                        var { relatedTarget: r } = e;
                                        if (
                                            r !== eC.toDOMNode(Y, Y) &&
                                            !(Q(r) && r.hasAttribute("data-slate-spacer"))
                                        ) {
                                            if (null != r && H(r) && eC.hasDOMNode(Y, r)) {
                                                var u = eC.toSlateNode(Y, r);
                                                if (f.Hg.isElement(u) && !Y.isVoid(u)) return;
                                            }
                                            if (ea) {
                                                var n = t.getSelection();
                                                null == n || n.removeAllRanges();
                                            }
                                            k.delete(Y);
                                        }
                                    }
                                },
                                [B, X.onBlur],
                            ),
                            onClick: (0, l.useCallback)(
                                (e) => {
                                    if (eC.hasTarget(Y, e.target) && !tu(e, X.onClick) && H(e.target)) {
                                        var t = eC.toSlateNode(Y, e.target),
                                            r = eC.findPath(Y, t);
                                        if (f.KE.hasPath(Y, r) && f.bP.get(Y, r) === t) {
                                            if (3 === e.detail && r.length >= 1) {
                                                var u = r;
                                                if (!(f.Hg.isElement(t) && f.KE.isBlock(Y, t))) {
                                                    var n,
                                                        a = f.KE.above(Y, {
                                                            match: (e) => f.Hg.isElement(e) && f.KE.isBlock(Y, e),
                                                            at: r,
                                                        });
                                                    u = null != (n = null == a ? void 0 : a[1]) ? n : r.slice(0, 1);
                                                }
                                                var o = f.KE.range(Y, u);
                                                f.gB.select(Y, o);
                                                return;
                                            }
                                            if (!B) {
                                                var i = f.KE.start(Y, r),
                                                    s = f.KE.end(Y, r),
                                                    l = f.KE.void(Y, { at: i }),
                                                    c = f.KE.void(Y, { at: s });
                                                if (l && c && f.wA.equals(l[1], c[1])) {
                                                    var d = f.KE.range(Y, i);
                                                    f.gB.select(Y, d);
                                                }
                                            }
                                        }
                                    }
                                },
                                [B, X.onClick],
                            ),
                            onCompositionEnd: (0, l.useCallback)(
                                (e) => {
                                    if (
                                        eC.hasSelectableTarget(Y, e.target) &&
                                        (eC.isComposing(Y) && (Z(!1), P.set(Y, !1)),
                                        null == eE || eE.handleCompositionEnd(e),
                                        !tu(e, X.onCompositionEnd) && !eu && !ea && !ec && !et && !ed && !ef) &&
                                        e.data
                                    ) {
                                        var t = R.get(Y);
                                        (R.delete(Y),
                                            void 0 !== t && (N.set(Y, Y.marks), (Y.marks = t)),
                                            f.KE.insertText(Y, e.data));
                                        var r = N.get(Y);
                                        (N.delete(Y), void 0 !== r && (Y.marks = r));
                                    }
                                },
                                [X.onCompositionEnd],
                            ),
                            onCompositionUpdate: (0, l.useCallback)(
                                (e) => {
                                    !eC.hasSelectableTarget(Y, e.target) ||
                                        tu(e, X.onCompositionUpdate) ||
                                        eC.isComposing(Y) ||
                                        (Z(!0), P.set(Y, !0));
                                },
                                [X.onCompositionUpdate],
                            ),
                            onCompositionStart: (0, l.useCallback)(
                                (e) => {
                                    if (
                                        eC.hasSelectableTarget(Y, e.target) &&
                                        (null == eE || eE.handleCompositionStart(e),
                                        !tu(e, X.onCompositionStart) && !eu)
                                    ) {
                                        Z(!0);
                                        var { selection: t } = Y;
                                        if (t) {
                                            if (f.Q6.isExpanded(t)) return void f.KE.deleteFragment(Y);
                                            var r = f.KE.above(Y, {
                                                match: (e) => f.Hg.isElement(e) && f.KE.isInline(Y, e),
                                                mode: "highest",
                                            });
                                            if (r) {
                                                var [, u] = r;
                                                if (f.KE.isEnd(Y, t.anchor, u)) {
                                                    var n = f.KE.after(Y, u);
                                                    f.gB.setSelection(Y, { anchor: n, focus: n });
                                                }
                                            }
                                        }
                                    }
                                },
                                [X.onCompositionStart],
                            ),
                            onCopy: (0, l.useCallback)(
                                (e) => {
                                    eC.hasSelectableTarget(Y, e.target) &&
                                        !tu(e, X.onCopy) &&
                                        (e.preventDefault(), eC.setFragmentData(Y, e.clipboardData, "copy"));
                                },
                                [X.onCopy],
                            ),
                            onCut: (0, l.useCallback)(
                                (e) => {
                                    if (!B && eC.hasSelectableTarget(Y, e.target) && !tu(e, X.onCut)) {
                                        (e.preventDefault(), eC.setFragmentData(Y, e.clipboardData, "cut"));
                                        var { selection: t } = Y;
                                        if (t)
                                            if (f.Q6.isExpanded(t)) f.KE.deleteFragment(Y);
                                            else {
                                                var r = f.bP.parent(Y, t.anchor.path);
                                                f.KE.isVoid(Y, r) && f.gB.delete(Y);
                                            }
                                    }
                                },
                                [B, X.onCut],
                            ),
                            onDragOver: (0, l.useCallback)(
                                (e) => {
                                    if (eC.hasTarget(Y, e.target) && !tu(e, X.onDragOver)) {
                                        var t = eC.toSlateNode(Y, e.target);
                                        f.Hg.isElement(t) && f.KE.isVoid(Y, t) && e.preventDefault();
                                    }
                                },
                                [X.onDragOver],
                            ),
                            onDragStart: (0, l.useCallback)(
                                (e) => {
                                    if (!B && eC.hasTarget(Y, e.target) && !tu(e, X.onDragStart)) {
                                        var t = eC.toSlateNode(Y, e.target),
                                            r = eC.findPath(Y, t);
                                        if (
                                            (f.Hg.isElement(t) && f.KE.isVoid(Y, t)) ||
                                            f.KE.void(Y, { at: r, voids: !0 })
                                        ) {
                                            var u = f.KE.range(Y, r);
                                            f.gB.select(Y, u);
                                        }
                                        ((ev.isDraggingInternally = !0), eC.setFragmentData(Y, e.dataTransfer, "drag"));
                                    }
                                },
                                [B, X.onDragStart],
                            ),
                            onDrop: (0, l.useCallback)(
                                (e) => {
                                    if (!B && eC.hasTarget(Y, e.target) && !tu(e, X.onDrop)) {
                                        e.preventDefault();
                                        var t = Y.selection,
                                            r = eC.findEventRange(Y, e),
                                            u = e.dataTransfer;
                                        (f.gB.select(Y, r),
                                            ev.isDraggingInternally &&
                                                t &&
                                                !f.Q6.equals(t, r) &&
                                                !f.KE.void(Y, { at: r, voids: !0 }) &&
                                                f.gB.delete(Y, { at: t }),
                                            eC.insertData(Y, u),
                                            eC.isFocused(Y) || eC.focus(Y));
                                    }
                                    ev.isDraggingInternally = !1;
                                },
                                [B, X.onDrop],
                            ),
                            onDragEnd: (0, l.useCallback)(
                                (e) => {
                                    (!B &&
                                        ev.isDraggingInternally &&
                                        X.onDragEnd &&
                                        eC.hasTarget(Y, e.target) &&
                                        X.onDragEnd(e),
                                        (ev.isDraggingInternally = !1));
                                },
                                [B, X.onDragEnd],
                            ),
                            onFocus: (0, l.useCallback)(
                                (e) => {
                                    if (
                                        !B &&
                                        !ev.isUpdatingSelection &&
                                        eC.hasEditableTarget(Y, e.target) &&
                                        !tu(e, X.onFocus)
                                    ) {
                                        var t = eC.toDOMNode(Y, Y);
                                        if (
                                            ((ev.latestElement = eC.findDocumentOrShadowRoot(Y).activeElement),
                                            en && e.target !== t)
                                        )
                                            return void t.focus();
                                        k.set(Y, !0);
                                    }
                                },
                                [B, X.onFocus],
                            ),
                            onKeyDown: (0, l.useCallback)(
                                (e) => {
                                    if (!B && eC.hasEditableTarget(Y, e.target)) {
                                        null == eE || eE.handleKeyDown(e);
                                        var { nativeEvent: t } = e;
                                        if (
                                            (eC.isComposing(Y) && !1 === t.isComposing && (P.set(Y, !1), Z(!1)),
                                            !(tu(e, X.onKeyDown) || eC.isComposing(Y)))
                                        ) {
                                            var { selection: r } = Y,
                                                u = Y.children[null !== r ? r.focus.path[0] : 0],
                                                a = "rtl" === n()(f.bP.string(u));
                                            if (eI.isRedo(t)) {
                                                (e.preventDefault(), "function" == typeof Y.redo && Y.redo());
                                                return;
                                            }
                                            if (eI.isUndo(t)) {
                                                (e.preventDefault(), "function" == typeof Y.undo && Y.undo());
                                                return;
                                            }
                                            if (eI.isMoveLineBackward(t)) {
                                                (e.preventDefault(), f.gB.move(Y, { unit: "line", reverse: !0 }));
                                                return;
                                            }
                                            if (eI.isMoveLineForward(t)) {
                                                (e.preventDefault(), f.gB.move(Y, { unit: "line" }));
                                                return;
                                            }
                                            if (eI.isExtendLineBackward(t)) {
                                                (e.preventDefault(),
                                                    f.gB.move(Y, { unit: "line", edge: "focus", reverse: !0 }));
                                                return;
                                            }
                                            if (eI.isExtendLineForward(t)) {
                                                (e.preventDefault(), f.gB.move(Y, { unit: "line", edge: "focus" }));
                                                return;
                                            }
                                            if (eI.isMoveBackward(t)) {
                                                (e.preventDefault(),
                                                    r && f.Q6.isCollapsed(r)
                                                        ? f.gB.move(Y, { reverse: !a })
                                                        : f.gB.collapse(Y, { edge: "start" }));
                                                return;
                                            }
                                            if (eI.isMoveForward(t)) {
                                                (e.preventDefault(),
                                                    r && f.Q6.isCollapsed(r)
                                                        ? f.gB.move(Y, { reverse: a })
                                                        : f.gB.collapse(Y, { edge: "end" }));
                                                return;
                                            }
                                            if (eI.isMoveWordBackward(t)) {
                                                (e.preventDefault(),
                                                    r && f.Q6.isExpanded(r) && f.gB.collapse(Y, { edge: "focus" }),
                                                    f.gB.move(Y, { unit: "word", reverse: !a }));
                                                return;
                                            }
                                            if (eI.isMoveWordForward(t)) {
                                                (e.preventDefault(),
                                                    r && f.Q6.isExpanded(r) && f.gB.collapse(Y, { edge: "focus" }),
                                                    f.gB.move(Y, { unit: "word", reverse: a }));
                                                return;
                                            }
                                            if (eh) {
                                                if (
                                                    (ei || ea) &&
                                                    r &&
                                                    (eI.isDeleteBackward(t) || eI.isDeleteForward(t)) &&
                                                    f.Q6.isCollapsed(r)
                                                ) {
                                                    var o = f.bP.parent(Y, r.anchor.path);
                                                    if (
                                                        f.Hg.isElement(o) &&
                                                        f.KE.isVoid(Y, o) &&
                                                        (f.KE.isInline(Y, o) || f.KE.isBlock(Y, o))
                                                    ) {
                                                        (e.preventDefault(), f.KE.deleteBackward(Y, { unit: "block" }));
                                                        return;
                                                    }
                                                }
                                            } else {
                                                if (eI.isBold(t) || eI.isItalic(t) || eI.isTransposeCharacter(t))
                                                    return void e.preventDefault();
                                                if (eI.isSoftBreak(t)) {
                                                    (e.preventDefault(), f.KE.insertSoftBreak(Y));
                                                    return;
                                                }
                                                if (eI.isSplitBlock(t)) {
                                                    (e.preventDefault(), f.KE.insertBreak(Y));
                                                    return;
                                                }
                                                if (eI.isDeleteBackward(t)) {
                                                    (e.preventDefault(),
                                                        r && f.Q6.isExpanded(r)
                                                            ? f.KE.deleteFragment(Y, { direction: "backward" })
                                                            : f.KE.deleteBackward(Y));
                                                    return;
                                                }
                                                if (eI.isDeleteForward(t)) {
                                                    (e.preventDefault(),
                                                        r && f.Q6.isExpanded(r)
                                                            ? f.KE.deleteFragment(Y, { direction: "forward" })
                                                            : f.KE.deleteForward(Y));
                                                    return;
                                                }
                                                if (eI.isDeleteLineBackward(t)) {
                                                    (e.preventDefault(),
                                                        r && f.Q6.isExpanded(r)
                                                            ? f.KE.deleteFragment(Y, { direction: "backward" })
                                                            : f.KE.deleteBackward(Y, { unit: "line" }));
                                                    return;
                                                }
                                                if (eI.isDeleteLineForward(t)) {
                                                    (e.preventDefault(),
                                                        r && f.Q6.isExpanded(r)
                                                            ? f.KE.deleteFragment(Y, { direction: "forward" })
                                                            : f.KE.deleteForward(Y, { unit: "line" }));
                                                    return;
                                                }
                                                if (eI.isDeleteWordBackward(t)) {
                                                    (e.preventDefault(),
                                                        r && f.Q6.isExpanded(r)
                                                            ? f.KE.deleteFragment(Y, { direction: "backward" })
                                                            : f.KE.deleteBackward(Y, { unit: "word" }));
                                                    return;
                                                }
                                                if (eI.isDeleteWordForward(t)) {
                                                    (e.preventDefault(),
                                                        r && f.Q6.isExpanded(r)
                                                            ? f.KE.deleteFragment(Y, { direction: "forward" })
                                                            : f.KE.deleteForward(Y, { unit: "word" }));
                                                    return;
                                                }
                                            }
                                        }
                                    }
                                },
                                [B, X.onKeyDown],
                            ),
                            onPaste: (0, l.useCallback)(
                                (e) => {
                                    let t;
                                    !B &&
                                        eC.hasEditableTarget(Y, e.target) &&
                                        !tu(e, X.onPaste) &&
                                        (!eh ||
                                            ((t = e.nativeEvent).clipboardData &&
                                                "" !== t.clipboardData.getData("text/plain") &&
                                                1 === t.clipboardData.types.length) ||
                                            ea) &&
                                        (e.preventDefault(), eC.insertData(Y, e.clipboardData));
                                },
                                [B, X.onPaste],
                            ),
                        }),
                        l.createElement(e9, {
                            decorations: em,
                            node: Y,
                            renderElement: E,
                            renderPlaceholder: x,
                            renderLeaf: y,
                            selection: Y.selection,
                        }),
                    ),
                ),
            ),
        );
    },
    te = (e) => {
        var { attributes: t, children: r } = e;
        return l.createElement("span", Object.assign({}, t), r, eu && l.createElement("br", null));
    },
    tt = () => [],
    tr = (e, t) => {
        if (t.getBoundingClientRect && (!e.selection || (e.selection && f.Q6.isCollapsed(e.selection)))) {
            var r = t.startContainer.parentElement,
                u = function (e) {
                    var r = t.startContainer,
                        u = t.startOffset + e;
                    if (3 !== r.nodeType || u < 0 || u + 1 > r.length) return null;
                    var n = r.ownerDocument.createRange();
                    return (n.setStart(r, u), n.setEnd(r, u + 1), n.getClientRects().length > 0 ? n : null);
                },
                n = t;
            if (0 === t.getClientRects().length) {
                var a = u(0) || u(-1);
                if (null === a) return;
                n = a;
            }
            ((r.getBoundingClientRect = n.getBoundingClientRect.bind(n)),
                (0, c.A)(r, { scrollMode: "if-needed" }),
                delete r.getBoundingClientRect);
        }
    },
    tu = (e, t) => {
        if (!t) return !1;
        var r = t(e);
        return null != r ? r : e.isDefaultPrevented() || e.isPropagationStopped();
    },
    tn = (e, t) => {
        if (!t) return !1;
        var r = t(e);
        return null != r ? r : e.defaultPrevented;
    },
    ta = (0, l.createContext)(!1),
    to = () => (0, l.useContext)(ta),
    ti = (0, l.createContext)({}),
    ts = ["editor", "children", "onChange", "value"],
    tl = (e) => {
        var t,
            r,
            u,
            { editor: n, children: a, onChange: o, value: i } = e,
            s = v(e, ts),
            c = (0, l.useRef)(!1),
            [d, D] = l.useState(() => {
                if (!f.bP.isNodeList(i))
                    throw Error(
                        "[Slate] value is invalid! Expected a list of elements but got: ".concat(f.h6.stringify(i)),
                    );
                if (!f.KE.isEditor(n)) throw Error("[Slate] editor is invalid! You passed: ".concat(f.h6.stringify(n)));
                return ((n.children = i), Object.assign(n, s), { v: 0, editor: n });
            }),
            { selectorContext: h, onChange: C } =
                ((t = (0, l.useRef)([]).current),
                (r = (0, l.useRef)({ editor: n }).current),
                (u = (0, l.useCallback)((e) => {
                    ((r.editor = e), t.forEach((t) => t(e)));
                }, [])),
                {
                    selectorContext: (0, l.useMemo)(
                        () => ({
                            getSlate: () => r.editor,
                            addEventListener: (e) => (
                                t.push(e),
                                () => {
                                    t.splice(t.indexOf(e), 1);
                                }
                            ),
                        }),
                        [t, r],
                    ),
                    onChange: u,
                }),
            p = (0, l.useCallback)(() => {
                (o && o(n.children), D((e) => ({ v: e.v + 1, editor: n })), C(n));
            }, [o]);
        (0, l.useEffect)(
            () => (
                T.set(n, p),
                () => {
                    (T.set(n, () => {}), (c.current = !0));
                }
            ),
            [p],
        );
        var [g, B] = (0, l.useState)(eC.isFocused(n));
        return (
            (0, l.useEffect)(() => {
                B(eC.isFocused(n));
            }),
            eB(() => {
                var e = () => B(eC.isFocused(n));
                return ee
                    ? (document.addEventListener("focusin", e),
                      document.addEventListener("focusout", e),
                      () => {
                          (document.removeEventListener("focusin", e), document.removeEventListener("focusout", e));
                      })
                    : (document.addEventListener("focus", e, !0),
                      document.addEventListener("blur", e, !0),
                      () => {
                          (document.removeEventListener("focus", e, !0), document.removeEventListener("blur", e, !0));
                      });
            }, []),
            l.createElement(
                ti.Provider,
                { value: h },
                l.createElement(
                    eK.Provider,
                    { value: d },
                    l.createElement(eb.Provider, { value: d.editor }, l.createElement(ta.Provider, { value: g }, a)),
                ),
            )
        );
    },
    tc = (e, t) => {
        var r = (t.top + t.bottom) / 2;
        return e.top <= r && e.bottom >= r;
    },
    tf = (e, t, r) => {
        var u = eC.toDOMRange(e, t).getBoundingClientRect(),
            n = eC.toDOMRange(e, r).getBoundingClientRect();
        return tc(u, n) && tc(n, u);
    };
function td(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var u = Object.getOwnPropertySymbols(e);
        (t &&
            (u = u.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u));
    }
    return r;
}
function tD(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? td(Object(r), !0).forEach(function (t) {
                  C(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : td(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var th = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x-slate-fragment",
            { apply: r, onChange: u, deleteBackward: n, addMark: a, removeMark: o } = e;
        return (
            x.set(e, new WeakMap()),
            (e.addMark = (t, r) => {
                var u, n;
                (null == (u = j.get(e)) || u(),
                    !R.get(e) && null != (n = M.get(e)) && n.length && R.set(e, null),
                    N.delete(e),
                    a(t, r));
            }),
            (e.removeMark = (t) => {
                var r;
                (!R.get(e) && null != (r = M.get(e)) && r.length && R.set(e, null), N.delete(e), o(t));
            }),
            (e.deleteBackward = (t) => {
                if ("line" !== t) return n(t);
                if (e.selection && f.Q6.isCollapsed(e.selection)) {
                    var r = f.KE.above(e, { match: (t) => f.Hg.isElement(t) && f.KE.isBlock(e, t), at: e.selection });
                    if (r) {
                        var [, u] = r,
                            a = f.KE.range(e, u, e.selection.anchor),
                            o = ((e, t) => {
                                var r = f.KE.range(e, f.Q6.end(t)),
                                    u = Array.from(f.KE.positions(e, { at: t })),
                                    n = 0,
                                    a = u.length,
                                    o = Math.floor(a / 2);
                                if (tf(e, f.KE.range(e, u[n]), r)) return f.KE.range(e, u[n], r);
                                if (u.length < 2) return f.KE.range(e, u[u.length - 1], r);
                                for (; o !== u.length && o !== n;)
                                    (tf(e, f.KE.range(e, u[o]), r) ? (a = o) : (n = o), (o = Math.floor((n + a) / 2)));
                                return f.KE.range(e, u[a], r);
                            })(e, a);
                        f.Q6.isCollapsed(o) || f.gB.delete(e, { at: o });
                    }
                }
            }),
            (e.apply = (t) => {
                var u,
                    n = [],
                    a = M.get(e);
                if (null != a && a.length) {
                    var o = a
                        .map((e) =>
                            (function (e, t) {
                                var { path: r, diff: u, id: n } = e;
                                switch (t.type) {
                                    case "insert_text":
                                        if (!f.wA.equals(t.path, r) || t.offset >= u.end) return e;
                                        if (t.offset <= u.start)
                                            return {
                                                diff: {
                                                    start: t.text.length + u.start,
                                                    end: t.text.length + u.end,
                                                    text: u.text,
                                                },
                                                id: n,
                                                path: r,
                                            };
                                        return {
                                            diff: { start: u.start, end: u.end + t.text.length, text: u.text },
                                            id: n,
                                            path: r,
                                        };
                                    case "remove_text":
                                        if (!f.wA.equals(t.path, r) || t.offset >= u.end) return e;
                                        if (t.offset + t.text.length <= u.start)
                                            return {
                                                diff: {
                                                    start: u.start - t.text.length,
                                                    end: u.end - t.text.length,
                                                    text: u.text,
                                                },
                                                id: n,
                                                path: r,
                                            };
                                        return {
                                            diff: { start: u.start, end: u.end - t.text.length, text: u.text },
                                            id: n,
                                            path: r,
                                        };
                                    case "split_node":
                                        if (!f.wA.equals(t.path, r) || t.position >= u.end)
                                            return {
                                                diff: u,
                                                id: n,
                                                path: f.wA.transform(r, t, { affinity: "backward" }),
                                            };
                                        if (t.position > u.start)
                                            return {
                                                diff: {
                                                    start: u.start,
                                                    end: Math.min(t.position, u.end),
                                                    text: u.text,
                                                },
                                                id: n,
                                                path: r,
                                            };
                                        return {
                                            diff: {
                                                start: u.start - t.position,
                                                end: u.end - t.position,
                                                text: u.text,
                                            },
                                            id: n,
                                            path: f.wA.transform(r, t, { affinity: "forward" }),
                                        };
                                    case "merge_node":
                                        if (!f.wA.equals(t.path, r))
                                            return { diff: u, id: n, path: f.wA.transform(r, t) };
                                        return {
                                            diff: {
                                                start: u.start + t.position,
                                                end: u.end + t.position,
                                                text: u.text,
                                            },
                                            id: n,
                                            path: f.wA.transform(r, t),
                                        };
                                }
                                var a = f.wA.transform(r, t);
                                return a ? { diff: u, path: a, id: n } : null;
                            })(e, t),
                        )
                        .filter(Boolean);
                    M.set(e, o);
                }
                var i = W.get(e);
                i && W.set(e, e$(e, i, t));
                var s = K.get(e);
                if (null != s && s.at) {
                    var l = f.bR.isPoint(null == s ? void 0 : s.at) ? eY(e, s.at, t) : e$(e, s.at, t);
                    K.set(e, l ? tD(tD({}, s), {}, { at: l }) : null);
                }
                switch (t.type) {
                    case "insert_text":
                    case "remove_text":
                    case "set_node":
                    case "split_node":
                        n.push(...tC(e, t.path));
                        break;
                    case "set_selection":
                        (null == (u = S.get(e)) || u.unref(), S.delete(e));
                        break;
                    case "insert_node":
                    case "remove_node":
                        n.push(...tC(e, f.wA.parent(t.path)));
                        break;
                    case "merge_node":
                        n.push(...tC(e, f.wA.previous(t.path)));
                        break;
                    case "move_node":
                        n.push(...tC(e, f.wA.common(f.wA.parent(t.path), f.wA.parent(t.newPath))));
                }
                for (var [c, d] of (r(t), n)) {
                    var [D] = f.KE.node(e, c);
                    y.set(D, d);
                }
            }),
            (e.setFragmentData = (r) => {
                var { selection: u } = e;
                if (u) {
                    var [n, a] = f.Q6.edges(u),
                        o = f.KE.void(e, { at: n.path }),
                        i = f.KE.void(e, { at: a.path });
                    if (!f.Q6.isCollapsed(u) || o) {
                        var s = eC.toDOMRange(e, u),
                            l = s.cloneContents(),
                            c = l.childNodes[0];
                        if (
                            (l.childNodes.forEach((e) => {
                                e.textContent && "" !== e.textContent.trim() && (c = e);
                            }),
                            i)
                        ) {
                            var [d] = i,
                                D = s.cloneRange(),
                                h = eC.toDOMNode(e, d);
                            (D.setEndAfter(h), (l = D.cloneContents()));
                        }
                        if (
                            (o && (c = l.querySelector("[data-slate-spacer]")),
                            Array.from(l.querySelectorAll("[data-slate-zero-width]")).forEach((e) => {
                                var t = "n" === e.getAttribute("data-slate-zero-width");
                                e.textContent = t ? "\n" : "";
                            }),
                            J(c))
                        ) {
                            var C = c.ownerDocument.createElement("span");
                            ((C.style.whiteSpace = "pre"), C.appendChild(c), l.appendChild(C), (c = C));
                        }
                        var v = JSON.stringify(e.getFragment()),
                            p = window.btoa(encodeURIComponent(v));
                        (c.setAttribute("data-slate-fragment", p), r.setData("application/".concat(t), p));
                        var g = l.ownerDocument.createElement("div");
                        return (
                            g.appendChild(l),
                            g.setAttribute("hidden", "true"),
                            l.ownerDocument.body.appendChild(g),
                            r.setData("text/html", g.innerHTML),
                            r.setData("text/plain", $(g)),
                            l.ownerDocument.body.removeChild(g),
                            r
                        );
                    }
                }
            }),
            (e.insertData = (t) => {
                e.insertFragmentData(t) || e.insertTextData(t);
            }),
            (e.insertFragmentData = (r) => {
                var u =
                    r.getData("application/".concat(t)) ||
                    ((e) => {
                        var [, t] = e.getData("text/html").match(Z) || [];
                        return t;
                    })(r);
                if (u) {
                    var n = JSON.parse(decodeURIComponent(window.atob(u)));
                    return (e.insertFragment(n), !0);
                }
                return !1;
            }),
            (e.insertTextData = (t) => {
                var r = t.getData("text/plain");
                if (r) {
                    var u = r.split(/\r\n|\r|\n/),
                        n = !1;
                    for (var a of u) (n && f.gB.splitNodes(e, { always: !0 }), e.insertText(a), (n = !0));
                    return !0;
                }
                return !1;
            }),
            (e.onChange = (t) => {
                h.unstable_batchedUpdates(() => {
                    var r = T.get(e);
                    (r && r(), u(t));
                });
            }),
            e
        );
    },
    tC = (e, t) => {
        var r = [];
        for (var [u, n] of f.KE.levels(e, { at: t })) {
            var a = eC.findKey(e, u);
            r.push([n, a]);
        }
        return r;
    };
