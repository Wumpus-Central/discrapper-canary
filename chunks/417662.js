n.d(t, {
    E: () => _,
    Z: () => p
}),
    n(47120);
var i = n(653603),
    r = n.n(i),
    a = n(512722),
    s = n.n(a),
    o = n(53529),
    l = n(50659),
    u = n(436660),
    c = n(887490),
    d = n(981631);
let f = '  ';
function _(e, t) {
    let { cmd: n = !1, ctrl: i = !1, alt: r = !1, shift: a = !1 } = t;
    return (null == n || e.metaKey === n) && (null == i || e.ctrlKey === i) && (null == r || e.altKey === r) && (null == a || e.shiftKey === a);
}
function p(e) {
    return (
        (e.onKeyDown = (t) => {
            var n, i, a, p;
            let h = e.isMac;
            switch (t.which) {
                case d.yXg.B:
                    if (
                        !c.bN.isEditorEmpty(e) &&
                        _(t, {
                            ctrl: !h,
                            cmd: h
                        })
                    )
                        return (0, l.py)(e, 'bold'), !0;
                    break;
                case d.yXg.I:
                    if (
                        !c.bN.isEditorEmpty(e) &&
                        _(t, {
                            ctrl: !h,
                            cmd: h
                        })
                    )
                        return (0, l.py)(e, 'italics'), !0;
                    break;
                case d.yXg.U:
                    if (
                        !c.bN.isEditorEmpty(e) &&
                        _(t, {
                            ctrl: !h,
                            cmd: h
                        })
                    )
                        return (0, l.py)(e, 'underline'), !0;
                    break;
                case d.yXg.S:
                    if (
                        !c.bN.isEditorEmpty(e) &&
                        _(t, {
                            ctrl: !h,
                            cmd: h,
                            shift: !0
                        })
                    )
                        return (0, l.py)(e, 'strikethrough'), !0;
                    break;
                case d.yXg.TAB:
                    if (null != e.selection && _(t, { shift: null })) {
                        let [i, r] = c.M8.edges(e.selection),
                            a = c.bN.blocks(e).slice(i.path[0], r.path[0] + 1),
                            s = !0;
                        for (let [e] of a)
                            if ('line' !== e.type || !(null === (n = e.codeBlockState) || void 0 === n ? void 0 : n.isInCodeBlock)) {
                                s = !1;
                                break;
                            }
                        if (s) {
                            if (!t.shiftKey && c.M8.isCollapsed(e.selection)) return u.Q.insertText(e, f), !0;
                            let n = !t.shiftKey;
                            return (
                                o.T.withSingleEntry(e, () => {
                                    var t, i, r, s;
                                    let o = null !== (r = null === (t = e.selection) || void 0 === t ? void 0 : t.anchor) && void 0 !== r ? r : c.bN.start(e, []),
                                        l = null !== (s = null === (i = e.selection) || void 0 === i ? void 0 : i.focus) && void 0 !== s ? s : c.bN.end(e, []);
                                    for (let [t, i] of a) {
                                        let r = t.children[0];
                                        if (!c.LC.isText(t.children[0])) continue;
                                        let a = c.C0.child(i, 0),
                                            s = {
                                                path: a,
                                                offset: 0
                                            };
                                        if (n)
                                            u.Q.insertText(e, f, { at: s }),
                                                c.C0.equals(o.path, a) &&
                                                    0 !== o.offset &&
                                                    (o = {
                                                        path: a,
                                                        offset: o.offset + f.length
                                                    }),
                                                c.C0.equals(l.path, a) &&
                                                    0 !== l.offset &&
                                                    (l = {
                                                        path: a,
                                                        offset: l.offset + f.length
                                                    });
                                        else if (r.text.startsWith(f)) {
                                            let t = {
                                                path: c.C0.child(i, 0),
                                                offset: f.length
                                            };
                                            u.Q.delete(e, {
                                                at: {
                                                    anchor: s,
                                                    focus: t
                                                }
                                            }),
                                                c.C0.equals(o.path, a) &&
                                                    (o = {
                                                        path: a,
                                                        offset: Math.max(0, o.offset - f.length)
                                                    }),
                                                c.C0.equals(l.path, a) &&
                                                    (l = {
                                                        path: a,
                                                        offset: Math.max(0, l.offset - f.length)
                                                    });
                                        }
                                    }
                                    u.Q.select(e, {
                                        anchor: o,
                                        focus: l
                                    });
                                }),
                                !0
                            );
                        }
                    }
                    break;
                case d.yXg.ARROW_LEFT:
                case d.yXg.ARROW_RIGHT: {
                    let n, s;
                    if (_(t, { shift: null })) n = 'character';
                    else if (
                        _(t, {
                            ctrl: !h,
                            alt: h,
                            shift: null
                        })
                    )
                        n = 'word';
                    else if (
                        h &&
                        _(t, {
                            cmd: !0,
                            shift: null
                        })
                    )
                        return !1;
                    else return !1;
                    t.shiftKey && (s = 'focus');
                    let o = e.children[null !== (p = null === (a = e.selection) || void 0 === a ? void 0 : null === (i = a.focus) || void 0 === i ? void 0 : i.path[0]) && void 0 !== p ? p : 0],
                        l = 'rtl' === r()(c.aj.string(o)),
                        f = (t.which === d.yXg.ARROW_LEFT) == !l;
                    return (
                        u.Q.keyboardMove(e, {
                            reverse: f,
                            unit: n,
                            edge: s
                        }),
                        !0
                    );
                }
                case d.yXg.A:
                    if (h && _(t, { ctrl: !0 })) {
                        let t = c.bN.getCurrentBlock(e);
                        if (null != t) {
                            let [, n] = t,
                                i = {
                                    path: c.C0.child(n, 0),
                                    offset: 0
                                };
                            return (
                                u.Q.select(e, {
                                    anchor: i,
                                    focus: i
                                }),
                                !0
                            );
                        }
                    }
                    break;
                case d.yXg.E:
                    if (h && _(t, { ctrl: !0 })) {
                        let t = c.bN.getCurrentBlock(e);
                        if (null != t) {
                            let [n, i] = t,
                                r = c.C0.child(i, n.children.length - 1),
                                [a] = c.bN.node(e, r),
                                s = {
                                    path: r,
                                    offset: a.text.length
                                };
                            return (
                                u.Q.select(e, {
                                    anchor: s,
                                    focus: s
                                }),
                                !0
                            );
                        }
                    }
                    break;
                case d.yXg.BACKSPACE:
                case d.yXg.DELETE:
                case d.yXg.K:
                    let m = t.which === d.yXg.BACKSPACE;
                    if (
                        ((!h &&
                            t.which !== d.yXg.K &&
                            _(t, {
                                ctrl: !0,
                                shift: !0
                            })) ||
                            (h && t.which !== d.yXg.K && _(t, { cmd: !0 })) ||
                            (h && t.which === d.yXg.K && _(t, { ctrl: !0 }))) &&
                        null != e.selection
                    ) {
                        let [t, n] = c.M8.edges(e.selection),
                            [i, r] = c.bN.node(e, [m ? t.path[0] : n.path[0]]);
                        if ((s()(c.q.isElement(i) && c.bN.isBlock(e, i), 'Top-most node of selection is not a block'), (m && !c.Jz.isAtStart(t, [i, r])) || (!m && !c.Jz.isAtEnd(n, [i, r])))) return m ? e.deleteBackward('line') : e.deleteForward('line'), !0;
                    }
            }
            return !1;
        }),
        e
    );
}
