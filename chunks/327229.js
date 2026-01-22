var r = n(743595),
    i = n(954055),
    a = n(869639),
    s = n(587321),
    o = n(505122),
    l = n(809206),
    c = n(692001),
    u = n(882270),
    d = n(4323),
    f = n(670200);
function p(e, t) {
    var n = null,
        r = null,
        i = o(e.currentTarget);
    if ("function" == typeof i.caretRangeFromPoint) {
        var a = i.caretRangeFromPoint(e.x, e.y);
        (n = a.startContainer), (r = a.startOffset);
    } else {
        if (!e.rangeParent) return null;
        (n = e.rangeParent), (r = e.rangeOffset);
    }
    (n = f(n)), (r = f(r));
    var l = f(s(n));
    return c(t, l, r, l, r);
}
function _(e) {
    e._internalDrag = !1;
    var t = e.editorContainer;
    if (t) {
        var n = new MouseEvent("mouseup", {
            view: u(t),
            bubbles: !0,
            cancelable: !0,
        });
        t.dispatchEvent(n);
    }
}
function h(e, t) {
    var n = i.moveText(e.getCurrentContent(), e.getSelection(), t);
    return a.push(e, n, "insert-fragment");
}
function m(e, t, n) {
    var r = i.insertText(e.getCurrentContent(), t, n, e.getCurrentInlineStyle());
    return a.push(e, r, "insert-fragment");
}
e.exports = {
    onDragEnd: function (e) {
        e.exitCurrentMode(), _(e);
    },
    onDrop: function (e, t) {
        var n = new r(t.nativeEvent.dataTransfer),
            i = e._latestEditorState,
            a = p(t.nativeEvent, i);
        if ((t.preventDefault(), (e._dragCount = 0), e.exitCurrentMode(), null != a)) {
            var s = n.getFiles();
            if (s.length > 0) {
                if (e.props.handleDroppedFiles && d(e.props.handleDroppedFiles(a, s))) return;
                l(s, function (t) {
                    t && e.update(m(i, a, t));
                });
                return;
            }
            var o = e._internalDrag ? "internal" : "external";
            (e.props.handleDrop && d(e.props.handleDrop(a, n, o))) ||
                (e._internalDrag ? e.update(h(i, a)) : e.update(m(i, a, n.getText()))),
                _(e);
        }
    },
};
