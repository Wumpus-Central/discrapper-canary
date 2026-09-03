n.d(t, { a: () => R, A: () => b });
var l = n(582128),
    i = n(143236),
    s = n(719442),
    r = n(264322),
    a = n(861382),
    o = n(267102),
    u = n(853145),
    c = n(885386),
    d = n(408018),
    h = n(870748),
    m = n(186306),
    f = n(35277),
    p = n(820066),
    g = n(407315);
let x = new Set(["line", "blockQuote"]),
    A = ["applicationCommand"],
    C = ["gameMentionInput", "timestampMentionInput"];
function E(e) {
    let t = p.VW.getCurrentBlock(e),
        n = p.VW.getCurrentInline(e);
    return null != t && !A.includes(t[0].type) && !C.includes(n?.[0]?.type);
}
function I(e) {
    return { type: "other", mergeable: !1, createdAt: Date.now(), value: p.VW.richValue(e), selection: e.selection };
}
var y = n(113001),
    S = n(2368);
function v(e, t, n) {
    let l = p.VW.getCurrentInline(e);
    if ("block" === t) return !0;
    let i = p.VW.getCurrentText(e);
    if (null == i) return !0;
    let [s, r] = i,
        [a, o] = p.VW.edges(e, r),
        u = p.ZF.toPoint(e.selection);
    if (null == u) return !0;
    if (null != l) {
        let [t, n] = l;
        if (p.VW.isEmpty(e, t) || p.VW.isVoid(e, t)) return f.b.removeInline(e, n), !0;
    }
    if ("line" === t)
        if (null == l) return !1;
        else {
            let [i, s] = p.VW.edges(e, l[1]);
            return f.b.delete(e, { at: u, unit: t, reverse: n, select: !0, bounds: { anchor: i, focus: s } }), !0;
        }
    let c = p.VW.getParentBlock(e, u);
    if (null == c) return !0;
    let d = c[1],
        h = l;
    if (p.Kh.equals(u, n ? a : o))
        for (;;) {
            let t = (n ? p.VW.before : p.VW.after)(e, u);
            if (null == t) return !0;
            if (!p.PW.isDescendant(t.path, d)) break;
            if (((u = t), null != (h = p.VW.getParentInline(e, t)))) {
                let [t, n] = h;
                if (p.VW.isEmpty(e, t) || p.VW.isVoid(e, t)) {
                    let t = p.VW.before(e, n);
                    return null != t && f.b.select(e, t), f.b.removeInline(e, n), !0;
                }
            }
            let l = p.VW.node(e, t.path);
            if (null == l || !p.l5.isText(l[0])) return !0;
            if ((([s, r] = l), 0 !== s.text.length)) {
                [a, o] = p.VW.edges(e, r);
                break;
            }
        }
    return f.b.delete(e, { at: u, unit: t, reverse: n, select: !0 }), !0;
}
var N = n(694403),
    _ = n(323350),
    j = n(530795),
    T = n(551483);
