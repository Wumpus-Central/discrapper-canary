n.d(t, { Z: () => s });
var i = n(53529),
    r = n(887490);
let a = 4000;
function s(e, t) {
    let { apply: n, deleteBackward: a, deleteForward: s, deleteFragment: l, insertData: c, insertText: d, onChange: f } = e;
    function _(n) {
        let r = i.T.currentEntry(e);
        if ((null != r && (r.mergeable = !1), n >= e.history.stack.length)) return;
        e.history.index = n;
        let a = i.T.currentEntry(e);
        t({
            newValue: a.value,
            newSelection: a.selection
        });
    }
    (e.history = {
        index: 0,
        stack: []
    }),
        (e.onChange = () => {
            let { history: t } = e;
            0 === t.stack.length && ((t.stack = [u(e)]), (t.index = 0)), null != e.selection && (i.T.currentEntry(e).selection = e.selection), (h = null), f();
        }),
        (e.undo = () => {
            e.history.index > 0 && _(e.history.index - 1);
        }),
        (e.redo = () => {
            e.history.index < e.history.stack.length - 1 && _(e.history.index + 1);
        });
    let p = null,
        h = null,
        m = null;
    return (
        (e.apply = (t) => {
            let { history: a } = e;
            n(t);
            let s = r.bN.richValue(e);
            s !== m && (0 === a.stack.length && ((a.stack = [u(e)]), (a.index = 0)), i.T.isSaving(e) && (o(e, t, p), (p = t)), (h = t), (m = s));
        }),
        (e.deleteBackward = (t) => {
            i.T.withSingleEntry(e, () => a(t));
        }),
        (e.deleteForward = (t) => {
            i.T.withSingleEntry(e, () => s(t));
        }),
        (e.deleteFragment = (t) => {
            i.T.withSingleEntry(e, () => l(t));
        }),
        (e.insertText = (t) => {
            1 === t.length && (null == h ? void 0 : h.type) === 'remove_text' ? i.T.withMergedEntry(e, () => d(t)) : null != e.selection && r.M8.isExpanded(e.selection) ? i.T.withSingleEntry(e, () => d(t)) : d(t);
        }),
        (e.insertData = (t) => {
            (null == h ? void 0 : h.type) === 'remove_text' ? i.T.withMergedEntry(e, () => c(t)) : i.T.withSingleEntry(e, () => c(t));
        }),
        e
    );
}
function o(e, t, n) {
    let r;
    let { selection: a } = e,
        s = i.T.currentEntry(e),
        o = !0,
        u = !0;
    if (('insert_text' === t.type && 1 === t.text.length ? ((r = 'insert'), (u = !(('' === t.text || t.text.endsWith(' ')) && (null == n ? void 0 : n.type) === 'insert_text' && !('' === n.text && n.text.endsWith(' '))))) : 'split_node' === t.type ? (r = 'insert') : 'remove_text' === t.type && 1 === t.text.length ? (r = 'delete') : ((r = 'other'), (o = !1), (u = !1)), 'set_selection' === t.type && null != s)) {
        s.selection = a;
        return;
    }
    o && l(s, r) ? i.T.insertOrMergeEntry(e, r, u) : i.T.insertEntry(e, r, u);
}
function l(e, t) {
    return !((null == e ? void 0 : e.type) !== t || Date.now() - e.createdAt >= a);
}
function u(e) {
    return {
        type: 'other',
        mergeable: !1,
        createdAt: Date.now(),
        value: r.bN.richValue(e),
        selection: e.selection
    };
}
