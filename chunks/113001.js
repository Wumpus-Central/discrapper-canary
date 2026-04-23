"use strict";
n.d(t, { A: () => h, j: () => _ });
var r = n(877413),
    i = n.n(r),
    s = n(284009),
    a = n.n(s),
    o = n(186306),
    l = n(339871),
    u = n(35277),
    c = n(711371),
    d = n(652215);
function _(e, t) {
    let { cmd: n = !1, ctrl: r = !1, alt: i = !1, shift: s = !1 } = t;
    return (
        (null == n || e.metaKey === n) &&
        (null == r || e.ctrlKey === r) &&
        (null == i || e.altKey === i) &&
        (null == s || e.shiftKey === s)
    );
}
let f = (e) => {
        let t = c.VW.getCurrentBlock(e);
        if (null != t) {
            let n = c.VW.start(e, t[1]);
            return u.b.select(e, { anchor: n, focus: n }), !0;
        }
        return !1;
    },
    p = (e) => {
        let t = c.VW.getCurrentBlock(e);
        if (null != t) {
            let n = c.VW.end(e, t[1]);
            return u.b.select(e, { anchor: n, focus: n }), !0;
        }
        return !1;
    };
function h(e) {
    return (
        (e.onKeyDown = (t) => {
            let n = e.isMac;
            switch (t.which) {
                case d.Ks6.B:
                    if (!c.VW.isEditorEmpty(e) && _(t, { ctrl: !n, cmd: n })) return (0, l.Px)(e, "bold"), !0;
                    break;
                case d.Ks6.I:
                    if (!c.VW.isEditorEmpty(e) && _(t, { ctrl: !n, cmd: n })) return (0, l.Px)(e, "italics"), !0;
                    break;
                case d.Ks6.U:
                    if (!c.VW.isEditorEmpty(e) && _(t, { ctrl: !n, cmd: n })) return (0, l.Px)(e, "underline"), !0;
                    break;
                case d.Ks6.S:
                    if (!c.VW.isEditorEmpty(e) && _(t, { ctrl: !n, cmd: n, shift: !0 }))
                        return (0, l.Px)(e, "strikethrough"), !0;
                    break;
                case d.Ks6.TAB:
                    if (null != e.selection && _(t, { shift: null })) {
                        let [n, r] = c.ZF.edges(e.selection),
                            i = c.VW.blocks(e).slice(n.path[0], r.path[0] + 1),
                            s = !0;
                        for (let [e] of i)
                            if ("line" !== e.type || !e.codeBlockState?.isInCodeBlock) {
                                s = !1;
                                break;
                            }
                        if (s) {
                            if (!t.shiftKey && c.ZF.isCollapsed(e.selection)) return u.b.insertText(e, "  "), !0;
                            let n = !t.shiftKey;
                            return (
                                o.o.withSingleEntry(e, () => {
                                    let t = e.selection?.anchor ?? c.VW.start(e, []),
                                        r = e.selection?.focus ?? c.VW.end(e, []);
                                    for (let [s, a] of i) {
                                        let i = s.children[0];
                                        if (!c.l5.isText(i)) continue;
                                        let o = c.PW.child(a, 0),
                                            l = { path: o, offset: 0 };
                                        if (n)
                                            u.b.insertText(e, "  ", { at: l }),
                                                c.PW.equals(t.path, o) &&
                                                    0 !== t.offset &&
                                                    (t = { path: o, offset: t.offset + 2 }),
                                                c.PW.equals(r.path, o) &&
                                                    0 !== r.offset &&
                                                    (r = { path: o, offset: r.offset + 2 });
                                        else if (i.text.startsWith("  ")) {
                                            let n = { path: c.PW.child(a, 0), offset: 2 };
                                            u.b.delete(e, { at: { anchor: l, focus: n } }),
                                                c.PW.equals(t.path, o) &&
                                                    (t = { path: o, offset: Math.max(0, t.offset - 2) }),
                                                c.PW.equals(r.path, o) &&
                                                    (r = { path: o, offset: Math.max(0, r.offset - 2) });
                                        }
                                    }
                                    u.b.select(e, { anchor: t, focus: r });
                                }),
                                !0
                            );
                        }
                    }
                    break;
                case d.Ks6.ARROW_LEFT:
                case d.Ks6.ARROW_RIGHT: {
                    let r;
                    if (_(t, { shift: null })) r = "character";
                    else if (_(t, { ctrl: !n, alt: n, shift: null })) r = "word";
                    else if (n && _(t, { cmd: !0, shift: null })) return !1;
                    else return !1;
                    let s = e.children[e.selection?.focus?.path[0] ?? 0],
                        a = "rtl" === i()(c.AS.string(s)),
                        o = (t.which === d.Ks6.ARROW_LEFT) == !a;
                    return u.b.keyboardMove(e, { reverse: o, unit: r, edge: t.shiftKey ? "focus" : void 0 }), !0;
                }
                case d.Ks6.A:
                    if (n && _(t, { ctrl: !0 }) && f(e)) return !0;
                    break;
                case d.Ks6.E:
                    if (n && _(t, { ctrl: !0 }) && p(e)) return !0;
                    break;
                case d.Ks6.HOME:
                    if (_(t, { shift: !1, ctrl: !1 }) && f(e)) return !0;
                    break;
                case d.Ks6.END:
                    if (_(t, { shift: !1, ctrl: !1 }) && p(e)) return !0;
                    break;
                case d.Ks6.BACKSPACE:
                case d.Ks6.DELETE:
                case d.Ks6.K:
                    let r = t.which === d.Ks6.BACKSPACE;
                    if (
                        ((!n && t.which !== d.Ks6.K && _(t, { ctrl: !0, shift: !0 })) ||
                            (n && t.which !== d.Ks6.K && _(t, { cmd: !0 })) ||
                            (n && t.which === d.Ks6.K && _(t, { ctrl: !0 }))) &&
                        null != e.selection
                    ) {
                        let [t, n] = c.ZF.edges(e.selection),
                            [i, s] = c.VW.node(e, [r ? t.path[0] : n.path[0]]);
                        if (
                            (a()(c.VW.isBlock(e, i), "Top-most node of selection is not a block"),
                            (r && !c.Kh.isAtStart(t, [i, s])) || (!r && !c.Kh.isAtEnd(n, [i, s])))
                        )
                            return r ? e.deleteBackward("line") : e.deleteForward("line"), !0;
                    }
            }
            return !1;
        }),
        e
    );
}
