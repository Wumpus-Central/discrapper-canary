r.d(n, {
    E: function () {
        return _;
    },
    Z: function () {
        return m;
    }
});
var i = r(47120);
var a = r(653603),
    o = r.n(a),
    s = r(512722),
    l = r.n(s),
    u = r(53529),
    c = r(50659),
    d = r(436660),
    f = r(887490),
    p = r(981631);
let h = '  ';
function _(e, n) {
    let { cmd: r = !1, ctrl: i = !1, alt: a = !1, shift: o = !1 } = n;
    return (null == r || e.metaKey === r) && (null == i || e.ctrlKey === i) && (null == a || e.altKey === a) && (null == o || e.shiftKey === o);
}
function m(e) {
    return (
        (e.onKeyDown = (n) => {
            var r, i, a, s;
            let m = e.isMac;
            switch (n.which) {
                case p.yXg.B:
                    if (
                        !f.bN.isEditorEmpty(e) &&
                        _(n, {
                            ctrl: !m,
                            cmd: m
                        })
                    )
                        return (0, c.py)(e, 'bold'), !0;
                    break;
                case p.yXg.I:
                    if (
                        !f.bN.isEditorEmpty(e) &&
                        _(n, {
                            ctrl: !m,
                            cmd: m
                        })
                    )
                        return (0, c.py)(e, 'italics'), !0;
                    break;
                case p.yXg.U:
                    if (
                        !f.bN.isEditorEmpty(e) &&
                        _(n, {
                            ctrl: !m,
                            cmd: m
                        })
                    )
                        return (0, c.py)(e, 'underline'), !0;
                    break;
                case p.yXg.S:
                    if (
                        !f.bN.isEditorEmpty(e) &&
                        _(n, {
                            ctrl: !m,
                            cmd: m,
                            shift: !0
                        })
                    )
                        return (0, c.py)(e, 'strikethrough'), !0;
                    break;
                case p.yXg.TAB:
                    if (null != e.selection && _(n, { shift: null })) {
                        let [i, a] = f.M8.edges(e.selection),
                            o = f.bN.blocks(e).slice(i.path[0], a.path[0] + 1),
                            s = !0;
                        for (let [e] of o)
                            if ('line' !== e.type || !(null === (r = e.codeBlockState) || void 0 === r ? void 0 : r.isInCodeBlock)) {
                                s = !1;
                                break;
                            }
                        if (s) {
                            if (!n.shiftKey && f.M8.isCollapsed(e.selection)) return d.Q.insertText(e, h), !0;
                            let r = !n.shiftKey;
                            return (
                                u.T.withSingleEntry(e, () => {
                                    var n, i, a, s;
                                    let l = null !== (a = null === (n = e.selection) || void 0 === n ? void 0 : n.anchor) && void 0 !== a ? a : f.bN.start(e, []),
                                        u = null !== (s = null === (i = e.selection) || void 0 === i ? void 0 : i.focus) && void 0 !== s ? s : f.bN.end(e, []);
                                    for (let [n, i] of o) {
                                        let a = n.children[0];
                                        if (!f.LC.isText(n.children[0])) continue;
                                        let o = f.C0.child(i, 0),
                                            s = {
                                                path: o,
                                                offset: 0
                                            };
                                        if (r)
                                            d.Q.insertText(e, h, { at: s }),
                                                f.C0.equals(l.path, o) &&
                                                    0 !== l.offset &&
                                                    (l = {
                                                        path: o,
                                                        offset: l.offset + h.length
                                                    }),
                                                f.C0.equals(u.path, o) &&
                                                    0 !== u.offset &&
                                                    (u = {
                                                        path: o,
                                                        offset: u.offset + h.length
                                                    });
                                        else if (a.text.startsWith(h)) {
                                            let n = {
                                                path: f.C0.child(i, 0),
                                                offset: h.length
                                            };
                                            d.Q.delete(e, {
                                                at: {
                                                    anchor: s,
                                                    focus: n
                                                }
                                            }),
                                                f.C0.equals(l.path, o) &&
                                                    (l = {
                                                        path: o,
                                                        offset: Math.max(0, l.offset - h.length)
                                                    }),
                                                f.C0.equals(u.path, o) &&
                                                    (u = {
                                                        path: o,
                                                        offset: Math.max(0, u.offset - h.length)
                                                    });
                                        }
                                    }
                                    d.Q.select(e, {
                                        anchor: l,
                                        focus: u
                                    });
                                }),
                                !0
                            );
                        }
                    }
                    break;
                case p.yXg.ARROW_LEFT:
                case p.yXg.ARROW_RIGHT: {
                    let r, l;
                    if (_(n, { shift: null })) r = 'character';
                    else if (
                        _(n, {
                            ctrl: !m,
                            alt: m,
                            shift: null
                        })
                    )
                        r = 'word';
                    else if (
                        m &&
                        _(n, {
                            cmd: !0,
                            shift: null
                        })
                    )
                        return !1;
                    else return !1;
                    n.shiftKey && (l = 'focus');
                    let u = e.children[null !== (s = null === (a = e.selection) || void 0 === a ? void 0 : null === (i = a.focus) || void 0 === i ? void 0 : i.path[0]) && void 0 !== s ? s : 0],
                        c = 'rtl' === o()(f.aj.string(u)),
                        h = (n.which === p.yXg.ARROW_LEFT) == !c;
                    return (
                        d.Q.keyboardMove(e, {
                            reverse: h,
                            unit: r,
                            edge: l
                        }),
                        !0
                    );
                }
                case p.yXg.A:
                    if (m && _(n, { ctrl: !0 })) {
                        let n = f.bN.getCurrentBlock(e);
                        if (null != n) {
                            let [, r] = n,
                                i = {
                                    path: f.C0.child(r, 0),
                                    offset: 0
                                };
                            return (
                                d.Q.select(e, {
                                    anchor: i,
                                    focus: i
                                }),
                                !0
                            );
                        }
                    }
                    break;
                case p.yXg.E:
                    if (m && _(n, { ctrl: !0 })) {
                        let n = f.bN.getCurrentBlock(e);
                        if (null != n) {
                            let [r, i] = n,
                                a = f.C0.child(i, r.children.length - 1),
                                [o] = f.bN.node(e, a),
                                s = {
                                    path: a,
                                    offset: o.text.length
                                };
                            return (
                                d.Q.select(e, {
                                    anchor: s,
                                    focus: s
                                }),
                                !0
                            );
                        }
                    }
                    break;
                case p.yXg.BACKSPACE:
                case p.yXg.DELETE:
                case p.yXg.K:
                    let g = n.which === p.yXg.BACKSPACE;
                    if (
                        ((!m &&
                            n.which !== p.yXg.K &&
                            _(n, {
                                ctrl: !0,
                                shift: !0
                            })) ||
                            (m && n.which !== p.yXg.K && _(n, { cmd: !0 })) ||
                            (m && n.which === p.yXg.K && _(n, { ctrl: !0 }))) &&
                        null != e.selection
                    ) {
                        let [n, r] = f.M8.edges(e.selection),
                            [i, a] = f.bN.node(e, [g ? n.path[0] : r.path[0]]);
                        if ((l()(f.q.isElement(i) && f.bN.isBlock(e, i), 'Top-most node of selection is not a block'), (g && !f.Jz.isAtStart(n, [i, a])) || (!g && !f.Jz.isAtEnd(r, [i, a])))) return g ? e.deleteBackward('line') : e.deleteForward('line'), !0;
                    }
            }
            return !1;
        }),
        e
    );
}
