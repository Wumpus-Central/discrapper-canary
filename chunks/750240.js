"use strict";
var n = r(747105),
    i = r(869639),
    o = r(575641),
    a = r(644485);
t.exports = function (t) {
    if (t._blockSelectEvents || t._latestEditorState !== t.props.editorState) {
        if (t._blockSelectEvents) {
            var e = t.props.editorState.getSelection();
            n.logBlockedSelectionEvent({
                anonymizedDom: "N/A",
                extraParams: JSON.stringify({ stacktrace: Error().stack }),
                selectionState: JSON.stringify(e.toJS()),
            });
        }
        return;
    }
    var r = t.props.editorState,
        s = a(r, o(t)),
        u = s.selectionState;
    u !== r.getSelection() && ((r = s.needsRecovery ? i.forceSelection(r, u) : i.acceptSelection(r, u)), t.update(r));
};
