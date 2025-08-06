var r = n(172367),
    i = n(169774);
e.exports = function (e, t) {
    var n = e._latestEditorState,
        o = n.getSelection();
    if (!o.getHasFocus()) {
        var a = o.set("hasFocus", !0);
        e.props.onFocus && e.props.onFocus(t),
            i.isBrowser("Chrome < 60.0.3081.0") ? e.update(r.forceSelection(n, a)) : e.update(r.acceptSelection(n, a));
    }
};
