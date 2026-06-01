"use strict";
n.d(t, { a: () => b, A: () => O });
var i = n(64700),
    r = n(143236),
    s = n(154283),
    a = n(264322),
    o = n(861382),
    l = n(267102),
    u = n(885386),
    c = n(408018),
    d = n(870748),
    _ = n(186306),
    h = n(35277),
    f = n(820066),
    p = n(347024);
let E = new Set(["line", "blockQuote"]),
    m = ["applicationCommand"],
    g = ["timestampMentionInput"];
function A(e) {
    let t = f.VW.getCurrentBlock(e),
        n = f.VW.getCurrentInline(e);
    return null != t && !m.includes(t[0].type) && !g.includes(n?.[0]?.type);
}
function I(e) {
    return { type: "other", mergeable: !1, createdAt: Date.now(), value: f.VW.richValue(e), selection: e.selection };
}
var T = n(113001),
    S = n(2368);
function y(e, t, n) {
    let i = f.VW.getCurrentInline(e);
    if ("block" === t) return !0;
    let r = f.VW.getCurrentText(e);
    if (null == r) return !0;
    let [s, a] = r,
        [o, l] = f.VW.edges(e, a),
        u = f.ZF.toPoint(e.selection);
    if (null == u) return !0;
    if (null != i) {
        let [t, n] = i;
        if (f.VW.isEmpty(e, t) || f.VW.isVoid(e, t)) return h.b.removeInline(e, n), !0;
    }
    if ("line" === t)
        if (null == i) return !1;
        else {
            let [r, s] = f.VW.edges(e, i[1]);
            return h.b.delete(e, { at: u, unit: t, reverse: n, select: !0, bounds: { anchor: r, focus: s } }), !0;
        }
    let c = f.VW.getParentBlock(e, u);
    if (null == c) return !0;
    let d = c[1],
        _ = i;
    if (f.Kh.equals(u, n ? o : l))
        for (;;) {
            let t = (n ? f.VW.before : f.VW.after)(e, u);
            if (null == t) return !0;
            if (!f.PW.isDescendant(t.path, d)) break;
            if (((u = t), null != (_ = f.VW.getParentInline(e, t)))) {
                let [t, n] = _;
                if (f.VW.isEmpty(e, t) || f.VW.isVoid(e, t)) {
                    let t = f.VW.before(e, n);
                    return null != t && h.b.select(e, t), h.b.removeInline(e, n), !0;
                }
            }
            let i = f.VW.node(e, t.path);
            if (null == i || !f.l5.isText(i[0])) return !0;
            if ((([s, a] = i), 0 !== s.text.length)) {
                [o, l] = f.VW.edges(e, a);
                break;
            }
        }
    return h.b.delete(e, { at: u, unit: t, reverse: n, select: !0 }), !0;
}
var N = n(527214),
    v = n(323350),
    C = n(670482),
    R = n(551483);
