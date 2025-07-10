(n.d(t, {
    FZ: () => N,
    Hl: () => L,
    NJ: () => A,
    R8: () => F,
    Sq: () => I,
    Wg: () => M,
    Zn: () => P,
    c2: () => w,
    eE: () => Z,
    iE: () => D,
    iK: () => k,
    lv: () => R,
    nR: () => T,
    q0: () => s.a,
    x0: () => j,
    xb: () => H,
    yd: () => C
}),
    n(388685),
    n(539854));
var r = n(399834),
    l = n(598335),
    s = n.n(l),
    a = n(596464),
    i = n.n(a),
    o = n(476363),
    c = n.n(o),
    u = n(963782),
    d = n.n(u),
    h = n(904112),
    p = n.n(h),
    f = n(599552),
    g = n.n(f),
    m = n(544611),
    S = n.n(m),
    y = n(803068),
    b = n.n(y),
    x = n(561099),
    _ = n.n(x),
    v = n(655000),
    O = n.n(v);
function E(e, t, n, l) {
    let s = l.getCurrentContent(),
        a = null;
    null != e && (a = (s = s.createEntity(...e)).getLastCreatedEntityKey());
    let i = s.getFirstBlock(),
        o = new r.SelectionState({
            anchorKey: i.getKey(),
            anchorOffset: t,
            focusKey: i.getKey(),
            focusOffset: n
        });
    return ((s = r.Modifier.applyEntity(s, o, a)), r.EditorState.set(l, { currentContent: s }));
}
function j(e, t, n, l) {
    let s,
        a,
        o = t.getCurrentContent(),
        c = o.getFirstBlock(),
        u = c.getText();
    'number' == typeof n
        ? (n > u.length && (n = u.length),
          null != l && l > u.length && (l = u.length),
          (s = new r.SelectionState({
              anchorKey: c.getKey(),
              anchorOffset: n,
              focusKey: c.getKey(),
              focusOffset: null != l && 0 !== l ? l : n
          })))
        : (s = t.getSelection());
    let d = t.getCurrentInlineStyle(),
        h = i()(o, s);
    return (s.isCollapsed() ? ((o = r.Modifier.insertText(o, s, e, d, h)), (a = 'insert-characters')) : ((o = r.Modifier.replaceText(o, s, e, d, h)), (a = 'replace-characters')), r.EditorState.push(t, o, a));
}
function C(e, t) {
    switch (e) {
        case 'delete':
            return _()(t);
        case 'delete-word':
            return p()(t);
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
function P(e, t) {
    switch (e) {
        case 'transpose-characters':
            return O()(t);
        case 'move-selection-to-start-of-block':
            return S()(t);
        case 'move-selection-to-end-of-block':
            return g()(t);
        default:
            return t;
    }
}
function I(e) {
    return e.getCurrentContent().getFirstBlock().getText();
}
function R(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = t.getCurrentContent(),
        l = r.getFirstBlock(),
        s = l.getText(),
        a = [];
    return (
        l.findEntityRanges(
            (e) => null !== e.getEntity(),
            (e, t) => {
                let n = r.getEntity(l.getEntityAt(e)).getType(),
                    i = s.substring(e, t);
                a.push({
                    processed: !1,
                    type: n,
                    start: e,
                    end: t,
                    text: i
                });
            }
        ),
        e.forEach((e) => {
            let r = !1;
            if (
                (a.forEach((n) => {
                    let { type: l, start: s, end: a } = e,
                        i = e.getFullMatch();
                    !n.processed && (n.type === l && n.start === s && n.text === i ? ((n.processed = !0), (r = !0)) : ((s >= n.start && s < n.end) || (a > n.start && a <= n.end)) && ((n.processed = !0), (t = E(null, n.start, n.end, t))));
                }),
                r)
            )
                return;
            let l = n[e.type];
            t = E([e.type, null != l && l.mutable ? 'MUTABLE' : 'IMMUTABLE', { token: e }], e.start, e.end, t);
        }),
        a.forEach((e) => {
            e.processed || (t = E(null, e.start, e.end, t));
        }),
        t
    );
}
function T(e) {
    return r.EditorState.createEmpty(new r.CompositeDecorator(e));
}
function N(e) {
    let t = r.EditorState.push(e, r.ContentState.createFromText('')),
        n = e.getSelection();
    return (null != n && n.hasFocus && (t = r.EditorState.moveFocusToEnd(t)), t);
}
function w(e, t) {
    let n = I(t);
    return j(e, t, 0, n.length);
}
function k(e, t) {
    let n = t.getSelection();
    return ((n = (n = n.set('focusOffset', e)).set('anchorOffset', e)), r.EditorState.forceSelection(t, n));
}
function A(e) {
    return k(e.getCurrentContent().getFirstBlock().getText().length, e);
}
function Z(e) {
    return k(0, e);
}
function F(e) {
    let t = e.getSelection();
    return ((t = (t = t.set('focusOffset', 0)).set('isBackward', !0)), r.EditorState.forceSelection(e, t));
}
function M(e) {
    let t = I(e),
        n = e.getSelection();
    return ((n = (n = n.set('focusOffset', t.length)).set('isBackward', !1)), r.EditorState.forceSelection(e, n));
}
function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
        n = I(e);
    if (n.length > t) {
        let l = e.getSelection();
        ((e = j('', e, t, n.length)), l.getAnchorOffset() > t && (l = l.set('anchorOffset', t)), l.getFocusOffset() > t && (l = l.set('focusOffset', t)), (e = r.EditorState.forceSelection(e, l)));
    }
    return e;
}
function D(e) {
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
        l = e.getClientRects()[0];
    if (null == r || null == l) return;
    let s = r.left - l.left + e.scrollLeft;
    s < e.scrollLeft ? (e.scrollLeft = s - 10) : s > e.scrollLeft + e.offsetWidth && (e.scrollLeft = s - e.offsetWidth + 3);
}
function H(e) {
    return 0 === I(e).length;
}
