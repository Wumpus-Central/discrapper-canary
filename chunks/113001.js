"use strict";
n.d(t, { A: () => h, j: () => E }), n(483606);
var i = n(877413),
    r = n.n(i),
    a = n(284009),
    s = n.n(a),
    l = n(253018),
    o = n(186306),
    d = n(339871),
    c = n(35277),
    u = n(820066),
    _ = n(652215);
function E(e, t) {
    let { cmd: n = !1, ctrl: i = !1, alt: r = !1, shift: a = !1 } = t;
    return (
        (null == n || e.metaKey === n) &&
        (null == i || e.ctrlKey === i) &&
        (null == r || e.altKey === r) &&
        (null == a || e.shiftKey === a)
    );
}
function A(e, t) {
    let n = l.rL.findDocumentOrShadowRoot(e).getSelection();
    if (null == n || 0 === n.rangeCount) return !1;
    n.modify("move", t, "lineboundary");
    let i = u.VW.toSlateRange(e, n, { exactMatch: !1, suppressThrow: !0 });
    return null != i && c.b.select(e, i), !0;
}
function h(e) {
    return (
        (e.onKeyDown = (t) => {
            let n = e.isMac;
            switch (t.which) {
                case _.Ks6.B:
                    if (!u.VW.isEditorEmpty(e) && E(t, { ctrl: !n, cmd: n })) return (0, d.Px)(e, "bold"), !0;
                    break;
                case _.Ks6.I:
                    if (!u.VW.isEditorEmpty(e) && E(t, { ctrl: !n, cmd: n })) return (0, d.Px)(e, "italics"), !0;
                    break;
                case _.Ks6.U:
                    if (!u.VW.isEditorEmpty(e) && E(t, { ctrl: !n, cmd: n })) return (0, d.Px)(e, "underline"), !0;
                    break;
                case _.Ks6.S:
                    if (!u.VW.isEditorEmpty(e) && E(t, { ctrl: !n, cmd: n, shift: !0 }))
                        return (0, d.Px)(e, "strikethrough"), !0;
                    break;
                case _.Ks6.TAB:
                    if (null != e.selection && E(t, { shift: null })) {
                        let [n, i] = u.ZF.edges(e.selection),
                            r = u.VW.blocks(e).slice(n.path[0], i.path[0] + 1),
                            a = !0;
                        for (let [e] of r)
                            if ("line" !== e.type || !e.codeBlockState?.isInCodeBlock) {
                                a = !1;
                                break;
                            }
                        if (a) {
                            if (!t.shiftKey && u.ZF.isCollapsed(e.selection)) return c.b.insertText(e, "  "), !0;
                            let n = !t.shiftKey;
                            return (
                                o.o.withSingleEntry(e, () => {
                                    let t = e.selection?.anchor ?? u.VW.start(e, []),
                                        i = e.selection?.focus ?? u.VW.end(e, []);
                                    for (let [a, s] of r) {
                                        let r = a.children[0];
                                        if (!u.l5.isText(r)) continue;
                                        let l = u.PW.child(s, 0),
                                            o = { path: l, offset: 0 };
                                        if (n)
                                            c.b.insertText(e, "  ", { at: o }),
                                                u.PW.equals(t.path, l) &&
                                                    0 !== t.offset &&
                                                    (t = { path: l, offset: t.offset + 2 }),
                                                u.PW.equals(i.path, l) &&
                                                    0 !== i.offset &&
                                                    (i = { path: l, offset: i.offset + 2 });
                                        else if (r.text.startsWith("  ")) {
                                            let n = { path: u.PW.child(s, 0), offset: 2 };
                                            c.b.delete(e, { at: { anchor: o, focus: n } }),
                                                u.PW.equals(t.path, l) &&
                                                    (t = { path: l, offset: Math.max(0, t.offset - 2) }),
                                                u.PW.equals(i.path, l) &&
                                                    (i = { path: l, offset: Math.max(0, i.offset - 2) });
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
                    if (E(t, { shift: null })) i = "character";
                    else if (E(t, { ctrl: !n, alt: n, shift: null })) i = "word";
                    else if (n && E(t, { cmd: !0, shift: null })) return !1;
                    else return !1;
                    let a = e.children[e.selection?.focus?.path[0] ?? 0],
                        s = "rtl" === r()(u.AS.string(a)),
                        l = (t.which === _.Ks6.ARROW_LEFT) == !s;
                    return c.b.keyboardMove(e, { reverse: l, unit: i, edge: t.shiftKey ? "focus" : void 0 }), !0;
                }
                case _.Ks6.A:
                    if (
                        n &&
                        E(t, { ctrl: !0 }) &&
                        (function (e) {
                            let t = u.VW.getCurrentBlock(e);
                            if (null != t) {
                                let n = u.VW.start(e, t[1]);
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
                        E(t, { ctrl: !0 }) &&
                        (function (e) {
                            let t = u.VW.getCurrentBlock(e);
                            if (null != t) {
                                let n = u.VW.end(e, t[1]);
                                return c.b.select(e, { anchor: n, focus: n }), !0;
                            }
                            return !1;
                        })(e)
                    )
                        return !0;
                    break;
                case _.Ks6.T:
                    if (
                        n &&
                        E(t, { ctrl: !0 }) &&
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !u.ZF.isCollapsed(t)) return !1;
                            let n = t.anchor,
                                [i, r] = u.VW.leaf(e, n),
                                { text: a } = i;
                            if (a.length < 2) return !1;
                            let { offset: s } = n;
                            if (0 === s) return !1;
                            let l = s >= a.length,
                                d = l ? a.length - 2 : s - 1,
                                _ = a[d + 1] + a[d];
                            return (
                                !!_.isWellFormed() &&
                                (o.o.withSingleEntry(e, () => {
                                    c.b.delete(e, {
                                        at: { anchor: { path: r, offset: d }, focus: { path: r, offset: d + 2 } },
                                    }),
                                        c.b.insertText(e, _, { at: { path: r, offset: d } }),
                                        c.b.select(e, { path: r, offset: l ? a.length : s + 1 });
                                }),
                                !0)
                            );
                        })(e)
                    )
                        return !0;
                    break;
                case _.Ks6.HOME:
                    if (E(t, { shift: !1, ctrl: !1 }) && A(e, "backward")) return !0;
                    break;
                case _.Ks6.END:
                    if (E(t, { shift: !1, ctrl: !1 }) && A(e, "forward")) return !0;
                    break;
                case _.Ks6.BACKSPACE:
                case _.Ks6.DELETE:
                case _.Ks6.K:
                    let i = t.which === _.Ks6.BACKSPACE;
                    if (
                        ((!n && t.which !== _.Ks6.K && E(t, { ctrl: !0, shift: !0 })) ||
                            (n && t.which !== _.Ks6.K && E(t, { cmd: !0 })) ||
                            (n && t.which === _.Ks6.K && E(t, { ctrl: !0 }))) &&
                        null != e.selection
                    ) {
                        let [t, n] = u.ZF.edges(e.selection),
                            [r, a] = u.VW.node(e, [i ? t.path[0] : n.path[0]]);
                        if (
                            (s()(u.VW.isBlock(e, r), "Top-most node of selection is not a block"),
                            (i && !u.Kh.isAtStart(t, [r, a])) || (!i && !u.Kh.isAtEnd(n, [r, a])))
                        )
                            return i ? e.deleteBackward("line") : e.deleteForward("line"), !0;
                    }
            }
            return !1;
        }),
        e
    );
}
