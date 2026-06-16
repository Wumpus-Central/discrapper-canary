"use strict";
var n = r(812415);
t.exports = function (t, e) {
    t._latestEditorState.getSelection().isCollapsed() ? e.preventDefault() : t.setClipboard(n(t._latestEditorState));
};
