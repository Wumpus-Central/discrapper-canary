(n.d(t, { A: () => f, j: () => m }), n(483606));
var l = n(877413),
    i = n.n(l),
    r = n(284009),
    s = n.n(r),
    a = n(235599),
    o = n(186306),
    u = n(339871),
    c = n(35277),
    d = n(820066),
    h = n(652215);
function m(e, t) {
    let { cmd: n = !1, ctrl: l = !1, alt: i = !1, shift: r = !1 } = t;
    return (
        (null == n || e.metaKey === n) &&
        (null == l || e.ctrlKey === l) &&
        (null == i || e.altKey === i) &&
        (null == r || e.shiftKey === r)
    );
}
function p(e, t) {
    let n = a.rL.findDocumentOrShadowRoot(e).getSelection();
    if (null == n || 0 === n.rangeCount) return !1;
    n.modify("move", t, "lineboundary");
    let l = d.VW.toSlateRange(e, n, { exactMatch: !1, suppressThrow: !0 });
    return (null != l && c.b.select(e, l), !0);
}
function f(e) {
    return (
        (e.onKeyDown = (t) => {
            let n = e.isMac;
            switch (t.which) {
                case h.Ks6.B:
                    if (!d.VW.isEditorEmpty(e) && m(t, { ctrl: !n, cmd: n })) return ((0, u.Px)(e, "bold"), !0);
                    break;
                case h.Ks6.I:
                    if (!d.VW.isEditorEmpty(e) && m(t, { ctrl: !n, cmd: n })) return ((0, u.Px)(e, "italics"), !0);
                    break;
                case h.Ks6.U:
                    if (!d.VW.isEditorEmpty(e) && m(t, { ctrl: !n, cmd: n })) return ((0, u.Px)(e, "underline"), !0);
                    break;
                case h.Ks6.S:
                    if (!d.VW.isEditorEmpty(e) && m(t, { ctrl: !n, cmd: n, shift: !0 }))
                        return ((0, u.Px)(e, "strikethrough"), !0);
                    break;
                case h.Ks6.TAB:
                    if (null != e.selection && m(t, { shift: null })) {
                        let [n, l] = d.ZF.edges(e.selection),
                            i = d.VW.blocks(e).slice(n.path[0], l.path[0] + 1),
                            r = !0;
                        for (let [e] of i)
                            if ("line" !== e.type || !e.codeBlockState?.isInCodeBlock) {
                                r = !1;
                                break;
                            }
                        if (r) {
                            if (!t.shiftKey && d.ZF.isCollapsed(e.selection)) return (c.b.insertText(e, "  "), !0);
                            let n = !t.shiftKey;
                            return (
                                o.o.withSingleEntry(e, () => {
                                    let t = e.selection?.anchor ?? d.VW.start(e, []),
                                        l = e.selection?.focus ?? d.VW.end(e, []);
                                    for (let [r, s] of i) {
                                        let i = r.children[0];
                                        if (!d.l5.isText(i)) continue;
                                        let a = d.PW.child(s, 0),
                                            o = { path: a, offset: 0 };
                                        if (n)
                                            (c.b.insertText(e, "  ", { at: o }),
                                                d.PW.equals(t.path, a) &&
                                                    0 !== t.offset &&
                                                    (t = { path: a, offset: t.offset + 2 }),
                                                d.PW.equals(l.path, a) &&
                                                    0 !== l.offset &&
                                                    (l = { path: a, offset: l.offset + 2 }));
                                        else if (i.text.startsWith("  ")) {
                                            let n = { path: d.PW.child(s, 0), offset: 2 };
                                            (c.b.delete(e, { at: { anchor: o, focus: n } }),
                                                d.PW.equals(t.path, a) &&
                                                    (t = { path: a, offset: Math.max(0, t.offset - 2) }),
                                                d.PW.equals(l.path, a) &&
                                                    (l = { path: a, offset: Math.max(0, l.offset - 2) }));
                                        }
                                    }
                                    c.b.select(e, { anchor: t, focus: l });
                                }),
                                !0
                            );
                        }
                    }
                    break;
                case h.Ks6.ARROW_LEFT:
                case h.Ks6.ARROW_RIGHT: {
                    let l;
                    if (m(t, { shift: null })) l = "character";
                    else if (m(t, { ctrl: !n, alt: n, shift: null })) l = "word";
                    else if (n && m(t, { cmd: !0, shift: null })) return !1;
                    else return !1;
                    let r = e.children[e.selection?.focus?.path[0] ?? 0],
                        s = "rtl" === i()(d.AS.string(r)),
                        a = (t.which === h.Ks6.ARROW_LEFT) == !s;
                    return (c.b.keyboardMove(e, { reverse: a, unit: l, edge: t.shiftKey ? "focus" : void 0 }), !0);
                }
                case h.Ks6.A:
                    if (
                        n &&
                        m(t, { ctrl: !0 }) &&
                        (function (e) {
                            let t = d.VW.getCurrentBlock(e);
                            if (null != t) {
                                let n = d.VW.start(e, t[1]);
                                return (c.b.select(e, { anchor: n, focus: n }), !0);
                            }
                            return !1;
                        })(e)
                    )
                        return !0;
                    break;
                case h.Ks6.E:
                    if (
                        n &&
                        m(t, { ctrl: !0 }) &&
                        (function (e) {
                            let t = d.VW.getCurrentBlock(e);
                            if (null != t) {
                                let n = d.VW.end(e, t[1]);
                                return (c.b.select(e, { anchor: n, focus: n }), !0);
                            }
                            return !1;
                        })(e)
                    )
                        return !0;
                    break;
                case h.Ks6.T:
                    if (
                        n &&
                        m(t, { ctrl: !0 }) &&
                        (function (e) {
                            let { selection: t } = e;
                            if (null == t || !d.ZF.isCollapsed(t)) return !1;
                            let n = t.anchor,
                                [l, i] = d.VW.leaf(e, n),
                                { text: r } = l;
                            if (r.length < 2) return !1;
                            let { offset: s } = n;
                            if (0 === s) return !1;
                            let a = s >= r.length,
                                u = a ? r.length - 2 : s - 1,
                                h = r[u + 1] + r[u];
                            return (
                                !!h.isWellFormed() &&
                                (o.o.withSingleEntry(e, () => {
                                    (c.b.delete(e, {
                                        at: { anchor: { path: i, offset: u }, focus: { path: i, offset: u + 2 } },
                                    }),
                                        c.b.insertText(e, h, { at: { path: i, offset: u } }),
                                        c.b.select(e, { path: i, offset: a ? r.length : s + 1 }));
                                }),
                                !0)
                            );
                        })(e)
                    )
                        return !0;
                    break;
                case h.Ks6.HOME:
                    if (m(t, { shift: !1, ctrl: !1 }) && p(e, "backward")) return !0;
                    break;
                case h.Ks6.END:
                    if (m(t, { shift: !1, ctrl: !1 }) && p(e, "forward")) return !0;
                    break;
                case h.Ks6.BACKSPACE:
                case h.Ks6.DELETE:
                case h.Ks6.K:
                    let l = t.which === h.Ks6.BACKSPACE;
                    if (
                        ((!n && t.which !== h.Ks6.K && m(t, { ctrl: !0, shift: !0 })) ||
                            (n && t.which !== h.Ks6.K && m(t, { cmd: !0 })) ||
                            (n && t.which === h.Ks6.K && m(t, { ctrl: !0 }))) &&
                        null != e.selection
                    ) {
                        let [t, n] = d.ZF.edges(e.selection),
                            [i, r] = d.VW.node(e, [l ? t.path[0] : n.path[0]]);
                        if (
                            (s()(d.VW.isBlock(e, i), "Top-most node of selection is not a block"),
                            (l && !d.Kh.isAtStart(t, [i, r])) || (!l && !d.Kh.isAtEnd(n, [i, r])))
                        )
                            return (l ? e.deleteBackward("line") : e.deleteForward("line"), !0);
                    }
            }
            return !1;
        }),
        e
    );
}
