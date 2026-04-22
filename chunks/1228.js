"use strict";
n.d(t, { A: () => x });
var i = n(64700),
    l = n(284009),
    s = n.n(l),
    r = n(253018),
    a = n(155718),
    o = n(861382),
    c = n(317681),
    u = n(186306),
    d = n(35277),
    h = n(711371),
    m = n(407315),
    p = n(2368),
    f = n(551483);
function g(e, t) {
    let n = o.A.getActiveCommand(e.id),
        i = n?.options?.find((e) => e.name === t.optionName);
    return null != i && (i.type !== a.n4.STRING || i?.choices != null || i?.autocomplete);
}
function _(e, t, n, i) {
    let l = h.VW.areStylesDisabled(e) || null == n ? t : n;
    u.o.withSingleEntry(e, () => {
        d.b.insertText(e, i ? l + " " : l);
    });
}
function x(e, t, n, l) {
    i.useImperativeHandle(
        e,
        () => ({
            getSlateEditor: () => t,
            submit(e) {
                e?.preventDefault(), l();
            },
            focus() {
                h.VW.focus(t);
            },
            blur() {
                r.rL.blur(t);
            },
            getCurrentWord() {
                let e = t.selection;
                if (null == e || !h.Ot.isValid(t, e) || h.ZF.isExpanded(e) || (0, m.Q9)(t))
                    return { word: null, isAtStart: !1 };
                let [n, i] = h.VW.node(t, h.PW.parent(e.anchor.path)),
                    [l, s] = h.VW.node(t, e.anchor.path),
                    r = e.anchor.offset;
                if (!h.PW.hasPrevious(s) && h.l5.isText(l)) {
                    let e = l.text.substring(0, r);
                    if (h.AS.isType(n, "applicationCommand") && r < n.command.displayName.length + 2)
                        return { word: e, isAtStart: !0 };
                }
                let a = "",
                    o = !1;
                for (;;) {
                    if (--r < 0) {
                        if (!h.PW.hasPrevious(s)) {
                            o = !0;
                            break;
                        }
                        [l, s] = h.VW.node(t, h.PW.previous(s));
                    }
                    if (!h.l5.isText(l)) break;
                    let e = l.text[r];
                    if (f.ug.test(e)) break;
                    a = e + a;
                }
                let c = a,
                    u = e.anchor.offset,
                    [d] = h.VW.node(t, e.anchor.path);
                for (; h.l5.isText(d) && !(u >= d.text.length); ) {
                    let e = d.text[u];
                    if (f.ug.test(e)) break;
                    (c += e), u++;
                }
                return { word: a, fullWord: c, isAtStart: o && h.PW.isFirstEditorBlock(i) };
            },
            getFirstText: () => h.VW.getFirstText(t)?.text ?? "",
            getCurrentCommandOption() {
                let e = c.M3(t);
                return null == e ? null : e[0].optionName;
            },
            getCurrentCommandOptionValue() {
                let e = c.M3(t);
                if (null == e) return [];
                let i = o.A.getActiveCommand(n.id),
                    l = i?.options?.find((t) => t.name === e[0].optionName);
                return null == l ? [] : c.FV(t, l, e[0], n.id);
            },
            getCommandOptionValues() {
                let e = o.A.getActiveCommand(n.id);
                return null == e ? {} : c.SQ(t, e, n.id);
            },
            insertText(e) {
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                u.o.withSingleEntry(t, () => {
                    let s = c.M3(t),
                        r = null != s && g(n, s[0]);
                    if ((null != i && r && (d.b.removeInlineChildren(t, s), (l = !1)), _(t, e, i, l), null != i && r)) {
                        let e = c.n$(t);
                        if (((s = h.cv.updateElement(t, s)), null != e)) {
                            let i = h.cv.markdown(e[0], n.guild_id);
                            (0, p.lE)(t, s, n.id, i) && (s = h.cv.updateElement(t, s));
                        }
                        c.ke(t, n.guild_id, n.id, h.cv.updateElement(t, s), !1), d.b.selectNextCommandOption(t);
                    }
                });
            },
            insertAutocomplete(e) {
                let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    { addSpace: l = !0, replaceFullWord: s = !1 } =
                        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                u.o.withSingleEntry(t, () => {
                    let r = c.M3(t),
                        a = null != r && g(n, r[0]);
                    if (a) d.b.removeInlineChildren(t, r), (l = !1);
                    else {
                        let { word: e, fullWord: n } = this.getCurrentWord();
                        null != e &&
                            e.length > 0 &&
                            d.b.delete(t, { distance: e.length, unit: "character", reverse: !0 }),
                            s &&
                                null != e &&
                                null != n &&
                                n.length - e.length > 0 &&
                                d.b.delete(t, { distance: n.length - e.length, unit: "character" });
                    }
                    _(t, e, i, l), a && d.b.selectNextCommandOption(t);
                });
            },
            insertInlineAutocompleteInput(e) {
                u.o.withSingleEntry(t, () => {
                    let { word: n } = this.getCurrentWord();
                    null != n && n.length > 0 && d.b.delete(t, { distance: n.length, unit: "character", reverse: !0 }),
                        d.b.insertNodes(t, [{ type: e, children: [{ text: "" }] }]);
                });
            },
            replaceInlineAutocompleteInput(e, n, i) {
                u.o.withSingleEntry(t, () => {
                    let l = h.VW.getSelectedParentOfType(t, [e]);
                    s()(null != l, `Cannot replace inline input of type ${e} when none is selected`),
                        d.b.removeNodes(t, { at: l[1] }),
                        _(t, n, i, !0);
                });
            },
            insertEmoji(e) {
                let { emoji: n, addSpace: i = !1 } = e;
                u.o.withSingleEntry(t, () => {
                    let e = n.animated ? "a" : "",
                        l = n.originalName ?? n.name ?? "";
                    _(t, `:${n.name}:`, null != n.id ? `<${e}:${l.replace(/:/g, "")}:${n.id}>` : null, i);
                });
            },
        }),
        [t, n, l],
    );
}
