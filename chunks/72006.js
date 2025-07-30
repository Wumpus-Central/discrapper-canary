(r.d(t, {
    FZ: () => N,
    Hl: () => L,
    NJ: () => Z,
    R8: () => w,
    Sq: () => I,
    Wg: () => D,
    Zn: () => R,
    c2: () => A,
    eE: () => M,
    iE: () => F,
    iK: () => k,
    lv: () => P,
    nR: () => T,
    q0: () => l.a,
    x0: () => O,
    xb: () => W,
    yd: () => E
}),
    r(388685),
    r(539854));
var n = r(399834),
    s = r(598335),
    l = r.n(s),
    a = r(596464),
    i = r.n(a),
    o = r(476363),
    c = r.n(o),
    u = r(963782),
    h = r.n(u),
    d = r(904112),
    p = r.n(d),
    f = r(599552),
    g = r.n(f),
    m = r(544611),
    y = r.n(m),
    _ = r(803068),
    S = r.n(_),
    x = r(561099),
    b = r.n(x),
    v = r(655000),
    C = r.n(v);
function j(e, t, r, s) {
    let l = s.getCurrentContent(),
        a = null;
    null != e && (a = (l = l.createEntity(...e)).getLastCreatedEntityKey());
    let i = l.getFirstBlock(),
        o = new n.SelectionState({
            anchorKey: i.getKey(),
            anchorOffset: t,
            focusKey: i.getKey(),
            focusOffset: r
        });
    return ((l = n.Modifier.applyEntity(l, o, a)), n.EditorState.set(s, { currentContent: l }));
}
function O(e, t, r, s) {
    let l,
        a,
        o = t.getCurrentContent(),
        c = o.getFirstBlock(),
        u = c.getText();
    'number' == typeof r
        ? (r > u.length && (r = u.length),
          null != s && s > u.length && (s = u.length),
          (l = new n.SelectionState({
              anchorKey: c.getKey(),
              anchorOffset: r,
              focusKey: c.getKey(),
              focusOffset: null != s && 0 !== s ? s : r
          })))
        : (l = t.getSelection());
    let h = t.getCurrentInlineStyle(),
        d = i()(o, l);
    return (l.isCollapsed() ? ((o = n.Modifier.insertText(o, l, e, h, d)), (a = 'insert-characters')) : ((o = n.Modifier.replaceText(o, l, e, h, d)), (a = 'replace-characters')), n.EditorState.push(t, o, a));
}
function E(e, t) {
    switch (e) {
        case 'delete':
            return b()(t);
        case 'delete-word':
            return p()(t);
        case 'backspace':
            return S()(t);
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
function I(e) {
    return e.getCurrentContent().getFirstBlock().getText();
}
function P(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = t.getCurrentContent(),
        s = n.getFirstBlock(),
        l = s.getText(),
        a = [];
    return (
        s.findEntityRanges(
            (e) => null !== e.getEntity(),
            (e, t) => {
                let r = n.getEntity(s.getEntityAt(e)).getType(),
                    i = l.substring(e, t);
                a.push({
                    processed: !1,
                    type: r,
                    start: e,
                    end: t,
                    text: i
                });
            }
        ),
        e.forEach((e) => {
            let n = !1;
            if (
                (a.forEach((r) => {
                    let { type: s, start: l, end: a } = e,
                        i = e.getFullMatch();
                    !r.processed && (r.type === s && r.start === l && r.text === i ? ((r.processed = !0), (n = !0)) : ((l >= r.start && l < r.end) || (a > r.start && a <= r.end)) && ((r.processed = !0), (t = j(null, r.start, r.end, t))));
                }),
                n)
            )
                return;
            let s = r[e.type];
            t = j([e.type, null != s && s.mutable ? 'MUTABLE' : 'IMMUTABLE', { token: e }], e.start, e.end, t);
        }),
        a.forEach((e) => {
            e.processed || (t = j(null, e.start, e.end, t));
        }),
        t
    );
}
function T(e) {
    return n.EditorState.createEmpty(new n.CompositeDecorator(e));
}
function N(e) {
    let t = n.EditorState.push(e, n.ContentState.createFromText('')),
        r = e.getSelection();
    return (null != r && r.hasFocus && (t = n.EditorState.moveFocusToEnd(t)), t);
}
function A(e, t) {
    let r = I(t);
    return O(e, t, 0, r.length);
}
function k(e, t) {
    let r = t.getSelection();
    return ((r = (r = r.set('focusOffset', e)).set('anchorOffset', e)), n.EditorState.forceSelection(t, r));
}
function Z(e) {
    return k(e.getCurrentContent().getFirstBlock().getText().length, e);
}
function M(e) {
    return k(0, e);
}
function w(e) {
    let t = e.getSelection();
    return ((t = (t = t.set('focusOffset', 0)).set('isBackward', !0)), n.EditorState.forceSelection(e, t));
}
function D(e) {
    let t = I(e),
        r = e.getSelection();
    return ((r = (r = r.set('focusOffset', t.length)).set('isBackward', !1)), n.EditorState.forceSelection(e, r));
}
function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
        r = I(e);
    if (r.length > t) {
        let s = e.getSelection();
        ((e = O('', e, t, r.length)), s.getAnchorOffset() > t && (s = s.set('anchorOffset', t)), s.getFocusOffset() > t && (s = s.set('focusOffset', t)), (e = n.EditorState.forceSelection(e, s)));
    }
    return e;
}
function F(e) {
    let t = window.getSelection();
    if (null == t || 'Caret' !== t.type || null == e) return;
    let r = t.getRangeAt(0);
    if (
        !(function (e, t) {
            for (; null != e; ) {
                if (e === t) return !0;
                e = e.parentNode;
            }
            return !1;
        })(r.commonAncestorContainer, e)
    )
        return;
    let n = r.getClientRects()[0],
        s = e.getClientRects()[0];
    if (null == n || null == s) return;
    let l = n.left - s.left + e.scrollLeft;
    l < e.scrollLeft ? (e.scrollLeft = l - 10) : l > e.scrollLeft + e.offsetWidth && (e.scrollLeft = l - e.offsetWidth + 3);
}
function W(e) {
    return 0 === I(e).length;
}
