n.d(t, { a: () => k, A: () => M });
var l = n(582128),
    i = n(143236),
    s = n(719442),
    r = n(264322),
    a = n(861382),
    o = n(267102),
    u = n(853145),
    c = n(885386),
    d = n(408018),
    m = n(870748),
    h = n(186306),
    p = n(35277),
    f = n(820066),
    g = n(407315);
let x = new Set(["line", "blockQuote"]);
var A = n(155718);
let C = ["applicationCommand"],
    E = ["gameMentionInput", "timestampMentionInput"];
function I(e) {
    let t = f.VW.getCurrentBlock(e),
        n = f.VW.getCurrentInline(e);
    return null != t && !C.includes(t[0].type) && !E.includes(n?.[0]?.type);
}
function y(e) {
    return null != e && "applicationCommandOption" === e.type && e.optionType === A.n4.STRING;
}
function S(e) {
    return y(f.VW.getCurrentInline(e)?.[0]);
}
function v(e, t, n) {
    let l,
        i,
        s,
        r = f.VW.getCurrentInline(e);
    (s = n
        ? (i = (l = f.VW.string(e, { anchor: f.Kh.start(r), focus: t })).lastIndexOf("\n")) < 0
            ? l.length
            : l.length - i - 1
        : (i = (l = f.VW.string(e, { anchor: t, focus: f.Kh.end(r) })).indexOf("\n")) < 0
          ? l.length
          : i) > 0 && p.b.delete(e, { distance: s, unit: "offset", reverse: n });
}
function N(e) {
    return { type: "other", mergeable: !1, createdAt: Date.now(), value: f.VW.richValue(e), selection: e.selection };
}
var _ = n(113001),
    j = n(2368);
function b(e, t, n) {
    let l = f.VW.getCurrentInline(e);
    if ("block" === t) return !0;
    let i = f.VW.getCurrentText(e);
    if (null == i) return !0;
    let [s, r] = i,
        [a, o] = f.VW.edges(e, r),
        u = f.ZF.toPoint(e.selection);
    if (null == u) return !0;
    if (null != l) {
        let [t, n] = l;
        if (f.VW.isEmpty(e, t) || f.VW.isVoid(e, t)) return (p.b.removeInline(e, n), !0);
    }
    if ("line" === t)
        if (null == l) return !1;
        else {
            let [i, s] = f.VW.edges(e, l[1]);
            return (p.b.delete(e, { at: u, unit: t, reverse: n, select: !0, bounds: { anchor: i, focus: s } }), !0);
        }
    let c = f.VW.getParentBlock(e, u);
    if (null == c) return !0;
    let d = c[1],
        m = l;
    if (f.Kh.equals(u, n ? a : o))
        for (;;) {
            let t = (n ? f.VW.before : f.VW.after)(e, u);
            if (null == t) return !0;
            if (!f.PW.isDescendant(t.path, d)) break;
            if (((u = t), null != (m = f.VW.getParentInline(e, t)))) {
                let [t, n] = m;
                if (f.VW.isEmpty(e, t) || f.VW.isVoid(e, t)) {
                    let t = f.VW.before(e, n);
                    return (null != t && p.b.select(e, t), p.b.removeInline(e, n), !0);
                }
            }
            let l = f.VW.node(e, t.path);
            if (null == l || !f.l5.isText(l[0])) return !0;
            if ((([s, r] = l), 0 !== s.text.length)) {
                [a, o] = f.VW.edges(e, r);
                break;
            }
        }
    return (p.b.delete(e, { at: u, unit: t, reverse: n, select: !0 }), !0);
}
var T = n(694403),
    R = n(323350),
    O = n(235599),
    L = n(551483);
