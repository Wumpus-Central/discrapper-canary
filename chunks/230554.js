r.d(n, {
    Z: function () {
        return y;
    }
});
var i = r(47120);
var a = r(757143);
var o = r(192379),
    s = r(270445),
    l = r(911969),
    u = r(998698),
    c = r(91313),
    d = r(53529),
    f = r(436660),
    p = r(887490),
    h = r(515270),
    _ = r(847302),
    m = r(42530);
let g = (e, n, r) => ({
    getSlateEditor: () => e,
    submit(e) {
        e.preventDefault(), r();
    },
    focus() {
        p.bN.focus(e);
    },
    blur() {
        s.F3.blur(e);
    },
    getCurrentWord() {
        let n = e.selection;
        if (null == n || !p.Ew.isValid(e, n) || p.M8.isExpanded(n) || (0, h.L6)(e))
            return {
                word: null,
                isAtStart: !1
            };
        let [r, i] = p.bN.node(e, p.C0.parent(n.anchor.path)),
            [a, o] = p.bN.node(e, n.anchor.path),
            s = n.anchor.offset;
        if (!p.C0.hasPrevious(o) && p.LC.isText(a)) {
            let e = a.text.substring(0, s);
            if (p.aj.isType(r, 'applicationCommand') && s < r.command.displayName.length + 2)
                return {
                    word: e,
                    isAtStart: !0
                };
        }
        let l = '',
            u = !1;
        for (;;) {
            if (--s < 0) {
                if (!p.C0.hasPrevious(o)) {
                    u = !0;
                    break;
                }
                [a, o] = p.bN.node(e, p.C0.previous(o));
            }
            if (!p.LC.isText(a)) break;
            let n = a.text[s];
            if (m.i$.test(n)) break;
            l = n + l;
        }
        return {
            word: l,
            isAtStart: u && p.C0.isFirstEditorBlock(i)
        };
    },
    getFirstText() {
        var n, r;
        return null !== (r = null === (n = p.bN.getFirstText(e)) || void 0 === n ? void 0 : n.text) && void 0 !== r ? r : '';
    },
    getCurrentCommandOption() {
        let n = c.HZ(e);
        return null == n ? null : n[0].optionName;
    },
    getCurrentCommandOptionValue() {
        var r;
        let i = c.HZ(e);
        if (null == i) return [];
        let a = u.Z.getActiveCommand(n.id),
            o = null == a ? void 0 : null === (r = a.options) || void 0 === r ? void 0 : r.find((e) => e.name === i[0].optionName);
        return null == o ? [] : c.IB(e, o, i[0], n.id);
    },
    getCommandOptionValues() {
        let r = u.Z.getActiveCommand(n.id);
        return null == r ? {} : c.tM(e, r, n.id);
    },
    insertText(r) {
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        d.T.withSingleEntry(e, () => {
            let o = c.HZ(e),
                s = null != o && E(n, o[0]);
            if ((null != i && s && (f.Q.removeInlineChildren(e, o), (a = !1)), v(e, r, i, a), null != i && s)) {
                let r = c.cr(e);
                if (((o = p.q.updateElement(e, o)), null != r)) {
                    let i = p.q.markdown(r[0], n.guild_id);
                    (0, _.Gg)(e, o, n.id, i) && (o = p.q.updateElement(e, o));
                }
                c.xi(e, n.guild_id, n.id, p.q.updateElement(e, o), !1), f.Q.selectNextCommandOption(e);
            }
        });
    },
    insertAutocomplete(r) {
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        d.T.withSingleEntry(e, () => {
            let o = c.HZ(e),
                s = null != o && E(n, o[0]);
            if (s) f.Q.removeInlineChildren(e, o), (a = !1);
            else {
                let { word: n } = this.getCurrentWord();
                null != n &&
                    n.length > 0 &&
                    f.Q.delete(e, {
                        distance: n.length,
                        unit: 'character',
                        reverse: !0
                    });
            }
            v(e, r, i, a), s && f.Q.selectNextCommandOption(e);
        });
    },
    insertEmoji(n) {
        let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        d.T.withSingleEntry(e, () => {
            var i, a;
            let o = n.animated ? 'a' : '',
                s = null !== (a = null !== (i = n.originalName) && void 0 !== i ? i : n.name) && void 0 !== a ? a : '',
                l = ':'.concat(n.name, ':');
            v(e, l, null != n.id ? '<'.concat(o, ':').concat(s.replace(/:/g, ''), ':').concat(n.id, '>') : null, r);
        });
    }
});
function E(e, n) {
    var r;
    let i = u.Z.getActiveCommand(e.id),
        a = null == i ? void 0 : null === (r = i.options) || void 0 === r ? void 0 : r.find((e) => e.name === n.optionName);
    return null != a && (a.type !== l.jw.STRING || (null == a ? void 0 : a.choices) != null || (null == a ? void 0 : a.autocomplete));
}
function v(e, n, r, i) {
    let a = p.bN.areStylesDisabled(e) || null == r ? n : r;
    d.T.withSingleEntry(e, () => {
        f.Q.insertText(e, i ? a + ' ' : a);
    });
}
function y(e, n, r, i) {
    o.useImperativeHandle(e, () => g(n, r, i), [n, r, i]);
}
