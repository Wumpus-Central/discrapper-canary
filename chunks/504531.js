r.d(t, {
    Im: () => q,
    K6: () => l.a,
    L9: () => U,
    Le: () => w,
    ON: () => b,
    Rg: () => F,
    Tj: () => W,
    UO: () => k,
    Xq: () => O,
    a4: () => P,
    aB: () => M,
    e_: () => C,
    le: () => I,
    mQ: () => D,
    pe: () => N,
    t7: () => j,
    uD: () => v,
    vE: () => L,
    y8: () => H,
}),
    r(321073);
var s = r(271830),
    n = r(673776),
    l = r.n(n),
    a = r(197576),
    i = r.n(a),
    o = r(768260),
    u = r.n(o),
    c = r(589834),
    d = r.n(c),
    h = r(288598),
    _ = r.n(h),
    S = r(832368),
    E = r.n(S),
    g = r(692807),
    p = r.n(g),
    f = r(907014),
    A = r.n(f),
    m = r(70986),
    R = r.n(m),
    y = r(1214),
    T = r.n(y);
function x(e, t, r, n) {
    let l = n.getCurrentContent(),
        a = null;
    null != e && (a = (l = l.createEntity(...e)).getLastCreatedEntityKey());
    let i = l.getFirstBlock(),
        o = new s.SelectionState({ anchorKey: i.getKey(), anchorOffset: t, focusKey: i.getKey(), focusOffset: r });
    return (l = s.Modifier.applyEntity(l, o, a)), s.EditorState.set(n, { currentContent: l });
}
function I(e, t, r, n) {
    let l,
        a,
        o = t.getCurrentContent(),
        u = o.getFirstBlock(),
        c = u.getText();
    "number" == typeof r
        ? (r > c.length && (r = c.length),
          null != n && n > c.length && (n = c.length),
          (l = new s.SelectionState({
              anchorKey: u.getKey(),
              anchorOffset: r,
              focusKey: u.getKey(),
              focusOffset: null != n && 0 !== n ? n : r,
          })))
        : (l = t.getSelection());
    let d = t.getCurrentInlineStyle(),
        h = i()(o, l);
    return (
        l.isCollapsed()
            ? ((o = s.Modifier.insertText(o, l, e, d, h)), (a = "insert-characters"))
            : ((o = s.Modifier.replaceText(o, l, e, d, h)), (a = "replace-characters")),
        s.EditorState.push(t, o, a)
    );
}
function L(e, t) {
    switch (e) {
        case "delete":
            return R()(t);
        case "delete-word":
            return _()(t);
        case "backspace":
            return A()(t);
        case "backspace-word":
            return d()(t);
        case "backspace-to-start-of-line":
            return u()(t);
        default:
            return t;
    }
}
function b(e, t) {
    switch (e) {
        case "transpose-characters":
            return T()(t);
        case "move-selection-to-start-of-block":
            return p()(t);
        case "move-selection-to-end-of-block":
            return E()(t);
        default:
            return t;
    }
}
function N(e) {
    return e.getCurrentContent().getFirstBlock().getText();
}
function v(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        s = t.getCurrentContent(),
        n = s.getFirstBlock(),
        l = n.getText(),
        a = [];
    return (
        n.findEntityRanges(
            (e) => null !== e.getEntity(),
            (e, t) => {
                let r = s.getEntity(n.getEntityAt(e)).getType(),
                    i = l.substring(e, t);
                a.push({ processed: !1, type: r, start: e, end: t, text: i });
            },
        ),
        e.forEach((e) => {
            let s = !1;
            if (
                (a.forEach((r) => {
                    let { type: n, start: l, end: a } = e,
                        i = e.getFullMatch();
                    !r.processed &&
                        (r.type === n && r.start === l && r.text === i
                            ? ((r.processed = !0), (s = !0))
                            : ((l >= r.start && l < r.end) || (a > r.start && a <= r.end)) &&
                              ((r.processed = !0), (t = x(null, r.start, r.end, t))));
                }),
                s)
            )
                return;
            let n = r[e.type];
            t = x([e.type, null != n && n.mutable ? "MUTABLE" : "IMMUTABLE", { token: e }], e.start, e.end, t);
        }),
        a.forEach((e) => {
            e.processed || (t = x(null, e.start, e.end, t));
        }),
        t
    );
}
function C(e) {
    return s.EditorState.createEmpty(new s.CompositeDecorator(e));
}
function F(e, t) {
    return s.EditorState.createWithContent(t, new s.CompositeDecorator(e));
}
function O(e) {
    let t = s.EditorState.push(e, s.ContentState.createFromText("")),
        r = e.getSelection();
    return null != r && r.hasFocus && (t = s.EditorState.moveFocusToEnd(t)), t;
}
function j(e, t) {
    let r = N(t);
    return I(e, t, 0, r.length);
}
function k(e, t) {
    let r = t.getSelection();
    return (r = (r = r.set("focusOffset", e)).set("anchorOffset", e)), s.EditorState.forceSelection(t, r);
}
function W(e) {
    return k(e.getCurrentContent().getFirstBlock().getText().length, e);
}
function M(e) {
    return k(0, e);
}
function D(e) {
    let t = e.getSelection();
    return (t = (t = t.set("focusOffset", 0)).set("isBackward", !0)), s.EditorState.forceSelection(e, t);
}
function w(e) {
    let t = N(e),
        r = e.getSelection();
    return (r = (r = r.set("focusOffset", t.length)).set("isBackward", !1)), s.EditorState.forceSelection(e, r);
}
function H(e) {
    let t = e.getCurrentContent().getFirstBlock(),
        r = new s.SelectionState({
            anchorKey: t.getKey(),
            anchorOffset: 0,
            focusKey: t.getKey(),
            focusOffset: t.getLength(),
        });
    return s.EditorState.forceSelection(e, r);
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
        r = N(e);
    if (r.length > t) {
        let n = e.getSelection();
        (e = I("", e, t, r.length)),
            n.getAnchorOffset() > t && (n = n.set("anchorOffset", t)),
            n.getFocusOffset() > t && (n = n.set("focusOffset", t)),
            (e = s.EditorState.forceSelection(e, n));
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
    let s = r.getClientRects()[0],
        n = e.getClientRects()[0];
    if (null == s || null == n) return;
    let l = s.left - n.left + e.scrollLeft;
    l < e.scrollLeft
        ? (e.scrollLeft = l - 10)
        : l > e.scrollLeft + e.offsetWidth && (e.scrollLeft = l - e.offsetWidth + 3);
}
function q(e) {
    return 0 === N(e).length;
}
