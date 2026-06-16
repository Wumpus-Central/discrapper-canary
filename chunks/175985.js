"use strict";
var n = r(869639),
    i = r(750253),
    o = r(676286);
t.exports = function (t, e) {
    var r = e.currentTarget.ownerDocument;
    if (!t.props.preserveSelectionOnBlur && o(r) === r.body) {
        var a = r.defaultView.getSelection(),
            s = t.editor;
        1 === a.rangeCount && i(s, a.anchorNode) && i(s, a.focusNode) && a.removeAllRanges();
    }
    var u = t._latestEditorState,
        c = u.getSelection();
    if (c.getHasFocus()) {
        var l = c.set("hasFocus", !1);
        t.props.onBlur && t.props.onBlur(e), t.update(n.acceptSelection(u, l));
    }
};