function O(e) {
    let t = i.useContext(l.Ay),
        n = u.SI.useSetting(),
        [r] = i.useState(() => {
            let i = (0, s.ie)();
            return (
                (i.children = (0, c.x7)("")),
                (i.selection = { anchor: R.K, focus: R.K }),
                b({ ...e, editor: i, windowContext: t, previewMarkdown: n }),
                i
            );
        });
    return (
        i.useEffect(() => {
            let e = () => r.onChange();
            return (
                o.A.addChangeListener(e),
                a.Ay.addChangeListener(e),
                () => {
                    o.A.removeChangeListener(e), a.Ay.removeChangeListener(e);
                }
            );
        }, [r]),
        i.useEffect(() => {
            r.previewMarkdown !== n && ((r.previewMarkdown = n), r.onChange());
        }, [r, n]),
        r
    );
}
function b(e) {
    var t;
    let {
            editor: n,
            chatInputType: i,
            channel: a,
            canUseCommands: o,
            canOnlyUseTextCommands: l,
            windowContext: u,
            previewMarkdown: c,
            forTests: m,
            onChangeStart: g,
            onChangeEnd: O,
            updateState: b,
        } = e,
        D = n,
        { onChange: L } = D;
    (D.chatInputType = i),
        (D.windowContext = u),
        (D.previewMarkdown = c),
        (D.composition = null),
        (D.events = new r.EventEmitter()),
        (D.isMac = "MacIntel" === navigator.platform),
        (D.onChange = () => {
            D.events.emit("onChange"), L();
        }),
        ((t = D =
            ((e, t) => {
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
                    ((e = (0, C.o$)(e)).addMark = n),
                    (e.removeMark = i),
                    (e.setFragmentData = a),
                    (e.insertData = o),
                    (e.insertFragmentData = l),
                    (e.insertTextData = u),
                    (e.deleteBackward = (n) => {
                        if ("line" === n && !t) {
                            let t = f.ZF.toPoint(e.selection);
                            if (null != t) {
                                let i = f.VW.before(e, t, { unit: n });
                                if (null != i) {
                                    let n = f.e0.getLineStart(e, t, !1);
                                    null != n && f.Kh.isAfter(n, i)
                                        ? h.b.delete(e, { at: { anchor: n, focus: t } })
                                        : h.b.delete(e, { at: { anchor: i, focus: t } });
                                    return;
                                }
                            }
                        }
                        r(n);
                    }),
                    (e.deleteForward = (n) => {
                        if ("line" === n && !t) {
                            let t = f.ZF.toPoint(e.selection);
                            if (null != t) {
                                let i = f.VW.after(e, t, { unit: n });
                                if (null != i) {
                                    let n = f.e0.getLineEnd(e, t, !1);
                                    null != n && f.Kh.isBefore(n, i)
                                        ? h.b.delete(e, { at: { anchor: n, focus: t } })
                                        : h.b.delete(e, { at: { anchor: i, focus: t } });
                                    return;
                                }
                            }
                        }
                        s(n);
                    }),
                    e
                );
            })(D, !0 === m)).setFragmentData = (e) => {
            if (null != t.selection && !f.Kh.equals(t.selection.anchor, t.selection.focus)) {
                let n = (0, v.WO)(f.VW.richValue(t), { mode: "plain", range: t.selection, preventEmojiSurrogates: !0 });
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
                    i = (0, N.W1)(n),
                    r = (0, N.W1)(e);
                if (null != i && null == r) {
                    let [e, n] = f.ZF.edges(t.selection);
                    return (
                        f.VW.withoutNormalizing(t, () => {
                            h.b.select(t, e),
                                t.insertText("["),
                                h.b.select(t, n),
                                0 === f.PW.compare(e.path, n.path) && h.b.move(t, { distance: 1 }),
                                t.insertText(`](${i.target})`);
                        }),
                        !0
                    );
                }
                if (null != i && null != r) return h.b.delete(t, { at: t.selection }), t.insertText(i.target), !0;
                h.b.delete(t, { at: t.selection });
            }
            return t.insertText(n), !0;
        }),
        (D = (function (e) {
            let { apply: t, deleteBackward: n, deleteForward: i, deleteFragment: r, insertText: s } = e;
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
                            i = f.VW.getParentInline(e, n.newProperties);
                        if (null != t && (null == i || !f.PW.equals(t[1], i[1]))) return;
                    }
                    t(n);
                }),
                (e.insertText = (t) => {
                    null != e.selection && null != f.VW.getCurrentInline(e) ? h.b.insertText(e, t) : s(t);
                }),
                (e.deleteBackward = (t) => {
                    y(e, t, !0) || n(t);
                }),
                (e.deleteForward = (t) => {
                    y(e, t, !1) || i(t);
                }),
                (e.deleteFragment = (t) => {
                    if (null != e.selection && f.ZF.isExpanded(e.selection)) {
                        let n = e.selection.anchor,
                            i = e.selection.focus,
                            s = f.VW.getParentInline(e, n),
                            a = f.VW.getParentInline(e, i);
                        if (null != s && null != a && f.PW.equals(s[1], a[1])) return void r(t);
                        let o = f.ZF.isForward(e.selection);
                        if (null != s) {
                            let [, t] = s,
                                [i, r] = f.VW.edges(e, t);
                            o && f.Kh.equals(n, i)
                                ? (n = f.VW.before(e, i) ?? f.VW.start(e, []))
                                : !o && f.Kh.equals(n, r) && (n = f.VW.after(e, r) ?? f.VW.end(e, []));
                        }
                        if (null != a) {
                            let [, t] = a,
                                [n, r] = f.VW.edges(e, t);
                            !o && f.Kh.equals(i, n)
                                ? (i = f.VW.before(e, n) ?? f.VW.start(e, []))
                                : o && f.Kh.equals(i, r) && (i = f.VW.after(e, r) ?? f.VW.end(e, []));
                        }
                        return void h.b.delete(e, {
                            at: { anchor: n, focus: i },
                            reverse: "backward" === t,
                            select: !0,
                        });
                    }
                    r(t);
                }),
                e
            );
        })((D = t))),
        i.commands?.enabled && (D = (0, d.A)(D, a, !0 === o, !0 === l)),
        (D = (0, S.Ay)(D, a.guild_id, a.id)),
        i.markdown?.disableBlockQuotes ||
            (D = (function (e) {
                let { deleteBackward: t, deleteFragment: n, insertBreak: i, onChange: r } = e;
                (e.deleteBackward = (n) => {
                    let i = f.VW.getCurrentBlock(e);
                    if (i?.[0].type === "blockQuote") {
                        let t = f.ZF.toPoint(e.selection);
                        if (null != t && f.PW.isFirstChild(i[1], t.path) && 0 === t.offset)
                            return void h.b.setNodes(e, { type: "line" }, { at: i[1] });
                    }
                    t(n);
                }),
                    (e.deleteFragment = (t) => {
                        if (null != e.selection) {
                            let [i, r] = f.ZF.edges(e.selection),
                                s = [i.path[0]],
                                a = f.VW.node(e, s),
                                o = [r.path[0]],
                                l = f.PW.equals(s, o) ? null : f.VW.node(e, o);
                            _.o.withSingleEntry(e, () => {
                                a?.[0].type === "blockQuote" &&
                                    f.Kh.isAtStart(i, a) &&
                                    h.b.setNodes(e, { type: "line" }, { at: s }),
                                    l?.[0].type === "blockQuote" &&
                                        f.Kh.isAtEnd(r, l) &&
                                        h.b.setNodes(e, { type: "line" }, { at: o }),
                                    n(t);
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
                                let i = f.VW.previous(e, { at: t[1] });
                                return (
                                    null != i &&
                                    !!f.AS.isType(i[0], "blockQuote") &&
                                    !!f.VW.isEmpty(e, i[0]) &&
                                    !!f.Kh.isAtStart(n, t) &&
                                    (h.b.setNodes(e, { type: "line" }, { at: t[1] }),
                                    h.b.removeNodes(e, { at: i[1] }),
                                    !0)
                                );
                            })(e, t, n) && h.b.splitNodes(e, { at: n, always: !0 });
                            return;
                        }
                        i();
                    });
                let s = null,
                    a = !0;
                return (
                    (e.onChange = () => {
                        let t = f.VW.richValue(e);
                        (t !== s || e.previewMarkdown !== a) &&
                            (_.o.withMergedEntry(e, () => {
                                f.VW.withoutNormalizing(e, () =>
                                    (function (e) {
                                        let t = !1;
                                        for (let n of f.VW.blocks(e)) {
                                            let [i, r] = n;
                                            if (!E.has(i.type)) continue;
                                            let s = { path: f.PW.child(r, 0), offset: 0 };
                                            if ((0, p.W)(e, s)) {
                                                "blockQuote" === i.type &&
                                                    (h.b.setNodes(e, { type: "line" }, { at: r }),
                                                    h.b.insertText(e, "> ", { at: s }));
                                                continue;
                                            }
                                            if ("blockQuote" === i.type || f.VW.areStylesDisabled(e)) continue;
                                            let a = i.children[0];
                                            if (!f.l5.isText(a)) continue;
                                            let o = a.text.match(/^\s*>>> /),
                                                l = a.text.match(/^\s*> /);
                                            if (
                                                (null != l || null != o || t) &&
                                                (h.b.setNodes(e, { type: "blockQuote" }, { at: r }), !t)
                                            ) {
                                                let n = l?.[0].length ?? o?.[0].length ?? 0,
                                                    i = f.PW.child(r, 0);
                                                h.b.delete(e, {
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
            })(D)),
        i.markdown?.disableCodeBlocks || (D = (0, p.Ay)(D)),
        m &&
            (D = (function (e) {
                let { isInline: t, isVoid: n } = e;
                return (
                    (e.isInline = (e) => "testInline" === e.type || "testInlineVoid" === e.type || t(e)),
                    (e.isVoid = (e) => "testInlineVoid" === e.type || n(e)),
                    e
                );
            })(D)),
        (D = (function (e, t) {
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
                let i = _.o.currentEntry(e);
                if ((null != i && (i.mergeable = !1), n >= e.history.stack.length)) return;
                e.history.index = n;
                let r = _.o.currentEntry(e);
                t({ newValue: r.value, newSelection: r.selection });
            }
            (e.history = { index: 0, stack: [] }),
                (e.onChange = () => {
                    let { history: t } = e;
                    0 === t.stack.length && ((t.stack = [I(e)]), (t.index = 0)),
                        null != e.selection && (_.o.currentEntry(e).selection = e.selection),
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
                h = null;
            return (
                (e.apply = (t) => {
                    let { history: i } = e;
                    n(t);
                    let r = f.VW.richValue(e);
                    r !== h &&
                        (0 === i.stack.length && ((i.stack = [I(e)]), (i.index = 0)),
                        _.o.isSaving(e) &&
                            ((function (e, t, n) {
                                var i, r;
                                let s,
                                    { selection: a } = e,
                                    o = _.o.currentEntry(e),
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
                                    ? _.o.insertOrMergeEntry(e, s, u)
                                    : _.o.insertEntry(e, s, u);
                            })(e, t, c),
                            (c = t)),
                        (d = t),
                        (h = r));
                }),
                (e.deleteBackward = (t) => {
                    _.o.withSingleEntry(e, () => i(t));
                }),
                (e.deleteForward = (t) => {
                    _.o.withSingleEntry(e, () => r(t));
                }),
                (e.deleteFragment = (t) => {
                    _.o.withSingleEntry(e, () => s(t));
                }),
                (e.insertText = (t) => {
                    1 === t.length && d?.type === "remove_text"
                        ? _.o.withMergedEntry(e, () => o(t))
                        : null != e.selection && f.ZF.isExpanded(e.selection)
                          ? _.o.withSingleEntry(e, () => o(t))
                          : o(t);
                }),
                (e.insertData = (t) => {
                    d?.type === "remove_text" ? _.o.withMergedEntry(e, () => a(t)) : _.o.withSingleEntry(e, () => a(t));
                }),
                e
            );
        })(
            (D = (function (e, t, n) {
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
                (D = (function (e) {
                    let { apply: t, onChange: n } = e;
                    return (
                        (e.apply = (n) => {
                            t(n), f.Ot.isValid(e, e.selection) && (e.lastGoodSelection = e.selection);
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
                                    [i, r] = f.ZF.edges(e.selection),
                                    s = !1;
                                for (
                                    ;
                                    null != i && null != (t = f.VW.getParentVoid(e, i)) && !R.XR.includes(t[0].type);
                                )
                                    (i = f.VW.before(e, i, { unit: "offset" })), (s = !0);
                                for (
                                    ;
                                    null != r && null != (n = f.VW.getParentVoid(e, r)) && !R.XR.includes(n[0].type);
                                )
                                    (r = f.VW.after(e, r, { unit: "offset" })), (s = !0);
                                s &&
                                    null != i &&
                                    null != r &&
                                    (f.ZF.isForward(e.selection)
                                        ? h.b.select(e, { anchor: i, focus: r })
                                        : h.b.select(e, { anchor: r, focus: i }));
                            }
                            n();
                        }),
                        e
                    );
                })(
                    (D = (function (e) {
                        let { insertBreak: t, insertText: n } = e;
                        return (
                            (e.insertBreak = () => {
                                A(e) && t();
                            }),
                            (e.insertSoftBreak = () => {
                                e.insertBreak();
                            }),
                            (e.insertText = (t) => {
                                if (0 > t.indexOf("\r") && 0 > t.indexOf("\n")) return void n(t);
                                let i = t.split(/\r\n|\r|\n/);
                                A(e)
                                    ? _.o.withSingleEntry(e, () => {
                                          let t = !1;
                                          for (let r of i) t && h.b.splitNodes(e, { always: !0 }), n(r), (t = !0);
                                      })
                                    : n(i.join(" "));
                            }),
                            e
                        );
                    })((D = (0, T.A)(D)))),
                )),
                g,
                O,
            )),
            (e) => {
                let { newValue: t, newSelection: n } = e;
                return b(D, "undo", { value: t, selection: n });
            },
        ));
}
