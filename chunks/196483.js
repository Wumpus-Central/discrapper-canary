n.d(t, { Z: () => o });
var r = n(53529),
    i = n(887490);
let a = 4000;
function o(e, t) {
    let { apply: n, deleteBackward: a, deleteForward: o, deleteFragment: l, insertData: u, insertText: d, onChange: f } = e;
    function _(n) {
        let i = r.T.currentEntry(e);
        if ((null != i && (i.mergeable = !1), n >= e.history.stack.length)) return;
        e.history.index = n;
        let a = r.T.currentEntry(e);
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
            0 === t.stack.length && ((t.stack = [c(e)]), (t.index = 0)), null != e.selection && (r.T.currentEntry(e).selection = e.selection), (h = null), f();
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
            let o = i.bN.richValue(e);
            o !== m && (0 === a.stack.length && ((a.stack = [c(e)]), (a.index = 0)), r.T.isSaving(e) && (s(e, t, p), (p = t)), (h = t), (m = o));
        }),
        (e.deleteBackward = (t) => {
            r.T.withSingleEntry(e, () => a(t));
        }),
        (e.deleteForward = (t) => {
            r.T.withSingleEntry(e, () => o(t));
        }),
        (e.deleteFragment = (t) => {
            r.T.withSingleEntry(e, () => l(t));
        }),
        (e.insertText = (t) => {
            1 === t.length && (null == h ? void 0 : h.type) === 'remove_text' ? r.T.withMergedEntry(e, () => d(t)) : null != e.selection && i.M8.isExpanded(e.selection) ? r.T.withSingleEntry(e, () => d(t)) : d(t);
        }),
        (e.insertData = (t) => {
            (null == h ? void 0 : h.type) === 'remove_text' ? r.T.withMergedEntry(e, () => u(t)) : r.T.withSingleEntry(e, () => u(t));
        }),
        e
    );
}
function s(e, t, n) {
    let i,
        { selection: a } = e,
        o = r.T.currentEntry(e),
        s = !0,
        c = !0;
    if (('insert_text' === t.type && 1 === t.text.length ? ((i = 'insert'), (c = !(('' === t.text || t.text.endsWith(' ')) && (null == n ? void 0 : n.type) === 'insert_text' && !('' === n.text && n.text.endsWith(' '))))) : 'split_node' === t.type ? (i = 'insert') : 'remove_text' === t.type && 1 === t.text.length ? (i = 'delete') : ((i = 'other'), (s = !1), (c = !1)), 'set_selection' === t.type && null != o)) {
        o.selection = a;
        return;
    }
    s && l(o, i) ? r.T.insertOrMergeEntry(e, i, c) : r.T.insertEntry(e, i, c);
}
function l(e, t) {
    return !((null == e ? void 0 : e.type) !== t || Date.now() - e.createdAt >= a);
}
function c(e) {
    return {
        type: 'other',
        mergeable: !1,
        createdAt: Date.now(),
        value: i.bN.richValue(e),
        selection: e.selection
    };
}