function M(e) {
    let t = l.useContext(o.Ay),
        n = c.SI.useSetting(),
        [i] = l.useState(() => {
            let l = (0, s.ie)();
            return (
                (l.children = (0, d.x7)("")),
                (l.selection = { anchor: L.K, focus: L.K }),
                k({ ...e, editor: l, windowContext: t, previewMarkdown: n }),
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
                    (a.A.removeChangeListener(e), r.Ay.removeChangeListener(e), u.A.removeChangeListener(e));
                }
            );
        }, [i]),
        l.useEffect(() => {
            i.previewMarkdown !== n && ((i.previewMarkdown = n), i.onChange());
        }, [i, n]),
        i
    );
}
function k(e) {
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
        { onChange: E } = C;
    ((C.chatInputType = l),
        (C.windowContext = a),
        (C.previewMarkdown = o),
        (C.composition = null),
        (C.events = new i.EventEmitter()),
        (C.isMac = "MacIntel" === navigator.platform),
        (C.onChange = () => {
            (C.events.emit("onChange"), E());
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
                    ((e = (0, O.o$)(e)).addMark = n),
                    (e.removeMark = l),
                    (e.setFragmentData = r),
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
                        s(n);
                    }),
                    e
                );
            })(C, !0 === u)).setFragmentData = (e) => {
            if (null != t.selection && !f.Kh.equals(t.selection.anchor, t.selection.focus)) {
                let n = (0, R.WO)(f.VW.richValue(t), { mode: "plain", range: t.selection, preventEmojiSurrogates: !0 });
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
                let e = s.KE.string(t, t.selection),
                    l = (0, T.W1)(n),
                    i = (0, T.W1)(e);
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
        (C = (function (e) {
            let { apply: t, deleteBackward: n, deleteForward: l, deleteFragment: i, insertText: s } = e;
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
                    null != e.selection && null != f.VW.getCurrentInline(e) ? p.b.insertText(e, t) : s(t);
                }),
                (e.deleteBackward = (t) => {
                    b(e, t, !0) || n(t);
                }),
                (e.deleteForward = (t) => {
                    b(e, t, !1) || l(t);
                }),
                (e.deleteFragment = (t) => {
                    if (null != e.selection && f.ZF.isExpanded(e.selection)) {
                        let n = e.selection.anchor,
                            l = e.selection.focus,
                            s = f.VW.getParentInline(e, n),
                            r = f.VW.getParentInline(e, l);
                        if (null != s && null != r && f.PW.equals(s[1], r[1])) return void i(t);
                        let a = f.ZF.isForward(e.selection);
                        if (null != s) {
                            let [, t] = s,
                                [l, i] = f.VW.edges(e, t);
                            a && f.Kh.equals(n, l)
                                ? (n = f.VW.before(e, l) ?? f.VW.start(e, []))
                                : !a && f.Kh.equals(n, i) && (n = f.VW.after(e, i) ?? f.VW.end(e, []));
                        }
                        if (null != r) {
                            let [, t] = r,
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
        })((C = t))),
        l.commands?.enabled && (C = (0, m.A)(C, r)),
        (C = (0, j.Ay)(C, r.guild_id, r.id)),
        l.markdown?.disableBlockQuotes ||
            (C = (function (e) {
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
                                s = [l.path[0]],
                                r = f.VW.node(e, s),
                                a = [i.path[0]],
                                o = f.PW.equals(s, a) ? null : f.VW.node(e, a);
                            h.o.withSingleEntry(e, () => {
                                (r?.[0].type === "blockQuote" &&
                                    f.Kh.isAtStart(l, r) &&
                                    p.b.setNodes(e, { type: "line" }, { at: s }),
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
                let s = null,
                    r = !0;
                return (
                    (e.onChange = () => {
                        let t = f.VW.richValue(e);
                        ((t !== s || e.previewMarkdown !== r) &&
                            (h.o.withMergedEntry(e, () => {
                                f.VW.withoutNormalizing(e, () =>
                                    (function (e) {
                                        let t = !1;
                                        for (let n of f.VW.blocks(e)) {
                                            let [l, i] = n;
                                            if (!x.has(l.type)) continue;
                                            let s = { path: f.PW.child(i, 0), offset: 0 };
                                            if ((0, g.W)(e, s)) {
                                                "blockQuote" === l.type &&
                                                    (p.b.setNodes(e, { type: "line" }, { at: i }),
                                                    p.b.insertText(e, "> ", { at: s }));
                                                continue;
                                            }
                                            if ("blockQuote" === l.type || f.VW.areStylesDisabled(e)) continue;
                                            let r = l.children[0];
                                            if (!f.l5.isText(r)) continue;
                                            let a = r.text.match(/^\s*>>> /),
                                                o = r.text.match(/^\s*> /);
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
                            (s = t),
                            (r = e.previewMarkdown)),
                            i());
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
                let l = h.o.currentEntry(e);
                if ((null != l && (l.mergeable = !1), n >= e.history.stack.length)) return;
                e.history.index = n;
                let i = h.o.currentEntry(e);
                t({ newValue: i.value, newSelection: i.selection });
            }
            ((e.history = { index: 0, stack: [] }),
                (e.onChange = () => {
                    let { history: t } = e;
                    (0 === t.stack.length && ((t.stack = [N(e)]), (t.index = 0)),
                        null != e.selection && (h.o.currentEntry(e).selection = e.selection),
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
                m = null;
            return (
                (e.apply = (t) => {
                    let { history: l } = e;
                    n(t);
                    let i = f.VW.richValue(e);
                    i !== m &&
                        (0 === l.stack.length && ((l.stack = [N(e)]), (l.index = 0)),
                        h.o.isSaving(e) &&
                            ((function (e, t, n) {
                                var l, i;
                                let s,
                                    { selection: r } = e,
                                    a = h.o.currentEntry(e),
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
                                    ? h.o.insertOrMergeEntry(e, s, u)
                                    : h.o.insertEntry(e, s, u);
                            })(e, t, c),
                            (c = t)),
                        (d = t),
                        (m = i));
                }),
                (e.deleteBackward = (t) => {
                    h.o.withSingleEntry(e, () => l(t));
                }),
                (e.deleteForward = (t) => {
                    h.o.withSingleEntry(e, () => i(t));
                }),
                (e.deleteFragment = (t) => {
                    h.o.withSingleEntry(e, () => s(t));
                }),
                (e.insertText = (t) => {
                    1 === t.length && d?.type === "remove_text"
                        ? h.o.withMergedEntry(e, () => a(t))
                        : null != e.selection && f.ZF.isExpanded(e.selection)
                          ? h.o.withSingleEntry(e, () => a(t))
                          : a(t);
                }),
                (e.insertData = (t) => {
                    d?.type === "remove_text" ? h.o.withMergedEntry(e, () => r(t)) : h.o.withSingleEntry(e, () => r(t));
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
                                    s = !1;
                                for (
                                    ;
                                    null != l && null != (t = f.VW.getParentVoid(e, l)) && !L.XR.includes(t[0].type);
                                )
                                    ((l = f.VW.before(e, l, { unit: "offset" })), (s = !0));
                                for (
                                    ;
                                    null != i && null != (n = f.VW.getParentVoid(e, i)) && !L.XR.includes(n[0].type);
                                )
                                    ((i = f.VW.after(e, i, { unit: "offset" })), (s = !0));
                                s &&
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
                    (C = (function (e) {
                        let { deleteBackward: t, deleteForward: n, insertBreak: l, insertText: i } = e;
                        return (
                            (e.rendersTrailingNewline = y),
                            (e.insertBreak = () => {
                                S(e) ? i("\n") : I(e) && l();
                            }),
                            (e.insertSoftBreak = () => {
                                e.insertBreak();
                            }),
                            (e.deleteBackward = (n) => {
                                let l = f.ZF.toPoint(e.selection);
                                "line" === n && null != l && S(e) ? v(e, l, !0) : t(n);
                            }),
                            (e.deleteForward = (t) => {
                                let l = f.ZF.toPoint(e.selection);
                                "line" === t && null != l && S(e) ? v(e, l, !1) : n(t);
                            }),
                            (e.insertText = (t) => {
                                if (0 > t.indexOf("\r") && 0 > t.indexOf("\n")) return void i(t);
                                let n = t.split(/\r\n|\r|\n/);
                                S(e)
                                    ? i(n.join("\n"))
                                    : I(e)
                                      ? h.o.withSingleEntry(e, () => {
                                            let t = !1;
                                            for (let l of n) (t && p.b.splitNodes(e, { always: !0 }), i(l), (t = !0));
                                        })
                                      : i(n.join(" "));
                            }),
                            e
                        );
                    })((C = (0, _.A)(C)))),
                )),
                c,
                d,
            )),
            (e) => {
                let { newValue: t, newSelection: n } = e;
                return A(C, "undo", { value: t, selection: n });
            },
        )));
}
