n.d(t, {
    BU: () => tz,
    CX: () => tO,
    F3: () => ey,
    UE: () => tk,
    _7: () => eP,
    mH: () => tV,
    vt: () => eY
});
var i = n(653603),
    r = n.n(i),
    a = n(889678),
    s = n.n(a),
    o = n(123763),
    l = n.n(o),
    u = n(192379),
    c = n(367989),
    d = n(327432),
    f = n(690096),
    _ = n(247187),
    p = n(995295);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        i,
        r = {},
        a = Object.keys(e);
    for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        i,
        r = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
var E = 0;
class v {
    constructor() {
        this.id = ''.concat(E++);
    }
}
var y = new WeakMap(),
    I = new WeakMap(),
    b = new WeakMap(),
    T = new WeakMap(),
    S = new WeakMap(),
    A = new WeakMap(),
    N = new WeakMap(),
    C = new WeakMap(),
    R = new WeakMap(),
    O = new WeakMap(),
    D = new WeakMap(),
    x = new WeakMap(),
    L = new WeakMap(),
    P = new WeakMap(),
    w = new WeakMap(),
    M = new WeakMap(),
    k = new WeakMap(),
    U = new WeakMap(),
    G = new WeakMap(),
    B = new WeakMap(),
    Z = new WeakMap(),
    F = Symbol('placeholder'),
    V = Symbol('mark-placeholder'),
    j = globalThis.Text,
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
    Q = (e) => e.clipboardData && '' !== e.clipboardData.getData('text/plain') && 1 === e.clipboardData.types.length,
    X = (e) => {
        var [t, n] = e;
        if (W(t) && t.childNodes.length) {
            var i = n === t.childNodes.length,
                r = i ? n - 1 : n;
            for ([t, r] = $(t, r, i ? 'backward' : 'forward'), i = r < n; W(t) && t.childNodes.length; ) {
                var a = i ? t.childNodes.length - 1 : 0;
                t = ee(t, a, i ? 'backward' : 'forward');
            }
            n = i && null != t.textContent ? t.textContent.length : 0;
        }
        return [t, n];
    },
    J = (e) => {
        for (var t = e && e.parentNode; t; ) {
            if ('[object ShadowRoot]' === t.toString()) return !0;
            t = t.parentNode;
        }
        return !1;
    },
    $ = (e, t, n) => {
        for (var { childNodes: i } = e, r = i[t], a = t, s = !1, o = !1; (Y(r) || (W(r) && 0 === r.childNodes.length) || (W(r) && 'false' === r.getAttribute('contenteditable'))) && (!s || !o); ) {
            if (a >= i.length) {
                (s = !0), (a = t - 1), (n = 'backward');
                continue;
            }
            if (a < 0) {
                (o = !0), (a = t + 1), (n = 'forward');
                continue;
            }
            (r = i[a]), (t = a), (a += 'forward' === n ? 1 : -1);
        }
        return [r, t];
    },
    ee = (e, t, n) => {
        var [i] = $(e, t, n);
        return i;
    },
    et = (e) => {
        var t = '';
        if (q(e) && e.nodeValue) return e.nodeValue;
        if (W(e)) {
            for (var n of Array.from(e.childNodes)) t += et(n);
            var i = getComputedStyle(e).getPropertyValue('display');
            ('block' === i || 'list' === i || 'BR' === e.tagName) && (t += '\n');
        }
        return t;
    },
    en = /data-slate-fragment="(.+?)"/m,
    ei = (e) => {
        var [, t] = e.getData('text/html').match(en) || [];
        return t;
    },
    er = (e, t, n) => {
        var { target: i } = t;
        if (W(i) && i.matches('[contentEditable="false"]')) return !1;
        var { document: r } = ey.getWindow(e);
        if (r.contains(i)) return ey.hasDOMNode(e, i, { editable: !0 });
        var a = n.find((e) => {
            var { addedNodes: t, removedNodes: n } = e;
            for (var r of t) if (r === i || r.contains(i)) return !0;
            for (var a of n) if (a === i || a.contains(i)) return !0;
        });
        return !!a && a !== t && er(e, a, n);
    },
    ea = parseInt(u.version.split('.')[0], 10) >= 17,
    es = 'undefined' != typeof navigator && 'undefined' != typeof window && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
    eo = 'undefined' != typeof navigator && /Mac OS X/.test(navigator.userAgent),
    el = 'undefined' != typeof navigator && /Android/.test(navigator.userAgent),
    eu = 'undefined' != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
    ec = 'undefined' != typeof navigator && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
    ed = 'undefined' != typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
    ef = 'undefined' != typeof navigator && /Chrome/i.test(navigator.userAgent),
    e_ = 'undefined' != typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
    ep = el && 'undefined' != typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
    eh = 'undefined' != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
    em = 'undefined' != typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
    eg = 'undefined' != typeof navigator && /.*Wechat/.test(navigator.userAgent),
    eE = !!('undefined' != typeof window && void 0 !== window.document && void 0 !== window.document.createElement),
    ev = (!e_ || !ep) && !ed && 'undefined' != typeof globalThis && globalThis.InputEvent && 'function' == typeof globalThis.InputEvent.prototype.getTargetRanges,
    ey = {
        isComposing: (e) => !!x.get(e),
        getWindow(e) {
            var t = b.get(e);
            if (!t) throw Error('Unable to find a host window element for this editor');
            return t;
        },
        findKey(e, t) {
            var n = C.get(t);
            return n || ((n = new v()), C.set(t, n)), n;
        },
        findPath(e, t) {
            for (var n = [], i = t; ; ) {
                var r = I.get(i);
                if (null == r) {
                    if (d.ML.isEditor(i)) return n;
                    break;
                }
                var a = y.get(i);
                if (null == a) break;
                n.unshift(a), (i = r);
            }
            throw Error('Unable to find the path for Slate node: '.concat(d.o4.stringify(t)));
        },
        findDocumentOrShadowRoot(e) {
            var t = ey.toDOMNode(e, e),
                n = t.getRootNode();
            return (n instanceof Document || n instanceof ShadowRoot) && null != n.getSelection ? n : t.ownerDocument;
        },
        isFocused: (e) => !!D.get(e),
        isReadOnly: (e) => !!O.get(e),
        blur(e) {
            var t = ey.toDOMNode(e, e),
                n = ey.findDocumentOrShadowRoot(e);
            D.set(e, !1), n.activeElement === t && t.blur();
        },
        focus(e) {
            var t = ey.toDOMNode(e, e),
                n = ey.findDocumentOrShadowRoot(e);
            D.set(e, !0), n.activeElement !== t && t.focus({ preventScroll: !0 });
        },
        deselect(e) {
            var { selection: t } = e,
                n = ey.findDocumentOrShadowRoot(e).getSelection();
            n && n.rangeCount > 0 && n.removeAllRanges(), t && d.YR.deselect(e);
        },
        hasDOMNode(e, t) {
            var n,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { editable: r = !1 } = i,
                a = ey.toDOMNode(e, e);
            try {
                n = W(t) ? t : t.parentElement;
            } catch (e) {
                if (!e.message.includes('Permission denied to access property "nodeType"')) throw e;
            }
            return !!n && n.closest('[data-slate-editor]') === a && (!r || !!n.isContentEditable || ('boolean' == typeof n.isContentEditable && n.closest('[contenteditable="false"]') === a) || !!n.getAttribute('data-slate-zero-width'));
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
                i = d.ML.isEditor(t) ? T.get(e) : null == n ? void 0 : n.get(ey.findKey(e, t));
            if (!i) throw Error('Cannot resolve a DOM node from Slate node: '.concat(d.o4.stringify(t)));
            return i;
        },
        toDOMPoint(e, t) {
            var [n] = d.ML.node(e, t.path),
                i = ey.toDOMNode(e, n);
            d.ML.void(e, { at: t }) &&
                (t = {
                    path: t.path,
                    offset: 0
                });
            for (var r = '[data-slate-string], [data-slate-zero-width]', a = Array.from(i.querySelectorAll(r)), s = 0, o = 0; o < a.length; o++) {
                var l = a[o],
                    u = l.childNodes[0];
                if (null != u && null != u.textContent) {
                    var { length: c } = u.textContent,
                        f = l.getAttribute('data-slate-length'),
                        _ = s + (null == f ? c : parseInt(f, 10)),
                        p = a[o + 1];
                    if (t.offset === _ && null != p && p.hasAttribute('data-slate-mark-placeholder')) {
                        var h,
                            m,
                            g = p.childNodes[0];
                        h = [g instanceof j ? g : p, null !== (m = p.textContent) && void 0 !== m && m.startsWith('\uFEFF') ? 1 : 0];
                        break;
                    }
                    if (t.offset <= _) {
                        h = [u, Math.min(c, Math.max(0, t.offset - s))];
                        break;
                    }
                    s = _;
                }
            }
            if (!h) throw Error('Cannot resolve a DOM point from Slate point: '.concat(d.o4.stringify(t)));
            return h;
        },
        toDOMRange(e, t) {
            var { anchor: n, focus: i } = t,
                r = d.e6.isBackward(t),
                a = ey.toDOMPoint(e, n),
                s = d.e6.isCollapsed(t) ? a : ey.toDOMPoint(e, i),
                o = ey.getWindow(e).document.createRange(),
                [l, u] = r ? s : a,
                [c, f] = r ? a : s,
                _ = !!(W(l) ? l : l.parentElement).getAttribute('data-slate-zero-width'),
                p = !!(W(c) ? c : c.parentElement).getAttribute('data-slate-zero-width');
            return o.setStart(l, _ ? 1 : u), o.setEnd(c, p ? 1 : f), o;
        },
        toSlateNode(e, t) {
            var n = W(t) ? t : t.parentElement;
            n && !n.hasAttribute('data-slate-node') && (n = n.closest('[data-slate-node]'));
            var i = n ? A.get(n) : null;
            if (!i) throw Error('Cannot resolve a Slate node from DOM node: '.concat(n));
            return i;
        },
        findEventRange(e, t) {
            'nativeEvent' in t && (t = t.nativeEvent);
            var n,
                { clientX: i, clientY: r, target: a } = t;
            if (null == i || null == r) throw Error('Cannot resolve a Slate range from a DOM event: '.concat(t));
            var s = ey.toSlateNode(e, t.target),
                o = ey.findPath(e, s);
            if (d.W_.isElement(s) && d.ML.isVoid(e, s)) {
                var l = a.getBoundingClientRect(),
                    u = e.isInline(s) ? i - l.left < l.left + l.width - i : r - l.top < l.top + l.height - r,
                    c = d.ML.point(e, o, { edge: u ? 'start' : 'end' }),
                    f = u ? d.ML.before(e, c) : d.ML.after(e, c);
                if (f) return d.ML.range(e, f);
            }
            var { document: _ } = ey.getWindow(e);
            if (_.caretRangeFromPoint) n = _.caretRangeFromPoint(i, r);
            else {
                var p = _.caretPositionFromPoint(i, r);
                p && ((n = _.createRange()).setStart(p.offsetNode, p.offset), n.setEnd(p.offsetNode, p.offset));
            }
            if (!n) throw Error('Cannot resolve a Slate range from a DOM event: '.concat(t));
            return ey.toSlateRange(e, n, {
                exactMatch: !1,
                suppressThrow: !1
            });
        },
        toSlatePoint(e, t, n) {
            var { exactMatch: i, suppressThrow: r } = n,
                [a, s] = i ? t : X(t),
                o = a.parentNode,
                l = null,
                u = 0;
            if (o) {
                var c,
                    f,
                    _ = ey.toDOMNode(e, e),
                    p = o.closest('[data-slate-void="true"]'),
                    h = p && _.contains(p) ? p : null,
                    m = o.closest('[data-slate-leaf]'),
                    g = null;
                if (m) {
                    if ((l = m.closest('[data-slate-node="text"]'))) {
                        var E = ey.getWindow(e).document.createRange();
                        E.setStart(l, 0), E.setEnd(a, s);
                        var v = E.cloneContents();
                        [...Array.prototype.slice.call(v.querySelectorAll('[data-slate-zero-width]')), ...Array.prototype.slice.call(v.querySelectorAll('[contenteditable=false]'))].forEach((e) => {
                            if (el && !i && e.hasAttribute('data-slate-zero-width') && e.textContent.length > 0 && '\uFEFF' !== e.textContext) {
                                e.textContent.startsWith('\uFEFF') && (e.textContent = e.textContent.slice(1));
                                return;
                            }
                            e.parentNode.removeChild(e);
                        }),
                            (u = v.textContent.length),
                            (g = l);
                    }
                } else if (h) {
                    for (var y = h.querySelectorAll('[data-slate-leaf]'), I = 0; I < y.length; I++) {
                        var b = y[I];
                        if (ey.hasDOMNode(e, b)) {
                            m = b;
                            break;
                        }
                    }
                    m
                        ? ((l = m.closest('[data-slate-node="text"]')),
                          (u = (g = m).textContent.length),
                          g.querySelectorAll('[data-slate-zero-width]').forEach((e) => {
                              u -= e.textContent.length;
                          }))
                        : (u = 1);
                }
                g && u === g.textContent.length && el && 'z' === g.getAttribute('data-slate-zero-width') && null !== (c = g.textContent) && void 0 !== c && c.startsWith('\uFEFF') && (o.hasAttribute('data-slate-zero-width') || (eu && null !== (f = g.textContent) && void 0 !== f && f.endsWith('\n\n'))) && u--;
            }
            if (el && !l && !i) {
                var T = o.hasAttribute('data-slate-node') ? o : o.closest('[data-slate-node]');
                if (T && ey.hasDOMNode(e, T, { editable: !0 })) {
                    var S = ey.toSlateNode(e, T),
                        { path: A, offset: N } = d.ML.start(e, ey.findPath(e, S));
                    return (
                        T.querySelector('[data-slate-leaf]') || (N = s),
                        {
                            path: A,
                            offset: N
                        }
                    );
                }
            }
            if (!l) {
                if (r) return null;
                throw Error('Cannot resolve a Slate point from DOM point: '.concat(t));
            }
            var C = ey.toSlateNode(e, l);
            return {
                path: ey.findPath(e, C),
                offset: u
            };
        },
        toSlateRange(e, t, n) {
            var i,
                r,
                a,
                s,
                o,
                l,
                { exactMatch: u, suppressThrow: c } = n;
            if (((z(t) ? t.anchorNode : t.startContainer) && (z(t) ? ((i = t.anchorNode), (r = t.anchorOffset), (a = t.focusNode), (s = t.focusOffset), (o = ef && J(i) ? t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset : t.isCollapsed)) : ((i = t.startContainer), (r = t.startOffset), (a = t.endContainer), (s = t.endOffset), (o = t.collapsed))), null == i || null == a || null == r || null == s)) throw Error('Cannot resolve a Slate range from DOM range: '.concat(t));
            'getAttribute' in a && 'false' === a.getAttribute('contenteditable') && ((a = i), (s = (null === (l = i.textContent) || void 0 === l ? void 0 : l.length) || 0));
            var f = ey.toSlatePoint(e, [i, r], {
                exactMatch: u,
                suppressThrow: c
            });
            if (!f) return null;
            var _ = o
                ? f
                : ey.toSlatePoint(e, [a, s], {
                      exactMatch: u,
                      suppressThrow: c
                  });
            if (!_) return null;
            if (eu && !o && i !== a) {
                var p = d.ML.isEnd(e, f, f.path),
                    h = d.ML.isStart(e, _, _.path);
                p && (f = d.ML.after(e, f) || f), h && (_ = d.ML.before(e, _) || _);
            }
            var m = {
                anchor: f,
                focus: _
            };
            return (
                d.e6.isExpanded(m) &&
                    d.e6.isForward(m) &&
                    W(a) &&
                    d.ML.void(e, {
                        at: m.focus,
                        mode: 'highest'
                    }) &&
                    (m = d.ML.unhangRange(e, m, { voids: !0 })),
                m
            );
        },
        hasRange(e, t) {
            var { anchor: n, focus: i } = t;
            return d.ML.hasPath(e, n.path) && d.ML.hasPath(e, i.path);
        },
        hasTarget: (e, t) => K(t) && ey.hasDOMNode(e, t),
        hasEditableTarget: (e, t) => K(t) && ey.hasDOMNode(e, t, { editable: !0 }),
        hasSelectableTarget: (e, t) => ey.hasEditableTarget(e, t) || ey.isTargetInsideNonReadonlyVoid(e, t),
        isTargetInsideNonReadonlyVoid(e, t) {
            if (O.get(e)) return !1;
            var n = ey.hasTarget(e, t) && ey.toSlateNode(e, t);
            return d.W_.isElement(n) && d.ML.isVoid(e, n);
        },
        androidScheduleFlush(e) {
            var t;
            null === (t = w.get(e)) || void 0 === t || t();
        },
        androidPendingDiffs: (e) => U.get(e)
    },
    eI = ['anchor', 'focus'],
    eb = ['anchor', 'focus'],
    eT = (e, t) => Object.keys(e).length === Object.keys(t).length && Object.keys(e).every((n) => t.hasOwnProperty(n) && e[n] === t[n]),
    eS = (e, t) => {
        var n = g(e, eI),
            i = g(t, eb);
        return e[F] === t[F] && eT(n, i);
    },
    eA = (e, t) => {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++) {
            var i = e[n],
                r = t[n];
            if (!d.e6.equals(i, r) || !eS(i, r)) return !1;
        }
        return !0;
    },
    eN = (e, t) => {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++) {
            var i = e[n],
                r = t[n];
            if (i.anchor.offset !== r.anchor.offset || i.focus.offset !== r.focus.offset || !eS(i, r)) return !1;
        }
        return !0;
    },
    eC = eE ? u.useLayoutEffect : u.useEffect,
    eR = (e) => {
        var { isLast: t, leaf: n, parent: i, text: r } = e,
            a = eP(),
            s = ey.findPath(a, r),
            o = d.y$.parent(s),
            l = !0 === n[V];
        return a.isVoid(i)
            ? u.createElement(ex, { length: d.NB.string(i).length })
            : '' !== n.text || i.children[i.children.length - 1] !== r || a.isInline(i) || '' !== d.ML.string(a, o)
              ? '' === n.text
                  ? u.createElement(ex, { isMarkPlaceholder: l })
                  : t && '\n' === n.text.slice(-1)
                    ? u.createElement(eO, {
                          isTrailing: !0,
                          text: n.text
                      })
                    : u.createElement(eO, { text: n.text })
              : u.createElement(ex, {
                    isLineBreak: !0,
                    isMarkPlaceholder: l
                });
    },
    eO = (e) => {
        var { text: t, isTrailing: n = !1 } = e,
            i = (0, u.useRef)(null),
            r = () => ''.concat(null != t ? t : '').concat(n ? '\n' : ''),
            [a] = (0, u.useState)(r);
        return (
            eC(() => {
                var e = r();
                i.current && i.current.textContent !== e && (i.current.textContent = e);
            }),
            u.createElement(eD, { ref: i }, a)
        );
    },
    eD = (0, u.memo)(
        (0, u.forwardRef)((e, t) =>
            u.createElement(
                'span',
                {
                    'data-slate-string': !0,
                    ref: t
                },
                e.children
            )
        )
    ),
    ex = (e) => {
        var { length: t = 0, isLineBreak: n = !1, isMarkPlaceholder: i = !1 } = e,
            r = {
                'data-slate-zero-width': n ? 'n' : 'z',
                'data-slate-length': t
            };
        return i && (r['data-slate-mark-placeholder'] = !0), u.createElement('span', Object.assign({}, r), el && n ? null : '\uFEFF', n ? u.createElement('br', null) : null);
    },
    eL = (0, u.createContext)(null),
    eP = () => {
        var e = (0, u.useContext)(eL);
        if (!e) throw Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
        return e;
    },
    ew = (e) => {
        var { leaf: t, isLast: n, text: i, parent: r, renderPlaceholder: a, renderLeaf: s = (e) => u.createElement(ek, Object.assign({}, e)) } = e,
            o = (0, u.useRef)(null),
            l = (0, u.useRef)(null),
            c = eP(),
            d = (0, u.useRef)(null);
        (0, u.useEffect)(
            () => () => {
                d.current && d.current.disconnect();
            },
            []
        ),
            (0, u.useEffect)(() => {
                var e = null == l ? void 0 : l.current;
                if ((e ? S.set(c, e) : S.delete(c), d.current)) d.current.disconnect(), e && d.current.observe(e);
                else if (e) {
                    var t = window.ResizeObserver || f.do;
                    (d.current = new t(() => {
                        var e = Z.get(c);
                        null == e || e();
                    })),
                        d.current.observe(e);
                }
                if (!e && o.current) {
                    var n = Z.get(c);
                    null == n || n();
                }
                return (
                    (o.current = l.current),
                    () => {
                        S.delete(c);
                    }
                );
            }, [l, t]);
        var _ = u.createElement(eR, {
            isLast: n,
            leaf: t,
            parent: r,
            text: i
        });
        if (t[F]) {
            var p = {
                children: t.placeholder,
                attributes: {
                    'data-slate-placeholder': !0,
                    style: {
                        position: 'absolute',
                        pointerEvents: 'none',
                        width: '100%',
                        maxWidth: '100%',
                        display: 'block',
                        opacity: '0.333',
                        userSelect: 'none',
                        textDecoration: 'none'
                    },
                    contentEditable: !1,
                    ref: l
                }
            };
            _ = u.createElement(u.Fragment, null, a(p), _);
        }
        return s({
            attributes: { 'data-slate-leaf': !0 },
            children: _,
            leaf: t,
            text: i
        });
    },
    eM = u.memo(ew, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && d.xv.equals(t.leaf, e.leaf) && t.leaf[F] === e.leaf[F]),
    ek = (e) => {
        var { attributes: t, children: n } = e;
        return u.createElement('span', Object.assign({}, t), n);
    },
    eU = (e) => {
        for (var { decorations: t, isLast: n, parent: i, renderPlaceholder: r, renderLeaf: a, text: s } = e, o = eP(), l = (0, u.useRef)(null), c = d.xv.decorations(s, t), f = ey.findKey(o, s), _ = [], p = 0; p < c.length; p++) {
            var h = c[p];
            _.push(
                u.createElement(eM, {
                    isLast: n && p === c.length - 1,
                    key: ''.concat(f.id, '-').concat(p),
                    renderPlaceholder: r,
                    leaf: h,
                    text: s,
                    parent: i,
                    renderLeaf: a
                })
            );
        }
        var m = (0, u.useCallback)(
            (e) => {
                var t = R.get(o);
                e ? (null == t || t.set(f, e), N.set(s, e), A.set(e, s)) : (null == t || t.delete(f), N.delete(s), l.current && A.delete(l.current)), (l.current = e);
            },
            [l, o, f, s]
        );
        return u.createElement(
            'span',
            {
                'data-slate-node': 'text',
                ref: m
            },
            _
        );
    },
    eG = u.memo(eU, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && eN(t.decorations, e.decorations)),
    eB = (e) => {
        var { decorations: t, element: n, renderElement: i = (e) => u.createElement(eF, Object.assign({}, e)), renderPlaceholder: a, renderLeaf: s, selection: o } = e,
            l = eP(),
            c = ez(),
            f = l.isInline(n),
            _ = ey.findKey(l, n),
            p = (0, u.useCallback)(
                (e) => {
                    var t = R.get(l);
                    e ? (null == t || t.set(_, e), N.set(n, e), A.set(e, n)) : (null == t || t.delete(_), N.delete(n));
                },
                [l, _, n]
            ),
            h = eW({
                decorations: t,
                node: n,
                renderElement: i,
                renderPlaceholder: a,
                renderLeaf: s,
                selection: o
            }),
            m = {
                'data-slate-node': 'element',
                ref: p
            };
        if ((f && (m['data-slate-inline'] = !0), !f && d.ML.hasInlines(l, n))) {
            var g = d.NB.string(n),
                E = r()(g);
            'rtl' === E && (m.dir = E);
        }
        if (d.ML.isVoid(l, n)) {
            (m['data-slate-void'] = !0), !c && f && (m.contentEditable = !1);
            var v = f ? 'span' : 'div',
                [[b]] = d.NB.texts(n);
            (h = u.createElement(
                v,
                {
                    'data-slate-spacer': !0,
                    style: {
                        height: '0',
                        color: 'transparent',
                        outline: 'none',
                        position: 'absolute'
                    }
                },
                u.createElement(eG, {
                    renderPlaceholder: a,
                    decorations: [],
                    isLast: !1,
                    parent: n,
                    text: b
                })
            )),
                y.set(b, 0),
                I.set(b, n);
        }
        return i({
            attributes: m,
            children: h,
            element: n,
            decorations: t
        });
    },
    eZ = u.memo(eB, (e, t) => e.element === t.element && e.renderElement === t.renderElement && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && eA(e.decorations, t.decorations) && (e.selection === t.selection || (!!e.selection && !!t.selection && d.e6.equals(e.selection, t.selection)))),
    eF = (e) => {
        var { attributes: t, children: n, element: i } = e,
            r = eP().isInline(i) ? 'span' : 'div';
        return u.createElement(r, Object.assign({}, t, { style: { position: 'relative' } }), n);
    },
    eV = (0, u.createContext)(() => []),
    ej = () => (0, u.useContext)(eV),
    eH = (0, u.createContext)(!1),
    eY = () => (0, u.useContext)(eH),
    eW = (e) => {
        for (var { decorations: t, node: n, renderElement: i, renderPlaceholder: r, renderLeaf: a, selection: s } = e, o = ej(), l = eP(), c = ey.findPath(l, n), f = [], _ = d.W_.isElement(n) && !l.isInline(n) && d.ML.hasInlines(l, n), p = 0; p < n.children.length; p++) {
            var h = c.concat(p),
                m = n.children[p],
                g = ey.findKey(l, m),
                E = d.ML.range(l, h),
                v = s && d.e6.intersection(E, s),
                b = o([m, h]);
            for (var T of t) {
                var S = d.e6.intersection(T, E);
                S && b.push(S);
            }
            d.W_.isElement(m)
                ? f.push(
                      u.createElement(
                          eH.Provider,
                          {
                              key: 'provider-'.concat(g.id),
                              value: !!v
                          },
                          u.createElement(eZ, {
                              decorations: b,
                              element: m,
                              key: g.id,
                              renderElement: i,
                              renderPlaceholder: r,
                              renderLeaf: a,
                              selection: v
                          })
                      )
                  )
                : f.push(
                      u.createElement(eG, {
                          decorations: b,
                          key: g.id,
                          isLast: _ && p === n.children.length - 1,
                          parent: n,
                          renderPlaceholder: r,
                          renderLeaf: a,
                          text: m
                      })
                  ),
                y.set(m, p),
                I.set(m, n);
        }
        return f;
    },
    eK = (0, u.createContext)(!1),
    ez = () => (0, u.useContext)(eK),
    eq = (0, u.createContext)(null),
    eQ = () => {
        var e = (0, u.useContext)(eq);
        if (!e) throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
        var { editor: t } = e;
        return t;
    },
    eX = 3,
    eJ = {
        bold: 'mod+b',
        compose: ['down', 'left', 'right', 'up', 'backspace', 'enter'],
        moveBackward: 'left',
        moveForward: 'right',
        moveWordBackward: 'ctrl+left',
        moveWordForward: 'ctrl+right',
        deleteBackward: 'shift?+backspace',
        deleteForward: 'shift?+delete',
        extendBackward: 'shift+left',
        extendForward: 'shift+right',
        italic: 'mod+i',
        insertSoftBreak: 'shift+enter',
        splitBlock: 'enter',
        undo: 'mod+z'
    },
    e$ = {
        moveLineBackward: 'opt+up',
        moveLineForward: 'opt+down',
        moveWordBackward: 'opt+left',
        moveWordForward: 'opt+right',
        deleteBackward: ['ctrl+backspace', 'ctrl+h'],
        deleteForward: ['ctrl+delete', 'ctrl+d'],
        deleteLineBackward: 'cmd+shift?+backspace',
        deleteLineForward: ['cmd+shift?+delete', 'ctrl+k'],
        deleteWordBackward: 'opt+shift?+backspace',
        deleteWordForward: 'opt+shift?+delete',
        extendLineBackward: 'opt+shift+up',
        extendLineForward: 'opt+shift+down',
        redo: 'cmd+shift+z',
        transposeCharacter: 'ctrl+t'
    },
    e0 = {
        deleteWordBackward: 'ctrl+shift?+backspace',
        deleteWordForward: 'ctrl+shift?+delete',
        redo: ['ctrl+y', 'ctrl+shift+z']
    },
    e1 = (e) => {
        var t = eJ[e],
            n = e$[e],
            i = e0[e],
            r = t && (0, _.isKeyHotkey)(t),
            a = n && (0, _.isKeyHotkey)(n),
            s = i && (0, _.isKeyHotkey)(i);
        return (e) => !!((r && r(e)) || (eo && a && a(e)) || (!eo && s && s(e)));
    },
    e2 = {
        isBold: e1('bold'),
        isCompose: e1('compose'),
        isMoveBackward: e1('moveBackward'),
        isMoveForward: e1('moveForward'),
        isDeleteBackward: e1('deleteBackward'),
        isDeleteForward: e1('deleteForward'),
        isDeleteLineBackward: e1('deleteLineBackward'),
        isDeleteLineForward: e1('deleteLineForward'),
        isDeleteWordBackward: e1('deleteWordBackward'),
        isDeleteWordForward: e1('deleteWordForward'),
        isExtendBackward: e1('extendBackward'),
        isExtendForward: e1('extendForward'),
        isExtendLineBackward: e1('extendLineBackward'),
        isExtendLineForward: e1('extendLineForward'),
        isItalic: e1('italic'),
        isMoveLineBackward: e1('moveLineBackward'),
        isMoveLineForward: e1('moveLineForward'),
        isMoveWordBackward: e1('moveWordBackward'),
        isMoveWordForward: e1('moveWordForward'),
        isRedo: e1('redo'),
        isSoftBreak: e1('insertSoftBreak'),
        isSplitBlock: e1('splitBlock'),
        isTransposeCharacter: e1('transposeCharacter'),
        isUndo: e1('undo')
    },
    e3 = (e, t) => {
        var n = [],
            i = () => {
                n = [];
            };
        return {
            registerMutations: (i) => {
                if (t.current) {
                    var r = i.filter((t) => er(e, t, i));
                    n.push(...r);
                }
            },
            restoreDOM: function () {
                n.length > 0 &&
                    (n.reverse().forEach((e) => {
                        'characterData' !== e.type &&
                            (e.removedNodes.forEach((t) => {
                                e.target.insertBefore(t, e.nextSibling);
                            }),
                            e.addedNodes.forEach((t) => {
                                e.target.removeChild(t);
                            }));
                    }),
                    i());
            },
            clear: i
        };
    },
    e4 = {
        subtree: !0,
        childList: !0,
        characterData: !0,
        characterDataOldValue: !0
    };
