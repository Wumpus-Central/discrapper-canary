"use strict";
n.d(t, { a: () => w, A: () => L });
var i = n(64700),
    r = n(143236),
    s = n(154283),
    a = n(264322),
    o = n(861382),
    l = n(267102),
    u = n(853145),
    c = n(885386),
    d = n(408018),
    _ = n(870748),
    h = n(186306),
    f = n(35277),
    p = n(820066),
    E = n(347024);
let m = new Set(["line", "blockQuote"]),
    g = ["applicationCommand"],
    A = ["gameMentionInput", "timestampMentionInput"];
function I(e) {
    let t = p.VW.getCurrentBlock(e),
        n = p.VW.getCurrentInline(e);
    return null != t && !g.includes(t[0].type) && !A.includes(n?.[0]?.type);
}
var T = n(580745),
    S = n(232835);
function y(e) {
    return { type: "other", mergeable: !1, createdAt: Date.now(), value: p.VW.richValue(e), selection: e.selection };
}
var C = n(113001),
    N = n(2368);
function v(e, t, n) {
    let i = p.VW.getCurrentInline(e);
    if ("block" === t) return !0;
    let r = p.VW.getCurrentText(e);
    if (null == r) return !0;
    let [s, a] = r,
        [o, l] = p.VW.edges(e, a),
        u = p.ZF.toPoint(e.selection);
    if (null == u) return !0;
    if (null != i) {
        let [t, n] = i;
        if (p.VW.isEmpty(e, t) || p.VW.isVoid(e, t)) return f.b.removeInline(e, n), !0;
    }
    if ("line" === t)
        if (null == i) return !1;
        else {
            let [r, s] = p.VW.edges(e, i[1]);
            return f.b.delete(e, { at: u, unit: t, reverse: n, select: !0, bounds: { anchor: r, focus: s } }), !0;
        }
    let c = p.VW.getParentBlock(e, u);
    if (null == c) return !0;
    let d = c[1],
        _ = i;
    if (p.Kh.equals(u, n ? o : l))
        for (;;) {
            let t = (n ? p.VW.before : p.VW.after)(e, u);
            if (null == t) return !0;
            if (!p.PW.isDescendant(t.path, d)) break;
            if (((u = t), null != (_ = p.VW.getParentInline(e, t)))) {
                let [t, n] = _;
                if (p.VW.isEmpty(e, t) || p.VW.isVoid(e, t)) {
                    let t = p.VW.before(e, n);
                    return null != t && f.b.select(e, t), f.b.removeInline(e, n), !0;
                }
            }
            let i = p.VW.node(e, t.path);
            if (null == i || !p.l5.isText(i[0])) return !0;
            if ((([s, a] = i), 0 !== s.text.length)) {
                [o, l] = p.VW.edges(e, a);
                break;
            }
        }
    return f.b.delete(e, { at: u, unit: t, reverse: n, select: !0 }), !0;
}
var R = n(694403),
    O = n(323350),
    b = n(670482),
    D = n(551483);
