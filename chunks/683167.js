n.d(t, { a: () => D, A: () => P });
var l = n(582128),
    i = n(143236),
    r = n(719442),
    s = n(264322),
    a = n(861382),
    o = n(267102),
    u = n(997141),
    c = n(146849),
    d = n(152959),
    h = n(853145),
    m = n(253932),
    f = n(408018),
    p = n(870748),
    g = n(186306),
    x = n(35277),
    E = n(820066),
    S = n(407315);
let y = new Set(["line", "blockQuote"]);
var C = n(155718);
let A = ["applicationCommand"],
    b = ["gameMentionInput", "timestampMentionInput"];
function I(e) {
    let t = E.VW.getCurrentBlock(e),
        n = E.VW.getCurrentInline(e);
    return null != t && !A.includes(t[0].type) && !b.includes(n?.[0]?.type);
}
function v(e) {
    return null != e && "applicationCommandOption" === e.type && e.optionType === C.n4.STRING;
}
function N(e) {
    return v(E.VW.getCurrentInline(e)?.[0]);
}
function T(e, t, n) {
    let l,
        i,
        r,
        s = E.VW.getCurrentInline(e);
    (r = n
        ? (i = (l = E.VW.string(e, { anchor: E.Kh.start(s), focus: t })).lastIndexOf("\n")) < 0
            ? l.length
            : l.length - i - 1
        : (i = (l = E.VW.string(e, { anchor: t, focus: E.Kh.end(s) })).indexOf("\n")) < 0
          ? l.length
          : i) > 0 && x.b.delete(e, { distance: r, unit: "offset", reverse: n });
}
function k(e) {
    return { type: "other", mergeable: !1, createdAt: Date.now(), value: E.VW.richValue(e), selection: e.selection };
}
var j = n(113001),
    _ = n(2368);
function R(e, t, n) {
    let l = E.VW.getCurrentInline(e);
    if ("block" === t) return !0;
    let i = E.VW.getCurrentText(e);
    if (null == i) return !0;
    let [r, s] = i,
        [a, o] = E.VW.edges(e, s),
        u = E.ZF.toPoint(e.selection);
    if (null == u) return !0;
    if (null != l) {
        let [t, n] = l;
        if (E.VW.isEmpty(e, t) || E.VW.isVoid(e, t)) return (x.b.removeInline(e, n), !0);
    }
    if ("line" === t)
        if (null == l) return !1;
        else {
            let [i, r] = E.VW.edges(e, l[1]);
            return (x.b.delete(e, { at: u, unit: t, reverse: n, select: !0, bounds: { anchor: i, focus: r } }), !0);
        }
    let c = E.VW.getParentBlock(e, u);
    if (null == c) return !0;
    let d = c[1],
        h = l;
    if (E.Kh.equals(u, n ? a : o))
        for (;;) {
            let t = (n ? E.VW.before : E.VW.after)(e, u);
            if (null == t) return !0;
            if (!E.PW.isDescendant(t.path, d)) break;
            if (((u = t), null != (h = E.VW.getParentInline(e, t)))) {
                let [t, n] = h;
                if (E.VW.isEmpty(e, t) || E.VW.isVoid(e, t)) {
                    let t = E.VW.before(e, n);
                    return (null != t && x.b.select(e, t), x.b.removeInline(e, n), !0);
                }
            }
            let l = E.VW.node(e, t.path);
            if (null == l || !E.l5.isText(l[0])) return !0;
            if ((([r, s] = l), 0 !== r.text.length)) {
                [a, o] = E.VW.edges(e, s);
                break;
            }
        }
    return (x.b.delete(e, { at: u, unit: t, reverse: n, select: !0 }), !0);
}
var w = n(694403),
    O = n(323350),
    L = n(235599),
    M = n(551483);