function b(e) {
    let t = l.useContext(o.Ay),
        n = c.SI.useSetting(),
        [i] = l.useState(() => {
            let l = (0, s.ie)();
            return (
                (l.children = (0, d.x7)("")),
                (l.selection = { anchor: T.K, focus: T.K }),
                R({ ...e, editor: l, windowContext: t, previewMarkdown: n }),
                l
            );
        });
    return (
        l.useEffect(() => {
            function e() {
                return i.onChange();
            }
            return (
                a.A.addChangeListener(e),
                r.Ay.addChangeListener(e),
                u.A.addChangeListener(e),
                () => {
                    a.A.removeChangeListener(e), r.Ay.removeChangeListener(e), u.A.removeChangeListener(e);
                }
            );
        }, [i]),
        l.useEffect(() => {
            i.previewMarkdown !== n && ((i.previewMarkdown = n), i.onChange());
        }, [i, n]),
        i
    );
}
function R(e) {
    var t;
    let {
            editor: n,
            chatInputType: l,
            channel: r,
            windowContext: a,
            previewMarkdown: o,
            forTests: u,
            onChangeStart: c,
            onChangeEnd: d,
            updateState: A,
        } = e,
        C = n,
        { onChange: b } = C;
    (C.chatInputType = l),
        (C.windowContext = a),
        (C.previewMarkdown = o),
        (C.composition = null),
        (C.events = new i.EventEmitter()),
        (C.isMac = "MacIntel" === navigator.platform),
        (C.onChange = () => {
            C.events.emit("onChange"), b();
        }),
        ((t = C =
            (function (e, t) {
                let {
                    addMark: n,
                    removeMark: l,
                    deleteBackward: i,
                    deleteForward: s,
                    setFragmentData: r,
                    insertData: a,
                    insertFragmentData: o,
                    insertTextData: u,
                } = e;
                return (
                    ((e = (0, j.o$)(e)).addMark = n),
                    (e.removeMark = l),
                    (e.setFragmentData = r),
                    (e.insertData = a),
                    (e.insertFragmentData = o),
                    (e.insertTextData = u),
                    (e.deleteBackward = (n) => {
                        if ("line" === n && !t) {
                            let t = p.ZF.toPoint(e.selection);
                            if (null != t) {
                                let l = p.VW.before(e, t, { unit: n });
                                if (null != l) {
                                    let n = p.e0.getLineStart(e, t, !1);
                                    null != n && p.Kh.isAfter(n, l)
                                        ? f.b.delete(e, { at: { anchor: n, focus: t } })
                                        : f.b.delete(e, { at: { anchor: l, focus: t } });
                                    return;
                                }
                            }
                        }
                        i(n);
                    }),
                    (e.deleteForward = (n) => {
                        if ("line" === n && !t) {
                            let t = p.ZF.toPoint(e.selection);
                            if (null != t) {
                                let l = p.VW.after(e, t, { unit: n });
                                if (null != l) {
                                    let n = p.e0.getLineEnd(e, t, !1);
                                    null != n && p.Kh.isBefore(n, l)
                                        ? f.b.delete(e, { at: { anchor: n, focus: t } })
                                        : f.b.delete(e, { at: { anchor: l, focus: t } });
                                    return;
                                }
                            }
                        }
                        s(n);
                    }),
                    e
                );
            })(C, !0 === u)).setFragmentData = (e) => {
            if (null != t.selection && !p.Kh.equals(t.selection.anchor, t.selection.focus)) {
                let n = (0, _.WO)(p.VW.richValue(t), { mode: "plain", range: t.selection, preventEmojiSurrogates: !0 });
                e.setData("text/plain", n);
            }
        }),
        (t.insertData = (e) => {
            t.insertTextData(e);
        }),
        (t.insertFragmentData = (e) => !1),
        (t.insertTextData = (e) => {
            let n = e.getData("text/plain");
            if (0 === n.length) return !1;
            if (null != t.selection && p.ZF.isExpanded(t.selection)) {
                let e = s.KE.string(t, t.selection),
                    l = (0, N.W1)(n),
                    i = (0, N.W1)(e);
                if (null != l && null == i) {
                    let [e, n] = p.ZF.edges(t.selection);
                    return (
                        p.VW.withoutNormalizing(t, () => {
                            f.b.select(t, e),
                                t.insertText("["),
                                f.b.select(t, n),
                                0 === p.PW.compare(e.path, n.path) && f.b.move(t, { distance: 1 }),
                                t.insertText(`](${l.target})`);
                        }),
                        !0
                    );
                }
                if (null != l && null != i) return f.b.delete(t, { at: t.selection }), t.insertText(l.target), !0;
                f.b.delete(t, { at: t.selection });
            }
            return t.insertText(n), !0;
        }),
        (C = (function (e) {
            let { apply: t, deleteBackward: n, deleteForward: l, deleteFragment: i, insertText: s } = e;
            return (
                (e.apply = (n) => {
                    if (
                        "set_selection" === n.type &&
                        e.composition?.startedInsideInline &&
                        p.ZF.isRange(n.properties) &&
                        p.ZF.isRange(n.newProperties) &&
                        p.ZF.isCollapsed(n.newProperties)
                    ) {
                        let t = p.VW.getParentInline(e, n.properties),
                            l = p.VW.getParentInline(e, n.newProperties);
                        if (null != t && (null == l || !p.PW.equals(t[1], l[1]))) return;
                    }
                    t(n);
                }),
                (e.insertText = (t) => {
                    null != e.selection && null != p.VW.getCurrentInline(e) ? f.b.insertText(e, t) : s(t);
                }),
                (e.deleteBackward = (t) => {
                    v(e, t, !0) || n(t);
                }),
                (e.deleteForward = (t) => {
                    v(e, t, !1) || l(t);
                }),
                (e.deleteFragment = (t) => {
                    if (null != e.selection && p.ZF.isExpanded(e.selection)) {
                        let n = e.selection.anchor,
                            l = e.selection.focus,
                            s = p.VW.getParentInline(e, n),
                            r = p.VW.getParentInline(e, l);
                        if (null != s && null != r && p.PW.equals(s[1], r[1])) return void i(t);
                        let a = p.ZF.isForward(e.selection);
                        if (null != s) {
                            let [, t] = s,
                                [l, i] = p.VW.edges(e, t);
                            a && p.Kh.equals(n, l)
                                ? (n = p.VW.before(e, l) ?? p.VW.start(e, []))
                                : !a && p.Kh.equals(n, i) && (n = p.VW.after(e, i) ?? p.VW.end(e, []));
                        }
                        if (null != r) {
                            let [, t] = r,
                                [n, i] = p.VW.edges(e, t);
                            !a && p.Kh.equals(l, n)
                                ? (l = p.VW.before(e, n) ?? p.VW.start(e, []))
                                : a && p.Kh.equals(l, i) && (l = p.VW.after(e, i) ?? p.VW.end(e, []));
                        }
                        return void f.b.delete(e, {
                            at: { anchor: n, focus: l },
                            reverse: "backward" === t,
                            select: !0,
                        });
                    }
                    i(t);
                }),
                e
            );
        })((C = t))),
        l.commands?.enabled && (C = (0, h.A)(C, r)),
        (C = (0, S.Ay)(C, r.guild_id, r.id)),
        l.markdown?.disableBlockQuotes ||
            (C = (function (e) {
                let { deleteBackward: t, deleteFragment: n, insertBreak: l, onChange: i } = e;
                (e.deleteBackward = (n) => {
                    let l = p.VW.getCurrentBlock(e);
                    if (l?.[0].type === "blockQuote") {
                        let t = p.ZF.toPoint(e.selection);
                        if (null != t && p.PW.isFirstChild(l[1], t.path) && 0 === t.offset)
                            return void f.b.setNodes(e, { type: "line" }, { at: l[1] });
                    }
                    t(n);
                }),
                    (e.deleteFragment = (t) => {
                        if (null != e.selection) {
                            let [l, i] = p.ZF.edges(e.selection),
                                s = [l.path[0]],
                                r = p.VW.node(e, s),
                                a = [i.path[0]],
                                o = p.PW.equals(s, a) ? null : p.VW.node(e, a);
                            m.o.withSingleEntry(e, () => {
                                r?.[0].type === "blockQuote" &&
                                    p.Kh.isAtStart(l, r) &&
                                    f.b.setNodes(e, { type: "line" }, { at: s }),
                                    o?.[0].type === "blockQuote" &&
                                        p.Kh.isAtEnd(i, o) &&
                                        f.b.setNodes(e, { type: "line" }, { at: a }),
                                    n(t);
                            });
                            return;
                        }
                        n(t);
                    }),
                    (e.insertBreak = () => {
                        let t = p.VW.getCurrentBlock(e);
                        if (t?.[0].type === "blockQuote") {
                            let n = p.ZF.toPoint(e.selection);
                            if (null == n) return;
                            !(function (e, t, n) {
                                if (!p.VW.isEmpty(e, t[0])) return !1;
                                let l = p.VW.previous(e, { at: t[1] });
                                return (
                                    null != l &&
                                    !!p.AS.isType(l[0], "blockQuote") &&
                                    !!p.VW.isEmpty(e, l[0]) &&
                                    !!p.Kh.isAtStart(n, t) &&
                                    (f.b.setNodes(e, { type: "line" }, { at: t[1] }),
                                    f.b.removeNodes(e, { at: l[1] }),
                                    !0)
                                );
                            })(e, t, n) && f.b.splitNodes(e, { at: n, always: !0 });
                            return;
                        }
                        l();
                    });
                let s = null,
                    r = !0;
                return (
                    (e.onChange = () => {
                        let t = p.VW.richValue(e);
                        (t !== s || e.previewMarkdown !== r) &&
                            (m.o.withMergedEntry(e, () => {
                                p.VW.withoutNormalizing(e, () =>
                                    (function (e) {
                                        let t = !1;
                                        for (let n of p.VW.blocks(e)) {
                                            let [l, i] = n;
                                            if (!x.has(l.type)) continue;
                                            let s = { path: p.PW.child(i, 0), offset: 0 };
                                            if ((0, g.W)(e, s)) {
                                                "blockQuote" === l.type &&
                                                    (f.b.setNodes(e, { type: "line" }, { at: i }),
                                                    f.b.insertText(e, "> ", { at: s }));
                                                continue;
                                            }
                                            if ("blockQuote" === l.type || p.VW.areStylesDisabled(e)) continue;
                                            let r = l.children[0];
                                            if (!p.l5.isText(r)) continue;
                                            let a = r.text.match(/^\s*>>> /),
                                                o = r.text.match(/^\s*> /);
                                            if (
                                                (null != o || null != a || t) &&
                                                (f.b.setNodes(e, { type: "blockQuote" }, { at: i }), !t)
                                            ) {
                                                let n = o?.[0].length ?? a?.[0].length ?? 0,
                                                    l = p.PW.child(i, 0);
                                                f.b.delete(e, {
                                                    at: {
                                                        anchor: { path: l, offset: 0 },
                                                        focus: { path: l, offset: n },
                                                    },
                                                }),
                                                    (t = null != a);
                                            }
                                        }
                                    })(e),
                                );
                            }),
                            (s = t),
                            (r = e.previewMarkdown)),
                            i();
                    }),
                    e
                );
            })(C)),
        l.markdown?.disableCodeBlocks || (C = (0, g.Ay)(C)),
        u &&
            (C = (function (e) {
                let { isInline: t, isVoid: n } = e;
                return (
                    (e.isInline = (e) => "testInline" === e.type || "testInlineVoid" === e.type || t(e)),
                    (e.isVoid = (e) => "testInlineVoid" === e.type || n(e)),
                    e
                );
            })(C)),
        (C = (function (e, t) {
            let {
                apply: n,
                deleteBackward: l,
                deleteForward: i,
                deleteFragment: s,
                insertData: r,
                insertText: a,
                onChange: o,
            } = e;
            function u(n) {
                let l = m.o.currentEntry(e);
                if ((null != l && (l.mergeable = !1), n >= e.history.stack.length)) return;
                e.history.index = n;
                let i = m.o.currentEntry(e);
                t({ newValue: i.value, newSelection: i.selection });
            }
            (e.history = { index: 0, stack: [] }),
                (e.onChange = () => {
                    let { history: t } = e;
                    0 === t.stack.length && ((t.stack = [I(e)]), (t.index = 0)),
                        null != e.selection && (m.o.currentEntry(e).selection = e.selection),
                        (d = null),
                        o();
                }),
                (e.undo = () => {
                    e.history.index > 0 && u(e.history.index - 1);
                }),
                (e.redo = () => {
                    e.history.index < e.history.stack.length - 1 && u(e.history.index + 1);
                });
            let c = null,
                d = null,
                h = null;
            return (
                (e.apply = (t) => {
                    let { history: l } = e;
                    n(t);
                    let i = p.VW.richValue(e);
                    i !== h &&
                        (0 === l.stack.length && ((l.stack = [I(e)]), (l.index = 0)),
                        m.o.isSaving(e) &&
                            ((function (e, t, n) {
                                var l, i;
                                let s,
                                    { selection: r } = e,
                                    a = m.o.currentEntry(e),
                                    o = !0,
                                    u = !0;
                                if (
                                    ("insert_text" === t.type && 1 === t.text.length
                                        ? ((s = "insert"),
                                          (u = !(
                                              ("" === t.text || t.text.endsWith(" ")) &&
                                              n?.type === "insert_text" &&
                                              !("" === n.text && n.text.endsWith(" "))
                                          )))
                                        : "split_node" === t.type
                                          ? (s = "insert")
                                          : "remove_text" === t.type && 1 === t.text.length
                                            ? (s = "delete")
                                            : ((s = "other"), (o = !1), (u = !1)),
                                    "set_selection" === t.type && null != a)
                                ) {
                                    a.selection = r;
                                    return;
                                }
                                o && ((l = a), (i = s), !(l?.type !== i || Date.now() - l.createdAt >= 4e3))
                                    ? m.o.insertOrMergeEntry(e, s, u)
                                    : m.o.insertEntry(e, s, u);
                            })(e, t, c),
                            (c = t)),
                        (d = t),
                        (h = i));
                }),
                (e.deleteBackward = (t) => {
                    m.o.withSingleEntry(e, () => l(t));
                }),
                (e.deleteForward = (t) => {
                    m.o.withSingleEntry(e, () => i(t));
                }),
                (e.deleteFragment = (t) => {
                    m.o.withSingleEntry(e, () => s(t));
                }),
                (e.insertText = (t) => {
                    1 === t.length && d?.type === "remove_text"
                        ? m.o.withMergedEntry(e, () => a(t))
                        : null != e.selection && p.ZF.isExpanded(e.selection)
                          ? m.o.withSingleEntry(e, () => a(t))
                          : a(t);
                }),
                (e.insertData = (t) => {
                    d?.type === "remove_text" ? m.o.withMergedEntry(e, () => r(t)) : m.o.withSingleEntry(e, () => r(t));
                }),
                e
            );
        })(
            (C = (function (e, t, n) {
                let { onChange: l } = e,
                    i = !1,
                    s = !1;
                return (
                    (e.onChange = () => {
                        if (i) {
                            s = !0;
                            return;
                        }
                        i = !0;
                        try {
                            let e = 0;
                            do {
                                if (((s = !1), e++ >= 5)) break;
                                t?.();
                                try {
                                    l();
                                } finally {
                                    n?.();
                                }
                            } while (s);
                        } finally {
                            i = !1;
                        }
                    }),
                    e
                );
            })(
                (C = (function (e) {
                    let { apply: t, onChange: n } = e;
                    return (
                        (e.apply = (n) => {
                            t(n), p.Ot.isValid(e, e.selection) && (e.lastGoodSelection = e.selection);
                        }),
                        (e.onChange = () => {
                            if (
                                (p.Ot.isValid(e, e.selection) ||
                                    (e.selection = (function (e) {
                                        let t;
                                        if (p.Ot.isValid(e, e.lastGoodSelection)) t = e.lastGoodSelection;
                                        else {
                                            let n = p.VW.end(e, []);
                                            t = { anchor: n, focus: n };
                                        }
                                        return t;
                                    })(e)),
                                null != e.selection)
                            ) {
                                let t,
                                    n,
                                    [l, i] = p.ZF.edges(e.selection),
                                    s = !1;
                                for (
                                    ;
                                    null != l && null != (t = p.VW.getParentVoid(e, l)) && !T.XR.includes(t[0].type);
                                )
                                    (l = p.VW.before(e, l, { unit: "offset" })), (s = !0);
                                for (
                                    ;
                                    null != i && null != (n = p.VW.getParentVoid(e, i)) && !T.XR.includes(n[0].type);
                                )
                                    (i = p.VW.after(e, i, { unit: "offset" })), (s = !0);
                                s &&
                                    null != l &&
                                    null != i &&
                                    (p.ZF.isForward(e.selection)
                                        ? f.b.select(e, { anchor: l, focus: i })
                                        : f.b.select(e, { anchor: i, focus: l }));
                            }
                            n();
                        }),
                        e
                    );
                })(
                    (C = (function (e) {
                        let { insertBreak: t, insertText: n } = e;
                        return (
                            (e.insertBreak = () => {
                                E(e) && t();
                            }),
                            (e.insertSoftBreak = () => {
                                e.insertBreak();
                            }),
                            (e.insertText = (t) => {
                                if (0 > t.indexOf("\r") && 0 > t.indexOf("\n")) return void n(t);
                                let l = t.split(/\r\n|\r|\n/);
                                E(e)
                                    ? m.o.withSingleEntry(e, () => {
                                          let t = !1;
                                          for (let i of l) t && f.b.splitNodes(e, { always: !0 }), n(i), (t = !0);
                                      })
                                    : n(l.join(" "));
                            }),
                            e
                        );
                    })((C = (0, y.A)(C)))),
                )),
                c,
                d,
            )),
            (e) => {
                let { newValue: t, newSelection: n } = e;
                return A(C, "undo", { value: t, selection: n });
            },
        ));
}
