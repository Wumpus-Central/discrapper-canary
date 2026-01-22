var r = n(747105),
    i = n(869639),
    a = n(575641),
    s = n(644485);
e.exports = function (e) {
    if (e._blockSelectEvents || e._latestEditorState !== e.props.editorState) {
        if (e._blockSelectEvents) {
            var t = e.props.editorState.getSelection();
            r.logBlockedSelectionEvent({
                anonymizedDom: "N/A",
                extraParams: JSON.stringify({ stacktrace: Error().stack }),
                selectionState: JSON.stringify(t.toJS()),
            });
        }
        return;
    }
    var n = e.props.editorState,
        o = s(n, a(e)),
        l = o.selectionState;
    l !== n.getSelection() && ((n = o.needsRecovery ? i.forceSelection(n, l) : i.acceptSelection(n, l)), e.update(n));
};
