var r = n(401647);
e.exports = function (e, t) {
    if (e._latestEditorState.getSelection().isCollapsed()) return void t.preventDefault();
    e.setClipboard(r(e._latestEditorState));
};
