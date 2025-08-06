var r = n(172367),
    i = n(808570),
    o = n(924125);
e.exports = function (e, t) {
    var n = t.currentTarget.ownerDocument;
    if (!e.props.preserveSelectionOnBlur && o(n) === n.body) {
        var a = n.defaultView.getSelection(),
            s = e.editor;
        1 === a.rangeCount && i(s, a.anchorNode) && i(s, a.focusNode) && a.removeAllRanges();
    }
    var l = e._latestEditorState,
        c = l.getSelection();
    if (c.getHasFocus()) {
        var u = c.set("hasFocus", !1);
        e.props.onBlur && e.props.onBlur(t), e.update(r.acceptSelection(l, u));
    }
};
