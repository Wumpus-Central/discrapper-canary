"use strict";
n.d(t, { A: () => p, j: () => h });
var i = n(877413),
    r = n.n(i),
    s = n(284009),
    a = n.n(s),
    o = n(670482),
    l = n(186306),
    u = n(339871),
    c = n(35277),
    d = n(820066),
    _ = n(652215);
function h(e, t) {
    let { cmd: n = !1, ctrl: i = !1, alt: r = !1, shift: s = !1 } = t;
    return (
        (null == n || e.metaKey === n) &&
        (null == i || e.ctrlKey === i) &&
        (null == r || e.altKey === r) &&
        (null == s || e.shiftKey === s)
    );
}
let f = (e, t) => {
    let n = o.rL.findDocumentOrShadowRoot(e).getSelection();
    if (null == n || 0 === n.rangeCount) return !1;
    n.modify("move", t, "lineboundary");
    let i = d.VW.toSlateRange(e, n, { exactMatch: !1, suppressThrow: !0 });
    return null != i && c.b.select(e, i), !0;
};
function p(e) {
    return (
        (e.onKeyDown = (t) => {
            let n = e.isMac;
            switch (t.which) {
                case _.Ks6.B:
                    if (!d.VW.isEditorEmpty(e) && h(t, { ctrl: !n, cmd: n })) return (0, u.Px)(e, "bold"), !0;
                    break;
                case _.Ks6.I:
                    if (!d.VW.isEditorEmpty(e) && h(t, { ctrl: !n, cmd: n })) return (0, u.Px)(e, "italics"), !0;
                    break;
                case _.Ks6.U:
                    if (!d.VW.isEditorEmpty(e) && h(t, { ctrl: !n, cmd: n })) return (0, u.Px)(e, "underline"), !0;
                    break;
                case _.Ks6.S:
                    if (!d.VW.isEditorEmpty(e) && h(t, { ctrl: !n, cmd: n, shift: !0 }))
                        return (0, u.Px)(e, "strikethrough"), !0;
                    break;
                case _.Ks6.TAB:
                    if (null != e.selection && h(t, { shift: null })) {
                        let [n, i] = d.ZF.edges(e.selection),
                            r = d.VW.blocks(e).slice(n.path[0], i.path[0] + 1),
                            s = !0;
                        for (let [e] of r)
                            if ("line" !== e.type || !e.codeBlockState?.isInCodeBlock) {
                                s = !1;
                                break;
                            }
                        if (s) {
                            if (!t.shiftKey && d.ZF.isCollapsed(e.selection)) return c.b.insertText(e, "  "), !0;
                            let n = !t.shiftKey;
                            return (
                                l.o.withSingleEntry(e, () => {
                                    let t = e.selection?.anchor ?? d.VW.start(e, []),
                                        i = e.selection?.focus ?? d.VW.end(e, []);
                                    for (let [s, a] of r) {
                                        let r = s.children[0];
                                        if (!d.l5.isText(r)) continue;
                                        let o = d.PW.child(a, 0),
                                            l = { path: o, offset: 0 };
                                        if (n)
                                            c.b.insertText(e, "  ", { at: l }),
                                                d.PW.equals(t.path, o) &&
                                                    0 !== t.offset &&
                                                    (t = { path: o, offset: t.offset + 2 }),
                                                d.PW.equals(i.path, o) &&
                                                    0 !== i.offset &&
                                                    (i = { path: o, offset: i.offset + 2 });
                                        else if (r.text.startsWith("  ")) {
                                            let n = { path: d.PW.child(a, 0), offset: 2 };
                                            c.b.delete(e, { at: { anchor: l, focus: n } }),
                                                d.PW.equals(t.path, o) &&
                                                    (t = { path: o, offset: Math.max(0, t.offset - 2) }),
                                                d.PW.equals(i.path, o) &&
                                                    (i = { path: o, offset: Math.max(0, i.offset - 2) });
                                        }
                                    }
                                    c.b.select(e, { anchor: t, focus: i });
                                }),
                                !0
                            );
                        }
                    }
                    break;
                case _.Ks6.ARROW_LEFT:
                case _.Ks6.ARROW_RIGHT: {
                    let i;
                    if (h(t, { shift: null })) i = "character";
                    else if (h(t, { ctrl: !n, alt: n, shift: null })) i = "word";
                    else if (n && h(t, { cmd: !0, shift: null })) return !1;
                    else return !1;
                    let s = e.children[e.selection?.focus?.path[0] ?? 0],
                        a = "rtl" === r()(d.AS.string(s)),
                        o = (t.which === _.Ks6.ARROW_LEFT) == !a;
                    return c.b.keyboardMove(e, { reverse: o, unit: i, edge: t.shiftKey ? "focus" : void 0 }), !0;
                }
                case _.Ks6.A:
                    if (
                        n &&
                        h(t, { ctrl: !0 }) &&
                        ((e) => {
                            let t = d.VW.getCurrentBlock(e);
                            if (null != t) {
                                let n = d.VW.start(e, t[1]);
                                return c.b.select(e, { anchor: n, focus: n }), !0;
                            }
                            return !1;
                        })(e)
                    )
                        return !0;
                    break;
                case _.Ks6.E:
                    if (
                        n &&
                        h(t, { ctrl: !0 }) &&
                        ((e) => {
                            let t = d.VW.getCurrentBlock(e);
                            if (null != t) {
                                let n = d.VW.end(e, t[1]);
                                return c.b.select(e, { anchor: n, focus: n }), !0;
                            }
                            return !1;
                        })(e)
                    )
                        return !0;
                    break;
                case _.Ks6.HOME:
                    if (h(t, { shift: !1, ctrl: !1 }) && f(e, "backward")) return !0;
                    break;
                case _.Ks6.END:
                    if (h(t, { shift: !1, ctrl: !1 }) && f(e, "forward")) return !0;
                    break;
                case _.Ks6.BACKSPACE:
                case _.Ks6.DELETE:
                case _.Ks6.K:
                    let i = t.which === _.Ks6.BACKSPACE;
                    if (
                        ((!n && t.which !== _.Ks6.K && h(t, { ctrl: !0, shift: !0 })) ||
                            (n && t.which !== _.Ks6.K && h(t, { cmd: !0 })) ||
                            (n && t.which === _.Ks6.K && h(t, { ctrl: !0 }))) &&
                        null != e.selection
                    ) {
                        let [t, n] = d.ZF.edges(e.selection),
                            [r, s] = d.VW.node(e, [i ? t.path[0] : n.path[0]]);
                        if (
                            (a()(d.VW.isBlock(e, r), "Top-most node of selection is not a block"),
                            (i && !d.Kh.isAtStart(t, [r, s])) || (!i && !d.Kh.isAtEnd(n, [r, s])))
                        )
                            return i ? e.deleteBackward("line") : e.deleteForward("line"), !0;
                    }
            }
            return !1;
        }),
        e
    );
}
