"use strict";
n.d(t, { a: () => v, A: () => y });
var i = n(582128),
    r = n(143236),
    a = n(719442),
    s = n(264322),
    l = n(861382),
    o = n(267102),
    d = n(853145),
    c = n(885386),
    u = n(408018),
    _ = n(870748),
    E = n(186306),
    A = n(35277),
    h = n(820066),
    I = n(407315);
let f = new Set(["line", "blockQuote"]),
    p = ["applicationCommand"],
    T = ["gameMentionInput", "timestampMentionInput"];
function m(e) {
    let t = h.VW.getCurrentBlock(e),
        n = h.VW.getCurrentInline(e);
    return null != t && !p.includes(t[0].type) && !T.includes(n?.[0]?.type);
}
function g(e) {
    return { type: "other", mergeable: !1, createdAt: Date.now(), value: h.VW.richValue(e), selection: e.selection };
}
var S = n(113001),
    N = n(2368);
function C(e, t, n) {
    let i = h.VW.getCurrentInline(e);
    if ("block" === t) return !0;
    let r = h.VW.getCurrentText(e);
    if (null == r) return !0;
    let [a, s] = r,
        [l, o] = h.VW.edges(e, s),
        d = h.ZF.toPoint(e.selection);
    if (null == d) return !0;
    if (null != i) {
        let [t, n] = i;
        if (h.VW.isEmpty(e, t) || h.VW.isVoid(e, t)) return A.b.removeInline(e, n), !0;
    }
    if ("line" === t)
        if (null == i) return !1;
        else {
            let [r, a] = h.VW.edges(e, i[1]);
            return A.b.delete(e, { at: d, unit: t, reverse: n, select: !0, bounds: { anchor: r, focus: a } }), !0;
        }
    let c = h.VW.getParentBlock(e, d);
    if (null == c) return !0;
    let u = c[1],
        _ = i;
    if (h.Kh.equals(d, n ? l : o))
        for (;;) {
            let t = (n ? h.VW.before : h.VW.after)(e, d);
            if (null == t) return !0;
            if (!h.PW.isDescendant(t.path, u)) break;
            if (((d = t), null != (_ = h.VW.getParentInline(e, t)))) {
                let [t, n] = _;
                if (h.VW.isEmpty(e, t) || h.VW.isVoid(e, t)) {
                    let t = h.VW.before(e, n);
                    return null != t && A.b.select(e, t), A.b.removeInline(e, n), !0;
                }
            }
            let i = h.VW.node(e, t.path);
            if (null == i || !h.l5.isText(i[0])) return !0;
            if ((([a, s] = i), 0 !== a.text.length)) {
                [l, o] = h.VW.edges(e, s);
                break;
            }
        }
    return A.b.delete(e, { at: d, unit: t, reverse: n, select: !0 }), !0;
}
var O = n(694403),
    R = n(323350),
    L = n(530795),
    D = n(551483);
