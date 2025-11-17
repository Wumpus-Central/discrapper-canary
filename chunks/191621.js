var r = n(384404),
    i = n(169774);
e.exports = function (e, t) {
    var n = e._latestEditorState,
        a = n.getSelection();
    if (!a.getHasFocus()) {
        var o = a.set("hasFocus", !0);
        e.props.onFocus && e.props.onFocus(t),
            i.isBrowser("Chrome < 60.0.3081.0") ? e.update(r.forceSelection(n, o)) : e.update(r.acceptSelection(n, o));
    }
};
