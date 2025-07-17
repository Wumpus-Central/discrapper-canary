(r.d(t, {
    FZ: () => N,
    Hl: () => F,
    NJ: () => k,
    R8: () => L,
    Sq: () => R,
    Wg: () => w,
    Zn: () => j,
    c2: () => A,
    eE: () => M,
    iE: () => D,
    iK: () => Z,
    lv: () => T,
    nR: () => P,
    q0: () => l.a,
    x0: () => I,
    xb: () => H,
    yd: () => v
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
    d = r.n(u),
    h = r(904112),
    p = r.n(h),
    f = r(599552),
    g = r.n(f),
    m = r(544611),
    _ = r.n(m),
    S = r(803068),
    y = r.n(S),
    b = r(561099),
    x = r.n(b),
    E = r(655000),
    C = r.n(E);
function O(e, t, r, s) {
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
function I(e, t, r, s) {
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
    let d = t.getCurrentInlineStyle(),
        h = i()(o, l);
    return (l.isCollapsed() ? ((o = n.Modifier.insertText(o, l, e, d, h)), (a = 'insert-characters')) : ((o = n.Modifier.replaceText(o, l, e, d, h)), (a = 'replace-characters')), n.EditorState.push(t, o, a));
}
function v(e, t) {
    switch (e) {
        case 'delete':
            return x()(t);
        case 'delete-word':
            return p()(t);
        case 'backspace':
            return y()(t);
        case 'backspace-word':
            return d()(t);
        case 'backspace-to-start-of-line':
            return c()(t);
        default:
            return t;
    }
}
function j(e, t) {
    switch (e) {
        case 'transpose-characters':
            return C()(t);
        case 'move-selection-to-start-of-block':
            return _()(t);
        case 'move-selection-to-end-of-block':
            return g()(t);
        default:
            return t;
    }
}
function R(e) {
    return e.getCurrentContent().getFirstBlock().getText();
}
function T(e, t) {
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
                    !r.processed && (r.type === s && r.start === l && r.text === i ? ((r.processed = !0), (n = !0)) : ((l >= r.start && l < r.end) || (a > r.start && a <= r.end)) && ((r.processed = !0), (t = O(null, r.start, r.end, t))));
                }),
                n)
            )
                return;
            let s = r[e.type];
            t = O([e.type, null != s && s.mutable ? 'MUTABLE' : 'IMMUTABLE', { token: e }], e.start, e.end, t);
        }),
        a.forEach((e) => {
            e.processed || (t = O(null, e.start, e.end, t));
        }),
        t
    );
}
function P(e) {
    return n.EditorState.createEmpty(new n.CompositeDecorator(e));
}
function N(e) {
    let t = n.EditorState.push(e, n.ContentState.createFromText('')),
        r = e.getSelection();
    return (null != r && r.hasFocus && (t = n.EditorState.moveFocusToEnd(t)), t);
}
function A(e, t) {
    let r = R(t);
    return I(e, t, 0, r.length);
}
function Z(e, t) {
    let r = t.getSelection();
    return ((r = (r = r.set('focusOffset', e)).set('anchorOffset', e)), n.EditorState.forceSelection(t, r));
}
function k(e) {
    return Z(e.getCurrentContent().getFirstBlock().getText().length, e);
}
function M(e) {
    return Z(0, e);
}
function L(e) {
    let t = e.getSelection();
    return ((t = (t = t.set('focusOffset', 0)).set('isBackward', !0)), n.EditorState.forceSelection(e, t));
}
function w(e) {
    let t = R(e),
        r = e.getSelection();
    return ((r = (r = r.set('focusOffset', t.length)).set('isBackward', !1)), n.EditorState.forceSelection(e, r));
}
function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
        r = R(e);
    if (r.length > t) {
        let s = e.getSelection();
        ((e = I('', e, t, r.length)), s.getAnchorOffset() > t && (s = s.set('anchorOffset', t)), s.getFocusOffset() > t && (s = s.set('focusOffset', t)), (e = n.EditorState.forceSelection(e, s)));
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
