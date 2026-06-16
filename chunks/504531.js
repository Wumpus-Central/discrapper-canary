s.d(t, {
    Im: () => x,
    K6: () => i.a,
    L9: () => B,
    Le: () => Q,
    ON: () => M,
    Rg: () => m,
    Tj: () => D,
    UO: () => b,
    Xq: () => W,
    a4: () => q,
    aB: () => v,
    e_: () => N,
    le: () => H,
    mQ: () => F,
    pe: () => O,
    t7: () => k,
    uD: () => w,
    vE: () => L,
    y8: () => U,
}),
    s(321073);
var n = s(271830),
    r = s(673776),
    i = s.n(r),
    a = s(197576),
    c = s.n(a),
    o = s(768260),
    l = s.n(o),
    u = s(589834),
    _ = s.n(u),
    h = s(288598),
    d = s.n(h),
    S = s(832368),
    E = s.n(S),
    A = s(692807),
    f = s.n(A),
    g = s(907014),
    y = s.n(g),
    p = s(70986),
    R = s.n(p),
    T = s(1214),
    I = s.n(T);
function C(e, t, s, r) {
    let i = r.getCurrentContent(),
        a = null;
    null != e && (a = (i = i.createEntity(...e)).getLastCreatedEntityKey());
    let c = i.getFirstBlock(),
        o = new n.SelectionState({ anchorKey: c.getKey(), anchorOffset: t, focusKey: c.getKey(), focusOffset: s });
    return (i = n.Modifier.applyEntity(i, o, a)), n.EditorState.set(r, { currentContent: i });
}
function H(e, t, s, r) {
    let i,
        a,
        o = t.getCurrentContent(),
        l = o.getFirstBlock(),
        u = l.getText();
    "number" == typeof s
        ? (s > u.length && (s = u.length),
          null != r && r > u.length && (r = u.length),
          (i = new n.SelectionState({
              anchorKey: l.getKey(),
              anchorOffset: s,
              focusKey: l.getKey(),
              focusOffset: null != r && 0 !== r ? r : s,
          })))
        : (i = t.getSelection());
    let _ = t.getCurrentInlineStyle(),
        h = c()(o, i);
    return (
        i.isCollapsed()
            ? ((o = n.Modifier.insertText(o, i, e, _, h)), (a = "insert-characters"))
            : ((o = n.Modifier.replaceText(o, i, e, _, h)), (a = "replace-characters")),
        n.EditorState.push(t, o, a)
    );
}
function L(e, t) {
    switch (e) {
        case "delete":
            return R()(t);
        case "delete-word":
            return d()(t);
        case "backspace":
            return y()(t);
        case "backspace-word":
            return _()(t);
        case "backspace-to-start-of-line":
            return l()(t);
        default:
            return t;
    }
}
function M(e, t) {
    switch (e) {
        case "transpose-characters":
            return I()(t);
        case "move-selection-to-start-of-block":
            return f()(t);
        case "move-selection-to-end-of-block":
            return E()(t);
        default:
            return t;
    }
}
function O(e) {
    return e.getCurrentContent().getFirstBlock().getText();
}
function w(e, t) {
    let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = t.getCurrentContent(),
        r = n.getFirstBlock(),
        i = r.getText(),
        a = [];
    return (
        r.findEntityRanges(
            (e) => null !== e.getEntity(),
            (e, t) => {
                let s = n.getEntity(r.getEntityAt(e)).getType(),
                    c = i.substring(e, t);
                a.push({ processed: !1, type: s, start: e, end: t, text: c });
            },
        ),
        e.forEach((e) => {
            let n = !1;
            if (
                (a.forEach((s) => {
                    let { type: r, start: i, end: a } = e,
                        c = e.getFullMatch();
                    !s.processed &&
                        (s.type === r && s.start === i && s.text === c
                            ? ((s.processed = !0), (n = !0))
                            : ((i >= s.start && i < s.end) || (a > s.start && a <= s.end)) &&
                              ((s.processed = !0), (t = C(null, s.start, s.end, t))));
                }),
                n)
            )
                return;
            let r = s[e.type];
            t = C([e.type, null != r && r.mutable ? "MUTABLE" : "IMMUTABLE", { token: e }], e.start, e.end, t);
        }),
        a.forEach((e) => {
            e.processed || (t = C(null, e.start, e.end, t));
        }),
        t
    );
}
function N(e) {
    return n.EditorState.createEmpty(new n.CompositeDecorator(e));
}
function m(e, t) {
    return n.EditorState.createWithContent(t, new n.CompositeDecorator(e));
}
function W(e) {
    let t = n.EditorState.push(e, n.ContentState.createFromText("")),
        s = e.getSelection();
    return null != s && s.hasFocus && (t = n.EditorState.moveFocusToEnd(t)), t;
}
function k(e, t) {
    let s = O(t);
    return H(e, t, 0, s.length);
}
function b(e, t) {
    let s = t.getSelection();
    return (s = (s = s.set("focusOffset", e)).set("anchorOffset", e)), n.EditorState.forceSelection(t, s);
}
function D(e) {
    return b(e.getCurrentContent().getFirstBlock().getText().length, e);
}
function v(e) {
    return b(0, e);
}
function F(e) {
    let t = e.getSelection();
    return (t = (t = t.set("focusOffset", 0)).set("isBackward", !0)), n.EditorState.forceSelection(e, t);
}
function Q(e) {
    let t = O(e),
        s = e.getSelection();
    return (s = (s = s.set("focusOffset", t.length)).set("isBackward", !1)), n.EditorState.forceSelection(e, s);
}
function U(e) {
    let t = e.getCurrentContent().getFirstBlock(),
        s = new n.SelectionState({
            anchorKey: t.getKey(),
            anchorOffset: 0,
            focusKey: t.getKey(),
            focusOffset: t.getLength(),
        });
    return n.EditorState.forceSelection(e, s);
}
function q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
        s = O(e);
    if (s.length > t) {
        let r = e.getSelection();
        (e = H("", e, t, s.length)),
            r.getAnchorOffset() > t && (r = r.set("anchorOffset", t)),
            r.getFocusOffset() > t && (r = r.set("focusOffset", t)),
            (e = n.EditorState.forceSelection(e, r));
    }
    return e;
}
function B(e) {
    let t = window.getSelection();
    if (null == t || "Caret" !== t.type || null == e) return;
    let s = t.getRangeAt(0);
    if (
        !(function (e, t) {
            for (; null != e; ) {
                if (e === t) return !0;
                e = e.parentNode;
            }
            return !1;
        })(s.commonAncestorContainer, e)
    )
        return;
    let n = s.getClientRects()[0],
        r = e.getClientRects()[0];
    if (null == n || null == r) return;
    let i = n.left - r.left + e.scrollLeft;
    i < e.scrollLeft
        ? (e.scrollLeft = i - 10)
        : i > e.scrollLeft + e.offsetWidth && (e.scrollLeft = i - e.offsetWidth + 3);
}
function x(e) {
    return 0 === O(e).length;
}
