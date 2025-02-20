n.d(t, {
    FZ: () => A,
    Hl: () => M,
    NJ: () => k,
    R8: () => L,
    Sq: () => S,
    Wg: () => D,
    Zn: () => I,
    c2: () => w,
    eE: () => R,
    iE: () => W,
    iK: () => Z,
    lv: () => P,
    nR: () => T,
    q0: () => a.a,
    x0: () => N,
    xb: () => F,
    yd: () => C
}),
    n(47120),
    n(653041);
var r = n(5148),
    i = n(593121),
    a = n.n(i),
    o = n(668705),
    l = n.n(o),
    s = n(343288),
    c = n.n(s),
    d = n(115129),
    u = n.n(d),
    p = n(357062),
    m = n.n(p),
    f = n(34399),
    h = n.n(f),
    g = n(157202),
    _ = n.n(g),
    b = n(473552),
    v = n.n(b),
    y = n(634523),
    x = n.n(y),
    O = n(302648),
    E = n.n(O);
function j(e, t, n, i) {
    let a = i.getCurrentContent(),
        o = null;
    null != e && (o = (a = a.createEntity(...e)).getLastCreatedEntityKey());
    let l = a.getFirstBlock(),
        s = new r.SelectionState({
            anchorKey: l.getKey(),
            anchorOffset: t,
            focusKey: l.getKey(),
            focusOffset: n
        });
    return (a = r.Modifier.applyEntity(a, s, o)), r.EditorState.set(i, { currentContent: a });
}
function N(e, t, n, i) {
    let a, o;
    let s = t.getCurrentContent(),
        c = s.getFirstBlock(),
        d = c.getText();
    'number' == typeof n
        ? (n > d.length && (n = d.length),
          null != i && i > d.length && (i = d.length),
          (a = new r.SelectionState({
              anchorKey: c.getKey(),
              anchorOffset: n,
              focusKey: c.getKey(),
              focusOffset: null != i && 0 !== i ? i : n
          })))
        : (a = t.getSelection());
    let u = t.getCurrentInlineStyle(),
        p = l()(s, a);
    return a.isCollapsed() ? ((s = r.Modifier.insertText(s, a, e, u, p)), (o = 'insert-characters')) : ((s = r.Modifier.replaceText(s, a, e, u, p)), (o = 'replace-characters')), r.EditorState.push(t, s, o);
}
function C(e, t) {
    switch (e) {
        case 'delete':
            return x()(t);
        case 'delete-word':
            return m()(t);
        case 'backspace':
            return v()(t);
        case 'backspace-word':
            return u()(t);
        case 'backspace-to-start-of-line':
            return c()(t);
        default:
            return t;
    }
}
function I(e, t) {
    switch (e) {
        case 'transpose-characters':
            return E()(t);
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
function P(e, t) {
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
                    l = a.substring(e, t);
                o.push({
                    processed: !1,
                    type: n,
                    start: e,
                    end: t,
                    text: l
                });
            }
        ),
        e.forEach((e) => {
            let r = !1;
            if (
                (o.forEach((n) => {
                    let { type: i, start: a, end: o } = e,
                        l = e.getFullMatch();
                    !n.processed && (n.type === i && n.start === a && n.text === l ? ((n.processed = !0), (r = !0)) : ((a >= n.start && a < n.end) || (o > n.start && o <= n.end)) && ((n.processed = !0), (t = j(null, n.start, n.end, t))));
                }),
                r)
            )
                return;
            let i = n[e.type];
            t = j([e.type, null != i && i.mutable ? 'MUTABLE' : 'IMMUTABLE', { token: e }], e.start, e.end, t);
        }),
        o.forEach((e) => {
            e.processed || (t = j(null, e.start, e.end, t));
        }),
        t
    );
}
function T(e) {
    return r.EditorState.createEmpty(new r.CompositeDecorator(e));
}
function A(e) {
    let t = r.EditorState.push(e, r.ContentState.createFromText('')),
        n = e.getSelection();
    return null != n && n.hasFocus && (t = r.EditorState.moveFocusToEnd(t)), t;
}
function w(e, t) {
    let n = S(t);
    return N(e, t, 0, n.length);
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
function L(e) {
    let t = e.getSelection();
    return (t = (t = t.set('focusOffset', 0)).set('isBackward', !0)), r.EditorState.forceSelection(e, t);
}
function D(e) {
    let t = S(e),
        n = e.getSelection();
    return (n = (n = n.set('focusOffset', t.length)).set('isBackward', !1)), r.EditorState.forceSelection(e, n);
}
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
        n = S(e);
    if (n.length > t) {
        let i = e.getSelection();
        (e = N('', e, t, n.length)), i.getAnchorOffset() > t && (i = i.set('anchorOffset', t)), i.getFocusOffset() > t && (i = i.set('focusOffset', t)), (e = r.EditorState.forceSelection(e, i));
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
function F(e) {
    return 0 === S(e).length;
}
