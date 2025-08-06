(n.d(t, { Z: () => b }), n(388685), n(35282), n(704826));
var r = n(73800),
    i = n(512722),
    o = n.n(i),
    a = n(650557),
    s = n(911969),
    l = n(998698),
    c = n(91313),
    u = n(53529),
    d = n(436660),
    f = n(887490),
    _ = n(515270),
    p = n(847302),
    h = n(42530);
let m = (e, t, n) => ({
    getSlateEditor: () => e,
    submit(e) {
        (e.preventDefault(), n());
    },
    focus() {
        f.bN.focus(e);
    },
    blur() {
        a.F3.blur(e);
    },
    getCurrentWord() {
        let t = e.selection;
        if (null == t || !f.Ew.isValid(e, t) || f.M8.isExpanded(t) || (0, _.L6)(e))
            return {
                word: null,
                isAtStart: !1
            };
        let [n, r] = f.bN.node(e, f.C0.parent(t.anchor.path)),
            [i, o] = f.bN.node(e, t.anchor.path),
            a = t.anchor.offset;
        if (!f.C0.hasPrevious(o) && f.LC.isText(i)) {
            let e = i.text.substring(0, a);
            if (f.aj.isType(n, 'applicationCommand') && a < n.command.displayName.length + 2)
                return {
                    word: e,
                    isAtStart: !0
                };
        }
        let s = '',
            l = !1;
        for (;;) {
            if (--a < 0) {
                if (!f.C0.hasPrevious(o)) {
                    l = !0;
                    break;
                }
                [i, o] = f.bN.node(e, f.C0.previous(o));
            }
            if (!f.LC.isText(i)) break;
            let t = i.text[a];
            if (h.i$.test(t)) break;
            s = t + s;
        }
        return {
            word: s,
            isAtStart: l && f.C0.isFirstEditorBlock(r)
        };
    },
    getFirstText() {
        var t, n;
        return null != (n = null == (t = f.bN.getFirstText(e)) ? void 0 : t.text) ? n : '';
    },
    getCurrentCommandOption() {
        let t = c.HZ(e);
        return null == t ? null : t[0].optionName;
    },
    getCurrentCommandOptionValue() {
        var n;
        let r = c.HZ(e);
        if (null == r) return [];
        let i = l.Z.getActiveCommand(t.id),
            o = null == i || null == (n = i.options) ? void 0 : n.find((e) => e.name === r[0].optionName);
        return null == o ? [] : c.IB(e, o, r[0], t.id);
    },
    getCommandOptionValues() {
        let n = l.Z.getActiveCommand(t.id);
        return null == n ? {} : c.tM(e, n, t.id);
    },
    insertText(n) {
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        u.T.withSingleEntry(e, () => {
            let o = c.HZ(e),
                a = null != o && g(t, o[0]);
            if ((null != r && a && (d.Q.removeInlineChildren(e, o), (i = !1)), E(e, n, r, i), null != r && a)) {
                let n = c.cr(e);
                if (((o = f.q.updateElement(e, o)), null != n)) {
                    let r = f.q.markdown(n[0], t.guild_id);
                    (0, p.Gg)(e, o, t.id, r) && (o = f.q.updateElement(e, o));
                }
                (c.xi(e, t.guild_id, t.id, f.q.updateElement(e, o), !1), d.Q.selectNextCommandOption(e));
            }
        });
    },
    insertAutocomplete(n) {
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        u.T.withSingleEntry(e, () => {
            let o = c.HZ(e),
                a = null != o && g(t, o[0]);
            if (a) (d.Q.removeInlineChildren(e, o), (i = !1));
            else {
                let { word: t } = this.getCurrentWord();
                null != t &&
                    t.length > 0 &&
                    d.Q.delete(e, {
                        distance: t.length,
                        unit: 'character',
                        reverse: !0
                    });
            }
            (E(e, n, r, i), a && d.Q.selectNextCommandOption(e));
        });
    },
    insertInlineAutocompleteInput(t) {
        u.T.withSingleEntry(e, () => {
            let { word: n } = this.getCurrentWord();
            (null != n &&
                n.length > 0 &&
                d.Q.delete(e, {
                    distance: n.length,
                    unit: 'character',
                    reverse: !0
                }),
                d.Q.insertNodes(e, [
                    {
                        type: t,
                        children: [{ text: '' }]
                    }
                ]));
        });
    },
    replaceInlineAutocompleteInput(t, n, r) {
        u.T.withSingleEntry(e, () => {
            let i = f.bN.getSelectedParentOfType(e, [t]);
            (o()(null != i, 'Cannot replace inline input of type '.concat(t, ' when none is selected')), d.Q.removeNodes(e, { at: i[1] }), E(e, n, r, !0));
        });
    },
    insertEmoji(t) {
        let { emoji: n, addSpace: r = !1 } = t;
        u.T.withSingleEntry(e, () => {
            var t, i;
            let o = n.animated ? 'a' : '',
                a = null != (i = null != (t = n.originalName) ? t : n.name) ? i : '';
            E(e, ':'.concat(n.name, ':'), null != n.id ? '<'.concat(o, ':').concat(a.replace(/:/g, ''), ':').concat(n.id, '>') : null, r);
        });
    }
});
function g(e, t) {
    var n;
    let r = l.Z.getActiveCommand(e.id),
        i = null == r || null == (n = r.options) ? void 0 : n.find((e) => e.name === t.optionName);
    return null != i && (i.type !== s.jw.STRING || (null == i ? void 0 : i.choices) != null || (null == i ? void 0 : i.autocomplete));
}
function E(e, t, n, r) {
    let i = f.bN.areStylesDisabled(e) || null == n ? t : n;
    u.T.withSingleEntry(e, () => {
        d.Q.insertText(e, r ? i + ' ' : i);
    });
}
function b(e, t, n, i) {
    r.useImperativeHandle(e, () => m(t, n, i), [t, n, i]);
}
