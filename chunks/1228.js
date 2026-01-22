n.d(t, {
    A: () => b,
}),
    n(896048),
    n(747238),
    n(812715);
var r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(253018),
    o = n(155718),
    l = n(861382),
    c = n(317681),
    u = n(186306),
    d = n(35277),
    f = n(711371),
    p = n(407315),
    _ = n(2368),
    h = n(551483);
let m = (e, t, n) => ({
    getSlateEditor: () => e,
    submit(e) {
        e.preventDefault(), n();
    },
    focus() {
        f.VW.focus(e);
    },
    blur() {
        s.rL.blur(e);
    },
    getCurrentWord() {
        let t = e.selection;
        if (null == t || !f.Ot.isValid(e, t) || f.ZF.isExpanded(t) || (0, p.Q9)(e))
            return {
                word: null,
                isAtStart: !1,
            };
        let [n, r] = f.VW.node(e, f.PW.parent(t.anchor.path)),
            [i, a] = f.VW.node(e, t.anchor.path),
            s = t.anchor.offset;
        if (!f.PW.hasPrevious(a) && f.l5.isText(i)) {
            let e = i.text.substring(0, s);
            if (f.AS.isType(n, "applicationCommand") && s < n.command.displayName.length + 2)
                return {
                    word: e,
                    isAtStart: !0,
                };
        }
        let o = "",
            l = !1;
        for (;;) {
            if (--s < 0) {
                if (!f.PW.hasPrevious(a)) {
                    l = !0;
                    break;
                }
                [i, a] = f.VW.node(e, f.PW.previous(a));
            }
            if (!f.l5.isText(i)) break;
            let t = i.text[s];
            if (h.ug.test(t)) break;
            o = t + o;
        }
        let c = o,
            u = t.anchor.offset,
            [d] = f.VW.node(e, t.anchor.path);
        for (; f.l5.isText(d) && !(u >= d.text.length); ) {
            let e = d.text[u];
            if (h.ug.test(e)) break;
            (c += e), u++;
        }
        return {
            word: o,
            fullWord: c,
            isAtStart: l && f.PW.isFirstEditorBlock(r),
        };
    },
    getFirstText() {
        var t, n;
        return null != (t = null == (n = f.VW.getFirstText(e)) ? void 0 : n.text) ? t : "";
    },
    getCurrentCommandOption() {
        let t = c.M3(e);
        return null == t ? null : t[0].optionName;
    },
    getCurrentCommandOptionValue() {
        var n;
        let r = c.M3(e);
        if (null == r) return [];
        let i = l.A.getActiveCommand(t.id),
            a = null == i || null == (n = i.options) ? void 0 : n.find((e) => e.name === r[0].optionName);
        return null == a ? [] : c.FV(e, a, r[0], t.id);
    },
    getCommandOptionValues() {
        let n = l.A.getActiveCommand(t.id);
        return null == n ? {} : c.SQ(e, n, t.id);
    },
    insertText(n) {
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        u.o.withSingleEntry(e, () => {
            let a = c.M3(e),
                s = null != a && g(t, a[0]);
            if ((null != r && s && (d.b.removeInlineChildren(e, a), (i = !1)), E(e, n, r, i), null != r && s)) {
                let n = c.n$(e);
                if (((a = f.cv.updateElement(e, a)), null != n)) {
                    let r = f.cv.markdown(n[0], t.guild_id);
                    (0, _.lE)(e, a, t.id, r) && (a = f.cv.updateElement(e, a));
                }
                c.ke(e, t.guild_id, t.id, f.cv.updateElement(e, a), !1), d.b.selectNextCommandOption(e);
            }
        });
    },
    insertAutocomplete(n) {
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            { addSpace: i = !0, replaceFullWord: a = !1 } =
                arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        u.o.withSingleEntry(e, () => {
            let s = c.M3(e),
                o = null != s && g(t, s[0]);
            if (o) d.b.removeInlineChildren(e, s), (i = !1);
            else {
                let { word: t, fullWord: n } = this.getCurrentWord();
                null != t &&
                    t.length > 0 &&
                    d.b.delete(e, {
                        distance: t.length,
                        unit: "character",
                        reverse: !0,
                    }),
                    a &&
                        null != t &&
                        null != n &&
                        n.length - t.length > 0 &&
                        d.b.delete(e, {
                            distance: n.length - t.length,
                            unit: "character",
                        });
            }
            E(e, n, r, i), o && d.b.selectNextCommandOption(e);
        });
    },
    insertInlineAutocompleteInput(t) {
        u.o.withSingleEntry(e, () => {
            let { word: n } = this.getCurrentWord();
            null != n &&
                n.length > 0 &&
                d.b.delete(e, {
                    distance: n.length,
                    unit: "character",
                    reverse: !0,
                }),
                d.b.insertNodes(e, [
                    {
                        type: t,
                        children: [
                            {
                                text: "",
                            },
                        ],
                    },
                ]);
        });
    },
    replaceInlineAutocompleteInput(t, n, r) {
        u.o.withSingleEntry(e, () => {
            let i = f.VW.getSelectedParentOfType(e, [t]);
            a()(null != i, "Cannot replace inline input of type ".concat(t, " when none is selected")),
                d.b.removeNodes(e, {
                    at: i[1],
                }),
                E(e, n, r, !0);
        });
    },
    insertEmoji(t) {
        let { emoji: n, addSpace: r = !1 } = t;
        u.o.withSingleEntry(e, () => {
            var t, i;
            let a = n.animated ? "a" : "",
                s = null != (t = null != (i = n.originalName) ? i : n.name) ? t : "";
            E(
                e,
                ":".concat(n.name, ":"),
                null != n.id ? "<".concat(a, ":").concat(s.replace(/:/g, ""), ":").concat(n.id, ">") : null,
                r,
            );
        });
    },
});

function g(e, t) {
    var n;
    let r = l.A.getActiveCommand(e.id),
        i = null == r || null == (n = r.options) ? void 0 : n.find((e) => e.name === t.optionName);
    return (
        null != i &&
        (i.type !== o.n4.STRING || (null == i ? void 0 : i.choices) != null || (null == i ? void 0 : i.autocomplete))
    );
}

function E(e, t, n, r) {
    let i = f.VW.areStylesDisabled(e) || null == n ? t : n;
    u.o.withSingleEntry(e, () => {
        d.b.insertText(e, r ? i + " " : i);
    });
}

function b(e, t, n, i) {
    r.useImperativeHandle(e, () => m(t, n, i), [t, n, i]);
}
