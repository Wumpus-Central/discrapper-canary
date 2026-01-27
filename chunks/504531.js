r.d(t, {
    Im: () => q,
    K6: () => s.a,
    L9: () => U,
    Le: () => W,
    ON: () => T,
    Rg: () => N,
    Tj: () => F,
    UO: () => P,
    Xq: () => C,
    a4: () => H,
    aB: () => k,
    e_: () => L,
    le: () => v,
    mQ: () => M,
    pe: () => I,
    t7: () => w,
    uD: () => j,
    vE: () => x,
    y8: () => D,
}),
    r(896048),
    r(321073);
var n = r(271830),
    l = r(673776),
    s = r.n(l),
    a = r(197576),
    i = r.n(a),
    o = r(768260),
    c = r.n(o),
    u = r(589834),
    d = r.n(u),
    h = r(288598),
    p = r.n(h),
    f = r(832368),
    g = r.n(f),
    S = r(692807),
    E = r.n(S),
    y = r(907014),
    _ = r.n(y),
    m = r(70986),
    A = r.n(m),
    b = r(1214),
    O = r.n(b);

function R(e, t, r, l) {
    let s = l.getCurrentContent(),
        a = null;
    null != e && (a = (s = s.createEntity(...e)).getLastCreatedEntityKey());
    let i = s.getFirstBlock(),
        o = new n.SelectionState({
            anchorKey: i.getKey(),
            anchorOffset: t,
            focusKey: i.getKey(),
            focusOffset: r,
        });
    return (
        (s = n.Modifier.applyEntity(s, o, a)),
        n.EditorState.set(l, {
            currentContent: s,
        })
    );
}

function v(e, t, r, l) {
    let s,
        a,
        o = t.getCurrentContent(),
        c = o.getFirstBlock(),
        u = c.getText();
    "number" == typeof r
        ? (r > u.length && (r = u.length),
          null != l && l > u.length && (l = u.length),
          (s = new n.SelectionState({
              anchorKey: c.getKey(),
              anchorOffset: r,
              focusKey: c.getKey(),
              focusOffset: null != l && 0 !== l ? l : r,
          })))
        : (s = t.getSelection());
    let d = t.getCurrentInlineStyle(),
        h = i()(o, s);
    return (
        s.isCollapsed()
            ? ((o = n.Modifier.insertText(o, s, e, d, h)), (a = "insert-characters"))
            : ((o = n.Modifier.replaceText(o, s, e, d, h)), (a = "replace-characters")),
        n.EditorState.push(t, o, a)
    );
}

function x(e, t) {
    switch (e) {
        case "delete":
            return A()(t);
        case "delete-word":
            return p()(t);
        case "backspace":
            return _()(t);
        case "backspace-word":
            return d()(t);
        case "backspace-to-start-of-line":
            return c()(t);
        default:
            return t;
    }
}

function T(e, t) {
    switch (e) {
        case "transpose-characters":
            return O()(t);
        case "move-selection-to-start-of-block":
            return E()(t);
        case "move-selection-to-end-of-block":
            return g()(t);
        default:
            return t;
    }
}

function I(e) {
    return e.getCurrentContent().getFirstBlock().getText();
}

function j(e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = t.getCurrentContent(),
        l = n.getFirstBlock(),
        s = l.getText(),
        a = [];
    return (
        l.findEntityRanges(
            (e) => null !== e.getEntity(),
            (e, t) => {
                let r = n.getEntity(l.getEntityAt(e)).getType(),
                    i = s.substring(e, t);
                a.push({
                    processed: !1,
                    type: r,
                    start: e,
                    end: t,
                    text: i,
                });
            },
        ),
        e.forEach((e) => {
            let n = !1;
            if (
                (a.forEach((r) => {
                    let { type: l, start: s, end: a } = e,
                        i = e.getFullMatch();
                    !r.processed &&
                        (r.type === l && r.start === s && r.text === i
                            ? ((r.processed = !0), (n = !0))
                            : ((s >= r.start && s < r.end) || (a > r.start && a <= r.end)) &&
                              ((r.processed = !0), (t = R(null, r.start, r.end, t))));
                }),
                n)
            )
                return;
            let l = r[e.type];
            t = R(
                [
                    e.type,
                    null != l && l.mutable ? "MUTABLE" : "IMMUTABLE",
                    {
                        token: e,
                    },
                ],
                e.start,
                e.end,
                t,
            );
        }),
        a.forEach((e) => {
            e.processed || (t = R(null, e.start, e.end, t));
        }),
        t
    );
}

function L(e) {
    return n.EditorState.createEmpty(new n.CompositeDecorator(e));
}

function N(e, t) {
    return n.EditorState.createWithContent(t, new n.CompositeDecorator(e));
}

function C(e) {
    let t = n.EditorState.push(e, n.ContentState.createFromText("")),
        r = e.getSelection();
    return null != r && r.hasFocus && (t = n.EditorState.moveFocusToEnd(t)), t;
}

function w(e, t) {
    let r = I(t);
    return v(e, t, 0, r.length);
}

function P(e, t) {
    let r = t.getSelection();
    return (r = (r = r.set("focusOffset", e)).set("anchorOffset", e)), n.EditorState.forceSelection(t, r);
}

function F(e) {
    return P(e.getCurrentContent().getFirstBlock().getText().length, e);
}

function k(e) {
    return P(0, e);
}

function M(e) {
    let t = e.getSelection();
    return (t = (t = t.set("focusOffset", 0)).set("isBackward", !0)), n.EditorState.forceSelection(e, t);
}

function W(e) {
    let t = I(e),
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

function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
        r = I(e);
    if (r.length > t) {
        let l = e.getSelection();
        (e = v("", e, t, r.length)),
            l.getAnchorOffset() > t && (l = l.set("anchorOffset", t)),
            l.getFocusOffset() > t && (l = l.set("focusOffset", t)),
            (e = n.EditorState.forceSelection(e, l));
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
        l = e.getClientRects()[0];
    if (null == n || null == l) return;
    let s = n.left - l.left + e.scrollLeft;
    s < e.scrollLeft
        ? (e.scrollLeft = s - 10)
        : s > e.scrollLeft + e.offsetWidth && (e.scrollLeft = s - e.offsetWidth + 3);
}

function q(e) {
    return 0 === I(e).length;
}
