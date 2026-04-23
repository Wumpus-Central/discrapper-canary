r.d(t, {
    Im: () => $,
    K6: () => l.a,
    L9: () => U,
    Le: () => j,
    ON: () => b,
    Rg: () => v,
    Tj: () => M,
    UO: () => k,
    Xq: () => O,
    a4: () => P,
    aB: () => w,
    e_: () => F,
    le: () => L,
    mQ: () => H,
    pe: () => N,
    t7: () => W,
    uD: () => C,
    vE: () => x,
    y8: () => D,
}),
    r(321073);
var n = r(271830),
    s = r(673776),
    l = r.n(s),
    a = r(197576),
    i = r.n(a),
    o = r(768260),
    u = r.n(o),
    c = r(589834),
    h = r.n(c),
    d = r(288598),
    _ = r.n(d),
    E = r(832368),
    S = r.n(E),
    f = r(692807),
    p = r.n(f),
    g = r(907014),
    A = r.n(g),
    y = r(70986),
    R = r.n(y),
    m = r(1214),
    I = r.n(m);
function T(e, t, r, s) {
    let l = s.getCurrentContent(),
        a = null;
    null != e && (a = (l = l.createEntity(...e)).getLastCreatedEntityKey());
    let i = l.getFirstBlock(),
        o = new n.SelectionState({ anchorKey: i.getKey(), anchorOffset: t, focusKey: i.getKey(), focusOffset: r });
    return (l = n.Modifier.applyEntity(l, o, a)), n.EditorState.set(s, { currentContent: l });
}
function L(e, t, r, s) {
    let l,
        a,
        o = t.getCurrentContent(),
        u = o.getFirstBlock(),
        c = u.getText();
    "number" == typeof r
        ? (r > c.length && (r = c.length),
          null != s && s > c.length && (s = c.length),
          (l = new n.SelectionState({
              anchorKey: u.getKey(),
              anchorOffset: r,
              focusKey: u.getKey(),
              focusOffset: null != s && 0 !== s ? s : r,
          })))
        : (l = t.getSelection());
    let h = t.getCurrentInlineStyle(),
        d = i()(o, l);
    return (
        l.isCollapsed()
            ? ((o = n.Modifier.insertText(o, l, e, h, d)), (a = "insert-characters"))
            : ((o = n.Modifier.replaceText(o, l, e, h, d)), (a = "replace-characters")),
        n.EditorState.push(t, o, a)
    );
}
function x(e, t) {
    switch (e) {
        case "delete":
            return R()(t);
        case "delete-word":
            return _()(t);
        case "backspace":
            return A()(t);
        case "backspace-word":
            return h()(t);
        case "backspace-to-start-of-line":
            return u()(t);
        default:
            return t;
    }
}
function b(e, t) {
    switch (e) {
        case "transpose-characters":
            return I()(t);
        case "move-selection-to-start-of-block":
            return p()(t);
        case "move-selection-to-end-of-block":
            return S()(t);
        default:
            return t;
    }
}
function N(e) {
    return e.getCurrentContent().getFirstBlock().getText();
}
function C(e, t) {
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
                a.push({ processed: !1, type: r, start: e, end: t, text: i });
            },
        ),
        e.forEach((e) => {
            let n = !1;
            if (
                (a.forEach((r) => {
                    let { type: s, start: l, end: a } = e,
                        i = e.getFullMatch();
                    !r.processed &&
                        (r.type === s && r.start === l && r.text === i
                            ? ((r.processed = !0), (n = !0))
                            : ((l >= r.start && l < r.end) || (a > r.start && a <= r.end)) &&
                              ((r.processed = !0), (t = T(null, r.start, r.end, t))));
                }),
                n)
            )
                return;
            let s = r[e.type];
            t = T([e.type, null != s && s.mutable ? "MUTABLE" : "IMMUTABLE", { token: e }], e.start, e.end, t);
        }),
        a.forEach((e) => {
            e.processed || (t = T(null, e.start, e.end, t));
        }),
        t
    );
}
function F(e) {
    return n.EditorState.createEmpty(new n.CompositeDecorator(e));
}
function v(e, t) {
    return n.EditorState.createWithContent(t, new n.CompositeDecorator(e));
}
function O(e) {
    let t = n.EditorState.push(e, n.ContentState.createFromText("")),
        r = e.getSelection();
    return null != r && r.hasFocus && (t = n.EditorState.moveFocusToEnd(t)), t;
}
function W(e, t) {
    let r = N(t);
    return L(e, t, 0, r.length);
}
function k(e, t) {
    let r = t.getSelection();
    return (r = (r = r.set("focusOffset", e)).set("anchorOffset", e)), n.EditorState.forceSelection(t, r);
}
function M(e) {
    return k(e.getCurrentContent().getFirstBlock().getText().length, e);
}
function w(e) {
    return k(0, e);
}
function H(e) {
    let t = e.getSelection();
    return (t = (t = t.set("focusOffset", 0)).set("isBackward", !0)), n.EditorState.forceSelection(e, t);
}
function j(e) {
    let t = N(e),
        r = e.getSelection();
    return (r = (r = r.set("focusOffset", t.length)).set("isBackward", !1)), n.EditorState.forceSelection(e, r);
}
function D(e) {
    let t = e.getCurrentContent().getFirstBlock(),
        r = new n.SelectionState({
            anchorKey: t.getKey(),
            anchorOffset: 0,
            focusKey: t.getKey(),
            focusOffset: t.getLength(),
        });
    return n.EditorState.forceSelection(e, r);
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
        r = N(e);
    if (r.length > t) {
        let s = e.getSelection();
        (e = L("", e, t, r.length)),
            s.getAnchorOffset() > t && (s = s.set("anchorOffset", t)),
            s.getFocusOffset() > t && (s = s.set("focusOffset", t)),
            (e = n.EditorState.forceSelection(e, s));
    }
    return e;
}
function U(e) {
    let t = window.getSelection();
    if (null == t || "Caret" !== t.type || null == e) return;
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
    l < e.scrollLeft
        ? (e.scrollLeft = l - 10)
        : l > e.scrollLeft + e.offsetWidth && (e.scrollLeft = l - e.offsetWidth + 3);
}
function $(e) {
    return 0 === N(e).length;
}
