r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(53529),
    a = r(887490);
let o = 4000;
function s(e, n) {
    let { apply: r, deleteBackward: o, deleteForward: s, deleteFragment: u, insertData: d, insertText: f, onChange: p } = e;
    function h(r) {
        let a = i.T.currentEntry(e);
        if ((null != a && (a.mergeable = !1), r >= e.history.stack.length)) return;
        e.history.index = r;
        let o = i.T.currentEntry(e);
        n({
            newValue: o.value,
            newSelection: o.selection
        });
    }
    (e.history = {
        index: 0,
        stack: []
    }),
        (e.onChange = () => {
            let { history: n } = e;
            0 === n.stack.length && ((n.stack = [c(e)]), (n.index = 0)), null != e.selection && (i.T.currentEntry(e).selection = e.selection), (m = null), p();
        }),
        (e.undo = () => {
            e.history.index > 0 && h(e.history.index - 1);
        }),
        (e.redo = () => {
            e.history.index < e.history.stack.length - 1 && h(e.history.index + 1);
        });
    let _ = null,
        m = null,
        g = null;
    return (
        (e.apply = (n) => {
            let { history: o } = e;
            r(n);
            let s = a.bN.richValue(e);
            if (s !== g) 0 === o.stack.length && ((o.stack = [c(e)]), (o.index = 0)), i.T.isSaving(e) && (l(e, n, _), (_ = n)), (m = n), (g = s);
        }),
        (e.deleteBackward = (n) => {
            i.T.withSingleEntry(e, () => o(n));
        }),
        (e.deleteForward = (n) => {
            i.T.withSingleEntry(e, () => s(n));
        }),
        (e.deleteFragment = (n) => {
            i.T.withSingleEntry(e, () => u(n));
        }),
        (e.insertText = (n) => {
            1 === n.length && (null == m ? void 0 : m.type) === 'remove_text' ? i.T.withMergedEntry(e, () => f(n)) : null != e.selection && a.M8.isExpanded(e.selection) ? i.T.withSingleEntry(e, () => f(n)) : f(n);
        }),
        (e.insertData = (n) => {
            (null == m ? void 0 : m.type) === 'remove_text' ? i.T.withMergedEntry(e, () => d(n)) : i.T.withSingleEntry(e, () => d(n));
        }),
        e
    );
}
function l(e, n, r) {
    let a;
    let { selection: o } = e,
        s = i.T.currentEntry(e),
        l = !0,
        c = !0;
    if (('insert_text' === n.type && 1 === n.text.length ? ((a = 'insert'), (c = !(('' === n.text || n.text.endsWith(' ')) && (null == r ? void 0 : r.type) === 'insert_text' && !('' === r.text && r.text.endsWith(' '))))) : 'split_node' === n.type ? (a = 'insert') : 'remove_text' === n.type && 1 === n.text.length ? (a = 'delete') : ((a = 'other'), (l = !1), (c = !1)), 'set_selection' === n.type && null != s)) {
        s.selection = o;
        return;
    }
    l && u(s, a) ? i.T.insertOrMergeEntry(e, a, c) : i.T.insertEntry(e, a, c);
}
function u(e, n) {
    return !((null == e ? void 0 : e.type) !== n || Date.now() - e.createdAt >= o) && !0;
}
function c(e) {
    return {
        type: 'other',
        mergeable: !1,
        createdAt: Date.now(),
        value: a.bN.richValue(e),
        selection: e.selection
    };
}
