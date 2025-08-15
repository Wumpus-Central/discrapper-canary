var n = r(401647);
t.exports = function (t, e) {
    if (t._latestEditorState.getSelection().isCollapsed()) return void e.preventDefault();
    t.setClipboard(n(t._latestEditorState));
};
