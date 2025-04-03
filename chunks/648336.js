var n = r(56797),
    i = r(133092),
    o = r(34521),
    a = r(148180);
t.exports = function (t) {
    if (t._blockSelectEvents || t._latestEditorState !== t.props.editorState) {
        if (t._blockSelectEvents) {
            var e = t.props.editorState.getSelection();
            n.logBlockedSelectionEvent({
                anonymizedDom: 'N/A',
                extraParams: JSON.stringify({ stacktrace: Error().stack }),
                selectionState: JSON.stringify(e.toJS())
            });
        }
        return;
    }
    var r = t.props.editorState,
        u = a(r, o(t)),
        s = u.selectionState;
    s !== r.getSelection() && ((r = u.needsRecovery ? i.forceSelection(r, s) : i.acceptSelection(r, s)), t.update(r));
};
