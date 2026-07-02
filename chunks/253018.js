"use strict";
n.d(t, { A: () => tc, Fo: () => e7, RV: () => eD, f7: () => eL, o$: () => tm, rL: () => ef, zL: () => to });
var r = n(877413),
    a = n.n(r),
    i = n(805353),
    o = n.n(i),
    s = n(879378),
    l = n.n(s),
    c = n(64700);
if (!/^(38190|98365)$/.test(n.j)) var u = n(104681);
var d = n(719442),
    _ = n(971327),
    p = n(294106),
    m = n(340287);
function f(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                a = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++)
            (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
    }
    return a;
}
var h = 0;
class b {
    constructor() {
        this.id = "".concat(h++);
    }
}
var E = new WeakMap(),
    y = new WeakMap(),
    v = new WeakMap(),
    S = new WeakMap(),
    T = new WeakMap(),
    C = new WeakMap(),
    D = new WeakMap(),
    O = new WeakMap(),
    w = new WeakMap(),
    A = new WeakMap(),
    R = new WeakMap(),
    M = new WeakMap(),
    N = new WeakMap(),
    x = new WeakMap(),
    L = new WeakMap(),
    k = new WeakMap(),
    I = new WeakMap(),
    P = new WeakMap(),
    F = new WeakMap(),
    Y = new WeakMap(),
    B = new WeakMap(),
    U = Symbol("placeholder"),
    j = Symbol("mark-placeholder"),
    H = globalThis.Text,
    G = (e) => (e && e.ownerDocument && e.ownerDocument.defaultView) || null,
    z = (e) => q(e) && 8 === e.nodeType,
    W = (e) => q(e) && 1 === e.nodeType,
    q = (e) => {
        var t = G(e);
        return !!t && e instanceof t.Node;
    },
    V = (e) => {
        var t = e && e.anchorNode && G(e.anchorNode);
        return !!t && e instanceof t.Selection;
    },
    $ = (e) => q(e) && 3 === e.nodeType,
    Q = (e, t, n) => {
        for (
            var { childNodes: r } = e, a = r[t], i = t, o = !1, s = !1;
            (z(a) || (W(a) && 0 === a.childNodes.length) || (W(a) && "false" === a.getAttribute("contenteditable"))) &&
            (!o || !s);
        ) {
            if (i >= r.length) {
                (o = !0), (i = t - 1), (n = "backward");
                continue;
            }
            if (i < 0) {
                (s = !0), (i = t + 1), (n = "forward");
                continue;
            }
            (a = r[i]), (t = i), (i += "forward" === n ? 1 : -1);
        }
        return [a, t];
    },
    K = (e, t, n) => {
        var [r] = Q(e, t, n);
        return r;
    },
    X = (e) => {
        var t = "";
        if ($(e) && e.nodeValue) return e.nodeValue;
        if (W(e)) {
            for (var n of Array.from(e.childNodes)) t += X(n);
            var r = getComputedStyle(e).getPropertyValue("display");
            ("block" === r || "list" === r || "BR" === e.tagName) && (t += "\n");
        }
        return t;
    },
    Z = /data-slate-fragment="(.+?)"/m,
    J = (e, t, n) => {
        var { target: r } = t;
        if (W(r) && r.matches('[contentEditable="false"]')) return !1;
        var { document: a } = ef.getWindow(e);
        if (a.contains(r)) return ef.hasDOMNode(e, r, { editable: !0 });
        var i = n.find((e) => {
            var { addedNodes: t, removedNodes: n } = e;
            for (var a of t) if (a === r || a.contains(r)) return !0;
            for (var i of n) if (i === r || i.contains(r)) return !0;
        });
        return !!i && i !== t && J(e, i, n);
    },
    ee = parseInt(c.version.split(".")[0], 10) >= 17,
    et =
        "u" > typeof navigator &&
        "u" > typeof window &&
        /iPad|iPhone|iPod/.test(navigator.userAgent) &&
        !window.MSStream,
    en = "u" > typeof navigator && /Mac OS X/.test(navigator.userAgent),
    er = "u" > typeof navigator && /Android/.test(navigator.userAgent),
    ea = "u" > typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
    ei = "u" > typeof navigator && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
    eo = "u" > typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
    es = "u" > typeof navigator && /Chrome/i.test(navigator.userAgent),
    el = "u" > typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
    ec = er && "u" > typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
    eu =
        "u" > typeof navigator &&
        /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
    ed = "u" > typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
    e_ = "u" > typeof navigator && /.*Wechat/.test(navigator.userAgent),
    ep = "u" > typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
    em =
        (!el || !ec) &&
        !eo &&
        "u" > typeof globalThis &&
        globalThis.InputEvent &&
        "function" == typeof globalThis.InputEvent.prototype.getTargetRanges,
    ef = {
        isComposing: (e) => !!M.get(e),
        getWindow(e) {
            var t = v.get(e);
            if (!t) throw Error("Unable to find a host window element for this editor");
            return t;
        },
        findKey(e, t) {
            var n = O.get(t);
            return n || ((n = new b()), O.set(t, n)), n;
        },
        findPath(e, t) {
            for (var n = [], r = t; ; ) {
                var a = y.get(r);
                if (null == a)
                    if (d.KE.isEditor(r)) return n;
                    else break;
                var i = E.get(r);
                if (null == i) break;
                n.unshift(i), (r = a);
            }
            throw Error("Unable to find the path for Slate node: ".concat(d.h6.stringify(t)));
        },
        findDocumentOrShadowRoot(e) {
            var t = ef.toDOMNode(e, e),
                n = t.getRootNode();
            return (n instanceof Document || n instanceof ShadowRoot) && null != n.getSelection ? n : t.ownerDocument;
        },
        isFocused: (e) => !!R.get(e),
        isReadOnly: (e) => !!A.get(e),
        blur(e) {
            var t = ef.toDOMNode(e, e),
                n = ef.findDocumentOrShadowRoot(e);
            R.set(e, !1), n.activeElement === t && t.blur();
        },
        focus(e) {
            var t = ef.toDOMNode(e, e),
                n = ef.findDocumentOrShadowRoot(e);
            R.set(e, !0), n.activeElement !== t && t.focus({ preventScroll: !0 });
        },
        deselect(e) {
            var { selection: t } = e,
                n = ef.findDocumentOrShadowRoot(e).getSelection();
            n && n.rangeCount > 0 && n.removeAllRanges(), t && d.gB.deselect(e);
        },
        hasDOMNode(e, t) {
            var n,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { editable: a = !1 } = r,
                i = ef.toDOMNode(e, e);
            try {
                n = W(t) ? t : t.parentElement;
            } catch (e) {
                if (!e.message.includes('Permission denied to access property "nodeType"')) throw e;
            }
            return (
                !!n &&
                n.closest("[data-slate-editor]") === i &&
                (!a ||
                    !!n.isContentEditable ||
                    ("boolean" == typeof n.isContentEditable && n.closest('[contenteditable="false"]') === i) ||
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
            var n = w.get(e),
                r = d.KE.isEditor(t) ? S.get(e) : null == n ? void 0 : n.get(ef.findKey(e, t));
            if (!r) throw Error("Cannot resolve a DOM node from Slate node: ".concat(d.h6.stringify(t)));
            return r;
        },
        toDOMPoint(e, t) {
            var [n] = d.KE.node(e, t.path),
                r = ef.toDOMNode(e, n);
            d.KE.void(e, { at: t }) && (t = { path: t.path, offset: 0 });
            for (
                var a = Array.from(r.querySelectorAll("[data-slate-string], [data-slate-zero-width]")), i = 0, o = 0;
                o < a.length;
                o++
            ) {
                var s = a[o],
                    l = s.childNodes[0];
                if (null != l && null != l.textContent) {
                    var { length: c } = l.textContent,
                        u = s.getAttribute("data-slate-length"),
                        _ = i + (null == u ? c : parseInt(u, 10)),
                        p = a[o + 1];
                    if (t.offset === _ && null != p && p.hasAttribute("data-slate-mark-placeholder")) {
                        var m,
                            f,
                            g = p.childNodes[0];
                        m = [g instanceof H ? g : p, null != (f = p.textContent) && f.startsWith("\uFEFF") ? 1 : 0];
                        break;
                    }
                    if (t.offset <= _) {
                        m = [l, Math.min(c, Math.max(0, t.offset - i))];
                        break;
                    }
                    i = _;
                }
            }
            if (!m) throw Error("Cannot resolve a DOM point from Slate point: ".concat(d.h6.stringify(t)));
            return m;
        },
        toDOMRange(e, t) {
            var { anchor: n, focus: r } = t,
                a = d.Q6.isBackward(t),
                i = ef.toDOMPoint(e, n),
                o = d.Q6.isCollapsed(t) ? i : ef.toDOMPoint(e, r),
                s = ef.getWindow(e).document.createRange(),
                [l, c] = a ? o : i,
                [u, _] = a ? i : o,
                p = !!(W(l) ? l : l.parentElement).getAttribute("data-slate-zero-width"),
                m = !!(W(u) ? u : u.parentElement).getAttribute("data-slate-zero-width");
            return s.setStart(l, p ? 1 : c), s.setEnd(u, m ? 1 : _), s;
        },
        toSlateNode(e, t) {
            var n = W(t) ? t : t.parentElement;
            n && !n.hasAttribute("data-slate-node") && (n = n.closest("[data-slate-node]"));
            var r = n ? C.get(n) : null;
            if (!r) throw Error("Cannot resolve a Slate node from DOM node: ".concat(n));
            return r;
        },
        findEventRange(e, t) {
            "nativeEvent" in t && (t = t.nativeEvent);
            var n,
                { clientX: r, clientY: a, target: i } = t;
            if (null == r || null == a) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
            var o = ef.toSlateNode(e, t.target),
                s = ef.findPath(e, o);
            if (d.Hg.isElement(o) && d.KE.isVoid(e, o)) {
                var l = i.getBoundingClientRect(),
                    c = e.isInline(o) ? r - l.left < l.left + l.width - r : a - l.top < l.top + l.height - a,
                    u = d.KE.point(e, s, { edge: c ? "start" : "end" }),
                    _ = c ? d.KE.before(e, u) : d.KE.after(e, u);
                if (_) return d.KE.range(e, _);
            }
            var { document: p } = ef.getWindow(e);
            if (p.caretRangeFromPoint) n = p.caretRangeFromPoint(r, a);
            else {
                var m = p.caretPositionFromPoint(r, a);
                m && ((n = p.createRange()).setStart(m.offsetNode, m.offset), n.setEnd(m.offsetNode, m.offset));
            }
            if (!n) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
            return ef.toSlateRange(e, n, { exactMatch: !1, suppressThrow: !1 });
        },
        toSlatePoint(e, t, n) {
            var { exactMatch: r, suppressThrow: a } = n,
                [i, o] = r
                    ? t
                    : ((e) => {
                          var [t, n] = e;
                          if (W(t) && t.childNodes.length) {
                              var r = n === t.childNodes.length,
                                  a = r ? n - 1 : n;
                              for (
                                  [t, a] = Q(t, a, r ? "backward" : "forward"), r = a < n;
                                  W(t) && t.childNodes.length;
                              ) {
                                  var i = r ? t.childNodes.length - 1 : 0;
                                  t = K(t, i, r ? "backward" : "forward");
                              }
                              n = r && null != t.textContent ? t.textContent.length : 0;
                          }
                          return [t, n];
                      })(t),
                s = i.parentNode,
                l = null,
                c = 0;
            if (s) {
                var u,
                    _,
                    p = ef.toDOMNode(e, e),
                    m = s.closest('[data-slate-void="true"]'),
                    f = m && p.contains(m) ? m : null,
                    g = s.closest("[data-slate-leaf]"),
                    h = null;
                if (g) {
                    if ((l = g.closest('[data-slate-node="text"]'))) {
                        var b = ef.getWindow(e).document.createRange();
                        b.setStart(l, 0), b.setEnd(i, o);
                        var E = b.cloneContents();
                        [
                            ...Array.prototype.slice.call(E.querySelectorAll("[data-slate-zero-width]")),
                            ...Array.prototype.slice.call(E.querySelectorAll("[contenteditable=false]")),
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
                            (c = E.textContent.length),
                            (h = l);
                    }
                } else if (f) {
                    for (var y = f.querySelectorAll("[data-slate-leaf]"), v = 0; v < y.length; v++) {
                        var S = y[v];
                        if (ef.hasDOMNode(e, S)) {
                            g = S;
                            break;
                        }
                    }
                    g
                        ? ((l = g.closest('[data-slate-node="text"]')),
                          (c = (h = g).textContent.length),
                          h.querySelectorAll("[data-slate-zero-width]").forEach((e) => {
                              c -= e.textContent.length;
                          }))
                        : (c = 1);
                }
                h &&
                    c === h.textContent.length &&
                    er &&
                    "z" === h.getAttribute("data-slate-zero-width") &&
                    null != (u = h.textContent) &&
                    u.startsWith("\uFEFF") &&
                    (s.hasAttribute("data-slate-zero-width") ||
                        (ea && null != (_ = h.textContent) && _.endsWith("\n\n"))) &&
                    c--;
            }
            if (er && !l && !r) {
                var T = s.hasAttribute("data-slate-node") ? s : s.closest("[data-slate-node]");
                if (T && ef.hasDOMNode(e, T, { editable: !0 })) {
                    var C = ef.toSlateNode(e, T),
                        { path: D, offset: O } = d.KE.start(e, ef.findPath(e, C));
                    return T.querySelector("[data-slate-leaf]") || (O = o), { path: D, offset: O };
                }
            }
            if (!l) {
                if (a) return null;
                throw Error("Cannot resolve a Slate point from DOM point: ".concat(t));
            }
            var w = ef.toSlateNode(e, l);
            return { path: ef.findPath(e, w), offset: c };
        },
        toSlateRange(e, t, n) {
            var r,
                a,
                i,
                o,
                s,
                l,
                { exactMatch: c, suppressThrow: u } = n;
            if (
                ((V(t) ? t.anchorNode : t.startContainer) &&
                    (V(t)
                        ? ((r = t.anchorNode),
                          (a = t.anchorOffset),
                          (i = t.focusNode),
                          (o = t.focusOffset),
                          (s =
                              es &&
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
                          (a = t.startOffset),
                          (i = t.endContainer),
                          (o = t.endOffset),
                          (s = t.collapsed))),
                null == r || null == i || null == a || null == o)
            )
                throw Error("Cannot resolve a Slate range from DOM range: ".concat(t));
            "getAttribute" in i &&
                "false" === i.getAttribute("contenteditable") &&
                ((i = r), (o = (null == (l = r.textContent) ? void 0 : l.length) || 0));
            var _ = ef.toSlatePoint(e, [r, a], { exactMatch: c, suppressThrow: u });
            if (!_) return null;
            var p = s ? _ : ef.toSlatePoint(e, [i, o], { exactMatch: c, suppressThrow: u });
            if (!p) return null;
            if (ea && !s && r !== i) {
                var m = d.KE.isEnd(e, _, _.path),
                    f = d.KE.isStart(e, p, p.path);
                m && (_ = d.KE.after(e, _) || _), f && (p = d.KE.before(e, p) || p);
            }
            var g = { anchor: _, focus: p };
            return (
                d.Q6.isExpanded(g) &&
                    d.Q6.isForward(g) &&
                    W(i) &&
                    d.KE.void(e, { at: g.focus, mode: "highest" }) &&
                    (g = d.KE.unhangRange(e, g, { voids: !0 })),
                g
            );
        },
        hasRange(e, t) {
            var { anchor: n, focus: r } = t;
            return d.KE.hasPath(e, n.path) && d.KE.hasPath(e, r.path);
        },
        hasTarget: (e, t) => q(t) && ef.hasDOMNode(e, t),
        hasEditableTarget: (e, t) => q(t) && ef.hasDOMNode(e, t, { editable: !0 }),
        hasSelectableTarget: (e, t) => ef.hasEditableTarget(e, t) || ef.isTargetInsideNonReadonlyVoid(e, t),
        isTargetInsideNonReadonlyVoid(e, t) {
            if (A.get(e)) return !1;
            var n = ef.hasTarget(e, t) && ef.toSlateNode(e, t);
            return d.Hg.isElement(n) && d.KE.isVoid(e, n);
        },
        androidScheduleFlush(e) {
            var t;
            null == (t = L.get(e)) || t();
        },
        androidPendingDiffs: (e) => P.get(e),
    },
    eg = /^(38190|98365)$/.test(n.j) ? null : ["anchor", "focus"],
    eh = /^(38190|98365)$/.test(n.j) ? null : ["anchor", "focus"],
    eb = (e, t) => {
        var n = g(e, eg),
            r = g(t, eh);
        return (
            e[U] === t[U] &&
            Object.keys(n).length === Object.keys(r).length &&
            Object.keys(n).every((e) => r.hasOwnProperty(e) && n[e] === r[e])
        );
    },
    eE = /^(38190|98365)$/.test(n.j) ? null : ep ? c.useLayoutEffect : c.useEffect,
    ey = (e) => {
        var { isLast: t, leaf: n, parent: r, text: a } = e,
            i = eD(),
            o = ef.findPath(i, a),
            s = d.wA.parent(o),
            l = !0 === n[j];
        return i.isVoid(r)
            ? c.createElement(eT, { length: d.bP.string(r).length })
            : "" !== n.text || r.children[r.children.length - 1] !== a || i.isInline(r) || "" !== d.KE.string(i, s)
              ? "" === n.text
                  ? c.createElement(eT, { isMarkPlaceholder: l })
                  : t && "\n" === n.text.slice(-1)
                    ? c.createElement(ev, { isTrailing: !0, text: n.text })
                    : c.createElement(ev, { text: n.text })
              : c.createElement(eT, { isLineBreak: !0, isMarkPlaceholder: l });
    },
    ev = (e) => {
        var { text: t, isTrailing: n = !1 } = e,
            r = (0, c.useRef)(null),
            a = () => "".concat(null != t ? t : "").concat(n ? "\n" : ""),
            [i] = (0, c.useState)(a);
        return (
            eE(() => {
                var e = a();
                r.current && r.current.textContent !== e && (r.current.textContent = e);
            }),
            c.createElement(eS, { ref: r }, i)
        );
    },
    eS = /^(38190|98365)$/.test(n.j)
        ? null
        : (0, c.memo)(
              (0, c.forwardRef)((e, t) => c.createElement("span", { "data-slate-string": !0, ref: t }, e.children)),
          ),
    eT = (e) => {
        var { length: t = 0, isLineBreak: n = !1, isMarkPlaceholder: r = !1 } = e,
            a = { "data-slate-zero-width": n ? "n" : "z", "data-slate-length": t };
        return (
            r && (a["data-slate-mark-placeholder"] = !0),
            c.createElement(
                "span",
                Object.assign({}, a),
                er && n ? null : "\uFEFF",
                n ? c.createElement("br", null) : null,
            )
        );
    },
    eC = (0, c.createContext)(null),
    eD = () => {
        var e = (0, c.useContext)(eC);
        if (!e) throw Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
        return e;
    },
    eO = /^(38190|98365)$/.test(n.j)
        ? null
        : c.memo(
              (e) => {
                  var {
                          leaf: t,
                          isLast: n,
                          text: r,
                          parent: a,
                          renderPlaceholder: i,
                          renderLeaf: o = (e) => c.createElement(ew, Object.assign({}, e)),
                      } = e,
                      s = (0, c.useRef)(null),
                      l = (0, c.useRef)(null),
                      u = eD(),
                      d = (0, c.useRef)(null);
                  (0, c.useEffect)(
                      () => () => {
                          d.current && d.current.disconnect();
                      },
                      [],
                  ),
                      (0, c.useEffect)(() => {
                          var e = null == l ? void 0 : l.current;
                          if (
                              (e ? T.set(u, e) : T.delete(u),
                              d.current
                                  ? (d.current.disconnect(), e && d.current.observe(e))
                                  : e &&
                                    ((d.current = new (window.ResizeObserver || _.tb)(() => {
                                        var e = B.get(u);
                                        null == e || e();
                                    })),
                                    d.current.observe(e)),
                              !e && s.current)
                          ) {
                              var t = B.get(u);
                              null == t || t();
                          }
                          return (
                              (s.current = l.current),
                              () => {
                                  T.delete(u);
                              }
                          );
                      }, [l, t]);
                  var p = c.createElement(ey, { isLast: n, leaf: t, parent: a, text: r });
                  if (t[U]) {
                      var m = {
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
                      p = c.createElement(c.Fragment, null, i(m), p);
                  }
                  return o({ attributes: { "data-slate-leaf": !0 }, children: p, leaf: t, text: r });
              },
              (e, t) =>
                  t.parent === e.parent &&
                  t.isLast === e.isLast &&
                  t.renderLeaf === e.renderLeaf &&
                  t.renderPlaceholder === e.renderPlaceholder &&
                  t.text === e.text &&
                  d.EY.equals(t.leaf, e.leaf) &&
                  t.leaf[U] === e.leaf[U],
          ),
    ew = (e) => {
        var { attributes: t, children: n } = e;
        return c.createElement("span", Object.assign({}, t), n);
    },
    eA = /^(38190|98365)$/.test(n.j)
        ? null
        : c.memo(
              (e) => {
                  for (
                      var { decorations: t, isLast: n, parent: r, renderPlaceholder: a, renderLeaf: i, text: o } = e,
                          s = eD(),
                          l = (0, c.useRef)(null),
                          u = d.EY.decorations(o, t),
                          _ = ef.findKey(s, o),
                          p = [],
                          m = 0;
                      m < u.length;
                      m++
                  ) {
                      var f = u[m];
                      p.push(
                          c.createElement(eO, {
                              isLast: n && m === u.length - 1,
                              key: "".concat(_.id, "-").concat(m),
                              renderPlaceholder: a,
                              leaf: f,
                              text: o,
                              parent: r,
                              renderLeaf: i,
                          }),
                      );
                  }
                  var g = (0, c.useCallback)(
                      (e) => {
                          var t = w.get(s);
                          e
                              ? (null == t || t.set(_, e), D.set(o, e), C.set(e, o))
                              : (null == t || t.delete(_), D.delete(o), l.current && C.delete(l.current)),
                              (l.current = e);
                      },
                      [l, s, _, o],
                  );
                  return c.createElement("span", { "data-slate-node": "text", ref: g }, p);
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
                              a = t[n];
                          if (r.anchor.offset !== a.anchor.offset || r.focus.offset !== a.focus.offset || !eb(r, a))
                              return !1;
                      }
                      return !0;
                  })(t.decorations, e.decorations),
          ),
    eR = /^(38190|98365)$/.test(n.j)
        ? null
        : c.memo(
              (e) => {
                  var {
                          decorations: t,
                          element: n,
                          renderElement: r = (e) => c.createElement(eM, Object.assign({}, e)),
                          renderPlaceholder: i,
                          renderLeaf: o,
                          selection: s,
                      } = e,
                      l = eD(),
                      u = eP(),
                      _ = l.isInline(n),
                      p = ef.findKey(l, n),
                      m = (0, c.useCallback)(
                          (e) => {
                              var t = w.get(l);
                              e
                                  ? (null == t || t.set(p, e), D.set(n, e), C.set(e, n))
                                  : (null == t || t.delete(p), D.delete(n));
                          },
                          [l, p, n],
                      ),
                      f = ek({
                          decorations: t,
                          node: n,
                          renderElement: r,
                          renderPlaceholder: i,
                          renderLeaf: o,
                          selection: s,
                      }),
                      g = { "data-slate-node": "element", ref: m };
                  if ((_ && (g["data-slate-inline"] = !0), !_ && d.KE.hasInlines(l, n))) {
                      var h = d.bP.string(n),
                          b = a()(h);
                      "rtl" === b && (g.dir = b);
                  }
                  if (d.KE.isVoid(l, n)) {
                      (g["data-slate-void"] = !0), !u && _ && (g.contentEditable = !1);
                      var [[v]] = d.bP.texts(n);
                      (f = c.createElement(
                          _ ? "span" : "div",
                          {
                              "data-slate-spacer": !0,
                              style: { height: "0", color: "transparent", outline: "none", position: "absolute" },
                          },
                          c.createElement(eA, {
                              renderPlaceholder: i,
                              decorations: [],
                              isLast: !1,
                              parent: n,
                              text: v,
                          }),
                      )),
                          E.set(v, 0),
                          y.set(v, n);
                  }
                  return r({ attributes: g, children: f, element: n, decorations: t });
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
                              a = t[n];
                          if (!d.Q6.equals(r, a) || !eb(r, a)) return !1;
                      }
                      return !0;
                  })(e.decorations, t.decorations) &&
                  (e.selection === t.selection ||
                      (!!e.selection && !!t.selection && d.Q6.equals(e.selection, t.selection))),
          ),
    eM = (e) => {
        var { attributes: t, children: n, element: r } = e,
            a = eD().isInline(r) ? "span" : "div";
        return c.createElement(a, Object.assign({}, t, { style: { position: "relative" } }), n);
    },
    eN = /^(38190|98365)$/.test(n.j) ? null : (0, c.createContext)(() => []),
    ex = /^(38190|98365)$/.test(n.j) ? null : (0, c.createContext)(!1),
    eL = () => (0, c.useContext)(ex),
    ek = (e) => {
        for (
            var { decorations: t, node: n, renderElement: r, renderPlaceholder: a, renderLeaf: i, selection: o } = e,
                s = (0, c.useContext)(eN),
                l = eD(),
                u = ef.findPath(l, n),
                _ = [],
                p = d.Hg.isElement(n) && !l.isInline(n) && d.KE.hasInlines(l, n),
                m = 0;
            m < n.children.length;
            m++
        ) {
            var f = u.concat(m),
                g = n.children[m],
                h = ef.findKey(l, g),
                b = d.KE.range(l, f),
                v = o && d.Q6.intersection(b, o),
                S = s([g, f]);
            for (var T of t) {
                var C = d.Q6.intersection(T, b);
                C && S.push(C);
            }
            d.Hg.isElement(g)
                ? _.push(
                      c.createElement(
                          ex.Provider,
                          { key: "provider-".concat(h.id), value: !!v },
                          c.createElement(eR, {
                              decorations: S,
                              element: g,
                              key: h.id,
                              renderElement: r,
                              renderPlaceholder: a,
                              renderLeaf: i,
                              selection: v,
                          }),
                      ),
                  )
                : _.push(
                      c.createElement(eA, {
                          decorations: S,
                          key: h.id,
                          isLast: p && m === n.children.length - 1,
                          parent: n,
                          renderPlaceholder: a,
                          renderLeaf: i,
                          text: g,
                      }),
                  ),
                E.set(g, m),
                y.set(g, n);
        }
        return _;
    },
    eI = /^(38190|98365)$/.test(n.j) ? null : (0, c.createContext)(!1),
    eP = () => (0, c.useContext)(eI),
    eF = /^(38190|98365)$/.test(n.j) ? null : (0, c.createContext)(null),
    eY = {
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
    eB = {
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
    eU = {
        deleteWordBackward: "ctrl+shift?+backspace",
        deleteWordForward: "ctrl+shift?+delete",
        redo: ["ctrl+y", "ctrl+shift+z"],
    },
    ej = (e) => {
        var t = eY[e],
            n = eB[e],
            r = eU[e],
            a = t && (0, p.isKeyHotkey)(t),
            i = n && (0, p.isKeyHotkey)(n),
            o = r && (0, p.isKeyHotkey)(r);
        return (e) => !!((a && a(e)) || (en && i && i(e)) || (!en && o && o(e)));
    },
    eH = {
        isBold: ej("bold"),
        isCompose: ej("compose"),
        isMoveBackward: ej("moveBackward"),
        isMoveForward: ej("moveForward"),
        isDeleteBackward: ej("deleteBackward"),
        isDeleteForward: ej("deleteForward"),
        isDeleteLineBackward: ej("deleteLineBackward"),
        isDeleteLineForward: ej("deleteLineForward"),
        isDeleteWordBackward: ej("deleteWordBackward"),
        isDeleteWordForward: ej("deleteWordForward"),
        isExtendBackward: ej("extendBackward"),
        isExtendForward: ej("extendForward"),
        isExtendLineBackward: ej("extendLineBackward"),
        isExtendLineForward: ej("extendLineForward"),
        isItalic: ej("italic"),
        isMoveLineBackward: ej("moveLineBackward"),
        isMoveLineForward: ej("moveLineForward"),
        isMoveWordBackward: ej("moveWordBackward"),
        isMoveWordForward: ej("moveWordForward"),
        isRedo: ej("redo"),
        isSoftBreak: ej("insertSoftBreak"),
        isSplitBlock: ej("splitBlock"),
        isTransposeCharacter: ej("transposeCharacter"),
        isUndo: ej("undo"),
    },
    eG = { subtree: !0, childList: !0, characterData: !0, characterDataOldValue: !0 };
class ez extends c.Component {
    constructor() {
        super(...arguments), (this.context = null), (this.manager = null), (this.mutationObserver = null);
    }
    observe() {
        var e,
            { node: t } = this.props;
        if (!t.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
        null == (e = this.mutationObserver) || e.observe(t.current, eG);
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
                        var a = t.filter((e) => J(r, e, t));
                        e.push(...a);
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
            a = null == (e = this.mutationObserver) ? void 0 : e.takeRecords();
        return (
            null != a && a.length && (null == (r = this.manager) || r.registerMutations(a)),
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
ez.contextType = eC;
var eW = /^(38190|98365)$/.test(n.j)
    ? null
    : er
      ? ez
      : (e) => {
            var { children: t } = e;
            return c.createElement(c.Fragment, null, t);
        };
function eq(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return n.reduce((e, t) => e.slice(0, t.start) + t.text + e.slice(t.end), e);
}
function eV(e, t) {
    var { start: n, end: r, text: a } = t,
        i = e.slice(n, r),
        o = (function (e, t) {
            for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) if (e.charAt(r) !== t.charAt(r)) return r;
            return n;
        })(i, a),
        s = Math.min(i.length - o, a.length - o),
        l = (function (e, t, n) {
            for (var r = Math.min(e.length, t.length, n), a = 0; a < r; a++)
                if (e.charAt(e.length - a - 1) !== t.charAt(t.length - a - 1)) return a;
            return r;
        })(i, a, s),
        c = { start: n + o, end: r - l, text: a.slice(o, a.length - l) };
    return c.start === c.end && 0 === c.text.length ? null : c;
}
function e$(e, t) {
    var { path: n, offset: r } = t;
    if (!d.KE.hasPath(e, n)) return null;
    var a = d.bP.get(e, n);
    if (!d.EY.isText(a)) return null;
    var i = d.KE.above(e, { match: (t) => d.Hg.isElement(t) && d.KE.isBlock(e, t), at: n });
    if (!i) return null;
    for (; r > a.text.length; ) {
        var o = d.KE.next(e, { at: n, match: d.EY.isText });
        if (!o || !d.wA.isDescendant(o[1], i[1])) return null;
        (r -= a.text.length), (a = o[0]), (n = o[1]);
    }
    return { path: n, offset: r };
}
function eQ(e, t) {
    var n = e$(e, t.anchor);
    if (!n) return null;
    if (d.Q6.isCollapsed(t)) return { anchor: n, focus: n };
    var r = e$(e, t.focus);
    return r ? { anchor: n, focus: r } : null;
}
function eK(e, t, n) {
    var r = P.get(e),
        a =
            null == r
                ? void 0
                : r.find((e) => {
                      var { path: n } = e;
                      return d.wA.equals(n, t.path);
                  });
    if (!a || t.offset <= a.diff.start) return d.bR.transform(t, n, { affinity: "backward" });
    var { diff: i } = a;
    if (t.offset <= i.start + i.text.length) {
        var o = { path: t.path, offset: i.start },
            s = d.bR.transform(o, n, { affinity: "backward" });
        return s ? { path: s.path, offset: s.offset + t.offset - i.start } : null;
    }
    var l = { path: t.path, offset: t.offset - i.text.length + i.end - i.start },
        c = d.bR.transform(l, n, { affinity: "backward" });
    return c
        ? "split_node" === n.type && d.wA.equals(n.path, t.path) && l.offset < n.position && i.start < n.position
            ? c
            : { path: c.path, offset: c.offset + i.text.length - i.end + i.start }
        : null;
}
function eX(e, t, n) {
    var r = eK(e, t.anchor, n);
    if (!r) return null;
    if (d.Q6.isCollapsed(t)) return { anchor: r, focus: r };
    var a = eK(e, t.focus, n);
    return a ? { anchor: r, focus: a } : null;
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
                  f(e, t, n[t]);
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
    e1 = /^(38190|98365)$/.test(n.j) ? null : ["node"];
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
var e3 = /^(38190|98365)$/.test(n.j) ? null : { subtree: !0, childList: !0, characterData: !0 },
    e9 = /^(38190|98365)$/.test(n.j)
        ? null
        : [
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
    e5 = /^(38190|98365)$/.test(n.j) ? null : ["text"];
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
function e8(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? e4(Object(n), !0).forEach(function (t) {
                  f(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : e4(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var e6 = (e) => c.createElement(c.Fragment, null, ek(e)),
    e7 = (e) => {
        var t,
            n,
            r,
            i,
            s,
            u,
            _ = (0, c.useCallback)((e) => c.createElement(te, Object.assign({}, e)), []),
            {
                autoFocus: p,
                decorate: m = tt,
                onDOMBeforeInput: h,
                placeholder: b,
                readOnly: E = !1,
                renderElement: y,
                renderLeaf: O,
                renderPlaceholder: w = _,
                scrollSelectionIntoView: x = tn,
                style: H = {},
                as: z = "div",
                disableDefaultStyles: $ = !1,
            } = e,
            Q = g(e, e9),
            K = (() => {
                var e = (0, c.useContext)(eF);
                if (!e) throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
                var { editor: t } = e;
                return t;
            })(),
            [X, Z] = (0, c.useState)(!1),
            ee = (0, c.useRef)(null),
            en = (0, c.useRef)([]),
            { onUserInput: eo, receivedUserInput: el } =
                ((t = eD()),
                (n = (0, c.useRef)(!1)),
                (r = (0, c.useRef)(0)),
                (i = (0, c.useCallback)(() => {
                    if (!n.current) {
                        n.current = !0;
                        var e = ef.getWindow(t);
                        e.cancelAnimationFrame(r.current),
                            (r.current = e.requestAnimationFrame(() => {
                                n.current = !1;
                            }));
                    }
                }, [])),
                (0, c.useEffect)(() => () => cancelAnimationFrame(r.current), []),
                { receivedUserInput: n, onUserInput: i }),
            [, ec] = (0, c.useReducer)((e) => e + 1, 0);
        B.set(K, ec), A.set(K, E);
        var eg = (0, c.useMemo)(
            () => ({ isDraggingInternally: !1, isUpdatingSelection: !1, latestElement: null, hasMarkPlaceholder: !1 }),
            [],
        );
        (0, c.useLayoutEffect)(
            () => () => {
                null == eg || (null != eg.latestElement && (eg.latestElement.remove(), (eg.latestElement = null)));
            },
            [],
        ),
            (0, c.useEffect)(() => {
                ee.current && p && ee.current.focus();
            }, [p]);
        var eh = (0, c.useCallback)(
                l()(() => {
                    if (
                        (er || !ef.isComposing(K)) &&
                        (!eg.isUpdatingSelection || (null != ey && ey.isFlushing())) &&
                        !eg.isDraggingInternally
                    ) {
                        var e = ef.findDocumentOrShadowRoot(K),
                            { activeElement: t } = e,
                            n = ef.toDOMNode(K, K),
                            r = e.getSelection();
                        if ((t === n ? ((eg.latestElement = t), R.set(K, !0)) : R.delete(K), !r))
                            return d.gB.deselect(K);
                        var { anchorNode: a, focusNode: i } = r,
                            o = ef.hasEditableTarget(K, a) || ef.isTargetInsideNonReadonlyVoid(K, a),
                            s = ef.hasEditableTarget(K, i) || ef.isTargetInsideNonReadonlyVoid(K, i);
                        if (o && s) {
                            var l = ef.toSlateRange(K, r, { exactMatch: !1, suppressThrow: !0 });
                            l &&
                                (ef.isComposing(K) ||
                                (null != ey && ey.hasPendingChanges()) ||
                                (null != ey && ey.isFlushing())
                                    ? null == ey || ey.handleUserSelect(l)
                                    : d.gB.select(K, l));
                        }
                        !E || (o && s) || d.gB.deselect(K);
                    }
                }, 100),
                [E],
            ),
            eb = (0, c.useMemo)(() => o()(eh, 0), [eh]),
            ey = (function (e) {
                var t,
                    { node: n } = e,
                    r = g(e, e1);
                if (!er) return null;
                var a = eD(),
                    i =
                        ((t = (0, c.useRef)(!1)),
                        (0, c.useEffect)(
                            () => (
                                (t.current = !0),
                                () => {
                                    t.current = !1;
                                }
                            ),
                            [],
                        ),
                        t.current),
                    [o] = (0, c.useState)(() =>
                        (function (e) {
                            var { editor: t, scheduleOnDOMSelectionChange: n, onDOMSelectionChange: r } = e,
                                a = !1,
                                i = null,
                                o = null,
                                s = null,
                                l = 0,
                                c = !1,
                                u = () => {
                                    var e = Y.get(t);
                                    if ((Y.delete(t), e)) {
                                        var { selection: n } = t,
                                            r = eQ(t, e);
                                        !r || (n && d.Q6.equals(r, n)) || d.gB.select(t, r);
                                    }
                                },
                                _ = () => {
                                    if (
                                        (o && (clearTimeout(o), (o = null)),
                                        s && (clearTimeout(s), (s = null)),
                                        !h() && !g())
                                    )
                                        return void u();
                                    a || ((a = !0), setTimeout(() => (a = !1))), g() && (a = "action");
                                    var e = t.selection && d.KE.rangeRef(t, t.selection, { affinity: "forward" });
                                    I.set(t, t.marks), e0("flush", F.get(t), P.get(t));
                                    for (var i = h(); (l = null == (_ = P.get(t)) ? void 0 : _[0]); ) {
                                        var l,
                                            _,
                                            p,
                                            m = k.get(t);
                                        void 0 !== m && (k.delete(t), (t.marks = m)), m && !1 === c && (c = null);
                                        var f = (function (e) {
                                            var { path: t, diff: n } = e;
                                            return {
                                                anchor: { path: t, offset: n.start },
                                                focus: { path: t, offset: n.end },
                                            };
                                        })(l);
                                        (t.selection && d.Q6.equals(t.selection, f)) || d.gB.select(t, f),
                                            l.diff.text ? d.KE.insertText(t, l.diff.text) : d.KE.deleteFragment(t),
                                            P.set(
                                                t,
                                                null == (p = P.get(t))
                                                    ? void 0
                                                    : p.filter((e) => {
                                                          var { id: t } = e;
                                                          return t !== l.id;
                                                      }),
                                            ),
                                            !(function (e, t) {
                                                var { path: n, diff: r } = t;
                                                if (!d.KE.hasPath(e, n)) return !1;
                                                var a = d.bP.get(e, n);
                                                if (!d.EY.isText(a)) return !1;
                                                if (r.start !== a.text.length || 0 === r.text.length)
                                                    return a.text.slice(r.start, r.start + r.text.length) === r.text;
                                                var i = d.wA.next(n);
                                                if (!d.KE.hasPath(e, i)) return !1;
                                                var o = d.bP.get(e, i);
                                                return d.EY.isText(o) && o.text.startsWith(r.text);
                                            })(t, l) &&
                                                ((i = !1),
                                                F.delete(t),
                                                I.delete(t),
                                                (a = "action"),
                                                Y.delete(t),
                                                n.cancel(),
                                                r.cancel(),
                                                null == e || e.unref());
                                    }
                                    var b = null == e ? void 0 : e.unref();
                                    if (
                                        (!b ||
                                            Y.get(t) ||
                                            (t.selection && d.Q6.equals(b, t.selection)) ||
                                            d.gB.select(t, b),
                                        g())
                                    )
                                        return void (() => {
                                            var e = F.get(t);
                                            if ((F.delete(t), e)) {
                                                if (e.at) {
                                                    var n = d.bR.isPoint(e.at) ? e$(t, e.at) : eQ(t, e.at);
                                                    if (!n) return;
                                                    var r = d.KE.range(t, n);
                                                    (t.selection && d.Q6.equals(t.selection, r)) || d.gB.select(t, n);
                                                }
                                                e.run();
                                            }
                                        })();
                                    i && n(), n.flush(), r.flush(), u();
                                    var E = I.get(t);
                                    I.delete(t), void 0 !== E && ((t.marks = E), t.onChange());
                                },
                                p = function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                        n = T.get(t);
                                    if (n) {
                                        if (h() || e) {
                                            n.style.display = "none";
                                            return;
                                        }
                                        n.style.removeProperty("display");
                                    }
                                },
                                m = (e, n) => {
                                    var r,
                                        a,
                                        i,
                                        o,
                                        s,
                                        c,
                                        u,
                                        _,
                                        m = null != (_ = P.get(t)) ? _ : [];
                                    P.set(t, m);
                                    var f = d.bP.leaf(t, e),
                                        g = m.findIndex((t) => d.wA.equals(t.path, e));
                                    if (g < 0) {
                                        eV(f.text, n) && m.push({ path: e, diff: n, id: l++ }), p();
                                        return;
                                    }
                                    var h =
                                        ((r = f.text),
                                        (a = m[g].diff),
                                        (i = Math.min(a.start, n.start)),
                                        (o = Math.max(0, Math.min(a.start + a.text.length, n.end) - n.start)),
                                        (s = eq(r, a, n)),
                                        (c = Math.max(
                                            n.start + n.text.length,
                                            a.start +
                                                a.text.length +
                                                (a.start + a.text.length > n.start ? n.text.length : 0) -
                                                o,
                                        )),
                                        (u = s.slice(i, c)),
                                        eV(r, {
                                            start: i,
                                            end: Math.max(a.end, n.end - a.text.length + (a.end - a.start)),
                                            text: u,
                                        }));
                                    if (!h) {
                                        m.splice(g, 1), p();
                                        return;
                                    }
                                    m[g] = eJ(eJ({}, m[g]), {}, { diff: h });
                                },
                                f = function (e) {
                                    var { at: a } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    (c = !1),
                                        Y.delete(t),
                                        n.cancel(),
                                        r.cancel(),
                                        g() && _(),
                                        F.set(t, { at: a, run: e }),
                                        (s = setTimeout(_));
                                },
                                g = () => !!F.get(t),
                                h = () => {
                                    var e;
                                    return !!(null != (e = P.get(t)) && e.length);
                                },
                                b = (e) => {
                                    Y.set(t, e), o && (clearTimeout(o), (o = null));
                                    var { selection: n } = t;
                                    if (e) {
                                        var r = !n || !d.wA.equals(n.anchor.path, e.anchor.path),
                                            a =
                                                !n ||
                                                !d.wA.equals(n.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
                                        ((r && c) || a) && (c = !1), (r || h()) && (o = setTimeout(_, 200));
                                    }
                                },
                                E = () => {
                                    g() || (s = setTimeout(_));
                                };
                            return {
                                flush: _,
                                scheduleFlush: E,
                                hasPendingDiffs: h,
                                hasPendingAction: g,
                                hasPendingChanges: () => g() || h(),
                                isFlushing: () => a,
                                handleUserSelect: b,
                                handleCompositionEnd: (e) => {
                                    i && clearTimeout(i),
                                        (i = setTimeout(() => {
                                            M.set(t, !1), _();
                                        }, 25));
                                },
                                handleCompositionStart: (e) => {
                                    M.set(t, !0), i && (clearTimeout(i), (i = null));
                                },
                                handleDOMBeforeInput: (e) => {
                                    o && (clearTimeout(o), (o = null));
                                    var { inputType: n } = e,
                                        r = null,
                                        a = e.dataTransfer || e.data || void 0;
                                    !1 !== c && "insertText" !== n && "insertCompositionText" !== n && (c = !1);
                                    var [i] = e.getTargetRanges();
                                    i && (r = ef.toSlateRange(t, i, { exactMatch: !1, suppressThrow: !0 }));
                                    var s = ef.getWindow(t).getSelection();
                                    if (
                                        (!r &&
                                            s &&
                                            ((i = s),
                                            (r = ef.toSlateRange(t, s, { exactMatch: !1, suppressThrow: !0 }))),
                                        (r = null != (M = r) ? M : t.selection))
                                    ) {
                                        var l = !0;
                                        if (n.startsWith("delete")) {
                                            if (d.Q6.isExpanded(r)) {
                                                var [u, _] = d.Q6.edges(r);
                                                if (d.bP.leaf(t, u.path).text.length === u.offset && 0 === _.offset) {
                                                    var p = d.KE.next(t, { at: u.path, match: d.EY.isText });
                                                    p && d.wA.equals(p[1], _.path) && (r = { anchor: _, focus: _ });
                                                }
                                            }
                                            var g = n.endsWith("Backward") ? "backward" : "forward",
                                                [h, y] = d.Q6.edges(r),
                                                [v, S] = d.KE.leaf(t, h.path),
                                                T = { text: "", start: h.offset, end: y.offset },
                                                C = P.get(t),
                                                D = null == C ? void 0 : C.find((e) => d.wA.equals(e.path, S)),
                                                O = D ? [D.diff, T] : [T];
                                            if ((0 === eq(v.text, ...O).length && (l = !1), d.Q6.isExpanded(r))) {
                                                if (l && d.wA.equals(r.anchor.path, r.focus.path)) {
                                                    var w = { path: r.anchor.path, offset: h.offset };
                                                    return (
                                                        b(d.KE.range(t, w, w)),
                                                        m(r.anchor.path, { text: "", end: y.offset, start: h.offset })
                                                    );
                                                }
                                                return f(() => d.KE.deleteFragment(t, { direction: g }), { at: r });
                                            }
                                        }
                                        switch (n) {
                                            case "deleteByComposition":
                                            case "deleteByCut":
                                            case "deleteByDrag":
                                                return f(() => d.KE.deleteFragment(t), { at: r });
                                            case "deleteContent":
                                            case "deleteContentForward":
                                                var { anchor: A } = r;
                                                if (l && d.Q6.isCollapsed(r)) {
                                                    var R = d.bP.leaf(t, A.path);
                                                    if (A.offset < R.text.length)
                                                        return m(A.path, {
                                                            text: "",
                                                            start: A.offset,
                                                            end: A.offset + 1,
                                                        });
                                                }
                                                return f(() => d.KE.deleteForward(t), { at: r });
                                            case "deleteContentBackward":
                                                var M,
                                                    N,
                                                    { anchor: x } = r,
                                                    L = V(i) ? i.isCollapsed : !!(null != (N = i) && N.collapsed);
                                                if (l && L && d.Q6.isCollapsed(r) && x.offset > 0)
                                                    return m(x.path, { text: "", start: x.offset - 1, end: x.offset });
                                                return f(() => d.KE.deleteBackward(t), { at: r });
                                            case "deleteEntireSoftLine":
                                                return f(
                                                    () => {
                                                        d.KE.deleteBackward(t, { unit: "line" }),
                                                            d.KE.deleteForward(t, { unit: "line" });
                                                    },
                                                    { at: r },
                                                );
                                            case "deleteHardLineBackward":
                                                return f(() => d.KE.deleteBackward(t, { unit: "block" }), { at: r });
                                            case "deleteSoftLineBackward":
                                                return f(() => d.KE.deleteBackward(t, { unit: "line" }), { at: r });
                                            case "deleteHardLineForward":
                                                return f(() => d.KE.deleteForward(t, { unit: "block" }), { at: r });
                                            case "deleteSoftLineForward":
                                                return f(() => d.KE.deleteForward(t, { unit: "line" }), { at: r });
                                            case "deleteWordBackward":
                                                return f(() => d.KE.deleteBackward(t, { unit: "word" }), { at: r });
                                            case "deleteWordForward":
                                                return f(() => d.KE.deleteForward(t, { unit: "word" }), { at: r });
                                            case "insertLineBreak":
                                                return f(() => d.KE.insertSoftBreak(t), { at: r });
                                            case "insertParagraph":
                                                return f(() => d.KE.insertBreak(t), { at: r });
                                            case "insertCompositionText":
                                            case "deleteCompositionText":
                                            case "insertFromComposition":
                                            case "insertFromDrop":
                                            case "insertFromPaste":
                                            case "insertFromYank":
                                            case "insertReplacementText":
                                            case "insertText":
                                                if ((null == a ? void 0 : a.constructor.name) === "DataTransfer")
                                                    return f(() => ef.insertData(t, a), { at: r });
                                                var I = null != a ? a : "";
                                                if (
                                                    (k.get(t) && (I = I.replace("\uFEFF", "")),
                                                    "insertText" === n && /.*\n.*\n$/.test(I) && (I = I.slice(0, -1)),
                                                    I.includes("\n"))
                                                )
                                                    return f(
                                                        () => {
                                                            var e = I.split("\n");
                                                            e.forEach((n, r) => {
                                                                n && d.KE.insertText(t, n),
                                                                    r !== e.length - 1 && d.KE.insertSoftBreak(t);
                                                            });
                                                        },
                                                        { at: r },
                                                    );
                                                if (d.wA.equals(r.anchor.path, r.focus.path)) {
                                                    var [F, Y] = d.Q6.edges(r),
                                                        B = { start: F.offset, end: Y.offset, text: I };
                                                    if (I && c && "insertCompositionText" === n) {
                                                        var U = c.start + c.text.search(/\S|$/);
                                                        B.start + B.text.search(/\S|$/) === U + 1 &&
                                                        B.end === c.start + c.text.length
                                                            ? ((B.start -= 1), (c = null), E())
                                                            : (c = !1);
                                                    } else
                                                        c =
                                                            "insertText" === n &&
                                                            (null === c
                                                                ? B
                                                                : !!(c && d.Q6.isCollapsed(r)) &&
                                                                  c.end + c.text.length === F.offset &&
                                                                  eJ(eJ({}, c), {}, { text: c.text + I }));
                                                    if (l) return void m(F.path, B);
                                                }
                                                return f(() => d.KE.insertText(t, I), { at: r });
                                        }
                                    }
                                },
                                handleKeyDown: (e) => {
                                    h() || (p(!0), setTimeout(p));
                                },
                                handleDomMutations: (e) => {
                                    if (!(h() || g()) && e.some((n) => J(t, n, e))) {
                                        var n;
                                        null == (n = B.get(t)) || n();
                                    }
                                },
                                handleInput: () => {
                                    (g() || !h()) && _();
                                },
                            };
                        })(
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? e2(Object(n), !0).forEach(function (t) {
                                              f(e, t, n[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                          : e2(Object(n)).forEach(function (t) {
                                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                            });
                                }
                                return e;
                            })({ editor: a }, r),
                        ),
                    );
                return (
                    !(function (e, t, n) {
                        var [r] = (0, c.useState)(() => new MutationObserver(t));
                        eE(() => {
                            r.takeRecords();
                        }),
                            (0, c.useEffect)(() => {
                                if (!e.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
                                return r.observe(e.current, n), () => r.disconnect();
                            }, []);
                    })(n, o.handleDomMutations, e3),
                    L.set(a, o.scheduleFlush),
                    i && o.flush(),
                    o
                );
            })({ node: ee, onDOMSelectionChange: eh, scheduleOnDOMSelectionChange: eb });
        eE(() => {
            ee.current && (e = G(ee.current))
                ? (v.set(K, e), S.set(K, ee.current), D.set(K, ee.current), C.set(ee.current, K))
                : D.delete(K);
            var e,
                { selection: t } = K,
                n = ef.findDocumentOrShadowRoot(K).getSelection();
            if (!(!n || !ef.isFocused(K) || (null != ey && ey.hasPendingAction()))) {
                var r = (e) => {
                        var r = "None" !== n.type;
                        if (t || r) {
                            var a = S.get(K),
                                i = !1;
                            if ((a.contains(n.anchorNode) && a.contains(n.focusNode) && (i = !0), r && i && t && !e)) {
                                var o = ef.toSlateRange(K, n, { exactMatch: !0, suppressThrow: !0 });
                                if (o && d.Q6.equals(o, t)) {
                                    if (!eg.hasMarkPlaceholder) return;
                                    var s,
                                        { anchorNode: l } = n;
                                    if (
                                        null != l &&
                                        null != (s = l.parentElement) &&
                                        s.hasAttribute("data-slate-mark-placeholder")
                                    )
                                        return;
                                }
                            }
                            if (t && !ef.hasRange(K, t)) {
                                K.selection = ef.toSlateRange(K, n, { exactMatch: !1, suppressThrow: !0 });
                                return;
                            }
                            eg.isUpdatingSelection = !0;
                            var c = t && ef.toDOMRange(K, t);
                            return (
                                c
                                    ? (d.Q6.isBackward(t)
                                          ? n.setBaseAndExtent(
                                                c.endContainer,
                                                c.endOffset,
                                                c.startContainer,
                                                c.startOffset,
                                            )
                                          : n.setBaseAndExtent(
                                                c.startContainer,
                                                c.startOffset,
                                                c.endContainer,
                                                c.endOffset,
                                            ),
                                      x(K, c))
                                    : n.removeAllRanges(),
                                c
                            );
                        }
                    },
                    a = r(),
                    i = (null == ey ? void 0 : ey.isFlushing()) === "action";
                if (!er || !i)
                    return void setTimeout(() => {
                        a && ea && ef.toDOMNode(K, K).focus(), (eg.isUpdatingSelection = !1);
                    });
                var o = null,
                    s = requestAnimationFrame(() => {
                        if (i) {
                            var e = (e) => {
                                try {
                                    ef.toDOMNode(K, K).focus(), r(e);
                                } catch (e) {}
                            };
                            e(),
                                (o = setTimeout(() => {
                                    e(!0), (eg.isUpdatingSelection = !1);
                                }));
                        }
                    });
                return () => {
                    cancelAnimationFrame(s), o && clearTimeout(o);
                };
            }
        });
        var ev = (0, c.useCallback)(
                (e) => {
                    if ((eo(), !E && ef.hasEditableTarget(K, e.target) && !ta(e, h))) {
                        if (ey) return ey.handleDOMBeforeInput(e);
                        eb.flush(), eh.flush();
                        var { selection: t } = K,
                            { inputType: n } = e,
                            r = e.dataTransfer || e.data || void 0,
                            a = "insertCompositionText" === n || "deleteCompositionText" === n;
                        if (!(a && ef.isComposing(K))) {
                            var i = !1;
                            if (
                                "insertText" === n &&
                                t &&
                                d.Q6.isCollapsed(t) &&
                                e.data &&
                                1 === e.data.length &&
                                /[a-z ]/i.test(e.data) &&
                                0 !== t.anchor.offset
                            ) {
                                (i = !0), K.marks && (i = !1);
                                var { anchor: o } = t,
                                    [s, l] = ef.toDOMPoint(K, o),
                                    c = null == (p = s.parentElement) ? void 0 : p.closest("a"),
                                    u = ef.getWindow(K);
                                if (i && c && ef.hasDOMNode(K, c)) {
                                    var _,
                                        p,
                                        m,
                                        f,
                                        g =
                                            null == u
                                                ? void 0
                                                : u.document.createTreeWalker(c, NodeFilter.SHOW_TEXT).lastChild();
                                    g === s && (null == (f = g.textContent) ? void 0 : f.length) === l && (i = !1);
                                }
                                if (
                                    i &&
                                    s.parentElement &&
                                    (null == u || null == (m = u.getComputedStyle(s.parentElement))
                                        ? void 0
                                        : m.whiteSpace) === "pre"
                                ) {
                                    var b = d.KE.above(K, {
                                        at: o.path,
                                        match: (e) => d.Hg.isElement(e) && d.KE.isBlock(K, e),
                                    });
                                    b && d.bP.string(b[0]).includes("	") && (i = !1);
                                }
                            }
                            if (!n.startsWith("delete") || n.startsWith("deleteBy")) {
                                var [y] = e.getTargetRanges();
                                if (y) {
                                    var v = ef.toSlateRange(K, y, { exactMatch: !1, suppressThrow: !1 });
                                    if (!t || !d.Q6.equals(t, v)) {
                                        i = !1;
                                        var S = !a && K.selection && d.KE.rangeRef(K, K.selection);
                                        d.gB.select(K, v), S && N.set(K, S);
                                    }
                                }
                            }
                            if (!a) {
                                if ((i || e.preventDefault(), t && d.Q6.isExpanded(t) && n.startsWith("delete"))) {
                                    var T = n.endsWith("Backward") ? "backward" : "forward";
                                    d.KE.deleteFragment(K, { direction: T });
                                    return;
                                }
                                switch (n) {
                                    case "deleteByComposition":
                                    case "deleteByCut":
                                    case "deleteByDrag":
                                        d.KE.deleteFragment(K);
                                        break;
                                    case "deleteContent":
                                    case "deleteContentForward":
                                        d.KE.deleteForward(K);
                                        break;
                                    case "deleteContentBackward":
                                        d.KE.deleteBackward(K);
                                        break;
                                    case "deleteEntireSoftLine":
                                        d.KE.deleteBackward(K, { unit: "line" }),
                                            d.KE.deleteForward(K, { unit: "line" });
                                        break;
                                    case "deleteHardLineBackward":
                                        d.KE.deleteBackward(K, { unit: "block" });
                                        break;
                                    case "deleteSoftLineBackward":
                                        d.KE.deleteBackward(K, { unit: "line" });
                                        break;
                                    case "deleteHardLineForward":
                                        d.KE.deleteForward(K, { unit: "block" });
                                        break;
                                    case "deleteSoftLineForward":
                                        d.KE.deleteForward(K, { unit: "line" });
                                        break;
                                    case "deleteWordBackward":
                                        d.KE.deleteBackward(K, { unit: "word" });
                                        break;
                                    case "deleteWordForward":
                                        d.KE.deleteForward(K, { unit: "word" });
                                        break;
                                    case "insertLineBreak":
                                        d.KE.insertSoftBreak(K);
                                        break;
                                    case "insertParagraph":
                                        d.KE.insertBreak(K);
                                        break;
                                    case "insertFromComposition":
                                    case "insertFromDrop":
                                    case "insertFromPaste":
                                    case "insertFromYank":
                                    case "insertReplacementText":
                                    case "insertText":
                                        "insertFromComposition" === n && ef.isComposing(K) && (Z(!1), M.set(K, !1)),
                                            (null == r ? void 0 : r.constructor.name) === "DataTransfer"
                                                ? ef.insertData(K, r)
                                                : "string" == typeof r &&
                                                  (i
                                                      ? en.current.push(() => d.KE.insertText(K, r))
                                                      : d.KE.insertText(K, r));
                                }
                                var C = null == (_ = N.get(K)) ? void 0 : _.unref();
                                N.delete(K), !C || (K.selection && d.Q6.equals(K.selection, C)) || d.gB.select(K, C);
                            }
                        }
                    }
                },
                [E, h],
            ),
            eS = (0, c.useCallback)(
                (e) => {
                    null == e
                        ? (eh.cancel(),
                          eb.cancel(),
                          S.delete(K),
                          D.delete(K),
                          ee.current && em && ee.current.removeEventListener("beforeinput", ev))
                        : em && e.addEventListener("beforeinput", ev),
                        (ee.current = e);
                },
                [ee, ev, eh, eb],
            );
        eE(() => {
            var e = ef.getWindow(K);
            return (
                e.document.addEventListener("selectionchange", eb),
                () => {
                    e.document.removeEventListener("selectionchange", eb);
                }
            );
        }, [eb]);
        var eT = m([K, []]);
        if (b && 1 === K.children.length && 1 === Array.from(d.bP.texts(K)).length && "" === d.bP.string(K) && !X) {
            var eC = d.KE.start(K, []);
            eT.push({ [U]: !0, placeholder: b, anchor: eC, focus: eC });
        }
        var { marks: eO } = K;
        if (((eg.hasMarkPlaceholder = !1), K.selection && d.Q6.isCollapsed(K.selection) && eO)) {
            var { anchor: ew } = K.selection,
                eA = d.bP.leaf(K, ew.path),
                eR = g(eA, e5);
            if (!d.EY.equals(eA, eO, { loose: !0 })) {
                eg.hasMarkPlaceholder = !0;
                var eM = Object.fromEntries(Object.keys(eR).map((e) => [e, null]));
                eT.push(e8(e8(e8({ [j]: !0 }, eM), eO), {}, { anchor: ew, focus: ew }));
            }
        }
        (0, c.useEffect)(() => {
            setTimeout(() => {
                var { selection: e } = K;
                if (e) {
                    var { anchor: t } = e,
                        n = d.bP.leaf(K, t.path);
                    if (eO && !d.EY.equals(n, eO, { loose: !0 })) return void k.set(K, eO);
                }
                k.delete(K);
            });
        });
        var ex = null == (s = T.get(K)) || null == (u = s.getBoundingClientRect()) ? void 0 : u.height;
        return c.createElement(
            eI.Provider,
            { value: E },
            c.createElement(
                eN.Provider,
                { value: m },
                c.createElement(
                    eW,
                    { node: ee, receivedUserInput: el },
                    c.createElement(
                        z,
                        Object.assign({ role: E ? void 0 : "textbox", "aria-multiline": !E || void 0 }, Q, {
                            spellCheck: (!!em || !ep) && Q.spellCheck,
                            autoCorrect: em || !ep ? Q.autoCorrect : "false",
                            autoCapitalize: em || !ep ? Q.autoCapitalize : "false",
                            "data-slate-editor": !0,
                            "data-slate-node": "value",
                            contentEditable: !E,
                            zindex: -1,
                            suppressContentEditableWarning: !0,
                            ref: eS,
                            style: e8(
                                e8(
                                    {},
                                    $
                                        ? {}
                                        : e8(
                                              {
                                                  position: "relative",
                                                  outline: "none",
                                                  whiteSpace: "pre-wrap",
                                                  wordWrap: "break-word",
                                              },
                                              ex ? { minHeight: ex } : {},
                                          ),
                                ),
                                H,
                            ),
                            onBeforeInput: (0, c.useCallback)(
                                (e) => {
                                    if (
                                        !em &&
                                        !E &&
                                        !tr(e, Q.onBeforeInput) &&
                                        ef.hasSelectableTarget(K, e.target) &&
                                        (e.preventDefault(), !ef.isComposing(K))
                                    ) {
                                        var t = e.data;
                                        d.KE.insertText(K, t);
                                    }
                                },
                                [E],
                            ),
                            onInput: (0, c.useCallback)((e) => {
                                if (!tr(e, Q.onInput)) {
                                    if (ey) return void ey.handleInput();
                                    for (var t of en.current) t();
                                    en.current = [];
                                }
                            }, []),
                            onBlur: (0, c.useCallback)(
                                (e) => {
                                    if (
                                        E ||
                                        eg.isUpdatingSelection ||
                                        !ef.hasSelectableTarget(K, e.target) ||
                                        tr(e, Q.onBlur)
                                    )
                                        return;
                                    var t = ef.findDocumentOrShadowRoot(K);
                                    if (eg.latestElement !== t.activeElement) {
                                        var { relatedTarget: n } = e;
                                        if (
                                            n !== ef.toDOMNode(K, K) &&
                                            !(W(n) && n.hasAttribute("data-slate-spacer"))
                                        ) {
                                            if (null != n && q(n) && ef.hasDOMNode(K, n)) {
                                                var r = ef.toSlateNode(K, n);
                                                if (d.Hg.isElement(r) && !K.isVoid(r)) return;
                                            }
                                            if (ei) {
                                                var a = t.getSelection();
                                                null == a || a.removeAllRanges();
                                            }
                                            R.delete(K);
                                        }
                                    }
                                },
                                [E, Q.onBlur],
                            ),
                            onClick: (0, c.useCallback)(
                                (e) => {
                                    if (ef.hasTarget(K, e.target) && !tr(e, Q.onClick) && q(e.target)) {
                                        var t = ef.toSlateNode(K, e.target),
                                            n = ef.findPath(K, t);
                                        if (d.KE.hasPath(K, n) && d.bP.get(K, n) === t) {
                                            if (3 === e.detail && n.length >= 1) {
                                                var r = n;
                                                if (!(d.Hg.isElement(t) && d.KE.isBlock(K, t))) {
                                                    var a,
                                                        i = d.KE.above(K, {
                                                            match: (e) => d.Hg.isElement(e) && d.KE.isBlock(K, e),
                                                            at: n,
                                                        });
                                                    r = null != (a = null == i ? void 0 : i[1]) ? a : n.slice(0, 1);
                                                }
                                                var o = d.KE.range(K, r);
                                                d.gB.select(K, o);
                                                return;
                                            }
                                            if (!E) {
                                                var s = d.KE.start(K, n),
                                                    l = d.KE.end(K, n),
                                                    c = d.KE.void(K, { at: s }),
                                                    u = d.KE.void(K, { at: l });
                                                if (c && u && d.wA.equals(c[1], u[1])) {
                                                    var _ = d.KE.range(K, s);
                                                    d.gB.select(K, _);
                                                }
                                            }
                                        }
                                    }
                                },
                                [E, Q.onClick],
                            ),
                            onCompositionEnd: (0, c.useCallback)(
                                (e) => {
                                    if (
                                        ef.hasSelectableTarget(K, e.target) &&
                                        (ef.isComposing(K) && (Z(!1), M.set(K, !1)),
                                        null == ey || ey.handleCompositionEnd(e),
                                        !tr(e, Q.onCompositionEnd) && !er && !ei && !eu && !et && !e_ && !ed) &&
                                        e.data
                                    ) {
                                        var t = k.get(K);
                                        k.delete(K),
                                            void 0 !== t && (I.set(K, K.marks), (K.marks = t)),
                                            d.KE.insertText(K, e.data);
                                        var n = I.get(K);
                                        I.delete(K), void 0 !== n && (K.marks = n);
                                    }
                                },
                                [Q.onCompositionEnd],
                            ),
                            onCompositionUpdate: (0, c.useCallback)(
                                (e) => {
                                    !ef.hasSelectableTarget(K, e.target) ||
                                        tr(e, Q.onCompositionUpdate) ||
                                        ef.isComposing(K) ||
                                        (Z(!0), M.set(K, !0));
                                },
                                [Q.onCompositionUpdate],
                            ),
                            onCompositionStart: (0, c.useCallback)(
                                (e) => {
                                    if (
                                        ef.hasSelectableTarget(K, e.target) &&
                                        (null == ey || ey.handleCompositionStart(e),
                                        !tr(e, Q.onCompositionStart) && !er)
                                    ) {
                                        Z(!0);
                                        var { selection: t } = K;
                                        if (t) {
                                            if (d.Q6.isExpanded(t)) return void d.KE.deleteFragment(K);
                                            var n = d.KE.above(K, {
                                                match: (e) => d.Hg.isElement(e) && d.KE.isInline(K, e),
                                                mode: "highest",
                                            });
                                            if (n) {
                                                var [, r] = n;
                                                if (d.KE.isEnd(K, t.anchor, r)) {
                                                    var a = d.KE.after(K, r);
                                                    d.gB.setSelection(K, { anchor: a, focus: a });
                                                }
                                            }
                                        }
                                    }
                                },
                                [Q.onCompositionStart],
                            ),
                            onCopy: (0, c.useCallback)(
                                (e) => {
                                    ef.hasSelectableTarget(K, e.target) &&
                                        !tr(e, Q.onCopy) &&
                                        (e.preventDefault(), ef.setFragmentData(K, e.clipboardData, "copy"));
                                },
                                [Q.onCopy],
                            ),
                            onCut: (0, c.useCallback)(
                                (e) => {
                                    if (!E && ef.hasSelectableTarget(K, e.target) && !tr(e, Q.onCut)) {
                                        e.preventDefault(), ef.setFragmentData(K, e.clipboardData, "cut");
                                        var { selection: t } = K;
                                        if (t)
                                            if (d.Q6.isExpanded(t)) d.KE.deleteFragment(K);
                                            else {
                                                var n = d.bP.parent(K, t.anchor.path);
                                                d.KE.isVoid(K, n) && d.gB.delete(K);
                                            }
                                    }
                                },
                                [E, Q.onCut],
                            ),
                            onDragOver: (0, c.useCallback)(
                                (e) => {
                                    if (ef.hasTarget(K, e.target) && !tr(e, Q.onDragOver)) {
                                        var t = ef.toSlateNode(K, e.target);
                                        d.Hg.isElement(t) && d.KE.isVoid(K, t) && e.preventDefault();
                                    }
                                },
                                [Q.onDragOver],
                            ),
                            onDragStart: (0, c.useCallback)(
                                (e) => {
                                    if (!E && ef.hasTarget(K, e.target) && !tr(e, Q.onDragStart)) {
                                        var t = ef.toSlateNode(K, e.target),
                                            n = ef.findPath(K, t);
                                        if (
                                            (d.Hg.isElement(t) && d.KE.isVoid(K, t)) ||
                                            d.KE.void(K, { at: n, voids: !0 })
                                        ) {
                                            var r = d.KE.range(K, n);
                                            d.gB.select(K, r);
                                        }
                                        (eg.isDraggingInternally = !0), ef.setFragmentData(K, e.dataTransfer, "drag");
                                    }
                                },
                                [E, Q.onDragStart],
                            ),
                            onDrop: (0, c.useCallback)(
                                (e) => {
                                    if (!E && ef.hasTarget(K, e.target) && !tr(e, Q.onDrop)) {
                                        e.preventDefault();
                                        var t = K.selection,
                                            n = ef.findEventRange(K, e),
                                            r = e.dataTransfer;
                                        d.gB.select(K, n),
                                            eg.isDraggingInternally &&
                                                t &&
                                                !d.Q6.equals(t, n) &&
                                                !d.KE.void(K, { at: n, voids: !0 }) &&
                                                d.gB.delete(K, { at: t }),
                                            ef.insertData(K, r),
                                            ef.isFocused(K) || ef.focus(K);
                                    }
                                    eg.isDraggingInternally = !1;
                                },
                                [E, Q.onDrop],
                            ),
                            onDragEnd: (0, c.useCallback)(
                                (e) => {
                                    !E &&
                                        eg.isDraggingInternally &&
                                        Q.onDragEnd &&
                                        ef.hasTarget(K, e.target) &&
                                        Q.onDragEnd(e),
                                        (eg.isDraggingInternally = !1);
                                },
                                [E, Q.onDragEnd],
                            ),
                            onFocus: (0, c.useCallback)(
                                (e) => {
                                    if (
                                        !E &&
                                        !eg.isUpdatingSelection &&
                                        ef.hasEditableTarget(K, e.target) &&
                                        !tr(e, Q.onFocus)
                                    ) {
                                        var t = ef.toDOMNode(K, K);
                                        if (
                                            ((eg.latestElement = ef.findDocumentOrShadowRoot(K).activeElement),
                                            ea && e.target !== t)
                                        )
                                            return void t.focus();
                                        R.set(K, !0);
                                    }
                                },
                                [E, Q.onFocus],
                            ),
                            onKeyDown: (0, c.useCallback)(
                                (e) => {
                                    if (!E && ef.hasEditableTarget(K, e.target)) {
                                        null == ey || ey.handleKeyDown(e);
                                        var { nativeEvent: t } = e;
                                        if (
                                            (ef.isComposing(K) && !1 === t.isComposing && (M.set(K, !1), Z(!1)),
                                            !(tr(e, Q.onKeyDown) || ef.isComposing(K)))
                                        ) {
                                            var { selection: n } = K,
                                                r = K.children[null !== n ? n.focus.path[0] : 0],
                                                i = "rtl" === a()(d.bP.string(r));
                                            if (eH.isRedo(t)) {
                                                e.preventDefault(), "function" == typeof K.redo && K.redo();
                                                return;
                                            }
                                            if (eH.isUndo(t)) {
                                                e.preventDefault(), "function" == typeof K.undo && K.undo();
                                                return;
                                            }
                                            if (eH.isMoveLineBackward(t)) {
                                                e.preventDefault(), d.gB.move(K, { unit: "line", reverse: !0 });
                                                return;
                                            }
                                            if (eH.isMoveLineForward(t)) {
                                                e.preventDefault(), d.gB.move(K, { unit: "line" });
                                                return;
                                            }
                                            if (eH.isExtendLineBackward(t)) {
                                                e.preventDefault(),
                                                    d.gB.move(K, { unit: "line", edge: "focus", reverse: !0 });
                                                return;
                                            }
                                            if (eH.isExtendLineForward(t)) {
                                                e.preventDefault(), d.gB.move(K, { unit: "line", edge: "focus" });
                                                return;
                                            }
                                            if (eH.isMoveBackward(t)) {
                                                e.preventDefault(),
                                                    n && d.Q6.isCollapsed(n)
                                                        ? d.gB.move(K, { reverse: !i })
                                                        : d.gB.collapse(K, { edge: "start" });
                                                return;
                                            }
                                            if (eH.isMoveForward(t)) {
                                                e.preventDefault(),
                                                    n && d.Q6.isCollapsed(n)
                                                        ? d.gB.move(K, { reverse: i })
                                                        : d.gB.collapse(K, { edge: "end" });
                                                return;
                                            }
                                            if (eH.isMoveWordBackward(t)) {
                                                e.preventDefault(),
                                                    n && d.Q6.isExpanded(n) && d.gB.collapse(K, { edge: "focus" }),
                                                    d.gB.move(K, { unit: "word", reverse: !i });
                                                return;
                                            }
                                            if (eH.isMoveWordForward(t)) {
                                                e.preventDefault(),
                                                    n && d.Q6.isExpanded(n) && d.gB.collapse(K, { edge: "focus" }),
                                                    d.gB.move(K, { unit: "word", reverse: i });
                                                return;
                                            }
                                            if (em) {
                                                if (
                                                    (es || ei) &&
                                                    n &&
                                                    (eH.isDeleteBackward(t) || eH.isDeleteForward(t)) &&
                                                    d.Q6.isCollapsed(n)
                                                ) {
                                                    var o = d.bP.parent(K, n.anchor.path);
                                                    if (
                                                        d.Hg.isElement(o) &&
                                                        d.KE.isVoid(K, o) &&
                                                        (d.KE.isInline(K, o) || d.KE.isBlock(K, o))
                                                    ) {
                                                        e.preventDefault(), d.KE.deleteBackward(K, { unit: "block" });
                                                        return;
                                                    }
                                                }
                                            } else {
                                                if (eH.isBold(t) || eH.isItalic(t) || eH.isTransposeCharacter(t))
                                                    return void e.preventDefault();
                                                if (eH.isSoftBreak(t)) {
                                                    e.preventDefault(), d.KE.insertSoftBreak(K);
                                                    return;
                                                }
                                                if (eH.isSplitBlock(t)) {
                                                    e.preventDefault(), d.KE.insertBreak(K);
                                                    return;
                                                }
                                                if (eH.isDeleteBackward(t)) {
                                                    e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(K, { direction: "backward" })
                                                            : d.KE.deleteBackward(K);
                                                    return;
                                                }
                                                if (eH.isDeleteForward(t)) {
                                                    e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(K, { direction: "forward" })
                                                            : d.KE.deleteForward(K);
                                                    return;
                                                }
                                                if (eH.isDeleteLineBackward(t)) {
                                                    e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(K, { direction: "backward" })
                                                            : d.KE.deleteBackward(K, { unit: "line" });
                                                    return;
                                                }
                                                if (eH.isDeleteLineForward(t)) {
                                                    e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(K, { direction: "forward" })
                                                            : d.KE.deleteForward(K, { unit: "line" });
                                                    return;
                                                }
                                                if (eH.isDeleteWordBackward(t)) {
                                                    e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(K, { direction: "backward" })
                                                            : d.KE.deleteBackward(K, { unit: "word" });
                                                    return;
                                                }
                                                if (eH.isDeleteWordForward(t)) {
                                                    e.preventDefault(),
                                                        n && d.Q6.isExpanded(n)
                                                            ? d.KE.deleteFragment(K, { direction: "forward" })
                                                            : d.KE.deleteForward(K, { unit: "word" });
                                                    return;
                                                }
                                            }
                                        }
                                    }
                                },
                                [E, Q.onKeyDown],
                            ),
                            onPaste: (0, c.useCallback)(
                                (e) => {
                                    let t;
                                    !E &&
                                        ef.hasEditableTarget(K, e.target) &&
                                        !tr(e, Q.onPaste) &&
                                        (!em ||
                                            ((t = e.nativeEvent).clipboardData &&
                                                "" !== t.clipboardData.getData("text/plain") &&
                                                1 === t.clipboardData.types.length) ||
                                            ei) &&
                                        (e.preventDefault(), ef.insertData(K, e.clipboardData));
                                },
                                [E, Q.onPaste],
                            ),
                        }),
                        c.createElement(e6, {
                            decorations: eT,
                            node: K,
                            renderElement: y,
                            renderPlaceholder: w,
                            renderLeaf: O,
                            selection: K.selection,
                        }),
                    ),
                ),
            ),
        );
    },
    te = (e) => {
        var { attributes: t, children: n } = e;
        return c.createElement("span", Object.assign({}, t), n, er && c.createElement("br", null));
    },
    tt = () => [],
    tn = (e, t) => {
        if (t.getBoundingClientRect && (!e.selection || (e.selection && d.Q6.isCollapsed(e.selection)))) {
            var n = t.startContainer.parentElement;
            (n.getBoundingClientRect = t.getBoundingClientRect.bind(t)),
                (0, u.A)(n, { scrollMode: "if-needed" }),
                delete n.getBoundingClientRect;
        }
    },
    tr = (e, t) => {
        if (!t) return !1;
        var n = t(e);
        return null != n ? n : e.isDefaultPrevented() || e.isPropagationStopped();
    },
    ta = (e, t) => {
        if (!t) return !1;
        var n = t(e);
        return null != n ? n : e.defaultPrevented;
    },
    ti = /^(38190|98365)$/.test(n.j) ? null : (0, c.createContext)(!1),
    to = () => (0, c.useContext)(ti),
    ts = /^(38190|98365)$/.test(n.j) ? null : (0, c.createContext)({}),
    tl = /^(38190|98365)$/.test(n.j) ? null : ["editor", "children", "onChange", "value"],
    tc = (e) => {
        var t,
            n,
            r,
            { editor: a, children: i, onChange: o, value: s } = e,
            l = g(e, tl),
            u = (0, c.useRef)(!1),
            [_, p] = c.useState(() => {
                if (!d.bP.isNodeList(s))
                    throw Error(
                        "[Slate] value is invalid! Expected a list of elements but got: ".concat(d.h6.stringify(s)),
                    );
                if (!d.KE.isEditor(a)) throw Error("[Slate] editor is invalid! You passed: ".concat(d.h6.stringify(a)));
                return (a.children = s), Object.assign(a, l), { v: 0, editor: a };
            }),
            { selectorContext: m, onChange: f } =
                ((t = (0, c.useRef)([]).current),
                (n = (0, c.useRef)({ editor: a }).current),
                (r = (0, c.useCallback)((e) => {
                    (n.editor = e), t.forEach((t) => t(e));
                }, [])),
                {
                    selectorContext: (0, c.useMemo)(
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
            h = (0, c.useCallback)(() => {
                o && o(a.children), p((e) => ({ v: e.v + 1, editor: a })), f(a);
            }, [o]);
        (0, c.useEffect)(
            () => (
                x.set(a, h),
                () => {
                    x.set(a, () => {}), (u.current = !0);
                }
            ),
            [h],
        );
        var [b, E] = (0, c.useState)(ef.isFocused(a));
        return (
            (0, c.useEffect)(() => {
                E(ef.isFocused(a));
            }),
            eE(() => {
                var e = () => E(ef.isFocused(a));
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
            c.createElement(
                ts.Provider,
                { value: m },
                c.createElement(
                    eF.Provider,
                    { value: _ },
                    c.createElement(eC.Provider, { value: _.editor }, c.createElement(ti.Provider, { value: b }, i)),
                ),
            )
        );
    },
    tu = (e, t) => {
        var n = (t.top + t.bottom) / 2;
        return e.top <= n && e.bottom >= n;
    },
    td = (e, t, n) => {
        var r = ef.toDOMRange(e, t).getBoundingClientRect(),
            a = ef.toDOMRange(e, n).getBoundingClientRect();
        return tu(r, a) && tu(a, r);
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
function tp(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? t_(Object(n), !0).forEach(function (t) {
                  f(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : t_(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var tm = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x-slate-fragment",
            { apply: n, onChange: r, deleteBackward: a, addMark: i, removeMark: o } = e;
        return (
            w.set(e, new WeakMap()),
            (e.addMark = (t, n) => {
                var r, a;
                null == (r = L.get(e)) || r(),
                    !k.get(e) && null != (a = P.get(e)) && a.length && k.set(e, null),
                    I.delete(e),
                    i(t, n);
            }),
            (e.removeMark = (t) => {
                var n;
                !k.get(e) && null != (n = P.get(e)) && n.length && k.set(e, null), I.delete(e), o(t);
            }),
            (e.deleteBackward = (t) => {
                if ("line" !== t) return a(t);
                if (e.selection && d.Q6.isCollapsed(e.selection)) {
                    var n = d.KE.above(e, { match: (t) => d.Hg.isElement(t) && d.KE.isBlock(e, t), at: e.selection });
                    if (n) {
                        var [, r] = n,
                            i = d.KE.range(e, r, e.selection.anchor),
                            o = ((e, t) => {
                                var n = d.KE.range(e, d.Q6.end(t)),
                                    r = Array.from(d.KE.positions(e, { at: t })),
                                    a = 0,
                                    i = r.length,
                                    o = Math.floor(i / 2);
                                if (td(e, d.KE.range(e, r[a]), n)) return d.KE.range(e, r[a], n);
                                if (r.length < 2) return d.KE.range(e, r[r.length - 1], n);
                                for (; o !== r.length && o !== a; )
                                    td(e, d.KE.range(e, r[o]), n) ? (i = o) : (a = o), (o = Math.floor((a + i) / 2));
                                return d.KE.range(e, r[i], n);
                            })(e, i);
                        d.Q6.isCollapsed(o) || d.gB.delete(e, { at: o });
                    }
                }
            }),
            (e.apply = (t) => {
                var r,
                    a = [],
                    i = P.get(e);
                if (null != i && i.length) {
                    var o = i
                        .map((e) =>
                            (function (e, t) {
                                var { path: n, diff: r, id: a } = e;
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
                                                id: a,
                                                path: n,
                                            };
                                        return {
                                            diff: { start: r.start, end: r.end + t.text.length, text: r.text },
                                            id: a,
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
                                                id: a,
                                                path: n,
                                            };
                                        return {
                                            diff: { start: r.start, end: r.end - t.text.length, text: r.text },
                                            id: a,
                                            path: n,
                                        };
                                    case "split_node":
                                        if (!d.wA.equals(t.path, n) || t.position >= r.end)
                                            return {
                                                diff: r,
                                                id: a,
                                                path: d.wA.transform(n, t, { affinity: "backward" }),
                                            };
                                        if (t.position > r.start)
                                            return {
                                                diff: {
                                                    start: r.start,
                                                    end: Math.min(t.position, r.end),
                                                    text: r.text,
                                                },
                                                id: a,
                                                path: n,
                                            };
                                        return {
                                            diff: {
                                                start: r.start - t.position,
                                                end: r.end - t.position,
                                                text: r.text,
                                            },
                                            id: a,
                                            path: d.wA.transform(n, t, { affinity: "forward" }),
                                        };
                                    case "merge_node":
                                        if (!d.wA.equals(t.path, n))
                                            return { diff: r, id: a, path: d.wA.transform(n, t) };
                                        return {
                                            diff: {
                                                start: r.start + t.position,
                                                end: r.end + t.position,
                                                text: r.text,
                                            },
                                            id: a,
                                            path: d.wA.transform(n, t),
                                        };
                                }
                                var i = d.wA.transform(n, t);
                                return i ? { diff: r, path: i, id: a } : null;
                            })(e, t),
                        )
                        .filter(Boolean);
                    P.set(e, o);
                }
                var s = Y.get(e);
                s && Y.set(e, eX(e, s, t));
                var l = F.get(e);
                if (null != l && l.at) {
                    var c = d.bR.isPoint(null == l ? void 0 : l.at) ? eK(e, l.at, t) : eX(e, l.at, t);
                    F.set(e, c ? tp(tp({}, l), {}, { at: c }) : null);
                }
                switch (t.type) {
                    case "insert_text":
                    case "remove_text":
                    case "set_node":
                    case "split_node":
                        a.push(...tf(e, t.path));
                        break;
                    case "set_selection":
                        null == (r = N.get(e)) || r.unref(), N.delete(e);
                        break;
                    case "insert_node":
                    case "remove_node":
                        a.push(...tf(e, d.wA.parent(t.path)));
                        break;
                    case "merge_node":
                        a.push(...tf(e, d.wA.previous(t.path)));
                        break;
                    case "move_node":
                        a.push(...tf(e, d.wA.common(d.wA.parent(t.path), d.wA.parent(t.newPath))));
                }
                for (var [u, _] of (n(t), a)) {
                    var [p] = d.KE.node(e, u);
                    O.set(p, _);
                }
            }),
            (e.setFragmentData = (n) => {
                var { selection: r } = e;
                if (r) {
                    var [a, i] = d.Q6.edges(r),
                        o = d.KE.void(e, { at: a.path }),
                        s = d.KE.void(e, { at: i.path });
                    if (!d.Q6.isCollapsed(r) || o) {
                        var l = ef.toDOMRange(e, r),
                            c = l.cloneContents(),
                            u = c.childNodes[0];
                        if (
                            (c.childNodes.forEach((e) => {
                                e.textContent && "" !== e.textContent.trim() && (u = e);
                            }),
                            s)
                        ) {
                            var [_] = s,
                                p = l.cloneRange(),
                                m = ef.toDOMNode(e, _);
                            p.setEndAfter(m), (c = p.cloneContents());
                        }
                        if (
                            (o && (u = c.querySelector("[data-slate-spacer]")),
                            Array.from(c.querySelectorAll("[data-slate-zero-width]")).forEach((e) => {
                                var t = "n" === e.getAttribute("data-slate-zero-width");
                                e.textContent = t ? "\n" : "";
                            }),
                            $(u))
                        ) {
                            var f = u.ownerDocument.createElement("span");
                            (f.style.whiteSpace = "pre"), f.appendChild(u), c.appendChild(f), (u = f);
                        }
                        var g = JSON.stringify(e.getFragment()),
                            h = window.btoa(encodeURIComponent(g));
                        u.setAttribute("data-slate-fragment", h), n.setData("application/".concat(t), h);
                        var b = c.ownerDocument.createElement("div");
                        return (
                            b.appendChild(c),
                            b.setAttribute("hidden", "true"),
                            c.ownerDocument.body.appendChild(b),
                            n.setData("text/html", b.innerHTML),
                            n.setData("text/plain", X(b)),
                            c.ownerDocument.body.removeChild(b),
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
                    var a = JSON.parse(decodeURIComponent(window.atob(r)));
                    return e.insertFragment(a), !0;
                }
                return !1;
            }),
            (e.insertTextData = (t) => {
                var n = t.getData("text/plain");
                if (n) {
                    var r = n.split(/\r\n|\r|\n/),
                        a = !1;
                    for (var i of r) a && d.gB.splitNodes(e, { always: !0 }), e.insertText(i), (a = !0);
                    return !0;
                }
                return !1;
            }),
            (e.onChange = (t) => {
                m.unstable_batchedUpdates(() => {
                    var n = x.get(e);
                    n && n(), r(t);
                });
            }),
            e
        );
    },
    tf = (e, t) => {
        var n = [];
        for (var [r, a] of d.KE.levels(e, { at: t })) {
            var i = ef.findKey(e, r);
            n.push([a, i]);
        }
        return n;
    };
