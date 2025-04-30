var n = r(198392),
    i = r(166763),
    o = r(133092),
    a = r(924970),
    u = r(786064),
    s = r(765251),
    c = r(824760),
    l = r(86426),
    f = r(638242),
    p = r(467159);
function h(t) {
    t._internalDrag = !1;
    var e = t.editorContainer;
    if (e) {
        var r = new MouseEvent('mouseup', {
            view: l(e),
            bubbles: !0,
            cancelable: !0
        });
        e.dispatchEvent(r);
    }
}
function d(t, e, r) {
    var n = i.insertText(t.getCurrentContent(), e, r, t.getCurrentInlineStyle());
    return o.push(t, n, 'insert-fragment');
}
t.exports = {
    onDragEnd: function (t) {
        t.exitCurrentMode(), h(t);
    },
    onDrop: function (t, e) {
        var r = new n(e.nativeEvent.dataTransfer),
            l = t._latestEditorState,
            g = (function (t, e) {
                var r = null,
                    n = null,
                    i = u(t.currentTarget);
                if ('function' == typeof i.caretRangeFromPoint) {
                    var o = i.caretRangeFromPoint(t.x, t.y);
                    (r = o.startContainer), (n = o.startOffset);
                } else {
                    if (!t.rangeParent) return null;
                    (r = t.rangeParent), (n = t.rangeOffset);
                }
                (r = p(r)), (n = p(n));
                var s = p(a(r));
                return c(e, s, n, s, n);
            })(e.nativeEvent, l);
        if ((e.preventDefault(), (t._dragCount = 0), t.exitCurrentMode(), null != g)) {
            var y,
                v,
                m,
                _ = r.getFiles();
            if (_.length > 0) {
                if (t.props.handleDroppedFiles && f(t.props.handleDroppedFiles(g, _))) return;
                s(_, function (e) {
                    e && t.update(d(l, g, e));
                });
                return;
            }
            var b = t._internalDrag ? 'internal' : 'external';
            (t.props.handleDrop && f(t.props.handleDrop(g, r, b))) || (t._internalDrag ? t.update(((y = l), (v = g), (m = i.moveText(y.getCurrentContent(), y.getSelection(), v)), o.push(y, m, 'insert-fragment'))) : t.update(d(l, g, r.getText()))), h(t);
        }
    }
};
