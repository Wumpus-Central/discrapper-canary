var r = n(384404),
    i = n(808570),
    a = n(924125);
e.exports = function (e, t) {
    var n = t.currentTarget.ownerDocument;
    if (!e.props.preserveSelectionOnBlur && a(n) === n.body) {
        var o = n.defaultView.getSelection(),
            s = e.editor;
        1 === o.rangeCount && i(s, o.anchorNode) && i(s, o.focusNode) && o.removeAllRanges();
    }
    var l = e._latestEditorState,
        c = l.getSelection();
    if (c.getHasFocus()) {
        var u = c.set("hasFocus", !1);
        e.props.onBlur && e.props.onBlur(t), e.update(r.acceptSelection(l, u));
    }
};
