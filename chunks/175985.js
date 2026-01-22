var r = n(869639),
    i = n(750253),
    a = n(676286);
e.exports = function (e, t) {
    var n = t.currentTarget.ownerDocument;
    if (!e.props.preserveSelectionOnBlur && a(n) === n.body) {
        var s = n.defaultView.getSelection(),
            o = e.editor;
        1 === s.rangeCount && i(o, s.anchorNode) && i(o, s.focusNode) && s.removeAllRanges();
    }
    var l = e._latestEditorState,
        c = l.getSelection();
    if (c.getHasFocus()) {
        var u = c.set("hasFocus", !1);
        e.props.onBlur && e.props.onBlur(t), e.update(r.acceptSelection(l, u));
    }
};
