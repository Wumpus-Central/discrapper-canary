(n.d(t, {
    FZ: () => P,
    Hl: () => U,
    NJ: () => x,
    R8: () => j,
    Sq: () => C,
    Wg: () => M,
    Zn: () => N,
    c2: () => D,
    eE: () => k,
    iE: () => G,
    iK: () => L,
    lv: () => w,
    nR: () => R,
    q0: () => a.a,
    x0: () => S,
    xb: () => Z,
    yd: () => A
}),
    n(388685),
    n(539854));
var r = n(399834),
    i = n(598335),
    a = n.n(i),
    o = n(596464),
    s = n.n(o),
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
    let a = i.getCurrentContent(),
        o = null;
    null != e && (o = (a = a.createEntity(...e)).getLastCreatedEntityKey());
    let s = a.getFirstBlock(),
        l = new r.SelectionState({
            anchorKey: s.getKey(),
            anchorOffset: t,
            focusKey: s.getKey(),
            focusOffset: n
        });
    return ((a = r.Modifier.applyEntity(a, l, o)), r.EditorState.set(i, { currentContent: a }));
}
function S(e, t, n, i) {
    let a,
        o,
        l = t.getCurrentContent(),
        c = l.getFirstBlock(),
        u = c.getText();
    'number' == typeof n
        ? (n > u.length && (n = u.length),
          null != i && i > u.length && (i = u.length),
          (a = new r.SelectionState({
              anchorKey: c.getKey(),
              anchorOffset: n,
              focusKey: c.getKey(),
              focusOffset: null != i && 0 !== i ? i : n
          })))
        : (a = t.getSelection());
    let d = t.getCurrentInlineStyle(),
        f = s()(l, a);
    return (a.isCollapsed() ? ((l = r.Modifier.insertText(l, a, e, d, f)), (o = 'insert-characters')) : ((l = r.Modifier.replaceText(l, a, e, d, f)), (o = 'replace-characters')), r.EditorState.push(t, l, o));
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
function w(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = t.getCurrentContent(),
        i = r.getFirstBlock(),
        a = i.getText(),
        o = [];
    return (
        i.findEntityRanges(
            (e) => null !== e.getEntity(),
            (e, t) => {
                let n = r.getEntity(i.getEntityAt(e)).getType(),
                    s = a.substring(e, t);
                o.push({
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
                (o.forEach((n) => {
                    let { type: i, start: a, end: o } = e,
                        s = e.getFullMatch();
                    !n.processed && (n.type === i && n.start === a && n.text === s ? ((n.processed = !0), (r = !0)) : ((a >= n.start && a < n.end) || (o > n.start && o <= n.end)) && ((n.processed = !0), (t = T(null, n.start, n.end, t))));
                }),
                r)
            )
                return;
            let i = n[e.type];
            t = T([e.type, null != i && i.mutable ? 'MUTABLE' : 'IMMUTABLE', { token: e }], e.start, e.end, t);
        }),
        o.forEach((e) => {
            e.processed || (t = T(null, e.start, e.end, t));
        }),
        t
    );
}
function R(e) {
    return r.EditorState.createEmpty(new r.CompositeDecorator(e));
}
function P(e) {
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
function k(e) {
    return L(0, e);
}
function j(e) {
    let t = e.getSelection();
    return ((t = (t = t.set('focusOffset', 0)).set('isBackward', !0)), r.EditorState.forceSelection(e, t));
}
function M(e) {
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
    let a = r.left - i.left + e.scrollLeft;
    a < e.scrollLeft ? (e.scrollLeft = a - 10) : a > e.scrollLeft + e.offsetWidth && (e.scrollLeft = a - e.offsetWidth + 3);
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