function y(e) {
    let t = i.useContext(o.Ay),
        n = c.SI.useSetting(),
        [r] = i.useState(() => {
            let i = (0, a.ie)();
            return (
                (i.children = (0, u.x7)("")),
                (i.selection = { anchor: D.K, focus: D.K }),
                v({ ...e, editor: i, windowContext: t, previewMarkdown: n }),
                i
            );
        });
    return (
        i.useEffect(() => {
            function e() {
                return r.onChange();
            }
            return (
                l.A.addChangeListener(e),
                s.Ay.addChangeListener(e),
                d.A.addChangeListener(e),
                () => {
                    l.A.removeChangeListener(e), s.Ay.removeChangeListener(e), d.A.removeChangeListener(e);
                }
            );
        }, [r]),
        i.useEffect(() => {
            r.previewMarkdown !== n && ((r.previewMarkdown = n), r.onChange());
        }, [r, n]),
        r
    );
}
function v(e) {
    var t;
    let {
            editor: n,
            chatInputType: i,
            channel: s,
            windowContext: l,
            previewMarkdown: o,
            forTests: d,
            onChangeStart: c,
            onChangeEnd: u,
            updateState: p,
        } = e,
        T = n,
        { onChange: y } = T;
    (T.chatInputType = i),
        (T.windowContext = l),
        (T.previewMarkdown = o),
        (T.composition = null),
        (T.events = new r.EventEmitter()),
        (T.isMac = "MacIntel" === navigator.platform),
        (T.onChange = () => {
            T.events.emit("onChange"), y();
        }),
        ((t = T =
            (function (e, t) {
                let {
                    addMark: n,
                    removeMark: i,
                    deleteBackward: r,
                    deleteForward: a,
                    setFragmentData: s,
                    insertData: l,
                    insertFragmentData: o,
                    insertTextData: d,
                } = e;
                return (
                    ((e = (0, L.o$)(e)).addMark = n),
                    (e.removeMark = i),
                    (e.setFragmentData = s),
                    (e.insertData = l),
                    (e.insertFragmentData = o),
                    (e.insertTextData = d),
                    (e.deleteBackward = (n) => {
                        if ("line" === n && !t) {
                            let t = h.ZF.toPoint(e.selection);
                            if (null != t) {
                                let i = h.VW.before(e, t, { unit: n });
                                if (null != i) {
                                    let n = h.e0.getLineStart(e, t, !1);
                                    null != n && h.Kh.isAfter(n, i)
                                        ? A.b.delete(e, { at: { anchor: n, focus: t } })
                                        : A.b.delete(e, { at: { anchor: i, focus: t } });
                                    return;
                                }
                            }
                        }
                        r(n);
                    }),
                    (e.deleteForward = (n) => {
                        if ("line" === n && !t) {
                            let t = h.ZF.toPoint(e.selection);
                            if (null != t) {
                                let i = h.VW.after(e, t, { unit: n });
                                if (null != i) {
                                    let n = h.e0.getLineEnd(e, t, !1);
                                    null != n && h.Kh.isBefore(n, i)
                                        ? A.b.delete(e, { at: { anchor: n, focus: t } })
                                        : A.b.delete(e, { at: { anchor: i, focus: t } });
                                    return;
                                }
                            }
                        }
                        a(n);
                    }),
                    e
                );
            })(T, !0 === d)).setFragmentData = (e) => {
            if (null != t.selection && !h.Kh.equals(t.selection.anchor, t.selection.focus)) {
                let n = (0, R.WO)(h.VW.richValue(t), { mode: "plain", range: t.selection, preventEmojiSurrogates: !0 });
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
            if (null != t.selection && h.ZF.isExpanded(t.selection)) {
                let e = a.KE.string(t, t.selection),
                    i = (0, O.W1)(n),
                    r = (0, O.W1)(e);
                if (null != i && null == r) {
                    let [e, n] = h.ZF.edges(t.selection);
                    return (
                        h.VW.withoutNormalizing(t, () => {
                            A.b.select(t, e),
                                t.insertText("["),
                                A.b.select(t, n),
                                0 === h.PW.compare(e.path, n.path) && A.b.move(t, { distance: 1 }),
                                t.insertText(`](${i.target})`);
                        }),
                        !0
                    );
                }
                if (null != i && null != r) return A.b.delete(t, { at: t.selection }), t.insertText(i.target), !0;
                A.b.delete(t, { at: t.selection });
            }
            return t.insertText(n), !0;
        }),
        (T = (function (e) {
            let { apply: t, deleteBackward: n, deleteForward: i, deleteFragment: r, insertText: a } = e;
            return (
                (e.apply = (n) => {
                    if (
                        "set_selection" === n.type &&
                        e.composition?.startedInsideInline &&
                        h.ZF.isRange(n.properties) &&
                        h.ZF.isRange(n.newProperties) &&
                        h.ZF.isCollapsed(n.newProperties)
                    ) {
                        let t = h.VW.getParentInline(e, n.properties),
                            i = h.VW.getParentInline(e, n.newProperties);
                        if (null != t && (null == i || !h.PW.equals(t[1], i[1]))) return;
                    }
                    t(n);
                }),
                (e.insertText = (t) => {
                    null != e.selection && null != h.VW.getCurrentInline(e) ? A.b.insertText(e, t) : a(t);
                }),
                (e.deleteBackward = (t) => {
                    C(e, t, !0) || n(t);
                }),
                (e.deleteForward = (t) => {
                    C(e, t, !1) || i(t);
                }),
                (e.deleteFragment = (t) => {
                    if (null != e.selection && h.ZF.isExpanded(e.selection)) {
                        let n = e.selection.anchor,
                            i = e.selection.focus,
                            a = h.VW.getParentInline(e, n),
                            s = h.VW.getParentInline(e, i);
                        if (null != a && null != s && h.PW.equals(a[1], s[1])) return void r(t);
                        let l = h.ZF.isForward(e.selection);
                        if (null != a) {
                            let [, t] = a,
                                [i, r] = h.VW.edges(e, t);
                            l && h.Kh.equals(n, i)
                                ? (n = h.VW.before(e, i) ?? h.VW.start(e, []))
                                : !l && h.Kh.equals(n, r) && (n = h.VW.after(e, r) ?? h.VW.end(e, []));
                        }
                        if (null != s) {
                            let [, t] = s,
                                [n, r] = h.VW.edges(e, t);
                            !l && h.Kh.equals(i, n)
                                ? (i = h.VW.before(e, n) ?? h.VW.start(e, []))
                                : l && h.Kh.equals(i, r) && (i = h.VW.after(e, r) ?? h.VW.end(e, []));
                        }
                        return void A.b.delete(e, {
                            at: { anchor: n, focus: i },
                            reverse: "backward" === t,
                            select: !0,
                        });
                    }
                    r(t);
                }),
                e
            );
        })((T = t))),
        i.commands?.enabled && (T = (0, _.A)(T, s)),
        (T = (0, N.Ay)(T, s.guild_id, s.id)),
        i.markdown?.disableBlockQuotes ||
            (T = (function (e) {
                let { deleteBackward: t, deleteFragment: n, insertBreak: i, onChange: r } = e;
                (e.deleteBackward = (n) => {
                    let i = h.VW.getCurrentBlock(e);
                    if (i?.[0].type === "blockQuote") {
                        let t = h.ZF.toPoint(e.selection);
                        if (null != t && h.PW.isFirstChild(i[1], t.path) && 0 === t.offset)
                            return void A.b.setNodes(e, { type: "line" }, { at: i[1] });
                    }
                    t(n);
                }),
                    (e.deleteFragment = (t) => {
                        if (null != e.selection) {
                            let [i, r] = h.ZF.edges(e.selection),
                                a = [i.path[0]],
                                s = h.VW.node(e, a),
                                l = [r.path[0]],
                                o = h.PW.equals(a, l) ? null : h.VW.node(e, l);
                            E.o.withSingleEntry(e, () => {
                                s?.[0].type === "blockQuote" &&
                                    h.Kh.isAtStart(i, s) &&
                                    A.b.setNodes(e, { type: "line" }, { at: a }),
                                    o?.[0].type === "blockQuote" &&
                                        h.Kh.isAtEnd(r, o) &&
                                        A.b.setNodes(e, { type: "line" }, { at: l }),
                                    n(t);
                            });
                            return;
                        }
                        n(t);
                    }),
                    (e.insertBreak = () => {
                        let t = h.VW.getCurrentBlock(e);
                        if (t?.[0].type === "blockQuote") {
                            let n = h.ZF.toPoint(e.selection);
                            if (null == n) return;
                            !(function (e, t, n) {
                                if (!h.VW.isEmpty(e, t[0])) return !1;
                                let i = h.VW.previous(e, { at: t[1] });
                                return (
                                    null != i &&
                                    !!h.AS.isType(i[0], "blockQuote") &&
                                    !!h.VW.isEmpty(e, i[0]) &&
                                    !!h.Kh.isAtStart(n, t) &&
                                    (A.b.setNodes(e, { type: "line" }, { at: t[1] }),
                                    A.b.removeNodes(e, { at: i[1] }),
                                    !0)
                                );
                            })(e, t, n) && A.b.splitNodes(e, { at: n, always: !0 });
                            return;
                        }
                        i();
                    });
                let a = null,
                    s = !0;
                return (
                    (e.onChange = () => {
                        let t = h.VW.richValue(e);
                        (t !== a || e.previewMarkdown !== s) &&
                            (E.o.withMergedEntry(e, () => {
                                h.VW.withoutNormalizing(e, () =>
                                    (function (e) {
                                        let t = !1;
                                        for (let n of h.VW.blocks(e)) {
                                            let [i, r] = n;
                                            if (!f.has(i.type)) continue;
                                            let a = { path: h.PW.child(r, 0), offset: 0 };
                                            if ((0, I.W)(e, a)) {
                                                "blockQuote" === i.type &&
                                                    (A.b.setNodes(e, { type: "line" }, { at: r }),
                                                    A.b.insertText(e, "> ", { at: a }));
                                                continue;
                                            }
                                            if ("blockQuote" === i.type || h.VW.areStylesDisabled(e)) continue;
                                            let s = i.children[0];
                                            if (!h.l5.isText(s)) continue;
                                            let l = s.text.match(/^\s*>>> /),
                                                o = s.text.match(/^\s*> /);
                                            if (
                                                (null != o || null != l || t) &&
                                                (A.b.setNodes(e, { type: "blockQuote" }, { at: r }), !t)
                                            ) {
                                                let n = o?.[0].length ?? l?.[0].length ?? 0,
                                                    i = h.PW.child(r, 0);
                                                A.b.delete(e, {
                                                    at: {
                                                        anchor: { path: i, offset: 0 },
                                                        focus: { path: i, offset: n },
                                                    },
                                                }),
                                                    (t = null != l);
                                            }
                                        }
                                    })(e),
                                );
                            }),
                            (a = t),
                            (s = e.previewMarkdown)),
                            r();
                    }),
                    e
                );
            })(T)),
        i.markdown?.disableCodeBlocks || (T = (0, I.Ay)(T)),
        d &&
            (T = (function (e) {
                let { isInline: t, isVoid: n } = e;
                return (
                    (e.isInline = (e) => "testInline" === e.type || "testInlineVoid" === e.type || t(e)),
                    (e.isVoid = (e) => "testInlineVoid" === e.type || n(e)),
                    e
                );
            })(T)),
        (T = (function (e, t) {
            let {
                apply: n,
                deleteBackward: i,
                deleteForward: r,
                deleteFragment: a,
                insertData: s,
                insertText: l,
                onChange: o,
            } = e;
            function d(n) {
                let i = E.o.currentEntry(e);
                if ((null != i && (i.mergeable = !1), n >= e.history.stack.length)) return;
                e.history.index = n;
                let r = E.o.currentEntry(e);
                t({ newValue: r.value, newSelection: r.selection });
            }
            (e.history = { index: 0, stack: [] }),
                (e.onChange = () => {
                    let { history: t } = e;
                    0 === t.stack.length && ((t.stack = [g(e)]), (t.index = 0)),
                        null != e.selection && (E.o.currentEntry(e).selection = e.selection),
                        (u = null),
                        o();
                }),
                (e.undo = () => {
                    e.history.index > 0 && d(e.history.index - 1);
                }),
                (e.redo = () => {
                    e.history.index < e.history.stack.length - 1 && d(e.history.index + 1);
                });
            let c = null,
                u = null,
                _ = null;
            return (
                (e.apply = (t) => {
                    let { history: i } = e;
                    n(t);
                    let r = h.VW.richValue(e);
                    r !== _ &&
                        (0 === i.stack.length && ((i.stack = [g(e)]), (i.index = 0)),
                        E.o.isSaving(e) &&
                            ((function (e, t, n) {
                                var i, r;
                                let a,
                                    { selection: s } = e,
                                    l = E.o.currentEntry(e),
                                    o = !0,
                                    d = !0;
                                if (
                                    ("insert_text" === t.type && 1 === t.text.length
                                        ? ((a = "insert"),
                                          (d = !(
                                              ("" === t.text || t.text.endsWith(" ")) &&
                                              n?.type === "insert_text" &&
                                              !("" === n.text && n.text.endsWith(" "))
                                          )))
                                        : "split_node" === t.type
                                          ? (a = "insert")
                                          : "remove_text" === t.type && 1 === t.text.length
                                            ? (a = "delete")
                                            : ((a = "other"), (o = !1), (d = !1)),
                                    "set_selection" === t.type && null != l)
                                ) {
                                    l.selection = s;
                                    return;
                                }
                                o && ((i = l), (r = a), !(i?.type !== r || Date.now() - i.createdAt >= 4e3))
                                    ? E.o.insertOrMergeEntry(e, a, d)
                                    : E.o.insertEntry(e, a, d);
                            })(e, t, c),
                            (c = t)),
                        (u = t),
                        (_ = r));
                }),
                (e.deleteBackward = (t) => {
                    E.o.withSingleEntry(e, () => i(t));
                }),
                (e.deleteForward = (t) => {
                    E.o.withSingleEntry(e, () => r(t));
                }),
                (e.deleteFragment = (t) => {
                    E.o.withSingleEntry(e, () => a(t));
                }),
                (e.insertText = (t) => {
                    1 === t.length && u?.type === "remove_text"
                        ? E.o.withMergedEntry(e, () => l(t))
                        : null != e.selection && h.ZF.isExpanded(e.selection)
                          ? E.o.withSingleEntry(e, () => l(t))
                          : l(t);
                }),
                (e.insertData = (t) => {
                    u?.type === "remove_text" ? E.o.withMergedEntry(e, () => s(t)) : E.o.withSingleEntry(e, () => s(t));
                }),
                e
            );
        })(
            (T = (function (e, t, n) {
                let { onChange: i } = e,
                    r = !1,
                    a = !1;
                return (
                    (e.onChange = () => {
                        if (r) {
                            a = !0;
                            return;
                        }
                        r = !0;
                        try {
                            let e = 0;
                            do {
                                if (((a = !1), e++ >= 5)) break;
                                t?.();
                                try {
                                    i();
                                } finally {
                                    n?.();
                                }
                            } while (a);
                        } finally {
                            r = !1;
                        }
                    }),
                    e
                );
            })(
                (T = (function (e) {
                    let { apply: t, onChange: n } = e;
                    return (
                        (e.apply = (n) => {
                            t(n), h.Ot.isValid(e, e.selection) && (e.lastGoodSelection = e.selection);
                        }),
                        (e.onChange = () => {
                            if (
                                (h.Ot.isValid(e, e.selection) ||
                                    (e.selection = (function (e) {
                                        let t;
                                        if (h.Ot.isValid(e, e.lastGoodSelection)) t = e.lastGoodSelection;
                                        else {
                                            let n = h.VW.end(e, []);
                                            t = { anchor: n, focus: n };
                                        }
                                        return t;
                                    })(e)),
                                null != e.selection)
                            ) {
                                let t,
                                    n,
                                    [i, r] = h.ZF.edges(e.selection),
                                    a = !1;
                                for (
                                    ;
                                    null != i && null != (t = h.VW.getParentVoid(e, i)) && !D.XR.includes(t[0].type);
                                )
                                    (i = h.VW.before(e, i, { unit: "offset" })), (a = !0);
                                for (
                                    ;
                                    null != r && null != (n = h.VW.getParentVoid(e, r)) && !D.XR.includes(n[0].type);
                                )
                                    (r = h.VW.after(e, r, { unit: "offset" })), (a = !0);
                                a &&
                                    null != i &&
                                    null != r &&
                                    (h.ZF.isForward(e.selection)
                                        ? A.b.select(e, { anchor: i, focus: r })
                                        : A.b.select(e, { anchor: r, focus: i }));
                            }
                            n();
                        }),
                        e
                    );
                })(
                    (T = (function (e) {
                        let { insertBreak: t, insertText: n } = e;
                        return (
                            (e.insertBreak = () => {
                                m(e) && t();
                            }),
                            (e.insertSoftBreak = () => {
                                e.insertBreak();
                            }),
                            (e.insertText = (t) => {
                                if (0 > t.indexOf("\r") && 0 > t.indexOf("\n")) return void n(t);
                                let i = t.split(/\r\n|\r|\n/);
                                m(e)
                                    ? E.o.withSingleEntry(e, () => {
                                          let t = !1;
                                          for (let r of i) t && A.b.splitNodes(e, { always: !0 }), n(r), (t = !0);
                                      })
                                    : n(i.join(" "));
                            }),
                            e
                        );
                    })((T = (0, S.A)(T)))),
                )),
                c,
                u,
            )),
            (e) => {
                let { newValue: t, newSelection: n } = e;
                return p(T, "undo", { value: t, selection: n });
            },
        ));
}
