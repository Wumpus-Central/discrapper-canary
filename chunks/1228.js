"use strict";
n.d(t, { A: () => g });
var r = n(64700),
    i = n(284009),
    s = n.n(i),
    a = n(253018),
    o = n(155718),
    l = n(861382),
    u = n(317681),
    c = n(186306),
    d = n(35277),
    _ = n(711371),
    f = n(407315),
    p = n(2368),
    h = n(551483);
function E(e, t) {
    let n = l.A.getActiveCommand(e.id),
        r = n?.options?.find((e) => e.name === t.optionName);
    return null != r && (r.type !== o.n4.STRING || r?.choices != null || r?.autocomplete);
}
function m(e, t, n, r) {
    let i = _.VW.areStylesDisabled(e) || null == n ? t : n;
    c.o.withSingleEntry(e, () => {
        d.b.insertText(e, r ? i + " " : i);
    });
}
function g(e, t, n, i) {
    r.useImperativeHandle(
        e,
        () => ({
            getSlateEditor: () => t,
            submit(e) {
                e?.preventDefault(), i();
            },
            focus() {
                _.VW.focus(t);
            },
            blur() {
                a.rL.blur(t);
            },
            getCurrentWord() {
                let e = t.selection;
                if (null == e || !_.Ot.isValid(t, e) || _.ZF.isExpanded(e) || (0, f.Q9)(t))
                    return { word: null, isAtStart: !1 };
                let [n, r] = _.VW.node(t, _.PW.parent(e.anchor.path)),
                    [i, s] = _.VW.node(t, e.anchor.path),
                    a = e.anchor.offset;
                if (!_.PW.hasPrevious(s) && _.l5.isText(i)) {
                    let e = i.text.substring(0, a);
                    if (_.AS.isType(n, "applicationCommand") && a < n.command.displayName.length + 2)
                        return { word: e, isAtStart: !0 };
                }
                let o = "",
                    l = !1;
                for (;;) {
                    if (--a < 0) {
                        if (!_.PW.hasPrevious(s)) {
                            l = !0;
                            break;
                        }
                        [i, s] = _.VW.node(t, _.PW.previous(s));
                    }
                    if (!_.l5.isText(i)) break;
                    let e = i.text[a];
                    if (h.ug.test(e)) break;
                    o = e + o;
                }
                let u = o,
                    c = e.anchor.offset,
                    [d] = _.VW.node(t, e.anchor.path);
                for (; _.l5.isText(d) && !(c >= d.text.length); ) {
                    let e = d.text[c];
                    if (h.ug.test(e)) break;
                    (u += e), c++;
                }
                return { word: o, fullWord: u, isAtStart: l && _.PW.isFirstEditorBlock(r) };
            },
            getFirstText: () => _.VW.getFirstText(t)?.text ?? "",
            getCurrentCommandOption() {
                let e = u.M3(t);
                return null == e ? null : e[0].optionName;
            },
            getCurrentCommandOptionValue() {
                let e = u.M3(t);
                if (null == e) return [];
                let r = l.A.getActiveCommand(n.id),
                    i = r?.options?.find((t) => t.name === e[0].optionName);
                return null == i ? [] : u.FV(t, i, e[0], n.id);
            },
            getCommandOptionValues() {
                let e = l.A.getActiveCommand(n.id);
                return null == e ? {} : u.SQ(t, e, n.id);
            },
            insertText(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                c.o.withSingleEntry(t, () => {
                    let s = u.M3(t),
                        a = null != s && E(n, s[0]);
                    if ((null != r && a && (d.b.removeInlineChildren(t, s), (i = !1)), m(t, e, r, i), null != r && a)) {
                        let e = u.n$(t);
                        if (((s = _.cv.updateElement(t, s)), null != e)) {
                            let r = _.cv.markdown(e[0], n.guild_id);
                            (0, p.lE)(t, s, n.id, r) && (s = _.cv.updateElement(t, s));
                        }
                        u.ke(t, n.guild_id, n.id, _.cv.updateElement(t, s), !1), d.b.selectNextCommandOption(t);
                    }
                });
            },
            insertAutocomplete(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    { addSpace: i = !0, replaceFullWord: s = !1 } =
                        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                c.o.withSingleEntry(t, () => {
                    let a = u.M3(t),
                        o = null != a && E(n, a[0]);
                    if (o) d.b.removeInlineChildren(t, a), (i = !1);
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
                    m(t, e, r, i), o && d.b.selectNextCommandOption(t);
                });
            },
            insertInlineAutocompleteInput(e) {
                c.o.withSingleEntry(t, () => {
                    let { word: n } = this.getCurrentWord();
                    null != n && n.length > 0 && d.b.delete(t, { distance: n.length, unit: "character", reverse: !0 }),
                        d.b.insertNodes(t, [{ type: e, children: [{ text: "" }] }]);
                });
            },
            replaceInlineAutocompleteInput(e, n, r) {
                c.o.withSingleEntry(t, () => {
                    let i = _.VW.getSelectedParentOfType(t, [e]);
                    s()(null != i, `Cannot replace inline input of type ${e} when none is selected`),
                        d.b.removeNodes(t, { at: i[1] }),
                        m(t, n, r, !0);
                });
            },
            insertEmoji(e) {
                let { emoji: n, addSpace: r = !1 } = e;
                c.o.withSingleEntry(t, () => {
                    let e = n.animated ? "a" : "",
                        i = n.originalName ?? n.name ?? "";
                    m(t, `:${n.name}:`, null != n.id ? `<${e}:${i.replace(/:/g, "")}:${n.id}>` : null, r);
                });
            },
        }),
        [t, n, i],
    );
}
