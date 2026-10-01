n.d(t, { a: () => L, A: () => O });
var l = n(582128),
    i = n(143236),
    r = n(719442),
    s = n(264322),
    a = n(861382),
    o = n(267102),
    u = n(853145),
    c = n(885386),
    d = n(408018),
    h = n(870748),
    m = n(186306),
    p = n(35277),
    f = n(820066),
    g = n(407315);
let x = new Set(["line", "blockQuote"]);
var S = n(155718);
let E = ["applicationCommand"],
    y = ["gameMentionInput", "timestampMentionInput"];
function C(e) {
    let t = f.VW.getCurrentBlock(e),
        n = f.VW.getCurrentInline(e);
    return null != t && !E.includes(t[0].type) && !y.includes(n?.[0]?.type);
}
function A(e) {
    return null != e && "applicationCommandOption" === e.type && e.optionType === S.n4.STRING;
}
function b(e) {
    return A(f.VW.getCurrentInline(e)?.[0]);
}
function I(e, t, n) {
    let l,
        i,
        r,
        s = f.VW.getCurrentInline(e);
    (r = n
        ? (i = (l = f.VW.string(e, { anchor: f.Kh.start(s), focus: t })).lastIndexOf("\n")) < 0
            ? l.length
            : l.length - i - 1
        : (i = (l = f.VW.string(e, { anchor: t, focus: f.Kh.end(s) })).indexOf("\n")) < 0
          ? l.length
          : i) > 0 && p.b.delete(e, { distance: r, unit: "offset", reverse: n });
}
function v(e) {
    return { type: "other", mergeable: !1, createdAt: Date.now(), value: f.VW.richValue(e), selection: e.selection };
}
var N = n(113001),
    T = n(2368);
function j(e, t, n) {
    let l = f.VW.getCurrentInline(e);
    if ("block" === t) return !0;
    let i = f.VW.getCurrentText(e);
    if (null == i) return !0;
    let [r, s] = i,
        [a, o] = f.VW.edges(e, s),
        u = f.ZF.toPoint(e.selection);
    if (null == u) return !0;
    if (null != l) {
        let [t, n] = l;
        if (f.VW.isEmpty(e, t) || f.VW.isVoid(e, t)) return (p.b.removeInline(e, n), !0);
    }
    if ("line" === t)
        if (null == l) return !1;
        else {
            let [i, r] = f.VW.edges(e, l[1]);
            return (p.b.delete(e, { at: u, unit: t, reverse: n, select: !0, bounds: { anchor: i, focus: r } }), !0);
        }
    let c = f.VW.getParentBlock(e, u);
    if (null == c) return !0;
    let d = c[1],
        h = l;
    if (f.Kh.equals(u, n ? a : o))
        for (;;) {
            let t = (n ? f.VW.before : f.VW.after)(e, u);
            if (null == t) return !0;
            if (!f.PW.isDescendant(t.path, d)) break;
            if (((u = t), null != (h = f.VW.getParentInline(e, t)))) {
                let [t, n] = h;
                if (f.VW.isEmpty(e, t) || f.VW.isVoid(e, t)) {
                    let t = f.VW.before(e, n);
                    return (null != t && p.b.select(e, t), p.b.removeInline(e, n), !0);
                }
            }
            let l = f.VW.node(e, t.path);
            if (null == l || !f.l5.isText(l[0])) return !0;
            if ((([r, s] = l), 0 !== r.text.length)) {
                [a, o] = f.VW.edges(e, s);
                break;
            }
        }
    return (p.b.delete(e, { at: u, unit: t, reverse: n, select: !0 }), !0);
}
var k = n(694403),
    _ = n(323350),
    R = n(235599),
    w = n(551483);
