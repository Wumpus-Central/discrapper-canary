var r = n(198392),
    i = n(621796),
    o = n(172367),
    a = n(630685),
    s = n(961271),
    l = n(992456),
    c = n(534978),
    u = n(319630),
    d = n(352582),
    f = n(467159);
function _(e, t) {
    var n = null,
        r = null,
        i = s(e.currentTarget);
    if ("function" == typeof i.caretRangeFromPoint) {
        var o = i.caretRangeFromPoint(e.x, e.y);
        (n = o.startContainer), (r = o.startOffset);
    } else {
        if (!e.rangeParent) return null;
        (n = e.rangeParent), (r = e.rangeOffset);
    }
    (n = f(n)), (r = f(r));
    var l = f(a(n));
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
    return o.push(e, n, "insert-fragment");
}
function m(e, t, n) {
    var r = i.insertText(e.getCurrentContent(), t, n, e.getCurrentInlineStyle());
    return o.push(e, r, "insert-fragment");
}
e.exports = {
    onDragEnd: function (e) {
        e.exitCurrentMode(), p(e);
    },
    onDrop: function (e, t) {
        var n = new r(t.nativeEvent.dataTransfer),
            i = e._latestEditorState,
            o = _(t.nativeEvent, i);
        if ((t.preventDefault(), (e._dragCount = 0), e.exitCurrentMode(), null != o)) {
            var a = n.getFiles();
            if (a.length > 0) {
                if (e.props.handleDroppedFiles && d(e.props.handleDroppedFiles(o, a))) return;
                l(a, function (t) {
                    t && e.update(m(i, o, t));
                });
                return;
            }
            var s = e._internalDrag ? "internal" : "external";
            (e.props.handleDrop && d(e.props.handleDrop(o, n, s))) ||
                (e._internalDrag ? e.update(h(i, o)) : e.update(m(i, o, n.getText()))),
                p(e);
        }
    },
};
