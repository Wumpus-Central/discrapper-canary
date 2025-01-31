n.d(t, { Z: () => g }), n(47120), n(757143);
var i = n(192379),
    r = n(270445),
    a = n(911969),
    s = n(998698),
    o = n(91313),
    l = n(53529),
    u = n(436660),
    c = n(887490),
    d = n(515270),
    f = n(847302),
    _ = n(42530);
let p = (e, t, n) => ({
    getSlateEditor: () => e,
    submit(e) {
        e.preventDefault(), n();
    },
    focus() {
        c.bN.focus(e);
    },
    blur() {
        r.F3.blur(e);
    },
    getCurrentWord() {
        let t = e.selection;
        if (null == t || !c.Ew.isValid(e, t) || c.M8.isExpanded(t) || (0, d.L6)(e))
            return {
                word: null,
                isAtStart: !1
            };
        let [n, i] = c.bN.node(e, c.C0.parent(t.anchor.path)),
            [r, a] = c.bN.node(e, t.anchor.path),
            s = t.anchor.offset;
        if (!c.C0.hasPrevious(a) && c.LC.isText(r)) {
            let e = r.text.substring(0, s);
            if (c.aj.isType(n, 'applicationCommand') && s < n.command.displayName.length + 2)
                return {
                    word: e,
                    isAtStart: !0
                };
        }
        let o = '',
            l = !1;
        for (;;) {
            if (--s < 0) {
                if (!c.C0.hasPrevious(a)) {
                    l = !0;
                    break;
                }
                [r, a] = c.bN.node(e, c.C0.previous(a));
            }
            if (!c.LC.isText(r)) break;
            let t = r.text[s];
            if (_.i$.test(t)) break;
            o = t + o;
        }
        return {
            word: o,
            isAtStart: l && c.C0.isFirstEditorBlock(i)
        };
    },
    getFirstText() {
        var t, n;
        return null !== (n = null === (t = c.bN.getFirstText(e)) || void 0 === t ? void 0 : t.text) && void 0 !== n ? n : '';
    },
    getCurrentCommandOption() {
        let t = o.HZ(e);
        return null == t ? null : t[0].optionName;
    },
    getCurrentCommandOptionValue() {
        var n;
        let i = o.HZ(e);
        if (null == i) return [];
        let r = s.Z.getActiveCommand(t.id),
            a = null == r ? void 0 : null === (n = r.options) || void 0 === n ? void 0 : n.find((e) => e.name === i[0].optionName);
        return null == a ? [] : o.IB(e, a, i[0], t.id);
    },
    getCommandOptionValues() {
        let n = s.Z.getActiveCommand(t.id);
        return null == n ? {} : o.tM(e, n, t.id);
    },
    insertText(n) {
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        l.T.withSingleEntry(e, () => {
            let a = o.HZ(e),
                s = null != a && h(t, a[0]);
            if ((null != i && s && (u.Q.removeInlineChildren(e, a), (r = !1)), m(e, n, i, r), null != i && s)) {
                let n = o.cr(e);
                if (((a = c.q.updateElement(e, a)), null != n)) {
                    let i = c.q.markdown(n[0], t.guild_id);
                    (0, f.Gg)(e, a, t.id, i) && (a = c.q.updateElement(e, a));
                }
                o.xi(e, t.guild_id, t.id, c.q.updateElement(e, a), !1), u.Q.selectNextCommandOption(e);
            }
        });
    },
    insertAutocomplete(n) {
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        l.T.withSingleEntry(e, () => {
            let a = o.HZ(e),
                s = null != a && h(t, a[0]);
            if (s) u.Q.removeInlineChildren(e, a), (r = !1);
            else {
                let { word: t } = this.getCurrentWord();
                null != t &&
                    t.length > 0 &&
                    u.Q.delete(e, {
                        distance: t.length,
                        unit: 'character',
                        reverse: !0
                    });
            }
            m(e, n, i, r), s && u.Q.selectNextCommandOption(e);
        });
    },
    insertEmoji(t) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        l.T.withSingleEntry(e, () => {
            var i, r;
            let a = t.animated ? 'a' : '',
                s = null !== (r = null !== (i = t.originalName) && void 0 !== i ? i : t.name) && void 0 !== r ? r : '';
            m(e, ':'.concat(t.name, ':'), null != t.id ? '<'.concat(a, ':').concat(s.replace(/:/g, ''), ':').concat(t.id, '>') : null, n);
        });
    }
});
function h(e, t) {
    var n;
    let i = s.Z.getActiveCommand(e.id),
        r = null == i ? void 0 : null === (n = i.options) || void 0 === n ? void 0 : n.find((e) => e.name === t.optionName);
    return null != r && (r.type !== a.jw.STRING || (null == r ? void 0 : r.choices) != null || (null == r ? void 0 : r.autocomplete));
}
function m(e, t, n, i) {
    let r = c.bN.areStylesDisabled(e) || null == n ? t : n;
    l.T.withSingleEntry(e, () => {
        u.Q.insertText(e, i ? r + ' ' : r);
    });
}
function g(e, t, n, r) {
    i.useImperativeHandle(e, () => p(t, n, r), [t, n, r]);
}
