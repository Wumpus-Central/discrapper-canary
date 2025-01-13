n.d(t, {
    FZ: function () {
        return P;
    },
    Hl: function () {
        return B;
    },
    NJ: function () {
        return O;
    },
    R8: function () {
        return k;
    },
    Sq: function () {
        return j;
    },
    Wg: function () {
        return D;
    },
    Zn: function () {
        return b;
    },
    c2: function () {
        return L;
    },
    eE: function () {
        return M;
    },
    iE: function () {
        return U;
    },
    iK: function () {
        return y;
    },
    lv: function () {
        return R;
    },
    nR: function () {
        return Z;
    },
    q0: function () {
        return l.a;
    },
    x0: function () {
        return S;
    },
    xb: function () {
        return w;
    },
    yd: function () {
        return A;
    }
}),
    n(47120),
    n(653041);
var i = n(5148),
    r = n(593121),
    l = n.n(r),
    a = n(668705),
    o = n.n(a),
    s = n(283852),
    c = n.n(s),
    d = n(115129),
    u = n.n(d),
    m = n(357062),
    h = n.n(m),
    f = n(34399),
    p = n.n(f),
    _ = n(157202),
    g = n.n(_),
    E = n(473552),
    C = n.n(E),
    I = n(634523),
    x = n.n(I),
    N = n(302648),
    v = n.n(N);
function T(e, t, n, r) {
    let l = r.getCurrentContent(),
        a = null;
    null != e && (a = (l = l.createEntity(...e)).getLastCreatedEntityKey());
    let o = l.getFirstBlock(),
        s = new i.SelectionState({
            anchorKey: o.getKey(),
            anchorOffset: t,
            focusKey: o.getKey(),
            focusOffset: n
        });
    return (l = i.Modifier.applyEntity(l, s, a)), i.EditorState.set(r, { currentContent: l });
}
function S(e, t, n, r) {
    let l, a;
    let s = t.getCurrentContent(),
        c = s.getFirstBlock(),
        d = c.getText();
    'number' == typeof n
        ? (n > d.length && (n = d.length),
          null != r && r > d.length && (r = d.length),
          (l = new i.SelectionState({
              anchorKey: c.getKey(),
              anchorOffset: n,
              focusKey: c.getKey(),
              focusOffset: null != r && 0 !== r ? r : n
          })))
        : (l = t.getSelection());
    let u = t.getCurrentInlineStyle(),
        m = o()(s, l);
    return l.isCollapsed() ? ((s = i.Modifier.insertText(s, l, e, u, m)), (a = 'insert-characters')) : ((s = i.Modifier.replaceText(s, l, e, u, m)), (a = 'replace-characters')), i.EditorState.push(t, s, a);
}
function A(e, t) {
    switch (e) {
        case 'delete':
            return x()(t);
        case 'delete-word':
            return h()(t);
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
function b(e, t) {
    switch (e) {
        case 'transpose-characters':
            return v()(t);
        case 'move-selection-to-start-of-block':
            return g()(t);
        case 'move-selection-to-end-of-block':
            return p()(t);
        default:
            return t;
    }
}
function j(e) {
    return e.getCurrentContent().getFirstBlock().getText();
}
function R(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = t.getCurrentContent(),
        r = i.getFirstBlock(),
        l = r.getText(),
        a = [];
    return (
        r.findEntityRanges(
            (e) => null !== e.getEntity(),
            (e, t) => {
                let n = i.getEntity(r.getEntityAt(e)).getType(),
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
            let i = !1;
            if (
                (a.forEach((n) => {
                    let { type: r, start: l, end: a } = e,
                        o = e.getFullMatch();
                    if (!n.processed) n.type === r && n.start === l && n.text === o ? ((n.processed = !0), (i = !0)) : ((l >= n.start && l < n.end) || (a > n.start && a <= n.end)) && ((n.processed = !0), (t = T(null, n.start, n.end, t)));
                }),
                i)
            )
                return;
            let r = n[e.type];
            t = T([e.type, null != r && r.mutable ? 'MUTABLE' : 'IMMUTABLE', { token: e }], e.start, e.end, t);
        }),
        a.forEach((e) => {
            !e.processed && (t = T(null, e.start, e.end, t));
        }),
        t
    );
}
function Z(e) {
    return i.EditorState.createEmpty(new i.CompositeDecorator(e));
}
function P(e) {
    let t = i.EditorState.push(e, i.ContentState.createFromText('')),
        n = e.getSelection();
    return null != n && n.hasFocus && (t = i.EditorState.moveFocusToEnd(t)), t;
}
function L(e, t) {
    let n = j(t);
    return S(e, t, 0, n.length);
}
function y(e, t) {
    let n = t.getSelection();
    return (n = (n = n.set('focusOffset', e)).set('anchorOffset', e)), i.EditorState.forceSelection(t, n);
}
function O(e) {
    return y(e.getCurrentContent().getFirstBlock().getText().length, e);
}
function M(e) {
    return y(0, e);
}
function k(e) {
    let t = e.getSelection();
    return (t = (t = t.set('focusOffset', 0)).set('isBackward', !0)), i.EditorState.forceSelection(e, t);
}
function D(e) {
    let t = j(e),
        n = e.getSelection();
    return (n = (n = n.set('focusOffset', t.length)).set('isBackward', !1)), i.EditorState.forceSelection(e, n);
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
        n = j(e);
    if (n.length > t) {
        let r = e.getSelection();
        (e = S('', e, t, n.length)), r.getAnchorOffset() > t && (r = r.set('anchorOffset', t)), r.getFocusOffset() > t && (r = r.set('focusOffset', t)), (e = i.EditorState.forceSelection(e, r));
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
    let i = n.getClientRects()[0],
        r = e.getClientRects()[0];
    if (null == i || null == r) return;
    let l = i.left - r.left + e.scrollLeft;
    l < e.scrollLeft ? (e.scrollLeft = l - 10) : l > e.scrollLeft + e.offsetWidth && (e.scrollLeft = l - e.offsetWidth + 3);
}
function w(e) {
    return 0 === j(e).length;
}
