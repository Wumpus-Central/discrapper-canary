n.d(t, {
    A: () => _,
    j: () => p,
}),
    n(896048);
var r = n(877413),
    i = n.n(r),
    a = n(284009),
    s = n.n(a),
    o = n(186306),
    l = n(339871),
    c = n(35277),
    u = n(711371),
    d = n(652215);
let f = "  ";

function p(e, t) {
    let { cmd: n = !1, ctrl: r = !1, alt: i = !1, shift: a = !1 } = t;
    return (
        (null == n || e.metaKey === n) &&
        (null == r || e.ctrlKey === r) &&
        (null == i || e.altKey === i) &&
        (null == a || e.shiftKey === a)
    );
}

function _(e) {
    return (
        (e.onKeyDown = (t) => {
            var n, r, a, _;
            let h = e.isMac;
            switch (t.which) {
                case d.Ks6.B:
                    if (
                        !u.VW.isEditorEmpty(e) &&
                        p(t, {
                            ctrl: !h,
                            cmd: h,
                        })
                    )
                        return (0, l.Px)(e, "bold"), !0;
                    break;
                case d.Ks6.I:
                    if (
                        !u.VW.isEditorEmpty(e) &&
                        p(t, {
                            ctrl: !h,
                            cmd: h,
                        })
                    )
                        return (0, l.Px)(e, "italics"), !0;
                    break;
                case d.Ks6.U:
                    if (
                        !u.VW.isEditorEmpty(e) &&
                        p(t, {
                            ctrl: !h,
                            cmd: h,
                        })
                    )
                        return (0, l.Px)(e, "underline"), !0;
                    break;
                case d.Ks6.S:
                    if (
                        !u.VW.isEditorEmpty(e) &&
                        p(t, {
                            ctrl: !h,
                            cmd: h,
                            shift: !0,
                        })
                    )
                        return (0, l.Px)(e, "strikethrough"), !0;
                    break;
                case d.Ks6.TAB:
                    if (
                        null != e.selection &&
                        p(t, {
                            shift: null,
                        })
                    ) {
                        let [r, i] = u.ZF.edges(e.selection),
                            a = u.VW.blocks(e).slice(r.path[0], i.path[0] + 1),
                            s = !0;
                        for (let [e] of a)
                            if ("line" !== e.type || !(null == (n = e.codeBlockState) ? void 0 : n.isInCodeBlock)) {
                                s = !1;
                                break;
                            }
                        if (s) {
                            if (!t.shiftKey && u.ZF.isCollapsed(e.selection)) return c.b.insertText(e, f), !0;
                            let n = !t.shiftKey;
                            return (
                                o.o.withSingleEntry(e, () => {
                                    var t, r, i, s;
                                    let o =
                                            null != (t = null == (i = e.selection) ? void 0 : i.anchor)
                                                ? t
                                                : u.VW.start(e, []),
                                        l =
                                            null != (r = null == (s = e.selection) ? void 0 : s.focus)
                                                ? r
                                                : u.VW.end(e, []);
                                    for (let [t, r] of a) {
                                        let i = t.children[0];
                                        if (!u.l5.isText(i)) continue;
                                        let a = u.PW.child(r, 0),
                                            s = {
                                                path: a,
                                                offset: 0,
                                            };
                                        if (n)
                                            c.b.insertText(e, f, {
                                                at: s,
                                            }),
                                                u.PW.equals(o.path, a) &&
                                                    0 !== o.offset &&
                                                    (o = {
                                                        path: a,
                                                        offset: o.offset + f.length,
                                                    }),
                                                u.PW.equals(l.path, a) &&
                                                    0 !== l.offset &&
                                                    (l = {
                                                        path: a,
                                                        offset: l.offset + f.length,
                                                    });
                                        else if (i.text.startsWith(f)) {
                                            let t = {
                                                path: u.PW.child(r, 0),
                                                offset: f.length,
                                            };
                                            c.b.delete(e, {
                                                at: {
                                                    anchor: s,
                                                    focus: t,
                                                },
                                            }),
                                                u.PW.equals(o.path, a) &&
                                                    (o = {
                                                        path: a,
                                                        offset: Math.max(0, o.offset - f.length),
                                                    }),
                                                u.PW.equals(l.path, a) &&
                                                    (l = {
                                                        path: a,
                                                        offset: Math.max(0, l.offset - f.length),
                                                    });
                                        }
                                    }
                                    c.b.select(e, {
                                        anchor: o,
                                        focus: l,
                                    });
                                }),
                                !0
                            );
                        }
                    }
                    break;
                case d.Ks6.ARROW_LEFT:
                case d.Ks6.ARROW_RIGHT: {
                    let n;
                    if (
                        p(t, {
                            shift: null,
                        })
                    )
                        n = "character";
                    else if (
                        p(t, {
                            ctrl: !h,
                            alt: h,
                            shift: null,
                        })
                    )
                        n = "word";
                    else if (
                        h &&
                        p(t, {
                            cmd: !0,
                            shift: null,
                        })
                    )
                        return !1;
                    else return !1;
                    let s =
                            e.children[
                                null != (r = null == (_ = e.selection) || null == (a = _.focus) ? void 0 : a.path[0])
                                    ? r
                                    : 0
                            ],
                        o = "rtl" === i()(u.AS.string(s)),
                        l = (t.which === d.Ks6.ARROW_LEFT) == !o;
                    return (
                        c.b.keyboardMove(e, {
                            reverse: l,
                            unit: n,
                            edge: t.shiftKey ? "focus" : void 0,
                        }),
                        !0
                    );
                }
                case d.Ks6.A:
                    if (
                        h &&
                        p(t, {
                            ctrl: !0,
                        })
                    ) {
                        let t = u.VW.getCurrentBlock(e);
                        if (null != t) {
                            let n = u.VW.start(e, t[1]);
                            return (
                                c.b.select(e, {
                                    anchor: n,
                                    focus: n,
                                }),
                                !0
                            );
                        }
                    }
                    break;
                case d.Ks6.E:
                    if (
                        h &&
                        p(t, {
                            ctrl: !0,
                        })
                    ) {
                        let t = u.VW.getCurrentBlock(e);
                        if (null != t) {
                            let n = u.VW.end(e, t[1]);
                            return (
                                c.b.select(e, {
                                    anchor: n,
                                    focus: n,
                                }),
                                !0
                            );
                        }
                    }
                    break;
                case d.Ks6.BACKSPACE:
                case d.Ks6.DELETE:
                case d.Ks6.K:
                    let m = t.which === d.Ks6.BACKSPACE;
                    if (
                        ((!h &&
                            t.which !== d.Ks6.K &&
                            p(t, {
                                ctrl: !0,
                                shift: !0,
                            })) ||
                            (h &&
                                t.which !== d.Ks6.K &&
                                p(t, {
                                    cmd: !0,
                                })) ||
                            (h &&
                                t.which === d.Ks6.K &&
                                p(t, {
                                    ctrl: !0,
                                }))) &&
                        null != e.selection
                    ) {
                        let [t, n] = u.ZF.edges(e.selection),
                            [r, i] = u.VW.node(e, [m ? t.path[0] : n.path[0]]);
                        if (
                            (s()(u.VW.isBlock(e, r), "Top-most node of selection is not a block"),
                            (m && !u.Kh.isAtStart(t, [r, i])) || (!m && !u.Kh.isAtEnd(n, [r, i])))
                        )
                            return m ? e.deleteBackward("line") : e.deleteForward("line"), !0;
                    }
            }
            return !1;
        }),
        e
    );
}
