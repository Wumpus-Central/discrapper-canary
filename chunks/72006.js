(n.d(t, {
    FZ: () => N,
    Hl: () => D,
    NJ: () => w,
    R8: () => F,
    Sq: () => R,
    Wg: () => Z,
    Zn: () => I,
    c2: () => A,
    eE: () => M,
    iE: () => L,
    iK: () => k,
    lv: () => P,
    nR: () => T,
    q0: () => l.a,
    x0: () => j,
    xb: () => H,
    yd: () => C
}),
    n(388685),
    n(539854));
var r = n(399834),
    s = n(598335),
    l = n.n(s),
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
    E = n(655000),
    v = n.n(E);
function O(e, t, n, s) {
    let l = s.getCurrentContent(),
        a = null;
    null != e && (a = (l = l.createEntity(...e)).getLastCreatedEntityKey());
    let i = l.getFirstBlock(),
        o = new r.SelectionState({
            anchorKey: i.getKey(),
            anchorOffset: t,
            focusKey: i.getKey(),
            focusOffset: n
        });
    return ((l = r.Modifier.applyEntity(l, o, a)), r.EditorState.set(s, { currentContent: l }));
}
function j(e, t, n, s) {
    let l,
        a,
        o = t.getCurrentContent(),
        c = o.getFirstBlock(),
        u = c.getText();
    'number' == typeof n
        ? (n > u.length && (n = u.length),
          null != s && s > u.length && (s = u.length),
          (l = new r.SelectionState({
              anchorKey: c.getKey(),
              anchorOffset: n,
              focusKey: c.getKey(),
              focusOffset: null != s && 0 !== s ? s : n
          })))
        : (l = t.getSelection());
    let d = t.getCurrentInlineStyle(),
        h = i()(o, l);
    return (l.isCollapsed() ? ((o = r.Modifier.insertText(o, l, e, d, h)), (a = 'insert-characters')) : ((o = r.Modifier.replaceText(o, l, e, d, h)), (a = 'replace-characters')), r.EditorState.push(t, o, a));
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
function I(e, t) {
    switch (e) {
        case 'transpose-characters':
            return v()(t);
        case 'move-selection-to-start-of-block':
            return S()(t);
        case 'move-selection-to-end-of-block':
            return g()(t);
        default:
            return t;
    }
}
function R(e) {
    return e.getCurrentContent().getFirstBlock().getText();
}
function P(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = t.getCurrentContent(),
        s = r.getFirstBlock(),
        l = s.getText(),
        a = [];
    return (
        s.findEntityRanges(
            (e) => null !== e.getEntity(),
            (e, t) => {
                let n = r.getEntity(s.getEntityAt(e)).getType(),
                    i = l.substring(e, t);
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
                    let { type: s, start: l, end: a } = e,
                        i = e.getFullMatch();
                    !n.processed && (n.type === s && n.start === l && n.text === i ? ((n.processed = !0), (r = !0)) : ((l >= n.start && l < n.end) || (a > n.start && a <= n.end)) && ((n.processed = !0), (t = O(null, n.start, n.end, t))));
                }),
                r)
            )
                return;
            let s = n[e.type];
            t = O([e.type, null != s && s.mutable ? 'MUTABLE' : 'IMMUTABLE', { token: e }], e.start, e.end, t);
        }),
        a.forEach((e) => {
            e.processed || (t = O(null, e.start, e.end, t));
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
function A(e, t) {
    let n = R(t);
    return j(e, t, 0, n.length);
}
function k(e, t) {
    let n = t.getSelection();
    return ((n = (n = n.set('focusOffset', e)).set('anchorOffset', e)), r.EditorState.forceSelection(t, n));
}
function w(e) {
    return k(e.getCurrentContent().getFirstBlock().getText().length, e);
}
function M(e) {
    return k(0, e);
}
function F(e) {
    let t = e.getSelection();
    return ((t = (t = t.set('focusOffset', 0)).set('isBackward', !0)), r.EditorState.forceSelection(e, t));
}
function Z(e) {
    let t = R(e),
        n = e.getSelection();
    return ((n = (n = n.set('focusOffset', t.length)).set('isBackward', !1)), r.EditorState.forceSelection(e, n));
}
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
        n = R(e);
    if (n.length > t) {
        let s = e.getSelection();
        ((e = j('', e, t, n.length)), s.getAnchorOffset() > t && (s = s.set('anchorOffset', t)), s.getFocusOffset() > t && (s = s.set('focusOffset', t)), (e = r.EditorState.forceSelection(e, s)));
    }
    return e;
}
function L(e) {
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
        s = e.getClientRects()[0];
    if (null == r || null == s) return;
    let l = r.left - s.left + e.scrollLeft;
    l < e.scrollLeft ? (e.scrollLeft = l - 10) : l > e.scrollLeft + e.offsetWidth && (e.scrollLeft = l - e.offsetWidth + 3);
}
function H(e) {
    return 0 === R(e).length;
}
