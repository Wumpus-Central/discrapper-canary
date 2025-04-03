n.d(t, {
    FZ: () => A,
    Hl: () => M,
    NJ: () => k,
    R8: () => D,
    Sq: () => S,
    Wg: () => L,
    Zn: () => I,
    c2: () => w,
    eE: () => R,
    iE: () => W,
    iK: () => Z,
    lv: () => T,
    nR: () => P,
    q0: () => a.a,
    x0: () => j,
    xb: () => U,
    yd: () => C
}),
    n(47120),
    n(653041);
var r = n(5148),
    i = n(593121),
    a = n.n(i),
    l = n(668705),
    o = n.n(l),
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
function N(e, t, n, i) {
    let a = i.getCurrentContent(),
        l = null;
    null != e && (l = (a = a.createEntity(...e)).getLastCreatedEntityKey());
    let o = a.getFirstBlock(),
        s = new r.SelectionState({
            anchorKey: o.getKey(),
            anchorOffset: t,
            focusKey: o.getKey(),
            focusOffset: n
        });
    return (a = r.Modifier.applyEntity(a, s, l)), r.EditorState.set(i, { currentContent: a });
}
function j(e, t, n, i) {
    let a,
        l,
        s = t.getCurrentContent(),
        c = s.getFirstBlock(),
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
        p = o()(s, a);
    return a.isCollapsed() ? ((s = r.Modifier.insertText(s, a, e, d, p)), (l = 'insert-characters')) : ((s = r.Modifier.replaceText(s, a, e, d, p)), (l = 'replace-characters')), r.EditorState.push(t, s, l);
}
function C(e, t) {
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
function S(e) {
    return e.getCurrentContent().getFirstBlock().getText();
}
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = t.getCurrentContent(),
        i = r.getFirstBlock(),
        a = i.getText(),
        l = [];
    return (
        i.findEntityRanges(
            (e) => null !== e.getEntity(),
            (e, t) => {
                let n = r.getEntity(i.getEntityAt(e)).getType(),
                    o = a.substring(e, t);
                l.push({
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
                (l.forEach((n) => {
                    let { type: i, start: a, end: l } = e,
                        o = e.getFullMatch();
                    !n.processed && (n.type === i && n.start === a && n.text === o ? ((n.processed = !0), (r = !0)) : ((a >= n.start && a < n.end) || (l > n.start && l <= n.end)) && ((n.processed = !0), (t = N(null, n.start, n.end, t))));
                }),
                r)
            )
                return;
            let i = n[e.type];
            t = N([e.type, null != i && i.mutable ? 'MUTABLE' : 'IMMUTABLE', { token: e }], e.start, e.end, t);
        }),
        l.forEach((e) => {
            e.processed || (t = N(null, e.start, e.end, t));
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
    let n = S(t);
    return j(e, t, 0, n.length);
}
function Z(e, t) {
    let n = t.getSelection();
    return (n = (n = n.set('focusOffset', e)).set('anchorOffset', e)), r.EditorState.forceSelection(t, n);
}
function k(e) {
    return Z(e.getCurrentContent().getFirstBlock().getText().length, e);
}
function R(e) {
    return Z(0, e);
}
function D(e) {
    let t = e.getSelection();
    return (t = (t = t.set('focusOffset', 0)).set('isBackward', !0)), r.EditorState.forceSelection(e, t);
}
function L(e) {
    let t = S(e),
        n = e.getSelection();
    return (n = (n = n.set('focusOffset', t.length)).set('isBackward', !1)), r.EditorState.forceSelection(e, n);
}
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
        n = S(e);
    if (n.length > t) {
        let i = e.getSelection();
        (e = j('', e, t, n.length)), i.getAnchorOffset() > t && (i = i.set('anchorOffset', t)), i.getFocusOffset() > t && (i = i.set('focusOffset', t)), (e = r.EditorState.forceSelection(e, i));
    }
    return e;
}
function W(e) {
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
    let a = r.left - i.left + e.scrollLeft;
    a < e.scrollLeft ? (e.scrollLeft = a - 10) : a > e.scrollLeft + e.offsetWidth && (e.scrollLeft = a - e.offsetWidth + 3);
}
function U(e) {
    return 0 === S(e).length;
}