class e6 extends u.Component {
    constructor() {
        super(...arguments), (this.context = null), (this.manager = null), (this.mutationObserver = null);
    }
    observe() {
        var e,
            { node: t } = this.props;
        if (!t.current) throw Error('Failed to attach MutationObserver, `node` is undefined');
        null === (e = this.mutationObserver) || void 0 === e || e.observe(t.current, e4);
    }
    componentDidMount() {
        var { receivedUserInput: e } = this.props,
            t = this.context;
        (this.manager = e3(t, e)), (this.mutationObserver = new MutationObserver(this.manager.registerMutations)), this.observe();
    }
    getSnapshotBeforeUpdate() {
        var e,
            t,
            n,
            i,
            r = null === (e = this.mutationObserver) || void 0 === e ? void 0 : e.takeRecords();
        return null != r && r.length && (null === (i = this.manager) || void 0 === i || i.registerMutations(r)), null === (t = this.mutationObserver) || void 0 === t || t.disconnect(), null === (n = this.manager) || void 0 === n || n.restoreDOM(), null;
    }
    componentDidUpdate() {
        var e;
        null === (e = this.manager) || void 0 === e || e.clear(), this.observe();
    }
    componentWillUnmount() {
        var e;
        null === (e = this.mutationObserver) || void 0 === e || e.disconnect();
    }
    render() {
        return this.props.children;
    }
}
e6.contextType = eL;
var e5 = el
    ? e6
    : (e) => {
          var { children: t } = e;
          return u.createElement(u.Fragment, null, t);
      };