function O(e) {
    let t = l.useContext(o.Ay),
        n = c.SI.useSetting(),
        [i] = l.useState(() => {
            let l = (0, r.ie)();
            return (
                (l.children = (0, d.x7)("")),
                (l.selection = { anchor: w.K, focus: w.K }),
                L({ ...e, editor: l, windowContext: t, previewMarkdown: n }),
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
                s.Ay.addChangeListener(e),
                u.A.addChangeListener(e),
                () => {
                    (a.A.removeChangeListener(e), s.Ay.removeChangeListener(e), u.A.removeChangeListener(e));
                }
            );
        }, [i]),
        l.useEffect(() => {
            i.previewMarkdown !== n && ((i.previewMarkdown = n), i.onChange());
        }, [i, n]),
        i
    );
}
function L(e) {
    var t;
    let {
            editor: n,
            chatInputType: l,
            channel: s,
            windowContext: a,
            previewMarkdown: o,
            forTests: u,
            onChangeStart: c,
            onChangeEnd: d,
            updateState: S,
        } = e,
        E = n,
        { onChange: y } = E;
    ((E.chatInputType = l),
        (E.windowContext = a),
        (E.previewMarkdown = o),
        (E.composition = null),
        (E.events = new i.EventEmitter()),
        (E.isMac = "MacIntel" === navigator.platform),
        (E.onChange = () => {
            (E.events.emit("onChange"), y());
        }),
        ((t = E =
            (function (e, t) {
                let {
                    addMark: n,
                    removeMark: l,
                    deleteBackward: i,
                    deleteForward: r,
                    setFragmentData: s,
                    insertData: a,
                    insertFragmentData: o,
                    insertTextData: u,
                } = e;
                return (
                    ((e = (0, R.o$)(e)).addMark = n),
                    (e.removeMark = l),
                    (e.setFragmentData = s),
                    (e.insertData = a),
                    (e.insertFragmentData = o),
                    (e.insertTextData = u),
                    (e.deleteBackward = (n) => {
                        if ("line" === n && !t) {
                            let t = f.ZF.toPoint(e.selection);
                            if (null != t) {
                                let l = f.VW.before(e, t, { unit: n });
                                if (null != l) {
                                    let n = f.e0.getLineStart(e, t, !1);
                                    null != n && f.Kh.isAfter(n, l)
                                        ? p.b.delete(e, { at: { anchor: n, focus: t } })
                                        : p.b.delete(e, { at: { anchor: l, focus: t } });
                                    return;
                                }
                            }
                        }
                        i(n);
                    }),
                    (e.deleteForward = (n) => {
                        if ("line" === n && !t) {
                            let t = f.ZF.toPoint(e.selection);
                            if (null != t) {
                                let l = f.VW.after(e, t, { unit: n });
                                if (null != l) {
                                    let n = f.e0.getLineEnd(e, t, !1);
                                    null != n && f.Kh.isBefore(n, l)
                                        ? p.b.delete(e, { at: { anchor: n, focus: t } })
                                        : p.b.delete(e, { at: { anchor: l, focus: t } });
                                    return;
                                }
                            }
                        }
                        r(n);
                    }),
                    e
                );
            })(E, !0 === u)).setFragmentData = (e) => {
            if (null != t.selection && !f.Kh.equals(t.selection.anchor, t.selection.focus)) {
                let n = (0, _.WO)(f.VW.richValue(t), { mode: "plain", range: t.selection, preventEmojiSurrogates: !0 });
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
            if (null != t.selection && f.ZF.isExpanded(t.selection)) {
                let e = r.KE.string(t, t.selection),
                    l = (0, k.W1)(n),
                    i = (0, k.W1)(e);
                if (null != l && null == i) {
                    let [e, n] = f.ZF.edges(t.selection);
                    return (
                        f.VW.withoutNormalizing(t, () => {
                            (p.b.select(t, e),
                                t.insertText("["),
                                p.b.select(t, n),
                                0 === f.PW.compare(e.path, n.path) && p.b.move(t, { distance: 1 }),
                                t.insertText(`](${l.target})`));
                        }),
                        !0
                    );
                }
                if (null != l && null != i) return (p.b.delete(t, { at: t.selection }), t.insertText(l.target), !0);
                p.b.delete(t, { at: t.selection });
            }
            return (t.insertText(n), !0);
        }),
        (E = (function (e) {
            let { apply: t, deleteBackward: n, deleteForward: l, deleteFragment: i, insertText: r } = e;
            return (
                (e.apply = (n) => {
                    if (
                        "set_selection" === n.type &&
                        e.composition?.startedInsideInline &&
                        f.ZF.isRange(n.properties) &&
                        f.ZF.isRange(n.newProperties) &&
                        f.ZF.isCollapsed(n.newProperties)
                    ) {
                        let t = f.VW.getParentInline(e, n.properties),
                            l = f.VW.getParentInline(e, n.newProperties);
                        if (null != t && (null == l || !f.PW.equals(t[1], l[1]))) return;
                    }
                    t(n);
                }),
                (e.insertText = (t) => {
                    null != e.selection && null != f.VW.getCurrentInline(e) ? p.b.insertText(e, t) : r(t);
                }),
                (e.deleteBackward = (t) => {
                    j(e, t, !0) || n(t);
                }),
                (e.deleteForward = (t) => {
                    j(e, t, !1) || l(t);
                }),
                (e.deleteFragment = (t) => {
                    if (null != e.selection && f.ZF.isExpanded(e.selection)) {
                        let n = e.selection.anchor,
                            l = e.selection.focus,
                            r = f.VW.getParentInline(e, n),
                            s = f.VW.getParentInline(e, l);
                        if (null != r && null != s && f.PW.equals(r[1], s[1])) return void i(t);
                        let a = f.ZF.isForward(e.selection);
                        if (null != r) {
                            let [, t] = r,
                                [l, i] = f.VW.edges(e, t);
                            a && f.Kh.equals(n, l)
                                ? (n = f.VW.before(e, l) ?? f.VW.start(e, []))
                                : !a && f.Kh.equals(n, i) && (n = f.VW.after(e, i) ?? f.VW.end(e, []));
                        }
                        if (null != s) {
                            let [, t] = s,
                                [n, i] = f.VW.edges(e, t);
                            !a && f.Kh.equals(l, n)
                                ? (l = f.VW.before(e, n) ?? f.VW.start(e, []))
                                : a && f.Kh.equals(l, i) && (l = f.VW.after(e, i) ?? f.VW.end(e, []));
                        }
                        return void p.b.delete(e, {
                            at: { anchor: n, focus: l },
                            reverse: "backward" === t,
                            select: !0,
                        });
                    }
                    i(t);
                }),
                e
            );
        })((E = t))),
        l.commands?.enabled && (E = (0, h.A)(E, s)),
        (E = (0, T.Ay)(E, s.guild_id, s.id)),
        l.markdown?.disableBlockQuotes ||
            (E = (function (e) {
                let { deleteBackward: t, deleteFragment: n, insertBreak: l, onChange: i } = e;
                ((e.deleteBackward = (n) => {
                    let l = f.VW.getCurrentBlock(e);
                    if (l?.[0].type === "blockQuote") {
                        let t = f.ZF.toPoint(e.selection);
                        if (null != t && f.PW.isFirstChild(l[1], t.path) && 0 === t.offset)
                            return void p.b.setNodes(e, { type: "line" }, { at: l[1] });
                    }
                    t(n);
                }),
                    (e.deleteFragment = (t) => {
                        if (null != e.selection) {
                            let [l, i] = f.ZF.edges(e.selection),
                                r = [l.path[0]],
                                s = f.VW.node(e, r),
                                a = [i.path[0]],
                                o = f.PW.equals(r, a) ? null : f.VW.node(e, a);
                            m.o.withSingleEntry(e, () => {
                                (s?.[0].type === "blockQuote" &&
                                    f.Kh.isAtStart(l, s) &&
                                    p.b.setNodes(e, { type: "line" }, { at: r }),
                                    o?.[0].type === "blockQuote" &&
                                        f.Kh.isAtEnd(i, o) &&
                                        p.b.setNodes(e, { type: "line" }, { at: a }),
                                    n(t));
                            });
                            return;
                        }
                        n(t);
                    }),
                    (e.insertBreak = () => {
                        let t = f.VW.getCurrentBlock(e);
                        if (t?.[0].type === "blockQuote") {
                            let n = f.ZF.toPoint(e.selection);
                            if (null == n) return;
                            !(function (e, t, n) {
                                if (!f.VW.isEmpty(e, t[0])) return !1;
                                let l = f.VW.previous(e, { at: t[1] });
                                return (
                                    null != l &&
                                    !!f.AS.isType(l[0], "blockQuote") &&
                                    !!f.VW.isEmpty(e, l[0]) &&
                                    !!f.Kh.isAtStart(n, t) &&
                                    (p.b.setNodes(e, { type: "line" }, { at: t[1] }),
                                    p.b.removeNodes(e, { at: l[1] }),
                                    !0)
                                );
                            })(e, t, n) && p.b.splitNodes(e, { at: n, always: !0 });
                            return;
                        }
                        l();
                    }));
                let r = null,
                    s = !0;
                return (
                    (e.onChange = () => {
                        let t = f.VW.richValue(e);
                        ((t !== r || e.previewMarkdown !== s) &&
                            (m.o.withMergedEntry(e, () => {
                                f.VW.withoutNormalizing(e, () =>
                                    (function (e) {
                                        let t = !1;
                                        for (let n of f.VW.blocks(e)) {
                                            let [l, i] = n;
                                            if (!x.has(l.type)) continue;
                                            let r = { path: f.PW.child(i, 0), offset: 0 };
                                            if ((0, g.W)(e, r)) {
                                                "blockQuote" === l.type &&
                                                    (p.b.setNodes(e, { type: "line" }, { at: i }),
                                                    p.b.insertText(e, "> ", { at: r }));
                                                continue;
                                            }
                                            if ("blockQuote" === l.type || f.VW.areStylesDisabled(e)) continue;
                                            let s = l.children[0];
                                            if (!f.l5.isText(s)) continue;
                                            let a = s.text.match(/^\s*>>> /),
                                                o = s.text.match(/^\s*> /);
                                            if (
                                                (null != o || null != a || t) &&
                                                (p.b.setNodes(e, { type: "blockQuote" }, { at: i }), !t)
                                            ) {
                                                let n = o?.[0].length ?? a?.[0].length ?? 0,
                                                    l = f.PW.child(i, 0);
                                                (p.b.delete(e, {
                                                    at: {
                                                        anchor: { path: l, offset: 0 },
                                                        focus: { path: l, offset: n },
                                                    },
                                                }),
                                                    (t = null != a));
                                            }
                                        }
                                    })(e),
                                );
                            }),
                            (r = t),
                            (s = e.previewMarkdown)),
                            i());
                    }),
                    e
                );
            })(E)),
        l.markdown?.disableCodeBlocks || (E = (0, g.Ay)(E)),
        u &&
            (E = (function (e) {
                let { isInline: t, isVoid: n } = e;
                return (
                    (e.isInline = (e) => "testInline" === e.type || "testInlineVoid" === e.type || t(e)),
                    (e.isVoid = (e) => "testInlineVoid" === e.type || n(e)),
                    e
                );
            })(E)),
        (E = (function (e, t) {
            let {
                apply: n,
                deleteBackward: l,
                deleteForward: i,
                deleteFragment: r,
                insertData: s,
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
            ((e.history = { index: 0, stack: [] }),
                (e.onChange = () => {
                    let { history: t } = e;
                    (0 === t.stack.length && ((t.stack = [v(e)]), (t.index = 0)),
                        null != e.selection && (m.o.currentEntry(e).selection = e.selection),
                        (d = null),
                        o());
                }),
                (e.undo = () => {
                    e.history.index > 0 && u(e.history.index - 1);
                }),
                (e.redo = () => {
                    e.history.index < e.history.stack.length - 1 && u(e.history.index + 1);
                }));
            let c = null,
                d = null,
                h = null;
            return (
                (e.apply = (t) => {
                    let { history: l } = e;
                    n(t);
                    let i = f.VW.richValue(e);
                    i !== h &&
                        (0 === l.stack.length && ((l.stack = [v(e)]), (l.index = 0)),
                        m.o.isSaving(e) &&
                            ((function (e, t, n) {
                                var l, i;
                                let r,
                                    { selection: s } = e,
                                    a = m.o.currentEntry(e),
                                    o = !0,
                                    u = !0;
                                if (
                                    ("insert_text" === t.type && 1 === t.text.length
                                        ? ((r = "insert"),
                                          (u = !(
                                              ("" === t.text || t.text.endsWith(" ")) &&
                                              n?.type === "insert_text" &&
                                              !("" === n.text && n.text.endsWith(" "))
                                          )))
                                        : "split_node" === t.type
                                          ? (r = "insert")
                                          : "remove_text" === t.type && 1 === t.text.length
                                            ? (r = "delete")
                                            : ((r = "other"), (o = !1), (u = !1)),
                                    "set_selection" === t.type && null != a)
                                ) {
                                    a.selection = s;
                                    return;
                                }
                                o && ((l = a), (i = r), !(l?.type !== i || Date.now() - l.createdAt >= 4e3))
                                    ? m.o.insertOrMergeEntry(e, r, u)
                                    : m.o.insertEntry(e, r, u);
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
                    m.o.withSingleEntry(e, () => r(t));
                }),
                (e.insertText = (t) => {
                    1 === t.length && d?.type === "remove_text"
                        ? m.o.withMergedEntry(e, () => a(t))
                        : null != e.selection && f.ZF.isExpanded(e.selection)
                          ? m.o.withSingleEntry(e, () => a(t))
                          : a(t);
                }),
                (e.insertData = (t) => {
                    d?.type === "remove_text" ? m.o.withMergedEntry(e, () => s(t)) : m.o.withSingleEntry(e, () => s(t));
                }),
                e
            );
        })(
            (E = (function (e, t, n) {
                let { onChange: l } = e,
                    i = !1,
                    r = !1;
                return (
                    (e.onChange = () => {
                        if (i) {
                            r = !0;
                            return;
                        }
                        i = !0;
                        try {
                            let e = 0;
                            do {
                                if (((r = !1), e++ >= 5)) break;
                                t?.();
                                try {
                                    l();
                                } finally {
                                    n?.();
                                }
                            } while (r);
                        } finally {
                            i = !1;
                        }
                    }),
                    e
                );
            })(
                (E = (function (e) {
                    let { apply: t, onChange: n } = e;
                    return (
                        (e.apply = (n) => {
                            (t(n), f.Ot.isValid(e, e.selection) && (e.lastGoodSelection = e.selection));
                        }),
                        (e.onChange = () => {
                            if (
                                (f.Ot.isValid(e, e.selection) ||
                                    (e.selection = (function (e) {
                                        let t;
                                        if (f.Ot.isValid(e, e.lastGoodSelection)) t = e.lastGoodSelection;
                                        else {
                                            let n = f.VW.end(e, []);
                                            t = { anchor: n, focus: n };
                                        }
                                        return t;
                                    })(e)),
                                null != e.selection)
                            ) {
                                let t,
                                    n,
                                    [l, i] = f.ZF.edges(e.selection),
                                    r = !1;
                                for (
                                    ;
                                    null != l && null != (t = f.VW.getParentVoid(e, l)) && !w.XR.includes(t[0].type);
                                )
                                    ((l = f.VW.before(e, l, { unit: "offset" })), (r = !0));
                                for (
                                    ;
                                    null != i && null != (n = f.VW.getParentVoid(e, i)) && !w.XR.includes(n[0].type);
                                )
                                    ((i = f.VW.after(e, i, { unit: "offset" })), (r = !0));
                                r &&
                                    null != l &&
                                    null != i &&
                                    (f.ZF.isForward(e.selection)
                                        ? p.b.select(e, { anchor: l, focus: i })
                                        : p.b.select(e, { anchor: i, focus: l }));
                            }
                            n();
                        }),
                        e
                    );
                })(
                    (E = (function (e) {
                        let { deleteBackward: t, deleteForward: n, insertBreak: l, insertText: i } = e;
                        return (
                            (e.rendersTrailingNewline = A),
                            (e.insertBreak = () => {
                                b(e) ? i("\n") : C(e) && l();
                            }),
                            (e.insertSoftBreak = () => {
                                e.insertBreak();
                            }),
                            (e.deleteBackward = (n) => {
                                let l = f.ZF.toPoint(e.selection);
                                "line" === n && null != l && b(e) ? I(e, l, !0) : t(n);
                            }),
                            (e.deleteForward = (t) => {
                                let l = f.ZF.toPoint(e.selection);
                                "line" === t && null != l && b(e) ? I(e, l, !1) : n(t);
                            }),
                            (e.insertText = (t) => {
                                if (0 > t.indexOf("\r") && 0 > t.indexOf("\n")) return void i(t);
                                let n = t.split(/\r\n|\r|\n/);
                                b(e)
                                    ? i(n.join("\n"))
                                    : C(e)
                                      ? m.o.withSingleEntry(e, () => {
                                            let t = !1;
                                            for (let l of n) (t && p.b.splitNodes(e, { always: !0 }), i(l), (t = !0));
                                        })
                                      : i(n.join(" "));
                            }),
                            e
                        );
                    })((E = (0, N.A)(E)))),
                )),
                c,
                d,
            )),
            (e) => {
                let { newValue: t, newSelection: n } = e;
                return S(E, "undo", { value: t, selection: n });
            },
        )));
}