function L(e) {
    let t = i.useContext(l.Ay),
        n = c.SI.useSetting(),
        [r] = i.useState(() => {
            let i = (0, s.ie)();
            return (
                (i.children = (0, d.x7)("")),
                (i.selection = { anchor: D.K, focus: D.K }),
                w({ ...e, editor: i, windowContext: t, previewMarkdown: n }),
                i
            );
        });
    return (
        i.useEffect(() => {
            function e() {
                return r.onChange();
            }
            return (
                o.A.addChangeListener(e),
                a.Ay.addChangeListener(e),
                u.A.addChangeListener(e),
                () => {
                    o.A.removeChangeListener(e), a.Ay.removeChangeListener(e), u.A.removeChangeListener(e);
                }
            );
        }, [r]),
        i.useEffect(() => {
            r.previewMarkdown !== n && ((r.previewMarkdown = n), r.onChange());
        }, [r, n]),
        r
    );
}
function w(e) {
    let {
            editor: t,
            chatInputType: n,
            channel: i,
            windowContext: a,
            previewMarkdown: o,
            forTests: l,
            onChangeStart: u,
            onChangeEnd: c,
            updateState: d,
        } = e,
        g = t,
        { onChange: A } = g;
    (g.chatInputType = n),
        (g.windowContext = a),
        (g.previewMarkdown = o),
        (g.composition = null),
        (g.events = new r.EventEmitter()),
        (g.isMac = "MacIntel" === navigator.platform);
    var L,
        w = g;
    let M = T.A.getEditingMessageId(i.id);
    if (null != M) {
        let e = S.A.getMessage(i.id, M);
        w.mentionGames = new Map(e?.mentionGames ?? []);
    } else w.mentionGames = new Map();
    (g.onChange = () => {
        g.events.emit("onChange"), A();
    }),
        ((L = g =
            (function (e, t) {
                let {
                    addMark: n,
                    removeMark: i,
                    deleteBackward: r,
                    deleteForward: s,
                    setFragmentData: a,
                    insertData: o,
                    insertFragmentData: l,
                    insertTextData: u,
                } = e;
                return (
                    ((e = (0, b.o$)(e)).addMark = n),
                    (e.removeMark = i),
                    (e.setFragmentData = a),
                    (e.insertData = o),
                    (e.insertFragmentData = l),
                    (e.insertTextData = u),
                    (e.deleteBackward = (n) => {
                        if ("line" === n && !t) {
                            let t = p.ZF.toPoint(e.selection);
                            if (null != t) {
                                let i = p.VW.before(e, t, { unit: n });
                                if (null != i) {
                                    let n = p.e0.getLineStart(e, t, !1);
                                    null != n && p.Kh.isAfter(n, i)
                                        ? f.b.delete(e, { at: { anchor: n, focus: t } })
                                        : f.b.delete(e, { at: { anchor: i, focus: t } });
                                    return;
                                }
                            }
                        }
                        r(n);
                    }),
                    (e.deleteForward = (n) => {
                        if ("line" === n && !t) {
                            let t = p.ZF.toPoint(e.selection);
                            if (null != t) {
                                let i = p.VW.after(e, t, { unit: n });
                                if (null != i) {
                                    let n = p.e0.getLineEnd(e, t, !1);
                                    null != n && p.Kh.isBefore(n, i)
                                        ? f.b.delete(e, { at: { anchor: n, focus: t } })
                                        : f.b.delete(e, { at: { anchor: i, focus: t } });
                                    return;
                                }
                            }
                        }
                        s(n);
                    }),
                    e
                );
            })(g, !0 === l)).setFragmentData = (e) => {
            if (null != L.selection && !p.Kh.equals(L.selection.anchor, L.selection.focus)) {
                let t = (0, O.WO)(p.VW.richValue(L), { mode: "plain", range: L.selection, preventEmojiSurrogates: !0 });
                e.setData("text/plain", t);
            }
        }),
        (L.insertData = (e) => {
            L.insertTextData(e);
        }),
        (L.insertFragmentData = (e) => !1),
        (L.insertTextData = (e) => {
            let t = e.getData("text/plain");
            if (0 === t.length) return !1;
            if (null != L.selection && p.ZF.isExpanded(L.selection)) {
                let e = s.KE.string(L, L.selection),
                    n = (0, R.W1)(t),
                    i = (0, R.W1)(e);
                if (null != n && null == i) {
                    let [e, t] = p.ZF.edges(L.selection);
                    return (
                        p.VW.withoutNormalizing(L, () => {
                            f.b.select(L, e),
                                L.insertText("["),
                                f.b.select(L, t),
                                0 === p.PW.compare(e.path, t.path) && f.b.move(L, { distance: 1 }),
                                L.insertText(`](${n.target})`);
                        }),
                        !0
                    );
                }
                if (null != n && null != i) return f.b.delete(L, { at: L.selection }), L.insertText(n.target), !0;
                f.b.delete(L, { at: L.selection });
            }
            return L.insertText(t), !0;
        }),
        (g = (function (e) {
            let { apply: t, deleteBackward: n, deleteForward: i, deleteFragment: r, insertText: s } = e;
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
                            i = p.VW.getParentInline(e, n.newProperties);
                        if (null != t && (null == i || !p.PW.equals(t[1], i[1]))) return;
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
                    v(e, t, !1) || i(t);
                }),
                (e.deleteFragment = (t) => {
                    if (null != e.selection && p.ZF.isExpanded(e.selection)) {
                        let n = e.selection.anchor,
                            i = e.selection.focus,
                            s = p.VW.getParentInline(e, n),
                            a = p.VW.getParentInline(e, i);
                        if (null != s && null != a && p.PW.equals(s[1], a[1])) return void r(t);
                        let o = p.ZF.isForward(e.selection);
                        if (null != s) {
                            let [, t] = s,
                                [i, r] = p.VW.edges(e, t);
                            o && p.Kh.equals(n, i)
                                ? (n = p.VW.before(e, i) ?? p.VW.start(e, []))
                                : !o && p.Kh.equals(n, r) && (n = p.VW.after(e, r) ?? p.VW.end(e, []));
                        }
                        if (null != a) {
                            let [, t] = a,
                                [n, r] = p.VW.edges(e, t);
                            !o && p.Kh.equals(i, n)
                                ? (i = p.VW.before(e, n) ?? p.VW.start(e, []))
                                : o && p.Kh.equals(i, r) && (i = p.VW.after(e, r) ?? p.VW.end(e, []));
                        }
                        return void f.b.delete(e, {
                            at: { anchor: n, focus: i },
                            reverse: "backward" === t,
                            select: !0,
                        });
                    }
                    r(t);
                }),
                e
            );
        })((g = L))),
        n.commands?.enabled && (g = (0, _.A)(g, i)),
        (g = (0, N.Ay)(g, i.guild_id, i.id)),
        n.markdown?.disableBlockQuotes ||
            (g = (function (e) {
                let { deleteBackward: t, deleteFragment: n, insertBreak: i, onChange: r } = e;
                (e.deleteBackward = (n) => {
                    let i = p.VW.getCurrentBlock(e);
                    if (i?.[0].type === "blockQuote") {
                        let t = p.ZF.toPoint(e.selection);
                        if (null != t && p.PW.isFirstChild(i[1], t.path) && 0 === t.offset)
                            return void f.b.setNodes(e, { type: "line" }, { at: i[1] });
                    }
                    t(n);
                }),
                    (e.deleteFragment = (t) => {
                        if (null != e.selection) {
                            let [i, r] = p.ZF.edges(e.selection),
                                s = [i.path[0]],
                                a = p.VW.node(e, s),
                                o = [r.path[0]],
                                l = p.PW.equals(s, o) ? null : p.VW.node(e, o);
                            h.o.withSingleEntry(e, () => {
                                a?.[0].type === "blockQuote" &&
                                    p.Kh.isAtStart(i, a) &&
                                    f.b.setNodes(e, { type: "line" }, { at: s }),
                                    l?.[0].type === "blockQuote" &&
                                        p.Kh.isAtEnd(r, l) &&
                                        f.b.setNodes(e, { type: "line" }, { at: o }),
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
                                let i = p.VW.previous(e, { at: t[1] });
                                return (
                                    null != i &&
                                    !!p.AS.isType(i[0], "blockQuote") &&
                                    !!p.VW.isEmpty(e, i[0]) &&
                                    !!p.Kh.isAtStart(n, t) &&
                                    (f.b.setNodes(e, { type: "line" }, { at: t[1] }),
                                    f.b.removeNodes(e, { at: i[1] }),
                                    !0)
                                );
                            })(e, t, n) && f.b.splitNodes(e, { at: n, always: !0 });
                            return;
                        }
                        i();
                    });
                let s = null,
                    a = !0;
                return (
                    (e.onChange = () => {
                        let t = p.VW.richValue(e);
                        (t !== s || e.previewMarkdown !== a) &&
                            (h.o.withMergedEntry(e, () => {
                                p.VW.withoutNormalizing(e, () =>
                                    (function (e) {
                                        let t = !1;
                                        for (let n of p.VW.blocks(e)) {
                                            let [i, r] = n;
                                            if (!m.has(i.type)) continue;
                                            let s = { path: p.PW.child(r, 0), offset: 0 };
                                            if ((0, E.W)(e, s)) {
                                                "blockQuote" === i.type &&
                                                    (f.b.setNodes(e, { type: "line" }, { at: r }),
                                                    f.b.insertText(e, "> ", { at: s }));
                                                continue;
                                            }
                                            if ("blockQuote" === i.type || p.VW.areStylesDisabled(e)) continue;
                                            let a = i.children[0];
                                            if (!p.l5.isText(a)) continue;
                                            let o = a.text.match(/^\s*>>> /),
                                                l = a.text.match(/^\s*> /);
                                            if (
                                                (null != l || null != o || t) &&
                                                (f.b.setNodes(e, { type: "blockQuote" }, { at: r }), !t)
                                            ) {
                                                let n = l?.[0].length ?? o?.[0].length ?? 0,
                                                    i = p.PW.child(r, 0);
                                                f.b.delete(e, {
                                                    at: {
                                                        anchor: { path: i, offset: 0 },
                                                        focus: { path: i, offset: n },
                                                    },
                                                }),
                                                    (t = null != o);
                                            }
                                        }
                                    })(e),
                                );
                            }),
                            (s = t),
                            (a = e.previewMarkdown)),
                            r();
                    }),
                    e
                );
            })(g)),
        n.markdown?.disableCodeBlocks || (g = (0, E.Ay)(g)),
        l &&
            (g = (function (e) {
                let { isInline: t, isVoid: n } = e;
                return (
                    (e.isInline = (e) => "testInline" === e.type || "testInlineVoid" === e.type || t(e)),
                    (e.isVoid = (e) => "testInlineVoid" === e.type || n(e)),
                    e
                );
            })(g)),
        (g = (function (e, t) {
            let {
                apply: n,
                deleteBackward: i,
                deleteForward: r,
                deleteFragment: s,
                insertData: a,
                insertText: o,
                onChange: l,
            } = e;
            function u(n) {
                let i = h.o.currentEntry(e);
                if ((null != i && (i.mergeable = !1), n >= e.history.stack.length)) return;
                e.history.index = n;
                let r = h.o.currentEntry(e);
                t({ newValue: r.value, newSelection: r.selection });
            }
            (e.history = { index: 0, stack: [] }),
                (e.onChange = () => {
                    let { history: t } = e;
                    0 === t.stack.length && ((t.stack = [y(e)]), (t.index = 0)),
                        null != e.selection && (h.o.currentEntry(e).selection = e.selection),
                        (d = null),
                        l();
                }),
                (e.undo = () => {
                    e.history.index > 0 && u(e.history.index - 1);
                }),
                (e.redo = () => {
                    e.history.index < e.history.stack.length - 1 && u(e.history.index + 1);
                });
            let c = null,
                d = null,
                _ = null;
            return (
                (e.apply = (t) => {
                    let { history: i } = e;
                    n(t);
                    let r = p.VW.richValue(e);
                    r !== _ &&
                        (0 === i.stack.length && ((i.stack = [y(e)]), (i.index = 0)),
                        h.o.isSaving(e) &&
                            ((function (e, t, n) {
                                var i, r;
                                let s,
                                    { selection: a } = e,
                                    o = h.o.currentEntry(e),
                                    l = !0,
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
                                            : ((s = "other"), (l = !1), (u = !1)),
                                    "set_selection" === t.type && null != o)
                                ) {
                                    o.selection = a;
                                    return;
                                }
                                l && ((i = o), (r = s), !(i?.type !== r || Date.now() - i.createdAt >= 4e3))
                                    ? h.o.insertOrMergeEntry(e, s, u)
                                    : h.o.insertEntry(e, s, u);
                            })(e, t, c),
                            (c = t)),
                        (d = t),
                        (_ = r));
                }),
                (e.deleteBackward = (t) => {
                    h.o.withSingleEntry(e, () => i(t));
                }),
                (e.deleteForward = (t) => {
                    h.o.withSingleEntry(e, () => r(t));
                }),
                (e.deleteFragment = (t) => {
                    h.o.withSingleEntry(e, () => s(t));
                }),
                (e.insertText = (t) => {
                    1 === t.length && d?.type === "remove_text"
                        ? h.o.withMergedEntry(e, () => o(t))
                        : null != e.selection && p.ZF.isExpanded(e.selection)
                          ? h.o.withSingleEntry(e, () => o(t))
                          : o(t);
                }),
                (e.insertData = (t) => {
                    d?.type === "remove_text" ? h.o.withMergedEntry(e, () => a(t)) : h.o.withSingleEntry(e, () => a(t));
                }),
                e
            );
        })(
            (g = (function (e, t, n) {
                let { onChange: i } = e,
                    r = !1,
                    s = !1;
                return (
                    (e.onChange = () => {
                        if (r) {
                            s = !0;
                            return;
                        }
                        r = !0;
                        try {
                            let e = 0;
                            do {
                                if (((s = !1), e++ >= 5)) break;
                                t?.();
                                try {
                                    i();
                                } finally {
                                    n?.();
                                }
                            } while (s);
                        } finally {
                            r = !1;
                        }
                    }),
                    e
                );
            })(
                (g = (function (e) {
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
                                    [i, r] = p.ZF.edges(e.selection),
                                    s = !1;
                                for (
                                    ;
                                    null != i && null != (t = p.VW.getParentVoid(e, i)) && !D.XR.includes(t[0].type);
                                )
                                    (i = p.VW.before(e, i, { unit: "offset" })), (s = !0);
                                for (
                                    ;
                                    null != r && null != (n = p.VW.getParentVoid(e, r)) && !D.XR.includes(n[0].type);
                                )
                                    (r = p.VW.after(e, r, { unit: "offset" })), (s = !0);
                                s &&
                                    null != i &&
                                    null != r &&
                                    (p.ZF.isForward(e.selection)
                                        ? f.b.select(e, { anchor: i, focus: r })
                                        : f.b.select(e, { anchor: r, focus: i }));
                            }
                            n();
                        }),
                        e
                    );
                })(
                    (g = (function (e) {
                        let { insertBreak: t, insertText: n } = e;
                        return (
                            (e.insertBreak = () => {
                                I(e) && t();
                            }),
                            (e.insertSoftBreak = () => {
                                e.insertBreak();
                            }),
                            (e.insertText = (t) => {
                                if (0 > t.indexOf("\r") && 0 > t.indexOf("\n")) return void n(t);
                                let i = t.split(/\r\n|\r|\n/);
                                I(e)
                                    ? h.o.withSingleEntry(e, () => {
                                          let t = !1;
                                          for (let r of i) t && f.b.splitNodes(e, { always: !0 }), n(r), (t = !0);
                                      })
                                    : n(i.join(" "));
                            }),
                            e
                        );
                    })((g = (0, C.A)(g)))),
                )),
                u,
                c,
            )),
            (e) => {
                let { newValue: t, newSelection: n } = e;
                return d(g, "undo", { value: t, selection: n });
            },
        ));
}
