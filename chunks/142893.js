var r = n(458545);
e.exports = function (e, t) {
    if (e._latestEditorState.getSelection().isCollapsed()) return void t.preventDefault();
    e.setClipboard(r(e._latestEditorState));
};
