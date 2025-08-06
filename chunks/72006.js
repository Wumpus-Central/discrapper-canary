(n.d(t, {
    FZ: () => w,
    Hl: () => U,
    NJ: () => x,
    R8: () => k,
    Sq: () => C,
    Wg: () => j,
    Zn: () => N,
    c2: () => D,
    eE: () => M,
    iE: () => G,
    iK: () => L,
    lv: () => R,
    nR: () => P,
    q0: () => o.a,
    x0: () => S,
    xb: () => Z,
    yd: () => A
}),
    n(388685),
    n(539854));
var r = n(399834),
    i = n(598335),
    o = n.n(i),
    a = n(596464),
    s = n.n(a),
    l = n(476363),
    c = n.n(l),
    u = n(963782),
    d = n.n(u),
    f = n(904112),
    _ = n.n(f),
    p = n(599552),
    h = n.n(p),
    m = n(544611),
    g = n.n(m),
    E = n(803068),
    b = n.n(E),
    y = n(561099),
    O = n.n(y),
    v = n(655000),
    I = n.n(v);
function T(e, t, n, i) {
    let o = i.getCurrentContent(),
        a = null;
    null != e && (a = (o = o.createEntity(...e)).getLastCreatedEntityKey());
    let s = o.getFirstBlock(),
        l = new r.SelectionState({
            anchorKey: s.getKey(),
            anchorOffset: t,
            focusKey: s.getKey(),
            focusOffset: n
        });
    return ((o = r.Modifier.applyEntity(o, l, a)), r.EditorState.set(i, { currentContent: o }));
}
function S(e, t, n, i) {
    let o,
        a,
        l = t.getCurrentContent(),
        c = l.getFirstBlock(),
        u = c.getText();
    'number' == typeof n
        ? (n > u.length && (n = u.length),
          null != i && i > u.length && (i = u.length),
          (o = new r.SelectionState({
              anchorKey: c.getKey(),
              anchorOffset: n,
              focusKey: c.getKey(),
              focusOffset: null != i && 0 !== i ? i : n
          })))
        : (o = t.getSelection());
    let d = t.getCurrentInlineStyle(),
        f = s()(l, o);
    return (o.isCollapsed() ? ((l = r.Modifier.insertText(l, o, e, d, f)), (a = 'insert-characters')) : ((l = r.Modifier.replaceText(l, o, e, d, f)), (a = 'replace-characters')), r.EditorState.push(t, l, a));
}
function A(e, t) {
    switch (e) {
        case 'delete':
            return O()(t);
        case 'delete-word':
            return _()(t);
        case 'backspace':
            return b()(t);
        case 'backspace-word':
            return d()(t);
        case 'backspace-to-start-of-line':
            return c()(t);
        default:
            return t;
    }
}
function N(e, t) {
    switch (e) {
        case 'transpose-characters':
            return I()(t);
        case 'move-selection-to-start-of-block':
            return g()(t);
        case 'move-selection-to-end-of-block':
            return h()(t);
        default:
            return t;
    }
}
function C(e) {
    return e.getCurrentContent().getFirstBlock().getText();
}
function R(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = t.getCurrentContent(),
        i = r.getFirstBlock(),
        o = i.getText(),
        a = [];
    return (
        i.findEntityRanges(
            (e) => null !== e.getEntity(),
            (e, t) => {
                let n = r.getEntity(i.getEntityAt(e)).getType(),
                    s = o.substring(e, t);
                a.push({
                    processed: !1,
                    type: n,
                    start: e,
                    end: t,
                    text: s
                });
            }
        ),
        e.forEach((e) => {
            let r = !1;
            if (
                (a.forEach((n) => {
                    let { type: i, start: o, end: a } = e,
                        s = e.getFullMatch();
                    !n.processed && (n.type === i && n.start === o && n.text === s ? ((n.processed = !0), (r = !0)) : ((o >= n.start && o < n.end) || (a > n.start && a <= n.end)) && ((n.processed = !0), (t = T(null, n.start, n.end, t))));
                }),
                r)
            )
                return;
            let i = n[e.type];
            t = T([e.type, null != i && i.mutable ? 'MUTABLE' : 'IMMUTABLE', { token: e }], e.start, e.end, t);
        }),
        a.forEach((e) => {
            e.processed || (t = T(null, e.start, e.end, t));
        }),
        t
    );
}
function P(e) {
    return r.EditorState.createEmpty(new r.CompositeDecorator(e));
}
function w(e) {
    let t = r.EditorState.push(e, r.ContentState.createFromText('')),
        n = e.getSelection();
    return (null != n && n.hasFocus && (t = r.EditorState.moveFocusToEnd(t)), t);
}
function D(e, t) {
    let n = C(t);
    return S(e, t, 0, n.length);
}
function L(e, t) {
    let n = t.getSelection();
    return ((n = (n = n.set('focusOffset', e)).set('anchorOffset', e)), r.EditorState.forceSelection(t, n));
}
function x(e) {
    return L(e.getCurrentContent().getFirstBlock().getText().length, e);
}
function M(e) {
    return L(0, e);
}
function k(e) {
    let t = e.getSelection();
    return ((t = (t = t.set('focusOffset', 0)).set('isBackward', !0)), r.EditorState.forceSelection(e, t));
}
function j(e) {
    let t = C(e),
        n = e.getSelection();
    return ((n = (n = n.set('focusOffset', t.length)).set('isBackward', !1)), r.EditorState.forceSelection(e, n));
}
function U(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
        n = C(e);
    if (n.length > t) {
        let i = e.getSelection();
        ((e = S('', e, t, n.length)), i.getAnchorOffset() > t && (i = i.set('anchorOffset', t)), i.getFocusOffset() > t && (i = i.set('focusOffset', t)), (e = r.EditorState.forceSelection(e, i)));
    }
    return e;
}
function G(e) {
    let t = window.getSelection();
    if (null == t || 'Caret' !== t.type || null == e) return;
    let n = t.getRangeAt(0);
    if (!B(n.commonAncestorContainer, e)) return;
    let r = n.getClientRects()[0],
        i = e.getClientRects()[0];
    if (null == r || null == i) return;
    let o = r.left - i.left + e.scrollLeft;
    o < e.scrollLeft ? (e.scrollLeft = o - 10) : o > e.scrollLeft + e.offsetWidth && (e.scrollLeft = o - e.offsetWidth + 3);
}
function B(e, t) {
    for (; null != e; ) {
        if (e === t) return !0;
        e = e.parentNode;
    }
    return !1;
}
function Z(e) {
    return 0 === C(e).length;
}
