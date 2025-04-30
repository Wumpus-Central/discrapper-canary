n.d(t, {
    FZ: () => A,
    Hl: () => M,
    NJ: () => R,
    R8: () => D,
    Sq: () => N,
    Wg: () => L,
    Zn: () => I,
    c2: () => w,
    eE: () => k,
    iE: () => U,
    iK: () => Z,
    lv: () => T,
    nR: () => P,
    q0: () => l.a,
    x0: () => C,
    xb: () => F,
    yd: () => S
}),
    n(388685),
    n(539854);
var r = n(5148),
    i = n(593121),
    l = n.n(i),
    a = n(668705),
    o = n.n(a),
    s = n(283852),
    c = n.n(s),
    u = n(115129),
    d = n.n(u),
    p = n(357062),
    m = n.n(p),
    f = n(34399),
    h = n.n(f),
    g = n(157202),
    _ = n.n(g),
    b = n(473552),
    x = n.n(b),
    y = n(634523),
    E = n.n(y),
    v = n(302648),
    O = n.n(v);
function j(e, t, n, i) {
    let l = i.getCurrentContent(),
        a = null;
    null != e && (a = (l = l.createEntity(...e)).getLastCreatedEntityKey());
    let o = l.getFirstBlock(),
        s = new r.SelectionState({
            anchorKey: o.getKey(),
            anchorOffset: t,
            focusKey: o.getKey(),
            focusOffset: n
        });
    return (l = r.Modifier.applyEntity(l, s, a)), r.EditorState.set(i, { currentContent: l });
}
function C(e, t, n, i) {
    let l,
        a,
        s = t.getCurrentContent(),
        c = s.getFirstBlock(),
        u = c.getText();
    'number' == typeof n
        ? (n > u.length && (n = u.length),
          null != i && i > u.length && (i = u.length),
          (l = new r.SelectionState({
              anchorKey: c.getKey(),
              anchorOffset: n,
              focusKey: c.getKey(),
              focusOffset: null != i && 0 !== i ? i : n
          })))
        : (l = t.getSelection());
    let d = t.getCurrentInlineStyle(),
        p = o()(s, l);
    return l.isCollapsed() ? ((s = r.Modifier.insertText(s, l, e, d, p)), (a = 'insert-characters')) : ((s = r.Modifier.replaceText(s, l, e, d, p)), (a = 'replace-characters')), r.EditorState.push(t, s, a);
}
function S(e, t) {
    switch (e) {
        case 'delete':
            return E()(t);
        case 'delete-word':
            return m()(t);
        case 'backspace':
            return x()(t);
        case 'backspace-word':
            return d()(t);
        case 'backspace-to-start-of-line':
            return c()(t);
        default:
            return t;
    }
}
function I(e, t) {
    switch (e) {
        case 'transpose-characters':
            return O()(t);
        case 'move-selection-to-start-of-block':
            return _()(t);
        case 'move-selection-to-end-of-block':
            return h()(t);
        default:
            return t;
    }
}
function N(e) {
    return e.getCurrentContent().getFirstBlock().getText();
}
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = t.getCurrentContent(),
        i = r.getFirstBlock(),
        l = i.getText(),
        a = [];
    return (
        i.findEntityRanges(
            (e) => null !== e.getEntity(),
            (e, t) => {
                let n = r.getEntity(i.getEntityAt(e)).getType(),
                    o = l.substring(e, t);
                a.push({
                    processed: !1,
                    type: n,
                    start: e,
                    end: t,
                    text: o
                });
            }
        ),
        e.forEach((e) => {
            let r = !1;
            if (
                (a.forEach((n) => {
                    let { type: i, start: l, end: a } = e,
                        o = e.getFullMatch();
                    !n.processed && (n.type === i && n.start === l && n.text === o ? ((n.processed = !0), (r = !0)) : ((l >= n.start && l < n.end) || (a > n.start && a <= n.end)) && ((n.processed = !0), (t = j(null, n.start, n.end, t))));
                }),
                r)
            )
                return;
            let i = n[e.type];
            t = j([e.type, null != i && i.mutable ? 'MUTABLE' : 'IMMUTABLE', { token: e }], e.start, e.end, t);
        }),
        a.forEach((e) => {
            e.processed || (t = j(null, e.start, e.end, t));
        }),
        t
    );
}
function P(e) {
    return r.EditorState.createEmpty(new r.CompositeDecorator(e));
}
function A(e) {
    let t = r.EditorState.push(e, r.ContentState.createFromText('')),
        n = e.getSelection();
    return null != n && n.hasFocus && (t = r.EditorState.moveFocusToEnd(t)), t;
}
function w(e, t) {
    let n = N(t);
    return C(e, t, 0, n.length);
}
function Z(e, t) {
    let n = t.getSelection();
    return (n = (n = n.set('focusOffset', e)).set('anchorOffset', e)), r.EditorState.forceSelection(t, n);
}
function R(e) {
    return Z(e.getCurrentContent().getFirstBlock().getText().length, e);
}
function k(e) {
    return Z(0, e);
}
function D(e) {
    let t = e.getSelection();
    return (t = (t = t.set('focusOffset', 0)).set('isBackward', !0)), r.EditorState.forceSelection(e, t);
}
function L(e) {
    let t = N(e),
        n = e.getSelection();
    return (n = (n = n.set('focusOffset', t.length)).set('isBackward', !1)), r.EditorState.forceSelection(e, n);
}
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
        n = N(e);
    if (n.length > t) {
        let i = e.getSelection();
        (e = C('', e, t, n.length)), i.getAnchorOffset() > t && (i = i.set('anchorOffset', t)), i.getFocusOffset() > t && (i = i.set('focusOffset', t)), (e = r.EditorState.forceSelection(e, i));
    }
    return e;
}
function U(e) {
    let t = window.getSelection();
    if (null == t || 'Caret' !== t.type || null == e) return;
    let n = t.getRangeAt(0);
    if (
        !(function (e, t) {
            for (; null != e; ) {
                if (e === t) return !0;
                e = e.parentNode;
            }
            return !1;
        })(n.commonAncestorContainer, e)
    )
        return;
    let r = n.getClientRects()[0],
        i = e.getClientRects()[0];
    if (null == r || null == i) return;
    let l = r.left - i.left + e.scrollLeft;
    l < e.scrollLeft ? (e.scrollLeft = l - 10) : l > e.scrollLeft + e.offsetWidth && (e.scrollLeft = l - e.offsetWidth + 3);
}
function F(e) {
    return 0 === N(e).length;
}