function P(e) {
    let t = l.useContext(o.Ay),
        n = m.SI.useSetting(),
        i = (0, c.I2)({ location: "useEditor" }).enabled,
        p = (0, u.j)({ formatInline: !1 }),
        g = i ? p : null,
        [x] = l.useState(() => {
            let l = (0, r.ie)();
            return (
                (l.children = (0, f.x7)("")),
                (l.selection = { anchor: M.K, focus: M.K }),
                D({ ...e, editor: l, windowContext: t, previewMarkdown: n }),
                (l.nativeMarkdownSyntax = g),
                l
            );
        });
    return (
        l.useEffect(() => {
            var e, t;
            if (
                ((e = x),
                (t = g),
                e.nativeMarkdownSyntax !== t && ((e.nativeMarkdownSyntax = t), e.onChange()),
                null == g || (0, d.YK)())
            )
                return;
            let n = !1;
            return (
                (async function () {
                    try {
                        await (0, d.initNativeMarkdown)();
                    } catch {
                        return;
                    }
                    n || x.onChange();
                })(),
                () => {
                    n = !0;
                }
            );
        }, [x, g]),
        l.useEffect(() => {
            function e() {
                return x.onChange();
            }
            return (
                a.A.addChangeListener(e),
                s.Ay.addChangeListener(e),
                h.A.addChangeListener(e),
                () => {
                    (a.A.removeChangeListener(e), s.Ay.removeChangeListener(e), h.A.removeChangeListener(e));
                }
            );
        }, [x]),
        l.useEffect(() => {
            x.previewMarkdown !== n && ((x.previewMarkdown = n), x.onChange());
        }, [x, n]),
        x
    );
}
function D(e) {
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
            updateState: h,
        } = e,
        m = n,
        { onChange: f } = m;
    ((m.chatInputType = l),
        (m.windowContext = a),
        (m.previewMarkdown = o),
        (m.nativeMarkdownSyntax = null),
        (m.composition = null),
        (m.events = new i.EventEmitter()),
        (m.isMac = "MacIntel" === navigator.platform),
        (m.onChange = () => {
            (m.events.emit("onChange"), f());
        }),
        ((t = m =
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
                    ((e = (0, L.o$)(e)).addMark = n),
                    (e.removeMark = l),
                    (e.setFragmentData = s),
                    (e.insertData = a),
                    (e.insertFragmentData = o),
                    (e.insertTextData = u),
                    (e.deleteBackward = (n) => {
                        if ("line" === n && !t) {
                            let t = E.ZF.toPoint(e.selection);
                            if (null != t) {
                                let l = E.VW.before(e, t, { unit: n });
                                if (null != l) {
                                    let n = E.e0.getLineStart(e, t, !1);
                                    null != n && E.Kh.isAfter(n, l)
                                        ? x.b.delete(e, { at: { anchor: n, focus: t } })
                                        : x.b.delete(e, { at: { anchor: l, focus: t } });
                                    return;
                                }
                            }
                        }
                        i(n);
                    }),
                    (e.deleteForward = (n) => {
                        if ("line" === n && !t) {
                            let t = E.ZF.toPoint(e.selection);
                            if (null != t) {
                                let l = E.VW.after(e, t, { unit: n });
                                if (null != l) {
                                    let n = E.e0.getLineEnd(e, t, !1);
                                    null != n && E.Kh.isBefore(n, l)
                                        ? x.b.delete(e, { at: { anchor: n, focus: t } })
                                        : x.b.delete(e, { at: { anchor: l, focus: t } });
                                    return;
                                }
                            }
                        }
                        r(n);
                    }),
                    e
                );
            })(m, !0 === u)).setFragmentData = (e) => {
            if (null != t.selection && !E.Kh.equals(t.selection.anchor, t.selection.focus)) {
                let n = (0, O.WO)(E.VW.richValue(t), { mode: "plain", range: t.selection, preventEmojiSurrogates: !0 });
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
            if (null != t.selection && E.ZF.isExpanded(t.selection)) {
                let e = r.KE.string(t, t.selection),
                    l = (0, w.W1)(n),
                    i = (0, w.W1)(e);
                if (null != l && null == i) {
                    let [e, n] = E.ZF.edges(t.selection);
                    return (
                        E.VW.withoutNormalizing(t, () => {
                            (x.b.select(t, e),
                                t.insertText("["),
                                x.b.select(t, n),
                                0 === E.PW.compare(e.path, n.path) && x.b.move(t, { distance: 1 }),
                                t.insertText(`](${l.target})`));
                        }),
                        !0
                    );
                }
                if (null != l && null != i) return (x.b.delete(t, { at: t.selection }), t.insertText(l.target), !0);
                x.b.delete(t, { at: t.selection });
            }
            return (t.insertText(n), !0);
        }),
        (m = (function (e) {
            let { apply: t, deleteBackward: n, deleteForward: l, deleteFragment: i, insertText: r } = e;
            return (
                (e.apply = (n) => {
                    if (
                        "set_selection" === n.type &&
                        e.composition?.startedInsideInline &&
                        E.ZF.isRange(n.properties) &&
                        E.ZF.isRange(n.newProperties) &&
                        E.ZF.isCollapsed(n.newProperties)
                    ) {
                        let t = E.VW.getParentInline(e, n.properties),
                            l = E.VW.getParentInline(e, n.newProperties);
                        if (null != t && (null == l || !E.PW.equals(t[1], l[1]))) return;
                    }
                    t(n);
                }),
                (e.insertText = (t) => {
                    null != e.selection && null != E.VW.getCurrentInline(e) ? x.b.insertText(e, t) : r(t);
                }),
                (e.deleteBackward = (t) => {
                    R(e, t, !0) || n(t);
                }),
                (e.deleteForward = (t) => {
                    R(e, t, !1) || l(t);
                }),
                (e.deleteFragment = (t) => {
                    if (null != e.selection && E.ZF.isExpanded(e.selection)) {
                        let n = e.selection.anchor,
                            l = e.selection.focus,
                            r = E.VW.getParentInline(e, n),
                            s = E.VW.getParentInline(e, l);
                        if (null != r && null != s && E.PW.equals(r[1], s[1])) return void i(t);
                        let a = E.ZF.isForward(e.selection);
                        if (null != r) {
                            let [, t] = r,
                                [l, i] = E.VW.edges(e, t);
                            a && E.Kh.equals(n, l)
                                ? (n = E.VW.before(e, l) ?? E.VW.start(e, []))
                                : !a && E.Kh.equals(n, i) && (n = E.VW.after(e, i) ?? E.VW.end(e, []));
                        }
                        if (null != s) {
                            let [, t] = s,
                                [n, i] = E.VW.edges(e, t);
                            !a && E.Kh.equals(l, n)
                                ? (l = E.VW.before(e, n) ?? E.VW.start(e, []))
                                : a && E.Kh.equals(l, i) && (l = E.VW.after(e, i) ?? E.VW.end(e, []));
                        }
                        return void x.b.delete(e, {
                            at: { anchor: n, focus: l },
                            reverse: "backward" === t,
                            select: !0,
                        });
                    }
                    i(t);
                }),
                e
            );
        })((m = t))),
        l.commands?.enabled && (m = (0, p.A)(m, s)),
        (m = (0, _.Ay)(m, s.guild_id, s.id)),
        l.markdown?.disableBlockQuotes ||
            (m = (function (e) {
                let { deleteBackward: t, deleteFragment: n, insertBreak: l, onChange: i } = e;
                ((e.deleteBackward = (n) => {
                    let l = E.VW.getCurrentBlock(e);
                    if (l?.[0].type === "blockQuote") {
                        let t = E.ZF.toPoint(e.selection);
                        if (null != t && E.PW.isFirstChild(l[1], t.path) && 0 === t.offset)
                            return void x.b.setNodes(e, { type: "line" }, { at: l[1] });
                    }
                    t(n);
                }),
                    (e.deleteFragment = (t) => {
                        if (null != e.selection) {
                            let [l, i] = E.ZF.edges(e.selection),
                                r = [l.path[0]],
                                s = E.VW.node(e, r),
                                a = [i.path[0]],
                                o = E.PW.equals(r, a) ? null : E.VW.node(e, a);
                            g.o.withSingleEntry(e, () => {
                                (s?.[0].type === "blockQuote" &&
                                    E.Kh.isAtStart(l, s) &&
                                    x.b.setNodes(e, { type: "line" }, { at: r }),
                                    o?.[0].type === "blockQuote" &&
                                        E.Kh.isAtEnd(i, o) &&
                                        x.b.setNodes(e, { type: "line" }, { at: a }),
                                    n(t));
                            });
                            return;
                        }
                        n(t);
                    }),
                    (e.insertBreak = () => {
                        let t = E.VW.getCurrentBlock(e);
                        if (t?.[0].type === "blockQuote") {
                            let n = E.ZF.toPoint(e.selection);
                            if (null == n) return;
                            !(function (e, t, n) {
                                if (!E.VW.isEmpty(e, t[0])) return !1;
                                let l = E.VW.previous(e, { at: t[1] });
                                return (
                                    null != l &&
                                    !!E.AS.isType(l[0], "blockQuote") &&
                                    !!E.VW.isEmpty(e, l[0]) &&
                                    !!E.Kh.isAtStart(n, t) &&
                                    (x.b.setNodes(e, { type: "line" }, { at: t[1] }),
                                    x.b.removeNodes(e, { at: l[1] }),
                                    !0)
                                );
                            })(e, t, n) && x.b.splitNodes(e, { at: n, always: !0 });
                            return;
                        }
                        l();
                    }));
                let r = null,
                    s = !0;
                return (
                    (e.onChange = () => {
                        let t = E.VW.richValue(e);
                        ((t !== r || e.previewMarkdown !== s) &&
                            (g.o.withMergedEntry(e, () => {
                                E.VW.withoutNormalizing(e, () =>
                                    (function (e) {
                                        let t = !1;
                                        for (let n of E.VW.blocks(e)) {
                                            let [l, i] = n;
                                            if (!y.has(l.type)) continue;
                                            let r = { path: E.PW.child(i, 0), offset: 0 };
                                            if ((0, S.W)(e, r)) {
                                                "blockQuote" === l.type &&
                                                    (x.b.setNodes(e, { type: "line" }, { at: i }),
                                                    x.b.insertText(e, "> ", { at: r }));
                                                continue;
                                            }
                                            if ("blockQuote" === l.type || E.VW.areStylesDisabled(e)) continue;
                                            let s = l.children[0];
                                            if (!E.l5.isText(s)) continue;
                                            let a = s.text.match(/^\s*>>> /),
                                                o = s.text.match(/^\s*> /);
                                            if (
                                                (null != o || null != a || t) &&
                                                (x.b.setNodes(e, { type: "blockQuote" }, { at: i }), !t)
                                            ) {
                                                let n = o?.[0].length ?? a?.[0].length ?? 0,
                                                    l = E.PW.child(i, 0);
                                                (x.b.delete(e, {
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
            })(m)),
        l.markdown?.disableCodeBlocks || (m = (0, S.Ay)(m)),
        u &&
            (m = (function (e) {
                let { isInline: t, isVoid: n } = e;
                return (
                    (e.isInline = (e) => "testInline" === e.type || "testInlineVoid" === e.type || t(e)),
                    (e.isVoid = (e) => "testInlineVoid" === e.type || n(e)),
                    e
                );
            })(m)),
        (m = (function (e, t) {
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
                let l = g.o.currentEntry(e);
                if ((null != l && (l.mergeable = !1), n >= e.history.stack.length)) return;
                e.history.index = n;
                let i = g.o.currentEntry(e);
                t({ newValue: i.value, newSelection: i.selection });
            }
            ((e.history = { index: 0, stack: [] }),
                (e.onChange = () => {
                    let { history: t } = e;
                    (0 === t.stack.length && ((t.stack = [k(e)]), (t.index = 0)),
                        null != e.selection && (g.o.currentEntry(e).selection = e.selection),
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
                    let i = E.VW.richValue(e);
                    i !== h &&
                        (0 === l.stack.length && ((l.stack = [k(e)]), (l.index = 0)),
                        g.o.isSaving(e) &&
                            ((function (e, t, n) {
                                var l, i;
                                let r,
                                    { selection: s } = e,
                                    a = g.o.currentEntry(e),
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
                                    ? g.o.insertOrMergeEntry(e, r, u)
                                    : g.o.insertEntry(e, r, u);
                            })(e, t, c),
                            (c = t)),
                        (d = t),
                        (h = i));
                }),
                (e.deleteBackward = (t) => {
                    g.o.withSingleEntry(e, () => l(t));
                }),
                (e.deleteForward = (t) => {
                    g.o.withSingleEntry(e, () => i(t));
                }),
                (e.deleteFragment = (t) => {
                    g.o.withSingleEntry(e, () => r(t));
                }),
                (e.insertText = (t) => {
                    1 === t.length && d?.type === "remove_text"
                        ? g.o.withMergedEntry(e, () => a(t))
                        : null != e.selection && E.ZF.isExpanded(e.selection)
                          ? g.o.withSingleEntry(e, () => a(t))
                          : a(t);
                }),
                (e.insertData = (t) => {
                    d?.type === "remove_text" ? g.o.withMergedEntry(e, () => s(t)) : g.o.withSingleEntry(e, () => s(t));
                }),
                e
            );
        })(
            (m = (function (e, t, n) {
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
                (m = (function (e) {
                    let { apply: t, onChange: n } = e;
                    return (
                        (e.apply = (n) => {
                            (t(n), E.Ot.isValid(e, e.selection) && (e.lastGoodSelection = e.selection));
                        }),
                        (e.onChange = () => {
                            if (
                                (E.Ot.isValid(e, e.selection) ||
                                    (e.selection = (function (e) {
                                        let t;
                                        if (E.Ot.isValid(e, e.lastGoodSelection)) t = e.lastGoodSelection;
                                        else {
                                            let n = E.VW.end(e, []);
                                            t = { anchor: n, focus: n };
                                        }
                                        return t;
                                    })(e)),
                                null != e.selection)
                            ) {
                                let t,
                                    n,
                                    [l, i] = E.ZF.edges(e.selection),
                                    r = !1;
                                for (
                                    ;
                                    null != l && null != (t = E.VW.getParentVoid(e, l)) && !M.XR.includes(t[0].type);
                                )
                                    ((l = E.VW.before(e, l, { unit: "offset" })), (r = !0));
                                for (
                                    ;
                                    null != i && null != (n = E.VW.getParentVoid(e, i)) && !M.XR.includes(n[0].type);
                                )
                                    ((i = E.VW.after(e, i, { unit: "offset" })), (r = !0));
                                r &&
                                    null != l &&
                                    null != i &&
                                    (E.ZF.isForward(e.selection)
                                        ? x.b.select(e, { anchor: l, focus: i })
                                        : x.b.select(e, { anchor: i, focus: l }));
                            }
                            n();
                        }),
                        e
                    );
                })(
                    (m = (function (e) {
                        let { deleteBackward: t, deleteForward: n, insertBreak: l, insertText: i } = e;
                        return (
                            (e.rendersTrailingNewline = v),
                            (e.insertBreak = () => {
                                N(e) ? i("\n") : I(e) && l();
                            }),
                            (e.insertSoftBreak = () => {
                                e.insertBreak();
                            }),
                            (e.deleteBackward = (n) => {
                                let l = E.ZF.toPoint(e.selection);
                                "line" === n && null != l && N(e) ? T(e, l, !0) : t(n);
                            }),
                            (e.deleteForward = (t) => {
                                let l = E.ZF.toPoint(e.selection);
                                "line" === t && null != l && N(e) ? T(e, l, !1) : n(t);
                            }),
                            (e.insertText = (t) => {
                                if (0 > t.indexOf("\r") && 0 > t.indexOf("\n")) return void i(t);
                                let n = t.split(/\r\n|\r|\n/);
                                N(e)
                                    ? i(n.join("\n"))
                                    : I(e)
                                      ? g.o.withSingleEntry(e, () => {
                                            let t = !1;
                                            for (let l of n) (t && x.b.splitNodes(e, { always: !0 }), i(l), (t = !0));
                                        })
                                      : i(n.join(" "));
                            }),
                            e
                        );
                    })((m = (0, j.A)(m)))),
                )),
                c,
                d,
            )),
            (e) => {
                let { newValue: t, newSelection: n } = e;
                return h(m, "undo", { value: t, selection: n });
            },
        )));
}
