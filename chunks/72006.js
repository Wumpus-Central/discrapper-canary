(r.d(t, {
    FZ: () => N,
    Hl: () => L,
    NJ: () => Z,
    R8: () => M,
    Sq: () => R,
    Wg: () => F,
    Zn: () => I,
    c2: () => k,
    eE: () => A,
    iE: () => D,
    iK: () => w,
    lv: () => P,
    nR: () => T,
    q0: () => l.a,
    x0: () => E,
    xb: () => H,
    yd: () => C
}),
    r(388685),
    r(539854));
var n = r(399834),
    s = r(598335),
    l = r.n(s),
    a = r(596464),
    o = r.n(a),
    i = r(476363),
    c = r.n(i),
    u = r(963782),
    d = r.n(u),
    h = r(904112),
    p = r.n(h),
    f = r(599552),
    g = r.n(f),
    m = r(544611),
    b = r.n(m),
    y = r(803068),
    S = r.n(y),
    x = r(561099),
    O = r.n(x),
    j = r(655000),
    v = r.n(j);
function _(e, t, r, s) {
    let l = s.getCurrentContent(),
        a = null;
    null != e && (a = (l = l.createEntity(...e)).getLastCreatedEntityKey());
    let o = l.getFirstBlock(),
        i = new n.SelectionState({
            anchorKey: o.getKey(),
            anchorOffset: t,
            focusKey: o.getKey(),
            focusOffset: r
        });
    return ((l = n.Modifier.applyEntity(l, i, a)), n.EditorState.set(s, { currentContent: l }));
}
function E(e, t, r, s) {
    let l,
        a,
        i = t.getCurrentContent(),
        c = i.getFirstBlock(),
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
    let d = t.getCurrentInlineStyle(),
        h = o()(i, l);
    return (l.isCollapsed() ? ((i = n.Modifier.insertText(i, l, e, d, h)), (a = 'insert-characters')) : ((i = n.Modifier.replaceText(i, l, e, d, h)), (a = 'replace-characters')), n.EditorState.push(t, i, a));
}
function C(e, t) {
    switch (e) {
        case 'delete':
            return O()(t);
        case 'delete-word':
            return p()(t);
        case 'backspace':
            return S()(t);
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
            return b()(t);
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
                    o = l.substring(e, t);
                a.push({
                    processed: !1,
                    type: r,
                    start: e,
                    end: t,
                    text: o
                });
            }
        ),
        e.forEach((e) => {
            let n = !1;
            if (
                (a.forEach((r) => {
                    let { type: s, start: l, end: a } = e,
                        o = e.getFullMatch();
                    !r.processed && (r.type === s && r.start === l && r.text === o ? ((r.processed = !0), (n = !0)) : ((l >= r.start && l < r.end) || (a > r.start && a <= r.end)) && ((r.processed = !0), (t = _(null, r.start, r.end, t))));
                }),
                n)
            )
                return;
            let s = r[e.type];
            t = _([e.type, null != s && s.mutable ? 'MUTABLE' : 'IMMUTABLE', { token: e }], e.start, e.end, t);
        }),
        a.forEach((e) => {
            e.processed || (t = _(null, e.start, e.end, t));
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
function k(e, t) {
    let r = R(t);
    return E(e, t, 0, r.length);
}
function w(e, t) {
    let r = t.getSelection();
    return ((r = (r = r.set('focusOffset', e)).set('anchorOffset', e)), n.EditorState.forceSelection(t, r));
}
function Z(e) {
    return w(e.getCurrentContent().getFirstBlock().getText().length, e);
}
function A(e) {
    return w(0, e);
}
function M(e) {
    let t = e.getSelection();
    return ((t = (t = t.set('focusOffset', 0)).set('isBackward', !0)), n.EditorState.forceSelection(e, t));
}
function F(e) {
    let t = R(e),
        r = e.getSelection();
    return ((r = (r = r.set('focusOffset', t.length)).set('isBackward', !1)), n.EditorState.forceSelection(e, r));
}
function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
        r = R(e);
    if (r.length > t) {
        let s = e.getSelection();
        ((e = E('', e, t, r.length)), s.getAnchorOffset() > t && (s = s.set('anchorOffset', t)), s.getFocusOffset() > t && (s = s.set('focusOffset', t)), (e = n.EditorState.forceSelection(e, s)));
    }
    return e;
}
function D(e) {
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
function H(e) {
    return 0 === R(e).length;
}
