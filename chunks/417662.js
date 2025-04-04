n.d(t, {
    E: () => _,
    Z: () => p
}),
    n(47120);
var r = n(653603),
    i = n.n(r),
    o = n(512722),
    a = n.n(o),
    s = n(53529),
    l = n(50659),
    c = n(436660),
    u = n(887490),
    d = n(981631);
let f = '  ';
function _(e, t) {
    let { cmd: n = !1, ctrl: r = !1, alt: i = !1, shift: o = !1 } = t;
    return (null == n || e.metaKey === n) && (null == r || e.ctrlKey === r) && (null == i || e.altKey === i) && (null == o || e.shiftKey === o);
}
function p(e) {
    return (
        (e.onKeyDown = (t) => {
            var n, r, o, p;
            let h = e.isMac;
            switch (t.which) {
                case d.yXg.B:
                    if (
                        !u.bN.isEditorEmpty(e) &&
                        _(t, {
                            ctrl: !h,
                            cmd: h
                        })
                    )
                        return (0, l.py)(e, 'bold'), !0;
                    break;
                case d.yXg.I:
                    if (
                        !u.bN.isEditorEmpty(e) &&
                        _(t, {
                            ctrl: !h,
                            cmd: h
                        })
                    )
                        return (0, l.py)(e, 'italics'), !0;
                    break;
                case d.yXg.U:
                    if (
                        !u.bN.isEditorEmpty(e) &&
                        _(t, {
                            ctrl: !h,
                            cmd: h
                        })
                    )
                        return (0, l.py)(e, 'underline'), !0;
                    break;
                case d.yXg.S:
                    if (
                        !u.bN.isEditorEmpty(e) &&
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
                        let [r, i] = u.M8.edges(e.selection),
                            o = u.bN.blocks(e).slice(r.path[0], i.path[0] + 1),
                            a = !0;
                        for (let [e] of o)
                            if ('line' !== e.type || !(null == (n = e.codeBlockState) ? void 0 : n.isInCodeBlock)) {
                                a = !1;
                                break;
                            }
                        if (a) {
                            if (!t.shiftKey && u.M8.isCollapsed(e.selection)) return c.Q.insertText(e, f), !0;
                            let n = !t.shiftKey;
                            return (
                                s.T.withSingleEntry(e, () => {
                                    var t, r, i, a;
                                    let s = null != (i = null == (t = e.selection) ? void 0 : t.anchor) ? i : u.bN.start(e, []),
                                        l = null != (a = null == (r = e.selection) ? void 0 : r.focus) ? a : u.bN.end(e, []);
                                    for (let [t, r] of o) {
                                        let i = t.children[0];
                                        if (!u.LC.isText(t.children[0])) continue;
                                        let o = u.C0.child(r, 0),
                                            a = {
                                                path: o,
                                                offset: 0
                                            };
                                        if (n)
                                            c.Q.insertText(e, f, { at: a }),
                                                u.C0.equals(s.path, o) &&
                                                    0 !== s.offset &&
                                                    (s = {
                                                        path: o,
                                                        offset: s.offset + f.length
                                                    }),
                                                u.C0.equals(l.path, o) &&
                                                    0 !== l.offset &&
                                                    (l = {
                                                        path: o,
                                                        offset: l.offset + f.length
                                                    });
                                        else if (i.text.startsWith(f)) {
                                            let t = {
                                                path: u.C0.child(r, 0),
                                                offset: f.length
                                            };
                                            c.Q.delete(e, {
                                                at: {
                                                    anchor: a,
                                                    focus: t
                                                }
                                            }),
                                                u.C0.equals(s.path, o) &&
                                                    (s = {
                                                        path: o,
                                                        offset: Math.max(0, s.offset - f.length)
                                                    }),
                                                u.C0.equals(l.path, o) &&
                                                    (l = {
                                                        path: o,
                                                        offset: Math.max(0, l.offset - f.length)
                                                    });
                                        }
                                    }
                                    c.Q.select(e, {
                                        anchor: s,
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
                    let n, a;
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
                    t.shiftKey && (a = 'focus');
                    let s = e.children[null != (p = null == (o = e.selection) || null == (r = o.focus) ? void 0 : r.path[0]) ? p : 0],
                        l = 'rtl' === i()(u.aj.string(s)),
                        f = (t.which === d.yXg.ARROW_LEFT) == !l;
                    return (
                        c.Q.keyboardMove(e, {
                            reverse: f,
                            unit: n,
                            edge: a
                        }),
                        !0
                    );
                }
                case d.yXg.A:
                    if (h && _(t, { ctrl: !0 })) {
                        let t = u.bN.getCurrentBlock(e);
                        if (null != t) {
                            let [, n] = t,
                                r = {
                                    path: u.C0.child(n, 0),
                                    offset: 0
                                };
                            return (
                                c.Q.select(e, {
                                    anchor: r,
                                    focus: r
                                }),
                                !0
                            );
                        }
                    }
                    break;
                case d.yXg.E:
                    if (h && _(t, { ctrl: !0 })) {
                        let t = u.bN.getCurrentBlock(e);
                        if (null != t) {
                            let [n, r] = t,
                                i = u.C0.child(r, n.children.length - 1),
                                [o] = u.bN.node(e, i),
                                a = {
                                    path: i,
                                    offset: o.text.length
                                };
                            return (
                                c.Q.select(e, {
                                    anchor: a,
                                    focus: a
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
                        let [t, n] = u.M8.edges(e.selection),
                            [r, i] = u.bN.node(e, [m ? t.path[0] : n.path[0]]);
                        if ((a()(u.q.isElement(r) && u.bN.isBlock(e, r), 'Top-most node of selection is not a block'), (m && !u.Jz.isAtStart(t, [r, i])) || (!m && !u.Jz.isAtEnd(n, [r, i])))) return m ? e.deleteBackward('line') : e.deleteForward('line'), !0;
                    }
            }
            return !1;
        }),
        e
    );
}
