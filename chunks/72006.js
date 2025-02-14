n.d(t, {
    FZ: () => R,
    Hl: () => w,
    NJ: () => k,
    R8: () => O,
    Sq: () => j,
    Wg: () => D,
    Zn: () => A,
    c2: () => L,
    eE: () => M,
    iE: () => F,
    iK: () => P,
    lv: () => y,
    nR: () => Z,
    q0: () => a.a,
    x0: () => T,
    xb: () => U,
    yd: () => b
}),
    n(47120),
    n(653041);
var i = n(5148),
    l = n(593121),
    a = n.n(l),
    r = n(668705),
    s = n.n(r),
    o = n(283852),
    c = n.n(o),
    d = n(115129),
    u = n.n(d),
    m = n(357062),
    _ = n.n(m),
    h = n(34399),
    p = n.n(h),
    g = n(157202),
    f = n.n(g),
    x = n(473552),
    C = n.n(x),
    E = n(634523),
    v = n.n(E),
    I = n(302648),
    N = n.n(I);
function S(e, t, n, l) {
    let a = l.getCurrentContent(),
        r = null;
    null != e && (r = (a = a.createEntity(...e)).getLastCreatedEntityKey());
    let s = a.getFirstBlock(),
        o = new i.SelectionState({
            anchorKey: s.getKey(),
            anchorOffset: t,
            focusKey: s.getKey(),
            focusOffset: n
        });
    return (a = i.Modifier.applyEntity(a, o, r)), i.EditorState.set(l, { currentContent: a });
}
function T(e, t, n, l) {
    let a, r;
    let o = t.getCurrentContent(),
        c = o.getFirstBlock(),
        d = c.getText();
    'number' == typeof n
        ? (n > d.length && (n = d.length),
          null != l && l > d.length && (l = d.length),
          (a = new i.SelectionState({
              anchorKey: c.getKey(),
              anchorOffset: n,
              focusKey: c.getKey(),
              focusOffset: null != l && 0 !== l ? l : n
          })))
        : (a = t.getSelection());
    let u = t.getCurrentInlineStyle(),
        m = s()(o, a);
    return a.isCollapsed() ? ((o = i.Modifier.insertText(o, a, e, u, m)), (r = 'insert-characters')) : ((o = i.Modifier.replaceText(o, a, e, u, m)), (r = 'replace-characters')), i.EditorState.push(t, o, r);
}
function b(e, t) {
    switch (e) {
        case 'delete':
            return v()(t);
        case 'delete-word':
            return _()(t);
        case 'backspace':
            return C()(t);
        case 'backspace-word':
            return u()(t);
        case 'backspace-to-start-of-line':
            return c()(t);
        default:
            return t;
    }
}
function A(e, t) {
    switch (e) {
        case 'transpose-characters':
            return N()(t);
        case 'move-selection-to-start-of-block':
            return f()(t);
        case 'move-selection-to-end-of-block':
            return p()(t);
        default:
            return t;
    }
}
function j(e) {
    return e.getCurrentContent().getFirstBlock().getText();
}
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = t.getCurrentContent(),
        l = i.getFirstBlock(),
        a = l.getText(),
        r = [];
    return (
        l.findEntityRanges(
            (e) => null !== e.getEntity(),
            (e, t) => {
                let n = i.getEntity(l.getEntityAt(e)).getType(),
                    s = a.substring(e, t);
                r.push({
                    processed: !1,
                    type: n,
                    start: e,
                    end: t,
                    text: s
                });
            }
        ),
        e.forEach((e) => {
            let i = !1;
            if (
                (r.forEach((n) => {
                    let { type: l, start: a, end: r } = e,
                        s = e.getFullMatch();
                    !n.processed && (n.type === l && n.start === a && n.text === s ? ((n.processed = !0), (i = !0)) : ((a >= n.start && a < n.end) || (r > n.start && r <= n.end)) && ((n.processed = !0), (t = S(null, n.start, n.end, t))));
                }),
                i)
            )
                return;
            let l = n[e.type];
            t = S([e.type, null != l && l.mutable ? 'MUTABLE' : 'IMMUTABLE', { token: e }], e.start, e.end, t);
        }),
        r.forEach((e) => {
            e.processed || (t = S(null, e.start, e.end, t));
        }),
        t
    );
}
function Z(e) {
    return i.EditorState.createEmpty(new i.CompositeDecorator(e));
}
function R(e) {
    let t = i.EditorState.push(e, i.ContentState.createFromText('')),
        n = e.getSelection();
    return null != n && n.hasFocus && (t = i.EditorState.moveFocusToEnd(t)), t;
}
function L(e, t) {
    let n = j(t);
    return T(e, t, 0, n.length);
}
function P(e, t) {
    let n = t.getSelection();
    return (n = (n = n.set('focusOffset', e)).set('anchorOffset', e)), i.EditorState.forceSelection(t, n);
}
function k(e) {
    return P(e.getCurrentContent().getFirstBlock().getText().length, e);
}
function M(e) {
    return P(0, e);
}
function O(e) {
    let t = e.getSelection();
    return (t = (t = t.set('focusOffset', 0)).set('isBackward', !0)), i.EditorState.forceSelection(e, t);
}
function D(e) {
    let t = j(e),
        n = e.getSelection();
    return (n = (n = n.set('focusOffset', t.length)).set('isBackward', !1)), i.EditorState.forceSelection(e, n);
}
function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
        n = j(e);
    if (n.length > t) {
        let l = e.getSelection();
        (e = T('', e, t, n.length)), l.getAnchorOffset() > t && (l = l.set('anchorOffset', t)), l.getFocusOffset() > t && (l = l.set('focusOffset', t)), (e = i.EditorState.forceSelection(e, l));
    }
    return e;
}
function F(e) {
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
    let i = n.getClientRects()[0],
        l = e.getClientRects()[0];
    if (null == i || null == l) return;
    let a = i.left - l.left + e.scrollLeft;
    a < e.scrollLeft ? (e.scrollLeft = a - 10) : a > e.scrollLeft + e.offsetWidth && (e.scrollLeft = a - e.offsetWidth + 3);
}
function U(e) {
    return 0 === j(e).length;
}
