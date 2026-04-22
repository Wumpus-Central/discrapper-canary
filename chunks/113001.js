"use strict";
n.d(t, { A: () => f, j: () => h });
var i = n(877413),
    l = n.n(i),
    s = n(284009),
    r = n.n(s),
    a = n(186306),
    o = n(339871),
    c = n(35277),
    u = n(711371),
    d = n(652215);
function h(e, t) {
    let { cmd: n = !1, ctrl: i = !1, alt: l = !1, shift: s = !1 } = t;
    return (
        (null == n || e.metaKey === n) &&
        (null == i || e.ctrlKey === i) &&
        (null == l || e.altKey === l) &&
        (null == s || e.shiftKey === s)
    );
}
let m = (e) => {
        let t = u.VW.getCurrentBlock(e);
        if (null != t) {
            let n = u.VW.start(e, t[1]);
            return c.b.select(e, { anchor: n, focus: n }), !0;
        }
        return !1;
    },
    p = (e) => {
        let t = u.VW.getCurrentBlock(e);
        if (null != t) {
            let n = u.VW.end(e, t[1]);
            return c.b.select(e, { anchor: n, focus: n }), !0;
        }
        return !1;
    };
function f(e) {
    return (
        (e.onKeyDown = (t) => {
            let n = e.isMac;
            switch (t.which) {
                case d.Ks6.B:
                    if (!u.VW.isEditorEmpty(e) && h(t, { ctrl: !n, cmd: n })) return (0, o.Px)(e, "bold"), !0;
                    break;
                case d.Ks6.I:
                    if (!u.VW.isEditorEmpty(e) && h(t, { ctrl: !n, cmd: n })) return (0, o.Px)(e, "italics"), !0;
                    break;
                case d.Ks6.U:
                    if (!u.VW.isEditorEmpty(e) && h(t, { ctrl: !n, cmd: n })) return (0, o.Px)(e, "underline"), !0;
                    break;
                case d.Ks6.S:
                    if (!u.VW.isEditorEmpty(e) && h(t, { ctrl: !n, cmd: n, shift: !0 }))
                        return (0, o.Px)(e, "strikethrough"), !0;
                    break;
                case d.Ks6.TAB:
                    if (null != e.selection && h(t, { shift: null })) {
                        let [n, i] = u.ZF.edges(e.selection),
                            l = u.VW.blocks(e).slice(n.path[0], i.path[0] + 1),
                            s = !0;
                        for (let [e] of l)
                            if ("line" !== e.type || !e.codeBlockState?.isInCodeBlock) {
                                s = !1;
                                break;
                            }
                        if (s) {
                            if (!t.shiftKey && u.ZF.isCollapsed(e.selection)) return c.b.insertText(e, "  "), !0;
                            let n = !t.shiftKey;
                            return (
                                a.o.withSingleEntry(e, () => {
                                    let t = e.selection?.anchor ?? u.VW.start(e, []),
                                        i = e.selection?.focus ?? u.VW.end(e, []);
                                    for (let [s, r] of l) {
                                        let l = s.children[0];
                                        if (!u.l5.isText(l)) continue;
                                        let a = u.PW.child(r, 0),
                                            o = { path: a, offset: 0 };
                                        if (n)
                                            c.b.insertText(e, "  ", { at: o }),
                                                u.PW.equals(t.path, a) &&
                                                    0 !== t.offset &&
                                                    (t = { path: a, offset: t.offset + 2 }),
                                                u.PW.equals(i.path, a) &&
                                                    0 !== i.offset &&
                                                    (i = { path: a, offset: i.offset + 2 });
                                        else if (l.text.startsWith("  ")) {
                                            let n = { path: u.PW.child(r, 0), offset: 2 };
                                            c.b.delete(e, { at: { anchor: o, focus: n } }),
                                                u.PW.equals(t.path, a) &&
                                                    (t = { path: a, offset: Math.max(0, t.offset - 2) }),
                                                u.PW.equals(i.path, a) &&
                                                    (i = { path: a, offset: Math.max(0, i.offset - 2) });
                                        }
                                    }
                                    c.b.select(e, { anchor: t, focus: i });
                                }),
                                !0
                            );
                        }
                    }
                    break;
                case d.Ks6.ARROW_LEFT:
                case d.Ks6.ARROW_RIGHT: {
                    let i;
                    if (h(t, { shift: null })) i = "character";
                    else if (h(t, { ctrl: !n, alt: n, shift: null })) i = "word";
                    else if (n && h(t, { cmd: !0, shift: null })) return !1;
                    else return !1;
                    let s = e.children[e.selection?.focus?.path[0] ?? 0],
                        r = "rtl" === l()(u.AS.string(s)),
                        a = (t.which === d.Ks6.ARROW_LEFT) == !r;
                    return c.b.keyboardMove(e, { reverse: a, unit: i, edge: t.shiftKey ? "focus" : void 0 }), !0;
                }
                case d.Ks6.A:
                    if (n && h(t, { ctrl: !0 }) && m(e)) return !0;
                    break;
                case d.Ks6.E:
                    if (n && h(t, { ctrl: !0 }) && p(e)) return !0;
                    break;
                case d.Ks6.HOME:
                    if (h(t, { shift: !1, ctrl: !1 }) && m(e)) return !0;
                    break;
                case d.Ks6.END:
                    if (h(t, { shift: !1, ctrl: !1 }) && p(e)) return !0;
                    break;
                case d.Ks6.BACKSPACE:
                case d.Ks6.DELETE:
                case d.Ks6.K:
                    let i = t.which === d.Ks6.BACKSPACE;
                    if (
                        ((!n && t.which !== d.Ks6.K && h(t, { ctrl: !0, shift: !0 })) ||
                            (n && t.which !== d.Ks6.K && h(t, { cmd: !0 })) ||
                            (n && t.which === d.Ks6.K && h(t, { ctrl: !0 }))) &&
                        null != e.selection
                    ) {
                        let [t, n] = u.ZF.edges(e.selection),
                            [l, s] = u.VW.node(e, [i ? t.path[0] : n.path[0]]);
                        if (
                            (r()(u.VW.isBlock(e, l), "Top-most node of selection is not a block"),
                            (i && !u.Kh.isAtStart(t, [l, s])) || (!i && !u.Kh.isAtEnd(n, [l, s])))
                        )
                            return i ? e.deleteBackward("line") : e.deleteForward("line"), !0;
                    }
            }
            return !1;
        }),
        e
    );
}
