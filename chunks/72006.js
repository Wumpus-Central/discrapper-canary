(n.d(t, {
    FZ: () => N,
    Hl: () => F,
    NJ: () => Z,
    R8: () => D,
    Sq: () => E,
    Wg: () => M,
    Zn: () => R,
    c2: () => k,
    eE: () => A,
    iE: () => L,
    iK: () => w,
    lv: () => I,
    nR: () => T,
    q0: () => l.a,
    x0: () => _,
    xb: () => B,
    yd: () => P
}),
    n(388685),
    n(539854));
var r = n(399834),
    s = n(598335),
    l = n.n(s),
    a = n(596464),
    o = n.n(a),
    i = n(476363),
    c = n.n(i),
    u = n(963782),
    h = n.n(u),
    d = n(904112),
    p = n.n(d),
    f = n(599552),
    g = n.n(f),
    m = n(544611),
    y = n.n(m),
    x = n(803068),
    b = n.n(x),
    S = n(561099),
    v = n.n(S),
    j = n(655000),
    C = n.n(j);
function O(e, t, n, s) {
    let l = s.getCurrentContent(),
        a = null;
    null != e && (a = (l = l.createEntity(...e)).getLastCreatedEntityKey());
    let o = l.getFirstBlock(),
        i = new r.SelectionState({
            anchorKey: o.getKey(),
            anchorOffset: t,
            focusKey: o.getKey(),
            focusOffset: n
        });
    return ((l = r.Modifier.applyEntity(l, i, a)), r.EditorState.set(s, { currentContent: l }));
}
function _(e, t, n, s) {
    let l,
        a,
        i = t.getCurrentContent(),
        c = i.getFirstBlock(),
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
    let h = t.getCurrentInlineStyle(),
        d = o()(i, l);
    return (l.isCollapsed() ? ((i = r.Modifier.insertText(i, l, e, h, d)), (a = 'insert-characters')) : ((i = r.Modifier.replaceText(i, l, e, h, d)), (a = 'replace-characters')), r.EditorState.push(t, i, a));
}
function P(e, t) {
    switch (e) {
        case 'delete':
            return v()(t);
        case 'delete-word':
            return p()(t);
        case 'backspace':
            return b()(t);
        case 'backspace-word':
            return h()(t);
        case 'backspace-to-start-of-line':
            return c()(t);
        default:
            return t;
    }
}
function R(e, t) {
    switch (e) {
        case 'transpose-characters':
            return C()(t);
        case 'move-selection-to-start-of-block':
            return y()(t);
        case 'move-selection-to-end-of-block':
            return g()(t);
        default:
            return t;
    }
}
function E(e) {
    return e.getCurrentContent().getFirstBlock().getText();
}
function I(e, t) {
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
                    let { type: s, start: l, end: a } = e,
                        o = e.getFullMatch();
                    !n.processed && (n.type === s && n.start === l && n.text === o ? ((n.processed = !0), (r = !0)) : ((l >= n.start && l < n.end) || (a > n.start && a <= n.end)) && ((n.processed = !0), (t = O(null, n.start, n.end, t))));
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
function k(e, t) {
    let n = E(t);
    return _(e, t, 0, n.length);
}
function w(e, t) {
    let n = t.getSelection();
    return ((n = (n = n.set('focusOffset', e)).set('anchorOffset', e)), r.EditorState.forceSelection(t, n));
}
function Z(e) {
    return w(e.getCurrentContent().getFirstBlock().getText().length, e);
}
function A(e) {
    return w(0, e);
}
function D(e) {
    let t = e.getSelection();
    return ((t = (t = t.set('focusOffset', 0)).set('isBackward', !0)), r.EditorState.forceSelection(e, t));
}
function M(e) {
    let t = E(e),
        n = e.getSelection();
    return ((n = (n = n.set('focusOffset', t.length)).set('isBackward', !1)), r.EditorState.forceSelection(e, n));
}
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
        n = E(e);
    if (n.length > t) {
        let s = e.getSelection();
        ((e = _('', e, t, n.length)), s.getAnchorOffset() > t && (s = s.set('anchorOffset', t)), s.getFocusOffset() > t && (s = s.set('focusOffset', t)), (e = r.EditorState.forceSelection(e, s)));
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
function B(e) {
    return 0 === E(e).length;
}
