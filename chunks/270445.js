r.d(n, {
    BU: function () {
        return tX;
    },
    CX: function () {
        return tD;
    },
    F3: function () {
        return eT;
    },
    UE: function () {
        return tU;
    },
    _7: function () {
        return eP;
    },
    mH: function () {
        return tH;
    },
    vt: function () {
        return eW;
    }
});
var i = r(653603),
    a = r.n(i),
    s = r(889678),
    o = r.n(s),
    l = r(123763),
    u = r.n(l),
    c = r(192379),
    d = r(367989),
    f = r(327432),
    _ = r(690096),
    h = r(247187),
    p = r(995295);
function m(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function g(e, n) {
    if (null == e) return {};
    var r,
        i,
        a = {},
        s = Object.keys(e);
    for (i = 0; i < s.length; i++) (r = s[i]), !(n.indexOf(r) >= 0) && (a[r] = e[r]);
    return a;
}
function E(e, n) {
    if (null == e) return {};
    var r,
        i,
        a = g(e, n);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++) {
            if (((r = s[i]), !(n.indexOf(r) >= 0))) Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        }
    }
    return a;
}
var v = 0;
class I {
    constructor() {
        this.id = ''.concat(v++);
    }
}
var T = new WeakMap(),
    b = new WeakMap(),
    y = new WeakMap(),
    S = new WeakMap(),
    A = new WeakMap(),
    N = new WeakMap(),
    C = new WeakMap(),
    R = new WeakMap(),
    O = new WeakMap(),
    D = new WeakMap(),
    L = new WeakMap(),
    x = new WeakMap(),
    w = new WeakMap(),
    P = new WeakMap(),
    M = new WeakMap(),
    k = new WeakMap(),
    U = new WeakMap(),
    B = new WeakMap(),
    G = new WeakMap(),
    Z = new WeakMap(),
    F = new WeakMap(),
    V = Symbol('placeholder'),
    j = Symbol('mark-placeholder'),
    H = globalThis.Text,
    Y = (e) => (e && e.ownerDocument && e.ownerDocument.defaultView) || null,
    W = (e) => z(e) && 8 === e.nodeType,
    K = (e) => z(e) && 1 === e.nodeType,
    z = (e) => {
        var n = Y(e);
        return !!n && e instanceof n.Node;
    },
    q = (e) => {
        var n = e && e.anchorNode && Y(e.anchorNode);
        return !!n && e instanceof n.Selection;
    },
    Q = (e) => z(e) && 3 === e.nodeType,
    X = (e) => e.clipboardData && '' !== e.clipboardData.getData('text/plain') && 1 === e.clipboardData.types.length,
    J = (e) => {
        var [n, r] = e;
        if (K(n) && n.childNodes.length) {
            var i = r === n.childNodes.length,
                a = i ? r - 1 : r;
            for ([n, a] = ee(n, a, i ? 'backward' : 'forward'), i = a < r; K(n) && n.childNodes.length; ) {
                var s = i ? n.childNodes.length - 1 : 0;
                n = et(n, s, i ? 'backward' : 'forward');
            }
            r = i && null != n.textContent ? n.textContent.length : 0;
        }
        return [n, r];
    },
    $ = (e) => {
        for (var n = e && e.parentNode; n; ) {
            if ('[object ShadowRoot]' === n.toString()) return !0;
            n = n.parentNode;
        }
        return !1;
    },
    ee = (e, n, r) => {
        for (var { childNodes: i } = e, a = i[n], s = n, o = !1, l = !1; (W(a) || (K(a) && 0 === a.childNodes.length) || (K(a) && 'false' === a.getAttribute('contenteditable'))) && (!o || !l); ) {
            if (s >= i.length) {
                (o = !0), (s = n - 1), (r = 'backward');
                continue;
            }
            if (s < 0) {
                (l = !0), (s = n + 1), (r = 'forward');
                continue;
            }
            (a = i[s]), (n = s), (s += 'forward' === r ? 1 : -1);
        }
        return [a, n];
    },
    et = (e, n, r) => {
        var [i] = ee(e, n, r);
        return i;
    },
    en = (e) => {
        var n = '';
        if (Q(e) && e.nodeValue) return e.nodeValue;
        if (K(e)) {
            for (var r of Array.from(e.childNodes)) n += en(r);
            var i = getComputedStyle(e).getPropertyValue('display');
            ('block' === i || 'list' === i || 'BR' === e.tagName) && (n += '\n');
        }
        return n;
    },
    er = /data-slate-fragment="(.+?)"/m,
    ei = (e) => {
        var [, n] = e.getData('text/html').match(er) || [];
        return n;
    },
    ea = (e, n, r) => {
        var { target: i } = n;
        if (K(i) && i.matches('[contentEditable="false"]')) return !1;
        var { document: a } = eT.getWindow(e);
        if (a.contains(i)) return eT.hasDOMNode(e, i, { editable: !0 });
        var s = r.find((e) => {
            var { addedNodes: n, removedNodes: r } = e;
            for (var a of n) if (a === i || a.contains(i)) return !0;
            for (var s of r) if (s === i || s.contains(i)) return !0;
        });
        return !!s && s !== n && ea(e, s, r);
    },
    es = parseInt(c.version.split('.')[0], 10) >= 17,
    eo = 'undefined' != typeof navigator && 'undefined' != typeof window && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
    el = 'undefined' != typeof navigator && /Mac OS X/.test(navigator.userAgent),
    eu = 'undefined' != typeof navigator && /Android/.test(navigator.userAgent),
    ec = 'undefined' != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
    ed = 'undefined' != typeof navigator && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
    ef = 'undefined' != typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
    e_ = 'undefined' != typeof navigator && /Chrome/i.test(navigator.userAgent),
    eh = 'undefined' != typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
    ep = eu && 'undefined' != typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
    em = 'undefined' != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
    eg = 'undefined' != typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
    eE = 'undefined' != typeof navigator && /.*Wechat/.test(navigator.userAgent),
    ev = !!('undefined' != typeof window && void 0 !== window.document && void 0 !== window.document.createElement),
    eI = (!eh || !ep) && !ef && 'undefined' != typeof globalThis && globalThis.InputEvent && 'function' == typeof globalThis.InputEvent.prototype.getTargetRanges,
    eT = {
        isComposing: (e) => !!x.get(e),
        getWindow(e) {
            var n = y.get(e);
            if (!n) throw Error('Unable to find a host window element for this editor');
            return n;
        },
        findKey(e, n) {
            var r = R.get(n);
            return !r && ((r = new I()), R.set(n, r)), r;
        },
        findPath(e, n) {
            for (var r = [], i = n; ; ) {
                var a = b.get(i);
                if (null == a) {
                    if (f.ML.isEditor(i)) return r;
                    break;
                }
                var s = T.get(i);
                if (null == s) break;
                r.unshift(s), (i = a);
            }
            throw Error('Unable to find the path for Slate node: '.concat(f.o4.stringify(n)));
        },
        findDocumentOrShadowRoot(e) {
            var n = eT.toDOMNode(e, e),
                r = n.getRootNode();
            return (r instanceof Document || r instanceof ShadowRoot) && null != r.getSelection ? r : n.ownerDocument;
        },
        isFocused: (e) => !!L.get(e),
        isReadOnly: (e) => !!D.get(e),
        blur(e) {
            var n = eT.toDOMNode(e, e),
                r = eT.findDocumentOrShadowRoot(e);
            L.set(e, !1), r.activeElement === n && n.blur();
        },
        focus(e) {
            var n = eT.toDOMNode(e, e),
                r = eT.findDocumentOrShadowRoot(e);
            L.set(e, !0), r.activeElement !== n && n.focus({ preventScroll: !0 });
        },
        deselect(e) {
            var { selection: n } = e,
                r = eT.findDocumentOrShadowRoot(e).getSelection();
            r && r.rangeCount > 0 && r.removeAllRanges(), n && f.YR.deselect(e);
        },
        hasDOMNode(e, n) {
            var r,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { editable: a = !1 } = i,
                s = eT.toDOMNode(e, e);
            try {
                r = K(n) ? n : n.parentElement;
            } catch (e) {
                if (!e.message.includes('Permission denied to access property "nodeType"')) throw e;
            }
            return !!r && r.closest('[data-slate-editor]') === s && (!a || !!r.isContentEditable || ('boolean' == typeof r.isContentEditable && r.closest('[contenteditable="false"]') === s) || !!r.getAttribute('data-slate-zero-width'));
        },
        insertData(e, n) {
            e.insertData(n);
        },
        insertFragmentData: (e, n) => e.insertFragmentData(n),
        insertTextData: (e, n) => e.insertTextData(n),
        setFragmentData(e, n, r) {
            e.setFragmentData(n, r);
        },
        toDOMNode(e, n) {
            var r = O.get(e),
                i = f.ML.isEditor(n) ? S.get(e) : null == r ? void 0 : r.get(eT.findKey(e, n));
            if (!i) throw Error('Cannot resolve a DOM node from Slate node: '.concat(f.o4.stringify(n)));
            return i;
        },
        toDOMPoint(e, n) {
            var [r] = f.ML.node(e, n.path),
                i = eT.toDOMNode(e, r);
            f.ML.void(e, { at: n }) &&
                (n = {
                    path: n.path,
                    offset: 0
                });
            for (var a = '[data-slate-string], [data-slate-zero-width]', s = Array.from(i.querySelectorAll(a)), o = 0, l = 0; l < s.length; l++) {
                var u = s[l],
                    c = u.childNodes[0];
                if (null != c && null != c.textContent) {
                    var { length: d } = c.textContent,
                        _ = u.getAttribute('data-slate-length'),
                        h = o + (null == _ ? d : parseInt(_, 10)),
                        p = s[l + 1];
                    if (n.offset === h && null != p && p.hasAttribute('data-slate-mark-placeholder')) {
                        var m,
                            g,
                            E = p.childNodes[0];
                        m = [E instanceof H ? E : p, null !== (g = p.textContent) && void 0 !== g && g.startsWith('\uFEFF') ? 1 : 0];
                        break;
                    }
                    if (n.offset <= h) {
                        m = [c, Math.min(d, Math.max(0, n.offset - o))];
                        break;
                    }
                    o = h;
                }
            }
            if (!m) throw Error('Cannot resolve a DOM point from Slate point: '.concat(f.o4.stringify(n)));
            return m;
        },
        toDOMRange(e, n) {
            var { anchor: r, focus: i } = n,
                a = f.e6.isBackward(n),
                s = eT.toDOMPoint(e, r),
                o = f.e6.isCollapsed(n) ? s : eT.toDOMPoint(e, i),
                l = eT.getWindow(e).document.createRange(),
                [u, c] = a ? o : s,
                [d, _] = a ? s : o,
                h = !!(K(u) ? u : u.parentElement).getAttribute('data-slate-zero-width'),
                p = !!(K(d) ? d : d.parentElement).getAttribute('data-slate-zero-width');
            return l.setStart(u, h ? 1 : c), l.setEnd(d, p ? 1 : _), l;
        },
        toSlateNode(e, n) {
            var r = K(n) ? n : n.parentElement;
            r && !r.hasAttribute('data-slate-node') && (r = r.closest('[data-slate-node]'));
            var i = r ? N.get(r) : null;
            if (!i) throw Error('Cannot resolve a Slate node from DOM node: '.concat(r));
            return i;
        },
        findEventRange(e, n) {
            'nativeEvent' in n && (n = n.nativeEvent);
            var r,
                { clientX: i, clientY: a, target: s } = n;
            if (null == i || null == a) throw Error('Cannot resolve a Slate range from a DOM event: '.concat(n));
            var o = eT.toSlateNode(e, n.target),
                l = eT.findPath(e, o);
            if (f.W_.isElement(o) && f.ML.isVoid(e, o)) {
                var u = s.getBoundingClientRect(),
                    c = e.isInline(o) ? i - u.left < u.left + u.width - i : a - u.top < u.top + u.height - a,
                    d = f.ML.point(e, l, { edge: c ? 'start' : 'end' }),
                    _ = c ? f.ML.before(e, d) : f.ML.after(e, d);
                if (_) return f.ML.range(e, _);
            }
            var { document: h } = eT.getWindow(e);
            if (h.caretRangeFromPoint) r = h.caretRangeFromPoint(i, a);
            else {
                var p = h.caretPositionFromPoint(i, a);
                p && ((r = h.createRange()).setStart(p.offsetNode, p.offset), r.setEnd(p.offsetNode, p.offset));
            }
            if (!r) throw Error('Cannot resolve a Slate range from a DOM event: '.concat(n));
            return eT.toSlateRange(e, r, {
                exactMatch: !1,
                suppressThrow: !1
            });
        },
        toSlatePoint(e, n, r) {
            var { exactMatch: i, suppressThrow: a } = r,
                [s, o] = i ? n : J(n),
                l = s.parentNode,
                u = null,
                c = 0;
            if (l) {
                var d,
                    _,
                    h = eT.toDOMNode(e, e),
                    p = l.closest('[data-slate-void="true"]'),
                    m = p && h.contains(p) ? p : null,
                    g = l.closest('[data-slate-leaf]'),
                    E = null;
                if (g) {
                    if ((u = g.closest('[data-slate-node="text"]'))) {
                        var v = eT.getWindow(e).document.createRange();
                        v.setStart(u, 0), v.setEnd(s, o);
                        var I = v.cloneContents();
                        [...Array.prototype.slice.call(I.querySelectorAll('[data-slate-zero-width]')), ...Array.prototype.slice.call(I.querySelectorAll('[contenteditable=false]'))].forEach((e) => {
                            if (eu && !i && e.hasAttribute('data-slate-zero-width') && e.textContent.length > 0 && '\uFEFF' !== e.textContext) {
                                e.textContent.startsWith('\uFEFF') && (e.textContent = e.textContent.slice(1));
                                return;
                            }
                            e.parentNode.removeChild(e);
                        }),
                            (c = I.textContent.length),
                            (E = u);
                    }
                } else if (m) {
                    for (var T = m.querySelectorAll('[data-slate-leaf]'), b = 0; b < T.length; b++) {
                        var y = T[b];
                        if (eT.hasDOMNode(e, y)) {
                            g = y;
                            break;
                        }
                    }
                    g
                        ? ((u = g.closest('[data-slate-node="text"]')),
                          (c = (E = g).textContent.length),
                          E.querySelectorAll('[data-slate-zero-width]').forEach((e) => {
                              c -= e.textContent.length;
                          }))
                        : (c = 1);
                }
                E && c === E.textContent.length && eu && 'z' === E.getAttribute('data-slate-zero-width') && null !== (d = E.textContent) && void 0 !== d && d.startsWith('\uFEFF') && (l.hasAttribute('data-slate-zero-width') || (ec && null !== (_ = E.textContent) && void 0 !== _ && _.endsWith('\n\n'))) && c--;
            }
            if (eu && !u && !i) {
                var S = l.hasAttribute('data-slate-node') ? l : l.closest('[data-slate-node]');
                if (S && eT.hasDOMNode(e, S, { editable: !0 })) {
                    var A = eT.toSlateNode(e, S),
                        { path: N, offset: C } = f.ML.start(e, eT.findPath(e, A));
                    return (
                        !S.querySelector('[data-slate-leaf]') && (C = o),
                        {
                            path: N,
                            offset: C
                        }
                    );
                }
            }
            if (!u) {
                if (a) return null;
                throw Error('Cannot resolve a Slate point from DOM point: '.concat(n));
            }
            var R = eT.toSlateNode(e, u);
            return {
                path: eT.findPath(e, R),
                offset: c
            };
        },
        toSlateRange(e, n, r) {
            var i,
                a,
                s,
                o,
                l,
                u,
                { exactMatch: c, suppressThrow: d } = r;
            if (((q(n) ? n.anchorNode : n.startContainer) && (q(n) ? ((i = n.anchorNode), (a = n.anchorOffset), (s = n.focusNode), (o = n.focusOffset), (l = e_ && $(i) ? n.anchorNode === n.focusNode && n.anchorOffset === n.focusOffset : n.isCollapsed)) : ((i = n.startContainer), (a = n.startOffset), (s = n.endContainer), (o = n.endOffset), (l = n.collapsed))), null == i || null == s || null == a || null == o)) throw Error('Cannot resolve a Slate range from DOM range: '.concat(n));
            'getAttribute' in s && 'false' === s.getAttribute('contenteditable') && ((s = i), (o = (null === (u = i.textContent) || void 0 === u ? void 0 : u.length) || 0));
            var _ = eT.toSlatePoint(e, [i, a], {
                exactMatch: c,
                suppressThrow: d
            });
            if (!_) return null;
            var h = l
                ? _
                : eT.toSlatePoint(e, [s, o], {
                      exactMatch: c,
                      suppressThrow: d
                  });
            if (!h) return null;
            if (ec && !l && i !== s) {
                var p = f.ML.isEnd(e, _, _.path),
                    m = f.ML.isStart(e, h, h.path);
                p && (_ = f.ML.after(e, _) || _), m && (h = f.ML.before(e, h) || h);
            }
            var g = {
                anchor: _,
                focus: h
            };
            return (
                f.e6.isExpanded(g) &&
                    f.e6.isForward(g) &&
                    K(s) &&
                    f.ML.void(e, {
                        at: g.focus,
                        mode: 'highest'
                    }) &&
                    (g = f.ML.unhangRange(e, g, { voids: !0 })),
                g
            );
        },
        hasRange(e, n) {
            var { anchor: r, focus: i } = n;
            return f.ML.hasPath(e, r.path) && f.ML.hasPath(e, i.path);
        },
        hasTarget: (e, n) => z(n) && eT.hasDOMNode(e, n),
        hasEditableTarget: (e, n) => z(n) && eT.hasDOMNode(e, n, { editable: !0 }),
        hasSelectableTarget: (e, n) => eT.hasEditableTarget(e, n) || eT.isTargetInsideNonReadonlyVoid(e, n),
        isTargetInsideNonReadonlyVoid(e, n) {
            if (D.get(e)) return !1;
            var r = eT.hasTarget(e, n) && eT.toSlateNode(e, n);
            return f.W_.isElement(r) && f.ML.isVoid(e, r);
        },
        androidScheduleFlush(e) {
            var n;
            null === (n = M.get(e)) || void 0 === n || n();
        },
        androidPendingDiffs: (e) => B.get(e)
    },
    eb = ['anchor', 'focus'],
    ey = ['anchor', 'focus'],
    eS = (e, n) => Object.keys(e).length === Object.keys(n).length && Object.keys(e).every((r) => n.hasOwnProperty(r) && e[r] === n[r]),
    eA = (e, n) => {
        var r = E(e, eb),
            i = E(n, ey);
        return e[V] === n[V] && eS(r, i);
    },
    eN = (e, n) => {
        if (e.length !== n.length) return !1;
        for (var r = 0; r < e.length; r++) {
            var i = e[r],
                a = n[r];
            if (!f.e6.equals(i, a) || !eA(i, a)) return !1;
        }
        return !0;
    },
    eC = (e, n) => {
        if (e.length !== n.length) return !1;
        for (var r = 0; r < e.length; r++) {
            var i = e[r],
                a = n[r];
            if (i.anchor.offset !== a.anchor.offset || i.focus.offset !== a.focus.offset || !eA(i, a)) return !1;
        }
        return !0;
    },
    eR = ev ? c.useLayoutEffect : c.useEffect,
    eO = (e) => {
        var { isLast: n, leaf: r, parent: i, text: a } = e,
            s = eP(),
            o = eT.findPath(s, a),
            l = f.y$.parent(o),
            u = !0 === r[j];
        return s.isVoid(i)
            ? c.createElement(ex, { length: f.NB.string(i).length })
            : '' !== r.text || i.children[i.children.length - 1] !== a || s.isInline(i) || '' !== f.ML.string(s, l)
              ? '' === r.text
                  ? c.createElement(ex, { isMarkPlaceholder: u })
                  : n && '\n' === r.text.slice(-1)
                    ? c.createElement(eD, {
                          isTrailing: !0,
                          text: r.text
                      })
                    : c.createElement(eD, { text: r.text })
              : c.createElement(ex, {
                    isLineBreak: !0,
                    isMarkPlaceholder: u
                });
    },
    eD = (e) => {
        var { text: n, isTrailing: r = !1 } = e,
            i = (0, c.useRef)(null),
            a = () => ''.concat(null != n ? n : '').concat(r ? '\n' : ''),
            [s] = (0, c.useState)(a);
        return (
            eR(() => {
                var e = a();
                i.current && i.current.textContent !== e && (i.current.textContent = e);
            }),
            c.createElement(eL, { ref: i }, s)
        );
    },
    eL = (0, c.memo)(
        (0, c.forwardRef)((e, n) =>
            c.createElement(
                'span',
                {
                    'data-slate-string': !0,
                    ref: n
                },
                e.children
            )
        )
    ),
    ex = (e) => {
        var { length: n = 0, isLineBreak: r = !1, isMarkPlaceholder: i = !1 } = e,
            a = {
                'data-slate-zero-width': r ? 'n' : 'z',
                'data-slate-length': n
            };
        return i && (a['data-slate-mark-placeholder'] = !0), c.createElement('span', Object.assign({}, a), eu && r ? null : '\uFEFF', r ? c.createElement('br', null) : null);
    },
    ew = (0, c.createContext)(null),
    eP = () => {
        var e = (0, c.useContext)(ew);
        if (!e) throw Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
        return e;
    },
    eM = (e) => {
        var { leaf: n, isLast: r, text: i, parent: a, renderPlaceholder: s, renderLeaf: o = (e) => c.createElement(eU, Object.assign({}, e)) } = e,
            l = (0, c.useRef)(null),
            u = (0, c.useRef)(null),
            d = eP(),
            f = (0, c.useRef)(null);
        (0, c.useEffect)(
            () => () => {
                f.current && f.current.disconnect();
            },
            []
        ),
            (0, c.useEffect)(() => {
                var e = null == u ? void 0 : u.current;
                if ((e ? A.set(d, e) : A.delete(d), f.current)) f.current.disconnect(), e && f.current.observe(e);
                else if (e) {
                    var n = window.ResizeObserver || _.do;
                    (f.current = new n(() => {
                        var e = F.get(d);
                        null == e || e();
                    })),
                        f.current.observe(e);
                }
                if (!e && l.current) {
                    var r = F.get(d);
                    null == r || r();
                }
                return (
                    (l.current = u.current),
                    () => {
                        A.delete(d);
                    }
                );
            }, [u, n]);
        var h = c.createElement(eO, {
            isLast: r,
            leaf: n,
            parent: a,
            text: i
        });
        if (n[V]) {
            var p = {
                children: n.placeholder,
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
                    ref: u
                }
            };
            h = c.createElement(c.Fragment, null, s(p), h);
        }
        return o({
            attributes: { 'data-slate-leaf': !0 },
            children: h,
            leaf: n,
            text: i
        });
    },
    ek = c.memo(eM, (e, n) => n.parent === e.parent && n.isLast === e.isLast && n.renderLeaf === e.renderLeaf && n.renderPlaceholder === e.renderPlaceholder && n.text === e.text && f.xv.equals(n.leaf, e.leaf) && n.leaf[V] === e.leaf[V]),
    eU = (e) => {
        var { attributes: n, children: r } = e;
        return c.createElement('span', Object.assign({}, n), r);
    },
    eB = (e) => {
        for (var { decorations: n, isLast: r, parent: i, renderPlaceholder: a, renderLeaf: s, text: o } = e, l = eP(), u = (0, c.useRef)(null), d = f.xv.decorations(o, n), _ = eT.findKey(l, o), h = [], p = 0; p < d.length; p++) {
            var m = d[p];
            h.push(
                c.createElement(ek, {
                    isLast: r && p === d.length - 1,
                    key: ''.concat(_.id, '-').concat(p),
                    renderPlaceholder: a,
                    leaf: m,
                    text: o,
                    parent: i,
                    renderLeaf: s
                })
            );
        }
        var g = (0, c.useCallback)(
            (e) => {
                var n = O.get(l);
                e ? (null == n || n.set(_, e), C.set(o, e), N.set(e, o)) : (null == n || n.delete(_), C.delete(o), u.current && N.delete(u.current)), (u.current = e);
            },
            [u, l, _, o]
        );
        return c.createElement(
            'span',
            {
                'data-slate-node': 'text',
                ref: g
            },
            h
        );
    },
    eG = c.memo(eB, (e, n) => n.parent === e.parent && n.isLast === e.isLast && n.renderLeaf === e.renderLeaf && n.renderPlaceholder === e.renderPlaceholder && n.text === e.text && eC(n.decorations, e.decorations)),
    eZ = (e) => {
        var { decorations: n, element: r, renderElement: i = (e) => c.createElement(eV, Object.assign({}, e)), renderPlaceholder: s, renderLeaf: o, selection: l } = e,
            u = eP(),
            d = eq(),
            _ = u.isInline(r),
            h = eT.findKey(u, r),
            p = (0, c.useCallback)(
                (e) => {
                    var n = O.get(u);
                    e ? (null == n || n.set(h, e), C.set(r, e), N.set(e, r)) : (null == n || n.delete(h), C.delete(r));
                },
                [u, h, r]
            ),
            m = eK({
                decorations: n,
                node: r,
                renderElement: i,
                renderPlaceholder: s,
                renderLeaf: o,
                selection: l
            }),
            g = {
                'data-slate-node': 'element',
                ref: p
            };
        if ((_ && (g['data-slate-inline'] = !0), !_ && f.ML.hasInlines(u, r))) {
            var E = f.NB.string(r),
                v = a()(E);
            'rtl' === v && (g.dir = v);
        }
        if (f.ML.isVoid(u, r)) {
            (g['data-slate-void'] = !0), !d && _ && (g.contentEditable = !1);
            var I = _ ? 'span' : 'div',
                [[y]] = f.NB.texts(r);
            (m = c.createElement(
                I,
                {
                    'data-slate-spacer': !0,
                    style: {
                        height: '0',
                        color: 'transparent',
                        outline: 'none',
                        position: 'absolute'
                    }
                },
                c.createElement(eG, {
                    renderPlaceholder: s,
                    decorations: [],
                    isLast: !1,
                    parent: r,
                    text: y
                })
            )),
                T.set(y, 0),
                b.set(y, r);
        }
        return i({
            attributes: g,
            children: m,
            element: r,
            decorations: n
        });
    },
    eF = c.memo(eZ, (e, n) => e.element === n.element && e.renderElement === n.renderElement && e.renderLeaf === n.renderLeaf && e.renderPlaceholder === n.renderPlaceholder && eN(e.decorations, n.decorations) && (e.selection === n.selection || (!!e.selection && !!n.selection && f.e6.equals(e.selection, n.selection)))),
    eV = (e) => {
        var { attributes: n, children: r, element: i } = e,
            a = eP().isInline(i) ? 'span' : 'div';
        return c.createElement(a, Object.assign({}, n, { style: { position: 'relative' } }), r);
    },
    ej = (0, c.createContext)(() => []),
    eH = () => (0, c.useContext)(ej),
    eY = (0, c.createContext)(!1),
    eW = () => (0, c.useContext)(eY),
    eK = (e) => {
        for (var { decorations: n, node: r, renderElement: i, renderPlaceholder: a, renderLeaf: s, selection: o } = e, l = eH(), u = eP(), d = eT.findPath(u, r), _ = [], h = f.W_.isElement(r) && !u.isInline(r) && f.ML.hasInlines(u, r), p = 0; p < r.children.length; p++) {
            var m = d.concat(p),
                g = r.children[p],
                E = eT.findKey(u, g),
                v = f.ML.range(u, m),
                I = o && f.e6.intersection(v, o),
                y = l([g, m]);
            for (var S of n) {
                var A = f.e6.intersection(S, v);
                A && y.push(A);
            }
            f.W_.isElement(g)
                ? _.push(
                      c.createElement(
                          eY.Provider,
                          {
                              key: 'provider-'.concat(E.id),
                              value: !!I
                          },
                          c.createElement(eF, {
                              decorations: y,
                              element: g,
                              key: E.id,
                              renderElement: i,
                              renderPlaceholder: a,
                              renderLeaf: s,
                              selection: I
                          })
                      )
                  )
                : _.push(
                      c.createElement(eG, {
                          decorations: y,
                          key: E.id,
                          isLast: h && p === r.children.length - 1,
                          parent: r,
                          renderPlaceholder: a,
                          renderLeaf: s,
                          text: g
                      })
                  ),
                T.set(g, p),
                b.set(g, r);
        }
        return _;
    },
    ez = (0, c.createContext)(!1),
    eq = () => (0, c.useContext)(ez),
    eQ = (0, c.createContext)(null),
    eX = () => {
        var e = (0, c.useContext)(eQ);
        if (!e) throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
        var { editor: n } = e;
        return n;
    },
    eJ = 3,
    e$ = {
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
    e0 = {
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
    e1 = {
        deleteWordBackward: 'ctrl+shift?+backspace',
        deleteWordForward: 'ctrl+shift?+delete',
        redo: ['ctrl+y', 'ctrl+shift+z']
    },
    e2 = (e) => {
        var n = e$[e],
            r = e0[e],
            i = e1[e],
            a = n && (0, h.isKeyHotkey)(n),
            s = r && (0, h.isKeyHotkey)(r),
            o = i && (0, h.isKeyHotkey)(i);
        return (e) => !!((a && a(e)) || (el && s && s(e)) || (!el && o && o(e))) || !1;
    },
    e3 = {
        isBold: e2('bold'),
        isCompose: e2('compose'),
        isMoveBackward: e2('moveBackward'),
        isMoveForward: e2('moveForward'),
        isDeleteBackward: e2('deleteBackward'),
        isDeleteForward: e2('deleteForward'),
        isDeleteLineBackward: e2('deleteLineBackward'),
        isDeleteLineForward: e2('deleteLineForward'),
        isDeleteWordBackward: e2('deleteWordBackward'),
        isDeleteWordForward: e2('deleteWordForward'),
        isExtendBackward: e2('extendBackward'),
        isExtendForward: e2('extendForward'),
        isExtendLineBackward: e2('extendLineBackward'),
        isExtendLineForward: e2('extendLineForward'),
        isItalic: e2('italic'),
        isMoveLineBackward: e2('moveLineBackward'),
        isMoveLineForward: e2('moveLineForward'),
        isMoveWordBackward: e2('moveWordBackward'),
        isMoveWordForward: e2('moveWordForward'),
        isRedo: e2('redo'),
        isSoftBreak: e2('insertSoftBreak'),
        isSplitBlock: e2('splitBlock'),
        isTransposeCharacter: e2('transposeCharacter'),
        isUndo: e2('undo')
    },
    e4 = (e, n) => {
        var r = [],
            i = () => {
                r = [];
            };
        return {
            registerMutations: (i) => {
                if (!!n.current) {
                    var a = i.filter((n) => ea(e, n, i));
                    r.push(...a);
                }
            },
            restoreDOM: function e() {
                r.length > 0 &&
                    (r.reverse().forEach((e) => {
                        if ('characterData' !== e.type)
                            e.removedNodes.forEach((n) => {
                                e.target.insertBefore(n, e.nextSibling);
                            }),
                                e.addedNodes.forEach((n) => {
                                    e.target.removeChild(n);
                                });
                    }),
                    i());
            },
            clear: i
        };
    },
    e6 = {
        subtree: !0,
        childList: !0,
        characterData: !0,
        characterDataOldValue: !0
    };
class e5 extends c.Component {
    constructor() {
        super(...arguments), (this.context = null), (this.manager = null), (this.mutationObserver = null);
    }
    observe() {
        var e,
            { node: n } = this.props;
        if (!n.current) throw Error('Failed to attach MutationObserver, `node` is undefined');
        null === (e = this.mutationObserver) || void 0 === e || e.observe(n.current, e6);
    }
    componentDidMount() {
        var { receivedUserInput: e } = this.props,
            n = this.context;
        (this.manager = e4(n, e)), (this.mutationObserver = new MutationObserver(this.manager.registerMutations)), this.observe();
    }
    getSnapshotBeforeUpdate() {
        var e,
            n,
            r,
            i,
            a = null === (e = this.mutationObserver) || void 0 === e ? void 0 : e.takeRecords();
        return null != a && a.length && (null === (i = this.manager) || void 0 === i || i.registerMutations(a)), null === (n = this.mutationObserver) || void 0 === n || n.disconnect(), null === (r = this.manager) || void 0 === r || r.restoreDOM(), null;
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
e5.contextType = ew;
var e7 = eu
    ? e5
    : (e) => {
          var { children: n } = e;
          return c.createElement(c.Fragment, null, n);
      };
function e8(e, n) {
    var { path: r, diff: i } = n;
    if (!f.ML.hasPath(e, r)) return !1;
    var a = f.NB.get(e, r);
    if (!f.xv.isText(a)) return !1;
    if (i.start !== a.text.length || 0 === i.text.length) return a.text.slice(i.start, i.start + i.text.length) === i.text;
    var s = f.y$.next(r);
    if (!f.ML.hasPath(e, s)) return !1;
    var o = f.NB.get(e, s);
    return f.xv.isText(o) && o.text.startsWith(i.text);
}
function e9(e) {
    for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
    return r.reduce((e, n) => e.slice(0, n.start) + n.text + e.slice(n.end), e);
}
function te(e, n) {
    for (var r = Math.min(e.length, n.length), i = 0; i < r; i++) if (e.charAt(i) !== n.charAt(i)) return i;
    return r;
}
function tt(e, n, r) {
    for (var i = Math.min(e.length, n.length, r), a = 0; a < i; a++) if (e.charAt(e.length - a - 1) !== n.charAt(n.length - a - 1)) return a;
    return i;
}
function tn(e, n) {
    var { start: r, end: i, text: a } = n,
        s = e.slice(r, i),
        o = te(s, a),
        l = Math.min(s.length - o, a.length - o),
        u = tt(s, a, l),
        c = {
            start: r + o,
            end: i - u,
            text: a.slice(o, a.length - u)
        };
    return c.start === c.end && 0 === c.text.length ? null : c;
}
function tr(e, n, r) {
    var i = Math.min(n.start, r.start),
        a = Math.max(0, Math.min(n.start + n.text.length, r.end) - r.start),
        s = e9(e, n, r),
        o = Math.max(r.start + r.text.length, n.start + n.text.length + (n.start + n.text.length > r.start ? r.text.length : 0) - a),
        l = s.slice(i, o);
    return tn(e, {
        start: i,
        end: Math.max(n.end, r.end - n.text.length + (n.end - n.start)),
        text: l
    });
}
function ti(e) {
    var { path: n, diff: r } = e;
    return {
        anchor: {
            path: n,
            offset: r.start
        },
        focus: {
            path: n,
            offset: r.end
        }
    };
}
function ta(e, n) {
    var { path: r, offset: i } = n;
    if (!f.ML.hasPath(e, r)) return null;
    var a = f.NB.get(e, r);
    if (!f.xv.isText(a)) return null;
    var s = f.ML.above(e, {
        match: (n) => f.W_.isElement(n) && f.ML.isBlock(e, n),
        at: r
    });
    if (!s) return null;
    for (; i > a.text.length; ) {
        var o = f.ML.next(e, {
            at: r,
            match: f.xv.isText
        });
        if (!o || !f.y$.isDescendant(o[1], s[1])) return null;
        (i -= a.text.length), (a = o[0]), (r = o[1]);
    }
    return {
        path: r,
        offset: i
    };
}
function ts(e, n) {
    var r = ta(e, n.anchor);
    if (!r) return null;
    if (f.e6.isCollapsed(n))
        return {
            anchor: r,
            focus: r
        };
    var i = ta(e, n.focus);
    return i
        ? {
              anchor: r,
              focus: i
          }
        : null;
}
function to(e, n, r) {
    var i = B.get(e),
        a =
            null == i
                ? void 0
                : i.find((e) => {
                      var { path: r } = e;
                      return f.y$.equals(r, n.path);
                  });
    if (!a || n.offset <= a.diff.start) return f.E9.transform(n, r, { affinity: 'backward' });
    var { diff: s } = a;
    if (n.offset <= s.start + s.text.length) {
        var o = {
                path: n.path,
                offset: s.start
            },
            l = f.E9.transform(o, r, { affinity: 'backward' });
        return l
            ? {
                  path: l.path,
                  offset: l.offset + n.offset - s.start
              }
            : null;
    }
    var u = {
            path: n.path,
            offset: n.offset - s.text.length + s.end - s.start
        },
        c = f.E9.transform(u, r, { affinity: 'backward' });
    return c
        ? 'split_node' === r.type && f.y$.equals(r.path, n.path) && u.offset < r.position && s.start < r.position
            ? c
            : {
                  path: c.path,
                  offset: c.offset + s.text.length - s.end + s.start
              }
        : null;
}
function tl(e, n, r) {
    var i = to(e, n.anchor, r);
    if (!i) return null;
    if (f.e6.isCollapsed(n))
        return {
            anchor: i,
            focus: i
        };
    var a = to(e, n.focus, r);
    return a
        ? {
              anchor: i,
              focus: a
          }
        : null;
}
function tu(e, n) {
    var { path: r, diff: i, id: a } = e;
    switch (n.type) {
        case 'insert_text':
            if (!f.y$.equals(n.path, r) || n.offset >= i.end) return e;
            if (n.offset <= i.start)
                return {
                    diff: {
                        start: n.text.length + i.start,
                        end: n.text.length + i.end,
                        text: i.text
                    },
                    id: a,
                    path: r
                };
            return {
                diff: {
                    start: i.start,
                    end: i.end + n.text.length,
                    text: i.text
                },
                id: a,
                path: r
            };
        case 'remove_text':
            if (!f.y$.equals(n.path, r) || n.offset >= i.end) return e;
            if (n.offset + n.text.length <= i.start)
                return {
                    diff: {
                        start: i.start - n.text.length,
                        end: i.end - n.text.length,
                        text: i.text
                    },
                    id: a,
                    path: r
                };
            return {
                diff: {
                    start: i.start,
                    end: i.end - n.text.length,
                    text: i.text
                },
                id: a,
                path: r
            };
        case 'split_node':
            if (!f.y$.equals(n.path, r) || n.position >= i.end)
                return {
                    diff: i,
                    id: a,
                    path: f.y$.transform(r, n, { affinity: 'backward' })
                };
            if (n.position > i.start)
                return {
                    diff: {
                        start: i.start,
                        end: Math.min(n.position, i.end),
                        text: i.text
                    },
                    id: a,
                    path: r
                };
            return {
                diff: {
                    start: i.start - n.position,
                    end: i.end - n.position,
                    text: i.text
                },
                id: a,
                path: f.y$.transform(r, n, { affinity: 'forward' })
            };
        case 'merge_node':
            if (!f.y$.equals(n.path, r))
                return {
                    diff: i,
                    id: a,
                    path: f.y$.transform(r, n)
                };
            return {
                diff: {
                    start: i.start + n.position,
                    end: i.end + n.position,
                    text: i.text
                },
                id: a,
                path: f.y$.transform(r, n)
            };
    }
    var s = f.y$.transform(r, n);
    return s
        ? {
              diff: i,
              path: s,
              id: a
          }
        : null;
}
function tc(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n &&
            (i = i.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            r.push.apply(r, i);
    }
    return r;
}
function td(e) {
    for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2
            ? tc(Object(r), !0).forEach(function (n) {
                  m(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : tc(Object(r)).forEach(function (n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
                });
    }
    return e;
}
var tf = 25,
    t_ = 200,
    th = function () {},
    tp = (e) => (null == e ? void 0 : e.constructor.name) === 'DataTransfer';
function tm(e) {
    var { editor: n, scheduleOnDOMSelectionChange: r, onDOMSelectionChange: i } = e,
        a = !1,
        s = null,
        o = null,
        l = null,
        u = 0,
        c = !1,
        d = () => {
            var e = Z.get(n);
            if ((Z.delete(n), e)) {
                var { selection: r } = n,
                    i = ts(n, e);
                i && (!r || !f.e6.equals(i, r)) && f.YR.select(n, i);
            }
        },
        _ = () => {
            var e = G.get(n);
            if ((G.delete(n), !!e)) {
                if (e.at) {
                    var r = f.E9.isPoint(e.at) ? ta(n, e.at) : ts(n, e.at);
                    if (!r) return;
                    var i = f.ML.range(n, r);
                    (!n.selection || !f.e6.equals(n.selection, i)) && f.YR.select(n, r);
                }
                e.run();
            }
        },
        h = () => {
            if ((o && (clearTimeout(o), (o = null)), l && (clearTimeout(l), (l = null)), !T() && !I())) {
                d();
                return;
            }
            !a && ((a = !0), setTimeout(() => (a = !1))), I() && (a = 'action');
            var e = n.selection && f.ML.rangeRef(n, n.selection, { affinity: 'forward' });
            U.set(n, n.marks), th('flush', G.get(n), B.get(n));
            for (var s = T(); (u = null === (h = B.get(n)) || void 0 === h ? void 0 : h[0]); ) {
                var u,
                    h,
                    p,
                    m = k.get(n);
                void 0 !== m && (k.delete(n), (n.marks = m)), m && !1 === c && (c = null);
                var g = ti(u);
                (!n.selection || !f.e6.equals(n.selection, g)) && f.YR.select(n, g),
                    u.diff.text ? f.ML.insertText(n, u.diff.text) : f.ML.deleteFragment(n),
                    B.set(
                        n,
                        null === (p = B.get(n)) || void 0 === p
                            ? void 0
                            : p.filter((e) => {
                                  var { id: n } = e;
                                  return n !== u.id;
                              })
                    ),
                    !e8(n, u) && ((s = !1), G.delete(n), U.delete(n), (a = 'action'), Z.delete(n), r.cancel(), i.cancel(), null == e || e.unref());
            }
            var E = null == e ? void 0 : e.unref();
            if ((E && !Z.get(n) && (!n.selection || !f.e6.equals(E, n.selection)) && f.YR.select(n, E), I())) {
                _();
                return;
            }
            s && r(), r.flush(), i.flush(), d();
            var v = U.get(n);
            U.delete(n), void 0 !== v && ((n.marks = v), n.onChange());
        },
        p = (e) => {
            s && clearTimeout(s),
                (s = setTimeout(() => {
                    x.set(n, !1), h();
                }, tf));
        },
        m = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                r = A.get(n);
            if (!!r) {
                if (T() || e) {
                    r.style.display = 'none';
                    return;
                }
                r.style.removeProperty('display');
            }
        },
        g = (e, r) => {
            var i,
                a = null !== (i = B.get(n)) && void 0 !== i ? i : [];
            B.set(n, a);
            var s = f.NB.leaf(n, e),
                o = a.findIndex((n) => f.y$.equals(n.path, e));
            if (o < 0) {
                tn(s.text, r) &&
                    a.push({
                        path: e,
                        diff: r,
                        id: u++
                    }),
                    m();
                return;
            }
            var l = tr(s.text, a[o].diff, r);
            if (!l) {
                a.splice(o, 1), m();
                return;
            }
            a[o] = td(td({}, a[o]), {}, { diff: l });
        },
        E = function (e) {
            var { at: a } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            (c = !1),
                Z.delete(n),
                r.cancel(),
                i.cancel(),
                I() && h(),
                G.set(n, {
                    at: a,
                    run: e
                }),
                (l = setTimeout(h));
        },
        v = (e) => {
            o && (clearTimeout(o), (o = null));
            var { inputType: r } = e,
                i = null,
                a = e.dataTransfer || e.data || void 0;
            !1 !== c && 'insertText' !== r && 'insertCompositionText' !== r && (c = !1);
            var [s] = e.getTargetRanges();
            s &&
                (i = eT.toSlateRange(n, s, {
                    exactMatch: !1,
                    suppressThrow: !0
                }));
            var l = eT.getWindow(n).getSelection();
            if (
                (!i &&
                    l &&
                    ((s = l),
                    (i = eT.toSlateRange(n, l, {
                        exactMatch: !1,
                        suppressThrow: !0
                    }))),
                !!(i = null !== (L = i) && void 0 !== L ? L : n.selection))
            ) {
                var u = !0;
                if (r.startsWith('delete')) {
                    if (f.e6.isExpanded(i)) {
                        var [d, _] = f.e6.edges(i);
                        if (f.NB.leaf(n, d.path).text.length === d.offset && 0 === _.offset) {
                            var h = f.ML.next(n, {
                                at: d.path,
                                match: f.xv.isText
                            });
                            h &&
                                f.y$.equals(h[1], _.path) &&
                                (i = {
                                    anchor: _,
                                    focus: _
                                });
                        }
                    }
                    var p = r.endsWith('Backward') ? 'backward' : 'forward',
                        [m, v] = f.e6.edges(i),
                        [I, T] = f.ML.leaf(n, m.path),
                        b = {
                            text: '',
                            start: m.offset,
                            end: v.offset
                        },
                        S = B.get(n),
                        A = null == S ? void 0 : S.find((e) => f.y$.equals(e.path, T)),
                        N = A ? [A.diff, b] : [b];
                    if ((0 === e9(I.text, ...N).length && (u = !1), f.e6.isExpanded(i))) {
                        if (u && f.y$.equals(i.anchor.path, i.focus.path)) {
                            var R = {
                                path: i.anchor.path,
                                offset: m.offset
                            };
                            return (
                                y(f.ML.range(n, R, R)),
                                g(i.anchor.path, {
                                    text: '',
                                    end: v.offset,
                                    start: m.offset
                                })
                            );
                        }
                        return E(() => f.ML.deleteFragment(n, { direction: p }), { at: i });
                    }
                }
                switch (r) {
                    case 'deleteByComposition':
                    case 'deleteByCut':
                    case 'deleteByDrag':
                        return E(() => f.ML.deleteFragment(n), { at: i });
                    case 'deleteContent':
                    case 'deleteContentForward':
                        var { anchor: O } = i;
                        if (u && f.e6.isCollapsed(i)) {
                            var D = f.NB.leaf(n, O.path);
                            if (O.offset < D.text.length)
                                return g(O.path, {
                                    text: '',
                                    start: O.offset,
                                    end: O.offset + 1
                                });
                        }
                        return E(() => f.ML.deleteForward(n), { at: i });
                    case 'deleteContentBackward':
                        var L,
                            x,
                            { anchor: w } = i,
                            P = q(s) ? s.isCollapsed : !!(null !== (x = s) && void 0 !== x && x.collapsed);
                        if (u && P && f.e6.isCollapsed(i) && w.offset > 0)
                            return g(w.path, {
                                text: '',
                                start: w.offset - 1,
                                end: w.offset
                            });
                        return E(() => f.ML.deleteBackward(n), { at: i });
                    case 'deleteEntireSoftLine':
                        return E(
                            () => {
                                f.ML.deleteBackward(n, { unit: 'line' }), f.ML.deleteForward(n, { unit: 'line' });
                            },
                            { at: i }
                        );
                    case 'deleteHardLineBackward':
                        return E(() => f.ML.deleteBackward(n, { unit: 'block' }), { at: i });
                    case 'deleteSoftLineBackward':
                        return E(() => f.ML.deleteBackward(n, { unit: 'line' }), { at: i });
                    case 'deleteHardLineForward':
                        return E(() => f.ML.deleteForward(n, { unit: 'block' }), { at: i });
                    case 'deleteSoftLineForward':
                        return E(() => f.ML.deleteForward(n, { unit: 'line' }), { at: i });
                    case 'deleteWordBackward':
                        return E(() => f.ML.deleteBackward(n, { unit: 'word' }), { at: i });
                    case 'deleteWordForward':
                        return E(() => f.ML.deleteForward(n, { unit: 'word' }), { at: i });
                    case 'insertLineBreak':
                        return E(() => f.ML.insertSoftBreak(n), { at: i });
                    case 'insertParagraph':
                        return E(() => f.ML.insertBreak(n), { at: i });
                    case 'insertCompositionText':
                    case 'deleteCompositionText':
                    case 'insertFromComposition':
                    case 'insertFromDrop':
                    case 'insertFromPaste':
                    case 'insertFromYank':
                    case 'insertReplacementText':
                    case 'insertText':
                        if (tp(a)) return E(() => eT.insertData(n, a), { at: i });
                        var M = null != a ? a : '';
                        if ((k.get(n) && (M = M.replace('\uFEFF', '')), 'insertText' === r && /.*\n.*\n$/.test(M) && (M = M.slice(0, -1)), M.includes('\n')))
                            return E(
                                () => {
                                    var e = M.split('\n');
                                    e.forEach((r, i) => {
                                        r && f.ML.insertText(n, r), i !== e.length - 1 && f.ML.insertSoftBreak(n);
                                    });
                                },
                                { at: i }
                            );
                        if (f.y$.equals(i.anchor.path, i.focus.path)) {
                            var [U, G] = f.e6.edges(i),
                                Z = {
                                    start: U.offset,
                                    end: G.offset,
                                    text: M
                                };
                            if (M && c && 'insertCompositionText' === r) {
                                var F = c.start + c.text.search(/\S|$/);
                                Z.start + Z.text.search(/\S|$/) === F + 1 && Z.end === c.start + c.text.length ? ((Z.start -= 1), (c = null), C()) : (c = !1);
                            } else c = 'insertText' === r && (null === c ? Z : !!(c && f.e6.isCollapsed(i)) && c.end + c.text.length === U.offset && td(td({}, c), {}, { text: c.text + M }));
                            if (u) {
                                g(U.path, Z);
                                return;
                            }
                        }
                        return E(() => f.ML.insertText(n, M), { at: i });
                }
            }
        },
        I = () => !!G.get(n),
        T = () => {
            var e;
            return !!(null !== (e = B.get(n)) && void 0 !== e && e.length);
        },
        b = () => I() || T(),
        y = (e) => {
            Z.set(n, e), o && (clearTimeout(o), (o = null));
            var { selection: r } = n;
            if (!!e) {
                var i = !r || !f.y$.equals(r.anchor.path, e.anchor.path),
                    a = !r || !f.y$.equals(r.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
                ((i && c) || a) && (c = !1), (i || T()) && (o = setTimeout(h, t_));
            }
        },
        S = () => {
            (I() || !T()) && h();
        },
        N = (e) => {
            !T() && (m(!0), setTimeout(m));
        },
        C = () => {
            !I() && (l = setTimeout(h));
        },
        R = (e) => {
            if (!(T() || I())) {
                if (e.some((r) => ea(n, r, e))) {
                    var r;
                    null === (r = F.get(n)) || void 0 === r || r();
                }
            }
        };
    return {
        flush: h,
        scheduleFlush: C,
        hasPendingDiffs: T,
        hasPendingAction: I,
        hasPendingChanges: b,
        isFlushing: () => a,
        handleUserSelect: y,
        handleCompositionEnd: p,
        handleCompositionStart: (e) => {
            x.set(n, !0), s && (clearTimeout(s), (s = null));
        },
        handleDOMBeforeInput: v,
        handleKeyDown: N,
        handleDomMutations: R,
        handleInput: S
    };
}
function tg() {
    var e = (0, c.useRef)(!1);
    return (
        (0, c.useEffect)(
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
function tE(e, n, r) {
    var [i] = (0, c.useState)(() => new MutationObserver(n));
    eR(() => {
        i.takeRecords();
    }),
        (0, c.useEffect)(() => {
            if (!e.current) throw Error('Failed to attach MutationObserver, `node` is undefined');
            return i.observe(e.current, r), () => i.disconnect();
        }, []);
}
var tv = ['node'];
function tI(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n &&
            (i = i.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            r.push.apply(r, i);
    }
    return r;
}
function tT(e) {
    for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2
            ? tI(Object(r), !0).forEach(function (n) {
                  m(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : tI(Object(r)).forEach(function (n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
                });
    }
    return e;
}
var tb = {
    subtree: !0,
    childList: !0,
    characterData: !0
};
function ty(e) {
    var { node: n } = e,
        r = E(e, tv);
    if (!eu) return null;
    var i = eP(),
        a = tg(),
        [s] = (0, c.useState)(() => tm(tT({ editor: i }, r)));
    return tE(n, s.handleDomMutations, tb), M.set(i, s.scheduleFlush), a && s.flush(), s;
}
function tS() {
    var e = eP(),
        n = (0, c.useRef)(!1),
        r = (0, c.useRef)(0),
        i = (0, c.useCallback)(() => {
            if (!n.current) {
                n.current = !0;
                var i = eT.getWindow(e);
                i.cancelAnimationFrame(r.current),
                    (r.current = i.requestAnimationFrame(() => {
                        n.current = !1;
                    }));
            }
        }, []);
    return (
        (0, c.useEffect)(() => () => cancelAnimationFrame(r.current), []),
        {
            receivedUserInput: n,
            onUserInput: i
        }
    );
}
var tA = ['autoFocus', 'decorate', 'onDOMBeforeInput', 'placeholder', 'readOnly', 'renderElement', 'renderLeaf', 'renderPlaceholder', 'scrollSelectionIntoView', 'style', 'as', 'disableDefaultStyles'],
    tN = ['text'];
function tC(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n &&
            (i = i.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            r.push.apply(r, i);
    }
    return r;
}
function tR(e) {
    for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2
            ? tC(Object(r), !0).forEach(function (n) {
                  m(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : tC(Object(r)).forEach(function (n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
                });
    }
    return e;
}
var tO = (e) => c.createElement(c.Fragment, null, eK(e)),
    tD = (e) => {
        var n,
            r,
            i = (0, c.useCallback)((e) => c.createElement(tL, Object.assign({}, e)), []),
            { autoFocus: s, decorate: l = tx, onDOMBeforeInput: d, placeholder: _, readOnly: h = !1, renderElement: p, renderLeaf: m, renderPlaceholder: g = i, scrollSelectionIntoView: v = tw, style: I = {}, as: T = 'div', disableDefaultStyles: b = !1 } = e,
            R = E(e, tA),
            O = eX(),
            [P, M] = (0, c.useState)(!1),
            B = (0, c.useRef)(null),
            G = (0, c.useRef)([]),
            { onUserInput: Z, receivedUserInput: H } = tS(),
            [, W] = (0, c.useReducer)((e) => e + 1, 0);
        F.set(O, W), D.set(O, h);
        var q = (0, c.useMemo)(
            () => ({
                isDraggingInternally: !1,
                isUpdatingSelection: !1,
                latestElement: null,
                hasMarkPlaceholder: !1
            }),
            []
        );
        (0, c.useLayoutEffect)(
            () => () => {
                if (null != q && null != q.latestElement) q.latestElement.remove(), (q.latestElement = null);
            },
            []
        ),
            (0, c.useEffect)(() => {
                B.current && s && B.current.focus();
            }, [s]);
        var Q = (0, c.useCallback)(
                u()(() => {
                    if ((eu || !eT.isComposing(O)) && (!q.isUpdatingSelection || (null != $ && $.isFlushing())) && !q.isDraggingInternally) {
                        var e = eT.findDocumentOrShadowRoot(O),
                            { activeElement: n } = e,
                            r = eT.toDOMNode(O, O),
                            i = e.getSelection();
                        if ((n === r ? ((q.latestElement = n), L.set(O, !0)) : L.delete(O), !i)) return f.YR.deselect(O);
                        var { anchorNode: a, focusNode: s } = i,
                            o = eT.hasEditableTarget(O, a) || eT.isTargetInsideNonReadonlyVoid(O, a),
                            l = eT.hasEditableTarget(O, s) || eT.isTargetInsideNonReadonlyVoid(O, s);
                        if (o && l) {
                            var u = eT.toSlateRange(O, i, {
                                exactMatch: !1,
                                suppressThrow: !0
                            });
                            u && (eT.isComposing(O) || (null != $ && $.hasPendingChanges()) || (null != $ && $.isFlushing()) ? null == $ || $.handleUserSelect(u) : f.YR.select(O, u));
                        }
                        h && (!o || !l) && f.YR.deselect(O);
                    }
                }, 100),
                [h]
            ),
            J = (0, c.useMemo)(() => o()(Q, 0), [Q]),
            $ = ty({
                node: B,
                onDOMSelectionChange: Q,
                scheduleOnDOMSelectionChange: J
            });
        eR(() => {
            B.current && (e = Y(B.current)) ? (y.set(O, e), S.set(O, B.current), C.set(O, B.current), N.set(B.current, O)) : C.delete(O);
            var e,
                { selection: n } = O,
                r = eT.findDocumentOrShadowRoot(O).getSelection();
            if (!(!r || !eT.isFocused(O) || (null != $ && $.hasPendingAction()))) {
                var i = (e) => {
                        var i = 'None' !== r.type;
                        if (!!n || !!i) {
                            var a = S.get(O),
                                s = !1;
                            if ((a.contains(r.anchorNode) && a.contains(r.focusNode) && (s = !0), i && s && n && !e)) {
                                var o = eT.toSlateRange(O, r, {
                                    exactMatch: !0,
                                    suppressThrow: !0
                                });
                                if (o && f.e6.equals(o, n)) {
                                    if (!q.hasMarkPlaceholder) return;
                                    var l,
                                        { anchorNode: u } = r;
                                    if (null != u && null !== (l = u.parentElement) && void 0 !== l && l.hasAttribute('data-slate-mark-placeholder')) return;
                                }
                            }
                            if (n && !eT.hasRange(O, n)) {
                                O.selection = eT.toSlateRange(O, r, {
                                    exactMatch: !1,
                                    suppressThrow: !0
                                });
                                return;
                            }
                            q.isUpdatingSelection = !0;
                            var c = n && eT.toDOMRange(O, n);
                            return c ? (f.e6.isBackward(n) ? r.setBaseAndExtent(c.endContainer, c.endOffset, c.startContainer, c.startOffset) : r.setBaseAndExtent(c.startContainer, c.startOffset, c.endContainer, c.endOffset), v(O, c)) : r.removeAllRanges(), c;
                        }
                    },
                    a = i(),
                    s = (null == $ ? void 0 : $.isFlushing()) === 'action';
                if (!eu || !s) {
                    setTimeout(() => {
                        a && ec && eT.toDOMNode(O, O).focus(), (q.isUpdatingSelection = !1);
                    });
                    return;
                }
                var o = null,
                    l = requestAnimationFrame(() => {
                        if (s) {
                            var e = (e) => {
                                try {
                                    eT.toDOMNode(O, O).focus(), i(e);
                                } catch (e) {}
                            };
                            e(),
                                (o = setTimeout(() => {
                                    e(!0), (q.isUpdatingSelection = !1);
                                }));
                        }
                    });
                return () => {
                    cancelAnimationFrame(l), o && clearTimeout(o);
                };
            }
        });
        var ee = (0, c.useCallback)(
                (e) => {
                    if ((Z(), !h && eT.hasEditableTarget(O, e.target) && !tM(e, d))) {
                        if ($) return $.handleDOMBeforeInput(e);
                        J.flush(), Q.flush();
                        var { selection: n } = O,
                            { inputType: r } = e,
                            i = e.dataTransfer || e.data || void 0,
                            a = 'insertCompositionText' === r || 'deleteCompositionText' === r;
                        if (a && eT.isComposing(O)) return;
                        var s = !1;
                        if ('insertText' === r && n && f.e6.isCollapsed(n) && e.data && 1 === e.data.length && /[a-z ]/i.test(e.data) && 0 !== n.anchor.offset) {
                            (s = !0), O.marks && (s = !1);
                            var { anchor: o } = n,
                                [l, u] = eT.toDOMPoint(O, o),
                                c = null === (m = l.parentElement) || void 0 === m ? void 0 : m.closest('a'),
                                _ = eT.getWindow(O);
                            if (s && c && eT.hasDOMNode(O, c)) {
                                var p,
                                    m,
                                    g,
                                    E,
                                    v = null == _ ? void 0 : _.document.createTreeWalker(c, NodeFilter.SHOW_TEXT).lastChild();
                                v === l && (null === (E = v.textContent) || void 0 === E ? void 0 : E.length) === u && (s = !1);
                            }
                            if (s && l.parentElement && (null == _ ? void 0 : null === (g = _.getComputedStyle(l.parentElement)) || void 0 === g ? void 0 : g.whiteSpace) === 'pre') {
                                var I = f.ML.above(O, {
                                    at: o.path,
                                    match: (e) => f.W_.isElement(e) && f.ML.isBlock(O, e)
                                });
                                I && f.NB.string(I[0]).includes('\t') && (s = !1);
                            }
                        }
                        if (!r.startsWith('delete') || r.startsWith('deleteBy')) {
                            var [T] = e.getTargetRanges();
                            if (T) {
                                var b = eT.toSlateRange(O, T, {
                                    exactMatch: !1,
                                    suppressThrow: !1
                                });
                                if (!n || !f.e6.equals(n, b)) {
                                    s = !1;
                                    var y = !a && O.selection && f.ML.rangeRef(O, O.selection);
                                    f.YR.select(O, b), y && w.set(O, y);
                                }
                            }
                        }
                        if (!a) {
                            if ((!s && e.preventDefault(), n && f.e6.isExpanded(n) && r.startsWith('delete'))) {
                                var S = r.endsWith('Backward') ? 'backward' : 'forward';
                                f.ML.deleteFragment(O, { direction: S });
                                return;
                            }
                            switch (r) {
                                case 'deleteByComposition':
                                case 'deleteByCut':
                                case 'deleteByDrag':
                                    f.ML.deleteFragment(O);
                                    break;
                                case 'deleteContent':
                                case 'deleteContentForward':
                                    f.ML.deleteForward(O);
                                    break;
                                case 'deleteContentBackward':
                                    f.ML.deleteBackward(O);
                                    break;
                                case 'deleteEntireSoftLine':
                                    f.ML.deleteBackward(O, { unit: 'line' }), f.ML.deleteForward(O, { unit: 'line' });
                                    break;
                                case 'deleteHardLineBackward':
                                    f.ML.deleteBackward(O, { unit: 'block' });
                                    break;
                                case 'deleteSoftLineBackward':
                                    f.ML.deleteBackward(O, { unit: 'line' });
                                    break;
                                case 'deleteHardLineForward':
                                    f.ML.deleteForward(O, { unit: 'block' });
                                    break;
                                case 'deleteSoftLineForward':
                                    f.ML.deleteForward(O, { unit: 'line' });
                                    break;
                                case 'deleteWordBackward':
                                    f.ML.deleteBackward(O, { unit: 'word' });
                                    break;
                                case 'deleteWordForward':
                                    f.ML.deleteForward(O, { unit: 'word' });
                                    break;
                                case 'insertLineBreak':
                                    f.ML.insertSoftBreak(O);
                                    break;
                                case 'insertParagraph':
                                    f.ML.insertBreak(O);
                                    break;
                                case 'insertFromComposition':
                                case 'insertFromDrop':
                                case 'insertFromPaste':
                                case 'insertFromYank':
                                case 'insertReplacementText':
                                case 'insertText':
                                    'insertFromComposition' === r && eT.isComposing(O) && (M(!1), x.set(O, !1)), (null == i ? void 0 : i.constructor.name) === 'DataTransfer' ? eT.insertData(O, i) : 'string' == typeof i && (s ? G.current.push(() => f.ML.insertText(O, i)) : f.ML.insertText(O, i));
                            }
                            var A = null === (p = w.get(O)) || void 0 === p ? void 0 : p.unref();
                            w.delete(O), A && (!O.selection || !f.e6.equals(O.selection, A)) && f.YR.select(O, A);
                        }
                    }
                },
                [h, d]
            ),
            et = (0, c.useCallback)(
                (e) => {
                    null == e ? (Q.cancel(), J.cancel(), S.delete(O), C.delete(O), B.current && eI && B.current.removeEventListener('beforeinput', ee)) : eI && e.addEventListener('beforeinput', ee), (B.current = e);
                },
                [B, ee, Q, J]
            );
        eR(() => {
            var e = eT.getWindow(O);
            return (
                e.document.addEventListener('selectionchange', J),
                () => {
                    e.document.removeEventListener('selectionchange', J);
                }
            );
        }, [J]);
        var en = l([O, []]);
        if (_ && 1 === O.children.length && 1 === Array.from(f.NB.texts(O)).length && '' === f.NB.string(O) && !P) {
            var er = f.ML.start(O, []);
            en.push({
                [V]: !0,
                placeholder: _,
                anchor: er,
                focus: er
            });
        }
        var { marks: ei } = O;
        if (((q.hasMarkPlaceholder = !1), O.selection && f.e6.isCollapsed(O.selection) && ei)) {
            var { anchor: ea } = O.selection,
                es = f.NB.leaf(O, ea.path),
                el = E(es, tN);
            if (!f.xv.equals(es, ei, { loose: !0 })) {
                q.hasMarkPlaceholder = !0;
                var ef = Object.fromEntries(Object.keys(el).map((e) => [e, null]));
                en.push(
                    tR(
                        tR(tR({ [j]: !0 }, ef), ei),
                        {},
                        {
                            anchor: ea,
                            focus: ea
                        }
                    )
                );
            }
        }
        (0, c.useEffect)(() => {
            setTimeout(() => {
                var { selection: e } = O;
                if (e) {
                    var { anchor: n } = e,
                        r = f.NB.leaf(O, n.path);
                    if (ei && !f.xv.equals(r, ei, { loose: !0 })) {
                        k.set(O, ei);
                        return;
                    }
                }
                k.delete(O);
            });
        });
        var eh = null === (n = A.get(O)) || void 0 === n ? void 0 : null === (r = n.getBoundingClientRect()) || void 0 === r ? void 0 : r.height;
        return c.createElement(
            ez.Provider,
            { value: h },
            c.createElement(
                ej.Provider,
                { value: l },
                c.createElement(
                    e7,
                    {
                        node: B,
                        receivedUserInput: H
                    },
                    c.createElement(
                        T,
                        Object.assign(
                            {
                                role: h ? void 0 : 'textbox',
                                'aria-multiline': !h || void 0
                            },
                            R,
                            {
                                spellCheck: (!!eI || !ev) && R.spellCheck,
                                autoCorrect: eI || !ev ? R.autoCorrect : 'false',
                                autoCapitalize: eI || !ev ? R.autoCapitalize : 'false',
                                'data-slate-editor': !0,
                                'data-slate-node': 'value',
                                contentEditable: !h,
                                zindex: -1,
                                suppressContentEditableWarning: !0,
                                ref: et,
                                style: tR(
                                    tR(
                                        {},
                                        b
                                            ? {}
                                            : tR(
                                                  {
                                                      position: 'relative',
                                                      outline: 'none',
                                                      whiteSpace: 'pre-wrap',
                                                      wordWrap: 'break-word'
                                                  },
                                                  eh ? { minHeight: eh } : {}
                                              )
                                    ),
                                    I
                                ),
                                onBeforeInput: (0, c.useCallback)(
                                    (e) => {
                                        if (!eI && !h && !tP(e, R.onBeforeInput) && eT.hasSelectableTarget(O, e.target) && (e.preventDefault(), !eT.isComposing(O))) {
                                            var n = e.data;
                                            f.ML.insertText(O, n);
                                        }
                                    },
                                    [h]
                                ),
                                onInput: (0, c.useCallback)((e) => {
                                    if (!tP(e, R.onInput)) {
                                        if ($) {
                                            $.handleInput();
                                            return;
                                        }
                                        for (var n of G.current) n();
                                        G.current = [];
                                    }
                                }, []),
                                onBlur: (0, c.useCallback)(
                                    (e) => {
                                        if (h || q.isUpdatingSelection || !eT.hasSelectableTarget(O, e.target) || tP(e, R.onBlur)) return;
                                        var n = eT.findDocumentOrShadowRoot(O);
                                        if (q.latestElement === n.activeElement) return;
                                        var { relatedTarget: r } = e;
                                        if (!(r === eT.toDOMNode(O, O) || (K(r) && r.hasAttribute('data-slate-spacer')))) {
                                            if (null != r && z(r) && eT.hasDOMNode(O, r)) {
                                                var i = eT.toSlateNode(O, r);
                                                if (f.W_.isElement(i) && !O.isVoid(i)) return;
                                            }
                                            if (ed) {
                                                var a = n.getSelection();
                                                null == a || a.removeAllRanges();
                                            }
                                            L.delete(O);
                                        }
                                    },
                                    [h, R.onBlur]
                                ),
                                onClick: (0, c.useCallback)(
                                    (e) => {
                                        if (eT.hasTarget(O, e.target) && !tP(e, R.onClick) && z(e.target)) {
                                            var n = eT.toSlateNode(O, e.target),
                                                r = eT.findPath(O, n);
                                            if (!f.ML.hasPath(O, r) || f.NB.get(O, r) !== n) return;
                                            if (e.detail === eJ && r.length >= 1) {
                                                var i = r;
                                                if (!(f.W_.isElement(n) && f.ML.isBlock(O, n))) {
                                                    var a,
                                                        s = f.ML.above(O, {
                                                            match: (e) => f.W_.isElement(e) && f.ML.isBlock(O, e),
                                                            at: r
                                                        });
                                                    i = null !== (a = null == s ? void 0 : s[1]) && void 0 !== a ? a : r.slice(0, 1);
                                                }
                                                var o = f.ML.range(O, i);
                                                f.YR.select(O, o);
                                                return;
                                            }
                                            if (!h) {
                                                var l = f.ML.start(O, r),
                                                    u = f.ML.end(O, r),
                                                    c = f.ML.void(O, { at: l }),
                                                    d = f.ML.void(O, { at: u });
                                                if (c && d && f.y$.equals(c[1], d[1])) {
                                                    var _ = f.ML.range(O, l);
                                                    f.YR.select(O, _);
                                                }
                                            }
                                        }
                                    },
                                    [h, R.onClick]
                                ),
                                onCompositionEnd: (0, c.useCallback)(
                                    (e) => {
                                        if (eT.hasSelectableTarget(O, e.target)) {
                                            if ((eT.isComposing(O) && (M(!1), x.set(O, !1)), null == $ || $.handleCompositionEnd(e), !tP(e, R.onCompositionEnd) && !eu)) {
                                                if (!ed && !em && !eo && !eE && !eg && e.data) {
                                                    var n = k.get(O);
                                                    k.delete(O), void 0 !== n && (U.set(O, O.marks), (O.marks = n)), f.ML.insertText(O, e.data);
                                                    var r = U.get(O);
                                                    U.delete(O), void 0 !== r && (O.marks = r);
                                                }
                                            }
                                        }
                                    },
                                    [R.onCompositionEnd]
                                ),
                                onCompositionUpdate: (0, c.useCallback)(
                                    (e) => {
                                        eT.hasSelectableTarget(O, e.target) && !tP(e, R.onCompositionUpdate) && !eT.isComposing(O) && (M(!0), x.set(O, !0));
                                    },
                                    [R.onCompositionUpdate]
                                ),
                                onCompositionStart: (0, c.useCallback)(
                                    (e) => {
                                        if (eT.hasSelectableTarget(O, e.target)) {
                                            if ((null == $ || $.handleCompositionStart(e), !tP(e, R.onCompositionStart) && !eu)) {
                                                M(!0);
                                                var { selection: n } = O;
                                                if (n) {
                                                    if (f.e6.isExpanded(n)) {
                                                        f.ML.deleteFragment(O);
                                                        return;
                                                    }
                                                    var r = f.ML.above(O, {
                                                        match: (e) => f.W_.isElement(e) && f.ML.isInline(O, e),
                                                        mode: 'highest'
                                                    });
                                                    if (r) {
                                                        var [, i] = r;
                                                        if (f.ML.isEnd(O, n.anchor, i)) {
                                                            var a = f.ML.after(O, i);
                                                            f.YR.setSelection(O, {
                                                                anchor: a,
                                                                focus: a
                                                            });
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    [R.onCompositionStart]
                                ),
                                onCopy: (0, c.useCallback)(
                                    (e) => {
                                        eT.hasSelectableTarget(O, e.target) && !tP(e, R.onCopy) && (e.preventDefault(), eT.setFragmentData(O, e.clipboardData, 'copy'));
                                    },
                                    [R.onCopy]
                                ),
                                onCut: (0, c.useCallback)(
                                    (e) => {
                                        if (!h && eT.hasSelectableTarget(O, e.target) && !tP(e, R.onCut)) {
                                            e.preventDefault(), eT.setFragmentData(O, e.clipboardData, 'cut');
                                            var { selection: n } = O;
                                            if (n) {
                                                if (f.e6.isExpanded(n)) f.ML.deleteFragment(O);
                                                else {
                                                    var r = f.NB.parent(O, n.anchor.path);
                                                    f.ML.isVoid(O, r) && f.YR.delete(O);
                                                }
                                            }
                                        }
                                    },
                                    [h, R.onCut]
                                ),
                                onDragOver: (0, c.useCallback)(
                                    (e) => {
                                        if (eT.hasTarget(O, e.target) && !tP(e, R.onDragOver)) {
                                            var n = eT.toSlateNode(O, e.target);
                                            f.W_.isElement(n) && f.ML.isVoid(O, n) && e.preventDefault();
                                        }
                                    },
                                    [R.onDragOver]
                                ),
                                onDragStart: (0, c.useCallback)(
                                    (e) => {
                                        if (!h && eT.hasTarget(O, e.target) && !tP(e, R.onDragStart)) {
                                            var n = eT.toSlateNode(O, e.target),
                                                r = eT.findPath(O, n);
                                            if (
                                                (f.W_.isElement(n) && f.ML.isVoid(O, n)) ||
                                                f.ML.void(O, {
                                                    at: r,
                                                    voids: !0
                                                })
                                            ) {
                                                var i = f.ML.range(O, r);
                                                f.YR.select(O, i);
                                            }
                                            (q.isDraggingInternally = !0), eT.setFragmentData(O, e.dataTransfer, 'drag');
                                        }
                                    },
                                    [h, R.onDragStart]
                                ),
                                onDrop: (0, c.useCallback)(
                                    (e) => {
                                        if (!h && eT.hasTarget(O, e.target) && !tP(e, R.onDrop)) {
                                            e.preventDefault();
                                            var n = O.selection,
                                                r = eT.findEventRange(O, e),
                                                i = e.dataTransfer;
                                            f.YR.select(O, r),
                                                q.isDraggingInternally &&
                                                    n &&
                                                    !f.e6.equals(n, r) &&
                                                    !f.ML.void(O, {
                                                        at: r,
                                                        voids: !0
                                                    }) &&
                                                    f.YR.delete(O, { at: n }),
                                                eT.insertData(O, i),
                                                !eT.isFocused(O) && eT.focus(O);
                                        }
                                        q.isDraggingInternally = !1;
                                    },
                                    [h, R.onDrop]
                                ),
                                onDragEnd: (0, c.useCallback)(
                                    (e) => {
                                        !h && q.isDraggingInternally && R.onDragEnd && eT.hasTarget(O, e.target) && R.onDragEnd(e), (q.isDraggingInternally = !1);
                                    },
                                    [h, R.onDragEnd]
                                ),
                                onFocus: (0, c.useCallback)(
                                    (e) => {
                                        if (!h && !q.isUpdatingSelection && eT.hasEditableTarget(O, e.target) && !tP(e, R.onFocus)) {
                                            var n = eT.toDOMNode(O, O),
                                                r = eT.findDocumentOrShadowRoot(O);
                                            if (((q.latestElement = r.activeElement), ec && e.target !== n)) {
                                                n.focus();
                                                return;
                                            }
                                            L.set(O, !0);
                                        }
                                    },
                                    [h, R.onFocus]
                                ),
                                onKeyDown: (0, c.useCallback)(
                                    (e) => {
                                        if (!h && eT.hasEditableTarget(O, e.target)) {
                                            null == $ || $.handleKeyDown(e);
                                            var { nativeEvent: n } = e;
                                            if ((eT.isComposing(O) && !1 === n.isComposing && (x.set(O, !1), M(!1)), !(tP(e, R.onKeyDown) || eT.isComposing(O)))) {
                                                var { selection: r } = O,
                                                    i = O.children[null !== r ? r.focus.path[0] : 0],
                                                    s = 'rtl' === a()(f.NB.string(i));
                                                if (e3.isRedo(n)) {
                                                    e.preventDefault();
                                                    var o = O;
                                                    'function' == typeof o.redo && o.redo();
                                                    return;
                                                }
                                                if (e3.isUndo(n)) {
                                                    e.preventDefault();
                                                    var l = O;
                                                    'function' == typeof l.undo && l.undo();
                                                    return;
                                                }
                                                if (e3.isMoveLineBackward(n)) {
                                                    e.preventDefault(),
                                                        f.YR.move(O, {
                                                            unit: 'line',
                                                            reverse: !0
                                                        });
                                                    return;
                                                }
                                                if (e3.isMoveLineForward(n)) {
                                                    e.preventDefault(), f.YR.move(O, { unit: 'line' });
                                                    return;
                                                }
                                                if (e3.isExtendLineBackward(n)) {
                                                    e.preventDefault(),
                                                        f.YR.move(O, {
                                                            unit: 'line',
                                                            edge: 'focus',
                                                            reverse: !0
                                                        });
                                                    return;
                                                }
                                                if (e3.isExtendLineForward(n)) {
                                                    e.preventDefault(),
                                                        f.YR.move(O, {
                                                            unit: 'line',
                                                            edge: 'focus'
                                                        });
                                                    return;
                                                }
                                                if (e3.isMoveBackward(n)) {
                                                    e.preventDefault(), r && f.e6.isCollapsed(r) ? f.YR.move(O, { reverse: !s }) : f.YR.collapse(O, { edge: 'start' });
                                                    return;
                                                }
                                                if (e3.isMoveForward(n)) {
                                                    e.preventDefault(), r && f.e6.isCollapsed(r) ? f.YR.move(O, { reverse: s }) : f.YR.collapse(O, { edge: 'end' });
                                                    return;
                                                }
                                                if (e3.isMoveWordBackward(n)) {
                                                    e.preventDefault(),
                                                        r && f.e6.isExpanded(r) && f.YR.collapse(O, { edge: 'focus' }),
                                                        f.YR.move(O, {
                                                            unit: 'word',
                                                            reverse: !s
                                                        });
                                                    return;
                                                }
                                                if (e3.isMoveWordForward(n)) {
                                                    e.preventDefault(),
                                                        r && f.e6.isExpanded(r) && f.YR.collapse(O, { edge: 'focus' }),
                                                        f.YR.move(O, {
                                                            unit: 'word',
                                                            reverse: s
                                                        });
                                                    return;
                                                }
                                                if (eI) {
                                                    if ((e_ || ed) && r && (e3.isDeleteBackward(n) || e3.isDeleteForward(n)) && f.e6.isCollapsed(r)) {
                                                        var u = f.NB.parent(O, r.anchor.path);
                                                        if (f.W_.isElement(u) && f.ML.isVoid(O, u) && (f.ML.isInline(O, u) || f.ML.isBlock(O, u))) {
                                                            e.preventDefault(), f.ML.deleteBackward(O, { unit: 'block' });
                                                            return;
                                                        }
                                                    }
                                                } else {
                                                    if (e3.isBold(n) || e3.isItalic(n) || e3.isTransposeCharacter(n)) {
                                                        e.preventDefault();
                                                        return;
                                                    }
                                                    if (e3.isSoftBreak(n)) {
                                                        e.preventDefault(), f.ML.insertSoftBreak(O);
                                                        return;
                                                    }
                                                    if (e3.isSplitBlock(n)) {
                                                        e.preventDefault(), f.ML.insertBreak(O);
                                                        return;
                                                    }
                                                    if (e3.isDeleteBackward(n)) {
                                                        e.preventDefault(), r && f.e6.isExpanded(r) ? f.ML.deleteFragment(O, { direction: 'backward' }) : f.ML.deleteBackward(O);
                                                        return;
                                                    }
                                                    if (e3.isDeleteForward(n)) {
                                                        e.preventDefault(), r && f.e6.isExpanded(r) ? f.ML.deleteFragment(O, { direction: 'forward' }) : f.ML.deleteForward(O);
                                                        return;
                                                    }
                                                    if (e3.isDeleteLineBackward(n)) {
                                                        e.preventDefault(), r && f.e6.isExpanded(r) ? f.ML.deleteFragment(O, { direction: 'backward' }) : f.ML.deleteBackward(O, { unit: 'line' });
                                                        return;
                                                    }
                                                    if (e3.isDeleteLineForward(n)) {
                                                        e.preventDefault(), r && f.e6.isExpanded(r) ? f.ML.deleteFragment(O, { direction: 'forward' }) : f.ML.deleteForward(O, { unit: 'line' });
                                                        return;
                                                    }
                                                    if (e3.isDeleteWordBackward(n)) {
                                                        e.preventDefault(), r && f.e6.isExpanded(r) ? f.ML.deleteFragment(O, { direction: 'backward' }) : f.ML.deleteBackward(O, { unit: 'word' });
                                                        return;
                                                    }
                                                    if (e3.isDeleteWordForward(n)) {
                                                        e.preventDefault(), r && f.e6.isExpanded(r) ? f.ML.deleteFragment(O, { direction: 'forward' }) : f.ML.deleteForward(O, { unit: 'word' });
                                                        return;
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    [h, R.onKeyDown]
                                ),
                                onPaste: (0, c.useCallback)(
                                    (e) => {
                                        !h && eT.hasEditableTarget(O, e.target) && !tP(e, R.onPaste) && (!eI || X(e.nativeEvent) || ed) && (e.preventDefault(), eT.insertData(O, e.clipboardData));
                                    },
                                    [h, R.onPaste]
                                )
                            }
                        ),
                        c.createElement(tO, {
                            decorations: en,
                            node: O,
                            renderElement: p,
                            renderPlaceholder: g,
                            renderLeaf: m,
                            selection: O.selection
                        })
                    )
                )
            )
        );
    },
    tL = (e) => {
        var { attributes: n, children: r } = e;
        return c.createElement('span', Object.assign({}, n), r, eu && c.createElement('br', null));
    },
    tx = () => [],
    tw = (e, n) => {
        if (n.getBoundingClientRect && (!e.selection || (e.selection && f.e6.isCollapsed(e.selection)))) {
            var r = n.startContainer.parentElement;
            (r.getBoundingClientRect = n.getBoundingClientRect.bind(n)), (0, d.Z)(r, { scrollMode: 'if-needed' }), delete r.getBoundingClientRect;
        }
    },
    tP = (e, n) => {
        if (!n) return !1;
        var r = n(e);
        return null != r ? r : e.isDefaultPrevented() || e.isPropagationStopped();
    },
    tM = (e, n) => {
        if (!n) return !1;
        var r = n(e);
        return null != r ? r : e.defaultPrevented;
    },
    tk = (0, c.createContext)(!1),
    tU = () => (0, c.useContext)(tk);
function tB(e) {
    return e instanceof Error;
}
var tG = (0, c.createContext)({}),
    tZ = (e, n) => e === n;
function tF(e) {
    var n,
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tZ,
        [, i] = useReducer((e) => e + 1, 0),
        a = useContext(tG);
    if (!a) throw Error("The `useSlateSelector` hook must be used inside the <Slate> component's context.");
    var { getSlate: s, addEventListener: o } = a,
        l = useRef(),
        u = useRef(() => null),
        c = useRef(null);
    try {
        n = e !== u.current || l.current ? e(s()) : c.current;
    } catch (e) {
        throw (l.current && tB(e) && (e.message += '\nThe error may be correlated with this previous error:\n'.concat(l.current.stack, '\n\n')), e);
    }
    return (
        eR(() => {
            (u.current = e), (c.current = n), (l.current = void 0);
        }),
        eR(() => {
            function e() {
                try {
                    var e = u.current(s());
                    if (r(e, c.current)) return;
                    c.current = e;
                } catch (e) {
                    l.current = e;
                }
                i();
            }
            var n = o(e);
            return e(), () => n();
        }, [o, s]),
        n
    );
}
function tV(e) {
    var n = (0, c.useRef)([]).current,
        r = (0, c.useRef)({ editor: e }).current,
        i = (0, c.useCallback)((e) => {
            (r.editor = e), n.forEach((n) => n(e));
        }, []);
    return {
        selectorContext: (0, c.useMemo)(
            () => ({
                getSlate: () => r.editor,
                addEventListener: (e) => (
                    n.push(e),
                    () => {
                        n.splice(n.indexOf(e), 1);
                    }
                )
            }),
            [n, r]
        ),
        onChange: i
    };
}
var tj = ['editor', 'children', 'onChange', 'value'],
    tH = (e) => {
        var { editor: n, children: r, onChange: i, value: a } = e,
            s = E(e, tj),
            o = (0, c.useRef)(!1),
            [l, u] = c.useState(() => {
                if (!f.NB.isNodeList(a)) throw Error('[Slate] value is invalid! Expected a list of elements but got: '.concat(f.o4.stringify(a)));
                if (!f.ML.isEditor(n)) throw Error('[Slate] editor is invalid! You passed: '.concat(f.o4.stringify(n)));
                return (
                    (n.children = a),
                    Object.assign(n, s),
                    {
                        v: 0,
                        editor: n
                    }
                );
            }),
            { selectorContext: d, onChange: _ } = tV(n),
            h = (0, c.useCallback)(() => {
                i && i(n.children),
                    u((e) => ({
                        v: e.v + 1,
                        editor: n
                    })),
                    _(n);
            }, [i]);
        (0, c.useEffect)(
            () => (
                P.set(n, h),
                () => {
                    P.set(n, () => {}), (o.current = !0);
                }
            ),
            [h]
        );
        var [p, m] = (0, c.useState)(eT.isFocused(n));
        return (
            (0, c.useEffect)(() => {
                m(eT.isFocused(n));
            }),
            eR(() => {
                var e = () => m(eT.isFocused(n));
                return es
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
            c.createElement(tG.Provider, { value: d }, c.createElement(eQ.Provider, { value: l }, c.createElement(ew.Provider, { value: l.editor }, c.createElement(tk.Provider, { value: p }, r))))
        );
    },
    tY = (e, n) => (!e && !n) || (!!e && !!n && Range.equals(e, n)),
    tW = (e, n) => {
        var r = (n.top + n.bottom) / 2;
        return e.top <= r && e.bottom >= r;
    },
    tK = (e, n, r) => {
        var i = eT.toDOMRange(e, n).getBoundingClientRect(),
            a = eT.toDOMRange(e, r).getBoundingClientRect();
        return tW(i, a) && tW(a, i);
    },
    tz = (e, n) => {
        var r = f.ML.range(e, f.e6.end(n)),
            i = Array.from(f.ML.positions(e, { at: n })),
            a = 0,
            s = i.length,
            o = Math.floor(s / 2);
        if (tK(e, f.ML.range(e, i[a]), r)) return f.ML.range(e, i[a], r);
        if (i.length < 2) return f.ML.range(e, i[i.length - 1], r);
        for (; o !== i.length && o !== a; ) tK(e, f.ML.range(e, i[o]), r) ? (s = o) : (a = o), (o = Math.floor((a + s) / 2));
        return f.ML.range(e, i[s], r);
    };
function tq(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n &&
            (i = i.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            r.push.apply(r, i);
    }
    return r;
}
function tQ(e) {
    for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2
            ? tq(Object(r), !0).forEach(function (n) {
                  m(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : tq(Object(r)).forEach(function (n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
                });
    }
    return e;
}
var tX = function (e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'x-slate-fragment',
            r = e,
            { apply: i, onChange: a, deleteBackward: s, addMark: o, removeMark: l } = r;
        return (
            O.set(r, new WeakMap()),
            (r.addMark = (e, n) => {
                var i, a;
                null === (i = M.get(r)) || void 0 === i || i(), !k.get(r) && null !== (a = B.get(r)) && void 0 !== a && a.length && k.set(r, null), U.delete(r), o(e, n);
            }),
            (r.removeMark = (e) => {
                var n;
                !k.get(r) && null !== (n = B.get(r)) && void 0 !== n && n.length && k.set(r, null), U.delete(r), l(e);
            }),
            (r.deleteBackward = (e) => {
                if ('line' !== e) return s(e);
                if (r.selection && f.e6.isCollapsed(r.selection)) {
                    var n = f.ML.above(r, {
                        match: (e) => f.W_.isElement(e) && f.ML.isBlock(r, e),
                        at: r.selection
                    });
                    if (n) {
                        var [, i] = n,
                            a = f.ML.range(r, i, r.selection.anchor),
                            o = tz(r, a);
                        !f.e6.isCollapsed(o) && f.YR.delete(r, { at: o });
                    }
                }
            }),
            (r.apply = (e) => {
                var n,
                    a = [],
                    s = B.get(r);
                if (null != s && s.length) {
                    var o = s.map((n) => tu(n, e)).filter(Boolean);
                    B.set(r, o);
                }
                var l = Z.get(r);
                l && Z.set(r, tl(r, l, e));
                var u = G.get(r);
                if (null != u && u.at) {
                    var c = f.E9.isPoint(null == u ? void 0 : u.at) ? to(r, u.at, e) : tl(r, u.at, e);
                    G.set(r, c ? tQ(tQ({}, u), {}, { at: c }) : null);
                }
                switch (e.type) {
                    case 'insert_text':
                    case 'remove_text':
                    case 'set_node':
                    case 'split_node':
                        a.push(...tJ(r, e.path));
                        break;
                    case 'set_selection':
                        null === (n = w.get(r)) || void 0 === n || n.unref(), w.delete(r);
                        break;
                    case 'insert_node':
                    case 'remove_node':
                        a.push(...tJ(r, f.y$.parent(e.path)));
                        break;
                    case 'merge_node':
                        a.push(...tJ(r, f.y$.previous(e.path)));
                        break;
                    case 'move_node':
                        a.push(...tJ(r, f.y$.common(f.y$.parent(e.path), f.y$.parent(e.newPath))));
                }
                for (var [d, _] of (i(e), a)) {
                    var [h] = f.ML.node(r, d);
                    R.set(h, _);
                }
            }),
            (r.setFragmentData = (e) => {
                var { selection: i } = r;
                if (!i) return;
                var [a, s] = f.e6.edges(i),
                    o = f.ML.void(r, { at: a.path }),
                    l = f.ML.void(r, { at: s.path });
                if (!f.e6.isCollapsed(i) || !!o) {
                    var u = eT.toDOMRange(r, i),
                        c = u.cloneContents(),
                        d = c.childNodes[0];
                    if (
                        (c.childNodes.forEach((e) => {
                            e.textContent && '' !== e.textContent.trim() && (d = e);
                        }),
                        l)
                    ) {
                        var [_] = l,
                            h = u.cloneRange(),
                            p = eT.toDOMNode(r, _);
                        h.setEndAfter(p), (c = h.cloneContents());
                    }
                    if (
                        (o && (d = c.querySelector('[data-slate-spacer]')),
                        Array.from(c.querySelectorAll('[data-slate-zero-width]')).forEach((e) => {
                            var n = 'n' === e.getAttribute('data-slate-zero-width');
                            e.textContent = n ? '\n' : '';
                        }),
                        Q(d))
                    ) {
                        var m = d.ownerDocument.createElement('span');
                        (m.style.whiteSpace = 'pre'), m.appendChild(d), c.appendChild(m), (d = m);
                    }
                    var g = JSON.stringify(r.getFragment()),
                        E = window.btoa(encodeURIComponent(g));
                    d.setAttribute('data-slate-fragment', E), e.setData('application/'.concat(n), E);
                    var v = c.ownerDocument.createElement('div');
                    return v.appendChild(c), v.setAttribute('hidden', 'true'), c.ownerDocument.body.appendChild(v), e.setData('text/html', v.innerHTML), e.setData('text/plain', en(v)), c.ownerDocument.body.removeChild(v), e;
                }
            }),
            (r.insertData = (e) => {
                !r.insertFragmentData(e) && r.insertTextData(e);
            }),
            (r.insertFragmentData = (e) => {
                var i = e.getData('application/'.concat(n)) || ei(e);
                if (i) {
                    var a = JSON.parse(decodeURIComponent(window.atob(i)));
                    return r.insertFragment(a), !0;
                }
                return !1;
            }),
            (r.insertTextData = (e) => {
                var n = e.getData('text/plain');
                if (n) {
                    var i = n.split(/\r\n|\r|\n/),
                        a = !1;
                    for (var s of i) a && f.YR.splitNodes(r, { always: !0 }), r.insertText(s), (a = !0);
                    return !0;
                }
                return !1;
            }),
            (r.onChange = (e) => {
                p.unstable_batchedUpdates(() => {
                    var n = P.get(r);
                    n && n(), a(e);
                });
            }),
            r
        );
    },
    tJ = (e, n) => {
        var r = [];
        for (var [i, a] of f.ML.levels(e, { at: n })) {
            var s = eT.findKey(e, i);
            r.push([a, s]);
        }
        return r;
    };
