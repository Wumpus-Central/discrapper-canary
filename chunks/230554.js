n.d(t, { Z: () => g }), n(388685), n(35282), n(704826);
var r = n(73800),
    i = n(650557),
    a = n(911969),
    o = n(998698),
    s = n(91313),
    l = n(53529),
    c = n(436660),
    u = n(887490),
    d = n(515270),
    f = n(847302),
    _ = n(42530);
let p = (e, t, n) => ({
    getSlateEditor: () => e,
    submit(e) {
        e.preventDefault(), n();
    },
    focus() {
        u.bN.focus(e);
    },
    blur() {
        i.F3.blur(e);
    },
    getCurrentWord() {
        let t = e.selection;
        if (null == t || !u.Ew.isValid(e, t) || u.M8.isExpanded(t) || (0, d.L6)(e))
            return {
                word: null,
                isAtStart: !1
            };
        let [n, r] = u.bN.node(e, u.C0.parent(t.anchor.path)),
            [i, a] = u.bN.node(e, t.anchor.path),
            o = t.anchor.offset;
        if (!u.C0.hasPrevious(a) && u.LC.isText(i)) {
            let e = i.text.substring(0, o);
            if (u.aj.isType(n, 'applicationCommand') && o < n.command.displayName.length + 2)
                return {
                    word: e,
                    isAtStart: !0
                };
        }
        let s = '',
            l = !1;
        for (;;) {
            if (--o < 0) {
                if (!u.C0.hasPrevious(a)) {
                    l = !0;
                    break;
                }
                [i, a] = u.bN.node(e, u.C0.previous(a));
            }
            if (!u.LC.isText(i)) break;
            let t = i.text[o];
            if (_.i$.test(t)) break;
            s = t + s;
        }
        return {
            word: s,
            isAtStart: l && u.C0.isFirstEditorBlock(r)
        };
    },
    getFirstText() {
        var t, n;
        return null != (n = null == (t = u.bN.getFirstText(e)) ? void 0 : t.text) ? n : '';
    },
    getCurrentCommandOption() {
        let t = s.HZ(e);
        return null == t ? null : t[0].optionName;
    },
    getCurrentCommandOptionValue() {
        var n;
        let r = s.HZ(e);
        if (null == r) return [];
        let i = o.Z.getActiveCommand(t.id),
            a = null == i || null == (n = i.options) ? void 0 : n.find((e) => e.name === r[0].optionName);
        return null == a ? [] : s.IB(e, a, r[0], t.id);
    },
    getCommandOptionValues() {
        let n = o.Z.getActiveCommand(t.id);
        return null == n ? {} : s.tM(e, n, t.id);
    },
    insertText(n) {
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        l.T.withSingleEntry(e, () => {
            let a = s.HZ(e),
                o = null != a && h(t, a[0]);
            if ((null != r && o && (c.Q.removeInlineChildren(e, a), (i = !1)), m(e, n, r, i), null != r && o)) {
                let n = s.cr(e);
                if (((a = u.q.updateElement(e, a)), null != n)) {
                    let r = u.q.markdown(n[0], t.guild_id);
                    (0, f.Gg)(e, a, t.id, r) && (a = u.q.updateElement(e, a));
                }
                s.xi(e, t.guild_id, t.id, u.q.updateElement(e, a), !1), c.Q.selectNextCommandOption(e);
            }
        });
    },
    insertAutocomplete(n) {
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        l.T.withSingleEntry(e, () => {
            let a = s.HZ(e),
                o = null != a && h(t, a[0]);
            if (o) c.Q.removeInlineChildren(e, a), (i = !1);
            else {
                let { word: t } = this.getCurrentWord();
                null != t &&
                    t.length > 0 &&
                    c.Q.delete(e, {
                        distance: t.length,
                        unit: 'character',
                        reverse: !0
                    });
            }
            m(e, n, r, i), o && c.Q.selectNextCommandOption(e);
        });
    },
    insertEmoji(t) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        l.T.withSingleEntry(e, () => {
            var r, i;
            let a = t.animated ? 'a' : '',
                o = null != (i = null != (r = t.originalName) ? r : t.name) ? i : '';
            m(e, ':'.concat(t.name, ':'), null != t.id ? '<'.concat(a, ':').concat(o.replace(/:/g, ''), ':').concat(t.id, '>') : null, n);
        });
    }
});
function h(e, t) {
    var n;
    let r = o.Z.getActiveCommand(e.id),
        i = null == r || null == (n = r.options) ? void 0 : n.find((e) => e.name === t.optionName);
    return null != i && (i.type !== a.jw.STRING || (null == i ? void 0 : i.choices) != null || (null == i ? void 0 : i.autocomplete));
}
function m(e, t, n, r) {
    let i = u.bN.areStylesDisabled(e) || null == n ? t : n;
    l.T.withSingleEntry(e, () => {
        c.Q.insertText(e, r ? i + ' ' : i);
    });
}
function g(e, t, n, i) {
    r.useImperativeHandle(e, () => p(t, n, i), [t, n, i]);
}
