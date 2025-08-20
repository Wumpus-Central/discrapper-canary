var r = n(198392),
    i = n(309943),
    a = n(102736),
    o = n(273083),
    s = n(234343),
    l = n(99922),
    c = n(720620),
    u = n(894187),
    d = n(510898),
    f = n(467159);
function _(e, t) {
    var n = null,
        r = null,
        i = s(e.currentTarget);
    if ("function" == typeof i.caretRangeFromPoint) {
        var a = i.caretRangeFromPoint(e.x, e.y);
        (n = a.startContainer), (r = a.startOffset);
    } else {
        if (!e.rangeParent) return null;
        (n = e.rangeParent), (r = e.rangeOffset);
    }
    (n = f(n)), (r = f(r));
    var l = f(o(n));
    return c(t, l, r, l, r);
}
function p(e) {
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
        e.exitCurrentMode(), p(e);
    },
    onDrop: function (e, t) {
        var n = new r(t.nativeEvent.dataTransfer),
            i = e._latestEditorState,
            a = _(t.nativeEvent, i);
        if ((t.preventDefault(), (e._dragCount = 0), e.exitCurrentMode(), null != a)) {
            var o = n.getFiles();
            if (o.length > 0) {
                if (e.props.handleDroppedFiles && d(e.props.handleDroppedFiles(a, o))) return;
                l(o, function (t) {
                    t && e.update(m(i, a, t));
                });
                return;
            }
            var s = e._internalDrag ? "internal" : "external";
            (e.props.handleDrop && d(e.props.handleDrop(a, n, s))) ||
                (e._internalDrag ? e.update(h(i, a)) : e.update(m(i, a, n.getText()))),
                p(e);
        }
    },
};