function e7(e, t) {
    var { path: n, diff: i } = t;
    if (!d.ML.hasPath(e, n)) return !1;
    var r = d.NB.get(e, n);
    if (!d.xv.isText(r)) return !1;
    if (i.start !== r.text.length || 0 === i.text.length) return r.text.slice(i.start, i.start + i.text.length) === i.text;
    var a = d.y$.next(n);
    if (!d.ML.hasPath(e, a)) return !1;
    var s = d.NB.get(e, a);
    return d.xv.isText(s) && s.text.startsWith(i.text);
}
function e8(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
    return n.reduce((e, t) => e.slice(0, t.start) + t.text + e.slice(t.end), e);
}
function e9(e, t) {
    for (var n = Math.min(e.length, t.length), i = 0; i < n; i++) if (e.charAt(i) !== t.charAt(i)) return i;
    return n;
}
function te(e, t, n) {
    for (var i = Math.min(e.length, t.length, n), r = 0; r < i; r++) if (e.charAt(e.length - r - 1) !== t.charAt(t.length - r - 1)) return r;
    return i;
}
function tt(e, t) {
    var { start: n, end: i, text: r } = t,
        a = e.slice(n, i),
        s = e9(a, r),
        o = Math.min(a.length - s, r.length - s),
        l = te(a, r, o),
        u = {
            start: n + s,
            end: i - l,
            text: r.slice(s, r.length - l)
        };
    return u.start === u.end && 0 === u.text.length ? null : u;
}
function tn(e, t, n) {
    var i = Math.min(t.start, n.start),
        r = Math.max(0, Math.min(t.start + t.text.length, n.end) - n.start),
        a = e8(e, t, n),
        s = Math.max(n.start + n.text.length, t.start + t.text.length + (t.start + t.text.length > n.start ? n.text.length : 0) - r),
        o = a.slice(i, s);
    return tt(e, {
        start: i,
        end: Math.max(t.end, n.end - t.text.length + (t.end - t.start)),
        text: o
    });
}
function ti(e) {
    var { path: t, diff: n } = e;
    return {
        anchor: {
            path: t,
            offset: n.start
        },
        focus: {
            path: t,
            offset: n.end
        }
    };
}
function tr(e, t) {
    var { path: n, offset: i } = t;
    if (!d.ML.hasPath(e, n)) return null;
    var r = d.NB.get(e, n);
    if (!d.xv.isText(r)) return null;
    var a = d.ML.above(e, {
        match: (t) => d.W_.isElement(t) && d.ML.isBlock(e, t),
        at: n
    });
    if (!a) return null;
    for (; i > r.text.length; ) {
        var s = d.ML.next(e, {
            at: n,
            match: d.xv.isText
        });
        if (!s || !d.y$.isDescendant(s[1], a[1])) return null;
        (i -= r.text.length), (r = s[0]), (n = s[1]);
    }
    return {
        path: n,
        offset: i
    };
}
function ta(e, t) {
    var n = tr(e, t.anchor);
    if (!n) return null;
    if (d.e6.isCollapsed(t))
        return {
            anchor: n,
            focus: n
        };
    var i = tr(e, t.focus);
    return i
        ? {
              anchor: n,
              focus: i
          }
        : null;
}
function ts(e, t, n) {
    var i = U.get(e),
        r =
            null == i
                ? void 0
                : i.find((e) => {
                      var { path: n } = e;
                      return d.y$.equals(n, t.path);
                  });
    if (!r || t.offset <= r.diff.start) return d.E9.transform(t, n, { affinity: 'backward' });
    var { diff: a } = r;
    if (t.offset <= a.start + a.text.length) {
        var s = {
                path: t.path,
                offset: a.start
            },
            o = d.E9.transform(s, n, { affinity: 'backward' });
        return o
            ? {
                  path: o.path,
                  offset: o.offset + t.offset - a.start
              }
            : null;
    }
    var l = {
            path: t.path,
            offset: t.offset - a.text.length + a.end - a.start
        },
        u = d.E9.transform(l, n, { affinity: 'backward' });
    return u
        ? 'split_node' === n.type && d.y$.equals(n.path, t.path) && l.offset < n.position && a.start < n.position
            ? u
            : {
                  path: u.path,
                  offset: u.offset + a.text.length - a.end + a.start
              }
        : null;
}
function to(e, t, n) {
    var i = ts(e, t.anchor, n);
    if (!i) return null;
    if (d.e6.isCollapsed(t))
        return {
            anchor: i,
            focus: i
        };
    var r = ts(e, t.focus, n);
    return r
        ? {
              anchor: i,
              focus: r
          }
        : null;
}
function tl(e, t) {
    var { path: n, diff: i, id: r } = e;
    switch (t.type) {
        case 'insert_text':
            if (!d.y$.equals(t.path, n) || t.offset >= i.end) return e;
            if (t.offset <= i.start)
                return {
                    diff: {
                        start: t.text.length + i.start,
                        end: t.text.length + i.end,
                        text: i.text
                    },
                    id: r,
                    path: n
                };
            return {
                diff: {
                    start: i.start,
                    end: i.end + t.text.length,
                    text: i.text
                },
                id: r,
                path: n
            };
        case 'remove_text':
            if (!d.y$.equals(t.path, n) || t.offset >= i.end) return e;
            if (t.offset + t.text.length <= i.start)
                return {
                    diff: {
                        start: i.start - t.text.length,
                        end: i.end - t.text.length,
                        text: i.text
                    },
                    id: r,
                    path: n
                };
            return {
                diff: {
                    start: i.start,
                    end: i.end - t.text.length,
                    text: i.text
                },
                id: r,
                path: n
            };
        case 'split_node':
            if (!d.y$.equals(t.path, n) || t.position >= i.end)
                return {
                    diff: i,
                    id: r,
                    path: d.y$.transform(n, t, { affinity: 'backward' })
                };
            if (t.position > i.start)
                return {
                    diff: {
                        start: i.start,
                        end: Math.min(t.position, i.end),
                        text: i.text
                    },
                    id: r,
                    path: n
                };
            return {
                diff: {
                    start: i.start - t.position,
                    end: i.end - t.position,
                    text: i.text
                },
                id: r,
                path: d.y$.transform(n, t, { affinity: 'forward' })
            };
        case 'merge_node':
            if (!d.y$.equals(t.path, n))
                return {
                    diff: i,
                    id: r,
                    path: d.y$.transform(n, t)
                };
            return {
                diff: {
                    start: i.start + t.position,
                    end: i.end + t.position,
                    text: i.text
                },
                id: r,
                path: d.y$.transform(n, t)
            };
    }
    var a = d.y$.transform(n, t);
    return a
        ? {
              diff: i,
              path: a,
              id: r
          }
        : null;
}
function tu(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
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
    tf = 200,
    t_ = function () {},
    tp = (e) => (null == e ? void 0 : e.constructor.name) === 'DataTransfer';
function th(e) {
    var { editor: t, scheduleOnDOMSelectionChange: n, onDOMSelectionChange: i } = e,
        r = !1,
        a = null,
        s = null,
        o = null,
        l = 0,
        u = !1,
        c = () => {
            var e = B.get(t);
            if ((B.delete(t), e)) {
                var { selection: n } = t,
                    i = ta(t, e);
                !i || (n && d.e6.equals(i, n)) || d.YR.select(t, i);
            }
        },
        f = () => {
            var e = G.get(t);
            if ((G.delete(t), e)) {
                if (e.at) {
                    var n = d.E9.isPoint(e.at) ? tr(t, e.at) : ta(t, e.at);
                    if (!n) return;
                    var i = d.ML.range(t, n);
                    (t.selection && d.e6.equals(t.selection, i)) || d.YR.select(t, n);
                }
                e.run();
            }
        },
        _ = () => {
            if ((s && (clearTimeout(s), (s = null)), o && (clearTimeout(o), (o = null)), !y() && !v())) {
                c();
                return;
            }
            r || ((r = !0), setTimeout(() => (r = !1))), v() && (r = 'action');
            var e = t.selection && d.ML.rangeRef(t, t.selection, { affinity: 'forward' });
            k.set(t, t.marks), t_('flush', G.get(t), U.get(t));
            for (var a = y(); (l = null === (_ = U.get(t)) || void 0 === _ ? void 0 : _[0]); ) {
                var l,
                    _,
                    p,
                    h = M.get(t);
                void 0 !== h && (M.delete(t), (t.marks = h)), h && !1 === u && (u = null);
                var m = ti(l);
                (t.selection && d.e6.equals(t.selection, m)) || d.YR.select(t, m),
                    l.diff.text ? d.ML.insertText(t, l.diff.text) : d.ML.deleteFragment(t),
                    U.set(
                        t,
                        null === (p = U.get(t)) || void 0 === p
                            ? void 0
                            : p.filter((e) => {
                                  var { id: t } = e;
                                  return t !== l.id;
                              })
                    ),
                    e7(t, l) || ((a = !1), G.delete(t), k.delete(t), (r = 'action'), B.delete(t), n.cancel(), i.cancel(), null == e || e.unref());
            }
            var g = null == e ? void 0 : e.unref();
            if ((!g || B.get(t) || (t.selection && d.e6.equals(g, t.selection)) || d.YR.select(t, g), v())) {
                f();
                return;
            }
            a && n(), n.flush(), i.flush(), c();
            var E = k.get(t);
            k.delete(t), void 0 !== E && ((t.marks = E), t.onChange());
        },
        p = (e) => {
            a && clearTimeout(a),
                (a = setTimeout(() => {
                    x.set(t, !1), _();
                }, td));
        },
        h = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                n = S.get(t);
            if (n) {
                if (y() || e) {
                    n.style.display = 'none';
                    return;
                }
                n.style.removeProperty('display');
            }
        },
        m = (e, n) => {
            var i,
                r = null !== (i = U.get(t)) && void 0 !== i ? i : [];
            U.set(t, r);
            var a = d.NB.leaf(t, e),
                s = r.findIndex((t) => d.y$.equals(t.path, e));
            if (s < 0) {
                tt(a.text, n) &&
                    r.push({
                        path: e,
                        diff: n,
                        id: l++
                    }),
                    h();
                return;
            }
            var o = tn(a.text, r[s].diff, n);
            if (!o) {
                r.splice(s, 1), h();
                return;
            }
            r[s] = tc(tc({}, r[s]), {}, { diff: o });
        },
        g = function (e) {
            var { at: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (u = !1),
                B.delete(t),
                n.cancel(),
                i.cancel(),
                v() && _(),
                G.set(t, {
                    at: r,
                    run: e
                }),
                (o = setTimeout(_));
        },
        E = (e) => {
            s && (clearTimeout(s), (s = null));
            var { inputType: n } = e,
                i = null,
                r = e.dataTransfer || e.data || void 0;
            !1 !== u && 'insertText' !== n && 'insertCompositionText' !== n && (u = !1);
            var [a] = e.getTargetRanges();
            a &&
                (i = ey.toSlateRange(t, a, {
                    exactMatch: !1,
                    suppressThrow: !0
                }));
            var o = ey.getWindow(t).getSelection();
            if (
                (!i &&
                    o &&
                    ((a = o),
                    (i = ey.toSlateRange(t, o, {
                        exactMatch: !1,
                        suppressThrow: !0
                    }))),
                (i = null !== (D = i) && void 0 !== D ? D : t.selection))
            ) {
                var l = !0;
                if (n.startsWith('delete')) {
                    if (d.e6.isExpanded(i)) {
                        var [c, f] = d.e6.edges(i);
                        if (d.NB.leaf(t, c.path).text.length === c.offset && 0 === f.offset) {
                            var _ = d.ML.next(t, {
                                at: c.path,
                                match: d.xv.isText
                            });
                            _ &&
                                d.y$.equals(_[1], f.path) &&
                                (i = {
                                    anchor: f,
                                    focus: f
                                });
                        }
                    }
                    var p = n.endsWith('Backward') ? 'backward' : 'forward',
                        [h, E] = d.e6.edges(i),
                        [v, y] = d.ML.leaf(t, h.path),
                        I = {
                            text: '',
                            start: h.offset,
                            end: E.offset
                        },
                        T = U.get(t),
                        S = null == T ? void 0 : T.find((e) => d.y$.equals(e.path, y)),
                        A = S ? [S.diff, I] : [I];
                    if ((0 === e8(v.text, ...A).length && (l = !1), d.e6.isExpanded(i))) {
                        if (l && d.y$.equals(i.anchor.path, i.focus.path)) {
                            var C = {
                                path: i.anchor.path,
                                offset: h.offset
                            };
                            return (
                                b(d.ML.range(t, C, C)),
                                m(i.anchor.path, {
                                    text: '',
                                    end: E.offset,
                                    start: h.offset
                                })
                            );
                        }
                        return g(() => d.ML.deleteFragment(t, { direction: p }), { at: i });
                    }
                }
                switch (n) {
                    case 'deleteByComposition':
                    case 'deleteByCut':
                    case 'deleteByDrag':
                        return g(() => d.ML.deleteFragment(t), { at: i });
                    case 'deleteContent':
                    case 'deleteContentForward':
                        var { anchor: R } = i;
                        if (l && d.e6.isCollapsed(i)) {
                            var O = d.NB.leaf(t, R.path);
                            if (R.offset < O.text.length)
                                return m(R.path, {
                                    text: '',
                                    start: R.offset,
                                    end: R.offset + 1
                                });
                        }
                        return g(() => d.ML.deleteForward(t), { at: i });
                    case 'deleteContentBackward':
                        var D,
                            x,
                            { anchor: L } = i,
                            P = z(a) ? a.isCollapsed : !!(null !== (x = a) && void 0 !== x && x.collapsed);
                        if (l && P && d.e6.isCollapsed(i) && L.offset > 0)
                            return m(L.path, {
                                text: '',
                                start: L.offset - 1,
                                end: L.offset
                            });
                        return g(() => d.ML.deleteBackward(t), { at: i });
                    case 'deleteEntireSoftLine':
                        return g(
                            () => {
                                d.ML.deleteBackward(t, { unit: 'line' }), d.ML.deleteForward(t, { unit: 'line' });
                            },
                            { at: i }
                        );
                    case 'deleteHardLineBackward':
                        return g(() => d.ML.deleteBackward(t, { unit: 'block' }), { at: i });
                    case 'deleteSoftLineBackward':
                        return g(() => d.ML.deleteBackward(t, { unit: 'line' }), { at: i });
                    case 'deleteHardLineForward':
                        return g(() => d.ML.deleteForward(t, { unit: 'block' }), { at: i });
                    case 'deleteSoftLineForward':
                        return g(() => d.ML.deleteForward(t, { unit: 'line' }), { at: i });
                    case 'deleteWordBackward':
                        return g(() => d.ML.deleteBackward(t, { unit: 'word' }), { at: i });
                    case 'deleteWordForward':
                        return g(() => d.ML.deleteForward(t, { unit: 'word' }), { at: i });
                    case 'insertLineBreak':
                        return g(() => d.ML.insertSoftBreak(t), { at: i });
                    case 'insertParagraph':
                        return g(() => d.ML.insertBreak(t), { at: i });
                    case 'insertCompositionText':
                    case 'deleteCompositionText':
                    case 'insertFromComposition':
                    case 'insertFromDrop':
                    case 'insertFromPaste':
                    case 'insertFromYank':
                    case 'insertReplacementText':
                    case 'insertText':
                        if (tp(r)) return g(() => ey.insertData(t, r), { at: i });
                        var w = null != r ? r : '';
                        if ((M.get(t) && (w = w.replace('\uFEFF', '')), 'insertText' === n && /.*\n.*\n$/.test(w) && (w = w.slice(0, -1)), w.includes('\n')))
                            return g(
                                () => {
                                    var e = w.split('\n');
                                    e.forEach((n, i) => {
                                        n && d.ML.insertText(t, n), i !== e.length - 1 && d.ML.insertSoftBreak(t);
                                    });
                                },
                                { at: i }
                            );
                        if (d.y$.equals(i.anchor.path, i.focus.path)) {
                            var [k, G] = d.e6.edges(i),
                                B = {
                                    start: k.offset,
                                    end: G.offset,
                                    text: w
                                };
                            if (w && u && 'insertCompositionText' === n) {
                                var Z = u.start + u.text.search(/\S|$/);
                                B.start + B.text.search(/\S|$/) === Z + 1 && B.end === u.start + u.text.length ? ((B.start -= 1), (u = null), N()) : (u = !1);
                            } else u = 'insertText' === n && (null === u ? B : !!(u && d.e6.isCollapsed(i)) && u.end + u.text.length === k.offset && tc(tc({}, u), {}, { text: u.text + w }));
                            if (l) {
                                m(k.path, B);
                                return;
                            }
                        }
                        return g(() => d.ML.insertText(t, w), { at: i });
                }
            }
        },
        v = () => !!G.get(t),
        y = () => {
            var e;
            return !!(null !== (e = U.get(t)) && void 0 !== e && e.length);
        },
        I = () => v() || y(),
        b = (e) => {
            B.set(t, e), s && (clearTimeout(s), (s = null));
            var { selection: n } = t;
            if (e) {
                var i = !n || !d.y$.equals(n.anchor.path, e.anchor.path),
                    r = !n || !d.y$.equals(n.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
                ((i && u) || r) && (u = !1), (i || y()) && (s = setTimeout(_, tf));
            }
        },
        T = () => {
            (v() || !y()) && _();
        },
        A = (e) => {
            y() || (h(!0), setTimeout(h));
        },
        N = () => {
            v() || (o = setTimeout(_));
        },
        C = (e) => {
            if (!(y() || v()) && e.some((n) => er(t, n, e))) {
                var n;
                null === (n = Z.get(t)) || void 0 === n || n();
            }
        };
    return {
        flush: _,
        scheduleFlush: N,
        hasPendingDiffs: y,
        hasPendingAction: v,
        hasPendingChanges: I,
        isFlushing: () => r,
        handleUserSelect: b,
        handleCompositionEnd: p,
        handleCompositionStart: (e) => {
            x.set(t, !0), a && (clearTimeout(a), (a = null));
        },
        handleDOMBeforeInput: E,
        handleKeyDown: A,
        handleDomMutations: C,
        handleInput: T
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
            []
        ),
        e.current
    );
}
function tg(e, t, n) {
    var [i] = (0, u.useState)(() => new MutationObserver(t));
    eC(() => {
        i.takeRecords();
    }),
        (0, u.useEffect)(() => {
            if (!e.current) throw Error('Failed to attach MutationObserver, `node` is undefined');
            return i.observe(e.current, n), () => i.disconnect();
        }, []);
}
var tE = ['node'];
function tv(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function ty(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tv(Object(n), !0).forEach(function (t) {
                  h(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tv(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var tI = {
    subtree: !0,
    childList: !0,
    characterData: !0
};
function tb(e) {
    var { node: t } = e,
        n = g(e, tE);
    if (!el) return null;
    var i = eP(),
        r = tm(),
        [a] = (0, u.useState)(() => th(ty({ editor: i }, n)));
    return tg(t, a.handleDomMutations, tI), w.set(i, a.scheduleFlush), r && a.flush(), a;
}
function tT() {
    var e = eP(),
        t = (0, u.useRef)(!1),
        n = (0, u.useRef)(0),
        i = (0, u.useCallback)(() => {
            if (!t.current) {
                t.current = !0;
                var i = ey.getWindow(e);
                i.cancelAnimationFrame(n.current),
                    (n.current = i.requestAnimationFrame(() => {
                        t.current = !1;
                    }));
            }
        }, []);
    return (
        (0, u.useEffect)(() => () => cancelAnimationFrame(n.current), []),
        {
            receivedUserInput: t,
            onUserInput: i
        }
    );
}
var tS = ['autoFocus', 'decorate', 'onDOMBeforeInput', 'placeholder', 'readOnly', 'renderElement', 'renderLeaf', 'renderPlaceholder', 'scrollSelectionIntoView', 'style', 'as', 'disableDefaultStyles'],
    tA = ['text'];
function tN(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function tC(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tN(Object(n), !0).forEach(function (t) {
                  h(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tN(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var tR = (e) => u.createElement(u.Fragment, null, eW(e)),
    tO = (e) => {
        var t,
            n,
            i = (0, u.useCallback)((e) => u.createElement(tD, Object.assign({}, e)), []),
            { autoFocus: a, decorate: o = tx, onDOMBeforeInput: c, placeholder: f, readOnly: _ = !1, renderElement: p, renderLeaf: h, renderPlaceholder: m = i, scrollSelectionIntoView: E = tL, style: v = {}, as: y = 'div', disableDefaultStyles: I = !1 } = e,
            C = g(e, tS),
            R = eQ(),
            [P, w] = (0, u.useState)(!1),
            U = (0, u.useRef)(null),
            G = (0, u.useRef)([]),
            { onUserInput: B, receivedUserInput: j } = tT(),
            [, Y] = (0, u.useReducer)((e) => e + 1, 0);
        Z.set(R, Y), O.set(R, _);
        var z = (0, u.useMemo)(
            () => ({
                isDraggingInternally: !1,
                isUpdatingSelection: !1,
                latestElement: null,
                hasMarkPlaceholder: !1
            }),
            []
        );
        (0, u.useLayoutEffect)(
            () => () => {
                null != z && null != z.latestElement && (z.latestElement.remove(), (z.latestElement = null));
            },
            []
        ),
            (0, u.useEffect)(() => {
                U.current && a && U.current.focus();
            }, [a]);
        var q = (0, u.useCallback)(
                l()(() => {
                    if ((el || !ey.isComposing(R)) && (!z.isUpdatingSelection || (null != J && J.isFlushing())) && !z.isDraggingInternally) {
                        var e = ey.findDocumentOrShadowRoot(R),
                            { activeElement: t } = e,
                            n = ey.toDOMNode(R, R),
                            i = e.getSelection();
                        if ((t === n ? ((z.latestElement = t), D.set(R, !0)) : D.delete(R), !i)) return d.YR.deselect(R);
                        var { anchorNode: r, focusNode: a } = i,
                            s = ey.hasEditableTarget(R, r) || ey.isTargetInsideNonReadonlyVoid(R, r),
                            o = ey.hasEditableTarget(R, a) || ey.isTargetInsideNonReadonlyVoid(R, a);
                        if (s && o) {
                            var l = ey.toSlateRange(R, i, {
                                exactMatch: !1,
                                suppressThrow: !0
                            });
                            l && (ey.isComposing(R) || (null != J && J.hasPendingChanges()) || (null != J && J.isFlushing()) ? null == J || J.handleUserSelect(l) : d.YR.select(R, l));
                        }
                        !_ || (s && o) || d.YR.deselect(R);
                    }
                }, 100),
                [_]
            ),
            X = (0, u.useMemo)(() => s()(q, 0), [q]),
            J = tb({
                node: U,
                onDOMSelectionChange: q,
                scheduleOnDOMSelectionChange: X
            });
        eC(() => {
            U.current && (e = H(U.current)) ? (b.set(R, e), T.set(R, U.current), N.set(R, U.current), A.set(U.current, R)) : N.delete(R);
            var e,
                { selection: t } = R,
                n = ey.findDocumentOrShadowRoot(R).getSelection();
            if (!(!n || !ey.isFocused(R) || (null != J && J.hasPendingAction()))) {
                var i = (e) => {
                        var i = 'None' !== n.type;
                        if (t || i) {
                            var r = T.get(R),
                                a = !1;
                            if ((r.contains(n.anchorNode) && r.contains(n.focusNode) && (a = !0), i && a && t && !e)) {
                                var s = ey.toSlateRange(R, n, {
                                    exactMatch: !0,
                                    suppressThrow: !0
                                });
                                if (s && d.e6.equals(s, t)) {
                                    if (!z.hasMarkPlaceholder) return;
                                    var o,
                                        { anchorNode: l } = n;
                                    if (null != l && null !== (o = l.parentElement) && void 0 !== o && o.hasAttribute('data-slate-mark-placeholder')) return;
                                }
                            }
                            if (t && !ey.hasRange(R, t)) {
                                R.selection = ey.toSlateRange(R, n, {
                                    exactMatch: !1,
                                    suppressThrow: !0
                                });
                                return;
                            }
                            z.isUpdatingSelection = !0;
                            var u = t && ey.toDOMRange(R, t);
                            return u ? (d.e6.isBackward(t) ? n.setBaseAndExtent(u.endContainer, u.endOffset, u.startContainer, u.startOffset) : n.setBaseAndExtent(u.startContainer, u.startOffset, u.endContainer, u.endOffset), E(R, u)) : n.removeAllRanges(), u;
                        }
                    },
                    r = i(),
                    a = (null == J ? void 0 : J.isFlushing()) === 'action';
                if (!el || !a) {
                    setTimeout(() => {
                        r && eu && ey.toDOMNode(R, R).focus(), (z.isUpdatingSelection = !1);
                    });
                    return;
                }
                var s = null,
                    o = requestAnimationFrame(() => {
                        if (a) {
                            var e = (e) => {
                                try {
                                    ey.toDOMNode(R, R).focus(), i(e);
                                } catch (e) {}
                            };
                            e(),
                                (s = setTimeout(() => {
                                    e(!0), (z.isUpdatingSelection = !1);
                                }));
                        }
                    });
                return () => {
                    cancelAnimationFrame(o), s && clearTimeout(s);
                };
            }
        });
        var $ = (0, u.useCallback)(
                (e) => {
                    if ((B(), !_ && ey.hasEditableTarget(R, e.target) && !tw(e, c))) {
                        if (J) return J.handleDOMBeforeInput(e);
                        X.flush(), q.flush();
                        var { selection: t } = R,
                            { inputType: n } = e,
                            i = e.dataTransfer || e.data || void 0,
                            r = 'insertCompositionText' === n || 'deleteCompositionText' === n;
                        if (!(r && ey.isComposing(R))) {
                            var a = !1;
                            if ('insertText' === n && t && d.e6.isCollapsed(t) && e.data && 1 === e.data.length && /[a-z ]/i.test(e.data) && 0 !== t.anchor.offset) {
                                (a = !0), R.marks && (a = !1);
                                var { anchor: s } = t,
                                    [o, l] = ey.toDOMPoint(R, s),
                                    u = null === (h = o.parentElement) || void 0 === h ? void 0 : h.closest('a'),
                                    f = ey.getWindow(R);
                                if (a && u && ey.hasDOMNode(R, u)) {
                                    var p,
                                        h,
                                        m,
                                        g,
                                        E = null == f ? void 0 : f.document.createTreeWalker(u, NodeFilter.SHOW_TEXT).lastChild();
                                    E === o && (null === (g = E.textContent) || void 0 === g ? void 0 : g.length) === l && (a = !1);
                                }
                                if (a && o.parentElement && (null == f ? void 0 : null === (m = f.getComputedStyle(o.parentElement)) || void 0 === m ? void 0 : m.whiteSpace) === 'pre') {
                                    var v = d.ML.above(R, {
                                        at: s.path,
                                        match: (e) => d.W_.isElement(e) && d.ML.isBlock(R, e)
                                    });
                                    v && d.NB.string(v[0]).includes('\t') && (a = !1);
                                }
                            }
                            if (!n.startsWith('delete') || n.startsWith('deleteBy')) {
                                var [y] = e.getTargetRanges();
                                if (y) {
                                    var I = ey.toSlateRange(R, y, {
                                        exactMatch: !1,
                                        suppressThrow: !1
                                    });
                                    if (!t || !d.e6.equals(t, I)) {
                                        a = !1;
                                        var b = !r && R.selection && d.ML.rangeRef(R, R.selection);
                                        d.YR.select(R, I), b && L.set(R, b);
                                    }
                                }
                            }
                            if (!r) {
                                if ((a || e.preventDefault(), t && d.e6.isExpanded(t) && n.startsWith('delete'))) {
                                    var T = n.endsWith('Backward') ? 'backward' : 'forward';
                                    d.ML.deleteFragment(R, { direction: T });
                                    return;
                                }
                                switch (n) {
                                    case 'deleteByComposition':
                                    case 'deleteByCut':
                                    case 'deleteByDrag':
                                        d.ML.deleteFragment(R);
                                        break;
                                    case 'deleteContent':
                                    case 'deleteContentForward':
                                        d.ML.deleteForward(R);
                                        break;
                                    case 'deleteContentBackward':
                                        d.ML.deleteBackward(R);
                                        break;
                                    case 'deleteEntireSoftLine':
                                        d.ML.deleteBackward(R, { unit: 'line' }), d.ML.deleteForward(R, { unit: 'line' });
                                        break;
                                    case 'deleteHardLineBackward':
                                        d.ML.deleteBackward(R, { unit: 'block' });
                                        break;
                                    case 'deleteSoftLineBackward':
                                        d.ML.deleteBackward(R, { unit: 'line' });
                                        break;
                                    case 'deleteHardLineForward':
                                        d.ML.deleteForward(R, { unit: 'block' });
                                        break;
                                    case 'deleteSoftLineForward':
                                        d.ML.deleteForward(R, { unit: 'line' });
                                        break;
                                    case 'deleteWordBackward':
                                        d.ML.deleteBackward(R, { unit: 'word' });
                                        break;
                                    case 'deleteWordForward':
                                        d.ML.deleteForward(R, { unit: 'word' });
                                        break;
                                    case 'insertLineBreak':
                                        d.ML.insertSoftBreak(R);
                                        break;
                                    case 'insertParagraph':
                                        d.ML.insertBreak(R);
                                        break;
                                    case 'insertFromComposition':
                                    case 'insertFromDrop':
                                    case 'insertFromPaste':
                                    case 'insertFromYank':
                                    case 'insertReplacementText':
                                    case 'insertText':
                                        'insertFromComposition' === n && ey.isComposing(R) && (w(!1), x.set(R, !1)), (null == i ? void 0 : i.constructor.name) === 'DataTransfer' ? ey.insertData(R, i) : 'string' == typeof i && (a ? G.current.push(() => d.ML.insertText(R, i)) : d.ML.insertText(R, i));
                                }
                                var S = null === (p = L.get(R)) || void 0 === p ? void 0 : p.unref();
                                L.delete(R), !S || (R.selection && d.e6.equals(R.selection, S)) || d.YR.select(R, S);
                            }
                        }
                    }
                },
                [_, c]
            ),
            ee = (0, u.useCallback)(
                (e) => {
                    null == e ? (q.cancel(), X.cancel(), T.delete(R), N.delete(R), U.current && ev && U.current.removeEventListener('beforeinput', $)) : ev && e.addEventListener('beforeinput', $), (U.current = e);
                },
                [U, $, q, X]
            );
        eC(() => {
            var e = ey.getWindow(R);
            return (
                e.document.addEventListener('selectionchange', X),
                () => {
                    e.document.removeEventListener('selectionchange', X);
                }
            );
        }, [X]);
        var et = o([R, []]);
        if (f && 1 === R.children.length && 1 === Array.from(d.NB.texts(R)).length && '' === d.NB.string(R) && !P) {
            var en = d.ML.start(R, []);
            et.push({
                [F]: !0,
                placeholder: f,
                anchor: en,
                focus: en
            });
        }
        var { marks: ei } = R;
        if (((z.hasMarkPlaceholder = !1), R.selection && d.e6.isCollapsed(R.selection) && ei)) {
            var { anchor: er } = R.selection,
                ea = d.NB.leaf(R, er.path),
                eo = g(ea, tA);
            if (!d.xv.equals(ea, ei, { loose: !0 })) {
                z.hasMarkPlaceholder = !0;
                var ed = Object.fromEntries(Object.keys(eo).map((e) => [e, null]));
                et.push(
                    tC(
                        tC(tC({ [V]: !0 }, ed), ei),
                        {},
                        {
                            anchor: er,
                            focus: er
                        }
                    )
                );
            }
        }
        (0, u.useEffect)(() => {
            setTimeout(() => {
                var { selection: e } = R;
                if (e) {
                    var { anchor: t } = e,
                        n = d.NB.leaf(R, t.path);
                    if (ei && !d.xv.equals(n, ei, { loose: !0 })) {
                        M.set(R, ei);
                        return;
                    }
                }
                M.delete(R);
            });
        });
        var e_ = null === (t = S.get(R)) || void 0 === t ? void 0 : null === (n = t.getBoundingClientRect()) || void 0 === n ? void 0 : n.height;
        return u.createElement(
            eK.Provider,
            { value: _ },
            u.createElement(
                eV.Provider,
                { value: o },
                u.createElement(
                    e5,
                    {
                        node: U,
                        receivedUserInput: j
                    },
                    u.createElement(
                        y,
                        Object.assign(
                            {
                                role: _ ? void 0 : 'textbox',
                                'aria-multiline': !_ || void 0
                            },
                            C,
                            {
                                spellCheck: (!!ev || !eE) && C.spellCheck,
                                autoCorrect: ev || !eE ? C.autoCorrect : 'false',
                                autoCapitalize: ev || !eE ? C.autoCapitalize : 'false',
                                'data-slate-editor': !0,
                                'data-slate-node': 'value',
                                contentEditable: !_,
                                zindex: -1,
                                suppressContentEditableWarning: !0,
                                ref: ee,
                                style: tC(
                                    tC(
                                        {},
                                        I
                                            ? {}
                                            : tC(
                                                  {
                                                      position: 'relative',
                                                      outline: 'none',
                                                      whiteSpace: 'pre-wrap',
                                                      wordWrap: 'break-word'
                                                  },
                                                  e_ ? { minHeight: e_ } : {}
                                              )
                                    ),
                                    v
                                ),
                                onBeforeInput: (0, u.useCallback)(
                                    (e) => {
                                        if (!ev && !_ && !tP(e, C.onBeforeInput) && ey.hasSelectableTarget(R, e.target) && (e.preventDefault(), !ey.isComposing(R))) {
                                            var t = e.data;
                                            d.ML.insertText(R, t);
                                        }
                                    },
                                    [_]
                                ),
                                onInput: (0, u.useCallback)((e) => {
                                    if (!tP(e, C.onInput)) {
                                        if (J) {
                                            J.handleInput();
                                            return;
                                        }
                                        for (var t of G.current) t();
                                        G.current = [];
                                    }
                                }, []),
                                onBlur: (0, u.useCallback)(
                                    (e) => {
                                        if (!(_ || z.isUpdatingSelection || !ey.hasSelectableTarget(R, e.target) || tP(e, C.onBlur))) {
                                            var t = ey.findDocumentOrShadowRoot(R);
                                            if (z.latestElement !== t.activeElement) {
                                                var { relatedTarget: n } = e;
                                                if (!(n === ey.toDOMNode(R, R) || (W(n) && n.hasAttribute('data-slate-spacer')))) {
                                                    if (null != n && K(n) && ey.hasDOMNode(R, n)) {
                                                        var i = ey.toSlateNode(R, n);
                                                        if (d.W_.isElement(i) && !R.isVoid(i)) return;
                                                    }
                                                    if (ec) {
                                                        var r = t.getSelection();
                                                        null == r || r.removeAllRanges();
                                                    }
                                                    D.delete(R);
                                                }
                                            }
                                        }
                                    },
                                    [_, C.onBlur]
                                ),
                                onClick: (0, u.useCallback)(
                                    (e) => {
                                        if (ey.hasTarget(R, e.target) && !tP(e, C.onClick) && K(e.target)) {
                                            var t = ey.toSlateNode(R, e.target),
                                                n = ey.findPath(R, t);
                                            if (d.ML.hasPath(R, n) && d.NB.get(R, n) === t) {
                                                if (e.detail === eX && n.length >= 1) {
                                                    var i = n;
                                                    if (!(d.W_.isElement(t) && d.ML.isBlock(R, t))) {
                                                        var r,
                                                            a = d.ML.above(R, {
                                                                match: (e) => d.W_.isElement(e) && d.ML.isBlock(R, e),
                                                                at: n
                                                            });
                                                        i = null !== (r = null == a ? void 0 : a[1]) && void 0 !== r ? r : n.slice(0, 1);
                                                    }
                                                    var s = d.ML.range(R, i);
                                                    d.YR.select(R, s);
                                                    return;
                                                }
                                                if (!_) {
                                                    var o = d.ML.start(R, n),
                                                        l = d.ML.end(R, n),
                                                        u = d.ML.void(R, { at: o }),
                                                        c = d.ML.void(R, { at: l });
                                                    if (u && c && d.y$.equals(u[1], c[1])) {
                                                        var f = d.ML.range(R, o);
                                                        d.YR.select(R, f);
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    [_, C.onClick]
                                ),
                                onCompositionEnd: (0, u.useCallback)(
                                    (e) => {
                                        if (ey.hasSelectableTarget(R, e.target) && (ey.isComposing(R) && (w(!1), x.set(R, !1)), null == J || J.handleCompositionEnd(e), !tP(e, C.onCompositionEnd) && !el && !ec && !eh && !es && !eg && !em && e.data)) {
                                            var t = M.get(R);
                                            M.delete(R), void 0 !== t && (k.set(R, R.marks), (R.marks = t)), d.ML.insertText(R, e.data);
                                            var n = k.get(R);
                                            k.delete(R), void 0 !== n && (R.marks = n);
                                        }
                                    },
                                    [C.onCompositionEnd]
                                ),
                                onCompositionUpdate: (0, u.useCallback)(
                                    (e) => {
                                        !ey.hasSelectableTarget(R, e.target) || tP(e, C.onCompositionUpdate) || ey.isComposing(R) || (w(!0), x.set(R, !0));
                                    },
                                    [C.onCompositionUpdate]
                                ),
                                onCompositionStart: (0, u.useCallback)(
                                    (e) => {
                                        if (ey.hasSelectableTarget(R, e.target) && (null == J || J.handleCompositionStart(e), !tP(e, C.onCompositionStart) && !el)) {
                                            w(!0);
                                            var { selection: t } = R;
                                            if (t) {
                                                if (d.e6.isExpanded(t)) {
                                                    d.ML.deleteFragment(R);
                                                    return;
                                                }
                                                var n = d.ML.above(R, {
                                                    match: (e) => d.W_.isElement(e) && d.ML.isInline(R, e),
                                                    mode: 'highest'
                                                });
                                                if (n) {
                                                    var [, i] = n;
                                                    if (d.ML.isEnd(R, t.anchor, i)) {
                                                        var r = d.ML.after(R, i);
                                                        d.YR.setSelection(R, {
                                                            anchor: r,
                                                            focus: r
                                                        });
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    [C.onCompositionStart]
                                ),
                                onCopy: (0, u.useCallback)(
                                    (e) => {
                                        ey.hasSelectableTarget(R, e.target) && !tP(e, C.onCopy) && (e.preventDefault(), ey.setFragmentData(R, e.clipboardData, 'copy'));
                                    },
                                    [C.onCopy]
                                ),
                                onCut: (0, u.useCallback)(
                                    (e) => {
                                        if (!_ && ey.hasSelectableTarget(R, e.target) && !tP(e, C.onCut)) {
                                            e.preventDefault(), ey.setFragmentData(R, e.clipboardData, 'cut');
                                            var { selection: t } = R;
                                            if (t) {
                                                if (d.e6.isExpanded(t)) d.ML.deleteFragment(R);
                                                else {
                                                    var n = d.NB.parent(R, t.anchor.path);
                                                    d.ML.isVoid(R, n) && d.YR.delete(R);
                                                }
                                            }
                                        }
                                    },
                                    [_, C.onCut]
                                ),
                                onDragOver: (0, u.useCallback)(
                                    (e) => {
                                        if (ey.hasTarget(R, e.target) && !tP(e, C.onDragOver)) {
                                            var t = ey.toSlateNode(R, e.target);
                                            d.W_.isElement(t) && d.ML.isVoid(R, t) && e.preventDefault();
                                        }
                                    },
                                    [C.onDragOver]
                                ),
                                onDragStart: (0, u.useCallback)(
                                    (e) => {
                                        if (!_ && ey.hasTarget(R, e.target) && !tP(e, C.onDragStart)) {
                                            var t = ey.toSlateNode(R, e.target),
                                                n = ey.findPath(R, t);
                                            if (
                                                (d.W_.isElement(t) && d.ML.isVoid(R, t)) ||
                                                d.ML.void(R, {
                                                    at: n,
                                                    voids: !0
                                                })
                                            ) {
                                                var i = d.ML.range(R, n);
                                                d.YR.select(R, i);
                                            }
                                            (z.isDraggingInternally = !0), ey.setFragmentData(R, e.dataTransfer, 'drag');
                                        }
                                    },
                                    [_, C.onDragStart]
                                ),
                                onDrop: (0, u.useCallback)(
                                    (e) => {
                                        if (!_ && ey.hasTarget(R, e.target) && !tP(e, C.onDrop)) {
                                            e.preventDefault();
                                            var t = R.selection,
                                                n = ey.findEventRange(R, e),
                                                i = e.dataTransfer;
                                            d.YR.select(R, n),
                                                z.isDraggingInternally &&
                                                    t &&
                                                    !d.e6.equals(t, n) &&
                                                    !d.ML.void(R, {
                                                        at: n,
                                                        voids: !0
                                                    }) &&
                                                    d.YR.delete(R, { at: t }),
                                                ey.insertData(R, i),
                                                ey.isFocused(R) || ey.focus(R);
                                        }
                                        z.isDraggingInternally = !1;
                                    },
                                    [_, C.onDrop]
                                ),
                                onDragEnd: (0, u.useCallback)(
                                    (e) => {
                                        !_ && z.isDraggingInternally && C.onDragEnd && ey.hasTarget(R, e.target) && C.onDragEnd(e), (z.isDraggingInternally = !1);
                                    },
                                    [_, C.onDragEnd]
                                ),
                                onFocus: (0, u.useCallback)(
                                    (e) => {
                                        if (!_ && !z.isUpdatingSelection && ey.hasEditableTarget(R, e.target) && !tP(e, C.onFocus)) {
                                            var t = ey.toDOMNode(R, R),
                                                n = ey.findDocumentOrShadowRoot(R);
                                            if (((z.latestElement = n.activeElement), eu && e.target !== t)) {
                                                t.focus();
                                                return;
                                            }
                                            D.set(R, !0);
                                        }
                                    },
                                    [_, C.onFocus]
                                ),
                                onKeyDown: (0, u.useCallback)(
                                    (e) => {
                                        if (!_ && ey.hasEditableTarget(R, e.target)) {
                                            null == J || J.handleKeyDown(e);
                                            var { nativeEvent: t } = e;
                                            if ((ey.isComposing(R) && !1 === t.isComposing && (x.set(R, !1), w(!1)), !(tP(e, C.onKeyDown) || ey.isComposing(R)))) {
                                                var { selection: n } = R,
                                                    i = R.children[null !== n ? n.focus.path[0] : 0],
                                                    a = 'rtl' === r()(d.NB.string(i));
                                                if (e2.isRedo(t)) {
                                                    e.preventDefault();
                                                    var s = R;
                                                    'function' == typeof s.redo && s.redo();
                                                    return;
                                                }
                                                if (e2.isUndo(t)) {
                                                    e.preventDefault();
                                                    var o = R;
                                                    'function' == typeof o.undo && o.undo();
                                                    return;
                                                }
                                                if (e2.isMoveLineBackward(t)) {
                                                    e.preventDefault(),
                                                        d.YR.move(R, {
                                                            unit: 'line',
                                                            reverse: !0
                                                        });
                                                    return;
                                                }
                                                if (e2.isMoveLineForward(t)) {
                                                    e.preventDefault(), d.YR.move(R, { unit: 'line' });
                                                    return;
                                                }
                                                if (e2.isExtendLineBackward(t)) {
                                                    e.preventDefault(),
                                                        d.YR.move(R, {
                                                            unit: 'line',
                                                            edge: 'focus',
                                                            reverse: !0
                                                        });
                                                    return;
                                                }
                                                if (e2.isExtendLineForward(t)) {
                                                    e.preventDefault(),
                                                        d.YR.move(R, {
                                                            unit: 'line',
                                                            edge: 'focus'
                                                        });
                                                    return;
                                                }
                                                if (e2.isMoveBackward(t)) {
                                                    e.preventDefault(), n && d.e6.isCollapsed(n) ? d.YR.move(R, { reverse: !a }) : d.YR.collapse(R, { edge: 'start' });
                                                    return;
                                                }
                                                if (e2.isMoveForward(t)) {
                                                    e.preventDefault(), n && d.e6.isCollapsed(n) ? d.YR.move(R, { reverse: a }) : d.YR.collapse(R, { edge: 'end' });
                                                    return;
                                                }
                                                if (e2.isMoveWordBackward(t)) {
                                                    e.preventDefault(),
                                                        n && d.e6.isExpanded(n) && d.YR.collapse(R, { edge: 'focus' }),
                                                        d.YR.move(R, {
                                                            unit: 'word',
                                                            reverse: !a
                                                        });
                                                    return;
                                                }
                                                if (e2.isMoveWordForward(t)) {
                                                    e.preventDefault(),
                                                        n && d.e6.isExpanded(n) && d.YR.collapse(R, { edge: 'focus' }),
                                                        d.YR.move(R, {
                                                            unit: 'word',
                                                            reverse: a
                                                        });
                                                    return;
                                                }
                                                if (ev) {
                                                    if ((ef || ec) && n && (e2.isDeleteBackward(t) || e2.isDeleteForward(t)) && d.e6.isCollapsed(n)) {
                                                        var l = d.NB.parent(R, n.anchor.path);
                                                        if (d.W_.isElement(l) && d.ML.isVoid(R, l) && (d.ML.isInline(R, l) || d.ML.isBlock(R, l))) {
                                                            e.preventDefault(), d.ML.deleteBackward(R, { unit: 'block' });
                                                            return;
                                                        }
                                                    }
                                                } else {
                                                    if (e2.isBold(t) || e2.isItalic(t) || e2.isTransposeCharacter(t)) {
                                                        e.preventDefault();
                                                        return;
                                                    }
                                                    if (e2.isSoftBreak(t)) {
                                                        e.preventDefault(), d.ML.insertSoftBreak(R);
                                                        return;
                                                    }
                                                    if (e2.isSplitBlock(t)) {
                                                        e.preventDefault(), d.ML.insertBreak(R);
                                                        return;
                                                    }
                                                    if (e2.isDeleteBackward(t)) {
                                                        e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(R, { direction: 'backward' }) : d.ML.deleteBackward(R);
                                                        return;
                                                    }
                                                    if (e2.isDeleteForward(t)) {
                                                        e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(R, { direction: 'forward' }) : d.ML.deleteForward(R);
                                                        return;
                                                    }
                                                    if (e2.isDeleteLineBackward(t)) {
                                                        e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(R, { direction: 'backward' }) : d.ML.deleteBackward(R, { unit: 'line' });
                                                        return;
                                                    }
                                                    if (e2.isDeleteLineForward(t)) {
                                                        e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(R, { direction: 'forward' }) : d.ML.deleteForward(R, { unit: 'line' });
                                                        return;
                                                    }
                                                    if (e2.isDeleteWordBackward(t)) {
                                                        e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(R, { direction: 'backward' }) : d.ML.deleteBackward(R, { unit: 'word' });
                                                        return;
                                                    }
                                                    if (e2.isDeleteWordForward(t)) {
                                                        e.preventDefault(), n && d.e6.isExpanded(n) ? d.ML.deleteFragment(R, { direction: 'forward' }) : d.ML.deleteForward(R, { unit: 'word' });
                                                        return;
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    [_, C.onKeyDown]
                                ),
                                onPaste: (0, u.useCallback)(
                                    (e) => {
                                        !_ && ey.hasEditableTarget(R, e.target) && !tP(e, C.onPaste) && (!ev || Q(e.nativeEvent) || ec) && (e.preventDefault(), ey.insertData(R, e.clipboardData));
                                    },
                                    [_, C.onPaste]
                                )
                            }
                        ),
                        u.createElement(tR, {
                            decorations: et,
                            node: R,
                            renderElement: p,
                            renderPlaceholder: m,
                            renderLeaf: h,
                            selection: R.selection
                        })
                    )
                )
            )
        );
    },
    tD = (e) => {
        var { attributes: t, children: n } = e;
        return u.createElement('span', Object.assign({}, t), n, el && u.createElement('br', null));
    },
    tx = () => [],
    tL = (e, t) => {
        if (t.getBoundingClientRect && (!e.selection || (e.selection && d.e6.isCollapsed(e.selection)))) {
            var n = t.startContainer.parentElement;
            (n.getBoundingClientRect = t.getBoundingClientRect.bind(t)), (0, c.Z)(n, { scrollMode: 'if-needed' }), delete n.getBoundingClientRect;
        }
    },
    tP = (e, t) => {
        if (!t) return !1;
        var n = t(e);
        return null != n ? n : e.isDefaultPrevented() || e.isPropagationStopped();
    },
    tw = (e, t) => {
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
    tB = (e, t) => e === t;
function tZ(e) {
    var t = (0, u.useRef)([]).current,
        n = (0, u.useRef)({ editor: e }).current,
        i = (0, u.useCallback)((e) => {
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
                )
            }),
            [t, n]
        ),
        onChange: i
    };
}
var tF = ['editor', 'children', 'onChange', 'value'],
    tV = (e) => {
        var { editor: t, children: n, onChange: i, value: r } = e,
            a = g(e, tF),
            s = (0, u.useRef)(!1),
            [o, l] = u.useState(() => {
                if (!d.NB.isNodeList(r)) throw Error('[Slate] value is invalid! Expected a list of elements but got: '.concat(d.o4.stringify(r)));
                if (!d.ML.isEditor(t)) throw Error('[Slate] editor is invalid! You passed: '.concat(d.o4.stringify(t)));
                return (
                    (t.children = r),
                    Object.assign(t, a),
                    {
                        v: 0,
                        editor: t
                    }
                );
            }),
            { selectorContext: c, onChange: f } = tZ(t),
            _ = (0, u.useCallback)(() => {
                i && i(t.children),
                    l((e) => ({
                        v: e.v + 1,
                        editor: t
                    })),
                    f(t);
            }, [i]);
        (0, u.useEffect)(
            () => (
                P.set(t, _),
                () => {
                    P.set(t, () => {}), (s.current = !0);
                }
            ),
            [_]
        );
        var [p, h] = (0, u.useState)(ey.isFocused(t));
        return (
            (0, u.useEffect)(() => {
                h(ey.isFocused(t));
            }),
            eC(() => {
                var e = () => h(ey.isFocused(t));
                return ea
                    ? (document.addEventListener('focusin', e),
                      document.addEventListener('focusout', e),
                      () => {
                          document.removeEventListener('focusin', e), document.removeEventListener('focusout', e);
                      })
                    : (document.addEventListener('focus', e, !0),
                      document.addEventListener('blur', e, !0),
                      () => {
                          document.removeEventListener('focus', e, !0), document.removeEventListener('blur', e, !0);
                      });
            }, []),
            u.createElement(tG.Provider, { value: c }, u.createElement(eq.Provider, { value: o }, u.createElement(eL.Provider, { value: o.editor }, u.createElement(tM.Provider, { value: p }, n))))
        );
    },
    tj = (e, t) => {
        var n = (t.top + t.bottom) / 2;
        return e.top <= n && e.bottom >= n;
    },
    tH = (e, t, n) => {
        var i = ey.toDOMRange(e, t).getBoundingClientRect(),
            r = ey.toDOMRange(e, n).getBoundingClientRect();
        return tj(i, r) && tj(r, i);
    },
    tY = (e, t) => {
        var n = d.ML.range(e, d.e6.end(t)),
            i = Array.from(d.ML.positions(e, { at: t })),
            r = 0,
            a = i.length,
            s = Math.floor(a / 2);
        if (tH(e, d.ML.range(e, i[r]), n)) return d.ML.range(e, i[r], n);
        if (i.length < 2) return d.ML.range(e, i[i.length - 1], n);
        for (; s !== i.length && s !== r; ) tH(e, d.ML.range(e, i[s]), n) ? (a = s) : (r = s), (s = Math.floor((r + a) / 2));
        return d.ML.range(e, i[a], n);
    };
function tW(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function tK(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tW(Object(n), !0).forEach(function (t) {
                  h(e, t, n[t]);
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
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'x-slate-fragment',
            n = e,
            { apply: i, onChange: r, deleteBackward: a, addMark: s, removeMark: o } = n;
        return (
            R.set(n, new WeakMap()),
            (n.addMark = (e, t) => {
                var i, r;
                null === (i = w.get(n)) || void 0 === i || i(), !M.get(n) && null !== (r = U.get(n)) && void 0 !== r && r.length && M.set(n, null), k.delete(n), s(e, t);
            }),
            (n.removeMark = (e) => {
                var t;
                !M.get(n) && null !== (t = U.get(n)) && void 0 !== t && t.length && M.set(n, null), k.delete(n), o(e);
            }),
            (n.deleteBackward = (e) => {
                if ('line' !== e) return a(e);
                if (n.selection && d.e6.isCollapsed(n.selection)) {
                    var t = d.ML.above(n, {
                        match: (e) => d.W_.isElement(e) && d.ML.isBlock(n, e),
                        at: n.selection
                    });
                    if (t) {
                        var [, i] = t,
                            r = d.ML.range(n, i, n.selection.anchor),
                            s = tY(n, r);
                        d.e6.isCollapsed(s) || d.YR.delete(n, { at: s });
                    }
                }
            }),
            (n.apply = (e) => {
                var t,
                    r = [],
                    a = U.get(n);
                if (null != a && a.length) {
                    var s = a.map((t) => tl(t, e)).filter(Boolean);
                    U.set(n, s);
                }
                var o = B.get(n);
                o && B.set(n, to(n, o, e));
                var l = G.get(n);
                if (null != l && l.at) {
                    var u = d.E9.isPoint(null == l ? void 0 : l.at) ? ts(n, l.at, e) : to(n, l.at, e);
                    G.set(n, u ? tK(tK({}, l), {}, { at: u }) : null);
                }
                switch (e.type) {
                    case 'insert_text':
                    case 'remove_text':
                    case 'set_node':
                    case 'split_node':
                        r.push(...tq(n, e.path));
                        break;
                    case 'set_selection':
                        null === (t = L.get(n)) || void 0 === t || t.unref(), L.delete(n);
                        break;
                    case 'insert_node':
                    case 'remove_node':
                        r.push(...tq(n, d.y$.parent(e.path)));
                        break;
                    case 'merge_node':
                        r.push(...tq(n, d.y$.previous(e.path)));
                        break;
                    case 'move_node':
                        r.push(...tq(n, d.y$.common(d.y$.parent(e.path), d.y$.parent(e.newPath))));
                }
                for (var [c, f] of (i(e), r)) {
                    var [_] = d.ML.node(n, c);
                    C.set(_, f);
                }
            }),
            (n.setFragmentData = (e) => {
                var { selection: i } = n;
                if (i) {
                    var [r, a] = d.e6.edges(i),
                        s = d.ML.void(n, { at: r.path }),
                        o = d.ML.void(n, { at: a.path });
                    if (!d.e6.isCollapsed(i) || s) {
                        var l = ey.toDOMRange(n, i),
                            u = l.cloneContents(),
                            c = u.childNodes[0];
                        if (
                            (u.childNodes.forEach((e) => {
                                e.textContent && '' !== e.textContent.trim() && (c = e);
                            }),
                            o)
                        ) {
                            var [f] = o,
                                _ = l.cloneRange(),
                                p = ey.toDOMNode(n, f);
                            _.setEndAfter(p), (u = _.cloneContents());
                        }
                        if (
                            (s && (c = u.querySelector('[data-slate-spacer]')),
                            Array.from(u.querySelectorAll('[data-slate-zero-width]')).forEach((e) => {
                                var t = 'n' === e.getAttribute('data-slate-zero-width');
                                e.textContent = t ? '\n' : '';
                            }),
                            q(c))
                        ) {
                            var h = c.ownerDocument.createElement('span');
                            (h.style.whiteSpace = 'pre'), h.appendChild(c), u.appendChild(h), (c = h);
                        }
                        var m = JSON.stringify(n.getFragment()),
                            g = window.btoa(encodeURIComponent(m));
                        c.setAttribute('data-slate-fragment', g), e.setData('application/'.concat(t), g);
                        var E = u.ownerDocument.createElement('div');
                        return E.appendChild(u), E.setAttribute('hidden', 'true'), u.ownerDocument.body.appendChild(E), e.setData('text/html', E.innerHTML), e.setData('text/plain', et(E)), u.ownerDocument.body.removeChild(E), e;
                    }
                }
            }),
            (n.insertData = (e) => {
                n.insertFragmentData(e) || n.insertTextData(e);
            }),
            (n.insertFragmentData = (e) => {
                var i = e.getData('application/'.concat(t)) || ei(e);
                if (i) {
                    var r = JSON.parse(decodeURIComponent(window.atob(i)));
                    return n.insertFragment(r), !0;
                }
                return !1;
            }),
            (n.insertTextData = (e) => {
                var t = e.getData('text/plain');
                if (t) {
                    var i = t.split(/\r\n|\r|\n/),
                        r = !1;
                    for (var a of i) r && d.YR.splitNodes(n, { always: !0 }), n.insertText(a), (r = !0);
                    return !0;
                }
                return !1;
            }),
            (n.onChange = (e) => {
                p.unstable_batchedUpdates(() => {
                    var t = P.get(n);
                    t && t(), r(e);
                });
            }),
            n
        );
    },
    tq = (e, t) => {
        var n = [];
        for (var [i, r] of d.ML.levels(e, { at: t })) {
            var a = ey.findKey(e, i);
            n.push([r, a]);
        }
        return n;
    };
