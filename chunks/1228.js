"use strict";
n.d(t, { A: () => A });
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
let m = (e, t, n) => ({
    getSlateEditor: () => e,
    submit(e) {
        e?.preventDefault(), n();
    },
    focus() {
        _.VW.focus(e);
    },
    blur() {
        a.rL.blur(e);
    },
    getCurrentWord() {
        let t = e.selection;
        if (null == t || !_.Ot.isValid(e, t) || _.ZF.isExpanded(t) || (0, f.Q9)(e))
            return { word: null, isAtStart: !1 };
        let [n, r] = _.VW.node(e, _.PW.parent(t.anchor.path)),
            [i, s] = _.VW.node(e, t.anchor.path),
            a = t.anchor.offset;
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
                [i, s] = _.VW.node(e, _.PW.previous(s));
            }
            if (!_.l5.isText(i)) break;
            let t = i.text[a];
            if (h.ug.test(t)) break;
            o = t + o;
        }
        let u = o,
            c = t.anchor.offset,
            [d] = _.VW.node(e, t.anchor.path);
        for (; _.l5.isText(d) && !(c >= d.text.length); ) {
            let e = d.text[c];
            if (h.ug.test(e)) break;
            (u += e), c++;
        }
        return { word: o, fullWord: u, isAtStart: l && _.PW.isFirstEditorBlock(r) };
    },
    getFirstText: () => _.VW.getFirstText(e)?.text ?? "",
    getCurrentCommandOption() {
        let t = u.M3(e);
        return null == t ? null : t[0].optionName;
    },
    getCurrentCommandOptionValue() {
        let n = u.M3(e);
        if (null == n) return [];
        let r = l.A.getActiveCommand(t.id),
            i = r?.options?.find((e) => e.name === n[0].optionName);
        return null == i ? [] : u.FV(e, i, n[0], t.id);
    },
    getCommandOptionValues() {
        let n = l.A.getActiveCommand(t.id);
        return null == n ? {} : u.SQ(e, n, t.id);
    },
    insertText(n) {
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        c.o.withSingleEntry(e, () => {
            let s = u.M3(e),
                a = null != s && E(t, s[0]);
            if ((null != r && a && (d.b.removeInlineChildren(e, s), (i = !1)), g(e, n, r, i), null != r && a)) {
                let n = u.n$(e);
                if (((s = _.cv.updateElement(e, s)), null != n)) {
                    let r = _.cv.markdown(n[0], t.guild_id);
                    (0, p.lE)(e, s, t.id, r) && (s = _.cv.updateElement(e, s));
                }
                u.ke(e, t.guild_id, t.id, _.cv.updateElement(e, s), !1), d.b.selectNextCommandOption(e);
            }
        });
    },
    insertAutocomplete(n) {
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            { addSpace: i = !0, replaceFullWord: s = !1 } =
                arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        c.o.withSingleEntry(e, () => {
            let a = u.M3(e),
                o = null != a && E(t, a[0]);
            if (o) d.b.removeInlineChildren(e, a), (i = !1);
            else {
                let { word: t, fullWord: n } = this.getCurrentWord();
                null != t && t.length > 0 && d.b.delete(e, { distance: t.length, unit: "character", reverse: !0 }),
                    s &&
                        null != t &&
                        null != n &&
                        n.length - t.length > 0 &&
                        d.b.delete(e, { distance: n.length - t.length, unit: "character" });
            }
            g(e, n, r, i), o && d.b.selectNextCommandOption(e);
        });
    },
    insertInlineAutocompleteInput(t) {
        c.o.withSingleEntry(e, () => {
            let { word: n } = this.getCurrentWord();
            null != n && n.length > 0 && d.b.delete(e, { distance: n.length, unit: "character", reverse: !0 }),
                d.b.insertNodes(e, [{ type: t, children: [{ text: "" }] }]);
        });
    },
    replaceInlineAutocompleteInput(t, n, r) {
        c.o.withSingleEntry(e, () => {
            let i = _.VW.getSelectedParentOfType(e, [t]);
            s()(null != i, `Cannot replace inline input of type ${t} when none is selected`),
                d.b.removeNodes(e, { at: i[1] }),
                g(e, n, r, !0);
        });
    },
    insertEmoji(t) {
        let { emoji: n, addSpace: r = !1 } = t;
        c.o.withSingleEntry(e, () => {
            let t = n.animated ? "a" : "",
                i = n.originalName ?? n.name ?? "";
            g(e, `:${n.name}:`, null != n.id ? `<${t}:${i.replace(/:/g, "")}:${n.id}>` : null, r);
        });
    },
});
function E(e, t) {
    let n = l.A.getActiveCommand(e.id),
        r = n?.options?.find((e) => e.name === t.optionName);
    return null != r && (r.type !== o.n4.STRING || r?.choices != null || r?.autocomplete);
}
function g(e, t, n, r) {
    let i = _.VW.areStylesDisabled(e) || null == n ? t : n;
    c.o.withSingleEntry(e, () => {
        d.b.insertText(e, r ? i + " " : i);
    });
}
function A(e, t, n, i) {
    r.useImperativeHandle(e, () => m(t, n, i), [t, n, i]);
}
