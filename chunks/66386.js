var r = n(78351),
    i = n(102736),
    a = n(933585),
    o = n(665635);
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
        s = o(n, a(e)),
        l = s.selectionState;
    l !== n.getSelection() && ((n = s.needsRecovery ? i.forceSelection(n, l) : i.acceptSelection(n, l)), e.update(n));
};
