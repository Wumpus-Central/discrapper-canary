n.d(t, {
    BU: () => tz,
    CX: () => tP,
    F3: () => ey,
    UE: () => tM,
    _7: () => ex,
    mH: () => tF,
    vt: () => eY,
});
var r = n(653603),
    i = n.n(r),
    a = n(889678),
    o = n.n(a),
    s = n(123763),
    l = n.n(s),
    c = n(473749),
    u = n(367989),
    d = n(327432),
    f = n(690096),
    p = n(247187),
    _ = n(24156);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e, t) {
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
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
var E = 0;
class b {
    constructor() {
        this.id = "".concat(E++);
    }
}
var y = new WeakMap(),
    O = new WeakMap(),
    v = new WeakMap(),
    S = new WeakMap(),
    I = new WeakMap(),
    T = new WeakMap(),
    A = new WeakMap(),
    C = new WeakMap(),
    N = new WeakMap(),
    P = new WeakMap(),
    R = new WeakMap(),
    D = new WeakMap(),
    w = new WeakMap(),
    x = new WeakMap(),
    L = new WeakMap(),
    j = new WeakMap(),
    M = new WeakMap(),
    k = new WeakMap(),
    U = new WeakMap(),
    G = new WeakMap(),
    Z = new WeakMap(),
    B = Symbol("placeholder"),
    F = Symbol("mark-placeholder"),
    V = globalThis.Text,
    H = (e) => (e && e.ownerDocument && e.ownerDocument.defaultView) || null,
    Y = (e) => K(e) && 8 === e.nodeType,
    W = (e) => K(e) && 1 === e.nodeType,
    K = (e) => {
        var t = H(e);
        return !!t && e instanceof t.Node;
    },
    z = (e) => {
        var t = e && e.anchorNode && H(e.anchorNode);
        return !!t && e instanceof t.Selection;
    },
    q = (e) => K(e) && 3 === e.nodeType,
    Q = (e) => e.clipboardData && "" !== e.clipboardData.getData("text/plain") && 1 === e.clipboardData.types.length,
    X = (e) => {
        var [t, n] = e;
        if (W(t) && t.childNodes.length) {
            var r = n === t.childNodes.length,
                i = r ? n - 1 : n;
            for ([t, i] = $(t, i, r ? "backward" : "forward"), r = i < n; W(t) && t.childNodes.length; ) {
                var a = r ? t.childNodes.length - 1 : 0;
                t = ee(t, a, r ? "backward" : "forward");
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
    $ = (e, t, n) => {
        for (
            var { childNodes: r } = e, i = r[t], a = t, o = !1, s = !1;
            (Y(i) || (W(i) && 0 === i.childNodes.length) || (W(i) && "false" === i.getAttribute("contenteditable"))) &&
            (!o || !s);
        ) {
            if (a >= r.length) {
                (o = !0), (a = t - 1), (n = "backward");
                continue;
            }
            if (a < 0) {
                (s = !0), (a = t + 1), (n = "forward");
                continue;
            }
            (i = r[a]), (t = a), (a += "forward" === n ? 1 : -1);
        }
        return [i, t];
    },
    ee = (e, t, n) => {
        var [r] = $(e, t, n);
        return r;
    },
    et = (e) => {
        var t = "";
        if (q(e) && e.nodeValue) return e.nodeValue;
        if (W(e)) {
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
        if (W(r) && r.matches('[contentEditable="false"]')) return !1;
        var { document: i } = ey.getWindow(e);
        if (i.contains(r)) return ey.hasDOMNode(e, r, { editable: !0 });
        var a = n.find((e) => {
            var { addedNodes: t, removedNodes: n } = e;
            for (var i of t) if (i === r || i.contains(r)) return !0;
            for (var a of n) if (a === r || a.contains(r)) return !0;
        });
        return !!a && a !== t && ei(e, a, n);
    },
    ea = parseInt(c.version.split(".")[0], 10) >= 17,
    eo =
        "undefined" != typeof navigator &&
        "undefined" != typeof window &&
        /iPad|iPhone|iPod/.test(navigator.userAgent) &&
        !window.MSStream,
    es = "undefined" != typeof navigator && /Mac OS X/.test(navigator.userAgent),
    el = "undefined" != typeof navigator && /Android/.test(navigator.userAgent),
    ec = "undefined" != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
    eu = "undefined" != typeof navigator && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
    ed = "undefined" != typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
    ef = "undefined" != typeof navigator && /Chrome/i.test(navigator.userAgent),
    ep = "undefined" != typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
    e_ = el && "undefined" != typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
    em =
        "undefined" != typeof navigator &&
        /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
    eh = "undefined" != typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
    eg = "undefined" != typeof navigator && /.*Wechat/.test(navigator.userAgent),
    eE = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
    eb =
        (!ep || !e_) &&
        !ed &&
        "undefined" != typeof globalThis &&
        globalThis.InputEvent &&
        "function" == typeof globalThis.InputEvent.prototype.getTargetRanges,
    ey = {
        isComposing: (e) => !!D.get(e),
        getWindow(e) {
            var t = v.get(e);
            if (!t) throw Error("Unable to find a host window element for this editor");
            return t;
        },
        findKey(e, t) {
            var n = C.get(t);
            return n || ((n = new b()), C.set(t, n)), n;
        },
        findPath(e, t) {
            for (var n = [], r = t; ; ) {
                var i = O.get(r);
                if (null == i)
                    if (d.ML.isEditor(r)) return n;
                    else break;
                var a = y.get(r);
                if (null == a) break;
                n.unshift(a), (r = i);
            }
            throw Error("Unable to find the path for Slate node: ".concat(d.o4.stringify(t)));
        },
        findDocumentOrShadowRoot(e) {
            var t = ey.toDOMNode(e, e),
                n = t.getRootNode();
            return (n instanceof Document || n instanceof ShadowRoot) && null != n.getSelection ? n : t.ownerDocument;
        },
        isFocused: (e) => !!R.get(e),
        isReadOnly: (e) => !!P.get(e),
        blur(e) {
            var t = ey.toDOMNode(e, e),
                n = ey.findDocumentOrShadowRoot(e);
            R.set(e, !1), n.activeElement === t && t.blur();
        },
        focus(e) {
            var t = ey.toDOMNode(e, e),
                n = ey.findDocumentOrShadowRoot(e);
            R.set(e, !0), n.activeElement !== t && t.focus({ preventScroll: !0 });
        },
        deselect(e) {
            var { selection: t } = e,
                n = ey.findDocumentOrShadowRoot(e).getSelection();
            n && n.rangeCount > 0 && n.removeAllRanges(), t && d.YR.deselect(e);
        },
        hasDOMNode(e, t) {
            var n,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { editable: i = !1 } = r,
                a = ey.toDOMNode(e, e);
            try {
                n = W(t) ? t : t.parentElement;
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
            var n = N.get(e),
                r = d.ML.isEditor(t) ? S.get(e) : null == n ? void 0 : n.get(ey.findKey(e, t));
            if (!r) throw Error("Cannot resolve a DOM node from Slate node: ".concat(d.o4.stringify(t)));
            return r;
        },
        toDOMPoint(e, t) {
            var [n] = d.ML.node(e, t.path),
                r = ey.toDOMNode(e, n);
            d.ML.void(e, { at: t }) &&
                (t = {
                    path: t.path,
                    offset: 0,
                });
            for (
                var i = "[data-slate-string], [data-slate-zero-width]",
                    a = Array.from(r.querySelectorAll(i)),
                    o = 0,
                    s = 0;
                s < a.length;
                s++
            ) {
                var l = a[s],
                    c = l.childNodes[0];
                if (null != c && null != c.textContent) {
                    var { length: u } = c.textContent,
                        f = l.getAttribute("data-slate-length"),
                        p = null == f ? u : parseInt(f, 10),
                        _ = o + p,
                        m = a[s + 1];
                    if (t.offset === _ && null != m && m.hasAttribute("data-slate-mark-placeholder")) {
                        var h,
                            g,
                            E = m.childNodes[0];
                        h = [E instanceof V ? E : m, null != (g = m.textContent) && g.startsWith("\uFEFF") ? 1 : 0];
                        break;
                    }
                    if (t.offset <= _) {
                        h = [c, Math.min(u, Math.max(0, t.offset - o))];
                        break;
                    }
                    o = _;
                }
            }
            if (!h) throw Error("Cannot resolve a DOM point from Slate point: ".concat(d.o4.stringify(t)));
            return h;
        },
        toDOMRange(e, t) {
            var { anchor: n, focus: r } = t,
                i = d.e6.isBackward(t),
                a = ey.toDOMPoint(e, n),
                o = d.e6.isCollapsed(t) ? a : ey.toDOMPoint(e, r),
                s = ey.getWindow(e).document.createRange(),
                [l, c] = i ? o : a,
                [u, f] = i ? a : o,
                p = !!(W(l) ? l : l.parentElement).getAttribute("data-slate-zero-width"),
                _ = !!(W(u) ? u : u.parentElement).getAttribute("data-slate-zero-width");
            return s.setStart(l, p ? 1 : c), s.setEnd(u, _ ? 1 : f), s;
        },
        toSlateNode(e, t) {
            var n = W(t) ? t : t.parentElement;
            n && !n.hasAttribute("data-slate-node") && (n = n.closest("[data-slate-node]"));
            var r = n ? T.get(n) : null;
            if (!r) throw Error("Cannot resolve a Slate node from DOM node: ".concat(n));
            return r;
        },
        findEventRange(e, t) {
            "nativeEvent" in t && (t = t.nativeEvent);
            var n,
                { clientX: r, clientY: i, target: a } = t;
            if (null == r || null == i) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
            var o = ey.toSlateNode(e, t.target),
                s = ey.findPath(e, o);
            if (d.W_.isElement(o) && d.ML.isVoid(e, o)) {
                var l = a.getBoundingClientRect(),
                    c = e.isInline(o) ? r - l.left < l.left + l.width - r : i - l.top < l.top + l.height - i,
                    u = d.ML.point(e, s, { edge: c ? "start" : "end" }),
                    f = c ? d.ML.before(e, u) : d.ML.after(e, u);
                if (f) return d.ML.range(e, f);
            }
            var { document: p } = ey.getWindow(e);
            if (p.caretRangeFromPoint) n = p.caretRangeFromPoint(r, i);
            else {
                var _ = p.caretPositionFromPoint(r, i);
                _ && ((n = p.createRange()).setStart(_.offsetNode, _.offset), n.setEnd(_.offsetNode, _.offset));
            }
            if (!n) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
            return ey.toSlateRange(e, n, {
                exactMatch: !1,
                suppressThrow: !1,
            });
        },
        toSlatePoint(e, t, n) {
            var { exactMatch: r, suppressThrow: i } = n,
                [a, o] = r ? t : X(t),
                s = a.parentNode,
                l = null,
                c = 0;
            if (s) {
                var u,
                    f,
                    p = ey.toDOMNode(e, e),
                    _ = s.closest('[data-slate-void="true"]'),
                    m = _ && p.contains(_) ? _ : null,
                    h = s.closest("[data-slate-leaf]"),
                    g = null;
                if (h) {
                    if ((l = h.closest('[data-slate-node="text"]'))) {
                        var E = ey.getWindow(e).document.createRange();
                        E.setStart(l, 0), E.setEnd(a, o);
                        var b = E.cloneContents();
                        [
                            ...Array.prototype.slice.call(b.querySelectorAll("[data-slate-zero-width]")),
                            ...Array.prototype.slice.call(b.querySelectorAll("[contenteditable=false]")),
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
                            (c = b.textContent.length),
                            (g = l);
                    }
                } else if (m) {
                    for (var y = m.querySelectorAll("[data-slate-leaf]"), O = 0; O < y.length; O++) {
                        var v = y[O];
                        if (ey.hasDOMNode(e, v)) {
                            h = v;
                            break;
                        }
                    }
                    h
                        ? ((l = h.closest('[data-slate-node="text"]')),
                          (c = (g = h).textContent.length),
                          g.querySelectorAll("[data-slate-zero-width]").forEach((e) => {
                              c -= e.textContent.length;
                          }))
                        : (c = 1);
                }
                g &&
                    c === g.textContent.length &&
                    el &&
                    "z" === g.getAttribute("data-slate-zero-width") &&
                    null != (u = g.textContent) &&
                    u.startsWith("\uFEFF") &&
                    (s.hasAttribute("data-slate-zero-width") ||
                        (ec && null != (f = g.textContent) && f.endsWith("\n\n"))) &&
                    c--;
            }
            if (el && !l && !r) {
                var S = s.hasAttribute("data-slate-node") ? s : s.closest("[data-slate-node]");
                if (S && ey.hasDOMNode(e, S, { editable: !0 })) {
                    var I = ey.toSlateNode(e, S),
                        { path: T, offset: A } = d.ML.start(e, ey.findPath(e, I));
                    return (
                        S.querySelector("[data-slate-leaf]") || (A = o),
                        {
                            path: T,
                            offset: A,
                        }
                    );
                }
            }
            if (!l) {
                if (i) return null;
                throw Error("Cannot resolve a Slate point from DOM point: ".concat(t));
            }
            var C = ey.toSlateNode(e, l);
            return {
                path: ey.findPath(e, C),
                offset: c,
            };
        },
        toSlateRange(e, t, n) {
            var r,
                i,
                a,
                o,
                s,
                l,
                { exactMatch: c, suppressThrow: u } = n;
            if (
                ((z(t) ? t.anchorNode : t.startContainer) &&
                    (z(t)
                        ? ((r = t.anchorNode),
                          (i = t.anchorOffset),
                          (a = t.focusNode),
                          (o = t.focusOffset),
                          (s =
                              ef && J(r)
                                  ? t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset
                                  : t.isCollapsed))
                        : ((r = t.startContainer),
                          (i = t.startOffset),
                          (a = t.endContainer),
                          (o = t.endOffset),
                          (s = t.collapsed))),
                null == r || null == a || null == i || null == o)
            )
                throw Error("Cannot resolve a Slate range from DOM range: ".concat(t));
            "getAttribute" in a &&
                "false" === a.getAttribute("contenteditable") &&
                ((a = r), (o = (null == (l = r.textContent) ? void 0 : l.length) || 0));
            var f = ey.toSlatePoint(e, [r, i], {
                exactMatch: c,
                suppressThrow: u,
            });
            if (!f) return null;
            var p = s
                ? f
                : ey.toSlatePoint(e, [a, o], {
                      exactMatch: c,
                      suppressThrow: u,
                  });
            if (!p) return null;
            if (ec && !s && r !== a) {
                var _ = d.ML.isEnd(e, f, f.path),
                    m = d.ML.isStart(e, p, p.path);
                _ && (f = d.ML.after(e, f) || f), m && (p = d.ML.before(e, p) || p);
            }
            var h = {
                anchor: f,
                focus: p,
            };
            return (
                d.e6.isExpanded(h) &&
                    d.e6.isForward(h) &&
                    W(a) &&
                    d.ML.void(e, {
                        at: h.focus,
                        mode: "highest",
                    }) &&
                    (h = d.ML.unhangRange(e, h, { voids: !0 })),
                h
            );
        },
        hasRange(e, t) {
            var { anchor: n, focus: r } = t;
            return d.ML.hasPath(e, n.path) && d.ML.hasPath(e, r.path);
        },
        hasTarget: (e, t) => K(t) && ey.hasDOMNode(e, t),
        hasEditableTarget: (e, t) => K(t) && ey.hasDOMNode(e, t, { editable: !0 }),
        hasSelectableTarget: (e, t) => ey.hasEditableTarget(e, t) || ey.isTargetInsideNonReadonlyVoid(e, t),
        isTargetInsideNonReadonlyVoid(e, t) {
            if (P.get(e)) return !1;
            var n = ey.hasTarget(e, t) && ey.toSlateNode(e, t);
            return d.W_.isElement(n) && d.ML.isVoid(e, n);
        },
        androidScheduleFlush(e) {
            var t;
            null == (t = L.get(e)) || t();
        },
        androidPendingDiffs: (e) => k.get(e),
    },
    eO = ["anchor", "focus"],
    ev = ["anchor", "focus"],
    eS = (e, t) =>
        Object.keys(e).length === Object.keys(t).length &&
        Object.keys(e).every((n) => t.hasOwnProperty(n) && e[n] === t[n]),
    eI = (e, t) => {
        var n = g(e, eO),
            r = g(t, ev);
        return e[B] === t[B] && eS(n, r);
    },
    eT = (e, t) => {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                i = t[n];
            if (!d.e6.equals(r, i) || !eI(r, i)) return !1;
        }
        return !0;
    },
    eA = (e, t) => {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                i = t[n];
            if (r.anchor.offset !== i.anchor.offset || r.focus.offset !== i.focus.offset || !eI(r, i)) return !1;
        }
        return !0;
    },
    eC = eE ? c.useLayoutEffect : c.useEffect,
    eN = (e) => {
        var { isLast: t, leaf: n, parent: r, text: i } = e,
            a = ex(),
            o = ey.findPath(a, i),
            s = d.y$.parent(o),
            l = !0 === n[F];
        return a.isVoid(r)
            ? c.createElement(eD, { length: d.NB.string(r).length })
            : "" !== n.text || r.children[r.children.length - 1] !== i || a.isInline(r) || "" !== d.ML.string(a, s)
              ? "" === n.text
                  ? c.createElement(eD, { isMarkPlaceholder: l })
                  : t && "\n" === n.text.slice(-1)
                    ? c.createElement(eP, {
                          isTrailing: !0,
                          text: n.text,
                      })
                    : c.createElement(eP, { text: n.text })
              : c.createElement(eD, {
                    isLineBreak: !0,
                    isMarkPlaceholder: l,
                });
    },
    eP = (e) => {
        var { text: t, isTrailing: n = !1 } = e,
            r = (0, c.useRef)(null),
            i = () => "".concat(null != t ? t : "").concat(n ? "\n" : ""),
            [a] = (0, c.useState)(i);
        return (
            eC(() => {
                var e = i();
                r.current && r.current.textContent !== e && (r.current.textContent = e);
            }),
            c.createElement(eR, { ref: r }, a)
        );
    },
    eR = (0, c.memo)(
        (0, c.forwardRef)((e, t) =>
            c.createElement(
                "span",
                {
                    "data-slate-string": !0,
                    ref: t,
                },
                e.children,
            ),
        ),
    ),
    eD = (e) => {
        var { length: t = 0, isLineBreak: n = !1, isMarkPlaceholder: r = !1 } = e,
            i = {
                "data-slate-zero-width": n ? "n" : "z",
                "data-slate-length": t,
            };
        return (
            r && (i["data-slate-mark-placeholder"] = !0),
            c.createElement(
                "span",
                Object.assign({}, i),
                el && n ? null : "\uFEFF",
                n ? c.createElement("br", null) : null,
            )
        );
    },
    ew = (0, c.createContext)(null),
    ex = () => {
        var e = (0, c.useContext)(ew);
        if (!e) throw Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
        return e;
    },
    eL = (e) => {
        var {
                leaf: t,
                isLast: n,
                text: r,
                parent: i,
                renderPlaceholder: a,
                renderLeaf: o = (e) => c.createElement(eM, Object.assign({}, e)),
            } = e,
            s = (0, c.useRef)(null),
            l = (0, c.useRef)(null),
            u = ex(),
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
                    (e ? I.set(u, e) : I.delete(u),
                    d.current
                        ? (d.current.disconnect(), e && d.current.observe(e))
                        : e &&
                          ((d.current = new (window.ResizeObserver || f.do)(() => {
                              var e = Z.get(u);
                              null == e || e();
                          })),
                          d.current.observe(e)),
                    !e && s.current)
                ) {
                    var t = Z.get(u);
                    null == t || t();
                }
                return (
                    (s.current = l.current),
                    () => {
                        I.delete(u);
                    }
                );
            }, [l, t]);
        var p = c.createElement(eN, {
            isLast: n,
            leaf: t,
            parent: i,
            text: r,
        });
        if (t[B]) {
            var _ = {
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
            p = c.createElement(c.Fragment, null, a(_), p);
        }
        return o({
            attributes: { "data-slate-leaf": !0 },
            children: p,
            leaf: t,
            text: r,
        });
    },
    ej = c.memo(
        eL,
        (e, t) =>
            t.parent === e.parent &&
            t.isLast === e.isLast &&
            t.renderLeaf === e.renderLeaf &&
            t.renderPlaceholder === e.renderPlaceholder &&
            t.text === e.text &&
            d.xv.equals(t.leaf, e.leaf) &&
            t.leaf[B] === e.leaf[B],
    ),
    eM = (e) => {
        var { attributes: t, children: n } = e;
        return c.createElement("span", Object.assign({}, t), n);
    },
    ek = (e) => {
        for (
            var { decorations: t, isLast: n, parent: r, renderPlaceholder: i, renderLeaf: a, text: o } = e,
                s = ex(),
                l = (0, c.useRef)(null),
                u = d.xv.decorations(o, t),
                f = ey.findKey(s, o),
                p = [],
                _ = 0;
            _ < u.length;
            _++
        ) {
            var m = u[_];
            p.push(
                c.createElement(ej, {
                    isLast: n && _ === u.length - 1,
                    key: "".concat(f.id, "-").concat(_),
                    renderPlaceholder: i,
                    leaf: m,
                    text: o,
                    parent: r,
                    renderLeaf: a,
                }),
            );
        }
        var h = (0, c.useCallback)(
            (e) => {
                var t = N.get(s);
                e
                    ? (null == t || t.set(f, e), A.set(o, e), T.set(e, o))
                    : (null == t || t.delete(f), A.delete(o), l.current && T.delete(l.current)),
                    (l.current = e);
            },
            [l, s, f, o],
        );
        return c.createElement(
            "span",
            {
                "data-slate-node": "text",
                ref: h,
            },
            p,
        );
    },
    eU = c.memo(
        ek,
        (e, t) =>
            t.parent === e.parent &&
            t.isLast === e.isLast &&
            t.renderLeaf === e.renderLeaf &&
            t.renderPlaceholder === e.renderPlaceholder &&
            t.text === e.text &&
            eA(t.decorations, e.decorations),
    ),
    eG = (e) => {
        var {
                decorations: t,
                element: n,
                renderElement: r = (e) => c.createElement(eB, Object.assign({}, e)),
                renderPlaceholder: a,
                renderLeaf: o,
                selection: s,
            } = e,
            l = ex(),
            u = ez(),
            f = l.isInline(n),
            p = ey.findKey(l, n),
            _ = (0, c.useCallback)(
                (e) => {
                    var t = N.get(l);
                    e ? (null == t || t.set(p, e), A.set(n, e), T.set(e, n)) : (null == t || t.delete(p), A.delete(n));
                },
                [l, p, n],
            ),
            m = eW({
                decorations: t,
                node: n,
                renderElement: r,
                renderPlaceholder: a,
                renderLeaf: o,
                selection: s,
            }),
            h = {
                "data-slate-node": "element",
                ref: _,
            };
        if ((f && (h["data-slate-inline"] = !0), !f && d.ML.hasInlines(l, n))) {
            var g = d.NB.string(n),
                E = i()(g);
            "rtl" === E && (h.dir = E);
        }
        if (d.ML.isVoid(l, n)) {
            (h["data-slate-void"] = !0), !u && f && (h.contentEditable = !1);
            var b = f ? "span" : "div",
                [[v]] = d.NB.texts(n);
            (m = c.createElement(
                b,
                {
                    "data-slate-spacer": !0,
                    style: {
                        height: "0",
                        color: "transparent",
                        outline: "none",
                        position: "absolute",
                    },
                },
                c.createElement(eU, {
                    renderPlaceholder: a,
                    decorations: [],
                    isLast: !1,
                    parent: n,
                    text: v,
                }),
            )),
                y.set(v, 0),
                O.set(v, n);
        }
        return r({
            attributes: h,
            children: m,
            element: n,
            decorations: t,
        });
    },
    eZ = c.memo(
        eG,
        (e, t) =>
            e.element === t.element &&
            e.renderElement === t.renderElement &&
            e.renderLeaf === t.renderLeaf &&
            e.renderPlaceholder === t.renderPlaceholder &&
            eT(e.decorations, t.decorations) &&
            (e.selection === t.selection || (!!e.selection && !!t.selection && d.e6.equals(e.selection, t.selection))),
    ),
    eB = (e) => {
        var { attributes: t, children: n, element: r } = e,
            i = ex().isInline(r) ? "span" : "div";
        return c.createElement(i, Object.assign({}, t, { style: { position: "relative" } }), n);
    },
    eF = (0, c.createContext)(() => []),
    eV = () => (0, c.useContext)(eF),
    eH = (0, c.createContext)(!1),
    eY = () => (0, c.useContext)(eH),
    eW = (e) => {
        for (
            var { decorations: t, node: n, renderElement: r, renderPlaceholder: i, renderLeaf: a, selection: o } = e,
                s = eV(),
                l = ex(),
                u = ey.findPath(l, n),
                f = [],
                p = d.W_.isElement(n) && !l.isInline(n) && d.ML.hasInlines(l, n),
                _ = 0;
            _ < n.children.length;
            _++
        ) {
            var m = u.concat(_),
                h = n.children[_],
                g = ey.findKey(l, h),
                E = d.ML.range(l, m),
                b = o && d.e6.intersection(E, o),
                v = s([h, m]);
            for (var S of t) {
                var I = d.e6.intersection(S, E);
                I && v.push(I);
            }
            d.W_.isElement(h)
                ? f.push(
                      c.createElement(
                          eH.Provider,
                          {
                              key: "provider-".concat(g.id),
                              value: !!b,
                          },
                          c.createElement(eZ, {
                              decorations: v,
                              element: h,
                              key: g.id,
                              renderElement: r,
                              renderPlaceholder: i,
                              renderLeaf: a,
                              selection: b,
                          }),
                      ),
                  )
                : f.push(
                      c.createElement(eU, {
                          decorations: v,
                          key: g.id,
                          isLast: p && _ === n.children.length - 1,
                          parent: n,
                          renderPlaceholder: i,
                          renderLeaf: a,
                          text: h,
                      }),
                  ),
                y.set(h, _),
                O.set(h, n);
        }
        return f;
    },
    eK = (0, c.createContext)(!1),
    ez = () => (0, c.useContext)(eK),
    eq = (0, c.createContext)(null),
    eQ = () => {
        var e = (0, c.useContext)(eq);
        if (!e) throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
        var { editor: t } = e;
        return t;
    },
    eX = 3,
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
    e$ = {
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
        var t = eJ[e],
            n = e$[e],
            r = e0[e],
            i = t && (0, p.isKeyHotkey)(t),
            a = n && (0, p.isKeyHotkey)(n),
            o = r && (0, p.isKeyHotkey)(r);
        return (e) => !!((i && i(e)) || (es && a && a(e)) || (!es && o && o(e)));
    },
    e3 = {
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
    e2 = (e, t) => {
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
    e4 = {
        subtree: !0,
        childList: !0,
        characterData: !0,
        characterDataOldValue: !0,
    };
class e5 extends c.Component {
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
        (this.manager = e2(t, e)),
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
e5.contextType = ew;
var e8 = el
    ? e5
    : (e) => {
          var { children: t } = e;
          return c.createElement(c.Fragment, null, t);
      };
function e6(e, t) {
    var { path: n, diff: r } = t;
    if (!d.ML.hasPath(e, n)) return !1;
    var i = d.NB.get(e, n);
    if (!d.xv.isText(i)) return !1;
    if (r.start !== i.text.length || 0 === r.text.length)
        return i.text.slice(r.start, r.start + r.text.length) === r.text;
    var a = d.y$.next(n);
    if (!d.ML.hasPath(e, a)) return !1;
    var o = d.NB.get(e, a);
    return d.xv.isText(o) && o.text.startsWith(r.text);
}
function e7(e) {
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
        o = e9(a, i),
        s = Math.min(a.length - o, i.length - o),
        l = te(a, i, s),
        c = {
            start: n + o,
            end: r - l,
            text: i.slice(o, i.length - l),
        };
    return c.start === c.end && 0 === c.text.length ? null : c;
}
function tn(e, t, n) {
    var r = Math.min(t.start, n.start),
        i = Math.max(0, Math.min(t.start + t.text.length, n.end) - n.start),
        a = e7(e, t, n),
        o = Math.max(
            n.start + n.text.length,
            t.start + t.text.length + (t.start + t.text.length > n.start ? n.text.length : 0) - i,
        ),
        s = a.slice(r, o);
    return tt(e, {
        start: r,
        end: Math.max(t.end, n.end - t.text.length + (t.end - t.start)),
        text: s,
    });
}
function tr(e) {
    var { path: t, diff: n } = e;
    return {
        anchor: {
            path: t,
            offset: n.start,
        },
        focus: {
            path: t,
            offset: n.end,
        },
    };
}
function ti(e, t) {
    var { path: n, offset: r } = t;
    if (!d.ML.hasPath(e, n)) return null;
    var i = d.NB.get(e, n);
    if (!d.xv.isText(i)) return null;
    var a = d.ML.above(e, {
        match: (t) => d.W_.isElement(t) && d.ML.isBlock(e, t),
        at: n,
    });
    if (!a) return null;
    for (; r > i.text.length; ) {
        var o = d.ML.next(e, {
            at: n,
            match: d.xv.isText,
        });
        if (!o || !d.y$.isDescendant(o[1], a[1])) return null;
        (r -= i.text.length), (i = o[0]), (n = o[1]);
    }
    return {
        path: n,
        offset: r,
    };
}
function ta(e, t) {
    var n = ti(e, t.anchor);
    if (!n) return null;
    if (d.e6.isCollapsed(t))
        return {
            anchor: n,
            focus: n,
        };
    var r = ti(e, t.focus);
    return r
        ? {
              anchor: n,
              focus: r,
          }
        : null;
}
function to(e, t, n) {
    var r = k.get(e),
        i =
            null == r
                ? void 0
                : r.find((e) => {
                      var { path: n } = e;
                      return d.y$.equals(n, t.path);
                  });
    if (!i || t.offset <= i.diff.start) return d.E9.transform(t, n, { affinity: "backward" });
    var { diff: a } = i;
    if (t.offset <= a.start + a.text.length) {
        var o = {
                path: t.path,
                offset: a.start,
            },
            s = d.E9.transform(o, n, { affinity: "backward" });
        return s
            ? {
                  path: s.path,
                  offset: s.offset + t.offset - a.start,
              }
            : null;
    }
    var l = {
            path: t.path,
            offset: t.offset - a.text.length + a.end - a.start,
        },
        c = d.E9.transform(l, n, { affinity: "backward" });
    return c
        ? "split_node" === n.type && d.y$.equals(n.path, t.path) && l.offset < n.position && a.start < n.position
            ? c
            : {
                  path: c.path,
                  offset: c.offset + a.text.length - a.end + a.start,
              }
        : null;
}
function ts(e, t, n) {
    var r = to(e, t.anchor, n);
    if (!r) return null;
    if (d.e6.isCollapsed(t))
        return {
            anchor: r,
            focus: r,
        };
    var i = to(e, t.focus, n);
    return i
        ? {
              anchor: r,
              focus: i,
          }
        : null;
}
function tl(e, t) {
    var { path: n, diff: r, id: i } = e;
    switch (t.type) {
        case "insert_text":
            if (!d.y$.equals(t.path, n) || t.offset >= r.end) return e;
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
                diff: {
                    start: r.start,
                    end: r.end + t.text.length,
                    text: r.text,
                },
                id: i,
                path: n,
            };
        case "remove_text":
            if (!d.y$.equals(t.path, n) || t.offset >= r.end) return e;
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
                diff: {
                    start: r.start,
                    end: r.end - t.text.length,
                    text: r.text,
                },
                id: i,
                path: n,
            };
        case "split_node":
            if (!d.y$.equals(t.path, n) || t.position >= r.end)
                return {
                    diff: r,
                    id: i,
                    path: d.y$.transform(n, t, { affinity: "backward" }),
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
                path: d.y$.transform(n, t, { affinity: "forward" }),
            };
        case "merge_node":
            if (!d.y$.equals(t.path, n))
                return {
                    diff: r,
                    id: i,
                    path: d.y$.transform(n, t),
                };
            return {
                diff: {
                    start: r.start + t.position,
                    end: r.end + t.position,
                    text: r.text,
                },
                id: i,
                path: d.y$.transform(n, t),
            };
    }
    var a = d.y$.transform(n, t);
    return a
        ? {
              diff: r,
              path: a,
              id: i,
          }
        : null;
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
function tu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tc(Object(n), !0).forEach(function (t) {
                  m(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tc(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var td = 25,
    tf = 200,
    tp = function () {},
    t_ = (e) => (null == e ? void 0 : e.constructor.name) === "DataTransfer";
function tm(e) {
    var { editor: t, scheduleOnDOMSelectionChange: n, onDOMSelectionChange: r } = e,
        i = !1,
        a = null,
        o = null,
        s = null,
        l = 0,
        c = !1,
        u = () => {
            var e = G.get(t);
            if ((G.delete(t), e)) {
                var { selection: n } = t,
                    r = ta(t, e);
                !r || (n && d.e6.equals(r, n)) || d.YR.select(t, r);
            }
        },
        f = () => {
            var e = U.get(t);
            if ((U.delete(t), e)) {
                if (e.at) {
                    var n = d.E9.isPoint(e.at) ? ti(t, e.at) : ta(t, e.at);
                    if (!n) return;
                    var r = d.ML.range(t, n);
                    (t.selection && d.e6.equals(t.selection, r)) || d.YR.select(t, n);
                }
                e.run();
            }
        },
        p = () => {
            if ((o && (clearTimeout(o), (o = null)), s && (clearTimeout(s), (s = null)), !y() && !b())) return void u();
            i || ((i = !0), setTimeout(() => (i = !1))), b() && (i = "action");
            var e = t.selection && d.ML.rangeRef(t, t.selection, { affinity: "forward" });
            M.set(t, t.marks), tp("flush", U.get(t), k.get(t));
            for (var a = y(); (l = null == (p = k.get(t)) ? void 0 : p[0]); ) {
                var l,
                    p,
                    _,
                    m = j.get(t);
                void 0 !== m && (j.delete(t), (t.marks = m)), m && !1 === c && (c = null);
                var h = tr(l);
                (t.selection && d.e6.equals(t.selection, h)) || d.YR.select(t, h),
                    l.diff.text ? d.ML.insertText(t, l.diff.text) : d.ML.deleteFragment(t),
                    k.set(
                        t,
                        null == (_ = k.get(t))
                            ? void 0
                            : _.filter((e) => {
                                  var { id: t } = e;
                                  return t !== l.id;
                              }),
                    ),
                    e6(t, l) ||
                        ((a = !1),
                        U.delete(t),
                        M.delete(t),
                        (i = "action"),
                        G.delete(t),
                        n.cancel(),
                        r.cancel(),
                        null == e || e.unref());
            }
            var g = null == e ? void 0 : e.unref();
            if ((!g || G.get(t) || (t.selection && d.e6.equals(g, t.selection)) || d.YR.select(t, g), b()))
                return void f();
            a && n(), n.flush(), r.flush(), u();
            var E = M.get(t);
            M.delete(t), void 0 !== E && ((t.marks = E), t.onChange());
        },
        _ = (e) => {
            a && clearTimeout(a),
                (a = setTimeout(() => {
                    D.set(t, !1), p();
                }, td));
        },
        m = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                n = I.get(t);
            if (n) {
                if (y() || e) {
                    n.style.display = "none";
                    return;
                }
                n.style.removeProperty("display");
            }
        },
        h = (e, n) => {
            var r,
                i = null != (r = k.get(t)) ? r : [];
            k.set(t, i);
            var a = d.NB.leaf(t, e),
                o = i.findIndex((t) => d.y$.equals(t.path, e));
            if (o < 0) {
                tt(a.text, n) &&
                    i.push({
                        path: e,
                        diff: n,
                        id: l++,
                    }),
                    m();
                return;
            }
            var s = tn(a.text, i[o].diff, n);
            if (!s) {
                i.splice(o, 1), m();
                return;
            }
            i[o] = tu(tu({}, i[o]), {}, { diff: s });
        },
        g = function (e) {
            var { at: i } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (c = !1),
                G.delete(t),
                n.cancel(),
                r.cancel(),
                b() && p(),
                U.set(t, {
                    at: i,
                    run: e,
                }),
                (s = setTimeout(p));
        },
        E = (e) => {
            o && (clearTimeout(o), (o = null));
            var { inputType: n } = e,
                r = null,
                i = e.dataTransfer || e.data || void 0;
            !1 !== c && "insertText" !== n && "insertCompositionText" !== n && (c = !1);
            var [a] = e.getTargetRanges();
            a &&
                (r = ey.toSlateRange(t, a, {
                    exactMatch: !1,
                    suppressThrow: !0,
                }));
            var s = ey.getWindow(t).getSelection();
            if (
                (!r &&
                    s &&
                    ((a = s),
                    (r = ey.toSlateRange(t, s, {
                        exactMatch: !1,
                        suppressThrow: !0,
                    }))),
                (r = null != (R = r) ? R : t.selection))
            ) {
                var l = !0;
                if (n.startsWith("delete")) {
                    if (d.e6.isExpanded(r)) {
                        var [u, f] = d.e6.edges(r);
                        if (d.NB.leaf(t, u.path).text.length === u.offset && 0 === f.offset) {
                            var p = d.ML.next(t, {
                                at: u.path,
                                match: d.xv.isText,
                            });
                            p &&
                                d.y$.equals(p[1], f.path) &&
                                (r = {
                                    anchor: f,
                                    focus: f,
                                });
                        }
                    }
                    var _ = n.endsWith("Backward") ? "backward" : "forward",
                        [m, E] = d.e6.edges(r),
                        [b, y] = d.ML.leaf(t, m.path),
                        O = {
                            text: "",
                            start: m.offset,
                            end: E.offset,
                        },
                        S = k.get(t),
                        I = null == S ? void 0 : S.find((e) => d.y$.equals(e.path, y)),
                        T = I ? [I.diff, O] : [O];
                    if ((0 === e7(b.text, ...T).length && (l = !1), d.e6.isExpanded(r))) {
                        if (l && d.y$.equals(r.anchor.path, r.focus.path)) {
                            var C = {
                                path: r.anchor.path,
                                offset: m.offset,
                            };
                            return (
                                v(d.ML.range(t, C, C)),
                                h(r.anchor.path, {
                                    text: "",
                                    end: E.offset,
                                    start: m.offset,
                                })
                            );
                        }
                        return g(() => d.ML.deleteFragment(t, { direction: _ }), { at: r });
                    }
                }
                switch (n) {
                    case "deleteByComposition":
                    case "deleteByCut":
                    case "deleteByDrag":
                        return g(() => d.ML.deleteFragment(t), { at: r });
                    case "deleteContent":
                    case "deleteContentForward":
                        var { anchor: N } = r;
                        if (l && d.e6.isCollapsed(r)) {
                            var P = d.NB.leaf(t, N.path);
                            if (N.offset < P.text.length)
                                return h(N.path, {
                                    text: "",
                                    start: N.offset,
                                    end: N.offset + 1,
                                });
                        }
                        return g(() => d.ML.deleteForward(t), { at: r });
                    case "deleteContentBackward":
                        var R,
                            D,
                            { anchor: w } = r,
                            x = z(a) ? a.isCollapsed : !!(null != (D = a) && D.collapsed);
                        if (l && x && d.e6.isCollapsed(r) && w.offset > 0)
                            return h(w.path, {
                                text: "",
                                start: w.offset - 1,
                                end: w.offset,
                            });
                        return g(() => d.ML.deleteBackward(t), { at: r });
                    case "deleteEntireSoftLine":
                        return g(
                            () => {
                                d.ML.deleteBackward(t, { unit: "line" }), d.ML.deleteForward(t, { unit: "line" });
                            },
                            { at: r },
                        );
                    case "deleteHardLineBackward":
                        return g(() => d.ML.deleteBackward(t, { unit: "block" }), { at: r });
                    case "deleteSoftLineBackward":
                        return g(() => d.ML.deleteBackward(t, { unit: "line" }), { at: r });
                    case "deleteHardLineForward":
                        return g(() => d.ML.deleteForward(t, { unit: "block" }), { at: r });
                    case "deleteSoftLineForward":
                        return g(() => d.ML.deleteForward(t, { unit: "line" }), { at: r });
                    case "deleteWordBackward":
                        return g(() => d.ML.deleteBackward(t, { unit: "word" }), { at: r });
                    case "deleteWordForward":
                        return g(() => d.ML.deleteForward(t, { unit: "word" }), { at: r });
                    case "insertLineBreak":
                        return g(() => d.ML.insertSoftBreak(t), { at: r });
                    case "insertParagraph":
                        return g(() => d.ML.insertBreak(t), { at: r });
                    case "insertCompositionText":
                    case "deleteCompositionText":
                    case "insertFromComposition":
                    case "insertFromDrop":
                    case "insertFromPaste":
                    case "insertFromYank":
                    case "insertReplacementText":
                    case "insertText":
                        if (t_(i)) return g(() => ey.insertData(t, i), { at: r });
                        var L = null != i ? i : "";
                        if (
                            (j.get(t) && (L = L.replace("\uFEFF", "")),
                            "insertText" === n && /.*\n.*\n$/.test(L) && (L = L.slice(0, -1)),
                            L.includes("\n"))
                        )
                            return g(
                                () => {
                                    var e = L.split("\n");
                                    e.forEach((n, r) => {
                                        n && d.ML.insertText(t, n), r !== e.length - 1 && d.ML.insertSoftBreak(t);
                                    });
                                },
                                { at: r },
                            );
                        if (d.y$.equals(r.anchor.path, r.focus.path)) {
                            var [M, U] = d.e6.edges(r),
                                G = {
                                    start: M.offset,
                                    end: U.offset,
                                    text: L,
                                };
                            if (L && c && "insertCompositionText" === n) {
                                var Z = c.start + c.text.search(/\S|$/);
                                G.start + G.text.search(/\S|$/) === Z + 1 && G.end === c.start + c.text.length
                                    ? ((G.start -= 1), (c = null), A())
                                    : (c = !1);
                            } else
                                c =
                                    "insertText" === n &&
                                    (null === c
                                        ? G
                                        : !!(c && d.e6.isCollapsed(r)) &&
                                          c.end + c.text.length === M.offset &&
                                          tu(tu({}, c), {}, { text: c.text + L }));
                            if (l) return void h(M.path, G);
                        }
                        return g(() => d.ML.insertText(t, L), { at: r });
                }
            }
        },
        b = () => !!U.get(t),
        y = () => {
            var e;
            return !!(null != (e = k.get(t)) && e.length);
        },
        O = () => b() || y(),
        v = (e) => {
            G.set(t, e), o && (clearTimeout(o), (o = null));
            var { selection: n } = t;
            if (e) {
                var r = !n || !d.y$.equals(n.anchor.path, e.anchor.path),
                    i = !n || !d.y$.equals(n.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
                ((r && c) || i) && (c = !1), (r || y()) && (o = setTimeout(p, tf));
            }
        },
        S = () => {
            (b() || !y()) && p();
        },
        T = (e) => {
            y() || (m(!0), setTimeout(m));
        },
        A = () => {
            b() || (s = setTimeout(p));
        },
        C = (e) => {
            if (!(y() || b()) && e.some((n) => ei(t, n, e))) {
                var n;
                null == (n = Z.get(t)) || n();
            }
        };
    return {
        flush: p,
        scheduleFlush: A,
        hasPendingDiffs: y,
        hasPendingAction: b,
        hasPendingChanges: O,
        isFlushing: () => i,
        handleUserSelect: v,
        handleCompositionEnd: _,
        handleCompositionStart: (e) => {
            D.set(t, !0), a && (clearTimeout(a), (a = null));
        },
        handleDOMBeforeInput: E,
        handleKeyDown: T,
        handleDomMutations: C,
        handleInput: S,
    };
}
function th() {
    var e = (0, c.useRef)(!1);
    return (
        (0, c.useEffect)(
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
    var [r] = (0, c.useState)(() => new MutationObserver(t));
    eC(() => {
        r.takeRecords();
    }),
        (0, c.useEffect)(() => {
            if (!e.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
            return r.observe(e.current, n), () => r.disconnect();
        }, []);
}
var tE = ["node"];
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
function ty(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tb(Object(n), !0).forEach(function (t) {
                  m(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tb(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var tO = {
    subtree: !0,
    childList: !0,
    characterData: !0,
};
function tv(e) {
    var { node: t } = e,
        n = g(e, tE);
    if (!el) return null;
    var r = ex(),
        i = th(),
        [a] = (0, c.useState)(() => tm(ty({ editor: r }, n)));
    return tg(t, a.handleDomMutations, tO), L.set(r, a.scheduleFlush), i && a.flush(), a;
}
function tS() {
    var e = ex(),
        t = (0, c.useRef)(!1),
        n = (0, c.useRef)(0),
        r = (0, c.useCallback)(() => {
            if (!t.current) {
                t.current = !0;
                var r = ey.getWindow(e);
                r.cancelAnimationFrame(n.current),
                    (n.current = r.requestAnimationFrame(() => {
                        t.current = !1;
                    }));
            }
        }, []);
    return (
        (0, c.useEffect)(() => () => cancelAnimationFrame(n.current), []),
        {
            receivedUserInput: t,
            onUserInput: r,
        }
    );
}
var tI = [
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
    tT = ["text"];
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
function tC(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tA(Object(n), !0).forEach(function (t) {
                  m(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tA(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var tN = (e) => c.createElement(c.Fragment, null, eW(e)),
    tP = (e) => {
        var t,
            n,
            r = (0, c.useCallback)((e) => c.createElement(tR, Object.assign({}, e)), []),
            {
                autoFocus: a,
                decorate: s = tD,
                onDOMBeforeInput: u,
                placeholder: f,
                readOnly: p = !1,
                renderElement: _,
                renderLeaf: m,
                renderPlaceholder: h = r,
                scrollSelectionIntoView: E = tw,
                style: b = {},
                as: y = "div",
                disableDefaultStyles: O = !1,
            } = e,
            C = g(e, tI),
            N = eQ(),
            [x, L] = (0, c.useState)(!1),
            k = (0, c.useRef)(null),
            U = (0, c.useRef)([]),
            { onUserInput: G, receivedUserInput: V } = tS(),
            [, Y] = (0, c.useReducer)((e) => e + 1, 0);
        Z.set(N, Y), P.set(N, p);
        var z = (0, c.useMemo)(
            () => ({
                isDraggingInternally: !1,
                isUpdatingSelection: !1,
                latestElement: null,
                hasMarkPlaceholder: !1,
            }),
            [],
        );
        (0, c.useLayoutEffect)(
            () => () => {
                null != z && null != z.latestElement && (z.latestElement.remove(), (z.latestElement = null));
            },
            [],
        ),
            (0, c.useEffect)(() => {
                k.current && a && k.current.focus();
            }, [a]);
        var q = (0, c.useCallback)(
                l()(() => {
                    if (
                        (el || !ey.isComposing(N)) &&
                        (!z.isUpdatingSelection || (null != J && J.isFlushing())) &&
                        !z.isDraggingInternally
                    ) {
                        var e = ey.findDocumentOrShadowRoot(N),
                            { activeElement: t } = e,
                            n = ey.toDOMNode(N, N),
                            r = e.getSelection();
                        if ((t === n ? ((z.latestElement = t), R.set(N, !0)) : R.delete(N), !r))
                            return d.YR.deselect(N);
                        var { anchorNode: i, focusNode: a } = r,
                            o = ey.hasEditableTarget(N, i) || ey.isTargetInsideNonReadonlyVoid(N, i),
                            s = ey.hasEditableTarget(N, a) || ey.isTargetInsideNonReadonlyVoid(N, a);
                        if (o && s) {
                            var l = ey.toSlateRange(N, r, {
                                exactMatch: !1,
                                suppressThrow: !0,
                            });
                            l &&
                                (ey.isComposing(N) ||
                                (null != J && J.hasPendingChanges()) ||
                                (null != J && J.isFlushing())
                                    ? null == J || J.handleUserSelect(l)
                                    : d.YR.select(N, l));
                        }
                        !p || (o && s) || d.YR.deselect(N);
                    }
                }, 100),
                [p],
            ),
            X = (0, c.useMemo)(() => o()(q, 0), [q]),
            J = tv({
                node: k,
                onDOMSelectionChange: q,
                scheduleOnDOMSelectionChange: X,
            });
        eC(() => {
            k.current && (e = H(k.current))
                ? (v.set(N, e), S.set(N, k.current), A.set(N, k.current), T.set(k.current, N))
                : A.delete(N);
            var e,
                { selection: t } = N,
                n = ey.findDocumentOrShadowRoot(N).getSelection();
            if (!(!n || !ey.isFocused(N) || (null != J && J.hasPendingAction()))) {
                var r = (e) => {
                        var r = "None" !== n.type;
                        if (t || r) {
                            var i = S.get(N),
                                a = !1;
                            if ((i.contains(n.anchorNode) && i.contains(n.focusNode) && (a = !0), r && a && t && !e)) {
                                var o = ey.toSlateRange(N, n, {
                                    exactMatch: !0,
                                    suppressThrow: !0,
                                });
                                if (o && d.e6.equals(o, t)) {
                                    if (!z.hasMarkPlaceholder) return;
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
                            if (t && !ey.hasRange(N, t)) {
                                N.selection = ey.toSlateRange(N, n, {
                                    exactMatch: !1,
                                    suppressThrow: !0,
                                });
                                return;
                            }
                            z.isUpdatingSelection = !0;
                            var c = t && ey.toDOMRange(N, t);
                            return (
                                c
                                    ? (d.e6.isBackward(t)
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
                                      E(N, c))
                                    : n.removeAllRanges(),
                                c
                            );
                        }
                    },
                    i = r(),
                    a = (null == J ? void 0 : J.isFlushing()) === "action";
                if (!el || !a)
                    return void setTimeout(() => {
                        i && ec && ey.toDOMNode(N, N).focus(), (z.isUpdatingSelection = !1);
                    });
                var o = null,
                    s = requestAnimationFrame(() => {
                        if (a) {
                            var e = (e) => {
                                try {
                                    ey.toDOMNode(N, N).focus(), r(e);
                                } catch (e) {}
                            };
                            e(),
                                (o = setTimeout(() => {
                                    e(!0), (z.isUpdatingSelection = !1);
                                }));
                        }
                    });
                return () => {
                    cancelAnimationFrame(s), o && clearTimeout(o);
                };
            }
        });
        var $ = (0, c.useCallback)(
                (e) => {
                    if ((G(), !p && ey.hasEditableTarget(N, e.target) && !tL(e, u))) {
                        if (J) return J.handleDOMBeforeInput(e);
                        X.flush(), q.flush();
                        var { selection: t } = N,
                            { inputType: n } = e,
                            r = e.dataTransfer || e.data || void 0,
                            i = "insertCompositionText" === n || "deleteCompositionText" === n;
                        if (!(i && ey.isComposing(N))) {
                            var a = !1;
                            if (
                                "insertText" === n &&
                                t &&
                                d.e6.isCollapsed(t) &&
                                e.data &&
                                1 === e.data.length &&
                                /[a-z ]/i.test(e.data) &&
                                0 !== t.anchor.offset
                            ) {
                                (a = !0), N.marks && (a = !1);
                                var { anchor: o } = t,
                                    [s, l] = ey.toDOMPoint(N, o),
                                    c = null == (m = s.parentElement) ? void 0 : m.closest("a"),
                                    f = ey.getWindow(N);
                                if (a && c && ey.hasDOMNode(N, c)) {
                                    var _,
                                        m,
                                        h,
                                        g,
                                        E =
                                            null == f
                                                ? void 0
                                                : f.document.createTreeWalker(c, NodeFilter.SHOW_TEXT).lastChild();
                                    E === s && (null == (g = E.textContent) ? void 0 : g.length) === l && (a = !1);
                                }
                                if (
                                    a &&
                                    s.parentElement &&
                                    (null == f || null == (h = f.getComputedStyle(s.parentElement))
                                        ? void 0
                                        : h.whiteSpace) === "pre"
                                ) {
                                    var b = d.ML.above(N, {
                                        at: o.path,
                                        match: (e) => d.W_.isElement(e) && d.ML.isBlock(N, e),
                                    });
                                    b && d.NB.string(b[0]).includes("\t") && (a = !1);
                                }
                            }
                            if (!n.startsWith("delete") || n.startsWith("deleteBy")) {
                                var [y] = e.getTargetRanges();
                                if (y) {
                                    var O = ey.toSlateRange(N, y, {
                                        exactMatch: !1,
                                        suppressThrow: !1,
                                    });
                                    if (!t || !d.e6.equals(t, O)) {
                                        a = !1;
                                        var v = !i && N.selection && d.ML.rangeRef(N, N.selection);
                                        d.YR.select(N, O), v && w.set(N, v);
                                    }
                                }
                            }
                            if (!i) {
                                if ((a || e.preventDefault(), t && d.e6.isExpanded(t) && n.startsWith("delete"))) {
                                    var S = n.endsWith("Backward") ? "backward" : "forward";
                                    d.ML.deleteFragment(N, { direction: S });
                                    return;
                                }
                                switch (n) {
                                    case "deleteByComposition":
                                    case "deleteByCut":
                                    case "deleteByDrag":
                                        d.ML.deleteFragment(N);
                                        break;
                                    case "deleteContent":
                                    case "deleteContentForward":
                                        d.ML.deleteForward(N);
                                        break;
                                    case "deleteContentBackward":
                                        d.ML.deleteBackward(N);
                                        break;
                                    case "deleteEntireSoftLine":
                                        d.ML.deleteBackward(N, { unit: "line" }),
                                            d.ML.deleteForward(N, { unit: "line" });
                                        break;
                                    case "deleteHardLineBackward":
                                        d.ML.deleteBackward(N, { unit: "block" });
                                        break;
                                    case "deleteSoftLineBackward":
                                        d.ML.deleteBackward(N, { unit: "line" });
                                        break;
                                    case "deleteHardLineForward":
                                        d.ML.deleteForward(N, { unit: "block" });
                                        break;
                                    case "deleteSoftLineForward":
                                        d.ML.deleteForward(N, { unit: "line" });
                                        break;
                                    case "deleteWordBackward":
                                        d.ML.deleteBackward(N, { unit: "word" });
                                        break;
                                    case "deleteWordForward":
                                        d.ML.deleteForward(N, { unit: "word" });
                                        break;
                                    case "insertLineBreak":
                                        d.ML.insertSoftBreak(N);
                                        break;
                                    case "insertParagraph":
                                        d.ML.insertBreak(N);
                                        break;
                                    case "insertFromComposition":
                                    case "insertFromDrop":
                                    case "insertFromPaste":
                                    case "insertFromYank":
                                    case "insertReplacementText":
                                    case "insertText":
                                        "insertFromComposition" === n && ey.isComposing(N) && (L(!1), D.set(N, !1)),
                                            (null == r ? void 0 : r.constructor.name) === "DataTransfer"
                                                ? ey.insertData(N, r)
                                                : "string" == typeof r &&
                                                  (a
                                                      ? U.current.push(() => d.ML.insertText(N, r))
                                                      : d.ML.insertText(N, r));
                                }
                                var I = null == (_ = w.get(N)) ? void 0 : _.unref();
                                w.delete(N), !I || (N.selection && d.e6.equals(N.selection, I)) || d.YR.select(N, I);
                            }
                        }
                    }
                },
                [p, u],
            ),
            ee = (0, c.useCallback)(
                (e) => {
                    null == e
                        ? (q.cancel(),
                          X.cancel(),
                          S.delete(N),
                          A.delete(N),
                          k.current && eb && k.current.removeEventListener("beforeinput", $))
                        : eb && e.addEventListener("beforeinput", $),
                        (k.current = e);
                },
                [k, $, q, X],
            );
        eC(() => {
            var e = ey.getWindow(N);
            return (
                e.document.addEventListener("selectionchange", X),
                () => {
                    e.document.removeEventListener("selectionchange", X);
                }
            );
        }, [X]);
        var et = s([N, []]);
        if (f && 1 === N.children.length && 1 === Array.from(d.NB.texts(N)).length && "" === d.NB.string(N) && !x) {
            var en = d.ML.start(N, []);
            et.push({
                [B]: !0,
                placeholder: f,
                anchor: en,
                focus: en,
            });
        }
        var { marks: er } = N;
        if (((z.hasMarkPlaceholder = !1), N.selection && d.e6.isCollapsed(N.selection) && er)) {
            var { anchor: ei } = N.selection,
                ea = d.NB.leaf(N, ei.path),
                es = g(ea, tT);
            if (!d.xv.equals(ea, er, { loose: !0 })) {
                z.hasMarkPlaceholder = !0;
                var ed = Object.fromEntries(Object.keys(es).map((e) => [e, null]));
                et.push(
                    tC(
                        tC(tC({ [F]: !0 }, ed), er),
                        {},
                        {
                            anchor: ei,
                            focus: ei,
                        },
                    ),
                );
            }
        }
        (0, c.useEffect)(() => {
            setTimeout(() => {
                var { selection: e } = N;
                if (e) {
                    var { anchor: t } = e,
                        n = d.NB.leaf(N, t.path);
                    if (er && !d.xv.equals(n, er, { loose: !0 })) return void j.set(N, er);
                }
                j.delete(N);
            });
        });
        var ep = null == (t = I.get(N)) || null == (n = t.getBoundingClientRect()) ? void 0 : n.height;
        return c.createElement(
            eK.Provider,
            { value: p },
            c.createElement(
                eF.Provider,
                { value: s },
                c.createElement(
                    e8,
                    {
                        node: k,
                        receivedUserInput: V,
                    },
                    c.createElement(
                        y,
                        Object.assign(
                            {
                                role: p ? void 0 : "textbox",
                                "aria-multiline": !p || void 0,
                            },
                            C,
                            {
                                spellCheck: (!!eb || !eE) && C.spellCheck,
                                autoCorrect: eb || !eE ? C.autoCorrect : "false",
                                autoCapitalize: eb || !eE ? C.autoCapitalize : "false",
                                "data-slate-editor": !0,
                                "data-slate-node": "value",
                                contentEditable: !p,
                                zindex: -1,
                                suppressContentEditableWarning: !0,
                                ref: ee,
                                style: tC(
                                    tC(
                                        {},
                                        O
                                            ? {}
                                            : tC(
                                                  {
                                                      position: "relative",
                                                      outline: "none",
                                                      whiteSpace: "pre-wrap",
                                                      wordWrap: "break-word",
                                                  },
                                                  ep ? { minHeight: ep } : {},
                                              ),
                                    ),
                                    b,
                                ),
                                onBeforeInput: (0, c.useCallback)(
                                    (e) => {
                                        if (
                                            !eb &&
                                            !p &&
                                            !tx(e, C.onBeforeInput) &&
                                            ey.hasSelectableTarget(N, e.target) &&
                                            (e.preventDefault(), !ey.isComposing(N))
                                        ) {
                                            var t = e.data;
                                            d.ML.insertText(N, t);
                                        }
                                    },
                                    [p],
                                ),
                                onInput: (0, c.useCallback)((e) => {
                                    if (!tx(e, C.onInput)) {
                                        if (J) return void J.handleInput();
                                        for (var t of U.current) t();
                                        U.current = [];
                                    }
                                }, []),
                                onBlur: (0, c.useCallback)(
                                    (e) => {
                                        if (
                                            p ||
                                            z.isUpdatingSelection ||
                                            !ey.hasSelectableTarget(N, e.target) ||
                                            tx(e, C.onBlur)
                                        )
                                            return;
                                        var t = ey.findDocumentOrShadowRoot(N);
                                        if (z.latestElement !== t.activeElement) {
                                            var { relatedTarget: n } = e;
                                            if (
                                                n !== ey.toDOMNode(N, N) &&
                                                !(W(n) && n.hasAttribute("data-slate-spacer"))
                                            ) {
                                                if (null != n && K(n) && ey.hasDOMNode(N, n)) {
                                                    var r = ey.toSlateNode(N, n);
                                                    if (d.W_.isElement(r) && !N.isVoid(r)) return;
                                                }
                                                if (eu) {
                                                    var i = t.getSelection();
                                                    null == i || i.removeAllRanges();
                                                }
                                                R.delete(N);
                                            }
                                        }
                                    },
                                    [p, C.onBlur],
                                ),
                                onClick: (0, c.useCallback)(
                                    (e) => {
                                        if (ey.hasTarget(N, e.target) && !tx(e, C.onClick) && K(e.target)) {
                                            var t = ey.toSlateNode(N, e.target),
                                                n = ey.findPath(N, t);
                                            if (d.ML.hasPath(N, n) && d.NB.get(N, n) === t) {
                                                if (e.detail === eX && n.length >= 1) {
                                                    var r = n;
                                                    if (!(d.W_.isElement(t) && d.ML.isBlock(N, t))) {
                                                        var i,
                                                            a = d.ML.above(N, {
                                                                match: (e) => d.W_.isElement(e) && d.ML.isBlock(N, e),
                                                                at: n,
                                                            });
                                                        r = null != (i = null == a ? void 0 : a[1]) ? i : n.slice(0, 1);
                                                    }
                                                    var o = d.ML.range(N, r);
                                                    d.YR.select(N, o);
                                                    return;
                                                }
                                                if (!p) {
                                                    var s = d.ML.start(N, n),
                                                        l = d.ML.end(N, n),
                                                        c = d.ML.void(N, { at: s }),
                                                        u = d.ML.void(N, { at: l });
                                                    if (c && u && d.y$.equals(c[1], u[1])) {
                                                        var f = d.ML.range(N, s);
                                                        d.YR.select(N, f);
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    [p, C.onClick],
                                ),
                                onCompositionEnd: (0, c.useCallback)(
                                    (e) => {
                                        if (
                                            ey.hasSelectableTarget(N, e.target) &&
                                            (ey.isComposing(N) && (L(!1), D.set(N, !1)),
                                            null == J || J.handleCompositionEnd(e),
                                            !tx(e, C.onCompositionEnd) && !el && !eu && !em && !eo && !eg && !eh) &&
                                            e.data
                                        ) {
                                            var t = j.get(N);
                                            j.delete(N),
                                                void 0 !== t && (M.set(N, N.marks), (N.marks = t)),
                                                d.ML.insertText(N, e.data);
                                            var n = M.get(N);
                                            M.delete(N), void 0 !== n && (N.marks = n);
                                        }
                                    },
                                    [C.onCompositionEnd],
                                ),
                                onCompositionUpdate: (0, c.useCallback)(
                                    (e) => {
                                        !ey.hasSelectableTarget(N, e.target) ||
                                            tx(e, C.onCompositionUpdate) ||
                                            ey.isComposing(N) ||
                                            (L(!0), D.set(N, !0));
                                    },
                                    [C.onCompositionUpdate],
                                ),
                                onCompositionStart: (0, c.useCallback)(
                                    (e) => {
                                        if (
                                            ey.hasSelectableTarget(N, e.target) &&
                                            (null == J || J.handleCompositionStart(e),
                                            !tx(e, C.onCompositionStart) && !el)
                                        ) {
                                            L(!0);
                                            var { selection: t } = N;
                                            if (t) {
                                                if (d.e6.isExpanded(t)) return void d.ML.deleteFragment(N);
                                                var n = d.ML.above(N, {
                                                    match: (e) => d.W_.isElement(e) && d.ML.isInline(N, e),
                                                    mode: "highest",
                                                });
                                                if (n) {
                                                    var [, r] = n;
                                                    if (d.ML.isEnd(N, t.anchor, r)) {
                                                        var i = d.ML.after(N, r);
                                                        d.YR.setSelection(N, {
                                                            anchor: i,
                                                            focus: i,
                                                        });
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    [C.onCompositionStart],
                                ),
                                onCopy: (0, c.useCallback)(
                                    (e) => {
                                        ey.hasSelectableTarget(N, e.target) &&
                                            !tx(e, C.onCopy) &&
                                            (e.preventDefault(), ey.setFragmentData(N, e.clipboardData, "copy"));
                                    },
                                    [C.onCopy],
                                ),
                                onCut: (0, c.useCallback)(
                                    (e) => {
                                        if (!p && ey.hasSelectableTarget(N, e.target) && !tx(e, C.onCut)) {
                                            e.preventDefault(), ey.setFragmentData(N, e.clipboardData, "cut");
                                            var { selection: t } = N;
                                            if (t)
                                                if (d.e6.isExpanded(t)) d.ML.deleteFragment(N);
                                                else {
                                                    var n = d.NB.parent(N, t.anchor.path);
                                                    d.ML.isVoid(N, n) && d.YR.delete(N);
                                                }
                                        }
                                    },
                                    [p, C.onCut],
                                ),
                                onDragOver: (0, c.useCallback)(
                                    (e) => {
                                        if (ey.hasTarget(N, e.target) && !tx(e, C.onDragOver)) {
                                            var t = ey.toSlateNode(N, e.target);
                                            d.W_.isElement(t) && d.ML.isVoid(N, t) && e.preventDefault();
                                        }
                                    },
                                    [C.onDragOver],
                                ),
                                onDragStart: (0, c.useCallback)(
                                    (e) => {
                                        if (!p && ey.hasTarget(N, e.target) && !tx(e, C.onDragStart)) {
                                            var t = ey.toSlateNode(N, e.target),
                                                n = ey.findPath(N, t);
                                            if (
                                                (d.W_.isElement(t) && d.ML.isVoid(N, t)) ||
                                                d.ML.void(N, {
                                                    at: n,
                                                    voids: !0,
                                                })
                                            ) {
                                                var r = d.ML.range(N, n);
                                                d.YR.select(N, r);
                                            }
                                            (z.isDraggingInternally = !0),
                                                ey.setFragmentData(N, e.dataTransfer, "drag");
                                        }
                                    },
                                    [p, C.onDragStart],
                                ),
                                onDrop: (0, c.useCallback)(
                                    (e) => {
                                        if (!p && ey.hasTarget(N, e.target) && !tx(e, C.onDrop)) {
                                            e.preventDefault();
                                            var t = N.selection,
                                                n = ey.findEventRange(N, e),
                                                r = e.dataTransfer;
                                            d.YR.select(N, n),
                                                z.isDraggingInternally &&
                                                    t &&
                                                    !d.e6.equals(t, n) &&
                                                    !d.ML.void(N, {
                                                        at: n,
                                                        voids: !0,
                                                    }) &&
                                                    d.YR.delete(N, { at: t }),
                                                ey.insertData(N, r),
                                                ey.isFocused(N) || ey.focus(N);
                                        }
                                        z.isDraggingInternally = !1;
                                    },
                                    [p, C.onDrop],
                                ),
                                onDragEnd: (0, c.useCallback)(
                                    (e) => {
                                        !p &&
                                            z.isDraggingInternally &&
                                            C.onDragEnd &&
                                            ey.hasTarget(N, e.target) &&
                                            C.onDragEnd(e),
                                            (z.isDraggingInternally = !1);
                                    },
                                    [p, C.onDragEnd],
                                ),
                                onFocus: (0, c.useCallback)(
                                    (e) => {
                                        if (
                                            !p &&
                                            !z.isUpdatingSelection &&
                                            ey.hasEditableTarget(N, e.target) &&
                                            !tx(e, C.onFocus)
                                        ) {
                                            var t = ey.toDOMNode(N, N);
                                            if (
                                                ((z.latestElement = ey.findDocumentOrShadowRoot(N).activeElement),
                                                ec && e.target !== t)
                                            )
                                                return void t.focus();
                                            R.set(N, !0);
                                        }
                                    },
                                    [p, C.onFocus],
                                ),
                                onKeyDown: (0, c.useCallback)(
                                    (e) => {
                                        if (!p && ey.hasEditableTarget(N, e.target)) {
                                            null == J || J.handleKeyDown(e);
                                            var { nativeEvent: t } = e;
                                            if (
                                                (ey.isComposing(N) && !1 === t.isComposing && (D.set(N, !1), L(!1)),
                                                !(tx(e, C.onKeyDown) || ey.isComposing(N)))
                                            ) {
                                                var { selection: n } = N,
                                                    r = N.children[null !== n ? n.focus.path[0] : 0],
                                                    a = "rtl" === i()(d.NB.string(r));
                                                if (e3.isRedo(t)) {
                                                    e.preventDefault();
                                                    var o = N;
                                                    "function" == typeof o.redo && o.redo();
                                                    return;
                                                }
                                                if (e3.isUndo(t)) {
                                                    e.preventDefault();
                                                    var s = N;
                                                    "function" == typeof s.undo && s.undo();
                                                    return;
                                                }
                                                if (e3.isMoveLineBackward(t)) {
                                                    e.preventDefault(),
                                                        d.YR.move(N, {
                                                            unit: "line",
                                                            reverse: !0,
                                                        });
                                                    return;
                                                }
                                                if (e3.isMoveLineForward(t)) {
                                                    e.preventDefault(), d.YR.move(N, { unit: "line" });
                                                    return;
                                                }
                                                if (e3.isExtendLineBackward(t)) {
                                                    e.preventDefault(),
                                                        d.YR.move(N, {
                                                            unit: "line",
                                                            edge: "focus",
                                                            reverse: !0,
                                                        });
                                                    return;
                                                }
                                                if (e3.isExtendLineForward(t)) {
                                                    e.preventDefault(),
                                                        d.YR.move(N, {
                                                            unit: "line",
                                                            edge: "focus",
                                                        });
                                                    return;
                                                }
                                                if (e3.isMoveBackward(t)) {
                                                    e.preventDefault(),
                                                        n && d.e6.isCollapsed(n)
                                                            ? d.YR.move(N, { reverse: !a })
                                                            : d.YR.collapse(N, { edge: "start" });
                                                    return;
                                                }
                                                if (e3.isMoveForward(t)) {
                                                    e.preventDefault(),
                                                        n && d.e6.isCollapsed(n)
                                                            ? d.YR.move(N, { reverse: a })
                                                            : d.YR.collapse(N, { edge: "end" });
                                                    return;
                                                }
                                                if (e3.isMoveWordBackward(t)) {
                                                    e.preventDefault(),
                                                        n && d.e6.isExpanded(n) && d.YR.collapse(N, { edge: "focus" }),
                                                        d.YR.move(N, {
                                                            unit: "word",
                                                            reverse: !a,
                                                        });
                                                    return;
                                                }
                                                if (e3.isMoveWordForward(t)) {
                                                    e.preventDefault(),
                                                        n && d.e6.isExpanded(n) && d.YR.collapse(N, { edge: "focus" }),
                                                        d.YR.move(N, {
                                                            unit: "word",
                                                            reverse: a,
                                                        });
                                                    return;
                                                }
                                                if (eb) {
                                                    if (
                                                        (ef || eu) &&
                                                        n &&
                                                        (e3.isDeleteBackward(t) || e3.isDeleteForward(t)) &&
                                                        d.e6.isCollapsed(n)
                                                    ) {
                                                        var l = d.NB.parent(N, n.anchor.path);
                                                        if (
                                                            d.W_.isElement(l) &&
                                                            d.ML.isVoid(N, l) &&
                                                            (d.ML.isInline(N, l) || d.ML.isBlock(N, l))
                                                        ) {
                                                            e.preventDefault(),
                                                                d.ML.deleteBackward(N, { unit: "block" });
                                                            return;
                                                        }
                                                    }
                                                } else {
                                                    if (e3.isBold(t) || e3.isItalic(t) || e3.isTransposeCharacter(t))
                                                        return void e.preventDefault();
                                                    if (e3.isSoftBreak(t)) {
                                                        e.preventDefault(), d.ML.insertSoftBreak(N);
                                                        return;
                                                    }
                                                    if (e3.isSplitBlock(t)) {
                                                        e.preventDefault(), d.ML.insertBreak(N);
                                                        return;
                                                    }
                                                    if (e3.isDeleteBackward(t)) {
                                                        e.preventDefault(),
                                                            n && d.e6.isExpanded(n)
                                                                ? d.ML.deleteFragment(N, { direction: "backward" })
                                                                : d.ML.deleteBackward(N);
                                                        return;
                                                    }
                                                    if (e3.isDeleteForward(t)) {
                                                        e.preventDefault(),
                                                            n && d.e6.isExpanded(n)
                                                                ? d.ML.deleteFragment(N, { direction: "forward" })
                                                                : d.ML.deleteForward(N);
                                                        return;
                                                    }
                                                    if (e3.isDeleteLineBackward(t)) {
                                                        e.preventDefault(),
                                                            n && d.e6.isExpanded(n)
                                                                ? d.ML.deleteFragment(N, { direction: "backward" })
                                                                : d.ML.deleteBackward(N, { unit: "line" });
                                                        return;
                                                    }
                                                    if (e3.isDeleteLineForward(t)) {
                                                        e.preventDefault(),
                                                            n && d.e6.isExpanded(n)
                                                                ? d.ML.deleteFragment(N, { direction: "forward" })
                                                                : d.ML.deleteForward(N, { unit: "line" });
                                                        return;
                                                    }
                                                    if (e3.isDeleteWordBackward(t)) {
                                                        e.preventDefault(),
                                                            n && d.e6.isExpanded(n)
                                                                ? d.ML.deleteFragment(N, { direction: "backward" })
                                                                : d.ML.deleteBackward(N, { unit: "word" });
                                                        return;
                                                    }
                                                    if (e3.isDeleteWordForward(t)) {
                                                        e.preventDefault(),
                                                            n && d.e6.isExpanded(n)
                                                                ? d.ML.deleteFragment(N, { direction: "forward" })
                                                                : d.ML.deleteForward(N, { unit: "word" });
                                                        return;
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    [p, C.onKeyDown],
                                ),
                                onPaste: (0, c.useCallback)(
                                    (e) => {
                                        !p &&
                                            ey.hasEditableTarget(N, e.target) &&
                                            !tx(e, C.onPaste) &&
                                            (!eb || Q(e.nativeEvent) || eu) &&
                                            (e.preventDefault(), ey.insertData(N, e.clipboardData));
                                    },
                                    [p, C.onPaste],
                                ),
                            },
                        ),
                        c.createElement(tN, {
                            decorations: et,
                            node: N,
                            renderElement: _,
                            renderPlaceholder: h,
                            renderLeaf: m,
                            selection: N.selection,
                        }),
                    ),
                ),
            ),
        );
    },
    tR = (e) => {
        var { attributes: t, children: n } = e;
        return c.createElement("span", Object.assign({}, t), n, el && c.createElement("br", null));
    },
    tD = () => [],
    tw = (e, t) => {
        if (t.getBoundingClientRect && (!e.selection || (e.selection && d.e6.isCollapsed(e.selection)))) {
            var n = t.startContainer.parentElement;
            (n.getBoundingClientRect = t.getBoundingClientRect.bind(t)),
                (0, u.Z)(n, { scrollMode: "if-needed" }),
                delete n.getBoundingClientRect;
        }
    },
    tx = (e, t) => {
        if (!t) return !1;
        var n = t(e);
        return null != n ? n : e.isDefaultPrevented() || e.isPropagationStopped();
    },
    tL = (e, t) => {
        if (!t) return !1;
        var n = t(e);
        return null != n ? n : e.defaultPrevented;
    },
    tj = (0, c.createContext)(!1),
    tM = () => (0, c.useContext)(tj);
function tk(e) {
    return e instanceof Error;
}
var tU = (0, c.createContext)({}),
    tG = (e, t) => e === t;
function tZ(e) {
    var t = (0, c.useRef)([]).current,
        n = (0, c.useRef)({ editor: e }).current,
        r = (0, c.useCallback)((e) => {
            (n.editor = e), t.forEach((t) => t(e));
        }, []);
    return {
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
    };
}
var tB = ["editor", "children", "onChange", "value"],
    tF = (e) => {
        var { editor: t, children: n, onChange: r, value: i } = e,
            a = g(e, tB),
            o = (0, c.useRef)(!1),
            [s, l] = c.useState(() => {
                if (!d.NB.isNodeList(i))
                    throw Error(
                        "[Slate] value is invalid! Expected a list of elements but got: ".concat(d.o4.stringify(i)),
                    );
                if (!d.ML.isEditor(t)) throw Error("[Slate] editor is invalid! You passed: ".concat(d.o4.stringify(t)));
                return (
                    (t.children = i),
                    Object.assign(t, a),
                    {
                        v: 0,
                        editor: t,
                    }
                );
            }),
            { selectorContext: u, onChange: f } = tZ(t),
            p = (0, c.useCallback)(() => {
                r && r(t.children),
                    l((e) => ({
                        v: e.v + 1,
                        editor: t,
                    })),
                    f(t);
            }, [r]);
        (0, c.useEffect)(
            () => (
                x.set(t, p),
                () => {
                    x.set(t, () => {}), (o.current = !0);
                }
            ),
            [p],
        );
        var [_, m] = (0, c.useState)(ey.isFocused(t));
        return (
            (0, c.useEffect)(() => {
                m(ey.isFocused(t));
            }),
            eC(() => {
                var e = () => m(ey.isFocused(t));
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
            c.createElement(
                tU.Provider,
                { value: u },
                c.createElement(
                    eq.Provider,
                    { value: s },
                    c.createElement(ew.Provider, { value: s.editor }, c.createElement(tj.Provider, { value: _ }, n)),
                ),
            )
        );
    },
    tV = (e, t) => {
        var n = (t.top + t.bottom) / 2;
        return e.top <= n && e.bottom >= n;
    },
    tH = (e, t, n) => {
        var r = ey.toDOMRange(e, t).getBoundingClientRect(),
            i = ey.toDOMRange(e, n).getBoundingClientRect();
        return tV(r, i) && tV(i, r);
    },
    tY = (e, t) => {
        var n = d.ML.range(e, d.e6.end(t)),
            r = Array.from(d.ML.positions(e, { at: t })),
            i = 0,
            a = r.length,
            o = Math.floor(a / 2);
        if (tH(e, d.ML.range(e, r[i]), n)) return d.ML.range(e, r[i], n);
        if (r.length < 2) return d.ML.range(e, r[r.length - 1], n);
        for (; o !== r.length && o !== i; )
            tH(e, d.ML.range(e, r[o]), n) ? (a = o) : (i = o), (o = Math.floor((i + a) / 2));
        return d.ML.range(e, r[a], n);
    };
function tW(e, t) {
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
function tK(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tW(Object(n), !0).forEach(function (t) {
                  m(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tW(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var tz = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x-slate-fragment",
            n = e,
            { apply: r, onChange: i, deleteBackward: a, addMark: o, removeMark: s } = n;
        return (
            N.set(n, new WeakMap()),
            (n.addMark = (e, t) => {
                var r, i;
                null == (r = L.get(n)) || r(),
                    !j.get(n) && null != (i = k.get(n)) && i.length && j.set(n, null),
                    M.delete(n),
                    o(e, t);
            }),
            (n.removeMark = (e) => {
                var t;
                !j.get(n) && null != (t = k.get(n)) && t.length && j.set(n, null), M.delete(n), s(e);
            }),
            (n.deleteBackward = (e) => {
                if ("line" !== e) return a(e);
                if (n.selection && d.e6.isCollapsed(n.selection)) {
                    var t = d.ML.above(n, {
                        match: (e) => d.W_.isElement(e) && d.ML.isBlock(n, e),
                        at: n.selection,
                    });
                    if (t) {
                        var [, r] = t,
                            i = d.ML.range(n, r, n.selection.anchor),
                            o = tY(n, i);
                        d.e6.isCollapsed(o) || d.YR.delete(n, { at: o });
                    }
                }
            }),
            (n.apply = (e) => {
                var t,
                    i = [],
                    a = k.get(n);
                if (null != a && a.length) {
                    var o = a.map((t) => tl(t, e)).filter(Boolean);
                    k.set(n, o);
                }
                var s = G.get(n);
                s && G.set(n, ts(n, s, e));
                var l = U.get(n);
                if (null != l && l.at) {
                    var c = d.E9.isPoint(null == l ? void 0 : l.at) ? to(n, l.at, e) : ts(n, l.at, e);
                    U.set(n, c ? tK(tK({}, l), {}, { at: c }) : null);
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
                        i.push(...tq(n, d.y$.parent(e.path)));
                        break;
                    case "merge_node":
                        i.push(...tq(n, d.y$.previous(e.path)));
                        break;
                    case "move_node":
                        i.push(...tq(n, d.y$.common(d.y$.parent(e.path), d.y$.parent(e.newPath))));
                }
                for (var [u, f] of (r(e), i)) {
                    var [p] = d.ML.node(n, u);
                    C.set(p, f);
                }
            }),
            (n.setFragmentData = (e) => {
                var { selection: r } = n;
                if (r) {
                    var [i, a] = d.e6.edges(r),
                        o = d.ML.void(n, { at: i.path }),
                        s = d.ML.void(n, { at: a.path });
                    if (!d.e6.isCollapsed(r) || o) {
                        var l = ey.toDOMRange(n, r),
                            c = l.cloneContents(),
                            u = c.childNodes[0];
                        if (
                            (c.childNodes.forEach((e) => {
                                e.textContent && "" !== e.textContent.trim() && (u = e);
                            }),
                            s)
                        ) {
                            var [f] = s,
                                p = l.cloneRange(),
                                _ = ey.toDOMNode(n, f);
                            p.setEndAfter(_), (c = p.cloneContents());
                        }
                        if (
                            (o && (u = c.querySelector("[data-slate-spacer]")),
                            Array.from(c.querySelectorAll("[data-slate-zero-width]")).forEach((e) => {
                                var t = "n" === e.getAttribute("data-slate-zero-width");
                                e.textContent = t ? "\n" : "";
                            }),
                            q(u))
                        ) {
                            var m = u.ownerDocument.createElement("span");
                            (m.style.whiteSpace = "pre"), m.appendChild(u), c.appendChild(m), (u = m);
                        }
                        var h = n.getFragment(),
                            g = JSON.stringify(h),
                            E = window.btoa(encodeURIComponent(g));
                        u.setAttribute("data-slate-fragment", E), e.setData("application/".concat(t), E);
                        var b = c.ownerDocument.createElement("div");
                        return (
                            b.appendChild(c),
                            b.setAttribute("hidden", "true"),
                            c.ownerDocument.body.appendChild(b),
                            e.setData("text/html", b.innerHTML),
                            e.setData("text/plain", et(b)),
                            c.ownerDocument.body.removeChild(b),
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
                    for (var a of r) i && d.YR.splitNodes(n, { always: !0 }), n.insertText(a), (i = !0);
                    return !0;
                }
                return !1;
            }),
            (n.onChange = (e) => {
                _.unstable_batchedUpdates(() => {
                    var t = x.get(n);
                    t && t(), i(e);
                });
            }),
            n
        );
    },
    tq = (e, t) => {
        var n = [];
        for (var [r, i] of d.ML.levels(e, { at: t })) {
            var a = ey.findKey(e, r);
            n.push([i, a]);
        }
        return n;
    };
